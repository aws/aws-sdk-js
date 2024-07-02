const fs = require('fs');
const path = require('path');
const allowlist = require('./allowlist').allowlist;

function checkFile(location) {
    try {
        const code = fs.readFileSync(location, 'utf8');
        const lines = code.split('\n');
        const regionMatches = [];

        lines.forEach((line, idx) => {
            const matches = line.match(/(us|eu|ap|sa|ca)-\w+-\d+/g);
            if (matches) {
                regionMatches.push({
                    file: location,
                    line: idx,
                    code: line
                });
            }
        });

        return regionMatches;
    } catch (error) {
        console.error(`Error reading file ${location}: ${error}`);
        return [];
    }
}

async function recursiveGetFilesIn(directory, extensions) {
    try {
        const filenames = [];

        const keys = await fs.promises.readdir(directory);

        for (const key of keys) {
            const keyPath = path.join(directory, key);
            const stats = await fs.promises.stat(keyPath);
            if (stats.isDirectory()) {
                filenames.push(...await recursiveGetFilesIn(keyPath, extensions));
            } else if (extensions.includes(path.extname(keyPath))) {
                filenames.push(keyPath);
            }
        }

        return filenames;
    } catch (error) {
        console.error(`Error reading directory ${directory}: ${error}`);
        return [];
    }
}

function checkForRegions() {
    const libPath = path.join(__dirname, '..', '..', 'lib');
    recursiveGetFilesIn(libPath, ['.js'])
        .then(filePaths => {
            const regionMatches = [];
            const warnings = [];

            for (const filePath of filePaths) {
                regionMatches.push(...checkFile(filePath));
            }

            for (const match of regionMatches) {
                const normalizedPath = match.file.substring(libPath.length);
                if (allowlist[normalizedPath] && allowlist[normalizedPath].includes(match.line)) {
                    continue;
                }
                warnings.push(`File: ${normalizedPath}\tLine ${match.line}:\t${match.code.trim()}`);
            }

            if (warnings.length) {
                console.error('Hard-coded regions detected. This should only be done if absolutely certain!');
                warnings.forEach(warning => {
                    console.error(warning);
                });
                process.exit(1);
            }
        })
        .catch(error => {
            console.error(`Error checking for regions: ${error}`);
            process.exit(1);
        });
}

checkForRegions();
