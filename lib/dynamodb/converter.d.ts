import DynamoDB = require('../../clients/dynamodb');

export class Converter {
    static input(data: any, options?: DynamoDB.DocumentClient.ConverterOptions): DynamoDB.AttributeValue;

    static output(data: DynamoDB.AttributeValue): any;
}

export namespace Converter {}
