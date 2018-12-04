import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DirectConnect extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DirectConnect.Types.ClientConfiguration)
  config: Config & DirectConnect.Types.ClientConfiguration;
  /**
   * Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.  Intended for use by AWS Direct Connect partners only. 
   */
  allocateConnectionOnInterconnect(params: DirectConnect.Types.AllocateConnectionOnInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.  Intended for use by AWS Direct Connect partners only. 
   */
  allocateConnectionOnInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a hosted connection on the specified interconnect or a link aggregation group (LAG). Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect or LAG.  Intended for use by AWS Direct Connect partners only. 
   */
  allocateHostedConnection(params: DirectConnect.Types.AllocateHostedConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a hosted connection on the specified interconnect or a link aggregation group (LAG). Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect or LAG.  Intended for use by AWS Direct Connect partners only. 
   */
  allocateHostedConnection(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Provisions a private virtual interface to be owned by the specified AWS account. Virtual interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until then, the virtual interface is in the Confirming state and is not available to handle traffic.
   */
  allocatePrivateVirtualInterface(params: DirectConnect.Types.AllocatePrivateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Provisions a private virtual interface to be owned by the specified AWS account. Virtual interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until then, the virtual interface is in the Confirming state and is not available to handle traffic.
   */
  allocatePrivateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Provisions a public virtual interface to be owned by the specified AWS account. The owner of a connection calls this function to provision a public virtual interface to be owned by the specified AWS account. Virtual interfaces created using this function must be confirmed by the owner using ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.
   */
  allocatePublicVirtualInterface(params: DirectConnect.Types.AllocatePublicVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Provisions a public virtual interface to be owned by the specified AWS account. The owner of a connection calls this function to provision a public virtual interface to be owned by the specified AWS account. Virtual interfaces created using this function must be confirmed by the owner using ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.
   */
  allocatePublicVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to AWS is interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails. Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.
   */
  associateConnectionWithLag(params: DirectConnect.Types.AssociateConnectionWithLagRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to AWS is interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails. Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.
   */
  associateConnectionWithLag(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to AWS as it is being migrated.  Intended for use by AWS Direct Connect partners only. 
   */
  associateHostedConnection(params: DirectConnect.Types.AssociateHostedConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to AWS as it is being migrated.  Intended for use by AWS Direct Connect partners only. 
   */
  associateHostedConnection(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to AWS is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails. Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.
   */
  associateVirtualInterface(params: DirectConnect.Types.AssociateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to AWS is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails. Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using AssociateHostedConnection. To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.
   */
  associateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted connection is initially in the Ordering state, and remains in this state until the owner confirms creation of the hosted connection.
   */
  confirmConnection(params: DirectConnect.Types.ConfirmConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.ConfirmConnectionResponse) => void): Request<DirectConnect.Types.ConfirmConnectionResponse, AWSError>;
  /**
   * Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted connection is initially in the Ordering state, and remains in this state until the owner confirms creation of the hosted connection.
   */
  confirmConnection(callback?: (err: AWSError, data: DirectConnect.Types.ConfirmConnectionResponse) => void): Request<DirectConnect.Types.ConfirmConnectionResponse, AWSError>;
  /**
   * Accepts ownership of a private virtual interface created by another AWS account. After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.
   */
  confirmPrivateVirtualInterface(params: DirectConnect.Types.ConfirmPrivateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse, AWSError>;
  /**
   * Accepts ownership of a private virtual interface created by another AWS account. After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.
   */
  confirmPrivateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse, AWSError>;
  /**
   * Accepts ownership of a public virtual interface created by another AWS account. After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.
   */
  confirmPublicVirtualInterface(params: DirectConnect.Types.ConfirmPublicVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse, AWSError>;
  /**
   * Accepts ownership of a public virtual interface created by another AWS account. After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.
   */
  confirmPublicVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse, AWSError>;
  /**
   * Creates a BGP peer on the specified virtual interface. The BGP peer cannot be in the same address family (IPv4/IPv6) of an existing BGP peer on the virtual interface. You must create a BGP peer for the corresponding address family in order to access AWS resources that also use that address family. When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses. For a public virtual interface, the Autonomous System Number (ASN) must be private or already whitelisted for the virtual interface.
   */
  createBGPPeer(params: DirectConnect.Types.CreateBGPPeerRequest, callback?: (err: AWSError, data: DirectConnect.Types.CreateBGPPeerResponse) => void): Request<DirectConnect.Types.CreateBGPPeerResponse, AWSError>;
  /**
   * Creates a BGP peer on the specified virtual interface. The BGP peer cannot be in the same address family (IPv4/IPv6) of an existing BGP peer on the virtual interface. You must create a BGP peer for the corresponding address family in order to access AWS resources that also use that address family. When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses. For a public virtual interface, the Autonomous System Number (ASN) must be private or already whitelisted for the virtual interface.
   */
  createBGPPeer(callback?: (err: AWSError, data: DirectConnect.Types.CreateBGPPeerResponse) => void): Request<DirectConnect.Types.CreateBGPPeerResponse, AWSError>;
  /**
   * Creates a connection between a customer network and a specific AWS Direct Connect location. A connection links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. To find the locations for your Region, use DescribeLocations. You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.
   */
  createConnection(params: DirectConnect.Types.CreateConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a connection between a customer network and a specific AWS Direct Connect location. A connection links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. To find the locations for your Region, use DescribeLocations. You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.
   */
  createConnection(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any AWS Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different AWS Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.
   */
  createDirectConnectGateway(params: DirectConnect.Types.CreateDirectConnectGatewayRequest, callback?: (err: AWSError, data: DirectConnect.Types.CreateDirectConnectGatewayResult) => void): Request<DirectConnect.Types.CreateDirectConnectGatewayResult, AWSError>;
  /**
   * Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any AWS Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different AWS Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.
   */
  createDirectConnectGateway(callback?: (err: AWSError, data: DirectConnect.Types.CreateDirectConnectGatewayResult) => void): Request<DirectConnect.Types.CreateDirectConnectGatewayResult, AWSError>;
  /**
   * Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.
   */
  createDirectConnectGatewayAssociation(params: DirectConnect.Types.CreateDirectConnectGatewayAssociationRequest, callback?: (err: AWSError, data: DirectConnect.Types.CreateDirectConnectGatewayAssociationResult) => void): Request<DirectConnect.Types.CreateDirectConnectGatewayAssociationResult, AWSError>;
  /**
   * Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.
   */
  createDirectConnectGatewayAssociation(callback?: (err: AWSError, data: DirectConnect.Types.CreateDirectConnectGatewayAssociationResult) => void): Request<DirectConnect.Types.CreateDirectConnectGatewayAssociationResult, AWSError>;
  /**
   * Creates an interconnect between an AWS Direct Connect partner's network and a specific AWS Direct Connect location. An interconnect is a connection which is capable of hosting other connections. The partner can use an interconnect to provide sub-1Gbps AWS Direct Connect service to tier 2 customers who do not have their own connections. Like a standard connection, an interconnect links the partner's network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created. For each end customer, the AWS Direct Connect partner provisions a connection on their interconnect by calling AllocateConnectionOnInterconnect. The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the partner.  Intended for use by AWS Direct Connect partners only. 
   */
  createInterconnect(params: DirectConnect.Types.CreateInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.Interconnect) => void): Request<DirectConnect.Types.Interconnect, AWSError>;
  /**
   * Creates an interconnect between an AWS Direct Connect partner's network and a specific AWS Direct Connect location. An interconnect is a connection which is capable of hosting other connections. The partner can use an interconnect to provide sub-1Gbps AWS Direct Connect service to tier 2 customers who do not have their own connections. Like a standard connection, an interconnect links the partner's network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect router. You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created. For each end customer, the AWS Direct Connect partner provisions a connection on their interconnect by calling AllocateConnectionOnInterconnect. The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the partner.  Intended for use by AWS Direct Connect partners only. 
   */
  createInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.Interconnect) => void): Request<DirectConnect.Types.Interconnect, AWSError>;
  /**
   * Creates a link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface. All connections in a LAG must use the same bandwidth and must terminate at the same AWS Direct Connect endpoint. You can have up to 10 connections per LAG. Regardless of this limit, if you request more connections for the LAG than AWS Direct Connect can allocate on a single endpoint, no LAG is created. You can specify an existing physical connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical connection or hosted connections, and re-establishes them as a member of the LAG. The LAG will be created on the same AWS Direct Connect endpoint to which the connection terminates. Any virtual interfaces associated with the connection are automatically disassociated and re-associated with the LAG. The connection ID does not change. If the AWS account used to create a LAG is a registered AWS Direct Connect partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.
   */
  createLag(params: DirectConnect.Types.CreateLagRequest, callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Creates a link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface. All connections in a LAG must use the same bandwidth and must terminate at the same AWS Direct Connect endpoint. You can have up to 10 connections per LAG. Regardless of this limit, if you request more connections for the LAG than AWS Direct Connect can allocate on a single endpoint, no LAG is created. You can specify an existing physical connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical connection or hosted connections, and re-establishes them as a member of the LAG. The LAG will be created on the same AWS Direct Connect endpoint to which the connection terminates. Any virtual interfaces associated with the connection are automatically disassociated and re-associated with the LAG. The connection ID does not change. If the AWS account used to create a LAG is a registered AWS Direct Connect partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.
   */
  createLag(callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Creates a private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different AWS Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.
   */
  createPrivateVirtualInterface(params: DirectConnect.Types.CreatePrivateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Creates a private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different AWS Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.
   */
  createPrivateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Creates a public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A public virtual interface supports sending traffic to public services of AWS such as Amazon S3. When creating an IPv6 public virtual interface (addressFamily is ipv6), leave the customer and amazon address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.
   */
  createPublicVirtualInterface(params: DirectConnect.Types.CreatePublicVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Creates a public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A public virtual interface supports sending traffic to public services of AWS such as Amazon S3. When creating an IPv6 public virtual interface (addressFamily is ipv6), leave the customer and amazon address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.
   */
  createPublicVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Deletes the BGP peer on the specified virtual interface with the specified customer address and ASN. You cannot delete the last BGP peer from a virtual interface.
   */
  deleteBGPPeer(params: DirectConnect.Types.DeleteBGPPeerRequest, callback?: (err: AWSError, data: DirectConnect.Types.DeleteBGPPeerResponse) => void): Request<DirectConnect.Types.DeleteBGPPeerResponse, AWSError>;
  /**
   * Deletes the BGP peer on the specified virtual interface with the specified customer address and ASN. You cannot delete the last BGP peer from a virtual interface.
   */
  deleteBGPPeer(callback?: (err: AWSError, data: DirectConnect.Types.DeleteBGPPeerResponse) => void): Request<DirectConnect.Types.DeleteBGPPeerResponse, AWSError>;
  /**
   * Deletes the specified connection. Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the AWS Direct Connect location, you must cancel your service with them separately.
   */
  deleteConnection(params: DirectConnect.Types.DeleteConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Deletes the specified connection. Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the AWS Direct Connect location, you must cancel your service with them separately.
   */
  deleteConnection(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways that are associated with the Direct Connect gateway.
   */
  deleteDirectConnectGateway(params: DirectConnect.Types.DeleteDirectConnectGatewayRequest, callback?: (err: AWSError, data: DirectConnect.Types.DeleteDirectConnectGatewayResult) => void): Request<DirectConnect.Types.DeleteDirectConnectGatewayResult, AWSError>;
  /**
   * Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways that are associated with the Direct Connect gateway.
   */
  deleteDirectConnectGateway(callback?: (err: AWSError, data: DirectConnect.Types.DeleteDirectConnectGatewayResult) => void): Request<DirectConnect.Types.DeleteDirectConnectGatewayResult, AWSError>;
  /**
   * Deletes the association between the specified Direct Connect gateway and virtual private gateway.
   */
  deleteDirectConnectGatewayAssociation(params: DirectConnect.Types.DeleteDirectConnectGatewayAssociationRequest, callback?: (err: AWSError, data: DirectConnect.Types.DeleteDirectConnectGatewayAssociationResult) => void): Request<DirectConnect.Types.DeleteDirectConnectGatewayAssociationResult, AWSError>;
  /**
   * Deletes the association between the specified Direct Connect gateway and virtual private gateway.
   */
  deleteDirectConnectGatewayAssociation(callback?: (err: AWSError, data: DirectConnect.Types.DeleteDirectConnectGatewayAssociationResult) => void): Request<DirectConnect.Types.DeleteDirectConnectGatewayAssociationResult, AWSError>;
  /**
   * Deletes the specified interconnect.  Intended for use by AWS Direct Connect partners only. 
   */
  deleteInterconnect(params: DirectConnect.Types.DeleteInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.DeleteInterconnectResponse) => void): Request<DirectConnect.Types.DeleteInterconnectResponse, AWSError>;
  /**
   * Deletes the specified interconnect.  Intended for use by AWS Direct Connect partners only. 
   */
  deleteInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.DeleteInterconnectResponse) => void): Request<DirectConnect.Types.DeleteInterconnectResponse, AWSError>;
  /**
   * Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.
   */
  deleteLag(params: DirectConnect.Types.DeleteLagRequest, callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.
   */
  deleteLag(callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Deletes a virtual interface.
   */
  deleteVirtualInterface(params: DirectConnect.Types.DeleteVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.DeleteVirtualInterfaceResponse) => void): Request<DirectConnect.Types.DeleteVirtualInterfaceResponse, AWSError>;
  /**
   * Deletes a virtual interface.
   */
  deleteVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.DeleteVirtualInterfaceResponse) => void): Request<DirectConnect.Types.DeleteVirtualInterfaceResponse, AWSError>;
  /**
   * Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for a connection. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect User Guide.
   */
  describeConnectionLoa(params: DirectConnect.Types.DescribeConnectionLoaRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeConnectionLoaResponse) => void): Request<DirectConnect.Types.DescribeConnectionLoaResponse, AWSError>;
  /**
   * Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for a connection. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect User Guide.
   */
  describeConnectionLoa(callback?: (err: AWSError, data: DirectConnect.Types.DescribeConnectionLoaResponse) => void): Request<DirectConnect.Types.DescribeConnectionLoaResponse, AWSError>;
  /**
   * Displays the specified connection or all connections in this Region.
   */
  describeConnections(params: DirectConnect.Types.DescribeConnectionsRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Displays the specified connection or all connections in this Region.
   */
  describeConnections(callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been provisioned on the specified interconnect.  Intended for use by AWS Direct Connect partners only. 
   */
  describeConnectionsOnInterconnect(params: DirectConnect.Types.DescribeConnectionsOnInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been provisioned on the specified interconnect.  Intended for use by AWS Direct Connect partners only. 
   */
  describeConnectionsOnInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Lists the associations between your Direct Connect gateways and virtual private gateways. You must specify a Direct Connect gateway, a virtual private gateway, or both. If you specify a Direct Connect gateway, the response contains all virtual private gateways associated with the Direct Connect gateway. If you specify a virtual private gateway, the response contains all Direct Connect gateways associated with the virtual private gateway. If you specify both, the response contains the association between the Direct Connect gateway and the virtual private gateway.
   */
  describeDirectConnectGatewayAssociations(params: DirectConnect.Types.DescribeDirectConnectGatewayAssociationsRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeDirectConnectGatewayAssociationsResult) => void): Request<DirectConnect.Types.DescribeDirectConnectGatewayAssociationsResult, AWSError>;
  /**
   * Lists the associations between your Direct Connect gateways and virtual private gateways. You must specify a Direct Connect gateway, a virtual private gateway, or both. If you specify a Direct Connect gateway, the response contains all virtual private gateways associated with the Direct Connect gateway. If you specify a virtual private gateway, the response contains all Direct Connect gateways associated with the virtual private gateway. If you specify both, the response contains the association between the Direct Connect gateway and the virtual private gateway.
   */
  describeDirectConnectGatewayAssociations(callback?: (err: AWSError, data: DirectConnect.Types.DescribeDirectConnectGatewayAssociationsResult) => void): Request<DirectConnect.Types.DescribeDirectConnectGatewayAssociationsResult, AWSError>;
  /**
   * Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.
   */
  describeDirectConnectGatewayAttachments(params: DirectConnect.Types.DescribeDirectConnectGatewayAttachmentsRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeDirectConnectGatewayAttachmentsResult) => void): Request<DirectConnect.Types.DescribeDirectConnectGatewayAttachmentsResult, AWSError>;
  /**
   * Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.
   */
  describeDirectConnectGatewayAttachments(callback?: (err: AWSError, data: DirectConnect.Types.DescribeDirectConnectGatewayAttachmentsResult) => void): Request<DirectConnect.Types.DescribeDirectConnectGatewayAttachmentsResult, AWSError>;
  /**
   * Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.
   */
  describeDirectConnectGateways(params: DirectConnect.Types.DescribeDirectConnectGatewaysRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeDirectConnectGatewaysResult) => void): Request<DirectConnect.Types.DescribeDirectConnectGatewaysResult, AWSError>;
  /**
   * Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.
   */
  describeDirectConnectGateways(callback?: (err: AWSError, data: DirectConnect.Types.DescribeDirectConnectGatewaysResult) => void): Request<DirectConnect.Types.DescribeDirectConnectGatewaysResult, AWSError>;
  /**
   * Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).  Intended for use by AWS Direct Connect partners only. 
   */
  describeHostedConnections(params: DirectConnect.Types.DescribeHostedConnectionsRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).  Intended for use by AWS Direct Connect partners only. 
   */
  describeHostedConnections(callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for the specified interconnect. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect User Guide.
   */
  describeInterconnectLoa(params: DirectConnect.Types.DescribeInterconnectLoaRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeInterconnectLoaResponse) => void): Request<DirectConnect.Types.DescribeInterconnectLoaResponse, AWSError>;
  /**
   * Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for the specified interconnect. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect User Guide.
   */
  describeInterconnectLoa(callback?: (err: AWSError, data: DirectConnect.Types.DescribeInterconnectLoaResponse) => void): Request<DirectConnect.Types.DescribeInterconnectLoaResponse, AWSError>;
  /**
   * Lists the interconnects owned by the AWS account or only the specified interconnect.
   */
  describeInterconnects(params: DirectConnect.Types.DescribeInterconnectsRequest, callback?: (err: AWSError, data: DirectConnect.Types.Interconnects) => void): Request<DirectConnect.Types.Interconnects, AWSError>;
  /**
   * Lists the interconnects owned by the AWS account or only the specified interconnect.
   */
  describeInterconnects(callback?: (err: AWSError, data: DirectConnect.Types.Interconnects) => void): Request<DirectConnect.Types.Interconnects, AWSError>;
  /**
   * Describes all your link aggregation groups (LAG) or the specified LAG.
   */
  describeLags(params: DirectConnect.Types.DescribeLagsRequest, callback?: (err: AWSError, data: DirectConnect.Types.Lags) => void): Request<DirectConnect.Types.Lags, AWSError>;
  /**
   * Describes all your link aggregation groups (LAG) or the specified LAG.
   */
  describeLags(callback?: (err: AWSError, data: DirectConnect.Types.Lags) => void): Request<DirectConnect.Types.Lags, AWSError>;
  /**
   * Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect User Guide.
   */
  describeLoa(params: DirectConnect.Types.DescribeLoaRequest, callback?: (err: AWSError, data: DirectConnect.Types.Loa) => void): Request<DirectConnect.Types.Loa, AWSError>;
  /**
   * Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect User Guide.
   */
  describeLoa(callback?: (err: AWSError, data: DirectConnect.Types.Loa) => void): Request<DirectConnect.Types.Loa, AWSError>;
  /**
   * Lists the AWS Direct Connect locations in the current AWS Region. These are the locations that can be selected when calling CreateConnection or CreateInterconnect.
   */
  describeLocations(callback?: (err: AWSError, data: DirectConnect.Types.Locations) => void): Request<DirectConnect.Types.Locations, AWSError>;
  /**
   * Describes the tags associated with the specified AWS Direct Connect resources.
   */
  describeTags(params: DirectConnect.Types.DescribeTagsRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeTagsResponse) => void): Request<DirectConnect.Types.DescribeTagsResponse, AWSError>;
  /**
   * Describes the tags associated with the specified AWS Direct Connect resources.
   */
  describeTags(callback?: (err: AWSError, data: DirectConnect.Types.DescribeTagsResponse) => void): Request<DirectConnect.Types.DescribeTagsResponse, AWSError>;
  /**
   * Lists the virtual private gateways owned by the AWS account. You can create one or more AWS Direct Connect private virtual interfaces linked to a virtual private gateway.
   */
  describeVirtualGateways(callback?: (err: AWSError, data: DirectConnect.Types.VirtualGateways) => void): Request<DirectConnect.Types.VirtualGateways, AWSError>;
  /**
   * Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer network.
   */
  describeVirtualInterfaces(params: DirectConnect.Types.DescribeVirtualInterfacesRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterfaces) => void): Request<DirectConnect.Types.VirtualInterfaces, AWSError>;
  /**
   * Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned. A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer network.
   */
  describeVirtualInterfaces(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterfaces) => void): Request<DirectConnect.Types.VirtualInterfaces, AWSError>;
  /**
   * Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an AWS Direct Connect partner is automatically converted to an interconnect. If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. 
   */
  disassociateConnectionFromLag(params: DirectConnect.Types.DisassociateConnectionFromLagRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an AWS Direct Connect partner is automatically converted to an interconnect. If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. 
   */
  disassociateConnectionFromLag(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Adds the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.
   */
  tagResource(params: DirectConnect.Types.TagResourceRequest, callback?: (err: AWSError, data: DirectConnect.Types.TagResourceResponse) => void): Request<DirectConnect.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.
   */
  tagResource(callback?: (err: AWSError, data: DirectConnect.Types.TagResourceResponse) => void): Request<DirectConnect.Types.TagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified AWS Direct Connect resource.
   */
  untagResource(params: DirectConnect.Types.UntagResourceRequest, callback?: (err: AWSError, data: DirectConnect.Types.UntagResourceResponse) => void): Request<DirectConnect.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified AWS Direct Connect resource.
   */
  untagResource(callback?: (err: AWSError, data: DirectConnect.Types.UntagResourceResponse) => void): Request<DirectConnect.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the attributes of the specified link aggregation group (LAG). You can update the following attributes:   The name of the LAG.   The value for the minimum number of connections that must be operational for the LAG itself to be operational.    When you create a LAG, the default value for the minimum number of operational connections is zero (0). If you update this value and the number of operational connections falls below the specified value, the LAG automatically goes down to avoid over-utilization of the remaining connections. Adjust this value with care, as it could force the LAG down if it is set higher than the current number of operational connections.
   */
  updateLag(params: DirectConnect.Types.UpdateLagRequest, callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Updates the attributes of the specified link aggregation group (LAG). You can update the following attributes:   The name of the LAG.   The value for the minimum number of connections that must be operational for the LAG itself to be operational.    When you create a LAG, the default value for the minimum number of operational connections is zero (0). If you update this value and the number of operational connections falls below the specified value, the LAG automatically goes down to avoid over-utilization of the remaining connections. Adjust this value with care, as it could force the LAG down if it is set higher than the current number of operational connections.
   */
  updateLag(callback?: (err: AWSError, data: DirectConnect.Types.Lag) => void): Request<DirectConnect.Types.Lag, AWSError>;
  /**
   * Updates the specified attributes of the specified virtual private interface. Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.
   */
  updateVirtualInterfaceAttributes(params: DirectConnect.Types.UpdateVirtualInterfaceAttributesRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Updates the specified attributes of the specified virtual private interface. Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.
   */
  updateVirtualInterfaceAttributes(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
}
declare namespace DirectConnect {
  export type ASN = number;
  export type AddressFamily = "ipv4"|"ipv6"|string;
  export interface AllocateConnectionOnInterconnectRequest {
    /**
     * The bandwidth of the connection, in Mbps. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, and 500Mbps.
     */
    bandwidth: Bandwidth;
    /**
     * The name of the provisioned connection.
     */
    connectionName: ConnectionName;
    /**
     * The ID of the AWS account of the customer for whom the connection will be provisioned.
     */
    ownerAccount: OwnerAccount;
    /**
     * The ID of the interconnect on which the connection will be provisioned. For example, dxcon-456abc78.
     */
    interconnectId: InterconnectId;
    /**
     * The dedicated VLAN provisioned to the connection.
     */
    vlan: VLAN;
  }
  export interface AllocateHostedConnectionRequest {
    /**
     * The ID of the interconnect or LAG.
     */
    connectionId: ConnectionId;
    /**
     * The ID of the AWS account ID of the customer for the connection.
     */
    ownerAccount: OwnerAccount;
    /**
     * The bandwidth of the hosted connection, in Mbps. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, and 500Mbps.
     */
    bandwidth: Bandwidth;
    /**
     * The name of the hosted connection.
     */
    connectionName: ConnectionName;
    /**
     * The dedicated VLAN provisioned to the hosted connection.
     */
    vlan: VLAN;
  }
  export interface AllocatePrivateVirtualInterfaceRequest {
    /**
     * The ID of the connection on which the private virtual interface is provisioned.
     */
    connectionId: ConnectionId;
    /**
     * The ID of the AWS account that owns the virtual private interface.
     */
    ownerAccount: OwnerAccount;
    /**
     * Information about the private virtual interface.
     */
    newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
  }
  export interface AllocatePublicVirtualInterfaceRequest {
    /**
     * The ID of the connection on which the public virtual interface is provisioned.
     */
    connectionId: ConnectionId;
    /**
     * The ID of the AWS account that owns the public virtual interface.
     */
    ownerAccount: OwnerAccount;
    /**
     * Information about the public virtual interface.
     */
    newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;
  }
  export type AmazonAddress = string;
  export interface AssociateConnectionWithLagRequest {
    /**
     * The ID of the connection. For example, dxcon-abc123.
     */
    connectionId: ConnectionId;
    /**
     * The ID of the LAG with which to associate the connection. For example, dxlag-abc123.
     */
    lagId: LagId;
  }
  export interface AssociateHostedConnectionRequest {
    /**
     * The ID of the hosted connection.
     */
    connectionId: ConnectionId;
    /**
     * The ID of the interconnect or the LAG.
     */
    parentConnectionId: ConnectionId;
  }
  export interface AssociateVirtualInterfaceRequest {
    /**
     * The ID of the virtual interface.
     */
    virtualInterfaceId: VirtualInterfaceId;
    /**
     * The ID of the LAG or connection.
     */
    connectionId: ConnectionId;
  }
  export type AwsDevice = string;
  export type AwsDeviceV2 = string;
  export type BGPAuthKey = string;
  export interface BGPPeer {
    /**
     * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
     */
    asn?: ASN;
    /**
     * The authentication key for BGP configuration.
     */
    authKey?: BGPAuthKey;
    /**
     * The address family for the BGP peer.
     */
    addressFamily?: AddressFamily;
    /**
     * The IP address assigned to the Amazon interface.
     */
    amazonAddress?: AmazonAddress;
    /**
     * The IP address assigned to the customer interface.
     */
    customerAddress?: CustomerAddress;
    /**
     * The state of the BGP peer. The following are the possible values:    verifying: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state applies only to public virtual interfaces.    pending: The BGP peer is created, and remains in this state until it is ready to be established.    available: The BGP peer is ready to be established.    deleting: The BGP peer is being deleted.    deleted: The BGP peer is deleted and cannot be established.  
     */
    bgpPeerState?: BGPPeerState;
    /**
     * The status of the BGP peer. The following are the possible values:    up: The BGP peer is established. This state does not indicate the state of the routing function. Ensure that you are receiving routes over the BGP session.    down: The BGP peer is down.    unknown: The BGP peer status is unknown.  
     */
    bgpStatus?: BGPStatus;
    /**
     * The Direct Connect endpoint on which the BGP peer terminates.
     */
    awsDeviceV2?: AwsDeviceV2;
  }
  export type BGPPeerList = BGPPeer[];
  export type BGPPeerState = "verifying"|"pending"|"available"|"deleting"|"deleted"|string;
  export type BGPStatus = "up"|"down"|string;
  export type Bandwidth = string;
  export type BooleanFlag = boolean;
  export type CIDR = string;
  export interface ConfirmConnectionRequest {
    /**
     * The ID of the hosted connection.
     */
    connectionId: ConnectionId;
  }
  export interface ConfirmConnectionResponse {
    /**
     * The state of the connection. The following are the possible values:    ordering: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.    requested: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.    pending: The connection has been approved and is being initialized.    available: The network link is up and the connection is ready for use.    down: The network link is down.    deleting: The connection is being deleted.    deleted: The connection has been deleted.    rejected: A hosted connection in the ordering state enters the rejected state if it is deleted by the customer.  
     */
    connectionState?: ConnectionState;
  }
  export interface ConfirmPrivateVirtualInterfaceRequest {
    /**
     * The ID of the virtual interface.
     */
    virtualInterfaceId: VirtualInterfaceId;
    /**
     * The ID of the virtual private gateway.
     */
    virtualGatewayId?: VirtualGatewayId;
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId?: DirectConnectGatewayId;
  }
  export interface ConfirmPrivateVirtualInterfaceResponse {
    /**
     * The state of the virtual interface. The following are the possible values:    confirming: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.    verifying: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.    pending: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.    available: A virtual interface that is able to forward traffic.    down: A virtual interface that is BGP down.    deleting: A virtual interface is in this state immediately after calling DeleteVirtualInterface until it can no longer forward traffic.    deleted: A virtual interface that cannot forward traffic.    rejected: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the Confirming state is deleted by the virtual interface owner, the virtual interface enters the Rejected state.  
     */
    virtualInterfaceState?: VirtualInterfaceState;
  }
  export interface ConfirmPublicVirtualInterfaceRequest {
    /**
     * The ID of the virtual interface.
     */
    virtualInterfaceId: VirtualInterfaceId;
  }
  export interface ConfirmPublicVirtualInterfaceResponse {
    /**
     * The state of the virtual interface. The following are the possible values:    confirming: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.    verifying: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.    pending: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.    available: A virtual interface that is able to forward traffic.    down: A virtual interface that is BGP down.    deleting: A virtual interface is in this state immediately after calling DeleteVirtualInterface until it can no longer forward traffic.    deleted: A virtual interface that cannot forward traffic.    rejected: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the Confirming state is deleted by the virtual interface owner, the virtual interface enters the Rejected state.  
     */
    virtualInterfaceState?: VirtualInterfaceState;
  }
  export interface Connection {
    /**
     * The ID of the AWS account that owns the connection.
     */
    ownerAccount?: OwnerAccount;
    /**
     * The ID of the connection.
     */
    connectionId?: ConnectionId;
    /**
     * The name of the connection.
     */
    connectionName?: ConnectionName;
    /**
     * The state of the connection. The following are the possible values:    ordering: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.    requested: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.    pending: The connection has been approved and is being initialized.    available: The network link is up and the connection is ready for use.    down: The network link is down.    deleting: The connection is being deleted.    deleted: The connection has been deleted.    rejected: A hosted connection in the ordering state enters the rejected state if it is deleted by the customer.  
     */
    connectionState?: ConnectionState;
    /**
     * The AWS Region where the connection is located.
     */
    region?: Region;
    /**
     * The location of the connection.
     */
    location?: LocationCode;
    /**
     * The bandwidth of the connection.
     */
    bandwidth?: Bandwidth;
    /**
     * The ID of the VLAN.
     */
    vlan?: VLAN;
    /**
     * The name of the AWS Direct Connect service provider associated with the connection.
     */
    partnerName?: PartnerName;
    /**
     * The time of the most recent call to DescribeLoa for this connection.
     */
    loaIssueTime?: LoaIssueTime;
    /**
     * The ID of the LAG.
     */
    lagId?: LagId;
    /**
     * The Direct Connect endpoint on which the physical connection terminates.
     */
    awsDevice?: AwsDevice;
    /**
     * Indicates whether jumbo frames (9001 MTU) are supported.
     */
    jumboFrameCapable?: JumboFrameCapable;
    /**
     * The Direct Connect endpoint on which the physical connection terminates.
     */
    awsDeviceV2?: AwsDeviceV2;
  }
  export type ConnectionId = string;
  export type ConnectionList = Connection[];
  export type ConnectionName = string;
  export type ConnectionState = "ordering"|"requested"|"pending"|"available"|"down"|"deleting"|"deleted"|"rejected"|string;
  export interface Connections {
    /**
     * The connections.
     */
    connections?: ConnectionList;
  }
  export type Count = number;
  export interface CreateBGPPeerRequest {
    /**
     * The ID of the virtual interface.
     */
    virtualInterfaceId?: VirtualInterfaceId;
    /**
     * Information about the BGP peer.
     */
    newBGPPeer?: NewBGPPeer;
  }
  export interface CreateBGPPeerResponse {
    /**
     * The virtual interface.
     */
    virtualInterface?: VirtualInterface;
  }
  export interface CreateConnectionRequest {
    /**
     * The location of the connection.
     */
    location: LocationCode;
    /**
     * The bandwidth of the connection.
     */
    bandwidth: Bandwidth;
    /**
     * The name of the connection.
     */
    connectionName: ConnectionName;
    /**
     * The ID of the LAG.
     */
    lagId?: LagId;
  }
  export interface CreateDirectConnectGatewayAssociationRequest {
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId: DirectConnectGatewayId;
    /**
     * The ID of the virtual private gateway.
     */
    virtualGatewayId: VirtualGatewayId;
  }
  export interface CreateDirectConnectGatewayAssociationResult {
    /**
     * The association to be created.
     */
    directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
  }
  export interface CreateDirectConnectGatewayRequest {
    /**
     * The name of the Direct Connect gateway.
     */
    directConnectGatewayName: DirectConnectGatewayName;
    /**
     * The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured on the Amazon side of the connection. The ASN must be in the private range of 64,512 to 65,534 or 4,200,000,000 to 4,294,967,294. The default is 64512.
     */
    amazonSideAsn?: LongAsn;
  }
  export interface CreateDirectConnectGatewayResult {
    /**
     * The Direct Connect gateway.
     */
    directConnectGateway?: DirectConnectGateway;
  }
  export interface CreateInterconnectRequest {
    /**
     * The name of the interconnect.
     */
    interconnectName: InterconnectName;
    /**
     * The port bandwidth, in Gbps. The possible values are 1 and 10.
     */
    bandwidth: Bandwidth;
    /**
     * The location of the interconnect.
     */
    location: LocationCode;
    /**
     * The ID of the LAG.
     */
    lagId?: LagId;
  }
  export interface CreateLagRequest {
    /**
     * The number of physical connections initially provisioned and bundled by the LAG.
     */
    numberOfConnections: Count;
    /**
     * The location for the LAG.
     */
    location: LocationCode;
    /**
     * The bandwidth of the individual physical connections bundled by the LAG. The possible values are 1Gbps and 10Gbps.
     */
    connectionsBandwidth: Bandwidth;
    /**
     * The name of the LAG.
     */
    lagName: LagName;
    /**
     * The ID of an existing connection to migrate to the LAG.
     */
    connectionId?: ConnectionId;
  }
  export interface CreatePrivateVirtualInterfaceRequest {
    /**
     * The ID of the connection.
     */
    connectionId: ConnectionId;
    /**
     * Information about the private virtual interface.
     */
    newPrivateVirtualInterface: NewPrivateVirtualInterface;
  }
  export interface CreatePublicVirtualInterfaceRequest {
    /**
     * The ID of the connection.
     */
    connectionId: ConnectionId;
    /**
     * Information about the public virtual interface.
     */
    newPublicVirtualInterface: NewPublicVirtualInterface;
  }
  export type CustomerAddress = string;
  export interface DeleteBGPPeerRequest {
    /**
     * The ID of the virtual interface.
     */
    virtualInterfaceId?: VirtualInterfaceId;
    /**
     * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
     */
    asn?: ASN;
    /**
     * The IP address assigned to the customer interface.
     */
    customerAddress?: CustomerAddress;
  }
  export interface DeleteBGPPeerResponse {
    /**
     * The virtual interface.
     */
    virtualInterface?: VirtualInterface;
  }
  export interface DeleteConnectionRequest {
    /**
     * The ID of the connection.
     */
    connectionId: ConnectionId;
  }
  export interface DeleteDirectConnectGatewayAssociationRequest {
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId: DirectConnectGatewayId;
    /**
     * The ID of the virtual private gateway.
     */
    virtualGatewayId: VirtualGatewayId;
  }
  export interface DeleteDirectConnectGatewayAssociationResult {
    /**
     * The association to be deleted.
     */
    directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
  }
  export interface DeleteDirectConnectGatewayRequest {
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId: DirectConnectGatewayId;
  }
  export interface DeleteDirectConnectGatewayResult {
    /**
     * The Direct Connect gateway.
     */
    directConnectGateway?: DirectConnectGateway;
  }
  export interface DeleteInterconnectRequest {
    /**
     * The ID of the interconnect.
     */
    interconnectId: InterconnectId;
  }
  export interface DeleteInterconnectResponse {
    /**
     * The state of the interconnect. The following are the possible values:    requested: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.    pending: The interconnect is approved, and is being initialized.    available: The network link is up, and the interconnect is ready for use.    down: The network link is down.    deleting: The interconnect is being deleted.    deleted: The interconnect is deleted.  
     */
    interconnectState?: InterconnectState;
  }
  export interface DeleteLagRequest {
    /**
     * The ID of the LAG.
     */
    lagId: LagId;
  }
  export interface DeleteVirtualInterfaceRequest {
    /**
     * The ID of the virtual interface.
     */
    virtualInterfaceId: VirtualInterfaceId;
  }
  export interface DeleteVirtualInterfaceResponse {
    /**
     * The state of the virtual interface. The following are the possible values:    confirming: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.    verifying: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.    pending: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.    available: A virtual interface that is able to forward traffic.    down: A virtual interface that is BGP down.    deleting: A virtual interface is in this state immediately after calling DeleteVirtualInterface until it can no longer forward traffic.    deleted: A virtual interface that cannot forward traffic.    rejected: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the Confirming state is deleted by the virtual interface owner, the virtual interface enters the Rejected state.  
     */
    virtualInterfaceState?: VirtualInterfaceState;
  }
  export interface DescribeConnectionLoaRequest {
    /**
     * The ID of the connection.
     */
    connectionId: ConnectionId;
    /**
     * The name of the APN partner or service provider who establishes connectivity on your behalf. If you specify this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.
     */
    providerName?: ProviderName;
    /**
     * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
     */
    loaContentType?: LoaContentType;
  }
  export interface DescribeConnectionLoaResponse {
    /**
     * The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).
     */
    loa?: Loa;
  }
  export interface DescribeConnectionsOnInterconnectRequest {
    /**
     * The ID of the interconnect.
     */
    interconnectId: InterconnectId;
  }
  export interface DescribeConnectionsRequest {
    /**
     * The ID of the connection.
     */
    connectionId?: ConnectionId;
  }
  export interface DescribeDirectConnectGatewayAssociationsRequest {
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId?: DirectConnectGatewayId;
    /**
     * The ID of the virtual private gateway.
     */
    virtualGatewayId?: VirtualGatewayId;
    /**
     * The maximum number of associations to return per page.
     */
    maxResults?: MaxResultSetSize;
    /**
     * The token provided in the previous call to retrieve the next page.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeDirectConnectGatewayAssociationsResult {
    /**
     * The associations.
     */
    directConnectGatewayAssociations?: DirectConnectGatewayAssociationList;
    /**
     * The token to retrieve the next page.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeDirectConnectGatewayAttachmentsRequest {
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId?: DirectConnectGatewayId;
    /**
     * The ID of the virtual interface.
     */
    virtualInterfaceId?: VirtualInterfaceId;
    /**
     * The maximum number of attachments to return per page.
     */
    maxResults?: MaxResultSetSize;
    /**
     * The token provided in the previous call to retrieve the next page.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeDirectConnectGatewayAttachmentsResult {
    /**
     * The attachments.
     */
    directConnectGatewayAttachments?: DirectConnectGatewayAttachmentList;
    /**
     * The token to retrieve the next page.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeDirectConnectGatewaysRequest {
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId?: DirectConnectGatewayId;
    /**
     * The maximum number of Direct Connect gateways to return per page.
     */
    maxResults?: MaxResultSetSize;
    /**
     * The token provided in the previous call to retrieve the next page.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeDirectConnectGatewaysResult {
    /**
     * The Direct Connect gateways.
     */
    directConnectGateways?: DirectConnectGatewayList;
    /**
     * The token to retrieve the next page.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeHostedConnectionsRequest {
    /**
     * The ID of the interconnect or LAG.
     */
    connectionId: ConnectionId;
  }
  export interface DescribeInterconnectLoaRequest {
    /**
     * The ID of the interconnect.
     */
    interconnectId: InterconnectId;
    /**
     * The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.
     */
    providerName?: ProviderName;
    /**
     * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
     */
    loaContentType?: LoaContentType;
  }
  export interface DescribeInterconnectLoaResponse {
    /**
     * The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).
     */
    loa?: Loa;
  }
  export interface DescribeInterconnectsRequest {
    /**
     * The ID of the interconnect.
     */
    interconnectId?: InterconnectId;
  }
  export interface DescribeLagsRequest {
    /**
     * The ID of the LAG.
     */
    lagId?: LagId;
  }
  export interface DescribeLoaRequest {
    /**
     * The ID of a connection, LAG, or interconnect.
     */
    connectionId: ConnectionId;
    /**
     * The name of the service provider who establishes connectivity on your behalf. If you specify this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.
     */
    providerName?: ProviderName;
    /**
     * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
     */
    loaContentType?: LoaContentType;
  }
  export interface DescribeTagsRequest {
    /**
     * The Amazon Resource Names (ARNs) of the resources.
     */
    resourceArns: ResourceArnList;
  }
  export interface DescribeTagsResponse {
    /**
     * Information about the tags.
     */
    resourceTags?: ResourceTagList;
  }
  export interface DescribeVirtualInterfacesRequest {
    /**
     * The ID of the connection.
     */
    connectionId?: ConnectionId;
    /**
     * The ID of the virtual interface.
     */
    virtualInterfaceId?: VirtualInterfaceId;
  }
  export interface DirectConnectGateway {
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId?: DirectConnectGatewayId;
    /**
     * The name of the Direct Connect gateway.
     */
    directConnectGatewayName?: DirectConnectGatewayName;
    /**
     * The autonomous system number (ASN) for the Amazon side of the connection.
     */
    amazonSideAsn?: LongAsn;
    /**
     * The ID of the AWS account that owns the Direct Connect gateway.
     */
    ownerAccount?: OwnerAccount;
    /**
     * The state of the Direct Connect gateway. The following are the possible values:    pending: The initial state after calling CreateDirectConnectGateway.    available: The Direct Connect gateway is ready for use.    deleting: The initial state after calling DeleteDirectConnectGateway.    deleted: The Direct Connect gateway is deleted and cannot pass traffic.  
     */
    directConnectGatewayState?: DirectConnectGatewayState;
    /**
     * The error message if the state of an object failed to advance.
     */
    stateChangeError?: StateChangeError;
  }
  export interface DirectConnectGatewayAssociation {
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId?: DirectConnectGatewayId;
    /**
     * The ID of the virtual private gateway. Applies only to private virtual interfaces.
     */
    virtualGatewayId?: VirtualGatewayId;
    /**
     * The AWS Region where the virtual private gateway is located.
     */
    virtualGatewayRegion?: VirtualGatewayRegion;
    /**
     * The ID of the AWS account that owns the virtual private gateway.
     */
    virtualGatewayOwnerAccount?: OwnerAccount;
    /**
     * The state of the association. The following are the possible values:    associating: The initial state after calling CreateDirectConnectGatewayAssociation.    associated: The Direct Connect gateway and virtual private gateway are successfully associated and ready to pass traffic.    disassociating: The initial state after calling DeleteDirectConnectGatewayAssociation.    disassociated: The virtual private gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway is stopped.  
     */
    associationState?: DirectConnectGatewayAssociationState;
    /**
     * The error message if the state of an object failed to advance.
     */
    stateChangeError?: StateChangeError;
  }
  export type DirectConnectGatewayAssociationList = DirectConnectGatewayAssociation[];
  export type DirectConnectGatewayAssociationState = "associating"|"associated"|"disassociating"|"disassociated"|string;
  export interface DirectConnectGatewayAttachment {
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId?: DirectConnectGatewayId;
    /**
     * The ID of the virtual interface.
     */
    virtualInterfaceId?: VirtualInterfaceId;
    /**
     * The AWS Region where the virtual interface is located.
     */
    virtualInterfaceRegion?: VirtualInterfaceRegion;
    /**
     * The ID of the AWS account that owns the virtual interface.
     */
    virtualInterfaceOwnerAccount?: OwnerAccount;
    /**
     * The state of the attachment. The following are the possible values:    attaching: The initial state after a virtual interface is created using the Direct Connect gateway.    attached: The Direct Connect gateway and virtual interface are attached and ready to pass traffic.    detaching: The initial state after calling DeleteVirtualInterface.    detached: The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual interface is stopped.  
     */
    attachmentState?: DirectConnectGatewayAttachmentState;
    /**
     * The error message if the state of an object failed to advance.
     */
    stateChangeError?: StateChangeError;
  }
  export type DirectConnectGatewayAttachmentList = DirectConnectGatewayAttachment[];
  export type DirectConnectGatewayAttachmentState = "attaching"|"attached"|"detaching"|"detached"|string;
  export type DirectConnectGatewayId = string;
  export type DirectConnectGatewayList = DirectConnectGateway[];
  export type DirectConnectGatewayName = string;
  export type DirectConnectGatewayState = "pending"|"available"|"deleting"|"deleted"|string;
  export interface DisassociateConnectionFromLagRequest {
    /**
     * The ID of the connection. For example, dxcon-abc123.
     */
    connectionId: ConnectionId;
    /**
     * The ID of the LAG. For example, dxlag-abc123.
     */
    lagId: LagId;
  }
  export interface Interconnect {
    /**
     * The ID of the interconnect.
     */
    interconnectId?: InterconnectId;
    /**
     * The name of the interconnect.
     */
    interconnectName?: InterconnectName;
    /**
     * The state of the interconnect. The following are the possible values:    requested: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.    pending: The interconnect is approved, and is being initialized.    available: The network link is up, and the interconnect is ready for use.    down: The network link is down.    deleting: The interconnect is being deleted.    deleted: The interconnect is deleted.  
     */
    interconnectState?: InterconnectState;
    /**
     * The AWS Region where the connection is located.
     */
    region?: Region;
    /**
     * The location of the connection.
     */
    location?: LocationCode;
    /**
     * The bandwidth of the connection.
     */
    bandwidth?: Bandwidth;
    /**
     * The time of the most recent call to DescribeLoa for this connection.
     */
    loaIssueTime?: LoaIssueTime;
    /**
     * The ID of the LAG.
     */
    lagId?: LagId;
    /**
     * The Direct Connect endpoint on which the physical connection terminates.
     */
    awsDevice?: AwsDevice;
    /**
     * Indicates whether jumbo frames (9001 MTU) are supported.
     */
    jumboFrameCapable?: JumboFrameCapable;
    /**
     * The Direct Connect endpoint on which the physical connection terminates.
     */
    awsDeviceV2?: AwsDeviceV2;
  }
  export type InterconnectId = string;
  export type InterconnectList = Interconnect[];
  export type InterconnectName = string;
  export type InterconnectState = "requested"|"pending"|"available"|"down"|"deleting"|"deleted"|string;
  export interface Interconnects {
    /**
     * The interconnects.
     */
    interconnects?: InterconnectList;
  }
  export type JumboFrameCapable = boolean;
  export interface Lag {
    /**
     * The individual bandwidth of the physical connections bundled by the LAG. The possible values are 1Gbps and 10Gbps.
     */
    connectionsBandwidth?: Bandwidth;
    /**
     * The number of physical connections bundled by the LAG, up to a maximum of 10.
     */
    numberOfConnections?: Count;
    /**
     * The ID of the LAG.
     */
    lagId?: LagId;
    /**
     * The ID of the AWS account that owns the LAG.
     */
    ownerAccount?: OwnerAccount;
    /**
     * The name of the LAG.
     */
    lagName?: LagName;
    /**
     * The state of the LAG. The following are the possible values:    requested: The initial state of a LAG. The LAG stays in the requested state until the Letter of Authorization (LOA) is available.    pending: The LAG has been approved and is being initialized.    available: The network link is established and the LAG is ready for use.    down: The network link is down.    deleting: The LAG is being deleted.    deleted: The LAG is deleted.  
     */
    lagState?: LagState;
    /**
     * The location of the LAG.
     */
    location?: LocationCode;
    /**
     * The AWS Region where the connection is located.
     */
    region?: Region;
    /**
     * The minimum number of physical connections that must be operational for the LAG itself to be operational.
     */
    minimumLinks?: Count;
    /**
     * The Direct Connect endpoint that hosts the LAG.
     */
    awsDevice?: AwsDevice;
    /**
     * The Direct Connect endpoint that hosts the LAG.
     */
    awsDeviceV2?: AwsDeviceV2;
    /**
     * The connections bundled by the LAG.
     */
    connections?: ConnectionList;
    /**
     * Indicates whether the LAG can host other connections.
     */
    allowsHostedConnections?: BooleanFlag;
    /**
     * Indicates whether jumbo frames (9001 MTU) are supported.
     */
    jumboFrameCapable?: JumboFrameCapable;
  }
  export type LagId = string;
  export type LagList = Lag[];
  export type LagName = string;
  export type LagState = "requested"|"pending"|"available"|"down"|"deleting"|"deleted"|string;
  export interface Lags {
    /**
     * The LAGs.
     */
    lags?: LagList;
  }
  export interface Loa {
    /**
     * The binary contents of the LOA-CFA document.
     */
    loaContent?: LoaContent;
    /**
     * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
     */
    loaContentType?: LoaContentType;
  }
  export type LoaContent = Buffer|Uint8Array|Blob|string;
  export type LoaContentType = "application/pdf"|string;
  export type LoaIssueTime = Date;
  export interface Location {
    /**
     * The code for the location.
     */
    locationCode?: LocationCode;
    /**
     * The name of the location. This includes the name of the colocation partner and the physical site of the building.
     */
    locationName?: LocationName;
    /**
     * The AWS Region for the location.
     */
    region?: Region;
  }
  export type LocationCode = string;
  export type LocationList = Location[];
  export type LocationName = string;
  export interface Locations {
    /**
     * The locations.
     */
    locations?: LocationList;
  }
  export type LongAsn = number;
  export type MTU = number;
  export type MaxResultSetSize = number;
  export interface NewBGPPeer {
    /**
     * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
     */
    asn?: ASN;
    /**
     * The authentication key for BGP configuration.
     */
    authKey?: BGPAuthKey;
    /**
     * The address family for the BGP peer.
     */
    addressFamily?: AddressFamily;
    /**
     * The IP address assigned to the Amazon interface.
     */
    amazonAddress?: AmazonAddress;
    /**
     * The IP address assigned to the customer interface.
     */
    customerAddress?: CustomerAddress;
  }
  export interface NewPrivateVirtualInterface {
    /**
     * The name of the virtual interface assigned by the customer network.
     */
    virtualInterfaceName: VirtualInterfaceName;
    /**
     * The ID of the VLAN.
     */
    vlan: VLAN;
    /**
     * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
     */
    asn: ASN;
    /**
     * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.
     */
    mtu?: MTU;
    /**
     * The authentication key for BGP configuration.
     */
    authKey?: BGPAuthKey;
    /**
     * The IP address assigned to the Amazon interface.
     */
    amazonAddress?: AmazonAddress;
    /**
     * The IP address assigned to the customer interface.
     */
    customerAddress?: CustomerAddress;
    /**
     * The address family for the BGP peer.
     */
    addressFamily?: AddressFamily;
    /**
     * The ID of the virtual private gateway.
     */
    virtualGatewayId?: VirtualGatewayId;
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId?: DirectConnectGatewayId;
  }
  export interface NewPrivateVirtualInterfaceAllocation {
    /**
     * The name of the virtual interface assigned by the customer network.
     */
    virtualInterfaceName: VirtualInterfaceName;
    /**
     * The ID of the VLAN.
     */
    vlan: VLAN;
    /**
     * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
     */
    asn: ASN;
    /**
     * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.
     */
    mtu?: MTU;
    /**
     * The authentication key for BGP configuration.
     */
    authKey?: BGPAuthKey;
    /**
     * The IP address assigned to the Amazon interface.
     */
    amazonAddress?: AmazonAddress;
    /**
     * The address family for the BGP peer.
     */
    addressFamily?: AddressFamily;
    /**
     * The IP address assigned to the customer interface.
     */
    customerAddress?: CustomerAddress;
  }
  export interface NewPublicVirtualInterface {
    /**
     * The name of the virtual interface assigned by the customer network.
     */
    virtualInterfaceName: VirtualInterfaceName;
    /**
     * The ID of the VLAN.
     */
    vlan: VLAN;
    /**
     * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
     */
    asn: ASN;
    /**
     * The authentication key for BGP configuration.
     */
    authKey?: BGPAuthKey;
    /**
     * The IP address assigned to the Amazon interface.
     */
    amazonAddress?: AmazonAddress;
    /**
     * The IP address assigned to the customer interface.
     */
    customerAddress?: CustomerAddress;
    /**
     * The address family for the BGP peer.
     */
    addressFamily?: AddressFamily;
    /**
     * The routes to be advertised to the AWS network in this Region. Applies to public virtual interfaces.
     */
    routeFilterPrefixes?: RouteFilterPrefixList;
  }
  export interface NewPublicVirtualInterfaceAllocation {
    /**
     * The name of the virtual interface assigned by the customer network.
     */
    virtualInterfaceName: VirtualInterfaceName;
    /**
     * The ID of the VLAN.
     */
    vlan: VLAN;
    /**
     * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
     */
    asn: ASN;
    /**
     * The authentication key for BGP configuration.
     */
    authKey?: BGPAuthKey;
    /**
     * The IP address assigned to the Amazon interface.
     */
    amazonAddress?: AmazonAddress;
    /**
     * The IP address assigned to the customer interface.
     */
    customerAddress?: CustomerAddress;
    /**
     * The address family for the BGP peer.
     */
    addressFamily?: AddressFamily;
    /**
     * The routes to be advertised to the AWS network in this Region. Applies to public virtual interfaces.
     */
    routeFilterPrefixes?: RouteFilterPrefixList;
  }
  export type OwnerAccount = string;
  export type PaginationToken = string;
  export type PartnerName = string;
  export type ProviderName = string;
  export type Region = string;
  export type ResourceArn = string;
  export type ResourceArnList = ResourceArn[];
  export interface ResourceTag {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn?: ResourceArn;
    /**
     * The tags.
     */
    tags?: TagList;
  }
  export type ResourceTagList = ResourceTag[];
  export interface RouteFilterPrefix {
    /**
     * The CIDR block for the advertised route. Separate multiple routes using commas. An IPv6 CIDR must use /64 or shorter.
     */
    cidr?: CIDR;
  }
  export type RouteFilterPrefixList = RouteFilterPrefix[];
  export type RouterConfig = string;
  export type StateChangeError = string;
  export interface Tag {
    /**
     * The key.
     */
    key: TagKey;
    /**
     * The value.
     */
    value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: ResourceArn;
    /**
     * The tags to add.
     */
    tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: ResourceArn;
    /**
     * The tag keys of the tags to remove.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateLagRequest {
    /**
     * The ID of the LAG.
     */
    lagId: LagId;
    /**
     * The name of the LAG.
     */
    lagName?: LagName;
    /**
     * The minimum number of physical connections that must be operational for the LAG itself to be operational.
     */
    minimumLinks?: Count;
  }
  export interface UpdateVirtualInterfaceAttributesRequest {
    /**
     * The ID of the virtual private interface.
     */
    virtualInterfaceId: VirtualInterfaceId;
    /**
     * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.
     */
    mtu?: MTU;
  }
  export type VLAN = number;
  export interface VirtualGateway {
    /**
     * The ID of the virtual private gateway.
     */
    virtualGatewayId?: VirtualGatewayId;
    /**
     * The state of the virtual private gateway. The following are the possible values:    pending: Initial state after creating the virtual private gateway.    available: Ready for use by a private virtual interface.    deleting: Initial state after deleting the virtual private gateway.    deleted: The virtual private gateway is deleted. The private virtual interface is unable to send traffic over this gateway.  
     */
    virtualGatewayState?: VirtualGatewayState;
  }
  export type VirtualGatewayId = string;
  export type VirtualGatewayList = VirtualGateway[];
  export type VirtualGatewayRegion = string;
  export type VirtualGatewayState = string;
  export interface VirtualGateways {
    /**
     * The virtual private gateways.
     */
    virtualGateways?: VirtualGatewayList;
  }
  export interface VirtualInterface {
    /**
     * The ID of the AWS account that owns the virtual interface.
     */
    ownerAccount?: OwnerAccount;
    /**
     * The ID of the virtual interface.
     */
    virtualInterfaceId?: VirtualInterfaceId;
    /**
     * The location of the connection.
     */
    location?: LocationCode;
    /**
     * The ID of the connection.
     */
    connectionId?: ConnectionId;
    /**
     * The type of virtual interface. The possible values are private and public.
     */
    virtualInterfaceType?: VirtualInterfaceType;
    /**
     * The name of the virtual interface assigned by the customer network.
     */
    virtualInterfaceName?: VirtualInterfaceName;
    /**
     * The ID of the VLAN.
     */
    vlan?: VLAN;
    /**
     * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
     */
    asn?: ASN;
    /**
     * The autonomous system number (ASN) for the Amazon side of the connection.
     */
    amazonSideAsn?: LongAsn;
    /**
     * The authentication key for BGP configuration.
     */
    authKey?: BGPAuthKey;
    /**
     * The IP address assigned to the Amazon interface.
     */
    amazonAddress?: AmazonAddress;
    /**
     * The IP address assigned to the customer interface.
     */
    customerAddress?: CustomerAddress;
    /**
     * The address family for the BGP peer.
     */
    addressFamily?: AddressFamily;
    /**
     * The state of the virtual interface. The following are the possible values:    confirming: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.    verifying: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.    pending: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.    available: A virtual interface that is able to forward traffic.    down: A virtual interface that is BGP down.    deleting: A virtual interface is in this state immediately after calling DeleteVirtualInterface until it can no longer forward traffic.    deleted: A virtual interface that cannot forward traffic.    rejected: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the Confirming state is deleted by the virtual interface owner, the virtual interface enters the Rejected state.  
     */
    virtualInterfaceState?: VirtualInterfaceState;
    /**
     * The customer router configuration.
     */
    customerRouterConfig?: RouterConfig;
    /**
     * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.
     */
    mtu?: MTU;
    /**
     * Indicates whether jumbo frames (9001 MTU) are supported.
     */
    jumboFrameCapable?: JumboFrameCapable;
    /**
     * The ID of the virtual private gateway. Applies only to private virtual interfaces.
     */
    virtualGatewayId?: VirtualGatewayId;
    /**
     * The ID of the Direct Connect gateway.
     */
    directConnectGatewayId?: DirectConnectGatewayId;
    /**
     * The routes to be advertised to the AWS network in this Region. Applies to public virtual interfaces.
     */
    routeFilterPrefixes?: RouteFilterPrefixList;
    /**
     * The BGP peers configured on this virtual interface.
     */
    bgpPeers?: BGPPeerList;
    /**
     * The AWS Region where the virtual interface is located.
     */
    region?: Region;
    /**
     * The Direct Connect endpoint on which the virtual interface terminates.
     */
    awsDeviceV2?: AwsDeviceV2;
  }
  export type VirtualInterfaceId = string;
  export type VirtualInterfaceList = VirtualInterface[];
  export type VirtualInterfaceName = string;
  export type VirtualInterfaceRegion = string;
  export type VirtualInterfaceState = "confirming"|"verifying"|"pending"|"available"|"down"|"deleting"|"deleted"|"rejected"|string;
  export type VirtualInterfaceType = string;
  export interface VirtualInterfaces {
    /**
     * The virtual interfaces
     */
    virtualInterfaces?: VirtualInterfaceList;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2012-10-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DirectConnect client.
   */
  export import Types = DirectConnect;
}
export = DirectConnect;
