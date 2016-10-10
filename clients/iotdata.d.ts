import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
declare class IotData extends Service {
  /**
   * Deletes the thing shadow for the specified thing. For more information, see DeleteThingShadow in the AWS IoT Developer Guide.
   */
  deleteThingShadow(params: IotData.DeleteThingShadowRequest, callback?: (err: AWSError, data: IotData.DeleteThingShadowResponse) => void): Request<IotData.DeleteThingShadowResponse, AWSError>;
  /**
   * Deletes the thing shadow for the specified thing. For more information, see DeleteThingShadow in the AWS IoT Developer Guide.
   */
  deleteThingShadow(callback?: (err: AWSError, data: IotData.DeleteThingShadowResponse) => void): Request<IotData.DeleteThingShadowResponse, AWSError>;
  /**
   * Gets the thing shadow for the specified thing. For more information, see GetThingShadow in the AWS IoT Developer Guide.
   */
  getThingShadow(params: IotData.GetThingShadowRequest, callback?: (err: AWSError, data: IotData.GetThingShadowResponse) => void): Request<IotData.GetThingShadowResponse, AWSError>;
  /**
   * Gets the thing shadow for the specified thing. For more information, see GetThingShadow in the AWS IoT Developer Guide.
   */
  getThingShadow(callback?: (err: AWSError, data: IotData.GetThingShadowResponse) => void): Request<IotData.GetThingShadowResponse, AWSError>;
  /**
   * Publishes state information. For more information, see HTTP Protocol in the AWS IoT Developer Guide.
   */
  publish(params: IotData.PublishRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Publishes state information. For more information, see HTTP Protocol in the AWS IoT Developer Guide.
   */
  publish(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the thing shadow for the specified thing. For more information, see UpdateThingShadow in the AWS IoT Developer Guide.
   */
  updateThingShadow(params: IotData.UpdateThingShadowRequest, callback?: (err: AWSError, data: IotData.UpdateThingShadowResponse) => void): Request<IotData.UpdateThingShadowResponse, AWSError>;
  /**
   * Updates the thing shadow for the specified thing. For more information, see UpdateThingShadow in the AWS IoT Developer Guide.
   */
  updateThingShadow(callback?: (err: AWSError, data: IotData.UpdateThingShadowResponse) => void): Request<IotData.UpdateThingShadowResponse, AWSError>;
}
declare namespace IotData {
  export interface DeleteThingShadowRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
  }
  export interface DeleteThingShadowResponse {
    /**
     * The state information, in JSON format.
     */
    payload: JsonDocument;
  }
  export type ErrorMessage = string;
  export interface GetThingShadowRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
  }
  export interface GetThingShadowResponse {
    /**
     * The state information, in JSON format.
     */
    payload?: JsonDocument;
  }
  export type JsonDocument = Buffer|Uint8Array|Blob|string;
  export type Payload = Buffer|Uint8Array|Blob|string;
  export interface PublishRequest {
    /**
     * The name of the MQTT topic.
     */
    topic: Topic;
    /**
     * The Quality of Service (QoS) level.
     */
    qos?: Qos;
    /**
     * The state information, in JSON format.
     */
    payload?: Payload;
  }
  export type Qos = number;
  export type ThingName = string;
  export type Topic = string;
  export interface UpdateThingShadowRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
    /**
     * The state information, in JSON format.
     */
    payload?: JsonDocument;
  }
  export interface UpdateThingShadowResponse {
    /**
     * The state information, in JSON format.
     */
    payload?: JsonDocument;
  }
  export type errorMessage = string;
}
export = IotData;
