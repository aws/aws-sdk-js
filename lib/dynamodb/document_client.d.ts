import DynamoDB = require('../../clients/dynamodb');
import * as DCInterfaces from './document_client_interfaces';
import * as stream from 'stream';
import {Request} from '../request';
import {AWSError} from '../error';
interface File {}
interface Blob {}
/**
 * The document client simplifies working with items in Amazon DynamoDB
 * by abstracting away the notion of attribute values. This abstraction
 * annotates native JavaScript types supplied as input parameters, as well
 * as converts annotated response data to native JavaScript types.
 */
export class DocumentClient {
    /**
     * Creates a DynamoDB document client with a set of configuration options.
     */
    constructor(options?: DocumentClientOptions)

    /**
     * Creates a set of elements inferring the type of set from the type of the first element. Amazon DynamoDB currently supports the number sets, string sets, and binary sets. For more information about DynamoDB data types see the documentation on the Amazon DynamoDB Data Model.
     */
    createSet(list: number[]|string[]|binaryType[], options: CreateSetOptions): void
    /**
     * Returns the attributes of one or more items from one or more tables by delegating to AWS.DynamoDB.batchGetItem().
     */
    batchGet(params: DCInterfaces.BatchGetItemInput, callback?: (err: AWSError, data: DCInterfaces.BatchGetItemOutput) => void): Request<DCInterfaces.BatchGetItemOutput, AWSError>;
    /**
     * Puts or deletes multiple items in one or more tables by delegating to AWS.DynamoDB.batchWriteItem().
     */
    batchWrite(params: DCInterfaces.BatchWriteItemInput, callback?: (err: AWSError, data: DCInterfaces.BatchWriteItemOutput) => void): Request<DCInterfaces.BatchWriteItemOutput, AWSError>;
    /**
     * Deletes a single item in a table by primary key by delegating to AWS.DynamoDB.deleteItem().
     */
    delete(params: DCInterfaces.DeleteItemInput, callback?: (err: AWSError, data: DCInterfaces.DeleteItemOutput) => void): Request<DCInterfaces.DeleteItemOutput, AWSError>;
    /**
     * Returns a set of attributes for the item with the given primary key by delegating to AWS.DynamoDB.getItem().
     */
    get(params: DCInterfaces.GetItemInput, callback?: (err: AWSError, data: DCInterfaces.GetItemOutput) => void): Request<DCInterfaces.GetItemOutput, AWSError>;
    /**
     * Creates a new item, or replaces an old item with a new item by delegating to AWS.DynamoDB.putItem().
     */
    put(params: DCInterfaces.PutItemInput, callback?: (err: AWSError, data: DCInterfaces.PutItemOutput) => void): Request<DCInterfaces.PutItemOutput, AWSError>;
    /**
     * Directly access items from a table by primary key or a secondary index.
     */
    query(params: DCInterfaces.QueryInput, callback?: (err: AWSError, data: DCInterfaces.QueryOutput) => void): Request<DCInterfaces.QueryOutput, AWSError>;
    /**
     * Returns one or more items and item attributes by accessing every item in a table or a secondary index.
     */
    scan(params: DCInterfaces.ScanInput, callback?: (err: AWSError, data: DCInterfaces.ScanOutput) => void): Request<DCInterfaces.ScanOutput, AWSError>;
    /**
     * Edits an existing item's attributes, or adds a new item to the table if it does not already exist by delegating to AWS.DynamoDB.updateItem().
     */
    update(params: DCInterfaces.UpdateItemInput, callback?: (err: AWSError, data: DCInterfaces.UpdateItemOutput) => void): Request<DCInterfaces.UpdateItemOutput, AWSError>;
}

interface DocumentClientOptions {
    /**
     * An optional map of parameters to bind to every request sent by this service object. 
     */
    params?: {[key: string]: any}
    /**
     * An optional pre-configured instance of the AWS.DynamoDB service object to use for requests. The object may bound parameters used by the document client. 
     */
    service?: DynamoDB
}

interface CreateSetOptions {
    /**
     * Set to true if you want to validate the type of each element in the set. Defaults to false.
     */
    validate?: boolean
}
type binaryType = Buffer|File|Blob|ArrayBuffer|DataView|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|stream.Stream;