import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SupplyChain extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SupplyChain.Types.ClientConfiguration)
  config: Config & SupplyChain.Types.ClientConfiguration;
  /**
   * CreateBillOfMaterialsImportJob creates an import job for the Product Bill Of Materials (BOM) entity. For information on the product_bom entity, see the AWS Supply Chain User Guide. The CSV file must be located in an Amazon S3 location accessible to AWS Supply Chain. It is recommended to use the same Amazon S3 bucket created during your AWS Supply Chain instance creation.
   */
  createBillOfMaterialsImportJob(params: SupplyChain.Types.CreateBillOfMaterialsImportJobRequest, callback?: (err: AWSError, data: SupplyChain.Types.CreateBillOfMaterialsImportJobResponse) => void): Request<SupplyChain.Types.CreateBillOfMaterialsImportJobResponse, AWSError>;
  /**
   * CreateBillOfMaterialsImportJob creates an import job for the Product Bill Of Materials (BOM) entity. For information on the product_bom entity, see the AWS Supply Chain User Guide. The CSV file must be located in an Amazon S3 location accessible to AWS Supply Chain. It is recommended to use the same Amazon S3 bucket created during your AWS Supply Chain instance creation.
   */
  createBillOfMaterialsImportJob(callback?: (err: AWSError, data: SupplyChain.Types.CreateBillOfMaterialsImportJobResponse) => void): Request<SupplyChain.Types.CreateBillOfMaterialsImportJobResponse, AWSError>;
  /**
   * Get status and details of a BillOfMaterialsImportJob.
   */
  getBillOfMaterialsImportJob(params: SupplyChain.Types.GetBillOfMaterialsImportJobRequest, callback?: (err: AWSError, data: SupplyChain.Types.GetBillOfMaterialsImportJobResponse) => void): Request<SupplyChain.Types.GetBillOfMaterialsImportJobResponse, AWSError>;
  /**
   * Get status and details of a BillOfMaterialsImportJob.
   */
  getBillOfMaterialsImportJob(callback?: (err: AWSError, data: SupplyChain.Types.GetBillOfMaterialsImportJobResponse) => void): Request<SupplyChain.Types.GetBillOfMaterialsImportJobResponse, AWSError>;
}
declare namespace SupplyChain {
  export interface BillOfMaterialsImportJob {
    /**
     * The BillOfMaterialsImportJob instanceId.
     */
    instanceId: UUID;
    /**
     * The BillOfMaterialsImportJob jobId.
     */
    jobId: UUID;
    /**
     * The BillOfMaterialsImportJob ConfigurationJobStatus.
     */
    status: ConfigurationJobStatus;
    /**
     * The S3 URI from which the CSV is read.
     */
    s3uri: ConfigurationS3Uri;
    /**
     * When the BillOfMaterialsImportJob has reached a terminal state, there will be a message.
     */
    message?: String;
  }
  export type ClientToken = string;
  export type ConfigurationJobStatus = "NEW"|"FAILED"|"IN_PROGRESS"|"QUEUED"|"SUCCESS"|string;
  export type ConfigurationS3Uri = string;
  export interface CreateBillOfMaterialsImportJobRequest {
    /**
     * The AWS Supply Chain instance identifier.
     */
    instanceId: UUID;
    /**
     * The S3 URI of the CSV file to be imported. The bucket must grant permissions for AWS Supply Chain to read the file.
     */
    s3uri: ConfigurationS3Uri;
    /**
     * An idempotency token.
     */
    clientToken?: ClientToken;
  }
  export interface CreateBillOfMaterialsImportJobResponse {
    /**
     * The new BillOfMaterialsImportJob identifier.
     */
    jobId: UUID;
  }
  export interface GetBillOfMaterialsImportJobRequest {
    /**
     * The AWS Supply Chain instance identifier.
     */
    instanceId: UUID;
    /**
     * The BillOfMaterialsImportJob identifier.
     */
    jobId: UUID;
  }
  export interface GetBillOfMaterialsImportJobResponse {
    /**
     * The BillOfMaterialsImportJob.
     */
    job: BillOfMaterialsImportJob;
  }
  export type String = string;
  export type UUID = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2024-01-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SupplyChain client.
   */
  export import Types = SupplyChain;
}
export = SupplyChain;
