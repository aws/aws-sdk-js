import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ElasticInference extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ElasticInference.Types.ClientConfiguration)
  config: Config & ElasticInference.Types.ClientConfiguration;
  /**
   * Returns all tags of an Elastic Inference Accelerator.
   */
  listTagsForResource(params: ElasticInference.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: ElasticInference.Types.ListTagsForResourceResult) => void): Request<ElasticInference.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Returns all tags of an Elastic Inference Accelerator.
   */
  listTagsForResource(callback?: (err: AWSError, data: ElasticInference.Types.ListTagsForResourceResult) => void): Request<ElasticInference.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Adds the specified tag(s) to an Elastic Inference Accelerator.
   */
  tagResource(params: ElasticInference.Types.TagResourceRequest, callback?: (err: AWSError, data: ElasticInference.Types.TagResourceResult) => void): Request<ElasticInference.Types.TagResourceResult, AWSError>;
  /**
   * Adds the specified tag(s) to an Elastic Inference Accelerator.
   */
  tagResource(callback?: (err: AWSError, data: ElasticInference.Types.TagResourceResult) => void): Request<ElasticInference.Types.TagResourceResult, AWSError>;
  /**
   * Removes the specified tag(s) from an Elastic Inference Accelerator.
   */
  untagResource(params: ElasticInference.Types.UntagResourceRequest, callback?: (err: AWSError, data: ElasticInference.Types.UntagResourceResult) => void): Request<ElasticInference.Types.UntagResourceResult, AWSError>;
  /**
   * Removes the specified tag(s) from an Elastic Inference Accelerator.
   */
  untagResource(callback?: (err: AWSError, data: ElasticInference.Types.UntagResourceResult) => void): Request<ElasticInference.Types.UntagResourceResult, AWSError>;
}
declare namespace ElasticInference {
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the Elastic Inference Accelerator to list the tags for.
     */
    resourceArn: ResourceARN;
  }
  export interface ListTagsForResourceResult {
    /**
     * The tags of the Elastic Inference Accelerator.
     */
    tags?: TagMap;
  }
  export type ResourceARN = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN of the Elastic Inference Accelerator to tag.
     */
    resourceArn: ResourceARN;
    /**
     * The tags to add to the Elastic Inference Accelerator.
     */
    tags: TagMap;
  }
  export interface TagResourceResult {
  }
  export type TagValue = string;
  export interface UntagResourceRequest {
    /**
     * The ARN of the Elastic Inference Accelerator to untag.
     */
    resourceArn: ResourceARN;
    /**
     * The list of tags to remove from the Elastic Inference Accelerator.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResult {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ElasticInference client.
   */
  export import Types = ElasticInference;
}
export = ElasticInference;
