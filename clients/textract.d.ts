import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Textract extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Textract.Types.ClientConfiguration)
  config: Config & Textract.Types.ClientConfiguration;
  /**
   * Analyzes an input document for relationships in the detected text and tables.  Two types of information are returned:    Words and lines that are related to nearby lines and words. The related information is returned in two Block objects: a KEY Block object and a VALUE Block object. For example, Name: Ana Silva Carolina contains a key and value. Name: is the key. Ana Silva Carolina is the value.   Table and table cell data. A TABLE Block contains information about a detected table. A CELL block is returned for each cell in a table.   You can choose which type of analysis to perform by specifying the FeatureTypes list.  The output is returned in a list of BLOCK objects (Blocks). For more information, see how-it-works-analyzing.  AnalyzeDocument is a synchronous operation. To analyze documents asynchronously, use StartDocumentAnalysis.
   */
  analyzeDocument(params: Textract.Types.AnalyzeDocumentRequest, callback?: (err: AWSError, data: Textract.Types.AnalyzeDocumentResponse) => void): Request<Textract.Types.AnalyzeDocumentResponse, AWSError>;
  /**
   * Analyzes an input document for relationships in the detected text and tables.  Two types of information are returned:    Words and lines that are related to nearby lines and words. The related information is returned in two Block objects: a KEY Block object and a VALUE Block object. For example, Name: Ana Silva Carolina contains a key and value. Name: is the key. Ana Silva Carolina is the value.   Table and table cell data. A TABLE Block contains information about a detected table. A CELL block is returned for each cell in a table.   You can choose which type of analysis to perform by specifying the FeatureTypes list.  The output is returned in a list of BLOCK objects (Blocks). For more information, see how-it-works-analyzing.  AnalyzeDocument is a synchronous operation. To analyze documents asynchronously, use StartDocumentAnalysis.
   */
  analyzeDocument(callback?: (err: AWSError, data: Textract.Types.AnalyzeDocumentResponse) => void): Request<Textract.Types.AnalyzeDocumentResponse, AWSError>;
  /**
   * Detects text in the input document. Amazon Textract can detect lines of text and the words that make up a line of text. The input document must be an image in JPG or PNG format. DetectDocumentText returns the detected text in an array of Block objects. For more information, see how-it-works-detecting.  DetectDocumentText is a synchronous operation. To analyze documents asynchronously, use StartDocumentTextDetection.
   */
  detectDocumentText(params: Textract.Types.DetectDocumentTextRequest, callback?: (err: AWSError, data: Textract.Types.DetectDocumentTextResponse) => void): Request<Textract.Types.DetectDocumentTextResponse, AWSError>;
  /**
   * Detects text in the input document. Amazon Textract can detect lines of text and the words that make up a line of text. The input document must be an image in JPG or PNG format. DetectDocumentText returns the detected text in an array of Block objects. For more information, see how-it-works-detecting.  DetectDocumentText is a synchronous operation. To analyze documents asynchronously, use StartDocumentTextDetection.
   */
  detectDocumentText(callback?: (err: AWSError, data: Textract.Types.DetectDocumentTextResponse) => void): Request<Textract.Types.DetectDocumentTextResponse, AWSError>;
  /**
   * Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document image. You start asynchronous text analysis by calling StartDocumentAnalysis, which returns a job identifier (JobId). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to StartDocumentAnalysis. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetDocumentAnalysis, and pass the job identifier (JobId) from the initial call to StartDocumentAnalysis.  GetDocumentAnalysis returns an array of Block objects. For more information, see how-it-works-analyzing. Use the MaxResults parameter to limit the number of blocks returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetDocumentAnalysis, and populate the NextToken request parameter with the token value that's returned from the previous call to GetDocumentAnalysis.
   */
  getDocumentAnalysis(params: Textract.Types.GetDocumentAnalysisRequest, callback?: (err: AWSError, data: Textract.Types.GetDocumentAnalysisResponse) => void): Request<Textract.Types.GetDocumentAnalysisResponse, AWSError>;
  /**
   * Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document image. You start asynchronous text analysis by calling StartDocumentAnalysis, which returns a job identifier (JobId). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to StartDocumentAnalysis. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetDocumentAnalysis, and pass the job identifier (JobId) from the initial call to StartDocumentAnalysis.  GetDocumentAnalysis returns an array of Block objects. For more information, see how-it-works-analyzing. Use the MaxResults parameter to limit the number of blocks returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetDocumentAnalysis, and populate the NextToken request parameter with the token value that's returned from the previous call to GetDocumentAnalysis.
   */
  getDocumentAnalysis(callback?: (err: AWSError, data: Textract.Types.GetDocumentAnalysisResponse) => void): Request<Textract.Types.GetDocumentAnalysisResponse, AWSError>;
  /**
   * Gets the results for an Amazon Textract asynchronous operation that detects text in a document image. Amazon Textract can detect lines of text and the words that make up a line of text. You start asynchronous text detection by calling StartDocumentTextDetection, which returns a job identifier (JobId). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to StartDocumentTextDetection. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetDocumentTextDetection, and pass the job identifier (JobId) from the initial call to StartDocumentTextDetection.  GetDocumentTextDetection returns an array of Block objects. For more information, see how-it-works-detecting. Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetDocumentTextDetection, and populate the NextToken request parameter with the token value that's returned from the previous call to GetDocumentTextDetection. For more information, see Document Text Detection in the Amazon Textract Developer Guide.
   */
  getDocumentTextDetection(params: Textract.Types.GetDocumentTextDetectionRequest, callback?: (err: AWSError, data: Textract.Types.GetDocumentTextDetectionResponse) => void): Request<Textract.Types.GetDocumentTextDetectionResponse, AWSError>;
  /**
   * Gets the results for an Amazon Textract asynchronous operation that detects text in a document image. Amazon Textract can detect lines of text and the words that make up a line of text. You start asynchronous text detection by calling StartDocumentTextDetection, which returns a job identifier (JobId). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to StartDocumentTextDetection. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetDocumentTextDetection, and pass the job identifier (JobId) from the initial call to StartDocumentTextDetection.  GetDocumentTextDetection returns an array of Block objects. For more information, see how-it-works-detecting. Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetDocumentTextDetection, and populate the NextToken request parameter with the token value that's returned from the previous call to GetDocumentTextDetection. For more information, see Document Text Detection in the Amazon Textract Developer Guide.
   */
  getDocumentTextDetection(callback?: (err: AWSError, data: Textract.Types.GetDocumentTextDetectionResponse) => void): Request<Textract.Types.GetDocumentTextDetectionResponse, AWSError>;
  /**
   * Starts asynchronous analysis of text for relationships in the text and tables that are detected in a document. Amazon Textract returns for two types of information:    Words and lines that are related to nearby lines and words. The related information is returned in two Block objects: A KEY Block object and a VALUE Block object. For example, Name: Ana Silva Carolina contains a key and value. Name: is the key. Ana Silva Carolina is the value.   Table and table cell data. A TABLE block contains information about a detected table. A CELL block is returned for each cell in a table.   Amazon Textract can analyze text in document images and PDF files that are stored in an Amazon S3 bucket. Use DocumentLocation to specify the bucket name and file name of the document image.   StartDocumentAnalysis returns a job identifier (JobId) that you use to get the results of the operation. When text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in NotificationChannel. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetDocumentAnalysis, and pass the job identifier (JobId) from the initial call to StartDocumentAnalysis.
   */
  startDocumentAnalysis(params: Textract.Types.StartDocumentAnalysisRequest, callback?: (err: AWSError, data: Textract.Types.StartDocumentAnalysisResponse) => void): Request<Textract.Types.StartDocumentAnalysisResponse, AWSError>;
  /**
   * Starts asynchronous analysis of text for relationships in the text and tables that are detected in a document. Amazon Textract returns for two types of information:    Words and lines that are related to nearby lines and words. The related information is returned in two Block objects: A KEY Block object and a VALUE Block object. For example, Name: Ana Silva Carolina contains a key and value. Name: is the key. Ana Silva Carolina is the value.   Table and table cell data. A TABLE block contains information about a detected table. A CELL block is returned for each cell in a table.   Amazon Textract can analyze text in document images and PDF files that are stored in an Amazon S3 bucket. Use DocumentLocation to specify the bucket name and file name of the document image.   StartDocumentAnalysis returns a job identifier (JobId) that you use to get the results of the operation. When text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in NotificationChannel. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetDocumentAnalysis, and pass the job identifier (JobId) from the initial call to StartDocumentAnalysis.
   */
  startDocumentAnalysis(callback?: (err: AWSError, data: Textract.Types.StartDocumentAnalysisResponse) => void): Request<Textract.Types.StartDocumentAnalysisResponse, AWSError>;
  /**
   * Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of text and the words that make up a line of text. Amazon Textract can detect text in document images and PDF files that are stored in an Amazon S3 bucket. Use DocumentLocation to specify the bucket name and the file name of the document image.   StartTextDetection returns a job identifier (JobId) that you use to get the results of the operation. When text detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in NotificationChannel. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetDocumentTextDetection, and pass the job identifier (JobId) from the initial call to StartDocumentTextDetection. For more information, see Document Text Detection in the Amazon Textract Developer Guide.
   */
  startDocumentTextDetection(params: Textract.Types.StartDocumentTextDetectionRequest, callback?: (err: AWSError, data: Textract.Types.StartDocumentTextDetectionResponse) => void): Request<Textract.Types.StartDocumentTextDetectionResponse, AWSError>;
  /**
   * Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of text and the words that make up a line of text. Amazon Textract can detect text in document images and PDF files that are stored in an Amazon S3 bucket. Use DocumentLocation to specify the bucket name and the file name of the document image.   StartTextDetection returns a job identifier (JobId) that you use to get the results of the operation. When text detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in NotificationChannel. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetDocumentTextDetection, and pass the job identifier (JobId) from the initial call to StartDocumentTextDetection. For more information, see Document Text Detection in the Amazon Textract Developer Guide.
   */
  startDocumentTextDetection(callback?: (err: AWSError, data: Textract.Types.StartDocumentTextDetectionResponse) => void): Request<Textract.Types.StartDocumentTextDetectionResponse, AWSError>;
}
declare namespace Textract {
  export interface AnalyzeDocumentRequest {
    /**
     * The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI to call Amazon Textract operations, you can't pass image bytes. The document must be an image in JPG or PNG format.
     */
    Document: Document;
    /**
     * A list of the types of analysis to perform. Add TABLES to the list to return information about the tables detected in the input document. Add FORMS to return detected fields and the associated text. To perform both types of analysis, add TABLES and FORMS to FeatureTypes.
     */
    FeatureTypes: FeatureTypes;
  }
  export interface AnalyzeDocumentResponse {
    /**
     * Metadata about the analyzed document. An example is the number of pages.
     */
    DocumentMetadata?: DocumentMetadata;
    /**
     * The text that's detected and analyzed by AnalyzeDocument.
     */
    Blocks?: BlockList;
  }
  export interface Block {
    /**
     * The type of text that's recognized in a block. In text-detection operations, the following types are returned:    PAGE - Contains a list of the LINE Block objects that are detected on a specific page.    WORD - One or more ISO basic Latin script characters that aren't separated by spaces.    LINE - A string of equally spaced words.   In text analysis operations, the following types are returned:    PAGE - Contains a list of child Block objects that are detected on a specific page.    KEY_VALUE_SET - Stores the KEY and VALUE Block objects for a field that's detected in a document. Use the EntityType field to determine if a KEY_VALUE_SET object is a KEY Block object or a VALUE Block object.     WORD - One or more ISO basic Latin script characters that aren't separated by spaces.    LINE - A string of tab-delimited, contiguous words.    TABLE - A table that's detected in the document.    CELL - A cell within a detected table. The cell is the parent of the block that contains the text in the cell.  
     */
    BlockType?: BlockType;
    /**
     * The confidence that Amazon Textract has in the accuracy of the recognized text and the accuracy of the geometry points around the recognized text.
     */
    Confidence?: Percent;
    /**
     * The word or line of text that's recognized by Amazon Textract. 
     */
    Text?: String;
    /**
     * The row in which a table cell is located. The first row position is 1. RowIndex isn't returned by DetectDocumentText and GetDocumentTextDetection.
     */
    RowIndex?: UInteger;
    /**
     * The column in which a table cell appears. The first column position is 1. ColumnIndex isn't returned by DetectDocumentText and GetDocumentTextDetection.
     */
    ColumnIndex?: UInteger;
    /**
     * The number of rows that a table spans. RowSpan isn't returned by DetectDocumentText and GetDocumentTextDetection.
     */
    RowSpan?: UInteger;
    /**
     * The number of columns that a table cell spans. ColumnSpan isn't returned by DetectDocumentText and GetDocumentTextDetection. 
     */
    ColumnSpan?: UInteger;
    /**
     * The location of the recognized text on the image. It includes an axis-aligned, coarse bounding box that surrounds the text, and a finer-grain polygon for more accurate spatial information. 
     */
    Geometry?: Geometry;
    /**
     * The identifier for the recognized text. The identifier is only unique for a single operation. 
     */
    Id?: NonEmptyString;
    /**
     * A list of child blocks of the current block. For example a LINE object has child blocks for each WORD block that's part of the line of text. There aren't Relationship objects in the list for relationships that don't exist, such as when the current block has no child blocks. The list size can be the following:   0 - The block has no child blocks.   1 - The block has child blocks.  
     */
    Relationships?: RelationshipList;
    /**
     * The type of entity. The following can be returned:    KEY - An identifier for a field on the document.    VALUE - The field text.    EntityTypes isn't returned by DetectDocumentText and GetDocumentTextDetection.
     */
    EntityTypes?: EntityTypes;
    /**
     * The page in which a block was detected.
     */
    Page?: UInteger;
  }
  export type BlockList = Block[];
  export type BlockType = "KEY_VALUE_SET"|"PAGE"|"LINE"|"WORD"|"TABLE"|"CELL"|string;
  export interface BoundingBox {
    /**
     * The width of the bounding box as a ratio of the overall document page width.
     */
    Width?: Float;
    /**
     * The height of the bounding box as a ratio of the overall document page height.
     */
    Height?: Float;
    /**
     * The left coordinate of the bounding box as a ratio of overall document page width.
     */
    Left?: Float;
    /**
     * The top coordinate of the bounding box as a ratio of overall document page height.
     */
    Top?: Float;
  }
  export type ClientRequestToken = string;
  export interface DetectDocumentTextRequest {
    /**
     * The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI to call Amazon Textract operations, you can't pass image bytes. The document must be an image in JPG or PNG format.
     */
    Document: Document;
  }
  export interface DetectDocumentTextResponse {
    /**
     * Metadata about the document. Contains the number of pages that are detected in the document.
     */
    DocumentMetadata?: DocumentMetadata;
    /**
     * An array of Block objects containing the text detected in the document.
     */
    Blocks?: BlockList;
  }
  export interface Document {
    /**
     * A blob of documents bytes. The maximum size of a document that's provided in a blob of bytes is 5 MB.
     */
    Bytes?: ImageBlob;
    /**
     * Identifies an S3 object as the document source. The maximum size of a document stored in an S3 bucket is 5 MB.
     */
    S3Object?: S3Object;
  }
  export interface DocumentLocation {
    /**
     * The Amazon S3 bucket that contains the input document.
     */
    S3Object?: S3Object;
  }
  export interface DocumentMetadata {
    /**
     * The number of pages detected in the document.
     */
    Pages?: UInteger;
  }
  export type EntityType = "KEY"|"VALUE"|string;
  export type EntityTypes = EntityType[];
  export type ErrorCode = string;
  export type FeatureType = "TABLES"|"FORMS"|string;
  export type FeatureTypes = FeatureType[];
  export type Float = number;
  export interface Geometry {
    /**
     * An axis-aligned coarse representation of the location of the recognized text on the document page.
     */
    BoundingBox?: BoundingBox;
    /**
     * Within the bounding box, a fine-grained polygon around the recognized text.
     */
    Polygon?: Polygon;
  }
  export interface GetDocumentAnalysisRequest {
    /**
     * A unique identifier for the text-detection job. The JobId is returned from StartDocumentAnalysis.
     */
    JobId: JobId;
    /**
     * The maximum number of results to return per paginated call. The largest value that you can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results is returned. The default value is 1,000.
     */
    MaxResults?: MaxResults;
    /**
     * If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination token in the response. You can use this pagination token to retrieve the next set of blocks.
     */
    NextToken?: PaginationToken;
  }
  export interface GetDocumentAnalysisResponse {
    /**
     * Information about a document that Amazon Textract processed. DocumentMetadata is returned in every page of paginated responses from an Amazon Textract video operation.
     */
    DocumentMetadata?: DocumentMetadata;
    /**
     * The current status of the text detection job.
     */
    JobStatus?: JobStatus;
    /**
     * If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of text detection results.
     */
    NextToken?: PaginationToken;
    /**
     * The results of the text analysis operation.
     */
    Blocks?: BlockList;
    /**
     * A list of warnings that occurred during the document analysis operation.
     */
    Warnings?: Warnings;
    /**
     * The current status of an asynchronous document analysis operation.
     */
    StatusMessage?: StatusMessage;
  }
  export interface GetDocumentTextDetectionRequest {
    /**
     * A unique identifier for the text detection job. The JobId is returned from StartDocumentTextDetection.
     */
    JobId: JobId;
    /**
     * The maximum number of results to return per paginated call. The largest value you can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results is returned. The default value is 1,000.
     */
    MaxResults?: MaxResults;
    /**
     * If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination token in the response. You can use this pagination token to retrieve the next set of blocks.
     */
    NextToken?: PaginationToken;
  }
  export interface GetDocumentTextDetectionResponse {
    /**
     * Information about a document that Amazon Textract processed. DocumentMetadata is returned in every page of paginated responses from an Amazon Textract video operation.
     */
    DocumentMetadata?: DocumentMetadata;
    /**
     * The current status of the text detection job.
     */
    JobStatus?: JobStatus;
    /**
     * If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of text-detection results.
     */
    NextToken?: PaginationToken;
    /**
     * The results of the text-detection operation.
     */
    Blocks?: BlockList;
    /**
     * A list of warnings that occurred during the document text-detection operation.
     */
    Warnings?: Warnings;
    /**
     * The current status of an asynchronous document text-detection operation. 
     */
    StatusMessage?: StatusMessage;
  }
  export type IdList = NonEmptyString[];
  export type ImageBlob = Buffer|Uint8Array|Blob|string;
  export type JobId = string;
  export type JobStatus = "IN_PROGRESS"|"SUCCEEDED"|"FAILED"|"PARTIAL_SUCCESS"|string;
  export type JobTag = string;
  export type MaxResults = number;
  export type NonEmptyString = string;
  export interface NotificationChannel {
    /**
     * The Amazon SNS topic that Amazon Textract posts the completion status to.
     */
    SNSTopicArn: SNSTopicArn;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that gives Amazon Textract publishing permissions to the Amazon SNS topic. 
     */
    RoleArn: RoleArn;
  }
  export type Pages = UInteger[];
  export type PaginationToken = string;
  export type Percent = number;
  export interface Point {
    /**
     * The value of the X coordinate for a point on a Polygon.
     */
    X?: Float;
    /**
     * The value of the Y coordinate for a point on a Polygon.
     */
    Y?: Float;
  }
  export type Polygon = Point[];
  export interface Relationship {
    /**
     * The type of relationship that the blocks in the IDs array have with the current block. The relationship can be VALUE or CHILD.
     */
    Type?: RelationshipType;
    /**
     * An array of IDs for related blocks. You can get the type of the relationship from the Type element.
     */
    Ids?: IdList;
  }
  export type RelationshipList = Relationship[];
  export type RelationshipType = "VALUE"|"CHILD"|string;
  export type RoleArn = string;
  export type S3Bucket = string;
  export interface S3Object {
    /**
     * The name of the S3 bucket.
     */
    Bucket?: S3Bucket;
    /**
     * The file name of the input document. It must be an image file (.JPG or .PNG format). Asynchronous operations also support PDF files.
     */
    Name?: S3ObjectName;
    /**
     * If the bucket has versioning enabled, you can specify the object version. 
     */
    Version?: S3ObjectVersion;
  }
  export type S3ObjectName = string;
  export type S3ObjectVersion = string;
  export type SNSTopicArn = string;
  export interface StartDocumentAnalysisRequest {
    /**
     * The location of the document to be processed.
     */
    DocumentLocation: DocumentLocation;
    /**
     * A list of the types of analysis to perform. Add TABLES to the list to return information about the tables that are detected in the input document. Add FORMS to return detected fields and the associated text. To perform both types of analysis, add TABLES and FORMS to FeatureTypes.
     */
    FeatureTypes: FeatureTypes;
    /**
     * The idempotent token that you use to identify the start request. If you use the same token with multiple StartDocumentAnalysis requests, the same JobId is returned. Use ClientRequestToken to prevent the same job from being accidentally started more than once. 
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The unique identifier you specify to identify the job in the completion status that's published to the Amazon SNS topic.
     */
    JobTag?: JobTag;
    /**
     * The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the operation to. 
     */
    NotificationChannel?: NotificationChannel;
  }
  export interface StartDocumentAnalysisResponse {
    /**
     * The identifier for the document text-detection job. Use JobId to identify the job in a subsequent call to GetDocumentAnalysis.
     */
    JobId?: JobId;
  }
  export interface StartDocumentTextDetectionRequest {
    /**
     * The location of the document to be processed.
     */
    DocumentLocation: DocumentLocation;
    /**
     * The idempotent token that's used to identify the start request. If you use the same token with multiple StartDocumentTextDetection requests, the same JobId is returned. Use ClientRequestToken to prevent the same job from being accidentally started more than once. 
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * A unique identifier you specify to identify the job in the completion status that's published to the Amazon Simple Notification Service (Amazon SNS) topic.
     */
    JobTag?: JobTag;
    /**
     * The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the operation to. 
     */
    NotificationChannel?: NotificationChannel;
  }
  export interface StartDocumentTextDetectionResponse {
    /**
     * The identifier for the document text-detection job. Use JobId to identify the job in a subsequent call to GetDocumentTextDetection.
     */
    JobId?: JobId;
  }
  export type StatusMessage = string;
  export type String = string;
  export type UInteger = number;
  export interface Warning {
    /**
     * The error code for the warning.
     */
    ErrorCode?: ErrorCode;
    /**
     * A list of the pages that the warning applies to.
     */
    Pages?: Pages;
  }
  export type Warnings = Warning[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-06-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Textract client.
   */
  export import Types = Textract;
}
export = Textract;
