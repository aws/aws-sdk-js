/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */


AWS = {};

/**
 * Constructs a service interface and a low-level {Client}.  Use the +client+
 * property to make API calls.  Each API operation is exposed as a function on
 * the +client+.
 *
 * === Sending a Request Using IAM
 *
 *   svc = new AWS.IAM();
 *   svc.client.OPERATION_NAME(params, function (err, data) {
 *     if (err) {
 *       console.log(err); // an error occurred
 *     } else {
 *       console.log(data); // successful response
 *     }
 *   });
 *
 * @!method constructor(options)
 *   Constructs a service interface.  The returned service will have a {client}
 *   property that provides access to the API operations.
 *   @option (see AWS.IAM.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.IAM.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.IAM.Client
 *
 */
AWS.IAM = inherit({})

/**
 * The low-level IAM client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method addRoleToInstanceProfile(params, callback)
 *   Calls the AddRoleToInstanceProfile API operation.
 *   @param params [Object]
 *     * +InstanceProfileName+ - (*required*, <tt>String</tt>) Name of
 *       the instance profile to update.
 *     * +RoleName+ - (*required*, <tt>String</tt>) Name of the role to
 *       add.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method addUserToGroup(params, callback)
 *   Calls the AddUserToGroup API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the group to
 *       update.
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user to
 *       add.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method changePassword(params, callback)
 *   Calls the ChangePassword API operation.
 *   @param params [Object]
 *     * +OldPassword+ - (*required*, <tt>String</tt>)
 *     * +NewPassword+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createAccessKey(params, callback)
 *   Calls the CreateAccessKey API operation.
 *   @param params [Object]
 *     * +UserName+ - (<tt>String</tt>) The user name that the new key
 *       will belong to.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AccessKey+ - (<tt>Object</tt>) Information about
 *         the access key.
 *         * +UserName+ - (<tt>String</tt>) Name of the user
 *           the key is associated with.
 *         * +AccessKeyId+ - (<tt>String</tt>) The ID for this
 *           access key.
 *         * +Status+ - (<tt>String</tt>) The status of the
 *           access key. Active means the key is valid for API calls, while
 *           Inactive means it is not.
 *         * +SecretAccessKey+ - (<tt>String</tt>) The secret
 *           key used to sign requests.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the access key
 *           was created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createAccountAlias(params, callback)
 *   Calls the CreateAccountAlias API operation.
 *   @param params [Object]
 *     * +AccountAlias+ - (*required*, <tt>String</tt>) Name of the
 *       account alias to create.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createGroup(params, callback)
 *   Calls the CreateGroup API operation.
 *   @param params [Object]
 *     * +Path+ - (<tt>String</tt>) The path to the group. For more
 *       information about paths, see Identifiers for IAM Entities in
 *       Using AWS Identity and Access Management. This parameter is
 *       optional. If it is not included, it defaults to a slash (/).
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the group to
 *       create. Do not include the path in this value.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Group+ - (<tt>Object</tt>) Information about the
 *         group.
 *         * +Path+ - (<tt>String</tt>) Path to the group. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +GroupName+ - (<tt>String</tt>) The name that
 *           identifies the group.
 *         * +GroupId+ - (<tt>String</tt>) The stable and
 *           unique string identifying the group. For more information
 *           about IDs, see Identifiers for IAM Entities in Using AWS
 *           Identity and Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the group. For more information about ARNs
 *           and how to use them in policies, see Identifiers for IAM
 *           Entities in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           group was created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createInstanceProfile(params, callback)
 *   Calls the CreateInstanceProfile API operation.
 *   @param params [Object]
 *     * +InstanceProfileName+ - (*required*, <tt>String</tt>) Name of
 *       the instance profile to create.
 *     * +Path+ - (<tt>String</tt>) The path to the instance profile. For
 *       more information about paths, see Identifiers for IAM Entities
 *       in Using AWS Identity and Access Management. This parameter is
 *       optional. If it is not included, it defaults to a slash (/).
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceProfile+ - (<tt>Object</tt>) Information
 *         about the instance profile.
 *         * +Path+ - (<tt>String</tt>) Path to the instance
 *           profile. For more information about paths, see Identifiers for
 *           IAM Entities in Using AWS Identity and Access Management.
 *         * +InstanceProfileName+ - (<tt>String</tt>) The name
 *           identifying the instance profile.
 *         * +InstanceProfileId+ - (<tt>String</tt>) The stable
 *           and unique string identifying the instance profile. For more
 *           information about IDs, see Identifiers for IAM Entities in
 *           Using AWS Identity and Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the instance profile. For more information
 *           about ARNs and how to use them in policies, see Identifiers
 *           for IAM Entities in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           instance profile was created.
 *         * +Roles+ - (<tt>Array<Object></tt>) The role
 *           associated with the instance profile.
 *           * +Path+ - (<tt>String</tt>) Path to the role. For
 *             more information about paths, see Identifiers for IAM
 *             Entities in Using AWS Identity and Access Management.
 *           * +RoleName+ - (<tt>String</tt>) The name
 *             identifying the role.
 *           * +RoleId+ - (<tt>String</tt>) The stable and
 *             unique string identifying the role. For more information
 *             about IDs, see Identifiers for IAM Entities in Using AWS
 *             Identity and Access Management.
 *           * +Arn+ - (<tt>String</tt>) The Amazon Resource
 *             Name (ARN) specifying the role. For more information about
 *             ARNs and how to use them in policies, see Identifiers for
 *             IAM Entities in Using AWS Identity and Access Management.
 *           * +CreateDate+ - (<tt>Date</tt>) The date when the
 *             role was created.
 *           * +AssumeRolePolicyDocument+ - (<tt>String</tt>) The policy
 *             that grants an entity permission to assume the role. The
 *             returned policy is URL-encoded according to RFC 3986. For
 *             more information about RFC 3986, go to
 *             http://www.faqs.org/rfcs/rfc3986.html.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createLoginProfile(params, callback)
 *   Calls the CreateLoginProfile API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user to
 *       create a password for.
 *     * +Password+ - (*required*, <tt>String</tt>) The new password for
 *       the user name.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +LoginProfile+ - (<tt>Object</tt>) The user name and
 *         password create date.
 *         * +UserName+ - (<tt>String</tt>) The name of the
 *           user, which can be used for signing into the AWS Management
 *           Console.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           password for the user was created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createRole(params, callback)
 *   Calls the CreateRole API operation.
 *   @param params [Object]
 *     * +Path+ - (<tt>String</tt>) The path to the role. For more
 *       information about paths, see Identifiers for IAM Entities in
 *       Using AWS Identity and Access Management. This parameter is
 *       optional. If it is not included, it defaults to a slash (/).
 *     * +RoleName+ - (*required*, <tt>String</tt>) Name of the role to
 *       create.
 *     * +AssumeRolePolicyDocument+ - (*required*, <tt>String</tt>) The
 *       policy that grants an entity permission to assume the role.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Role+ - (<tt>Object</tt>) Information about the
 *         role.
 *         * +Path+ - (<tt>String</tt>) Path to the role. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +RoleName+ - (<tt>String</tt>) The name
 *           identifying the role.
 *         * +RoleId+ - (<tt>String</tt>) The stable and unique
 *           string identifying the role. For more information about IDs,
 *           see Identifiers for IAM Entities in Using AWS Identity and
 *           Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the role. For more information about ARNs and
 *           how to use them in policies, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           role was created.
 *         * +AssumeRolePolicyDocument+ - (<tt>String</tt>) The policy that
 *           grants an entity permission to assume the role. The returned
 *           policy is URL-encoded according to RFC 3986. For more
 *           information about RFC 3986, go to
 *           http://www.faqs.org/rfcs/rfc3986.html.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createUser(params, callback)
 *   Calls the CreateUser API operation.
 *   @param params [Object]
 *     * +Path+ - (<tt>String</tt>) The path for the user name. For more
 *       information about paths, see Identifiers for IAM Entities in
 *       Using AWS Identity and Access Management. This parameter is
 *       optional. If it is not included, it defaults to a slash (/).
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user to
 *       create.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +User+ - (<tt>Object</tt>) Information about the user.
 *         * +Path+ - (<tt>String</tt>) Path to the user. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +UserName+ - (<tt>String</tt>) The name
 *           identifying the user.
 *         * +UserId+ - (<tt>String</tt>) The stable and unique
 *           string identifying the user. For more information about IDs,
 *           see Identifiers for IAM Entities in Using AWS Identity and
 *           Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the user. For more information about ARNs and
 *           how to use them in policies, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           user was created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createVirtualMFADevice(params, callback)
 *   Calls the CreateVirtualMFADevice API operation.
 *   @param params [Object]
 *     * +Path+ - (<tt>String</tt>) The path for the virtual MFA device.
 *       For more information about paths, see Identifiers for IAM
 *       Entities in Using AWS Identity and Access Management. This
 *       parameter is optional. If it is not included, it defaults to a
 *       slash (/).
 *     * +VirtualMFADeviceName+ - (*required*, <tt>String</tt>) The name
 *       of the virtual MFA device. Use with path to uniquely identify a
 *       virtual MFA device.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VirtualMFADevice+ - (<tt>Object</tt>) A newly
 *         created virtual MFA device.
 *         * +SerialNumber+ - (<tt>String</tt>) The serial
 *           number associated with VirtualMFADevice.
 *         * +Base32StringSeed+ - (<tt>Base64 Encoded Data</tt>) The Base32
 *           seed defined as specified in RFC3548. The Base32StringSeed is
 *           Base64-encoded.
 *         * +QRCodePNG+ - (<tt>Base64 Encoded Data</tt>) A QR code PNG
 *           image that encodes
 *           otpauth://totp/$virtualMFADeviceName@$AccountName?
 *           secret=$Base32String where $virtualMFADeviceName is one of the
 *           create call arguments, AccountName is the user name if set
 *           (accountId otherwise), and Base32String is the seed in Base32
 *           format. The Base32String is Base64-encoded.
 *         * +User+ - (<tt>Object</tt>)
 *           * +Path+ - (<tt>String</tt>) Path to the user. For
 *             more information about paths, see Identifiers for IAM
 *             Entities in Using AWS Identity and Access Management.
 *           * +UserName+ - (<tt>String</tt>) The name
 *             identifying the user.
 *           * +UserId+ - (<tt>String</tt>) The stable and
 *             unique string identifying the user. For more information
 *             about IDs, see Identifiers for IAM Entities in Using AWS
 *             Identity and Access Management.
 *           * +Arn+ - (<tt>String</tt>) The Amazon Resource
 *             Name (ARN) specifying the user. For more information about
 *             ARNs and how to use them in policies, see Identifiers for
 *             IAM Entities in Using AWS Identity and Access Management.
 *           * +CreateDate+ - (<tt>Date</tt>) The date when the
 *             user was created.
 *         * +EnableDate+ - (<tt>Date</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deactivateMFADevice(params, callback)
 *   Calls the DeactivateMFADevice API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user
 *       whose MFA device you want to deactivate.
 *     * +SerialNumber+ - (*required*, <tt>String</tt>) The serial number
 *       that uniquely identifies the MFA device. For virtual MFA
 *       devices, the serial number is the device ARN.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteAccessKey(params, callback)
 *   Calls the DeleteAccessKey API operation.
 *   @param params [Object]
 *     * +UserName+ - (<tt>String</tt>) Name of the user whose key you
 *       want to delete.
 *     * +AccessKeyId+ - (*required*, <tt>String</tt>) The Access Key ID
 *       for the Access Key ID and Secret Access Key you want to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteAccountAlias(params, callback)
 *   Calls the DeleteAccountAlias API operation.
 *   @param params [Object]
 *     * +AccountAlias+ - (*required*, <tt>String</tt>) Name of the
 *       account alias to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteAccountPasswordPolicy(params, callback)
 *   Calls the DeleteAccountPasswordPolicy API operation.
 *   @param params [Object]
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteGroup(params, callback)
 *   Calls the DeleteGroup API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the group to
 *       delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteGroupPolicy(params, callback)
 *   Calls the DeleteGroupPolicy API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the group
 *       the policy is associated with.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) Name of the policy
 *       document to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteInstanceProfile(params, callback)
 *   Calls the DeleteInstanceProfile API operation.
 *   @param params [Object]
 *     * +InstanceProfileName+ - (*required*, <tt>String</tt>) Name of
 *       the instance profile to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteLoginProfile(params, callback)
 *   Calls the DeleteLoginProfile API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user
 *       whose password you want to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteRole(params, callback)
 *   Calls the DeleteRole API operation.
 *   @param params [Object]
 *     * +RoleName+ - (*required*, <tt>String</tt>) Name of the role to
 *       delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteRolePolicy(params, callback)
 *   Calls the DeleteRolePolicy API operation.
 *   @param params [Object]
 *     * +RoleName+ - (*required*, <tt>String</tt>) Name of the role the
 *       associated with the policy.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) Name of the policy
 *       document to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteServerCertificate(params, callback)
 *   Calls the DeleteServerCertificate API operation.
 *   @param params [Object]
 *     * +ServerCertificateName+ - (*required*, <tt>String</tt>) The name
 *       of the server certificate you want to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteSigningCertificate(params, callback)
 *   Calls the DeleteSigningCertificate API operation.
 *   @param params [Object]
 *     * +UserName+ - (<tt>String</tt>) Name of the user the signing
 *       certificate belongs to.
 *     * +CertificateId+ - (*required*, <tt>String</tt>) ID of the
 *       signing certificate to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteUser(params, callback)
 *   Calls the DeleteUser API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user to
 *       delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteUserPolicy(params, callback)
 *   Calls the DeleteUserPolicy API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user the
 *       policy is associated with.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) Name of the policy
 *       document to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteVirtualMFADevice(params, callback)
 *   Calls the DeleteVirtualMFADevice API operation.
 *   @param params [Object]
 *     * +SerialNumber+ - (*required*, <tt>String</tt>) The serial number
 *       that uniquely identifies the MFA device. For virtual MFA
 *       devices, the serial number is the same as the ARN.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method enableMFADevice(params, callback)
 *   Calls the EnableMFADevice API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user for
 *       whom you want to enable the MFA device.
 *     * +SerialNumber+ - (*required*, <tt>String</tt>) The serial number
 *       that uniquely identifies the MFA device. For virtual MFA
 *       devices, the serial number is the device ARN.
 *     * +AuthenticationCode1+ - (*required*, <tt>String</tt>) An
 *       authentication code emitted by the device.
 *     * +AuthenticationCode2+ - (*required*, <tt>String</tt>) A
 *       subsequent authentication code emitted by the device.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getAccountPasswordPolicy(params, callback)
 *   Calls the GetAccountPasswordPolicy API operation.
 *   @param params [Object]
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +PasswordPolicy+ - (<tt>Object</tt>)
 *         * +MinimumPasswordLength+ - (<tt>Integer</tt>) Minimum length to
 *           require for IAM user passwords.
 *         * +RequireSymbols+ - (<tt>Boolean</tt>) Specifies whether to
 *           require symbols for IAM user passwords.
 *         * +RequireNumbers+ - (<tt>Boolean</tt>) Specifies whether to
 *           require numbers for IAM user passwords.
 *         * +RequireUppercaseCharacters+ - (<tt>Boolean</tt>) Specifies
 *           whether to require uppercase characters for IAM user
 *           passwords.
 *         * +RequireLowercaseCharacters+ - (<tt>Boolean</tt>) Specifies
 *           whether to require lowercase characters for IAM user
 *           passwords.
 *         * +AllowUsersToChangePassword+ - (<tt>Boolean</tt>) Specifies
 *           whether to allow IAM users to change their own password.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getAccountSummary(params, callback)
 *   Calls the GetAccountSummary API operation.
 *   @param params [Object]
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SummaryMap+ - (<tt>Object<Integer></tt>) A set of key value
 *         pairs containing account-level information. SummaryMap contains
 *         the following keys: AccessKeysPerUserQuota - Maximum number of
 *         access keys that can be created per user AccountMFAEnabled - 1
 *         if the root account has an MFA device assigned to it, 0
 *         otherwise AssumeRolePolicySizeQuota - Maximum allowed size for
 *         assume role policy documents (in kilobytes) GroupPolicySizeQuota
 *         - Maximum allowed size for Group policy documents (in kilobytes)
 *         Groups - Number of Groups for the AWS account GroupsPerUserQuota
 *         - Maximum number of groups a user can belong to GroupsQuota -
 *         Maximum groups allowed for the AWS account InstanceProfiles -
 *         Number of instance profiles for the AWS account
 *         InstanceProfilesQuota - Maximum instance profiles allowed for
 *         the AWS account MFADevices - Number of MFA devices, either
 *         assigned or unassigned MFADevicesInUse - Number of MFA devices
 *         that have been assigned to an IAM user or to the root account
 *         RolePolicySizeQuota - Maximum allowed size for role policy
 *         documents (in kilobytes) Roles - Number of roles for the AWS
 *         account RolesQuota - Maximum roles allowed for the AWS account
 *         ServerCertificates - Number of server certificates for the AWS
 *         account ServerCertificatesQuota - Maximum server certificates
 *         allowed for the AWS account SigningCertificatesPerUserQuota -
 *         Maximum number of X509 certificates allowed for a user
 *         UserPolicySizeQuota - Maximum allowed size for user policy
 *         documents (in kilobytes) Users - Number of users for the AWS
 *         account UsersQuota - Maximum users allowed for the AWS account
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getGroup(params, callback)
 *   Calls the GetGroup API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the group.
 *     * +Marker+ - (<tt>String</tt>) Use this only when paginating
 *       results, and only in a subsequent request after you've received
 *       a response where the results are truncated. Set it to the value
 *       of the Marker element in the response you just received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this only when paginating
 *       results to indicate the maximum number of user names you want in
 *       the response. If there are additional user names beyond the
 *       maximum you specify, the IsTruncated response element is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Group+ - (<tt>Object</tt>) Information about the
 *         group.
 *         * +Path+ - (<tt>String</tt>) Path to the group. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +GroupName+ - (<tt>String</tt>) The name that
 *           identifies the group.
 *         * +GroupId+ - (<tt>String</tt>) The stable and
 *           unique string identifying the group. For more information
 *           about IDs, see Identifiers for IAM Entities in Using AWS
 *           Identity and Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the group. For more information about ARNs
 *           and how to use them in policies, see Identifiers for IAM
 *           Entities in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           group was created.
 *       * +Users+ - (<tt>Array<Object></tt>) A list of users
 *         in the group.
 *         * +Path+ - (<tt>String</tt>) Path to the user. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +UserName+ - (<tt>String</tt>) The name
 *           identifying the user.
 *         * +UserId+ - (<tt>String</tt>) The stable and unique
 *           string identifying the user. For more information about IDs,
 *           see Identifiers for IAM Entities in Using AWS Identity and
 *           Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the user. For more information about ARNs and
 *           how to use them in policies, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           user was created.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more user names to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more user names in the
 *         list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, then this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getGroupPolicy(params, callback)
 *   Calls the GetGroupPolicy API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the group
 *       the policy is associated with.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) Name of the policy
 *       document to get.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +GroupName+ - (<tt>String</tt>) The group the policy
 *         is associated with.
 *       * +PolicyName+ - (<tt>String</tt>) The name of the
 *         policy.
 *       * +PolicyDocument+ - (<tt>String</tt>) The policy
 *         document.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getInstanceProfile(params, callback)
 *   Calls the GetInstanceProfile API operation.
 *   @param params [Object]
 *     * +InstanceProfileName+ - (*required*, <tt>String</tt>) Name of
 *       the instance profile to get information about.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceProfile+ - (<tt>Object</tt>) Information
 *         about the instance profile.
 *         * +Path+ - (<tt>String</tt>) Path to the instance
 *           profile. For more information about paths, see Identifiers for
 *           IAM Entities in Using AWS Identity and Access Management.
 *         * +InstanceProfileName+ - (<tt>String</tt>) The name
 *           identifying the instance profile.
 *         * +InstanceProfileId+ - (<tt>String</tt>) The stable
 *           and unique string identifying the instance profile. For more
 *           information about IDs, see Identifiers for IAM Entities in
 *           Using AWS Identity and Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the instance profile. For more information
 *           about ARNs and how to use them in policies, see Identifiers
 *           for IAM Entities in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           instance profile was created.
 *         * +Roles+ - (<tt>Array<Object></tt>) The role
 *           associated with the instance profile.
 *           * +Path+ - (<tt>String</tt>) Path to the role. For
 *             more information about paths, see Identifiers for IAM
 *             Entities in Using AWS Identity and Access Management.
 *           * +RoleName+ - (<tt>String</tt>) The name
 *             identifying the role.
 *           * +RoleId+ - (<tt>String</tt>) The stable and
 *             unique string identifying the role. For more information
 *             about IDs, see Identifiers for IAM Entities in Using AWS
 *             Identity and Access Management.
 *           * +Arn+ - (<tt>String</tt>) The Amazon Resource
 *             Name (ARN) specifying the role. For more information about
 *             ARNs and how to use them in policies, see Identifiers for
 *             IAM Entities in Using AWS Identity and Access Management.
 *           * +CreateDate+ - (<tt>Date</tt>) The date when the
 *             role was created.
 *           * +AssumeRolePolicyDocument+ - (<tt>String</tt>) The policy
 *             that grants an entity permission to assume the role. The
 *             returned policy is URL-encoded according to RFC 3986. For
 *             more information about RFC 3986, go to
 *             http://www.faqs.org/rfcs/rfc3986.html.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getLoginProfile(params, callback)
 *   Calls the GetLoginProfile API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user
 *       whose login profile you want to retrieve.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +LoginProfile+ - (<tt>Object</tt>) User name and
 *         password create date for the user.
 *         * +UserName+ - (<tt>String</tt>) The name of the
 *           user, which can be used for signing into the AWS Management
 *           Console.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           password for the user was created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getRole(params, callback)
 *   Calls the GetRole API operation.
 *   @param params [Object]
 *     * +RoleName+ - (*required*, <tt>String</tt>) Name of the role to
 *       get information about.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Role+ - (<tt>Object</tt>) Information about the
 *         role.
 *         * +Path+ - (<tt>String</tt>) Path to the role. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +RoleName+ - (<tt>String</tt>) The name
 *           identifying the role.
 *         * +RoleId+ - (<tt>String</tt>) The stable and unique
 *           string identifying the role. For more information about IDs,
 *           see Identifiers for IAM Entities in Using AWS Identity and
 *           Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the role. For more information about ARNs and
 *           how to use them in policies, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           role was created.
 *         * +AssumeRolePolicyDocument+ - (<tt>String</tt>) The policy that
 *           grants an entity permission to assume the role. The returned
 *           policy is URL-encoded according to RFC 3986. For more
 *           information about RFC 3986, go to
 *           http://www.faqs.org/rfcs/rfc3986.html.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getRolePolicy(params, callback)
 *   Calls the GetRolePolicy API operation.
 *   @param params [Object]
 *     * +RoleName+ - (*required*, <tt>String</tt>) Name of the role
 *       associated with the policy.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) Name of the policy
 *       document to get.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +RoleName+ - (<tt>String</tt>) The role the policy
 *         is associated with.
 *       * +PolicyName+ - (<tt>String</tt>) The name of the
 *         policy.
 *       * +PolicyDocument+ - (<tt>String</tt>) The policy
 *         document.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getServerCertificate(params, callback)
 *   Calls the GetServerCertificate API operation.
 *   @param params [Object]
 *     * +ServerCertificateName+ - (*required*, <tt>String</tt>) The name
 *       of the server certificate you want to retrieve information
 *       about.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ServerCertificate+ - (<tt>Object</tt>) Information
 *         about the server certificate.
 *         * +ServerCertificateMetadata+ - (<tt>Object</tt>)
 *           The meta information of the server certificate, such as its
 *           name, path, ID, and ARN.
 *           * +Path+ - (<tt>String</tt>) Path to the server
 *             certificate. For more information about paths, see
 *             Identifiers for IAM Entities in Using AWS Identity and
 *             Access Management.
 *           * +ServerCertificateName+ - (<tt>String</tt>) The
 *             name that identifies the server certificate.
 *           * +ServerCertificateId+ - (<tt>String</tt>) The
 *             stable and unique string identifying the server certificate.
 *             For more information about IDs, see Identifiers for IAM
 *             Entities in Using AWS Identity and Access Management.
 *           * +Arn+ - (<tt>String</tt>) The Amazon Resource
 *             Name (ARN) specifying the server certificate. For more
 *             information about ARNs and how to use them in policies, see
 *             Identifiers for IAM Entities in Using AWS Identity and
 *             Access Management.
 *           * +UploadDate+ - (<tt>Date</tt>) The date when the server
 *             certificate was uploaded.
 *         * +CertificateBody+ - (<tt>String</tt>) The contents
 *           of the public key certificate.
 *         * +CertificateChain+ - (<tt>String</tt>) The contents of the
 *           public key certificate chain.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getUser(params, callback)
 *   Calls the GetUser API operation.
 *   @param params [Object]
 *     * +UserName+ - (<tt>String</tt>) Name of the user to get
 *       information about. This parameter is optional. If it is not
 *       included, it defaults to the user making the request.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +User+ - (<tt>Object</tt>) Information about the
 *         user.
 *         * +Path+ - (<tt>String</tt>) Path to the user. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +UserName+ - (<tt>String</tt>) The name
 *           identifying the user.
 *         * +UserId+ - (<tt>String</tt>) The stable and unique
 *           string identifying the user. For more information about IDs,
 *           see Identifiers for IAM Entities in Using AWS Identity and
 *           Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the user. For more information about ARNs and
 *           how to use them in policies, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           user was created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getUserPolicy(params, callback)
 *   Calls the GetUserPolicy API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user who
 *       the policy is associated with.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) Name of the policy
 *       document to get.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +UserName+ - (<tt>String</tt>) The user the policy
 *         is associated with.
 *       * +PolicyName+ - (<tt>String</tt>) The name of the
 *         policy.
 *       * +PolicyDocument+ - (<tt>String</tt>) The policy
 *         document.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listAccessKeys(params, callback)
 *   Calls the ListAccessKeys API operation.
 *   @param params [Object]
 *     * +UserName+ - (<tt>String</tt>) Name of the user.
 *     * +Marker+ - (<tt>String</tt>) Use this parameter only when
 *       paginating results, and only in a subsequent request after
 *       you've received a response where the results are truncated. Set
 *       it to the value of the Marker element in the response you just
 *       received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this parameter only when
 *       paginating results to indicate the maximum number of keys you
 *       want in the response. If there are additional keys beyond the
 *       maximum you specify, the IsTruncated response element is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AccessKeyMetadata+ - (<tt>Array<Object></tt>) A
 *         list of access key metadata.
 *         * +UserName+ - (<tt>String</tt>) Name of the user the key is
 *           associated with.
 *         * +AccessKeyId+ - (<tt>String</tt>) The ID for this access key.
 *         * +Status+ - (<tt>String</tt>) The status of the access key.
 *           Active means the key is valid for API calls, while Inactive
 *           means it is not.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the access key
 *           was created.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more keys to list. If your results were truncated, you
 *         can make a subsequent pagination request using the Marker
 *         request parameter to retrieve more keys in the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listAccountAliases(params, callback)
 *   Calls the ListAccountAliases API operation.
 *   @param params [Object]
 *     * +Marker+ - (<tt>String</tt>) Use this only when paginating
 *       results, and only in a subsequent request after you've received
 *       a response where the results are truncated. Set it to the value
 *       of the Marker element in the response you just received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this only when paginating
 *       results to indicate the maximum number of account aliases you
 *       want in the response. If there are additional account aliases
 *       beyond the maximum you specify, the IsTruncated response element
 *       is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AccountAliases+ - (<tt>Array<String></tt>) A list
 *         of aliases associated with the account.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more account aliases to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more account aliases in
 *         the list.
 *       * +Marker+ - (<tt>String</tt>) Use this only when paginating
 *         results, and only in a subsequent request after you've received
 *         a response where the results are truncated. Set it to the value
 *         of the Marker element in the response you just received.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listGroupPolicies(params, callback)
 *   Calls the ListGroupPolicies API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) The name of the
 *       group to list policies for.
 *     * +Marker+ - (<tt>String</tt>) Use this only when paginating
 *       results, and only in a subsequent request after you've received
 *       a response where the results are truncated. Set it to the value
 *       of the Marker element in the response you just received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this only when paginating
 *       results to indicate the maximum number of policy names you want
 *       in the response. If there are additional policy names beyond the
 *       maximum you specify, the IsTruncated response element is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +PolicyNames+ - (<tt>Array<String></tt>) A list of
 *         policy names.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more policy names to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more policy names in
 *         the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listGroups(params, callback)
 *   Calls the ListGroups API operation.
 *   @param params [Object]
 *     * +PathPrefix+ - (<tt>String</tt>) The path prefix for filtering
 *       the results. For example: /division_abc/subdivision_xyz/, which
 *       would get all groups whose path starts with
 *       /division_abc/subdivision_xyz/. This parameter is optional. If
 *       it is not included, it defaults to a slash (/), listing all
 *       groups.
 *     * +Marker+ - (<tt>String</tt>) Use this only when paginating
 *       results, and only in a subsequent request after you've received
 *       a response where the results are truncated. Set it to the value
 *       of the Marker element in the response you just received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this only when paginating
 *       results to indicate the maximum number of groups you want in the
 *       response. If there are additional groups beyond the maximum you
 *       specify, the IsTruncated response element is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Groups+ - (<tt>Array<Object></tt>) A list of
 *         groups.
 *         * +Path+ - (<tt>String</tt>) Path to the group. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +GroupName+ - (<tt>String</tt>) The name that
 *           identifies the group.
 *         * +GroupId+ - (<tt>String</tt>) The stable and
 *           unique string identifying the group. For more information
 *           about IDs, see Identifiers for IAM Entities in Using AWS
 *           Identity and Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the group. For more information about ARNs
 *           and how to use them in policies, see Identifiers for IAM
 *           Entities in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           group was created.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more groups to list. If your results were truncated,
 *         you can make a subsequent pagination request using the Marker
 *         request parameter to retrieve more groups in the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listGroupsForUser(params, callback)
 *   Calls the ListGroupsForUser API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) The name of the user
 *       to list groups for.
 *     * +Marker+ - (<tt>String</tt>) Use this only when paginating
 *       results, and only in a subsequent request after you've received
 *       a response where the results are truncated. Set it to the value
 *       of the Marker element in the response you just received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this only when paginating
 *       results to indicate the maximum number of groups you want in the
 *       response. If there are additional groups beyond the maximum you
 *       specify, the IsTruncated response element is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Groups+ - (<tt>Array<Object></tt>) A list of
 *         groups.
 *         * +Path+ - (<tt>String</tt>) Path to the group. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +GroupName+ - (<tt>String</tt>) The name that
 *           identifies the group.
 *         * +GroupId+ - (<tt>String</tt>) The stable and
 *           unique string identifying the group. For more information
 *           about IDs, see Identifiers for IAM Entities in Using AWS
 *           Identity and Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the group. For more information about ARNs
 *           and how to use them in policies, see Identifiers for IAM
 *           Entities in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           group was created.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more groups to list. If your results were truncated,
 *         you can make a subsequent pagination request using the Marker
 *         request parameter to retrieve more groups in the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listInstanceProfiles(params, callback)
 *   Calls the ListInstanceProfiles API operation.
 *   @param params [Object]
 *     * +PathPrefix+ - (<tt>String</tt>) The path prefix for filtering
 *       the results. For example: /application_abc/component_xyz/, which
 *       would get all instance profiles whose path starts with
 *       /application_abc/component_xyz/. This parameter is optional. If
 *       it is not included, it defaults to a slash (/), listing all
 *       instance profiles.
 *     * +Marker+ - (<tt>String</tt>) Use this parameter only when
 *       paginating results, and only in a subsequent request after
 *       you've received a response where the results are truncated. Set
 *       it to the value of the Marker element in the response you just
 *       received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this parameter only when
 *       paginating results to indicate the maximum number of user names
 *       you want in the response. If there are additional user names
 *       beyond the maximum you specify, the IsTruncated response element
 *       is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceProfiles+ - (<tt>Array<Object></tt>) A list
 *         of instance profiles.
 *         * +Path+ - (<tt>String</tt>) Path to the instance
 *           profile. For more information about paths, see Identifiers for
 *           IAM Entities in Using AWS Identity and Access Management.
 *         * +InstanceProfileName+ - (<tt>String</tt>) The name
 *           identifying the instance profile.
 *         * +InstanceProfileId+ - (<tt>String</tt>) The stable
 *           and unique string identifying the instance profile. For more
 *           information about IDs, see Identifiers for IAM Entities in
 *           Using AWS Identity and Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the instance profile. For more information
 *           about ARNs and how to use them in policies, see Identifiers
 *           for IAM Entities in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           instance profile was created.
 *         * +Roles+ - (<tt>Array<Object></tt>) The role
 *           associated with the instance profile.
 *           * +Path+ - (<tt>String</tt>) Path to the role. For
 *             more information about paths, see Identifiers for IAM
 *             Entities in Using AWS Identity and Access Management.
 *           * +RoleName+ - (<tt>String</tt>) The name
 *             identifying the role.
 *           * +RoleId+ - (<tt>String</tt>) The stable and
 *             unique string identifying the role. For more information
 *             about IDs, see Identifiers for IAM Entities in Using AWS
 *             Identity and Access Management.
 *           * +Arn+ - (<tt>String</tt>) The Amazon Resource
 *             Name (ARN) specifying the role. For more information about
 *             ARNs and how to use them in policies, see Identifiers for
 *             IAM Entities in Using AWS Identity and Access Management.
 *           * +CreateDate+ - (<tt>Date</tt>) The date when the
 *             role was created.
 *           * +AssumeRolePolicyDocument+ - (<tt>String</tt>) The policy
 *             that grants an entity permission to assume the role. The
 *             returned policy is URL-encoded according to RFC 3986. For
 *             more information about RFC 3986, go to
 *             http://www.faqs.org/rfcs/rfc3986.html.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more instance profiles to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more instance profiles
 *         in the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listInstanceProfilesForRole(params, callback)
 *   Calls the ListInstanceProfilesForRole API operation.
 *   @param params [Object]
 *     * +RoleName+ - (*required*, <tt>String</tt>) The name of the role
 *       to list instance profiles for.
 *     * +Marker+ - (<tt>String</tt>) Use this parameter only when
 *       paginating results, and only in a subsequent request after
 *       you've received a response where the results are truncated. Set
 *       it to the value of the Marker element in the response you just
 *       received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this parameter only when
 *       paginating results to indicate the maximum number of user names
 *       you want in the response. If there are additional user names
 *       beyond the maximum you specify, the IsTruncated response element
 *       is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceProfiles+ - (<tt>Array<Object></tt>) A list
 *         of instance profiles.
 *         * +Path+ - (<tt>String</tt>) Path to the instance
 *           profile. For more information about paths, see Identifiers for
 *           IAM Entities in Using AWS Identity and Access Management.
 *         * +InstanceProfileName+ - (<tt>String</tt>) The name
 *           identifying the instance profile.
 *         * +InstanceProfileId+ - (<tt>String</tt>) The stable
 *           and unique string identifying the instance profile. For more
 *           information about IDs, see Identifiers for IAM Entities in
 *           Using AWS Identity and Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the instance profile. For more information
 *           about ARNs and how to use them in policies, see Identifiers
 *           for IAM Entities in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           instance profile was created.
 *         * +Roles+ - (<tt>Array<Object></tt>) The role
 *           associated with the instance profile.
 *           * +Path+ - (<tt>String</tt>) Path to the role. For
 *             more information about paths, see Identifiers for IAM
 *             Entities in Using AWS Identity and Access Management.
 *           * +RoleName+ - (<tt>String</tt>) The name
 *             identifying the role.
 *           * +RoleId+ - (<tt>String</tt>) The stable and
 *             unique string identifying the role. For more information
 *             about IDs, see Identifiers for IAM Entities in Using AWS
 *             Identity and Access Management.
 *           * +Arn+ - (<tt>String</tt>) The Amazon Resource
 *             Name (ARN) specifying the role. For more information about
 *             ARNs and how to use them in policies, see Identifiers for
 *             IAM Entities in Using AWS Identity and Access Management.
 *           * +CreateDate+ - (<tt>Date</tt>) The date when the
 *             role was created.
 *           * +AssumeRolePolicyDocument+ - (<tt>String</tt>) The policy
 *             that grants an entity permission to assume the role. The
 *             returned policy is URL-encoded according to RFC 3986. For
 *             more information about RFC 3986, go to
 *             http://www.faqs.org/rfcs/rfc3986.html.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more instance profiles to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more instance profiles
 *         in the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listMFADevices(params, callback)
 *   Calls the ListMFADevices API operation.
 *   @param params [Object]
 *     * +UserName+ - (<tt>String</tt>) Name of the user whose MFA
 *       devices you want to list.
 *     * +Marker+ - (<tt>String</tt>) Use this only when paginating
 *       results, and only in a subsequent request after you've received
 *       a response where the results are truncated. Set it to the value
 *       of the Marker element in the response you just received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this only when paginating
 *       results to indicate the maximum number of MFA devices you want
 *       in the response. If there are additional MFA devices beyond the
 *       maximum you specify, the IsTruncated response element is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +MFADevices+ - (<tt>Array<Object></tt>) A list of
 *         MFA devices.
 *         * +UserName+ - (<tt>String</tt>) The user with whom
 *           the MFA device is associated.
 *         * +SerialNumber+ - (<tt>String</tt>) The serial
 *           number that uniquely identifies the MFA device. For virtual
 *           MFA devices, the serial number is the device ARN.
 *         * +EnableDate+ - (<tt>Date</tt>) The date when the
 *           MFA device was enabled for the user.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more MFA devices to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more MFA devices in the
 *         list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listRolePolicies(params, callback)
 *   Calls the ListRolePolicies API operation.
 *   @param params [Object]
 *     * +RoleName+ - (*required*, <tt>String</tt>) The name of the role
 *       to list policies for.
 *     * +Marker+ - (<tt>String</tt>) Use this parameter only when
 *       paginating results, and only in a subsequent request after
 *       you've received a response where the results are truncated. Set
 *       it to the value of the Marker element in the response you just
 *       received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this parameter only when
 *       paginating results to indicate the maximum number of user names
 *       you want in the response. If there are additional user names
 *       beyond the maximum you specify, the IsTruncated response element
 *       is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +PolicyNames+ - (<tt>Array<String></tt>) A list of
 *         policy names.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more policy names to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more policy names in
 *         the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listRoles(params, callback)
 *   Calls the ListRoles API operation.
 *   @param params [Object]
 *     * +PathPrefix+ - (<tt>String</tt>) The path prefix for filtering
 *       the results. For example: /application_abc/component_xyz/, which
 *       would get all roles whose path starts with
 *       /application_abc/component_xyz/. This parameter is optional. If
 *       it is not included, it defaults to a slash (/), listing all
 *       roles.
 *     * +Marker+ - (<tt>String</tt>) Use this parameter only when
 *       paginating results, and only in a subsequent request after
 *       you've received a response where the results are truncated. Set
 *       it to the value of the Marker element in the response you just
 *       received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this parameter only when
 *       paginating results to indicate the maximum number of user names
 *       you want in the response. If there are additional user names
 *       beyond the maximum you specify, the IsTruncated response element
 *       is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Roles+ - (<tt>Array<Object></tt>) A list of roles.
 *         * +Path+ - (<tt>String</tt>) Path to the role. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +RoleName+ - (<tt>String</tt>) The name
 *           identifying the role.
 *         * +RoleId+ - (<tt>String</tt>) The stable and unique
 *           string identifying the role. For more information about IDs,
 *           see Identifiers for IAM Entities in Using AWS Identity and
 *           Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the role. For more information about ARNs and
 *           how to use them in policies, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           role was created.
 *         * +AssumeRolePolicyDocument+ - (<tt>String</tt>) The policy that
 *           grants an entity permission to assume the role. The returned
 *           policy is URL-encoded according to RFC 3986. For more
 *           information about RFC 3986, go to
 *           http://www.faqs.org/rfcs/rfc3986.html.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more roles to list. If your results were truncated,
 *         you can make a subsequent pagination request using the Marker
 *         request parameter to retrieve more roles in the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listServerCertificates(params, callback)
 *   Calls the ListServerCertificates API operation.
 *   @param params [Object]
 *     * +PathPrefix+ - (<tt>String</tt>) The path prefix for filtering
 *       the results. For example: /company/servercerts would get all
 *       server certificates for which the path starts with
 *       /company/servercerts. This parameter is optional. If it is not
 *       included, it defaults to a slash (/), listing all server
 *       certificates.
 *     * +Marker+ - (<tt>String</tt>) Use this only when paginating
 *       results, and only in a subsequent request after you've received
 *       a response where the results are truncated. Set it to the value
 *       of the Marker element in the response you just received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this only when paginating
 *       results to indicate the maximum number of server certificates
 *       you want in the response. If there are additional server
 *       certificates beyond the maximum you specify, the IsTruncated
 *       response element will be set to true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ServerCertificateMetadataList+ - (*required*,
 *         <tt>Array<Object></tt>) A list of server certificates.
 *         * +Path+ - (<tt>String</tt>) Path to the server
 *           certificate. For more information about paths, see Identifiers
 *           for IAM Entities in Using AWS Identity and Access Management.
 *         * +ServerCertificateName+ - (<tt>String</tt>) The
 *           name that identifies the server certificate.
 *         * +ServerCertificateId+ - (<tt>String</tt>) The
 *           stable and unique string identifying the server certificate.
 *           For more information about IDs, see Identifiers for IAM
 *           Entities in Using AWS Identity and Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the server certificate. For more information
 *           about ARNs and how to use them in policies, see Identifiers
 *           for IAM Entities in Using AWS Identity and Access Management.
 *         * +UploadDate+ - (<tt>Date</tt>) The date when the server
 *           certificate was uploaded.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more server certificates to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more server
 *         certificates in the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listSigningCertificates(params, callback)
 *   Calls the ListSigningCertificates API operation.
 *   @param params [Object]
 *     * +UserName+ - (<tt>String</tt>) The name of the user.
 *     * +Marker+ - (<tt>String</tt>) Use this only when paginating
 *       results, and only in a subsequent request after you've received
 *       a response where the results are truncated. Set it to the value
 *       of the Marker element in the response you just received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this only when paginating
 *       results to indicate the maximum number of certificate IDs you
 *       want in the response. If there are additional certificate IDs
 *       beyond the maximum you specify, the IsTruncated response element
 *       is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Certificates+ - (<tt>Array<Object></tt>) A list of
 *         the user's signing certificate information.
 *         * +UserName+ - (<tt>String</tt>) Name of the user
 *           the signing certificate is associated with.
 *         * +CertificateId+ - (<tt>String</tt>) The ID for the
 *           signing certificate.
 *         * +CertificateBody+ - (<tt>String</tt>) The contents
 *           of the signing certificate.
 *         * +Status+ - (<tt>String</tt>) The status of the
 *           signing certificate. Active means the key is valid for API
 *           calls, while Inactive means it is not.
 *         * +UploadDate+ - (<tt>Date</tt>) The date when the signing
 *           certificate was uploaded.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more certificate IDs to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more certificates in
 *         the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listUserPolicies(params, callback)
 *   Calls the ListUserPolicies API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) The name of the user
 *       to list policies for.
 *     * +Marker+ - (<tt>String</tt>) Use this only when paginating
 *       results, and only in a subsequent request after you've received
 *       a response where the results are truncated. Set it to the value
 *       of the Marker element in the response you just received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this only when paginating
 *       results to indicate the maximum number of policy names you want
 *       in the response. If there are additional policy names beyond the
 *       maximum you specify, the IsTruncated response element is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +PolicyNames+ - (<tt>Array<String></tt>) A list of
 *         policy names.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more policy names to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more policy names in
 *         the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listUsers(params, callback)
 *   Calls the ListUsers API operation.
 *   @param params [Object]
 *     * +PathPrefix+ - (<tt>String</tt>) The path prefix for filtering
 *       the results. For example: /division_abc/subdivision_xyz/, which
 *       would get all user names whose path starts with
 *       /division_abc/subdivision_xyz/. This parameter is optional. If
 *       it is not included, it defaults to a slash (/), listing all user
 *       names.
 *     * +Marker+ - (<tt>String</tt>) Use this parameter only when
 *       paginating results, and only in a subsequent request after
 *       you've received a response where the results are truncated. Set
 *       it to the value of the Marker element in the response you just
 *       received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this parameter only when
 *       paginating results to indicate the maximum number of user names
 *       you want in the response. If there are additional user names
 *       beyond the maximum you specify, the IsTruncated response element
 *       is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Users+ - (<tt>Array<Object></tt>) A list of users.
 *         * +Path+ - (<tt>String</tt>) Path to the user. For
 *           more information about paths, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +UserName+ - (<tt>String</tt>) The name
 *           identifying the user.
 *         * +UserId+ - (<tt>String</tt>) The stable and unique
 *           string identifying the user. For more information about IDs,
 *           see Identifiers for IAM Entities in Using AWS Identity and
 *           Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the user. For more information about ARNs and
 *           how to use them in policies, see Identifiers for IAM Entities
 *           in Using AWS Identity and Access Management.
 *         * +CreateDate+ - (<tt>Date</tt>) The date when the
 *           user was created.
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more user names to list. If your results were
 *         truncated, you can make a subsequent pagination request using
 *         the Marker request parameter to retrieve more users in the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listVirtualMFADevices(params, callback)
 *   Calls the ListVirtualMFADevices API operation.
 *   @param params [Object]
 *     * +AssignmentStatus+ - (<tt>String</tt>) The status (unassigned or
 *       assigned) of the devices to list. If you do not specify an
 *       AssignmentStatus, the action defaults to Any which lists both
 *       assigned and unassigned virtual MFA devices.
 *     * +Marker+ - (<tt>String</tt>) Use this parameter only when
 *       paginating results, and only in a subsequent request after
 *       you've received a response where the results are truncated. Set
 *       it to the value of the Marker element in the response you just
 *       received.
 *     * +MaxItems+ - (<tt>Integer</tt>) Use this parameter only when
 *       paginating results to indicate the maximum number of user names
 *       you want in the response. If there are additional user names
 *       beyond the maximum you specify, the IsTruncated response element
 *       is true.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +VirtualMFADevices+ - (<tt>Array<Object></tt>)
 *         * +SerialNumber+ - (<tt>String</tt>) The serial
 *           number associated with VirtualMFADevice.
 *         * +Base32StringSeed+ - (<tt>Base64 Encoded Data</tt>) The Base32
 *           seed defined as specified in RFC3548. The Base32StringSeed is
 *           Base64-encoded.
 *         * +QRCodePNG+ - (<tt>Base64 Encoded Data</tt>) A QR code PNG
 *           image that encodes
 *           otpauth://totp/$virtualMFADeviceName@$AccountName?
 *           secret=$Base32String where $virtualMFADeviceName is one of the
 *           create call arguments, AccountName is the user name if set
 *           (accountId otherwise), and Base32String is the seed in Base32
 *           format. The Base32String is Base64-encoded.
 *         * +User+ - (<tt>Object</tt>)
 *           * +Path+ - (<tt>String</tt>) Path to the user. For
 *             more information about paths, see Identifiers for IAM
 *             Entities in Using AWS Identity and Access Management.
 *           * +UserName+ - (<tt>String</tt>) The name
 *             identifying the user.
 *           * +UserId+ - (<tt>String</tt>) The stable and
 *             unique string identifying the user. For more information
 *             about IDs, see Identifiers for IAM Entities in Using AWS
 *             Identity and Access Management.
 *           * +Arn+ - (<tt>String</tt>) The Amazon Resource
 *             Name (ARN) specifying the user. For more information about
 *             ARNs and how to use them in policies, see Identifiers for
 *             IAM Entities in Using AWS Identity and Access Management.
 *           * +CreateDate+ - (<tt>Date</tt>) The date when the
 *             user was created.
 *         * +EnableDate+ - (<tt>Date</tt>)
 *       * +IsTruncated+ - (<tt>Boolean</tt>) A flag that indicates whether
 *         there are more items to list. If your results were truncated,
 *         you can make a subsequent pagination request using the Marker
 *         request parameter to retrieve more items the list.
 *       * +Marker+ - (<tt>String</tt>) If IsTruncated is true, this
 *         element is present and contains the value to use for the Marker
 *         parameter in a subsequent pagination request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method putGroupPolicy(params, callback)
 *   Calls the PutGroupPolicy API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the group to
 *       associate the policy with.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) Name of the policy
 *       document.
 *     * +PolicyDocument+ - (*required*, <tt>String</tt>) The policy
 *       document.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method putRolePolicy(params, callback)
 *   Calls the PutRolePolicy API operation.
 *   @param params [Object]
 *     * +RoleName+ - (*required*, <tt>String</tt>) Name of the role to
 *       associate the policy with.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) Name of the policy
 *       document.
 *     * +PolicyDocument+ - (*required*, <tt>String</tt>) The policy
 *       document.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method putUserPolicy(params, callback)
 *   Calls the PutUserPolicy API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user to
 *       associate the policy with.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) Name of the policy
 *       document.
 *     * +PolicyDocument+ - (*required*, <tt>String</tt>) The policy
 *       document.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method removeRoleFromInstanceProfile(params, callback)
 *   Calls the RemoveRoleFromInstanceProfile API operation.
 *   @param params [Object]
 *     * +InstanceProfileName+ - (*required*, <tt>String</tt>) Name of
 *       the instance profile to update.
 *     * +RoleName+ - (*required*, <tt>String</tt>) Name of the role to
 *       remove.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method removeUserFromGroup(params, callback)
 *   Calls the RemoveUserFromGroup API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the group to
 *       update.
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user to
 *       remove.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method resyncMFADevice(params, callback)
 *   Calls the ResyncMFADevice API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user
 *       whose MFA device you want to resynchronize.
 *     * +SerialNumber+ - (*required*, <tt>String</tt>) Serial number
 *       that uniquely identifies the MFA device.
 *     * +AuthenticationCode1+ - (*required*, <tt>String</tt>) An
 *       authentication code emitted by the device.
 *     * +AuthenticationCode2+ - (*required*, <tt>String</tt>) A
 *       subsequent authentication code emitted by the device.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateAccessKey(params, callback)
 *   Calls the UpdateAccessKey API operation.
 *   @param params [Object]
 *     * +UserName+ - (<tt>String</tt>) Name of the user whose key you
 *       want to update.
 *     * +AccessKeyId+ - (*required*, <tt>String</tt>) The Access Key ID
 *       of the Secret Access Key you want to update.
 *     * +Status+ - (*required*, <tt>String</tt>) The status you want to
 *       assign to the Secret Access Key. Active means the key can be
 *       used for API calls to AWS, while Inactive means the key cannot
 *       be used.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateAccountPasswordPolicy(params, callback)
 *   Calls the UpdateAccountPasswordPolicy API operation.
 *   @param params [Object]
 *     * +MinimumPasswordLength+ - (<tt>Integer</tt>)
 *     * +RequireSymbols+ - (<tt>Boolean</tt>)
 *     * +RequireNumbers+ - (<tt>Boolean</tt>)
 *     * +RequireUppercaseCharacters+ - (<tt>Boolean</tt>)
 *     * +RequireLowercaseCharacters+ - (<tt>Boolean</tt>)
 *     * +AllowUsersToChangePassword+ - (<tt>Boolean</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateAssumeRolePolicy(params, callback)
 *   Calls the UpdateAssumeRolePolicy API operation.
 *   @param params [Object]
 *     * +RoleName+ - (*required*, <tt>String</tt>) Name of the role to
 *       update.
 *     * +PolicyDocument+ - (*required*, <tt>String</tt>) The policy that
 *       grants an entity permission to assume the role.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateGroup(params, callback)
 *   Calls the UpdateGroup API operation.
 *   @param params [Object]
 *     * +GroupName+ - (*required*, <tt>String</tt>) Name of the group to
 *       update. If you're changing the name of the group, this is the
 *       original name.
 *     * +NewPath+ - (<tt>String</tt>) New path for the group. Only
 *       include this if changing the group's path.
 *     * +NewGroupName+ - (<tt>String</tt>) New name for the group. Only
 *       include this if changing the group's name.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateLoginProfile(params, callback)
 *   Calls the UpdateLoginProfile API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user
 *       whose password you want to update.
 *     * +Password+ - (<tt>String</tt>) The new password for the user
 *       name.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateServerCertificate(params, callback)
 *   Calls the UpdateServerCertificate API operation.
 *   @param params [Object]
 *     * +ServerCertificateName+ - (*required*, <tt>String</tt>) The name
 *       of the server certificate that you want to update.
 *     * +NewPath+ - (<tt>String</tt>) The new path for the server
 *       certificate. Include this only if you are updating the server
 *       certificate's path.
 *     * +NewServerCertificateName+ - (<tt>String</tt>) The new name for
 *       the server certificate. Include this only if you are updating
 *       the server certificate's name.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateSigningCertificate(params, callback)
 *   Calls the UpdateSigningCertificate API operation.
 *   @param params [Object]
 *     * +UserName+ - (<tt>String</tt>) Name of the user the signing
 *       certificate belongs to.
 *     * +CertificateId+ - (*required*, <tt>String</tt>) The ID of the
 *       signing certificate you want to update.
 *     * +Status+ - (*required*, <tt>String</tt>) The status you want to
 *       assign to the certificate. Active means the certificate can be
 *       used for API calls to AWS, while Inactive means the certificate
 *       cannot be used.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateUser(params, callback)
 *   Calls the UpdateUser API operation.
 *   @param params [Object]
 *     * +UserName+ - (*required*, <tt>String</tt>) Name of the user to
 *       update. If you're changing the name of the user, this is the
 *       original user name.
 *     * +NewPath+ - (<tt>String</tt>) New path for the user. Include
 *       this parameter only if you're changing the user's path.
 *     * +NewUserName+ - (<tt>String</tt>) New name for the user. Include
 *       this parameter only if you're changing the user's name.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method uploadServerCertificate(params, callback)
 *   Calls the UploadServerCertificate API operation.
 *   @param params [Object]
 *     * +Path+ - (<tt>String</tt>) The path for the server certificate.
 *       For more information about paths, see Identifiers for IAM
 *       Entities in Using AWS Identity and Access Management. This
 *       parameter is optional. If it is not included, it defaults to a
 *       slash (/).
 *     * +ServerCertificateName+ - (*required*, <tt>String</tt>) The name
 *       for the server certificate. Do not include the path in this
 *       value.
 *     * +CertificateBody+ - (*required*, <tt>String</tt>) The contents
 *       of the public key certificate in PEM-encoded format.
 *     * +PrivateKey+ - (*required*, <tt>String</tt>) The contents of the
 *       private key in PEM-encoded format.
 *     * +CertificateChain+ - (<tt>String</tt>) The contents of the
 *       certificate chain. This is typically a concatenation of the
 *       PEM-encoded public key certificates of the chain.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ServerCertificateMetadata+ - (<tt>Object</tt>) The meta
 *         information of the uploaded server certificate without its
 *         certificate body, certificate chain, and private key.
 *         * +Path+ - (<tt>String</tt>) Path to the server
 *           certificate. For more information about paths, see Identifiers
 *           for IAM Entities in Using AWS Identity and Access Management.
 *         * +ServerCertificateName+ - (<tt>String</tt>) The
 *           name that identifies the server certificate.
 *         * +ServerCertificateId+ - (<tt>String</tt>) The
 *           stable and unique string identifying the server certificate.
 *           For more information about IDs, see Identifiers for IAM
 *           Entities in Using AWS Identity and Access Management.
 *         * +Arn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) specifying the server certificate. For more information
 *           about ARNs and how to use them in policies, see Identifiers
 *           for IAM Entities in Using AWS Identity and Access Management.
 *         * +UploadDate+ - (<tt>Date</tt>) The date when the server
 *           certificate was uploaded.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method uploadSigningCertificate(params, callback)
 *   Calls the UploadSigningCertificate API operation.
 *   @param params [Object]
 *     * +UserName+ - (<tt>String</tt>) Name of the user the signing
 *       certificate is for.
 *     * +CertificateBody+ - (*required*, <tt>String</tt>) The contents
 *       of the signing certificate.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Certificate+ - (<tt>Object</tt>) Information about
 *         the certificate.
 *         * +UserName+ - (<tt>String</tt>) Name of the user
 *           the signing certificate is associated with.
 *         * +CertificateId+ - (<tt>String</tt>) The ID for the
 *           signing certificate.
 *         * +CertificateBody+ - (<tt>String</tt>) The contents
 *           of the signing certificate.
 *         * +Status+ - (<tt>String</tt>) The status of the
 *           signing certificate. Active means the key is valid for API
 *           calls, while Inactive means it is not.
 *         * +UploadDate+ - (<tt>Date</tt>) The date when the signing
 *           certificate was uploaded.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 *
 * @!method constructor(options)
 *   Constructs a service client object.  This client has one method for
 *   each API operation.
 *   @option options [String] endpoint The endpoint URI to send requests
 *     to.  The default endpoint is built from the configured +region+.
 *     The endpoint should be a string like <tt>'https://s3.amazonaws.com'</tt>.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.IAM.Client = inherit({});
