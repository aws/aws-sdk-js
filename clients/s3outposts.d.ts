import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class S3Outposts extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: S3Outposts.Types.ClientConfiguration)
  config: Config & S3Outposts.Types.ClientConfiguration;
  /**
   * S3 on Outposts access points simplify managing data access at scale for shared datasets in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC).  This action creates an endpoint and associates it with the specified Outpost.   Related actions include:    DeleteEndpoint     ListEndpoints   
   */
  createEndpoint(params: S3Outposts.Types.CreateEndpointRequest, callback?: (err: AWSError, data: S3Outposts.Types.CreateEndpointResult) => void): Request<S3Outposts.Types.CreateEndpointResult, AWSError>;
  /**
   * S3 on Outposts access points simplify managing data access at scale for shared datasets in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC).  This action creates an endpoint and associates it with the specified Outpost.   Related actions include:    DeleteEndpoint     ListEndpoints   
   */
  createEndpoint(callback?: (err: AWSError, data: S3Outposts.Types.CreateEndpointResult) => void): Request<S3Outposts.Types.CreateEndpointResult, AWSError>;
  /**
   * S3 on Outposts access points simplify managing data access at scale for shared datasets in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC).  This action deletes an endpoint.   Related actions include:    CreateEndpoint     ListEndpoints   
   */
  deleteEndpoint(params: S3Outposts.Types.DeleteEndpointRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * S3 on Outposts access points simplify managing data access at scale for shared datasets in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC).  This action deletes an endpoint.   Related actions include:    CreateEndpoint     ListEndpoints   
   */
  deleteEndpoint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * S3 on Outposts access points simplify managing data access at scale for shared datasets in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC).  This action lists endpoints associated with the Outpost.   Related actions include:    CreateEndpoint     DeleteEndpoint   
   */
  listEndpoints(params: S3Outposts.Types.ListEndpointsRequest, callback?: (err: AWSError, data: S3Outposts.Types.ListEndpointsResult) => void): Request<S3Outposts.Types.ListEndpointsResult, AWSError>;
  /**
   * S3 on Outposts access points simplify managing data access at scale for shared datasets in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC).  This action lists endpoints associated with the Outpost.   Related actions include:    CreateEndpoint     DeleteEndpoint   
   */
  listEndpoints(callback?: (err: AWSError, data: S3Outposts.Types.ListEndpointsResult) => void): Request<S3Outposts.Types.ListEndpointsResult, AWSError>;
}
declare namespace S3Outposts {
  export type CidrBlock = string;
  export interface CreateEndpointRequest {
    /**
     * The ID of the AWS Outpost. 
     */
    OutpostId: OutpostId;
    /**
     * The ID of the subnet in the selected VPC.
     */
    SubnetId: SubnetId;
    /**
     * The ID of the security group to use with the endpoint.
     */
    SecurityGroupId: SecurityGroupId;
  }
  export interface CreateEndpointResult {
    /**
     * The Amazon Resource Name (ARN) of the endpoint.
     */
    EndpointArn?: EndpointArn;
  }
  export type CreationTime = Date;
  export interface DeleteEndpointRequest {
    /**
     * The ID of the end point.
     */
    EndpointId: EndpointId;
    /**
     * The ID of the AWS Outpost. 
     */
    OutpostId: OutpostId;
  }
  export interface Endpoint {
    /**
     * The Amazon Resource Name (ARN) of the endpoint.
     */
    EndpointArn?: EndpointArn;
    /**
     * The ID of the AWS Outpost.
     */
    OutpostsId?: OutpostId;
    /**
     * The VPC CIDR committed by this endpoint.
     */
    CidrBlock?: CidrBlock;
    /**
     * The status of the endpoint.
     */
    Status?: EndpointStatus;
    /**
     * The time the endpoint was created.
     */
    CreationTime?: CreationTime;
    /**
     * The network interface of the endpoint.
     */
    NetworkInterfaces?: NetworkInterfaces;
  }
  export type EndpointArn = string;
  export type EndpointId = string;
  export type EndpointStatus = "PENDING"|"AVAILABLE"|string;
  export type Endpoints = Endpoint[];
  export interface ListEndpointsRequest {
    /**
     * The next endpoint requested in the list.
     */
    NextToken?: NextToken;
    /**
     * The max number of endpoints that can be returned on the request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListEndpointsResult {
    /**
     * Returns an array of endpoints associated with AWS Outpost.
     */
    Endpoints?: Endpoints;
    /**
     * The next endpoint returned in the list.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export interface NetworkInterface {
    /**
     * The ID for the network interface.
     */
    NetworkInterfaceId?: NetworkInterfaceId;
  }
  export type NetworkInterfaceId = string;
  export type NetworkInterfaces = NetworkInterface[];
  export type NextToken = string;
  export type OutpostId = string;
  export type SecurityGroupId = string;
  export type SubnetId = string;
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
   * Contains interfaces for use with the S3Outposts client.
   */
  export import Types = S3Outposts;
}
export = S3Outposts;
