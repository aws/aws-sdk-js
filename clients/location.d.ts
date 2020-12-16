import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Location extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Location.Types.ClientConfiguration)
  config: Config & Location.Types.ClientConfiguration;
  /**
   * Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection.
   */
  associateTrackerConsumer(params: Location.Types.AssociateTrackerConsumerRequest, callback?: (err: AWSError, data: Location.Types.AssociateTrackerConsumerResponse) => void): Request<Location.Types.AssociateTrackerConsumerResponse, AWSError>;
  /**
   * Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection.
   */
  associateTrackerConsumer(callback?: (err: AWSError, data: Location.Types.AssociateTrackerConsumerResponse) => void): Request<Location.Types.AssociateTrackerConsumerResponse, AWSError>;
  /**
   * Deletes a batch of geofences from a geofence collection.  This action deletes the resource permanently. You can't undo this action. 
   */
  batchDeleteGeofence(params: Location.Types.BatchDeleteGeofenceRequest, callback?: (err: AWSError, data: Location.Types.BatchDeleteGeofenceResponse) => void): Request<Location.Types.BatchDeleteGeofenceResponse, AWSError>;
  /**
   * Deletes a batch of geofences from a geofence collection.  This action deletes the resource permanently. You can't undo this action. 
   */
  batchDeleteGeofence(callback?: (err: AWSError, data: Location.Types.BatchDeleteGeofenceResponse) => void): Request<Location.Types.BatchDeleteGeofenceResponse, AWSError>;
  /**
   * Used in geofence monitoring. Evaluates device positions against the position of geofences in a given geofence collection.
   */
  batchEvaluateGeofences(params: Location.Types.BatchEvaluateGeofencesRequest, callback?: (err: AWSError, data: Location.Types.BatchEvaluateGeofencesResponse) => void): Request<Location.Types.BatchEvaluateGeofencesResponse, AWSError>;
  /**
   * Used in geofence monitoring. Evaluates device positions against the position of geofences in a given geofence collection.
   */
  batchEvaluateGeofences(callback?: (err: AWSError, data: Location.Types.BatchEvaluateGeofencesResponse) => void): Request<Location.Types.BatchEvaluateGeofencesResponse, AWSError>;
  /**
   * A batch request to retrieve device positions.  The response will return the device positions from the last 24 hours. 
   */
  batchGetDevicePosition(params: Location.Types.BatchGetDevicePositionRequest, callback?: (err: AWSError, data: Location.Types.BatchGetDevicePositionResponse) => void): Request<Location.Types.BatchGetDevicePositionResponse, AWSError>;
  /**
   * A batch request to retrieve device positions.  The response will return the device positions from the last 24 hours. 
   */
  batchGetDevicePosition(callback?: (err: AWSError, data: Location.Types.BatchGetDevicePositionResponse) => void): Request<Location.Types.BatchGetDevicePositionResponse, AWSError>;
  /**
   * A batch request for storing geofences into a given geofence collection.
   */
  batchPutGeofence(params: Location.Types.BatchPutGeofenceRequest, callback?: (err: AWSError, data: Location.Types.BatchPutGeofenceResponse) => void): Request<Location.Types.BatchPutGeofenceResponse, AWSError>;
  /**
   * A batch request for storing geofences into a given geofence collection.
   */
  batchPutGeofence(callback?: (err: AWSError, data: Location.Types.BatchPutGeofenceResponse) => void): Request<Location.Types.BatchPutGeofenceResponse, AWSError>;
  /**
   * Uploads a position update for one or more devices to a tracker resource. The data is used for API queries requesting the device position and position history.  Limitation — Location data is sampled at a fixed rate of 1 position per 30 second interval, and retained for 1 year before it is deleted. 
   */
  batchUpdateDevicePosition(params: Location.Types.BatchUpdateDevicePositionRequest, callback?: (err: AWSError, data: Location.Types.BatchUpdateDevicePositionResponse) => void): Request<Location.Types.BatchUpdateDevicePositionResponse, AWSError>;
  /**
   * Uploads a position update for one or more devices to a tracker resource. The data is used for API queries requesting the device position and position history.  Limitation — Location data is sampled at a fixed rate of 1 position per 30 second interval, and retained for 1 year before it is deleted. 
   */
  batchUpdateDevicePosition(callback?: (err: AWSError, data: Location.Types.BatchUpdateDevicePositionResponse) => void): Request<Location.Types.BatchUpdateDevicePositionResponse, AWSError>;
  /**
   * Creates a geofence collection, which manages and stores geofences.
   */
  createGeofenceCollection(params: Location.Types.CreateGeofenceCollectionRequest, callback?: (err: AWSError, data: Location.Types.CreateGeofenceCollectionResponse) => void): Request<Location.Types.CreateGeofenceCollectionResponse, AWSError>;
  /**
   * Creates a geofence collection, which manages and stores geofences.
   */
  createGeofenceCollection(callback?: (err: AWSError, data: Location.Types.CreateGeofenceCollectionResponse) => void): Request<Location.Types.CreateGeofenceCollectionResponse, AWSError>;
  /**
   * Creates a map resource in your AWS account, which provides map tiles of different styles sourced from global location data providers.  By using Maps, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using. For more information, see the AWS Service Terms for Amazon Location Service.  
   */
  createMap(params: Location.Types.CreateMapRequest, callback?: (err: AWSError, data: Location.Types.CreateMapResponse) => void): Request<Location.Types.CreateMapResponse, AWSError>;
  /**
   * Creates a map resource in your AWS account, which provides map tiles of different styles sourced from global location data providers.  By using Maps, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using. For more information, see the AWS Service Terms for Amazon Location Service.  
   */
  createMap(callback?: (err: AWSError, data: Location.Types.CreateMapResponse) => void): Request<Location.Types.CreateMapResponse, AWSError>;
  /**
   * Creates a Place index resource in your AWS account, which supports Places functions with geospatial data sourced from your chosen data provider.  By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using.  Because of licensing limitations, you may not use HERE to store results for locations in Japan. For more information, see the AWS Service Terms for Amazon Location Service. 
   */
  createPlaceIndex(params: Location.Types.CreatePlaceIndexRequest, callback?: (err: AWSError, data: Location.Types.CreatePlaceIndexResponse) => void): Request<Location.Types.CreatePlaceIndexResponse, AWSError>;
  /**
   * Creates a Place index resource in your AWS account, which supports Places functions with geospatial data sourced from your chosen data provider.  By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using.  Because of licensing limitations, you may not use HERE to store results for locations in Japan. For more information, see the AWS Service Terms for Amazon Location Service. 
   */
  createPlaceIndex(callback?: (err: AWSError, data: Location.Types.CreatePlaceIndexResponse) => void): Request<Location.Types.CreatePlaceIndexResponse, AWSError>;
  /**
   * Creates a tracker resource in your AWS account, which lets you retrieve current and historical location of devices.
   */
  createTracker(params: Location.Types.CreateTrackerRequest, callback?: (err: AWSError, data: Location.Types.CreateTrackerResponse) => void): Request<Location.Types.CreateTrackerResponse, AWSError>;
  /**
   * Creates a tracker resource in your AWS account, which lets you retrieve current and historical location of devices.
   */
  createTracker(callback?: (err: AWSError, data: Location.Types.CreateTrackerResponse) => void): Request<Location.Types.CreateTrackerResponse, AWSError>;
  /**
   * Deletes a geofence collection from your AWS account.  This action deletes the resource permanently. You can't undo this action. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored. 
   */
  deleteGeofenceCollection(params: Location.Types.DeleteGeofenceCollectionRequest, callback?: (err: AWSError, data: Location.Types.DeleteGeofenceCollectionResponse) => void): Request<Location.Types.DeleteGeofenceCollectionResponse, AWSError>;
  /**
   * Deletes a geofence collection from your AWS account.  This action deletes the resource permanently. You can't undo this action. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored. 
   */
  deleteGeofenceCollection(callback?: (err: AWSError, data: Location.Types.DeleteGeofenceCollectionResponse) => void): Request<Location.Types.DeleteGeofenceCollectionResponse, AWSError>;
  /**
   * Deletes a map resource from your AWS account.  This action deletes the resource permanently. You cannot undo this action. If the map is being used in an application, the map may not render. 
   */
  deleteMap(params: Location.Types.DeleteMapRequest, callback?: (err: AWSError, data: Location.Types.DeleteMapResponse) => void): Request<Location.Types.DeleteMapResponse, AWSError>;
  /**
   * Deletes a map resource from your AWS account.  This action deletes the resource permanently. You cannot undo this action. If the map is being used in an application, the map may not render. 
   */
  deleteMap(callback?: (err: AWSError, data: Location.Types.DeleteMapResponse) => void): Request<Location.Types.DeleteMapResponse, AWSError>;
  /**
   * Deletes a Place index resource from your AWS account.  This action deletes the resource permanently. You cannot undo this action. 
   */
  deletePlaceIndex(params: Location.Types.DeletePlaceIndexRequest, callback?: (err: AWSError, data: Location.Types.DeletePlaceIndexResponse) => void): Request<Location.Types.DeletePlaceIndexResponse, AWSError>;
  /**
   * Deletes a Place index resource from your AWS account.  This action deletes the resource permanently. You cannot undo this action. 
   */
  deletePlaceIndex(callback?: (err: AWSError, data: Location.Types.DeletePlaceIndexResponse) => void): Request<Location.Types.DeletePlaceIndexResponse, AWSError>;
  /**
   * Deletes a tracker resource from your AWS account.  This action deletes the resource permanently. You can't undo this action. If the tracker resource is in use, you may encounter an error. Make sure that the target resource is not a dependency for your applications. 
   */
  deleteTracker(params: Location.Types.DeleteTrackerRequest, callback?: (err: AWSError, data: Location.Types.DeleteTrackerResponse) => void): Request<Location.Types.DeleteTrackerResponse, AWSError>;
  /**
   * Deletes a tracker resource from your AWS account.  This action deletes the resource permanently. You can't undo this action. If the tracker resource is in use, you may encounter an error. Make sure that the target resource is not a dependency for your applications. 
   */
  deleteTracker(callback?: (err: AWSError, data: Location.Types.DeleteTrackerResponse) => void): Request<Location.Types.DeleteTrackerResponse, AWSError>;
  /**
   * Retrieves the geofence collection details.
   */
  describeGeofenceCollection(params: Location.Types.DescribeGeofenceCollectionRequest, callback?: (err: AWSError, data: Location.Types.DescribeGeofenceCollectionResponse) => void): Request<Location.Types.DescribeGeofenceCollectionResponse, AWSError>;
  /**
   * Retrieves the geofence collection details.
   */
  describeGeofenceCollection(callback?: (err: AWSError, data: Location.Types.DescribeGeofenceCollectionResponse) => void): Request<Location.Types.DescribeGeofenceCollectionResponse, AWSError>;
  /**
   * Retrieves the map resource details.
   */
  describeMap(params: Location.Types.DescribeMapRequest, callback?: (err: AWSError, data: Location.Types.DescribeMapResponse) => void): Request<Location.Types.DescribeMapResponse, AWSError>;
  /**
   * Retrieves the map resource details.
   */
  describeMap(callback?: (err: AWSError, data: Location.Types.DescribeMapResponse) => void): Request<Location.Types.DescribeMapResponse, AWSError>;
  /**
   * Retrieves the Place index resource details.
   */
  describePlaceIndex(params: Location.Types.DescribePlaceIndexRequest, callback?: (err: AWSError, data: Location.Types.DescribePlaceIndexResponse) => void): Request<Location.Types.DescribePlaceIndexResponse, AWSError>;
  /**
   * Retrieves the Place index resource details.
   */
  describePlaceIndex(callback?: (err: AWSError, data: Location.Types.DescribePlaceIndexResponse) => void): Request<Location.Types.DescribePlaceIndexResponse, AWSError>;
  /**
   * Retrieves the tracker resource details.
   */
  describeTracker(params: Location.Types.DescribeTrackerRequest, callback?: (err: AWSError, data: Location.Types.DescribeTrackerResponse) => void): Request<Location.Types.DescribeTrackerResponse, AWSError>;
  /**
   * Retrieves the tracker resource details.
   */
  describeTracker(callback?: (err: AWSError, data: Location.Types.DescribeTrackerResponse) => void): Request<Location.Types.DescribeTrackerResponse, AWSError>;
  /**
   * Removes the association bewteen a tracker resource and a geofence collection.  Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences. 
   */
  disassociateTrackerConsumer(params: Location.Types.DisassociateTrackerConsumerRequest, callback?: (err: AWSError, data: Location.Types.DisassociateTrackerConsumerResponse) => void): Request<Location.Types.DisassociateTrackerConsumerResponse, AWSError>;
  /**
   * Removes the association bewteen a tracker resource and a geofence collection.  Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences. 
   */
  disassociateTrackerConsumer(callback?: (err: AWSError, data: Location.Types.DisassociateTrackerConsumerResponse) => void): Request<Location.Types.DisassociateTrackerConsumerResponse, AWSError>;
  /**
   * Retrieves the latest device position.  Limitation — Device positions are deleted after one year. 
   */
  getDevicePosition(params: Location.Types.GetDevicePositionRequest, callback?: (err: AWSError, data: Location.Types.GetDevicePositionResponse) => void): Request<Location.Types.GetDevicePositionResponse, AWSError>;
  /**
   * Retrieves the latest device position.  Limitation — Device positions are deleted after one year. 
   */
  getDevicePosition(callback?: (err: AWSError, data: Location.Types.GetDevicePositionResponse) => void): Request<Location.Types.GetDevicePositionResponse, AWSError>;
  /**
   * Retrieves the device position history from a tracker resource within a specified range of time.  Limitation — Device positions are deleted after one year. 
   */
  getDevicePositionHistory(params: Location.Types.GetDevicePositionHistoryRequest, callback?: (err: AWSError, data: Location.Types.GetDevicePositionHistoryResponse) => void): Request<Location.Types.GetDevicePositionHistoryResponse, AWSError>;
  /**
   * Retrieves the device position history from a tracker resource within a specified range of time.  Limitation — Device positions are deleted after one year. 
   */
  getDevicePositionHistory(callback?: (err: AWSError, data: Location.Types.GetDevicePositionHistoryResponse) => void): Request<Location.Types.GetDevicePositionHistoryResponse, AWSError>;
  /**
   * Retrieves the geofence details from a geofence collection.
   */
  getGeofence(params: Location.Types.GetGeofenceRequest, callback?: (err: AWSError, data: Location.Types.GetGeofenceResponse) => void): Request<Location.Types.GetGeofenceResponse, AWSError>;
  /**
   * Retrieves the geofence details from a geofence collection.
   */
  getGeofence(callback?: (err: AWSError, data: Location.Types.GetGeofenceResponse) => void): Request<Location.Types.GetGeofenceResponse, AWSError>;
  /**
   * Retrieves glyphs used to display labels on a map.
   */
  getMapGlyphs(params: Location.Types.GetMapGlyphsRequest, callback?: (err: AWSError, data: Location.Types.GetMapGlyphsResponse) => void): Request<Location.Types.GetMapGlyphsResponse, AWSError>;
  /**
   * Retrieves glyphs used to display labels on a map.
   */
  getMapGlyphs(callback?: (err: AWSError, data: Location.Types.GetMapGlyphsResponse) => void): Request<Location.Types.GetMapGlyphsResponse, AWSError>;
  /**
   * Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
   */
  getMapSprites(params: Location.Types.GetMapSpritesRequest, callback?: (err: AWSError, data: Location.Types.GetMapSpritesResponse) => void): Request<Location.Types.GetMapSpritesResponse, AWSError>;
  /**
   * Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
   */
  getMapSprites(callback?: (err: AWSError, data: Location.Types.GetMapSpritesResponse) => void): Request<Location.Types.GetMapSpritesResponse, AWSError>;
  /**
   * Retrieves the map style descriptor from a map resource.  The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.
   */
  getMapStyleDescriptor(params: Location.Types.GetMapStyleDescriptorRequest, callback?: (err: AWSError, data: Location.Types.GetMapStyleDescriptorResponse) => void): Request<Location.Types.GetMapStyleDescriptorResponse, AWSError>;
  /**
   * Retrieves the map style descriptor from a map resource.  The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.
   */
  getMapStyleDescriptor(callback?: (err: AWSError, data: Location.Types.GetMapStyleDescriptorResponse) => void): Request<Location.Types.GetMapStyleDescriptorResponse, AWSError>;
  /**
   * Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. They are addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level.  The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).
   */
  getMapTile(params: Location.Types.GetMapTileRequest, callback?: (err: AWSError, data: Location.Types.GetMapTileResponse) => void): Request<Location.Types.GetMapTileResponse, AWSError>;
  /**
   * Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. They are addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level.  The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).
   */
  getMapTile(callback?: (err: AWSError, data: Location.Types.GetMapTileResponse) => void): Request<Location.Types.GetMapTileResponse, AWSError>;
  /**
   * Lists geofence collections in your AWS account.
   */
  listGeofenceCollections(params: Location.Types.ListGeofenceCollectionsRequest, callback?: (err: AWSError, data: Location.Types.ListGeofenceCollectionsResponse) => void): Request<Location.Types.ListGeofenceCollectionsResponse, AWSError>;
  /**
   * Lists geofence collections in your AWS account.
   */
  listGeofenceCollections(callback?: (err: AWSError, data: Location.Types.ListGeofenceCollectionsResponse) => void): Request<Location.Types.ListGeofenceCollectionsResponse, AWSError>;
  /**
   * Lists geofences stored in a given geofence collection.
   */
  listGeofences(params: Location.Types.ListGeofencesRequest, callback?: (err: AWSError, data: Location.Types.ListGeofencesResponse) => void): Request<Location.Types.ListGeofencesResponse, AWSError>;
  /**
   * Lists geofences stored in a given geofence collection.
   */
  listGeofences(callback?: (err: AWSError, data: Location.Types.ListGeofencesResponse) => void): Request<Location.Types.ListGeofencesResponse, AWSError>;
  /**
   * Lists map resources in your AWS account.
   */
  listMaps(params: Location.Types.ListMapsRequest, callback?: (err: AWSError, data: Location.Types.ListMapsResponse) => void): Request<Location.Types.ListMapsResponse, AWSError>;
  /**
   * Lists map resources in your AWS account.
   */
  listMaps(callback?: (err: AWSError, data: Location.Types.ListMapsResponse) => void): Request<Location.Types.ListMapsResponse, AWSError>;
  /**
   * Lists Place index resources in your AWS account.
   */
  listPlaceIndexes(params: Location.Types.ListPlaceIndexesRequest, callback?: (err: AWSError, data: Location.Types.ListPlaceIndexesResponse) => void): Request<Location.Types.ListPlaceIndexesResponse, AWSError>;
  /**
   * Lists Place index resources in your AWS account.
   */
  listPlaceIndexes(callback?: (err: AWSError, data: Location.Types.ListPlaceIndexesResponse) => void): Request<Location.Types.ListPlaceIndexesResponse, AWSError>;
  /**
   * Lists geofence collections currently associated to the given tracker resource.
   */
  listTrackerConsumers(params: Location.Types.ListTrackerConsumersRequest, callback?: (err: AWSError, data: Location.Types.ListTrackerConsumersResponse) => void): Request<Location.Types.ListTrackerConsumersResponse, AWSError>;
  /**
   * Lists geofence collections currently associated to the given tracker resource.
   */
  listTrackerConsumers(callback?: (err: AWSError, data: Location.Types.ListTrackerConsumersResponse) => void): Request<Location.Types.ListTrackerConsumersResponse, AWSError>;
  /**
   * Lists tracker resources in your AWS account.
   */
  listTrackers(params: Location.Types.ListTrackersRequest, callback?: (err: AWSError, data: Location.Types.ListTrackersResponse) => void): Request<Location.Types.ListTrackersResponse, AWSError>;
  /**
   * Lists tracker resources in your AWS account.
   */
  listTrackers(callback?: (err: AWSError, data: Location.Types.ListTrackersResponse) => void): Request<Location.Types.ListTrackersResponse, AWSError>;
  /**
   * Stores a geofence to a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
   */
  putGeofence(params: Location.Types.PutGeofenceRequest, callback?: (err: AWSError, data: Location.Types.PutGeofenceResponse) => void): Request<Location.Types.PutGeofenceResponse, AWSError>;
  /**
   * Stores a geofence to a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
   */
  putGeofence(callback?: (err: AWSError, data: Location.Types.PutGeofenceResponse) => void): Request<Location.Types.PutGeofenceResponse, AWSError>;
  /**
   * Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.  By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using.  Because of licensing limitations, you may not use HERE to store results for locations in Japan. For more information, see the AWS Service Terms for Amazon Location Service. 
   */
  searchPlaceIndexForPosition(params: Location.Types.SearchPlaceIndexForPositionRequest, callback?: (err: AWSError, data: Location.Types.SearchPlaceIndexForPositionResponse) => void): Request<Location.Types.SearchPlaceIndexForPositionResponse, AWSError>;
  /**
   * Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.  By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using.  Because of licensing limitations, you may not use HERE to store results for locations in Japan. For more information, see the AWS Service Terms for Amazon Location Service. 
   */
  searchPlaceIndexForPosition(callback?: (err: AWSError, data: Location.Types.SearchPlaceIndexForPositionResponse) => void): Request<Location.Types.SearchPlaceIndexForPositionResponse, AWSError>;
  /**
   * Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest.  Includes the option to apply additional parameters to narrow your list of results.  You can search for places near a given position using BiasPosition, or filter results within a bounding box using FilterBBox. Providing both parameters simultaneously returns an error.   By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using.  Also, when using HERE as your data provider, you may not (a) use HERE Places for Asset Management, or (b) select the Storage option for the IntendedUse parameter when requesting Places in Japan. For more information, see the AWS Service Terms for Amazon Location Service. 
   */
  searchPlaceIndexForText(params: Location.Types.SearchPlaceIndexForTextRequest, callback?: (err: AWSError, data: Location.Types.SearchPlaceIndexForTextResponse) => void): Request<Location.Types.SearchPlaceIndexForTextResponse, AWSError>;
  /**
   * Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest.  Includes the option to apply additional parameters to narrow your list of results.  You can search for places near a given position using BiasPosition, or filter results within a bounding box using FilterBBox. Providing both parameters simultaneously returns an error.   By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using.  Also, when using HERE as your data provider, you may not (a) use HERE Places for Asset Management, or (b) select the Storage option for the IntendedUse parameter when requesting Places in Japan. For more information, see the AWS Service Terms for Amazon Location Service. 
   */
  searchPlaceIndexForText(callback?: (err: AWSError, data: Location.Types.SearchPlaceIndexForTextResponse) => void): Request<Location.Types.SearchPlaceIndexForTextResponse, AWSError>;
}
declare namespace Location {
  export type Arn = string;
  export type ArnList = Arn[];
  export interface AssociateTrackerConsumerRequest {
    /**
     * The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS.    Format example: arn:partition:service:region:account-id:resource-type:resource-id   
     */
    ConsumerArn: Arn;
    /**
     * The name of the tracker resource to be associated with a geofence collection.
     */
    TrackerName: ResourceName;
  }
  export interface AssociateTrackerConsumerResponse {
  }
  export interface BatchDeleteGeofenceError {
    /**
     * Contains details associated to the batch error.
     */
    Error: BatchItemError;
    /**
     * The geofence associated with the error message.
     */
    GeofenceId: Id;
  }
  export type BatchDeleteGeofenceErrorList = BatchDeleteGeofenceError[];
  export interface BatchDeleteGeofenceRequest {
    /**
     * The geofence collection storing the geofences to be deleted.
     */
    CollectionName: ResourceName;
    /**
     * The batch of geofences to be deleted.
     */
    GeofenceIds: BatchDeleteGeofenceRequestGeofenceIdsList;
  }
  export type BatchDeleteGeofenceRequestGeofenceIdsList = Id[];
  export interface BatchDeleteGeofenceResponse {
    /**
     * Contains error details for each geofence that failed to delete.
     */
    Errors: BatchDeleteGeofenceErrorList;
  }
  export interface BatchEvaluateGeofencesError {
    /**
     * The device associated with the position evaluation error.
     */
    DeviceId: Id;
    /**
     * Contains details associated to the batch error.
     */
    Error: BatchItemError;
    /**
     * Specifies a timestamp for when the error occurred in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    SampleTime: Timestamp;
  }
  export type BatchEvaluateGeofencesErrorList = BatchEvaluateGeofencesError[];
  export interface BatchEvaluateGeofencesRequest {
    /**
     * The geofence collection used in evaluating the position of devices against its geofences.
     */
    CollectionName: ResourceName;
    /**
     * Contains device details for each device to be evaluated against the given geofence collection.
     */
    DevicePositionUpdates: BatchEvaluateGeofencesRequestDevicePositionUpdatesList;
  }
  export type BatchEvaluateGeofencesRequestDevicePositionUpdatesList = DevicePositionUpdate[];
  export interface BatchEvaluateGeofencesResponse {
    /**
     * Contains error details for each device that failed to evaluate its position against the given geofence collection.
     */
    Errors: BatchEvaluateGeofencesErrorList;
  }
  export interface BatchGetDevicePositionError {
    /**
     * The ID of the device that didn't return a position.
     */
    DeviceId: Id;
    /**
     * Contains details related to the error code.
     */
    Error: BatchItemError;
  }
  export type BatchGetDevicePositionErrorList = BatchGetDevicePositionError[];
  export interface BatchGetDevicePositionRequest {
    /**
     * Devices whose position you want to retrieve.   For example, for two devices: device-ids=DeviceId1&amp;device-ids=DeviceId2   
     */
    DeviceIds: BatchGetDevicePositionRequestDeviceIdsList;
    /**
     * The tracker resource retrieving the device position.
     */
    TrackerName: BatchGetDevicePositionRequestTrackerNameString;
  }
  export type BatchGetDevicePositionRequestDeviceIdsList = Id[];
  export type BatchGetDevicePositionRequestTrackerNameString = string;
  export interface BatchGetDevicePositionResponse {
    /**
     * Contains device position details such as the device ID, position, and timestamps for when the position was received and sampled.
     */
    DevicePositions: DevicePositionList;
    /**
     * Contains error details for each device that failed to send its position to the tracker resource.
     */
    Errors: BatchGetDevicePositionErrorList;
  }
  export interface BatchItemError {
    /**
     * The error code associated with the batch request error.
     */
    Code?: BatchItemErrorCode;
    /**
     * A message with the reason for the batch request error.
     */
    Message?: String;
  }
  export type BatchItemErrorCode = "AccessDeniedError"|"ConflictError"|"InternalServerError"|"ResourceNotFoundError"|"ThrottlingError"|"ValidationError"|string;
  export interface BatchPutGeofenceError {
    /**
     * Contains details associated to the batch error.
     */
    Error: BatchItemError;
    /**
     * The geofence associated with the error message.
     */
    GeofenceId: Id;
  }
  export type BatchPutGeofenceErrorList = BatchPutGeofenceError[];
  export interface BatchPutGeofenceRequest {
    /**
     * The geofence collection storing the geofences.
     */
    CollectionName: ResourceName;
    /**
     * The batch of geofences to be stored in a geofence collection.
     */
    Entries: BatchPutGeofenceRequestEntriesList;
  }
  export type BatchPutGeofenceRequestEntriesList = BatchPutGeofenceRequestEntry[];
  export interface BatchPutGeofenceRequestEntry {
    /**
     * The identifier for the geofence to be stored in a given geofence collection.
     */
    GeofenceId: Id;
    /**
     * The geometry details for the geofence.
     */
    Geometry: GeofenceGeometry;
  }
  export interface BatchPutGeofenceResponse {
    /**
     * Contains additional error details for each geofence that failed to be stored in a geofence collection.
     */
    Errors: BatchPutGeofenceErrorList;
    /**
     * Contains each geofence that was successfully stored in a geofence collection.
     */
    Successes: BatchPutGeofenceSuccessList;
  }
  export interface BatchPutGeofenceSuccess {
    /**
     * The timestamp for when the geofence was stored in a geofence collection in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    CreateTime: Timestamp;
    /**
     * The geofence successfully stored in a geofence collection.
     */
    GeofenceId: Id;
    /**
     * The timestamp for when the geofence was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    UpdateTime: Timestamp;
  }
  export type BatchPutGeofenceSuccessList = BatchPutGeofenceSuccess[];
  export interface BatchUpdateDevicePositionError {
    /**
     * The device associated with the failed location update.
     */
    DeviceId: Id;
    /**
     * Contains details related to the error code such as the error code and error message.
     */
    Error: BatchItemError;
    /**
     * The timestamp for when a position sample was attempted in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    SampleTime: Timestamp;
  }
  export type BatchUpdateDevicePositionErrorList = BatchUpdateDevicePositionError[];
  export interface BatchUpdateDevicePositionRequest {
    /**
     * The name of the tracker resource to update.
     */
    TrackerName: ResourceName;
    /**
     * Contains the position update details for each device.
     */
    Updates: BatchUpdateDevicePositionRequestUpdatesList;
  }
  export type BatchUpdateDevicePositionRequestUpdatesList = DevicePositionUpdate[];
  export interface BatchUpdateDevicePositionResponse {
    /**
     * Contains error details for each device that failed to update its position.
     */
    Errors: BatchUpdateDevicePositionErrorList;
  }
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type BoundingBox = Double[];
  export type CountryCode = string;
  export type CountryCodeList = CountryCode[];
  export interface CreateGeofenceCollectionRequest {
    /**
     * A custom name for the geofence collection. Requirements:   Contain only alphanumeric characters (A–Z, a–z, 0-9), hyphens (-), and underscores (_).    Must be a unique geofence collection name.   No spaces allowed. For example, ExampleGeofenceCollection.  
     */
    CollectionName: ResourceName;
    /**
     * An optional description for the geofence collection.
     */
    Description?: ResourceDescription;
    /**
     * Specifies the pricing plan for your geofence collection. There's three pricing plan options:    RequestBasedUsage — Selects the "Request-Based Usage" pricing plan.    MobileAssetTracking — Selects the "Mobile Asset Tracking" pricing plan.    MobileAssetManagement — Selects the "Mobile Asset Management" pricing plan.   For additional details and restrictions on each pricing plan option, see the Amazon Location Service pricing page.
     */
    PricingPlan: PricingPlan;
  }
  export interface CreateGeofenceCollectionResponse {
    /**
     * The Amazon Resource Name (ARN) for the geofence collection resource. Used when you need to specify a resource across all AWS. 
     */
    CollectionArn: Arn;
    /**
     * The name for the geofence collection.
     */
    CollectionName: ResourceName;
    /**
     * The timestamp for when the geofence collection was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    CreateTime: Timestamp;
  }
  export interface CreateMapRequest {
    /**
     * Specifies the map style selected from an available data provider.
     */
    Configuration: MapConfiguration;
    /**
     * An optional description for the map resource.
     */
    Description?: ResourceDescription;
    /**
     * The name for the map resource. Requirements:   Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), and underscores (_).    Must be a unique map resource name.    No spaces allowed. For example, ExampleMap.  
     */
    MapName: ResourceName;
    /**
     * Specifies the pricing plan for your map resource. There's three pricing plan options:    RequestBasedUsage — Selects the "Request-Based Usage" pricing plan.    MobileAssetTracking — Selects the "Mobile Asset Tracking" pricing plan.    MobileAssetManagement — Selects the "Mobile Asset Management" pricing plan.   For additional details and restrictions on each pricing plan option, see the Amazon Location Service pricing page.
     */
    PricingPlan: PricingPlan;
  }
  export interface CreateMapResponse {
    /**
     * The timestamp for when the map resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.
     */
    CreateTime: Timestamp;
    /**
     * The Amazon Resource Name (ARN) for the map resource. Used when you need to specify a resource across all AWS.   Format example: arn:partition:service:region:account-id:resource-type:resource-id   
     */
    MapArn: Arn;
    /**
     * The name of the map resource.
     */
    MapName: ResourceName;
  }
  export interface CreatePlaceIndexRequest {
    /**
     * Specifies the data provider of geospatial data.
     */
    DataSource: String;
    /**
     * Specifies the data storage option for requesting Places.
     */
    DataSourceConfiguration?: DataSourceConfiguration;
    /**
     * The optional description for the Place index resource.
     */
    Description?: ResourceDescription;
    /**
     * The name of the Place index resource.  Requirements:   Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-) and underscores (_) ).   Must be a unique Place index resource name.   No spaces allowed. For example, ExamplePlaceIndex.  
     */
    IndexName: ResourceName;
    /**
     * Specifies the pricing plan for your Place index resource. There's three pricing plan options:    RequestBasedUsage — Selects the "Request-Based Usage" pricing plan.    MobileAssetTracking — Selects the "Mobile Asset Tracking" pricing plan.    MobileAssetManagement — Selects the "Mobile Asset Management" pricing plan.   For additional details and restrictions on each pricing plan option, see the Amazon Location Service pricing page.
     */
    PricingPlan: PricingPlan;
  }
  export interface CreatePlaceIndexResponse {
    /**
     * The timestamp for when the Place index resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    CreateTime: Timestamp;
    /**
     * The Amazon Resource Name (ARN) for the Place index resource. Used when you need to specify a resource across all AWS. 
     */
    IndexArn: Arn;
    /**
     * The name for the Place index resource.
     */
    IndexName: ResourceName;
  }
  export interface CreateTrackerRequest {
    /**
     * An optional description for the tracker resource.
     */
    Description?: ResourceDescription;
    /**
     * Specifies the pricing plan for your tracker resource. There's three pricing plan options:    RequestBasedUsage — Selects the "Request-Based Usage" pricing plan.    MobileAssetTracking — Selects the "Mobile Asset Tracking" pricing plan.    MobileAssetManagement — Selects the "Mobile Asset Management" pricing plan.   For additional details and restrictions on each pricing plan option, see the Amazon Location Service pricing page.
     */
    PricingPlan: PricingPlan;
    /**
     * The name for the tracker resource. Requirements:   Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-) and underscores (_).   Must be a unique tracker resource name.   No spaces allowed. For example, ExampleTracker.  
     */
    TrackerName: ResourceName;
  }
  export interface CreateTrackerResponse {
    /**
     * The timestamp for when the tracker resource was created in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    CreateTime: Timestamp;
    /**
     * The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify a resource across all AWS.
     */
    TrackerArn: Arn;
    /**
     * The name of the tracker resource.
     */
    TrackerName: ResourceName;
  }
  export interface DataSourceConfiguration {
    /**
     * Specifies how the results of an operation will be stored by the caller.  Valid values include:    SingleUse specifies that the results won't be stored.     Storage specifies that the result can be cached or stored in a database.   Default value: SingleUse 
     */
    IntendedUse?: IntendedUse;
  }
  export interface DeleteGeofenceCollectionRequest {
    /**
     * The name of the geofence collection to be deleted.
     */
    CollectionName: ResourceName;
  }
  export interface DeleteGeofenceCollectionResponse {
  }
  export interface DeleteMapRequest {
    /**
     * The name of the map resource to be deleted.
     */
    MapName: ResourceName;
  }
  export interface DeleteMapResponse {
  }
  export interface DeletePlaceIndexRequest {
    /**
     * The name of the Place index resource to be deleted.
     */
    IndexName: ResourceName;
  }
  export interface DeletePlaceIndexResponse {
  }
  export interface DeleteTrackerRequest {
    /**
     * The name of the tracker resource to be deleted.
     */
    TrackerName: ResourceName;
  }
  export interface DeleteTrackerResponse {
  }
  export interface DescribeGeofenceCollectionRequest {
    /**
     * The name of the geofence collection.
     */
    CollectionName: ResourceName;
  }
  export interface DescribeGeofenceCollectionResponse {
    /**
     * The Amazon Resource Name (ARN) for the geofence collection resource. Used when you need to specify a resource across all AWS. 
     */
    CollectionArn: Arn;
    /**
     * The name of the geofence collection.
     */
    CollectionName: ResourceName;
    /**
     * The timestamp for when the geofence resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    CreateTime: Timestamp;
    /**
     * The optional description for the geofence collection.
     */
    Description: ResourceDescription;
    /**
     * The timestamp for when the geofence collection was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    UpdateTime: Timestamp;
  }
  export interface DescribeMapRequest {
    /**
     * The name of the map resource.
     */
    MapName: ResourceName;
  }
  export interface DescribeMapResponse {
    /**
     * Specifies the map tile style selected from a partner data provider.
     */
    Configuration: MapConfiguration;
    /**
     * The timestamp for when the map resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.
     */
    CreateTime: Timestamp;
    /**
     * Specifies the data provider for the associated map tiles.
     */
    DataSource: String;
    /**
     * The optional description for the map resource.
     */
    Description: ResourceDescription;
    /**
     * The Amazon Resource Name (ARN) for the map resource. Used when you need to specify a resource across all AWS.
     */
    MapArn: Arn;
    /**
     * The map style selected from an available provider.
     */
    MapName: ResourceName;
    /**
     * The timestamp for when the map resource was last update in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.
     */
    UpdateTime: Timestamp;
  }
  export interface DescribePlaceIndexRequest {
    /**
     * The name of the Place index resource.
     */
    IndexName: ResourceName;
  }
  export interface DescribePlaceIndexResponse {
    /**
     * The timestamp for when the Place index resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    CreateTime: Timestamp;
    /**
     * The data provider of geospatial data.
     */
    DataSource: String;
    /**
     * The specified data storage option for requesting Places.
     */
    DataSourceConfiguration: DataSourceConfiguration;
    /**
     * The optional description for the Place index resource.
     */
    Description: ResourceDescription;
    /**
     * The Amazon Resource Name (ARN) for the Place index resource. Used when you need to specify a resource across all AWS. 
     */
    IndexArn: Arn;
    /**
     * The name of the Place index resource being described.
     */
    IndexName: ResourceName;
    /**
     * The timestamp for when the Place index resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    UpdateTime: Timestamp;
  }
  export interface DescribeTrackerRequest {
    /**
     * The name of the tracker resource.
     */
    TrackerName: ResourceName;
  }
  export interface DescribeTrackerResponse {
    /**
     * The timestamp for when the tracker resource was created in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    CreateTime: Timestamp;
    /**
     * The optional description for the tracker resource.
     */
    Description: ResourceDescription;
    /**
     * The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify a resource across all AWS.
     */
    TrackerArn: Arn;
    /**
     * The name of the tracker resource.
     */
    TrackerName: ResourceName;
    /**
     * The timestamp for when the tracker resource was last updated in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    UpdateTime: Timestamp;
  }
  export interface DevicePosition {
    /**
     * The device whose position you retrieved.
     */
    DeviceId?: Id;
    /**
     * The last known device position.
     */
    Position: Position;
    /**
     * The timestamp for when the tracker resource recieved the position in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    ReceivedTime: Timestamp;
    /**
     * The timestamp for when the position was detected and sampled in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    SampleTime: Timestamp;
  }
  export type DevicePositionList = DevicePosition[];
  export interface DevicePositionUpdate {
    /**
     * The device associated to the position update.
     */
    DeviceId: Id;
    /**
     * The latest device position defined in WGS 84 format: [Xlongitude, Ylatitude].
     */
    Position: Position;
    /**
     * The timestamp for when the position update was received in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    SampleTime: Timestamp;
  }
  export interface DisassociateTrackerConsumerRequest {
    /**
     * The Amazon Resource Name (ARN) for the geofence collection to be disassociated from the tracker resource. Used when you need to specify a resource across all AWS.    Format example: arn:partition:service:region:account-id:resource-type:resource-id   
     */
    ConsumerArn: Arn;
    /**
     * The name of the tracker resource to be dissociated from the consumer.
     */
    TrackerName: ResourceName;
  }
  export interface DisassociateTrackerConsumerResponse {
  }
  export type Double = number;
  export interface GeofenceGeometry {
    /**
     * An array of 1 or more linear rings. A linear ring is an array of 4 or more vertices, where the first and last vertex are the same to form a closed boundary. Each vertex is a 2-dimensional point of the form: [longitude, latitude].  The first linear ring is an outer ring, describing the polygon's boundary. Subsequent linear rings may be inner or outer rings to describe holes and islands. Outer rings must list their vertices in counter-clockwise order around the ring's center, where the left side is the polygon's exterior. Inner rings must list their vertices in clockwise order, where the left side is the polygon's interior.
     */
    Polygon?: LinearRings;
  }
  export interface GetDevicePositionHistoryRequest {
    /**
     * The device whose position history you want to retrieve.
     */
    DeviceId: Id;
    /**
     * Specify the end time for the position history in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.    The given time for EndTimeExclusive must be after the time for StartTimeInclusive.  
     */
    EndTimeExclusive?: Timestamp;
    /**
     * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null 
     */
    NextToken?: Token;
    /**
     * Specify the start time for the position history in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.    The given time for EndTimeExclusive must be after the time for StartTimeInclusive.  
     */
    StartTimeInclusive?: Timestamp;
    /**
     * The tracker resource receiving the request for the device position history.
     */
    TrackerName: ResourceName;
  }
  export interface GetDevicePositionHistoryResponse {
    /**
     * Contains the position history details for the requested device.
     */
    DevicePositions: DevicePositionList;
    /**
     * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. 
     */
    NextToken?: Token;
  }
  export interface GetDevicePositionRequest {
    /**
     * The device whose position you want to retreieve.
     */
    DeviceId: Id;
    /**
     * The tracker resource receiving the position update.
     */
    TrackerName: ResourceName;
  }
  export interface GetDevicePositionResponse {
    /**
     * The device whose position you retrieved.
     */
    DeviceId?: Id;
    /**
     * The last known device position.
     */
    Position: Position;
    /**
     * The timestamp for when the tracker resource recieved the position in  ISO 8601  format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    ReceivedTime: Timestamp;
    /**
     * The timestamp for when the position was detected and sampled in  ISO 8601  format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    SampleTime: Timestamp;
  }
  export interface GetGeofenceRequest {
    /**
     * The geofence collection storing the target geofence.
     */
    CollectionName: ResourceName;
    /**
     * The geofence you're retrieving details for.
     */
    GeofenceId: Id;
  }
  export interface GetGeofenceResponse {
    /**
     * The timestamp for when the geofence collection was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    CreateTime: Timestamp;
    /**
     * The geofence identifier.
     */
    GeofenceId: Id;
    /**
     * Contains the geofence geometry details describing a polygon.
     */
    Geometry: GeofenceGeometry;
    /**
     * Identifies the state of the geofence. A geofence will hold one of the following states:    ACTIVE — The geofence has been indexed by the system.     PENDING — The geofence is being processed by the system.    FAILED — The geofence failed to be indexed by the system.    DELETED — The geofence has been deleted from the system index.    DELETING — The geofence is being deleted from the system index.  
     */
    Status: String;
    /**
     * The timestamp for when the geofence collection was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    UpdateTime: Timestamp;
  }
  export interface GetMapGlyphsRequest {
    /**
     * A comma-separated list of fonts to load glyphs from in order of preference.. For example, Noto Sans, Arial Unicode.
     */
    FontStack: String;
    /**
     * A Unicode range of characters to download glyphs for. Each response will contain 256 characters. For example, 0-255 includes all characters from range U+0000 to 00FF. Must be aligned to multiples of 256.
     */
    FontUnicodeRange: GetMapGlyphsRequestFontUnicodeRangeString;
    /**
     * The map resource associated with the glyph ﬁle.
     */
    MapName: ResourceName;
  }
  export type GetMapGlyphsRequestFontUnicodeRangeString = string;
  export interface GetMapGlyphsResponse {
    /**
     * The blob's content type.
     */
    Blob?: _Blob;
    /**
     * The map glyph content type. For example, application/octet-stream.
     */
    ContentType?: String;
  }
  export interface GetMapSpritesRequest {
    /**
     * The name of the sprite ﬁle. Use the following ﬁle names for the sprite sheet:    sprites.png     sprites@2x.png for high pixel density displays   For the JSON document contain image offsets. Use the following ﬁle names:    sprites.json     sprites@2x.json for high pixel density displays  
     */
    FileName: GetMapSpritesRequestFileNameString;
    /**
     * The map resource associated with the sprite ﬁle.
     */
    MapName: ResourceName;
  }
  export type GetMapSpritesRequestFileNameString = string;
  export interface GetMapSpritesResponse {
    /**
     * Contains the body of the sprite sheet or JSON offset ﬁle.
     */
    Blob?: _Blob;
    /**
     * The content type of the sprite sheet and offsets. For example, the sprite sheet content type is image/png, and the sprite offset JSON document is application/json. 
     */
    ContentType?: String;
  }
  export interface GetMapStyleDescriptorRequest {
    /**
     * The map resource to retrieve the style descriptor from.
     */
    MapName: ResourceName;
  }
  export interface GetMapStyleDescriptorResponse {
    /**
     * Contains the body of the style descriptor.
     */
    Blob?: _Blob;
    /**
     * The style descriptor's content type. For example, application/json.
     */
    ContentType?: String;
  }
  export interface GetMapTileRequest {
    /**
     * The map resource to retrieve the map tiles from.
     */
    MapName: ResourceName;
    /**
     * The X axis value for the map tile.
     */
    X: GetMapTileRequestXString;
    /**
     * The Y axis value for the map tile. 
     */
    Y: GetMapTileRequestYString;
    /**
     * The zoom value for the map tile.
     */
    Z: GetMapTileRequestZString;
  }
  export type GetMapTileRequestXString = string;
  export type GetMapTileRequestYString = string;
  export type GetMapTileRequestZString = string;
  export interface GetMapTileResponse {
    /**
     * Contains Mapbox Vector Tile (MVT) data.
     */
    Blob?: _Blob;
    /**
     * The map tile's content type. For example, application/vnd.mapbox-vector-tile.
     */
    ContentType?: String;
  }
  export type Id = string;
  export type IntendedUse = "SingleUse"|"Storage"|string;
  export type LinearRing = Position[];
  export type LinearRings = LinearRing[];
  export interface ListGeofenceCollectionsRequest {
    /**
     * An optional limit for the number of resources returned in a single call.  Default value: 100 
     */
    MaxResults?: ListGeofenceCollectionsRequestMaxResultsInteger;
    /**
     * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null 
     */
    NextToken?: Token;
  }
  export type ListGeofenceCollectionsRequestMaxResultsInteger = number;
  export interface ListGeofenceCollectionsResponse {
    /**
     * Lists the geofence collections that exist in your AWS account.
     */
    Entries: ListGeofenceCollectionsResponseEntryList;
    /**
     * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. 
     */
    NextToken?: Token;
  }
  export interface ListGeofenceCollectionsResponseEntry {
    /**
     * The name of the geofence collection.
     */
    CollectionName: ResourceName;
    /**
     * The timestamp for when the geofence collection was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    CreateTime: Timestamp;
    /**
     * The description for the geofence collection
     */
    Description: ResourceDescription;
    /**
     * Specifies a timestamp for when the resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    UpdateTime: Timestamp;
  }
  export type ListGeofenceCollectionsResponseEntryList = ListGeofenceCollectionsResponseEntry[];
  export interface ListGeofenceResponseEntry {
    /**
     * The timestamp for when the geofence was stored in a geofence collection in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    CreateTime: Timestamp;
    /**
     * The geofence identifier.
     */
    GeofenceId: Id;
    /**
     * Contains the geofence geometry details describing a polygon.
     */
    Geometry: GeofenceGeometry;
    /**
     * Identifies the state of the geofence. A geofence will hold one of the following states:    ACTIVE — The geofence has been indexed by the system.     PENDING — The geofence is being processed by the system.    FAILED — The geofence failed to be indexed by the system.    DELETED — The geofence has been deleted from the system index.    DELETING — The geofence is being deleted from the system index.  
     */
    Status: String;
    /**
     * The timestamp for when the geofence was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    UpdateTime: Timestamp;
  }
  export type ListGeofenceResponseEntryList = ListGeofenceResponseEntry[];
  export interface ListGeofencesRequest {
    /**
     * The name of the geofence collection storing the list of geofences.
     */
    CollectionName: ResourceName;
    /**
     * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null 
     */
    NextToken?: Token;
  }
  export interface ListGeofencesResponse {
    /**
     * Contains a list of geofences stored in the geofence collection.
     */
    Entries: ListGeofenceResponseEntryList;
    /**
     * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. 
     */
    NextToken?: Token;
  }
  export interface ListMapsRequest {
    /**
     * An optional limit for the number of resources returned in a single call.  Default value: 100 
     */
    MaxResults?: ListMapsRequestMaxResultsInteger;
    /**
     * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. Default value: null 
     */
    NextToken?: Token;
  }
  export type ListMapsRequestMaxResultsInteger = number;
  export interface ListMapsResponse {
    /**
     * Contains a list of maps in your AWS account
     */
    Entries: ListMapsResponseEntryList;
    /**
     * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. 
     */
    NextToken?: Token;
  }
  export interface ListMapsResponseEntry {
    /**
     * The timestamp for when the map resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.
     */
    CreateTime: Timestamp;
    /**
     * Specifies the data provider for the associated map tiles.
     */
    DataSource: String;
    /**
     * The description for the map resource.
     */
    Description: ResourceDescription;
    /**
     * The name of the associated map resource.
     */
    MapName: ResourceName;
    /**
     * The timestamp for when the map resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.
     */
    UpdateTime: Timestamp;
  }
  export type ListMapsResponseEntryList = ListMapsResponseEntry[];
  export interface ListPlaceIndexesRequest {
    /**
     * An optional limit for the maximum number of results returned in a single call. Default value: 100 
     */
    MaxResults?: ListPlaceIndexesRequestMaxResultsInteger;
    /**
     * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. Default value: null 
     */
    NextToken?: Token;
  }
  export type ListPlaceIndexesRequestMaxResultsInteger = number;
  export interface ListPlaceIndexesResponse {
    /**
     * Lists the Place index resources that exist in your AWS account
     */
    Entries: ListPlaceIndexesResponseEntryList;
    /**
     * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
     */
    NextToken?: Token;
  }
  export interface ListPlaceIndexesResponseEntry {
    /**
     * The timestamp for when the Place index resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    CreateTime: Timestamp;
    /**
     * The data provider of geospatial data.
     */
    DataSource: String;
    /**
     * The optional description for the Place index resource.
     */
    Description: ResourceDescription;
    /**
     * The name of the Place index resource.
     */
    IndexName: ResourceName;
    /**
     * The timestamp for when the Place index resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    UpdateTime: Timestamp;
  }
  export type ListPlaceIndexesResponseEntryList = ListPlaceIndexesResponseEntry[];
  export interface ListTrackerConsumersRequest {
    /**
     * An optional limit for the number of resources returned in a single call.  Default value: 100 
     */
    MaxResults?: ListTrackerConsumersRequestMaxResultsInteger;
    /**
     * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null 
     */
    NextToken?: Token;
    /**
     * The tracker resource whose associated geofence collections you want to list.
     */
    TrackerName: ResourceName;
  }
  export type ListTrackerConsumersRequestMaxResultsInteger = number;
  export interface ListTrackerConsumersResponse {
    /**
     * Contains the list of geofence collection ARNs associated to the tracker resource.
     */
    ConsumerArns: ArnList;
    /**
     * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. 
     */
    NextToken?: Token;
  }
  export interface ListTrackersRequest {
    /**
     * An optional limit for the number of resources returned in a single call.  Default value: 100 
     */
    MaxResults?: ListTrackersRequestMaxResultsInteger;
    /**
     * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null 
     */
    NextToken?: Token;
  }
  export type ListTrackersRequestMaxResultsInteger = number;
  export interface ListTrackersResponse {
    /**
     * Contains tracker resources in your AWS account. Details include tracker name, description and timestamps for when the tracker was created and last updated.
     */
    Entries: ListTrackersResponseEntryList;
    /**
     * A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. 
     */
    NextToken?: Token;
  }
  export interface ListTrackersResponseEntry {
    /**
     * The timestamp for when the tracker resource was created in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    CreateTime: Timestamp;
    /**
     * The description for the tracker resource.
     */
    Description: ResourceDescription;
    /**
     * The name of the tracker resource.
     */
    TrackerName: ResourceName;
    /**
     * The timestamp for when the position was detected and sampled in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. 
     */
    UpdateTime: Timestamp;
  }
  export type ListTrackersResponseEntryList = ListTrackersResponseEntry[];
  export interface MapConfiguration {
    /**
     * Specifies the map style selected from an available data provider. Valid styles: VectorEsriLightGrayCanvas, VectorEsriLight, VectorEsriStreets, VectorEsriNavigation, VectorEsriDarkGrayCanvas, VectorEsriLightGrayCanvas, VectorHereBerlin   When using HERE as your data provider, and selecting the Style VectorHereBerlin, you may not use HERE Maps for Asset Management. See the AWS Service Terms for Amazon Location Service.  
     */
    Style: MapStyle;
  }
  export type MapStyle = string;
  export interface Place {
    /**
     * The numerical portion of an address, such as a building number. 
     */
    AddressNumber?: String;
    /**
     * A country/region specified using ISO 3166 3-digit country/region code. For example, CAN.
     */
    Country?: String;
    Geometry: PlaceGeometry;
    /**
     * The full name and address of the point of interest such as a city, region, or country. For example, 123 Any Street, Any Town, USA.
     */
    Label?: String;
    /**
     * A name for a local area, such as a city or town name. For example, Toronto.
     */
    Municipality?: String;
    /**
     * The name of a community district. For example, Downtown.
     */
    Neighborhood?: String;
    /**
     * A group of numbers and letters in a country-specific format, which accompanies the address for the purpose of identifying a location. 
     */
    PostalCode?: String;
    /**
     * A name for an area or geographical division, such as a province or state name. For example, British Columbia.
     */
    Region?: String;
    /**
     * The name for a street or a road to identify a location. For example, Main Street.
     */
    Street?: String;
    /**
     * A country, or an area that's part of a larger region . For example, Metro Vancouver.
     */
    SubRegion?: String;
  }
  export interface PlaceGeometry {
    /**
     * A single point geometry specifies a location for a Place using WGS 84 coordinates:    x — Specifies the x coordinate or longitude.     y — Specifies the y coordinate or latitude.   
     */
    Point?: Position;
  }
  export type PlaceIndexSearchResultLimit = number;
  export type Position = Double[];
  export type PricingPlan = "RequestBasedUsage"|"MobileAssetTracking"|"MobileAssetManagement"|string;
  export interface PutGeofenceRequest {
    /**
     * The geofence collection to store the geofence in.
     */
    CollectionName: ResourceName;
    /**
     * An identifier for the geofence. For example, ExampleGeofence-1.
     */
    GeofenceId: Id;
    /**
     * Contains the polygon details to specify the position of the geofence.
     */
    Geometry: GeofenceGeometry;
  }
  export interface PutGeofenceResponse {
    /**
     * The timestamp for when the geofence was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    CreateTime: Timestamp;
    /**
     * The geofence identifier entered in the request.
     */
    GeofenceId: Id;
    /**
     * The timestamp for when the geofence was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ 
     */
    UpdateTime: Timestamp;
  }
  export type ResourceDescription = string;
  export type ResourceName = string;
  export interface SearchForPositionResult {
    /**
     * Contains details about the relevant point of interest.
     */
    Place: Place;
  }
  export type SearchForPositionResultList = SearchForPositionResult[];
  export interface SearchForTextResult {
    /**
     * Contains details about the relevant point of interest.
     */
    Place: Place;
  }
  export type SearchForTextResultList = SearchForTextResult[];
  export interface SearchPlaceIndexForPositionRequest {
    /**
     * The name of the Place index resource you want to use for the search.
     */
    IndexName: ResourceName;
    /**
     * An optional paramer. The maximum number of results returned per request.  Default value: 50 
     */
    MaxResults?: PlaceIndexSearchResultLimit;
    /**
     * Specifies a coordinate for the query defined by a longitude, and latitude.   The first position is the X coordinate, or longitude.   The second position is the Y coordinate, or latitude.    For example, position=xLongitude&amp;position=yLatitude .
     */
    Position: Position;
  }
  export interface SearchPlaceIndexForPositionResponse {
    /**
     * Returns a list of Places closest to the specified position. Each result contains additional information about the Places returned.
     */
    Results: SearchForPositionResultList;
    /**
     * Contains a summary of the request.
     */
    Summary: SearchPlaceIndexForPositionSummary;
  }
  export interface SearchPlaceIndexForPositionSummary {
    /**
     * The data provider of geospatial data for the Place index resource.
     */
    DataSource: String;
    /**
     * An optional parameter. The maximum number of results returned per request.  Default value: 50 
     */
    MaxResults?: PlaceIndexSearchResultLimit;
    /**
     * The position given in the reverse geocoding request.
     */
    Position: Position;
  }
  export interface SearchPlaceIndexForTextRequest {
    /**
     * Searches for results closest to the given position. An optional parameter defined by longitude, and latitude.   The first bias position is the X coordinate, or longitude.   The second bias position is the Y coordinate, or latitude.    For example, bias=xLongitude&amp;bias=yLatitude.
     */
    BiasPosition?: Position;
    /**
     * Filters the results by returning only Places within the provided bounding box. An optional parameter. The first 2 bbox parameters describe the lower southwest corner:   The first bbox position is the X coordinate or longitude of the lower southwest corner.   The second bbox position is the Y coordinate or latitude of the lower southwest corner.   For example, bbox=xLongitudeSW&amp;bbox=yLatitudeSW. The next bbox parameters describe the upper northeast corner:   The third bbox position is the X coordinate, or longitude of the upper northeast corner.   The fourth bbox position is the Y coordinate, or longitude of the upper northeast corner.   For example, bbox=xLongitudeNE&amp;bbox=yLatitudeNE 
     */
    FilterBBox?: BoundingBox;
    /**
     * Limits the search to the given a list of countries/regions. An optional parameter.   Use the ISO 3166 3-digit country code. For example, Australia uses three upper-case characters: AUS.  
     */
    FilterCountries?: CountryCodeList;
    /**
     * The name of the Place index resource you want to use for the search.
     */
    IndexName: ResourceName;
    /**
     * An optional parameter. The maximum number of results returned per request.  The default: 50 
     */
    MaxResults?: PlaceIndexSearchResultLimit;
    /**
     * The address, name, city, or region to be used in the search. In free-form text format. For example, 123 Any Street.
     */
    Text: SyntheticSearchPlaceIndexForTextRequestString;
  }
  export interface SearchPlaceIndexForTextResponse {
    /**
     * A list of Places closest to the specified position. Each result contains additional information about the specific point of interest. 
     */
    Results: SearchForTextResultList;
    /**
     * Contains a summary of the request. Contains the BiasPosition, DataSource, FilterBBox, FilterCountries, MaxResults, ResultBBox, and Text.
     */
    Summary: SearchPlaceIndexForTextSummary;
  }
  export interface SearchPlaceIndexForTextSummary {
    /**
     * Contains the coordinates for the bias position entered in the geocoding request.
     */
    BiasPosition?: Position;
    /**
     * The data provider of geospatial data for the Place index resource.
     */
    DataSource: String;
    /**
     * Contains the coordinates for the optional bounding box coordinated entered in the geocoding request.
     */
    FilterBBox?: BoundingBox;
    /**
     * Contains the country filter entered in the geocoding request.
     */
    FilterCountries?: CountryCodeList;
    /**
     * Contains the maximum number of results indicated for the request.
     */
    MaxResults?: PlaceIndexSearchResultLimit;
    /**
     * A bounding box that contains the search results within the specified area indicated by FilterBBox. A subset of bounding box specified using FilterBBox.
     */
    ResultBBox?: BoundingBox;
    /**
     * The address, name, city or region to be used in the geocoding request. In free-form text format. For example, Vancouver.
     */
    Text: SyntheticSearchPlaceIndexForTextSummaryString;
  }
  export type String = string;
  export type SyntheticSearchPlaceIndexForTextRequestString = string;
  export type SyntheticSearchPlaceIndexForTextSummaryString = string;
  export type Timestamp = Date;
  export type Token = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-11-19"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Location client.
   */
  export import Types = Location;
}
export = Location;
