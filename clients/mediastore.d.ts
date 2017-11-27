import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MediaStore extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MediaStore.Types.ClientConfiguration)
  config: Config & MediaStore.Types.ClientConfiguration;
  /**
   * Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.
   */
  createContainer(params: MediaStore.Types.CreateContainerInput, callback?: (err: AWSError, data: MediaStore.Types.CreateContainerOutput) => void): Request<MediaStore.Types.CreateContainerOutput, AWSError>;
  /**
   * Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.
   */
  createContainer(callback?: (err: AWSError, data: MediaStore.Types.CreateContainerOutput) => void): Request<MediaStore.Types.CreateContainerOutput, AWSError>;
  /**
   * Deletes the specified container. Before you make a DeleteContainer request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 
   */
  deleteContainer(params: MediaStore.Types.DeleteContainerInput, callback?: (err: AWSError, data: MediaStore.Types.DeleteContainerOutput) => void): Request<MediaStore.Types.DeleteContainerOutput, AWSError>;
  /**
   * Deletes the specified container. Before you make a DeleteContainer request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 
   */
  deleteContainer(callback?: (err: AWSError, data: MediaStore.Types.DeleteContainerOutput) => void): Request<MediaStore.Types.DeleteContainerOutput, AWSError>;
  /**
   * Deletes the access policy that is associated with the specified container.
   */
  deleteContainerPolicy(params: MediaStore.Types.DeleteContainerPolicyInput, callback?: (err: AWSError, data: MediaStore.Types.DeleteContainerPolicyOutput) => void): Request<MediaStore.Types.DeleteContainerPolicyOutput, AWSError>;
  /**
   * Deletes the access policy that is associated with the specified container.
   */
  deleteContainerPolicy(callback?: (err: AWSError, data: MediaStore.Types.DeleteContainerPolicyOutput) => void): Request<MediaStore.Types.DeleteContainerPolicyOutput, AWSError>;
  /**
   * Retrieves the properties of the requested container. This returns a single Container object based on ContainerName. To return all Container objects that are associated with a specified AWS account, use ListContainers.
   */
  describeContainer(params: MediaStore.Types.DescribeContainerInput, callback?: (err: AWSError, data: MediaStore.Types.DescribeContainerOutput) => void): Request<MediaStore.Types.DescribeContainerOutput, AWSError>;
  /**
   * Retrieves the properties of the requested container. This returns a single Container object based on ContainerName. To return all Container objects that are associated with a specified AWS account, use ListContainers.
   */
  describeContainer(callback?: (err: AWSError, data: MediaStore.Types.DescribeContainerOutput) => void): Request<MediaStore.Types.DescribeContainerOutput, AWSError>;
  /**
   * Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the AWS Identity and Access Management User Guide.
   */
  getContainerPolicy(params: MediaStore.Types.GetContainerPolicyInput, callback?: (err: AWSError, data: MediaStore.Types.GetContainerPolicyOutput) => void): Request<MediaStore.Types.GetContainerPolicyOutput, AWSError>;
  /**
   * Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the AWS Identity and Access Management User Guide.
   */
  getContainerPolicy(callback?: (err: AWSError, data: MediaStore.Types.GetContainerPolicyOutput) => void): Request<MediaStore.Types.GetContainerPolicyOutput, AWSError>;
  /**
   * Lists the properties of all containers in AWS Elemental MediaStore.  You can query to receive all the containers in one response. Or you can include the MaxResults parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the NextToken parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive.  See also DescribeContainer, which gets the properties of one container. 
   */
  listContainers(params: MediaStore.Types.ListContainersInput, callback?: (err: AWSError, data: MediaStore.Types.ListContainersOutput) => void): Request<MediaStore.Types.ListContainersOutput, AWSError>;
  /**
   * Lists the properties of all containers in AWS Elemental MediaStore.  You can query to receive all the containers in one response. Or you can include the MaxResults parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the NextToken parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive.  See also DescribeContainer, which gets the properties of one container. 
   */
  listContainers(callback?: (err: AWSError, data: MediaStore.Types.ListContainersOutput) => void): Request<MediaStore.Types.ListContainersOutput, AWSError>;
  /**
   * Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the AWS Identity and Access Management User Guide. For this release of the REST API, you can create only one policy for a container. If you enter PutContainerPolicy twice, the second command modifies the existing policy. 
   */
  putContainerPolicy(params: MediaStore.Types.PutContainerPolicyInput, callback?: (err: AWSError, data: MediaStore.Types.PutContainerPolicyOutput) => void): Request<MediaStore.Types.PutContainerPolicyOutput, AWSError>;
  /**
   * Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the AWS Identity and Access Management User Guide. For this release of the REST API, you can create only one policy for a container. If you enter PutContainerPolicy twice, the second command modifies the existing policy. 
   */
  putContainerPolicy(callback?: (err: AWSError, data: MediaStore.Types.PutContainerPolicyOutput) => void): Request<MediaStore.Types.PutContainerPolicyOutput, AWSError>;
}
declare namespace MediaStore {
  export interface Container {
    /**
     * The DNS endpoint of the container. Use from 1 to 255 characters. Use this endpoint to identify this container when sending requests to the data plane. 
     */
    Endpoint?: Endpoint;
    /**
     * Unix timestamp.
     */
    CreationTime?: TimeStamp;
    /**
     * The Amazon Resource Name (ARN) of the container. The ARN has the following format: arn:aws:&lt;region&gt;:&lt;account that owns this container&gt;:container/&lt;name of container&gt;  For example: arn:aws:mediastore:us-west-2:111122223333:container/movies 
     */
    ARN?: ContainerARN;
    /**
     * The name of the container.
     */
    Name?: ContainerName;
    /**
     * The status of container creation or deletion. The status is one of the following: CREATING, ACTIVE, or DELETING. While the service is creating the container, the status is CREATING. When the endpoint is available, the status changes to ACTIVE.
     */
    Status?: ContainerStatus;
  }
  export type ContainerARN = string;
  export type ContainerList = Container[];
  export type ContainerListLimit = number;
  export type ContainerName = string;
  export type ContainerPolicy = string;
  export type ContainerStatus = "ACTIVE"|"CREATING"|"DELETING"|string;
  export interface CreateContainerInput {
    /**
     * The name for the container. The name must be from 1 to 255 characters. Container names must be unique to your AWS account within a specific region. As an example, you could create a container named movies in every region, as long as you don’t have an existing container with that name.
     */
    ContainerName: ContainerName;
  }
  export interface CreateContainerOutput {
    /**
     * ContainerARN: The Amazon Resource Name (ARN) of the newly created container. The ARN has the following format: arn:aws:&lt;region&gt;:&lt;account that owns this container&gt;:container/&lt;name of container&gt;. For example: arn:aws:mediastore:us-west-2:111122223333:container/movies  ContainerName: The container name as specified in the request. CreationTime: Unix timestamp. Status: The status of container creation or deletion. The status is one of the following: CREATING, ACTIVE, or DELETING. While the service is creating the container, the status is CREATING. When an endpoint is available, the status changes to ACTIVE. The return value does not include the container's endpoint. To make downstream requests, you must obtain this value by using DescribeContainer or ListContainers.
     */
    Container: Container;
  }
  export interface DeleteContainerInput {
    /**
     * The name of the container to delete. 
     */
    ContainerName: ContainerName;
  }
  export interface DeleteContainerOutput {
  }
  export interface DeleteContainerPolicyInput {
    /**
     * The name of the container that holds the policy.
     */
    ContainerName: ContainerName;
  }
  export interface DeleteContainerPolicyOutput {
  }
  export interface DescribeContainerInput {
    /**
     * The name of the container to query.
     */
    ContainerName?: ContainerName;
  }
  export interface DescribeContainerOutput {
    /**
     * The name of the queried container.
     */
    Container?: Container;
  }
  export type Endpoint = string;
  export type ErrorMessage = string;
  export interface GetContainerPolicyInput {
    /**
     * The name of the container. 
     */
    ContainerName: ContainerName;
  }
  export interface GetContainerPolicyOutput {
    /**
     * The contents of the access policy.
     */
    Policy: ContainerPolicy;
  }
  export interface ListContainersInput {
    /**
     * Only if you used MaxResults in the first command, enter the token (which was included in the previous response) to obtain the next set of containers. This token is included in a response only if there actually are more containers to list.
     */
    NextToken?: PaginationToken;
    /**
     * Enter the maximum number of containers in the response. Use from 1 to 255 characters. 
     */
    MaxResults?: ContainerListLimit;
  }
  export interface ListContainersOutput {
    /**
     * The names of the containers.
     */
    Containers: ContainerList;
    /**
     *  NextToken is the token to use in the next call to ListContainers. This token is returned only if you included the MaxResults tag in the original command, and only if there are still containers to return. 
     */
    NextToken?: PaginationToken;
  }
  export type PaginationToken = string;
  export interface PutContainerPolicyInput {
    /**
     * The name of the container.
     */
    ContainerName: ContainerName;
    /**
     * The contents of the policy, which includes the following:    One Version tag   One Statement tag that contains the standard tags for the policy.  
     */
    Policy: ContainerPolicy;
  }
  export interface PutContainerPolicyOutput {
  }
  export type TimeStamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-09-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MediaStore client.
   */
  export import Types = MediaStore;
}
export = MediaStore;
