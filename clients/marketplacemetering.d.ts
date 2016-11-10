///<reference types="node" />
import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
declare class MarketplaceMetering extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MarketplaceMetering.Types.ClientConfiguration)
  config: Config & MarketplaceMetering.Types.ClientConfiguration;
  /**
   * API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID. 
   */
  meterUsage(params: MarketplaceMetering.Types.MeterUsageRequest, callback?: (err: AWSError, data: MarketplaceMetering.Types.MeterUsageResult) => void): Request<MarketplaceMetering.Types.MeterUsageResult, AWSError>;
  /**
   * API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID. 
   */
  meterUsage(callback?: (err: AWSError, data: MarketplaceMetering.Types.MeterUsageResult) => void): Request<MarketplaceMetering.Types.MeterUsageResult, AWSError>;
}
declare namespace MarketplaceMetering.Types {
  export type Boolean = boolean;
  export interface MeterUsageRequest {
    /**
     * Product code is used to uniquely identify a product in AWS Marketplace. The product code should be the same as the one used during the publishing of a new product.
     */
    ProductCode: ProductCode;
    /**
     * Timestamp of the hour, recorded in UTC. The seconds and milliseconds portions of the timestamp will be ignored. 
     */
    Timestamp: Timestamp;
    /**
     * It will be one of the 'fcp dimension name' provided during the publishing of the product.
     */
    UsageDimension: UsageDimension;
    /**
     * Consumption value for the hour.
     */
    UsageQuantity: UsageQuantity;
    /**
     * Checks whether you have the permissions required for the action, but does not make the request. If you have the permissions, the request returns DryRunOperation; otherwise, it returns UnauthorizedException. 
     */
    DryRun: Boolean;
  }
  export interface MeterUsageResult {
    MeteringRecordId?: String;
  }
  export type ProductCode = string;
  export type String = string;
  export type Timestamp = Date;
  export type UsageDimension = string;
  export type UsageQuantity = number;
  export type errorMessage = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-01-14"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = MarketplaceMetering;
