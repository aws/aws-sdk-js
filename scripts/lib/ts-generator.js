var fs = require('fs');
var path = require('path');

var CUSTOM_CONFIG_ENUMS = {
    DUALSTACK: {
        FILE_NAME: 'config_use_dualstack',
        INTERFACE: 'UseDualstackConfigOptions'
    }
};

function TSGenerator(options) {
    this._sdkRootDir = options.SdkRootDirectory || process.cwd();
    this._apiRootDir = path.join(this._sdkRootDir, 'apis');
    this._metadataPath = path.join(this._apiRootDir, 'metadata.json');
    this._clientsDir = path.join(this._sdkRootDir, 'clients');
    this.metadata = null;
    this.typings = {};
    this.fillApiModelFileNames(this._apiRootDir);
}

/**
 * Loads the AWS SDK metadata.json file.
 */
TSGenerator.prototype.loadMetadata = function loadMetadata() {
    var metadataFile = fs.readFileSync(this._metadataPath);
    this.metadata = JSON.parse(metadataFile);
    return this.metadata;
};

/**
 * Modifies metadata to include api model filenames.
 */
TSGenerator.prototype.fillApiModelFileNames = function fillApiModelFileNames(apisPath) {
    var modelPaths = fs.readdirSync(apisPath);
    if (!this.metadata) {
        this.loadMetadata();
    }
    var metadata = this.metadata;

    // sort paths so latest versions appear first
    modelPaths = modelPaths.sort(function sort(a, b) {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });

    // Only get latest version of models
    var foundModels = Object.create(null);
    modelPaths.forEach(function(modelFileName) {
        var match = modelFileName.match(/^(.+)(-[\d]{4}-[\d]{2}-[\d]{2})\.normal\.json$/i);
        if (match) {
            var model = match[1];
            if (!foundModels[model]) {
                foundModels[model] = modelFileName;
            }
        }
    });

    // now update the metadata
    var keys = Object.keys(metadata);
    keys.forEach(function(key) {
        var modelName = metadata[key].prefix || key;
        metadata[key].api_path = foundModels[modelName];
        // find waiters file
        var baseName = foundModels[modelName].split('.')[0];
        if (modelPaths.indexOf(baseName + '.waiters2.json') >= 0) {
            metadata[key].waiters_path = baseName + '.waiters2.json';
        }
    });
};

/**
 * Generates the file containing DocumentClient interfaces.
 */
TSGenerator.prototype.generateDocumentClientInterfaces = function generateDocumentClientInterfaces() {
    var self = this;
    // get the dynamodb model
    var dynamodbModel = this.loadServiceApi('dynamodb');
    var code = '';
    // include node reference
    code += '///<reference types="node" />\n';
    // generate shapes
    var modelShapes = dynamodbModel.shapes;
    // iterate over each shape
    var shapeKeys = Object.keys(modelShapes);
    shapeKeys.forEach(function (shapeKey) {
        var modelShape = modelShapes[shapeKey];
        // ignore exceptions
        if (modelShape.exception) {
            return;
        }
        // overwrite AttributeValue
        if (shapeKey === 'AttributeValue') {
            code += self.generateDocString('A JavaScript object or native type.');
            code += 'export type ' + shapeKey + ' = any;\n';
            return;
        }
        code += self.generateTypingsFromShape(shapeKey, modelShape);
    });

    // write file:
    this.writeTypingsFile('document_client_interfaces', path.join(this._sdkRootDir, 'lib', 'dynamodb'), code);
};

/**
 * Returns a service model based on the serviceIdentifier.
 */
TSGenerator.prototype.loadServiceApi = function loadServiceApi(serviceIdentifier) {
    // first, find the correct identifier
    var metadata = this.metadata;
    var serviceFilePath = path.join(this._apiRootDir, metadata[serviceIdentifier].api_path);
    var serviceModelFile = fs.readFileSync(serviceFilePath);
    var serviceModel = JSON.parse(serviceModelFile);
    // load waiters file if it exists
    var waiterFilePath;
    if (metadata[serviceIdentifier].waiters_path) {
        waiterFilePath = path.join(this._apiRootDir, metadata[serviceIdentifier].waiters_path);
        var waiterModelFile = fs.readFileSync(waiterFilePath);
        var waiterModel = JSON.parse(waiterModelFile);
        serviceModel.waiters = waiterModel.waiters;
    }

    return serviceModel;
};

