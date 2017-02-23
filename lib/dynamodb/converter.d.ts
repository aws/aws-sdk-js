import DynamoDB = require('../../clients/dynamodb');

export class Converter {
    static input(data: any, options?: Converter.ConverterOptions): DynamoDB.AttributeValue;

    static output(data: DynamoDB.AttributeValue): any;
}

export namespace Converter {
    export type ConverterOptions = DynamoDB.DocumentClient.ConverterOptions;
}
