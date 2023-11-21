import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class IoTSiteWise extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IoTSiteWise.Types.ClientConfiguration)
  config: Config & IoTSiteWise.Types.ClientConfiguration;
  /**
   * Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see Associating assets in the IoT SiteWise User Guide.
   */
  associateAssets(params: IoTSiteWise.Types.AssociateAssetsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see Associating assets in the IoT SiteWise User Guide.
   */
  associateAssets(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a time series (data stream) with an asset property.
   */
  associateTimeSeriesToAssetProperty(params: IoTSiteWise.Types.AssociateTimeSeriesToAssetPropertyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a time series (data stream) with an asset property.
   */
  associateTimeSeriesToAssetProperty(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a group (batch) of assets with an IoT SiteWise Monitor project.
   */
  batchAssociateProjectAssets(params: IoTSiteWise.Types.BatchAssociateProjectAssetsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.BatchAssociateProjectAssetsResponse) => void): Request<IoTSiteWise.Types.BatchAssociateProjectAssetsResponse, AWSError>;
  /**
   * Associates a group (batch) of assets with an IoT SiteWise Monitor project.
   */
  batchAssociateProjectAssets(callback?: (err: AWSError, data: IoTSiteWise.Types.BatchAssociateProjectAssetsResponse) => void): Request<IoTSiteWise.Types.BatchAssociateProjectAssetsResponse, AWSError>;
  /**
   * Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.
   */
  batchDisassociateProjectAssets(params: IoTSiteWise.Types.BatchDisassociateProjectAssetsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.BatchDisassociateProjectAssetsResponse) => void): Request<IoTSiteWise.Types.BatchDisassociateProjectAssetsResponse, AWSError>;
  /**
   * Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.
   */
  batchDisassociateProjectAssets(callback?: (err: AWSError, data: IoTSiteWise.Types.BatchDisassociateProjectAssetsResponse) => void): Request<IoTSiteWise.Types.BatchDisassociateProjectAssetsResponse, AWSError>;
  /**
   * Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see Querying aggregates in the IoT SiteWise User Guide.
   */
  batchGetAssetPropertyAggregates(params: IoTSiteWise.Types.BatchGetAssetPropertyAggregatesRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.BatchGetAssetPropertyAggregatesResponse) => void): Request<IoTSiteWise.Types.BatchGetAssetPropertyAggregatesResponse, AWSError>;
  /**
   * Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see Querying aggregates in the IoT SiteWise User Guide.
   */
  batchGetAssetPropertyAggregates(callback?: (err: AWSError, data: IoTSiteWise.Types.BatchGetAssetPropertyAggregatesResponse) => void): Request<IoTSiteWise.Types.BatchGetAssetPropertyAggregatesResponse, AWSError>;
  /**
   * Gets the current value for one or more asset properties. For more information, see Querying current values in the IoT SiteWise User Guide.
   */
  batchGetAssetPropertyValue(params: IoTSiteWise.Types.BatchGetAssetPropertyValueRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.BatchGetAssetPropertyValueResponse) => void): Request<IoTSiteWise.Types.BatchGetAssetPropertyValueResponse, AWSError>;
  /**
   * Gets the current value for one or more asset properties. For more information, see Querying current values in the IoT SiteWise User Guide.
   */
  batchGetAssetPropertyValue(callback?: (err: AWSError, data: IoTSiteWise.Types.BatchGetAssetPropertyValueResponse) => void): Request<IoTSiteWise.Types.BatchGetAssetPropertyValueResponse, AWSError>;
  /**
   * Gets the historical values for one or more asset properties. For more information, see Querying historical values in the IoT SiteWise User Guide.
   */
  batchGetAssetPropertyValueHistory(params: IoTSiteWise.Types.BatchGetAssetPropertyValueHistoryRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.BatchGetAssetPropertyValueHistoryResponse) => void): Request<IoTSiteWise.Types.BatchGetAssetPropertyValueHistoryResponse, AWSError>;
  /**
   * Gets the historical values for one or more asset properties. For more information, see Querying historical values in the IoT SiteWise User Guide.
   */
  batchGetAssetPropertyValueHistory(callback?: (err: AWSError, data: IoTSiteWise.Types.BatchGetAssetPropertyValueHistoryResponse) => void): Request<IoTSiteWise.Types.BatchGetAssetPropertyValueHistoryResponse, AWSError>;
  /**
   * Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see Ingesting data using the API in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.    With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a TimestampOutOfRangeException error. For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV {T1, GOOD, V1}, then storing {T1, GOOD, V2} replaces the existing TQV.  IoT SiteWise authorizes access to each BatchPutAssetPropertyValue entry individually. For more information, see BatchPutAssetPropertyValue authorization in the IoT SiteWise User Guide.
   */
  batchPutAssetPropertyValue(params: IoTSiteWise.Types.BatchPutAssetPropertyValueRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.BatchPutAssetPropertyValueResponse) => void): Request<IoTSiteWise.Types.BatchPutAssetPropertyValueResponse, AWSError>;
  /**
   * Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see Ingesting data using the API in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.    With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a TimestampOutOfRangeException error. For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV {T1, GOOD, V1}, then storing {T1, GOOD, V2} replaces the existing TQV.  IoT SiteWise authorizes access to each BatchPutAssetPropertyValue entry individually. For more information, see BatchPutAssetPropertyValue authorization in the IoT SiteWise User Guide.
   */
  batchPutAssetPropertyValue(callback?: (err: AWSError, data: IoTSiteWise.Types.BatchPutAssetPropertyValueResponse) => void): Request<IoTSiteWise.Types.BatchPutAssetPropertyValueResponse, AWSError>;
  /**
   * Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
   */
  createAccessPolicy(params: IoTSiteWise.Types.CreateAccessPolicyRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAccessPolicyResponse) => void): Request<IoTSiteWise.Types.CreateAccessPolicyResponse, AWSError>;
  /**
   * Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
   */
  createAccessPolicy(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAccessPolicyResponse) => void): Request<IoTSiteWise.Types.CreateAccessPolicyResponse, AWSError>;
  /**
   * Creates an asset from an existing asset model. For more information, see Creating assets in the IoT SiteWise User Guide.
   */
  createAsset(params: IoTSiteWise.Types.CreateAssetRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAssetResponse) => void): Request<IoTSiteWise.Types.CreateAssetResponse, AWSError>;
  /**
   * Creates an asset from an existing asset model. For more information, see Creating assets in the IoT SiteWise User Guide.
   */
  createAsset(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAssetResponse) => void): Request<IoTSiteWise.Types.CreateAssetResponse, AWSError>;
  /**
   * Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see Defining asset models in the IoT SiteWise User Guide. You can create two types of asset models, ASSET_MODEL or COMPONENT_MODEL.    ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.   
   */
  createAssetModel(params: IoTSiteWise.Types.CreateAssetModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAssetModelResponse) => void): Request<IoTSiteWise.Types.CreateAssetModelResponse, AWSError>;
  /**
   * Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see Defining asset models in the IoT SiteWise User Guide. You can create two types of asset models, ASSET_MODEL or COMPONENT_MODEL.    ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.   
   */
  createAssetModel(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAssetModelResponse) => void): Request<IoTSiteWise.Types.CreateAssetModelResponse, AWSError>;
  /**
   * Creates a custom composite model from specified property and hierarchy definitions. There are two types of custom composite models, inline and component-model-based.  Use component-model-based custom composite models to define standard, reusable components. A component-model-based custom composite model consists of a name, a description, and the ID of the component model it references. A component-model-based custom composite model has no properties of its own; its referenced component model provides its associated properties to any created assets. For more information, see Custom composite models (Components) in the IoT SiteWise User Guide. Use inline custom composite models to organize the properties of an asset model. The properties of inline custom composite models are local to the asset model where they are included and can't be used to create multiple assets. To create a component-model-based model, specify the composedAssetModelId of an existing asset model with assetModelType of COMPONENT_MODEL. To create an inline model, specify the assetModelCompositeModelProperties and don't include an composedAssetModelId.
   */
  createAssetModelCompositeModel(params: IoTSiteWise.Types.CreateAssetModelCompositeModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAssetModelCompositeModelResponse) => void): Request<IoTSiteWise.Types.CreateAssetModelCompositeModelResponse, AWSError>;
  /**
   * Creates a custom composite model from specified property and hierarchy definitions. There are two types of custom composite models, inline and component-model-based.  Use component-model-based custom composite models to define standard, reusable components. A component-model-based custom composite model consists of a name, a description, and the ID of the component model it references. A component-model-based custom composite model has no properties of its own; its referenced component model provides its associated properties to any created assets. For more information, see Custom composite models (Components) in the IoT SiteWise User Guide. Use inline custom composite models to organize the properties of an asset model. The properties of inline custom composite models are local to the asset model where they are included and can't be used to create multiple assets. To create a component-model-based model, specify the composedAssetModelId of an existing asset model with assetModelType of COMPONENT_MODEL. To create an inline model, specify the assetModelCompositeModelProperties and don't include an composedAssetModelId.
   */
  createAssetModelCompositeModel(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAssetModelCompositeModelResponse) => void): Request<IoTSiteWise.Types.CreateAssetModelCompositeModelResponse, AWSError>;
  /**
   * Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see Create a bulk import job (CLI) in the Amazon Simple Storage Service User Guide.  Before you create a bulk import job, you must enable IoT SiteWise warm tier or IoT SiteWise cold tier. For more information about how to configure storage settings, see PutStorageConfiguration. Bulk import is designed to store historical data to IoT SiteWise. It does not trigger computations or notifications on IoT SiteWise warm or cold tier storage. 
   */
  createBulkImportJob(params: IoTSiteWise.Types.CreateBulkImportJobRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateBulkImportJobResponse) => void): Request<IoTSiteWise.Types.CreateBulkImportJobResponse, AWSError>;
  /**
   * Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see Create a bulk import job (CLI) in the Amazon Simple Storage Service User Guide.  Before you create a bulk import job, you must enable IoT SiteWise warm tier or IoT SiteWise cold tier. For more information about how to configure storage settings, see PutStorageConfiguration. Bulk import is designed to store historical data to IoT SiteWise. It does not trigger computations or notifications on IoT SiteWise warm or cold tier storage. 
   */
  createBulkImportJob(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateBulkImportJobResponse) => void): Request<IoTSiteWise.Types.CreateBulkImportJobResponse, AWSError>;
  /**
   * Creates a dashboard in an IoT SiteWise Monitor project.
   */
  createDashboard(params: IoTSiteWise.Types.CreateDashboardRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateDashboardResponse) => void): Request<IoTSiteWise.Types.CreateDashboardResponse, AWSError>;
  /**
   * Creates a dashboard in an IoT SiteWise Monitor project.
   */
  createDashboard(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateDashboardResponse) => void): Request<IoTSiteWise.Types.CreateDashboardResponse, AWSError>;
  /**
   * Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see Ingesting data using a gateway in the IoT SiteWise User Guide.
   */
  createGateway(params: IoTSiteWise.Types.CreateGatewayRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateGatewayResponse) => void): Request<IoTSiteWise.Types.CreateGatewayResponse, AWSError>;
  /**
   * Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see Ingesting data using a gateway in the IoT SiteWise User Guide.
   */
  createGateway(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateGatewayResponse) => void): Request<IoTSiteWise.Types.CreateGatewayResponse, AWSError>;
  /**
   * Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.  Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see Adding or removing portal administrators in the IoT SiteWise User Guide. 
   */
  createPortal(params: IoTSiteWise.Types.CreatePortalRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreatePortalResponse) => void): Request<IoTSiteWise.Types.CreatePortalResponse, AWSError>;
  /**
   * Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.  Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see Adding or removing portal administrators in the IoT SiteWise User Guide. 
   */
  createPortal(callback?: (err: AWSError, data: IoTSiteWise.Types.CreatePortalResponse) => void): Request<IoTSiteWise.Types.CreatePortalResponse, AWSError>;
  /**
   * Creates a project in the specified portal.  Make sure that the project name and description don't contain confidential information. 
   */
  createProject(params: IoTSiteWise.Types.CreateProjectRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateProjectResponse) => void): Request<IoTSiteWise.Types.CreateProjectResponse, AWSError>;
  /**
   * Creates a project in the specified portal.  Make sure that the project name and description don't contain confidential information. 
   */
  createProject(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateProjectResponse) => void): Request<IoTSiteWise.Types.CreateProjectResponse, AWSError>;
  /**
   * Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.
   */
  deleteAccessPolicy(params: IoTSiteWise.Types.DeleteAccessPolicyRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAccessPolicyResponse) => void): Request<IoTSiteWise.Types.DeleteAccessPolicyResponse, AWSError>;
  /**
   * Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.
   */
  deleteAccessPolicy(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAccessPolicyResponse) => void): Request<IoTSiteWise.Types.DeleteAccessPolicyResponse, AWSError>;
  /**
   * Deletes an asset. This action can't be undone. For more information, see Deleting assets and models in the IoT SiteWise User Guide.  You can't delete an asset that's associated to another asset. For more information, see DisassociateAssets. 
   */
  deleteAsset(params: IoTSiteWise.Types.DeleteAssetRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAssetResponse) => void): Request<IoTSiteWise.Types.DeleteAssetResponse, AWSError>;
  /**
   * Deletes an asset. This action can't be undone. For more information, see Deleting assets and models in the IoT SiteWise User Guide.  You can't delete an asset that's associated to another asset. For more information, see DisassociateAssets. 
   */
  deleteAsset(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAssetResponse) => void): Request<IoTSiteWise.Types.DeleteAssetResponse, AWSError>;
  /**
   * Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the IoT SiteWise User Guide.
   */
  deleteAssetModel(params: IoTSiteWise.Types.DeleteAssetModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAssetModelResponse) => void): Request<IoTSiteWise.Types.DeleteAssetModelResponse, AWSError>;
  /**
   * Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the IoT SiteWise User Guide.
   */
  deleteAssetModel(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAssetModelResponse) => void): Request<IoTSiteWise.Types.DeleteAssetModelResponse, AWSError>;
  /**
   * Deletes a composite model. This action can't be undone. You must delete all assets created from a composite model before you can delete the model. Also, you can't delete a composite model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the IoT SiteWise User Guide.
   */
  deleteAssetModelCompositeModel(params: IoTSiteWise.Types.DeleteAssetModelCompositeModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAssetModelCompositeModelResponse) => void): Request<IoTSiteWise.Types.DeleteAssetModelCompositeModelResponse, AWSError>;
  /**
   * Deletes a composite model. This action can't be undone. You must delete all assets created from a composite model before you can delete the model. Also, you can't delete a composite model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting assets and models in the IoT SiteWise User Guide.
   */
  deleteAssetModelCompositeModel(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAssetModelCompositeModelResponse) => void): Request<IoTSiteWise.Types.DeleteAssetModelCompositeModelResponse, AWSError>;
  /**
   * Deletes a dashboard from IoT SiteWise Monitor.
   */
  deleteDashboard(params: IoTSiteWise.Types.DeleteDashboardRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteDashboardResponse) => void): Request<IoTSiteWise.Types.DeleteDashboardResponse, AWSError>;
  /**
   * Deletes a dashboard from IoT SiteWise Monitor.
   */
  deleteDashboard(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteDashboardResponse) => void): Request<IoTSiteWise.Types.DeleteDashboardResponse, AWSError>;
  /**
   * Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.
   */
  deleteGateway(params: IoTSiteWise.Types.DeleteGatewayRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.
   */
  deleteGateway(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a portal from IoT SiteWise Monitor.
   */
  deletePortal(params: IoTSiteWise.Types.DeletePortalRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeletePortalResponse) => void): Request<IoTSiteWise.Types.DeletePortalResponse, AWSError>;
  /**
   * Deletes a portal from IoT SiteWise Monitor.
   */
  deletePortal(callback?: (err: AWSError, data: IoTSiteWise.Types.DeletePortalResponse) => void): Request<IoTSiteWise.Types.DeletePortalResponse, AWSError>;
  /**
   * Deletes a project from IoT SiteWise Monitor.
   */
  deleteProject(params: IoTSiteWise.Types.DeleteProjectRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteProjectResponse) => void): Request<IoTSiteWise.Types.DeleteProjectResponse, AWSError>;
  /**
   * Deletes a project from IoT SiteWise Monitor.
   */
  deleteProject(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteProjectResponse) => void): Request<IoTSiteWise.Types.DeleteProjectResponse, AWSError>;
  /**
   * Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property. To identify a time series, do one of the following:   If the time series isn't associated with an asset property, specify the alias of the time series.   If the time series is associated with an asset property, specify one of the following:    The alias of the time series.   The assetId and propertyId that identifies the asset property.    
   */
  deleteTimeSeries(params: IoTSiteWise.Types.DeleteTimeSeriesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property. To identify a time series, do one of the following:   If the time series isn't associated with an asset property, specify the alias of the time series.   If the time series is associated with an asset property, specify one of the following:    The alias of the time series.   The assetId and propertyId that identifies the asset property.    
   */
  deleteTimeSeries(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.
   */
  describeAccessPolicy(params: IoTSiteWise.Types.DescribeAccessPolicyRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAccessPolicyResponse) => void): Request<IoTSiteWise.Types.DescribeAccessPolicyResponse, AWSError>;
  /**
   * Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.
   */
  describeAccessPolicy(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAccessPolicyResponse) => void): Request<IoTSiteWise.Types.DescribeAccessPolicyResponse, AWSError>;
  /**
   * Retrieves information about an action.
   */
  describeAction(params: IoTSiteWise.Types.DescribeActionRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeActionResponse) => void): Request<IoTSiteWise.Types.DescribeActionResponse, AWSError>;
  /**
   * Retrieves information about an action.
   */
  describeAction(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeActionResponse) => void): Request<IoTSiteWise.Types.DescribeActionResponse, AWSError>;
  /**
   * Retrieves information about an asset.
   */
  describeAsset(params: IoTSiteWise.Types.DescribeAssetRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetResponse) => void): Request<IoTSiteWise.Types.DescribeAssetResponse, AWSError>;
  /**
   * Retrieves information about an asset.
   */
  describeAsset(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetResponse) => void): Request<IoTSiteWise.Types.DescribeAssetResponse, AWSError>;
  /**
   * Retrieves information about an asset composite model (also known as an asset component). An AssetCompositeModel is an instance of an AssetModelCompositeModel. If you want to see information about the model this is based on, call DescribeAssetModelCompositeModel.
   */
  describeAssetCompositeModel(params: IoTSiteWise.Types.DescribeAssetCompositeModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetCompositeModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetCompositeModelResponse, AWSError>;
  /**
   * Retrieves information about an asset composite model (also known as an asset component). An AssetCompositeModel is an instance of an AssetModelCompositeModel. If you want to see information about the model this is based on, call DescribeAssetModelCompositeModel.
   */
  describeAssetCompositeModel(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetCompositeModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetCompositeModelResponse, AWSError>;
  /**
   * Retrieves information about an asset model.
   */
  describeAssetModel(params: IoTSiteWise.Types.DescribeAssetModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetModelResponse, AWSError>;
  /**
   * Retrieves information about an asset model.
   */
  describeAssetModel(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetModelResponse, AWSError>;
  /**
   * Retrieves information about an asset model composite model (also known as an asset model component). For more information, see Custom composite models (Components) in the IoT SiteWise User Guide.
   */
  describeAssetModelCompositeModel(params: IoTSiteWise.Types.DescribeAssetModelCompositeModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetModelCompositeModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetModelCompositeModelResponse, AWSError>;
  /**
   * Retrieves information about an asset model composite model (also known as an asset model component). For more information, see Custom composite models (Components) in the IoT SiteWise User Guide.
   */
  describeAssetModelCompositeModel(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetModelCompositeModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetModelCompositeModelResponse, AWSError>;
  /**
   * Retrieves information about an asset property.  When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.  This operation doesn't return the value of the asset property. To get the value of an asset property, use GetAssetPropertyValue.
   */
  describeAssetProperty(params: IoTSiteWise.Types.DescribeAssetPropertyRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetPropertyResponse) => void): Request<IoTSiteWise.Types.DescribeAssetPropertyResponse, AWSError>;
  /**
   * Retrieves information about an asset property.  When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.  This operation doesn't return the value of the asset property. To get the value of an asset property, use GetAssetPropertyValue.
   */
  describeAssetProperty(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetPropertyResponse) => void): Request<IoTSiteWise.Types.DescribeAssetPropertyResponse, AWSError>;
  /**
   * Retrieves information about a bulk import job request. For more information, see Describe a bulk import job (CLI) in the Amazon Simple Storage Service User Guide.
   */
  describeBulkImportJob(params: IoTSiteWise.Types.DescribeBulkImportJobRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeBulkImportJobResponse) => void): Request<IoTSiteWise.Types.DescribeBulkImportJobResponse, AWSError>;
  /**
   * Retrieves information about a bulk import job request. For more information, see Describe a bulk import job (CLI) in the Amazon Simple Storage Service User Guide.
   */
  describeBulkImportJob(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeBulkImportJobResponse) => void): Request<IoTSiteWise.Types.DescribeBulkImportJobResponse, AWSError>;
  /**
   * Retrieves information about a dashboard.
   */
  describeDashboard(params: IoTSiteWise.Types.DescribeDashboardRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeDashboardResponse) => void): Request<IoTSiteWise.Types.DescribeDashboardResponse, AWSError>;
  /**
   * Retrieves information about a dashboard.
   */
  describeDashboard(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeDashboardResponse) => void): Request<IoTSiteWise.Types.DescribeDashboardResponse, AWSError>;
  /**
   * Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see Key management in the IoT SiteWise User Guide.
   */
  describeDefaultEncryptionConfiguration(params: IoTSiteWise.Types.DescribeDefaultEncryptionConfigurationRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeDefaultEncryptionConfigurationResponse) => void): Request<IoTSiteWise.Types.DescribeDefaultEncryptionConfigurationResponse, AWSError>;
  /**
   * Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see Key management in the IoT SiteWise User Guide.
   */
  describeDefaultEncryptionConfiguration(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeDefaultEncryptionConfigurationResponse) => void): Request<IoTSiteWise.Types.DescribeDefaultEncryptionConfigurationResponse, AWSError>;
  /**
   * Retrieves information about a gateway.
   */
  describeGateway(params: IoTSiteWise.Types.DescribeGatewayRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeGatewayResponse) => void): Request<IoTSiteWise.Types.DescribeGatewayResponse, AWSError>;
  /**
   * Retrieves information about a gateway.
   */
  describeGateway(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeGatewayResponse) => void): Request<IoTSiteWise.Types.DescribeGatewayResponse, AWSError>;
  /**
   * Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway.
   */
  describeGatewayCapabilityConfiguration(params: IoTSiteWise.Types.DescribeGatewayCapabilityConfigurationRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeGatewayCapabilityConfigurationResponse) => void): Request<IoTSiteWise.Types.DescribeGatewayCapabilityConfigurationResponse, AWSError>;
  /**
   * Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway.
   */
  describeGatewayCapabilityConfiguration(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeGatewayCapabilityConfigurationResponse) => void): Request<IoTSiteWise.Types.DescribeGatewayCapabilityConfigurationResponse, AWSError>;
  /**
   * Retrieves the current IoT SiteWise logging options.
   */
  describeLoggingOptions(params: IoTSiteWise.Types.DescribeLoggingOptionsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeLoggingOptionsResponse) => void): Request<IoTSiteWise.Types.DescribeLoggingOptionsResponse, AWSError>;
  /**
   * Retrieves the current IoT SiteWise logging options.
   */
  describeLoggingOptions(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeLoggingOptionsResponse) => void): Request<IoTSiteWise.Types.DescribeLoggingOptionsResponse, AWSError>;
  /**
   * Retrieves information about a portal.
   */
  describePortal(params: IoTSiteWise.Types.DescribePortalRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribePortalResponse) => void): Request<IoTSiteWise.Types.DescribePortalResponse, AWSError>;
  /**
   * Retrieves information about a portal.
   */
  describePortal(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribePortalResponse) => void): Request<IoTSiteWise.Types.DescribePortalResponse, AWSError>;
  /**
   * Retrieves information about a project.
   */
  describeProject(params: IoTSiteWise.Types.DescribeProjectRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeProjectResponse) => void): Request<IoTSiteWise.Types.DescribeProjectResponse, AWSError>;
  /**
   * Retrieves information about a project.
   */
  describeProject(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeProjectResponse) => void): Request<IoTSiteWise.Types.DescribeProjectResponse, AWSError>;
  /**
   * Retrieves information about the storage configuration for IoT SiteWise.
   */
  describeStorageConfiguration(params: IoTSiteWise.Types.DescribeStorageConfigurationRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeStorageConfigurationResponse) => void): Request<IoTSiteWise.Types.DescribeStorageConfigurationResponse, AWSError>;
  /**
   * Retrieves information about the storage configuration for IoT SiteWise.
   */
  describeStorageConfiguration(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeStorageConfigurationResponse) => void): Request<IoTSiteWise.Types.DescribeStorageConfigurationResponse, AWSError>;
  /**
   * Retrieves information about a time series (data stream). To identify a time series, do one of the following:   If the time series isn't associated with an asset property, specify the alias of the time series.   If the time series is associated with an asset property, specify one of the following:    The alias of the time series.   The assetId and propertyId that identifies the asset property.    
   */
  describeTimeSeries(params: IoTSiteWise.Types.DescribeTimeSeriesRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeTimeSeriesResponse) => void): Request<IoTSiteWise.Types.DescribeTimeSeriesResponse, AWSError>;
  /**
   * Retrieves information about a time series (data stream). To identify a time series, do one of the following:   If the time series isn't associated with an asset property, specify the alias of the time series.   If the time series is associated with an asset property, specify one of the following:    The alias of the time series.   The assetId and propertyId that identifies the asset property.    
   */
  describeTimeSeries(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeTimeSeriesResponse) => void): Request<IoTSiteWise.Types.DescribeTimeSeriesResponse, AWSError>;
  /**
   * Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
   */
  disassociateAssets(params: IoTSiteWise.Types.DisassociateAssetsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
   */
  disassociateAssets(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates a time series (data stream) from an asset property.
   */
  disassociateTimeSeriesFromAssetProperty(params: IoTSiteWise.Types.DisassociateTimeSeriesFromAssetPropertyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates a time series (data stream) from an asset property.
   */
  disassociateTimeSeriesFromAssetProperty(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Executes an action on a target resource.
   */
  executeAction(params: IoTSiteWise.Types.ExecuteActionRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ExecuteActionResponse) => void): Request<IoTSiteWise.Types.ExecuteActionResponse, AWSError>;
  /**
   * Executes an action on a target resource.
   */
  executeAction(callback?: (err: AWSError, data: IoTSiteWise.Types.ExecuteActionResponse) => void): Request<IoTSiteWise.Types.ExecuteActionResponse, AWSError>;
  /**
   * Run SQL queries to retrieve metadata and time-series data from asset models, assets, measurements, metrics, transforms, and aggregates.
   */
  executeQuery(params: IoTSiteWise.Types.ExecuteQueryRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ExecuteQueryResponse) => void): Request<IoTSiteWise.Types.ExecuteQueryResponse, AWSError>;
  /**
   * Run SQL queries to retrieve metadata and time-series data from asset models, assets, measurements, metrics, transforms, and aggregates.
   */
  executeQuery(callback?: (err: AWSError, data: IoTSiteWise.Types.ExecuteQueryResponse) => void): Request<IoTSiteWise.Types.ExecuteQueryResponse, AWSError>;
  /**
   * Gets aggregated values for an asset property. For more information, see Querying aggregates in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyAggregates(params: IoTSiteWise.Types.GetAssetPropertyAggregatesRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyAggregatesResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyAggregatesResponse, AWSError>;
  /**
   * Gets aggregated values for an asset property. For more information, see Querying aggregates in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyAggregates(callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyAggregatesResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyAggregatesResponse, AWSError>;
  /**
   * Gets an asset property's current value. For more information, see Querying current values in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyValue(params: IoTSiteWise.Types.GetAssetPropertyValueRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyValueResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyValueResponse, AWSError>;
  /**
   * Gets an asset property's current value. For more information, see Querying current values in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyValue(callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyValueResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyValueResponse, AWSError>;
  /**
   * Gets the history of an asset property's values. For more information, see Querying historical values in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyValueHistory(params: IoTSiteWise.Types.GetAssetPropertyValueHistoryRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyValueHistoryResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyValueHistoryResponse, AWSError>;
  /**
   * Gets the history of an asset property's values. For more information, see Querying historical values in the IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyValueHistory(callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyValueHistoryResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyValueHistoryResponse, AWSError>;
  /**
   * Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data. For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getInterpolatedAssetPropertyValues(params: IoTSiteWise.Types.GetInterpolatedAssetPropertyValuesRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.GetInterpolatedAssetPropertyValuesResponse) => void): Request<IoTSiteWise.Types.GetInterpolatedAssetPropertyValuesResponse, AWSError>;
  /**
   * Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data. For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getInterpolatedAssetPropertyValues(callback?: (err: AWSError, data: IoTSiteWise.Types.GetInterpolatedAssetPropertyValuesResponse) => void): Request<IoTSiteWise.Types.GetInterpolatedAssetPropertyValuesResponse, AWSError>;
  /**
   * Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).
   */
  listAccessPolicies(params: IoTSiteWise.Types.ListAccessPoliciesRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAccessPoliciesResponse) => void): Request<IoTSiteWise.Types.ListAccessPoliciesResponse, AWSError>;
  /**
   * Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).
   */
  listAccessPolicies(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAccessPoliciesResponse) => void): Request<IoTSiteWise.Types.ListAccessPoliciesResponse, AWSError>;
  /**
   * Retrieves a paginated list of actions for a specific target resource.
   */
  listActions(params: IoTSiteWise.Types.ListActionsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListActionsResponse) => void): Request<IoTSiteWise.Types.ListActionsResponse, AWSError>;
  /**
   * Retrieves a paginated list of actions for a specific target resource.
   */
  listActions(callback?: (err: AWSError, data: IoTSiteWise.Types.ListActionsResponse) => void): Request<IoTSiteWise.Types.ListActionsResponse, AWSError>;
  /**
   * Retrieves a paginated list of composite models associated with the asset model
   */
  listAssetModelCompositeModels(params: IoTSiteWise.Types.ListAssetModelCompositeModelsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetModelCompositeModelsResponse) => void): Request<IoTSiteWise.Types.ListAssetModelCompositeModelsResponse, AWSError>;
  /**
   * Retrieves a paginated list of composite models associated with the asset model
   */
  listAssetModelCompositeModels(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetModelCompositeModelsResponse) => void): Request<IoTSiteWise.Types.ListAssetModelCompositeModelsResponse, AWSError>;
  /**
   * Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
   */
  listAssetModelProperties(params: IoTSiteWise.Types.ListAssetModelPropertiesRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetModelPropertiesResponse) => void): Request<IoTSiteWise.Types.ListAssetModelPropertiesResponse, AWSError>;
  /**
   * Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
   */
  listAssetModelProperties(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetModelPropertiesResponse) => void): Request<IoTSiteWise.Types.ListAssetModelPropertiesResponse, AWSError>;
  /**
   * Retrieves a paginated list of summaries of all asset models.
   */
  listAssetModels(params: IoTSiteWise.Types.ListAssetModelsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetModelsResponse) => void): Request<IoTSiteWise.Types.ListAssetModelsResponse, AWSError>;
  /**
   * Retrieves a paginated list of summaries of all asset models.
   */
  listAssetModels(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetModelsResponse) => void): Request<IoTSiteWise.Types.ListAssetModelsResponse, AWSError>;
  /**
   * Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
   */
  listAssetProperties(params: IoTSiteWise.Types.ListAssetPropertiesRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetPropertiesResponse) => void): Request<IoTSiteWise.Types.ListAssetPropertiesResponse, AWSError>;
  /**
   * Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
   */
  listAssetProperties(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetPropertiesResponse) => void): Request<IoTSiteWise.Types.ListAssetPropertiesResponse, AWSError>;
  /**
   * Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.
   */
  listAssetRelationships(params: IoTSiteWise.Types.ListAssetRelationshipsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetRelationshipsResponse) => void): Request<IoTSiteWise.Types.ListAssetRelationshipsResponse, AWSError>;
  /**
   * Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.
   */
  listAssetRelationships(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetRelationshipsResponse) => void): Request<IoTSiteWise.Types.ListAssetRelationshipsResponse, AWSError>;
  /**
   * Retrieves a paginated list of asset summaries. You can use this operation to do the following:   List assets based on a specific asset model.   List top-level assets.   You can't use this operation to list all assets. To retrieve summaries for all of your assets, use ListAssetModels to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.
   */
  listAssets(params: IoTSiteWise.Types.ListAssetsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetsResponse) => void): Request<IoTSiteWise.Types.ListAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of asset summaries. You can use this operation to do the following:   List assets based on a specific asset model.   List top-level assets.   You can't use this operation to list all assets. To retrieve summaries for all of your assets, use ListAssetModels to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.
   */
  listAssets(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetsResponse) => void): Request<IoTSiteWise.Types.ListAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of associated assets. You can use this operation to do the following:   List child assets associated to a parent asset by a hierarchy that you specify.   List an asset's parent asset.  
   */
  listAssociatedAssets(params: IoTSiteWise.Types.ListAssociatedAssetsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssociatedAssetsResponse) => void): Request<IoTSiteWise.Types.ListAssociatedAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of associated assets. You can use this operation to do the following:   List child assets associated to a parent asset by a hierarchy that you specify.   List an asset's parent asset.  
   */
  listAssociatedAssets(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssociatedAssetsResponse) => void): Request<IoTSiteWise.Types.ListAssociatedAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of bulk import job requests. For more information, see List bulk import jobs (CLI) in the IoT SiteWise User Guide.
   */
  listBulkImportJobs(params: IoTSiteWise.Types.ListBulkImportJobsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListBulkImportJobsResponse) => void): Request<IoTSiteWise.Types.ListBulkImportJobsResponse, AWSError>;
  /**
   * Retrieves a paginated list of bulk import job requests. For more information, see List bulk import jobs (CLI) in the IoT SiteWise User Guide.
   */
  listBulkImportJobs(callback?: (err: AWSError, data: IoTSiteWise.Types.ListBulkImportJobsResponse) => void): Request<IoTSiteWise.Types.ListBulkImportJobsResponse, AWSError>;
  /**
   * Retrieves a paginated list of composition relationships for an asset model of type COMPONENT_MODEL.
   */
  listCompositionRelationships(params: IoTSiteWise.Types.ListCompositionRelationshipsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListCompositionRelationshipsResponse) => void): Request<IoTSiteWise.Types.ListCompositionRelationshipsResponse, AWSError>;
  /**
   * Retrieves a paginated list of composition relationships for an asset model of type COMPONENT_MODEL.
   */
  listCompositionRelationships(callback?: (err: AWSError, data: IoTSiteWise.Types.ListCompositionRelationshipsResponse) => void): Request<IoTSiteWise.Types.ListCompositionRelationshipsResponse, AWSError>;
  /**
   * Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.
   */
  listDashboards(params: IoTSiteWise.Types.ListDashboardsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListDashboardsResponse) => void): Request<IoTSiteWise.Types.ListDashboardsResponse, AWSError>;
  /**
   * Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.
   */
  listDashboards(callback?: (err: AWSError, data: IoTSiteWise.Types.ListDashboardsResponse) => void): Request<IoTSiteWise.Types.ListDashboardsResponse, AWSError>;
  /**
   * Retrieves a paginated list of gateways.
   */
  listGateways(params: IoTSiteWise.Types.ListGatewaysRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListGatewaysResponse) => void): Request<IoTSiteWise.Types.ListGatewaysResponse, AWSError>;
  /**
   * Retrieves a paginated list of gateways.
   */
  listGateways(callback?: (err: AWSError, data: IoTSiteWise.Types.ListGatewaysResponse) => void): Request<IoTSiteWise.Types.ListGatewaysResponse, AWSError>;
  /**
   * Retrieves a paginated list of IoT SiteWise Monitor portals.
   */
  listPortals(params: IoTSiteWise.Types.ListPortalsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListPortalsResponse) => void): Request<IoTSiteWise.Types.ListPortalsResponse, AWSError>;
  /**
   * Retrieves a paginated list of IoT SiteWise Monitor portals.
   */
  listPortals(callback?: (err: AWSError, data: IoTSiteWise.Types.ListPortalsResponse) => void): Request<IoTSiteWise.Types.ListPortalsResponse, AWSError>;
  /**
   * Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
   */
  listProjectAssets(params: IoTSiteWise.Types.ListProjectAssetsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListProjectAssetsResponse) => void): Request<IoTSiteWise.Types.ListProjectAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
   */
  listProjectAssets(callback?: (err: AWSError, data: IoTSiteWise.Types.ListProjectAssetsResponse) => void): Request<IoTSiteWise.Types.ListProjectAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.
   */
  listProjects(params: IoTSiteWise.Types.ListProjectsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListProjectsResponse) => void): Request<IoTSiteWise.Types.ListProjectsResponse, AWSError>;
  /**
   * Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.
   */
  listProjects(callback?: (err: AWSError, data: IoTSiteWise.Types.ListProjectsResponse) => void): Request<IoTSiteWise.Types.ListProjectsResponse, AWSError>;
  /**
   * Retrieves the list of tags for an IoT SiteWise resource.
   */
  listTagsForResource(params: IoTSiteWise.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListTagsForResourceResponse) => void): Request<IoTSiteWise.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves the list of tags for an IoT SiteWise resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: IoTSiteWise.Types.ListTagsForResourceResponse) => void): Request<IoTSiteWise.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves a paginated list of time series (data streams).
   */
  listTimeSeries(params: IoTSiteWise.Types.ListTimeSeriesRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListTimeSeriesResponse) => void): Request<IoTSiteWise.Types.ListTimeSeriesResponse, AWSError>;
  /**
   * Retrieves a paginated list of time series (data streams).
   */
  listTimeSeries(callback?: (err: AWSError, data: IoTSiteWise.Types.ListTimeSeriesResponse) => void): Request<IoTSiteWise.Types.ListTimeSeriesResponse, AWSError>;
  /**
   * Sets the default encryption configuration for the Amazon Web Services account. For more information, see Key management in the IoT SiteWise User Guide.
   */
  putDefaultEncryptionConfiguration(params: IoTSiteWise.Types.PutDefaultEncryptionConfigurationRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.PutDefaultEncryptionConfigurationResponse) => void): Request<IoTSiteWise.Types.PutDefaultEncryptionConfigurationResponse, AWSError>;
  /**
   * Sets the default encryption configuration for the Amazon Web Services account. For more information, see Key management in the IoT SiteWise User Guide.
   */
  putDefaultEncryptionConfiguration(callback?: (err: AWSError, data: IoTSiteWise.Types.PutDefaultEncryptionConfigurationResponse) => void): Request<IoTSiteWise.Types.PutDefaultEncryptionConfigurationResponse, AWSError>;
  /**
   * Sets logging options for IoT SiteWise.
   */
  putLoggingOptions(params: IoTSiteWise.Types.PutLoggingOptionsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.PutLoggingOptionsResponse) => void): Request<IoTSiteWise.Types.PutLoggingOptionsResponse, AWSError>;
  /**
   * Sets logging options for IoT SiteWise.
   */
  putLoggingOptions(callback?: (err: AWSError, data: IoTSiteWise.Types.PutLoggingOptionsResponse) => void): Request<IoTSiteWise.Types.PutLoggingOptionsResponse, AWSError>;
  /**
   * Configures storage settings for IoT SiteWise.
   */
  putStorageConfiguration(params: IoTSiteWise.Types.PutStorageConfigurationRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.PutStorageConfigurationResponse) => void): Request<IoTSiteWise.Types.PutStorageConfigurationResponse, AWSError>;
  /**
   * Configures storage settings for IoT SiteWise.
   */
  putStorageConfiguration(callback?: (err: AWSError, data: IoTSiteWise.Types.PutStorageConfigurationResponse) => void): Request<IoTSiteWise.Types.PutStorageConfigurationResponse, AWSError>;
  /**
   * Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
   */
  tagResource(params: IoTSiteWise.Types.TagResourceRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.TagResourceResponse) => void): Request<IoTSiteWise.Types.TagResourceResponse, AWSError>;
  /**
   * Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
   */
  tagResource(callback?: (err: AWSError, data: IoTSiteWise.Types.TagResourceResponse) => void): Request<IoTSiteWise.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag from an IoT SiteWise resource.
   */
  untagResource(params: IoTSiteWise.Types.UntagResourceRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UntagResourceResponse) => void): Request<IoTSiteWise.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag from an IoT SiteWise resource.
   */
  untagResource(callback?: (err: AWSError, data: IoTSiteWise.Types.UntagResourceResponse) => void): Request<IoTSiteWise.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.
   */
  updateAccessPolicy(params: IoTSiteWise.Types.UpdateAccessPolicyRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAccessPolicyResponse) => void): Request<IoTSiteWise.Types.UpdateAccessPolicyResponse, AWSError>;
  /**
   * Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.
   */
  updateAccessPolicy(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAccessPolicyResponse) => void): Request<IoTSiteWise.Types.UpdateAccessPolicyResponse, AWSError>;
  /**
   * Updates an asset's name. For more information, see Updating assets and models in the IoT SiteWise User Guide.
   */
  updateAsset(params: IoTSiteWise.Types.UpdateAssetRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAssetResponse) => void): Request<IoTSiteWise.Types.UpdateAssetResponse, AWSError>;
  /**
   * Updates an asset's name. For more information, see Updating assets and models in the IoT SiteWise User Guide.
   */
  updateAsset(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAssetResponse) => void): Request<IoTSiteWise.Types.UpdateAssetResponse, AWSError>;
  /**
   * Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the IoT SiteWise User Guide.  This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see DescribeAssetModel. If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property. 
   */
  updateAssetModel(params: IoTSiteWise.Types.UpdateAssetModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAssetModelResponse) => void): Request<IoTSiteWise.Types.UpdateAssetModelResponse, AWSError>;
  /**
   * Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the IoT SiteWise User Guide.  This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see DescribeAssetModel. If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property. 
   */
  updateAssetModel(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAssetModelResponse) => void): Request<IoTSiteWise.Types.UpdateAssetModelResponse, AWSError>;
  /**
   * Updates a composite model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the IoT SiteWise User Guide.  If you remove a property from a composite asset model, IoT SiteWise deletes all previous data for that property. You can’t change the type or data type of an existing property. To replace an existing composite asset model property with a new one with the same name, do the following:   Submit an UpdateAssetModelCompositeModel request with the entire existing property removed.   Submit a second UpdateAssetModelCompositeModel request that includes the new property. The new asset property will have the same name as the previous one and IoT SiteWise will generate a new unique id.   
   */
  updateAssetModelCompositeModel(params: IoTSiteWise.Types.UpdateAssetModelCompositeModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAssetModelCompositeModelResponse) => void): Request<IoTSiteWise.Types.UpdateAssetModelCompositeModelResponse, AWSError>;
  /**
   * Updates a composite model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating assets and models in the IoT SiteWise User Guide.  If you remove a property from a composite asset model, IoT SiteWise deletes all previous data for that property. You can’t change the type or data type of an existing property. To replace an existing composite asset model property with a new one with the same name, do the following:   Submit an UpdateAssetModelCompositeModel request with the entire existing property removed.   Submit a second UpdateAssetModelCompositeModel request that includes the new property. The new asset property will have the same name as the previous one and IoT SiteWise will generate a new unique id.   
   */
  updateAssetModelCompositeModel(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAssetModelCompositeModelResponse) => void): Request<IoTSiteWise.Types.UpdateAssetModelCompositeModelResponse, AWSError>;
  /**
   * Updates an asset property's alias and notification state.  This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see DescribeAssetProperty. 
   */
  updateAssetProperty(params: IoTSiteWise.Types.UpdateAssetPropertyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an asset property's alias and notification state.  This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see DescribeAssetProperty. 
   */
  updateAssetProperty(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an IoT SiteWise Monitor dashboard.
   */
  updateDashboard(params: IoTSiteWise.Types.UpdateDashboardRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateDashboardResponse) => void): Request<IoTSiteWise.Types.UpdateDashboardResponse, AWSError>;
  /**
   * Updates an IoT SiteWise Monitor dashboard.
   */
  updateDashboard(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateDashboardResponse) => void): Request<IoTSiteWise.Types.UpdateDashboardResponse, AWSError>;
  /**
   * Updates a gateway's name.
   */
  updateGateway(params: IoTSiteWise.Types.UpdateGatewayRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a gateway's name.
   */
  updateGateway(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway.
   */
  updateGatewayCapabilityConfiguration(params: IoTSiteWise.Types.UpdateGatewayCapabilityConfigurationRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateGatewayCapabilityConfigurationResponse) => void): Request<IoTSiteWise.Types.UpdateGatewayCapabilityConfigurationResponse, AWSError>;
  /**
   * Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway.
   */
  updateGatewayCapabilityConfiguration(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateGatewayCapabilityConfigurationResponse) => void): Request<IoTSiteWise.Types.UpdateGatewayCapabilityConfigurationResponse, AWSError>;
  /**
   * Updates an IoT SiteWise Monitor portal.
   */
  updatePortal(params: IoTSiteWise.Types.UpdatePortalRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdatePortalResponse) => void): Request<IoTSiteWise.Types.UpdatePortalResponse, AWSError>;
  /**
   * Updates an IoT SiteWise Monitor portal.
   */
  updatePortal(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdatePortalResponse) => void): Request<IoTSiteWise.Types.UpdatePortalResponse, AWSError>;
  /**
   * Updates an IoT SiteWise Monitor project.
   */
  updateProject(params: IoTSiteWise.Types.UpdateProjectRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateProjectResponse) => void): Request<IoTSiteWise.Types.UpdateProjectResponse, AWSError>;
  /**
   * Updates an IoT SiteWise Monitor project.
   */
  updateProject(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateProjectResponse) => void): Request<IoTSiteWise.Types.UpdateProjectResponse, AWSError>;
  /**
   * Waits for the assetModelNotExists state by periodically calling the underlying IoTSiteWise.describeAssetModeloperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "assetModelNotExists", params: IoTSiteWise.Types.DescribeAssetModelRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetModelResponse, AWSError>;
  /**
   * Waits for the assetModelNotExists state by periodically calling the underlying IoTSiteWise.describeAssetModeloperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "assetModelNotExists", callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetModelResponse, AWSError>;
  /**
   * Waits for the assetModelActive state by periodically calling the underlying IoTSiteWise.describeAssetModeloperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "assetModelActive", params: IoTSiteWise.Types.DescribeAssetModelRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetModelResponse, AWSError>;
  /**
   * Waits for the assetModelActive state by periodically calling the underlying IoTSiteWise.describeAssetModeloperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "assetModelActive", callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetModelResponse, AWSError>;
  /**
   * Waits for the assetNotExists state by periodically calling the underlying IoTSiteWise.describeAssetoperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "assetNotExists", params: IoTSiteWise.Types.DescribeAssetRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetResponse) => void): Request<IoTSiteWise.Types.DescribeAssetResponse, AWSError>;
  /**
   * Waits for the assetNotExists state by periodically calling the underlying IoTSiteWise.describeAssetoperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "assetNotExists", callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetResponse) => void): Request<IoTSiteWise.Types.DescribeAssetResponse, AWSError>;
  /**
   * Waits for the assetActive state by periodically calling the underlying IoTSiteWise.describeAssetoperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "assetActive", params: IoTSiteWise.Types.DescribeAssetRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetResponse) => void): Request<IoTSiteWise.Types.DescribeAssetResponse, AWSError>;
  /**
   * Waits for the assetActive state by periodically calling the underlying IoTSiteWise.describeAssetoperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "assetActive", callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetResponse) => void): Request<IoTSiteWise.Types.DescribeAssetResponse, AWSError>;
  /**
   * Waits for the portalNotExists state by periodically calling the underlying IoTSiteWise.describePortaloperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "portalNotExists", params: IoTSiteWise.Types.DescribePortalRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribePortalResponse) => void): Request<IoTSiteWise.Types.DescribePortalResponse, AWSError>;
  /**
   * Waits for the portalNotExists state by periodically calling the underlying IoTSiteWise.describePortaloperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "portalNotExists", callback?: (err: AWSError, data: IoTSiteWise.Types.DescribePortalResponse) => void): Request<IoTSiteWise.Types.DescribePortalResponse, AWSError>;
  /**
   * Waits for the portalActive state by periodically calling the underlying IoTSiteWise.describePortaloperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "portalActive", params: IoTSiteWise.Types.DescribePortalRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribePortalResponse) => void): Request<IoTSiteWise.Types.DescribePortalResponse, AWSError>;
  /**
   * Waits for the portalActive state by periodically calling the underlying IoTSiteWise.describePortaloperation every 3 seconds (at most 20 times).
   */
  waitFor(state: "portalActive", callback?: (err: AWSError, data: IoTSiteWise.Types.DescribePortalResponse) => void): Request<IoTSiteWise.Types.DescribePortalResponse, AWSError>;
}
declare namespace IoTSiteWise {
  export type ARN = string;
  export type AccessPolicySummaries = AccessPolicySummary[];
  export interface AccessPolicySummary {
    /**
     * The ID of the access policy.
     */
    id: ID;
    /**
     * The identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user).
     */
    identity: Identity;
    /**
     * The IoT SiteWise Monitor resource (a portal or project).
     */
    resource: Resource;
    /**
     * The permissions for the access policy. Note that a project ADMINISTRATOR is also known as a project owner.
     */
    permission: Permission;
    /**
     * The date the access policy was created, in Unix epoch time.
     */
    creationDate?: Timestamp;
    /**
     * The date the access policy was last updated, in Unix epoch time.
     */
    lastUpdateDate?: Timestamp;
  }
  export interface ActionDefinition {
    /**
     * The ID of the action definition.
     */
    actionDefinitionId: ID;
    /**
     * The name of the action definition.
     */
    actionName: Name;
    /**
     * The type of the action definition.
     */
    actionType: Name;
  }
  export type ActionDefinitions = ActionDefinition[];
  export interface ActionPayload {
    /**
     * The payload of the action in a JSON string.
     */
    stringValue: ActionPayloadString;
  }
  export type ActionPayloadString = string;
  export type ActionSummaries = ActionSummary[];
  export interface ActionSummary {
    /**
     * The ID of the action.
     */
    actionId?: ID;
    /**
     * The ID of the action definition.
     */
    actionDefinitionId?: ID;
    /**
     * The resource the action will be taken on.
     */
    targetResource?: TargetResource;
  }
  export type AdaptiveIngestion = boolean;
  export type AggregateType = "AVERAGE"|"COUNT"|"MAXIMUM"|"MINIMUM"|"SUM"|"STANDARD_DEVIATION"|string;
  export type AggregateTypes = AggregateType[];
  export type AggregatedDoubleValue = number;
  export interface AggregatedValue {
    /**
     * The date the aggregating computations occurred, in Unix epoch time.
     */
    timestamp: Timestamp;
    /**
     * The quality of the aggregated data.
     */
    quality?: Quality;
    /**
     * The value of the aggregates.
     */
    value: Aggregates;
  }
  export type AggregatedValues = AggregatedValue[];
  export interface Aggregates {
    /**
     * The average (mean) value of the time series over a time interval window.
     */
    average?: AggregatedDoubleValue;
    /**
     * The count of data points in the time series over a time interval window.
     */
    count?: AggregatedDoubleValue;
    /**
     * The maximum value of the time series over a time interval window.
     */
    maximum?: AggregatedDoubleValue;
    /**
     * The minimum value of the time series over a time interval window.
     */
    minimum?: AggregatedDoubleValue;
    /**
     * The sum of the time series over a time interval window.
     */
    sum?: AggregatedDoubleValue;
    /**
     * The standard deviation of the time series over a time interval window.
     */
    standardDeviation?: AggregatedDoubleValue;
  }
  export interface Alarms {
    /**
     * The ARN of the IAM role that allows the alarm to perform actions and access Amazon Web Services resources and services, such as IoT Events.
     */
    alarmRoleArn: ARN;
    /**
     * The ARN of the Lambda function that manages alarm notifications. For more information, see Managing alarm notifications in the IoT Events Developer Guide.
     */
    notificationLambdaArn?: ARN;
  }
  export type AmazonResourceName = string;
  export interface AssetCompositeModel {
    /**
     * The name of the composite model.
     */
    name: Name;
    /**
     * The description of the composite model.
     */
    description?: Description;
    /**
     * The type of the composite model. For alarm composite models, this type is AWS/ALARM.
     */
    type: Name;
    /**
     * The asset properties that this composite model defines.
     */
    properties: AssetProperties;
    /**
     *  The ID of the asset composite model. 
     */
    id?: ID;
    /**
     * The external ID of the asset composite model. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export type AssetCompositeModelPath = AssetCompositeModelPathSegment[];
  export interface AssetCompositeModelPathSegment {
    /**
     * The ID of the path segment.
     */
    id?: ID;
    /**
     * The name of the path segment.
     */
    name?: Name;
  }
  export type AssetCompositeModelSummaries = AssetCompositeModelSummary[];
  export interface AssetCompositeModelSummary {
    /**
     * The ID of the composite model that this summary describes.
     */
    id: ID;
    /**
     * An external ID to assign to the asset model. If the composite model is a derived composite model, or one nested inside a component model, you can only set the external ID using UpdateAssetModelCompositeModel and specifying the derived ID of the model or property from the created model it's a part of.
     */
    externalId?: ExternalId;
    /**
     * The name of the composite model that this summary describes.
     */
    name: Name;
    /**
     * The type of asset model.    ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.   
     */
    type: Name;
    /**
     * A description of the composite model that this summary describes.
     */
    description: Description;
    /**
     * The path that includes all the components of the asset model for the asset.
     */
    path: AssetCompositeModelPath;
  }
  export type AssetCompositeModels = AssetCompositeModel[];
  export type AssetErrorCode = "INTERNAL_FAILURE"|string;
  export interface AssetErrorDetails {
    /**
     * The ID of the asset, in UUID format.
     */
    assetId: ID;
    /**
     * The error code.
     */
    code: AssetErrorCode;
    /**
     * The error message.
     */
    message: AssetErrorMessage;
  }
  export type AssetErrorMessage = string;
  export type AssetHierarchies = AssetHierarchy[];
  export interface AssetHierarchy {
    /**
     * The ID of the hierarchy. This ID is a hierarchyId.
     */
    id?: ID;
    /**
     * The hierarchy name provided in the CreateAssetModel or UpdateAssetModel API operation.
     */
    name: Name;
    /**
     * The external ID of the hierarchy, if it has one. When you update an asset hierarchy, you may assign an external ID if it doesn't already have one. You can't change the external ID of an asset hierarchy that already has one. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export interface AssetHierarchyInfo {
    /**
     * The ID of the parent asset in this asset relationship.
     */
    parentAssetId?: ID;
    /**
     * The ID of the child asset in this asset relationship.
     */
    childAssetId?: ID;
  }
  export type AssetIDs = ID[];
  export interface AssetModelCompositeModel {
    /**
     * The name of the composite model.
     */
    name: Name;
    /**
     * The description of the composite model.
     */
    description?: Description;
    /**
     * The type of the composite model. For alarm composite models, this type is AWS/ALARM.
     */
    type: Name;
    /**
     * The asset property definitions for this composite model.
     */
    properties?: AssetModelProperties;
    /**
     *  The ID of the asset model composite model. 
     */
    id?: CustomID;
    /**
     * The external ID of the asset model composite model. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export interface AssetModelCompositeModelDefinition {
    /**
     * The name of the composite model.
     */
    name: Name;
    /**
     * The description of the composite model.
     */
    description?: Description;
    /**
     * The type of the composite model. For alarm composite models, this type is AWS/ALARM.
     */
    type: Name;
    /**
     * The asset property definitions for this composite model.
     */
    properties?: AssetModelPropertyDefinitions;
    /**
     * The ID to assign to the composite model, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
     */
    id?: ID;
    /**
     * An external ID to assign to the composite model. The external ID must be unique among composite models within this asset model. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export type AssetModelCompositeModelDefinitions = AssetModelCompositeModelDefinition[];
  export type AssetModelCompositeModelPath = AssetModelCompositeModelPathSegment[];
  export interface AssetModelCompositeModelPathSegment {
    /**
     * The ID of the path segment.
     */
    id?: ID;
    /**
     * The name of the path segment.
     */
    name?: Name;
  }
  export type AssetModelCompositeModelSummaries = AssetModelCompositeModelSummary[];
  export interface AssetModelCompositeModelSummary {
    /**
     * The ID of the the composite model that this summary describes..
     */
    id: ID;
    /**
     * The external ID of a composite model on this asset model. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
    /**
     * The name of the the composite model that this summary describes..
     */
    name: Name;
    /**
     * The type of asset model.    ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.   
     */
    type: Name;
    /**
     * The description of the the composite model that this summary describes..
     */
    description?: Description;
    /**
     * The path that includes all the pieces that make up the composite model.
     */
    path?: AssetModelCompositeModelPath;
  }
  export type AssetModelCompositeModels = AssetModelCompositeModel[];
  export type AssetModelHierarchies = AssetModelHierarchy[];
  export interface AssetModelHierarchy {
    /**
     * The ID of the asset model hierarchy. This ID is a hierarchyId.   If you are callling UpdateAssetModel to create a new hierarchy: You can specify its ID here, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.   If you are calling UpdateAssetModel to modify an existing hierarchy: This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.  
     */
    id?: CustomID;
    /**
     * The name of the asset model hierarchy that you specify by using the CreateAssetModel or UpdateAssetModel API operation.
     */
    name: Name;
    /**
     * The ID of the asset model, in UUID format. All assets in this hierarchy must be instances of the childAssetModelId asset model. IoT SiteWise will always return the actual asset model ID for this value. However, when you are specifying this value as part of a call to UpdateAssetModel, you may provide either the asset model ID or else externalId: followed by the asset model's external ID. For more information, see Using external IDs in the IoT SiteWise User Guide. 
     */
    childAssetModelId: CustomID;
    /**
     * The external ID (if any) provided in the CreateAssetModel or UpdateAssetModel operation. You can assign an external ID by specifying this value as part of a call to UpdateAssetModel. However, you can't change the external ID if one is already assigned. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export interface AssetModelHierarchyDefinition {
    /**
     * The name of the asset model hierarchy definition (as specified in the CreateAssetModel or UpdateAssetModel API operation).
     */
    name: Name;
    /**
     * The ID of an asset model for this hierarchy. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    childAssetModelId: CustomID;
    /**
     * The ID to assign to the asset model hierarchy, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
     */
    id?: ID;
    /**
     * An external ID to assign to the asset model hierarchy. The external ID must be unique among asset model hierarchies within this asset model. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export type AssetModelHierarchyDefinitions = AssetModelHierarchyDefinition[];
  export type AssetModelProperties = AssetModelProperty[];
  export interface AssetModelProperty {
    /**
     * The ID of the asset model property.   If you are callling UpdateAssetModel to create a new property: You can specify its ID here, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.   If you are calling UpdateAssetModel to modify an existing property: This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.  
     */
    id?: CustomID;
    /**
     * The name of the asset model property.
     */
    name: Name;
    /**
     * The data type of the asset model property.
     */
    dataType: PropertyDataType;
    /**
     * The data type of the structure for this property. This parameter exists on properties that have the STRUCT data type.
     */
    dataTypeSpec?: Name;
    /**
     * The unit of the asset model property, such as Newtons or RPM.
     */
    unit?: PropertyUnit;
    /**
     * The property type (see PropertyType).
     */
    type: PropertyType;
    /**
     * The structured path to the property from the root of the asset model.
     */
    path?: AssetModelPropertyPath;
    /**
     * The external ID (if any) provided in the CreateAssetModel or UpdateAssetModel operation. You can assign an external ID by specifying this value as part of a call to UpdateAssetModel. However, you can't change the external ID if one is already assigned. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export interface AssetModelPropertyDefinition {
    /**
     * The name of the property definition.
     */
    name: Name;
    /**
     * The data type of the property definition. If you specify STRUCT, you must also specify dataTypeSpec to identify the type of the structure for this property.
     */
    dataType: PropertyDataType;
    /**
     * The data type of the structure for this property. This parameter is required on properties that have the STRUCT data type. The options for this parameter depend on the type of the composite model in which you define this property. Use AWS/ALARM_STATE for alarm state in alarm composite models.
     */
    dataTypeSpec?: Name;
    /**
     * The unit of the property definition, such as Newtons or RPM.
     */
    unit?: PropertyUnit;
    /**
     * The property definition type (see PropertyType). You can only specify one type in a property definition.
     */
    type: PropertyType;
    /**
     * The ID to assign to the asset model property, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
     */
    id?: ID;
    /**
     * An external ID to assign to the property definition. The external ID must be unique among property definitions within this asset model. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export type AssetModelPropertyDefinitions = AssetModelPropertyDefinition[];
  export type AssetModelPropertyPath = AssetModelPropertyPathSegment[];
  export interface AssetModelPropertyPathSegment {
    /**
     * The ID of the path segment.
     */
    id?: ID;
    /**
     * The name of the path segment.
     */
    name?: Name;
  }
  export type AssetModelPropertySummaries = AssetModelPropertySummary[];
  export interface AssetModelPropertySummary {
    /**
     * The ID of the property.
     */
    id?: ID;
    /**
     * The name of the property.
     */
    name: Name;
    /**
     * The data type of the property.
     */
    dataType: PropertyDataType;
    /**
     * The data type of the structure for this property. This parameter exists on properties that have the STRUCT data type.
     */
    dataTypeSpec?: Name;
    /**
     * The unit (such as Newtons or RPM) of the property.
     */
    unit?: PropertyUnit;
    type: PropertyType;
    /**
     *  The ID of the composite model that contains the asset model property. 
     */
    assetModelCompositeModelId?: ID;
    /**
     * The structured path to the property from the root of the asset model.
     */
    path?: AssetModelPropertyPath;
    /**
     * The external ID of the property. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export type AssetModelState = "CREATING"|"ACTIVE"|"UPDATING"|"PROPAGATING"|"DELETING"|"FAILED"|string;
  export interface AssetModelStatus {
    /**
     * The current state of the asset model.
     */
    state: AssetModelState;
    /**
     * Contains associated error information, if any.
     */
    error?: ErrorDetails;
  }
  export type AssetModelSummaries = AssetModelSummary[];
  export interface AssetModelSummary {
    /**
     * The ID of the asset model (used with IoT SiteWise API operations).
     */
    id: ID;
    /**
     * The ARN of the asset model, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId} 
     */
    arn: ARN;
    /**
     * The name of the asset model.
     */
    name: Name;
    /**
     * The asset model description.
     */
    description: Description;
    /**
     * The date the asset model was created, in Unix epoch time.
     */
    creationDate: Timestamp;
    /**
     * The date the asset model was last updated, in Unix epoch time.
     */
    lastUpdateDate: Timestamp;
    /**
     * The current status of the asset model.
     */
    status: AssetModelStatus;
    /**
     * The type of asset model.    ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.   
     */
    assetModelType?: AssetModelType;
    /**
     * The external ID of the asset model. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export type AssetModelType = "ASSET_MODEL"|"COMPONENT_MODEL"|string;
  export type AssetProperties = AssetProperty[];
  export interface AssetProperty {
    /**
     * The ID of the asset property.
     */
    id: ID;
    /**
     * The name of the property.
     */
    name: Name;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    alias?: PropertyAlias;
    /**
     * The asset property's notification topic and state. For more information, see UpdateAssetProperty.
     */
    notification?: PropertyNotification;
    /**
     * The data type of the asset property.
     */
    dataType: PropertyDataType;
    /**
     * The data type of the structure for this property. This parameter exists on properties that have the STRUCT data type.
     */
    dataTypeSpec?: Name;
    /**
     * The unit (such as Newtons or RPM) of the asset property.
     */
    unit?: PropertyUnit;
    /**
     * The structured path to the property from the root of the asset.
     */
    path?: AssetPropertyPath;
    /**
     * The external ID of the asset property. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export type AssetPropertyAlias = string;
  export type AssetPropertyPath = AssetPropertyPathSegment[];
  export interface AssetPropertyPathSegment {
    /**
     * The ID of the path segment.
     */
    id?: ID;
    /**
     * The name of the path segment.
     */
    name?: Name;
  }
  export type AssetPropertySummaries = AssetPropertySummary[];
  export interface AssetPropertySummary {
    /**
     * The ID of the property.
     */
    id: ID;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    alias?: PropertyAlias;
    /**
     *  The unit of measure (such as Newtons or RPM) of the asset property. 
     */
    unit?: PropertyUnit;
    notification?: PropertyNotification;
    /**
     *  The ID of the composite model that contains the asset property. 
     */
    assetCompositeModelId?: ID;
    /**
     * The structured path to the property from the root of the asset.
     */
    path?: AssetPropertyPath;
    /**
     * The external ID of the property. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export interface AssetPropertyValue {
    /**
     * The value of the asset property (see Variant).
     */
    value: Variant;
    /**
     * The timestamp of the asset property value.
     */
    timestamp: TimeInNanos;
    /**
     * The quality of the asset property value.
     */
    quality?: Quality;
  }
  export type AssetPropertyValueHistory = AssetPropertyValue[];
  export type AssetPropertyValues = AssetPropertyValue[];
  export type AssetRelationshipSummaries = AssetRelationshipSummary[];
  export interface AssetRelationshipSummary {
    /**
     * The assets that are related through an asset hierarchy. This object is present if the relationshipType is HIERARCHY.
     */
    hierarchyInfo?: AssetHierarchyInfo;
    /**
     * The relationship type of the assets in this relationship. This value is one of the following:    HIERARCHY – The assets are related through an asset hierarchy. If you specify this relationship type, this asset relationship includes the hierarchyInfo object.  
     */
    relationshipType: AssetRelationshipType;
  }
  export type AssetRelationshipType = "HIERARCHY"|string;
  export type AssetState = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"FAILED"|string;
  export interface AssetStatus {
    /**
     * The current status of the asset.
     */
    state: AssetState;
    /**
     * Contains associated error information, if any.
     */
    error?: ErrorDetails;
  }
  export type AssetSummaries = AssetSummary[];
  export interface AssetSummary {
    /**
     * The ID of the asset, in UUID format.
     */
    id: ID;
    /**
     * The ARN of the asset, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId} 
     */
    arn: ARN;
    /**
     * The name of the asset.
     */
    name: Name;
    /**
     * The ID of the asset model used to create this asset.
     */
    assetModelId: ID;
    /**
     * The date the asset was created, in Unix epoch time.
     */
    creationDate: Timestamp;
    /**
     * The date the asset was last updated, in Unix epoch time.
     */
    lastUpdateDate: Timestamp;
    /**
     * The current status of the asset.
     */
    status: AssetStatus;
    /**
     * A list of asset hierarchies that each contain a hierarchyId. A hierarchy specifies allowed parent/child asset relationships.
     */
    hierarchies: AssetHierarchies;
    /**
     * A description for the asset.
     */
    description?: Description;
    /**
     * The external ID of the asset. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export interface AssociateAssetsRequest {
    /**
     * The ID of the parent asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * The ID of a hierarchy in the parent asset's model. (This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.) Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see Asset hierarchies in the IoT SiteWise User Guide.
     */
    hierarchyId: CustomID;
    /**
     * The ID of the child asset to be associated. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    childAssetId: CustomID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface AssociateTimeSeriesToAssetPropertyRequest {
    /**
     * The alias that identifies the time series.
     */
    alias: PropertyAlias;
    /**
     * The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    propertyId: CustomID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export type AssociatedAssetsSummaries = AssociatedAssetsSummary[];
  export interface AssociatedAssetsSummary {
    /**
     * The ID of the asset, in UUID format.
     */
    id: ID;
    /**
     * The ARN of the asset, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId} 
     */
    arn: ARN;
    /**
     * The name of the asset.
     */
    name: Name;
    /**
     * The ID of the asset model used to create the asset.
     */
    assetModelId: ID;
    /**
     * The date the asset was created, in Unix epoch time.
     */
    creationDate: Timestamp;
    /**
     * The date the asset was last updated, in Unix epoch time.
     */
    lastUpdateDate: Timestamp;
    /**
     * The current status of the asset.
     */
    status: AssetStatus;
    /**
     * A list of asset hierarchies that each contain a hierarchyId. A hierarchy specifies allowed parent/child asset relationships.
     */
    hierarchies: AssetHierarchies;
    /**
     * A description for the asset.
     */
    description?: Description;
    /**
     * The external ID of the asset. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export interface Attribute {
    /**
     * The default value of the asset model property attribute. All assets that you create from the asset model contain this attribute value. You can update an attribute's value after you create an asset. For more information, see Updating attribute values in the IoT SiteWise User Guide.
     */
    defaultValue?: DefaultValue;
  }
  export type AuthMode = "IAM"|"SSO"|string;
  export type BatchAssociateProjectAssetsErrors = AssetErrorDetails[];
  export interface BatchAssociateProjectAssetsRequest {
    /**
     * The ID of the project to which to associate the assets.
     */
    projectId: ID;
    /**
     * The IDs of the assets to be associated to the project.
     */
    assetIds: IDs;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface BatchAssociateProjectAssetsResponse {
    /**
     * A list of associated error information, if any.
     */
    errors?: BatchAssociateProjectAssetsErrors;
  }
  export type BatchDisassociateProjectAssetsErrors = AssetErrorDetails[];
  export interface BatchDisassociateProjectAssetsRequest {
    /**
     * The ID of the project from which to disassociate the assets.
     */
    projectId: ID;
    /**
     * The IDs of the assets to be disassociated from the project.
     */
    assetIds: IDs;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface BatchDisassociateProjectAssetsResponse {
    /**
     * A list of associated error information, if any.
     */
    errors?: BatchDisassociateProjectAssetsErrors;
  }
  export type BatchEntryCompletionStatus = "SUCCESS"|"ERROR"|string;
  export type BatchGetAssetPropertyAggregatesEntries = BatchGetAssetPropertyAggregatesEntry[];
  export interface BatchGetAssetPropertyAggregatesEntry {
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
    /**
     * The ID of the asset in which the asset property was created.
     */
    assetId?: ID;
    /**
     * The ID of the asset property, in UUID format.
     */
    propertyId?: ID;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
    /**
     * The data aggregating function.
     */
    aggregateTypes: AggregateTypes;
    /**
     * The time interval over which to aggregate data.
     */
    resolution: Resolution;
    /**
     * The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
     */
    startDate: Timestamp;
    /**
     * The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
     */
    endDate: Timestamp;
    /**
     * The quality by which to filter asset data.
     */
    qualities?: Qualities;
    /**
     * The chronological sorting order of the requested information. Default: ASCENDING 
     */
    timeOrdering?: TimeOrdering;
  }
  export type BatchGetAssetPropertyAggregatesErrorCode = "ResourceNotFoundException"|"InvalidRequestException"|"AccessDeniedException"|string;
  export type BatchGetAssetPropertyAggregatesErrorEntries = BatchGetAssetPropertyAggregatesErrorEntry[];
  export interface BatchGetAssetPropertyAggregatesErrorEntry {
    /**
     * The error code.
     */
    errorCode: BatchGetAssetPropertyAggregatesErrorCode;
    /**
     * The associated error message.
     */
    errorMessage: ErrorMessage;
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
  }
  export interface BatchGetAssetPropertyAggregatesErrorInfo {
    /**
     * The error code.
     */
    errorCode: BatchGetAssetPropertyAggregatesErrorCode;
    /**
     * The date the error occurred, in Unix epoch time.
     */
    errorTimestamp: Timestamp;
  }
  export type BatchGetAssetPropertyAggregatesMaxResults = number;
  export interface BatchGetAssetPropertyAggregatesRequest {
    /**
     * The list of asset property aggregate entries for the batch get request. You can specify up to 16 entries per request.
     */
    entries: BatchGetAssetPropertyAggregatesEntries;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.   The size of the result set is equal to 1 MB.   The number of data points in the result set is equal to the value of maxResults. The maximum value of maxResults is 4000.  
     */
    maxResults?: BatchGetAssetPropertyAggregatesMaxResults;
  }
  export interface BatchGetAssetPropertyAggregatesResponse {
    /**
     * A list of the errors (if any) associated with the batch request. Each error entry contains the entryId of the entry that failed.
     */
    errorEntries: BatchGetAssetPropertyAggregatesErrorEntries;
    /**
     * A list of entries that were processed successfully by this batch request. Each success entry contains the entryId of the entry that succeeded and the latest query result.
     */
    successEntries: BatchGetAssetPropertyAggregatesSuccessEntries;
    /**
     * A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the entryId of the entry that skipped.
     */
    skippedEntries: BatchGetAssetPropertyAggregatesSkippedEntries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type BatchGetAssetPropertyAggregatesSkippedEntries = BatchGetAssetPropertyAggregatesSkippedEntry[];
  export interface BatchGetAssetPropertyAggregatesSkippedEntry {
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
    /**
     * The completion status of each entry that is associated with the BatchGetAssetPropertyAggregates API.
     */
    completionStatus: BatchEntryCompletionStatus;
    /**
     * The error information, such as the error code and the timestamp.
     */
    errorInfo?: BatchGetAssetPropertyAggregatesErrorInfo;
  }
  export type BatchGetAssetPropertyAggregatesSuccessEntries = BatchGetAssetPropertyAggregatesSuccessEntry[];
  export interface BatchGetAssetPropertyAggregatesSuccessEntry {
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
    /**
     * The requested aggregated asset property values (for example, average, minimum, and maximum).
     */
    aggregatedValues: AggregatedValues;
  }
  export type BatchGetAssetPropertyValueEntries = BatchGetAssetPropertyValueEntry[];
  export interface BatchGetAssetPropertyValueEntry {
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
    /**
     * The ID of the asset in which the asset property was created.
     */
    assetId?: ID;
    /**
     * The ID of the asset property, in UUID format.
     */
    propertyId?: ID;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
  }
  export type BatchGetAssetPropertyValueErrorCode = "ResourceNotFoundException"|"InvalidRequestException"|"AccessDeniedException"|string;
  export type BatchGetAssetPropertyValueErrorEntries = BatchGetAssetPropertyValueErrorEntry[];
  export interface BatchGetAssetPropertyValueErrorEntry {
    /**
     * The error code.
     */
    errorCode: BatchGetAssetPropertyValueErrorCode;
    /**
     * The associated error message.
     */
    errorMessage: ErrorMessage;
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
  }
  export interface BatchGetAssetPropertyValueErrorInfo {
    /**
     * The error code.
     */
    errorCode: BatchGetAssetPropertyValueErrorCode;
    /**
     * The date the error occurred, in Unix epoch time.
     */
    errorTimestamp: Timestamp;
  }
  export type BatchGetAssetPropertyValueHistoryEntries = BatchGetAssetPropertyValueHistoryEntry[];
  export interface BatchGetAssetPropertyValueHistoryEntry {
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
    /**
     * The ID of the asset in which the asset property was created.
     */
    assetId?: ID;
    /**
     * The ID of the asset property, in UUID format.
     */
    propertyId?: ID;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
    /**
     * The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
     */
    startDate?: Timestamp;
    /**
     * The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
     */
    endDate?: Timestamp;
    /**
     * The quality by which to filter asset data.
     */
    qualities?: Qualities;
    /**
     * The chronological sorting order of the requested information. Default: ASCENDING 
     */
    timeOrdering?: TimeOrdering;
  }
  export type BatchGetAssetPropertyValueHistoryErrorCode = "ResourceNotFoundException"|"InvalidRequestException"|"AccessDeniedException"|string;
  export type BatchGetAssetPropertyValueHistoryErrorEntries = BatchGetAssetPropertyValueHistoryErrorEntry[];
  export interface BatchGetAssetPropertyValueHistoryErrorEntry {
    /**
     * The error code.
     */
    errorCode: BatchGetAssetPropertyValueHistoryErrorCode;
    /**
     * The associated error message.
     */
    errorMessage: ErrorMessage;
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
  }
  export interface BatchGetAssetPropertyValueHistoryErrorInfo {
    /**
     * The error code.
     */
    errorCode: BatchGetAssetPropertyValueHistoryErrorCode;
    /**
     * The date the error occurred, in Unix epoch time.
     */
    errorTimestamp: Timestamp;
  }
  export type BatchGetAssetPropertyValueHistoryMaxResults = number;
  export interface BatchGetAssetPropertyValueHistoryRequest {
    /**
     * The list of asset property historical value entries for the batch get request. You can specify up to 16 entries per request.
     */
    entries: BatchGetAssetPropertyValueHistoryEntries;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.   The size of the result set is equal to 4 MB.   The number of data points in the result set is equal to the value of maxResults. The maximum value of maxResults is 20000.  
     */
    maxResults?: BatchGetAssetPropertyValueHistoryMaxResults;
  }
  export interface BatchGetAssetPropertyValueHistoryResponse {
    /**
     * A list of the errors (if any) associated with the batch request. Each error entry contains the entryId of the entry that failed.
     */
    errorEntries: BatchGetAssetPropertyValueHistoryErrorEntries;
    /**
     * A list of entries that were processed successfully by this batch request. Each success entry contains the entryId of the entry that succeeded and the latest query result.
     */
    successEntries: BatchGetAssetPropertyValueHistorySuccessEntries;
    /**
     * A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the entryId of the entry that skipped.
     */
    skippedEntries: BatchGetAssetPropertyValueHistorySkippedEntries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type BatchGetAssetPropertyValueHistorySkippedEntries = BatchGetAssetPropertyValueHistorySkippedEntry[];
  export interface BatchGetAssetPropertyValueHistorySkippedEntry {
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
    /**
     * The completion status of each entry that is associated with the BatchGetAssetPropertyValueHistory API.
     */
    completionStatus: BatchEntryCompletionStatus;
    /**
     * The error information, such as the error code and the timestamp.
     */
    errorInfo?: BatchGetAssetPropertyValueHistoryErrorInfo;
  }
  export type BatchGetAssetPropertyValueHistorySuccessEntries = BatchGetAssetPropertyValueHistorySuccessEntry[];
  export interface BatchGetAssetPropertyValueHistorySuccessEntry {
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
    /**
     * The requested historical values for the specified asset property.
     */
    assetPropertyValueHistory: AssetPropertyValueHistory;
  }
  export interface BatchGetAssetPropertyValueRequest {
    /**
     * The list of asset property value entries for the batch get request. You can specify up to 128 entries per request.
     */
    entries: BatchGetAssetPropertyValueEntries;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
  }
  export interface BatchGetAssetPropertyValueResponse {
    /**
     * A list of the errors (if any) associated with the batch request. Each error entry contains the entryId of the entry that failed.
     */
    errorEntries: BatchGetAssetPropertyValueErrorEntries;
    /**
     * A list of entries that were processed successfully by this batch request. Each success entry contains the entryId of the entry that succeeded and the latest query result.
     */
    successEntries: BatchGetAssetPropertyValueSuccessEntries;
    /**
     * A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the entryId of the entry that skipped.
     */
    skippedEntries: BatchGetAssetPropertyValueSkippedEntries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type BatchGetAssetPropertyValueSkippedEntries = BatchGetAssetPropertyValueSkippedEntry[];
  export interface BatchGetAssetPropertyValueSkippedEntry {
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
    /**
     * The completion status of each entry that is associated with the BatchGetAssetPropertyValue request.
     */
    completionStatus: BatchEntryCompletionStatus;
    /**
     * The error information, such as the error code and the timestamp.
     */
    errorInfo?: BatchGetAssetPropertyValueErrorInfo;
  }
  export type BatchGetAssetPropertyValueSuccessEntries = BatchGetAssetPropertyValueSuccessEntry[];
  export interface BatchGetAssetPropertyValueSuccessEntry {
    /**
     * The ID of the entry.
     */
    entryId: EntryId;
    assetPropertyValue?: AssetPropertyValue;
  }
  export interface BatchPutAssetPropertyError {
    /**
     * The error code.
     */
    errorCode: BatchPutAssetPropertyValueErrorCode;
    /**
     * The associated error message.
     */
    errorMessage: ErrorMessage;
    /**
     * A list of timestamps for each error, if any.
     */
    timestamps: Timestamps;
  }
  export type BatchPutAssetPropertyErrorEntries = BatchPutAssetPropertyErrorEntry[];
  export interface BatchPutAssetPropertyErrorEntry {
    /**
     * The ID of the failed entry.
     */
    entryId: EntryId;
    /**
     * The list of update property value errors.
     */
    errors: BatchPutAssetPropertyErrors;
  }
  export type BatchPutAssetPropertyErrors = BatchPutAssetPropertyError[];
  export type BatchPutAssetPropertyValueErrorCode = "ResourceNotFoundException"|"InvalidRequestException"|"InternalFailureException"|"ServiceUnavailableException"|"ThrottlingException"|"LimitExceededException"|"ConflictingOperationException"|"TimestampOutOfRangeException"|"AccessDeniedException"|string;
  export interface BatchPutAssetPropertyValueRequest {
    /**
     * The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.
     */
    entries: PutAssetPropertyValueEntries;
  }
  export interface BatchPutAssetPropertyValueResponse {
    /**
     * A list of the errors (if any) associated with the batch put request. Each error entry contains the entryId of the entry that failed.
     */
    errorEntries: BatchPutAssetPropertyErrorEntries;
  }
  export type Bucket = string;
  export type CapabilityConfiguration = string;
  export type CapabilityNamespace = string;
  export type CapabilitySyncStatus = "IN_SYNC"|"OUT_OF_SYNC"|"SYNC_FAILED"|"UNKNOWN"|string;
  export type ClientToken = string;
  export interface ColumnInfo {
    /**
     * The name of the column description.
     */
    name?: String;
    /**
     * The type of the column description.
     */
    type?: ColumnType;
  }
  export type ColumnName = "ALIAS"|"ASSET_ID"|"PROPERTY_ID"|"DATA_TYPE"|"TIMESTAMP_SECONDS"|"TIMESTAMP_NANO_OFFSET"|"QUALITY"|"VALUE"|string;
  export type ColumnNames = ColumnName[];
  export interface ColumnType {
    /**
     * The allowed data types that the column has as it's value.
     */
    scalarType?: ScalarType;
  }
  export type ColumnsList = ColumnInfo[];
  export interface CompositeModelProperty {
    /**
     * The name of the property.
     */
    name: Name;
    /**
     * The type of the composite model that defines this property.
     */
    type: Name;
    assetProperty: Property;
    /**
     *  The ID of the composite model that contains the property. 
     */
    id?: ID;
    /**
     * The external ID of the composite model that contains the property. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export interface CompositionDetails {
    /**
     * An array detailing the composition relationship for this composite model.
     */
    compositionRelationship?: CompositionRelationship;
  }
  export type CompositionRelationship = CompositionRelationshipItem[];
  export interface CompositionRelationshipItem {
    /**
     * The ID of the component.
     */
    id?: ID;
  }
  export type CompositionRelationshipSummaries = CompositionRelationshipSummary[];
  export interface CompositionRelationshipSummary {
    /**
     * The ID of the asset model, in UUID format.
     */
    assetModelId: ID;
    /**
     * The ID of a composite model on this asset model.
     */
    assetModelCompositeModelId: ID;
    /**
     * The composite model type. Valid values are AWS/ALARM, CUSTOM, or  AWS/L4E_ANOMALY.
     */
    assetModelCompositeModelType: Name;
  }
  export type ComputeLocation = "EDGE"|"CLOUD"|string;
  export interface ConfigurationErrorDetails {
    /**
     * The error code.
     */
    code: ErrorCode;
    /**
     * The error message.
     */
    message: ErrorMessage;
  }
  export type ConfigurationState = "ACTIVE"|"UPDATE_IN_PROGRESS"|"UPDATE_FAILED"|string;
  export interface ConfigurationStatus {
    /**
     * The current state of the configuration.
     */
    state: ConfigurationState;
    /**
     * Contains associated error information, if any.
     */
    error?: ConfigurationErrorDetails;
  }
  export type CoreDeviceThingName = string;
  export interface CreateAccessPolicyRequest {
    /**
     * The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.
     */
    accessPolicyIdentity: Identity;
    /**
     * The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.
     */
    accessPolicyResource: Resource;
    /**
     * The permission level for this access policy. Note that a project ADMINISTRATOR is also known as a project owner.
     */
    accessPolicyPermission: Permission;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * A list of key-value pairs that contain metadata for the access policy. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide.
     */
    tags?: TagMap;
  }
  export interface CreateAccessPolicyResponse {
    /**
     * The ID of the access policy.
     */
    accessPolicyId: ID;
    /**
     * The ARN of the access policy, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId} 
     */
    accessPolicyArn: ARN;
  }
  export interface CreateAssetModelCompositeModelRequest {
    /**
     * The ID of the asset model this composite model is a part of.
     */
    assetModelId: CustomID;
    /**
     * The ID of the parent composite model in this asset model relationship.
     */
    parentAssetModelCompositeModelId?: CustomID;
    /**
     * An external ID to assign to the composite model. If the composite model is a derived composite model, or one nested inside a component model, you can only set the external ID using UpdateAssetModelCompositeModel and specifying the derived ID of the model or property from the created model it's a part of.
     */
    assetModelCompositeModelExternalId?: ExternalId;
    /**
     * The ID of the composite model. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
     */
    assetModelCompositeModelId?: ID;
    /**
     * A description for the composite model.
     */
    assetModelCompositeModelDescription?: Description;
    /**
     * A unique, friendly name for the composite model.
     */
    assetModelCompositeModelName: Name;
    /**
     * The composite model type. Valid values are AWS/ALARM, CUSTOM, or  AWS/L4E_ANOMALY.
     */
    assetModelCompositeModelType: Name;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * The ID of a composite model on this asset.
     */
    composedAssetModelId?: CustomID;
    /**
     * The property definitions of the composite model. For more information, see &lt;LINK&gt;. You can specify up to 200 properties per composite model. For more information, see Quotas in the IoT SiteWise User Guide.
     */
    assetModelCompositeModelProperties?: AssetModelPropertyDefinitions;
  }
  export interface CreateAssetModelCompositeModelResponse {
    /**
     * The ID of the composed asset model. You can use this ID when you call other IoT SiteWise APIs.
     */
    assetModelCompositeModelId: ID;
    /**
     * The path to the composite model listing the parent composite models.
     */
    assetModelCompositeModelPath: AssetModelCompositeModelPath;
    assetModelStatus: AssetModelStatus;
  }
  export interface CreateAssetModelRequest {
    /**
     * A unique, friendly name for the asset model.
     */
    assetModelName: Name;
    /**
     * A description for the asset model.
     */
    assetModelDescription?: Description;
    /**
     * The property definitions of the asset model. For more information, see Asset properties in the IoT SiteWise User Guide. You can specify up to 200 properties per asset model. For more information, see Quotas in the IoT SiteWise User Guide.
     */
    assetModelProperties?: AssetModelPropertyDefinitions;
    /**
     * The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see Asset hierarchies in the IoT SiteWise User Guide. You can specify up to 10 hierarchies per asset model. For more information, see Quotas in the IoT SiteWise User Guide.
     */
    assetModelHierarchies?: AssetModelHierarchyDefinitions;
    /**
     * The composite models that are part of this asset model. It groups properties (such as attributes, measurements, transforms, and metrics) and child composite models that model parts of your industrial equipment. Each composite model has a type that defines the properties that the composite model supports. Use composite models to define alarms on this asset model.  When creating custom composite models, you need to use CreateAssetModelCompositeModel. For more information, see &lt;LINK&gt;. 
     */
    assetModelCompositeModels?: AssetModelCompositeModelDefinitions;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * A list of key-value pairs that contain metadata for the asset model. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide.
     */
    tags?: TagMap;
    /**
     * The ID to assign to the asset model, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
     */
    assetModelId?: ID;
    /**
     * An external ID to assign to the asset model. The external ID must be unique within your Amazon Web Services account. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    assetModelExternalId?: ExternalId;
    /**
     * The type of asset model.    ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.   
     */
    assetModelType?: AssetModelType;
  }
  export interface CreateAssetModelResponse {
    /**
     * The ID of the asset model, in UUID format. You can use this ID when you call other IoT SiteWise API operations.
     */
    assetModelId: ID;
    /**
     * The ARN of the asset model, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId} 
     */
    assetModelArn: ARN;
    /**
     * The status of the asset model, which contains a state (CREATING after successfully calling this operation) and any error message.
     */
    assetModelStatus: AssetModelStatus;
  }
  export interface CreateAssetRequest {
    /**
     * A friendly name for the asset.
     */
    assetName: Name;
    /**
     * The ID of the asset model from which to create the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetModelId: CustomID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * A list of key-value pairs that contain metadata for the asset. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide.
     */
    tags?: TagMap;
    /**
     * A description for the asset.
     */
    assetDescription?: Description;
    /**
     * The ID to assign to the asset, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
     */
    assetId?: ID;
    /**
     * An external ID to assign to the asset. The external ID must be unique within your Amazon Web Services account. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    assetExternalId?: ExternalId;
  }
  export interface CreateAssetResponse {
    /**
     * The ID of the asset, in UUID format. This ID uniquely identifies the asset within IoT SiteWise and can be used with other IoT SiteWise API operations.
     */
    assetId: ID;
    /**
     * The ARN of the asset, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId} 
     */
    assetArn: ARN;
    /**
     * The status of the asset, which contains a state (CREATING after successfully calling this operation) and any error message.
     */
    assetStatus: AssetStatus;
  }
  export interface CreateBulkImportJobRequest {
    /**
     * The unique name that helps identify the job request.
     */
    jobName: Name;
    /**
     * The ARN of the IAM role that allows IoT SiteWise to read Amazon S3 data.
     */
    jobRoleArn: ARN;
    /**
     * The files in the specified Amazon S3 bucket that contain your data.
     */
    files: Files;
    /**
     * The Amazon S3 destination where errors associated with the job creation request are saved.
     */
    errorReportLocation: ErrorReportLocation;
    /**
     * Contains the configuration information of a job, such as the file format used to save data in Amazon S3.
     */
    jobConfiguration: JobConfiguration;
    /**
     * If set to true, ingest new data into IoT SiteWise storage. Measurements with notifications, metrics and transforms are computed. If set to false, historical data is ingested into IoT SiteWise as is.
     */
    adaptiveIngestion?: AdaptiveIngestion;
    /**
     * If set to true, your data files is deleted from S3, after ingestion into IoT SiteWise storage.
     */
    deleteFilesAfterImport?: DeleteFilesAfterImport;
  }
  export interface CreateBulkImportJobResponse {
    /**
     * The ID of the job.
     */
    jobId: ID;
    /**
     * The unique name that helps identify the job request.
     */
    jobName: Name;
    /**
     * The status of the bulk import job can be one of following values:    PENDING – IoT SiteWise is waiting for the current bulk import job to finish.    CANCELLED – The bulk import job has been canceled.    RUNNING – IoT SiteWise is processing your request to import your data from Amazon S3.    COMPLETED – IoT SiteWise successfully completed your request to import data from Amazon S3.    FAILED – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.    COMPLETED_WITH_FAILURES – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.  
     */
    jobStatus: JobStatus;
  }
  export interface CreateDashboardRequest {
    /**
     * The ID of the project in which to create the dashboard.
     */
    projectId: ID;
    /**
     * A friendly name for the dashboard.
     */
    dashboardName: Name;
    /**
     * A description for the dashboard.
     */
    dashboardDescription?: Description;
    /**
     * The dashboard definition specified in a JSON literal. For detailed information, see Creating dashboards (CLI) in the IoT SiteWise User Guide.
     */
    dashboardDefinition: DashboardDefinition;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * A list of key-value pairs that contain metadata for the dashboard. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide.
     */
    tags?: TagMap;
  }
  export interface CreateDashboardResponse {
    /**
     * The ID of the dashboard.
     */
    dashboardId: ID;
    /**
     * The ARN of the dashboard, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId} 
     */
    dashboardArn: ARN;
  }
  export interface CreateGatewayRequest {
    /**
     * A unique, friendly name for the gateway.
     */
    gatewayName: Name;
    /**
     * The gateway's platform. You can only specify one platform in a gateway.
     */
    gatewayPlatform: GatewayPlatform;
    /**
     * A list of key-value pairs that contain metadata for the gateway. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide.
     */
    tags?: TagMap;
  }
  export interface CreateGatewayResponse {
    /**
     * The ID of the gateway device. You can use this ID when you call other IoT SiteWise API operations.
     */
    gatewayId: ID;
    /**
     * The ARN of the gateway, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId} 
     */
    gatewayArn: ARN;
  }
  export interface CreatePortalRequest {
    /**
     * A friendly name for the portal.
     */
    portalName: Name;
    /**
     * A description for the portal.
     */
    portalDescription?: Description;
    /**
     * The Amazon Web Services administrator's contact email address.
     */
    portalContactEmail: Email;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * A logo image to display in the portal. Upload a square, high-resolution image. The image is displayed on a dark background.
     */
    portalLogoImageFile?: ImageFile;
    /**
     * The ARN of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see Using service roles for IoT SiteWise Monitor in the IoT SiteWise User Guide.
     */
    roleArn: ARN;
    /**
     * A list of key-value pairs that contain metadata for the portal. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide.
     */
    tags?: TagMap;
    /**
     * The service to use to authenticate users to the portal. Choose from the following options:    SSO – The portal uses IAM Identity Center to authenticate users and manage user permissions. Before you can create a portal that uses IAM Identity Center, you must enable IAM Identity Center. For more information, see Enabling IAM Identity Center in the IoT SiteWise User Guide. This option is only available in Amazon Web Services Regions other than the China Regions.    IAM – The portal uses Identity and Access Management to authenticate users and manage user permissions.   You can't change this value after you create a portal. Default: SSO 
     */
    portalAuthMode?: AuthMode;
    /**
     * The email address that sends alarm notifications.  If you use the IoT Events managed Lambda function to manage your emails, you must verify the sender email address in Amazon SES. 
     */
    notificationSenderEmail?: Email;
    /**
     * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see Monitoring with alarms in the IoT SiteWise Application Guide.
     */
    alarms?: Alarms;
  }
  export interface CreatePortalResponse {
    /**
     * The ID of the created portal.
     */
    portalId: ID;
    /**
     * The ARN of the portal, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId} 
     */
    portalArn: ARN;
    /**
     * The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal.
     */
    portalStartUrl: Url;
    /**
     * The status of the portal, which contains a state (CREATING after successfully calling this operation) and any error message.
     */
    portalStatus: PortalStatus;
    /**
     * The associated IAM Identity Center application ID, if the portal uses IAM Identity Center.
     */
    ssoApplicationId: SSOApplicationId;
  }
  export interface CreateProjectRequest {
    /**
     * The ID of the portal in which to create the project.
     */
    portalId: ID;
    /**
     * A friendly name for the project.
     */
    projectName: Name;
    /**
     * A description for the project.
     */
    projectDescription?: Description;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * A list of key-value pairs that contain metadata for the project. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide.
     */
    tags?: TagMap;
  }
  export interface CreateProjectResponse {
    /**
     * The ID of the project.
     */
    projectId: ID;
    /**
     * The ARN of the project, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId} 
     */
    projectArn: ARN;
  }
  export interface Csv {
    /**
     * The column names specified in the .csv file.
     */
    columnNames: ColumnNames;
  }
  export type CustomID = string;
  export interface CustomerManagedS3Storage {
    /**
     * The ARN of the Amazon S3 object. For more information about how to find the ARN for an Amazon S3 object, see Amazon S3 resources in the Amazon Simple Storage Service User Guide.
     */
    s3ResourceArn: ARN;
    /**
     * The ARN of the Identity and Access Management role that allows IoT SiteWise to send data to Amazon S3.
     */
    roleArn: ARN;
  }
  export type DashboardDefinition = string;
  export type DashboardSummaries = DashboardSummary[];
  export interface DashboardSummary {
    /**
     * The ID of the dashboard.
     */
    id: ID;
    /**
     * The name of the dashboard
     */
    name: Name;
    /**
     * The dashboard's description.
     */
    description?: Description;
    /**
     * The date the dashboard was created, in Unix epoch time.
     */
    creationDate?: Timestamp;
    /**
     * The date the dashboard was last updated, in Unix epoch time.
     */
    lastUpdateDate?: Timestamp;
  }
  export interface Datum {
    /**
     * Indicates if the data point is a scalar value such as integer, string, double, or Boolean. 
     */
    scalarValue?: ScalarValue;
    /**
     * Indicates if the data point is an array. 
     */
    arrayValue?: DatumList;
    /**
     * Indicates if the data point is a row.
     */
    rowValue?: Row;
    /**
     * Indicates if the data point is null.
     */
    nullValue?: NullableBoolean;
  }
  export type DatumList = Datum[];
  export type DefaultValue = string;
  export interface DeleteAccessPolicyRequest {
    /**
     * The ID of the access policy to be deleted.
     */
    accessPolicyId: ID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface DeleteAccessPolicyResponse {
  }
  export interface DeleteAssetModelCompositeModelRequest {
    /**
     * The ID of the asset model, in UUID format.
     */
    assetModelId: CustomID;
    /**
     * The ID of a composite model on this asset model.
     */
    assetModelCompositeModelId: CustomID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface DeleteAssetModelCompositeModelResponse {
    assetModelStatus: AssetModelStatus;
  }
  export interface DeleteAssetModelRequest {
    /**
     * The ID of the asset model to delete. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetModelId: CustomID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface DeleteAssetModelResponse {
    /**
     * The status of the asset model, which contains a state (DELETING after successfully calling this operation) and any error message.
     */
    assetModelStatus: AssetModelStatus;
  }
  export interface DeleteAssetRequest {
    /**
     * The ID of the asset to delete. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface DeleteAssetResponse {
    /**
     * The status of the asset, which contains a state (DELETING after successfully calling this operation) and any error message.
     */
    assetStatus: AssetStatus;
  }
  export interface DeleteDashboardRequest {
    /**
     * The ID of the dashboard to delete.
     */
    dashboardId: ID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface DeleteDashboardResponse {
  }
  export type DeleteFilesAfterImport = boolean;
  export interface DeleteGatewayRequest {
    /**
     * The ID of the gateway to delete.
     */
    gatewayId: ID;
  }
  export interface DeletePortalRequest {
    /**
     * The ID of the portal to delete.
     */
    portalId: ID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface DeletePortalResponse {
    /**
     * The status of the portal, which contains a state (DELETING after successfully calling this operation) and any error message.
     */
    portalStatus: PortalStatus;
  }
  export interface DeleteProjectRequest {
    /**
     * The ID of the project.
     */
    projectId: ID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface DeleteProjectResponse {
  }
  export interface DeleteTimeSeriesRequest {
    /**
     * The alias that identifies the time series.
     */
    alias?: PropertyAlias;
    /**
     * The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId?: CustomID;
    /**
     * The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    propertyId?: CustomID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface DescribeAccessPolicyRequest {
    /**
     * The ID of the access policy.
     */
    accessPolicyId: ID;
  }
  export interface DescribeAccessPolicyResponse {
    /**
     * The ID of the access policy.
     */
    accessPolicyId: ID;
    /**
     * The ARN of the access policy, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId} 
     */
    accessPolicyArn: ARN;
    /**
     * The identity (IAM Identity Center user, IAM Identity Center group, or IAM user) to which this access policy applies.
     */
    accessPolicyIdentity: Identity;
    /**
     * The IoT SiteWise Monitor resource (portal or project) to which this access policy provides access.
     */
    accessPolicyResource: Resource;
    /**
     * The access policy permission. Note that a project ADMINISTRATOR is also known as a project owner.
     */
    accessPolicyPermission: Permission;
    /**
     * The date the access policy was created, in Unix epoch time.
     */
    accessPolicyCreationDate: Timestamp;
    /**
     * The date the access policy was last updated, in Unix epoch time.
     */
    accessPolicyLastUpdateDate: Timestamp;
  }
  export interface DescribeActionRequest {
    /**
     * The ID of the action.
     */
    actionId: ID;
  }
  export interface DescribeActionResponse {
    /**
     * The ID of the action.
     */
    actionId: ID;
    /**
     * The resource the action will be taken on.
     */
    targetResource: TargetResource;
    /**
     * The ID of the action definition.
     */
    actionDefinitionId: ID;
    /**
     * The JSON payload of the action.
     */
    actionPayload: ActionPayload;
    /**
     * The time the action was executed.
     */
    executionTime: Timestamp;
  }
  export interface DescribeAssetCompositeModelRequest {
    /**
     * The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * The ID of a composite model on this asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetCompositeModelId: CustomID;
  }
  export interface DescribeAssetCompositeModelResponse {
    /**
     * The ID of the asset, in UUID format. This ID uniquely identifies the asset within IoT SiteWise and can be used with other IoT SiteWise APIs.
     */
    assetId: ID;
    /**
     * The ID of a composite model on this asset.
     */
    assetCompositeModelId: ID;
    /**
     * An external ID to assign to the asset model. If the composite model is a component-based composite model, or one nested inside a component model, you can only set the external ID using UpdateAssetModelCompositeModel and specifying the derived ID of the model or property from the created model it's a part of.
     */
    assetCompositeModelExternalId?: ExternalId;
    /**
     * The path to the composite model listing the parent composite models.
     */
    assetCompositeModelPath: AssetCompositeModelPath;
    /**
     * The unique, friendly name for the composite model.
     */
    assetCompositeModelName: Name;
    /**
     * A description for the composite model.
     */
    assetCompositeModelDescription: Description;
    /**
     * The composite model type. Valid values are AWS/ALARM, CUSTOM, or  AWS/L4E_ANOMALY.
     */
    assetCompositeModelType: Name;
    /**
     * The property definitions of the composite model that was used to create the asset.
     */
    assetCompositeModelProperties: AssetProperties;
    /**
     * The list of composite model summaries.
     */
    assetCompositeModelSummaries: AssetCompositeModelSummaries;
    /**
     * The available actions for a composite model on this asset.
     */
    actionDefinitions?: ActionDefinitions;
  }
  export interface DescribeAssetModelCompositeModelRequest {
    /**
     * The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetModelId: CustomID;
    /**
     * The ID of a composite model on this asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetModelCompositeModelId: CustomID;
  }
  export interface DescribeAssetModelCompositeModelResponse {
    /**
     * The ID of the asset model, in UUID format.
     */
    assetModelId: ID;
    /**
     * The ID of a composite model on this asset model.
     */
    assetModelCompositeModelId: ID;
    /**
     * The external ID of a composite model on this asset model.
     */
    assetModelCompositeModelExternalId?: ExternalId;
    /**
     * The path to the composite model listing the parent composite models.
     */
    assetModelCompositeModelPath: AssetModelCompositeModelPath;
    /**
     * The unique, friendly name for the composite model.
     */
    assetModelCompositeModelName: Name;
    /**
     * The description for the composite model.
     */
    assetModelCompositeModelDescription: Description;
    /**
     * The composite model type. Valid values are AWS/ALARM, CUSTOM, or  AWS/L4E_ANOMALY.
     */
    assetModelCompositeModelType: Name;
    /**
     * The property definitions of the composite model.
     */
    assetModelCompositeModelProperties: AssetModelProperties;
    /**
     * Metadata for the composition relationship established by using composedAssetModelId in  CreateAssetModelCompositeModel . For instance, an array detailing the path of the composition relationship for this composite model.
     */
    compositionDetails?: CompositionDetails;
    /**
     * The list of composite model summaries for the composite model.
     */
    assetModelCompositeModelSummaries: AssetModelCompositeModelSummaries;
    /**
     * The available actions for a composite model on this asset model.
     */
    actionDefinitions?: ActionDefinitions;
  }
  export interface DescribeAssetModelRequest {
    /**
     * The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetModelId: CustomID;
    /**
     *  Whether or not to exclude asset model properties from the response. 
     */
    excludeProperties?: ExcludeProperties;
  }
  export interface DescribeAssetModelResponse {
    /**
     * The ID of the asset model, in UUID format.
     */
    assetModelId: ID;
    /**
     * The ARN of the asset model, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId} 
     */
    assetModelArn: ARN;
    /**
     * The name of the asset model.
     */
    assetModelName: Name;
    /**
     * The asset model's description.
     */
    assetModelDescription: Description;
    /**
     * The list of asset properties for the asset model. This object doesn't include properties that you define in composite models. You can find composite model properties in the assetModelCompositeModels object.
     */
    assetModelProperties: AssetModelProperties;
    /**
     * A list of asset model hierarchies that each contain a childAssetModelId and a hierarchyId (named id). A hierarchy specifies allowed parent/child asset relationships for an asset model.
     */
    assetModelHierarchies: AssetModelHierarchies;
    /**
     * The list of built-in composite models for the asset model, such as those with those of type AWS/ALARMS.
     */
    assetModelCompositeModels?: AssetModelCompositeModels;
    /**
     * The date the asset model was created, in Unix epoch time.
     */
    assetModelCreationDate: Timestamp;
    /**
     * The date the asset model was last updated, in Unix epoch time.
     */
    assetModelLastUpdateDate: Timestamp;
    /**
     * The current status of the asset model, which contains a state and any error message.
     */
    assetModelStatus: AssetModelStatus;
    /**
     * The type of asset model.    ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.   
     */
    assetModelType?: AssetModelType;
    /**
     * The list of the immediate child custom composite model summaries for the asset model.
     */
    assetModelCompositeModelSummaries?: AssetModelCompositeModelSummaries;
    /**
     * The external ID of the asset model, if any.
     */
    assetModelExternalId?: ExternalId;
  }
  export interface DescribeAssetPropertyRequest {
    /**
     * The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    propertyId: CustomID;
  }
  export interface DescribeAssetPropertyResponse {
    /**
     * The ID of the asset, in UUID format.
     */
    assetId: ID;
    /**
     * The name of the asset.
     */
    assetName: Name;
    /**
     * The ID of the asset model, in UUID format.
     */
    assetModelId: ID;
    /**
     * The asset property's definition, alias, and notification state. This response includes this object for normal asset properties. If you describe an asset property in a composite model, this response includes the asset property information in compositeModel.
     */
    assetProperty?: Property;
    /**
     * The composite model that declares this asset property, if this asset property exists in a composite model.
     */
    compositeModel?: CompositeModelProperty;
    /**
     * The external ID of the asset. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    assetExternalId?: ExternalId;
  }
  export interface DescribeAssetRequest {
    /**
     * The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     *  Whether or not to exclude asset properties from the response. 
     */
    excludeProperties?: ExcludeProperties;
  }
  export interface DescribeAssetResponse {
    /**
     * The ID of the asset, in UUID format.
     */
    assetId: ID;
    /**
     * The ARN of the asset, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId} 
     */
    assetArn: ARN;
    /**
     * The name of the asset.
     */
    assetName: Name;
    /**
     * The ID of the asset model that was used to create the asset.
     */
    assetModelId: ID;
    /**
     * The list of asset properties for the asset. This object doesn't include properties that you define in composite models. You can find composite model properties in the assetCompositeModels object.
     */
    assetProperties: AssetProperties;
    /**
     * A list of asset hierarchies that each contain a hierarchyId. A hierarchy specifies allowed parent/child asset relationships.
     */
    assetHierarchies: AssetHierarchies;
    /**
     * The composite models for the asset.
     */
    assetCompositeModels?: AssetCompositeModels;
    /**
     * The date the asset was created, in Unix epoch time.
     */
    assetCreationDate: Timestamp;
    /**
     * The date the asset was last updated, in Unix epoch time.
     */
    assetLastUpdateDate: Timestamp;
    /**
     * The current status of the asset, which contains a state and any error message.
     */
    assetStatus: AssetStatus;
    /**
     * A description for the asset.
     */
    assetDescription?: Description;
    /**
     * The list of the immediate child custom composite model summaries for the asset.
     */
    assetCompositeModelSummaries?: AssetCompositeModelSummaries;
    /**
     * The external ID of the asset, if any.
     */
    assetExternalId?: ExternalId;
  }
  export interface DescribeBulkImportJobRequest {
    /**
     * The ID of the job.
     */
    jobId: ID;
  }
  export interface DescribeBulkImportJobResponse {
    /**
     * The ID of the job.
     */
    jobId: ID;
    /**
     * The unique name that helps identify the job request.
     */
    jobName: Name;
    /**
     * The status of the bulk import job can be one of following values:    PENDING – IoT SiteWise is waiting for the current bulk import job to finish.    CANCELLED – The bulk import job has been canceled.    RUNNING – IoT SiteWise is processing your request to import your data from Amazon S3.    COMPLETED – IoT SiteWise successfully completed your request to import data from Amazon S3.    FAILED – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.    COMPLETED_WITH_FAILURES – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.  
     */
    jobStatus: JobStatus;
    /**
     * The ARN of the IAM role that allows IoT SiteWise to read Amazon S3 data.
     */
    jobRoleArn: ARN;
    /**
     * The files in the specified Amazon S3 bucket that contain your data.
     */
    files: Files;
    /**
     * The Amazon S3 destination where errors associated with the job creation request are saved.
     */
    errorReportLocation: ErrorReportLocation;
    /**
     * Contains the configuration information of a job, such as the file format used to save data in Amazon S3.
     */
    jobConfiguration: JobConfiguration;
    /**
     * The date the job was created, in Unix epoch TIME.
     */
    jobCreationDate: Timestamp;
    /**
     * The date the job was last updated, in Unix epoch time.
     */
    jobLastUpdateDate: Timestamp;
    /**
     * If set to true, ingest new data into IoT SiteWise storage. Measurements with notifications, metrics and transforms are computed. If set to false, historical data is ingested into IoT SiteWise as is.
     */
    adaptiveIngestion?: AdaptiveIngestion;
    /**
     * If set to true, your data files is deleted from S3, after ingestion into IoT SiteWise storage.
     */
    deleteFilesAfterImport?: DeleteFilesAfterImport;
  }
  export interface DescribeDashboardRequest {
    /**
     * The ID of the dashboard.
     */
    dashboardId: ID;
  }
  export interface DescribeDashboardResponse {
    /**
     * The ID of the dashboard.
     */
    dashboardId: ID;
    /**
     * The ARN of the dashboard, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId} 
     */
    dashboardArn: ARN;
    /**
     * The name of the dashboard.
     */
    dashboardName: Name;
    /**
     * The ID of the project that the dashboard is in.
     */
    projectId: ID;
    /**
     * The dashboard's description.
     */
    dashboardDescription?: Description;
    /**
     * The dashboard's definition JSON literal. For detailed information, see Creating dashboards (CLI) in the IoT SiteWise User Guide.
     */
    dashboardDefinition: DashboardDefinition;
    /**
     * The date the dashboard was created, in Unix epoch time.
     */
    dashboardCreationDate: Timestamp;
    /**
     * The date the dashboard was last updated, in Unix epoch time.
     */
    dashboardLastUpdateDate: Timestamp;
  }
  export interface DescribeDefaultEncryptionConfigurationRequest {
  }
  export interface DescribeDefaultEncryptionConfigurationResponse {
    /**
     * The type of encryption used for the encryption configuration.
     */
    encryptionType: EncryptionType;
    /**
     * The key ARN of the customer managed key used for KMS encryption if you use KMS_BASED_ENCRYPTION.
     */
    kmsKeyArn?: ARN;
    /**
     * The status of the account configuration. This contains the ConfigurationState. If there's an error, it also contains the ErrorDetails.
     */
    configurationStatus: ConfigurationStatus;
  }
  export interface DescribeGatewayCapabilityConfigurationRequest {
    /**
     * The ID of the gateway that defines the capability configuration.
     */
    gatewayId: ID;
    /**
     * The namespace of the capability configuration. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:version, where version is a number such as 1.
     */
    capabilityNamespace: CapabilityNamespace;
  }
  export interface DescribeGatewayCapabilityConfigurationResponse {
    /**
     * The ID of the gateway that defines the capability configuration.
     */
    gatewayId: ID;
    /**
     * The namespace of the gateway capability.
     */
    capabilityNamespace: CapabilityNamespace;
    /**
     * The JSON document that defines the gateway capability's configuration. For more information, see Configuring data sources (CLI) in the IoT SiteWise User Guide.
     */
    capabilityConfiguration: CapabilityConfiguration;
    /**
     * The synchronization status of the capability configuration. The sync status can be one of the following:    IN_SYNC – The gateway is running the capability configuration.    OUT_OF_SYNC – The gateway hasn't received the capability configuration.    SYNC_FAILED – The gateway rejected the capability configuration.  
     */
    capabilitySyncStatus: CapabilitySyncStatus;
  }
  export interface DescribeGatewayRequest {
    /**
     * The ID of the gateway device.
     */
    gatewayId: ID;
  }
  export interface DescribeGatewayResponse {
    /**
     * The ID of the gateway device.
     */
    gatewayId: ID;
    /**
     * The name of the gateway.
     */
    gatewayName: Name;
    /**
     * The ARN of the gateway, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId} 
     */
    gatewayArn: ARN;
    /**
     * The gateway's platform.
     */
    gatewayPlatform?: GatewayPlatform;
    /**
     * A list of gateway capability summaries that each contain a namespace and status. Each gateway capability defines data sources for the gateway. To retrieve a capability configuration's definition, use DescribeGatewayCapabilityConfiguration.
     */
    gatewayCapabilitySummaries: GatewayCapabilitySummaries;
    /**
     * The date the gateway was created, in Unix epoch time.
     */
    creationDate: Timestamp;
    /**
     * The date the gateway was last updated, in Unix epoch time.
     */
    lastUpdateDate: Timestamp;
  }
  export interface DescribeLoggingOptionsRequest {
  }
  export interface DescribeLoggingOptionsResponse {
    /**
     * The current logging options.
     */
    loggingOptions: LoggingOptions;
  }
  export interface DescribePortalRequest {
    /**
     * The ID of the portal.
     */
    portalId: ID;
  }
  export interface DescribePortalResponse {
    /**
     * The ID of the portal.
     */
    portalId: ID;
    /**
     * The ARN of the portal, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId} 
     */
    portalArn: ARN;
    /**
     * The name of the portal.
     */
    portalName: Name;
    /**
     * The portal's description.
     */
    portalDescription?: Description;
    /**
     * The IAM Identity Center application generated client ID (used with IAM Identity Center API operations). IoT SiteWise includes portalClientId for only portals that use IAM Identity Center to authenticate users.
     */
    portalClientId: PortalClientId;
    /**
     * The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal.
     */
    portalStartUrl: Url;
    /**
     * The Amazon Web Services administrator's contact email address.
     */
    portalContactEmail: Email;
    /**
     * The current status of the portal, which contains a state and any error message.
     */
    portalStatus: PortalStatus;
    /**
     * The date the portal was created, in Unix epoch time.
     */
    portalCreationDate: Timestamp;
    /**
     * The date the portal was last updated, in Unix epoch time.
     */
    portalLastUpdateDate: Timestamp;
    /**
     * The portal's logo image, which is available at a URL.
     */
    portalLogoImageLocation?: ImageLocation;
    /**
     * The ARN of the service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see Using service roles for IoT SiteWise Monitor in the IoT SiteWise User Guide.
     */
    roleArn?: ARN;
    /**
     * The service to use to authenticate users to the portal.
     */
    portalAuthMode?: AuthMode;
    /**
     * The email address that sends alarm notifications.
     */
    notificationSenderEmail?: Email;
    /**
     * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
     */
    alarms?: Alarms;
  }
  export interface DescribeProjectRequest {
    /**
     * The ID of the project.
     */
    projectId: ID;
  }
  export interface DescribeProjectResponse {
    /**
     * The ID of the project.
     */
    projectId: ID;
    /**
     * The ARN of the project, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId} 
     */
    projectArn: ARN;
    /**
     * The name of the project.
     */
    projectName: Name;
    /**
     * The ID of the portal that the project is in.
     */
    portalId: ID;
    /**
     * The project's description.
     */
    projectDescription?: Description;
    /**
     * The date the project was created, in Unix epoch time.
     */
    projectCreationDate: Timestamp;
    /**
     * The date the project was last updated, in Unix epoch time.
     */
    projectLastUpdateDate: Timestamp;
  }
  export interface DescribeStorageConfigurationRequest {
  }
  export interface DescribeStorageConfigurationResponse {
    /**
     * The storage tier that you specified for your data. The storageType parameter can be one of the following values:    SITEWISE_DEFAULT_STORAGE – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.    MULTI_LAYER_STORAGE – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.  
     */
    storageType: StorageType;
    /**
     * Contains information about the storage destination.
     */
    multiLayerStorage?: MultiLayerStorage;
    /**
     * Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The disassociatedDataStorage can be one of the following values:    ENABLED – IoT SiteWise accepts time series that aren't associated with asset properties.  After the disassociatedDataStorage is enabled, you can't disable it.     DISABLED – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.   For more information, see Data streams in the IoT SiteWise User Guide.
     */
    disassociatedDataStorage?: DisassociatedDataStorageState;
    /**
     * The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.
     */
    retentionPeriod?: RetentionPeriod;
    configurationStatus: ConfigurationStatus;
    /**
     * The date the storage configuration was last updated, in Unix epoch time.
     */
    lastUpdateDate?: Timestamp;
    /**
     * A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.
     */
    warmTier?: WarmTierState;
    /**
     * Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.
     */
    warmTierRetentionPeriod?: WarmTierRetentionPeriod;
  }
  export interface DescribeTimeSeriesRequest {
    /**
     * The alias that identifies the time series.
     */
    alias?: PropertyAlias;
    /**
     * The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId?: CustomID;
    /**
     * The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    propertyId?: CustomID;
  }
  export interface DescribeTimeSeriesResponse {
    /**
     * The ID of the asset in which the asset property was created.
     */
    assetId?: ID;
    /**
     * The ID of the asset property, in UUID format.
     */
    propertyId?: ID;
    /**
     * The alias that identifies the time series.
     */
    alias?: PropertyAlias;
    /**
     * The ID of the time series.
     */
    timeSeriesId: TimeSeriesId;
    /**
     * The data type of the time series. If you specify STRUCT, you must also specify dataTypeSpec to identify the type of the structure for this time series.
     */
    dataType: PropertyDataType;
    /**
     * The data type of the structure for this time series. This parameter is required for time series that have the STRUCT data type. The options for this parameter depend on the type of the composite model in which you created the asset property that is associated with your time series. Use AWS/ALARM_STATE for alarm state in alarm composite models.
     */
    dataTypeSpec?: Name;
    /**
     * The date that the time series was created, in Unix epoch time.
     */
    timeSeriesCreationDate: Timestamp;
    /**
     * The date that the time series was last updated, in Unix epoch time.
     */
    timeSeriesLastUpdateDate: Timestamp;
    /**
     * The ARN of the time series, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:time-series/${TimeSeriesId} 
     */
    timeSeriesArn: ARN;
  }
  export type Description = string;
  export interface DetailedError {
    /**
     * The error code. 
     */
    code: DetailedErrorCode;
    /**
     * The error message. 
     */
    message: DetailedErrorMessage;
  }
  export type DetailedErrorCode = "INCOMPATIBLE_COMPUTE_LOCATION"|"INCOMPATIBLE_FORWARDING_CONFIGURATION"|string;
  export type DetailedErrorMessage = string;
  export type DetailedErrors = DetailedError[];
  export interface DisassociateAssetsRequest {
    /**
     * The ID of the parent asset from which to disassociate the child asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * The ID of a hierarchy in the parent asset's model. (This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.) Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see Asset hierarchies in the IoT SiteWise User Guide.
     */
    hierarchyId: CustomID;
    /**
     * The ID of the child asset to disassociate. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    childAssetId: CustomID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface DisassociateTimeSeriesFromAssetPropertyRequest {
    /**
     * The alias that identifies the time series.
     */
    alias: PropertyAlias;
    /**
     * The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * The ID of the asset property. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    propertyId: CustomID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export type DisassociatedDataStorageState = "ENABLED"|"DISABLED"|string;
  export type Email = string;
  export type EncryptionType = "SITEWISE_DEFAULT_ENCRYPTION"|"KMS_BASED_ENCRYPTION"|string;
  export type EntryId = string;
  export type ErrorCode = "VALIDATION_ERROR"|"INTERNAL_FAILURE"|string;
  export interface ErrorDetails {
    /**
     * The error code.
     */
    code: ErrorCode;
    /**
     * The error message.
     */
    message: ErrorMessage;
    /**
     *  A list of detailed errors. 
     */
    details?: DetailedErrors;
  }
  export type ErrorMessage = string;
  export interface ErrorReportLocation {
    /**
     * The name of the Amazon S3 bucket to which errors associated with the bulk import job are sent.
     */
    bucket: Bucket;
    /**
     * Amazon S3 uses the prefix as a folder name to organize data in the bucket. Each Amazon S3 object has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/). For more information, see Organizing objects using prefixes in the Amazon Simple Storage Service User Guide.
     */
    prefix: String;
  }
  export type ExcludeProperties = boolean;
  export interface ExecuteActionRequest {
    /**
     * The resource the action will be taken on.
     */
    targetResource: TargetResource;
    /**
     * The ID of the action definition.
     */
    actionDefinitionId: ID;
    /**
     * The JSON payload of the action.
     */
    actionPayload: ActionPayload;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface ExecuteActionResponse {
    /**
     * The ID of the action.
     */
    actionId: ID;
  }
  export type ExecuteQueryMaxResults = number;
  export type ExecuteQueryNextToken = string;
  export interface ExecuteQueryRequest {
    /**
     * The IoT SiteWise query statement.
     */
    queryStatement: QueryStatement;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: ExecuteQueryNextToken;
    /**
     * The maximum number of results to return at one time. The default is 25.
     */
    maxResults?: ExecuteQueryMaxResults;
  }
  export interface ExecuteQueryResponse {
    /**
     * Represents a single column in the query results.
     */
    columns?: ColumnsList;
    /**
     * Represents a single row in the query results.
     */
    rows?: Rows;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: ExecuteQueryNextToken;
  }
  export type Expression = string;
  export interface ExpressionVariable {
    /**
     * The friendly name of the variable to be used in the expression.
     */
    name: VariableName;
    /**
     * The variable that identifies an asset property from which to use values.
     */
    value: VariableValue;
  }
  export type ExpressionVariables = ExpressionVariable[];
  export type ExternalId = string;
  export interface File {
    /**
     * The name of the Amazon S3 bucket from which data is imported.
     */
    bucket: Bucket;
    /**
     * The key of the Amazon S3 object that contains your data. Each object has a key that is a unique identifier. Each object has exactly one key.
     */
    key: String;
    /**
     * The version ID to identify a specific version of the Amazon S3 object that contains your data.
     */
    versionId?: String;
  }
  export interface FileFormat {
    /**
     * The file is in .CSV format.
     */
    csv?: Csv;
    /**
     * The file is in parquet format.
     */
    parquet?: Parquet;
  }
  export type Files = File[];
  export interface ForwardingConfig {
    /**
     * The forwarding state for the given property. 
     */
    state: ForwardingConfigState;
  }
  export type ForwardingConfigState = "DISABLED"|"ENABLED"|string;
  export type GatewayCapabilitySummaries = GatewayCapabilitySummary[];
  export interface GatewayCapabilitySummary {
    /**
     * The namespace of the capability configuration. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:version, where version is a number such as 1.
     */
    capabilityNamespace: CapabilityNamespace;
    /**
     * The synchronization status of the capability configuration. The sync status can be one of the following:    IN_SYNC – The gateway is running the capability configuration.    OUT_OF_SYNC – The gateway hasn't received the capability configuration.    SYNC_FAILED – The gateway rejected the capability configuration.  
     */
    capabilitySyncStatus: CapabilitySyncStatus;
  }
  export interface GatewayPlatform {
    /**
     * A gateway that runs on IoT Greengrass.
     */
    greengrass?: Greengrass;
    /**
     * A gateway that runs on IoT Greengrass V2.
     */
    greengrassV2?: GreengrassV2;
  }
  export type GatewaySummaries = GatewaySummary[];
  export interface GatewaySummary {
    /**
     * The ID of the gateway device.
     */
    gatewayId: ID;
    /**
     * The name of the asset.
     */
    gatewayName: Name;
    gatewayPlatform?: GatewayPlatform;
    /**
     * A list of gateway capability summaries that each contain a namespace and status. Each gateway capability defines data sources for the gateway. To retrieve a capability configuration's definition, use DescribeGatewayCapabilityConfiguration.
     */
    gatewayCapabilitySummaries?: GatewayCapabilitySummaries;
    /**
     * The date the gateway was created, in Unix epoch time.
     */
    creationDate: Timestamp;
    /**
     * The date the gateway was last updated, in Unix epoch time.
     */
    lastUpdateDate: Timestamp;
  }
  export interface GetAssetPropertyAggregatesRequest {
    /**
     * The ID of the asset, in UUID format.
     */
    assetId?: ID;
    /**
     * The ID of the asset property, in UUID format.
     */
    propertyId?: ID;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
    /**
     * The data aggregating function.
     */
    aggregateTypes: AggregateTypes;
    /**
     * The time interval over which to aggregate data.
     */
    resolution: Resolution;
    /**
     * The quality by which to filter asset data.
     */
    qualities?: Qualities;
    /**
     * The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
     */
    startDate: Timestamp;
    /**
     * The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
     */
    endDate: Timestamp;
    /**
     * The chronological sorting order of the requested information. Default: ASCENDING 
     */
    timeOrdering?: TimeOrdering;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.   The size of the result set is equal to 1 MB.   The number of data points in the result set is equal to the value of maxResults. The maximum value of maxResults is 2500.  
     */
    maxResults?: GetAssetPropertyValueAggregatesMaxResults;
  }
  export interface GetAssetPropertyAggregatesResponse {
    /**
     * The requested aggregated values.
     */
    aggregatedValues: AggregatedValues;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type GetAssetPropertyValueAggregatesMaxResults = number;
  export type GetAssetPropertyValueHistoryMaxResults = number;
  export interface GetAssetPropertyValueHistoryRequest {
    /**
     * The ID of the asset, in UUID format.
     */
    assetId?: ID;
    /**
     * The ID of the asset property, in UUID format.
     */
    propertyId?: ID;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
    /**
     * The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
     */
    startDate?: Timestamp;
    /**
     * The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
     */
    endDate?: Timestamp;
    /**
     * The quality by which to filter asset data.
     */
    qualities?: Qualities;
    /**
     * The chronological sorting order of the requested information. Default: ASCENDING 
     */
    timeOrdering?: TimeOrdering;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.   The size of the result set is equal to 4 MB.   The number of data points in the result set is equal to the value of maxResults. The maximum value of maxResults is 20000.  
     */
    maxResults?: GetAssetPropertyValueHistoryMaxResults;
  }
  export interface GetAssetPropertyValueHistoryResponse {
    /**
     * The asset property's value history.
     */
    assetPropertyValueHistory: AssetPropertyValueHistory;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface GetAssetPropertyValueRequest {
    /**
     * The ID of the asset, in UUID format.
     */
    assetId?: ID;
    /**
     * The ID of the asset property, in UUID format.
     */
    propertyId?: ID;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
  }
  export interface GetAssetPropertyValueResponse {
    /**
     * The current asset property value.
     */
    propertyValue?: AssetPropertyValue;
  }
  export interface GetInterpolatedAssetPropertyValuesRequest {
    /**
     * The ID of the asset, in UUID format.
     */
    assetId?: ID;
    /**
     * The ID of the asset property, in UUID format.
     */
    propertyId?: ID;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
    /**
     * The exclusive start of the range from which to interpolate data, expressed in seconds in Unix epoch time.
     */
    startTimeInSeconds: TimeInSeconds;
    /**
     * The nanosecond offset converted from startTimeInSeconds.
     */
    startTimeOffsetInNanos?: OffsetInNanos;
    /**
     * The inclusive end of the range from which to interpolate data, expressed in seconds in Unix epoch time.
     */
    endTimeInSeconds: TimeInSeconds;
    /**
     * The nanosecond offset converted from endTimeInSeconds.
     */
    endTimeOffsetInNanos?: OffsetInNanos;
    /**
     * The quality of the asset property value. You can use this parameter as a filter to choose only the asset property values that have a specific quality.
     */
    quality: Quality;
    /**
     * The time interval in seconds over which to interpolate data. Each interval starts when the previous one ends.
     */
    intervalInSeconds: IntervalInSeconds;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. If not specified, the default value is 10.
     */
    maxResults?: MaxInterpolatedResults;
    /**
     * The interpolation type. Valid values: LINEAR_INTERPOLATION | LOCF_INTERPOLATION     LINEAR_INTERPOLATION – Estimates missing data using linear interpolation. For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the first interpolated value on July 2, 2021, at 9 AM, the second interpolated value on July 3, 2021, at 9 AM, and so on.    LOCF_INTERPOLATION – Estimates missing data using last observation carried forward interpolation If no data point is found for an interval, IoT SiteWise returns the last observed data point for the previous interval and carries forward this interpolated value until a new data point is found. For example, you can get the state of an on-off valve every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the last observed data point between July 1, 2021, at 9 AM and July 2, 2021, at 9 AM as the first interpolated value. If a data point isn't found after 9 AM on July 2, 2021, IoT SiteWise uses the same interpolated value for the rest of the days.  
     */
    type: InterpolationType;
    /**
     * The query interval for the window, in seconds. IoT SiteWise computes each interpolated value by using data points from the timestamp of each interval, minus the window to the timestamp of each interval plus the window. If not specified, the window ranges between the start time minus the interval and the end time plus the interval.    If you specify a value for the intervalWindowInSeconds parameter, the value for the type parameter must be LINEAR_INTERPOLATION.   If a data point isn't found during the specified query window, IoT SiteWise won't return an interpolated value for the interval. This indicates that there's a gap in the ingested data points.    For example, you can get the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts on July 1, 2021, at 9 AM with a window of 2 hours, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 2, 2021 to compute the first interpolated value. Next, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 3, 2021 to compute the second interpolated value, and so on. 
     */
    intervalWindowInSeconds?: IntervalWindowInSeconds;
  }
  export interface GetInterpolatedAssetPropertyValuesResponse {
    /**
     * The requested interpolated values.
     */
    interpolatedAssetPropertyValues: InterpolatedAssetPropertyValues;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface Greengrass {
    /**
     * The ARN of the Greengrass group. For more information about how to find a group's ARN, see ListGroups and GetGroup in the IoT Greengrass API Reference.
     */
    groupArn: ARN;
  }
  export interface GreengrassV2 {
    /**
     * The name of the IoT thing for your IoT Greengrass V2 core device.
     */
    coreDeviceThingName: CoreDeviceThingName;
  }
  export interface GroupIdentity {
    /**
     * The IAM Identity Center ID of the group.
     */
    id: IdentityId;
  }
  export interface IAMRoleIdentity {
    /**
     * The ARN of the IAM role. For more information, see IAM ARNs in the IAM User Guide.
     */
    arn: ARN;
  }
  export interface IAMUserIdentity {
    /**
     * The ARN of the IAM user. For more information, see IAM ARNs in the IAM User Guide.  If you delete the IAM user, access policies that contain this identity include an empty arn. You can delete the access policy for the IAM user that no longer exists. 
     */
    arn: ARN;
  }
  export type ID = string;
  export type IDs = ID[];
  export interface Identity {
    /**
     * An IAM Identity Center user identity.
     */
    user?: UserIdentity;
    /**
     * An IAM Identity Center group identity.
     */
    group?: GroupIdentity;
    /**
     * An IAM user identity.
     */
    iamUser?: IAMUserIdentity;
    /**
     * An IAM role identity.
     */
    iamRole?: IAMRoleIdentity;
  }
  export type IdentityId = string;
  export type IdentityType = "USER"|"GROUP"|"IAM"|string;
  export interface Image {
    /**
     * The ID of an existing image. Specify this parameter to keep an existing image.
     */
    id?: ID;
    file?: ImageFile;
  }
  export interface ImageFile {
    /**
     * The image file contents, represented as a base64-encoded string. The file size must be less than 1 MB.
     */
    data: ImageFileData;
    /**
     * The file type of the image.
     */
    type: ImageFileType;
  }
  export type ImageFileData = Buffer|Uint8Array|Blob|string;
  export type ImageFileType = "PNG"|string;
  export interface ImageLocation {
    /**
     * The ID of the image.
     */
    id: ID;
    /**
     * The URL where the image is available. The URL is valid for 15 minutes so that you can view and download the image
     */
    url: Url;
  }
  export interface InterpolatedAssetPropertyValue {
    timestamp: TimeInNanos;
    value: Variant;
  }
  export type InterpolatedAssetPropertyValues = InterpolatedAssetPropertyValue[];
  export type InterpolationType = string;
  export type Interval = string;
  export type IntervalInSeconds = number;
  export type IntervalWindowInSeconds = number;
  export interface JobConfiguration {
    /**
     * The file format of the data in S3.
     */
    fileFormat: FileFormat;
  }
  export type JobStatus = "PENDING"|"CANCELLED"|"RUNNING"|"COMPLETED"|"FAILED"|"COMPLETED_WITH_FAILURES"|string;
  export type JobSummaries = JobSummary[];
  export interface JobSummary {
    /**
     * The ID of the job.
     */
    id: ID;
    /**
     * The unique name that helps identify the job request.
     */
    name: Name;
    /**
     * The status of the bulk import job can be one of following values:    PENDING – IoT SiteWise is waiting for the current bulk import job to finish.    CANCELLED – The bulk import job has been canceled.    RUNNING – IoT SiteWise is processing your request to import your data from Amazon S3.    COMPLETED – IoT SiteWise successfully completed your request to import data from Amazon S3.    FAILED – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.    COMPLETED_WITH_FAILURES – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.  
     */
    status: JobStatus;
  }
  export type KmsKeyId = string;
  export interface ListAccessPoliciesRequest {
    /**
     * The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required if you specify identityId.
     */
    identityType?: IdentityType;
    /**
     * The ID of the identity. This parameter is required if you specify USER or GROUP for identityType.
     */
    identityId?: IdentityId;
    /**
     * The type of resource (portal or project). This parameter is required if you specify resourceId.
     */
    resourceType?: ResourceType;
    /**
     * The ID of the resource. This parameter is required if you specify resourceType.
     */
    resourceId?: ID;
    /**
     * The ARN of the IAM user. For more information, see IAM ARNs in the IAM User Guide. This parameter is required if you specify IAM for identityType.
     */
    iamArn?: ARN;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
  }
  export interface ListAccessPoliciesResponse {
    /**
     * A list that summarizes each access policy.
     */
    accessPolicySummaries: AccessPolicySummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListActionsRequest {
    /**
     * The type of resource.
     */
    targetResourceType: TargetResourceType;
    /**
     * The ID of the target resource.
     */
    targetResourceId: CustomID;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request.
     */
    maxResults?: MaxResults;
  }
  export interface ListActionsResponse {
    /**
     * A list that summarizes the actions associated with the specified asset.
     */
    actionSummaries: ActionSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken: NextToken;
  }
  export interface ListAssetModelCompositeModelsRequest {
    /**
     * The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetModelId: CustomID;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
  }
  export interface ListAssetModelCompositeModelsResponse {
    /**
     * A list that summarizes each composite model.
     */
    assetModelCompositeModelSummaries: AssetModelCompositeModelSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type ListAssetModelPropertiesFilter = "ALL"|"BASE"|string;
  export interface ListAssetModelPropertiesRequest {
    /**
     * The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetModelId: CustomID;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. If not specified, the default value is 50.
     */
    maxResults?: MaxResults;
    /**
     *  Filters the requested list of asset model properties. You can choose one of the following options:    ALL – The list includes all asset model properties for a given asset model ID.     BASE – The list includes only base asset model properties for a given asset model ID.    Default: BASE 
     */
    filter?: ListAssetModelPropertiesFilter;
  }
  export interface ListAssetModelPropertiesResponse {
    /**
     * A list that summarizes the properties associated with the specified asset model.
     */
    assetModelPropertySummaries: AssetModelPropertySummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListAssetModelsRequest {
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
    /**
     * The type of asset model.    ASSET_MODEL – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.    COMPONENT_MODEL – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.   
     */
    assetModelTypes?: ListAssetModelsTypeFilter;
  }
  export interface ListAssetModelsResponse {
    /**
     * A list that summarizes each asset model.
     */
    assetModelSummaries: AssetModelSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type ListAssetModelsTypeFilter = AssetModelType[];
  export type ListAssetPropertiesFilter = "ALL"|"BASE"|string;
  export interface ListAssetPropertiesRequest {
    /**
     * The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. If not specified, the default value is 50.
     */
    maxResults?: MaxResults;
    /**
     *  Filters the requested list of asset properties. You can choose one of the following options:    ALL – The list includes all asset properties for a given asset model ID.     BASE – The list includes only base asset properties for a given asset model ID.    Default: BASE 
     */
    filter?: ListAssetPropertiesFilter;
  }
  export interface ListAssetPropertiesResponse {
    /**
     * A list that summarizes the properties associated with the specified asset.
     */
    assetPropertySummaries: AssetPropertySummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListAssetRelationshipsRequest {
    /**
     * The ID of the asset. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * The type of traversal to use to identify asset relationships. Choose the following option:    PATH_TO_ROOT – Identify the asset's parent assets up to the root asset. The asset that you specify in assetId is the first result in the list of assetRelationshipSummaries, and the root asset is the last result.  
     */
    traversalType: TraversalType;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request.
     */
    maxResults?: MaxResults;
  }
  export interface ListAssetRelationshipsResponse {
    /**
     * A list that summarizes each asset relationship.
     */
    assetRelationshipSummaries: AssetRelationshipSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type ListAssetsFilter = "ALL"|"TOP_LEVEL"|string;
  export interface ListAssetsRequest {
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
    /**
     * The ID of the asset model by which to filter the list of assets. This parameter is required if you choose ALL for filter. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetModelId?: CustomID;
    /**
     * The filter for the requested list of assets. Choose one of the following options:    ALL – The list includes all assets for a given asset model ID. The assetModelId parameter is required if you filter by ALL.    TOP_LEVEL – The list includes only top-level assets in the asset hierarchy tree.   Default: ALL 
     */
    filter?: ListAssetsFilter;
  }
  export interface ListAssetsResponse {
    /**
     * A list that summarizes each asset.
     */
    assetSummaries: AssetSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListAssociatedAssetsRequest {
    /**
     * The ID of the asset to query. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * The ID of the hierarchy by which child assets are associated to the asset. (This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.) To find a hierarchy ID, use the DescribeAsset or DescribeAssetModel operations. This parameter is required if you choose CHILD for traversalDirection. For more information, see Asset hierarchies in the IoT SiteWise User Guide.
     */
    hierarchyId?: CustomID;
    /**
     * The direction to list associated assets. Choose one of the following options:    CHILD – The list includes all child assets associated to the asset. The hierarchyId parameter is required if you choose CHILD.    PARENT – The list includes the asset's parent asset.   Default: CHILD 
     */
    traversalDirection?: TraversalDirection;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
  }
  export interface ListAssociatedAssetsResponse {
    /**
     * A list that summarizes the associated assets.
     */
    assetSummaries: AssociatedAssetsSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type ListBulkImportJobsFilter = "ALL"|"PENDING"|"RUNNING"|"CANCELLED"|"FAILED"|"COMPLETED_WITH_FAILURES"|"COMPLETED"|string;
  export interface ListBulkImportJobsRequest {
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request.
     */
    maxResults?: MaxResults;
    /**
     * You can use a filter to select the bulk import jobs that you want to retrieve.
     */
    filter?: ListBulkImportJobsFilter;
  }
  export interface ListBulkImportJobsResponse {
    /**
     * One or more job summaries to list.
     */
    jobSummaries: JobSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListCompositionRelationshipsRequest {
    /**
     * The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetModelId: ID;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
  }
  export interface ListCompositionRelationshipsResponse {
    /**
     * A list that summarizes each composition relationship.
     */
    compositionRelationshipSummaries: CompositionRelationshipSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListDashboardsRequest {
    /**
     * The ID of the project.
     */
    projectId: ID;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
  }
  export interface ListDashboardsResponse {
    /**
     * A list that summarizes each dashboard in the project.
     */
    dashboardSummaries: DashboardSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListGatewaysRequest {
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
  }
  export interface ListGatewaysResponse {
    /**
     * A list that summarizes each gateway.
     */
    gatewaySummaries: GatewaySummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListPortalsRequest {
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
  }
  export interface ListPortalsResponse {
    /**
     * A list that summarizes each portal.
     */
    portalSummaries?: PortalSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListProjectAssetsRequest {
    /**
     * The ID of the project.
     */
    projectId: ID;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
  }
  export interface ListProjectAssetsResponse {
    /**
     * A list that contains the IDs of each asset associated with the project.
     */
    assetIds: AssetIDs;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListProjectsRequest {
    /**
     * The ID of the portal.
     */
    portalId: ID;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request. Default: 50
     */
    maxResults?: MaxResults;
  }
  export interface ListProjectsResponse {
    /**
     * A list that summarizes each project in the portal.
     */
    projectSummaries: ProjectSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The list of key-value pairs that contain metadata for the resource. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide.
     */
    tags?: TagMap;
  }
  export interface ListTimeSeriesRequest {
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return for each paginated request.
     */
    maxResults?: MaxResults;
    /**
     * The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId?: CustomID;
    /**
     * The alias prefix of the time series.
     */
    aliasPrefix?: PropertyAlias;
    /**
     * The type of the time series. The time series type can be one of the following values:    ASSOCIATED – The time series is associated with an asset property.    DISASSOCIATED – The time series isn't associated with any asset property.  
     */
    timeSeriesType?: ListTimeSeriesType;
  }
  export interface ListTimeSeriesResponse {
    /**
     * One or more time series summaries to list.
     */
    TimeSeriesSummaries: TimeSeriesSummaries;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type ListTimeSeriesType = "ASSOCIATED"|"DISASSOCIATED"|string;
  export type LoggingLevel = "ERROR"|"INFO"|"OFF"|string;
  export interface LoggingOptions {
    /**
     * The IoT SiteWise logging verbosity level.
     */
    level: LoggingLevel;
  }
  export type Macro = string;
  export type MaxInterpolatedResults = number;
  export type MaxResults = number;
  export interface Measurement {
    /**
     * The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud.
     */
    processingConfig?: MeasurementProcessingConfig;
  }
  export interface MeasurementProcessingConfig {
    /**
     * The forwarding configuration for the given measurement property. 
     */
    forwardingConfig: ForwardingConfig;
  }
  export interface Metric {
    /**
     * The mathematical expression that defines the metric aggregation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.  For more information, see Quotas in the IoT SiteWise User Guide.
     */
    expression: Expression;
    /**
     * The list of variables used in the expression.
     */
    variables: ExpressionVariables;
    /**
     * The window (time interval) over which IoT SiteWise computes the metric's aggregation expression. IoT SiteWise computes one data point per window.
     */
    window: MetricWindow;
    /**
     * The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud.
     */
    processingConfig?: MetricProcessingConfig;
  }
  export interface MetricProcessingConfig {
    /**
     * The compute location for the given metric property. 
     */
    computeLocation: ComputeLocation;
  }
  export interface MetricWindow {
    /**
     * The tumbling time interval window.
     */
    tumbling?: TumblingWindow;
  }
  export type MonitorErrorCode = "INTERNAL_FAILURE"|"VALIDATION_ERROR"|"LIMIT_EXCEEDED"|string;
  export interface MonitorErrorDetails {
    /**
     * The error code.
     */
    code?: MonitorErrorCode;
    /**
     * The error message.
     */
    message?: MonitorErrorMessage;
  }
  export type MonitorErrorMessage = string;
  export interface MultiLayerStorage {
    /**
     * Contains information about a customer managed Amazon S3 bucket.
     */
    customerManagedS3Storage: CustomerManagedS3Storage;
  }
  export type Name = string;
  export type NextToken = string;
  export type NullableBoolean = boolean;
  export type NumberOfDays = number;
  export type Offset = string;
  export type OffsetInNanos = number;
  export interface Parquet {
  }
  export type Permission = "ADMINISTRATOR"|"VIEWER"|string;
  export type PortalClientId = string;
  export interface PortalResource {
    /**
     * The ID of the portal.
     */
    id: ID;
  }
  export type PortalState = "CREATING"|"UPDATING"|"DELETING"|"ACTIVE"|"FAILED"|string;
  export interface PortalStatus {
    /**
     * The current state of the portal.
     */
    state: PortalState;
    /**
     * Contains associated error information, if any.
     */
    error?: MonitorErrorDetails;
  }
  export type PortalSummaries = PortalSummary[];
  export interface PortalSummary {
    /**
     * The ID of the portal.
     */
    id: ID;
    /**
     * The name of the portal.
     */
    name: Name;
    /**
     * The portal's description.
     */
    description?: Description;
    /**
     * The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal.
     */
    startUrl: Url;
    /**
     * The date the portal was created, in Unix epoch time.
     */
    creationDate?: Timestamp;
    /**
     * The date the portal was last updated, in Unix epoch time.
     */
    lastUpdateDate?: Timestamp;
    /**
     * The ARN of the service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see Using service roles for IoT SiteWise Monitor in the IoT SiteWise User Guide.
     */
    roleArn?: ARN;
    status: PortalStatus;
  }
  export interface ProjectResource {
    /**
     * The ID of the project.
     */
    id: ID;
  }
  export type ProjectSummaries = ProjectSummary[];
  export interface ProjectSummary {
    /**
     * The ID of the project.
     */
    id: ID;
    /**
     * The name of the project.
     */
    name: Name;
    /**
     * The project's description.
     */
    description?: Description;
    /**
     * The date the project was created, in Unix epoch time.
     */
    creationDate?: Timestamp;
    /**
     * The date the project was last updated, in Unix epoch time.
     */
    lastUpdateDate?: Timestamp;
  }
  export interface Property {
    /**
     * The ID of the asset property.
     */
    id: ID;
    /**
     * The name of the property.
     */
    name: Name;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    alias?: PropertyAlias;
    /**
     * The asset property's notification topic and state. For more information, see UpdateAssetProperty.
     */
    notification?: PropertyNotification;
    /**
     * The property data type.
     */
    dataType: PropertyDataType;
    /**
     * The unit (such as Newtons or RPM) of the asset property.
     */
    unit?: PropertyUnit;
    /**
     * The property type (see PropertyType). A property contains one type.
     */
    type?: PropertyType;
    /**
     * The structured path to the property from the root of the asset.
     */
    path?: AssetPropertyPath;
    /**
     * The external ID of the asset property. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    externalId?: ExternalId;
  }
  export type PropertyAlias = string;
  export type PropertyDataType = "STRING"|"INTEGER"|"DOUBLE"|"BOOLEAN"|"STRUCT"|string;
  export interface PropertyNotification {
    /**
     * The MQTT topic to which IoT SiteWise publishes property value update notifications.
     */
    topic: PropertyNotificationTopic;
    /**
     * The current notification state.
     */
    state: PropertyNotificationState;
  }
  export type PropertyNotificationState = "ENABLED"|"DISABLED"|string;
  export type PropertyNotificationTopic = string;
  export interface PropertyType {
    /**
     * Specifies an asset attribute property. An attribute generally contains static information, such as the serial number of an IIoT wind turbine.
     */
    attribute?: Attribute;
    /**
     * Specifies an asset measurement property. A measurement represents a device's raw sensor data stream, such as timestamped temperature values or timestamped power values.
     */
    measurement?: Measurement;
    /**
     * Specifies an asset transform property. A transform contains a mathematical expression that maps a property's data points from one form to another, such as a unit conversion from Celsius to Fahrenheit.
     */
    transform?: Transform;
    /**
     * Specifies an asset metric property. A metric contains a mathematical expression that uses aggregate functions to process all input data points over a time interval and output a single data point, such as to calculate the average hourly temperature.
     */
    metric?: Metric;
  }
  export type PropertyUnit = string;
  export type PropertyValueBooleanValue = boolean;
  export type PropertyValueDoubleValue = number;
  export type PropertyValueIntegerValue = number;
  export type PropertyValueStringValue = string;
  export type PutAssetPropertyValueEntries = PutAssetPropertyValueEntry[];
  export interface PutAssetPropertyValueEntry {
    /**
     * The user specified ID for the entry. You can use this ID to identify which entries failed.
     */
    entryId: EntryId;
    /**
     * The ID of the asset to update.
     */
    assetId?: ID;
    /**
     * The ID of the asset property for this entry.
     */
    propertyId?: ID;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
    /**
     * The list of property values to upload. You can specify up to 10 propertyValues array elements. 
     */
    propertyValues: AssetPropertyValues;
  }
  export interface PutDefaultEncryptionConfigurationRequest {
    /**
     * The type of encryption used for the encryption configuration.
     */
    encryptionType: EncryptionType;
    /**
     * The Key ID of the customer managed key used for KMS encryption. This is required if you use KMS_BASED_ENCRYPTION.
     */
    kmsKeyId?: KmsKeyId;
  }
  export interface PutDefaultEncryptionConfigurationResponse {
    /**
     * The type of encryption used for the encryption configuration.
     */
    encryptionType: EncryptionType;
    /**
     * The Key ARN of the KMS key used for KMS encryption if you use KMS_BASED_ENCRYPTION.
     */
    kmsKeyArn?: ARN;
    /**
     * The status of the account configuration. This contains the ConfigurationState. If there is an error, it also contains the ErrorDetails.
     */
    configurationStatus: ConfigurationStatus;
  }
  export interface PutLoggingOptionsRequest {
    /**
     * The logging options to set.
     */
    loggingOptions: LoggingOptions;
  }
  export interface PutLoggingOptionsResponse {
  }
  export interface PutStorageConfigurationRequest {
    /**
     * The storage tier that you specified for your data. The storageType parameter can be one of the following values:    SITEWISE_DEFAULT_STORAGE – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.    MULTI_LAYER_STORAGE – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.  
     */
    storageType: StorageType;
    /**
     * Identifies a storage destination. If you specified MULTI_LAYER_STORAGE for the storage type, you must specify a MultiLayerStorage object.
     */
    multiLayerStorage?: MultiLayerStorage;
    /**
     * Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The disassociatedDataStorage can be one of the following values:    ENABLED – IoT SiteWise accepts time series that aren't associated with asset properties.  After the disassociatedDataStorage is enabled, you can't disable it.     DISABLED – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.   For more information, see Data streams in the IoT SiteWise User Guide.
     */
    disassociatedDataStorage?: DisassociatedDataStorageState;
    retentionPeriod?: RetentionPeriod;
    /**
     * A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.
     */
    warmTier?: WarmTierState;
    /**
     * Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.
     */
    warmTierRetentionPeriod?: WarmTierRetentionPeriod;
  }
  export interface PutStorageConfigurationResponse {
    /**
     * The storage tier that you specified for your data. The storageType parameter can be one of the following values:    SITEWISE_DEFAULT_STORAGE – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.    MULTI_LAYER_STORAGE – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.  
     */
    storageType: StorageType;
    /**
     * Contains information about the storage destination.
     */
    multiLayerStorage?: MultiLayerStorage;
    /**
     * Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The disassociatedDataStorage can be one of the following values:    ENABLED – IoT SiteWise accepts time series that aren't associated with asset properties.  After the disassociatedDataStorage is enabled, you can't disable it.     DISABLED – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.   For more information, see Data streams in the IoT SiteWise User Guide.
     */
    disassociatedDataStorage?: DisassociatedDataStorageState;
    retentionPeriod?: RetentionPeriod;
    configurationStatus: ConfigurationStatus;
    /**
     * A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.
     */
    warmTier?: WarmTierState;
    /**
     * Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.
     */
    warmTierRetentionPeriod?: WarmTierRetentionPeriod;
  }
  export type Qualities = Quality[];
  export type Quality = "GOOD"|"BAD"|"UNCERTAIN"|string;
  export type QueryStatement = string;
  export type Resolution = string;
  export interface Resource {
    /**
     * A portal resource.
     */
    portal?: PortalResource;
    /**
     * A project resource.
     */
    project?: ProjectResource;
  }
  export type ResourceType = "PORTAL"|"PROJECT"|string;
  export interface RetentionPeriod {
    /**
     * The number of days that your data is kept.  If you specified a value for this parameter, the unlimited parameter must be false. 
     */
    numberOfDays?: NumberOfDays;
    /**
     * If true, your data is kept indefinitely.  If configured to true, you must not specify a value for the numberOfDays parameter. 
     */
    unlimited?: Unlimited;
  }
  export interface Row {
    /**
     * List of data points in a single row of the result set.
     */
    data: DatumList;
  }
  export type Rows = Row[];
  export type SSOApplicationId = string;
  export type ScalarType = "BOOLEAN"|"INT"|"DOUBLE"|"TIMESTAMP"|"STRING"|string;
  export type ScalarValue = string;
  export type StorageType = "SITEWISE_DEFAULT_STORAGE"|"MULTI_LAYER_STORAGE"|string;
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN of the resource to tag.
     */
    resourceArn: AmazonResourceName;
    /**
     * A list of key-value pairs that contain metadata for the resource. For more information, see Tagging your IoT SiteWise resources in the IoT SiteWise User Guide.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface TargetResource {
    /**
     * The ID of the asset, in UUID format.
     */
    assetId: CustomID;
  }
  export type TargetResourceType = "ASSET"|string;
  export interface TimeInNanos {
    /**
     * The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is provided by offsetInNanos.
     */
    timeInSeconds: TimeInSeconds;
    /**
     * The nanosecond offset from timeInSeconds.
     */
    offsetInNanos?: OffsetInNanos;
  }
  export type TimeInSeconds = number;
  export type TimeOrdering = "ASCENDING"|"DESCENDING"|string;
  export type TimeSeriesId = string;
  export type TimeSeriesSummaries = TimeSeriesSummary[];
  export interface TimeSeriesSummary {
    /**
     * The ID of the asset in which the asset property was created.
     */
    assetId?: ID;
    /**
     * The ID of the asset property, in UUID format.
     */
    propertyId?: ID;
    /**
     * The alias that identifies the time series.
     */
    alias?: PropertyAlias;
    /**
     * The ID of the time series.
     */
    timeSeriesId: TimeSeriesId;
    /**
     * The data type of the time series. If you specify STRUCT, you must also specify dataTypeSpec to identify the type of the structure for this time series.
     */
    dataType: PropertyDataType;
    /**
     * The data type of the structure for this time series. This parameter is required for time series that have the STRUCT data type. The options for this parameter depend on the type of the composite model in which you created the asset property that is associated with your time series. Use AWS/ALARM_STATE for alarm state in alarm composite models.
     */
    dataTypeSpec?: Name;
    /**
     * The date that the time series was created, in Unix epoch time.
     */
    timeSeriesCreationDate: Timestamp;
    /**
     * The date that the time series was last updated, in Unix epoch time.
     */
    timeSeriesLastUpdateDate: Timestamp;
    /**
     * The ARN of the time series, which has the following format.  arn:${Partition}:iotsitewise:${Region}:${Account}:time-series/${TimeSeriesId} 
     */
    timeSeriesArn: ARN;
  }
  export type Timestamp = Date;
  export type Timestamps = TimeInNanos[];
  export interface Transform {
    /**
     * The mathematical expression that defines the transformation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.  For more information, see Quotas in the IoT SiteWise User Guide.
     */
    expression: Expression;
    /**
     * The list of variables used in the expression.
     */
    variables: ExpressionVariables;
    /**
     * The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.
     */
    processingConfig?: TransformProcessingConfig;
  }
  export interface TransformProcessingConfig {
    /**
     * The compute location for the given transform property. 
     */
    computeLocation: ComputeLocation;
    forwardingConfig?: ForwardingConfig;
  }
  export type TraversalDirection = "PARENT"|"CHILD"|string;
  export type TraversalType = "PATH_TO_ROOT"|string;
  export interface TumblingWindow {
    /**
     * The time interval for the tumbling window. The interval time must be between 1 minute and 1 week. IoT SiteWise computes the 1w interval the end of Sunday at midnight each week (UTC), the 1d interval at the end of each day at midnight (UTC), the 1h interval at the end of each hour, and so on.  When IoT SiteWise aggregates data points for metric computations, the start of each interval is exclusive and the end of each interval is inclusive. IoT SiteWise places the computed data point at the end of the interval.
     */
    interval: Interval;
    /**
     * The offset for the tumbling window. The offset parameter accepts the following:   The offset time. For example, if you specify 18h for offset and 1d for interval, IoT SiteWise aggregates data in one of the following ways:   If you create the metric before or at 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) on the day when you create the metric.   If you create the metric after 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) the next day.     The ISO 8601 format. For example, if you specify PT18H for offset and 1d for interval, IoT SiteWise aggregates data in one of the following ways:   If you create the metric before or at 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) on the day when you create the metric.   If you create the metric after 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) the next day.     The 24-hour clock. For example, if you specify 00:03:00 for offset, 5m for interval, and you create the metric at 2 PM (UTC), you get the first aggregation result at 2:03 PM (UTC). You get the second aggregation result at 2:08 PM (UTC).    The offset time zone. For example, if you specify 2021-07-23T18:00-08 for offset and 1d for interval, IoT SiteWise aggregates data in one of the following ways:   If you create the metric before or at 6 PM (PST), you get the first aggregation result at 6 PM (PST) on the day when you create the metric.   If you create the metric after 6 PM (PST), you get the first aggregation result at 6 PM (PST) the next day.    
     */
    offset?: Offset;
  }
  export type Unlimited = boolean;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource to untag.
     */
    resourceArn: AmazonResourceName;
    /**
     * A list of keys for tags to remove from the resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateAccessPolicyRequest {
    /**
     * The ID of the access policy.
     */
    accessPolicyId: ID;
    /**
     * The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.
     */
    accessPolicyIdentity: Identity;
    /**
     * The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.
     */
    accessPolicyResource: Resource;
    /**
     * The permission level for this access policy. Note that a project ADMINISTRATOR is also known as a project owner.
     */
    accessPolicyPermission: Permission;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface UpdateAccessPolicyResponse {
  }
  export interface UpdateAssetModelCompositeModelRequest {
    /**
     * The ID of the asset model, in UUID format.
     */
    assetModelId: CustomID;
    /**
     * The ID of a composite model on this asset model.
     */
    assetModelCompositeModelId: CustomID;
    /**
     * An external ID to assign to the asset model. You can only set the external ID of the asset model if it wasn't set when it was created, or you're setting it to the exact same thing as when it was created.
     */
    assetModelCompositeModelExternalId?: ExternalId;
    /**
     * A description for the composite model.
     */
    assetModelCompositeModelDescription?: Description;
    /**
     * A unique, friendly name for the composite model.
     */
    assetModelCompositeModelName: Name;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * The property definitions of the composite model. For more information, see &lt;LINK&gt;. You can specify up to 200 properties per composite model. For more information, see Quotas in the IoT SiteWise User Guide.
     */
    assetModelCompositeModelProperties?: AssetModelProperties;
  }
  export interface UpdateAssetModelCompositeModelResponse {
    /**
     * The path to the composite model listing the parent composite models.
     */
    assetModelCompositeModelPath: AssetModelCompositeModelPath;
    assetModelStatus: AssetModelStatus;
  }
  export interface UpdateAssetModelRequest {
    /**
     * The ID of the asset model to update. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetModelId: CustomID;
    /**
     * A unique, friendly name for the asset model.
     */
    assetModelName: Name;
    /**
     * A description for the asset model.
     */
    assetModelDescription?: Description;
    /**
     * The updated property definitions of the asset model. For more information, see Asset properties in the IoT SiteWise User Guide. You can specify up to 200 properties per asset model. For more information, see Quotas in the IoT SiteWise User Guide.
     */
    assetModelProperties?: AssetModelProperties;
    /**
     * The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see Asset hierarchies in the IoT SiteWise User Guide. You can specify up to 10 hierarchies per asset model. For more information, see Quotas in the IoT SiteWise User Guide.
     */
    assetModelHierarchies?: AssetModelHierarchies;
    /**
     * The composite models that are part of this asset model. It groups properties (such as attributes, measurements, transforms, and metrics) and child composite models that model parts of your industrial equipment. Each composite model has a type that defines the properties that the composite model supports. Use composite models to define alarms on this asset model.  When creating custom composite models, you need to use CreateAssetModelCompositeModel. For more information, see &lt;LINK&gt;. 
     */
    assetModelCompositeModels?: AssetModelCompositeModels;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * An external ID to assign to the asset model. The asset model must not already have an external ID. The external ID must be unique within your Amazon Web Services account. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    assetModelExternalId?: ExternalId;
  }
  export interface UpdateAssetModelResponse {
    /**
     * The status of the asset model, which contains a state (UPDATING after successfully calling this operation) and any error message.
     */
    assetModelStatus: AssetModelStatus;
  }
  export interface UpdateAssetPropertyRequest {
    /**
     * The ID of the asset to be updated. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * The ID of the asset property to be updated. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    propertyId: CustomID;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping industrial data streams to asset properties in the IoT SiteWise User Guide. If you omit this parameter, the alias is removed from the property.
     */
    propertyAlias?: PropertyAlias;
    /**
     * The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see Interacting with other services in the IoT SiteWise User Guide. If you omit this parameter, the notification state is set to DISABLED.
     */
    propertyNotificationState?: PropertyNotificationState;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model.
     */
    propertyUnit?: PropertyUnit;
  }
  export interface UpdateAssetRequest {
    /**
     * The ID of the asset to update. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.
     */
    assetId: CustomID;
    /**
     * A friendly name for the asset.
     */
    assetName: Name;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * A description for the asset.
     */
    assetDescription?: Description;
    /**
     * An external ID to assign to the asset. The asset must not already have an external ID. The external ID must be unique within your Amazon Web Services account. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    assetExternalId?: ExternalId;
  }
  export interface UpdateAssetResponse {
    /**
     * The status of the asset, which contains a state (UPDATING after successfully calling this operation) and any error message.
     */
    assetStatus: AssetStatus;
  }
  export interface UpdateDashboardRequest {
    /**
     * The ID of the dashboard to update.
     */
    dashboardId: ID;
    /**
     * A new friendly name for the dashboard.
     */
    dashboardName: Name;
    /**
     * A new description for the dashboard.
     */
    dashboardDescription?: Description;
    /**
     * The new dashboard definition, as specified in a JSON literal. For detailed information, see Creating dashboards (CLI) in the IoT SiteWise User Guide.
     */
    dashboardDefinition: DashboardDefinition;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface UpdateDashboardResponse {
  }
  export interface UpdateGatewayCapabilityConfigurationRequest {
    /**
     * The ID of the gateway to be updated.
     */
    gatewayId: ID;
    /**
     * The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:version, where version is a number such as 1.
     */
    capabilityNamespace: CapabilityNamespace;
    /**
     * The JSON document that defines the configuration for the gateway capability. For more information, see Configuring data sources (CLI) in the IoT SiteWise User Guide.
     */
    capabilityConfiguration: CapabilityConfiguration;
  }
  export interface UpdateGatewayCapabilityConfigurationResponse {
    /**
     * The namespace of the gateway capability.
     */
    capabilityNamespace: CapabilityNamespace;
    /**
     * The synchronization status of the capability configuration. The sync status can be one of the following:    IN_SYNC – The gateway is running the capability configuration.    OUT_OF_SYNC – The gateway hasn't received the capability configuration.    SYNC_FAILED – The gateway rejected the capability configuration.   After you update a capability configuration, its sync status is OUT_OF_SYNC until the gateway receives and applies or rejects the updated configuration.
     */
    capabilitySyncStatus: CapabilitySyncStatus;
  }
  export interface UpdateGatewayRequest {
    /**
     * The ID of the gateway to update.
     */
    gatewayId: ID;
    /**
     * A unique, friendly name for the gateway.
     */
    gatewayName: Name;
  }
  export interface UpdatePortalRequest {
    /**
     * The ID of the portal to update.
     */
    portalId: ID;
    /**
     * A new friendly name for the portal.
     */
    portalName: Name;
    /**
     * A new description for the portal.
     */
    portalDescription?: Description;
    /**
     * The Amazon Web Services administrator's contact email address.
     */
    portalContactEmail: Email;
    portalLogoImage?: Image;
    /**
     * The ARN of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see Using service roles for IoT SiteWise Monitor in the IoT SiteWise User Guide.
     */
    roleArn: ARN;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * The email address that sends alarm notifications.
     */
    notificationSenderEmail?: Email;
    /**
     * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see Monitoring with alarms in the IoT SiteWise Application Guide.
     */
    alarms?: Alarms;
  }
  export interface UpdatePortalResponse {
    /**
     * The status of the portal, which contains a state (UPDATING after successfully calling this operation) and any error message.
     */
    portalStatus: PortalStatus;
  }
  export interface UpdateProjectRequest {
    /**
     * The ID of the project to update.
     */
    projectId: ID;
    /**
     * A new friendly name for the project.
     */
    projectName: Name;
    /**
     * A new description for the project.
     */
    projectDescription?: Description;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface UpdateProjectResponse {
  }
  export type Url = string;
  export interface UserIdentity {
    /**
     * The IAM Identity Center ID of the user.
     */
    id: IdentityId;
  }
  export type VariableName = string;
  export interface VariableValue {
    /**
     * The ID of the property to use as the variable. You can use the property name if it's from the same asset model. If the property has an external ID, you can specify externalId: followed by the external ID. For more information, see Using external IDs in the IoT SiteWise User Guide.
     */
    propertyId?: Macro;
    /**
     * The ID of the hierarchy to query for the property ID. You can use the hierarchy's name instead of the hierarchy's ID. If the hierarchy has an external ID, you can specify externalId: followed by the external ID. For more information, see Using external IDs in the IoT SiteWise User Guide. You use a hierarchy ID instead of a model ID because you can have several hierarchies using the same model and therefore the same propertyId. For example, you might have separately grouped assets that come from the same asset model. For more information, see Asset hierarchies in the IoT SiteWise User Guide.
     */
    hierarchyId?: Macro;
    /**
     * The path of the property.
     */
    propertyPath?: AssetModelPropertyPath;
  }
  export interface Variant {
    /**
     * Asset property data of type string (sequence of characters).
     */
    stringValue?: PropertyValueStringValue;
    /**
     * Asset property data of type integer (number that's greater than or equal to zero).
     */
    integerValue?: PropertyValueIntegerValue;
    /**
     * Asset property data of type double (floating point number).
     */
    doubleValue?: PropertyValueDoubleValue;
    /**
     * Asset property data of type Boolean (true or false).
     */
    booleanValue?: PropertyValueBooleanValue;
  }
  export interface WarmTierRetentionPeriod {
    /**
     * The number of days the data is stored in the warm tier.
     */
    numberOfDays?: NumberOfDays;
    /**
     * If set to true, the data is stored indefinitely in the warm tier.
     */
    unlimited?: Unlimited;
  }
  export type WarmTierState = "ENABLED"|"DISABLED"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-12-02"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the IoTSiteWise client.
   */
  export import Types = IoTSiteWise;
}
export = IoTSiteWise;
