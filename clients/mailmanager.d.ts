import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class MailManager extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MailManager.Types.ClientConfiguration)
  config: Config & MailManager.Types.ClientConfiguration;
  /**
   * Creates an Add On instance for the subscription indicated in the request. The resulting Amazon Resource Name (ARN) can be used in a conditional statement for a rule set or traffic policy. 
   */
  createAddonInstance(params: MailManager.Types.CreateAddonInstanceRequest, callback?: (err: AWSError, data: MailManager.Types.CreateAddonInstanceResponse) => void): Request<MailManager.Types.CreateAddonInstanceResponse, AWSError>;
  /**
   * Creates an Add On instance for the subscription indicated in the request. The resulting Amazon Resource Name (ARN) can be used in a conditional statement for a rule set or traffic policy. 
   */
  createAddonInstance(callback?: (err: AWSError, data: MailManager.Types.CreateAddonInstanceResponse) => void): Request<MailManager.Types.CreateAddonInstanceResponse, AWSError>;
  /**
   * Creates a subscription for an Add On representing the acceptance of its terms of use and additional pricing. The subscription can then be used to create an instance for use in rule sets or traffic policies.
   */
  createAddonSubscription(params: MailManager.Types.CreateAddonSubscriptionRequest, callback?: (err: AWSError, data: MailManager.Types.CreateAddonSubscriptionResponse) => void): Request<MailManager.Types.CreateAddonSubscriptionResponse, AWSError>;
  /**
   * Creates a subscription for an Add On representing the acceptance of its terms of use and additional pricing. The subscription can then be used to create an instance for use in rule sets or traffic policies.
   */
  createAddonSubscription(callback?: (err: AWSError, data: MailManager.Types.CreateAddonSubscriptionResponse) => void): Request<MailManager.Types.CreateAddonSubscriptionResponse, AWSError>;
  /**
   * Creates a new email archive resource for storing and retaining emails.
   */
  createArchive(params: MailManager.Types.CreateArchiveRequest, callback?: (err: AWSError, data: MailManager.Types.CreateArchiveResponse) => void): Request<MailManager.Types.CreateArchiveResponse, AWSError>;
  /**
   * Creates a new email archive resource for storing and retaining emails.
   */
  createArchive(callback?: (err: AWSError, data: MailManager.Types.CreateArchiveResponse) => void): Request<MailManager.Types.CreateArchiveResponse, AWSError>;
  /**
   * Provision a new ingress endpoint resource.
   */
  createIngressPoint(params: MailManager.Types.CreateIngressPointRequest, callback?: (err: AWSError, data: MailManager.Types.CreateIngressPointResponse) => void): Request<MailManager.Types.CreateIngressPointResponse, AWSError>;
  /**
   * Provision a new ingress endpoint resource.
   */
  createIngressPoint(callback?: (err: AWSError, data: MailManager.Types.CreateIngressPointResponse) => void): Request<MailManager.Types.CreateIngressPointResponse, AWSError>;
  /**
   * Creates a relay resource which can be used in rules to relay incoming emails to defined relay destinations. 
   */
  createRelay(params: MailManager.Types.CreateRelayRequest, callback?: (err: AWSError, data: MailManager.Types.CreateRelayResponse) => void): Request<MailManager.Types.CreateRelayResponse, AWSError>;
  /**
   * Creates a relay resource which can be used in rules to relay incoming emails to defined relay destinations. 
   */
  createRelay(callback?: (err: AWSError, data: MailManager.Types.CreateRelayResponse) => void): Request<MailManager.Types.CreateRelayResponse, AWSError>;
  /**
   * Provision a new rule set.
   */
  createRuleSet(params: MailManager.Types.CreateRuleSetRequest, callback?: (err: AWSError, data: MailManager.Types.CreateRuleSetResponse) => void): Request<MailManager.Types.CreateRuleSetResponse, AWSError>;
  /**
   * Provision a new rule set.
   */
  createRuleSet(callback?: (err: AWSError, data: MailManager.Types.CreateRuleSetResponse) => void): Request<MailManager.Types.CreateRuleSetResponse, AWSError>;
  /**
   * Provision a new traffic policy resource.
   */
  createTrafficPolicy(params: MailManager.Types.CreateTrafficPolicyRequest, callback?: (err: AWSError, data: MailManager.Types.CreateTrafficPolicyResponse) => void): Request<MailManager.Types.CreateTrafficPolicyResponse, AWSError>;
  /**
   * Provision a new traffic policy resource.
   */
  createTrafficPolicy(callback?: (err: AWSError, data: MailManager.Types.CreateTrafficPolicyResponse) => void): Request<MailManager.Types.CreateTrafficPolicyResponse, AWSError>;
  /**
   * Deletes an Add On instance.
   */
  deleteAddonInstance(params: MailManager.Types.DeleteAddonInstanceRequest, callback?: (err: AWSError, data: MailManager.Types.DeleteAddonInstanceResponse) => void): Request<MailManager.Types.DeleteAddonInstanceResponse, AWSError>;
  /**
   * Deletes an Add On instance.
   */
  deleteAddonInstance(callback?: (err: AWSError, data: MailManager.Types.DeleteAddonInstanceResponse) => void): Request<MailManager.Types.DeleteAddonInstanceResponse, AWSError>;
  /**
   * Deletes an Add On subscription.
   */
  deleteAddonSubscription(params: MailManager.Types.DeleteAddonSubscriptionRequest, callback?: (err: AWSError, data: MailManager.Types.DeleteAddonSubscriptionResponse) => void): Request<MailManager.Types.DeleteAddonSubscriptionResponse, AWSError>;
  /**
   * Deletes an Add On subscription.
   */
  deleteAddonSubscription(callback?: (err: AWSError, data: MailManager.Types.DeleteAddonSubscriptionResponse) => void): Request<MailManager.Types.DeleteAddonSubscriptionResponse, AWSError>;
  /**
   * Initiates deletion of an email archive. This changes the archive state to pending deletion. In this state, no new emails can be added, and existing archived emails become inaccessible (search, export, download). The archive and all of its contents will be permanently deleted 30 days after entering the pending deletion state, regardless of the configured retention period. 
   */
  deleteArchive(params: MailManager.Types.DeleteArchiveRequest, callback?: (err: AWSError, data: MailManager.Types.DeleteArchiveResponse) => void): Request<MailManager.Types.DeleteArchiveResponse, AWSError>;
  /**
   * Initiates deletion of an email archive. This changes the archive state to pending deletion. In this state, no new emails can be added, and existing archived emails become inaccessible (search, export, download). The archive and all of its contents will be permanently deleted 30 days after entering the pending deletion state, regardless of the configured retention period. 
   */
  deleteArchive(callback?: (err: AWSError, data: MailManager.Types.DeleteArchiveResponse) => void): Request<MailManager.Types.DeleteArchiveResponse, AWSError>;
  /**
   * Delete an ingress endpoint resource.
   */
  deleteIngressPoint(params: MailManager.Types.DeleteIngressPointRequest, callback?: (err: AWSError, data: MailManager.Types.DeleteIngressPointResponse) => void): Request<MailManager.Types.DeleteIngressPointResponse, AWSError>;
  /**
   * Delete an ingress endpoint resource.
   */
  deleteIngressPoint(callback?: (err: AWSError, data: MailManager.Types.DeleteIngressPointResponse) => void): Request<MailManager.Types.DeleteIngressPointResponse, AWSError>;
  /**
   * Deletes an existing relay resource.
   */
  deleteRelay(params: MailManager.Types.DeleteRelayRequest, callback?: (err: AWSError, data: MailManager.Types.DeleteRelayResponse) => void): Request<MailManager.Types.DeleteRelayResponse, AWSError>;
  /**
   * Deletes an existing relay resource.
   */
  deleteRelay(callback?: (err: AWSError, data: MailManager.Types.DeleteRelayResponse) => void): Request<MailManager.Types.DeleteRelayResponse, AWSError>;
  /**
   * Delete a rule set.
   */
  deleteRuleSet(params: MailManager.Types.DeleteRuleSetRequest, callback?: (err: AWSError, data: MailManager.Types.DeleteRuleSetResponse) => void): Request<MailManager.Types.DeleteRuleSetResponse, AWSError>;
  /**
   * Delete a rule set.
   */
  deleteRuleSet(callback?: (err: AWSError, data: MailManager.Types.DeleteRuleSetResponse) => void): Request<MailManager.Types.DeleteRuleSetResponse, AWSError>;
  /**
   * Delete a traffic policy resource.
   */
  deleteTrafficPolicy(params: MailManager.Types.DeleteTrafficPolicyRequest, callback?: (err: AWSError, data: MailManager.Types.DeleteTrafficPolicyResponse) => void): Request<MailManager.Types.DeleteTrafficPolicyResponse, AWSError>;
  /**
   * Delete a traffic policy resource.
   */
  deleteTrafficPolicy(callback?: (err: AWSError, data: MailManager.Types.DeleteTrafficPolicyResponse) => void): Request<MailManager.Types.DeleteTrafficPolicyResponse, AWSError>;
  /**
   * Gets detailed information about an Add On instance.
   */
  getAddonInstance(params: MailManager.Types.GetAddonInstanceRequest, callback?: (err: AWSError, data: MailManager.Types.GetAddonInstanceResponse) => void): Request<MailManager.Types.GetAddonInstanceResponse, AWSError>;
  /**
   * Gets detailed information about an Add On instance.
   */
  getAddonInstance(callback?: (err: AWSError, data: MailManager.Types.GetAddonInstanceResponse) => void): Request<MailManager.Types.GetAddonInstanceResponse, AWSError>;
  /**
   * Gets detailed information about an Add On subscription.
   */
  getAddonSubscription(params: MailManager.Types.GetAddonSubscriptionRequest, callback?: (err: AWSError, data: MailManager.Types.GetAddonSubscriptionResponse) => void): Request<MailManager.Types.GetAddonSubscriptionResponse, AWSError>;
  /**
   * Gets detailed information about an Add On subscription.
   */
  getAddonSubscription(callback?: (err: AWSError, data: MailManager.Types.GetAddonSubscriptionResponse) => void): Request<MailManager.Types.GetAddonSubscriptionResponse, AWSError>;
  /**
   * Retrieves the full details and current state of a specified email archive.
   */
  getArchive(params: MailManager.Types.GetArchiveRequest, callback?: (err: AWSError, data: MailManager.Types.GetArchiveResponse) => void): Request<MailManager.Types.GetArchiveResponse, AWSError>;
  /**
   * Retrieves the full details and current state of a specified email archive.
   */
  getArchive(callback?: (err: AWSError, data: MailManager.Types.GetArchiveResponse) => void): Request<MailManager.Types.GetArchiveResponse, AWSError>;
  /**
   * Retrieves the details and current status of a specific email archive export job.
   */
  getArchiveExport(params: MailManager.Types.GetArchiveExportRequest, callback?: (err: AWSError, data: MailManager.Types.GetArchiveExportResponse) => void): Request<MailManager.Types.GetArchiveExportResponse, AWSError>;
  /**
   * Retrieves the details and current status of a specific email archive export job.
   */
  getArchiveExport(callback?: (err: AWSError, data: MailManager.Types.GetArchiveExportResponse) => void): Request<MailManager.Types.GetArchiveExportResponse, AWSError>;
  /**
   * Returns a pre-signed URL that provides temporary download access to the specific email message stored in the archive. 
   */
  getArchiveMessage(params: MailManager.Types.GetArchiveMessageRequest, callback?: (err: AWSError, data: MailManager.Types.GetArchiveMessageResponse) => void): Request<MailManager.Types.GetArchiveMessageResponse, AWSError>;
  /**
   * Returns a pre-signed URL that provides temporary download access to the specific email message stored in the archive. 
   */
  getArchiveMessage(callback?: (err: AWSError, data: MailManager.Types.GetArchiveMessageResponse) => void): Request<MailManager.Types.GetArchiveMessageResponse, AWSError>;
  /**
   * Returns the textual content of a specific email message stored in the archive. Attachments are not included. 
   */
  getArchiveMessageContent(params: MailManager.Types.GetArchiveMessageContentRequest, callback?: (err: AWSError, data: MailManager.Types.GetArchiveMessageContentResponse) => void): Request<MailManager.Types.GetArchiveMessageContentResponse, AWSError>;
  /**
   * Returns the textual content of a specific email message stored in the archive. Attachments are not included. 
   */
  getArchiveMessageContent(callback?: (err: AWSError, data: MailManager.Types.GetArchiveMessageContentResponse) => void): Request<MailManager.Types.GetArchiveMessageContentResponse, AWSError>;
  /**
   * Retrieves the details and current status of a specific email archive search job.
   */
  getArchiveSearch(params: MailManager.Types.GetArchiveSearchRequest, callback?: (err: AWSError, data: MailManager.Types.GetArchiveSearchResponse) => void): Request<MailManager.Types.GetArchiveSearchResponse, AWSError>;
  /**
   * Retrieves the details and current status of a specific email archive search job.
   */
  getArchiveSearch(callback?: (err: AWSError, data: MailManager.Types.GetArchiveSearchResponse) => void): Request<MailManager.Types.GetArchiveSearchResponse, AWSError>;
  /**
   * Returns the results of a completed email archive search job.
   */
  getArchiveSearchResults(params: MailManager.Types.GetArchiveSearchResultsRequest, callback?: (err: AWSError, data: MailManager.Types.GetArchiveSearchResultsResponse) => void): Request<MailManager.Types.GetArchiveSearchResultsResponse, AWSError>;
  /**
   * Returns the results of a completed email archive search job.
   */
  getArchiveSearchResults(callback?: (err: AWSError, data: MailManager.Types.GetArchiveSearchResultsResponse) => void): Request<MailManager.Types.GetArchiveSearchResultsResponse, AWSError>;
  /**
   * Fetch ingress endpoint resource attributes.
   */
  getIngressPoint(params: MailManager.Types.GetIngressPointRequest, callback?: (err: AWSError, data: MailManager.Types.GetIngressPointResponse) => void): Request<MailManager.Types.GetIngressPointResponse, AWSError>;
  /**
   * Fetch ingress endpoint resource attributes.
   */
  getIngressPoint(callback?: (err: AWSError, data: MailManager.Types.GetIngressPointResponse) => void): Request<MailManager.Types.GetIngressPointResponse, AWSError>;
  /**
   * Fetch the relay resource and it's attributes.
   */
  getRelay(params: MailManager.Types.GetRelayRequest, callback?: (err: AWSError, data: MailManager.Types.GetRelayResponse) => void): Request<MailManager.Types.GetRelayResponse, AWSError>;
  /**
   * Fetch the relay resource and it's attributes.
   */
  getRelay(callback?: (err: AWSError, data: MailManager.Types.GetRelayResponse) => void): Request<MailManager.Types.GetRelayResponse, AWSError>;
  /**
   * Fetch attributes of a rule set.
   */
  getRuleSet(params: MailManager.Types.GetRuleSetRequest, callback?: (err: AWSError, data: MailManager.Types.GetRuleSetResponse) => void): Request<MailManager.Types.GetRuleSetResponse, AWSError>;
  /**
   * Fetch attributes of a rule set.
   */
  getRuleSet(callback?: (err: AWSError, data: MailManager.Types.GetRuleSetResponse) => void): Request<MailManager.Types.GetRuleSetResponse, AWSError>;
  /**
   * Fetch attributes of a traffic policy resource.
   */
  getTrafficPolicy(params: MailManager.Types.GetTrafficPolicyRequest, callback?: (err: AWSError, data: MailManager.Types.GetTrafficPolicyResponse) => void): Request<MailManager.Types.GetTrafficPolicyResponse, AWSError>;
  /**
   * Fetch attributes of a traffic policy resource.
   */
  getTrafficPolicy(callback?: (err: AWSError, data: MailManager.Types.GetTrafficPolicyResponse) => void): Request<MailManager.Types.GetTrafficPolicyResponse, AWSError>;
  /**
   * Lists all Add On instances in your account.
   */
  listAddonInstances(params: MailManager.Types.ListAddonInstancesRequest, callback?: (err: AWSError, data: MailManager.Types.ListAddonInstancesResponse) => void): Request<MailManager.Types.ListAddonInstancesResponse, AWSError>;
  /**
   * Lists all Add On instances in your account.
   */
  listAddonInstances(callback?: (err: AWSError, data: MailManager.Types.ListAddonInstancesResponse) => void): Request<MailManager.Types.ListAddonInstancesResponse, AWSError>;
  /**
   * Lists all Add On subscriptions in your account.
   */
  listAddonSubscriptions(params: MailManager.Types.ListAddonSubscriptionsRequest, callback?: (err: AWSError, data: MailManager.Types.ListAddonSubscriptionsResponse) => void): Request<MailManager.Types.ListAddonSubscriptionsResponse, AWSError>;
  /**
   * Lists all Add On subscriptions in your account.
   */
  listAddonSubscriptions(callback?: (err: AWSError, data: MailManager.Types.ListAddonSubscriptionsResponse) => void): Request<MailManager.Types.ListAddonSubscriptionsResponse, AWSError>;
  /**
   * Returns a list of email archive export jobs.
   */
  listArchiveExports(params: MailManager.Types.ListArchiveExportsRequest, callback?: (err: AWSError, data: MailManager.Types.ListArchiveExportsResponse) => void): Request<MailManager.Types.ListArchiveExportsResponse, AWSError>;
  /**
   * Returns a list of email archive export jobs.
   */
  listArchiveExports(callback?: (err: AWSError, data: MailManager.Types.ListArchiveExportsResponse) => void): Request<MailManager.Types.ListArchiveExportsResponse, AWSError>;
  /**
   * Returns a list of email archive search jobs.
   */
  listArchiveSearches(params: MailManager.Types.ListArchiveSearchesRequest, callback?: (err: AWSError, data: MailManager.Types.ListArchiveSearchesResponse) => void): Request<MailManager.Types.ListArchiveSearchesResponse, AWSError>;
  /**
   * Returns a list of email archive search jobs.
   */
  listArchiveSearches(callback?: (err: AWSError, data: MailManager.Types.ListArchiveSearchesResponse) => void): Request<MailManager.Types.ListArchiveSearchesResponse, AWSError>;
  /**
   * Returns a list of all email archives in your account.
   */
  listArchives(params: MailManager.Types.ListArchivesRequest, callback?: (err: AWSError, data: MailManager.Types.ListArchivesResponse) => void): Request<MailManager.Types.ListArchivesResponse, AWSError>;
  /**
   * Returns a list of all email archives in your account.
   */
  listArchives(callback?: (err: AWSError, data: MailManager.Types.ListArchivesResponse) => void): Request<MailManager.Types.ListArchivesResponse, AWSError>;
  /**
   * List all ingress endpoint resources.
   */
  listIngressPoints(params: MailManager.Types.ListIngressPointsRequest, callback?: (err: AWSError, data: MailManager.Types.ListIngressPointsResponse) => void): Request<MailManager.Types.ListIngressPointsResponse, AWSError>;
  /**
   * List all ingress endpoint resources.
   */
  listIngressPoints(callback?: (err: AWSError, data: MailManager.Types.ListIngressPointsResponse) => void): Request<MailManager.Types.ListIngressPointsResponse, AWSError>;
  /**
   * Lists all the existing relay resources.
   */
  listRelays(params: MailManager.Types.ListRelaysRequest, callback?: (err: AWSError, data: MailManager.Types.ListRelaysResponse) => void): Request<MailManager.Types.ListRelaysResponse, AWSError>;
  /**
   * Lists all the existing relay resources.
   */
  listRelays(callback?: (err: AWSError, data: MailManager.Types.ListRelaysResponse) => void): Request<MailManager.Types.ListRelaysResponse, AWSError>;
  /**
   * List rule sets for this account.
   */
  listRuleSets(params: MailManager.Types.ListRuleSetsRequest, callback?: (err: AWSError, data: MailManager.Types.ListRuleSetsResponse) => void): Request<MailManager.Types.ListRuleSetsResponse, AWSError>;
  /**
   * List rule sets for this account.
   */
  listRuleSets(callback?: (err: AWSError, data: MailManager.Types.ListRuleSetsResponse) => void): Request<MailManager.Types.ListRuleSetsResponse, AWSError>;
  /**
   *  Retrieves the list of tags (keys and values) assigned to the resource. 
   */
  listTagsForResource(params: MailManager.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: MailManager.Types.ListTagsForResourceResponse) => void): Request<MailManager.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  Retrieves the list of tags (keys and values) assigned to the resource. 
   */
  listTagsForResource(callback?: (err: AWSError, data: MailManager.Types.ListTagsForResourceResponse) => void): Request<MailManager.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List traffic policy resources.
   */
  listTrafficPolicies(params: MailManager.Types.ListTrafficPoliciesRequest, callback?: (err: AWSError, data: MailManager.Types.ListTrafficPoliciesResponse) => void): Request<MailManager.Types.ListTrafficPoliciesResponse, AWSError>;
  /**
   * List traffic policy resources.
   */
  listTrafficPolicies(callback?: (err: AWSError, data: MailManager.Types.ListTrafficPoliciesResponse) => void): Request<MailManager.Types.ListTrafficPoliciesResponse, AWSError>;
  /**
   * Initiates an export of emails from the specified archive.
   */
  startArchiveExport(params: MailManager.Types.StartArchiveExportRequest, callback?: (err: AWSError, data: MailManager.Types.StartArchiveExportResponse) => void): Request<MailManager.Types.StartArchiveExportResponse, AWSError>;
  /**
   * Initiates an export of emails from the specified archive.
   */
  startArchiveExport(callback?: (err: AWSError, data: MailManager.Types.StartArchiveExportResponse) => void): Request<MailManager.Types.StartArchiveExportResponse, AWSError>;
  /**
   * Initiates a search across emails in the specified archive.
   */
  startArchiveSearch(params: MailManager.Types.StartArchiveSearchRequest, callback?: (err: AWSError, data: MailManager.Types.StartArchiveSearchResponse) => void): Request<MailManager.Types.StartArchiveSearchResponse, AWSError>;
  /**
   * Initiates a search across emails in the specified archive.
   */
  startArchiveSearch(callback?: (err: AWSError, data: MailManager.Types.StartArchiveSearchResponse) => void): Request<MailManager.Types.StartArchiveSearchResponse, AWSError>;
  /**
   * Stops an in-progress export of emails from an archive.
   */
  stopArchiveExport(params: MailManager.Types.StopArchiveExportRequest, callback?: (err: AWSError, data: MailManager.Types.StopArchiveExportResponse) => void): Request<MailManager.Types.StopArchiveExportResponse, AWSError>;
  /**
   * Stops an in-progress export of emails from an archive.
   */
  stopArchiveExport(callback?: (err: AWSError, data: MailManager.Types.StopArchiveExportResponse) => void): Request<MailManager.Types.StopArchiveExportResponse, AWSError>;
  /**
   * Stops an in-progress archive search job.
   */
  stopArchiveSearch(params: MailManager.Types.StopArchiveSearchRequest, callback?: (err: AWSError, data: MailManager.Types.StopArchiveSearchResponse) => void): Request<MailManager.Types.StopArchiveSearchResponse, AWSError>;
  /**
   * Stops an in-progress archive search job.
   */
  stopArchiveSearch(callback?: (err: AWSError, data: MailManager.Types.StopArchiveSearchResponse) => void): Request<MailManager.Types.StopArchiveSearchResponse, AWSError>;
  /**
   *  Adds one or more tags (keys and values) to a specified resource. 
   */
  tagResource(params: MailManager.Types.TagResourceRequest, callback?: (err: AWSError, data: MailManager.Types.TagResourceResponse) => void): Request<MailManager.Types.TagResourceResponse, AWSError>;
  /**
   *  Adds one or more tags (keys and values) to a specified resource. 
   */
  tagResource(callback?: (err: AWSError, data: MailManager.Types.TagResourceResponse) => void): Request<MailManager.Types.TagResourceResponse, AWSError>;
  /**
   *  Remove one or more tags (keys and values) from a specified resource. 
   */
  untagResource(params: MailManager.Types.UntagResourceRequest, callback?: (err: AWSError, data: MailManager.Types.UntagResourceResponse) => void): Request<MailManager.Types.UntagResourceResponse, AWSError>;
  /**
   *  Remove one or more tags (keys and values) from a specified resource. 
   */
  untagResource(callback?: (err: AWSError, data: MailManager.Types.UntagResourceResponse) => void): Request<MailManager.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the attributes of an existing email archive.
   */
  updateArchive(params: MailManager.Types.UpdateArchiveRequest, callback?: (err: AWSError, data: MailManager.Types.UpdateArchiveResponse) => void): Request<MailManager.Types.UpdateArchiveResponse, AWSError>;
  /**
   * Updates the attributes of an existing email archive.
   */
  updateArchive(callback?: (err: AWSError, data: MailManager.Types.UpdateArchiveResponse) => void): Request<MailManager.Types.UpdateArchiveResponse, AWSError>;
  /**
   * Update attributes of a provisioned ingress endpoint resource.
   */
  updateIngressPoint(params: MailManager.Types.UpdateIngressPointRequest, callback?: (err: AWSError, data: MailManager.Types.UpdateIngressPointResponse) => void): Request<MailManager.Types.UpdateIngressPointResponse, AWSError>;
  /**
   * Update attributes of a provisioned ingress endpoint resource.
   */
  updateIngressPoint(callback?: (err: AWSError, data: MailManager.Types.UpdateIngressPointResponse) => void): Request<MailManager.Types.UpdateIngressPointResponse, AWSError>;
  /**
   * Updates the attributes of an existing relay resource.
   */
  updateRelay(params: MailManager.Types.UpdateRelayRequest, callback?: (err: AWSError, data: MailManager.Types.UpdateRelayResponse) => void): Request<MailManager.Types.UpdateRelayResponse, AWSError>;
  /**
   * Updates the attributes of an existing relay resource.
   */
  updateRelay(callback?: (err: AWSError, data: MailManager.Types.UpdateRelayResponse) => void): Request<MailManager.Types.UpdateRelayResponse, AWSError>;
  /**
   * &gt;Update attributes of an already provisioned rule set.
   */
  updateRuleSet(params: MailManager.Types.UpdateRuleSetRequest, callback?: (err: AWSError, data: MailManager.Types.UpdateRuleSetResponse) => void): Request<MailManager.Types.UpdateRuleSetResponse, AWSError>;
  /**
   * &gt;Update attributes of an already provisioned rule set.
   */
  updateRuleSet(callback?: (err: AWSError, data: MailManager.Types.UpdateRuleSetResponse) => void): Request<MailManager.Types.UpdateRuleSetResponse, AWSError>;
  /**
   * Update attributes of an already provisioned traffic policy resource.
   */
  updateTrafficPolicy(params: MailManager.Types.UpdateTrafficPolicyRequest, callback?: (err: AWSError, data: MailManager.Types.UpdateTrafficPolicyResponse) => void): Request<MailManager.Types.UpdateTrafficPolicyResponse, AWSError>;
  /**
   * Update attributes of an already provisioned traffic policy resource.
   */
  updateTrafficPolicy(callback?: (err: AWSError, data: MailManager.Types.UpdateTrafficPolicyResponse) => void): Request<MailManager.Types.UpdateTrafficPolicyResponse, AWSError>;
}
declare namespace MailManager {
  export type AcceptAction = "ALLOW"|"DENY"|string;
  export type ActionFailurePolicy = "CONTINUE"|"DROP"|string;
  export interface AddHeaderAction {
    /**
     * The name of the header to add to an email. The header must be prefixed with "X-". Headers are added regardless of whether the header name pre-existed in the email.
     */
    HeaderName: HeaderName;
    /**
     * The value of the header to add to the email.
     */
    HeaderValue: HeaderValue;
  }
  export interface AddonInstance {
    /**
     * The Amazon Resource Name (ARN) of the Add On instance.
     */
    AddonInstanceArn?: AddonInstanceArn;
    /**
     * The unique ID of the Add On instance.
     */
    AddonInstanceId?: AddonInstanceId;
    /**
     * The name of the Add On for the instance.
     */
    AddonName?: AddonName;
    /**
     * The subscription ID for the instance.
     */
    AddonSubscriptionId?: AddonSubscriptionId;
    /**
     * The timestamp of when the Add On instance was created.
     */
    CreatedTimestamp?: Timestamp;
  }
  export type AddonInstanceArn = string;
  export type AddonInstanceId = string;
  export type AddonInstances = AddonInstance[];
  export type AddonName = string;
  export interface AddonSubscription {
    /**
     * The name of the Add On.
     */
    AddonName?: AddonName;
    /**
     * The Amazon Resource Name (ARN) of the Add On subscription.
     */
    AddonSubscriptionArn?: AddonSubscriptionArn;
    /**
     * The unique ID of the Add On subscription.
     */
    AddonSubscriptionId?: AddonSubscriptionId;
    /**
     * The timestamp of when the Add On subscription was created.
     */
    CreatedTimestamp?: Timestamp;
  }
  export type AddonSubscriptionArn = string;
  export type AddonSubscriptionId = string;
  export type AddonSubscriptions = AddonSubscription[];
  export interface Analysis {
    /**
     * The Amazon Resource Name (ARN) of an Add On.
     */
    Analyzer: AnalyzerArn;
    /**
     * The returned value from an Add On.
     */
    ResultField: ResultField;
  }
  export type AnalyzerArn = string;
  export interface Archive {
    /**
     * The unique identifier of the archive.
     */
    ArchiveId: ArchiveIdString;
    /**
     * The unique name assigned to the archive.
     */
    ArchiveName?: ArchiveNameString;
    /**
     * The current state of the archive:    ACTIVE – The archive is ready and available for use.     PENDING_DELETION – The archive has been marked for deletion and will be permanently deleted in 30 days. No further modifications can be made in this state.   
     */
    ArchiveState?: ArchiveState;
    /**
     * The timestamp of when the archive was last updated.
     */
    LastUpdatedTimestamp?: Timestamp;
  }
  export interface ArchiveAction {
    /**
     * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the specified archive has been deleted.
     */
    ActionFailurePolicy?: ActionFailurePolicy;
    /**
     * The identifier of the archive to send the email to.
     */
    TargetArchive: NameOrArn;
  }
  export type ArchiveArn = string;
  export type ArchiveBooleanEmailAttribute = "HAS_ATTACHMENTS"|string;
  export interface ArchiveBooleanExpression {
    /**
     * The email attribute value to evaluate.
     */
    Evaluate: ArchiveBooleanToEvaluate;
    /**
     * The boolean operator to use for evaluation.
     */
    Operator: ArchiveBooleanOperator;
  }
  export type ArchiveBooleanOperator = "IS_TRUE"|"IS_FALSE"|string;
  export interface ArchiveBooleanToEvaluate {
    /**
     * The name of the email attribute to evaluate.
     */
    Attribute?: ArchiveBooleanEmailAttribute;
  }
  export interface ArchiveFilterCondition {
    /**
     * A boolean expression to evaluate against email attributes.
     */
    BooleanExpression?: ArchiveBooleanExpression;
    /**
     * A string expression to evaluate against email attributes.
     */
    StringExpression?: ArchiveStringExpression;
  }
  export type ArchiveFilterConditions = ArchiveFilterCondition[];
  export interface ArchiveFilters {
    /**
     * The filter conditions for emails to include.
     */
    Include?: ArchiveFilterConditions;
    /**
     * The filter conditions for emails to exclude.
     */
    Unless?: ArchiveFilterConditions;
  }
  export type ArchiveId = string;
  export type ArchiveIdString = string;
  export type ArchiveNameString = string;
  export interface ArchiveRetention {
    /**
     * The enum value sets the period for retaining emails in an archive.
     */
    RetentionPeriod?: RetentionPeriod;
  }
  export type ArchiveState = "ACTIVE"|"PENDING_DELETION"|string;
  export type ArchiveStringEmailAttribute = "TO"|"FROM"|"CC"|"SUBJECT"|string;
  export interface ArchiveStringExpression {
    /**
     * The attribute of the email to evaluate.
     */
    Evaluate: ArchiveStringToEvaluate;
    /**
     * The operator to use when evaluating the string values.
     */
    Operator: ArchiveStringOperator;
    /**
     * The list of string values to evaluate the email attribute against.
     */
    Values: StringValueList;
  }
  export type ArchiveStringOperator = "CONTAINS"|string;
  export interface ArchiveStringToEvaluate {
    /**
     * The name of the email attribute to evaluate.
     */
    Attribute?: ArchiveStringEmailAttribute;
  }
  export type ArchivedMessageId = string;
  export type ArchivesList = Archive[];
  export type Boolean = boolean;
  export interface CreateAddonInstanceRequest {
    /**
     * The unique ID of a previously created subscription that an Add On instance is created for. You can only have one instance per subscription.
     */
    AddonSubscriptionId: AddonSubscriptionId;
    /**
     * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
     */
    ClientToken?: IdempotencyToken;
    /**
     * The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagList;
  }
  export interface CreateAddonInstanceResponse {
    /**
     * The unique ID of the Add On instance created by this API.
     */
    AddonInstanceId: AddonInstanceId;
  }
  export interface CreateAddonSubscriptionRequest {
    /**
     * The name of the Add On to subscribe to. You can only have one subscription for each Add On name.
     */
    AddonName: AddonName;
    /**
     * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
     */
    ClientToken?: IdempotencyToken;
    /**
     * The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagList;
  }
  export interface CreateAddonSubscriptionResponse {
    /**
     * The unique ID of the Add On subscription created by this API.
     */
    AddonSubscriptionId: AddonSubscriptionId;
  }
  export interface CreateArchiveRequest {
    /**
     * A unique name for the new archive.
     */
    ArchiveName: ArchiveNameString;
    /**
     * A unique token Amazon SES uses to recognize retries of this request.
     */
    ClientToken?: IdempotencyToken;
    /**
     * The Amazon Resource Name (ARN) of the KMS key for encrypting emails in the archive.
     */
    KmsKeyArn?: KmsKeyArn;
    /**
     * The period for retaining emails in the archive before automatic deletion.
     */
    Retention?: ArchiveRetention;
    /**
     * The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagList;
  }
  export interface CreateArchiveResponse {
    /**
     * The unique identifier for the newly created archive.
     */
    ArchiveId: ArchiveIdString;
  }
  export interface CreateIngressPointRequest {
    /**
     * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
     */
    ClientToken?: IdempotencyToken;
    /**
     * If you choose an Authenticated ingress endpoint, you must configure either an SMTP password or a secret ARN.
     */
    IngressPointConfiguration?: IngressPointConfiguration;
    /**
     * A user friendly name for an ingress endpoint resource.
     */
    IngressPointName: IngressPointName;
    /**
     * The identifier of an existing rule set that you attach to an ingress endpoint resource.
     */
    RuleSetId: RuleSetId;
    /**
     * The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagList;
    /**
     * The identifier of an existing traffic policy that you attach to an ingress endpoint resource.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * The type of the ingress endpoint to create.
     */
    Type: IngressPointType;
  }
  export interface CreateIngressPointResponse {
    /**
     * The unique identifier for a previously created ingress endpoint.
     */
    IngressPointId: IngressPointId;
  }
  export interface CreateRelayRequest {
    /**
     * Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored.
     */
    Authentication: RelayAuthentication;
    /**
     * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
     */
    ClientToken?: IdempotencyToken;
    /**
     * The unique name of the relay resource.
     */
    RelayName: RelayName;
    /**
     * The destination relay server address.
     */
    ServerName: RelayServerName;
    /**
     * The destination relay server port.
     */
    ServerPort: RelayServerPort;
    /**
     * The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagList;
  }
  export interface CreateRelayResponse {
    /**
     * A unique identifier of the created relay resource.
     */
    RelayId: RelayId;
  }
  export interface CreateRuleSetRequest {
    /**
     * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
     */
    ClientToken?: IdempotencyToken;
    /**
     * A user-friendly name for the rule set.
     */
    RuleSetName: RuleSetName;
    /**
     * Conditional rules that are evaluated for determining actions on email.
     */
    Rules: Rules;
    /**
     * The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagList;
  }
  export interface CreateRuleSetResponse {
    /**
     * The identifier of the created rule set.
     */
    RuleSetId: RuleSetId;
  }
  export interface CreateTrafficPolicyRequest {
    /**
     * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
     */
    ClientToken?: IdempotencyToken;
    /**
     * Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements
     */
    DefaultAction: AcceptAction;
    /**
     * The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.
     */
    MaxMessageSizeBytes?: MaxMessageSizeBytes;
    /**
     * Conditional statements for filtering email traffic.
     */
    PolicyStatements: PolicyStatementList;
    /**
     * The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagList;
    /**
     * A user-friendly name for the traffic policy resource.
     */
    TrafficPolicyName: TrafficPolicyName;
  }
  export interface CreateTrafficPolicyResponse {
    /**
     * The identifier of the traffic policy resource.
     */
    TrafficPolicyId: TrafficPolicyId;
  }
  export interface DeleteAddonInstanceRequest {
    /**
     * The Add On instance ID to delete.
     */
    AddonInstanceId: AddonInstanceId;
  }
  export interface DeleteAddonInstanceResponse {
  }
  export interface DeleteAddonSubscriptionRequest {
    /**
     * The Add On subscription ID to delete.
     */
    AddonSubscriptionId: AddonSubscriptionId;
  }
  export interface DeleteAddonSubscriptionResponse {
  }
  export interface DeleteArchiveRequest {
    /**
     * The identifier of the archive to delete.
     */
    ArchiveId: ArchiveIdString;
  }
  export interface DeleteArchiveResponse {
  }
  export interface DeleteIngressPointRequest {
    /**
     * The identifier of the ingress endpoint resource that you want to delete.
     */
    IngressPointId: IngressPointId;
  }
  export interface DeleteIngressPointResponse {
  }
  export interface DeleteRelayRequest {
    /**
     * The unique relay identifier.
     */
    RelayId: RelayId;
  }
  export interface DeleteRelayResponse {
  }
  export interface DeleteRuleSetRequest {
    /**
     * The identifier of an existing rule set resource to delete.
     */
    RuleSetId: RuleSetId;
  }
  export interface DeleteRuleSetResponse {
  }
  export interface DeleteTrafficPolicyRequest {
    /**
     * The identifier of the traffic policy that you want to delete.
     */
    TrafficPolicyId: TrafficPolicyId;
  }
  export interface DeleteTrafficPolicyResponse {
  }
  export interface DeliverToMailboxAction {
    /**
     * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the mailbox ARN is no longer valid.
     */
    ActionFailurePolicy?: ActionFailurePolicy;
    /**
     * The Amazon Resource Name (ARN) of a WorkMail organization to deliver the email to.
     */
    MailboxArn: NameOrArn;
    /**
     * The Amazon Resource Name (ARN) of an IAM role to use to execute this action. The role must have access to the workmail:DeliverToMailbox API.
     */
    RoleArn: IamRoleArn;
  }
  export type Double = number;
  export interface DropAction {
  }
  export type EmailAddress = string;
  export type EmailReceivedHeadersList = String[];
  export type ErrorMessage = string;
  export interface ExportDestinationConfiguration {
    /**
     * Configuration for delivering to an Amazon S3 bucket.
     */
    S3?: S3ExportDestinationConfiguration;
  }
  export type ExportId = string;
  export type ExportMaxResults = number;
  export type ExportState = "QUEUED"|"PREPROCESSING"|"PROCESSING"|"COMPLETED"|"FAILED"|"CANCELLED"|string;
  export interface ExportStatus {
    /**
     * The timestamp of when the export job completed (if finished).
     */
    CompletionTimestamp?: Timestamp;
    /**
     * An error message if the export job failed.
     */
    ErrorMessage?: ErrorMessage;
    /**
     * The current state of the export job.
     */
    State?: ExportState;
    /**
     * The timestamp of when the export job was submitted.
     */
    SubmissionTimestamp?: Timestamp;
  }
  export interface ExportSummary {
    /**
     * The unique identifier of the export job.
     */
    ExportId?: ExportId;
    /**
     * The current status of the export job.
     */
    Status?: ExportStatus;
  }
  export type ExportSummaryList = ExportSummary[];
  export interface GetAddonInstanceRequest {
    /**
     * The Add On instance ID to retrieve information for.
     */
    AddonInstanceId: AddonInstanceId;
  }
  export interface GetAddonInstanceResponse {
    /**
     * The Amazon Resource Name (ARN) of the Add On instance.
     */
    AddonInstanceArn?: AddonInstanceArn;
    /**
     * The name of the Add On provider associated to the subscription of the instance.
     */
    AddonName?: AddonName;
    /**
     * The subscription ID associated to the instance.
     */
    AddonSubscriptionId?: AddonSubscriptionId;
    /**
     * The timestamp of when the Add On instance was created.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface GetAddonSubscriptionRequest {
    /**
     * The Add On subscription ID to retrieve information for.
     */
    AddonSubscriptionId: AddonSubscriptionId;
  }
  export interface GetAddonSubscriptionResponse {
    /**
     * The name of the Add On for the subscription.
     */
    AddonName?: AddonName;
    /**
     * Amazon Resource Name (ARN) for the subscription.
     */
    AddonSubscriptionArn?: AddonSubscriptionArn;
    /**
     * The timestamp of when the Add On subscription was created.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface GetArchiveExportRequest {
    /**
     * The identifier of the export job to get details for.
     */
    ExportId: ExportId;
  }
  export interface GetArchiveExportResponse {
    /**
     * The identifier of the archive the email export was performed from.
     */
    ArchiveId?: ArchiveId;
    /**
     * Where the exported emails are being delivered.
     */
    ExportDestinationConfiguration?: ExportDestinationConfiguration;
    /**
     * The criteria used to filter emails included in the export.
     */
    Filters?: ArchiveFilters;
    /**
     * The start of the timestamp range the exported emails cover.
     */
    FromTimestamp?: Timestamp;
    /**
     * The maximum number of email items included in the export.
     */
    MaxResults?: ExportMaxResults;
    /**
     * The current status of the export job.
     */
    Status?: ExportStatus;
    /**
     * The end of the date range the exported emails cover.
     */
    ToTimestamp?: Timestamp;
  }
  export interface GetArchiveMessageContentRequest {
    /**
     * The unique identifier of the archived email message.
     */
    ArchivedMessageId: ArchivedMessageId;
  }
  export interface GetArchiveMessageContentResponse {
    /**
     * The textual body content of the email message.
     */
    Body?: MessageBody;
  }
  export interface GetArchiveMessageRequest {
    /**
     * The unique identifier of the archived email message.
     */
    ArchivedMessageId: ArchivedMessageId;
  }
  export interface GetArchiveMessageResponse {
    /**
     * A pre-signed URL to temporarily download the full message content.
     */
    MessageDownloadLink?: S3PresignedURL;
  }
  export interface GetArchiveRequest {
    /**
     * The identifier of the archive to retrieve.
     */
    ArchiveId: ArchiveIdString;
  }
  export interface GetArchiveResponse {
    /**
     * The Amazon Resource Name (ARN) of the archive.
     */
    ArchiveArn: ArchiveArn;
    /**
     * The unique identifier of the archive.
     */
    ArchiveId: ArchiveIdString;
    /**
     * The unique name assigned to the archive.
     */
    ArchiveName: ArchiveNameString;
    /**
     * The current state of the archive:    ACTIVE – The archive is ready and available for use.     PENDING_DELETION – The archive has been marked for deletion and will be permanently deleted in 30 days. No further modifications can be made in this state.   
     */
    ArchiveState: ArchiveState;
    /**
     * The timestamp of when the archive was created.
     */
    CreatedTimestamp?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the KMS key used to encrypt the archive.
     */
    KmsKeyArn?: KmsKeyArn;
    /**
     * The timestamp of when the archive was modified.
     */
    LastUpdatedTimestamp?: Timestamp;
    /**
     * The retention period for emails in this archive.
     */
    Retention: ArchiveRetention;
  }
  export interface GetArchiveSearchRequest {
    /**
     * The identifier of the search job to get details for.
     */
    SearchId: SearchId;
  }
  export interface GetArchiveSearchResponse {
    /**
     * The identifier of the archive the email search was performed in.
     */
    ArchiveId?: ArchiveId;
    /**
     * The criteria used to filter emails included in the search.
     */
    Filters?: ArchiveFilters;
    /**
     * The start timestamp of the range the searched emails cover.
     */
    FromTimestamp?: Timestamp;
    /**
     * The maximum number of search results to return.
     */
    MaxResults?: SearchMaxResults;
    /**
     * The current status of the search job.
     */
    Status?: SearchStatus;
    /**
     * The end timestamp of the range the searched emails cover.
     */
    ToTimestamp?: Timestamp;
  }
  export interface GetArchiveSearchResultsRequest {
    /**
     * The identifier of the completed search job.
     */
    SearchId: SearchId;
  }
  export interface GetArchiveSearchResultsResponse {
    /**
     * The list of email result objects matching the search criteria.
     */
    Rows?: RowsList;
  }
  export interface GetIngressPointRequest {
    /**
     * The identifier of an ingress endpoint.
     */
    IngressPointId: IngressPointId;
  }
  export interface GetIngressPointResponse {
    /**
     *  The DNS A Record that identifies your ingress endpoint. Configure your DNS Mail Exchange (MX) record with this value to route emails to Mail Manager. 
     */
    ARecord?: IngressPointARecord;
    /**
     * The timestamp of when the ingress endpoint was created.
     */
    CreatedTimestamp?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the ingress endpoint resource.
     */
    IngressPointArn?: IngressPointArn;
    /**
     * The authentication configuration of the ingress endpoint resource.
     */
    IngressPointAuthConfiguration?: IngressPointAuthConfiguration;
    /**
     * The identifier of an ingress endpoint resource.
     */
    IngressPointId: IngressPointId;
    /**
     * A user friendly name for the ingress endpoint.
     */
    IngressPointName: IngressPointName;
    /**
     * The timestamp of when the ingress endpoint was last updated.
     */
    LastUpdatedTimestamp?: Timestamp;
    /**
     * The identifier of a rule set resource associated with the ingress endpoint.
     */
    RuleSetId?: RuleSetId;
    /**
     * The status of the ingress endpoint resource.
     */
    Status?: IngressPointStatus;
    /**
     * The identifier of the traffic policy resource associated with the ingress endpoint.
     */
    TrafficPolicyId?: TrafficPolicyId;
    /**
     * The type of ingress endpoint.
     */
    Type?: IngressPointType;
  }
  export interface GetRelayRequest {
    /**
     * A unique relay identifier.
     */
    RelayId: RelayId;
  }
  export interface GetRelayResponse {
    /**
     * The authentication attribute—contains the secret ARN where the customer relay server credentials are stored. 
     */
    Authentication?: RelayAuthentication;
    /**
     * The timestamp of when the relay was created.
     */
    CreatedTimestamp?: Timestamp;
    /**
     * The timestamp of when relay was last updated.
     */
    LastModifiedTimestamp?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the relay.
     */
    RelayArn?: RelayArn;
    /**
     * The unique relay identifier.
     */
    RelayId: RelayId;
    /**
     * The unique name of the relay.
     */
    RelayName?: RelayName;
    /**
     * The destination relay server address.
     */
    ServerName?: RelayServerName;
    /**
     * The destination relay server port.
     */
    ServerPort?: RelayServerPort;
  }
  export interface GetRuleSetRequest {
    /**
     * The identifier of an existing rule set to be retrieved.
     */
    RuleSetId: RuleSetId;
  }
  export interface GetRuleSetResponse {
    /**
     * The date of when then rule set was created.
     */
    CreatedDate: Timestamp;
    /**
     * The date of when the rule set was last modified.
     */
    LastModificationDate: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the rule set resource.
     */
    RuleSetArn: RuleSetArn;
    /**
     * The identifier of the rule set resource.
     */
    RuleSetId: RuleSetId;
    /**
     * A user-friendly name for the rule set resource.
     */
    RuleSetName: RuleSetName;
    /**
     * The rules contained in the rule set.
     */
    Rules: Rules;
  }
  export interface GetTrafficPolicyRequest {
    /**
     * The identifier of the traffic policy resource.
     */
    TrafficPolicyId: TrafficPolicyId;
  }
  export interface GetTrafficPolicyResponse {
    /**
     * The timestamp of when the traffic policy was created.
     */
    CreatedTimestamp?: Timestamp;
    /**
     * The default action of the traffic policy.
     */
    DefaultAction?: AcceptAction;
    /**
     * The timestamp of when the traffic policy was last updated.
     */
    LastUpdatedTimestamp?: Timestamp;
    /**
     * The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.
     */
    MaxMessageSizeBytes?: MaxMessageSizeBytes;
    /**
     * The list of conditions which are in the traffic policy resource.
     */
    PolicyStatements?: PolicyStatementList;
    /**
     * The Amazon Resource Name (ARN) of the traffic policy resource.
     */
    TrafficPolicyArn?: TrafficPolicyArn;
    /**
     * The identifier of the traffic policy resource.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * A user-friendly name for the traffic policy resource.
     */
    TrafficPolicyName: TrafficPolicyName;
  }
  export type HeaderName = string;
  export type HeaderValue = string;
  export type IamRoleArn = string;
  export type IdOrArn = string;
  export type IdempotencyToken = string;
  export interface IngressAnalysis {
    /**
     * The Amazon Resource Name (ARN) of an Add On.
     */
    Analyzer: AnalyzerArn;
    /**
     * The returned value from an Add On.
     */
    ResultField: ResultField;
  }
  export interface IngressBooleanExpression {
    /**
     * The operand on which to perform a boolean condition operation.
     */
    Evaluate: IngressBooleanToEvaluate;
    /**
     * The matching operator for a boolean condition expression.
     */
    Operator: IngressBooleanOperator;
  }
  export type IngressBooleanOperator = "IS_TRUE"|"IS_FALSE"|string;
  export interface IngressBooleanToEvaluate {
    /**
     * The structure type for a boolean condition stating the Add On ARN and its returned value.
     */
    Analysis?: IngressAnalysis;
  }
  export type IngressIpOperator = "CIDR_MATCHES"|"NOT_CIDR_MATCHES"|string;
  export interface IngressIpToEvaluate {
    /**
     * An enum type representing the allowed attribute types for an IP condition.
     */
    Attribute?: IngressIpv4Attribute;
  }
  export type IngressIpv4Attribute = "SENDER_IP"|string;
  export interface IngressIpv4Expression {
    /**
     * The left hand side argument of an IP condition expression.
     */
    Evaluate: IngressIpToEvaluate;
    /**
     * The matching operator for an IP condition expression.
     */
    Operator: IngressIpOperator;
    /**
     * The right hand side argument of an IP condition expression.
     */
    Values: Ipv4Cidrs;
  }
  export interface IngressPoint {
    /**
     *  The DNS A Record that identifies your ingress endpoint. Configure your DNS Mail Exchange (MX) record with this value to route emails to Mail Manager. 
     */
    ARecord?: IngressPointARecord;
    /**
     * The identifier of the ingress endpoint resource.
     */
    IngressPointId: IngressPointId;
    /**
     * A user friendly name for the ingress endpoint resource.
     */
    IngressPointName: IngressPointName;
    /**
     * The status of the ingress endpoint resource.
     */
    Status: IngressPointStatus;
    /**
     * The type of ingress endpoint resource.
     */
    Type: IngressPointType;
  }
  export type IngressPointARecord = string;
  export type IngressPointArn = string;
  export interface IngressPointAuthConfiguration {
    /**
     * The ingress endpoint password configuration for the ingress endpoint resource.
     */
    IngressPointPasswordConfiguration?: IngressPointPasswordConfiguration;
    /**
     * The ingress endpoint SecretsManager::Secret ARN configuration for the ingress endpoint resource.
     */
    SecretArn?: SecretArn;
  }
  export interface IngressPointConfiguration {
    /**
     * The SecretsManager::Secret ARN of the ingress endpoint resource.
     */
    SecretArn?: SecretArn;
    /**
     * The password of the ingress endpoint resource.
     */
    SmtpPassword?: SmtpPassword;
  }
  export type IngressPointId = string;
  export type IngressPointName = string;
  export interface IngressPointPasswordConfiguration {
    /**
     * The previous password expiry timestamp of the ingress endpoint resource.
     */
    PreviousSmtpPasswordExpiryTimestamp?: Timestamp;
    /**
     * The previous password version of the ingress endpoint resource.
     */
    PreviousSmtpPasswordVersion?: String;
    /**
     * The current password expiry timestamp of the ingress endpoint resource.
     */
    SmtpPasswordVersion?: String;
  }
  export type IngressPointStatus = "PROVISIONING"|"DEPROVISIONING"|"UPDATING"|"ACTIVE"|"CLOSED"|"FAILED"|string;
  export type IngressPointStatusToUpdate = "ACTIVE"|"CLOSED"|string;
  export type IngressPointType = "OPEN"|"AUTH"|string;
  export type IngressPointsList = IngressPoint[];
  export type IngressStringEmailAttribute = "RECIPIENT"|string;
  export interface IngressStringExpression {
    /**
     * The left hand side argument of a string condition expression.
     */
    Evaluate: IngressStringToEvaluate;
    /**
     * The matching operator for a string condition expression.
     */
    Operator: IngressStringOperator;
    /**
     * The right hand side argument of a string condition expression.
     */
    Values: StringList;
  }
  export type IngressStringOperator = "EQUALS"|"NOT_EQUALS"|"STARTS_WITH"|"ENDS_WITH"|"CONTAINS"|string;
  export interface IngressStringToEvaluate {
    /**
     * The enum type representing the allowed attribute types for a string condition.
     */
    Attribute?: IngressStringEmailAttribute;
  }
  export type IngressTlsAttribute = "TLS_PROTOCOL"|string;
  export type IngressTlsProtocolAttribute = "TLS1_2"|"TLS1_3"|string;
  export interface IngressTlsProtocolExpression {
    /**
     * The left hand side argument of a TLS condition expression.
     */
    Evaluate: IngressTlsProtocolToEvaluate;
    /**
     * The matching operator for a TLS condition expression.
     */
    Operator: IngressTlsProtocolOperator;
    /**
     * The right hand side argument of a TLS condition expression.
     */
    Value: IngressTlsProtocolAttribute;
  }
  export type IngressTlsProtocolOperator = "MINIMUM_TLS_VERSION"|"IS"|string;
  export interface IngressTlsProtocolToEvaluate {
    /**
     * The enum type representing the allowed attribute types for the TLS condition.
     */
    Attribute?: IngressTlsAttribute;
  }
  export type Integer = number;
  export type Ipv4Cidr = string;
  export type Ipv4Cidrs = Ipv4Cidr[];
  export type KmsKeyArn = string;
  export type KmsKeyId = string;
  export interface ListAddonInstancesRequest {
    /**
     * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of ingress endpoint resources that are returned per call. You can use NextToken to obtain further ingress endpoints. 
     */
    PageSize?: PageSize;
  }
  export interface ListAddonInstancesResponse {
    /**
     * The list of ingress endpoints.
     */
    AddonInstances?: AddonInstances;
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
     */
    NextToken?: PaginationToken;
  }
  export interface ListAddonSubscriptionsRequest {
    /**
     * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of ingress endpoint resources that are returned per call. You can use NextToken to obtain further ingress endpoints. 
     */
    PageSize?: PageSize;
  }
  export interface ListAddonSubscriptionsResponse {
    /**
     * The list of ingress endpoints.
     */
    AddonSubscriptions?: AddonSubscriptions;
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
     */
    NextToken?: PaginationToken;
  }
  export interface ListArchiveExportsRequest {
    /**
     * The identifier of the archive.
     */
    ArchiveId: ArchiveId;
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. 
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of archive export jobs that are returned per call. You can use NextToken to obtain further pages of archives. 
     */
    PageSize?: PageSize;
  }
  export interface ListArchiveExportsResponse {
    /**
     * The list of export job identifiers and statuses.
     */
    Exports?: ExportSummaryList;
    /**
     * If present, use to retrieve the next page of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListArchiveSearchesRequest {
    /**
     * The identifier of the archive.
     */
    ArchiveId: ArchiveId;
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. 
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of archive search jobs that are returned per call. You can use NextToken to obtain further pages of archives. 
     */
    PageSize?: PageSize;
  }
  export interface ListArchiveSearchesResponse {
    /**
     * If present, use to retrieve the next page of results.
     */
    NextToken?: PaginationToken;
    /**
     * The list of search job identifiers and statuses.
     */
    Searches?: SearchSummaryList;
  }
  export interface ListArchivesRequest {
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. 
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of archives that are returned per call. You can use NextToken to obtain further pages of archives. 
     */
    PageSize?: PageSize;
  }
  export interface ListArchivesResponse {
    /**
     * The list of archive details.
     */
    Archives: ArchivesList;
    /**
     * If present, use to retrieve the next page of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListIngressPointsRequest {
    /**
     * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of ingress endpoint resources that are returned per call. You can use NextToken to obtain further ingress endpoints.
     */
    PageSize?: PageSize;
  }
  export interface ListIngressPointsResponse {
    /**
     * The list of ingress endpoints.
     */
    IngressPoints?: IngressPointsList;
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
     */
    NextToken?: PaginationToken;
  }
  export interface ListRelaysRequest {
    /**
     * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
     */
    NextToken?: PaginationToken;
    /**
     * The number of relays to be returned in one request.
     */
    PageSize?: Integer;
  }
  export interface ListRelaysResponse {
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
     */
    NextToken?: PaginationToken;
    /**
     * The list of returned relays.
     */
    Relays: Relays;
  }
  export interface ListRuleSetsRequest {
    /**
     * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of rule set resources that are returned per call. You can use NextToken to obtain further rule sets.
     */
    PageSize?: PageSize;
  }
  export interface ListRuleSetsResponse {
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
     */
    NextToken?: PaginationToken;
    /**
     * The list of rule sets.
     */
    RuleSets: RuleSets;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to retrieve tags from.
     */
    ResourceArn: TaggableResourceArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags: TagList;
  }
  export interface ListTrafficPoliciesRequest {
    /**
     * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of traffic policy resources that are returned per call. You can use NextToken to obtain further traffic policies.
     */
    PageSize?: PageSize;
  }
  export interface ListTrafficPoliciesResponse {
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
     */
    NextToken?: PaginationToken;
    /**
     * The list of traffic policies.
     */
    TrafficPolicies?: TrafficPolicyList;
  }
  export type MailFrom = "REPLACE"|"PRESERVE"|string;
  export type MaxMessageSizeBytes = number;
  export interface MessageBody {
    /**
     * The HTML body content of the message.
     */
    Html?: String;
    /**
     * A flag indicating if the email was malformed.
     */
    MessageMalformed?: Boolean;
    /**
     * The plain text body content of the message.
     */
    Text?: String;
  }
  export type NameOrArn = string;
  export interface NoAuthentication {
  }
  export type PageSize = number;
  export type PaginationToken = string;
  export interface PolicyCondition {
    /**
     * This represents a boolean type condition matching on the incoming mail. It performs the boolean operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
     */
    BooleanExpression?: IngressBooleanExpression;
    /**
     * This represents an IP based condition matching on the incoming mail. It performs the operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
     */
    IpExpression?: IngressIpv4Expression;
    /**
     * This represents a string based condition matching on the incoming mail. It performs the string operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
     */
    StringExpression?: IngressStringExpression;
    /**
     * This represents a TLS based condition matching on the incoming mail. It performs the operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
     */
    TlsExpression?: IngressTlsProtocolExpression;
  }
  export type PolicyConditions = PolicyCondition[];
  export interface PolicyStatement {
    /**
     * The action that informs a traffic policy resource to either allow or block the email if it matches a condition in the policy statement.
     */
    Action: AcceptAction;
    /**
     * The list of conditions to apply to incoming messages for filtering email traffic.
     */
    Conditions: PolicyConditions;
  }
  export type PolicyStatementList = PolicyStatement[];
  export type Recipients = EmailAddress[];
  export interface Relay {
    /**
     * The timestamp of when the relay was last modified.
     */
    LastModifiedTimestamp?: Timestamp;
    /**
     * The unique relay identifier.
     */
    RelayId?: RelayId;
    /**
     * The unique relay name.
     */
    RelayName?: RelayName;
  }
  export interface RelayAction {
    /**
     * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the specified relay has been deleted.
     */
    ActionFailurePolicy?: ActionFailurePolicy;
    /**
     * This action specifies whether to preserve or replace original mail from address while relaying received emails to a destination server.
     */
    MailFrom?: MailFrom;
    /**
     * The identifier of the relay resource to be used when relaying an email.
     */
    Relay: IdOrArn;
  }
  export type RelayArn = string;
  export interface RelayAuthentication {
    /**
     * Keep an empty structure if the relay destination server does not require SMTP credential authentication.
     */
    NoAuthentication?: NoAuthentication;
    /**
     * The ARN of the secret created in secrets manager where the relay server's SMTP credentials are stored.
     */
    SecretArn?: SecretArn;
  }
  export type RelayId = string;
  export type RelayName = string;
  export type RelayServerName = string;
  export type RelayServerPort = number;
  export type Relays = Relay[];
  export interface ReplaceRecipientAction {
    /**
     * This action specifies the replacement recipient email addresses to insert.
     */
    ReplaceWith?: Recipients;
  }
  export type ResultField = string;
  export type RetentionPeriod = "THREE_MONTHS"|"SIX_MONTHS"|"NINE_MONTHS"|"ONE_YEAR"|"EIGHTEEN_MONTHS"|"TWO_YEARS"|"THIRTY_MONTHS"|"THREE_YEARS"|"FOUR_YEARS"|"FIVE_YEARS"|"SIX_YEARS"|"SEVEN_YEARS"|"EIGHT_YEARS"|"NINE_YEARS"|"TEN_YEARS"|"PERMANENT"|string;
  export interface Row {
    /**
     * The unique identifier of the archived message.
     */
    ArchivedMessageId?: ArchivedMessageId;
    /**
     * The email addresses in the CC header.
     */
    Cc?: String;
    /**
     * The date the email was sent.
     */
    Date?: String;
    /**
     * The email address of the sender.
     */
    From?: String;
    /**
     * A flag indicating if the email has attachments.
     */
    HasAttachments?: Boolean;
    /**
     * The email message ID this is a reply to.
     */
    InReplyTo?: String;
    /**
     * The unique message ID of the email.
     */
    MessageId?: String;
    /**
     * The received headers from the email delivery path.
     */
    ReceivedHeaders?: EmailReceivedHeadersList;
    /**
     * The timestamp of when the email was received.
     */
    ReceivedTimestamp?: Timestamp;
    /**
     * The subject header value of the email.
     */
    Subject?: String;
    /**
     * The email addresses in the To header.
     */
    To?: String;
    /**
     * The user agent that sent the email.
     */
    XMailer?: String;
    /**
     * The original user agent that sent the email.
     */
    XOriginalMailer?: String;
    /**
     * The priority level of the email.
     */
    XPriority?: String;
  }
  export type RowsList = Row[];
  export interface Rule {
    /**
     * The list of actions to execute when the conditions match the incoming email, and none of the "unless conditions" match.
     */
    Actions: RuleActions;
    /**
     * The conditions of this rule. All conditions must match the email for the actions to be executed. An empty list of conditions means that all emails match, but are still subject to any "unless conditions"
     */
    Conditions?: RuleConditions;
    /**
     * The user-friendly name of the rule.
     */
    Name?: RuleName;
    /**
     * The "unless conditions" of this rule. None of the conditions can match the email for the actions to be executed. If any of these conditions do match the email, then the actions are not executed.
     */
    Unless?: RuleConditions;
  }
  export interface RuleAction {
    /**
     * This action adds a header. This can be used to add arbitrary email headers.
     */
    AddHeader?: AddHeaderAction;
    /**
     * This action archives the email. This can be used to deliver an email to an archive.
     */
    Archive?: ArchiveAction;
    /**
     * This action delivers an email to a WorkMail mailbox.
     */
    DeliverToMailbox?: DeliverToMailboxAction;
    /**
     * This action terminates the evaluation of rules in the rule set.
     */
    Drop?: DropAction;
    /**
     * This action relays the email to another SMTP server.
     */
    Relay?: RelayAction;
    /**
     * The action replaces certain or all recipients with a different set of recipients.
     */
    ReplaceRecipient?: ReplaceRecipientAction;
    /**
     * This action sends the email to the internet.
     */
    Send?: SendAction;
    /**
     * This action writes the MIME content of the email to an S3 bucket.
     */
    WriteToS3?: S3Action;
  }
  export type RuleActions = RuleAction[];
  export type RuleBooleanEmailAttribute = "READ_RECEIPT_REQUESTED"|"TLS"|"TLS_WRAPPED"|string;
  export interface RuleBooleanExpression {
    /**
     * The operand on which to perform a boolean condition operation.
     */
    Evaluate: RuleBooleanToEvaluate;
    /**
     * The matching operator for a boolean condition expression.
     */
    Operator: RuleBooleanOperator;
  }
  export type RuleBooleanOperator = "IS_TRUE"|"IS_FALSE"|string;
  export interface RuleBooleanToEvaluate {
    /**
     * The boolean type representing the allowed attribute types for an email.
     */
    Attribute?: RuleBooleanEmailAttribute;
  }
  export interface RuleCondition {
    /**
     * The condition applies to a boolean expression passed in this field.
     */
    BooleanExpression?: RuleBooleanExpression;
    /**
     * The condition applies to a DMARC policy expression passed in this field.
     */
    DmarcExpression?: RuleDmarcExpression;
    /**
     * The condition applies to an IP address expression passed in this field.
     */
    IpExpression?: RuleIpExpression;
    /**
     * The condition applies to a number expression passed in this field.
     */
    NumberExpression?: RuleNumberExpression;
    /**
     * The condition applies to a string expression passed in this field.
     */
    StringExpression?: RuleStringExpression;
    /**
     * The condition applies to a verdict expression passed in this field.
     */
    VerdictExpression?: RuleVerdictExpression;
  }
  export type RuleConditions = RuleCondition[];
  export interface RuleDmarcExpression {
    /**
     * The operator to apply to the DMARC policy of the incoming email.
     */
    Operator: RuleDmarcOperator;
    /**
     * The values to use for the given DMARC policy operator. For the operator EQUALS, if multiple values are given, they are evaluated as an OR. That is, if any of the given values match, the condition is deemed to match. For the operator NOT_EQUALS, if multiple values are given, they are evaluated as an AND. That is, only if the email's DMARC policy is not equal to any of the given values, then the condition is deemed to match.
     */
    Values: RuleDmarcValueList;
  }
  export type RuleDmarcOperator = "EQUALS"|"NOT_EQUALS"|string;
  export type RuleDmarcPolicy = "NONE"|"QUARANTINE"|"REJECT"|string;
  export type RuleDmarcValueList = RuleDmarcPolicy[];
  export type RuleIpEmailAttribute = "SOURCE_IP"|string;
  export interface RuleIpExpression {
    /**
     * The IP address to evaluate in this condition.
     */
    Evaluate: RuleIpToEvaluate;
    /**
     * The operator to evaluate the IP address.
     */
    Operator: RuleIpOperator;
    /**
     * The IP CIDR blocks in format "x.y.z.w/n" (eg 10.0.0.0/8) to match with the email's IP address. For the operator CIDR_MATCHES, if multiple values are given, they are evaluated as an OR. That is, if the IP address is contained within any of the given CIDR ranges, the condition is deemed to match. For NOT_CIDR_MATCHES, if multiple CIDR ranges are given, the condition is deemed to match if the IP address is not contained in any of the given CIDR ranges.
     */
    Values: RuleIpValueList;
  }
  export type RuleIpOperator = "CIDR_MATCHES"|"NOT_CIDR_MATCHES"|string;
  export type RuleIpStringValue = string;
  export interface RuleIpToEvaluate {
    /**
     * The attribute of the email to evaluate.
     */
    Attribute?: RuleIpEmailAttribute;
  }
  export type RuleIpValueList = RuleIpStringValue[];
  export type RuleName = string;
  export type RuleNumberEmailAttribute = "MESSAGE_SIZE"|string;
  export interface RuleNumberExpression {
    /**
     * The number to evaluate in a numeric condition expression.
     */
    Evaluate: RuleNumberToEvaluate;
    /**
     * The operator for a numeric condition expression.
     */
    Operator: RuleNumberOperator;
    /**
     * The value to evaluate in a numeric condition expression.
     */
    Value: Double;
  }
  export type RuleNumberOperator = "EQUALS"|"NOT_EQUALS"|"LESS_THAN"|"GREATER_THAN"|"LESS_THAN_OR_EQUAL"|"GREATER_THAN_OR_EQUAL"|string;
  export interface RuleNumberToEvaluate {
    /**
     * An email attribute that is used as the number to evaluate.
     */
    Attribute?: RuleNumberEmailAttribute;
  }
  export interface RuleSet {
    /**
     * The last modification date of the rule set.
     */
    LastModificationDate?: Timestamp;
    /**
     * The identifier of the rule set.
     */
    RuleSetId?: RuleSetId;
    /**
     * A user-friendly name for the rule set.
     */
    RuleSetName?: RuleSetName;
  }
  export type RuleSetArn = string;
  export type RuleSetId = string;
  export type RuleSetName = string;
  export type RuleSets = RuleSet[];
  export type RuleStringEmailAttribute = "MAIL_FROM"|"HELO"|"RECIPIENT"|"SENDER"|"FROM"|"SUBJECT"|"TO"|"CC"|string;
  export interface RuleStringExpression {
    /**
     * The string to evaluate in a string condition expression.
     */
    Evaluate: RuleStringToEvaluate;
    /**
     * The matching operator for a string condition expression.
     */
    Operator: RuleStringOperator;
    /**
     * The string(s) to be evaluated in a string condition expression. For all operators, except for NOT_EQUALS, if multiple values are given, the values are processed as an OR. That is, if any of the values match the email's string using the given operator, the condition is deemed to match. However, for NOT_EQUALS, the condition is only deemed to match if none of the given strings match the email's string.
     */
    Values: RuleStringList;
  }
  export type RuleStringList = RuleStringValue[];
  export type RuleStringOperator = "EQUALS"|"NOT_EQUALS"|"STARTS_WITH"|"ENDS_WITH"|"CONTAINS"|string;
  export interface RuleStringToEvaluate {
    /**
     * The email attribute to evaluate in a string condition expression.
     */
    Attribute?: RuleStringEmailAttribute;
  }
  export type RuleStringValue = string;
  export type RuleVerdict = "PASS"|"FAIL"|"GRAY"|"PROCESSING_FAILED"|string;
  export type RuleVerdictAttribute = "SPF"|"DKIM"|string;
  export interface RuleVerdictExpression {
    /**
     * The verdict to evaluate in a verdict condition expression.
     */
    Evaluate: RuleVerdictToEvaluate;
    /**
     * The matching operator for a verdict condition expression.
     */
    Operator: RuleVerdictOperator;
    /**
     * The values to match with the email's verdict using the given operator. For the EQUALS operator, if multiple values are given, the condition is deemed to match if any of the given verdicts match that of the email. For the NOT_EQUALS operator, if multiple values are given, the condition is deemed to match of none of the given verdicts match the verdict of the email.
     */
    Values: RuleVerdictValueList;
  }
  export type RuleVerdictOperator = "EQUALS"|"NOT_EQUALS"|string;
  export interface RuleVerdictToEvaluate {
    /**
     * The Add On ARN and its returned value to evaluate in a verdict condition expression.
     */
    Analysis?: Analysis;
    /**
     * The email verdict attribute to evaluate in a string verdict expression.
     */
    Attribute?: RuleVerdictAttribute;
  }
  export type RuleVerdictValueList = RuleVerdict[];
  export type Rules = Rule[];
  export interface S3Action {
    /**
     * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the specified the bucket has been deleted.
     */
    ActionFailurePolicy?: ActionFailurePolicy;
    /**
     * The Amazon Resource Name (ARN) of the IAM Role to use while writing to S3. This role must have access to the s3:PutObject, kms:Encrypt, and kms:GenerateDataKey APIs for the given bucket.
     */
    RoleArn: IamRoleArn;
    /**
     * The bucket name of the S3 bucket to write to.
     */
    S3Bucket: S3Bucket;
    /**
     * The S3 prefix to use for the write to the s3 bucket.
     */
    S3Prefix?: S3Prefix;
    /**
     * The KMS Key ID to use to encrypt the message in S3.
     */
    S3SseKmsKeyId?: KmsKeyId;
  }
  export type S3Bucket = string;
  export interface S3ExportDestinationConfiguration {
    /**
     * The S3 location to deliver the exported email data.
     */
    S3Location?: S3Location;
  }
  export type S3Location = string;
  export type S3Prefix = string;
  export type S3PresignedURL = string;
  export type SearchId = string;
  export type SearchMaxResults = number;
  export type SearchState = "QUEUED"|"RUNNING"|"COMPLETED"|"FAILED"|"CANCELLED"|string;
  export interface SearchStatus {
    /**
     * The timestamp of when the search completed (if finished).
     */
    CompletionTimestamp?: Timestamp;
    /**
     * An error message if the search failed.
     */
    ErrorMessage?: ErrorMessage;
    /**
     * The current state of the search job.
     */
    State?: SearchState;
    /**
     * The timestamp of when the search was submitted.
     */
    SubmissionTimestamp?: Timestamp;
  }
  export interface SearchSummary {
    /**
     * The unique identifier of the search job.
     */
    SearchId?: SearchId;
    /**
     * The current status of the search job.
     */
    Status?: SearchStatus;
  }
  export type SearchSummaryList = SearchSummary[];
  export type SecretArn = string;
  export interface SendAction {
    /**
     * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the caller does not have the permissions to call the sendRawEmail API.
     */
    ActionFailurePolicy?: ActionFailurePolicy;
    /**
     * The Amazon Resource Name (ARN) of the role to use for this action. This role must have access to the ses:SendRawEmail API.
     */
    RoleArn: IamRoleArn;
  }
  export type SmtpPassword = string;
  export interface StartArchiveExportRequest {
    /**
     * The identifier of the archive to export emails from.
     */
    ArchiveId: ArchiveId;
    /**
     * Details on where to deliver the exported email data.
     */
    ExportDestinationConfiguration: ExportDestinationConfiguration;
    /**
     * Criteria to filter which emails are included in the export.
     */
    Filters?: ArchiveFilters;
    /**
     * The start of the timestamp range to include emails from.
     */
    FromTimestamp: Timestamp;
    /**
     * The maximum number of email items to include in the export.
     */
    MaxResults?: ExportMaxResults;
    /**
     * The end of the timestamp range to include emails from.
     */
    ToTimestamp: Timestamp;
  }
  export interface StartArchiveExportResponse {
    /**
     * The unique identifier for the initiated export job.
     */
    ExportId?: ExportId;
  }
  export interface StartArchiveSearchRequest {
    /**
     * The identifier of the archive to search emails in.
     */
    ArchiveId: ArchiveId;
    /**
     * Criteria to filter which emails are included in the search results.
     */
    Filters?: ArchiveFilters;
    /**
     * The start timestamp of the range to search emails from.
     */
    FromTimestamp: Timestamp;
    /**
     * The maximum number of search results to return.
     */
    MaxResults: SearchMaxResults;
    /**
     * The end timestamp of the range to search emails from.
     */
    ToTimestamp: Timestamp;
  }
  export interface StartArchiveSearchResponse {
    /**
     * The unique identifier for the initiated search job.
     */
    SearchId?: SearchId;
  }
  export interface StopArchiveExportRequest {
    /**
     * The identifier of the export job to stop.
     */
    ExportId: ExportId;
  }
  export interface StopArchiveExportResponse {
  }
  export interface StopArchiveSearchRequest {
    /**
     * The identifier of the search job to stop.
     */
    SearchId: SearchId;
  }
  export interface StopArchiveSearchResponse {
  }
  export type String = string;
  export type StringList = String[];
  export type StringValueList = String[];
  export interface Tag {
    /**
     * The key of the key-value tag.
     */
    Key: TagKey;
    /**
     * The value of the key-value tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) of the resource that you want to tag. 
     */
    ResourceArn: TaggableResourceArn;
    /**
     *  The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. 
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TaggableResourceArn = string;
  export type Timestamp = Date;
  export interface TrafficPolicy {
    /**
     * Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements
     */
    DefaultAction: AcceptAction;
    /**
     * The identifier of the traffic policy resource.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * A user-friendly name of the traffic policy resource.
     */
    TrafficPolicyName: TrafficPolicyName;
  }
  export type TrafficPolicyArn = string;
  export type TrafficPolicyId = string;
  export type TrafficPolicyList = TrafficPolicy[];
  export type TrafficPolicyName = string;
  export interface UntagResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) of the resource that you want to untag. 
     */
    ResourceArn: TaggableResourceArn;
    /**
     *  The keys of the key-value pairs for the tag or tags you want to remove from the specified resource. 
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateArchiveRequest {
    /**
     * The identifier of the archive to update.
     */
    ArchiveId: ArchiveIdString;
    /**
     * A new, unique name for the archive.
     */
    ArchiveName?: ArchiveNameString;
    /**
     * A new retention period for emails in the archive.
     */
    Retention?: ArchiveRetention;
  }
  export interface UpdateArchiveResponse {
  }
  export interface UpdateIngressPointRequest {
    /**
     * If you choose an Authenticated ingress endpoint, you must configure either an SMTP password or a secret ARN.
     */
    IngressPointConfiguration?: IngressPointConfiguration;
    /**
     * The identifier for the ingress endpoint you want to update.
     */
    IngressPointId: IngressPointId;
    /**
     * A user friendly name for the ingress endpoint resource.
     */
    IngressPointName?: IngressPointName;
    /**
     * The identifier of an existing rule set that you attach to an ingress endpoint resource.
     */
    RuleSetId?: RuleSetId;
    /**
     * The update status of an ingress endpoint.
     */
    StatusToUpdate?: IngressPointStatusToUpdate;
    /**
     * The identifier of an existing traffic policy that you attach to an ingress endpoint resource.
     */
    TrafficPolicyId?: TrafficPolicyId;
  }
  export interface UpdateIngressPointResponse {
  }
  export interface UpdateRelayRequest {
    /**
     * Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored.
     */
    Authentication?: RelayAuthentication;
    /**
     * The unique relay identifier.
     */
    RelayId: RelayId;
    /**
     * The name of the relay resource.
     */
    RelayName?: RelayName;
    /**
     * The destination relay server address.
     */
    ServerName?: RelayServerName;
    /**
     * The destination relay server port.
     */
    ServerPort?: RelayServerPort;
  }
  export interface UpdateRelayResponse {
  }
  export interface UpdateRuleSetRequest {
    /**
     * The identifier of a rule set you want to update.
     */
    RuleSetId: RuleSetId;
    /**
     * A user-friendly name for the rule set resource.
     */
    RuleSetName?: RuleSetName;
    /**
     * A new set of rules to replace the current rules of the rule set—these rules will override all the rules of the rule set.
     */
    Rules?: Rules;
  }
  export interface UpdateRuleSetResponse {
  }
  export interface UpdateTrafficPolicyRequest {
    /**
     * Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements
     */
    DefaultAction?: AcceptAction;
    /**
     * The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.
     */
    MaxMessageSizeBytes?: MaxMessageSizeBytes;
    /**
     * The list of conditions to be updated for filtering email traffic.
     */
    PolicyStatements?: PolicyStatementList;
    /**
     * The identifier of the traffic policy that you want to update.
     */
    TrafficPolicyId: TrafficPolicyId;
    /**
     * A user-friendly name for the traffic policy resource.
     */
    TrafficPolicyName?: TrafficPolicyName;
  }
  export interface UpdateTrafficPolicyResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-10-17"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MailManager client.
   */
  export import Types = MailManager;
}
export = MailManager;
