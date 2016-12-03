import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ECR extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ECR.Types.ClientConfiguration)
  config: Config & ECR.Types.ClientConfiguration;
  /**
   * Check the availability of multiple image layers in a specified registry and repository.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  batchCheckLayerAvailability(params: ECR.Types.BatchCheckLayerAvailabilityRequest, callback?: (err: AWSError, data: ECR.Types.BatchCheckLayerAvailabilityResponse) => void): Request<ECR.Types.BatchCheckLayerAvailabilityResponse, AWSError>;
  /**
   * Check the availability of multiple image layers in a specified registry and repository.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  batchCheckLayerAvailability(callback?: (err: AWSError, data: ECR.Types.BatchCheckLayerAvailabilityResponse) => void): Request<ECR.Types.BatchCheckLayerAvailabilityResponse, AWSError>;
  /**
   * Deletes a list of specified images within a specified repository. Images are specified with either imageTag or imageDigest.
   */
  batchDeleteImage(params: ECR.Types.BatchDeleteImageRequest, callback?: (err: AWSError, data: ECR.Types.BatchDeleteImageResponse) => void): Request<ECR.Types.BatchDeleteImageResponse, AWSError>;
  /**
   * Deletes a list of specified images within a specified repository. Images are specified with either imageTag or imageDigest.
   */
  batchDeleteImage(callback?: (err: AWSError, data: ECR.Types.BatchDeleteImageResponse) => void): Request<ECR.Types.BatchDeleteImageResponse, AWSError>;
  /**
   * Gets detailed information for specified images within a specified repository. Images are specified with either imageTag or imageDigest.
   */
  batchGetImage(params: ECR.Types.BatchGetImageRequest, callback?: (err: AWSError, data: ECR.Types.BatchGetImageResponse) => void): Request<ECR.Types.BatchGetImageResponse, AWSError>;
  /**
   * Gets detailed information for specified images within a specified repository. Images are specified with either imageTag or imageDigest.
   */
  batchGetImage(callback?: (err: AWSError, data: ECR.Types.BatchGetImageResponse) => void): Request<ECR.Types.BatchGetImageResponse, AWSError>;
  /**
   * Inform Amazon ECR that the image layer upload for a specified registry, repository name, and upload ID, has completed. You can optionally provide a sha256 digest of the image layer for data validation purposes.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  completeLayerUpload(params: ECR.Types.CompleteLayerUploadRequest, callback?: (err: AWSError, data: ECR.Types.CompleteLayerUploadResponse) => void): Request<ECR.Types.CompleteLayerUploadResponse, AWSError>;
  /**
   * Inform Amazon ECR that the image layer upload for a specified registry, repository name, and upload ID, has completed. You can optionally provide a sha256 digest of the image layer for data validation purposes.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  completeLayerUpload(callback?: (err: AWSError, data: ECR.Types.CompleteLayerUploadResponse) => void): Request<ECR.Types.CompleteLayerUploadResponse, AWSError>;
  /**
   * Creates an image repository.
   */
  createRepository(params: ECR.Types.CreateRepositoryRequest, callback?: (err: AWSError, data: ECR.Types.CreateRepositoryResponse) => void): Request<ECR.Types.CreateRepositoryResponse, AWSError>;
  /**
   * Creates an image repository.
   */
  createRepository(callback?: (err: AWSError, data: ECR.Types.CreateRepositoryResponse) => void): Request<ECR.Types.CreateRepositoryResponse, AWSError>;
  /**
   * Deletes an existing image repository. If a repository contains images, you must use the force option to delete it.
   */
  deleteRepository(params: ECR.Types.DeleteRepositoryRequest, callback?: (err: AWSError, data: ECR.Types.DeleteRepositoryResponse) => void): Request<ECR.Types.DeleteRepositoryResponse, AWSError>;
  /**
   * Deletes an existing image repository. If a repository contains images, you must use the force option to delete it.
   */
  deleteRepository(callback?: (err: AWSError, data: ECR.Types.DeleteRepositoryResponse) => void): Request<ECR.Types.DeleteRepositoryResponse, AWSError>;
  /**
   * Deletes the repository policy from a specified repository.
   */
  deleteRepositoryPolicy(params: ECR.Types.DeleteRepositoryPolicyRequest, callback?: (err: AWSError, data: ECR.Types.DeleteRepositoryPolicyResponse) => void): Request<ECR.Types.DeleteRepositoryPolicyResponse, AWSError>;
  /**
   * Deletes the repository policy from a specified repository.
   */
  deleteRepositoryPolicy(callback?: (err: AWSError, data: ECR.Types.DeleteRepositoryPolicyResponse) => void): Request<ECR.Types.DeleteRepositoryPolicyResponse, AWSError>;
  /**
   * Returns metadata about the images in a repository, including image size and creation date.  Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the docker images command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by DescribeImages. 
   */
  describeImages(params: ECR.Types.DescribeImagesRequest, callback?: (err: AWSError, data: ECR.Types.DescribeImagesResponse) => void): Request<ECR.Types.DescribeImagesResponse, AWSError>;
  /**
   * Returns metadata about the images in a repository, including image size and creation date.  Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the docker images command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by DescribeImages. 
   */
  describeImages(callback?: (err: AWSError, data: ECR.Types.DescribeImagesResponse) => void): Request<ECR.Types.DescribeImagesResponse, AWSError>;
  /**
   * Describes image repositories in a registry.
   */
  describeRepositories(params: ECR.Types.DescribeRepositoriesRequest, callback?: (err: AWSError, data: ECR.Types.DescribeRepositoriesResponse) => void): Request<ECR.Types.DescribeRepositoriesResponse, AWSError>;
  /**
   * Describes image repositories in a registry.
   */
  describeRepositories(callback?: (err: AWSError, data: ECR.Types.DescribeRepositoriesResponse) => void): Request<ECR.Types.DescribeRepositoriesResponse, AWSError>;
  /**
   * Retrieves a token that is valid for a specified registry for 12 hours. This command allows you to use the docker CLI to push and pull images with Amazon ECR. If you do not specify a registry, the default registry is assumed. The authorizationToken returned for each registry specified is a base64 encoded string that can be decoded and used in a docker login command to authenticate to a registry. The AWS CLI offers an aws ecr get-login command that simplifies the login process.
   */
  getAuthorizationToken(params: ECR.Types.GetAuthorizationTokenRequest, callback?: (err: AWSError, data: ECR.Types.GetAuthorizationTokenResponse) => void): Request<ECR.Types.GetAuthorizationTokenResponse, AWSError>;
  /**
   * Retrieves a token that is valid for a specified registry for 12 hours. This command allows you to use the docker CLI to push and pull images with Amazon ECR. If you do not specify a registry, the default registry is assumed. The authorizationToken returned for each registry specified is a base64 encoded string that can be decoded and used in a docker login command to authenticate to a registry. The AWS CLI offers an aws ecr get-login command that simplifies the login process.
   */
  getAuthorizationToken(callback?: (err: AWSError, data: ECR.Types.GetAuthorizationTokenResponse) => void): Request<ECR.Types.GetAuthorizationTokenResponse, AWSError>;
  /**
   * Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  getDownloadUrlForLayer(params: ECR.Types.GetDownloadUrlForLayerRequest, callback?: (err: AWSError, data: ECR.Types.GetDownloadUrlForLayerResponse) => void): Request<ECR.Types.GetDownloadUrlForLayerResponse, AWSError>;
  /**
   * Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  getDownloadUrlForLayer(callback?: (err: AWSError, data: ECR.Types.GetDownloadUrlForLayerResponse) => void): Request<ECR.Types.GetDownloadUrlForLayerResponse, AWSError>;
  /**
   * Retrieves the repository policy for a specified repository.
   */
  getRepositoryPolicy(params: ECR.Types.GetRepositoryPolicyRequest, callback?: (err: AWSError, data: ECR.Types.GetRepositoryPolicyResponse) => void): Request<ECR.Types.GetRepositoryPolicyResponse, AWSError>;
  /**
   * Retrieves the repository policy for a specified repository.
   */
  getRepositoryPolicy(callback?: (err: AWSError, data: ECR.Types.GetRepositoryPolicyResponse) => void): Request<ECR.Types.GetRepositoryPolicyResponse, AWSError>;
  /**
   * Notify Amazon ECR that you intend to upload an image layer.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  initiateLayerUpload(params: ECR.Types.InitiateLayerUploadRequest, callback?: (err: AWSError, data: ECR.Types.InitiateLayerUploadResponse) => void): Request<ECR.Types.InitiateLayerUploadResponse, AWSError>;
  /**
   * Notify Amazon ECR that you intend to upload an image layer.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  initiateLayerUpload(callback?: (err: AWSError, data: ECR.Types.InitiateLayerUploadResponse) => void): Request<ECR.Types.InitiateLayerUploadResponse, AWSError>;
  /**
   * Lists all the image IDs for a given repository. You can filter images based on whether or not they are tagged by setting the tagStatus parameter to TAGGED or UNTAGGED. For example, you can filter your results to return only UNTAGGED images and then pipe that result to a BatchDeleteImage operation to delete them. Or, you can filter your results to return only TAGGED images to list all of the tags in your repository.
   */
  listImages(params: ECR.Types.ListImagesRequest, callback?: (err: AWSError, data: ECR.Types.ListImagesResponse) => void): Request<ECR.Types.ListImagesResponse, AWSError>;
  /**
   * Lists all the image IDs for a given repository. You can filter images based on whether or not they are tagged by setting the tagStatus parameter to TAGGED or UNTAGGED. For example, you can filter your results to return only UNTAGGED images and then pipe that result to a BatchDeleteImage operation to delete them. Or, you can filter your results to return only TAGGED images to list all of the tags in your repository.
   */
  listImages(callback?: (err: AWSError, data: ECR.Types.ListImagesResponse) => void): Request<ECR.Types.ListImagesResponse, AWSError>;
  /**
   * Creates or updates the image manifest associated with an image.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  putImage(params: ECR.Types.PutImageRequest, callback?: (err: AWSError, data: ECR.Types.PutImageResponse) => void): Request<ECR.Types.PutImageResponse, AWSError>;
  /**
   * Creates or updates the image manifest associated with an image.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  putImage(callback?: (err: AWSError, data: ECR.Types.PutImageResponse) => void): Request<ECR.Types.PutImageResponse, AWSError>;
  /**
   * Applies a repository policy on a specified repository to control access permissions.
   */
  setRepositoryPolicy(params: ECR.Types.SetRepositoryPolicyRequest, callback?: (err: AWSError, data: ECR.Types.SetRepositoryPolicyResponse) => void): Request<ECR.Types.SetRepositoryPolicyResponse, AWSError>;
  /**
   * Applies a repository policy on a specified repository to control access permissions.
   */
  setRepositoryPolicy(callback?: (err: AWSError, data: ECR.Types.SetRepositoryPolicyResponse) => void): Request<ECR.Types.SetRepositoryPolicyResponse, AWSError>;
  /**
   * Uploads an image layer part to Amazon ECR.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  uploadLayerPart(params: ECR.Types.UploadLayerPartRequest, callback?: (err: AWSError, data: ECR.Types.UploadLayerPartResponse) => void): Request<ECR.Types.UploadLayerPartResponse, AWSError>;
  /**
   * Uploads an image layer part to Amazon ECR.  This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers. Use the docker CLI to pull, tag, and push images. 
   */
  uploadLayerPart(callback?: (err: AWSError, data: ECR.Types.UploadLayerPartResponse) => void): Request<ECR.Types.UploadLayerPartResponse, AWSError>;
}
declare namespace ECR {
  export type Arn = string;
  export interface AuthorizationData {
    /**
     * A base64-encoded string that contains authorization data for the specified Amazon ECR registry. When the string is decoded, it is presented in the format user:password for private registry authentication using docker login.
     */
    authorizationToken?: Base64;
    /**
     * The Unix time in seconds and milliseconds when the authorization token expires. Authorization tokens are valid for 12 hours.
     */
    expiresAt?: ExpirationTimestamp;
    /**
     * The registry URL to use for this authorization token in a docker login command. The Amazon ECR registry URL format is https://aws_account_id.dkr.ecr.region.amazonaws.com. For example, https://012345678910.dkr.ecr.us-east-1.amazonaws.com.. 
     */
    proxyEndpoint?: ProxyEndpoint;
  }
  export type AuthorizationDataList = AuthorizationData[];
  export type Base64 = string;
  export interface BatchCheckLayerAvailabilityRequest {
    /**
     * The AWS account ID associated with the registry that contains the image layers to check. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository that is associated with the image layers to check.
     */
    repositoryName: RepositoryName;
    /**
     * The digests of the image layers to check.
     */
    layerDigests: BatchedOperationLayerDigestList;
  }
  export interface BatchCheckLayerAvailabilityResponse {
    /**
     * A list of image layer objects corresponding to the image layer references in the request.
     */
    layers?: LayerList;
    /**
     * Any failures associated with the call.
     */
    failures?: LayerFailureList;
  }
  export interface BatchDeleteImageRequest {
    /**
     * The AWS account ID associated with the registry that contains the image to delete. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The repository that contains the image to delete.
     */
    repositoryName: RepositoryName;
    /**
     * A list of image ID references that correspond to images to delete. The format of the imageIds reference is imageTag=tag or imageDigest=digest.
     */
    imageIds: ImageIdentifierList;
  }
  export interface BatchDeleteImageResponse {
    /**
     * The image IDs of the deleted images.
     */
    imageIds?: ImageIdentifierList;
    /**
     * Any failures associated with the call.
     */
    failures?: ImageFailureList;
  }
  export interface BatchGetImageRequest {
    /**
     * The AWS account ID associated with the registry that contains the images to describe. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The repository that contains the images to describe.
     */
    repositoryName: RepositoryName;
    /**
     * A list of image ID references that correspond to images to describe. The format of the imageIds reference is imageTag=tag or imageDigest=digest.
     */
    imageIds: ImageIdentifierList;
  }
  export interface BatchGetImageResponse {
    /**
     * A list of image objects corresponding to the image references in the request.
     */
    images?: ImageList;
    /**
     * Any failures associated with the call.
     */
    failures?: ImageFailureList;
  }
  export type BatchedOperationLayerDigest = string;
  export type BatchedOperationLayerDigestList = BatchedOperationLayerDigest[];
  export interface CompleteLayerUploadRequest {
    /**
     * The AWS account ID associated with the registry to which to upload layers. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository to associate with the image layer.
     */
    repositoryName: RepositoryName;
    /**
     * The upload ID from a previous InitiateLayerUpload operation to associate with the image layer.
     */
    uploadId: UploadId;
    /**
     * The sha256 digest of the image layer.
     */
    layerDigests: LayerDigestList;
  }
  export interface CompleteLayerUploadResponse {
    /**
     * The registry ID associated with the request.
     */
    registryId?: RegistryId;
    /**
     * The repository name associated with the request.
     */
    repositoryName?: RepositoryName;
    /**
     * The upload ID associated with the layer.
     */
    uploadId?: UploadId;
    /**
     * The sha256 digest of the image layer.
     */
    layerDigest?: LayerDigest;
  }
  export interface CreateRepositoryRequest {
    /**
     * The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app).
     */
    repositoryName: RepositoryName;
  }
  export interface CreateRepositoryResponse {
    /**
     * The repository that was created.
     */
    repository?: Repository;
  }
  export type CreationTimestamp = Date;
  export interface DeleteRepositoryPolicyRequest {
    /**
     * The AWS account ID associated with the registry that contains the repository policy to delete. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository that is associated with the repository policy to delete.
     */
    repositoryName: RepositoryName;
  }
  export interface DeleteRepositoryPolicyResponse {
    /**
     * The registry ID associated with the request.
     */
    registryId?: RegistryId;
    /**
     * The repository name associated with the request.
     */
    repositoryName?: RepositoryName;
    /**
     * The JSON repository policy that was deleted from the repository.
     */
    policyText?: RepositoryPolicyText;
  }
  export interface DeleteRepositoryRequest {
    /**
     * The AWS account ID associated with the registry that contains the repository to delete. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository to delete.
     */
    repositoryName: RepositoryName;
    /**
     * Force the deletion of the repository if it contains images.
     */
    force?: ForceFlag;
  }
  export interface DeleteRepositoryResponse {
    /**
     * The repository that was deleted.
     */
    repository?: Repository;
  }
  export interface DescribeImagesFilter {
    /**
     * The tag status with which to filter your DescribeImages results. You can filter results based on whether they are TAGGED or UNTAGGED.
     */
    tagStatus?: TagStatus;
  }
  export interface DescribeImagesRequest {
    /**
     * The AWS account ID associated with the registry that contains the repository in which to list images. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * A list of repositories to describe. If this parameter is omitted, then all repositories in a registry are described.
     */
    repositoryName: RepositoryName;
    /**
     * The list of image IDs for the requested repository.
     */
    imageIds?: ImageIdentifierList;
    /**
     * The nextToken value returned from a previous paginated DescribeImages request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of repository results returned by DescribeImages in paginated output. When this parameter is used, DescribeImages only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeImages request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then DescribeImages returns up to 100 results and a nextToken value, if applicable.
     */
    maxResults?: MaxResults;
    /**
     * The filter key and value with which to filter your DescribeImages results.
     */
    filter?: DescribeImagesFilter;
  }
  export interface DescribeImagesResponse {
    /**
     * A list of ImageDetail objects that contain data about the image.
     */
    imageDetails?: ImageDetailList;
    /**
     * The nextToken value to include in a future DescribeImages request. When the results of a DescribeImages request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
  }
  export interface DescribeRepositoriesRequest {
    /**
     * The AWS account ID associated with the registry that contains the repositories to be described. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * A list of repositories to describe. If this parameter is omitted, then all repositories in a registry are described.
     */
    repositoryNames?: RepositoryNameList;
    /**
     * The nextToken value returned from a previous paginated DescribeRepositories request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: NextToken;
    /**
     * The maximum number of repository results returned by DescribeRepositories in paginated output. When this parameter is used, DescribeRepositories only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeRepositories request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then DescribeRepositories returns up to 100 results and a nextToken value, if applicable.
     */
    maxResults?: MaxResults;
  }
  export interface DescribeRepositoriesResponse {
    /**
     * A list of repository objects corresponding to valid repositories.
     */
    repositories?: RepositoryList;
    /**
     * The nextToken value to include in a future DescribeRepositories request. When the results of a DescribeRepositories request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
  }
  export type ExceptionMessage = string;
  export type ExpirationTimestamp = Date;
  export type ForceFlag = boolean;
  export type GetAuthorizationTokenRegistryIdList = RegistryId[];
  export interface GetAuthorizationTokenRequest {
    /**
     * A list of AWS account IDs that are associated with the registries for which to get authorization tokens. If you do not specify a registry, the default registry is assumed.
     */
    registryIds?: GetAuthorizationTokenRegistryIdList;
  }
  export interface GetAuthorizationTokenResponse {
    /**
     * A list of authorization token data objects that correspond to the registryIds values in the request.
     */
    authorizationData?: AuthorizationDataList;
  }
  export interface GetDownloadUrlForLayerRequest {
    /**
     * The AWS account ID associated with the registry that contains the image layer to download. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository that is associated with the image layer to download.
     */
    repositoryName: RepositoryName;
    /**
     * The digest of the image layer to download.
     */
    layerDigest: LayerDigest;
  }
  export interface GetDownloadUrlForLayerResponse {
    /**
     * The pre-signed Amazon S3 download URL for the requested layer.
     */
    downloadUrl?: Url;
    /**
     * The digest of the image layer to download.
     */
    layerDigest?: LayerDigest;
  }
  export interface GetRepositoryPolicyRequest {
    /**
     * The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository whose policy you want to retrieve.
     */
    repositoryName: RepositoryName;
  }
  export interface GetRepositoryPolicyResponse {
    /**
     * The registry ID associated with the request.
     */
    registryId?: RegistryId;
    /**
     * The repository name associated with the request.
     */
    repositoryName?: RepositoryName;
    /**
     * The JSON repository policy text associated with the repository.
     */
    policyText?: RepositoryPolicyText;
  }
  export interface Image {
    /**
     * The AWS account ID associated with the registry containing the image.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository associated with the image.
     */
    repositoryName?: RepositoryName;
    /**
     * An object containing the image tag and image digest associated with an image.
     */
    imageId?: ImageIdentifier;
    /**
     * The image manifest associated with the image.
     */
    imageManifest?: ImageManifest;
  }
  export interface ImageDetail {
    /**
     * The AWS account ID associated with the registry to which this image belongs.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository to which this image belongs.
     */
    repositoryName?: RepositoryName;
    /**
     * The sha256 digest of the image manifest.
     */
    imageDigest?: ImageDigest;
    /**
     * The list of tags associated with this image.
     */
    imageTags?: ImageTagList;
    /**
     * The size, in bytes, of the image in the repository.  Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the docker images command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by DescribeImages. 
     */
    imageSizeInBytes?: ImageSizeInBytes;
    /**
     * The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository. 
     */
    imagePushedAt?: PushTimestamp;
  }
  export type ImageDetailList = ImageDetail[];
  export type ImageDigest = string;
  export interface ImageFailure {
    /**
     * The image ID associated with the failure.
     */
    imageId?: ImageIdentifier;
    /**
     * The code associated with the failure.
     */
    failureCode?: ImageFailureCode;
    /**
     * The reason for the failure.
     */
    failureReason?: ImageFailureReason;
  }
  export type ImageFailureCode = "InvalidImageDigest"|"InvalidImageTag"|"ImageTagDoesNotMatchDigest"|"ImageNotFound"|"MissingDigestAndTag"|string;
  export type ImageFailureList = ImageFailure[];
  export type ImageFailureReason = string;
  export interface ImageIdentifier {
    /**
     * The sha256 digest of the image manifest.
     */
    imageDigest?: ImageDigest;
    /**
     * The tag used for the image.
     */
    imageTag?: ImageTag;
  }
  export type ImageIdentifierList = ImageIdentifier[];
  export type ImageList = Image[];
  export type ImageManifest = string;
  export type ImageSizeInBytes = number;
  export type ImageTag = string;
  export type ImageTagList = ImageTag[];
  export interface InitiateLayerUploadRequest {
    /**
     * The AWS account ID associated with the registry that you intend to upload layers to. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository that you intend to upload layers to.
     */
    repositoryName: RepositoryName;
  }
  export interface InitiateLayerUploadResponse {
    /**
     * The upload ID for the layer upload. This parameter is passed to further UploadLayerPart and CompleteLayerUpload operations.
     */
    uploadId?: UploadId;
    /**
     * The size, in bytes, that Amazon ECR expects future layer part uploads to be.
     */
    partSize?: PartSize;
  }
  export interface Layer {
    /**
     * The sha256 digest of the image layer.
     */
    layerDigest?: LayerDigest;
    /**
     * The availability status of the image layer. Valid values are AVAILABLE and UNAVAILABLE.
     */
    layerAvailability?: LayerAvailability;
    /**
     * The size, in bytes, of the image layer.
     */
    layerSize?: LayerSizeInBytes;
  }
  export type LayerAvailability = "AVAILABLE"|"UNAVAILABLE"|string;
  export type LayerDigest = string;
  export type LayerDigestList = LayerDigest[];
  export interface LayerFailure {
    /**
     * The layer digest associated with the failure.
     */
    layerDigest?: BatchedOperationLayerDigest;
    /**
     * The failure code associated with the failure.
     */
    failureCode?: LayerFailureCode;
    /**
     * The reason for the failure.
     */
    failureReason?: LayerFailureReason;
  }
  export type LayerFailureCode = "InvalidLayerDigest"|"MissingLayerDigest"|string;
  export type LayerFailureList = LayerFailure[];
  export type LayerFailureReason = string;
  export type LayerList = Layer[];
  export type LayerPartBlob = Buffer|Uint8Array|Blob|string;
  export type LayerSizeInBytes = number;
  export interface ListImagesFilter {
    /**
     * The tag status with which to filter your ListImages results. You can filter results based on whether they are TAGGED or UNTAGGED.
     */
    tagStatus?: TagStatus;
  }
  export interface ListImagesRequest {
    /**
     * The AWS account ID associated with the registry that contains the repository to list images in. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The repository whose image IDs are to be listed.
     */
    repositoryName: RepositoryName;
    /**
     * The nextToken value returned from a previous paginated ListImages request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: NextToken;
    /**
     * The maximum number of image results returned by ListImages in paginated output. When this parameter is used, ListImages only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListImages request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListImages returns up to 100 results and a nextToken value, if applicable.
     */
    maxResults?: MaxResults;
    /**
     * The filter key and value with which to filter your ListImages results.
     */
    filter?: ListImagesFilter;
  }
  export interface ListImagesResponse {
    /**
     * The list of image IDs for the requested repository.
     */
    imageIds?: ImageIdentifierList;
    /**
     * The nextToken value to include in a future ListImages request. When the results of a ListImages request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: NextToken;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type PartSize = number;
  export type ProxyEndpoint = string;
  export type PushTimestamp = Date;
  export interface PutImageRequest {
    /**
     * The AWS account ID associated with the registry that contains the repository in which to put the image. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository in which to put the image.
     */
    repositoryName: RepositoryName;
    /**
     * The image manifest corresponding to the image to be uploaded.
     */
    imageManifest: ImageManifest;
  }
  export interface PutImageResponse {
    /**
     * Details of the image uploaded.
     */
    image?: Image;
  }
  export type RegistryId = string;
  export interface Repository {
    /**
     * The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the arn:aws:ecr namespace, followed by the region of the repository, the AWS account ID of the repository owner, the repository namespace, and then the repository name. For example, arn:aws:ecr:region:012345678910:repository/test.
     */
    repositoryArn?: Arn;
    /**
     * The AWS account ID associated with the registry that contains the repository.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository.
     */
    repositoryName?: RepositoryName;
    /**
     * The URI for the repository. You can use this URI for Docker push and pull operations.
     */
    repositoryUri?: Url;
    /**
     * The date and time, in JavaScript date/time format, when the repository was created.
     */
    createdAt?: CreationTimestamp;
  }
  export type RepositoryList = Repository[];
  export type RepositoryName = string;
  export type RepositoryNameList = RepositoryName[];
  export type RepositoryPolicyText = string;
  export interface SetRepositoryPolicyRequest {
    /**
     * The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository to receive the policy.
     */
    repositoryName: RepositoryName;
    /**
     * The JSON repository policy text to apply to the repository.
     */
    policyText: RepositoryPolicyText;
    /**
     * If the policy you are attempting to set on a repository policy would prevent you from setting another policy in the future, you must force the SetRepositoryPolicy operation. This is intended to prevent accidental repository lock outs.
     */
    force?: ForceFlag;
  }
  export interface SetRepositoryPolicyResponse {
    /**
     * The registry ID associated with the request.
     */
    registryId?: RegistryId;
    /**
     * The repository name associated with the request.
     */
    repositoryName?: RepositoryName;
    /**
     * The JSON repository policy text applied to the repository.
     */
    policyText?: RepositoryPolicyText;
  }
  export type TagStatus = "TAGGED"|"UNTAGGED"|string;
  export type UploadId = string;
  export interface UploadLayerPartRequest {
    /**
     * The AWS account ID associated with the registry that you are uploading layer parts to. If you do not specify a registry, the default registry is assumed.
     */
    registryId?: RegistryId;
    /**
     * The name of the repository that you are uploading layer parts to.
     */
    repositoryName: RepositoryName;
    /**
     * The upload ID from a previous InitiateLayerUpload operation to associate with the layer part upload.
     */
    uploadId: UploadId;
    /**
     * The integer value of the first byte of the layer part.
     */
    partFirstByte: PartSize;
    /**
     * The integer value of the last byte of the layer part.
     */
    partLastByte: PartSize;
    /**
     * The base64-encoded layer part payload.
     */
    layerPartBlob: LayerPartBlob;
  }
  export interface UploadLayerPartResponse {
    /**
     * The registry ID associated with the request.
     */
    registryId?: RegistryId;
    /**
     * The repository name associated with the request.
     */
    repositoryName?: RepositoryName;
    /**
     * The upload ID associated with the request.
     */
    uploadId?: UploadId;
    /**
     * The integer value of the last byte received in the request.
     */
    lastByteReceived?: PartSize;
  }
  export type Url = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-09-21"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ECR client.
   */
  export import Types = ECR;
}
export = ECR;
