import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class MarketplaceDeployment extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MarketplaceDeployment.Types.ClientConfiguration)
  config: Config & MarketplaceDeployment.Types.ClientConfiguration;
  /**
   * Lists all tags that have been added to a deployment parameter resource.
   */
  listTagsForResource(params: MarketplaceDeployment.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: MarketplaceDeployment.Types.ListTagsForResourceResponse) => void): Request<MarketplaceDeployment.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all tags that have been added to a deployment parameter resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: MarketplaceDeployment.Types.ListTagsForResourceResponse) => void): Request<MarketplaceDeployment.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Creates or updates a deployment parameter and is targeted by catalog and agreementId.
   */
  putDeploymentParameter(params: MarketplaceDeployment.Types.PutDeploymentParameterRequest, callback?: (err: AWSError, data: MarketplaceDeployment.Types.PutDeploymentParameterResponse) => void): Request<MarketplaceDeployment.Types.PutDeploymentParameterResponse, AWSError>;
  /**
   * Creates or updates a deployment parameter and is targeted by catalog and agreementId.
   */
  putDeploymentParameter(callback?: (err: AWSError, data: MarketplaceDeployment.Types.PutDeploymentParameterResponse) => void): Request<MarketplaceDeployment.Types.PutDeploymentParameterResponse, AWSError>;
  /**
   * Tags a resource.
   */
  tagResource(params: MarketplaceDeployment.Types.TagResourceRequest, callback?: (err: AWSError, data: MarketplaceDeployment.Types.TagResourceResponse) => void): Request<MarketplaceDeployment.Types.TagResourceResponse, AWSError>;
  /**
   * Tags a resource.
   */
  tagResource(callback?: (err: AWSError, data: MarketplaceDeployment.Types.TagResourceResponse) => void): Request<MarketplaceDeployment.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag or list of tags from a resource.
   */
  untagResource(params: MarketplaceDeployment.Types.UntagResourceRequest, callback?: (err: AWSError, data: MarketplaceDeployment.Types.UntagResourceResponse) => void): Request<MarketplaceDeployment.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag or list of tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: MarketplaceDeployment.Types.UntagResourceResponse) => void): Request<MarketplaceDeployment.Types.UntagResourceResponse, AWSError>;
}
declare namespace MarketplaceDeployment {
  export type Catalog = string;
  export type ClientToken = string;
  export interface DeploymentParameterInput {
    /**
     * The desired name of the deployment parameter. This is the identifier on which deployment parameters are keyed for a given buyer and product. If this name matches an existing deployment parameter, this request will update the existing resource.
     */
    name: DeploymentParameterName;
    /**
     * The text to encrypt and store in the secret.
     */
    secretString: SecretString;
  }
  export type DeploymentParameterName = string;
  export type DeploymentParameterResourceIdentifier = string;
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) associated with the deployment parameter resource you want to list tags on.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A map of key-value pairs, where each pair represents a tag present on the resource.
     */
    tags?: Tags;
  }
  export interface PutDeploymentParameterRequest {
    /**
     * The unique identifier of the agreement.
     */
    agreementId: ResourceId;
    /**
     * The catalog related to the request. Fixed value: AWS Marketplace 
     */
    catalog: Catalog;
    /**
     * The idempotency token for deployment parameters. A unique identifier for the new version.
     */
    clientToken?: ClientToken;
    /**
     * The deployment parameter targeted to the acceptor of an agreement for which to create the AWS Secret Manager resource.
     */
    deploymentParameter: DeploymentParameterInput;
    /**
     * The date when deployment parameters expire and are scheduled for deletion.
     */
    expirationDate?: SyntheticTimestamp_date_time;
    /**
     * The product for which AWS Marketplace will save secrets for the buyer’s account.
     */
    productId: ResourceId;
    /**
     * A map of key-value pairs, where each pair represents a tag saved to the resource. Tags will only be applied for create operations, and they'll be ignored if the resource already exists.
     */
    tags?: TagsMap;
  }
  export interface PutDeploymentParameterResponse {
    /**
     * The unique identifier of the agreement.
     */
    agreementId: ResourceId;
    /**
     * The unique identifier of the deployment parameter.
     */
    deploymentParameterId: DeploymentParameterResourceIdentifier;
    /**
     * The Amazon Resource Name (ARN) associated with the deployment parameter resource you want to create or update.
     */
    resourceArn: ResourceArn;
    /**
     * A map of key-value pairs, where each pair represents a tag saved to the resource. Tags will only be applied for create operations, and they'll be ignored if the resource already exists.
     */
    tags?: TagsMap;
  }
  export type ResourceArn = string;
  export type ResourceId = string;
  export type SecretString = string;
  export type String = string;
  export type StringList = String[];
  export type SyntheticTimestamp_date_time = Date;
  export type TagKey = string;
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) associated with the resource you want to tag.
     */
    resourceArn: String;
    /**
     * A map of key-value pairs, where each pair represents a tag present on the resource.
     */
    tags?: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = {[key: string]: String};
  export type TagsMap = {[key: string]: TagValue};
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.
     */
    resourceArn: String;
    /**
     * A list of key names of tags to be removed.
     */
    tagKeys: StringList;
  }
  export interface UntagResourceResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-01-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MarketplaceDeployment client.
   */
  export import Types = MarketplaceDeployment;
}
export = MarketplaceDeployment;
