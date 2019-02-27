import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class AppMesh extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AppMesh.Types.ClientConfiguration)
  config: Config & AppMesh.Types.ClientConfiguration;
  /**
   * Creates a new service mesh. A service mesh is a logical boundary for network traffic
         between the services that reside within it.
         After you create your service mesh, you can create virtual nodes, virtual routers, and
         routes to distribute traffic between the applications in your mesh.
   */
  createMesh(params: AppMesh.Types.CreateMeshInput, callback?: (err: AWSError, data: AppMesh.Types.CreateMeshOutput) => void): Request<AppMesh.Types.CreateMeshOutput, AWSError>;
  /**
   * Creates a new service mesh. A service mesh is a logical boundary for network traffic
         between the services that reside within it.
         After you create your service mesh, you can create virtual nodes, virtual routers, and
         routes to distribute traffic between the applications in your mesh.
   */
  createMesh(callback?: (err: AWSError, data: AppMesh.Types.CreateMeshOutput) => void): Request<AppMesh.Types.CreateMeshOutput, AWSError>;
  /**
   * Creates a new route that is associated with a virtual router.
         You can use the prefix parameter in your route specification for path-based
         routing of requests. For example, if your virtual router service name is
            my-service.local, and you want the route to match requests to
            my-service.local/metrics, then your prefix should be
         /metrics.
         If your route matches a request, you can distribute traffic to one or more target
         virtual nodes with relative weighting.
   */
  createRoute(params: AppMesh.Types.CreateRouteInput, callback?: (err: AWSError, data: AppMesh.Types.CreateRouteOutput) => void): Request<AppMesh.Types.CreateRouteOutput, AWSError>;
  /**
   * Creates a new route that is associated with a virtual router.
         You can use the prefix parameter in your route specification for path-based
         routing of requests. For example, if your virtual router service name is
            my-service.local, and you want the route to match requests to
            my-service.local/metrics, then your prefix should be
         /metrics.
         If your route matches a request, you can distribute traffic to one or more target
         virtual nodes with relative weighting.
   */
  createRoute(callback?: (err: AWSError, data: AppMesh.Types.CreateRouteOutput) => void): Request<AppMesh.Types.CreateRouteOutput, AWSError>;
  /**
   * Creates a new virtual node within a service mesh.
         A virtual node acts as logical pointer to a particular task group, such as an Amazon ECS
         service or a Kubernetes deployment. When you create a virtual node, you must specify the
         DNS service discovery name for your task group.
         Any inbound traffic that your virtual node expects should be specified as a
            listener. Any outbound traffic that your virtual node expects to reach
         should be specified as a backend.
         The response metadata for your new virtual node contains the arn that is
         associated with the virtual node. Set this value (either the full ARN or the truncated
         resource name, for example, mesh/default/virtualNode/simpleapp, as the
            APPMESH_VIRTUAL_NODE_NAME environment variable for your task group's Envoy
         proxy container in your task definition or pod spec. This is then mapped to the
            node.id and node.cluster Envoy parameters.
         
            If you require your Envoy stats or tracing to use a different name, you can override
            the node.cluster value that is set by
               APPMESH_VIRTUAL_NODE_NAME with the
               APPMESH_VIRTUAL_NODE_CLUSTER environment variable.
         
   */
  createVirtualNode(params: AppMesh.Types.CreateVirtualNodeInput, callback?: (err: AWSError, data: AppMesh.Types.CreateVirtualNodeOutput) => void): Request<AppMesh.Types.CreateVirtualNodeOutput, AWSError>;
  /**
   * Creates a new virtual node within a service mesh.
         A virtual node acts as logical pointer to a particular task group, such as an Amazon ECS
         service or a Kubernetes deployment. When you create a virtual node, you must specify the
         DNS service discovery name for your task group.
         Any inbound traffic that your virtual node expects should be specified as a
            listener. Any outbound traffic that your virtual node expects to reach
         should be specified as a backend.
         The response metadata for your new virtual node contains the arn that is
         associated with the virtual node. Set this value (either the full ARN or the truncated
         resource name, for example, mesh/default/virtualNode/simpleapp, as the
            APPMESH_VIRTUAL_NODE_NAME environment variable for your task group's Envoy
         proxy container in your task definition or pod spec. This is then mapped to the
            node.id and node.cluster Envoy parameters.
         
            If you require your Envoy stats or tracing to use a different name, you can override
            the node.cluster value that is set by
               APPMESH_VIRTUAL_NODE_NAME with the
               APPMESH_VIRTUAL_NODE_CLUSTER environment variable.
         
   */
  createVirtualNode(callback?: (err: AWSError, data: AppMesh.Types.CreateVirtualNodeOutput) => void): Request<AppMesh.Types.CreateVirtualNodeOutput, AWSError>;
  /**
   * Creates a new virtual router within a service mesh.
         Virtual routers handle traffic for one or more service names within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.
   */
  createVirtualRouter(params: AppMesh.Types.CreateVirtualRouterInput, callback?: (err: AWSError, data: AppMesh.Types.CreateVirtualRouterOutput) => void): Request<AppMesh.Types.CreateVirtualRouterOutput, AWSError>;
  /**
   * Creates a new virtual router within a service mesh.
         Virtual routers handle traffic for one or more service names within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.
   */
  createVirtualRouter(callback?: (err: AWSError, data: AppMesh.Types.CreateVirtualRouterOutput) => void): Request<AppMesh.Types.CreateVirtualRouterOutput, AWSError>;
  /**
   * Deletes an existing service mesh.
         You must delete all resources (routes, virtual routers, virtual nodes) in the service
         mesh before you can delete the mesh itself.
   */
  deleteMesh(params: AppMesh.Types.DeleteMeshInput, callback?: (err: AWSError, data: AppMesh.Types.DeleteMeshOutput) => void): Request<AppMesh.Types.DeleteMeshOutput, AWSError>;
  /**
   * Deletes an existing service mesh.
         You must delete all resources (routes, virtual routers, virtual nodes) in the service
         mesh before you can delete the mesh itself.
   */
  deleteMesh(callback?: (err: AWSError, data: AppMesh.Types.DeleteMeshOutput) => void): Request<AppMesh.Types.DeleteMeshOutput, AWSError>;
  /**
   * Deletes an existing route.
   */
  deleteRoute(params: AppMesh.Types.DeleteRouteInput, callback?: (err: AWSError, data: AppMesh.Types.DeleteRouteOutput) => void): Request<AppMesh.Types.DeleteRouteOutput, AWSError>;
  /**
   * Deletes an existing route.
   */
  deleteRoute(callback?: (err: AWSError, data: AppMesh.Types.DeleteRouteOutput) => void): Request<AppMesh.Types.DeleteRouteOutput, AWSError>;
  /**
   * Deletes an existing virtual node.
   */
  deleteVirtualNode(params: AppMesh.Types.DeleteVirtualNodeInput, callback?: (err: AWSError, data: AppMesh.Types.DeleteVirtualNodeOutput) => void): Request<AppMesh.Types.DeleteVirtualNodeOutput, AWSError>;
  /**
   * Deletes an existing virtual node.
   */
  deleteVirtualNode(callback?: (err: AWSError, data: AppMesh.Types.DeleteVirtualNodeOutput) => void): Request<AppMesh.Types.DeleteVirtualNodeOutput, AWSError>;
  /**
   * Deletes an existing virtual router.
         You must delete any routes associated with the virtual router before you can delete the
         router itself.
   */
  deleteVirtualRouter(params: AppMesh.Types.DeleteVirtualRouterInput, callback?: (err: AWSError, data: AppMesh.Types.DeleteVirtualRouterOutput) => void): Request<AppMesh.Types.DeleteVirtualRouterOutput, AWSError>;
  /**
   * Deletes an existing virtual router.
         You must delete any routes associated with the virtual router before you can delete the
         router itself.
   */
  deleteVirtualRouter(callback?: (err: AWSError, data: AppMesh.Types.DeleteVirtualRouterOutput) => void): Request<AppMesh.Types.DeleteVirtualRouterOutput, AWSError>;
  /**
   * Describes an existing service mesh.
   */
  describeMesh(params: AppMesh.Types.DescribeMeshInput, callback?: (err: AWSError, data: AppMesh.Types.DescribeMeshOutput) => void): Request<AppMesh.Types.DescribeMeshOutput, AWSError>;
  /**
   * Describes an existing service mesh.
   */
  describeMesh(callback?: (err: AWSError, data: AppMesh.Types.DescribeMeshOutput) => void): Request<AppMesh.Types.DescribeMeshOutput, AWSError>;
  /**
   * Describes an existing route.
   */
  describeRoute(params: AppMesh.Types.DescribeRouteInput, callback?: (err: AWSError, data: AppMesh.Types.DescribeRouteOutput) => void): Request<AppMesh.Types.DescribeRouteOutput, AWSError>;
  /**
   * Describes an existing route.
   */
  describeRoute(callback?: (err: AWSError, data: AppMesh.Types.DescribeRouteOutput) => void): Request<AppMesh.Types.DescribeRouteOutput, AWSError>;
  /**
   * Describes an existing virtual node.
   */
  describeVirtualNode(params: AppMesh.Types.DescribeVirtualNodeInput, callback?: (err: AWSError, data: AppMesh.Types.DescribeVirtualNodeOutput) => void): Request<AppMesh.Types.DescribeVirtualNodeOutput, AWSError>;
  /**
   * Describes an existing virtual node.
   */
  describeVirtualNode(callback?: (err: AWSError, data: AppMesh.Types.DescribeVirtualNodeOutput) => void): Request<AppMesh.Types.DescribeVirtualNodeOutput, AWSError>;
  /**
   * Describes an existing virtual router.
   */
  describeVirtualRouter(params: AppMesh.Types.DescribeVirtualRouterInput, callback?: (err: AWSError, data: AppMesh.Types.DescribeVirtualRouterOutput) => void): Request<AppMesh.Types.DescribeVirtualRouterOutput, AWSError>;
  /**
   * Describes an existing virtual router.
   */
  describeVirtualRouter(callback?: (err: AWSError, data: AppMesh.Types.DescribeVirtualRouterOutput) => void): Request<AppMesh.Types.DescribeVirtualRouterOutput, AWSError>;
  /**
   * Returns a list of existing service meshes.
   */
  listMeshes(params: AppMesh.Types.ListMeshesInput, callback?: (err: AWSError, data: AppMesh.Types.ListMeshesOutput) => void): Request<AppMesh.Types.ListMeshesOutput, AWSError>;
  /**
   * Returns a list of existing service meshes.
   */
  listMeshes(callback?: (err: AWSError, data: AppMesh.Types.ListMeshesOutput) => void): Request<AppMesh.Types.ListMeshesOutput, AWSError>;
  /**
   * Returns a list of existing routes in a service mesh.
   */
  listRoutes(params: AppMesh.Types.ListRoutesInput, callback?: (err: AWSError, data: AppMesh.Types.ListRoutesOutput) => void): Request<AppMesh.Types.ListRoutesOutput, AWSError>;
  /**
   * Returns a list of existing routes in a service mesh.
   */
  listRoutes(callback?: (err: AWSError, data: AppMesh.Types.ListRoutesOutput) => void): Request<AppMesh.Types.ListRoutesOutput, AWSError>;
  /**
   * Returns a list of existing virtual nodes.
   */
  listVirtualNodes(params: AppMesh.Types.ListVirtualNodesInput, callback?: (err: AWSError, data: AppMesh.Types.ListVirtualNodesOutput) => void): Request<AppMesh.Types.ListVirtualNodesOutput, AWSError>;
  /**
   * Returns a list of existing virtual nodes.
   */
  listVirtualNodes(callback?: (err: AWSError, data: AppMesh.Types.ListVirtualNodesOutput) => void): Request<AppMesh.Types.ListVirtualNodesOutput, AWSError>;
  /**
   * Returns a list of existing virtual routers in a service mesh.
   */
  listVirtualRouters(params: AppMesh.Types.ListVirtualRoutersInput, callback?: (err: AWSError, data: AppMesh.Types.ListVirtualRoutersOutput) => void): Request<AppMesh.Types.ListVirtualRoutersOutput, AWSError>;
  /**
   * Returns a list of existing virtual routers in a service mesh.
   */
  listVirtualRouters(callback?: (err: AWSError, data: AppMesh.Types.ListVirtualRoutersOutput) => void): Request<AppMesh.Types.ListVirtualRoutersOutput, AWSError>;
  /**
   * Updates an existing route for a specified service mesh and virtual router.
   */
  updateRoute(params: AppMesh.Types.UpdateRouteInput, callback?: (err: AWSError, data: AppMesh.Types.UpdateRouteOutput) => void): Request<AppMesh.Types.UpdateRouteOutput, AWSError>;
  /**
   * Updates an existing route for a specified service mesh and virtual router.
   */
  updateRoute(callback?: (err: AWSError, data: AppMesh.Types.UpdateRouteOutput) => void): Request<AppMesh.Types.UpdateRouteOutput, AWSError>;
  /**
   * Updates an existing virtual node in a specified service mesh.
   */
  updateVirtualNode(params: AppMesh.Types.UpdateVirtualNodeInput, callback?: (err: AWSError, data: AppMesh.Types.UpdateVirtualNodeOutput) => void): Request<AppMesh.Types.UpdateVirtualNodeOutput, AWSError>;
  /**
   * Updates an existing virtual node in a specified service mesh.
   */
  updateVirtualNode(callback?: (err: AWSError, data: AppMesh.Types.UpdateVirtualNodeOutput) => void): Request<AppMesh.Types.UpdateVirtualNodeOutput, AWSError>;
  /**
   * Updates an existing virtual router in a specified service mesh.
   */
  updateVirtualRouter(params: AppMesh.Types.UpdateVirtualRouterInput, callback?: (err: AWSError, data: AppMesh.Types.UpdateVirtualRouterOutput) => void): Request<AppMesh.Types.UpdateVirtualRouterOutput, AWSError>;
  /**
   * Updates an existing virtual router in a specified service mesh.
   */
  updateVirtualRouter(callback?: (err: AWSError, data: AppMesh.Types.UpdateVirtualRouterOutput) => void): Request<AppMesh.Types.UpdateVirtualRouterOutput, AWSError>;
}
declare namespace AppMesh {
  export type ServiceName = string;
  export type HealthCheckThreshold = number;
  export interface DeleteMeshOutput {
    /**
     * The service mesh that was deleted.
     */
    mesh?: MeshData;
  }
  export type Long = number;
  export interface UpdateVirtualRouterOutput {
    /**
     * A full description of the virtual router that was updated.
     */
    virtualRouter?: VirtualRouterData;
  }
  export type MeshStatusCode = "ACTIVE"|"DELETED"|"INACTIVE"|string;
  export type PortNumber = number;
  export interface WeightedTarget {
    /**
     * The virtual node to associate with the weighted target.
     */
    virtualNode?: ResourceName;
    /**
     * The relative weight of the weighted target.
     */
    weight?: PercentInt;
  }
  export type VirtualNodeList = VirtualNodeRef[];
  export interface CreateRouteOutput {
    /**
     * The full description of your mesh following the create call.
     */
    route?: RouteData;
  }
  export type RouteList = RouteRef[];
  export interface DeleteVirtualNodeInput {
    /**
     * The name of the service mesh in which to delete the virtual node.
     */
    meshName: ResourceName;
    /**
     * The name of the virtual node to delete.
     */
    virtualNodeName: ResourceName;
  }
  export type ListVirtualRoutersLimit = number;
  export interface DnsServiceDiscovery {
    /**
     * The DNS service name for your virtual node.
     */
    serviceName?: ServiceName;
  }
  export type HealthCheckIntervalMillis = number;
  export interface VirtualNodeRef {
    /**
     * The full Amazon Resource Name (ARN) for the virtual node.
     */
    arn?: Arn;
    /**
     * The name of the service mesh in which the virtual node resides.
     */
    meshName?: ResourceName;
    /**
     * The name of the virtual node.
     */
    virtualNodeName?: ResourceName;
  }
  export interface DescribeRouteOutput {
    /**
     * The full description of your route.
     */
    route?: RouteData;
  }
  export interface ServiceDiscovery {
    /**
     * Specifies the DNS service name for the virtual node.
     */
    dns?: DnsServiceDiscovery;
  }
  export interface MeshStatus {
    /**
     * The current mesh status.
     */
    status?: MeshStatusCode;
  }
  export interface VirtualNodeData {
    /**
     * The name of the service mesh in which the virtual node resides.
     */
    meshName: ResourceName;
    /**
     * The associated metadata for the virtual node.
     */
    metadata?: ResourceMetadata;
    /**
     * The specifications of the virtual node.
     */
    spec?: VirtualNodeSpec;
    /**
     * The current status for the virtual node.
     */
    status?: VirtualNodeStatus;
    /**
     * The name of the virtual node.
     */
    virtualNodeName: ResourceName;
  }
  export interface VirtualNodeSpec {
    /**
     * The backends to which the virtual node is expected to send outbound traffic.
     */
    backends?: Backends;
    /**
     * The listeners from which the virtual node is expected to receive inbound traffic.
     */
    listeners?: Listeners;
    /**
     * The service discovery information for the virtual node.
     */
    serviceDiscovery?: ServiceDiscovery;
  }
  export type ServiceNames = ServiceName[];
  export interface MeshRef {
    /**
     * The full Amazon Resource Name (ARN) of the service mesh.
     */
    arn?: Arn;
    /**
     * The name of the service mesh.
     */
    meshName?: ResourceName;
  }
  export interface DescribeVirtualRouterInput {
    /**
     * The name of the service mesh in which the virtual router resides.
     */
    meshName: ResourceName;
    /**
     * The name of the virtual router to describe.
     */
    virtualRouterName: ResourceName;
  }
  export interface DescribeVirtualRouterOutput {
    /**
     * The full description of your virtual router.
     */
    virtualRouter?: VirtualRouterData;
  }
  export interface UpdateRouteOutput {
    /**
     * A full description of the route that was updated.
     */
    route?: RouteData;
  }
  export interface HttpRouteAction {
    /**
     * The targets that traffic is routed to when a request matches the route. You can specify
         one or more targets and their relative weights with which to distribute traffic.
     */
    weightedTargets?: WeightedTargets;
  }
  export interface CreateVirtualRouterOutput {
    /**
     * The full description of your virtual router following the create call.
     */
    virtualRouter?: VirtualRouterData;
  }
  export type HealthCheckTimeoutMillis = number;
  export interface CreateVirtualRouterInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh in which to create the virtual router.
     */
    meshName: ResourceName;
    /**
     * The virtual router specification to apply.
     */
    spec: VirtualRouterSpec;
    /**
     * The name to use for the virtual router.
     */
    virtualRouterName: ResourceName;
  }
  export interface RouteStatus {
    /**
     * The current status for the route.
     */
    status?: RouteStatusCode;
  }
  export interface ListMeshesInput {
    /**
     * The maximum number of mesh results returned by ListMeshes in paginated
         output. When this parameter is used, ListMeshes only returns
            limit results in a single page along with a nextToken response
         element. The remaining results of the initial request can be seen by sending another
            ListMeshes request with the returned nextToken value. This
         value can be between 1 and 100. If this parameter is not
         used, then ListMeshes returns up to 100 results and a
            nextToken value if applicable.
     */
    limit?: ListMeshesLimit;
    /**
     * The nextToken value returned from a previous paginated
         ListMeshes request where limit was used and the
         results exceeded the value of that parameter. Pagination continues from the end of the
         previous results that returned the nextToken value.
         
            This token should be treated as an opaque identifier that is only used to
                retrieve the next items in a list and not for other programmatic purposes.
        
     */
    nextToken?: String;
  }
  export interface VirtualRouterStatus {
    /**
     * The current status of the virtual router.
     */
    status?: VirtualRouterStatusCode;
  }
  export interface ListMeshesOutput {
    /**
     * The list of existing service meshes.
     */
    meshes: MeshList;
    /**
     * The nextToken value to include in a future ListMeshes
         request. When the results of a ListMeshes request exceed
         limit, this value can be used to retrieve the next page of
         results. This value is null when there are no more results to
         return.
     */
    nextToken?: String;
  }
  export interface DescribeVirtualNodeOutput {
    /**
     * The full description of your virtual node.
     */
    virtualNode?: VirtualNodeData;
  }
  export interface CreateMeshOutput {
    /**
     * The full description of your service mesh following the create call.
     */
    mesh?: MeshData;
  }
  export type ResourceName = string;
  export interface RouteData {
    /**
     * The name of the service mesh in which the route resides.
     */
    meshName: ResourceName;
    /**
     * The associated metadata for the route.
     */
    metadata?: ResourceMetadata;
    /**
     * The name of the route.
     */
    routeName: ResourceName;
    /**
     * The specifications of the route.
     */
    spec?: RouteSpec;
    /**
     * The status of the route.
     */
    status?: RouteStatus;
    /**
     * The virtual router with which the route is associated.
     */
    virtualRouterName: ResourceName;
  }
  export type Arn = string;
  export interface UpdateVirtualNodeInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh in which the virtual node resides.
     */
    meshName: ResourceName;
    /**
     * The new virtual node specification to apply. This overwrites the existing data.
     */
    spec: VirtualNodeSpec;
    /**
     * The name of the virtual node to update.
     */
    virtualNodeName: ResourceName;
  }
  export interface DeleteRouteInput {
    /**
     * The name of the service mesh in which to delete the route.
     */
    meshName: ResourceName;
    /**
     * The name of the route to delete.
     */
    routeName: ResourceName;
    /**
     * The name of the virtual router in which to delete the route.
     */
    virtualRouterName: ResourceName;
  }
  export type Listeners = Listener[];
  export interface ListRoutesInput {
    /**
     * The maximum number of mesh results returned by ListRoutes in paginated
         output. When this parameter is used, ListRoutes only returns
            limit results in a single page along with a nextToken response
         element. The remaining results of the initial request can be seen by sending another
            ListRoutes request with the returned nextToken value. This
         value can be between 1 and 100. If this parameter is not
         used, then ListRoutes returns up to 100 results and a
            nextToken value if applicable.
     */
    limit?: ListRoutesLimit;
    /**
     * The name of the service mesh in which to list routes.
     */
    meshName: ResourceName;
    /**
     * The nextToken value returned from a previous paginated
         ListRoutes request where limit was used and the
         results exceeded the value of that parameter. Pagination continues from the end of the
         previous results that returned the nextToken value.
     */
    nextToken?: String;
    /**
     * The name of the virtual router in which to list routes.
     */
    virtualRouterName: ResourceName;
  }
  export interface HttpRoute {
    /**
     * The action to take if a match is determined.
     */
    action?: HttpRouteAction;
    /**
     * The criteria for determining an HTTP request match.
     */
    match?: HttpRouteMatch;
  }
  export type Timestamp = Date;
  export interface ListRoutesOutput {
    /**
     * The nextToken value to include in a future ListRoutes
         request. When the results of a ListRoutes request exceed
         limit, this value can be used to retrieve the next page of
         results. This value is null when there are no more results to
         return.
     */
    nextToken?: String;
    /**
     * The list of existing routes for the specified service mesh and virtual router.
     */
    routes: RouteList;
  }
  export interface RouteSpec {
    /**
     * The HTTP routing information for the route.
     */
    httpRoute?: HttpRoute;
  }
  export interface DescribeVirtualNodeInput {
    /**
     * The name of the service mesh in which the virtual node resides.
     */
    meshName: ResourceName;
    /**
     * The name of the virtual node to describe.
     */
    virtualNodeName: ResourceName;
  }
  export interface VirtualRouterRef {
    /**
     * The full Amazon Resource Name (ARN) for the virtual router.
     */
    arn?: Arn;
    /**
     * The name of the service mesh in which the virtual router resides.
     */
    meshName?: ResourceName;
    /**
     * The name of the virtual router.
     */
    virtualRouterName?: ResourceName;
  }
  export type VirtualRouterStatusCode = "ACTIVE"|"DELETED"|"INACTIVE"|string;
  export interface ListVirtualNodesOutput {
    /**
     * The nextToken value to include in a future ListVirtualNodes
         request. When the results of a ListVirtualNodes request exceed
         limit, this value can be used to retrieve the next page of
         results. This value is null when there are no more results to
         return.
     */
    nextToken?: String;
    /**
     * The list of existing virtual nodes for the specified service mesh.
     */
    virtualNodes: VirtualNodeList;
  }
  export interface DeleteVirtualNodeOutput {
    /**
     * The virtual node that was deleted.
     */
    virtualNode?: VirtualNodeData;
  }
  export interface UpdateVirtualRouterInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh in which the virtual router resides.
     */
    meshName: ResourceName;
    /**
     * The new virtual router specification to apply. This overwrites the existing data.
     */
    spec: VirtualRouterSpec;
    /**
     * The name of the virtual router to update.
     */
    virtualRouterName: ResourceName;
  }
  export interface DescribeRouteInput {
    /**
     * The name of the service mesh in which the route resides.
     */
    meshName: ResourceName;
    /**
     * The name of the route to describe.
     */
    routeName: ResourceName;
    /**
     * The name of the virtual router with which the route is associated.
     */
    virtualRouterName: ResourceName;
  }
  export interface ListVirtualRoutersOutput {
    /**
     * The nextToken value to include in a future ListVirtualRouters
         request. When the results of a ListVirtualRouters request exceed
         limit, this value can be used to retrieve the next page of
         results. This value is null when there are no more results to
         return.
     */
    nextToken?: String;
    /**
     * The list of existing virtual routers for the specified service mesh.
     */
    virtualRouters: VirtualRouterList;
  }
  export interface CreateVirtualNodeOutput {
    /**
     * The full description of your virtual node following the create call.
     */
    virtualNode?: VirtualNodeData;
  }
  export interface DeleteVirtualRouterOutput {
    /**
     * The virtual router that was deleted.
     */
    virtualRouter?: VirtualRouterData;
  }
  export type ListRoutesLimit = number;
  export type PortProtocol = "http"|"tcp"|string;
  export type MeshList = MeshRef[];
  export interface ResourceMetadata {
    /**
     * The full Amazon Resource Name (ARN) for the resource.
         
            After you create a virtual node, set this value (either the full ARN or the
            truncated resource name, for example, mesh/default/virtualNode/simpleapp,
            as the APPMESH_VIRTUAL_NODE_NAME environment variable for your task group's
            Envoy proxy container in your task definition or pod spec. This is then mapped to the
               node.id and node.cluster Envoy parameters.
            If you require your Envoy stats or tracing to use a different name, you can override
            the node.cluster value that is set by
               APPMESH_VIRTUAL_NODE_NAME with the
               APPMESH_VIRTUAL_NODE_CLUSTER environment variable.
         
     */
    arn?: Arn;
    /**
     * The Unix epoch timestamp in seconds for when the resource was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix epoch timestamp in seconds for when the resource was last updated.
     */
    lastUpdatedAt?: Timestamp;
    /**
     * The unique identifier for the resource.
     */
    uid?: String;
    /**
     * The version of the resource. Resources are created at version 1, and this version is
         incremented each time they are updated.
     */
    version?: Long;
  }
  export interface CreateMeshInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name to use for the service mesh.
     */
    meshName: ResourceName;
  }
  export interface PortMapping {
    /**
     * The port used for the port mapping.
     */
    port?: PortNumber;
    /**
     * The protocol used for the port mapping.
     */
    protocol?: PortProtocol;
  }
  export type VirtualNodeStatusCode = "ACTIVE"|"DELETED"|"INACTIVE"|string;
  export interface DeleteVirtualRouterInput {
    /**
     * The name of the service mesh in which to delete the virtual router.
     */
    meshName: ResourceName;
    /**
     * The name of the virtual router to delete.
     */
    virtualRouterName: ResourceName;
  }
  export interface VirtualRouterSpec {
    /**
     * The service mesh service names to associate with the virtual router.
     */
    serviceNames?: ServiceNames;
  }
  export interface UpdateRouteInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh in which the route resides.
     */
    meshName: ResourceName;
    /**
     * The name of the route to update.
     */
    routeName: ResourceName;
    /**
     * The new route specification to apply. This overwrites the existing data.
     */
    spec: RouteSpec;
    /**
     * The name of the virtual router with which the route is associated.
     */
    virtualRouterName: ResourceName;
  }
  export type PercentInt = number;
  export type ListMeshesLimit = number;
  export interface DescribeMeshInput {
    /**
     * The name of the service mesh to describe.
     */
    meshName: ResourceName;
  }
  export interface DescribeMeshOutput {
    /**
     * The full description of your service mesh.
     */
    mesh?: MeshData;
  }
  export interface VirtualRouterData {
    /**
     * The name of the service mesh in which the virtual router resides.
     */
    meshName: ResourceName;
    /**
     * The associated metadata for the virtual router.
     */
    metadata?: ResourceMetadata;
    /**
     * The specifications of the virtual router.
     */
    spec?: VirtualRouterSpec;
    /**
     * The current status of the virtual router.
     */
    status?: VirtualRouterStatus;
    /**
     * The name of the virtual router.
     */
    virtualRouterName: ResourceName;
  }
  export type VirtualRouterList = VirtualRouterRef[];
  export interface Listener {
    /**
     * The health check information for the listener.
     */
    healthCheck?: HealthCheckPolicy;
    /**
     * The port mapping information for the listener.
     */
    portMapping?: PortMapping;
  }
  export type String = string;
  export interface HealthCheckPolicy {
    /**
     * The number of consecutive successful health checks that must occur before declaring
         listener healthy.
     */
    healthyThreshold: HealthCheckThreshold;
    /**
     * The time period in milliseconds between each health check execution.
     */
    intervalMillis: HealthCheckIntervalMillis;
    /**
     * The destination path for the health check request. This is only required if the
         specified protocol is HTTP; if the protocol is TCP, then this parameter is ignored.
     */
    path?: String;
    /**
     * The destination port for the health check request. This port must match the port defined
         in the PortMapping for the listener.
     */
    port?: PortNumber;
    /**
     * The protocol for the health check request.
     */
    protocol: PortProtocol;
    /**
     * The amount of time to wait when receiving a response from the health check, in
         milliseconds.
     */
    timeoutMillis: HealthCheckTimeoutMillis;
    /**
     * The number of consecutive failed health checks that must occur before declaring a
         virtual node unhealthy. 
     */
    unhealthyThreshold: HealthCheckThreshold;
  }
  export interface ListVirtualRoutersInput {
    /**
     * The maximum number of mesh results returned by ListVirtualRouters in
         paginated output. When this parameter is used, ListVirtualRouters only returns
         limit results in a single page along with a nextToken
         response element. The remaining results of the initial request can be seen by sending
         another ListVirtualRouters request with the returned nextToken
         value. This value can be between 1 and 100. If this
         parameter is not used, then ListVirtualRouters returns up to
         100 results and a nextToken value if applicable.
     */
    limit?: ListVirtualRoutersLimit;
    /**
     * The name of the service mesh in which to list virtual routers.
     */
    meshName: ResourceName;
    /**
     * The nextToken value returned from a previous paginated
         ListVirtualRouters request where limit was used and the
         results exceeded the value of that parameter. Pagination continues from the end of the
         previous results that returned the nextToken value.
     */
    nextToken?: String;
  }
  export interface CreateVirtualNodeInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh in which to create the virtual node.
     */
    meshName: ResourceName;
    /**
     * The virtual node specification to apply.
     */
    spec: VirtualNodeSpec;
    /**
     * The name to use for the virtual node.
     */
    virtualNodeName: ResourceName;
  }
  export interface MeshData {
    /**
     * The name of the service mesh.
     */
    meshName: ResourceName;
    /**
     * The associated metadata for the service mesh.
     */
    metadata: ResourceMetadata;
    /**
     * The status of the service mesh.
     */
    status?: MeshStatus;
  }
  export type ListVirtualNodesLimit = number;
  export type WeightedTargets = WeightedTarget[];
  export interface DeleteMeshInput {
    /**
     * The name of the service mesh to delete.
     */
    meshName: ResourceName;
  }
  export interface HttpRouteMatch {
    /**
     * Specifies the path with which to match requests. This parameter must always start with
            /, which by itself matches all requests to the virtual router service name.
         You can also match for path-based routing of requests. For example, if your virtual router
         service name is my-service.local, and you want the route to match requests to
            my-service.local/metrics, then your prefix should be
         /metrics.
     */
    prefix?: String;
  }
  export interface DeleteRouteOutput {
    /**
     * The route that was deleted.
     */
    route?: RouteData;
  }
  export type Backends = ServiceName[];
  export interface CreateRouteInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh in which to create the route.
     */
    meshName: ResourceName;
    /**
     * The name to use for the route.
     */
    routeName: ResourceName;
    /**
     * The route specification to apply.
     */
    spec: RouteSpec;
    /**
     * The name of the virtual router in which to create the route.
     */
    virtualRouterName: ResourceName;
  }
  export interface VirtualNodeStatus {
    /**
     * The current status of the virtual node.
     */
    status?: VirtualNodeStatusCode;
  }
  export interface ListVirtualNodesInput {
    /**
     * The maximum number of mesh results returned by ListVirtualNodes in
         paginated output. When this parameter is used, ListVirtualNodes only returns
         limit results in a single page along with a nextToken
         response element. The remaining results of the initial request can be seen by sending
         another ListVirtualNodes request with the returned nextToken
         value. This value can be between 1 and 100. If this
         parameter is not used, then ListVirtualNodes returns up to
         100 results and a nextToken value if applicable.
     */
    limit?: ListVirtualNodesLimit;
    /**
     * The name of the service mesh in which to list virtual nodes.
     */
    meshName: ResourceName;
    /**
     * The nextToken value returned from a previous paginated
         ListVirtualNodes request where limit was used and the
         results exceeded the value of that parameter. Pagination continues from the end of the
         previous results that returned the nextToken value.
     */
    nextToken?: String;
  }
  export interface RouteRef {
    /**
     * The full Amazon Resource Name (ARN) for the route.
     */
    arn?: Arn;
    /**
     * The name of the service mesh in which the route resides.
     */
    meshName?: ResourceName;
    /**
     * The name of the route.
     */
    routeName?: ResourceName;
    /**
     * The virtual router with which the route is associated.
     */
    virtualRouterName?: ResourceName;
  }
  export type RouteStatusCode = "ACTIVE"|"DELETED"|"INACTIVE"|string;
  export interface UpdateVirtualNodeOutput {
    /**
     * A full description of the virtual node that was updated.
     */
    virtualNode?: VirtualNodeData;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-10-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AppMesh client.
   */
  export import Types = AppMesh;
}
export = AppMesh;
