import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SageMakerFeatureStoreRuntime extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SageMakerFeatureStoreRuntime.Types.ClientConfiguration)
  config: Config & SageMakerFeatureStoreRuntime.Types.ClientConfiguration;
  /**
   * Deletes a Record from a FeatureGroup. A new record will show up in the OfflineStore when the DeleteRecord API is called. This record will have a value of True in the is_deleted column.
   */
  deleteRecord(params: SageMakerFeatureStoreRuntime.Types.DeleteRecordRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Record from a FeatureGroup. A new record will show up in the OfflineStore when the DeleteRecord API is called. This record will have a value of True in the is_deleted column.
   */
  deleteRecord(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Use for OnlineStore serving from a FeatureStore. Only the latest records stored in the OnlineStore can be retrieved. If no Record with RecordIdentifierValue is found, then an empty result is returned. 
   */
  getRecord(params: SageMakerFeatureStoreRuntime.Types.GetRecordRequest, callback?: (err: AWSError, data: SageMakerFeatureStoreRuntime.Types.GetRecordResponse) => void): Request<SageMakerFeatureStoreRuntime.Types.GetRecordResponse, AWSError>;
  /**
   * Use for OnlineStore serving from a FeatureStore. Only the latest records stored in the OnlineStore can be retrieved. If no Record with RecordIdentifierValue is found, then an empty result is returned. 
   */
  getRecord(callback?: (err: AWSError, data: SageMakerFeatureStoreRuntime.Types.GetRecordResponse) => void): Request<SageMakerFeatureStoreRuntime.Types.GetRecordResponse, AWSError>;
  /**
   * Used for data ingestion into the FeatureStore. The PutRecord API writes to both the OnlineStore and OfflineStore. If the record is the latest record for the recordIdentifier, the record is written to both the OnlineStore and OfflineStore. If the record is a historic record, it is written only to the OfflineStore.
   */
  putRecord(params: SageMakerFeatureStoreRuntime.Types.PutRecordRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used for data ingestion into the FeatureStore. The PutRecord API writes to both the OnlineStore and OfflineStore. If the record is the latest record for the recordIdentifier, the record is written to both the OnlineStore and OfflineStore. If the record is a historic record, it is written only to the OfflineStore.
   */
  putRecord(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace SageMakerFeatureStoreRuntime {
  export interface DeleteRecordRequest {
    /**
     * The name of the feature group to delete the record from. 
     */
    FeatureGroupName: FeatureGroupName;
    /**
     * The value for the RecordIdentifier that uniquely identifies the record, in string format. 
     */
    RecordIdentifierValueAsString: ValueAsString;
    /**
     * Timestamp indicating when the deletion event occurred. EventTime can be used to query data at a certain point in time.
     */
    EventTime: ValueAsString;
  }
  export type FeatureGroupName = string;
  export type FeatureName = string;
  export type FeatureNames = FeatureName[];
  export interface FeatureValue {
    /**
     * The name of a feature that a feature value corresponds to.
     */
    FeatureName: FeatureName;
    /**
     * The value associated with a feature, in string format. Note that features types can be String, Integral, or Fractional. This value represents all three types as a string.
     */
    ValueAsString: ValueAsString;
  }
  export interface GetRecordRequest {
    /**
     * The name of the feature group in which you want to put the records.
     */
    FeatureGroupName: FeatureGroupName;
    /**
     * The value that corresponds to RecordIdentifier type and uniquely identifies the record in the FeatureGroup. 
     */
    RecordIdentifierValueAsString: ValueAsString;
    /**
     * List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned.
     */
    FeatureNames?: FeatureNames;
  }
  export interface GetRecordResponse {
    /**
     * The record you requested. A list of FeatureValues.
     */
    Record?: Record;
  }
  export interface PutRecordRequest {
    /**
     * The name of the feature group that you want to insert the record into.
     */
    FeatureGroupName: FeatureGroupName;
    /**
     * List of FeatureValues to be inserted. This will be a full over-write. If you only want to update few of the feature values, do the following:   Use GetRecord to retrieve the latest record.   Update the record returned from GetRecord.    Use PutRecord to update feature values.  
     */
    Record: Record;
  }
  export type Record = FeatureValue[];
  export type ValueAsString = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-07-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SageMakerFeatureStoreRuntime client.
   */
  export import Types = SageMakerFeatureStoreRuntime;
}
export = SageMakerFeatureStoreRuntime;
