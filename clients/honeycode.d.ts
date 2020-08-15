import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Honeycode extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Honeycode.Types.ClientConfiguration)
  config: Config & Honeycode.Types.ClientConfiguration;
  /**
   *  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 
   */
  getScreenData(params: Honeycode.Types.GetScreenDataRequest, callback?: (err: AWSError, data: Honeycode.Types.GetScreenDataResult) => void): Request<Honeycode.Types.GetScreenDataResult, AWSError>;
  /**
   *  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 
   */
  getScreenData(callback?: (err: AWSError, data: Honeycode.Types.GetScreenDataResult) => void): Request<Honeycode.Types.GetScreenDataResult, AWSError>;
  /**
   *  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 
   */
  invokeScreenAutomation(params: Honeycode.Types.InvokeScreenAutomationRequest, callback?: (err: AWSError, data: Honeycode.Types.InvokeScreenAutomationResult) => void): Request<Honeycode.Types.InvokeScreenAutomationResult, AWSError>;
  /**
   *  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 
   */
  invokeScreenAutomation(callback?: (err: AWSError, data: Honeycode.Types.InvokeScreenAutomationResult) => void): Request<Honeycode.Types.InvokeScreenAutomationResult, AWSError>;
}
declare namespace Honeycode {
  export type ClientRequestToken = string;
  export interface ColumnMetadata {
    /**
     * The name of the column.
     */
    name: Name;
    /**
     * The format of the column.
     */
    format: Format;
  }
  export interface DataItem {
    /**
     *  The overrideFormat is optional and is specified only if a particular row of data has a different format for the data than the default format defined on the screen or the table. 
     */
    overrideFormat?: Format;
    /**
     * The raw value of the data. e.g. jsmith@example.com
     */
    rawValue?: RawValue;
    /**
     * The formatted value of the data. e.g. John Smith.
     */
    formattedValue?: FormattedValue;
  }
  export type DataItems = DataItem[];
  export type Format = "AUTO"|"NUMBER"|"CURRENCY"|"DATE"|"TIME"|"DATE_TIME"|"PERCENTAGE"|"TEXT"|"ACCOUNTING"|"CONTACT"|"ROWLINK"|string;
  export type FormattedValue = string;
  export interface GetScreenDataRequest {
    /**
     * The ID of the workbook that contains the screen.
     */
    workbookId: ResourceId;
    /**
     * The ID of the app that contains the screem.
     */
    appId: ResourceId;
    /**
     * The ID of the screen.
     */
    screenId: ResourceId;
    /**
     *  Variables are optional and are needed only if the screen requires them to render correctly. Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. 
     */
    variables?: VariableValueMap;
    /**
     *  The number of results to be returned on a single page. Specify a number between 1 and 100. The maximum value is 100.   This parameter is optional. If you don't specify this parameter, the default page size is 100. 
     */
    maxResults?: MaxResults;
    /**
     *  This parameter is optional. If a nextToken is not specified, the API returns the first page of data.   Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. 
     */
    nextToken?: PaginationToken;
  }
  export interface GetScreenDataResult {
    /**
     * A map of all the rows on the screen keyed by block name.
     */
    results: ResultSetMap;
    /**
     *  Indicates the cursor of the workbook at which the data returned by this workbook is read. Workbook cursor keeps increasing with every update and the increments are not sequential. 
     */
    workbookCursor: WorkbookCursor;
    /**
     *  Provides the pagination token to load the next page if there are more results matching the request. If a pagination token is not present in the response, it means that all data matching the query has been loaded. 
     */
    nextToken?: PaginationToken;
  }
  export interface InvokeScreenAutomationRequest {
    /**
     * The ID of the workbook that contains the screen automation.
     */
    workbookId: ResourceId;
    /**
     * The ID of the app that contains the screen automation.
     */
    appId: ResourceId;
    /**
     * The ID of the screen that contains the screen automation.
     */
    screenId: ResourceId;
    /**
     * The ID of the automation action to be performed.
     */
    screenAutomationId: ResourceId;
    /**
     *  Variables are optional and are needed only if the screen requires them to render correctly. Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. 
     */
    variables?: VariableValueMap;
    /**
     *  The row ID for the automation if the automation is defined inside a block with source or list. 
     */
    rowId?: RowId;
    /**
     *  The request token for performing the automation action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will return the response of the previous call rather than performing the action again.   Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. 
     */
    clientRequestToken?: ClientRequestToken;
  }
  export interface InvokeScreenAutomationResult {
    /**
     * The updated workbook cursor after performing the automation action.
     */
    workbookCursor: WorkbookCursor;
  }
  export type MaxResults = number;
  export type Name = string;
  export type PaginationToken = string;
  export type RawValue = string;
  export type ResourceId = string;
  export type ResultHeader = ColumnMetadata[];
  export interface ResultRow {
    /**
     * The ID for a particular row.
     */
    rowId?: RowId;
    /**
     * List of all the data cells in a row.
     */
    dataItems: DataItems;
  }
  export type ResultRows = ResultRow[];
  export interface ResultSet {
    /**
     *  List of headers for all the data cells in the block. The header identifies the name and default format of the data cell. Data cells appear in the same order in all rows as defined in the header. The names and formats are not repeated in the rows. If a particular row does not have a value for a data cell, a blank value is used.   For example, a task list that displays the task name, due date and assigned person might have headers [ { "name": "Task Name"}, {"name": "Due Date", "format": "DATE"}, {"name": "Assigned", "format": "CONTACT"} ]. Every row in the result will have the task name as the first item, due date as the second item and assigned person as the third item. If a particular task does not have a due date, that row will still have a blank value in the second element and the assigned person will still be in the third element. 
     */
    headers: ResultHeader;
    /**
     *  List of rows returned by the request. Each row has a row Id and a list of data cells in that row. The data cells will be present in the same order as they are defined in the header. 
     */
    rows: ResultRows;
  }
  export type ResultSetMap = {[key: string]: ResultSet};
  export type RowId = string;
  export type VariableName = string;
  export interface VariableValue {
    /**
     * Raw value of the variable.
     */
    rawValue: RawValue;
  }
  export type VariableValueMap = {[key: string]: VariableValue};
  export type WorkbookCursor = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-03-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Honeycode client.
   */
  export import Types = Honeycode;
}
export = Honeycode;
