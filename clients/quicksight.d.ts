import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class QuickSight extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: QuickSight.Types.ClientConfiguration)
  config: Config & QuickSight.Types.ClientConfiguration;
  /**
   * Creates an Amazon QuickSight group. The permissions resource is arn:aws:quicksight:us-east-1:&lt;relevant-aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a group object.  CLI Sample:   aws quicksight create-group --aws-account-id=111122223333 --namespace=default --group-name="Sales-Management" --description="Sales Management - Forecasting"  
   */
  createGroup(params: QuickSight.Types.CreateGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateGroupResponse) => void): Request<QuickSight.Types.CreateGroupResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight group. The permissions resource is arn:aws:quicksight:us-east-1:&lt;relevant-aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a group object.  CLI Sample:   aws quicksight create-group --aws-account-id=111122223333 --namespace=default --group-name="Sales-Management" --description="Sales Management - Forecasting"  
   */
  createGroup(callback?: (err: AWSError, data: QuickSight.Types.CreateGroupResponse) => void): Request<QuickSight.Types.CreateGroupResponse, AWSError>;
  /**
   * Adds an Amazon QuickSight user to an Amazon QuickSight group.  The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/&lt;group-name&gt; . The condition resource is the user name. The condition key is quicksight:UserName. The response is the group member object.  CLI Sample:   aws quicksight create-group-membership --aws-account-id=111122223333 --namespace=default --group-name=Sales --member-name=Pat  
   */
  createGroupMembership(params: QuickSight.Types.CreateGroupMembershipRequest, callback?: (err: AWSError, data: QuickSight.Types.CreateGroupMembershipResponse) => void): Request<QuickSight.Types.CreateGroupMembershipResponse, AWSError>;
  /**
   * Adds an Amazon QuickSight user to an Amazon QuickSight group.  The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/&lt;group-name&gt; . The condition resource is the user name. The condition key is quicksight:UserName. The response is the group member object.  CLI Sample:   aws quicksight create-group-membership --aws-account-id=111122223333 --namespace=default --group-name=Sales --member-name=Pat  
   */
  createGroupMembership(callback?: (err: AWSError, data: QuickSight.Types.CreateGroupMembershipResponse) => void): Request<QuickSight.Types.CreateGroupMembershipResponse, AWSError>;
  /**
   * Removes a user group from Amazon QuickSight.  The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/&lt;group-name&gt; .  CLI Sample:   aws quicksight delete-group -\-aws-account-id=111122223333 -\-namespace=default -\-group-name=Sales-Management  
   */
  deleteGroup(params: QuickSight.Types.DeleteGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupResponse) => void): Request<QuickSight.Types.DeleteGroupResponse, AWSError>;
  /**
   * Removes a user group from Amazon QuickSight.  The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/&lt;group-name&gt; .  CLI Sample:   aws quicksight delete-group -\-aws-account-id=111122223333 -\-namespace=default -\-group-name=Sales-Management  
   */
  deleteGroup(callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupResponse) => void): Request<QuickSight.Types.DeleteGroupResponse, AWSError>;
  /**
   * Removes a user from a group so that the user is no longer a member of the group. The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/&lt;group-name&gt; . The condition resource is the user name. The condition key is quicksight:UserName.  CLI Sample:   aws quicksight delete-group-membership --aws-account-id=111122223333 --namespace=default --group-name=Sales-Management --member-name=Charlie  
   */
  deleteGroupMembership(params: QuickSight.Types.DeleteGroupMembershipRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupMembershipResponse) => void): Request<QuickSight.Types.DeleteGroupMembershipResponse, AWSError>;
  /**
   * Removes a user from a group so that the user is no longer a member of the group. The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/&lt;group-name&gt; . The condition resource is the user name. The condition key is quicksight:UserName.  CLI Sample:   aws quicksight delete-group-membership --aws-account-id=111122223333 --namespace=default --group-name=Sales-Management --member-name=Charlie  
   */
  deleteGroupMembership(callback?: (err: AWSError, data: QuickSight.Types.DeleteGroupMembershipResponse) => void): Request<QuickSight.Types.DeleteGroupMembershipResponse, AWSError>;
  /**
   * Deletes the Amazon QuickSight user that is associated with the identity of the AWS Identity and Access Management (IAM) user or role that's making the call. The IAM user isn't deleted as a result of this call.  The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/&lt;user-name&gt;  .  CLI Sample:   aws quicksight delete-user --aws-account-id=111122223333 --namespace=default --user-name=Pat  
   */
  deleteUser(params: QuickSight.Types.DeleteUserRequest, callback?: (err: AWSError, data: QuickSight.Types.DeleteUserResponse) => void): Request<QuickSight.Types.DeleteUserResponse, AWSError>;
  /**
   * Deletes the Amazon QuickSight user that is associated with the identity of the AWS Identity and Access Management (IAM) user or role that's making the call. The IAM user isn't deleted as a result of this call.  The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/&lt;user-name&gt;  .  CLI Sample:   aws quicksight delete-user --aws-account-id=111122223333 --namespace=default --user-name=Pat  
   */
  deleteUser(callback?: (err: AWSError, data: QuickSight.Types.DeleteUserResponse) => void): Request<QuickSight.Types.DeleteUserResponse, AWSError>;
  /**
   * Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN).  The permissions resource is arn:aws:quicksight:us-east-1:&lt;relevant-aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is the group object.   CLI Sample:   aws quicksight describe-group -\-aws-account-id=11112222333 -\-namespace=default -\-group-name=Sales  
   */
  describeGroup(params: QuickSight.Types.DescribeGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeGroupResponse) => void): Request<QuickSight.Types.DescribeGroupResponse, AWSError>;
  /**
   * Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN).  The permissions resource is arn:aws:quicksight:us-east-1:&lt;relevant-aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is the group object.   CLI Sample:   aws quicksight describe-group -\-aws-account-id=11112222333 -\-namespace=default -\-group-name=Sales  
   */
  describeGroup(callback?: (err: AWSError, data: QuickSight.Types.DescribeGroupResponse) => void): Request<QuickSight.Types.DescribeGroupResponse, AWSError>;
  /**
   * Returns information about a user, given the user name.  The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/&lt;user-name&gt; .  The response is a user object that contains the user's Amazon Resource Name (ARN), AWS Identity and Access Management (IAM) role, and email address.   CLI Sample:   aws quicksight describe-user --aws-account-id=111122223333 --namespace=default --user-name=Pat  
   */
  describeUser(params: QuickSight.Types.DescribeUserRequest, callback?: (err: AWSError, data: QuickSight.Types.DescribeUserResponse) => void): Request<QuickSight.Types.DescribeUserResponse, AWSError>;
  /**
   * Returns information about a user, given the user name.  The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/&lt;user-name&gt; .  The response is a user object that contains the user's Amazon Resource Name (ARN), AWS Identity and Access Management (IAM) role, and email address.   CLI Sample:   aws quicksight describe-user --aws-account-id=111122223333 --namespace=default --user-name=Pat  
   */
  describeUser(callback?: (err: AWSError, data: QuickSight.Types.DescribeUserResponse) => void): Request<QuickSight.Types.DescribeUserResponse, AWSError>;
  /**
   * Generates a server-side embeddable URL and authorization code. Before this can work properly, first you need to configure the dashboards and user permissions. For more information, see  Embedding Amazon QuickSight Dashboards. Currently, you can use GetDashboardEmbedURL only from the server, not from the user’s browser.  CLI Sample:  Assume the role with permissions enabled for actions: quickSight:RegisterUser and quicksight:GetDashboardEmbedURL. You can use assume-role, assume-role-with-web-identity, or assume-role-with-saml.   aws sts assume-role --role-arn "arn:aws:iam::111122223333:role/embedding_quicksight_dashboard_role" --role-session-name embeddingsession  If the user does not exist in QuickSight, register the user:  aws quicksight register-user --aws-account-id 111122223333 --namespace default --identity-type IAM --iam-arn "arn:aws:iam::111122223333:role/embedding_quicksight_dashboard_role" --user-role READER --session-name "embeddingsession" --email user123@example.com --region us-east-1  Get the URL for the embedded dashboard  aws quicksight get-dashboard-embed-url --aws-account-id 111122223333 --dashboard-id 1a1ac2b2-3fc3-4b44-5e5d-c6db6778df89 --identity-type IAM 
   */
  getDashboardEmbedUrl(params: QuickSight.Types.GetDashboardEmbedUrlRequest, callback?: (err: AWSError, data: QuickSight.Types.GetDashboardEmbedUrlResponse) => void): Request<QuickSight.Types.GetDashboardEmbedUrlResponse, AWSError>;
  /**
   * Generates a server-side embeddable URL and authorization code. Before this can work properly, first you need to configure the dashboards and user permissions. For more information, see  Embedding Amazon QuickSight Dashboards. Currently, you can use GetDashboardEmbedURL only from the server, not from the user’s browser.  CLI Sample:  Assume the role with permissions enabled for actions: quickSight:RegisterUser and quicksight:GetDashboardEmbedURL. You can use assume-role, assume-role-with-web-identity, or assume-role-with-saml.   aws sts assume-role --role-arn "arn:aws:iam::111122223333:role/embedding_quicksight_dashboard_role" --role-session-name embeddingsession  If the user does not exist in QuickSight, register the user:  aws quicksight register-user --aws-account-id 111122223333 --namespace default --identity-type IAM --iam-arn "arn:aws:iam::111122223333:role/embedding_quicksight_dashboard_role" --user-role READER --session-name "embeddingsession" --email user123@example.com --region us-east-1  Get the URL for the embedded dashboard  aws quicksight get-dashboard-embed-url --aws-account-id 111122223333 --dashboard-id 1a1ac2b2-3fc3-4b44-5e5d-c6db6778df89 --identity-type IAM 
   */
  getDashboardEmbedUrl(callback?: (err: AWSError, data: QuickSight.Types.GetDashboardEmbedUrlResponse) => void): Request<QuickSight.Types.GetDashboardEmbedUrlResponse, AWSError>;
  /**
   * Lists member users in a group. The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a list of group member objects.  CLI Sample:   aws quicksight list-group-memberships -\-aws-account-id=111122223333 -\-namespace=default  
   */
  listGroupMemberships(params: QuickSight.Types.ListGroupMembershipsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListGroupMembershipsResponse) => void): Request<QuickSight.Types.ListGroupMembershipsResponse, AWSError>;
  /**
   * Lists member users in a group. The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a list of group member objects.  CLI Sample:   aws quicksight list-group-memberships -\-aws-account-id=111122223333 -\-namespace=default  
   */
  listGroupMemberships(callback?: (err: AWSError, data: QuickSight.Types.ListGroupMembershipsResponse) => void): Request<QuickSight.Types.ListGroupMembershipsResponse, AWSError>;
  /**
   * Lists all user groups in Amazon QuickSight.  The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/*. The response is a list of group objects.   CLI Sample:   aws quicksight list-groups -\-aws-account-id=111122223333 -\-namespace=default  
   */
  listGroups(params: QuickSight.Types.ListGroupsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListGroupsResponse) => void): Request<QuickSight.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists all user groups in Amazon QuickSight.  The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/*. The response is a list of group objects.   CLI Sample:   aws quicksight list-groups -\-aws-account-id=111122223333 -\-namespace=default  
   */
  listGroups(callback?: (err: AWSError, data: QuickSight.Types.ListGroupsResponse) => void): Request<QuickSight.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of. The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/&lt;user-name&gt; .  The response is a one or more group objects.   CLI Sample:   aws quicksight list-user-groups -\-user-name=Pat -\-aws-account-id=111122223333 -\-namespace=default -\-region=us-east-1  
   */
  listUserGroups(params: QuickSight.Types.ListUserGroupsRequest, callback?: (err: AWSError, data: QuickSight.Types.ListUserGroupsResponse) => void): Request<QuickSight.Types.ListUserGroupsResponse, AWSError>;
  /**
   * Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of. The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/&lt;user-name&gt; .  The response is a one or more group objects.   CLI Sample:   aws quicksight list-user-groups -\-user-name=Pat -\-aws-account-id=111122223333 -\-namespace=default -\-region=us-east-1  
   */
  listUserGroups(callback?: (err: AWSError, data: QuickSight.Types.ListUserGroupsResponse) => void): Request<QuickSight.Types.ListUserGroupsResponse, AWSError>;
  /**
   * Returns a list of all of the Amazon QuickSight users belonging to this account.  The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/* . The response is a list of user objects, containing each user's Amazon Resource Name (ARN), AWS Identity and Access Management (IAM) role, and email address.   CLI Sample:   aws quicksight list-users --aws-account-id=111122223333 --namespace=default  
   */
  listUsers(params: QuickSight.Types.ListUsersRequest, callback?: (err: AWSError, data: QuickSight.Types.ListUsersResponse) => void): Request<QuickSight.Types.ListUsersResponse, AWSError>;
  /**
   * Returns a list of all of the Amazon QuickSight users belonging to this account.  The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/* . The response is a list of user objects, containing each user's Amazon Resource Name (ARN), AWS Identity and Access Management (IAM) role, and email address.   CLI Sample:   aws quicksight list-users --aws-account-id=111122223333 --namespace=default  
   */
  listUsers(callback?: (err: AWSError, data: QuickSight.Types.ListUsersResponse) => void): Request<QuickSight.Types.ListUsersResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity and Access Management (IAM) identity or role specified in the request.  The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/&lt;user-name&gt; . The condition resource is the Amazon Resource Name (ARN) for the IAM user or role, and the session name.  The condition keys are quicksight:IamArn and quicksight:SessionName.   CLI Sample:   aws quicksight register-user -\-aws-account-id=111122223333 -\-namespace=default -\-email=pat@example.com -\-identity-type=IAM -\-user-role=AUTHOR -\-iam-arn=arn:aws:iam::111122223333:user/Pat  
   */
  registerUser(params: QuickSight.Types.RegisterUserRequest, callback?: (err: AWSError, data: QuickSight.Types.RegisterUserResponse) => void): Request<QuickSight.Types.RegisterUserResponse, AWSError>;
  /**
   * Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity and Access Management (IAM) identity or role specified in the request.  The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/&lt;user-name&gt; . The condition resource is the Amazon Resource Name (ARN) for the IAM user or role, and the session name.  The condition keys are quicksight:IamArn and quicksight:SessionName.   CLI Sample:   aws quicksight register-user -\-aws-account-id=111122223333 -\-namespace=default -\-email=pat@example.com -\-identity-type=IAM -\-user-role=AUTHOR -\-iam-arn=arn:aws:iam::111122223333:user/Pat  
   */
  registerUser(callback?: (err: AWSError, data: QuickSight.Types.RegisterUserResponse) => void): Request<QuickSight.Types.RegisterUserResponse, AWSError>;
  /**
   * Changes a group description.  The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a group object.  CLI Sample:   aws quicksight update-group --aws-account-id=111122223333 --namespace=default --group-name=Sales --description="Sales BI Dashboards"  
   */
  updateGroup(params: QuickSight.Types.UpdateGroupRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateGroupResponse) => void): Request<QuickSight.Types.UpdateGroupResponse, AWSError>;
  /**
   * Changes a group description.  The permissions resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a group object.  CLI Sample:   aws quicksight update-group --aws-account-id=111122223333 --namespace=default --group-name=Sales --description="Sales BI Dashboards"  
   */
  updateGroup(callback?: (err: AWSError, data: QuickSight.Types.UpdateGroupResponse) => void): Request<QuickSight.Types.UpdateGroupResponse, AWSError>;
  /**
   * Updates an Amazon QuickSight user. The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/&lt;user-name&gt; .  The response is a user object that contains the user's Amazon QuickSight user name, email address, active or inactive status in Amazon QuickSight, Amazon QuickSight role, and Amazon Resource Name (ARN).   CLI Sample:   aws quicksight update-user --user-name=Pat --role=ADMIN --email=new_address@amazon.com --aws-account-id=111122223333 --namespace=default --region=us-east-1  
   */
  updateUser(params: QuickSight.Types.UpdateUserRequest, callback?: (err: AWSError, data: QuickSight.Types.UpdateUserResponse) => void): Request<QuickSight.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates an Amazon QuickSight user. The permission resource is arn:aws:quicksight:us-east-1:&lt;aws-account-id&gt;:user/default/&lt;user-name&gt; .  The response is a user object that contains the user's Amazon QuickSight user name, email address, active or inactive status in Amazon QuickSight, Amazon QuickSight role, and Amazon Resource Name (ARN).   CLI Sample:   aws quicksight update-user --user-name=Pat --role=ADMIN --email=new_address@amazon.com --aws-account-id=111122223333 --namespace=default --region=us-east-1  
   */
  updateUser(callback?: (err: AWSError, data: QuickSight.Types.UpdateUserResponse) => void): Request<QuickSight.Types.UpdateUserResponse, AWSError>;
}
declare namespace QuickSight {
  export type Arn = string;
  export type AwsAccountId = string;
  export type Boolean = boolean;
  export interface CreateGroupMembershipRequest {
    /**
     * The name of the user that you want to add to the group membership.
     */
    MemberName: GroupMemberName;
    /**
     * The name of the group that you want to add the user to.
     */
    GroupName: GroupName;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface CreateGroupMembershipResponse {
    /**
     * The group member.
     */
    GroupMember?: GroupMember;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export interface CreateGroupRequest {
    /**
     * A name for the group that you want to create.
     */
    GroupName: GroupName;
    /**
     * A description for the group that you want to create.
     */
    Description?: GroupDescription;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface CreateGroupResponse {
    /**
     * The name of the group.
     */
    Group?: Group;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteGroupMembershipRequest {
    /**
     * The name of the user that you want to delete from the group membership.
     */
    MemberName: GroupMemberName;
    /**
     * The name of the group that you want to delete the user from.
     */
    GroupName: GroupName;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DeleteGroupMembershipResponse {
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteGroupRequest {
    /**
     * The name of the group that you want to delete.
     */
    GroupName: GroupName;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DeleteGroupResponse {
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export interface DeleteUserRequest {
    /**
     * The name of the user that you want to delete.
     */
    UserName: UserName;
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DeleteUserResponse {
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeGroupRequest {
    /**
     * The name of the group that you want to describe.
     */
    GroupName: GroupName;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DescribeGroupResponse {
    /**
     * The name of the group.
     */
    Group?: Group;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export interface DescribeUserRequest {
    /**
     * The name of the user that you want to describe.
     */
    UserName: UserName;
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface DescribeUserResponse {
    /**
     * The user name.
     */
    User?: User;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export type EmbeddingUrl = string;
  export interface GetDashboardEmbedUrlRequest {
    /**
     * AWS account ID that contains the dashboard you are embedding.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The ID for the dashboard, also added to IAM policy
     */
    DashboardId: String;
    /**
     * The authentication method the user uses to sign in (IAM only).
     */
    IdentityType: IdentityType;
    /**
     * How many minutes the session is valid. The session lifetime must be between 15 and 600 minutes.
     */
    SessionLifetimeInMinutes?: SessionLifetimeInMinutes;
    /**
     * Remove the undo/redo button on embedded dashboard. The default is FALSE, which enables the undo/redo button.
     */
    UndoRedoDisabled?: boolean;
    /**
     * Remove the reset button on embedded dashboard. The default is FALSE, which allows the reset button.
     */
    ResetDisabled?: boolean;
  }
  export interface GetDashboardEmbedUrlResponse {
    /**
     * URL that you can put into your server-side webpage to embed your dashboard. This URL is valid for 5 minutes, and the resulting session is valid for 10 hours. The API provides the URL with an auth_code that enables a single-signon session. 
     */
    EmbedUrl?: EmbeddingUrl;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
  }
  export interface Group {
    /**
     * The Amazon Resource Name (ARN) for the group.
     */
    Arn?: Arn;
    /**
     * The name of the group.
     */
    GroupName?: GroupName;
    /**
     * The group description.
     */
    Description?: GroupDescription;
  }
  export type GroupDescription = string;
  export type GroupList = Group[];
  export interface GroupMember {
    /**
     * The Amazon Resource Name (ARN) for the group member (user).
     */
    Arn?: Arn;
    /**
     * The name of the group member (user).
     */
    MemberName?: GroupMemberName;
  }
  export type GroupMemberList = GroupMember[];
  export type GroupMemberName = string;
  export type GroupName = string;
  export type IdentityType = "IAM"|"QUICKSIGHT"|string;
  export interface ListGroupMembershipsRequest {
    /**
     * The name of the group that you want to see a membership list of.
     */
    GroupName: GroupName;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return from this request.
     */
    MaxResults?: MaxResults;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface ListGroupMembershipsResponse {
    /**
     * The list of the members of the group.
     */
    GroupMemberList?: GroupMemberList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListGroupsRequest {
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface ListGroupsResponse {
    /**
     * The list of the groups.
     */
    GroupList?: GroupList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListUserGroupsRequest {
    /**
     * The Amazon QuickSight user name that you want to list group memberships for.
     */
    UserName: UserName;
    /**
     * The AWS Account ID that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return from this request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListUserGroupsResponse {
    /**
     * The list of groups the user is a member of.
     */
    GroupList?: GroupList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The HTTP status of the request.
     */
    Status?: StatusCode;
  }
  export interface ListUsersRequest {
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return from this request.
     */
    MaxResults?: MaxResults;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface ListUsersResponse {
    /**
     * The list of users.
     */
    UserList?: UserList;
    /**
     * A pagination token that can be used in a subsequent request.
     */
    NextToken?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export type MaxResults = number;
  export type Namespace = string;
  export interface RegisterUserRequest {
    /**
     * Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts two values:    IAM: A user whose identity maps to an existing IAM user or role.     QUICKSIGHT: A user whose identity is owned and managed internally by Amazon QuickSight.   
     */
    IdentityType: IdentityType;
    /**
     * The email address of the user that you want to register.
     */
    Email: String;
    /**
     * The Amazon QuickSight role of the user. The user role can be one of the following:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, data sets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.  
     */
    UserRole: UserRole;
    /**
     * The ARN of the IAM user or role that you are registering with Amazon QuickSight. 
     */
    IamArn?: String;
    /**
     * The name of the session with the assumed IAM role. By using this parameter, you can register multiple users with the same IAM role, provided that each has a different session name. For more information on assuming IAM roles, see  assume-role  in the AWS CLI Reference. 
     */
    SessionName?: String;
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
    /**
     * The Amazon QuickSight user name that you want to create for the user you are registering.
     */
    UserName?: UserName;
  }
  export interface RegisterUserResponse {
    /**
     * The user name.
     */
    User?: User;
    /**
     * The URL the user visits to complete registration and provide a password. This is returned only for users with an identity type of QUICKSIGHT.
     */
    UserInvitationUrl?: String;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export type SessionLifetimeInMinutes = number;
  export type StatusCode = number;
  export type String = string;
  export interface UpdateGroupRequest {
    /**
     * The name of the group that you want to update.
     */
    GroupName: GroupName;
    /**
     * The description for the group that you want to update.
     */
    Description?: GroupDescription;
    /**
     * The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
  }
  export interface UpdateGroupResponse {
    /**
     * The name of the group.
     */
    Group?: Group;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export interface UpdateUserRequest {
    /**
     * The Amazon QuickSight user name that you want to update.
     */
    UserName: UserName;
    /**
     * The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
     */
    AwsAccountId: AwsAccountId;
    /**
     * The namespace. Currently, you should set this to default.
     */
    Namespace: Namespace;
    /**
     * The email address of the user that you want to update.
     */
    Email: String;
    /**
     * The Amazon QuickSight role of the user. The user role can be one of the following:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, data sets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.  
     */
    Role: UserRole;
  }
  export interface UpdateUserResponse {
    /**
     * The Amazon QuickSight user.
     */
    User?: User;
    /**
     * The AWS request ID for this operation.
     */
    RequestId?: String;
    /**
     * The http status of the request.
     */
    Status?: StatusCode;
  }
  export interface User {
    /**
     * The Amazon Resource Name (ARN) for the user.
     */
    Arn?: Arn;
    /**
     * The user's user name.
     */
    UserName?: UserName;
    /**
     * The user's email address.
     */
    Email?: String;
    /**
     * The Amazon QuickSight role for the user.
     */
    Role?: UserRole;
    /**
     * The type of identity authentication used by the user.
     */
    IdentityType?: IdentityType;
    /**
     * Active status of user. When you create an Amazon QuickSight user that’s not an IAM user or an AD user, that user is inactive until they sign in and provide a password
     */
    Active?: Boolean;
  }
  export type UserList = User[];
  export type UserName = string;
  export type UserRole = "ADMIN"|"AUTHOR"|"READER"|"RESTRICTED_AUTHOR"|"RESTRICTED_READER"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-04-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the QuickSight client.
   */
  export import Types = QuickSight;
}
export = QuickSight;
