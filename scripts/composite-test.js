const { exec, spawn } = require('child_process');
const { promisify } = require('util');
const execute = promisify(exec);

async function executeCommand(command, execOptoins = {}, retryCount = 1) {
  try {
    const execCommand = command.join(' ');
    const { stdin, stdout } = await execute(execCommand, execOptoins);
    if (stdin) console.log(stdin);
    if (stdout) console.log(stdout);
  } catch (error) {
    if (retryCount > 0) {
      executeCommand(command, execOptoins, --retryCount);
    } else {
      throw error;
    }
  }
}

async function executeLongProcessCommand(command, execOptions = {}, retryCount = 1) {
  try {
    const firstCommand = command[0];
    const options = command.slice(1);
    await promisifiedSpawn(firstCommand, options, execOptions);
  } catch (error) {
    if (retryCount > 0) {
      executeLongProcessCommand(command, execOptions, --retryCount);
    } else {
      throw error;
    }
  }
}

function promisifiedSpawn(command, options, execOptions) {
  return new Promise((resolve, reject) => {
    const subProcess = spawn(command, options, execOptions);
    subProcess.stdout.on('data', (data) => {
      process.stdout.write(data.toString());
    });
    subProcess.stderr.on('data', (data) => {
      process.stderr.write(data.toString());
    });
    subProcess.on('error', (err) => {
      console.error(err);
    });
    subProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(`${command} exited with code: ${code}`);
      }
    });
  });
}

async function run() {
  const EXEC = {
    'execute': executeCommand,
    'executeLongProcess': executeLongProcessCommand,
  }
  const scripts = [
    { execute: 'execute', command: ['npm', 'run', 'lint'] , retryCount: 1},
    { execute: 'execute', command: ['npm', 'run', 'unit'] },
    { execute: 'execute', command: ['npm', 'run', 'buildertest'] },
    { execute: 'execute', command: ['npm', 'run', 'tstest'] },
    { execute: 'execute', command: ['npm', 'run', 'region-check'] },
    { execute: 'execute', command: ['npm', 'run', 'translate-api-test'] },
    { execute: 'execute', command: ['npm', 'run', 'typings-generator-test'] },
    { execute: 'executeLongProcess', command: ['npm', 'run', 'browsertest'] },
    { execute: 'executeLongProcess', command: ['npm', 'run', 'react-native-test'] },
  ];
  for (const { execute, command, execOptions, retryCount } of scripts) {
    await EXEC[execute](command, execOptions, retryCount);
  }
}

run();