/**
 * Determines if a member is required by checking for it in a list.
 */
TSGenerator.prototype.checkRequired = function checkRequired(list, member) {
    if (list.indexOf(member)) {
        return true;
    }
    return false;
};

/**
 * Generates whitespace based on the count.
 */
TSGenerator.prototype.tabs = function tabs(count) {
    var code = '';
    for (var i = 0; i < count; i++) {
        code += '  ';
    }
    return code;
};

/**
 * Transforms documentation string to a more readable format.
 */
TSGenerator.prototype.transformDocumentation = function transformDocumentation(documentation) {
    if (!documentation) {
        return '';
    }
    documentation = documentation.replace(/<(?:.|\n)*?>/gm, '');
    documentation = documentation.replace(/\*\//g, '*');
    return documentation;
};

/**
 * Returns a doc string based on the supplied documentation.
 * Also tabs the doc string if a count is provided.
 */
TSGenerator.prototype.generateDocString = function generateDocString(documentation, tabCount) {
    tabCount = tabCount || 0;
    var code = '';
    code += this.tabs(tabCount) + '/**\n';
    code += this.tabs(tabCount) + ' * ' + this.transformDocumentation(documentation) + '\n';
    code += this.tabs(tabCount) + ' */\n';
    return code;
};

/**
 * Returns an array of custom configuration options based on a service identiffier.
 * Custom configuration options are determined by checking the metadata.json file.
 */
TSGenerator.prototype.generateCustomConfigFromMetadata = function generateCustomConfigFromMetadata(serviceIdentifier) {
    // some services have additional configuration options that are defined in the metadata.json file
    // i.e. dualstackAvailable = useDualstack
    // create reference to custom options
    var customConfigurations = [];
    var serviceMetadata = this.metadata[serviceIdentifier];
    // loop through metadata members
    for (var memberName in serviceMetadata) {
        if (!serviceMetadata.hasOwnProperty(memberName)) {
            continue;
        }
        var memberValue = serviceMetadata[memberName];
        // check configs
        switch (memberName) {
            case 'dualstackAvailable':
                customConfigurations.push(CUSTOM_CONFIG_ENUMS.DUALSTACK);
                break;
        }
    }

    return customConfigurations;
};

/**
 * Generates a type or interface based on the shape.
 */
TSGenerator.prototype.generateTypingsFromShape = function generateTypingsFromShape(shapeKey, shape, tabCount) {
    // some shapes shouldn't be generated if they are javascript primitives
    if (['string', 'boolean', 'number', 'Date', 'Blob'].indexOf(shapeKey) >= 0) {
        return '';
    }
    var self = this;
    var code = '';
    tabCount = tabCount || 0;
    var tabs = this.tabs;
    var type = shape.type;
    if (type === 'structure') {
        code += tabs(tabCount) + 'export interface ' + shapeKey + ' {\n';
        var members = shape.members;
        // cycle through members
        var memberKeys = Object.keys(members);
        memberKeys.forEach(function(memberKey) {
            // docs
            var member = members[memberKey];
            if (member.documentation) {
                code += self.generateDocString(member.documentation, tabCount + 1);
            }
            var required = self.checkRequired(shape.required || [], memberKey) ? '?' : '';
            code += tabs(tabCount + 1) + memberKey + required + ': ' + member.shape + ';\n';
        });
        code += tabs(tabCount) + '}\n';
    } else if (type === 'list') {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = ' + shape.member.shape + '[];\n';
    } else if (type === 'map') {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = {[key: string]: ' + shape.value.shape + '};\n';
    } else if (type === 'string' || type === 'character') {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = string;\n';
    } else if (['double', 'long', 'short', 'biginteger', 'bigdecimal', 'integer', 'float'].indexOf(type) >= 0) {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = number;\n';
    } else if (type === 'timestamp') {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = Date;\n';
    } else if (type === 'boolean') {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = boolean;\n';
    } else if (type === 'blob' || type === 'binary') {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = Buffer|Uint8Array|Blob|string;\n';
    }
    return code;
};

/**
 * Generates a class method type for an operation.
 */
TSGenerator.prototype.generateTypingsFromOperations = function generateTypingsFromOperations(className, operation, tabCount) {
    var code = '';
    tabCount = tabCount || 0;
    var tabs = this.tabs;

    var input = operation.input;
    var output = operation.output;
    var operationName = operation.name.charAt(0).toLowerCase() + operation.name.substring(1);

    var inputShape = input ? className + '.' + input.shape : '{}';
    var outputShape = output ? className + '.' + output.shape : '{}';

    code += this.generateDocString(operation.documentation, tabCount);
    code += tabs(tabCount) + operationName + '(params: ' + inputShape + ', callback?: (err: AWSError, data: ' + outputShape + ') => void): Request<' + outputShape + ', AWSError>;\n';
    code += this.generateDocString(operation.documentation, tabCount);
    code += tabs(tabCount) + operationName + '(callback?: (err: AWSError, data: ' + outputShape + ') => void): Request<' + outputShape + ', AWSError>;\n';

    return code;
};

/**
 * Generates class method types for a waiter.
 */
TSGenerator.prototype.generateTypingsFromWaiters = function generateTypingsFromWaiters(className, waiterState, waiter, underlyingOperation, tabCount) {
    var code = '';
    tabCount = tabCount || 0;
    var operationName = waiter.operation.charAt(0).toLowerCase() + waiter.operation.substring(1);

    var docString = 'Waits for the ' + waiterState + ' state by periodically calling the underlying ' + className + '.' + operationName + 'operation every ' + waiter.delay + ' seconds (at most ' + waiter.maxAttempts + ' times).';
    if (waiter.description) {
        docString += ' ' + waiter.description;
    }

    // get input and output
    var inputShape = '{}';
    var outputShape = '{}';
    if (underlyingOperation.input) {
        inputShape = className + '.' + underlyingOperation.input.shape;
    }
    if (underlyingOperation.output) {
        outputShape = className + '.' + underlyingOperation.output.shape;
    }

    code += this.generateDocString(docString, tabCount);
    code += this.tabs(tabCount) + 'waitFor(state: "' + waiterState + '", params: ' + inputShape + ', callback?: (err: AWSError, data: ' + outputShape + ') => void): Request<' + outputShape + ', AWSError>;\n';
    code += this.generateDocString(docString, tabCount);
    code += this.tabs(tabCount) + 'waitFor(state: "' + waiterState + '", callback?: (err: AWSError, data: ' + outputShape + ') => void): Request<' + outputShape + ', AWSError>;\n';

    return code;
};

/**
 * Returns whether a service has customizations to include.
 */
TSGenerator.prototype.includeCustomService = function includeCustomService(serviceIdentifier) {
    // check services directory
    var servicesDir = path.join(this._sdkRootDir, 'lib', 'services');
    var fileNames = fs.readdirSync(servicesDir);
    fileNames = fileNames.filter(function(fileName) {
        return fileName === serviceIdentifier + '.d.ts';
    });
    return !!fileNames.length;
};

/**
 * Generates the typings for a service based on the serviceIdentifier.
 */
TSGenerator.prototype.processServiceModel = function processServiceModel(serviceIdentifier) {
    var model = this.loadServiceApi(serviceIdentifier);
    var self = this;
    var code = '';
    var className = this.metadata[serviceIdentifier].name;

    // generate imports
    code += 'import {Request} from \'../lib/request\';\n';
    code += 'import {Response} from \'../lib/response\';\n';
    code += 'import {AWSError} from \'../lib/error\';\n';
    var hasCustomizations = this.includeCustomService(serviceIdentifier);
    var parentClass = hasCustomizations ? className + 'Customizations' : 'Service';
    if (hasCustomizations) {
        code += 'import {' + parentClass + '} from \'../lib/services/' + serviceIdentifier + '\';\n';
    } else {
        code += 'import {'+ parentClass + '} from \'../lib/service\';\n';
    }
    // get any custom config options
    var customConfig = this.generateCustomConfigFromMetadata(serviceIdentifier);
    var hasCustomConfig = !!customConfig.length;
    if (hasCustomConfig) {
        // generate import statements and custom config type
        var customConfigTypes = ['ServiceConfigurationOptions'];
        code += 'import {ServiceConfigurationOptions} from \'../lib/service\';\n';
        code += 'import {Config} from \'../lib/config\';\n';
        customConfig.forEach(function(config) {
            code += 'import {' + config.INTERFACE + '} from \'../lib/' + config.FILE_NAME + '\';\n';
            customConfigTypes.push(config.INTERFACE);
        });
    }

    // generate methods
    var modelOperations = model.operations;
    var operationKeys = Object.keys(modelOperations);
    code += 'declare class ' + className + ' extends ' + parentClass + ' {\n';
    // create constructor if service has custom config
    if (hasCustomConfig) {
        code += this.generateDocString('Constructs a service object. This object has one method for each API operation.', 1);
        code += this.tabs(1) + 'constructor(options?: ' + customConfigTypes.join(' & ') + ')\n';
        code += this.tabs(1) + 'config: Config & ' + customConfigTypes.join(' & ') + ';\n';
    }

    operationKeys.forEach(function (operationKey) {
        code += self.generateTypingsFromOperations(className, modelOperations[operationKey], 1);
    });

    // generate waitFor methods
    var waiters = model.waiters || Object.create(null);
    var waiterKeys = Object.keys(waiters);
    waiterKeys.forEach(function (waitersKey) {
        var waiter = waiters[waitersKey];
        var operation = modelOperations[waiter.operation];
        code += self.generateTypingsFromWaiters(className, waitersKey, waiter, operation, 1);
    });

    code += '}\n';

    // shapes should map to interfaces
    var modelShapes = model.shapes;
    // iterate over each shape
    var shapeKeys = Object.keys(modelShapes);
    code += 'declare namespace ' + className + ' {\n'
    shapeKeys.forEach(function (shapeKey) {
        var modelShape = modelShapes[shapeKey];
        // ignore exceptions
        if (modelShape.exception) {
            return;
        }
        code += self.generateTypingsFromShape(shapeKey, modelShape, 1);
    });
    code += '}\n';
    code += 'export = ' + className + ';\n';
    return code;
};

/**
 * Write Typings file to the specified directory.
 */
TSGenerator.prototype.writeTypingsFile = function writeTypingsFile(name, directory, code) {
    fs.writeFileSync(path.join(directory, name + '.d.ts'), code);
};

/**
 * Create the typescript definition files for every service.
 */
TSGenerator.prototype.generateAllClientTypings = function generateAllClientTypings() {
    var self = this;
    var metadata = this.metadata;
    // Iterate over every service
    var serviceIdentifiers = Object.keys(metadata);
    serviceIdentifiers.forEach(function(serviceIdentifier) {
        var code = self.processServiceModel(serviceIdentifier);
        self.writeTypingsFile(serviceIdentifier, self._clientsDir, code);
    });
};

/**
 * Create the typescript definition files for the all and browser_default exports.
 */
TSGenerator.prototype.generateGroupedClients = function generateGroupedClients() {
    var clientsDir = this._clientsDir;
    var metadata = this.metadata;
    var allCode = '';
    var browserCode = '';
    // Iterate over every service
    var serviceIdentifiers = Object.keys(metadata);
    serviceIdentifiers.forEach(function(serviceIdentifier) {
        var className = metadata[serviceIdentifier].name;
        var code = 'export import ' + className + ' = require(\'./' + serviceIdentifier + '\');\n';
        allCode += code;
        if (metadata[serviceIdentifier].cors) {
            browserCode += code;
        }
    });
    this.writeTypingsFile('all', this._clientsDir, allCode);
    this.writeTypingsFile('browser_default', this._clientsDir, browserCode);
};

module.exports = TSGenerator;