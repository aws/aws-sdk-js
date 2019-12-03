import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Outposts extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Outposts.Types.ClientConfiguration)
  config: Config & Outposts.Types.ClientConfiguration;
  /**
   * Creates an Outpost.
   */
  createOutpost(params: Outposts.Types.CreateOutpostInput, callback?: (err: AWSError, data: Outposts.Types.CreateOutpostOutput) => void): Request<Outposts.Types.CreateOutpostOutput, AWSError>;
  /**
   * Creates an Outpost.
   */
  createOutpost(callback?: (err: AWSError, data: Outposts.Types.CreateOutpostOutput) => void): Request<Outposts.Types.CreateOutpostOutput, AWSError>;
  /**
   * Gets information about the specified Outpost.
   */
  getOutpost(params: Outposts.Types.GetOutpostInput, callback?: (err: AWSError, data: Outposts.Types.GetOutpostOutput) => void): Request<Outposts.Types.GetOutpostOutput, AWSError>;
  /**
   * Gets information about the specified Outpost.
   */
  getOutpost(callback?: (err: AWSError, data: Outposts.Types.GetOutpostOutput) => void): Request<Outposts.Types.GetOutpostOutput, AWSError>;
  /**
   * Lists the instance types for the specified Outpost.
   */
  getOutpostInstanceTypes(params: Outposts.Types.GetOutpostInstanceTypesInput, callback?: (err: AWSError, data: Outposts.Types.GetOutpostInstanceTypesOutput) => void): Request<Outposts.Types.GetOutpostInstanceTypesOutput, AWSError>;
  /**
   * Lists the instance types for the specified Outpost.
   */
  getOutpostInstanceTypes(callback?: (err: AWSError, data: Outposts.Types.GetOutpostInstanceTypesOutput) => void): Request<Outposts.Types.GetOutpostInstanceTypesOutput, AWSError>;
  /**
   * List the Outposts for your AWS account.
   */
  listOutposts(params: Outposts.Types.ListOutpostsInput, callback?: (err: AWSError, data: Outposts.Types.ListOutpostsOutput) => void): Request<Outposts.Types.ListOutpostsOutput, AWSError>;
  /**
   * List the Outposts for your AWS account.
   */
  listOutposts(callback?: (err: AWSError, data: Outposts.Types.ListOutpostsOutput) => void): Request<Outposts.Types.ListOutpostsOutput, AWSError>;
  /**
   * Lists the sites for the specified AWS account.
   */
  listSites(params: Outposts.Types.ListSitesInput, callback?: (err: AWSError, data: Outposts.Types.ListSitesOutput) => void): Request<Outposts.Types.ListSitesOutput, AWSError>;
  /**
   * Lists the sites for the specified AWS account.
   */
  listSites(callback?: (err: AWSError, data: Outposts.Types.ListSitesOutput) => void): Request<Outposts.Types.ListSitesOutput, AWSError>;
}
declare namespace Outposts {
  export type AccountId = string;
  export type AvailabilityZone = string;
  export type AvailabilityZoneId = string;
  export interface CreateOutpostInput {
    Name?: OutpostName;
    Description?: OutpostDescription;
    SiteId: SiteId;
    AvailabilityZone?: AvailabilityZone;
    AvailabilityZoneId?: AvailabilityZoneId;
  }
  export interface CreateOutpostOutput {
    Outpost?: Outpost;
  }
  export interface GetOutpostInput {
    OutpostId: OutpostId;
  }
  export interface GetOutpostInstanceTypesInput {
    OutpostId: OutpostId;
    NextToken?: Token;
    MaxResults?: MaxResults1000;
  }
  export interface GetOutpostInstanceTypesOutput {
    InstanceTypes?: InstanceTypeListDefinition;
    NextToken?: Token;
    OutpostId?: OutpostId;
    OutpostArn?: OutpostArn;
  }
  export interface GetOutpostOutput {
    Outpost?: Outpost;
  }
  export type InstanceType = string;
  export interface InstanceTypeItem {
    InstanceType?: InstanceType;
  }
  export type InstanceTypeListDefinition = InstanceTypeItem[];
  export type LifeCycleStatus = string;
  export interface ListOutpostsInput {
    NextToken?: Token;
    MaxResults?: MaxResults1000;
  }
  export interface ListOutpostsOutput {
    Outposts?: outpostListDefinition;
    NextToken?: Token;
  }
  export interface ListSitesInput {
    NextToken?: Token;
    MaxResults?: MaxResults1000;
  }
  export interface ListSitesOutput {
    Sites?: siteListDefinition;
    NextToken?: Token;
  }
  export type MaxResults1000 = number;
  export interface Outpost {
    OutpostId?: OutpostId;
    OwnerId?: OwnerId;
    OutpostArn?: OutpostArn;
    SiteId?: SiteId;
    Name?: OutpostName;
    Description?: OutpostDescription;
    LifeCycleStatus?: LifeCycleStatus;
    AvailabilityZone?: AvailabilityZone;
    AvailabilityZoneId?: AvailabilityZoneId;
  }
  export type OutpostArn = string;
  export type OutpostDescription = string;
  export type OutpostId = string;
  export type OutpostName = string;
  export type OwnerId = string;
  export interface Site {
    SiteId?: SiteId;
    AccountId?: AccountId;
    Name?: SiteName;
    Description?: SiteDescription;
  }
  export type SiteDescription = string;
  export type SiteId = string;
  export type SiteName = string;
  export type Token = string;
  export type outpostListDefinition = Outpost[];
  export type siteListDefinition = Site[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-12-03"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Outposts client.
   */
  export import Types = Outposts;
}
export = Outposts;
