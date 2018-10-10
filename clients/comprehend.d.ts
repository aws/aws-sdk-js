import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Comprehend extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Comprehend.Types.ClientConfiguration)
  config: Config & Comprehend.Types.ClientConfiguration;
  /**
   * Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages. 
   */
  batchDetectDominantLanguage(params: Comprehend.Types.BatchDetectDominantLanguageRequest, callback?: (err: AWSError, data: Comprehend.Types.BatchDetectDominantLanguageResponse) => void): Request<Comprehend.Types.BatchDetectDominantLanguageResponse, AWSError>;
  /**
   * Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages. 
   */
  batchDetectDominantLanguage(callback?: (err: AWSError, data: Comprehend.Types.BatchDetectDominantLanguageResponse) => void): Request<Comprehend.Types.BatchDetectDominantLanguageResponse, AWSError>;
  /**
   * Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see how-entities 
   */
  batchDetectEntities(params: Comprehend.Types.BatchDetectEntitiesRequest, callback?: (err: AWSError, data: Comprehend.Types.BatchDetectEntitiesResponse) => void): Request<Comprehend.Types.BatchDetectEntitiesResponse, AWSError>;
  /**
   * Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see how-entities 
   */
  batchDetectEntities(callback?: (err: AWSError, data: Comprehend.Types.BatchDetectEntitiesResponse) => void): Request<Comprehend.Types.BatchDetectEntitiesResponse, AWSError>;
  /**
   * Detects the key noun phrases found in a batch of documents.
   */
  batchDetectKeyPhrases(params: Comprehend.Types.BatchDetectKeyPhrasesRequest, callback?: (err: AWSError, data: Comprehend.Types.BatchDetectKeyPhrasesResponse) => void): Request<Comprehend.Types.BatchDetectKeyPhrasesResponse, AWSError>;
  /**
   * Detects the key noun phrases found in a batch of documents.
   */
  batchDetectKeyPhrases(callback?: (err: AWSError, data: Comprehend.Types.BatchDetectKeyPhrasesResponse) => void): Request<Comprehend.Types.BatchDetectKeyPhrasesResponse, AWSError>;
  /**
   * Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED, or NEGATIVE, in each one.
   */
  batchDetectSentiment(params: Comprehend.Types.BatchDetectSentimentRequest, callback?: (err: AWSError, data: Comprehend.Types.BatchDetectSentimentResponse) => void): Request<Comprehend.Types.BatchDetectSentimentResponse, AWSError>;
  /**
   * Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED, or NEGATIVE, in each one.
   */
  batchDetectSentiment(callback?: (err: AWSError, data: Comprehend.Types.BatchDetectSentimentResponse) => void): Request<Comprehend.Types.BatchDetectSentimentResponse, AWSError>;
  /**
   * Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see how-syntax.
   */
  batchDetectSyntax(params: Comprehend.Types.BatchDetectSyntaxRequest, callback?: (err: AWSError, data: Comprehend.Types.BatchDetectSyntaxResponse) => void): Request<Comprehend.Types.BatchDetectSyntaxResponse, AWSError>;
  /**
   * Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see how-syntax.
   */
  batchDetectSyntax(callback?: (err: AWSError, data: Comprehend.Types.BatchDetectSyntaxResponse) => void): Request<Comprehend.Types.BatchDetectSyntaxResponse, AWSError>;
  /**
   * Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
   */
  describeDominantLanguageDetectionJob(params: Comprehend.Types.DescribeDominantLanguageDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.DescribeDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
   */
  describeDominantLanguageDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.DescribeDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
   */
  describeEntitiesDetectionJob(params: Comprehend.Types.DescribeEntitiesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.DescribeEntitiesDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
   */
  describeEntitiesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.DescribeEntitiesDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
   */
  describeKeyPhrasesDetectionJob(params: Comprehend.Types.DescribeKeyPhrasesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.DescribeKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
   */
  describeKeyPhrasesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.DescribeKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
   */
  describeSentimentDetectionJob(params: Comprehend.Types.DescribeSentimentDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeSentimentDetectionJobResponse) => void): Request<Comprehend.Types.DescribeSentimentDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
   */
  describeSentimentDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeSentimentDetectionJobResponse) => void): Request<Comprehend.Types.DescribeSentimentDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
   */
  describeTopicsDetectionJob(params: Comprehend.Types.DescribeTopicsDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeTopicsDetectionJobResponse) => void): Request<Comprehend.Types.DescribeTopicsDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
   */
  describeTopicsDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeTopicsDetectionJobResponse) => void): Request<Comprehend.Types.DescribeTopicsDetectionJobResponse, AWSError>;
  /**
   * Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages. 
   */
  detectDominantLanguage(params: Comprehend.Types.DetectDominantLanguageRequest, callback?: (err: AWSError, data: Comprehend.Types.DetectDominantLanguageResponse) => void): Request<Comprehend.Types.DetectDominantLanguageResponse, AWSError>;
  /**
   * Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages. 
   */
  detectDominantLanguage(callback?: (err: AWSError, data: Comprehend.Types.DetectDominantLanguageResponse) => void): Request<Comprehend.Types.DetectDominantLanguageResponse, AWSError>;
  /**
   * Inspects text for named entities, and returns information about them. For more information, about named entities, see how-entities. 
   */
  detectEntities(params: Comprehend.Types.DetectEntitiesRequest, callback?: (err: AWSError, data: Comprehend.Types.DetectEntitiesResponse) => void): Request<Comprehend.Types.DetectEntitiesResponse, AWSError>;
  /**
   * Inspects text for named entities, and returns information about them. For more information, about named entities, see how-entities. 
   */
  detectEntities(callback?: (err: AWSError, data: Comprehend.Types.DetectEntitiesResponse) => void): Request<Comprehend.Types.DetectEntitiesResponse, AWSError>;
  /**
   * Detects the key noun phrases found in the text. 
   */
  detectKeyPhrases(params: Comprehend.Types.DetectKeyPhrasesRequest, callback?: (err: AWSError, data: Comprehend.Types.DetectKeyPhrasesResponse) => void): Request<Comprehend.Types.DetectKeyPhrasesResponse, AWSError>;
  /**
   * Detects the key noun phrases found in the text. 
   */
  detectKeyPhrases(callback?: (err: AWSError, data: Comprehend.Types.DetectKeyPhrasesResponse) => void): Request<Comprehend.Types.DetectKeyPhrasesResponse, AWSError>;
  /**
   * Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE). 
   */
  detectSentiment(params: Comprehend.Types.DetectSentimentRequest, callback?: (err: AWSError, data: Comprehend.Types.DetectSentimentResponse) => void): Request<Comprehend.Types.DetectSentimentResponse, AWSError>;
  /**
   * Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE). 
   */
  detectSentiment(callback?: (err: AWSError, data: Comprehend.Types.DetectSentimentResponse) => void): Request<Comprehend.Types.DetectSentimentResponse, AWSError>;
  /**
   * Inspects text for syntax and the part of speech of words in the document. For more information, how-syntax.
   */
  detectSyntax(params: Comprehend.Types.DetectSyntaxRequest, callback?: (err: AWSError, data: Comprehend.Types.DetectSyntaxResponse) => void): Request<Comprehend.Types.DetectSyntaxResponse, AWSError>;
  /**
   * Inspects text for syntax and the part of speech of words in the document. For more information, how-syntax.
   */
  detectSyntax(callback?: (err: AWSError, data: Comprehend.Types.DetectSyntaxResponse) => void): Request<Comprehend.Types.DetectSyntaxResponse, AWSError>;
  /**
   * Gets a list of the dominant language detection jobs that you have submitted.
   */
  listDominantLanguageDetectionJobs(params: Comprehend.Types.ListDominantLanguageDetectionJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListDominantLanguageDetectionJobsResponse) => void): Request<Comprehend.Types.ListDominantLanguageDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of the dominant language detection jobs that you have submitted.
   */
  listDominantLanguageDetectionJobs(callback?: (err: AWSError, data: Comprehend.Types.ListDominantLanguageDetectionJobsResponse) => void): Request<Comprehend.Types.ListDominantLanguageDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of the entity detection jobs that you have submitted.
   */
  listEntitiesDetectionJobs(params: Comprehend.Types.ListEntitiesDetectionJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListEntitiesDetectionJobsResponse) => void): Request<Comprehend.Types.ListEntitiesDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of the entity detection jobs that you have submitted.
   */
  listEntitiesDetectionJobs(callback?: (err: AWSError, data: Comprehend.Types.ListEntitiesDetectionJobsResponse) => void): Request<Comprehend.Types.ListEntitiesDetectionJobsResponse, AWSError>;
  /**
   * Get a list of key phrase detection jobs that you have submitted.
   */
  listKeyPhrasesDetectionJobs(params: Comprehend.Types.ListKeyPhrasesDetectionJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListKeyPhrasesDetectionJobsResponse) => void): Request<Comprehend.Types.ListKeyPhrasesDetectionJobsResponse, AWSError>;
  /**
   * Get a list of key phrase detection jobs that you have submitted.
   */
  listKeyPhrasesDetectionJobs(callback?: (err: AWSError, data: Comprehend.Types.ListKeyPhrasesDetectionJobsResponse) => void): Request<Comprehend.Types.ListKeyPhrasesDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of sentiment detection jobs that you have submitted.
   */
  listSentimentDetectionJobs(params: Comprehend.Types.ListSentimentDetectionJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListSentimentDetectionJobsResponse) => void): Request<Comprehend.Types.ListSentimentDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of sentiment detection jobs that you have submitted.
   */
  listSentimentDetectionJobs(callback?: (err: AWSError, data: Comprehend.Types.ListSentimentDetectionJobsResponse) => void): Request<Comprehend.Types.ListSentimentDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of the topic detection jobs that you have submitted.
   */
  listTopicsDetectionJobs(params: Comprehend.Types.ListTopicsDetectionJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListTopicsDetectionJobsResponse) => void): Request<Comprehend.Types.ListTopicsDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of the topic detection jobs that you have submitted.
   */
  listTopicsDetectionJobs(callback?: (err: AWSError, data: Comprehend.Types.ListTopicsDetectionJobsResponse) => void): Request<Comprehend.Types.ListTopicsDetectionJobsResponse, AWSError>;
  /**
   * Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
   */
  startDominantLanguageDetectionJob(params: Comprehend.Types.StartDominantLanguageDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.StartDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
   */
  startDominantLanguageDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StartDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.StartDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.
   */
  startEntitiesDetectionJob(params: Comprehend.Types.StartEntitiesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.StartEntitiesDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.
   */
  startEntitiesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StartEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.StartEntitiesDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
   */
  startKeyPhrasesDetectionJob(params: Comprehend.Types.StartKeyPhrasesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.StartKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
   */
  startKeyPhrasesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StartKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.StartKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous sentiment detection job for a collection of documents. use the operation to track the status of a job.
   */
  startSentimentDetectionJob(params: Comprehend.Types.StartSentimentDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartSentimentDetectionJobResponse) => void): Request<Comprehend.Types.StartSentimentDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous sentiment detection job for a collection of documents. use the operation to track the status of a job.
   */
  startSentimentDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StartSentimentDetectionJobResponse) => void): Request<Comprehend.Types.StartSentimentDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status of a job.
   */
  startTopicsDetectionJob(params: Comprehend.Types.StartTopicsDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartTopicsDetectionJobResponse) => void): Request<Comprehend.Types.StartTopicsDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status of a job.
   */
  startTopicsDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StartTopicsDetectionJobResponse) => void): Request<Comprehend.Types.StartTopicsDetectionJobResponse, AWSError>;
  /**
   * Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopDominantLanguageDetectionJob(params: Comprehend.Types.StopDominantLanguageDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StopDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.StopDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopDominantLanguageDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StopDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.StopDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopEntitiesDetectionJob(params: Comprehend.Types.StopEntitiesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StopEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.StopEntitiesDetectionJobResponse, AWSError>;
  /**
   * Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopEntitiesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StopEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.StopEntitiesDetectionJobResponse, AWSError>;
  /**
   * Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopKeyPhrasesDetectionJob(params: Comprehend.Types.StopKeyPhrasesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StopKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.StopKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopKeyPhrasesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StopKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.StopKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Stops a sentiment detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopSentimentDetectionJob(params: Comprehend.Types.StopSentimentDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StopSentimentDetectionJobResponse) => void): Request<Comprehend.Types.StopSentimentDetectionJobResponse, AWSError>;
  /**
   * Stops a sentiment detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopSentimentDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StopSentimentDetectionJobResponse) => void): Request<Comprehend.Types.StopSentimentDetectionJobResponse, AWSError>;
}
declare namespace Comprehend {
  export type AnyLengthString = string;
  export interface BatchDetectDominantLanguageItemResult {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * One or more DominantLanguage objects describing the dominant languages in the document.
     */
    Languages?: ListOfDominantLanguages;
  }
  export interface BatchDetectDominantLanguageRequest {
    /**
     * A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document should contain at least 20 characters and must contain fewer than 5,000 bytes of UTF-8 encoded characters.
     */
    TextList: StringList;
  }
  export interface BatchDetectDominantLanguageResponse {
    /**
     * A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
     */
    ResultList: ListOfDetectDominantLanguageResult;
    /**
     * A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
     */
    ErrorList: BatchItemErrorList;
  }
  export interface BatchDetectEntitiesItemResult {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * One or more Entity objects, one for each entity detected in the document.
     */
    Entities?: ListOfEntities;
  }
  export interface BatchDetectEntitiesRequest {
    /**
     * A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer than 5,000 bytes of UTF-8 encoded characters.
     */
    TextList: StringList;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface BatchDetectEntitiesResponse {
    /**
     * A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
     */
    ResultList: ListOfDetectEntitiesResult;
    /**
     * A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
     */
    ErrorList: BatchItemErrorList;
  }
  export interface BatchDetectKeyPhrasesItemResult {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * One or more KeyPhrase objects, one for each key phrase detected in the document.
     */
    KeyPhrases?: ListOfKeyPhrases;
  }
  export interface BatchDetectKeyPhrasesRequest {
    /**
     * A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    TextList: StringList;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface BatchDetectKeyPhrasesResponse {
    /**
     * A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
     */
    ResultList: ListOfDetectKeyPhrasesResult;
    /**
     * A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
     */
    ErrorList: BatchItemErrorList;
  }
  export interface BatchDetectSentimentItemResult {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * The sentiment detected in the document.
     */
    Sentiment?: SentimentType;
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of its sentiment detection.
     */
    SentimentScore?: SentimentScore;
  }
  export interface BatchDetectSentimentRequest {
    /**
     * A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    TextList: StringList;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface BatchDetectSentimentResponse {
    /**
     * A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
     */
    ResultList: ListOfDetectSentimentResult;
    /**
     * A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
     */
    ErrorList: BatchItemErrorList;
  }
  export interface BatchDetectSyntaxItemResult {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * The syntax tokens for the words in the document, one token for each word.
     */
    SyntaxTokens?: ListOfSyntaxTokens;
  }
  export interface BatchDetectSyntaxRequest {
    /**
     * A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    TextList: StringList;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: SyntaxLanguageCode;
  }
  export interface BatchDetectSyntaxResponse {
    /**
     * A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
     */
    ResultList: ListOfDetectSyntaxResult;
    /**
     * A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
     */
    ErrorList: BatchItemErrorList;
  }
  export interface BatchItemError {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * The numeric error code of the error.
     */
    ErrorCode?: String;
    /**
     * A text description of the error.
     */
    ErrorMessage?: String;
  }
  export type BatchItemErrorList = BatchItemError[];
  export type ClientRequestTokenString = string;
  export interface DescribeDominantLanguageDetectionJobRequest {
    /**
     * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeDominantLanguageDetectionJobResponse {
    /**
     * An object that contains the properties associated with a dominant language detection job.
     */
    DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
  }
  export interface DescribeEntitiesDetectionJobRequest {
    /**
     * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeEntitiesDetectionJobResponse {
    /**
     * An object that contains the properties associated with an entities detection job.
     */
    EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
  }
  export interface DescribeKeyPhrasesDetectionJobRequest {
    /**
     * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeKeyPhrasesDetectionJobResponse {
    /**
     * An object that contains the properties associated with a key phrases detection job. 
     */
    KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
  }
  export interface DescribeSentimentDetectionJobRequest {
    /**
     * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeSentimentDetectionJobResponse {
    /**
     * An object that contains the properties associated with a sentiment detection job.
     */
    SentimentDetectionJobProperties?: SentimentDetectionJobProperties;
  }
  export interface DescribeTopicsDetectionJobRequest {
    /**
     * The identifier assigned by the user to the detection job.
     */
    JobId: JobId;
  }
  export interface DescribeTopicsDetectionJobResponse {
    /**
     * The list of properties for the requested job.
     */
    TopicsDetectionJobProperties?: TopicsDetectionJobProperties;
  }
  export interface DetectDominantLanguageRequest {
    /**
     * A UTF-8 text string. Each string should contain at least 20 characters and must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    Text: String;
  }
  export interface DetectDominantLanguageResponse {
    /**
     * The languages that Amazon Comprehend detected in the input text. For each language, the response returns the RFC 5646 language code and the level of confidence that Amazon Comprehend has in the accuracy of its inference. For more information about RFC 5646, see Tags for Identifying Languages on the IETF Tools web site.
     */
    Languages?: ListOfDominantLanguages;
  }
  export interface DetectEntitiesRequest {
    /**
     * A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    Text: String;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface DetectEntitiesResponse {
    /**
     * A collection of entities identified in the input text. For each entity, the response provides the entity text, entity type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the detection. For a list of entity types, see how-entities. 
     */
    Entities?: ListOfEntities;
  }
  export interface DetectKeyPhrasesRequest {
    /**
     * A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    Text: String;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface DetectKeyPhrasesResponse {
    /**
     * A collection of key phrases that Amazon Comprehend identified in the input text. For each key phrase, the response provides the text of the key phrase, where the key phrase begins and ends, and the level of confidence that Amazon Comprehend has in the accuracy of the detection. 
     */
    KeyPhrases?: ListOfKeyPhrases;
  }
  export interface DetectSentimentRequest {
    /**
     * A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    Text: String;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface DetectSentimentResponse {
    /**
     * The inferred sentiment that Amazon Comprehend has the highest level of confidence in.
     */
    Sentiment?: SentimentType;
    /**
     * An object that lists the sentiments, and their corresponding confidence levels.
     */
    SentimentScore?: SentimentScore;
  }
  export interface DetectSyntaxRequest {
    /**
     * A UTF-8 string. Each string must contain fewer that 5,000 bytes of UTF encoded characters.
     */
    Text: String;
    /**
     * The language code of the input documents. You can specify English ("en") or Spanish ("es").
     */
    LanguageCode: SyntaxLanguageCode;
  }
  export interface DetectSyntaxResponse {
    /**
     * A collection of syntax tokens describing the text. For each token, the response provides the text, the token type, where the text begins and ends, and the level of confidence that Amazon Comprehend has that the token is correct. For a list of token types, see how-syntax.
     */
    SyntaxTokens?: ListOfSyntaxTokens;
  }
  export interface DominantLanguage {
    /**
     * The RFC 5646 language code for the dominant language. For more information about RFC 5646, see Tags for Identifying Languages on the IETF Tools web site.
     */
    LanguageCode?: String;
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
     */
    Score?: Float;
  }
  export interface DominantLanguageDetectionJobFilter {
    /**
     * Filters on the name of the job.
     */
    JobName?: JobName;
    /**
     * Filters the list of jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface DominantLanguageDetectionJobProperties {
    /**
     * The identifier assigned to the dominant language detection job.
     */
    JobId?: JobId;
    /**
     * The name that you assigned to the dominant language detection job.
     */
    JobName?: JobName;
    /**
     * The current status of the dominant language detection job. If the status is FAILED, the Message field shows the reason for the failure.
     */
    JobStatus?: JobStatus;
    /**
     * A description for the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the dominant language detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the dominant language detection job completed.
     */
    EndTime?: Timestamp;
    /**
     * The input data configuration that you supplied when you created the dominant language detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration that you supplied when you created the dominant language detection job.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
  }
  export type DominantLanguageDetectionJobPropertiesList = DominantLanguageDetectionJobProperties[];
  export interface EntitiesDetectionJobFilter {
    /**
     * Filters on the name of the job.
     */
    JobName?: JobName;
    /**
     * Filters the list of jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface EntitiesDetectionJobProperties {
    /**
     * The identifier assigned to the entities detection job.
     */
    JobId?: JobId;
    /**
     * The name that you assigned the entities detection job.
     */
    JobName?: JobName;
    /**
     * The current status of the entities detection job. If the status is FAILED, the Message field shows the reason for the failure.
     */
    JobStatus?: JobStatus;
    /**
     * A description of the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the entities detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the entities detection job completed
     */
    EndTime?: Timestamp;
    /**
     * The input data configuration that you supplied when you created the entities detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration that you supplied when you created the entities detection job. 
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The language code of the input documents.
     */
    LanguageCode?: LanguageCode;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
  }
  export type EntitiesDetectionJobPropertiesList = EntitiesDetectionJobProperties[];
  export interface Entity {
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
     */
    Score?: Float;
    /**
     * The entity's type.
     */
    Type?: EntityType;
    /**
     * The text of the entity.
     */
    Text?: String;
    /**
     * A character offset in the input text that shows where the entity begins (the first character is at position 0). The offset returns the position of each UTF-8 code point in the string. A code point is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.
     */
    BeginOffset?: Integer;
    /**
     * A character offset in the input text that shows where the entity ends. The offset returns the position of each UTF-8 code point in the string. A code point is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point. 
     */
    EndOffset?: Integer;
  }
  export type EntityType = "PERSON"|"LOCATION"|"ORGANIZATION"|"COMMERCIAL_ITEM"|"EVENT"|"DATE"|"QUANTITY"|"TITLE"|"OTHER"|string;
  export type Float = number;
  export type IamRoleArn = string;
  export interface InputDataConfig {
    /**
     * The Amazon S3 URI for the input data. The URI must be in same region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of data files.  For example, if you use the URI S3://bucketName/prefix, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.
     */
    S3Uri: S3Uri;
    /**
     * Specifies how the text in an input file should be processed:    ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers.    ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.  
     */
    InputFormat?: InputFormat;
  }
  export type InputFormat = "ONE_DOC_PER_FILE"|"ONE_DOC_PER_LINE"|string;
  export type Integer = number;
  export type JobId = string;
  export type JobName = string;
  export type JobStatus = "SUBMITTED"|"IN_PROGRESS"|"COMPLETED"|"FAILED"|"STOP_REQUESTED"|"STOPPED"|string;
  export interface KeyPhrase {
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
     */
    Score?: Float;
    /**
     * The text of a key noun phrase.
     */
    Text?: String;
    /**
     * A character offset in the input text that shows where the key phrase begins (the first character is at position 0). The offset returns the position of each UTF-8 code point in the string. A code point is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.
     */
    BeginOffset?: Integer;
    /**
     * A character offset in the input text where the key phrase ends. The offset returns the position of each UTF-8 code point in the string. A code point is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.
     */
    EndOffset?: Integer;
  }
  export interface KeyPhrasesDetectionJobFilter {
    /**
     * Filters on the name of the job.
     */
    JobName?: JobName;
    /**
     * Filters the list of jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface KeyPhrasesDetectionJobProperties {
    /**
     * The identifier assigned to the key phrases detection job.
     */
    JobId?: JobId;
    /**
     * The name that you assigned the key phrases detection job.
     */
    JobName?: JobName;
    /**
     * The current status of the key phrases detection job. If the status is FAILED, the Message field shows the reason for the failure.
     */
    JobStatus?: JobStatus;
    /**
     * A description of the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the key phrases detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the key phrases detection job completed.
     */
    EndTime?: Timestamp;
    /**
     * The input data configuration that you supplied when you created the key phrases detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration that you supplied when you created the key phrases detection job.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The language code of the input documents.
     */
    LanguageCode?: LanguageCode;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
  }
  export type KeyPhrasesDetectionJobPropertiesList = KeyPhrasesDetectionJobProperties[];
  export type LanguageCode = "en"|"es"|"fr"|"de"|"it"|"pt"|string;
  export interface ListDominantLanguageDetectionJobsRequest {
    /**
     * Filters that jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: DominantLanguageDetectionJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListDominantLanguageDetectionJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    DominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export interface ListEntitiesDetectionJobsRequest {
    /**
     * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: EntitiesDetectionJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListEntitiesDetectionJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    EntitiesDetectionJobPropertiesList?: EntitiesDetectionJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export interface ListKeyPhrasesDetectionJobsRequest {
    /**
     * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: KeyPhrasesDetectionJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListKeyPhrasesDetectionJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    KeyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export type ListOfDetectDominantLanguageResult = BatchDetectDominantLanguageItemResult[];
  export type ListOfDetectEntitiesResult = BatchDetectEntitiesItemResult[];
  export type ListOfDetectKeyPhrasesResult = BatchDetectKeyPhrasesItemResult[];
  export type ListOfDetectSentimentResult = BatchDetectSentimentItemResult[];
  export type ListOfDetectSyntaxResult = BatchDetectSyntaxItemResult[];
  export type ListOfDominantLanguages = DominantLanguage[];
  export type ListOfEntities = Entity[];
  export type ListOfKeyPhrases = KeyPhrase[];
  export type ListOfSyntaxTokens = SyntaxToken[];
  export interface ListSentimentDetectionJobsRequest {
    /**
     * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: SentimentDetectionJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListSentimentDetectionJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    SentimentDetectionJobPropertiesList?: SentimentDetectionJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export interface ListTopicsDetectionJobsRequest {
    /**
     * Filters the jobs that are returned. Jobs can be filtered on their name, status, or the date and time that they were submitted. You can set only one filter at a time.
     */
    Filter?: TopicsDetectionJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListTopicsDetectionJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    TopicsDetectionJobPropertiesList?: TopicsDetectionJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export type MaxResultsInteger = number;
  export type NumberOfTopicsInteger = number;
  export interface OutputDataConfig {
    /**
     * When you use the OutputDataConfig object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data. The URI must be in the same region as the API endpoint that you are calling. The location is used as the prefix for the actual location of the output file. When the topic detection job is finished, the service creates an output file in a directory specific to the job. The S3Uri field contains the location of the output file, called output.tar.gz. It is a compressed archive that contains the ouput of the operation.
     */
    S3Uri: S3Uri;
  }
  export interface PartOfSpeechTag {
    /**
     * Identifies the part of speech that the token represents.
     */
    Tag?: PartOfSpeechTagType;
    /**
     * The confidence that Amazon Comprehend has that the part of speech was correctly identified.
     */
    Score?: Float;
  }
  export type PartOfSpeechTagType = "ADJ"|"ADP"|"ADV"|"AUX"|"CONJ"|"DET"|"INTJ"|"NOUN"|"NUM"|"O"|"PART"|"PRON"|"PROPN"|"PUNCT"|"SCONJ"|"SYM"|"VERB"|string;
  export type S3Uri = string;
  export interface SentimentDetectionJobFilter {
    /**
     * Filters on the name of the job.
     */
    JobName?: JobName;
    /**
     * Filters the list of jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface SentimentDetectionJobProperties {
    /**
     * The identifier assigned to the sentiment detection job.
     */
    JobId?: JobId;
    /**
     * The name that you assigned to the sentiment detection job
     */
    JobName?: JobName;
    /**
     * The current status of the sentiment detection job. If the status is FAILED, the Messages field shows the reason for the failure.
     */
    JobStatus?: JobStatus;
    /**
     * A description of the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the sentiment detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the sentiment detection job ended.
     */
    EndTime?: Timestamp;
    /**
     * The input data configuration that you supplied when you created the sentiment detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration that you supplied when you created the sentiment detection job.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The language code of the input documents.
     */
    LanguageCode?: LanguageCode;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
  }
  export type SentimentDetectionJobPropertiesList = SentimentDetectionJobProperties[];
  export interface SentimentScore {
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the POSITIVE sentiment.
     */
    Positive?: Float;
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEGATIVE sentiment.
     */
    Negative?: Float;
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEUTRAL sentiment.
     */
    Neutral?: Float;
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the MIXED sentiment.
     */
    Mixed?: Float;
  }
  export type SentimentType = "POSITIVE"|"NEGATIVE"|"NEUTRAL"|"MIXED"|string;
  export interface StartDominantLanguageDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * An identifier for the job.
     */
    JobName?: JobName;
    /**
     * A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
  }
  export interface StartDominantLanguageDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of a job, use this identifier with the operation.
     */
    JobId?: JobId;
    /**
     * The status of the job.    SUBMITTED - The job has been received and is queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. To get details, use the operation.  
     */
    JobStatus?: JobStatus;
  }
  export interface StartEntitiesDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
    /**
     * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
  }
  export interface StartEntitiesDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of job, use this identifier with the operation.
     */
    JobId?: JobId;
    /**
     * The status of the job.    SUBMITTED - The job has been received and is queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. To get details, use the operation.  
     */
    JobStatus?: JobStatus;
  }
  export interface StartKeyPhrasesDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
    /**
     * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
  }
  export interface StartKeyPhrasesDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of a job, use this identifier with the operation.
     */
    JobId?: JobId;
    /**
     * The status of the job.    SUBMITTED - The job has been received and is queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. To get details, use the operation.  
     */
    JobStatus?: JobStatus;
  }
  export interface StartSentimentDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files. 
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
    /**
     * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
  }
  export interface StartSentimentDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of a job, use this identifier with the operation.
     */
    JobId?: JobId;
    /**
     * The status of the job.    SUBMITTED - The job has been received and is queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. To get details, use the operation.  
     */
    JobStatus?: JobStatus;
  }
  export interface StartTopicsDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files. The output is a compressed archive with two files, topic-terms.csv that lists the terms associated with each topic, and doc-topics.csv that lists the documents associated with each topic
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * The number of topics to detect.
     */
    NumberOfTopics?: NumberOfTopicsInteger;
    /**
     * A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
  }
  export interface StartTopicsDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of the job, use this identifier with the DescribeTopicDetectionJob operation.
     */
    JobId?: JobId;
    /**
     * The status of the job:    SUBMITTED - The job has been received and is queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. To get details, use the DescribeTopicDetectionJob operation.  
     */
    JobStatus?: JobStatus;
  }
  export interface StopDominantLanguageDetectionJobRequest {
    /**
     * The identifier of the dominant language detection job to stop.
     */
    JobId: JobId;
  }
  export interface StopDominantLanguageDetectionJobResponse {
    /**
     * The identifier of the dominant language detection job to stop.
     */
    JobId?: JobId;
    /**
     * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the StopDominantLanguageDetectionJob operation.
     */
    JobStatus?: JobStatus;
  }
  export interface StopEntitiesDetectionJobRequest {
    /**
     * The identifier of the entities detection job to stop.
     */
    JobId: JobId;
  }
  export interface StopEntitiesDetectionJobResponse {
    /**
     * The identifier of the entities detection job to stop.
     */
    JobId?: JobId;
    /**
     * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the StopEntitiesDetectionJob operation.
     */
    JobStatus?: JobStatus;
  }
  export interface StopKeyPhrasesDetectionJobRequest {
    /**
     * The identifier of the key phrases detection job to stop.
     */
    JobId: JobId;
  }
  export interface StopKeyPhrasesDetectionJobResponse {
    /**
     * The identifier of the key phrases detection job to stop.
     */
    JobId?: JobId;
    /**
     * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the StopKeyPhrasesDetectionJob operation.
     */
    JobStatus?: JobStatus;
  }
  export interface StopSentimentDetectionJobRequest {
    /**
     * The identifier of the sentiment detection job to stop.
     */
    JobId: JobId;
  }
  export interface StopSentimentDetectionJobResponse {
    /**
     * The identifier of the sentiment detection job to stop.
     */
    JobId?: JobId;
    /**
     * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the StopSentimentDetectionJob operation.
     */
    JobStatus?: JobStatus;
  }
  export type String = string;
  export type StringList = String[];
  export type SyntaxLanguageCode = "en"|"es"|"fr"|"de"|"it"|"pt"|string;
  export interface SyntaxToken {
    /**
     * A unique identifier for a token.
     */
    TokenId?: Integer;
    /**
     * The word that was recognized in the source text.
     */
    Text?: String;
    /**
     * The zero-based offset from the beginning of the source text to the first character in the word.
     */
    BeginOffset?: Integer;
    /**
     * The zero-based offset from the beginning of the source text to the last character in the word.
     */
    EndOffset?: Integer;
    /**
     * Provides the part of speech label and the confidence level that Amazon Comprehend has that the part of speech was correctly identified. For more information, see how-syntax.
     */
    PartOfSpeech?: PartOfSpeechTag;
  }
  export type Timestamp = Date;
  export interface TopicsDetectionJobFilter {
    /**
     * 
     */
    JobName?: JobName;
    /**
     * Filters the list of topic detection jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface TopicsDetectionJobProperties {
    /**
     * The identifier assigned to the topic detection job.
     */
    JobId?: JobId;
    /**
     * The name of the topic detection job.
     */
    JobName?: JobName;
    /**
     * The current status of the topic detection job. If the status is Failed, the reason for the failure is shown in the Message field.
     */
    JobStatus?: JobStatus;
    /**
     * A description for the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the topic detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the topic detection job was completed.
     */
    EndTime?: Timestamp;
    /**
     * The input data configuration supplied when you created the topic detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration supplied when you created the topic detection job.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The number of topics to detect supplied when you created the topic detection job. The default is 10. 
     */
    NumberOfTopics?: Integer;
  }
  export type TopicsDetectionJobPropertiesList = TopicsDetectionJobProperties[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-11-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Comprehend client.
   */
  export import Types = Comprehend;
}
export = Comprehend;
