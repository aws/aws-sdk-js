///<reference types="node" />
import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
declare class Route53 extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Route53.Types.ClientConfiguration)
  config: Config & Route53.Types.ClientConfiguration;
  /**
   * Associates an Amazon VPC with a private hosted zone.   The VPC and the hosted zone must already exist, and you must have created a private hosted zone. You cannot convert a public hosted zone into a private hosted zone.  Send a POST request to the /2013-04-01/hostedzone/hosted zone ID/associatevpc resource. The request body must include an XML document with a AssociateVPCWithHostedZoneRequest element. The response returns the AssociateVPCWithHostedZoneResponse element.  If you used different accounts to create the hosted zone and to create the Amazon VPCs that you want to associate with the hosted zone, we need to update account permissions for you. For more information, see Associating Amazon VPCs and Private Hosted Zones That You Create with Different AWS Accounts in the Amazon Route 53 Developer Guide. 
   */
  associateVPCWithHostedZone(params: Route53.Types.AssociateVPCWithHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.AssociateVPCWithHostedZoneResponse) => void): Request<Route53.Types.AssociateVPCWithHostedZoneResponse, AWSError>;
  /**
   * Associates an Amazon VPC with a private hosted zone.   The VPC and the hosted zone must already exist, and you must have created a private hosted zone. You cannot convert a public hosted zone into a private hosted zone.  Send a POST request to the /2013-04-01/hostedzone/hosted zone ID/associatevpc resource. The request body must include an XML document with a AssociateVPCWithHostedZoneRequest element. The response returns the AssociateVPCWithHostedZoneResponse element.  If you used different accounts to create the hosted zone and to create the Amazon VPCs that you want to associate with the hosted zone, we need to update account permissions for you. For more information, see Associating Amazon VPCs and Private Hosted Zones That You Create with Different AWS Accounts in the Amazon Route 53 Developer Guide. 
   */
  associateVPCWithHostedZone(callback?: (err: AWSError, data: Route53.Types.AssociateVPCWithHostedZoneResponse) => void): Request<Route53.Types.AssociateVPCWithHostedZoneResponse, AWSError>;
  /**
   * Create, change, update, or delete authoritative DNS information on all Amazon Route 53 servers. Send a POST request to:   /2013-04-01/hostedzone/Amazon Route 53 hosted Zone ID/rrset resource.  The request body must include a document with a ChangeResourceRecordSetsRequest element. The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes. When using the Amazon Route 53 API to change resource record sets, Amazon Route 53 either makes all or none of the changes in a change batch request. This ensures that Amazon Route 53 never partially implements the intended changes to the resource record sets in a hosted zone.  For example, a change batch request that deletes the CNAME record for www.example.com and creates an alias resource record set for www.example.com. Amazon Route 53 deletes the first resource record set and creates the second resource record set in a single operation. If either the DELETE or the CREATE action fails, then both changes (plus any other changes in the batch) fail, and the original CNAME record continues to exist.  Due to the nature of transactional changes, you cannot delete the same resource record set more than once in a single change batch. If you attempt to delete the same change batch more than once, Amazon Route 53 returns an InvalidChangeBatch error.   To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the Amazon Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy, then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn't performing as expected. For more information, see Using Traffic Flow to Route DNS Traffic in the Amazon Route 53 Developer Guide.  Use ChangeResourceRecordsSetsRequest to perform the following actions:    CREATE: Creates a resource record set that has the specified values.    DELETE: Deletes an existing resource record set that has the specified values for Name, Type, Set Identifier (for code latency, weighted, geolocation, and failover resource record sets), and TTL (except alias resource record sets, for which the TTL is determined by the AWS resource you're routing queries to).    UPSERT: If a resource record set does not already exist, AWS creates it. If a resource set does exist, Amazon Route 53 updates it with the values in the request. Amazon Route 53 can update an existing resource record set only when all of the following values match: Name, Type, and Set Identifier (for weighted, latency, geolocation, and failover resource record sets).   In response to a ChangeResourceRecordSets request, the DNS data is changed on all Amazon Route 53 DNS servers. Initially, the status of a change is PENDING, meaning the change has not yet propagated to all the authoritative Amazon Route 53 DNS servers. When the change is propagated to all hosts, the change returns a status of INSYNC. After sending a change request, confirm your change has propagated to all Amazon Route 53 DNS servers. Changes generally propagate to all Amazon Route 53 name servers in a few minutes. In rare circumstances, propagation can take up to 30 minutes. For more information, see GetChange. For information about the limits on a ChangeResourceRecordSets request, see Limits in the Amazon Route 53 Developer Guide.
   */
  changeResourceRecordSets(params: Route53.Types.ChangeResourceRecordSetsRequest, callback?: (err: AWSError, data: Route53.Types.ChangeResourceRecordSetsResponse) => void): Request<Route53.Types.ChangeResourceRecordSetsResponse, AWSError>;
  /**
   * Create, change, update, or delete authoritative DNS information on all Amazon Route 53 servers. Send a POST request to:   /2013-04-01/hostedzone/Amazon Route 53 hosted Zone ID/rrset resource.  The request body must include a document with a ChangeResourceRecordSetsRequest element. The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes. When using the Amazon Route 53 API to change resource record sets, Amazon Route 53 either makes all or none of the changes in a change batch request. This ensures that Amazon Route 53 never partially implements the intended changes to the resource record sets in a hosted zone.  For example, a change batch request that deletes the CNAME record for www.example.com and creates an alias resource record set for www.example.com. Amazon Route 53 deletes the first resource record set and creates the second resource record set in a single operation. If either the DELETE or the CREATE action fails, then both changes (plus any other changes in the batch) fail, and the original CNAME record continues to exist.  Due to the nature of transactional changes, you cannot delete the same resource record set more than once in a single change batch. If you attempt to delete the same change batch more than once, Amazon Route 53 returns an InvalidChangeBatch error.   To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the Amazon Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy, then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn't performing as expected. For more information, see Using Traffic Flow to Route DNS Traffic in the Amazon Route 53 Developer Guide.  Use ChangeResourceRecordsSetsRequest to perform the following actions:    CREATE: Creates a resource record set that has the specified values.    DELETE: Deletes an existing resource record set that has the specified values for Name, Type, Set Identifier (for code latency, weighted, geolocation, and failover resource record sets), and TTL (except alias resource record sets, for which the TTL is determined by the AWS resource you're routing queries to).    UPSERT: If a resource record set does not already exist, AWS creates it. If a resource set does exist, Amazon Route 53 updates it with the values in the request. Amazon Route 53 can update an existing resource record set only when all of the following values match: Name, Type, and Set Identifier (for weighted, latency, geolocation, and failover resource record sets).   In response to a ChangeResourceRecordSets request, the DNS data is changed on all Amazon Route 53 DNS servers. Initially, the status of a change is PENDING, meaning the change has not yet propagated to all the authoritative Amazon Route 53 DNS servers. When the change is propagated to all hosts, the change returns a status of INSYNC. After sending a change request, confirm your change has propagated to all Amazon Route 53 DNS servers. Changes generally propagate to all Amazon Route 53 name servers in a few minutes. In rare circumstances, propagation can take up to 30 minutes. For more information, see GetChange. For information about the limits on a ChangeResourceRecordSets request, see Limits in the Amazon Route 53 Developer Guide.
   */
  changeResourceRecordSets(callback?: (err: AWSError, data: Route53.Types.ChangeResourceRecordSetsResponse) => void): Request<Route53.Types.ChangeResourceRecordSetsResponse, AWSError>;
  /**
   * Adds, edits, or deletes tags for a health check or a hosted zone. For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  changeTagsForResource(params: Route53.Types.ChangeTagsForResourceRequest, callback?: (err: AWSError, data: Route53.Types.ChangeTagsForResourceResponse) => void): Request<Route53.Types.ChangeTagsForResourceResponse, AWSError>;
  /**
   * Adds, edits, or deletes tags for a health check or a hosted zone. For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  changeTagsForResource(callback?: (err: AWSError, data: Route53.Types.ChangeTagsForResourceResponse) => void): Request<Route53.Types.ChangeTagsForResourceResponse, AWSError>;
  /**
   * Creates a new health check. To create a new health check, send a POST request to the /2013-04-01/healthcheck resource. The request body must include an XML document with a CreateHealthCheckRequest element. The response returns the CreateHealthCheckResponse element, containing the health check ID specified when adding health check to a resource record set. For information about adding health checks to resource record sets, see ResourceRecordSet$HealthCheckId in ChangeResourceRecordSets.  If you are registering Amazon EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the Amazon EC2 instances. When you register an Amazon EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to an Amazon Route 53 health check. You can associate health checks with failover resource record sets in a private hosted zone. Note the following:   Amazon Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC.   You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server.   You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 StatusCheckFailed metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the Amazon CloudWatch Developer Guide.  
   */
  createHealthCheck(params: Route53.Types.CreateHealthCheckRequest, callback?: (err: AWSError, data: Route53.Types.CreateHealthCheckResponse) => void): Request<Route53.Types.CreateHealthCheckResponse, AWSError>;
  /**
   * Creates a new health check. To create a new health check, send a POST request to the /2013-04-01/healthcheck resource. The request body must include an XML document with a CreateHealthCheckRequest element. The response returns the CreateHealthCheckResponse element, containing the health check ID specified when adding health check to a resource record set. For information about adding health checks to resource record sets, see ResourceRecordSet$HealthCheckId in ChangeResourceRecordSets.  If you are registering Amazon EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the Amazon EC2 instances. When you register an Amazon EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to an Amazon Route 53 health check. You can associate health checks with failover resource record sets in a private hosted zone. Note the following:   Amazon Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC.   You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server.   You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 StatusCheckFailed metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the Amazon CloudWatch Developer Guide.  
   */
  createHealthCheck(callback?: (err: AWSError, data: Route53.Types.CreateHealthCheckResponse) => void): Request<Route53.Types.CreateHealthCheckResponse, AWSError>;
  /**
   * Creates a new public hosted zone, used to specify how the Domain Name System (DNS) routes traffic on the Internet for a domain, such as example.com, and its subdomains.   Public hosted zones cannot be converted to a private hosted zone or vice versa. Instead, create a new hosted zone with the same name and create new resource record sets.  Send a POST request to the /2013-04-01/hostedzone resource. The request body must include an XML document with a CreateHostedZoneRequest element. The response returns the CreateHostedZoneResponse element containing metadata about the hosted zone. Fore more information about charges for hosted zones, see Amazon Route 53 Pricing. Note the following:   You cannot create a hosted zone for a top-level domain (TLD).   Amazon Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see NS and SOA Records that Amazon Route 53 Creates for a Hosted Zone in the Amazon Route 53 Developer Guide.   If your domain is registered with a registrar other than Amazon Route 53, you must update the name servers with your registrar to make Amazon Route 53 your DNS service. For more information, see Configuring Amazon Route 53 as your DNS Service in the Amazon Route 53 Developer's Guide.   After creating a zone, its initial status is PENDING. This means that it is not yet available on all DNS servers. The status of the zone changes to INSYNC when the NS and SOA records are available on all Amazon Route 53 DNS servers.  When trying to create a hosted zone using a reusable delegation set, specify an optional DelegationSetId, and Amazon Route 53 would assign those 4 NS records for the zone, instead of allotting a new one.
   */
  createHostedZone(params: Route53.Types.CreateHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.CreateHostedZoneResponse) => void): Request<Route53.Types.CreateHostedZoneResponse, AWSError>;
  /**
   * Creates a new public hosted zone, used to specify how the Domain Name System (DNS) routes traffic on the Internet for a domain, such as example.com, and its subdomains.   Public hosted zones cannot be converted to a private hosted zone or vice versa. Instead, create a new hosted zone with the same name and create new resource record sets.  Send a POST request to the /2013-04-01/hostedzone resource. The request body must include an XML document with a CreateHostedZoneRequest element. The response returns the CreateHostedZoneResponse element containing metadata about the hosted zone. Fore more information about charges for hosted zones, see Amazon Route 53 Pricing. Note the following:   You cannot create a hosted zone for a top-level domain (TLD).   Amazon Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see NS and SOA Records that Amazon Route 53 Creates for a Hosted Zone in the Amazon Route 53 Developer Guide.   If your domain is registered with a registrar other than Amazon Route 53, you must update the name servers with your registrar to make Amazon Route 53 your DNS service. For more information, see Configuring Amazon Route 53 as your DNS Service in the Amazon Route 53 Developer's Guide.   After creating a zone, its initial status is PENDING. This means that it is not yet available on all DNS servers. The status of the zone changes to INSYNC when the NS and SOA records are available on all Amazon Route 53 DNS servers.  When trying to create a hosted zone using a reusable delegation set, specify an optional DelegationSetId, and Amazon Route 53 would assign those 4 NS records for the zone, instead of allotting a new one.
   */
  createHostedZone(callback?: (err: AWSError, data: Route53.Types.CreateHostedZoneResponse) => void): Request<Route53.Types.CreateHostedZoneResponse, AWSError>;
  /**
   * Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones. If a hosted zoned ID is specified, CreateReusableDelegationSet marks the delegation set associated with that zone as reusable Send a POST request to the /2013-04-01/delegationset resource. The request body must include an XML document with a CreateReusableDelegationSetRequest element.  A reusable delegation set cannot be associated with a private hosted zone/  For more information, including a procedure on how to create and configure a reusable delegation set (also known as white label name servers), see Configuring White Label Name Servers.
   */
  createReusableDelegationSet(params: Route53.Types.CreateReusableDelegationSetRequest, callback?: (err: AWSError, data: Route53.Types.CreateReusableDelegationSetResponse) => void): Request<Route53.Types.CreateReusableDelegationSetResponse, AWSError>;
  /**
   * Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones. If a hosted zoned ID is specified, CreateReusableDelegationSet marks the delegation set associated with that zone as reusable Send a POST request to the /2013-04-01/delegationset resource. The request body must include an XML document with a CreateReusableDelegationSetRequest element.  A reusable delegation set cannot be associated with a private hosted zone/  For more information, including a procedure on how to create and configure a reusable delegation set (also known as white label name servers), see Configuring White Label Name Servers.
   */
  createReusableDelegationSet(callback?: (err: AWSError, data: Route53.Types.CreateReusableDelegationSetResponse) => void): Request<Route53.Types.CreateReusableDelegationSetResponse, AWSError>;
  /**
   * Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). Send a POST request to the /2013-04-01/trafficpolicy resource. The request body must include a document with a CreateTrafficPolicyRequest element. The response includes the CreateTrafficPolicyResponse element, which contains information about the new traffic policy.
   */
  createTrafficPolicy(params: Route53.Types.CreateTrafficPolicyRequest, callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyResponse) => void): Request<Route53.Types.CreateTrafficPolicyResponse, AWSError>;
  /**
   * Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). Send a POST request to the /2013-04-01/trafficpolicy resource. The request body must include a document with a CreateTrafficPolicyRequest element. The response includes the CreateTrafficPolicyResponse element, which contains information about the new traffic policy.
   */
  createTrafficPolicy(callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyResponse) => void): Request<Route53.Types.CreateTrafficPolicyResponse, AWSError>;
  /**
   * Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, CreateTrafficPolicyInstance associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that CreateTrafficPolicyInstance created. Send a POST request to the /2013-04-01/trafficpolicyinstance resource. The request body must include a document with a CreateTrafficPolicyRequest element. The response returns the CreateTrafficPolicyInstanceResponse element, which contains information about the traffic policy instance.
   */
  createTrafficPolicyInstance(params: Route53.Types.CreateTrafficPolicyInstanceRequest, callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyInstanceResponse) => void): Request<Route53.Types.CreateTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, CreateTrafficPolicyInstance associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that CreateTrafficPolicyInstance created. Send a POST request to the /2013-04-01/trafficpolicyinstance resource. The request body must include a document with a CreateTrafficPolicyRequest element. The response returns the CreateTrafficPolicyInstanceResponse element, which contains information about the traffic policy instance.
   */
  createTrafficPolicyInstance(callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyInstanceResponse) => void): Request<Route53.Types.CreateTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new traffic policy. Send a POST request to the /2013-04-01/trafficpolicy/ resource. The request body includes a document with a CreateTrafficPolicyVersionRequest element. The response returns the CreateTrafficPolicyVersionResponse element, which contains information about the new version of the traffic policy.
   */
  createTrafficPolicyVersion(params: Route53.Types.CreateTrafficPolicyVersionRequest, callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyVersionResponse) => void): Request<Route53.Types.CreateTrafficPolicyVersionResponse, AWSError>;
  /**
   * Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new traffic policy. Send a POST request to the /2013-04-01/trafficpolicy/ resource. The request body includes a document with a CreateTrafficPolicyVersionRequest element. The response returns the CreateTrafficPolicyVersionResponse element, which contains information about the new version of the traffic policy.
   */
  createTrafficPolicyVersion(callback?: (err: AWSError, data: Route53.Types.CreateTrafficPolicyVersionResponse) => void): Request<Route53.Types.CreateTrafficPolicyVersionResponse, AWSError>;
  /**
   * Deletes a health check. Send a DELETE request to the /2013-04-01/healthcheck/health check ID  resource.  Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check cannot be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see Replacing and Deleting Health Checks in the Amazon Route 53 Developer Guide. 
   */
  deleteHealthCheck(params: Route53.Types.DeleteHealthCheckRequest, callback?: (err: AWSError, data: Route53.Types.DeleteHealthCheckResponse) => void): Request<Route53.Types.DeleteHealthCheckResponse, AWSError>;
  /**
   * Deletes a health check. Send a DELETE request to the /2013-04-01/healthcheck/health check ID  resource.  Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check cannot be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see Replacing and Deleting Health Checks in the Amazon Route 53 Developer Guide. 
   */
  deleteHealthCheck(callback?: (err: AWSError, data: Route53.Types.DeleteHealthCheckResponse) => void): Request<Route53.Types.DeleteHealthCheckResponse, AWSError>;
  /**
   * Deletes a hosted zone. Send a DELETE request to the /Amazon Route 53 API version/hostedzone/hosted zone ID  resource.  Delete a hosted zone only if there are no resource record sets other than the default SOA record and NS resource record sets. If the hosted zone contains other resource record sets, delete them before deleting the hosted zone. If you try to delete a hosted zone that contains other resource record sets, Amazon Route 53 denies your request with a HostedZoneNotEmpty error. For information about deleting records from your hosted zone, see ChangeResourceRecordSets. 
   */
  deleteHostedZone(params: Route53.Types.DeleteHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.DeleteHostedZoneResponse) => void): Request<Route53.Types.DeleteHostedZoneResponse, AWSError>;
  /**
   * Deletes a hosted zone. Send a DELETE request to the /Amazon Route 53 API version/hostedzone/hosted zone ID  resource.  Delete a hosted zone only if there are no resource record sets other than the default SOA record and NS resource record sets. If the hosted zone contains other resource record sets, delete them before deleting the hosted zone. If you try to delete a hosted zone that contains other resource record sets, Amazon Route 53 denies your request with a HostedZoneNotEmpty error. For information about deleting records from your hosted zone, see ChangeResourceRecordSets. 
   */
  deleteHostedZone(callback?: (err: AWSError, data: Route53.Types.DeleteHostedZoneResponse) => void): Request<Route53.Types.DeleteHostedZoneResponse, AWSError>;
  /**
   * Deletes a reusable delegation set. Send a DELETE request to the /2013-04-01/delegationset/delegation set ID  resource.   You can delete a reusable delegation set only if there are no associated hosted zones.  To verify that the reusable delegation set is not associated with any hosted zones, run the GetReusableDelegationSet action and specify the ID of the reusable delegation set that you want to delete.
   */
  deleteReusableDelegationSet(params: Route53.Types.DeleteReusableDelegationSetRequest, callback?: (err: AWSError, data: Route53.Types.DeleteReusableDelegationSetResponse) => void): Request<Route53.Types.DeleteReusableDelegationSetResponse, AWSError>;
  /**
   * Deletes a reusable delegation set. Send a DELETE request to the /2013-04-01/delegationset/delegation set ID  resource.   You can delete a reusable delegation set only if there are no associated hosted zones.  To verify that the reusable delegation set is not associated with any hosted zones, run the GetReusableDelegationSet action and specify the ID of the reusable delegation set that you want to delete.
   */
  deleteReusableDelegationSet(callback?: (err: AWSError, data: Route53.Types.DeleteReusableDelegationSetResponse) => void): Request<Route53.Types.DeleteReusableDelegationSetResponse, AWSError>;
  /**
   * Deletes a traffic policy. Send a DELETE request to the /Amazon Route 53 API version/trafficpolicy resource.
   */
  deleteTrafficPolicy(params: Route53.Types.DeleteTrafficPolicyRequest, callback?: (err: AWSError, data: Route53.Types.DeleteTrafficPolicyResponse) => void): Request<Route53.Types.DeleteTrafficPolicyResponse, AWSError>;
  /**
   * Deletes a traffic policy. Send a DELETE request to the /Amazon Route 53 API version/trafficpolicy resource.
   */
  deleteTrafficPolicy(callback?: (err: AWSError, data: Route53.Types.DeleteTrafficPolicyResponse) => void): Request<Route53.Types.DeleteTrafficPolicyResponse, AWSError>;
  /**
   * Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance. Send a DELETE request to the /Amazon Route 53 API version/trafficpolicy/traffic policy instance ID  resource.  In the Amazon Route 53 console, traffic policy instances are known as policy records. 
   */
  deleteTrafficPolicyInstance(params: Route53.Types.DeleteTrafficPolicyInstanceRequest, callback?: (err: AWSError, data: Route53.Types.DeleteTrafficPolicyInstanceResponse) => void): Request<Route53.Types.DeleteTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance. Send a DELETE request to the /Amazon Route 53 API version/trafficpolicy/traffic policy instance ID  resource.  In the Amazon Route 53 console, traffic policy instances are known as policy records. 
   */
  deleteTrafficPolicyInstance(callback?: (err: AWSError, data: Route53.Types.DeleteTrafficPolicyInstanceResponse) => void): Request<Route53.Types.DeleteTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Disassociates a VPC from a Amazon Route 53 private hosted zone.  Send a POST request to the /2013-04-01/hostedzone/hosted zone ID/disassociatevpc resource. The request body must include an XML document with a DisassociateVPCFromHostedZoneRequest element. The response returns the DisassociateVPCFromHostedZoneResponse element.  You can only disassociate a VPC from a private hosted zone when two or more VPCs are associated with that hosted zone. You cannot convert a private hosted zone into a public hosted zone. 
   */
  disassociateVPCFromHostedZone(params: Route53.Types.DisassociateVPCFromHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.DisassociateVPCFromHostedZoneResponse) => void): Request<Route53.Types.DisassociateVPCFromHostedZoneResponse, AWSError>;
  /**
   * Disassociates a VPC from a Amazon Route 53 private hosted zone.  Send a POST request to the /2013-04-01/hostedzone/hosted zone ID/disassociatevpc resource. The request body must include an XML document with a DisassociateVPCFromHostedZoneRequest element. The response returns the DisassociateVPCFromHostedZoneResponse element.  You can only disassociate a VPC from a private hosted zone when two or more VPCs are associated with that hosted zone. You cannot convert a private hosted zone into a public hosted zone. 
   */
  disassociateVPCFromHostedZone(callback?: (err: AWSError, data: Route53.Types.DisassociateVPCFromHostedZoneResponse) => void): Request<Route53.Types.DisassociateVPCFromHostedZoneResponse, AWSError>;
  /**
   * Returns the current status of a change batch request. The status is one of the following values:    PENDING indicates that the changes in this request have not replicated to all Amazon Route 53 DNS servers. This is the initial status of all change batch requests.    INSYNC indicates that the changes have replicated to all Amazon Route 53 DNS servers.   
   */
  getChange(params: Route53.Types.GetChangeRequest, callback?: (err: AWSError, data: Route53.Types.GetChangeResponse) => void): Request<Route53.Types.GetChangeResponse, AWSError>;
  /**
   * Returns the current status of a change batch request. The status is one of the following values:    PENDING indicates that the changes in this request have not replicated to all Amazon Route 53 DNS servers. This is the initial status of all change batch requests.    INSYNC indicates that the changes have replicated to all Amazon Route 53 DNS servers.   
   */
  getChange(callback?: (err: AWSError, data: Route53.Types.GetChangeResponse) => void): Request<Route53.Types.GetChangeResponse, AWSError>;
  /**
   * Returns the status and changes of a change batch request.
   */
  getChangeDetails(params: Route53.Types.GetChangeDetailsRequest, callback?: (err: AWSError, data: Route53.Types.GetChangeDetailsResponse) => void): Request<Route53.Types.GetChangeDetailsResponse, AWSError>;
  /**
   * Returns the status and changes of a change batch request.
   */
  getChangeDetails(callback?: (err: AWSError, data: Route53.Types.GetChangeDetailsResponse) => void): Request<Route53.Types.GetChangeDetailsResponse, AWSError>;
  /**
   * Retrieves a list of the IP ranges used by Amazon Route 53 health checkers to check the health of your resources. Send a GET request to the /Amazon Route 53 API version/checkeripranges resource. Use these IP addresses to configure router and firewall rules to allow health checkers to check the health of your resources.
   */
  getCheckerIpRanges(params: Route53.Types.GetCheckerIpRangesRequest, callback?: (err: AWSError, data: Route53.Types.GetCheckerIpRangesResponse) => void): Request<Route53.Types.GetCheckerIpRangesResponse, AWSError>;
  /**
   * Retrieves a list of the IP ranges used by Amazon Route 53 health checkers to check the health of your resources. Send a GET request to the /Amazon Route 53 API version/checkeripranges resource. Use these IP addresses to configure router and firewall rules to allow health checkers to check the health of your resources.
   */
  getCheckerIpRanges(callback?: (err: AWSError, data: Route53.Types.GetCheckerIpRangesResponse) => void): Request<Route53.Types.GetCheckerIpRangesResponse, AWSError>;
  /**
   * Retrieves a single geo location. Send a GET request to the /2013-04-01/geolocation resource with one of these options: continentcode | countrycode | countrycode and subdivisioncode.
   */
  getGeoLocation(params: Route53.Types.GetGeoLocationRequest, callback?: (err: AWSError, data: Route53.Types.GetGeoLocationResponse) => void): Request<Route53.Types.GetGeoLocationResponse, AWSError>;
  /**
   * Retrieves a single geo location. Send a GET request to the /2013-04-01/geolocation resource with one of these options: continentcode | countrycode | countrycode and subdivisioncode.
   */
  getGeoLocation(callback?: (err: AWSError, data: Route53.Types.GetGeoLocationResponse) => void): Request<Route53.Types.GetGeoLocationResponse, AWSError>;
  /**
   * Gets information about a specified health check. Send a GET request to the /2013-04-01/healthcheck/health check ID  resource. For more information about using the console to perform this operation, see Amazon Route 53 Health Checks and DNS Failover in the Amazon Route 53 Developer Guide.
   */
  getHealthCheck(params: Route53.Types.GetHealthCheckRequest, callback?: (err: AWSError, data: Route53.Types.GetHealthCheckResponse) => void): Request<Route53.Types.GetHealthCheckResponse, AWSError>;
  /**
   * Gets information about a specified health check. Send a GET request to the /2013-04-01/healthcheck/health check ID  resource. For more information about using the console to perform this operation, see Amazon Route 53 Health Checks and DNS Failover in the Amazon Route 53 Developer Guide.
   */
  getHealthCheck(callback?: (err: AWSError, data: Route53.Types.GetHealthCheckResponse) => void): Request<Route53.Types.GetHealthCheckResponse, AWSError>;
  /**
   * To retrieve a count of all your health checks, send a GET request to the /2013-04-01/healthcheckcount resource.
   */
  getHealthCheckCount(params: Route53.Types.GetHealthCheckCountRequest, callback?: (err: AWSError, data: Route53.Types.GetHealthCheckCountResponse) => void): Request<Route53.Types.GetHealthCheckCountResponse, AWSError>;
  /**
   * To retrieve a count of all your health checks, send a GET request to the /2013-04-01/healthcheckcount resource.
   */
  getHealthCheckCount(callback?: (err: AWSError, data: Route53.Types.GetHealthCheckCountResponse) => void): Request<Route53.Types.GetHealthCheckCountResponse, AWSError>;
  /**
   * If you want to learn why a health check is currently failing or why it failed most recently (if at all), you can get the failure reason for the most recent failure. Send a GET request to the /Amazon Route 53 API version/healthcheck/health check ID/lastfailurereason resource.
   */
  getHealthCheckLastFailureReason(params: Route53.Types.GetHealthCheckLastFailureReasonRequest, callback?: (err: AWSError, data: Route53.Types.GetHealthCheckLastFailureReasonResponse) => void): Request<Route53.Types.GetHealthCheckLastFailureReasonResponse, AWSError>;
  /**
   * If you want to learn why a health check is currently failing or why it failed most recently (if at all), you can get the failure reason for the most recent failure. Send a GET request to the /Amazon Route 53 API version/healthcheck/health check ID/lastfailurereason resource.
   */
  getHealthCheckLastFailureReason(callback?: (err: AWSError, data: Route53.Types.GetHealthCheckLastFailureReasonResponse) => void): Request<Route53.Types.GetHealthCheckLastFailureReasonResponse, AWSError>;
  /**
   * Gets status of a specified health check. Send a GET request to the /2013-04-01/healthcheck/health check ID/status resource. You can use this call to get a health check's current status. 
   */
  getHealthCheckStatus(params: Route53.Types.GetHealthCheckStatusRequest, callback?: (err: AWSError, data: Route53.Types.GetHealthCheckStatusResponse) => void): Request<Route53.Types.GetHealthCheckStatusResponse, AWSError>;
  /**
   * Gets status of a specified health check. Send a GET request to the /2013-04-01/healthcheck/health check ID/status resource. You can use this call to get a health check's current status. 
   */
  getHealthCheckStatus(callback?: (err: AWSError, data: Route53.Types.GetHealthCheckStatusResponse) => void): Request<Route53.Types.GetHealthCheckStatusResponse, AWSError>;
  /**
   * Retrieves the delegation set for a hosted zone, including the four name servers assigned to the hosted zone. Send a GET request to the /Amazon Route 53 API version/hostedzone/hosted zone ID  resource. 
   */
  getHostedZone(params: Route53.Types.GetHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.GetHostedZoneResponse) => void): Request<Route53.Types.GetHostedZoneResponse, AWSError>;
  /**
   * Retrieves the delegation set for a hosted zone, including the four name servers assigned to the hosted zone. Send a GET request to the /Amazon Route 53 API version/hostedzone/hosted zone ID  resource. 
   */
  getHostedZone(callback?: (err: AWSError, data: Route53.Types.GetHostedZoneResponse) => void): Request<Route53.Types.GetHostedZoneResponse, AWSError>;
  /**
   * Retrieves a count of all your hosted zones. Send a GET request to the /2013-04-01/hostedzonecount resource.
   */
  getHostedZoneCount(params: Route53.Types.GetHostedZoneCountRequest, callback?: (err: AWSError, data: Route53.Types.GetHostedZoneCountResponse) => void): Request<Route53.Types.GetHostedZoneCountResponse, AWSError>;
  /**
   * Retrieves a count of all your hosted zones. Send a GET request to the /2013-04-01/hostedzonecount resource.
   */
  getHostedZoneCount(callback?: (err: AWSError, data: Route53.Types.GetHostedZoneCountResponse) => void): Request<Route53.Types.GetHostedZoneCountResponse, AWSError>;
  /**
   * Retrieves the reusable delegation set. Send a GET request to the /2013-04-01/delegationset/delegation set ID  resource.
   */
  getReusableDelegationSet(params: Route53.Types.GetReusableDelegationSetRequest, callback?: (err: AWSError, data: Route53.Types.GetReusableDelegationSetResponse) => void): Request<Route53.Types.GetReusableDelegationSetResponse, AWSError>;
  /**
   * Retrieves the reusable delegation set. Send a GET request to the /2013-04-01/delegationset/delegation set ID  resource.
   */
  getReusableDelegationSet(callback?: (err: AWSError, data: Route53.Types.GetReusableDelegationSetResponse) => void): Request<Route53.Types.GetReusableDelegationSetResponse, AWSError>;
  /**
   * Gets information about a specific traffic policy version. Send a GET request to the /Amazon Route 53 API version/trafficpolicy resource.
   */
  getTrafficPolicy(params: Route53.Types.GetTrafficPolicyRequest, callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyResponse) => void): Request<Route53.Types.GetTrafficPolicyResponse, AWSError>;
  /**
   * Gets information about a specific traffic policy version. Send a GET request to the /Amazon Route 53 API version/trafficpolicy resource.
   */
  getTrafficPolicy(callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyResponse) => void): Request<Route53.Types.GetTrafficPolicyResponse, AWSError>;
  /**
   * Gets information about a specified traffic policy instance. Send a GET request to the /Amazon Route 53 API version/trafficpolicyinstance resource.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.   In the Amazon Route 53 console, traffic policy instances are known as policy records. 
   */
  getTrafficPolicyInstance(params: Route53.Types.GetTrafficPolicyInstanceRequest, callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyInstanceResponse) => void): Request<Route53.Types.GetTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Gets information about a specified traffic policy instance. Send a GET request to the /Amazon Route 53 API version/trafficpolicyinstance resource.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.   In the Amazon Route 53 console, traffic policy instances are known as policy records. 
   */
  getTrafficPolicyInstance(callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyInstanceResponse) => void): Request<Route53.Types.GetTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Gets the number of traffic policy instances that are associated with the current AWS account. To get the number of traffic policy instances, send a GET request to the /2013-04-01/trafficpolicyinstancecount resource.
   */
  getTrafficPolicyInstanceCount(params: Route53.Types.GetTrafficPolicyInstanceCountRequest, callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyInstanceCountResponse) => void): Request<Route53.Types.GetTrafficPolicyInstanceCountResponse, AWSError>;
  /**
   * Gets the number of traffic policy instances that are associated with the current AWS account. To get the number of traffic policy instances, send a GET request to the /2013-04-01/trafficpolicyinstancecount resource.
   */
  getTrafficPolicyInstanceCount(callback?: (err: AWSError, data: Route53.Types.GetTrafficPolicyInstanceCountResponse) => void): Request<Route53.Types.GetTrafficPolicyInstanceCountResponse, AWSError>;
  /**
   * Gets the list of ChangeBatches in a given time period for a given hosted zone.
   */
  listChangeBatchesByHostedZone(params: Route53.Types.ListChangeBatchesByHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.ListChangeBatchesByHostedZoneResponse) => void): Request<Route53.Types.ListChangeBatchesByHostedZoneResponse, AWSError>;
  /**
   * Gets the list of ChangeBatches in a given time period for a given hosted zone.
   */
  listChangeBatchesByHostedZone(callback?: (err: AWSError, data: Route53.Types.ListChangeBatchesByHostedZoneResponse) => void): Request<Route53.Types.ListChangeBatchesByHostedZoneResponse, AWSError>;
  /**
   * Gets the list of ChangeBatches in a given time period for a given hosted zone and RRSet.
   */
  listChangeBatchesByRRSet(params: Route53.Types.ListChangeBatchesByRRSetRequest, callback?: (err: AWSError, data: Route53.Types.ListChangeBatchesByRRSetResponse) => void): Request<Route53.Types.ListChangeBatchesByRRSetResponse, AWSError>;
  /**
   * Gets the list of ChangeBatches in a given time period for a given hosted zone and RRSet.
   */
  listChangeBatchesByRRSet(callback?: (err: AWSError, data: Route53.Types.ListChangeBatchesByRRSetResponse) => void): Request<Route53.Types.ListChangeBatchesByRRSetResponse, AWSError>;
  /**
   * Retrieves a list of supported geo locations. Send a GET request to the /2013-04-01/geolocations resource. The response to this request includes a GeoLocationDetailsList element for each location that Amazon Route 53 supports. Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country. 
   */
  listGeoLocations(params: Route53.Types.ListGeoLocationsRequest, callback?: (err: AWSError, data: Route53.Types.ListGeoLocationsResponse) => void): Request<Route53.Types.ListGeoLocationsResponse, AWSError>;
  /**
   * Retrieves a list of supported geo locations. Send a GET request to the /2013-04-01/geolocations resource. The response to this request includes a GeoLocationDetailsList element for each location that Amazon Route 53 supports. Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country. 
   */
  listGeoLocations(callback?: (err: AWSError, data: Route53.Types.ListGeoLocationsResponse) => void): Request<Route53.Types.ListGeoLocationsResponse, AWSError>;
  /**
   * Retrieve a list of your health checks. Send a GET request to the /2013-04-01/healthcheck resource. The response to this request includes a HealthChecks element with zero or more HealthCheck child elements. By default, the list of health checks is displayed on a single page. You can control the length of the page that is displayed by using the MaxItems parameter. You can use the Marker parameter to control the health check that the list begins with. For information about listing health checks using the Amazon Route 53 console, see Amazon Route 53 Health Checks and DNS Failover.
   */
  listHealthChecks(params: Route53.Types.ListHealthChecksRequest, callback?: (err: AWSError, data: Route53.Types.ListHealthChecksResponse) => void): Request<Route53.Types.ListHealthChecksResponse, AWSError>;
  /**
   * Retrieve a list of your health checks. Send a GET request to the /2013-04-01/healthcheck resource. The response to this request includes a HealthChecks element with zero or more HealthCheck child elements. By default, the list of health checks is displayed on a single page. You can control the length of the page that is displayed by using the MaxItems parameter. You can use the Marker parameter to control the health check that the list begins with. For information about listing health checks using the Amazon Route 53 console, see Amazon Route 53 Health Checks and DNS Failover.
   */
  listHealthChecks(callback?: (err: AWSError, data: Route53.Types.ListHealthChecksResponse) => void): Request<Route53.Types.ListHealthChecksResponse, AWSError>;
  /**
   * To retrieve a list of your public and private hosted zones, send a GET request to the /2013-04-01/hostedzone resource. The response to this request includes a HostedZones child element for each hosted zone created by the current AWS account. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the maxitems parameter to list them in groups of up to 100. The response includes four values that help navigate from one group of maxitems hosted zones to the next:    MaxItems is the value specified for the maxitems parameter in the request that produced the current response.   If the value of IsTruncated in the response is true, there are more hosted zones associated with the current AWS account.     NextMarker is the hosted zone ID of the next hosted zone that is associated with the current AWS account. If you want to list more hosted zones, make another call to ListHostedZones, and specify the value of the NextMarker element in the marker parameter.  If IsTruncated is false, the NextMarker element is omitted from the response.   If you're making the second or subsequent call to ListHostedZones, the Marker element matches the value that you specified in the marker parameter in the previous request.  
   */
  listHostedZones(params: Route53.Types.ListHostedZonesRequest, callback?: (err: AWSError, data: Route53.Types.ListHostedZonesResponse) => void): Request<Route53.Types.ListHostedZonesResponse, AWSError>;
  /**
   * To retrieve a list of your public and private hosted zones, send a GET request to the /2013-04-01/hostedzone resource. The response to this request includes a HostedZones child element for each hosted zone created by the current AWS account. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the maxitems parameter to list them in groups of up to 100. The response includes four values that help navigate from one group of maxitems hosted zones to the next:    MaxItems is the value specified for the maxitems parameter in the request that produced the current response.   If the value of IsTruncated in the response is true, there are more hosted zones associated with the current AWS account.     NextMarker is the hosted zone ID of the next hosted zone that is associated with the current AWS account. If you want to list more hosted zones, make another call to ListHostedZones, and specify the value of the NextMarker element in the marker parameter.  If IsTruncated is false, the NextMarker element is omitted from the response.   If you're making the second or subsequent call to ListHostedZones, the Marker element matches the value that you specified in the marker parameter in the previous request.  
   */
  listHostedZones(callback?: (err: AWSError, data: Route53.Types.ListHostedZonesResponse) => void): Request<Route53.Types.ListHostedZonesResponse, AWSError>;
  /**
   * Retrieves a list of your hosted zones in lexicographic order. Send a GET request to the /2013-04-01/hostedzonesbyname resource. The response includes a HostedZones child element for each hosted zone created by the current AWS account.   ListHostedZonesByName sorts hosted zones by name with the labels reversed. For example:    com.example.www.    Note the trailing dot, which can change the sort order in some circumstances. If the domain name includes escape characters or Punycode, ListHostedZonesByName alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for example.com, specify ex\344mple.com for the domain name. ListHostedZonesByName alphabetizes it as:    com.ex\344mple.    The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see DNS Domain Name Format in the Amazon Route 53 Developer Guide. Amazon Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the MaxItems parameter to list them in groups of up to 100. The response includes values that help navigate from one group of MaxItems hosted zones to the next:   The DNSName and HostedZoneId elements in the response contain the values, if any, specified for the dnsname and hostedzoneid parameters in the request that produced the current response.   The MaxItems element in the response contains the value, if any, that you specified for the maxitems parameter in the request that produced the current response.   If the value of IsTruncated in the response is true, there are more hosted zones associated with the current AWS account.  If IsTruncated is false, this response includes the last hosted zone that is associated with the current account. The NextDNSName element and NextHostedZoneId elements are omitted from the response.   The NextDNSName and NextHostedZoneId elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current AWS account. If you want to list more hosted zones, make another call to ListHostedZonesByName, and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively.  
   */
  listHostedZonesByName(params: Route53.Types.ListHostedZonesByNameRequest, callback?: (err: AWSError, data: Route53.Types.ListHostedZonesByNameResponse) => void): Request<Route53.Types.ListHostedZonesByNameResponse, AWSError>;
  /**
   * Retrieves a list of your hosted zones in lexicographic order. Send a GET request to the /2013-04-01/hostedzonesbyname resource. The response includes a HostedZones child element for each hosted zone created by the current AWS account.   ListHostedZonesByName sorts hosted zones by name with the labels reversed. For example:    com.example.www.    Note the trailing dot, which can change the sort order in some circumstances. If the domain name includes escape characters or Punycode, ListHostedZonesByName alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for example.com, specify ex\344mple.com for the domain name. ListHostedZonesByName alphabetizes it as:    com.ex\344mple.    The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see DNS Domain Name Format in the Amazon Route 53 Developer Guide. Amazon Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the MaxItems parameter to list them in groups of up to 100. The response includes values that help navigate from one group of MaxItems hosted zones to the next:   The DNSName and HostedZoneId elements in the response contain the values, if any, specified for the dnsname and hostedzoneid parameters in the request that produced the current response.   The MaxItems element in the response contains the value, if any, that you specified for the maxitems parameter in the request that produced the current response.   If the value of IsTruncated in the response is true, there are more hosted zones associated with the current AWS account.  If IsTruncated is false, this response includes the last hosted zone that is associated with the current account. The NextDNSName element and NextHostedZoneId elements are omitted from the response.   The NextDNSName and NextHostedZoneId elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current AWS account. If you want to list more hosted zones, make another call to ListHostedZonesByName, and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively.  
   */
  listHostedZonesByName(callback?: (err: AWSError, data: Route53.Types.ListHostedZonesByNameResponse) => void): Request<Route53.Types.ListHostedZonesByNameResponse, AWSError>;
  /**
   * Lists the resource record sets in a specified hosted zone.  ListResourceRecordSets returns up to 100 resource record sets at a time in ASCII order, beginning at a position specified by the name and type elements. The action sorts results first by DNS name with the labels reversed, for example:  com.example.www.  Note the trailing dot, which can change the sort order in some circumstances. When multiple records have the same DNS name, the action sorts results by the record type. You can use the name and type elements to adjust the beginning position of the list of resource record sets returned:  If you do not specify Name or Type  The results begin with the first resource record set that the hosted zone contains.  If you specify Name but not Type  The results begin with the first resource record set in the list whose name is greater than or equal to Name.  If you specify Type but not Name  Amazon Route 53 returns the InvalidInput error.  If you specify both Name and Type  The results begin with the first resource record set in the list whose name is greater than or equal to Name, and whose type is greater than or equal to Type.   This action returns the most current version of the records. This includes records that are PENDING, and that are not yet available on all Amazon Route 53 DNS servers. To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a ChangeResourceRecordSets request while you're paging through the results of a ListResourceRecordSets request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes.
   */
  listResourceRecordSets(params: Route53.Types.ListResourceRecordSetsRequest, callback?: (err: AWSError, data: Route53.Types.ListResourceRecordSetsResponse) => void): Request<Route53.Types.ListResourceRecordSetsResponse, AWSError>;
  /**
   * Lists the resource record sets in a specified hosted zone.  ListResourceRecordSets returns up to 100 resource record sets at a time in ASCII order, beginning at a position specified by the name and type elements. The action sorts results first by DNS name with the labels reversed, for example:  com.example.www.  Note the trailing dot, which can change the sort order in some circumstances. When multiple records have the same DNS name, the action sorts results by the record type. You can use the name and type elements to adjust the beginning position of the list of resource record sets returned:  If you do not specify Name or Type  The results begin with the first resource record set that the hosted zone contains.  If you specify Name but not Type  The results begin with the first resource record set in the list whose name is greater than or equal to Name.  If you specify Type but not Name  Amazon Route 53 returns the InvalidInput error.  If you specify both Name and Type  The results begin with the first resource record set in the list whose name is greater than or equal to Name, and whose type is greater than or equal to Type.   This action returns the most current version of the records. This includes records that are PENDING, and that are not yet available on all Amazon Route 53 DNS servers. To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a ChangeResourceRecordSets request while you're paging through the results of a ListResourceRecordSets request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes.
   */
  listResourceRecordSets(callback?: (err: AWSError, data: Route53.Types.ListResourceRecordSetsResponse) => void): Request<Route53.Types.ListResourceRecordSetsResponse, AWSError>;
  /**
   * To retrieve a list of your reusable delegation sets, send a GET request to the /2013-04-01/delegationset resource. The response to this request includes a DelegationSets element with zero, one, or multiple DelegationSet child elements. By default, the list of delegation sets is displayed on a single page. You can control the length of the page that is displayed by using the MaxItems parameter. You can use the Marker parameter to control the delegation set that the list begins with.    Amazon Route 53 returns a maximum of 100 items. If you set MaxItems to a value greater than 100, Amazon Route 53 returns only the first 100. 
   */
  listReusableDelegationSets(params: Route53.Types.ListReusableDelegationSetsRequest, callback?: (err: AWSError, data: Route53.Types.ListReusableDelegationSetsResponse) => void): Request<Route53.Types.ListReusableDelegationSetsResponse, AWSError>;
  /**
   * To retrieve a list of your reusable delegation sets, send a GET request to the /2013-04-01/delegationset resource. The response to this request includes a DelegationSets element with zero, one, or multiple DelegationSet child elements. By default, the list of delegation sets is displayed on a single page. You can control the length of the page that is displayed by using the MaxItems parameter. You can use the Marker parameter to control the delegation set that the list begins with.    Amazon Route 53 returns a maximum of 100 items. If you set MaxItems to a value greater than 100, Amazon Route 53 returns only the first 100. 
   */
  listReusableDelegationSets(callback?: (err: AWSError, data: Route53.Types.ListReusableDelegationSetsResponse) => void): Request<Route53.Types.ListReusableDelegationSetsResponse, AWSError>;
  /**
   * Lists tags for one health check or hosted zone.  For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  listTagsForResource(params: Route53.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Route53.Types.ListTagsForResourceResponse) => void): Request<Route53.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists tags for one health check or hosted zone.  For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  listTagsForResource(callback?: (err: AWSError, data: Route53.Types.ListTagsForResourceResponse) => void): Request<Route53.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists tags for up to 10 health checks or hosted zones. For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  listTagsForResources(params: Route53.Types.ListTagsForResourcesRequest, callback?: (err: AWSError, data: Route53.Types.ListTagsForResourcesResponse) => void): Request<Route53.Types.ListTagsForResourcesResponse, AWSError>;
  /**
   * Lists tags for up to 10 health checks or hosted zones. For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
   */
  listTagsForResources(callback?: (err: AWSError, data: Route53.Types.ListTagsForResourcesResponse) => void): Request<Route53.Types.ListTagsForResourcesResponse, AWSError>;
  /**
   * Gets information about the latest version for every traffic policy that is associated with the current AWS account. Send a GET request to the /Amazon Route 53 API version/trafficpolicy resource. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policies, you can use the maxitems parameter to list them in groups of up to 100. The response includes three values that help you navigate from one group of maxitems traffic policies to the next:    IsTruncated  If the value of IsTruncated in the response is true, there are more traffic policies associated with the current AWS account. If IsTruncated is false, this response includes the last traffic policy that is associated with the current account.    TrafficPolicyIdMarker  If IsTruncated is true, TrafficPolicyIdMarker is the ID of the first traffic policy in the next group of MaxItems traffic policies. If you want to list more traffic policies, make another call to ListTrafficPolicies, and specify the value of the TrafficPolicyIdMarker element from the response in the TrafficPolicyIdMarker request parameter. If IsTruncated is false, the TrafficPolicyIdMarker element is omitted from the response.    MaxItems  The value that you specified for the MaxItems parameter in the request that produced the current response.  
   */
  listTrafficPolicies(params: Route53.Types.ListTrafficPoliciesRequest, callback?: (err: AWSError, data: Route53.Types.ListTrafficPoliciesResponse) => void): Request<Route53.Types.ListTrafficPoliciesResponse, AWSError>;
  /**
   * Gets information about the latest version for every traffic policy that is associated with the current AWS account. Send a GET request to the /Amazon Route 53 API version/trafficpolicy resource. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policies, you can use the maxitems parameter to list them in groups of up to 100. The response includes three values that help you navigate from one group of maxitems traffic policies to the next:    IsTruncated  If the value of IsTruncated in the response is true, there are more traffic policies associated with the current AWS account. If IsTruncated is false, this response includes the last traffic policy that is associated with the current account.    TrafficPolicyIdMarker  If IsTruncated is true, TrafficPolicyIdMarker is the ID of the first traffic policy in the next group of MaxItems traffic policies. If you want to list more traffic policies, make another call to ListTrafficPolicies, and specify the value of the TrafficPolicyIdMarker element from the response in the TrafficPolicyIdMarker request parameter. If IsTruncated is false, the TrafficPolicyIdMarker element is omitted from the response.    MaxItems  The value that you specified for the MaxItems parameter in the request that produced the current response.  
   */
  listTrafficPolicies(callback?: (err: AWSError, data: Route53.Types.ListTrafficPoliciesResponse) => void): Request<Route53.Types.ListTrafficPoliciesResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created by using the current AWS account.  After you submit an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Send a GET request to the /Amazon Route 53 API version/trafficpolicyinstance resource. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100. The response includes five values that help you navigate from one group of MaxItems traffic policy instances to the next:    IsTruncated  If the value of IsTruncated in the response is true, there are more traffic policy instances associated with the current AWS account. If IsTruncated is false, this response includes the last traffic policy instance that is associated with the current account.    MaxItems  The value that you specified for the MaxItems parameter in the request that produced the current response.    HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker  If IsTruncated is true, these three values in the response represent the first traffic policy instance in the next group of MaxItems traffic policy instances. To list more traffic policy instances, make another call to ListTrafficPolicyInstances, and specify these values in the corresponding request parameters. If IsTruncated is false, all three elements are omitted from the response.  
   */
  listTrafficPolicyInstances(params: Route53.Types.ListTrafficPolicyInstancesRequest, callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created by using the current AWS account.  After you submit an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Send a GET request to the /Amazon Route 53 API version/trafficpolicyinstance resource. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100. The response includes five values that help you navigate from one group of MaxItems traffic policy instances to the next:    IsTruncated  If the value of IsTruncated in the response is true, there are more traffic policy instances associated with the current AWS account. If IsTruncated is false, this response includes the last traffic policy instance that is associated with the current account.    MaxItems  The value that you specified for the MaxItems parameter in the request that produced the current response.    HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker  If IsTruncated is true, these three values in the response represent the first traffic policy instance in the next group of MaxItems traffic policy instances. To list more traffic policy instances, make another call to ListTrafficPolicyInstances, and specify these values in the corresponding request parameters. If IsTruncated is false, all three elements are omitted from the response.  
   */
  listTrafficPolicyInstances(callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created in a specified hosted zone.  After you submit an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Send a GET request to the /Amazon Route 53 API version/trafficpolicyinstance resource and include the ID of the hosted zone. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100. The response includes four values that help you navigate from one group of MaxItems traffic policy instances to the next:    IsTruncated  If the value of IsTruncated in the response is true, there are more traffic policy instances associated with the current AWS account. If IsTruncated is false, this response includes the last traffic policy instance that is associated with the current account.    MaxItems  The value that you specified for the MaxItems parameter in the request that produced the current response.    TrafficPolicyInstanceNameMarker and TrafficPolicyInstanceTypeMarker  If IsTruncated is true, these two values in the response represent the first traffic policy instance in the next group of MaxItems traffic policy instances. To list more traffic policy instances, make another call to ListTrafficPolicyInstancesByHostedZone, and specify these values in the corresponding request parameters. If IsTruncated is false, all three elements are omitted from the response.  
   */
  listTrafficPolicyInstancesByHostedZone(params: Route53.Types.ListTrafficPolicyInstancesByHostedZoneRequest, callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesByHostedZoneResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesByHostedZoneResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created in a specified hosted zone.  After you submit an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Send a GET request to the /Amazon Route 53 API version/trafficpolicyinstance resource and include the ID of the hosted zone. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100. The response includes four values that help you navigate from one group of MaxItems traffic policy instances to the next:    IsTruncated  If the value of IsTruncated in the response is true, there are more traffic policy instances associated with the current AWS account. If IsTruncated is false, this response includes the last traffic policy instance that is associated with the current account.    MaxItems  The value that you specified for the MaxItems parameter in the request that produced the current response.    TrafficPolicyInstanceNameMarker and TrafficPolicyInstanceTypeMarker  If IsTruncated is true, these two values in the response represent the first traffic policy instance in the next group of MaxItems traffic policy instances. To list more traffic policy instances, make another call to ListTrafficPolicyInstancesByHostedZone, and specify these values in the corresponding request parameters. If IsTruncated is false, all three elements are omitted from the response.  
   */
  listTrafficPolicyInstancesByHostedZone(callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesByHostedZoneResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesByHostedZoneResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created by using a specify traffic policy version.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Send a GET request to the /Route 53 API version/trafficpolicyinstance resource and include the ID and version of the traffic policy. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100. The response includes five values that help you navigate from one group of MaxItems traffic policy instances to the next:    IsTruncated  If the value of IsTruncated in the response is true, there are more traffic policy instances associated with the specified traffic policy. If IsTruncated is false, this response includes the last traffic policy instance that is associated with the specified traffic policy.    MaxItems  The value that you specified for the MaxItems parameter in the request that produced the current response.    HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker  If IsTruncated is true, these values in the response represent the first traffic policy instance in the next group of MaxItems traffic policy instances. To list more traffic policy instances, make another call to ListTrafficPolicyInstancesByPolicy, and specify these values in the corresponding request parameters. If IsTruncated is false, all three elements are omitted from the response.  
   */
  listTrafficPolicyInstancesByPolicy(params: Route53.Types.ListTrafficPolicyInstancesByPolicyRequest, callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesByPolicyResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesByPolicyResponse, AWSError>;
  /**
   * Gets information about the traffic policy instances that you created by using a specify traffic policy version.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Send a GET request to the /Route 53 API version/trafficpolicyinstance resource and include the ID and version of the traffic policy. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100. The response includes five values that help you navigate from one group of MaxItems traffic policy instances to the next:    IsTruncated  If the value of IsTruncated in the response is true, there are more traffic policy instances associated with the specified traffic policy. If IsTruncated is false, this response includes the last traffic policy instance that is associated with the specified traffic policy.    MaxItems  The value that you specified for the MaxItems parameter in the request that produced the current response.    HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker  If IsTruncated is true, these values in the response represent the first traffic policy instance in the next group of MaxItems traffic policy instances. To list more traffic policy instances, make another call to ListTrafficPolicyInstancesByPolicy, and specify these values in the corresponding request parameters. If IsTruncated is false, all three elements are omitted from the response.  
   */
  listTrafficPolicyInstancesByPolicy(callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyInstancesByPolicyResponse) => void): Request<Route53.Types.ListTrafficPolicyInstancesByPolicyResponse, AWSError>;
  /**
   * Gets information about all of the versions for a specified traffic policy. Send a GET request to the /Amazon Route 53 API version/trafficpolicy resource and specify the ID of the traffic policy for which you want to list versions. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policies, you can use the maxitems parameter to list them in groups of up to 100. The response includes three values that help you navigate from one group of maxitems traffic policies to the next:    IsTruncated  If the value of IsTruncated in the response is true, there are more traffic policy versions associated with the specified traffic policy. If IsTruncated is false, this response includes the last traffic policy version that is associated with the specified traffic policy.    TrafficPolicyVersionMarker  The ID of the next traffic policy version that is associated with the current AWS account. If you want to list more traffic policies, make another call to ListTrafficPolicyVersions, and specify the value of the TrafficPolicyVersionMarker element in the TrafficPolicyVersionMarker request parameter. If IsTruncated is false, Amazon Route 53 omits the TrafficPolicyVersionMarker element from the response.    MaxItems  The value that you specified for the MaxItems parameter in the request that produced the current response.  
   */
  listTrafficPolicyVersions(params: Route53.Types.ListTrafficPolicyVersionsRequest, callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyVersionsResponse) => void): Request<Route53.Types.ListTrafficPolicyVersionsResponse, AWSError>;
  /**
   * Gets information about all of the versions for a specified traffic policy. Send a GET request to the /Amazon Route 53 API version/trafficpolicy resource and specify the ID of the traffic policy for which you want to list versions. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policies, you can use the maxitems parameter to list them in groups of up to 100. The response includes three values that help you navigate from one group of maxitems traffic policies to the next:    IsTruncated  If the value of IsTruncated in the response is true, there are more traffic policy versions associated with the specified traffic policy. If IsTruncated is false, this response includes the last traffic policy version that is associated with the specified traffic policy.    TrafficPolicyVersionMarker  The ID of the next traffic policy version that is associated with the current AWS account. If you want to list more traffic policies, make another call to ListTrafficPolicyVersions, and specify the value of the TrafficPolicyVersionMarker element in the TrafficPolicyVersionMarker request parameter. If IsTruncated is false, Amazon Route 53 omits the TrafficPolicyVersionMarker element from the response.    MaxItems  The value that you specified for the MaxItems parameter in the request that produced the current response.  
   */
  listTrafficPolicyVersions(callback?: (err: AWSError, data: Route53.Types.ListTrafficPolicyVersionsResponse) => void): Request<Route53.Types.ListTrafficPolicyVersionsResponse, AWSError>;
  /**
   * Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. 
   */
  testDNSAnswer(params: Route53.Types.TestDNSAnswerRequest, callback?: (err: AWSError, data: Route53.Types.TestDNSAnswerResponse) => void): Request<Route53.Types.TestDNSAnswerResponse, AWSError>;
  /**
   * Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. 
   */
  testDNSAnswer(callback?: (err: AWSError, data: Route53.Types.TestDNSAnswerResponse) => void): Request<Route53.Types.TestDNSAnswerResponse, AWSError>;
  /**
   * Updates an existing health check. Send a POST request to the /2013-04-01/healthcheck/health check ID  resource. The request body must include an XML document with an UpdateHealthCheckRequest element. For more information about updating health checks, see Creating, Updating, and Deleting Health Checks in the Amazon Route 53 Developer Guide.
   */
  updateHealthCheck(params: Route53.Types.UpdateHealthCheckRequest, callback?: (err: AWSError, data: Route53.Types.UpdateHealthCheckResponse) => void): Request<Route53.Types.UpdateHealthCheckResponse, AWSError>;
  /**
   * Updates an existing health check. Send a POST request to the /2013-04-01/healthcheck/health check ID  resource. The request body must include an XML document with an UpdateHealthCheckRequest element. For more information about updating health checks, see Creating, Updating, and Deleting Health Checks in the Amazon Route 53 Developer Guide.
   */
  updateHealthCheck(callback?: (err: AWSError, data: Route53.Types.UpdateHealthCheckResponse) => void): Request<Route53.Types.UpdateHealthCheckResponse, AWSError>;
  /**
   * Updates the hosted zone comment. Send a POST request to the /2013-04-01/hostedzone/hosted zone ID  resource. 
   */
  updateHostedZoneComment(params: Route53.Types.UpdateHostedZoneCommentRequest, callback?: (err: AWSError, data: Route53.Types.UpdateHostedZoneCommentResponse) => void): Request<Route53.Types.UpdateHostedZoneCommentResponse, AWSError>;
  /**
   * Updates the hosted zone comment. Send a POST request to the /2013-04-01/hostedzone/hosted zone ID  resource. 
   */
  updateHostedZoneComment(callback?: (err: AWSError, data: Route53.Types.UpdateHostedZoneCommentResponse) => void): Request<Route53.Types.UpdateHostedZoneCommentResponse, AWSError>;
  /**
   * Updates the comment for a specified traffic policy version. Send a POST request to the /2013-04-01/trafficpolicy/ resource. The request body must include a document with an UpdateTrafficPolicyCommentRequest element.
   */
  updateTrafficPolicyComment(params: Route53.Types.UpdateTrafficPolicyCommentRequest, callback?: (err: AWSError, data: Route53.Types.UpdateTrafficPolicyCommentResponse) => void): Request<Route53.Types.UpdateTrafficPolicyCommentResponse, AWSError>;
  /**
   * Updates the comment for a specified traffic policy version. Send a POST request to the /2013-04-01/trafficpolicy/ resource. The request body must include a document with an UpdateTrafficPolicyCommentRequest element.
   */
  updateTrafficPolicyComment(callback?: (err: AWSError, data: Route53.Types.UpdateTrafficPolicyCommentResponse) => void): Request<Route53.Types.UpdateTrafficPolicyCommentResponse, AWSError>;
  /**
   * Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version. Send a POST request to the /2013-04-01/trafficpolicyinstance/traffic policy ID  resource. The request body must include a document with an UpdateTrafficPolicyInstanceRequest element. When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name (such as example.com) while it replaces one group of resource record sets with another. Amazon Route 53 performs the following operations:   Amazon Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how substantial the differences are between the existing resource record sets and the new resource record sets.    When all of the new resource record sets have been created, Amazon Route 53 starts to respond to DNS queries for the root resource record set name (such as example.com) by using the new resource record sets.   Amazon Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.  
   */
  updateTrafficPolicyInstance(params: Route53.Types.UpdateTrafficPolicyInstanceRequest, callback?: (err: AWSError, data: Route53.Types.UpdateTrafficPolicyInstanceResponse) => void): Request<Route53.Types.UpdateTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version. Send a POST request to the /2013-04-01/trafficpolicyinstance/traffic policy ID  resource. The request body must include a document with an UpdateTrafficPolicyInstanceRequest element. When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name (such as example.com) while it replaces one group of resource record sets with another. Amazon Route 53 performs the following operations:   Amazon Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how substantial the differences are between the existing resource record sets and the new resource record sets.    When all of the new resource record sets have been created, Amazon Route 53 starts to respond to DNS queries for the root resource record set name (such as example.com) by using the new resource record sets.   Amazon Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.  
   */
  updateTrafficPolicyInstance(callback?: (err: AWSError, data: Route53.Types.UpdateTrafficPolicyInstanceResponse) => void): Request<Route53.Types.UpdateTrafficPolicyInstanceResponse, AWSError>;
  /**
   * Waits for the resourceRecordSetsChanged state by periodically calling the underlying Route53.getChangeoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "resourceRecordSetsChanged", params: Route53.Types.GetChangeRequest, callback?: (err: AWSError, data: Route53.Types.GetChangeResponse) => void): Request<Route53.Types.GetChangeResponse, AWSError>;
  /**
   * Waits for the resourceRecordSetsChanged state by periodically calling the underlying Route53.getChangeoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "resourceRecordSetsChanged", callback?: (err: AWSError, data: Route53.Types.GetChangeResponse) => void): Request<Route53.Types.GetChangeResponse, AWSError>;
}
declare namespace Route53.Types {
  export type AWSAccountID = string;
  export interface AlarmIdentifier {
    /**
     * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy. For the current list of CloudWatch regions, see Amazon CloudWatch in AWS Regions and Endpoints in the Amazon Web Services General Reference.
     */
    Region: CloudWatchRegion;
    /**
     * The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
     */
    Name: AlarmName;
  }
  export type AlarmName = string;
  export type AliasHealthEnabled = boolean;
  export interface AliasTarget {
    /**
     *  Alias resource records sets only: The value used depends on where the queries are routed:  A CloudFront distribution  Specify Z2FDTNDATAQYW2.  Alias resource record sets for CloudFront cannot be created in a private zone.   Elastic Beanstalk environment  Specify the hosted zone ID for the region in which you created the environment. The environment must have a regionalized subdomain. For a list of regions and the corresponding hosted zone IDs, see AWS Elastic Beanstalk in the Regions and Endpoints chapter of the AWS General Reference.  ELB load balancer  Specify the value of the hosted zone ID for the load balancer. Use the following methods to get the hosted zone ID:   AWS Management Console: Go to the Amazon EC2; page, click Load Balancers in the navigation pane, select the load balancer, and get the value of the Hosted Zone ID field on the Description tab. Use the same process to get the DNS Name. See HostedZone$Name.   Elastic Load Balancing API: Use DescribeLoadBalancers to get the value of CanonicalHostedZoneNameID. Use the same process to get the CanonicalHostedZoneName. See HostedZone$Name.   AWS CLI: Use  describe-load-balancers  to get the value of CanonicalHostedZoneNameID. Use the same process to get the CanonicalHostedZoneName. See HostedZone$Name.    An Amazon S3 bucket configured as a static website  Specify the hosted zone ID for the Amazon S3 website endpoint in which you created the bucket. For more information about valid values, see the table  Amazon S3 (S3) Website Endpoints in the Amazon Web Services General Reference.  Another Amazon Route 53 resource record set in your hosted zone  Specify the hosted zone ID of your hosted zone. (An alias resource record set cannot reference a resource record set in a different hosted zone.)  
     */
    HostedZoneId: ResourceId;
    /**
     *  Alias resource record sets only: The value that you specify depends on where you want to route queries:    A CloudFront distribution: Specify the domain name that CloudFront assigned when you created your distribution. Your CloudFront distribution must include an alternate domain name that matches the name of the resource record set. For example, if the name of the resource record set is acme.example.com, your CloudFront distribution must include acme.example.com as one of the alternate domain names. For more information, see Using Alternate Domain Names (CNAMEs) in the Amazon CloudFront Developer Guide.    Elastic Beanstalk environment: Specify the CNAME attribute for the environment. (The environment must have a regionalized domain name.) You can use the following methods to get the value of the CNAME attribute:    AWS Managment Console: For information about how to get the value by using the console, see Using Custom Domains with Elastic Beanstalk in the AWS Elastic Beanstalk Developer Guide.    Elastic Load Balancing API: Use the DescribeEnvironments action to get the value of the CNAME attribute. For more information, see DescribeEnvironments in the AWS Elastic Beanstalk API Reference.    AWS CLI: Use the describe-environments command to get the value of the CNAME attribute. For more information, see describe-environments in the AWS Command Line Interface Reference.      An ELB load balancer: Specify the DNS name associated with the load balancer. Get the DNS name by using the AWS Management Console, the ELB API, or the AWS CLI. Use the same method to get values for HostedZoneId and DNSName. If you get one value from the console and the other value from the API or the CLI, creating the resource record set will fail.    AWS Management Console: Go to the Amazon EC2 page, click Load Balancers in the navigation pane, choose the load balancer, choose the Description tab, and get the value of the DNS Name field that begins with dualstack. Use the same process to get the Hosted Zone ID. See HostedZone$Id.    Elastic Load Balancing API: Use  DescribeLoadBalancers  to get the value of CanonicalHostedZoneName. Use the same process to get the CanonicalHostedZoneNameId. See HostedZone$Id.    AWS CLI: Use  describe-load-balancers  to get the value of CanonicalHostedZoneName. Use the same process to get the CanonicalHostedZoneNameId. See HostedZoneId.      An Amazon S3 bucket that is configured as a static website: Specify the domain name of the Amazon S3 website endpoint in which you created the bucket; for example, s3-website-us-east-1.amazonaws.com. For more information about valid values, see the table Amazon Simple Storage Service (S3) Website Endpoints in the Amazon Web Services General Reference. For more information about using Amazon S3 buckets for websites, see Hosting a Static Website on Amazon S3 in the Amazon Simple Storage Service Developer Guide.     Another Amazon Route 53 resource record set: Specify the value of the Name element for a resource record set in the current hosted zone.  
     */
    DNSName: DNSName;
    /**
     *  Applies only to alias, weighted alias, latency alias, and failover alias record sets: If you set the value of EvaluateTargetHealth to true for the resource record set or sets in an alias, weighted alias, latency alias, or failover alias resource record set, and if you specify a value for  HealthCheck$Id  for every resource record set that is referenced by these alias resource record sets, the alias resource record sets inherit the health of the referenced resource record sets. In this configuration, when Amazon Route 53 receives a DNS query for an alias resource record set:   Amazon Route 53 looks at the resource record sets that are referenced by the alias resource record sets to determine which health checks they're using.   Amazon Route 53 checks the current status of each health check. (Amazon Route 53 periodically checks the health of the endpoint that is specified in a health check; it doesn't perform the health check when the DNS query arrives.)   Based on the status of the health checks, Amazon Route 53 determines which resource record sets are healthy. Unhealthy resource record sets are immediately removed from consideration. In addition, if all of the resource record sets that are referenced by an alias resource record set are unhealthy, that alias resource record set also is immediately removed from consideration.   Based on the configuration of the alias resource record sets (weighted alias or latency alias, for example) and the configuration of the resource record sets that they reference, Amazon Route 53 chooses a resource record set from the healthy resource record sets, and responds to the query.   Note the following:   You cannot set EvaluateTargetHealth to true when the alias target is a CloudFront distribution.   If the AWS resource that you specify in AliasTarget is a resource record set or a group of resource record sets (for example, a group of weighted resource record sets), but it is not another alias resource record set, we recommend that you associate a health check with all of the resource record sets in the alias target.For more information, see What Happens When You Omit Health Checks? in the Amazon Route 53 Developer Guide.   If you specify an Elastic Beanstalk environment in HostedZoneId and DNSName, and if the environment contains an ELB load balancer, Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer. (An environment automatically contains an ELB load balancer if it includes more than one Amazon EC2 instance.) If you set EvaluateTargetHealth to true and either no Amazon EC2 instances are healthy or the load balancer itself is unhealthy, Amazon Route 53 routes queries to other available resources that are healthy, if any. If the environment contains a single Amazon EC2 instance, there are no special requirements.   If you specify an ELB load balancer in  AliasTarget , Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer. If no Amazon EC2 instances are healthy or if the load balancer itself is unhealthy, and if EvaluateTargetHealth is true for the corresponding alias resource record set, Amazon Route 53 routes queries to other resources. When you create a load balancer, you configure settings for Elastic Load Balancing health checks; they're not Amazon Route 53 health checks, but they perform a similar function. Do not create Amazon Route 53 health checks for the Amazon EC2 instances that you register with an ELB load balancer. For more information, see How Health Checks Work in More Complex Amazon Route 53 Configurations in the Amazon Route 53 Developers Guide.   We recommend that you set EvaluateTargetHealth to true only when you have enough idle capacity to handle the failure of one or more endpoints.   For more information and examples, see Amazon Route 53 Health Checks and DNS Failover in the Amazon Route 53 Developer Guide.
     */
    EvaluateTargetHealth: AliasHealthEnabled;
  }
  export type AssociateVPCComment = string;
  export interface AssociateVPCWithHostedZoneRequest {
    /**
     * The ID of the hosted zone you want to associate your VPC with. Note that you cannot associate a VPC with a hosted zone that doesn't have an existing VPC association.
     */
    HostedZoneId: ResourceId;
    /**
     * A complex type containing information about the Amazon VPC that you're associating with the specified hosted zone.
     */
    VPC: VPC;
    /**
     *  Optional: A comment about the association request.
     */
    Comment?: AssociateVPCComment;
  }
  export interface AssociateVPCWithHostedZoneResponse {
    /**
     * A complex type that describes the changes made to your hosted zone.
     */
    ChangeInfo: ChangeInfo;
  }
  export interface Change {
    /**
     * The action to perform:    CREATE: Creates a resource record set that has the specified values.    DELETE: Deletes a existing resource record set that has the specified values for Name, Type, SetIdentifier (for latency, weighted, geolocation, and failover resource record sets), and TTL (except alias resource record sets, for which the TTL is determined by the AWS resource that you're routing DNS queries to).  To delete the resource record set that is associated with a traffic policy instance, use  DeleteTrafficPolicyInstance . Amazon Route 53will delete the resource record set automatically. If you delete the resource record set by using ChangeResourceRecordSets, Amazon Route 53 doesn't automatically delete the traffic policy instance, and you'll continue to be charged for it even though it's no longer in use.      UPSERT: If a resource record set does not already exist, Amazon Route 53 creates it. If a resource record set does exist, Amazon Route 53 updates it with the values in the request. Amazon Route 53 can update an existing resource record set only when all of the following values match: Name, Type, and SetIdentifier (for weighted, latency, geolocation, and failover resource record sets).  
     */
    Action: ChangeAction;
    /**
     * Information about the resource record set to create or delete.
     */
    ResourceRecordSet: ResourceRecordSet;
  }
  export type ChangeAction = "CREATE"|"DELETE"|"UPSERT"|string;
  export interface ChangeBatch {
    /**
     *  Optional: Any comments you want to include about a change batch request.
     */
    Comment?: ResourceDescription;
    /**
     * Information about the changes to make to the record sets.
     */
    Changes: Changes;
  }
  export interface ChangeBatchRecord {
    /**
     * The ID of the request. Use this ID to track when the change has completed across all Amazon Route 53 DNS servers.
     */
    Id: ResourceId;
    /**
     * The date and time the change was submitted, in the format YYYY-MM-DDThh:mm:ssZ, as specified in the ISO 8601 standard (for example, 2009-11-19T19:37:58Z). The Z after the time indicates that the time is listed in Coordinated Universal Time (UTC).
     */
    SubmittedAt?: TimeStamp;
    /**
     * The current state of the request. PENDING indicates that this request has not yet been applied to all Amazon Route 53 DNS servers. Valid Values: PENDING | INSYNC 
     */
    Status: ChangeStatus;
    /**
     * A complex type that describes change information about changes made to your hosted zone. This element contains an ID that you use when performing a GetChange action to get detailed information about the change.
     */
    Comment?: ResourceDescription;
    /**
     * The AWS account ID attached to the changes. 
     */
    Submitter?: AWSAccountID;
    /**
     * A list of changes made in the ChangeBatch.
     */
    Changes?: Changes;
  }
  export type ChangeBatchRecords = ChangeBatchRecord[];
  export interface ChangeInfo {
    /**
     * The ID of the request.
     */
    Id: ResourceId;
    /**
     * The current state of the request. PENDING indicates that this request has not yet been applied to all Amazon Route 53 DNS servers.
     */
    Status: ChangeStatus;
    /**
     * The date and time the change request was submitted, in Coordinated Universal Time (UTC) format: YYYY-MM-DDThh:mm:ssZ. For more information, see the Wikipedia entry ISO 8601.
     */
    SubmittedAt: TimeStamp;
    /**
     * A complex type that describes change information about changes made to your hosted zone. This element contains an ID that you use when performing a GetChange action to get detailed information about the change.
     */
    Comment?: ResourceDescription;
  }
  export interface ChangeResourceRecordSetsRequest {
    /**
     * The ID of the hosted zone that contains the resource record sets that you want to change.
     */
    HostedZoneId: ResourceId;
    /**
     * A complex type that contains an optional comment and the Changes element.
     */
    ChangeBatch: ChangeBatch;
  }
  export interface ChangeResourceRecordSetsResponse {
    /**
     * A complex type that contains information about changes made to your hosted zone. This element contains an ID that you use when performing a GetChange action to get detailed information about the change.
     */
    ChangeInfo: ChangeInfo;
  }
  export type ChangeStatus = "PENDING"|"INSYNC"|string;
  export interface ChangeTagsForResourceRequest {
    /**
     * The type of the resource.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone.  
     */
    ResourceType: TagResourceType;
    /**
     * The ID of the resource for which you want to add, change, or delete tags.
     */
    ResourceId: TagResourceId;
    /**
     * A complex type that contains a list of the tags that you want to add to the specified health check or hosted zone and/or the tags for which you want to edit the Value element. You can add a maximum of 10 tags to a health check or a hosted zone.
     */
    AddTags?: TagList;
    /**
     * A complex type that contains a list of the tags that you want to delete from the specified health check or hosted zone. You can specify up to 10 keys.
     */
    RemoveTagKeys?: TagKeyList;
  }
  export interface ChangeTagsForResourceResponse {
  }
  export type Changes = Change[];
  export type CheckerIpRanges = IPAddressCidr[];
  export type ChildHealthCheckList = HealthCheckId[];
  export interface CloudWatchAlarmConfiguration {
    /**
     * For the metric that the CloudWatch alarm is associated with, the number of periods that the metric is compared to the threshold.
     */
    EvaluationPeriods: EvaluationPeriods;
    /**
     * For the metric that the CloudWatch alarm is associated with, the value the metric is compared with.
     */
    Threshold: Threshold;
    /**
     * For the metric that the CloudWatch alarm is associated with, the arithmetic operation that is used for the comparison.
     */
    ComparisonOperator: ComparisonOperator;
    /**
     * For the metric that the CloudWatch alarm is associated with, the duration of one evaluation period in seconds.
     */
    Period: Period;
    /**
     * The name of the CloudWatch metric that the alarm is associated with.
     */
    MetricName: MetricName;
    /**
     * The namespace of the metric that the alarm is associated with. For more information, see Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference in the Amazon CloudWatch Developer Guide.
     */
    Namespace: Namespace;
    /**
     * For the metric that the CloudWatch alarm is associated with, the statistic that is applied to the metric.
     */
    Statistic: Statistic;
    /**
     * For the metric that the CloudWatch alarm is associated with, a complex type that contains information about the dimensions for the metric.For information, see Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference in the Amazon CloudWatch Developer Guide.
     */
    Dimensions?: DimensionList;
  }
  export type CloudWatchRegion = "us-east-1"|"us-west-1"|"us-west-2"|"eu-central-1"|"eu-west-1"|"ap-south-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"ap-northeast-2"|"sa-east-1"|string;
  export type ComparisonOperator = "GreaterThanOrEqualToThreshold"|"GreaterThanThreshold"|"LessThanThreshold"|"LessThanOrEqualToThreshold"|string;
  export interface CreateHealthCheckRequest {
    /**
     * A unique string that identifies the request and that allows failed CreateHealthCheck requests to be retried without the risk of executing the operation twice. You must use a unique CallerReference string every time you create a health check.
     */
    CallerReference: HealthCheckNonce;
    /**
     * A complex type that contains the response to a CreateHealthCheck request. 
     */
    HealthCheckConfig: HealthCheckConfig;
  }
  export interface CreateHealthCheckResponse {
    /**
     * A complex type that contains identifying information about the health check.
     */
    HealthCheck: HealthCheck;
    /**
     * The unique URL representing the new health check.
     */
    Location: ResourceURI;
  }
  export interface CreateHostedZoneRequest {
    /**
     * The name of the domain. For resource record types that include a domain name, specify a fully qualified domain name, for example, www.example.com. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Amazon Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical. If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Amazon Route 53, change the name servers for your domain to the set of NameServers that CreateHostedZone returns in the DelegationSet element.
     */
    Name: DNSName;
    /**
     * The VPC that you want your hosted zone to be associated with. By providing this parameter, your newly created hosted cannot be resolved anywhere other than the given VPC.
     */
    VPC?: VPC;
    /**
     * A unique string that identifies the request and that allows failed CreateHostedZone requests to be retried without the risk of executing the operation twice. You must use a unique CallerReference string every time you create a hosted zone. CallerReference can be any unique string, for example, a date/time stamp.
     */
    CallerReference: Nonce;
    /**
     *  (Optional) A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the HostedZoneConfig and Comment elements.
     */
    HostedZoneConfig?: HostedZoneConfig;
    /**
     * If you want to associate a reusable delegation set with this hosted zone, the ID that Amazon Route 53 assigned to the reusable delegation set when you created it. For more information about reusable delegation sets, see CreateReusableDelegationSet.  Type  String  Default  None  Parent   CreatedHostedZoneRequest   
     */
    DelegationSetId?: ResourceId;
  }
  export interface CreateHostedZoneResponse {
    /**
     * A complex type that contains general information about the hosted zone.
     */
    HostedZone: HostedZone;
    /**
     * A complex type that describes the changes made to your hosted zone.
     */
    ChangeInfo: ChangeInfo;
    /**
     * A complex type that describes the name servers for this hosted zone.
     */
    DelegationSet: DelegationSet;
    /**
     * A complex type that contains information about an Amazon VPC that you associated with this hosted zone.
     */
    VPC?: VPC;
    /**
     * The unique URL representing the new hosted zone.
     */
    Location: ResourceURI;
  }
  export interface CreateReusableDelegationSetRequest {
    /**
     * A unique string that identifies the request, and that allows you to retry failed CreateReusableDelegationSet requests without the risk of executing the operation twice. You must use a unique CallerReference string every time you submit a CreateReusableDelegationSet request. CallerReference can be any unique string, for example a date/time stamp.
     */
    CallerReference: Nonce;
    /**
     * If you want to mark the delegation set for an existing hosted zone as reusable, the ID for that hosted zone.
     */
    HostedZoneId?: ResourceId;
  }
  export interface CreateReusableDelegationSetResponse {
    /**
     * A complex type that contains name server information.
     */
    DelegationSet: DelegationSet;
    /**
     * The unique URL representing the new reusable delegation set.
     */
    Location: ResourceURI;
  }
  export interface CreateTrafficPolicyInstanceRequest {
    /**
     * The ID of the hosted zone in which you want Amazon Route 53 to create resource record sets by using the configuration in a traffic policy.
     */
    HostedZoneId: ResourceId;
    /**
     * The domain name (such as example.com) or subdomain name (such as www.example.com) for which Amazon Route 53 responds to DNS queries by using the resource record sets that Amazon Route 53 creates for this traffic policy instance.
     */
    Name: DNSName;
    /**
     * (Optional) The TTL that you want Amazon Route 53 to assign to all of the resource record sets that it creates in the specified hosted zone.
     */
    TTL: TTL;
    /**
     * The ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * The version of the traffic policy that you want to use to create resource record sets in the specified hosted zone.
     */
    TrafficPolicyVersion: TrafficPolicyVersion;
  }
  export interface CreateTrafficPolicyInstanceResponse {
    /**
     * A complex type that contains settings for the new traffic policy instance.
     */
    TrafficPolicyInstance: TrafficPolicyInstance;
    /**
     * A unique URL that represents a new traffic policy instance.
     */
    Location: ResourceURI;
  }
  export interface CreateTrafficPolicyRequest {
    /**
     * The name of the traffic policy.
     */
    Name: TrafficPolicyName;
    /**
     * The definition of this traffic policy in JSON format. For more information, see Traffic Policy Document Format in the Amazon Route 53 API Reference.
     */
    Document: TrafficPolicyDocument;
    /**
     * (Optional) Any comments that you want to include about the traffic policy.
     */
    Comment?: TrafficPolicyComment;
  }
  export interface CreateTrafficPolicyResponse {
    /**
     * A complex type that contains settings for the new traffic policy.
     */
    TrafficPolicy: TrafficPolicy;
    /**
     * A unique URL that represents a new traffic policy.
     */
    Location: ResourceURI;
  }
  export interface CreateTrafficPolicyVersionRequest {
    /**
     * The ID of the traffic policy for which you want to create a new version.
     */
    Id: TrafficPolicyId;
    /**
     * The definition of this version of the traffic policy, in JSON format. You specified the JSON in the CreateTrafficPolicyVersion request. For more information about the JSON format, see CreateTrafficPolicy.
     */
    Document: TrafficPolicyDocument;
    /**
     * The comment that you specified in the CreateTrafficPolicyVersion request, if any.
     */
    Comment?: TrafficPolicyComment;
  }
  export interface CreateTrafficPolicyVersionResponse {
    /**
     * A complex type that contains settings for the new version of the traffic policy.
     */
    TrafficPolicy: TrafficPolicy;
    /**
     * A unique URL that represents a new traffic policy version.
     */
    Location: ResourceURI;
  }
  export type DNSName = string;
  export type DNSRCode = string;
  export type _Date = string;
  export interface DelegationSet {
    /**
     * The ID that Amazon Route 53 assigns to a reusable delegation set.
     */
    Id?: ResourceId;
    /**
     * A unique string that identifies the request, and that allows you to retry failed CreateReusableDelegationSet requests without the risk of executing the operation twice. You must use a unique CallerReference string every time you submit a CreateReusableDelegationSet request. CallerReference can be any unique string, for example, a date/time stamp.
     */
    CallerReference?: Nonce;
    /**
     * A complex type that contains a list of the authoritative name servers for the hosted zone.
     */
    NameServers: DelegationSetNameServers;
  }
  export type DelegationSetNameServers = DNSName[];
  export type DelegationSets = DelegationSet[];
  export interface DeleteHealthCheckRequest {
    /**
     * The ID of the health check that you want to delete.
     */
    HealthCheckId: HealthCheckId;
  }
  export interface DeleteHealthCheckResponse {
  }
  export interface DeleteHostedZoneRequest {
    /**
     * The ID of the hosted zone you want to delete.
     */
    Id: ResourceId;
  }
  export interface DeleteHostedZoneResponse {
    /**
     * A complex type that contains the ID, the status, and the date and time of your delete request.
     */
    ChangeInfo: ChangeInfo;
  }
  export interface DeleteReusableDelegationSetRequest {
    /**
     * The ID of the reusable delegation set you want to delete.
     */
    Id: ResourceId;
  }
  export interface DeleteReusableDelegationSetResponse {
  }
  export interface DeleteTrafficPolicyInstanceRequest {
    /**
     * The ID of the traffic policy instance that you want to delete.   When you delete a traffic policy instance, Amazon Route 53 also deletes all of the resource record sets that were created when you created the traffic policy instance. 
     */
    Id: TrafficPolicyInstanceId;
  }
  export interface DeleteTrafficPolicyInstanceResponse {
  }
  export interface DeleteTrafficPolicyRequest {
    /**
     * The ID of the traffic policy that you want to delete.
     */
    Id: TrafficPolicyId;
    /**
     * The version number of the traffic policy that you want to delete.
     */
    Version: TrafficPolicyVersion;
  }
  export interface DeleteTrafficPolicyResponse {
  }
  export interface Dimension {
    /**
     * For the metric that the CloudWatch alarm is associated with, the name of one dimension.
     */
    Name: DimensionField;
    /**
     * For the metric that the CloudWatch alarm is associated with, the value of one dimension.
     */
    Value: DimensionField;
  }
  export type DimensionField = string;
  export type DimensionList = Dimension[];
  export type DisassociateVPCComment = string;
  export interface DisassociateVPCFromHostedZoneRequest {
    /**
     * The ID of the VPC that you want to disassociate from an Amazon Route 53 hosted zone.
     */
    HostedZoneId: ResourceId;
    /**
     * A complex type containing information about the Amazon VPC that you're disassociating from the specified hosted zone.
     */
    VPC: VPC;
    /**
     *  Optional: A comment about the disassociation request.
     */
    Comment?: DisassociateVPCComment;
  }
  export interface DisassociateVPCFromHostedZoneResponse {
    /**
     * A complex type that describes the changes made to your hosted zone.
     */
    ChangeInfo: ChangeInfo;
  }
  export type EnableSNI = boolean;
  export type ErrorMessage = string;
  export type ErrorMessages = ErrorMessage[];
  export type EvaluationPeriods = number;
  export type FailureThreshold = number;
  export type FullyQualifiedDomainName = string;
  export interface GeoLocation {
    /**
     * The two-letter code for the continent. Valid values: AF | AN | AS | EU | OC | NA | SA  Constraint: Specifying ContinentCode with either CountryCode or SubdivisionCode returns an InvalidInput error.
     */
    ContinentCode?: GeoLocationContinentCode;
    /**
     * The two-letter code for the country.
     */
    CountryCode?: GeoLocationCountryCode;
    /**
     * The code for the subdivision, for example, a state in the United States or a province in Canada.
     */
    SubdivisionCode?: GeoLocationSubdivisionCode;
  }
  export type GeoLocationContinentCode = string;
  export type GeoLocationContinentName = string;
  export type GeoLocationCountryCode = string;
  export type GeoLocationCountryName = string;
  export interface GeoLocationDetails {
    /**
     * The two-letter code for the continent.
     */
    ContinentCode?: GeoLocationContinentCode;
    /**
     * The full name of the continent.
     */
    ContinentName?: GeoLocationContinentName;
    /**
     * The two-letter code for the country.
     */
    CountryCode?: GeoLocationCountryCode;
    /**
     * The name of the country.
     */
    CountryName?: GeoLocationCountryName;
    /**
     * The code for the subdivision, for example, a state in the United States or a province in Canada.
     */
    SubdivisionCode?: GeoLocationSubdivisionCode;
    /**
     * The full name of the subdivision, for example, a state in the United States or a province in Canada.
     */
    SubdivisionName?: GeoLocationSubdivisionName;
  }
  export type GeoLocationDetailsList = GeoLocationDetails[];
  export type GeoLocationSubdivisionCode = string;
  export type GeoLocationSubdivisionName = string;
  export interface GetChangeDetailsRequest {
    /**
     * The ID of the change batch. This is the value that you specified in the change ID parameter when you submitted the request.
     */
    Id: ResourceId;
  }
  export interface GetChangeDetailsResponse {
    /**
     * A complex type that contains information about the specified change batch, including the change batch ID, the status of the change, and the contained changes.
     */
    ChangeBatchRecord: ChangeBatchRecord;
  }
  export interface GetChangeRequest {
    /**
     * The ID of the change batch request. The value that you specify here is the value that ChangeResourceRecordSets returned in the Id element when you submitted the request.
     */
    Id: ResourceId;
  }
  export interface GetChangeResponse {
    /**
     * A complex type that contains information about the specified change batch.
     */
    ChangeInfo: ChangeInfo;
  }
  export interface GetCheckerIpRangesRequest {
  }
  export interface GetCheckerIpRangesResponse {
    /**
     * A complex type that contains sorted list of IP ranges in CIDR format for Amazon Route 53 health checkers.
     */
    CheckerIpRanges: CheckerIpRanges;
  }
  export interface GetGeoLocationRequest {
    /**
     * Amazon Route 53 supports the following continent codes:    AF: Africa    AN: Antarctica    AS: Asia    EU: Europe    OC: Oceania    NA: North America    SA: South America  
     */
    ContinentCode?: GeoLocationContinentCode;
    /**
     * Amazon Route 53 uses the two-letter country codes that are specified in ISO standard 3166-1 alpha-2.
     */
    CountryCode?: GeoLocationCountryCode;
    /**
     * Amazon Route 53 uses the one- to three-letter subdivision codes that are specified in ISO standard 3166-1 alpha-2. Amazon Route 53 doesn't support subdivision codes for all countries. If you specify SubdivisionCode, you must also specify CountryCode. 
     */
    SubdivisionCode?: GeoLocationSubdivisionCode;
  }
  export interface GetGeoLocationResponse {
    /**
     * A complex type that contains the codes and full continent, country, and subdivision names for the specified geolocation code.
     */
    GeoLocationDetails: GeoLocationDetails;
  }
  export interface GetHealthCheckCountRequest {
  }
  export interface GetHealthCheckCountResponse {
    /**
     * The number of health checks associated with the current AWS account.
     */
    HealthCheckCount: HealthCheckCount;
  }
  export interface GetHealthCheckLastFailureReasonRequest {
    /**
     * The ID for the health check for which you want the last failure reason. When you created the health check, CreateHealthCheck returned the ID in the response, in the HealthCheckId element.
     */
    HealthCheckId: HealthCheckId;
  }
  export interface GetHealthCheckLastFailureReasonResponse {
    /**
     * A list that contains one Observation element for each Amazon Route 53 health checker that is reporting a last failure reason. 
     */
    HealthCheckObservations: HealthCheckObservations;
  }
  export interface GetHealthCheckRequest {
    /**
     * The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long.
     */
    HealthCheckId: HealthCheckId;
  }
  export interface GetHealthCheckResponse {
    /**
     * A complex type that contains information about one health check that is associated with the current AWS account.
     */
    HealthCheck: HealthCheck;
  }
  export interface GetHealthCheckStatusRequest {
    /**
     * If you want Amazon Route 53 to return this resource record set in response to a DNS query only when a health check is passing, include the HealthCheckId element and specify the ID of the applicable health check. Amazon Route 53 determines whether a resource record set is healthy by periodically sending a request to the endpoint that is specified in the health check. If that endpoint returns an HTTP status code of 2xx or 3xx, the endpoint is healthy. If the endpoint returns an HTTP status code of 400 or greater, or if the endpoint doesn't respond for a certain amount of time, Amazon Route 53 considers the endpoint unhealthy and also considers the resource record set unhealthy. The HealthCheckId element is only useful when Amazon Route 53 is choosing between two or more resource record sets to respond to a DNS query, and you want Amazon Route 53 to base the choice in part on the status of a health check. Configuring health checks only makes sense in the following configurations:   You're checking the health of the resource record sets in a weighted, latency, geolocation, or failover resource record set, and you specify health check IDs for all of the resource record sets. If the health check for one resource record set specifies an endpoint that is not healthy, Amazon Route 53 stops responding to queries using the value for that resource record set.   You set EvaluateTargetHealth to true for the resource record sets in an alias, weighted alias, latency alias, geolocation alias, or failover alias resource record set, and you specify health check IDs for all of the resource record sets that are referenced by the alias resource record sets. For more information about this configuration, see EvaluateTargetHealth. Amazon Route 53 doesn't check the health of the endpoint specified in the resource record set, for example, the endpoint specified by the IP address in the Value element. When you add a HealthCheckId element to a resource record set, Amazon Route 53 checks the health of the endpoint that you specified in the health check.   For geolocation resource record sets, if an endpoint is unhealthy, Amazon Route 53 looks for a resource record set for the larger, associated geographic region. For example, suppose you have resource record sets for a state in the United States, for the United States, for North America, and for all locations. If the endpoint for the state resource record set is unhealthy, Amazon Route 53 checks the resource record sets for the United States, for North America, and for all locations (a resource record set for which the value of CountryCode is *), in that order, until it finds a resource record set for which the endpoint is healthy. If your health checks specify the endpoint only by domain name, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of FullyQualifiedDomainName, specify the domain name of the server (such as us-east-1-www.example.com), not the name of the resource record sets (example.com).  In this configuration, if you create a health check for which the value of FullyQualifiedDomainName matches the name of the resource record sets and then associate the health check with those resource record sets, health check results will be unpredictable. 
     */
    HealthCheckId: HealthCheckId;
  }
  export interface GetHealthCheckStatusResponse {
    /**
     * A list that contains one HealthCheckObservation element for each Amazon Route 53 health checker that is reporting a status about the health check endpoint.
     */
    HealthCheckObservations: HealthCheckObservations;
  }
  export interface GetHostedZoneCountRequest {
  }
  export interface GetHostedZoneCountResponse {
    /**
     * The total number of public and private hosted zones associated with the current AWS account.
     */
    HostedZoneCount: HostedZoneCount;
  }
  export interface GetHostedZoneRequest {
    /**
     * The ID of the hosted zone for which you want to get a list of the name servers in the delegation set.
     */
    Id: ResourceId;
  }
  export interface GetHostedZoneResponse {
    /**
     * A complex type that contains general information about the hosted zone.
     */
    HostedZone: HostedZone;
    /**
     * A complex type that describes the name servers for this hosted zone.
     */
    DelegationSet?: DelegationSet;
    /**
     * A complex type that contains information about VPCs associated with the specified hosted zone.
     */
    VPCs?: VPCs;
  }
  export interface GetReusableDelegationSetRequest {
    /**
     * The ID of the reusable delegation set for which you want to get a list of the name server.
     */
    Id: ResourceId;
  }
  export interface GetReusableDelegationSetResponse {
    /**
     * A complex type that contains information about the reusable delegation set.
     */
    DelegationSet: DelegationSet;
  }
  export interface GetTrafficPolicyInstanceCountRequest {
  }
  export interface GetTrafficPolicyInstanceCountResponse {
    /**
     * The number of traffic policy instances that are associated with the current AWS account.
     */
    TrafficPolicyInstanceCount: TrafficPolicyInstanceCount;
  }
  export interface GetTrafficPolicyInstanceRequest {
    /**
     * The ID of the traffic policy instance that you want to get information about.
     */
    Id: TrafficPolicyInstanceId;
  }
  export interface GetTrafficPolicyInstanceResponse {
    /**
     * A complex type that contains settings for the traffic policy instance.
     */
    TrafficPolicyInstance: TrafficPolicyInstance;
  }
  export interface GetTrafficPolicyRequest {
    /**
     * The ID of the traffic policy that you want to get information about.
     */
    Id: TrafficPolicyId;
    /**
     * The version number of the traffic policy that you want to get information about.
     */
    Version: TrafficPolicyVersion;
  }
  export interface GetTrafficPolicyResponse {
    /**
     * A complex type that contains settings for the specified traffic policy.
     */
    TrafficPolicy: TrafficPolicy;
  }
  export interface HealthCheck {
    /**
     * The identifier that Amazon Route 53assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long. 
     */
    Id: HealthCheckId;
    /**
     * A unique string that you specified when you created the health check.
     */
    CallerReference: HealthCheckNonce;
    /**
     * A complex type that contains detailed information about one health check.
     */
    HealthCheckConfig: HealthCheckConfig;
    /**
     * The version of the health check. You can optionally pass this value in a call to UpdateHealthCheck to prevent overwriting another change to the health check.
     */
    HealthCheckVersion: HealthCheckVersion;
    /**
     * A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.
     */
    CloudWatchAlarmConfiguration?: CloudWatchAlarmConfiguration;
  }
  export interface HealthCheckConfig {
    /**
     * The IPv4 IP address of the endpoint on which you want Amazon Route 53 to perform health checks. If you don't specify a value for IPAddress, Amazon Route 53 sends a DNS request to resolve the domain name that you specify in FullyQualifiedDomainName at the interval that you specify in RequestInterval. Using an IP address that DNS returns, Amazon Route 53 then checks the health of the endpoint. If the endpoint is an Amazon EC2 instance, we recommend that you create an Elastic IP address, associate it with your Amazon EC2 instance, and specify the Elastic IP address for IPAddress. This ensures that the IP address of your instance will never change. For more information, see HealthCheckConfig$FullyQualifiedDomainName. Contraints: Amazon Route 53 cannot check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you cannot create health checks, see RFC 5735, Special Use IPv4 Addresses and RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space. When the value of Type is CALCULATED or CLOUDWATCH_METRIC, omit IPAddress.
     */
    IPAddress?: IPAddress;
    /**
     * The port on the endpoint on which you want Amazon Route 53 to perform health checks. Specify a value for Port only when you specify a value for IPAddress.
     */
    Port?: Port;
    /**
     * The type of health check that you want to create, which indicates how Amazon Route 53 determines whether an endpoint is healthy.  You can't change the value of Type after you create a health check.  You can create the following types of health checks:    HTTP: Amazon Route 53 tries to establish a TCP connection. If successful, Amazon Route 53 submits an HTTP request and waits for an HTTP status code of 200 or greater and less than 400.    HTTPS: Amazon Route 53 tries to establish a TCP connection. If successful, Amazon Route 53 submits an HTTPS request and waits for an HTTP status code of 200 or greater and less than 400.  If you specify HTTPS for the value of Type, the endpoint must support TLS v1.0 or later.     HTTP_STR_MATCH: Amazon Route 53 tries to establish a TCP connection. If successful, Amazon Route 53 submits an HTTP request and searches the first 5,120 bytes of the response body for the string that you specify in SearchString.    HTTPS_STR_MATCH: Amazon Route 53 tries to establish a TCP connection. If successful, Amazon Route 53 submits an HTTPS request and searches the first 5,120 bytes of the response body for the string that you specify in SearchString.    TCP: Amazon Route 53 tries to establish a TCP connection.    CLOUDWATCH_METRIC: The health check is associated with a CloudWatch alarm. If the state of the alarm is OK, the health check is considered healthy. If the state is ALARM, the health check is considered unhealthy. If CloudWatch doesn't have sufficient data to determine whether the state is OK or ALARM, the health check status depends on the setting for InsufficientDataHealthStatus: Healthy, Unhealthy, or LastKnownStatus.     CALCULATED: For health checks that monitor the status of other health checks, Amazon Route 53 adds up the number of health checks that Amazon Route 53 health checkers consider to be healthy and compares that number with the value of HealthThreshold.    For more information about how Amazon Route 53 determines whether an endpoint is healthy, see the introduction to this topic.
     */
    Type: HealthCheckType;
    /**
     * The path, if any, that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example, the file /docs/route53-health-check.html. 
     */
    ResourcePath?: ResourcePath;
    /**
     * Amazon Route 53 behavior depends on whether you specify a value for IPAddress.  If you specify IPAddress: The value that you want Amazon Route 53 to pass in the Host header in all health checks except TCP health checks. This is typically the fully qualified DNS name of the website that you are attempting to health check. When Amazon Route 53 checks the health of an endpoint, here is how it constructs the Host header:   If you specify a value of 80 for Port and HTTP or HTTP_STR_MATCH for Type, Amazon Route 53 passes the value of FullyQualifiedDomainName to the endpoint in the Host header.    If you specify a value of 443 for Port and HTTPS or HTTPS_STR_MATCH for Type, Amazon Route 53 passes the value of FullyQualifiedDomainName to the endpoint in the Host header.   If you specify another value for Port and any value except TCP for Type, Amazon Route 53 passes FullyQualifiedDomainName:Port to the endpoint in the Host header.   If you don't specify a value for FullyQualifiedDomainName, Amazon Route 53 substitutes the value of IPAddress in the Host header in each of the preceding cases.  If you don't specify IPAddress: If you don't specify a value for IPAddress, Amazon Route 53 sends a DNS request to the domain that you specify in FullyQualifiedDomainName at the interval you specify in RequestInterval. Using an IP address that DNS returns, Amazon Route 53 then checks the health of the endpoint. If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by FullyQualifiedDomainName, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of FullyQualifiedDomainName, specify the domain name of the server (such as us-east-1-www.example.com), not the name of the resource record sets (www.example.com).  In this configuration, if you create a health check for which the value of FullyQualifiedDomainName matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.  In addition, if the value that you specify for Type is HTTP, HTTPS, HTTP_STR_MATCH, or HTTPS_STR_MATCH, Amazon Route 53 passes the value of FullyQualifiedDomainName in the Host header, as it does when you specify a value for IPAddress. If the value of Type is TCP, Amazon Route 53 doesn't pass a Host header.
     */
    FullyQualifiedDomainName?: FullyQualifiedDomainName;
    /**
     * If the value of Type is HTTP_STR_MATCH or HTTP_STR_MATCH, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Amazon Route 53 considers the resource healthy. Amazon Route 53 considers case when searching for SearchString in the response body. 
     */
    SearchString?: SearchString;
    /**
     * The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health-check request. Each Amazon Route 53 health checker makes requests at this interval.  You can't change the value of RequestInterval after you create a health check. 
     */
    RequestInterval?: RequestInterval;
    /**
     * The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy in the Amazon Route 53 Developer Guide.
     */
    FailureThreshold?: FailureThreshold;
    /**
     * Specify whether you want Amazon Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint, and to display CloudWatch latency graphs on the Health Checks page in the Amazon Route 53 console.  You can't change the value of MeasureLatency after you create a health check. 
     */
    MeasureLatency?: MeasureLatency;
    /**
     * Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.
     */
    Inverted?: Inverted;
    /**
     * The number of child health checks that are associated with a CALCULATED health that Amazon Route 53 must consider healthy for the CALCULATED health check to be considered healthy. To specify the child health checks that you want to associate with a CALCULATED health check, use the HealthCheckConfig$ChildHealthChecks and HealthCheckConfig$ChildHealthChecks elements. Note the following:   If you specify a number greater than the number of child health checks, Amazon Route 53 always considers this health check to be unhealthy.   If you specify 0, Amazon Route 53 always considers this health check to be healthy.  
     */
    HealthThreshold?: HealthThreshold;
    /**
     * (CALCULATED Health Checks Only) A complex type that contains one ChildHealthCheck element for each health check that you want to associate with a CALCULATED health check.
     */
    ChildHealthChecks?: ChildHealthCheckList;
    /**
     * Specify whether you want Amazon Route 53 to send the value of FullyQualifiedDomainName to the endpoint in the client_hello message during TLS negotiation. This allows the endpoint to respond to HTTPS health check requests with the applicable SSL/TLS certificate. Some endpoints require that HTTPS requests include the host name in the client_hello message. If you don't enable SNI, the status of the health check will be SSL alert handshake_failure. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid. The SSL/TLS certificate on your endpoint includes a domain name in the Common Name field and possibly several more in the Subject Alternative Names field. One of the domain names in the certificate should match the value that you specify for FullyQualifiedDomainName. If the endpoint responds to the client_hello message with a certificate that does not include the domain name that you specified in FullyQualifiedDomainName, a health checker will retry the handshake. In the second attempt, the health checker will omit FullyQualifiedDomainName from the client_hello message.
     */
    EnableSNI?: EnableSNI;
    /**
     * A complex type that contains one Region element for each region from which you want Amazon Route 53 health checkers to check the specified endpoint.
     */
    Regions?: HealthCheckRegionList;
    /**
     * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
     */
    AlarmIdentifier?: AlarmIdentifier;
    /**
     * When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:    Healthy: Amazon Route 53 considers the health check to be healthy.    Unhealthy: Amazon Route 53 considers the health check to be unhealthy.    LastKnownStatus: Amazon Route 53uses the status of the health check from the last time CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the default status for the health check is healthy.  
     */
    InsufficientDataHealthStatus?: InsufficientDataHealthStatus;
  }
  export type HealthCheckCount = number;
  export type HealthCheckId = string;
  export type HealthCheckNonce = string;
  export interface HealthCheckObservation {
    /**
     * The region of the Amazon Route 53 health checker that provided the status in StatusReport.
     */
    Region?: HealthCheckRegion;
    /**
     * The IP address of the Amazon Route 53 health checker that provided the failure reason in StatusReport.
     */
    IPAddress?: IPAddress;
    /**
     * A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker and the time of the failed health check.
     */
    StatusReport?: StatusReport;
  }
  export type HealthCheckObservations = HealthCheckObservation[];
  export type HealthCheckRegion = "us-east-1"|"us-west-1"|"us-west-2"|"eu-west-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"sa-east-1"|string;
  export type HealthCheckRegionList = HealthCheckRegion[];
  export type HealthCheckType = "HTTP"|"HTTPS"|"HTTP_STR_MATCH"|"HTTPS_STR_MATCH"|"TCP"|"CALCULATED"|"CLOUDWATCH_METRIC"|string;
  export type HealthCheckVersion = number;
  export type HealthChecks = HealthCheck[];
  export type HealthThreshold = number;
  export interface HostedZone {
    /**
     * The ID that Amazon Route 53 assigned to the hosted zone when you created it.
     */
    Id: ResourceId;
    /**
     * The name of the domain. For public hosted zones, this is the name that you have registered with your DNS registrar. For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see CreateHostedZone.
     */
    Name: DNSName;
    /**
     * The value that you specified for CallerReference when you created the hosted zone.
     */
    CallerReference: Nonce;
    /**
     * A complex type that includes the Comment and PrivateZone elements. If you omitted the HostedZoneConfig and Comment elements from the request, the Config and Comment elements don't appear in the response.
     */
    Config?: HostedZoneConfig;
    /**
     * The number of resource record sets in the hosted zone.
     */
    ResourceRecordSetCount?: HostedZoneRRSetCount;
  }
  export interface HostedZoneConfig {
    /**
     * Any comments that you want to include about the hosted zone.
     */
    Comment?: ResourceDescription;
    /**
     * A value that indicates whether this is a private hosted zone.
     */
    PrivateZone?: IsPrivateZone;
  }
  export type HostedZoneCount = number;
  export type HostedZoneRRSetCount = number;
  export type HostedZones = HostedZone[];
  export type IPAddress = string;
  export type IPAddressCidr = string;
  export type InsufficientDataHealthStatus = "Healthy"|"Unhealthy"|"LastKnownStatus"|string;
  export type Inverted = boolean;
  export type IsPrivateZone = boolean;
  export interface ListChangeBatchesByHostedZoneRequest {
    /**
     * The ID of the hosted zone that you want to see changes for.
     */
    HostedZoneId: ResourceId;
    /**
     * The start of the time period you want to see changes for.
     */
    StartDate: _Date;
    /**
     * The end of the time period you want to see changes for.
     */
    EndDate: _Date;
    /**
     * The maximum number of items on a page.
     */
    MaxItems?: PageMaxItems;
    /**
     * The page marker.
     */
    Marker?: PageMarker;
  }
  export interface ListChangeBatchesByHostedZoneResponse {
    /**
     * The value that you specified for the maxitems parameter in the call to ListHostedZones that produced the current response. 
     */
    MaxItems: PageMaxItems;
    /**
     * For the second and subsequent calls to ListHostedZones, Marker is the value that you specified for the marker parameter in the request that produced the current response. 
     */
    Marker: PageMarker;
    /**
     * A flag that indicates if there are more change batches to list.
     */
    IsTruncated?: PageTruncated;
    /**
     * The change batches within the given hosted zone and time period. 
     */
    ChangeBatchRecords: ChangeBatchRecords;
    /**
     * The next page marker.
     */
    NextMarker?: PageMarker;
  }
  export interface ListChangeBatchesByRRSetRequest {
    /**
     * The ID of the hosted zone that you want to see changes for.
     */
    HostedZoneId: ResourceId;
    /**
     * The name of the RRSet that you want to see changes for.
     */
    Name: DNSName;
    /**
     * The type of the RRSet that you want to see changes for.
     */
    Type: RRType;
    /**
     * The identifier of the RRSet that you want to see changes for.
     */
    SetIdentifier?: ResourceRecordSetIdentifier;
    /**
     * The start of the time period you want to see changes for.
     */
    StartDate: _Date;
    /**
     * The end of the time period you want to see changes for.
     */
    EndDate: _Date;
    /**
     * The maximum number of items on a page.
     */
    MaxItems?: PageMaxItems;
    /**
     * The page marker.
     */
    Marker?: PageMarker;
  }
  export interface ListChangeBatchesByRRSetResponse {
    /**
     * The maximum number of items on a page.
     */
    MaxItems: PageMaxItems;
    /**
     * The page marker.
     */
    Marker: PageMarker;
    /**
     * A flag that indicates if there are more change batches to list.
     */
    IsTruncated?: PageTruncated;
    /**
     * The change batches within the given hosted zone and time period. 
     */
    ChangeBatchRecords: ChangeBatchRecords;
    /**
     * The next page marker.
     */
    NextMarker?: PageMarker;
  }
  export interface ListGeoLocationsRequest {
    /**
     * The code for the continent with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Amazon Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextContinentCode from the previous response has a value, enter that value in StartContinentCode to return the next page of results. Include StartContinentCode only if you want to list continents. Don't include StartContinentCode when you're listing countries or countries with their subdivisions.
     */
    StartContinentCode?: GeoLocationContinentCode;
    /**
     * The code for the country with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Amazon Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextCountryCode from the previous response has a value, enter that value in StartCountryCode to return the next page of results. Amazon Route 53 uses the two-letter country codes that are specified in ISO standard 3166-1 alpha-2.
     */
    StartCountryCode?: GeoLocationCountryCode;
    /**
     * The code for the subdivision (for example, state or province) with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Amazon Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextSubdivisionCode from the previous response has a value, enter that value in StartSubdivisionCode to return the next page of results. To list subdivisions of a country, you must include both StartCountryCode and StartSubdivisionCode.
     */
    StartSubdivisionCode?: GeoLocationSubdivisionCode;
    /**
     * (Optional) The maximum number of geolocations to be included in the response body for this request. If more than MaxItems geolocations remain to be listed, then the value of the IsTruncated element in the response is true.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListGeoLocationsResponse {
    /**
     * A complex type that contains one GeoLocationDetails element for each location that Amazon Route 53 supports for geolocation.
     */
    GeoLocationDetailsList: GeoLocationDetailsList;
    /**
     * A value that indicates whether more locations remain to be listed after the last location in this response. If so, the value of IsTruncated is true. To get more values, submit another request and include the values of NextContinentCode, NextCountryCode, and NextSubdivisionCode in the StartContinentCode, StartCountryCode, and StartSubdivisionCode, as applicable.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, you can make a follow-up request to display more locations. Enter the value of NextContinentCode in the StartContinentCode parameter in another GET ListGeoLocations request.
     */
    NextContinentCode?: GeoLocationContinentCode;
    /**
     * If IsTruncated is true, you can make a follow-up request to display more locations. Enter the value of NextCountryCode in the StartCountryCode parameter in another GET ListGeoLocations request.
     */
    NextCountryCode?: GeoLocationCountryCode;
    /**
     * If IsTruncated is true, you can make a follow-up request to display more locations. Enter the value of NextSubdivisionCode in the StartSubdivisionCode parameter in another GET ListGeoLocations request.
     */
    NextSubdivisionCode?: GeoLocationSubdivisionCode;
    /**
     * The value that you specified for MaxItems in the request.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListHealthChecksRequest {
    /**
     * If the response to a ListHealthChecks is more than one page, marker is the health check ID for the first health check on the next page of results. For more information, see ListHealthChecksResponse$MaxItems.
     */
    Marker?: PageMarker;
    /**
     * The maximum number of HealthCheck elements you want ListHealthChecks to return on each page of the response body. If the AWS account includes more HealthCheck elements than the value of maxitems, the response is broken into pages. Each page contains the number of HealthCheck elements specified by maxitems. For example, suppose you specify 10 for maxitems and the current AWS account has 51 health checks. In the response, ListHealthChecks sets ListHealthChecksResponse$IsTruncated to true and includes the ListHealthChecksResponse$NextMarker element. To access the second and subsequent pages, you resend the GET ListHealthChecks request, add the ListHealthChecksResponse$Marker parameter to the request, and specify the value of the ListHealthChecksResponse$NextMarker element from the previous response. On the last (sixth) page of the response, which contains only one HealthCheck element:   The value of ListHealthChecksResponse$IsTruncated is false.    ListHealthChecksResponse$NextMarker is omitted.  
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListHealthChecksResponse {
    /**
     * A complex type that contains one HealthCheck element for each health check that is associated with the current AWS account.
     */
    HealthChecks: HealthChecks;
    /**
     * For the second and subsequent calls to ListHealthChecks, Marker is the value that you specified for the marker parameter in the previous request.
     */
    Marker: PageMarker;
    /**
     * A flag that indicates whether there are more health checks to be listed. If the response was truncated, you can get the next group of maxitems health checks by calling ListHealthChecks again and specifying the value of the NextMarker element in the marker parameter. Valid Values: true | false 
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, the value of NextMarker identifies the first health check in the next group of maxitems health checks. Call ListHealthChecks again and specify the value of NextMarker in the marker parameter.
     */
    NextMarker?: PageMarker;
    /**
     * The value that you specified for the maxitems parameter in the call to ListHealthChecks that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListHostedZonesByNameRequest {
    /**
     * (Optional) For your first request to ListHostedZonesByName, include the dnsname parameter only if you want to specify the name of the first hosted zone in the response. If you don't include the dnsname parameter, Amazon Route 53 returns all of the hosted zones that were created by the current AWS account, in ASCII order. For subsequent requests, include both dnsname and hostedzoneid parameters. For dnsname, specify the value of NextDNSName from the previous response.
     */
    DNSName?: DNSName;
    /**
     * (Optional) For your first request to ListHostedZonesByName, do not include the hostedzoneid parameter. If you have more hosted zones than the value of maxitems, ListHostedZonesByName returns only the first maxitems hosted zones. To get the next group of maxitems hosted zones, submit another request to ListHostedZonesByName and include both dnsname and hostedzoneid parameters. For the value of hostedzoneid, specify the value of the NextHostedZoneId element from the previous response.
     */
    HostedZoneId?: ResourceId;
    /**
     * The maximum number of hosted zones to be included in the response body for this request. If you have more than maxitems hosted zones, then the value of the IsTruncated element in the response is true, and the values of NextDNSName and NextHostedZoneId specify the first hosted zone in the next group of maxitems hosted zones. 
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListHostedZonesByNameResponse {
    /**
     * A complex type that contains general information about the hosted zone.
     */
    HostedZones: HostedZones;
    /**
     * For the second and subsequent calls to ListHostedZonesByName, DNSName is the value that you specified for the dnsname parameter in the request that produced the current response.
     */
    DNSName?: DNSName;
    /**
     * The ID that Amazon Route 53 assigned to the hosted zone when you created it.
     */
    HostedZoneId?: ResourceId;
    /**
     * A flag that indicates whether there are more hosted zones to be listed. If the response was truncated, you can get the next group of maxitems hosted zones by calling ListHostedZonesByName again and specifying the values of NextDNSName and NextHostedZoneId elements in the dnsname and hostedzoneid parameters.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, the value of NextDNSName is the name of the first hosted zone in the next group of maxitems hosted zones. Call ListHostedZonesByName again and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively. This element is present only if IsTruncated is true.
     */
    NextDNSName?: DNSName;
    /**
     * If IsTruncated is true, the value of NextHostedZoneId identifies the first hosted zone in the next group of maxitems hosted zones. Call ListHostedZonesByName again and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively. This element is present only if IsTruncated is true.
     */
    NextHostedZoneId?: ResourceId;
    /**
     * The value that you specified for the maxitems parameter in the call to ListHostedZonesByName that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListHostedZonesRequest {
    /**
     * (Optional) If you have more hosted zones than the value of maxitems, ListHostedZones returns only the first maxitems hosted zones. To get the next group of maxitems hosted zones, submit another request to ListHostedZones. For the value of marker, specify the value of the NextMarker element that was returned in the previous response. Hosted zones are listed in the order in which they were created.
     */
    Marker?: PageMarker;
    /**
     * (Optional) The maximum number of hosted zones to be included in the response body for this request. If you have more than maxitems hosted zones, the value of the IsTruncated element in the response is true, and the value of the NextMarker element is the hosted zone ID of the first hosted zone in the next group of maxitems hosted zones.
     */
    MaxItems?: PageMaxItems;
    /**
     * If you're using reusable delegation sets and you want to list all of the hosted zones that are associated with a reusable delegation set, specify the ID of that reusable delegation set. 
     */
    DelegationSetId?: ResourceId;
  }
  export interface ListHostedZonesResponse {
    /**
     * A complex type that contains general information about the hosted zone.
     */
    HostedZones: HostedZones;
    /**
     * For the second and subsequent calls to ListHostedZones, Marker is the value that you specified for the marker parameter in the request that produced the current response.
     */
    Marker: PageMarker;
    /**
     * A flag indicating whether there are more hosted zones to be listed. If the response was truncated, you can get the next group of maxitems hosted zones by calling ListHostedZones again and specifying the value of the NextMarker element in the marker parameter.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, the value of NextMarker identifies the first hosted zone in the next group of maxitems hosted zones. Call ListHostedZones again and specify the value of NextMarker in the marker parameter. This element is present only if IsTruncated is true.
     */
    NextMarker?: PageMarker;
    /**
     * The value that you specified for the maxitems parameter in the call to ListHostedZones that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListResourceRecordSetsRequest {
    /**
     * The ID of the hosted zone that contains the resource record sets that you want to get.
     */
    HostedZoneId: ResourceId;
    /**
     * The first name in the lexicographic ordering of domain names that you want the ListResourceRecordSets request to list.
     */
    StartRecordName?: DNSName;
    /**
     * The type of resource record set to begin the record listing from. Valid values for basic resource record sets: A | AAAA | CNAME | MX | NAPTR | NS | PTR | SOA | SPF | SRV | TXT  Values for weighted, latency, geo, and failover resource record sets: A | AAAA | CNAME | MX | NAPTR | PTR | SPF | SRV | TXT  Values for alias resource record sets:     CloudFront distribution: A    Elastic Beanstalk environment that has a regionalized subdomain: A    ELB load balancer: A | AAAA    Amazon S3 bucket: A   Constraint: Specifying type without specifying name returns an InvalidInput error.
     */
    StartRecordType?: RRType;
    /**
     *  Weighted resource record sets only: If results were truncated for a given DNS name and type, specify the value of NextRecordIdentifier from the previous response to get the next resource record set that has the current DNS name and type.
     */
    StartRecordIdentifier?: ResourceRecordSetIdentifier;
    /**
     * (Optional) The maximum number of resource records sets to include in the response body for this request. If the response includes more than maxitems resource record sets, the value of the IsTruncated element in the response is true, and the values of the NextRecordName and NextRecordType elements in the response identify the first resource record set in the next group of maxitems resource record sets.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListResourceRecordSetsResponse {
    /**
     * Information about multiple resource record sets.
     */
    ResourceRecordSets: ResourceRecordSets;
    /**
     * A flag that indicates whether more resource record sets remain to be listed. If your results were truncated, you can make a follow-up pagination request by using the NextRecordName element.
     */
    IsTruncated: PageTruncated;
    /**
     * If the results were truncated, the name of the next record in the list. This element is present only if IsTruncated is true. 
     */
    NextRecordName?: DNSName;
    /**
     * If the results were truncated, the type of the next record in the list. This element is present only if IsTruncated is true. 
     */
    NextRecordType?: RRType;
    /**
     *  Weighted, latency, geolocation, and failover resource record sets only: If results were truncated for a given DNS name and type, the value of SetIdentifier for the next resource record set that has the current DNS name and type.
     */
    NextRecordIdentifier?: ResourceRecordSetIdentifier;
    /**
     * The maximum number of records you requested.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListReusableDelegationSetsRequest {
    /**
     * If you're making the second or subsequent call to ListReusableDelegationSets, the Marker element matches the value that you specified in the marker parameter in the previous request.
     */
    Marker?: PageMarker;
    /**
     * The value that you specified for the maxitems parameter in the request that produced the current response.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListReusableDelegationSetsResponse {
    /**
     * A complex type that contains one DelegationSet element for each reusable delegation set that was created by the current AWS account.
     */
    DelegationSets: DelegationSets;
    /**
     * For the second and subsequent calls to ListReusableDelegationSets, Marker is the value that you specified for the marker parameter in the request that produced the current response.
     */
    Marker: PageMarker;
    /**
     * A flag that indicates whether there are more reusable delegation sets to be listed. If the response is truncated, you can get the next group of maxitems reusable delegation sets by calling ListReusableDelegationSets again and specifying the value of the NextMarker element in the marker parameter.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, the value of NextMarker identifies the first reusable delegation set in the next group of maxitems reusable delegation sets. Call ListReusableDelegationSets again and specify the value of NextMarker in the marker parameter.
     */
    NextMarker?: PageMarker;
    /**
     * The value that you specified for the maxitems parameter in the call to ListReusableDelegationSets that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The type of the resource.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone.  
     */
    ResourceType: TagResourceType;
    /**
     * The ID of the resource for which you want to retrieve tags.
     */
    ResourceId: TagResourceId;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A ResourceTagSet containing tags associated with the specified resource.
     */
    ResourceTagSet: ResourceTagSet;
  }
  export interface ListTagsForResourcesRequest {
    /**
     * The type of the resources.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone.  
     */
    ResourceType: TagResourceType;
    /**
     * A complex type that contains the ResourceId element for each resource for which you want to get a list of tags.
     */
    ResourceIds: TagResourceIdList;
  }
  export interface ListTagsForResourcesResponse {
    /**
     * A list of ResourceTagSets containing tags associated with the specified resources.
     */
    ResourceTagSets: ResourceTagSetList;
  }
  export interface ListTrafficPoliciesRequest {
    /**
     * (Conditional) For your first request to ListTrafficPolicies, do not include the TrafficPolicyIdMarker parameter. If you have more traffic policies than the value of MaxItems, ListTrafficPolicies returns only the first MaxItems traffic policies. To get the next group of MaxItems policies, submit another request to ListTrafficPolicies. For the value of TrafficPolicyIdMarker, specify the value of the TrafficPolicyIdMarker element that was returned in the previous response. Policies are listed in the order in which they were created.
     */
    TrafficPolicyIdMarker?: TrafficPolicyId;
    /**
     * (Optional) The maximum number of traffic policies to be included in the response body for this request. If you have more than MaxItems traffic policies, the value of the IsTruncated element in the response is true, and the value of the TrafficPolicyIdMarker element is the ID of the first traffic policy in the next group of MaxItems traffic policies.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListTrafficPoliciesResponse {
    /**
     * A list that contains one TrafficPolicySummary element for each traffic policy that was created by the current AWS account.
     */
    TrafficPolicySummaries: TrafficPolicySummaries;
    /**
     * A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of MaxItems traffic policies by calling ListTrafficPolicies again and specifying the value of the TrafficPolicyIdMarker element in the TrafficPolicyIdMarker request parameter. Valid Values: true | false 
     */
    IsTruncated: PageTruncated;
    /**
     * If the value of IsTruncated is true, TrafficPolicyIdMarker is the ID of the first traffic policy in the next group of MaxItems traffic policies.
     */
    TrafficPolicyIdMarker: TrafficPolicyId;
    /**
     * The value that you specified for the MaxItems parameter in the call to ListTrafficPolicies that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesByHostedZoneRequest {
    /**
     * The ID of the hosted zone for which you want to list traffic policy instances.
     */
    HostedZoneId: ResourceId;
    /**
     * For the first request to ListTrafficPolicyInstancesByHostedZone, omit this value. If the value of IsTruncated in the previous response was true, TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance in the next group of MaxItems traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get for this hosted zone. If the value of IsTruncated in the previous response was false, omit this value.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * For the first request to ListTrafficPolicyInstancesByHostedZone, omit this value. If the value of IsTruncated in the previous response was true, TrafficPolicyInstanceTypeMarker is the DNS type of the first traffic policy instance in the next group of MaxItems traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get for this hosted zone.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * The maximum number of traffic policy instances to be included in the response body for this request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesByHostedZoneResponse {
    /**
     * A list that contains one TrafficPolicyInstance element for each traffic policy instance that matches the elements in the request. 
     */
    TrafficPolicyInstances: TrafficPolicyInstances;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceTypeMarker is the DNS type of the resource record sets that are associated with the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get the next group of MaxItems traffic policy instances by calling ListTrafficPolicyInstancesByHostedZone again and specifying the values of the HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker elements in the corresponding request parameters.
     */
    IsTruncated: PageTruncated;
    /**
     * The value that you specified for the MaxItems parameter in the call to ListTrafficPolicyInstancesByHostedZone that produced the current response. 
     */
    MaxItems: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesByPolicyRequest {
    /**
     * The ID of the traffic policy for which you want to list traffic policy instances.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * The version of the traffic policy for which you want to list traffic policy instances. The version must be associated with the traffic policy that is specified by TrafficPolicyId.
     */
    TrafficPolicyVersion: TrafficPolicyVersion;
    /**
     * For the first request to ListTrafficPolicyInstancesByPolicy, omit this value. If the value of IsTruncated in the previous response was true, HostedZoneIdMarker is the ID of the hosted zone for the first traffic policy instance in the next group of MaxItems traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get for this hosted zone. If the value of IsTruncated in the previous response was false, omit this value.
     */
    HostedZoneIdMarker?: ResourceId;
    /**
     * For the first request to ListTrafficPolicyInstancesByPolicy, omit this value. If the value of IsTruncated in the previous response was true, TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance in the next group of MaxItems traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get for this hosted zone. If the value of IsTruncated in the previous response was false, omit this value.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * For the first request to ListTrafficPolicyInstancesByPolicy, omit this value. If the value of IsTruncated in the previous response was true, TrafficPolicyInstanceTypeMarker is the DNS type of the first traffic policy instance in the next group of MaxItems traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get for this hosted zone.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * The maximum number of traffic policy instances to be included in the response body for this request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesByPolicyResponse {
    /**
     * A list that contains one TrafficPolicyInstance element for each traffic policy instance that matches the elements in the request.
     */
    TrafficPolicyInstances: TrafficPolicyInstances;
    /**
     * If IsTruncated is true, HostedZoneIdMarker is the ID of the hosted zone of the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    HostedZoneIdMarker?: ResourceId;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceTypeMarker is the DNS type of the resource record sets that are associated with the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get the next group of MaxItems traffic policy instances by calling ListTrafficPolicyInstancesByPolicy again and specifying the values of the HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker elements in the corresponding request parameters.
     */
    IsTruncated: PageTruncated;
    /**
     * The value that you specified for the MaxItems parameter in the call to ListTrafficPolicyInstancesByPolicy that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesRequest {
    /**
     * For the first request to ListTrafficPolicyInstances, omit this value. If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get the next group of MaxItems traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of HostedZoneIdMarker, specify the value of HostedZoneIdMarker from the previous response, which is the hosted zone ID of the first traffic policy instance in the next group of MaxItems traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    HostedZoneIdMarker?: ResourceId;
    /**
     * For the first request to ListTrafficPolicyInstances, omit this value. If the value of IsTruncated in the previous response was true, TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance in the next group of MaxItems traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * For the first request to ListTrafficPolicyInstances, omit this value. If the value of IsTruncated in the previous response was true, TrafficPolicyInstanceTypeMarker is the DNS type of the first traffic policy instance in the next group of MaxItems traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * The maximum number of traffic policy instances to be included in the response body for this request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListTrafficPolicyInstancesResponse {
    /**
     * A list that contains one TrafficPolicyInstance element for each traffic policy instance that matches the elements in the request.
     */
    TrafficPolicyInstances: TrafficPolicyInstances;
    /**
     * If IsTruncated is true, HostedZoneIdMarker is the ID of the hosted zone of the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    HostedZoneIdMarker?: ResourceId;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceNameMarker is the name of the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    TrafficPolicyInstanceNameMarker?: DNSName;
    /**
     * If IsTruncated is true, TrafficPolicyInstanceTypeMarker is the DNS type of the resource record sets that are associated with the first traffic policy instance in the next group of MaxItems traffic policy instances.
     */
    TrafficPolicyInstanceTypeMarker?: RRType;
    /**
     * A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get the next group of MaxItems traffic policy instances by calling ListTrafficPolicyInstances again and specifying the values of the HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker elements in the corresponding request parameters.
     */
    IsTruncated: PageTruncated;
    /**
     * The value that you specified for the MaxItems parameter in the call to ListTrafficPolicyInstances that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export interface ListTrafficPolicyVersionsRequest {
    /**
     * Specify the value of Id of the traffic policy for which you want to list all versions.
     */
    Id: TrafficPolicyId;
    /**
     * For your first request to ListTrafficPolicyVersions, do not include the TrafficPolicyVersionMarker parameter. If you have more traffic policy versions than the value of MaxItems, ListTrafficPolicyVersions returns only the first group of MaxItems versions. To get the next group of MaxItems traffic policy versions, submit another request to ListTrafficPolicyVersions. For the value of TrafficPolicyVersionMarker, specify the value of the TrafficPolicyVersionMarker element that was returned in the previous response. Traffic policy versions are listed in sequential order.
     */
    TrafficPolicyVersionMarker?: TrafficPolicyVersionMarker;
    /**
     * The maximum number of traffic policy versions that you want Amazon Route 53 to include in the response body for this request. If the specified traffic policy has more than MaxItems versions, the value of the IsTruncated element in the response is true, and the value of the TrafficPolicyVersionMarker element is the ID of the first version in the next group of MaxItems traffic policy versions.
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListTrafficPolicyVersionsResponse {
    /**
     * A list that contains one TrafficPolicy element for each traffic policy version that is associated with the specified traffic policy.
     */
    TrafficPolicies: TrafficPolicies;
    /**
     * A flag that indicates whether there are more traffic policies to be listed. If the response was truncated, you can get the next group of maxitems traffic policies by calling ListTrafficPolicyVersions again and specifying the value of the NextMarker element in the marker parameter.
     */
    IsTruncated: PageTruncated;
    /**
     * If IsTruncated is true, the value of TrafficPolicyVersionMarker identifies the first traffic policy in the next group of MaxItems traffic policies. Call ListTrafficPolicyVersions again and specify the value of TrafficPolicyVersionMarker in the TrafficPolicyVersionMarker request parameter. This element is present only if IsTruncated is true.
     */
    TrafficPolicyVersionMarker: TrafficPolicyVersionMarker;
    /**
     * The value that you specified for the maxitems parameter in the call to ListTrafficPolicyVersions that produced the current response.
     */
    MaxItems: PageMaxItems;
  }
  export type MeasureLatency = boolean;
  export type Message = string;
  export type MetricName = string;
  export type Nameserver = string;
  export type Namespace = string;
  export type Nonce = string;
  export type PageMarker = string;
  export type PageMaxItems = string;
  export type PageTruncated = boolean;
  export type Period = number;
  export type Port = number;
  export type RData = string;
  export type RRType = "SOA"|"A"|"TXT"|"NS"|"CNAME"|"MX"|"NAPTR"|"PTR"|"SRV"|"SPF"|"AAAA"|string;
  export type RecordData = RecordDataEntry[];
  export type RecordDataEntry = string;
  export type RequestInterval = number;
  export type ResourceDescription = string;
  export type ResourceId = string;
  export type ResourcePath = string;
  export interface ResourceRecord {
    /**
     * The current or new DNS record value, not to exceed 4,000 characters. In the case of a DELETE action, if the current value does not match the actual value, an error is returned. For descriptions about how to format Value for different record types, see Supported DNS Resource Record Types in the Amazon Route 53 Developer Guide. You can specify more than one value for all record types except CNAME and SOA.   If you are creating an alias resource record set, omit Value. 
     */
    Value: RData;
  }
  export interface ResourceRecordSet {
    /**
     * The name of the domain you want to perform the action on. Enter a fully qualified domain name, for example, www.example.com. You can optionally include a trailing dot. If you omit the trailing dot, Amazon Route 53 still assumes that the domain name that you specify is fully qualified. This means that Amazon Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical. For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see DNS Domain Name Format in the Amazon Route 53 Developer Guide. You can use the asterisk (*) wildcard to replace the leftmost label in a domain name. For example, *.example.com. Note the following:   The * must replace the entire label. For example, you can't specify *prod.example.com or prod*.example.com.   The * can't replace any of the middle labels, for example, marketing.*.example.com.   If you include * in any position other than the leftmost label in a domain name, DNS treats it as an * character (ASCII 42), not as a wildcard.  You can't use the * wildcard for resource records sets that have a type of NS.    You can use the * wildcard as the leftmost label in a domain name, for example, *.example.com. You cannot use an * for one of the middle labels, for example, marketing.*.example.com. In addition, the * must replace the entire label; for example, you can't specify prod*.example.com.
     */
    Name: DNSName;
    /**
     * The DNS record type. For information about different record types and how data is encoded for them, see Supported DNS Resource Record Types in the Amazon Route 53 Developer Guide. Valid values for basic resource record sets: A | AAAA | CNAME | MX | NAPTR | NS | PTR | SOA | SPF | SRV | TXT  Values for weighted, latency, geolocation, and failover resource record sets: A | AAAA | CNAME | MX | NAPTR | PTR | SPF | SRV | TXT. When creating a group of weighted, latency, geolocation, or failover resource record sets, specify the same value for all of the resource record sets in the group.  SPF records were formerly used to verify the identity of the sender of email messages. However, we no longer recommend that you create resource record sets for which the value of Type is SPF. RFC 7208, Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1, has been updated to say, "...[I]ts existence and mechanism defined in [RFC4408] have led to some interoperability issues. Accordingly, its use is no longer appropriate for SPF version 1; implementations are not to use it." In RFC 7208, see section 14.1, The SPF DNS Record Type.  Values for alias resource record sets:    CloudFront distributions: A     Elastic Beanstalk environment that has a regionalized subdomain: A     ELB load balancers: A | AAAA     Amazon S3 buckets: A     Another resource record set in this hosted zone: Specify the type of the resource record set for which you're creating the alias. Specify any value except NS or SOA.  
     */
    Type: RRType;
    /**
     *  Weighted, Latency, Geo, and Failover resource record sets only: An identifier that differentiates among multiple resource record sets that have the same combination of DNS name and type. The value of SetIdentifier must be unique for each resource record set that has the same combination of DNS name and type. Omit SetIdentifier for any other types of record sets.
     */
    SetIdentifier?: ResourceRecordSetIdentifier;
    /**
     *  Weighted resource record sets only: Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set. Amazon Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Amazon Route 53 then responds to queries based on the ratio of a resource's weight to the total. Note the following:   You must specify a value for the Weight element for every weighted resource record set.   You can only specify one ResourceRecord per weighted resource record set.   You cannot create latency, failover, or geolocation resource record sets that have the same values for the Name and Type elements as weighted resource record sets.   You can create a maximum of 100 weighted resource record sets that have the same values for the Name and Type elements.   For weighted (but not weighted alias) resource record sets, if you set Weight to 0 for a resource record set, Amazon Route 53 never responds to queries with the applicable value for that resource record set. However, if you set Weight to 0 for all resource record sets that have the same combination of DNS name and type, traffic is routed to all resources with equal probability. The effect of setting Weight to 0 is different when you associate health checks with weighted resource record sets. For more information, see Options for Configuring Amazon Route 53 Active-Active and Active-Passive Failover in the Amazon Route 53 Developer Guide.  
     */
    Weight?: ResourceRecordSetWeight;
    /**
     *  Latency-based resource record sets only: The Amazon EC2 region where the resource that is specified in this resource record set resides. The resource typically is an AWS resource, such as an Amazon EC2 instance or an ELB load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type.  Creating latency and latency alias resource record sets in private hosted zones is not supported.  When Amazon Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Amazon Route 53 selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 region. Amazon Route 53 then returns the value that is associated with the selected resource record set. Note the following:   You can only specify one ResourceRecord per latency resource record set.   You can only create one latency resource record set for each Amazon EC2 region.   You are not required to create latency resource record sets for all Amazon EC2 regions. Amazon Route 53 will choose the region with the best latency from among the regions for which you create latency resource record sets.   You cannot create non-latency resource record sets that have the same values for the Name and Type elements as latency resource record sets.  
     */
    Region?: ResourceRecordSetRegion;
    /**
     *  Geo location resource record sets only: A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query. For example, if you want all queries from Africa to be routed to a web server with an IP address of 192.0.2.111, create a resource record set with a Type of A and a ContinentCode of AF.  Creating geolocation and geolocation alias resource record sets in private hosted zones is not supported.  If you create separate resource record sets for overlapping geographic regions (for example, one resource record set for a continent and one for a country on the same continent), priority goes to the smallest geographic region. This allows you to route most queries for a continent to one resource and to route queries for a country on that continent to a different resource. You cannot create two geolocation resource record sets that specify the same geographic location. The value * in the CountryCode element matches all geographic locations that aren't specified in other geolocation resource record sets that have the same values for the Name and Type elements.  Geolocation works by mapping IP addresses to locations. However, some IP addresses aren't mapped to geographic locations, so even if you create geolocation resource record sets that cover all seven continents, Amazon Route 53 will receive some DNS queries from locations that it can't identify. We recommend that you create a resource record set for which the value of CountryCode is *, which handles both queries that come from locations for which you haven't created geolocation resource record sets and queries from IP addresses that aren't mapped to a location. If you don't create a * resource record set, Amazon Route 53 returns a "no answer" response for queries from those locations.  You cannot create non-geolocation resource record sets that have the same values for the Name and Type elements as geolocation resource record sets.
     */
    GeoLocation?: GeoLocation;
    /**
     *  Failover resource record sets only: To configure failover, you add the Failover element to two resource record sets. For one resource record set, you specify PRIMARY as the value for Failover; for the other resource record set, you specify SECONDARY. In addition, you include the HealthCheckId element and specify the health check that you want Amazon Route 53 to perform for each resource record set. Except where noted, the following failover behaviors assume that you have included the HealthCheckId element in both resource record sets:   When the primary resource record set is healthy, Amazon Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the secondary resource record set.   When the primary resource record set is unhealthy and the secondary resource record set is healthy, Amazon Route 53 responds to DNS queries with the applicable value from the secondary resource record set.   When the secondary resource record set is unhealthy, Amazon Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the primary resource record set.   If you omit the HealthCheckId element for the secondary resource record set, and if the primary resource record set is unhealthy, Amazon Route 53 always responds to DNS queries with the applicable value from the secondary resource record set. This is true regardless of the health of the associated endpoint.   You cannot create non-failover resource record sets that have the same values for the Name and Type elements as failover resource record sets. For failover alias resource record sets, you must also include the EvaluateTargetHealth element and set the value to true. For more information about configuring failover for Amazon Route 53, see the following topics in the Amazon Route 53 Developer Guide:     Amazon Route 53 Health Checks and DNS Failover     Configuring Failover in a Private Hosted Zone    Valid values: PRIMARY | SECONDARY 
     */
    Failover?: ResourceRecordSetFailover;
    /**
     * The resource record cache time to live (TTL), in seconds. Note the following:   If you're creating an alias resource record set, omit TTL. Amazon Route 53 uses the value of TTL for the alias target.    If you're associating this resource record set with a health check (if you're adding a HealthCheckId element), we recommend that you specify a TTL of 60 seconds or less so clients respond quickly to changes in health status.   All of the resource record sets in a group of weighted, latency, geolocation, or failover resource record sets must have the same value for TTL.   If a group of weighted resource record sets includes one or more weighted alias resource record sets for which the alias target is an ELB load balancer, we recommend that you specify a TTL of 60 seconds for all of the non-alias weighted resource record sets that have the same name and type. Values other than 60 seconds (the TTL for load balancers) will change the effect of the values that you specify for Weight.  
     */
    TTL?: TTL;
    /**
     * Information about the resource records to act upon.  If you are creating an alias resource record set, omit ResourceRecords. 
     */
    ResourceRecords?: ResourceRecords;
    /**
     *  Alias resource record sets only: Information about the CloudFront distribution, Elastic Beanstalk environment, ELB load balancer, Amazon S3 bucket, or Amazon Route 53 resource record set to which you are redirecting queries. The Elastic Beanstalk environment must have a regionalized subdomain. If you're creating resource records sets for a private hosted zone, note the following:   You can't create alias resource record sets for CloudFront distributions in a private hosted zone.   Creating geolocation alias resource record sets or latency alias resource record sets in a private hosted zone is unsupported.   For information about creating failover resource record sets in a private hosted zone, see Configuring Failover in a Private Hosted Zone in the Amazon Route 53 Developer Guide.  
     */
    AliasTarget?: AliasTarget;
    /**
     * If you want Amazon Route 53 to return this resource record set in response to a DNS query only when a health check is passing, include the HealthCheckId element and specify the ID of the applicable health check. Amazon Route 53 determines whether a resource record set is healthy based on one of the following:   By periodically sending a request to the endpoint that is specified in the health check   By aggregating the status of a specified group of health checks (calculated health checks)   By determining the current state of a CloudWatch alarm (CloudWatch metric health checks)   For information about how Amazon Route 53 determines whether a health check is healthy, see CreateHealthCheck. The HealthCheckId element is only useful when Amazon Route 53 is choosing between two or more resource record sets to respond to a DNS query, and you want Amazon Route 53 to base the choice in part on the status of a health check. Configuring health checks only makes sense in the following configurations:   You're checking the health of the resource record sets in a weighted, latency, geolocation, or failover resource record set, and you specify health check IDs for all of the resource record sets. If the health check for one resource record set specifies an endpoint that is not healthy, Amazon Route 53 stops responding to queries using the value for that resource record set.   You set EvaluateTargetHealth to true for the resource record sets in an alias, weighted alias, latency alias, geolocation alias, or failover alias resource record set, and you specify health check IDs for all of the resource record sets that are referenced by the alias resource record sets.    Amazon Route 53 doesn't check the health of the endpoint specified in the resource record set, for example, the endpoint specified by the IP address in the Value element. When you add a HealthCheckId element to a resource record set, Amazon Route 53 checks the health of the endpoint that you specified in the health check.   For geolocation resource record sets, if an endpoint is unhealthy, Amazon Route 53 looks for a resource record set for the larger, associated geographic region. For example, suppose you have resource record sets for a state in the United States, for the United States, for North America, and for all locations. If the endpoint for the state resource record set is unhealthy, Amazon Route 53 checks the resource record sets for the United States, for North America, and for all locations (a resource record set for which the value of CountryCode is *), in that order, until it finds a resource record set for which the endpoint is healthy.  If your health checks specify the endpoint only by domain name, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of FullyQualifiedDomainName, specify the domain name of the server (such as us-east-1-www.example.com), not the name of the resource record sets (example.com).  n this configuration, if you create a health check for which the value of FullyQualifiedDomainName matches the name of the resource record sets and then associate the health check with those resource record sets, health check results will be unpredictable.  For more information, see the following topics in the Amazon Route 53 Developer Guide:    Amazon Route 53 Health Checks and DNS Failover     Configuring Failover in a Private Hosted Zone   
     */
    HealthCheckId?: HealthCheckId;
    /**
     * When you create a traffic policy instance, Amazon Route 53 automatically creates a resource record set. TrafficPolicyInstanceId is the ID of the traffic policy instance that Amazon Route 53 created this resource record set for.  To delete the resource record set that is associated with a traffic policy instance, use DeleteTrafficPolicyInstance. Amazon Route 53 will delete the resource record set automatically. If you delete the resource record set by using ChangeResourceRecordSets, Amazon Route 53 doesn't automatically delete the traffic policy instance, and you'll continue to be charged for it even though it's no longer in use.  
     */
    TrafficPolicyInstanceId?: TrafficPolicyInstanceId;
  }
  export type ResourceRecordSetFailover = "PRIMARY"|"SECONDARY"|string;
  export type ResourceRecordSetIdentifier = string;
  export type ResourceRecordSetRegion = "us-east-1"|"us-east-2"|"us-west-1"|"us-west-2"|"eu-west-1"|"eu-central-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"ap-northeast-2"|"sa-east-1"|"cn-north-1"|"ap-south-1"|string;
  export type ResourceRecordSetWeight = number;
  export type ResourceRecordSets = ResourceRecordSet[];
  export type ResourceRecords = ResourceRecord[];
  export interface ResourceTagSet {
    /**
     * The type of the resource.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone.  
     */
    ResourceType?: TagResourceType;
    /**
     * The ID for the specified resource.
     */
    ResourceId?: TagResourceId;
    /**
     * The tags associated with the specified resource.
     */
    Tags?: TagList;
  }
  export type ResourceTagSetList = ResourceTagSet[];
  export type ResourceURI = string;
  export type SearchString = string;
  export type Statistic = "Average"|"Sum"|"SampleCount"|"Maximum"|"Minimum"|string;
  export type Status = string;
  export interface StatusReport {
    /**
     * A description of the status of the health check endpoint as reported by one of the Amazon Route 53 health checkers.
     */
    Status?: Status;
    /**
     * The time at which the health checker performed the health check in ISO 8601 format and Coordinated Universal Time (UTC). For example, the value 2014-10-27T17:48:16.751Z represents October 27, 2014 at 17:48:16.751 UTC.
     */
    CheckedTime?: TimeStamp;
  }
  export type SubnetMask = string;
  export type TTL = number;
  export interface Tag {
    /**
     * The value of Key depends on the operation that you want to perform:    Add a tag to a health check or hosted zone: Key is the name that you want to give the new tag.    Edit a tag: Key is the name of the tag whose Value element you want to remove.     Delete a key: Key is the name of the tag you want to remove.    Give a name to a health check: Edit the default Name tag. In the Amazon Route 53 console, the list of your health checks includes a Name column that lets you see the name that you've given to each health check.  
     */
    Key?: TagKey;
    /**
     * The value of Value depends on the operation that you want to perform:    Add a tag to a health check or hosted zone: Value is the value that you want to give the new tag.    Edit a tag: Value is the new value that you want to assign the tag.  
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export type TagResourceId = string;
  export type TagResourceIdList = TagResourceId[];
  export type TagResourceType = "healthcheck"|"hostedzone"|string;
  export type TagValue = string;
  export interface TestDNSAnswerRequest {
    /**
     * The ID of the hosted zone that you want Amazon Route 53 to simulate a query for.
     */
    HostedZoneId: ResourceId;
    /**
     * The name of the resource record set that you want Amazon Route 53 to simulate a query for.
     */
    RecordName: DNSName;
    /**
     * The type of the resource record set.
     */
    RecordType: RRType;
    /**
     * If you want to simulate a request from a specific DNS resolver, specify the IP address for that resolver. If you omit this value, TestDnsAnswer uses the IP address of a DNS resolver in the AWS US East region.
     */
    ResolverIP?: IPAddress;
    /**
     * If the resolver that you specified for resolverip supports EDNS0, specify the IP address of a client in the applicable location.
     */
    EDNS0ClientSubnetIP?: IPAddress;
    /**
     * If you specify an IP address for edns0clientsubnetip, you can optionally specify the number of bits of the IP address that you want the checking tool to include in the DNS query. For example, if you specify 192.0.2.44 for edns0clientsubnetip and 24 for edns0clientsubnetmask, the checking tool will simulate a request from 192.0.2.0/24. The default value is 24 bits.
     */
    EDNS0ClientSubnetMask?: SubnetMask;
  }
  export interface TestDNSAnswerResponse {
    /**
     * The Amazon Route 53 name server used to respond to the request.
     */
    Nameserver: Nameserver;
    /**
     * The name of the resource record set that you submitted a request for.
     */
    RecordName: DNSName;
    /**
     * The type of the resource record set that you submitted a request for.
     */
    RecordType: RRType;
    /**
     * A list that contains values that Amazon Route 53 returned for this resource record set.
     */
    RecordData: RecordData;
    /**
     * A code that indicates whether the request is valid or not. The most common response code is NOERROR, meaning that the request is valid. If the response is not valid, Amazon Route 53 returns a response code that describes the error. For a list of possible response codes, see DNS RCODES on the IANA website. 
     */
    ResponseCode: DNSRCode;
    /**
     * The protocol that Amazon Route 53 used to respond to the request, either UDP or TCP. 
     */
    Protocol: TransportProtocol;
  }
  export type Threshold = number;
  export type TimeStamp = Date;
  export type TrafficPolicies = TrafficPolicy[];
  export interface TrafficPolicy {
    /**
     * The ID that Amazon Route 53 assigned to a traffic policy when you created it.
     */
    Id: TrafficPolicyId;
    /**
     * The version number that Amazon Route 53 assigns to a traffic policy. For a new traffic policy, the value of Version is always 1.
     */
    Version: TrafficPolicyVersion;
    /**
     * The name that you specified when you created the traffic policy.
     */
    Name: TrafficPolicyName;
    /**
     * The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.
     */
    Type: RRType;
    /**
     * The definition of a traffic policy in JSON format. You specify the JSON document to use for a new traffic policy in the CreateTrafficPolicy request. For more information about the JSON format, see Traffic Policy Document Format.
     */
    Document: TrafficPolicyDocument;
    /**
     * The comment that you specify in the CreateTrafficPolicy request, if any.
     */
    Comment?: TrafficPolicyComment;
  }
  export type TrafficPolicyComment = string;
  export type TrafficPolicyDocument = string;
  export type TrafficPolicyId = string;
  export interface TrafficPolicyInstance {
    /**
     * The ID that Amazon Route 53 assigned to the new traffic policy instance.
     */
    Id: TrafficPolicyInstanceId;
    /**
     * The ID of the hosted zone that Amazon Route 53 created resource record sets in.
     */
    HostedZoneId: ResourceId;
    /**
     * The DNS name, such as www.example.com, for which Amazon Route 53 responds to queries by using the resource record sets that are associated with this traffic policy instance. 
     */
    Name: DNSName;
    /**
     * The TTL that Amazon Route 53 assigned to all of the resource record sets that it created in the specified hosted zone.
     */
    TTL: TTL;
    /**
     * The value of State is one of the following values:  Applied  Amazon Route 53 has finished creating resource record sets, and changes have propagated to all Amazon Route 53 edge locations.  Creating  Amazon Route 53 is creating the resource record sets. Use GetTrafficPolicyInstance to confirm that the CreateTrafficPolicyInstance request completed successfully.  Failed  Amazon Route 53 wasn't able to create or update the resource record sets. When the value of State is Failed, see Message for an explanation of what caused the request to fail.  
     */
    State: TrafficPolicyInstanceState;
    /**
     * If State is Failed, an explanation of the reason for the failure. If State is another value, Message is empty.
     */
    Message: Message;
    /**
     * The ID of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * The version of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.
     */
    TrafficPolicyVersion: TrafficPolicyVersion;
    /**
     * The DNS type that Amazon Route 53 assigned to all of the resource record sets that it created for this traffic policy instance. 
     */
    TrafficPolicyType: RRType;
  }
  export type TrafficPolicyInstanceCount = number;
  export type TrafficPolicyInstanceId = string;
  export type TrafficPolicyInstanceState = string;
  export type TrafficPolicyInstances = TrafficPolicyInstance[];
  export type TrafficPolicyName = string;
  export type TrafficPolicySummaries = TrafficPolicySummary[];
  export interface TrafficPolicySummary {
    /**
     * The ID that Amazon Route 53 assigned to the traffic policy when you created it.
     */
    Id: TrafficPolicyId;
    /**
     * The name that you specified for the traffic policy when you created it.
     */
    Name: TrafficPolicyName;
    /**
     * The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.
     */
    Type: RRType;
    /**
     * The version number of the latest version of the traffic policy.
     */
    LatestVersion: TrafficPolicyVersion;
    /**
     * The number of traffic policies that are associated with the current AWS account.
     */
    TrafficPolicyCount: TrafficPolicyVersion;
  }
  export type TrafficPolicyVersion = number;
  export type TrafficPolicyVersionMarker = string;
  export type TransportProtocol = string;
  export interface UpdateHealthCheckRequest {
    /**
     * The ID for the health check for which you want detailed information. When you created the health check, CreateHealthCheck returned the ID in the response, in the HealthCheckId element.
     */
    HealthCheckId: HealthCheckId;
    /**
     * A sequential counter that Amazon Route 53 sets to 1 when you create a health check and increments by 1 each time you update settings for the health check. We recommend that you use GetHealthCheck or ListHealthChecks to get the current value of HealthCheckVersion for the health check that you want to update, and that you include that value in your UpdateHealthCheck request. This prevents Amazon Route 53 from overwriting an intervening update:   f the value in the UpdateHealthCheck request matches the value of HealthCheckVersion in the health check, Amazon Route 53 updates the health check with the new settings.   If the value of HealthCheckVersion in the health check is greater, the health check was changed after you got the version number. Amazon Route 53 does not update the health check, and it returns a HealthCheckVersionMismatch error.  
     */
    HealthCheckVersion?: HealthCheckVersion;
    /**
     * The IPv4 IP address of the endpoint on which you want Amazon Route 53 to perform health checks. If you don't specify a value for IPAddress, Amazon Route 53 sends a DNS request to resolve the domain name that you specify in FullyQualifiedDomainName at the interval you specify in RequestInterval. Using an IP address that DNS returns, Amazon Route 53 then checks the health of the endpoint. f the endpoint is an Amazon EC2 instance, we recommend that you create an Elastic IP address, associate it with your Amazon EC2 instance, and specify the Elastic IP address for IPAddress. This ensures that the IP address of your instance never changes. For more information, see Elastic IP Addresses (EIP) in the Amazon EC2 User Guide for Linux Instances.  If a health check already has a value for IPAddress, you can change the value. However, you can't update an existing health check to add or remove the value of IPAddress.   For more information, see UpdateHealthCheckRequest$FullyQualifiedDomainName.
     */
    IPAddress?: IPAddress;
    /**
     * The port on the endpoint on which you want Amazon Route 53 to perform health checks.
     */
    Port?: Port;
    /**
     * The path that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example the file /docs/route53-health-check.html.  Specify this value only if you want to change it.
     */
    ResourcePath?: ResourcePath;
    /**
     * Amazon Route 53 behavior depends on whether you specify a value for IPAddress.  If a health check already has a value for IPAddress, you can change the value. However, you can't update an existing health check to add or remove the value of IPAddress.    If you specify IPAddress: The value that you want Amazon Route 53 to pass in the Host header in all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Amazon Route 53 to perform health checks. When Amazon Route 53 checks the health of an endpoint, here is how it constructs the Host header:   If you specify a value of 80 for Port and HTTP or HTTP_STR_MATCH for Type, Amazon Route 53 passes the value of FullyQualifiedDomainName to the endpoint in the Host header.   If you specify a value of 443 for Port and HTTPS or HTTPS_STR_MATCH for Type, Amazon Route 53 passes the value of FullyQualifiedDomainName to the endpoint in the Host header.   If you specify another value for Port and any value except TCP for Type, Amazon Route 53 passes  FullyQualifiedDomainName:Port  to the endpoint in the Host header.   If you don't specify a value for FullyQualifiedDomainName, Amazon Route 53 substitutes the value of IPAddress in the Host header in each of the above cases.  If you don't specify IPAddress: If you don't specify a value for IPAddress, Amazon Route 53 sends a DNS request to the domain that you specify in FullyQualifiedDomainName at the interval you specify in RequestInterval. Using an IP address that DNS returns, Amazon Route 53 then checks the health of the endpoint. If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by FullyQualifiedDomainName, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of FullyQualifiedDomainName, specify the domain name of the server (such as us-east-1-www.example.com), not the name of the resource record sets (www.example.com).  In this configuration, if the value of FullyQualifiedDomainName matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.  In addition, if the value of Type is HTTP, HTTPS, HTTP_STR_MATCH, or HTTPS_STR_MATCH, Amazon Route 53 passes the value of FullyQualifiedDomainName in the Host header, as it does when you specify a value for IPAddress. If the value of Type is TCP, Amazon Route 53 doesn't pass a Host header.
     */
    FullyQualifiedDomainName?: FullyQualifiedDomainName;
    /**
     * If the value of Type is HTTP_STR_MATCH or HTTP_STR_MATCH, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Amazon Route 53 considers the resource healthy. (You can't change the value of Type when you update a health check.)
     */
    SearchString?: SearchString;
    /**
     * The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy in the Amazon Route 53 Developer Guide.
     */
    FailureThreshold?: FailureThreshold;
    /**
     * Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.
     */
    Inverted?: Inverted;
    /**
     * The number of child health checks that are associated with a CALCULATED health that Amazon Route 53 must consider healthy for the CALCULATED health check to be considered healthy. To specify the child health checks that you want to associate with a CALCULATED health check, use the ChildHealthChecks and ChildHealthCheck elements. Note the following:   If you specify a number greater than the number of child health checks, Amazon Route 53 always considers this health check to be unhealthy.   If you specify 0, Amazon Route 53 always considers this health check to be healthy.  
     */
    HealthThreshold?: HealthThreshold;
    /**
     * A complex type that contains one ChildHealthCheck element for each health check that you want to associate with a CALCULATED health check.
     */
    ChildHealthChecks?: ChildHealthCheckList;
    /**
     * Specify whether you want Amazon Route 53 to send the value of FullyQualifiedDomainName to the endpoint in the client_hello message during TLS negotiation. This allows the endpoint to respond to HTTPS health check requests with the applicable SSL/TLS certificate. Some endpoints require that HTTPS requests include the host name in the client_hello message. If you don't enable SNI, the status of the health check will be SSL alert handshake_failure. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid. The SSL/TLS certificate on your endpoint includes a domain name in the Common Name field and possibly several more in the Subject Alternative Names field. One of the domain names in the certificate should match the value that you specify for FullyQualifiedDomainName. If the endpoint responds to the client_hello message with a certificate that does not include the domain name that you specified in FullyQualifiedDomainName, a health checker will retry the handshake. In the second attempt, the health checker will omit FullyQualifiedDomainName from the client_hello message.
     */
    EnableSNI?: EnableSNI;
    /**
     * A complex type that contains one Region element for each region from which you want Amazon Route 53 health checkers to check the specified endpoint.
     */
    Regions?: HealthCheckRegionList;
    AlarmIdentifier?: AlarmIdentifier;
    /**
     * When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:    Healthy: Amazon Route 53 considers the health check to be healthy.    Unhealthy: Amazon Route 53 considers the health check to be unhealthy.    LastKnownStatus: Amazon Route 53 uses the status of the health check from the last time CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the default status for the health check is healthy.  
     */
    InsufficientDataHealthStatus?: InsufficientDataHealthStatus;
  }
  export interface UpdateHealthCheckResponse {
    HealthCheck: HealthCheck;
  }
  export interface UpdateHostedZoneCommentRequest {
    /**
     * The ID for the hosted zone for which you want to update the comment.
     */
    Id: ResourceId;
    /**
     * The new comment for the hosted zone. If you don't specify a value for Comment, Amazon Route 53 deletes the existing value of the Comment element, if any.
     */
    Comment?: ResourceDescription;
  }
  export interface UpdateHostedZoneCommentResponse {
    HostedZone: HostedZone;
  }
  export interface UpdateTrafficPolicyCommentRequest {
    /**
     * The value of Id for the traffic policy for which you want to update the comment.
     */
    Id: TrafficPolicyId;
    /**
     * The value of Version for the traffic policy for which you want to update the comment.
     */
    Version: TrafficPolicyVersion;
    /**
     * The new comment for the specified traffic policy and version.
     */
    Comment: TrafficPolicyComment;
  }
  export interface UpdateTrafficPolicyCommentResponse {
    /**
     * A complex type that contains settings for the specified traffic policy.
     */
    TrafficPolicy: TrafficPolicy;
  }
  export interface UpdateTrafficPolicyInstanceRequest {
    /**
     * The ID of the traffic policy instance that you want to update.
     */
    Id: TrafficPolicyInstanceId;
    /**
     * The TTL that you want Amazon Route 53 to assign to all of the updated resource record sets.
     */
    TTL: TTL;
    /**
     * The ID of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * The version of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.
     */
    TrafficPolicyVersion: TrafficPolicyVersion;
  }
  export interface UpdateTrafficPolicyInstanceResponse {
    /**
     * A complex type that contains settings for the updated traffic policy instance.
     */
    TrafficPolicyInstance: TrafficPolicyInstance;
  }
  export interface VPC {
    /**
     * The region in which you created the VPC that you want to associate with the specified Amazon Route 53 hosted zone.
     */
    VPCRegion?: VPCRegion;
    VPCId?: VPCId;
  }
  export type VPCId = string;
  export type VPCRegion = "us-east-1"|"us-east-2"|"us-west-1"|"us-west-2"|"eu-west-1"|"eu-central-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-south-1"|"ap-northeast-1"|"ap-northeast-2"|"sa-east-1"|"cn-north-1"|string;
  export type VPCs = VPC[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2013-04-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = Route53;
