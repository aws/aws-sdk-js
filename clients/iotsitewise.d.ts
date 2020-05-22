import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class IoTSiteWise extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IoTSiteWise.Types.ClientConfiguration)
  config: Config & IoTSiteWise.Types.ClientConfiguration;
  /**
   * Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see Associating Assets in the AWS IoT SiteWise User Guide.
   */
  associateAssets(params: IoTSiteWise.Types.AssociateAssetsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see Associating Assets in the AWS IoT SiteWise User Guide.
   */
  associateAssets(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a group (batch) of assets with an AWS IoT SiteWise Monitor project.
   */
  batchAssociateProjectAssets(params: IoTSiteWise.Types.BatchAssociateProjectAssetsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.BatchAssociateProjectAssetsResponse) => void): Request<IoTSiteWise.Types.BatchAssociateProjectAssetsResponse, AWSError>;
  /**
   * Associates a group (batch) of assets with an AWS IoT SiteWise Monitor project.
   */
  batchAssociateProjectAssets(callback?: (err: AWSError, data: IoTSiteWise.Types.BatchAssociateProjectAssetsResponse) => void): Request<IoTSiteWise.Types.BatchAssociateProjectAssetsResponse, AWSError>;
  /**
   * Disassociates a group (batch) of assets from an AWS IoT SiteWise Monitor project.
   */
  batchDisassociateProjectAssets(params: IoTSiteWise.Types.BatchDisassociateProjectAssetsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.BatchDisassociateProjectAssetsResponse) => void): Request<IoTSiteWise.Types.BatchDisassociateProjectAssetsResponse, AWSError>;
  /**
   * Disassociates a group (batch) of assets from an AWS IoT SiteWise Monitor project.
   */
  batchDisassociateProjectAssets(callback?: (err: AWSError, data: IoTSiteWise.Types.BatchDisassociateProjectAssetsResponse) => void): Request<IoTSiteWise.Types.BatchDisassociateProjectAssetsResponse, AWSError>;
  /**
   * Sends a list of asset property values to AWS IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see Ingesting Data Using the API in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.    With respect to Unix epoch time, AWS IoT SiteWise accepts only TQVs that have a timestamp of no more than 15 minutes in the past and no more than 5 minutes in the future. AWS IoT SiteWise rejects timestamps outside of the inclusive range of [-15, +5] minutes and returns a TimestampOutOfRangeException error. For each asset property, AWS IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV {T1, GOOD, V1}, then storing {T1, GOOD, V2} replaces the existing TQV. 
   */
  batchPutAssetPropertyValue(params: IoTSiteWise.Types.BatchPutAssetPropertyValueRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.BatchPutAssetPropertyValueResponse) => void): Request<IoTSiteWise.Types.BatchPutAssetPropertyValueResponse, AWSError>;
  /**
   * Sends a list of asset property values to AWS IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see Ingesting Data Using the API in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.    With respect to Unix epoch time, AWS IoT SiteWise accepts only TQVs that have a timestamp of no more than 15 minutes in the past and no more than 5 minutes in the future. AWS IoT SiteWise rejects timestamps outside of the inclusive range of [-15, +5] minutes and returns a TimestampOutOfRangeException error. For each asset property, AWS IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV {T1, GOOD, V1}, then storing {T1, GOOD, V2} replaces the existing TQV. 
   */
  batchPutAssetPropertyValue(callback?: (err: AWSError, data: IoTSiteWise.Types.BatchPutAssetPropertyValueResponse) => void): Request<IoTSiteWise.Types.BatchPutAssetPropertyValueResponse, AWSError>;
  /**
   * Creates an access policy that grants the specified AWS Single Sign-On user or group access to the specified AWS IoT SiteWise Monitor portal or project resource.
   */
  createAccessPolicy(params: IoTSiteWise.Types.CreateAccessPolicyRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAccessPolicyResponse) => void): Request<IoTSiteWise.Types.CreateAccessPolicyResponse, AWSError>;
  /**
   * Creates an access policy that grants the specified AWS Single Sign-On user or group access to the specified AWS IoT SiteWise Monitor portal or project resource.
   */
  createAccessPolicy(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAccessPolicyResponse) => void): Request<IoTSiteWise.Types.CreateAccessPolicyResponse, AWSError>;
  /**
   * Creates an asset from an existing asset model. For more information, see Creating Assets in the AWS IoT SiteWise User Guide.
   */
  createAsset(params: IoTSiteWise.Types.CreateAssetRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAssetResponse) => void): Request<IoTSiteWise.Types.CreateAssetResponse, AWSError>;
  /**
   * Creates an asset from an existing asset model. For more information, see Creating Assets in the AWS IoT SiteWise User Guide.
   */
  createAsset(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAssetResponse) => void): Request<IoTSiteWise.Types.CreateAssetResponse, AWSError>;
  /**
   * Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see Defining Asset Models in the AWS IoT SiteWise User Guide.
   */
  createAssetModel(params: IoTSiteWise.Types.CreateAssetModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAssetModelResponse) => void): Request<IoTSiteWise.Types.CreateAssetModelResponse, AWSError>;
  /**
   * Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see Defining Asset Models in the AWS IoT SiteWise User Guide.
   */
  createAssetModel(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateAssetModelResponse) => void): Request<IoTSiteWise.Types.CreateAssetModelResponse, AWSError>;
  /**
   * Creates a dashboard in an AWS IoT SiteWise Monitor project.
   */
  createDashboard(params: IoTSiteWise.Types.CreateDashboardRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateDashboardResponse) => void): Request<IoTSiteWise.Types.CreateDashboardResponse, AWSError>;
  /**
   * Creates a dashboard in an AWS IoT SiteWise Monitor project.
   */
  createDashboard(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateDashboardResponse) => void): Request<IoTSiteWise.Types.CreateDashboardResponse, AWSError>;
  /**
   * Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to AWS IoT SiteWise. For more information, see Ingesting data using a gateway in the AWS IoT SiteWise User Guide.
   */
  createGateway(params: IoTSiteWise.Types.CreateGatewayRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateGatewayResponse) => void): Request<IoTSiteWise.Types.CreateGatewayResponse, AWSError>;
  /**
   * Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to AWS IoT SiteWise. For more information, see Ingesting data using a gateway in the AWS IoT SiteWise User Guide.
   */
  createGateway(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateGatewayResponse) => void): Request<IoTSiteWise.Types.CreateGatewayResponse, AWSError>;
  /**
   * Creates a portal, which can contain projects and dashboards. Before you can create a portal, you must configure AWS Single Sign-On in the current Region. AWS IoT SiteWise Monitor uses AWS SSO to manage user permissions. For more information, see Enabling AWS SSO in the AWS IoT SiteWise User Guide.  Before you can sign in to a new portal, you must add at least one AWS SSO user or group to that portal. For more information, see Adding or Removing Portal Administrators in the AWS IoT SiteWise User Guide. 
   */
  createPortal(params: IoTSiteWise.Types.CreatePortalRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreatePortalResponse) => void): Request<IoTSiteWise.Types.CreatePortalResponse, AWSError>;
  /**
   * Creates a portal, which can contain projects and dashboards. Before you can create a portal, you must configure AWS Single Sign-On in the current Region. AWS IoT SiteWise Monitor uses AWS SSO to manage user permissions. For more information, see Enabling AWS SSO in the AWS IoT SiteWise User Guide.  Before you can sign in to a new portal, you must add at least one AWS SSO user or group to that portal. For more information, see Adding or Removing Portal Administrators in the AWS IoT SiteWise User Guide. 
   */
  createPortal(callback?: (err: AWSError, data: IoTSiteWise.Types.CreatePortalResponse) => void): Request<IoTSiteWise.Types.CreatePortalResponse, AWSError>;
  /**
   * Creates a project in the specified portal.
   */
  createProject(params: IoTSiteWise.Types.CreateProjectRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.CreateProjectResponse) => void): Request<IoTSiteWise.Types.CreateProjectResponse, AWSError>;
  /**
   * Creates a project in the specified portal.
   */
  createProject(callback?: (err: AWSError, data: IoTSiteWise.Types.CreateProjectResponse) => void): Request<IoTSiteWise.Types.CreateProjectResponse, AWSError>;
  /**
   * Deletes an access policy that grants the specified AWS Single Sign-On identity access to the specified AWS IoT SiteWise Monitor resource. You can use this operation to revoke access to an AWS IoT SiteWise Monitor resource.
   */
  deleteAccessPolicy(params: IoTSiteWise.Types.DeleteAccessPolicyRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAccessPolicyResponse) => void): Request<IoTSiteWise.Types.DeleteAccessPolicyResponse, AWSError>;
  /**
   * Deletes an access policy that grants the specified AWS Single Sign-On identity access to the specified AWS IoT SiteWise Monitor resource. You can use this operation to revoke access to an AWS IoT SiteWise Monitor resource.
   */
  deleteAccessPolicy(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAccessPolicyResponse) => void): Request<IoTSiteWise.Types.DeleteAccessPolicyResponse, AWSError>;
  /**
   * Deletes an asset. This action can't be undone. For more information, see Deleting Assets and Models in the AWS IoT SiteWise User Guide.   You can't delete an asset that's associated to another asset. For more information, see DisassociateAssets. 
   */
  deleteAsset(params: IoTSiteWise.Types.DeleteAssetRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAssetResponse) => void): Request<IoTSiteWise.Types.DeleteAssetResponse, AWSError>;
  /**
   * Deletes an asset. This action can't be undone. For more information, see Deleting Assets and Models in the AWS IoT SiteWise User Guide.   You can't delete an asset that's associated to another asset. For more information, see DisassociateAssets. 
   */
  deleteAsset(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAssetResponse) => void): Request<IoTSiteWise.Types.DeleteAssetResponse, AWSError>;
  /**
   * Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting Assets and Models in the AWS IoT SiteWise User Guide.
   */
  deleteAssetModel(params: IoTSiteWise.Types.DeleteAssetModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAssetModelResponse) => void): Request<IoTSiteWise.Types.DeleteAssetModelResponse, AWSError>;
  /**
   * Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see Deleting Assets and Models in the AWS IoT SiteWise User Guide.
   */
  deleteAssetModel(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteAssetModelResponse) => void): Request<IoTSiteWise.Types.DeleteAssetModelResponse, AWSError>;
  /**
   * Deletes a dashboard from AWS IoT SiteWise Monitor.
   */
  deleteDashboard(params: IoTSiteWise.Types.DeleteDashboardRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteDashboardResponse) => void): Request<IoTSiteWise.Types.DeleteDashboardResponse, AWSError>;
  /**
   * Deletes a dashboard from AWS IoT SiteWise Monitor.
   */
  deleteDashboard(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteDashboardResponse) => void): Request<IoTSiteWise.Types.DeleteDashboardResponse, AWSError>;
  /**
   * Deletes a gateway from AWS IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system. For more information, see Data retention in the AWS IoT SiteWise User Guide.
   */
  deleteGateway(params: IoTSiteWise.Types.DeleteGatewayRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a gateway from AWS IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system. For more information, see Data retention in the AWS IoT SiteWise User Guide.
   */
  deleteGateway(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a portal from AWS IoT SiteWise Monitor.
   */
  deletePortal(params: IoTSiteWise.Types.DeletePortalRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeletePortalResponse) => void): Request<IoTSiteWise.Types.DeletePortalResponse, AWSError>;
  /**
   * Deletes a portal from AWS IoT SiteWise Monitor.
   */
  deletePortal(callback?: (err: AWSError, data: IoTSiteWise.Types.DeletePortalResponse) => void): Request<IoTSiteWise.Types.DeletePortalResponse, AWSError>;
  /**
   * Deletes a project from AWS IoT SiteWise Monitor.
   */
  deleteProject(params: IoTSiteWise.Types.DeleteProjectRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteProjectResponse) => void): Request<IoTSiteWise.Types.DeleteProjectResponse, AWSError>;
  /**
   * Deletes a project from AWS IoT SiteWise Monitor.
   */
  deleteProject(callback?: (err: AWSError, data: IoTSiteWise.Types.DeleteProjectResponse) => void): Request<IoTSiteWise.Types.DeleteProjectResponse, AWSError>;
  /**
   * Describes an access policy, which specifies an AWS SSO user or group's access to an AWS IoT SiteWise Monitor portal or project.
   */
  describeAccessPolicy(params: IoTSiteWise.Types.DescribeAccessPolicyRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAccessPolicyResponse) => void): Request<IoTSiteWise.Types.DescribeAccessPolicyResponse, AWSError>;
  /**
   * Describes an access policy, which specifies an AWS SSO user or group's access to an AWS IoT SiteWise Monitor portal or project.
   */
  describeAccessPolicy(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAccessPolicyResponse) => void): Request<IoTSiteWise.Types.DescribeAccessPolicyResponse, AWSError>;
  /**
   * Retrieves information about an asset.
   */
  describeAsset(params: IoTSiteWise.Types.DescribeAssetRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetResponse) => void): Request<IoTSiteWise.Types.DescribeAssetResponse, AWSError>;
  /**
   * Retrieves information about an asset.
   */
  describeAsset(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetResponse) => void): Request<IoTSiteWise.Types.DescribeAssetResponse, AWSError>;
  /**
   * Retrieves information about an asset model.
   */
  describeAssetModel(params: IoTSiteWise.Types.DescribeAssetModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetModelResponse, AWSError>;
  /**
   * Retrieves information about an asset model.
   */
  describeAssetModel(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetModelResponse) => void): Request<IoTSiteWise.Types.DescribeAssetModelResponse, AWSError>;
  /**
   * Retrieves information about an asset's property.
   */
  describeAssetProperty(params: IoTSiteWise.Types.DescribeAssetPropertyRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetPropertyResponse) => void): Request<IoTSiteWise.Types.DescribeAssetPropertyResponse, AWSError>;
  /**
   * Retrieves information about an asset's property.
   */
  describeAssetProperty(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeAssetPropertyResponse) => void): Request<IoTSiteWise.Types.DescribeAssetPropertyResponse, AWSError>;
  /**
   * Retrieves information about a dashboard.
   */
  describeDashboard(params: IoTSiteWise.Types.DescribeDashboardRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeDashboardResponse) => void): Request<IoTSiteWise.Types.DescribeDashboardResponse, AWSError>;
  /**
   * Retrieves information about a dashboard.
   */
  describeDashboard(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeDashboardResponse) => void): Request<IoTSiteWise.Types.DescribeDashboardResponse, AWSError>;
  /**
   * Retrieves information about a gateway.
   */
  describeGateway(params: IoTSiteWise.Types.DescribeGatewayRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeGatewayResponse) => void): Request<IoTSiteWise.Types.DescribeGatewayResponse, AWSError>;
  /**
   * Retrieves information about a gateway.
   */
  describeGateway(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeGatewayResponse) => void): Request<IoTSiteWise.Types.DescribeGatewayResponse, AWSError>;
  /**
   * Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway.
   */
  describeGatewayCapabilityConfiguration(params: IoTSiteWise.Types.DescribeGatewayCapabilityConfigurationRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeGatewayCapabilityConfigurationResponse) => void): Request<IoTSiteWise.Types.DescribeGatewayCapabilityConfigurationResponse, AWSError>;
  /**
   * Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway.
   */
  describeGatewayCapabilityConfiguration(callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeGatewayCapabilityConfigurationResponse) => void): Request<IoTSiteWise.Types.DescribeGatewayCapabilityConfigurationResponse, AWSError>;
  /**
   * Retrieves the current AWS IoT SiteWise logging options.
   */
  describeLoggingOptions(params: IoTSiteWise.Types.DescribeLoggingOptionsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.DescribeLoggingOptionsResponse) => void): Request<IoTSiteWise.Types.DescribeLoggingOptionsResponse, AWSError>;
  /**
   * Retrieves the current AWS IoT SiteWise logging options.
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
   * Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
   */
  disassociateAssets(params: IoTSiteWise.Types.DisassociateAssetsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
   */
  disassociateAssets(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets aggregated values for an asset property. For more information, see Querying Aggregated Property Values in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyAggregates(params: IoTSiteWise.Types.GetAssetPropertyAggregatesRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyAggregatesResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyAggregatesResponse, AWSError>;
  /**
   * Gets aggregated values for an asset property. For more information, see Querying Aggregated Property Values in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyAggregates(callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyAggregatesResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyAggregatesResponse, AWSError>;
  /**
   * Gets an asset property's current value. For more information, see Querying Current Property Values in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyValue(params: IoTSiteWise.Types.GetAssetPropertyValueRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyValueResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyValueResponse, AWSError>;
  /**
   * Gets an asset property's current value. For more information, see Querying Current Property Values in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyValue(callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyValueResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyValueResponse, AWSError>;
  /**
   * Gets the history of an asset property's values. For more information, see Querying Historical Property Values in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyValueHistory(params: IoTSiteWise.Types.GetAssetPropertyValueHistoryRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyValueHistoryResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyValueHistoryResponse, AWSError>;
  /**
   * Gets the history of an asset property's values. For more information, see Querying Historical Property Values in the AWS IoT SiteWise User Guide. To identify an asset property, you must specify one of the following:   The assetId and propertyId of an asset property.   A propertyAlias, which is a data stream alias (for example, /company/windfarm/3/turbine/7/temperature). To define an asset property's alias, see UpdateAssetProperty.  
   */
  getAssetPropertyValueHistory(callback?: (err: AWSError, data: IoTSiteWise.Types.GetAssetPropertyValueHistoryResponse) => void): Request<IoTSiteWise.Types.GetAssetPropertyValueHistoryResponse, AWSError>;
  /**
   * Retrieves a paginated list of access policies for an AWS SSO identity (a user or group) or an AWS IoT SiteWise Monitor resource (a portal or project).
   */
  listAccessPolicies(params: IoTSiteWise.Types.ListAccessPoliciesRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAccessPoliciesResponse) => void): Request<IoTSiteWise.Types.ListAccessPoliciesResponse, AWSError>;
  /**
   * Retrieves a paginated list of access policies for an AWS SSO identity (a user or group) or an AWS IoT SiteWise Monitor resource (a portal or project).
   */
  listAccessPolicies(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAccessPoliciesResponse) => void): Request<IoTSiteWise.Types.ListAccessPoliciesResponse, AWSError>;
  /**
   * Retrieves a paginated list of summaries of all asset models.
   */
  listAssetModels(params: IoTSiteWise.Types.ListAssetModelsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetModelsResponse) => void): Request<IoTSiteWise.Types.ListAssetModelsResponse, AWSError>;
  /**
   * Retrieves a paginated list of summaries of all asset models.
   */
  listAssetModels(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetModelsResponse) => void): Request<IoTSiteWise.Types.ListAssetModelsResponse, AWSError>;
  /**
   * Retrieves a paginated list of asset summaries. You can use this operation to do the following:   List assets based on a specific asset model.   List top-level assets.   You can't use this operation to list all assets. To retrieve summaries for all of your assets, use ListAssetModels to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.
   */
  listAssets(params: IoTSiteWise.Types.ListAssetsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetsResponse) => void): Request<IoTSiteWise.Types.ListAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of asset summaries. You can use this operation to do the following:   List assets based on a specific asset model.   List top-level assets.   You can't use this operation to list all assets. To retrieve summaries for all of your assets, use ListAssetModels to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.
   */
  listAssets(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssetsResponse) => void): Request<IoTSiteWise.Types.ListAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of the assets associated to a parent asset (assetId) by a given hierarchy (hierarchyId).
   */
  listAssociatedAssets(params: IoTSiteWise.Types.ListAssociatedAssetsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssociatedAssetsResponse) => void): Request<IoTSiteWise.Types.ListAssociatedAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of the assets associated to a parent asset (assetId) by a given hierarchy (hierarchyId).
   */
  listAssociatedAssets(callback?: (err: AWSError, data: IoTSiteWise.Types.ListAssociatedAssetsResponse) => void): Request<IoTSiteWise.Types.ListAssociatedAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of dashboards for an AWS IoT SiteWise Monitor project.
   */
  listDashboards(params: IoTSiteWise.Types.ListDashboardsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListDashboardsResponse) => void): Request<IoTSiteWise.Types.ListDashboardsResponse, AWSError>;
  /**
   * Retrieves a paginated list of dashboards for an AWS IoT SiteWise Monitor project.
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
   * Retrieves a paginated list of AWS IoT SiteWise Monitor portals.
   */
  listPortals(params: IoTSiteWise.Types.ListPortalsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListPortalsResponse) => void): Request<IoTSiteWise.Types.ListPortalsResponse, AWSError>;
  /**
   * Retrieves a paginated list of AWS IoT SiteWise Monitor portals.
   */
  listPortals(callback?: (err: AWSError, data: IoTSiteWise.Types.ListPortalsResponse) => void): Request<IoTSiteWise.Types.ListPortalsResponse, AWSError>;
  /**
   * Retrieves a paginated list of assets associated with an AWS IoT SiteWise Monitor project.
   */
  listProjectAssets(params: IoTSiteWise.Types.ListProjectAssetsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListProjectAssetsResponse) => void): Request<IoTSiteWise.Types.ListProjectAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of assets associated with an AWS IoT SiteWise Monitor project.
   */
  listProjectAssets(callback?: (err: AWSError, data: IoTSiteWise.Types.ListProjectAssetsResponse) => void): Request<IoTSiteWise.Types.ListProjectAssetsResponse, AWSError>;
  /**
   * Retrieves a paginated list of projects for an AWS IoT SiteWise Monitor portal.
   */
  listProjects(params: IoTSiteWise.Types.ListProjectsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListProjectsResponse) => void): Request<IoTSiteWise.Types.ListProjectsResponse, AWSError>;
  /**
   * Retrieves a paginated list of projects for an AWS IoT SiteWise Monitor portal.
   */
  listProjects(callback?: (err: AWSError, data: IoTSiteWise.Types.ListProjectsResponse) => void): Request<IoTSiteWise.Types.ListProjectsResponse, AWSError>;
  /**
   * Retrieves the list of tags for an AWS IoT SiteWise resource.
   */
  listTagsForResource(params: IoTSiteWise.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.ListTagsForResourceResponse) => void): Request<IoTSiteWise.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves the list of tags for an AWS IoT SiteWise resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: IoTSiteWise.Types.ListTagsForResourceResponse) => void): Request<IoTSiteWise.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Sets logging options for AWS IoT SiteWise.
   */
  putLoggingOptions(params: IoTSiteWise.Types.PutLoggingOptionsRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.PutLoggingOptionsResponse) => void): Request<IoTSiteWise.Types.PutLoggingOptionsResponse, AWSError>;
  /**
   * Sets logging options for AWS IoT SiteWise.
   */
  putLoggingOptions(callback?: (err: AWSError, data: IoTSiteWise.Types.PutLoggingOptionsResponse) => void): Request<IoTSiteWise.Types.PutLoggingOptionsResponse, AWSError>;
  /**
   * Adds tags to an AWS IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
   */
  tagResource(params: IoTSiteWise.Types.TagResourceRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.TagResourceResponse) => void): Request<IoTSiteWise.Types.TagResourceResponse, AWSError>;
  /**
   * Adds tags to an AWS IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
   */
  tagResource(callback?: (err: AWSError, data: IoTSiteWise.Types.TagResourceResponse) => void): Request<IoTSiteWise.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag from an AWS IoT SiteWise resource.
   */
  untagResource(params: IoTSiteWise.Types.UntagResourceRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UntagResourceResponse) => void): Request<IoTSiteWise.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag from an AWS IoT SiteWise resource.
   */
  untagResource(callback?: (err: AWSError, data: IoTSiteWise.Types.UntagResourceResponse) => void): Request<IoTSiteWise.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an existing access policy that specifies an AWS SSO user or group's access to an AWS IoT SiteWise Monitor portal or project resource.
   */
  updateAccessPolicy(params: IoTSiteWise.Types.UpdateAccessPolicyRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAccessPolicyResponse) => void): Request<IoTSiteWise.Types.UpdateAccessPolicyResponse, AWSError>;
  /**
   * Updates an existing access policy that specifies an AWS SSO user or group's access to an AWS IoT SiteWise Monitor portal or project resource.
   */
  updateAccessPolicy(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAccessPolicyResponse) => void): Request<IoTSiteWise.Types.UpdateAccessPolicyResponse, AWSError>;
  /**
   * Updates an asset's name. For more information, see Updating Assets and Models in the AWS IoT SiteWise User Guide.
   */
  updateAsset(params: IoTSiteWise.Types.UpdateAssetRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAssetResponse) => void): Request<IoTSiteWise.Types.UpdateAssetResponse, AWSError>;
  /**
   * Updates an asset's name. For more information, see Updating Assets and Models in the AWS IoT SiteWise User Guide.
   */
  updateAsset(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAssetResponse) => void): Request<IoTSiteWise.Types.UpdateAssetResponse, AWSError>;
  /**
   * Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating Assets and Models in the AWS IoT SiteWise User Guide.  This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see DescribeAssetModel. If you remove a property from an asset model or update a property's formula expression, AWS IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, AWS IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property. 
   */
  updateAssetModel(params: IoTSiteWise.Types.UpdateAssetModelRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAssetModelResponse) => void): Request<IoTSiteWise.Types.UpdateAssetModelResponse, AWSError>;
  /**
   * Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see Updating Assets and Models in the AWS IoT SiteWise User Guide.  This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see DescribeAssetModel. If you remove a property from an asset model or update a property's formula expression, AWS IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, AWS IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property. 
   */
  updateAssetModel(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateAssetModelResponse) => void): Request<IoTSiteWise.Types.UpdateAssetModelResponse, AWSError>;
  /**
   * Updates an asset property's alias and notification state.  This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see DescribeAssetProperty. 
   */
  updateAssetProperty(params: IoTSiteWise.Types.UpdateAssetPropertyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an asset property's alias and notification state.  This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see DescribeAssetProperty. 
   */
  updateAssetProperty(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an AWS IoT SiteWise Monitor dashboard.
   */
  updateDashboard(params: IoTSiteWise.Types.UpdateDashboardRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateDashboardResponse) => void): Request<IoTSiteWise.Types.UpdateDashboardResponse, AWSError>;
  /**
   * Updates an AWS IoT SiteWise Monitor dashboard.
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
   * Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway.
   */
  updateGatewayCapabilityConfiguration(params: IoTSiteWise.Types.UpdateGatewayCapabilityConfigurationRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateGatewayCapabilityConfigurationResponse) => void): Request<IoTSiteWise.Types.UpdateGatewayCapabilityConfigurationResponse, AWSError>;
  /**
   * Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use DescribeGateway.
   */
  updateGatewayCapabilityConfiguration(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateGatewayCapabilityConfigurationResponse) => void): Request<IoTSiteWise.Types.UpdateGatewayCapabilityConfigurationResponse, AWSError>;
  /**
   * Updates an AWS IoT SiteWise Monitor portal.
   */
  updatePortal(params: IoTSiteWise.Types.UpdatePortalRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdatePortalResponse) => void): Request<IoTSiteWise.Types.UpdatePortalResponse, AWSError>;
  /**
   * Updates an AWS IoT SiteWise Monitor portal.
   */
  updatePortal(callback?: (err: AWSError, data: IoTSiteWise.Types.UpdatePortalResponse) => void): Request<IoTSiteWise.Types.UpdatePortalResponse, AWSError>;
  /**
   * Updates an AWS IoT SiteWise Monitor project.
   */
  updateProject(params: IoTSiteWise.Types.UpdateProjectRequest, callback?: (err: AWSError, data: IoTSiteWise.Types.UpdateProjectResponse) => void): Request<IoTSiteWise.Types.UpdateProjectResponse, AWSError>;
  /**
   * Updates an AWS IoT SiteWise Monitor project.
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
     * The AWS SSO identity (a user or group).
     */
    identity: Identity;
    /**
     * The AWS IoT SiteWise Monitor resource (a portal or project).
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
  export type AmazonResourceName = string;
  export type AssetErrorCode = "INTERNAL_FAILURE"|string;
  export interface AssetErrorDetails {
    /**
     * The ID of the asset.
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
     * The hierarchy name provided in the CreateAssetModel or UpdateAssetModel API.
     */
    name: Name;
  }
  export type AssetIDs = ID[];
  export type AssetModelHierarchies = AssetModelHierarchy[];
  export interface AssetModelHierarchy {
    /**
     * The ID of the asset model hierarchy. This ID is a hierarchyId.
     */
    id?: ID;
    /**
     * The name of the asset model hierarchy that you specify by using the CreateAssetModel or UpdateAssetModel API.
     */
    name: Name;
    /**
     * The ID of the asset model. All assets in this hierarchy must be instances of the childAssetModelId asset model.
     */
    childAssetModelId: ID;
  }
  export interface AssetModelHierarchyDefinition {
    /**
     * The name of the asset model hierarchy definition (as specified in CreateAssetModel or UpdateAssetModel).
     */
    name: Name;
    /**
     * The ID of an asset model for this hierarchy.
     */
    childAssetModelId: ID;
  }
  export type AssetModelHierarchyDefinitions = AssetModelHierarchyDefinition[];
  export type AssetModelProperties = AssetModelProperty[];
  export interface AssetModelProperty {
    /**
     * The ID of the asset model property.
     */
    id?: ID;
    /**
     * The name of the asset model property.
     */
    name: Name;
    /**
     * The data type of the asset model property.
     */
    dataType: PropertyDataType;
    /**
     * The unit of the asset model property, such as Newtons or RPM.
     */
    unit?: PropertyUnit;
    /**
     * The property type (see PropertyType).
     */
    type: PropertyType;
  }
  export interface AssetModelPropertyDefinition {
    /**
     * The name of the property definition.
     */
    name: Name;
    /**
     * The data type of the property definition.
     */
    dataType: PropertyDataType;
    /**
     * The unit of the property definition, such as Newtons or RPM.
     */
    unit?: PropertyUnit;
    /**
     * The property definition type (see PropertyType). You can only specify one type in a property definition.
     */
    type: PropertyType;
  }
  export type AssetModelPropertyDefinitions = AssetModelPropertyDefinition[];
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
     * The ID of the asset model (used with AWS IoT SiteWise APIs).
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
  }
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
     * The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping Industrial Data Streams to Asset Properties in the AWS IoT SiteWise User Guide.
     */
    alias?: PropertyAlias;
    /**
     * The asset property's notification topic and state. For more information, see UpdateAssetProperty 
     */
    notification?: PropertyNotification;
    /**
     * The data type of the asset property.
     */
    dataType: PropertyDataType;
    /**
     * The unit (such as Newtons or RPM) of the asset property.
     */
    unit?: PropertyUnit;
  }
  export type AssetPropertyAlias = string;
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
     * The ID of the asset.
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
  }
  export interface AssociateAssetsRequest {
    /**
     * The ID of the parent asset.
     */
    assetId: ID;
    /**
     * The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see Asset Hierarchies in the AWS IoT SiteWise User Guide.
     */
    hierarchyId: ID;
    /**
     * The ID of the child asset to be associated.
     */
    childAssetId: ID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export type AssociatedAssetsSummaries = AssociatedAssetsSummary[];
  export interface AssociatedAssetsSummary {
    /**
     * The ID of the asset.
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
  }
  export interface Attribute {
    /**
     * The default value of the asset model property attribute. All assets that you create from the asset model contain this attribute value. You can update an attribute's value after you create an asset. For more information, see Updating Attribute Values in the AWS IoT SiteWise User Guide.
     */
    defaultValue?: DefaultValue;
  }
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
  export type CapabilityConfiguration = string;
  export type CapabilityNamespace = string;
  export type CapabilitySyncStatus = "IN_SYNC"|"OUT_OF_SYNC"|"SYNC_FAILED"|string;
  export type ClientToken = string;
  export interface CreateAccessPolicyRequest {
    /**
     * The identity for this access policy. Choose either a user or a group but not both.
     */
    accessPolicyIdentity: Identity;
    /**
     * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
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
     * A list of key-value pairs that contain metadata for the access policy. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.
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
     * The property definitions of the asset model. For more information, see Asset Properties in the AWS IoT SiteWise User Guide. You can specify up to 200 properties per asset model. For more information, see Quotas in the AWS IoT SiteWise User Guide.
     */
    assetModelProperties?: AssetModelPropertyDefinitions;
    /**
     * The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see Asset Hierarchies in the AWS IoT SiteWise User Guide. You can specify up to 10 hierarchies per asset model. For more information, see Quotas in the AWS IoT SiteWise User Guide.
     */
    assetModelHierarchies?: AssetModelHierarchyDefinitions;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * A list of key-value pairs that contain metadata for the asset model. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.
     */
    tags?: TagMap;
  }
  export interface CreateAssetModelResponse {
    /**
     * The ID of the asset model. You can use this ID when you call other AWS IoT SiteWise APIs.
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
     * A unique, friendly name for the asset.
     */
    assetName: Name;
    /**
     * The ID of the asset model from which to create the asset.
     */
    assetModelId: ID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * A list of key-value pairs that contain metadata for the asset. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.
     */
    tags?: TagMap;
  }
  export interface CreateAssetResponse {
    /**
     * The ID of the asset. This ID uniquely identifies the asset within AWS IoT SiteWise and can be used with other AWS IoT SiteWise APIs.
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
     * The dashboard definition specified in a JSON literal. For detailed information, see Creating Dashboards (CLI) in the AWS IoT SiteWise User Guide.
     */
    dashboardDefinition: DashboardDefinition;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
    /**
     * A list of key-value pairs that contain metadata for the dashboard. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.
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
     * A list of key-value pairs that contain metadata for the gateway. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.
     */
    tags?: TagMap;
  }
  export interface CreateGatewayResponse {
    /**
     * The ID of the gateway device. You can use this ID when you call other AWS IoT SiteWise APIs.
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
     * The AWS administrator's contact email address.
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
     * The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see Using service roles for AWS IoT SiteWise Monitor in the AWS IoT SiteWise User Guide.
     */
    roleArn: ARN;
    /**
     * A list of key-value pairs that contain metadata for the portal. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.
     */
    tags?: TagMap;
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
     * The public URL for the AWS IoT SiteWise Monitor portal.
     */
    portalStartUrl: Url;
    /**
     * The status of the portal, which contains a state (CREATING after successfully calling this operation) and any error message.
     */
    portalStatus: PortalStatus;
    /**
     * The associated AWS SSO application Id.
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
     * A list of key-value pairs that contain metadata for the project. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.
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
  export interface DeleteAssetModelRequest {
    /**
     * The ID of the asset model to delete.
     */
    assetModelId: ID;
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
     * The ID of the asset to delete.
     */
    assetId: ID;
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
     * The AWS SSO identity (user or group) to which this access policy applies.
     */
    accessPolicyIdentity: Identity;
    /**
     * The AWS IoT SiteWise Monitor resource (portal or project) to which this access policy provides access.
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
  export interface DescribeAssetModelRequest {
    /**
     * The ID of the asset model.
     */
    assetModelId: ID;
  }
  export interface DescribeAssetModelResponse {
    /**
     * The ID of the asset model.
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
     * The list of asset properties for the asset model.
     */
    assetModelProperties: AssetModelProperties;
    /**
     * A list of asset model hierarchies that each contain a childAssetModelId and a hierarchyId (named id). A hierarchy specifies allowed parent/child asset relationships for an asset model.
     */
    assetModelHierarchies: AssetModelHierarchies;
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
  }
  export interface DescribeAssetPropertyRequest {
    /**
     * The ID of the asset.
     */
    assetId: ID;
    /**
     * The ID of the asset property.
     */
    propertyId: ID;
  }
  export interface DescribeAssetPropertyResponse {
    /**
     * The ID of the asset.
     */
    assetId: ID;
    /**
     * The name of the asset.
     */
    assetName: Name;
    /**
     * The ID of the asset model.
     */
    assetModelId: ID;
    /**
     * The asset property's definition, alias, and notification state.
     */
    assetProperty: Property;
  }
  export interface DescribeAssetRequest {
    /**
     * The ID of the asset.
     */
    assetId: ID;
  }
  export interface DescribeAssetResponse {
    /**
     * The ID of the asset.
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
     * The list of asset properties for the asset.
     */
    assetProperties: AssetProperties;
    /**
     * A list of asset hierarchies that each contain a hierarchyId. A hierarchy specifies allowed parent/child asset relationships.
     */
    assetHierarchies: AssetHierarchies;
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
     * The dashboard's definition JSON literal. For detailed information, see Creating Dashboards (CLI) in the AWS IoT SiteWise User Guide.
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
  export interface DescribeGatewayCapabilityConfigurationRequest {
    /**
     * The ID of the gateway that defines the capability configuration.
     */
    gatewayId: ID;
    /**
     * The namespace of the capability configuration. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:version, where version is a number such as 1.
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
     * The JSON document that defines the gateway capability's configuration. For more information, see Configuring data sources (CLI) in the AWS IoT SiteWise User Guide.
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
     * The AWS SSO application generated client ID (used with AWS SSO APIs).
     */
    portalClientId: PortalClientId;
    /**
     * The public root URL for the AWS IoT AWS IoT SiteWise Monitor application portal.
     */
    portalStartUrl: Url;
    /**
     * The AWS administrator's contact email address.
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
     * The ARN of the service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see Using service roles for AWS IoT SiteWise Monitor in the AWS IoT SiteWise User Guide.
     */
    roleArn?: ARN;
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
  export type Description = string;
  export interface DisassociateAssetsRequest {
    /**
     * The ID of the parent asset from which to disassociate the child asset.
     */
    assetId: ID;
    /**
     * The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see Asset Hierarchies in the AWS IoT SiteWise User Guide.
     */
    hierarchyId: ID;
    /**
     * The ID of the child asset to disassociate.
     */
    childAssetId: ID;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export type Email = string;
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
  }
  export type ErrorMessage = string;
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
  export type GatewayCapabilitySummaries = GatewayCapabilitySummary[];
  export interface GatewayCapabilitySummary {
    /**
     * The namespace of the capability configuration. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:version, where version is a number such as 1.
     */
    capabilityNamespace: CapabilityNamespace;
    /**
     * The synchronization status of the capability configuration. The sync status can be one of the following:    IN_SYNC – The gateway is running the capability configuration.    OUT_OF_SYNC – The gateway hasn't received the capability configuration.    SYNC_FAILED – The gateway rejected the capability configuration.  
     */
    capabilitySyncStatus: CapabilitySyncStatus;
  }
  export interface GatewayPlatform {
    /**
     * A gateway that runs on AWS IoT Greengrass.
     */
    greengrass: Greengrass;
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
     * The ID of the asset.
     */
    assetId?: ID;
    /**
     * The ID of the asset property.
     */
    propertyId?: ID;
    /**
     * The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping Industrial Data Streams to Asset Properties in the AWS IoT SiteWise User Guide.
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
     * The chronological sorting order of the requested information.
     */
    timeOrdering?: TimeOrdering;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to be returned per paginated request.
     */
    maxResults?: MaxResults;
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
  export interface GetAssetPropertyValueHistoryRequest {
    /**
     * The ID of the asset.
     */
    assetId?: ID;
    /**
     * The ID of the asset property.
     */
    propertyId?: ID;
    /**
     * The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping Industrial Data Streams to Asset Properties in the AWS IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
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
     * The chronological sorting order of the requested information.
     */
    timeOrdering?: TimeOrdering;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to be returned per paginated request.
     */
    maxResults?: MaxResults;
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
     * The ID of the asset.
     */
    assetId?: ID;
    /**
     * The ID of the asset property.
     */
    propertyId?: ID;
    /**
     * The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping Industrial Data Streams to Asset Properties in the AWS IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
  }
  export interface GetAssetPropertyValueResponse {
    /**
     * The current asset property value.
     */
    propertyValue?: AssetPropertyValue;
  }
  export interface Greengrass {
    /**
     * The ARN of the Greengrass group. For more information about how to find a group's ARN, see ListGroups and GetGroup in the AWS IoT Greengrass API Reference.
     */
    groupArn: ARN;
  }
  export interface GroupIdentity {
    /**
     * The AWS SSO ID of the group.
     */
    id: IdentityId;
  }
  export type ID = string;
  export type IDs = ID[];
  export interface Identity {
    /**
     * A user identity.
     */
    user?: UserIdentity;
    /**
     * A group identity.
     */
    group?: GroupIdentity;
  }
  export type IdentityId = string;
  export type IdentityType = "USER"|"GROUP"|string;
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
  export type Interval = string;
  export interface ListAccessPoliciesRequest {
    /**
     * The type of identity (user or group). This parameter is required if you specify identityId.
     */
    identityType?: IdentityType;
    /**
     * The ID of the identity. This parameter is required if you specify identityType.
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
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to be returned per paginated request.
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
  export interface ListAssetModelsRequest {
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to be returned per paginated request.
     */
    maxResults?: MaxResults;
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
  export type ListAssetsFilter = "ALL"|"TOP_LEVEL"|string;
  export interface ListAssetsRequest {
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to be returned per paginated request.
     */
    maxResults?: MaxResults;
    /**
     * The ID of the asset model by which to filter the list of assets. This parameter is required if you choose ALL for filter.
     */
    assetModelId?: ID;
    /**
     * The filter for the requested list of assets. Choose one of the following options. Defaults to ALL.    ALL – The list includes all assets for a given asset model ID. The assetModelId parameter is required if you filter by ALL.    TOP_LEVEL – The list includes only top-level assets in the asset hierarchy tree.  
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
     * The ID of the parent asset.
     */
    assetId: ID;
    /**
     * The hierarchy ID (of the parent asset model) whose associated assets are returned. To find a hierarchy ID, use the DescribeAsset or DescribeAssetModel actions. For more information, see Asset Hierarchies in the AWS IoT SiteWise User Guide.
     */
    hierarchyId: ID;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to be returned per paginated request.
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
     * The maximum number of results to be returned per paginated request.
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
     * The maximum number of results to be returned per paginated request.
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
     * The maximum number of results to be returned per paginated request.
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
     * The maximum number of results to be returned per paginated request.
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
     * The maximum number of results to be returned per paginated request.
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
     * The list of key-value pairs that contain metadata for the resource. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.
     */
    tags?: TagMap;
  }
  export type LoggingLevel = "ERROR"|"INFO"|"OFF"|string;
  export interface LoggingOptions {
    /**
     * The AWS IoT SiteWise logging verbosity level.
     */
    level: LoggingLevel;
  }
  export type Macro = string;
  export type MaxResults = number;
  export interface Measurement {
  }
  export interface Metric {
    /**
     * The mathematical expression that defines the metric aggregation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.  For more information, see Quotas in the AWS IoT SiteWise User Guide.
     */
    expression: Expression;
    /**
     * The list of variables used in the expression.
     */
    variables: ExpressionVariables;
    /**
     * The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression. AWS IoT SiteWise computes one data point per window.
     */
    window: MetricWindow;
  }
  export interface MetricWindow {
    /**
     * The tumbling time interval window.
     */
    tumbling?: TumblingWindow;
  }
  export type MonitorErrorCode = "INTERNAL_FAILURE"|string;
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
  export type Name = string;
  export type NextToken = string;
  export type OffsetInNanos = number;
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
     * The public root URL for the AWS IoT AWS IoT SiteWise Monitor application portal.
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
     * The ARN of the service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see Using service roles for AWS IoT SiteWise Monitor in the AWS IoT SiteWise User Guide.
     */
    roleArn?: ARN;
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
     * The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping Industrial Data Streams to Asset Properties in the AWS IoT SiteWise User Guide.
     */
    alias?: PropertyAlias;
    /**
     * The asset property's notification topic and state. For more information, see UpdateAssetProperty 
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
  }
  export type PropertyAlias = string;
  export type PropertyDataType = "STRING"|"INTEGER"|"DOUBLE"|"BOOLEAN"|string;
  export interface PropertyNotification {
    /**
     * The MQTT topic to which AWS IoT SiteWise publishes property value update notifications.
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
     * The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping Industrial Data Streams to Asset Properties in the AWS IoT SiteWise User Guide.
     */
    propertyAlias?: AssetPropertyAlias;
    /**
     * The list of property values to upload. You can specify up to 10 propertyValues array elements. 
     */
    propertyValues: AssetPropertyValues;
  }
  export interface PutLoggingOptionsRequest {
    /**
     * The logging options to set.
     */
    loggingOptions: LoggingOptions;
  }
  export interface PutLoggingOptionsResponse {
  }
  export type Qualities = Quality[];
  export type Quality = "GOOD"|"BAD"|"UNCERTAIN"|string;
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
  export type SSOApplicationId = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN of the resource to tag.
     */
    resourceArn: AmazonResourceName;
    /**
     * A list of key-value pairs that contain metadata for the resource. For more information, see Tagging your AWS IoT SiteWise resources in the AWS IoT SiteWise User Guide.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
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
  export type Timestamp = Date;
  export type Timestamps = TimeInNanos[];
  export interface Transform {
    /**
     * The mathematical expression that defines the transformation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.  For more information, see Quotas in the AWS IoT SiteWise User Guide.
     */
    expression: Expression;
    /**
     * The list of variables used in the expression.
     */
    variables: ExpressionVariables;
  }
  export interface TumblingWindow {
    /**
     * The time interval for the tumbling window. Note that w represents weeks, d represents days, h represents hours, and m represents minutes. AWS IoT SiteWise computes the 1w interval the end of Sunday at midnight each week (UTC), the 1d interval at the end of each day at midnight (UTC), the 1h interval at the end of each hour, and so on.  When AWS IoT SiteWise aggregates data points for metric computations, the start of each interval is exclusive and the end of each interval is inclusive. AWS IoT SiteWise places the computed data point at the end of the interval.
     */
    interval: Interval;
  }
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
     * The identity for this access policy. Choose either a user or a group but not both.
     */
    accessPolicyIdentity: Identity;
    /**
     * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
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
  export interface UpdateAssetModelRequest {
    /**
     * The ID of the asset model to update.
     */
    assetModelId: ID;
    /**
     * A unique, friendly name for the asset model.
     */
    assetModelName: Name;
    /**
     * A description for the asset model.
     */
    assetModelDescription?: Description;
    /**
     * The updated property definitions of the asset model. For more information, see Asset Properties in the AWS IoT SiteWise User Guide. You can specify up to 200 properties per asset model. For more information, see Quotas in the AWS IoT SiteWise User Guide.
     */
    assetModelProperties?: AssetModelProperties;
    /**
     * The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see Asset Hierarchies in the AWS IoT SiteWise User Guide. You can specify up to 10 hierarchies per asset model. For more information, see Quotas in the AWS IoT SiteWise User Guide.
     */
    assetModelHierarchies?: AssetModelHierarchies;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface UpdateAssetModelResponse {
    /**
     * The status of the asset model, which contains a state (UPDATING after successfully calling this operation) and any error message.
     */
    assetModelStatus: AssetModelStatus;
  }
  export interface UpdateAssetPropertyRequest {
    /**
     * The ID of the asset to be updated.
     */
    assetId: ID;
    /**
     * The ID of the asset property to be updated.
     */
    propertyId: ID;
    /**
     * The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see Mapping Industrial Data Streams to Asset Properties in the AWS IoT SiteWise User Guide. If you omit this parameter, the alias is removed from the property.
     */
    propertyAlias?: PropertyAlias;
    /**
     * The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see Interacting with Other Services in the AWS IoT SiteWise User Guide. If you omit this parameter, the notification state is set to DISABLED.
     */
    propertyNotificationState?: PropertyNotificationState;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
  }
  export interface UpdateAssetRequest {
    /**
     * The ID of the asset to update.
     */
    assetId: ID;
    /**
     * A unique, friendly name for the asset.
     */
    assetName: Name;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
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
     * The new dashboard definition, as specified in a JSON literal. For detailed information, see Creating Dashboards (CLI) in the AWS IoT SiteWise User Guide.
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
     * The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace iotsitewise:opcuacollector:version, where version is a number such as 1.
     */
    capabilityNamespace: CapabilityNamespace;
    /**
     * The JSON document that defines the configuration for the gateway capability. For more information, see Configuring data sources (CLI) in the AWS IoT SiteWise User Guide.
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
     * The AWS administrator's contact email address.
     */
    portalContactEmail: Email;
    portalLogoImage?: Image;
    /**
     * The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see Using service roles for AWS IoT SiteWise Monitor in the AWS IoT SiteWise User Guide.
     */
    roleArn: ARN;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: ClientToken;
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
     * The AWS SSO ID of the user.
     */
    id: IdentityId;
  }
  export type VariableName = string;
  export interface VariableValue {
    /**
     * The ID of the property to use as the variable. You can use the property name if it's from the same asset model.
     */
    propertyId: Macro;
    /**
     * The ID of the hierarchy to query for the property ID. You can use the hierarchy's name instead of the hierarchy's ID. You use a hierarchy ID instead of a model ID because you can have several hierarchies using the same model and therefore the same propertyId. For example, you might have separately grouped assets that come from the same asset model. For more information, see Asset Hierarchies in the AWS IoT SiteWise User Guide.
     */
    hierarchyId?: Macro;
  }
  export interface Variant {
    /**
     * Asset property data of type string (sequence of characters).
     */
    stringValue?: PropertyValueStringValue;
    /**
     * Asset property data of type integer (whole number).
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
