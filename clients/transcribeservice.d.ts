import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class TranscribeService extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: TranscribeService.Types.ClientConfiguration)
  config: Config & TranscribeService.Types.ClientConfiguration;
  /**
   * Returns information about a transcription job. To see the status of the job, check the Status field. If the status is COMPLETE, the job is finished and you can find the results at the location specified in the TranscriptionFileUri field.
   */
  getTranscriptionJob(params: TranscribeService.Types.GetTranscriptionJobRequest, callback?: (err: AWSError, data: TranscribeService.Types.GetTranscriptionJobResponse) => void): Request<TranscribeService.Types.GetTranscriptionJobResponse, AWSError>;
  /**
   * Returns information about a transcription job. To see the status of the job, check the Status field. If the status is COMPLETE, the job is finished and you can find the results at the location specified in the TranscriptionFileUri field.
   */
  getTranscriptionJob(callback?: (err: AWSError, data: TranscribeService.Types.GetTranscriptionJobResponse) => void): Request<TranscribeService.Types.GetTranscriptionJobResponse, AWSError>;
  /**
   * Lists transcription jobs with the specified status.
   */
  listTranscriptionJobs(params: TranscribeService.Types.ListTranscriptionJobsRequest, callback?: (err: AWSError, data: TranscribeService.Types.ListTranscriptionJobsResponse) => void): Request<TranscribeService.Types.ListTranscriptionJobsResponse, AWSError>;
  /**
   * Lists transcription jobs with the specified status.
   */
  listTranscriptionJobs(callback?: (err: AWSError, data: TranscribeService.Types.ListTranscriptionJobsResponse) => void): Request<TranscribeService.Types.ListTranscriptionJobsResponse, AWSError>;
  /**
   * Starts an asynchronous job to transcribe speech to text.
   */
  startTranscriptionJob(params: TranscribeService.Types.StartTranscriptionJobRequest, callback?: (err: AWSError, data: TranscribeService.Types.StartTranscriptionJobResponse) => void): Request<TranscribeService.Types.StartTranscriptionJobResponse, AWSError>;
  /**
   * Starts an asynchronous job to transcribe speech to text.
   */
  startTranscriptionJob(callback?: (err: AWSError, data: TranscribeService.Types.StartTranscriptionJobResponse) => void): Request<TranscribeService.Types.StartTranscriptionJobResponse, AWSError>;
}
declare namespace TranscribeService {
  export type DateTime = Date;
  export type FailureReason = string;
  export interface GetTranscriptionJobRequest {
    /**
     * The name of the job.
     */
    TranscriptionJobName: TranscriptionJobName;
  }
  export interface GetTranscriptionJobResponse {
    /**
     * An object that contains the results of the transcription job.
     */
    TranscriptionJob?: TranscriptionJob;
  }
  export type LanguageCode = "en-US"|"es-US"|string;
  export interface ListTranscriptionJobsRequest {
    /**
     * When specified, returns only transcription jobs with the specified status.
     */
    Status: TranscriptionJobStatus;
    /**
     * If the result of the previous request to ListTranscriptionJobs was truncated, include the NextToken to fetch the next set of jobs.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of jobs to return in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTranscriptionJobsResponse {
    /**
     * The requested status of the jobs returned.
     */
    Status?: TranscriptionJobStatus;
    /**
     * The ListTranscriptionJobs operation returns a page of jobs at a time. The size of the page is set by the MaxResults parameter. If there are more jobs in the list than the page size, Amazon Transcribe returns the NextPage token. Include the token in the next request to the ListTranscriptionJobs operation to return in the next page of jobs.
     */
    NextToken?: NextToken;
    /**
     * A list of objects containing summary information for a transcription job.
     */
    TranscriptionJobSummaries?: TranscriptionJobSummaries;
  }
  export type MaxResults = number;
  export interface Media {
    /**
     * The S3 location of the input media file. The general form is:   https://&lt;aws-region&gt;.amazonaws.com/&lt;bucket-name&gt;/&lt;keyprefix&gt;/&lt;objectkey&gt;   For example:  https://s3-us-west-2.amazonaws.com/examplebucket/example.mp4   https://s3-us-west-2.amazonaws.com/examplebucket/mediadocs/example.mp4 
     */
    MediaFileUri?: Uri;
  }
  export type MediaFormat = "mp3"|"mp4"|"wav"|"flac"|string;
  export type MediaSampleRateHertz = number;
  export type NextToken = string;
  export interface StartTranscriptionJobRequest {
    /**
     * The name of the job. The name must be unique within an AWS account.
     */
    TranscriptionJobName: TranscriptionJobName;
    /**
     * The language code for the language used in the input media file.
     */
    LanguageCode: LanguageCode;
    /**
     * The sample rate, in Hertz, of the audio track in the input media file. 
     */
    MediaSampleRateHertz?: MediaSampleRateHertz;
    /**
     * The format of the input media file.
     */
    MediaFormat: MediaFormat;
    /**
     * An object that describes the input media for a transcription job.
     */
    Media: Media;
  }
  export interface StartTranscriptionJobResponse {
    /**
     * An object containing details of the asynchronous transcription job.
     */
    TranscriptionJob?: TranscriptionJob;
  }
  export type String = string;
  export interface Transcript {
    /**
     * The S3 location where the transcription result is stored. The general form of this Uri is:   https://&lt;aws-region&gt;.amazonaws.com/&lt;bucket-name&gt;/&lt;keyprefix&gt;/&lt;objectkey&gt;   For example:  https://s3-us-west-2.amazonaws.com/examplebucket/example.json   https://s3-us-west-2.amazonaws.com/examplebucket/mediadocs/example.json 
     */
    TranscriptFileUri?: Uri;
  }
  export interface TranscriptionJob {
    /**
     * A name to identify the transcription job.
     */
    TranscriptionJobName?: TranscriptionJobName;
    /**
     * The identifier assigned to the job when it was created.
     */
    TranscriptionJobStatus?: TranscriptionJobStatus;
    /**
     * The language code for the input speech.
     */
    LanguageCode?: LanguageCode;
    /**
     * The sample rate, in Hertz, of the audio track in the input media file. 
     */
    MediaSampleRateHertz?: MediaSampleRateHertz;
    /**
     * The format of the input media file.
     */
    MediaFormat?: MediaFormat;
    /**
     * An object that describes the input media for a transcription job.
     */
    Media?: Media;
    /**
     * An object that describes the output of the transcription job.
     */
    Transcript?: Transcript;
    /**
     * Timestamp of the date and time that the job was created.
     */
    CreationTime?: DateTime;
    /**
     * Timestamp of the date and time that the job completed.
     */
    CompletionTime?: DateTime;
    /**
     * If the TranscriptionJobStatus field is FAILED, this field contains information about why the job failed.
     */
    FailureReason?: FailureReason;
  }
  export type TranscriptionJobName = string;
  export type TranscriptionJobStatus = "IN_PROGRESS"|"FAILED"|"COMPLETED"|string;
  export type TranscriptionJobSummaries = TranscriptionJobSummary[];
  export interface TranscriptionJobSummary {
    /**
     * The name assigned to the transcription job when it was created.
     */
    TranscriptionJobName?: TranscriptionJobName;
    /**
     * Timestamp of the date and time that the job was created.
     */
    CreationTime?: DateTime;
    /**
     * Timestamp of the date and time that the job completed.
     */
    CompletionTime?: DateTime;
    /**
     * The language code for the input speech.
     */
    LanguageCode?: LanguageCode;
    /**
     * The status of the transcription job. When the status is COMPLETED, use the GetTranscriptionJob operation to get the results of the transcription.
     */
    TranscriptionJobStatus?: TranscriptionJobStatus;
    /**
     * If the TranscriptionJobStatus field is FAILED, this field contains a description of the error.
     */
    FailureReason?: FailureReason;
  }
  export type Uri = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-10-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the TranscribeService client.
   */
  export import Types = TranscribeService;
}
export = TranscribeService;
