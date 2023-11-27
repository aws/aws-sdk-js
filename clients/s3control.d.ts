import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
import {UseDualstackConfigOptions} from '../lib/config_use_dualstack';
interface Blob {}
declare class S3Control extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: S3Control.Types.ClientConfiguration)
  config: Config & S3Control.Types.ClientConfiguration;
  /**
   * Associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance. Use this action if you want to create access grants for users or groups from your corporate identity directory. First, you must add your corporate identity directory to Amazon Web Services IAM Identity Center. Then, you can associate this IAM Identity Center instance with your S3 Access Grants instance.  Permissions  You must have the s3:AssociateAccessGrantsIdentityCenter permission to use this operation.   Additional Permissions  You must also have the following permissions: sso:CreateApplication, sso:PutApplicationGrant, and sso:PutApplicationAuthenticationMethod.   
   */
  associateAccessGrantsIdentityCenter(params: S3Control.Types.AssociateAccessGrantsIdentityCenterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance. Use this action if you want to create access grants for users or groups from your corporate identity directory. First, you must add your corporate identity directory to Amazon Web Services IAM Identity Center. Then, you can associate this IAM Identity Center instance with your S3 Access Grants instance.  Permissions  You must have the s3:AssociateAccessGrantsIdentityCenter permission to use this operation.   Additional Permissions  You must also have the following permissions: sso:CreateApplication, sso:PutApplicationGrant, and sso:PutApplicationAuthenticationMethod.   
   */
  associateAccessGrantsIdentityCenter(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an access grant that gives a grantee access to your S3 data. The grantee can be an IAM user or role or a directory user, or group. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data. You can create an S3 Access Grants instance using the CreateAccessGrantsInstance. You must also have registered at least one S3 data location in your S3 Access Grants instance using CreateAccessGrantsLocation.   Permissions  You must have the s3:CreateAccessGrant permission to use this operation.   Additional Permissions  For any directory identity - sso:DescribeInstance and sso:DescribeApplication  For directory users - identitystore:DescribeUser  For directory groups - identitystore:DescribeGroup   
   */
  createAccessGrant(params: S3Control.Types.CreateAccessGrantRequest, callback?: (err: AWSError, data: S3Control.Types.CreateAccessGrantResult) => void): Request<S3Control.Types.CreateAccessGrantResult, AWSError>;
  /**
   * Creates an access grant that gives a grantee access to your S3 data. The grantee can be an IAM user or role or a directory user, or group. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data. You can create an S3 Access Grants instance using the CreateAccessGrantsInstance. You must also have registered at least one S3 data location in your S3 Access Grants instance using CreateAccessGrantsLocation.   Permissions  You must have the s3:CreateAccessGrant permission to use this operation.   Additional Permissions  For any directory identity - sso:DescribeInstance and sso:DescribeApplication  For directory users - identitystore:DescribeUser  For directory groups - identitystore:DescribeGroup   
   */
  createAccessGrant(callback?: (err: AWSError, data: S3Control.Types.CreateAccessGrantResult) => void): Request<S3Control.Types.CreateAccessGrantResult, AWSError>;
  /**
   * Creates an S3 Access Grants instance, which serves as a logical grouping for access grants. You can create one S3 Access Grants instance per Region per account.   Permissions  You must have the s3:CreateAccessGrantsInstance permission to use this operation.   Additional Permissions  To associate an IAM Identity Center instance with your S3 Access Grants instance, you must also have the sso:DescribeInstance, sso:CreateApplication, sso:PutApplicationGrant, and sso:PutApplicationAuthenticationMethod permissions.   
   */
  createAccessGrantsInstance(params: S3Control.Types.CreateAccessGrantsInstanceRequest, callback?: (err: AWSError, data: S3Control.Types.CreateAccessGrantsInstanceResult) => void): Request<S3Control.Types.CreateAccessGrantsInstanceResult, AWSError>;
  /**
   * Creates an S3 Access Grants instance, which serves as a logical grouping for access grants. You can create one S3 Access Grants instance per Region per account.   Permissions  You must have the s3:CreateAccessGrantsInstance permission to use this operation.   Additional Permissions  To associate an IAM Identity Center instance with your S3 Access Grants instance, you must also have the sso:DescribeInstance, sso:CreateApplication, sso:PutApplicationGrant, and sso:PutApplicationAuthenticationMethod permissions.   
   */
  createAccessGrantsInstance(callback?: (err: AWSError, data: S3Control.Types.CreateAccessGrantsInstanceResult) => void): Request<S3Control.Types.CreateAccessGrantsInstanceResult, AWSError>;
  /**
   * The S3 data location that you would like to register in your S3 Access Grants instance. Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following:    The default S3 location s3://    A bucket - S3://&lt;bucket-name&gt;    A bucket and prefix - S3://&lt;bucket-name&gt;/&lt;prefix&gt;    When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role using a policy. S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications.   Permissions  You must have the s3:CreateAccessGrantsLocation permission to use this operation.   Additional Permissions  You must also have the following permission for the specified IAM role: iam:PassRole   
   */
  createAccessGrantsLocation(params: S3Control.Types.CreateAccessGrantsLocationRequest, callback?: (err: AWSError, data: S3Control.Types.CreateAccessGrantsLocationResult) => void): Request<S3Control.Types.CreateAccessGrantsLocationResult, AWSError>;
  /**
   * The S3 data location that you would like to register in your S3 Access Grants instance. Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following:    The default S3 location s3://    A bucket - S3://&lt;bucket-name&gt;    A bucket and prefix - S3://&lt;bucket-name&gt;/&lt;prefix&gt;    When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role using a policy. S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications.   Permissions  You must have the s3:CreateAccessGrantsLocation permission to use this operation.   Additional Permissions  You must also have the following permission for the specified IAM role: iam:PassRole   
   */
  createAccessGrantsLocation(callback?: (err: AWSError, data: S3Control.Types.CreateAccessGrantsLocationResult) => void): Request<S3Control.Types.CreateAccessGrantsLocationResult, AWSError>;
  /**
   * Creates an access point and associates it with the specified bucket. For more information, see Managing Data Access with Amazon S3 Access Points in the Amazon S3 User Guide.   S3 on Outposts only supports VPC-style access points.  For more information, see  Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only access points in the Amazon S3 User Guide.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.  The following actions are related to CreateAccessPoint:    GetAccessPoint     DeleteAccessPoint     ListAccessPoints   
   */
  createAccessPoint(params: S3Control.Types.CreateAccessPointRequest, callback?: (err: AWSError, data: S3Control.Types.CreateAccessPointResult) => void): Request<S3Control.Types.CreateAccessPointResult, AWSError>;
  /**
   * Creates an access point and associates it with the specified bucket. For more information, see Managing Data Access with Amazon S3 Access Points in the Amazon S3 User Guide.   S3 on Outposts only supports VPC-style access points.  For more information, see  Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only access points in the Amazon S3 User Guide.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.  The following actions are related to CreateAccessPoint:    GetAccessPoint     DeleteAccessPoint     ListAccessPoints   
   */
  createAccessPoint(callback?: (err: AWSError, data: S3Control.Types.CreateAccessPointResult) => void): Request<S3Control.Types.CreateAccessPointResult, AWSError>;
  /**
   * Creates an Object Lambda Access Point. For more information, see Transforming objects with Object Lambda Access Points in the Amazon S3 User Guide. The following actions are related to CreateAccessPointForObjectLambda:    DeleteAccessPointForObjectLambda     GetAccessPointForObjectLambda     ListAccessPointsForObjectLambda   
   */
  createAccessPointForObjectLambda(params: S3Control.Types.CreateAccessPointForObjectLambdaRequest, callback?: (err: AWSError, data: S3Control.Types.CreateAccessPointForObjectLambdaResult) => void): Request<S3Control.Types.CreateAccessPointForObjectLambdaResult, AWSError>;
  /**
   * Creates an Object Lambda Access Point. For more information, see Transforming objects with Object Lambda Access Points in the Amazon S3 User Guide. The following actions are related to CreateAccessPointForObjectLambda:    DeleteAccessPointForObjectLambda     GetAccessPointForObjectLambda     ListAccessPointsForObjectLambda   
   */
  createAccessPointForObjectLambda(callback?: (err: AWSError, data: S3Control.Types.CreateAccessPointForObjectLambdaResult) => void): Request<S3Control.Types.CreateAccessPointForObjectLambdaResult, AWSError>;
  /**
   *  This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see Create Bucket in the Amazon S3 API Reference.   Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. Not every string is an acceptable bucket name. For information on bucket naming restrictions, see Working with Amazon S3 Buckets. S3 on Outposts buckets support:   Tags   LifecycleConfigurations for deleting expired objects   For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see  Amazon S3 on Outposts Restrictions and Limitations. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and x-amz-outpost-id in your API request, see the Examples section. The following actions are related to CreateBucket for Amazon S3 on Outposts:    PutObject     GetBucket     DeleteBucket     CreateAccessPoint     PutAccessPointPolicy   
   */
  createBucket(params: S3Control.Types.CreateBucketRequest, callback?: (err: AWSError, data: S3Control.Types.CreateBucketResult) => void): Request<S3Control.Types.CreateBucketResult, AWSError>;
  /**
   *  This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see Create Bucket in the Amazon S3 API Reference.   Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. Not every string is an acceptable bucket name. For information on bucket naming restrictions, see Working with Amazon S3 Buckets. S3 on Outposts buckets support:   Tags   LifecycleConfigurations for deleting expired objects   For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see  Amazon S3 on Outposts Restrictions and Limitations. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and x-amz-outpost-id in your API request, see the Examples section. The following actions are related to CreateBucket for Amazon S3 on Outposts:    PutObject     GetBucket     DeleteBucket     CreateAccessPoint     PutAccessPointPolicy   
   */
  createBucket(callback?: (err: AWSError, data: S3Control.Types.CreateBucketResult) => void): Request<S3Control.Types.CreateBucketResult, AWSError>;
  /**
   * You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more information, see S3 Batch Operations in the Amazon S3 User Guide. This action creates a S3 Batch Operations job.  Related actions include:    DescribeJob     ListJobs     UpdateJobPriority     UpdateJobStatus     JobOperation   
   */
  createJob(params: S3Control.Types.CreateJobRequest, callback?: (err: AWSError, data: S3Control.Types.CreateJobResult) => void): Request<S3Control.Types.CreateJobResult, AWSError>;
  /**
   * You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more information, see S3 Batch Operations in the Amazon S3 User Guide. This action creates a S3 Batch Operations job.  Related actions include:    DescribeJob     ListJobs     UpdateJobPriority     UpdateJobStatus     JobOperation   
   */
  createJob(callback?: (err: AWSError, data: S3Control.Types.CreateJobResult) => void): Request<S3Control.Types.CreateJobResult, AWSError>;
  /**
   * Creates a Multi-Region Access Point and associates it with the specified buckets. For more information about creating Multi-Region Access Points, see Creating Multi-Region Access Points in the Amazon S3 User Guide. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with DescribeMultiRegionAccessPointOperation. The following actions are related to CreateMultiRegionAccessPoint:    DeleteMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     GetMultiRegionAccessPoint     ListMultiRegionAccessPoints   
   */
  createMultiRegionAccessPoint(params: S3Control.Types.CreateMultiRegionAccessPointRequest, callback?: (err: AWSError, data: S3Control.Types.CreateMultiRegionAccessPointResult) => void): Request<S3Control.Types.CreateMultiRegionAccessPointResult, AWSError>;
  /**
   * Creates a Multi-Region Access Point and associates it with the specified buckets. For more information about creating Multi-Region Access Points, see Creating Multi-Region Access Points in the Amazon S3 User Guide. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with DescribeMultiRegionAccessPointOperation. The following actions are related to CreateMultiRegionAccessPoint:    DeleteMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     GetMultiRegionAccessPoint     ListMultiRegionAccessPoints   
   */
  createMultiRegionAccessPoint(callback?: (err: AWSError, data: S3Control.Types.CreateMultiRegionAccessPointResult) => void): Request<S3Control.Types.CreateMultiRegionAccessPointResult, AWSError>;
  /**
   *  Creates a new S3 Storage Lens group and associates it with the specified Amazon Web Services account ID. An S3 Storage Lens group is a custom grouping of objects based on prefix, suffix, object tags, object size, object age, or a combination of these filters. For each Storage Lens group that you’ve created, you can also optionally add Amazon Web Services resource tags. For more information about S3 Storage Lens groups, see Working with S3 Storage Lens groups. To use this operation, you must have the permission to perform the s3:CreateStorageLensGroup action. If you’re trying to create a Storage Lens group with Amazon Web Services resource tags, you must also have permission to perform the s3:TagResource action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.
   */
  createStorageLensGroup(params: S3Control.Types.CreateStorageLensGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Creates a new S3 Storage Lens group and associates it with the specified Amazon Web Services account ID. An S3 Storage Lens group is a custom grouping of objects based on prefix, suffix, object tags, object size, object age, or a combination of these filters. For each Storage Lens group that you’ve created, you can also optionally add Amazon Web Services resource tags. For more information about S3 Storage Lens groups, see Working with S3 Storage Lens groups. To use this operation, you must have the permission to perform the s3:CreateStorageLensGroup action. If you’re trying to create a Storage Lens group with Amazon Web Services resource tags, you must also have permission to perform the s3:TagResource action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.
   */
  createStorageLensGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the access grant from the S3 Access Grants instance. You cannot undo an access grant deletion and the grantee will no longer have access to the S3 data.  Permissions  You must have the s3:DeleteAccessGrant permission to use this operation.   
   */
  deleteAccessGrant(params: S3Control.Types.DeleteAccessGrantRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the access grant from the S3 Access Grants instance. You cannot undo an access grant deletion and the grantee will no longer have access to the S3 data.  Permissions  You must have the s3:DeleteAccessGrant permission to use this operation.   
   */
  deleteAccessGrant(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes your S3 Access Grants instance. You must first delete the access grants and locations before S3 Access Grants can delete the instance. See DeleteAccessGrant and DeleteAccessGrantsLocation. If you have associated an IAM Identity Center instance with your S3 Access Grants instance, you must first dissassociate the Identity Center instance from the S3 Access Grants instance before you can delete the S3 Access Grants instance. See AssociateAccessGrantsIdentityCenter and DissociateAccessGrantsIdentityCenter.  Permissions  You must have the s3:DeleteAccessGrantsInstance permission to use this operation.   
   */
  deleteAccessGrantsInstance(params: S3Control.Types.DeleteAccessGrantsInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes your S3 Access Grants instance. You must first delete the access grants and locations before S3 Access Grants can delete the instance. See DeleteAccessGrant and DeleteAccessGrantsLocation. If you have associated an IAM Identity Center instance with your S3 Access Grants instance, you must first dissassociate the Identity Center instance from the S3 Access Grants instance before you can delete the S3 Access Grants instance. See AssociateAccessGrantsIdentityCenter and DissociateAccessGrantsIdentityCenter.  Permissions  You must have the s3:DeleteAccessGrantsInstance permission to use this operation.   
   */
  deleteAccessGrantsInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the resource policy of the S3 Access Grants instance. The resource policy is used to manage cross-account access to your S3 Access Grants instance. By deleting the resource policy, you delete any cross-account permissions to your S3 Access Grants instance.   Permissions  You must have the s3:DeleteAccessGrantsInstanceResourcePolicy permission to use this operation.   
   */
  deleteAccessGrantsInstanceResourcePolicy(params: S3Control.Types.DeleteAccessGrantsInstanceResourcePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the resource policy of the S3 Access Grants instance. The resource policy is used to manage cross-account access to your S3 Access Grants instance. By deleting the resource policy, you delete any cross-account permissions to your S3 Access Grants instance.   Permissions  You must have the s3:DeleteAccessGrantsInstanceResourcePolicy permission to use this operation.   
   */
  deleteAccessGrantsInstanceResourcePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters a location from your S3 Access Grants instance. You can only delete a location registration from an S3 Access Grants instance if there are no grants associated with this location. See Delete a grant for information on how to delete grants. You need to have at least one registered location in your S3 Access Grants instance in order to create access grants.   Permissions  You must have the s3:DeleteAccessGrantsLocation permission to use this operation.   
   */
  deleteAccessGrantsLocation(params: S3Control.Types.DeleteAccessGrantsLocationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deregisters a location from your S3 Access Grants instance. You can only delete a location registration from an S3 Access Grants instance if there are no grants associated with this location. See Delete a grant for information on how to delete grants. You need to have at least one registered location in your S3 Access Grants instance in order to create access grants.   Permissions  You must have the s3:DeleteAccessGrantsLocation permission to use this operation.   
   */
  deleteAccessGrantsLocation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified access point. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteAccessPoint:    CreateAccessPoint     GetAccessPoint     ListAccessPoints   
   */
  deleteAccessPoint(params: S3Control.Types.DeleteAccessPointRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified access point. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteAccessPoint:    CreateAccessPoint     GetAccessPoint     ListAccessPoints   
   */
  deleteAccessPoint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Object Lambda Access Point. The following actions are related to DeleteAccessPointForObjectLambda:    CreateAccessPointForObjectLambda     GetAccessPointForObjectLambda     ListAccessPointsForObjectLambda   
   */
  deleteAccessPointForObjectLambda(params: S3Control.Types.DeleteAccessPointForObjectLambdaRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Object Lambda Access Point. The following actions are related to DeleteAccessPointForObjectLambda:    CreateAccessPointForObjectLambda     GetAccessPointForObjectLambda     ListAccessPointsForObjectLambda   
   */
  deleteAccessPointForObjectLambda(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the access point policy for the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteAccessPointPolicy:    PutAccessPointPolicy     GetAccessPointPolicy   
   */
  deleteAccessPointPolicy(params: S3Control.Types.DeleteAccessPointPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the access point policy for the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteAccessPointPolicy:    PutAccessPointPolicy     GetAccessPointPolicy   
   */
  deleteAccessPointPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the resource policy for an Object Lambda Access Point. The following actions are related to DeleteAccessPointPolicyForObjectLambda:    GetAccessPointPolicyForObjectLambda     PutAccessPointPolicyForObjectLambda   
   */
  deleteAccessPointPolicyForObjectLambda(params: S3Control.Types.DeleteAccessPointPolicyForObjectLambdaRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the resource policy for an Object Lambda Access Point. The following actions are related to DeleteAccessPointPolicyForObjectLambda:    GetAccessPointPolicyForObjectLambda     PutAccessPointPolicyForObjectLambda   
   */
  deleteAccessPointPolicyForObjectLambda(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see DeleteBucket in the Amazon S3 API Reference.   Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.  Related Resources     CreateBucket     GetBucket     DeleteObject   
   */
  deleteBucket(params: S3Control.Types.DeleteBucketRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see DeleteBucket in the Amazon S3 API Reference.   Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.  Related Resources     CreateBucket     GetBucket     DeleteObject   
   */
  deleteBucket(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete an S3 bucket's lifecycle configuration, see DeleteBucketLifecycle in the Amazon S3 API Reference.   Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. To use this operation, you must have permission to perform the s3-outposts:PutLifecycleConfiguration action. By default, the bucket owner has this permission and the Outposts bucket owner can grant this permission to others. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. For more information about object expiration, see Elements to Describe Lifecycle Actions. Related actions include:    PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration   
   */
  deleteBucketLifecycleConfiguration(params: S3Control.Types.DeleteBucketLifecycleConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete an S3 bucket's lifecycle configuration, see DeleteBucketLifecycle in the Amazon S3 API Reference.   Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. To use this operation, you must have permission to perform the s3-outposts:PutLifecycleConfiguration action. By default, the bucket owner has this permission and the Outposts bucket owner can grant this permission to others. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. For more information about object expiration, see Elements to Describe Lifecycle Actions. Related actions include:    PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration   
   */
  deleteBucketLifecycleConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy, see DeleteBucketPolicy in the Amazon S3 API Reference.   This implementation of the DELETE action uses the policy subresource to delete the policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the s3-outposts:DeleteBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account to use this action. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. If you don't have DeleteBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.   As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.  For more information about bucket policies, see Using Bucket Policies and User Policies.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteBucketPolicy:    GetBucketPolicy     PutBucketPolicy   
   */
  deleteBucketPolicy(params: S3Control.Types.DeleteBucketPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy, see DeleteBucketPolicy in the Amazon S3 API Reference.   This implementation of the DELETE action uses the policy subresource to delete the policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the s3-outposts:DeleteBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account to use this action. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. If you don't have DeleteBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.   As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.  For more information about bucket policies, see Using Bucket Policies and User Policies.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteBucketPolicy:    GetBucketPolicy     PutBucketPolicy   
   */
  deleteBucketPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This operation deletes an Amazon S3 on Outposts bucket's replication configuration. To delete an S3 bucket's replication configuration, see DeleteBucketReplication in the Amazon S3 API Reference.   Deletes the replication configuration from the specified S3 on Outposts bucket. To use this operation, you must have permissions to perform the s3-outposts:PutReplicationConfiguration action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see Setting up IAM with S3 on Outposts and Managing access to S3 on Outposts buckets in the Amazon S3 User Guide.  It can take a while to propagate PUT or DELETE requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a GET request soon after a PUT or DELETE request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the Amazon S3 User Guide. The following operations are related to DeleteBucketReplication:    PutBucketReplication     GetBucketReplication   
   */
  deleteBucketReplication(params: S3Control.Types.DeleteBucketReplicationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This operation deletes an Amazon S3 on Outposts bucket's replication configuration. To delete an S3 bucket's replication configuration, see DeleteBucketReplication in the Amazon S3 API Reference.   Deletes the replication configuration from the specified S3 on Outposts bucket. To use this operation, you must have permissions to perform the s3-outposts:PutReplicationConfiguration action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see Setting up IAM with S3 on Outposts and Managing access to S3 on Outposts buckets in the Amazon S3 User Guide.  It can take a while to propagate PUT or DELETE requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a GET request soon after a PUT or DELETE request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the Amazon S3 User Guide. The following operations are related to DeleteBucketReplication:    PutBucketReplication     GetBucketReplication   
   */
  deleteBucketReplication(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action deletes an Amazon S3 on Outposts bucket's tags. To delete an S3 bucket tags, see DeleteBucketTagging in the Amazon S3 API Reference.   Deletes the tags from the Outposts bucket. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. To use this action, you must have permission to perform the PutBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteBucketTagging:    GetBucketTagging     PutBucketTagging   
   */
  deleteBucketTagging(params: S3Control.Types.DeleteBucketTaggingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action deletes an Amazon S3 on Outposts bucket's tags. To delete an S3 bucket tags, see DeleteBucketTagging in the Amazon S3 API Reference.   Deletes the tags from the Outposts bucket. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. To use this action, you must have permission to perform the PutBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteBucketTagging:    GetBucketTagging     PutBucketTagging   
   */
  deleteBucketTagging(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the entire tag set from the specified S3 Batch Operations job. To use the DeleteJobTagging operation, you must have permission to perform the s3:DeleteJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide.  Related actions include:    CreateJob     GetJobTagging     PutJobTagging   
   */
  deleteJobTagging(params: S3Control.Types.DeleteJobTaggingRequest, callback?: (err: AWSError, data: S3Control.Types.DeleteJobTaggingResult) => void): Request<S3Control.Types.DeleteJobTaggingResult, AWSError>;
  /**
   * Removes the entire tag set from the specified S3 Batch Operations job. To use the DeleteJobTagging operation, you must have permission to perform the s3:DeleteJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide.  Related actions include:    CreateJob     GetJobTagging     PutJobTagging   
   */
  deleteJobTagging(callback?: (err: AWSError, data: S3Control.Types.DeleteJobTaggingResult) => void): Request<S3Control.Types.DeleteJobTaggingResult, AWSError>;
  /**
   * Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point, only the Multi-Region Access Point itself. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with DescribeMultiRegionAccessPointOperation. The following actions are related to DeleteMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     GetMultiRegionAccessPoint     ListMultiRegionAccessPoints   
   */
  deleteMultiRegionAccessPoint(params: S3Control.Types.DeleteMultiRegionAccessPointRequest, callback?: (err: AWSError, data: S3Control.Types.DeleteMultiRegionAccessPointResult) => void): Request<S3Control.Types.DeleteMultiRegionAccessPointResult, AWSError>;
  /**
   * Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point, only the Multi-Region Access Point itself. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with DescribeMultiRegionAccessPointOperation. The following actions are related to DeleteMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     GetMultiRegionAccessPoint     ListMultiRegionAccessPoints   
   */
  deleteMultiRegionAccessPoint(callback?: (err: AWSError, data: S3Control.Types.DeleteMultiRegionAccessPointResult) => void): Request<S3Control.Types.DeleteMultiRegionAccessPointResult, AWSError>;
  /**
   * Removes the PublicAccessBlock configuration for an Amazon Web Services account. For more information, see  Using Amazon S3 block public access. Related actions include:    GetPublicAccessBlock     PutPublicAccessBlock   
   */
  deletePublicAccessBlock(params: S3Control.Types.DeletePublicAccessBlockRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the PublicAccessBlock configuration for an Amazon Web Services account. For more information, see  Using Amazon S3 block public access. Related actions include:    GetPublicAccessBlock     PutPublicAccessBlock   
   */
  deletePublicAccessBlock(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:DeleteStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  deleteStorageLensConfiguration(params: S3Control.Types.DeleteStorageLensConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:DeleteStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  deleteStorageLensConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:DeleteStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  deleteStorageLensConfigurationTagging(params: S3Control.Types.DeleteStorageLensConfigurationTaggingRequest, callback?: (err: AWSError, data: S3Control.Types.DeleteStorageLensConfigurationTaggingResult) => void): Request<S3Control.Types.DeleteStorageLensConfigurationTaggingResult, AWSError>;
  /**
   * Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:DeleteStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  deleteStorageLensConfigurationTagging(callback?: (err: AWSError, data: S3Control.Types.DeleteStorageLensConfigurationTaggingResult) => void): Request<S3Control.Types.DeleteStorageLensConfigurationTaggingResult, AWSError>;
  /**
   *  Deletes an existing S3 Storage Lens group. To use this operation, you must have the permission to perform the s3:DeleteStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.
   */
  deleteStorageLensGroup(params: S3Control.Types.DeleteStorageLensGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes an existing S3 Storage Lens group. To use this operation, you must have the permission to perform the s3:DeleteStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.
   */
  deleteStorageLensGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the configuration parameters and status for a Batch Operations job. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Related actions include:    CreateJob     ListJobs     UpdateJobPriority     UpdateJobStatus   
   */
  describeJob(params: S3Control.Types.DescribeJobRequest, callback?: (err: AWSError, data: S3Control.Types.DescribeJobResult) => void): Request<S3Control.Types.DescribeJobResult, AWSError>;
  /**
   * Retrieves the configuration parameters and status for a Batch Operations job. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Related actions include:    CreateJob     ListJobs     UpdateJobPriority     UpdateJobStatus   
   */
  describeJob(callback?: (err: AWSError, data: S3Control.Types.DescribeJobResult) => void): Request<S3Control.Types.DescribeJobResult, AWSError>;
  /**
   * Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information about managing Multi-Region Access Points and how asynchronous requests work, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DeleteMultiRegionAccessPoint     GetMultiRegionAccessPoint     ListMultiRegionAccessPoints   
   */
  describeMultiRegionAccessPointOperation(params: S3Control.Types.DescribeMultiRegionAccessPointOperationRequest, callback?: (err: AWSError, data: S3Control.Types.DescribeMultiRegionAccessPointOperationResult) => void): Request<S3Control.Types.DescribeMultiRegionAccessPointOperationResult, AWSError>;
  /**
   * Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information about managing Multi-Region Access Points and how asynchronous requests work, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DeleteMultiRegionAccessPoint     GetMultiRegionAccessPoint     ListMultiRegionAccessPoints   
   */
  describeMultiRegionAccessPointOperation(callback?: (err: AWSError, data: S3Control.Types.DescribeMultiRegionAccessPointOperationResult) => void): Request<S3Control.Types.DescribeMultiRegionAccessPointOperationResult, AWSError>;
  /**
   * Dissociates the Amazon Web Services IAM Identity Center instance from the S3 Access Grants instance.   Permissions  You must have the s3:DissociateAccessGrantsIdentityCenter permission to use this operation.   Additional Permissions  You must have the sso:DeleteApplication permission to use this operation.   
   */
  dissociateAccessGrantsIdentityCenter(params: S3Control.Types.DissociateAccessGrantsIdentityCenterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Dissociates the Amazon Web Services IAM Identity Center instance from the S3 Access Grants instance.   Permissions  You must have the s3:DissociateAccessGrantsIdentityCenter permission to use this operation.   Additional Permissions  You must have the sso:DeleteApplication permission to use this operation.   
   */
  dissociateAccessGrantsIdentityCenter(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Get the details of an access grant from your S3 Access Grants instance.  Permissions  You must have the s3:GetAccessGrant permission to use this operation.   
   */
  getAccessGrant(params: S3Control.Types.GetAccessGrantRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessGrantResult) => void): Request<S3Control.Types.GetAccessGrantResult, AWSError>;
  /**
   * Get the details of an access grant from your S3 Access Grants instance.  Permissions  You must have the s3:GetAccessGrant permission to use this operation.   
   */
  getAccessGrant(callback?: (err: AWSError, data: S3Control.Types.GetAccessGrantResult) => void): Request<S3Control.Types.GetAccessGrantResult, AWSError>;
  /**
   * Retrieves the S3 Access Grants instance for a Region in your account.   Permissions  You must have the s3:GetAccessGrantsInstance permission to use this operation.   
   */
  getAccessGrantsInstance(params: S3Control.Types.GetAccessGrantsInstanceRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessGrantsInstanceResult) => void): Request<S3Control.Types.GetAccessGrantsInstanceResult, AWSError>;
  /**
   * Retrieves the S3 Access Grants instance for a Region in your account.   Permissions  You must have the s3:GetAccessGrantsInstance permission to use this operation.   
   */
  getAccessGrantsInstance(callback?: (err: AWSError, data: S3Control.Types.GetAccessGrantsInstanceResult) => void): Request<S3Control.Types.GetAccessGrantsInstanceResult, AWSError>;
  /**
   * Retrieve the S3 Access Grants instance that contains a particular prefix.   Permissions  You must have the s3:GetAccessGrantsInstanceForPrefix permission for the caller account to use this operation.   Additional Permissions  The prefix owner account must grant you the following permissions to their S3 Access Grants instance: s3:GetAccessGrantsInstanceForPrefix.   
   */
  getAccessGrantsInstanceForPrefix(params: S3Control.Types.GetAccessGrantsInstanceForPrefixRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessGrantsInstanceForPrefixResult) => void): Request<S3Control.Types.GetAccessGrantsInstanceForPrefixResult, AWSError>;
  /**
   * Retrieve the S3 Access Grants instance that contains a particular prefix.   Permissions  You must have the s3:GetAccessGrantsInstanceForPrefix permission for the caller account to use this operation.   Additional Permissions  The prefix owner account must grant you the following permissions to their S3 Access Grants instance: s3:GetAccessGrantsInstanceForPrefix.   
   */
  getAccessGrantsInstanceForPrefix(callback?: (err: AWSError, data: S3Control.Types.GetAccessGrantsInstanceForPrefixResult) => void): Request<S3Control.Types.GetAccessGrantsInstanceForPrefixResult, AWSError>;
  /**
   * Returns the resource policy of the S3 Access Grants instance.   Permissions  You must have the s3:GetAccessGrantsInstanceResourcePolicy permission to use this operation.   
   */
  getAccessGrantsInstanceResourcePolicy(params: S3Control.Types.GetAccessGrantsInstanceResourcePolicyRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessGrantsInstanceResourcePolicyResult) => void): Request<S3Control.Types.GetAccessGrantsInstanceResourcePolicyResult, AWSError>;
  /**
   * Returns the resource policy of the S3 Access Grants instance.   Permissions  You must have the s3:GetAccessGrantsInstanceResourcePolicy permission to use this operation.   
   */
  getAccessGrantsInstanceResourcePolicy(callback?: (err: AWSError, data: S3Control.Types.GetAccessGrantsInstanceResourcePolicyResult) => void): Request<S3Control.Types.GetAccessGrantsInstanceResourcePolicyResult, AWSError>;
  /**
   * Retrieves the details of a particular location registered in your S3 Access Grants instance.   Permissions  You must have the s3:GetAccessGrantsLocation permission to use this operation.   
   */
  getAccessGrantsLocation(params: S3Control.Types.GetAccessGrantsLocationRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessGrantsLocationResult) => void): Request<S3Control.Types.GetAccessGrantsLocationResult, AWSError>;
  /**
   * Retrieves the details of a particular location registered in your S3 Access Grants instance.   Permissions  You must have the s3:GetAccessGrantsLocation permission to use this operation.   
   */
  getAccessGrantsLocation(callback?: (err: AWSError, data: S3Control.Types.GetAccessGrantsLocationResult) => void): Request<S3Control.Types.GetAccessGrantsLocationResult, AWSError>;
  /**
   * Returns configuration information about the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetAccessPoint:    CreateAccessPoint     DeleteAccessPoint     ListAccessPoints   
   */
  getAccessPoint(params: S3Control.Types.GetAccessPointRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessPointResult) => void): Request<S3Control.Types.GetAccessPointResult, AWSError>;
  /**
   * Returns configuration information about the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetAccessPoint:    CreateAccessPoint     DeleteAccessPoint     ListAccessPoints   
   */
  getAccessPoint(callback?: (err: AWSError, data: S3Control.Types.GetAccessPointResult) => void): Request<S3Control.Types.GetAccessPointResult, AWSError>;
  /**
   * Returns configuration for an Object Lambda Access Point. The following actions are related to GetAccessPointConfigurationForObjectLambda:    PutAccessPointConfigurationForObjectLambda   
   */
  getAccessPointConfigurationForObjectLambda(params: S3Control.Types.GetAccessPointConfigurationForObjectLambdaRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessPointConfigurationForObjectLambdaResult) => void): Request<S3Control.Types.GetAccessPointConfigurationForObjectLambdaResult, AWSError>;
  /**
   * Returns configuration for an Object Lambda Access Point. The following actions are related to GetAccessPointConfigurationForObjectLambda:    PutAccessPointConfigurationForObjectLambda   
   */
  getAccessPointConfigurationForObjectLambda(callback?: (err: AWSError, data: S3Control.Types.GetAccessPointConfigurationForObjectLambdaResult) => void): Request<S3Control.Types.GetAccessPointConfigurationForObjectLambdaResult, AWSError>;
  /**
   * Returns configuration information about the specified Object Lambda Access Point The following actions are related to GetAccessPointForObjectLambda:    CreateAccessPointForObjectLambda     DeleteAccessPointForObjectLambda     ListAccessPointsForObjectLambda   
   */
  getAccessPointForObjectLambda(params: S3Control.Types.GetAccessPointForObjectLambdaRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessPointForObjectLambdaResult) => void): Request<S3Control.Types.GetAccessPointForObjectLambdaResult, AWSError>;
  /**
   * Returns configuration information about the specified Object Lambda Access Point The following actions are related to GetAccessPointForObjectLambda:    CreateAccessPointForObjectLambda     DeleteAccessPointForObjectLambda     ListAccessPointsForObjectLambda   
   */
  getAccessPointForObjectLambda(callback?: (err: AWSError, data: S3Control.Types.GetAccessPointForObjectLambdaResult) => void): Request<S3Control.Types.GetAccessPointForObjectLambdaResult, AWSError>;
  /**
   * Returns the access point policy associated with the specified access point. The following actions are related to GetAccessPointPolicy:    PutAccessPointPolicy     DeleteAccessPointPolicy   
   */
  getAccessPointPolicy(params: S3Control.Types.GetAccessPointPolicyRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyResult) => void): Request<S3Control.Types.GetAccessPointPolicyResult, AWSError>;
  /**
   * Returns the access point policy associated with the specified access point. The following actions are related to GetAccessPointPolicy:    PutAccessPointPolicy     DeleteAccessPointPolicy   
   */
  getAccessPointPolicy(callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyResult) => void): Request<S3Control.Types.GetAccessPointPolicyResult, AWSError>;
  /**
   * Returns the resource policy for an Object Lambda Access Point. The following actions are related to GetAccessPointPolicyForObjectLambda:    DeleteAccessPointPolicyForObjectLambda     PutAccessPointPolicyForObjectLambda   
   */
  getAccessPointPolicyForObjectLambda(params: S3Control.Types.GetAccessPointPolicyForObjectLambdaRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyForObjectLambdaResult) => void): Request<S3Control.Types.GetAccessPointPolicyForObjectLambdaResult, AWSError>;
  /**
   * Returns the resource policy for an Object Lambda Access Point. The following actions are related to GetAccessPointPolicyForObjectLambda:    DeleteAccessPointPolicyForObjectLambda     PutAccessPointPolicyForObjectLambda   
   */
  getAccessPointPolicyForObjectLambda(callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyForObjectLambdaResult) => void): Request<S3Control.Types.GetAccessPointPolicyForObjectLambdaResult, AWSError>;
  /**
   * Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see Managing Data Access with Amazon S3 access points in the Amazon S3 User Guide.
   */
  getAccessPointPolicyStatus(params: S3Control.Types.GetAccessPointPolicyStatusRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyStatusResult) => void): Request<S3Control.Types.GetAccessPointPolicyStatusResult, AWSError>;
  /**
   * Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see Managing Data Access with Amazon S3 access points in the Amazon S3 User Guide.
   */
  getAccessPointPolicyStatus(callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyStatusResult) => void): Request<S3Control.Types.GetAccessPointPolicyStatusResult, AWSError>;
  /**
   * Returns the status of the resource policy associated with an Object Lambda Access Point.
   */
  getAccessPointPolicyStatusForObjectLambda(params: S3Control.Types.GetAccessPointPolicyStatusForObjectLambdaRequest, callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyStatusForObjectLambdaResult) => void): Request<S3Control.Types.GetAccessPointPolicyStatusForObjectLambdaResult, AWSError>;
  /**
   * Returns the status of the resource policy associated with an Object Lambda Access Point.
   */
  getAccessPointPolicyStatusForObjectLambda(callback?: (err: AWSError, data: S3Control.Types.GetAccessPointPolicyStatusForObjectLambdaResult) => void): Request<S3Control.Types.GetAccessPointPolicyStatusForObjectLambdaResult, AWSError>;
  /**
   * Gets an Amazon S3 on Outposts bucket. For more information, see  Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the s3-outposts:GetBucket permissions on the specified Outposts bucket and belong to the Outposts bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket.   If you don't have s3-outposts:GetBucket permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error. The following actions are related to GetBucket for Amazon S3 on Outposts: All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.    PutObject     CreateBucket     DeleteBucket   
   */
  getBucket(params: S3Control.Types.GetBucketRequest, callback?: (err: AWSError, data: S3Control.Types.GetBucketResult) => void): Request<S3Control.Types.GetBucketResult, AWSError>;
  /**
   * Gets an Amazon S3 on Outposts bucket. For more information, see  Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the s3-outposts:GetBucket permissions on the specified Outposts bucket and belong to the Outposts bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket.   If you don't have s3-outposts:GetBucket permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error. The following actions are related to GetBucket for Amazon S3 on Outposts: All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.    PutObject     CreateBucket     DeleteBucket   
   */
  getBucket(callback?: (err: AWSError, data: S3Control.Types.GetBucketResult) => void): Request<S3Control.Types.GetBucketResult, AWSError>;
  /**
   *  This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3 bucket's lifecycle configuration, see GetBucketLifecycleConfiguration in the Amazon S3 API Reference.   Returns the lifecycle configuration information set on the Outposts bucket. For more information, see Using Amazon S3 on Outposts and for information about lifecycle configuration, see  Object Lifecycle Management in Amazon S3 User Guide. To use this action, you must have permission to perform the s3-outposts:GetLifecycleConfiguration action. The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.  GetBucketLifecycleConfiguration has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following actions are related to GetBucketLifecycleConfiguration:    PutBucketLifecycleConfiguration     DeleteBucketLifecycleConfiguration   
   */
  getBucketLifecycleConfiguration(params: S3Control.Types.GetBucketLifecycleConfigurationRequest, callback?: (err: AWSError, data: S3Control.Types.GetBucketLifecycleConfigurationResult) => void): Request<S3Control.Types.GetBucketLifecycleConfigurationResult, AWSError>;
  /**
   *  This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3 bucket's lifecycle configuration, see GetBucketLifecycleConfiguration in the Amazon S3 API Reference.   Returns the lifecycle configuration information set on the Outposts bucket. For more information, see Using Amazon S3 on Outposts and for information about lifecycle configuration, see  Object Lifecycle Management in Amazon S3 User Guide. To use this action, you must have permission to perform the s3-outposts:GetLifecycleConfiguration action. The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.  GetBucketLifecycleConfiguration has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following actions are related to GetBucketLifecycleConfiguration:    PutBucketLifecycleConfiguration     DeleteBucketLifecycleConfiguration   
   */
  getBucketLifecycleConfiguration(callback?: (err: AWSError, data: S3Control.Types.GetBucketLifecycleConfigurationResult) => void): Request<S3Control.Types.GetBucketLifecycleConfigurationResult, AWSError>;
  /**
   *  This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3 bucket, see GetBucketPolicy in the Amazon S3 API Reference.   Returns the policy of a specified Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the GetBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don't have s3-outposts:GetBucketPolicy permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error.  As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.  For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetBucketPolicy:    GetObject     PutBucketPolicy     DeleteBucketPolicy   
   */
  getBucketPolicy(params: S3Control.Types.GetBucketPolicyRequest, callback?: (err: AWSError, data: S3Control.Types.GetBucketPolicyResult) => void): Request<S3Control.Types.GetBucketPolicyResult, AWSError>;
  /**
   *  This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3 bucket, see GetBucketPolicy in the Amazon S3 API Reference.   Returns the policy of a specified Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the GetBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don't have s3-outposts:GetBucketPolicy permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error.  As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.  For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetBucketPolicy:    GetObject     PutBucketPolicy     DeleteBucketPolicy   
   */
  getBucketPolicy(callback?: (err: AWSError, data: S3Control.Types.GetBucketPolicyResult) => void): Request<S3Control.Types.GetBucketPolicyResult, AWSError>;
  /**
   *  This operation gets an Amazon S3 on Outposts bucket's replication configuration. To get an S3 bucket's replication configuration, see GetBucketReplication in the Amazon S3 API Reference.   Returns the replication configuration of an S3 on Outposts bucket. For more information about S3 on Outposts, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the Amazon S3 User Guide.  It can take a while to propagate PUT or DELETE requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a GET request soon after a PUT or DELETE request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.  This action requires permissions for the s3-outposts:GetReplicationConfiguration action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see Setting up IAM with S3 on Outposts and Managing access to S3 on Outposts bucket in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. If you include the Filter element in a replication configuration, you must also include the DeleteMarkerReplication, Status, and Priority elements. The response also returns those elements. For information about S3 on Outposts replication failure reasons, see Replication failure reasons in the Amazon S3 User Guide. The following operations are related to GetBucketReplication:    PutBucketReplication     DeleteBucketReplication   
   */
  getBucketReplication(params: S3Control.Types.GetBucketReplicationRequest, callback?: (err: AWSError, data: S3Control.Types.GetBucketReplicationResult) => void): Request<S3Control.Types.GetBucketReplicationResult, AWSError>;
  /**
   *  This operation gets an Amazon S3 on Outposts bucket's replication configuration. To get an S3 bucket's replication configuration, see GetBucketReplication in the Amazon S3 API Reference.   Returns the replication configuration of an S3 on Outposts bucket. For more information about S3 on Outposts, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the Amazon S3 User Guide.  It can take a while to propagate PUT or DELETE requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a GET request soon after a PUT or DELETE request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.  This action requires permissions for the s3-outposts:GetReplicationConfiguration action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see Setting up IAM with S3 on Outposts and Managing access to S3 on Outposts bucket in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. If you include the Filter element in a replication configuration, you must also include the DeleteMarkerReplication, Status, and Priority elements. The response also returns those elements. For information about S3 on Outposts replication failure reasons, see Replication failure reasons in the Amazon S3 User Guide. The following operations are related to GetBucketReplication:    PutBucketReplication     DeleteBucketReplication   
   */
  getBucketReplication(callback?: (err: AWSError, data: S3Control.Types.GetBucketReplicationResult) => void): Request<S3Control.Types.GetBucketReplicationResult, AWSError>;
  /**
   *  This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see GetBucketTagging in the Amazon S3 API Reference.   Returns the tag set associated with the Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. To use this action, you must have permission to perform the GetBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  GetBucketTagging has the following special error:   Error code: NoSuchTagSetError    Description: There is no tag set associated with the bucket.     All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetBucketTagging:    PutBucketTagging     DeleteBucketTagging   
   */
  getBucketTagging(params: S3Control.Types.GetBucketTaggingRequest, callback?: (err: AWSError, data: S3Control.Types.GetBucketTaggingResult) => void): Request<S3Control.Types.GetBucketTaggingResult, AWSError>;
  /**
   *  This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see GetBucketTagging in the Amazon S3 API Reference.   Returns the tag set associated with the Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. To use this action, you must have permission to perform the GetBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  GetBucketTagging has the following special error:   Error code: NoSuchTagSetError    Description: There is no tag set associated with the bucket.     All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetBucketTagging:    PutBucketTagging     DeleteBucketTagging   
   */
  getBucketTagging(callback?: (err: AWSError, data: S3Control.Types.GetBucketTaggingResult) => void): Request<S3Control.Types.GetBucketTaggingResult, AWSError>;
  /**
   *  This operation returns the versioning state for S3 on Outposts buckets only. To return the versioning state for an S3 bucket, see GetBucketVersioning in the Amazon S3 API Reference.   Returns the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures. If you've never set versioning on your bucket, it has no versioning state. In that case, the GetBucketVersioning request does not return a versioning state value. For more information about versioning, see Versioning in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following operations are related to GetBucketVersioning for S3 on Outposts.    PutBucketVersioning     PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration   
   */
  getBucketVersioning(params: S3Control.Types.GetBucketVersioningRequest, callback?: (err: AWSError, data: S3Control.Types.GetBucketVersioningResult) => void): Request<S3Control.Types.GetBucketVersioningResult, AWSError>;
  /**
   *  This operation returns the versioning state for S3 on Outposts buckets only. To return the versioning state for an S3 bucket, see GetBucketVersioning in the Amazon S3 API Reference.   Returns the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures. If you've never set versioning on your bucket, it has no versioning state. In that case, the GetBucketVersioning request does not return a versioning state value. For more information about versioning, see Versioning in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following operations are related to GetBucketVersioning for S3 on Outposts.    PutBucketVersioning     PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration   
   */
  getBucketVersioning(callback?: (err: AWSError, data: S3Control.Types.GetBucketVersioningResult) => void): Request<S3Control.Types.GetBucketVersioningResult, AWSError>;
  /**
   * Returns a temporary access credential from S3 Access Grants to the grantee or client application. The temporary credential is an Amazon Web Services STS token that grants them access to the S3 data.   Permissions  You must have the s3:GetDataAccess permission to use this operation.   Additional Permissions  The IAM role that S3 Access Grants assumes must have the following permissions specified in the trust policy when registering the location: sts:AssumeRole, for directory users or groups sts:SetContext, and for IAM users or roles sts:SourceIdentity.   
   */
  getDataAccess(params: S3Control.Types.GetDataAccessRequest, callback?: (err: AWSError, data: S3Control.Types.GetDataAccessResult) => void): Request<S3Control.Types.GetDataAccessResult, AWSError>;
  /**
   * Returns a temporary access credential from S3 Access Grants to the grantee or client application. The temporary credential is an Amazon Web Services STS token that grants them access to the S3 data.   Permissions  You must have the s3:GetDataAccess permission to use this operation.   Additional Permissions  The IAM role that S3 Access Grants assumes must have the following permissions specified in the trust policy when registering the location: sts:AssumeRole, for directory users or groups sts:SetContext, and for IAM users or roles sts:SourceIdentity.   
   */
  getDataAccess(callback?: (err: AWSError, data: S3Control.Types.GetDataAccessResult) => void): Request<S3Control.Types.GetDataAccessResult, AWSError>;
  /**
   * Returns the tags on an S3 Batch Operations job. To use the GetJobTagging operation, you must have permission to perform the s3:GetJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide.  Related actions include:    CreateJob     PutJobTagging     DeleteJobTagging   
   */
  getJobTagging(params: S3Control.Types.GetJobTaggingRequest, callback?: (err: AWSError, data: S3Control.Types.GetJobTaggingResult) => void): Request<S3Control.Types.GetJobTaggingResult, AWSError>;
  /**
   * Returns the tags on an S3 Batch Operations job. To use the GetJobTagging operation, you must have permission to perform the s3:GetJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide.  Related actions include:    CreateJob     PutJobTagging     DeleteJobTagging   
   */
  getJobTagging(callback?: (err: AWSError, data: S3Control.Types.GetJobTaggingResult) => void): Request<S3Control.Types.GetJobTaggingResult, AWSError>;
  /**
   * Returns configuration information about the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DeleteMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     ListMultiRegionAccessPoints   
   */
  getMultiRegionAccessPoint(params: S3Control.Types.GetMultiRegionAccessPointRequest, callback?: (err: AWSError, data: S3Control.Types.GetMultiRegionAccessPointResult) => void): Request<S3Control.Types.GetMultiRegionAccessPointResult, AWSError>;
  /**
   * Returns configuration information about the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DeleteMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     ListMultiRegionAccessPoints   
   */
  getMultiRegionAccessPoint(callback?: (err: AWSError, data: S3Control.Types.GetMultiRegionAccessPointResult) => void): Request<S3Control.Types.GetMultiRegionAccessPointResult, AWSError>;
  /**
   * Returns the access control policy of the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPointPolicy:    GetMultiRegionAccessPointPolicyStatus     PutMultiRegionAccessPointPolicy   
   */
  getMultiRegionAccessPointPolicy(params: S3Control.Types.GetMultiRegionAccessPointPolicyRequest, callback?: (err: AWSError, data: S3Control.Types.GetMultiRegionAccessPointPolicyResult) => void): Request<S3Control.Types.GetMultiRegionAccessPointPolicyResult, AWSError>;
  /**
   * Returns the access control policy of the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPointPolicy:    GetMultiRegionAccessPointPolicyStatus     PutMultiRegionAccessPointPolicy   
   */
  getMultiRegionAccessPointPolicy(callback?: (err: AWSError, data: S3Control.Types.GetMultiRegionAccessPointPolicyResult) => void): Request<S3Control.Types.GetMultiRegionAccessPointPolicyResult, AWSError>;
  /**
   * Indicates whether the specified Multi-Region Access Point has an access control policy that allows public access. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPointPolicyStatus:    GetMultiRegionAccessPointPolicy     PutMultiRegionAccessPointPolicy   
   */
  getMultiRegionAccessPointPolicyStatus(params: S3Control.Types.GetMultiRegionAccessPointPolicyStatusRequest, callback?: (err: AWSError, data: S3Control.Types.GetMultiRegionAccessPointPolicyStatusResult) => void): Request<S3Control.Types.GetMultiRegionAccessPointPolicyStatusResult, AWSError>;
  /**
   * Indicates whether the specified Multi-Region Access Point has an access control policy that allows public access. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPointPolicyStatus:    GetMultiRegionAccessPointPolicy     PutMultiRegionAccessPointPolicy   
   */
  getMultiRegionAccessPointPolicyStatus(callback?: (err: AWSError, data: S3Control.Types.GetMultiRegionAccessPointPolicyStatusResult) => void): Request<S3Control.Types.GetMultiRegionAccessPointPolicyStatusResult, AWSError>;
  /**
   * Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or passive. To obtain routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:    us-east-1     us-west-2     ap-southeast-2     ap-northeast-1     eu-west-1     Your Amazon S3 bucket does not need to be in these five Regions. 
   */
  getMultiRegionAccessPointRoutes(params: S3Control.Types.GetMultiRegionAccessPointRoutesRequest, callback?: (err: AWSError, data: S3Control.Types.GetMultiRegionAccessPointRoutesResult) => void): Request<S3Control.Types.GetMultiRegionAccessPointRoutesResult, AWSError>;
  /**
   * Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or passive. To obtain routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:    us-east-1     us-west-2     ap-southeast-2     ap-northeast-1     eu-west-1     Your Amazon S3 bucket does not need to be in these five Regions. 
   */
  getMultiRegionAccessPointRoutes(callback?: (err: AWSError, data: S3Control.Types.GetMultiRegionAccessPointRoutesResult) => void): Request<S3Control.Types.GetMultiRegionAccessPointRoutesResult, AWSError>;
  /**
   * Retrieves the PublicAccessBlock configuration for an Amazon Web Services account. For more information, see  Using Amazon S3 block public access. Related actions include:    DeletePublicAccessBlock     PutPublicAccessBlock   
   */
  getPublicAccessBlock(params: S3Control.Types.GetPublicAccessBlockRequest, callback?: (err: AWSError, data: S3Control.Types.GetPublicAccessBlockOutput) => void): Request<S3Control.Types.GetPublicAccessBlockOutput, AWSError>;
  /**
   * Retrieves the PublicAccessBlock configuration for an Amazon Web Services account. For more information, see  Using Amazon S3 block public access. Related actions include:    DeletePublicAccessBlock     PutPublicAccessBlock   
   */
  getPublicAccessBlock(callback?: (err: AWSError, data: S3Control.Types.GetPublicAccessBlockOutput) => void): Request<S3Control.Types.GetPublicAccessBlockOutput, AWSError>;
  /**
   * Gets the Amazon S3 Storage Lens configuration. For more information, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:GetStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  getStorageLensConfiguration(params: S3Control.Types.GetStorageLensConfigurationRequest, callback?: (err: AWSError, data: S3Control.Types.GetStorageLensConfigurationResult) => void): Request<S3Control.Types.GetStorageLensConfigurationResult, AWSError>;
  /**
   * Gets the Amazon S3 Storage Lens configuration. For more information, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:GetStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  getStorageLensConfiguration(callback?: (err: AWSError, data: S3Control.Types.GetStorageLensConfigurationResult) => void): Request<S3Control.Types.GetStorageLensConfigurationResult, AWSError>;
  /**
   * Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:GetStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  getStorageLensConfigurationTagging(params: S3Control.Types.GetStorageLensConfigurationTaggingRequest, callback?: (err: AWSError, data: S3Control.Types.GetStorageLensConfigurationTaggingResult) => void): Request<S3Control.Types.GetStorageLensConfigurationTaggingResult, AWSError>;
  /**
   * Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:GetStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  getStorageLensConfigurationTagging(callback?: (err: AWSError, data: S3Control.Types.GetStorageLensConfigurationTaggingResult) => void): Request<S3Control.Types.GetStorageLensConfigurationTaggingResult, AWSError>;
  /**
   *  Retrieves the Storage Lens group configuration details. To use this operation, you must have the permission to perform the s3:GetStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.
   */
  getStorageLensGroup(params: S3Control.Types.GetStorageLensGroupRequest, callback?: (err: AWSError, data: S3Control.Types.GetStorageLensGroupResult) => void): Request<S3Control.Types.GetStorageLensGroupResult, AWSError>;
  /**
   *  Retrieves the Storage Lens group configuration details. To use this operation, you must have the permission to perform the s3:GetStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.
   */
  getStorageLensGroup(callback?: (err: AWSError, data: S3Control.Types.GetStorageLensGroupResult) => void): Request<S3Control.Types.GetStorageLensGroupResult, AWSError>;
  /**
   * Returns the list of access grants in your S3 Access Grants instance.  Permissions  You must have the s3:ListAccessGrants permission to use this operation.   
   */
  listAccessGrants(params: S3Control.Types.ListAccessGrantsRequest, callback?: (err: AWSError, data: S3Control.Types.ListAccessGrantsResult) => void): Request<S3Control.Types.ListAccessGrantsResult, AWSError>;
  /**
   * Returns the list of access grants in your S3 Access Grants instance.  Permissions  You must have the s3:ListAccessGrants permission to use this operation.   
   */
  listAccessGrants(callback?: (err: AWSError, data: S3Control.Types.ListAccessGrantsResult) => void): Request<S3Control.Types.ListAccessGrantsResult, AWSError>;
  /**
   * Returns a list of S3 Access Grants instances. An S3 Access Grants instance serves as a logical grouping for your individual access grants. You can only have one S3 Access Grants instance per Region per account.  Permissions  You must have the s3:ListAccessGrantsInstances permission to use this operation.   
   */
  listAccessGrantsInstances(params: S3Control.Types.ListAccessGrantsInstancesRequest, callback?: (err: AWSError, data: S3Control.Types.ListAccessGrantsInstancesResult) => void): Request<S3Control.Types.ListAccessGrantsInstancesResult, AWSError>;
  /**
   * Returns a list of S3 Access Grants instances. An S3 Access Grants instance serves as a logical grouping for your individual access grants. You can only have one S3 Access Grants instance per Region per account.  Permissions  You must have the s3:ListAccessGrantsInstances permission to use this operation.   
   */
  listAccessGrantsInstances(callback?: (err: AWSError, data: S3Control.Types.ListAccessGrantsInstancesResult) => void): Request<S3Control.Types.ListAccessGrantsInstancesResult, AWSError>;
  /**
   * Returns a list of the locations registered in your S3 Access Grants instance.  Permissions  You must have the s3:ListAccessGrantsLocations permission to use this operation.   
   */
  listAccessGrantsLocations(params: S3Control.Types.ListAccessGrantsLocationsRequest, callback?: (err: AWSError, data: S3Control.Types.ListAccessGrantsLocationsResult) => void): Request<S3Control.Types.ListAccessGrantsLocationsResult, AWSError>;
  /**
   * Returns a list of the locations registered in your S3 Access Grants instance.  Permissions  You must have the s3:ListAccessGrantsLocations permission to use this operation.   
   */
  listAccessGrantsLocations(callback?: (err: AWSError, data: S3Control.Types.ListAccessGrantsLocationsResult) => void): Request<S3Control.Types.ListAccessGrantsLocationsResult, AWSError>;
  /**
   * Returns a list of the access points that are owned by the current account that's associated with the specified bucket. You can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000 access points (or the number specified in maxResults, whichever is less), the response will include a continuation token that you can use to list the additional access points.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to ListAccessPoints:    CreateAccessPoint     DeleteAccessPoint     GetAccessPoint   
   */
  listAccessPoints(params: S3Control.Types.ListAccessPointsRequest, callback?: (err: AWSError, data: S3Control.Types.ListAccessPointsResult) => void): Request<S3Control.Types.ListAccessPointsResult, AWSError>;
  /**
   * Returns a list of the access points that are owned by the current account that's associated with the specified bucket. You can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000 access points (or the number specified in maxResults, whichever is less), the response will include a continuation token that you can use to list the additional access points.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to ListAccessPoints:    CreateAccessPoint     DeleteAccessPoint     GetAccessPoint   
   */
  listAccessPoints(callback?: (err: AWSError, data: S3Control.Types.ListAccessPointsResult) => void): Request<S3Control.Types.ListAccessPointsResult, AWSError>;
  /**
   * Returns some or all (up to 1,000) access points associated with the Object Lambda Access Point per call. If there are more access points than what can be returned in one call, the response will include a continuation token that you can use to list the additional access points. The following actions are related to ListAccessPointsForObjectLambda:    CreateAccessPointForObjectLambda     DeleteAccessPointForObjectLambda     GetAccessPointForObjectLambda   
   */
  listAccessPointsForObjectLambda(params: S3Control.Types.ListAccessPointsForObjectLambdaRequest, callback?: (err: AWSError, data: S3Control.Types.ListAccessPointsForObjectLambdaResult) => void): Request<S3Control.Types.ListAccessPointsForObjectLambdaResult, AWSError>;
  /**
   * Returns some or all (up to 1,000) access points associated with the Object Lambda Access Point per call. If there are more access points than what can be returned in one call, the response will include a continuation token that you can use to list the additional access points. The following actions are related to ListAccessPointsForObjectLambda:    CreateAccessPointForObjectLambda     DeleteAccessPointForObjectLambda     GetAccessPointForObjectLambda   
   */
  listAccessPointsForObjectLambda(callback?: (err: AWSError, data: S3Control.Types.ListAccessPointsForObjectLambdaResult) => void): Request<S3Control.Types.ListAccessPointsForObjectLambdaResult, AWSError>;
  /**
   * Lists current S3 Batch Operations jobs and jobs that have ended within the last 30 days for the Amazon Web Services account making the request. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Related actions include:     CreateJob     DescribeJob     UpdateJobPriority     UpdateJobStatus   
   */
  listJobs(params: S3Control.Types.ListJobsRequest, callback?: (err: AWSError, data: S3Control.Types.ListJobsResult) => void): Request<S3Control.Types.ListJobsResult, AWSError>;
  /**
   * Lists current S3 Batch Operations jobs and jobs that have ended within the last 30 days for the Amazon Web Services account making the request. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Related actions include:     CreateJob     DescribeJob     UpdateJobPriority     UpdateJobStatus   
   */
  listJobs(callback?: (err: AWSError, data: S3Control.Types.ListJobsResult) => void): Request<S3Control.Types.ListJobsResult, AWSError>;
  /**
   * Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account. Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be associated with a single account. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to ListMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DeleteMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     GetMultiRegionAccessPoint   
   */
  listMultiRegionAccessPoints(params: S3Control.Types.ListMultiRegionAccessPointsRequest, callback?: (err: AWSError, data: S3Control.Types.ListMultiRegionAccessPointsResult) => void): Request<S3Control.Types.ListMultiRegionAccessPointsResult, AWSError>;
  /**
   * Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account. Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be associated with a single account. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to ListMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DeleteMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     GetMultiRegionAccessPoint   
   */
  listMultiRegionAccessPoints(callback?: (err: AWSError, data: S3Control.Types.ListMultiRegionAccessPointsResult) => void): Request<S3Control.Types.ListMultiRegionAccessPointsResult, AWSError>;
  /**
   * Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated sender of the request. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and x-amz-outpost-id in your request, see the Examples section.
   */
  listRegionalBuckets(params: S3Control.Types.ListRegionalBucketsRequest, callback?: (err: AWSError, data: S3Control.Types.ListRegionalBucketsResult) => void): Request<S3Control.Types.ListRegionalBucketsResult, AWSError>;
  /**
   * Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated sender of the request. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and x-amz-outpost-id in your request, see the Examples section.
   */
  listRegionalBuckets(callback?: (err: AWSError, data: S3Control.Types.ListRegionalBucketsResult) => void): Request<S3Control.Types.ListRegionalBucketsResult, AWSError>;
  /**
   * Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:ListStorageLensConfigurations action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  listStorageLensConfigurations(params: S3Control.Types.ListStorageLensConfigurationsRequest, callback?: (err: AWSError, data: S3Control.Types.ListStorageLensConfigurationsResult) => void): Request<S3Control.Types.ListStorageLensConfigurationsResult, AWSError>;
  /**
   * Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:ListStorageLensConfigurations action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  listStorageLensConfigurations(callback?: (err: AWSError, data: S3Control.Types.ListStorageLensConfigurationsResult) => void): Request<S3Control.Types.ListStorageLensConfigurationsResult, AWSError>;
  /**
   *  Lists all the Storage Lens groups in the specified home Region.  To use this operation, you must have the permission to perform the s3:ListStorageLensGroups action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.
   */
  listStorageLensGroups(params: S3Control.Types.ListStorageLensGroupsRequest, callback?: (err: AWSError, data: S3Control.Types.ListStorageLensGroupsResult) => void): Request<S3Control.Types.ListStorageLensGroupsResult, AWSError>;
  /**
   *  Lists all the Storage Lens groups in the specified home Region.  To use this operation, you must have the permission to perform the s3:ListStorageLensGroups action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.
   */
  listStorageLensGroups(callback?: (err: AWSError, data: S3Control.Types.ListStorageLensGroupsResult) => void): Request<S3Control.Types.ListStorageLensGroupsResult, AWSError>;
  /**
   * This operation allows you to list all the Amazon Web Services resource tags for a specified resource. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.   Permissions  You must have the s3:ListTagsForResource permission to use this operation.     This operation is only supported for S3 Storage Lens groups and for S3 Access Grants. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.   For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.
   */
  listTagsForResource(params: S3Control.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: S3Control.Types.ListTagsForResourceResult) => void): Request<S3Control.Types.ListTagsForResourceResult, AWSError>;
  /**
   * This operation allows you to list all the Amazon Web Services resource tags for a specified resource. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.   Permissions  You must have the s3:ListTagsForResource permission to use this operation.     This operation is only supported for S3 Storage Lens groups and for S3 Access Grants. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.   For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.
   */
  listTagsForResource(callback?: (err: AWSError, data: S3Control.Types.ListTagsForResourceResult) => void): Request<S3Control.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Updates the resource policy of the S3 Access Grants instance.   Permissions  You must have the s3:PutAccessGrantsInstanceResourcePolicy permission to use this operation.   
   */
  putAccessGrantsInstanceResourcePolicy(params: S3Control.Types.PutAccessGrantsInstanceResourcePolicyRequest, callback?: (err: AWSError, data: S3Control.Types.PutAccessGrantsInstanceResourcePolicyResult) => void): Request<S3Control.Types.PutAccessGrantsInstanceResourcePolicyResult, AWSError>;
  /**
   * Updates the resource policy of the S3 Access Grants instance.   Permissions  You must have the s3:PutAccessGrantsInstanceResourcePolicy permission to use this operation.   
   */
  putAccessGrantsInstanceResourcePolicy(callback?: (err: AWSError, data: S3Control.Types.PutAccessGrantsInstanceResourcePolicyResult) => void): Request<S3Control.Types.PutAccessGrantsInstanceResourcePolicyResult, AWSError>;
  /**
   * Replaces configuration for an Object Lambda Access Point. The following actions are related to PutAccessPointConfigurationForObjectLambda:    GetAccessPointConfigurationForObjectLambda   
   */
  putAccessPointConfigurationForObjectLambda(params: S3Control.Types.PutAccessPointConfigurationForObjectLambdaRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Replaces configuration for an Object Lambda Access Point. The following actions are related to PutAccessPointConfigurationForObjectLambda:    GetAccessPointConfigurationForObjectLambda   
   */
  putAccessPointConfigurationForObjectLambda(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API replaces any existing policy associated with the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutAccessPointPolicy:    GetAccessPointPolicy     DeleteAccessPointPolicy   
   */
  putAccessPointPolicy(params: S3Control.Types.PutAccessPointPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API replaces any existing policy associated with the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutAccessPointPolicy:    GetAccessPointPolicy     DeleteAccessPointPolicy   
   */
  putAccessPointPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see Creating Object Lambda Access Points in the Amazon S3 User Guide. The following actions are related to PutAccessPointPolicyForObjectLambda:    DeleteAccessPointPolicyForObjectLambda     GetAccessPointPolicyForObjectLambda   
   */
  putAccessPointPolicyForObjectLambda(params: S3Control.Types.PutAccessPointPolicyForObjectLambdaRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see Creating Object Lambda Access Points in the Amazon S3 User Guide. The following actions are related to PutAccessPointPolicyForObjectLambda:    DeleteAccessPointPolicyForObjectLambda     GetAccessPointPolicyForObjectLambda   
   */
  putAccessPointPolicyForObjectLambda(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a lifecycle configuration to an S3 bucket, see PutBucketLifecycleConfiguration in the Amazon S3 API Reference.   Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration. Outposts buckets only support lifecycle configurations that delete/expire objects after a certain period of time and abort incomplete multipart uploads.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketLifecycleConfiguration:    GetBucketLifecycleConfiguration     DeleteBucketLifecycleConfiguration   
   */
  putBucketLifecycleConfiguration(params: S3Control.Types.PutBucketLifecycleConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a lifecycle configuration to an S3 bucket, see PutBucketLifecycleConfiguration in the Amazon S3 API Reference.   Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration. Outposts buckets only support lifecycle configurations that delete/expire objects after a certain period of time and abort incomplete multipart uploads.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketLifecycleConfiguration:    GetBucketLifecycleConfiguration     DeleteBucketLifecycleConfiguration   
   */
  putBucketLifecycleConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket, see PutBucketPolicy in the Amazon S3 API Reference.   Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the PutBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account in order to use this action. If you don't have PutBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.   As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.   For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketPolicy:    GetBucketPolicy     DeleteBucketPolicy   
   */
  putBucketPolicy(params: S3Control.Types.PutBucketPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket, see PutBucketPolicy in the Amazon S3 API Reference.   Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the PutBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account in order to use this action. If you don't have PutBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.   As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.   For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketPolicy:    GetBucketPolicy     DeleteBucketPolicy   
   */
  putBucketPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action creates an Amazon S3 on Outposts bucket's replication configuration. To create an S3 bucket's replication configuration, see PutBucketReplication in the Amazon S3 API Reference.   Creates a replication configuration or replaces an existing one. For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the Amazon S3 User Guide.  It can take a while to propagate PUT or DELETE requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a GET request soon after a PUT or DELETE request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.  Specify the replication configuration in the request body. In the replication configuration, you provide the following information:   The name of the destination bucket or buckets where you want S3 on Outposts to replicate objects   The Identity and Access Management (IAM) role that S3 on Outposts can assume to replicate objects on your behalf   Other relevant information, such as replication rules   A replication configuration must include at least one rule and can contain a maximum of 100. Each rule identifies a subset of objects to replicate by filtering the objects in the source Outposts bucket. To choose additional subsets of objects to replicate, add a rule for each subset. To specify a subset of the objects in the source Outposts bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: DeleteMarkerReplication, Status, and Priority. Using PutBucketReplication on Outposts requires that both the source and destination buckets must have versioning enabled. For information about enabling versioning on a bucket, see Managing S3 Versioning for your S3 on Outposts bucket. For information about S3 on Outposts replication failure reasons, see Replication failure reasons in the Amazon S3 User Guide.  Handling Replication of Encrypted Objects  Outposts buckets are encrypted at all times. All the objects in the source Outposts bucket are encrypted and can be replicated. Also, all the replicas in the destination Outposts bucket are encrypted with the same encryption key as the objects in the source Outposts bucket.  Permissions  To create a PutBucketReplication request, you must have s3-outposts:PutReplicationConfiguration permissions for the bucket. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see Setting up IAM with S3 on Outposts and Managing access to S3 on Outposts buckets.   To perform this operation, the user or role must also have the iam:CreateRole and iam:PassRole permissions. For more information, see Granting a user permissions to pass a role to an Amazon Web Services service.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following operations are related to PutBucketReplication:    GetBucketReplication     DeleteBucketReplication   
   */
  putBucketReplication(params: S3Control.Types.PutBucketReplicationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action creates an Amazon S3 on Outposts bucket's replication configuration. To create an S3 bucket's replication configuration, see PutBucketReplication in the Amazon S3 API Reference.   Creates a replication configuration or replaces an existing one. For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the Amazon S3 User Guide.  It can take a while to propagate PUT or DELETE requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a GET request soon after a PUT or DELETE request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.  Specify the replication configuration in the request body. In the replication configuration, you provide the following information:   The name of the destination bucket or buckets where you want S3 on Outposts to replicate objects   The Identity and Access Management (IAM) role that S3 on Outposts can assume to replicate objects on your behalf   Other relevant information, such as replication rules   A replication configuration must include at least one rule and can contain a maximum of 100. Each rule identifies a subset of objects to replicate by filtering the objects in the source Outposts bucket. To choose additional subsets of objects to replicate, add a rule for each subset. To specify a subset of the objects in the source Outposts bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: DeleteMarkerReplication, Status, and Priority. Using PutBucketReplication on Outposts requires that both the source and destination buckets must have versioning enabled. For information about enabling versioning on a bucket, see Managing S3 Versioning for your S3 on Outposts bucket. For information about S3 on Outposts replication failure reasons, see Replication failure reasons in the Amazon S3 User Guide.  Handling Replication of Encrypted Objects  Outposts buckets are encrypted at all times. All the objects in the source Outposts bucket are encrypted and can be replicated. Also, all the replicas in the destination Outposts bucket are encrypted with the same encryption key as the objects in the source Outposts bucket.  Permissions  To create a PutBucketReplication request, you must have s3-outposts:PutReplicationConfiguration permissions for the bucket. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see Setting up IAM with S3 on Outposts and Managing access to S3 on Outposts buckets.   To perform this operation, the user or role must also have the iam:CreateRole and iam:PassRole permissions. For more information, see Granting a user permissions to pass a role to an Amazon Web Services service.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following operations are related to PutBucketReplication:    GetBucketReplication     DeleteBucketReplication   
   */
  putBucketReplication(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see PutBucketTagging in the Amazon S3 API Reference.   Sets the tags for an S3 on Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see Cost allocation and tagging.  Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see  Using cost allocation in Amazon S3 bucket tags.  To use this action, you must have permissions to perform the s3-outposts:PutBucketTagging action. The Outposts bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see  Permissions Related to Bucket Subresource Operations and Managing access permissions to your Amazon S3 resources.  PutBucketTagging has the following special errors:   Error code: InvalidTagError    Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see  User-Defined Tag Restrictions and  Amazon Web Services-Generated Cost Allocation Tag Restrictions.     Error code: MalformedXMLError    Description: The XML provided does not match the schema.     Error code: OperationAbortedError     Description: A conflicting conditional action is currently in progress against this resource. Try again.     Error code: InternalError    Description: The service was unable to apply the provided tag to the bucket.     All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketTagging:    GetBucketTagging     DeleteBucketTagging   
   */
  putBucketTagging(params: S3Control.Types.PutBucketTaggingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see PutBucketTagging in the Amazon S3 API Reference.   Sets the tags for an S3 on Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see Cost allocation and tagging.  Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see  Using cost allocation in Amazon S3 bucket tags.  To use this action, you must have permissions to perform the s3-outposts:PutBucketTagging action. The Outposts bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see  Permissions Related to Bucket Subresource Operations and Managing access permissions to your Amazon S3 resources.  PutBucketTagging has the following special errors:   Error code: InvalidTagError    Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see  User-Defined Tag Restrictions and  Amazon Web Services-Generated Cost Allocation Tag Restrictions.     Error code: MalformedXMLError    Description: The XML provided does not match the schema.     Error code: OperationAbortedError     Description: A conflicting conditional action is currently in progress against this resource. Try again.     Error code: InternalError    Description: The service was unable to apply the provided tag to the bucket.     All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketTagging:    GetBucketTagging     DeleteBucketTagging   
   */
  putBucketTagging(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This operation sets the versioning state for S3 on Outposts buckets only. To set the versioning state for an S3 bucket, see PutBucketVersioning in the Amazon S3 API Reference.   Sets the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures. You can set the versioning state to one of the following:    Enabled - Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.    Suspended - Suspends versioning for the objects in the bucket. All objects added to the bucket receive the version ID null.   If you've never set versioning on your bucket, it has no versioning state. In that case, a  GetBucketVersioning request does not return a versioning state value. When you enable S3 Versioning, for each object in your bucket, you have a current version and zero or more noncurrent versions. You can configure your bucket S3 Lifecycle rules to expire noncurrent versions after a specified time period. For more information, see  Creating and managing a lifecycle configuration for your S3 on Outposts bucket in the Amazon S3 User Guide. If you have an object expiration lifecycle configuration in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration will manage the deletes of the noncurrent object versions in the version-enabled bucket. For more information, see Versioning in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following operations are related to PutBucketVersioning for S3 on Outposts.    GetBucketVersioning     PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration   
   */
  putBucketVersioning(params: S3Control.Types.PutBucketVersioningRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  This operation sets the versioning state for S3 on Outposts buckets only. To set the versioning state for an S3 bucket, see PutBucketVersioning in the Amazon S3 API Reference.   Sets the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures. You can set the versioning state to one of the following:    Enabled - Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.    Suspended - Suspends versioning for the objects in the bucket. All objects added to the bucket receive the version ID null.   If you've never set versioning on your bucket, it has no versioning state. In that case, a  GetBucketVersioning request does not return a versioning state value. When you enable S3 Versioning, for each object in your bucket, you have a current version and zero or more noncurrent versions. You can configure your bucket S3 Lifecycle rules to expire noncurrent versions after a specified time period. For more information, see  Creating and managing a lifecycle configuration for your S3 on Outposts bucket in the Amazon S3 User Guide. If you have an object expiration lifecycle configuration in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration will manage the deletes of the noncurrent object versions in the version-enabled bucket. For more information, see Versioning in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following operations are related to PutBucketVersioning for S3 on Outposts.    GetBucketVersioning     PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration   
   */
  putBucketVersioning(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the supplied tag-set on an S3 Batch Operations job. A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using GetJobTagging, modify that tag set, and use this action to replace the tag set with the one you modified. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide.      If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you are charged for a Tier 1 Request (PUT). For more information, see Amazon S3 pricing.   For deleting existing tags for your Batch Operations job, a DeleteJobTagging request is preferred because it achieves the same result without incurring charges.   A few things to consider about using tags:   Amazon S3 limits the maximum number of tags to 50 tags per job.   You can associate up to 50 tags with a job as long as they have unique tag keys.   A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.   The key and values are case sensitive.   For tagging-related restrictions related to characters and encodings, see User-Defined Tag Restrictions in the Billing and Cost Management User Guide.       To use the PutJobTagging operation, you must have permission to perform the s3:PutJobTagging action. Related actions include:    CreateJob     GetJobTagging     DeleteJobTagging   
   */
  putJobTagging(params: S3Control.Types.PutJobTaggingRequest, callback?: (err: AWSError, data: S3Control.Types.PutJobTaggingResult) => void): Request<S3Control.Types.PutJobTaggingResult, AWSError>;
  /**
   * Sets the supplied tag-set on an S3 Batch Operations job. A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using GetJobTagging, modify that tag set, and use this action to replace the tag set with the one you modified. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide.      If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you are charged for a Tier 1 Request (PUT). For more information, see Amazon S3 pricing.   For deleting existing tags for your Batch Operations job, a DeleteJobTagging request is preferred because it achieves the same result without incurring charges.   A few things to consider about using tags:   Amazon S3 limits the maximum number of tags to 50 tags per job.   You can associate up to 50 tags with a job as long as they have unique tag keys.   A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.   The key and values are case sensitive.   For tagging-related restrictions related to characters and encodings, see User-Defined Tag Restrictions in the Billing and Cost Management User Guide.       To use the PutJobTagging operation, you must have permission to perform the s3:PutJobTagging action. Related actions include:    CreateJob     GetJobTagging     DeleteJobTagging   
   */
  putJobTagging(callback?: (err: AWSError, data: S3Control.Types.PutJobTaggingResult) => void): Request<S3Control.Types.PutJobTaggingResult, AWSError>;
  /**
   * Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only one policy, so a request made to this action replaces any existing policy that is associated with the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to PutMultiRegionAccessPointPolicy:    GetMultiRegionAccessPointPolicy     GetMultiRegionAccessPointPolicyStatus   
   */
  putMultiRegionAccessPointPolicy(params: S3Control.Types.PutMultiRegionAccessPointPolicyRequest, callback?: (err: AWSError, data: S3Control.Types.PutMultiRegionAccessPointPolicyResult) => void): Request<S3Control.Types.PutMultiRegionAccessPointPolicyResult, AWSError>;
  /**
   * Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only one policy, so a request made to this action replaces any existing policy that is associated with the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see Managing Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to PutMultiRegionAccessPointPolicy:    GetMultiRegionAccessPointPolicy     GetMultiRegionAccessPointPolicyStatus   
   */
  putMultiRegionAccessPointPolicy(callback?: (err: AWSError, data: S3Control.Types.PutMultiRegionAccessPointPolicyResult) => void): Request<S3Control.Types.PutMultiRegionAccessPointPolicyResult, AWSError>;
  /**
   * Creates or modifies the PublicAccessBlock configuration for an Amazon Web Services account. For this operation, users must have the s3:PutAccountPublicAccessBlock permission. For more information, see  Using Amazon S3 block public access. Related actions include:    GetPublicAccessBlock     DeletePublicAccessBlock   
   */
  putPublicAccessBlock(params: S3Control.Types.PutPublicAccessBlockRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or modifies the PublicAccessBlock configuration for an Amazon Web Services account. For this operation, users must have the s3:PutAccountPublicAccessBlock permission. For more information, see  Using Amazon S3 block public access. Related actions include:    GetPublicAccessBlock     DeletePublicAccessBlock   
   */
  putPublicAccessBlock(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Working with Amazon S3 Storage Lens in the Amazon S3 User Guide. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:PutStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  putStorageLensConfiguration(params: S3Control.Types.PutStorageLensConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Working with Amazon S3 Storage Lens in the Amazon S3 User Guide. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:PutStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  putStorageLensConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:PutStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  putStorageLensConfigurationTagging(params: S3Control.Types.PutStorageLensConfigurationTaggingRequest, callback?: (err: AWSError, data: S3Control.Types.PutStorageLensConfigurationTaggingResult) => void): Request<S3Control.Types.PutStorageLensConfigurationTaggingResult, AWSError>;
  /**
   * Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:PutStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide. 
   */
  putStorageLensConfigurationTagging(callback?: (err: AWSError, data: S3Control.Types.PutStorageLensConfigurationTaggingResult) => void): Request<S3Control.Types.PutStorageLensConfigurationTaggingResult, AWSError>;
  /**
   * Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the routing status for the specified Regions from active to passive, or from passive to active. A value of 0 indicates a passive status, which means that traffic won't be routed to the specified Region. A value of 100 indicates an active status, which means that traffic will be routed to the specified Region. At least one Region must be active at all times. When the routing configuration is changed, any in-progress operations (uploads, copies, deletes, and so on) to formerly active Regions will continue to run to their final completion state (success or failure). The routing configurations of any Regions that aren’t specified remain unchanged.  Updated routing configurations might not be immediately applied. It can take up to 2 minutes for your changes to take effect.  To submit routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:    us-east-1     us-west-2     ap-southeast-2     ap-northeast-1     eu-west-1     Your Amazon S3 bucket does not need to be in these five Regions. 
   */
  submitMultiRegionAccessPointRoutes(params: S3Control.Types.SubmitMultiRegionAccessPointRoutesRequest, callback?: (err: AWSError, data: S3Control.Types.SubmitMultiRegionAccessPointRoutesResult) => void): Request<S3Control.Types.SubmitMultiRegionAccessPointRoutesResult, AWSError>;
  /**
   * Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the routing status for the specified Regions from active to passive, or from passive to active. A value of 0 indicates a passive status, which means that traffic won't be routed to the specified Region. A value of 100 indicates an active status, which means that traffic will be routed to the specified Region. At least one Region must be active at all times. When the routing configuration is changed, any in-progress operations (uploads, copies, deletes, and so on) to formerly active Regions will continue to run to their final completion state (success or failure). The routing configurations of any Regions that aren’t specified remain unchanged.  Updated routing configurations might not be immediately applied. It can take up to 2 minutes for your changes to take effect.  To submit routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:    us-east-1     us-west-2     ap-southeast-2     ap-northeast-1     eu-west-1     Your Amazon S3 bucket does not need to be in these five Regions. 
   */
  submitMultiRegionAccessPointRoutes(callback?: (err: AWSError, data: S3Control.Types.SubmitMultiRegionAccessPointRoutesResult) => void): Request<S3Control.Types.SubmitMultiRegionAccessPointRoutesResult, AWSError>;
  /**
   *  Creates a new Amazon Web Services resource tag or updates an existing resource tag. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. You can add up to 50 Amazon Web Services resource tags for each S3 resource.   This operation is only supported for S3 Storage Lens groups and for S3 Access Grants. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.    Permissions  You must have the s3:TagResource permission to use this operation.    For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.
   */
  tagResource(params: S3Control.Types.TagResourceRequest, callback?: (err: AWSError, data: S3Control.Types.TagResourceResult) => void): Request<S3Control.Types.TagResourceResult, AWSError>;
  /**
   *  Creates a new Amazon Web Services resource tag or updates an existing resource tag. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. You can add up to 50 Amazon Web Services resource tags for each S3 resource.   This operation is only supported for S3 Storage Lens groups and for S3 Access Grants. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.    Permissions  You must have the s3:TagResource permission to use this operation.    For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.
   */
  tagResource(callback?: (err: AWSError, data: S3Control.Types.TagResourceResult) => void): Request<S3Control.Types.TagResourceResult, AWSError>;
  /**
   *  This operation removes the specified Amazon Web Services resource tags from an S3 resource. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.   This operation is only supported for S3 Storage Lens groups and for S3 Access Grants. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.    Permissions  You must have the s3:UntagResource permission to use this operation.    For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.
   */
  untagResource(params: S3Control.Types.UntagResourceRequest, callback?: (err: AWSError, data: S3Control.Types.UntagResourceResult) => void): Request<S3Control.Types.UntagResourceResult, AWSError>;
  /**
   *  This operation removes the specified Amazon Web Services resource tags from an S3 resource. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.   This operation is only supported for S3 Storage Lens groups and for S3 Access Grants. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.    Permissions  You must have the s3:UntagResource permission to use this operation.    For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.
   */
  untagResource(callback?: (err: AWSError, data: S3Control.Types.UntagResourceResult) => void): Request<S3Control.Types.UntagResourceResult, AWSError>;
  /**
   * Updates the IAM role of a registered location in your S3 Access Grants instance.  Permissions  You must have the s3:UpdateAccessGrantsLocation permission to use this operation.   Additional Permissions  You must also have the following permission: iam:PassRole   
   */
  updateAccessGrantsLocation(params: S3Control.Types.UpdateAccessGrantsLocationRequest, callback?: (err: AWSError, data: S3Control.Types.UpdateAccessGrantsLocationResult) => void): Request<S3Control.Types.UpdateAccessGrantsLocationResult, AWSError>;
  /**
   * Updates the IAM role of a registered location in your S3 Access Grants instance.  Permissions  You must have the s3:UpdateAccessGrantsLocation permission to use this operation.   Additional Permissions  You must also have the following permission: iam:PassRole   
   */
  updateAccessGrantsLocation(callback?: (err: AWSError, data: S3Control.Types.UpdateAccessGrantsLocationResult) => void): Request<S3Control.Types.UpdateAccessGrantsLocationResult, AWSError>;
  /**
   * Updates an existing S3 Batch Operations job's priority. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus   
   */
  updateJobPriority(params: S3Control.Types.UpdateJobPriorityRequest, callback?: (err: AWSError, data: S3Control.Types.UpdateJobPriorityResult) => void): Request<S3Control.Types.UpdateJobPriorityResult, AWSError>;
  /**
   * Updates an existing S3 Batch Operations job's priority. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus   
   */
  updateJobPriority(callback?: (err: AWSError, data: S3Control.Types.UpdateJobPriorityResult) => void): Request<S3Control.Types.UpdateJobPriorityResult, AWSError>;
  /**
   * Updates the status for the specified job. Use this action to confirm that you want to run a job or to cancel an existing job. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus   
   */
  updateJobStatus(params: S3Control.Types.UpdateJobStatusRequest, callback?: (err: AWSError, data: S3Control.Types.UpdateJobStatusResult) => void): Request<S3Control.Types.UpdateJobStatusResult, AWSError>;
  /**
   * Updates the status for the specified job. Use this action to confirm that you want to run a job or to cancel an existing job. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus   
   */
  updateJobStatus(callback?: (err: AWSError, data: S3Control.Types.UpdateJobStatusResult) => void): Request<S3Control.Types.UpdateJobStatusResult, AWSError>;
  /**
   *  Updates the existing Storage Lens group. To use this operation, you must have the permission to perform the s3:UpdateStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.
   */
  updateStorageLensGroup(params: S3Control.Types.UpdateStorageLensGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Updates the existing Storage Lens group. To use this operation, you must have the permission to perform the s3:UpdateStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.
   */
  updateStorageLensGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace S3Control {
  export interface AbortIncompleteMultipartUpload {
    /**
     * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload to the Outposts bucket.
     */
    DaysAfterInitiation?: DaysAfterInitiation;
  }
  export interface AccessControlTranslation {
    /**
     * Specifies the replica ownership.
     */
    Owner: OwnerOverride;
  }
  export type AccessGrantArn = string;
  export type AccessGrantId = string;
  export type AccessGrantsInstanceArn = string;
  export type AccessGrantsInstanceId = string;
  export type AccessGrantsInstancesList = ListAccessGrantsInstanceEntry[];
  export type AccessGrantsList = ListAccessGrantEntry[];
  export type AccessGrantsLocationArn = string;
  export interface AccessGrantsLocationConfiguration {
    /**
     * The S3SubPrefix is appended to the location scope creating the grant scope. Use this field to narrow the scope of the grant to a subset of the location scope. This field is required if the location scope is the default location s3:// because you cannot create a grant for all of your S3 data in the Region and must narrow the scope. For example, if the location scope is the default location s3://, the S3SubPrefx can be a &lt;bucket-name&gt;/*, so the full grant scope path would be s3://&lt;bucket-name&gt;/*. Or the S3SubPrefx can be &lt;bucket-name&gt;/&lt;prefix-name&gt;*, so the full grant scope path would be or s3://&lt;bucket-name&gt;/&lt;prefix-name&gt;*. If the S3SubPrefix includes a prefix, append the wildcard character * after the prefix to indicate that you want to include all object key names in the bucket that start with that prefix. 
     */
    S3SubPrefix?: S3Prefix;
  }
  export type AccessGrantsLocationId = string;
  export type AccessGrantsLocationsList = ListAccessGrantsLocationsEntry[];
  export type AccessKeyId = string;
  export interface AccessPoint {
    /**
     * The name of this access point.
     */
    Name: AccessPointName;
    /**
     * Indicates whether this access point allows access from the public internet. If VpcConfiguration is specified for this access point, then NetworkOrigin is VPC, and the access point doesn't allow access from the public internet. Otherwise, NetworkOrigin is Internet, and the access point allows access from the public internet, subject to the access point and bucket access policies.
     */
    NetworkOrigin: NetworkOrigin;
    /**
     * The virtual private cloud (VPC) configuration for this access point, if one exists.  This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other Amazon Web Services. 
     */
    VpcConfiguration?: VpcConfiguration;
    /**
     * The name of the bucket associated with this access point.
     */
    Bucket: BucketName;
    /**
     * The ARN for the access point.
     */
    AccessPointArn?: S3AccessPointArn;
    /**
     * The name or alias of the access point.
     */
    Alias?: Alias;
    /**
     * The Amazon Web Services account ID associated with the S3 bucket associated with this access point.
     */
    BucketAccountId?: AccountId;
  }
  export type AccessPointList = AccessPoint[];
  export type AccessPointName = string;
  export type AccountId = string;
  export interface AccountLevel {
    /**
     * A container element for S3 Storage Lens activity metrics.
     */
    ActivityMetrics?: ActivityMetrics;
    /**
     * A container element for the S3 Storage Lens bucket-level configuration.
     */
    BucketLevel: BucketLevel;
    /**
     * A container element for S3 Storage Lens advanced cost-optimization metrics.
     */
    AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
    /**
     * A container element for S3 Storage Lens advanced data-protection metrics.
     */
    AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
    /**
     * A container element for detailed status code metrics. 
     */
    DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
    /**
     *  A container element for S3 Storage Lens groups metrics. 
     */
    StorageLensGroupLevel?: StorageLensGroupLevel;
  }
  export interface ActivityMetrics {
    /**
     * A container that indicates whether activity metrics are enabled.
     */
    IsEnabled?: IsEnabled;
  }
  export interface AdvancedCostOptimizationMetrics {
    /**
     * A container that indicates whether advanced cost-optimization metrics are enabled.
     */
    IsEnabled?: IsEnabled;
  }
  export interface AdvancedDataProtectionMetrics {
    /**
     * A container that indicates whether advanced data-protection metrics are enabled.
     */
    IsEnabled?: IsEnabled;
  }
  export type Alias = string;
  export interface AssociateAccessGrantsIdentityCenterRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the ListInstances API operation to retrieve a list of your Identity Center instances and their ARNs.
     */
    IdentityCenterArn: IdentityCenterArn;
  }
  export type AsyncCreationTimestamp = Date;
  export interface AsyncErrorDetails {
    /**
     * A string that uniquely identifies the error condition.
     */
    Code?: MaxLength1024String;
    /**
     * A generic description of the error condition in English.
     */
    Message?: MaxLength1024String;
    /**
     * The identifier of the resource associated with the error.
     */
    Resource?: MaxLength1024String;
    /**
     * The ID of the request associated with the error.
     */
    RequestId?: MaxLength1024String;
  }
  export interface AsyncOperation {
    /**
     * The time that the request was sent to the service.
     */
    CreationTime?: AsyncCreationTimestamp;
    /**
     * The specific operation for the asynchronous request.
     */
    Operation?: AsyncOperationName;
    /**
     * The request token associated with the request.
     */
    RequestTokenARN?: AsyncRequestTokenARN;
    /**
     * The parameters associated with the request.
     */
    RequestParameters?: AsyncRequestParameters;
    /**
     * The current status of the request.
     */
    RequestStatus?: AsyncRequestStatus;
    /**
     * The details of the response.
     */
    ResponseDetails?: AsyncResponseDetails;
  }
  export type AsyncOperationName = "CreateMultiRegionAccessPoint"|"DeleteMultiRegionAccessPoint"|"PutMultiRegionAccessPointPolicy"|string;
  export interface AsyncRequestParameters {
    /**
     * A container of the parameters for a CreateMultiRegionAccessPoint request.
     */
    CreateMultiRegionAccessPointRequest?: CreateMultiRegionAccessPointInput;
    /**
     * A container of the parameters for a DeleteMultiRegionAccessPoint request.
     */
    DeleteMultiRegionAccessPointRequest?: DeleteMultiRegionAccessPointInput;
    /**
     * A container of the parameters for a PutMultiRegionAccessPoint request.
     */
    PutMultiRegionAccessPointPolicyRequest?: PutMultiRegionAccessPointPolicyInput;
  }
  export type AsyncRequestStatus = string;
  export type AsyncRequestTokenARN = string;
  export interface AsyncResponseDetails {
    /**
     * The details for the Multi-Region Access Point.
     */
    MultiRegionAccessPointDetails?: MultiRegionAccessPointsAsyncResponse;
    /**
     * Error details for an asynchronous request.
     */
    ErrorDetails?: AsyncErrorDetails;
  }
  export interface AwsLambdaTransformation {
    /**
     * The Amazon Resource Name (ARN) of the Lambda function.
     */
    FunctionArn: FunctionArnString;
    /**
     * Additional JSON that provides supplemental data to the Lambda function used to transform objects.
     */
    FunctionPayload?: AwsLambdaTransformationPayload;
  }
  export type AwsLambdaTransformationPayload = string;
  export type AwsOrgArn = string;
  export type Boolean = boolean;
  export type BucketCannedACL = "private"|"public-read"|"public-read-write"|"authenticated-read"|string;
  export type BucketIdentifierString = string;
  export interface BucketLevel {
    /**
     * A container for the bucket-level activity metrics for S3 Storage Lens.
     */
    ActivityMetrics?: ActivityMetrics;
    /**
     * A container for the prefix-level metrics for S3 Storage Lens. 
     */
    PrefixLevel?: PrefixLevel;
    /**
     * A container for bucket-level advanced cost-optimization metrics for S3 Storage Lens.
     */
    AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
    /**
     * A container for bucket-level advanced data-protection metrics for S3 Storage Lens.
     */
    AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
    /**
     * A container for bucket-level detailed status code metrics for S3 Storage Lens.
     */
    DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
  }
  export type BucketLocationConstraint = "EU"|"eu-west-1"|"us-west-1"|"us-west-2"|"ap-south-1"|"ap-southeast-1"|"ap-southeast-2"|"ap-northeast-1"|"sa-east-1"|"cn-north-1"|"eu-central-1"|string;
  export type BucketName = string;
  export type BucketVersioningStatus = "Enabled"|"Suspended"|string;
  export type Buckets = S3BucketArnString[];
  export interface CloudWatchMetrics {
    /**
     * A container that indicates whether CloudWatch publishing for S3 Storage Lens metrics is enabled. A value of true indicates that CloudWatch publishing for S3 Storage Lens metrics is enabled.
     */
    IsEnabled: IsEnabled;
  }
  export type ConfigId = string;
  export type ConfirmRemoveSelfBucketAccess = boolean;
  export type ConfirmationRequired = boolean;
  export type ContinuationToken = string;
  export interface CreateAccessGrantRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register.  If you are passing the default location, you cannot create an access grant for the entire default location. You must also specify a bucket or a bucket and prefix in the Subprefix field. 
     */
    AccessGrantsLocationId: AccessGrantsLocationId;
    /**
     * The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access. It contains the S3SubPrefix field. The grant scope is the result of appending the subprefix to the location scope of the registered location.
     */
    AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
    /**
     * The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.
     */
    Grantee: Grantee;
    /**
     * The type of access that you are granting to your S3 data, which can be set to one of the following values:    READ – Grant read-only access to the S3 data.    WRITE – Grant write-only access to the S3 data.    READWRITE – Grant both read and write access to the S3 data.  
     */
    Permission: Permission;
    /**
     * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If an application ARN is included in the request to create an access grant, the grantee can only access the S3 data through this application. 
     */
    ApplicationArn?: IdentityCenterApplicationArn;
    /**
     * The type of S3SubPrefix. The only possible value is Object. Pass this value if the access grant scope is an object. Do not pass this value if the access grant scope is a bucket or a bucket and a prefix. 
     */
    S3PrefixType?: S3PrefixType;
    /**
     * The Amazon Web Services resource tags that you are adding to the access grant. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. 
     */
    Tags?: TagList;
  }
  export interface CreateAccessGrantResult {
    /**
     * The date and time when you created the access grant. 
     */
    CreatedAt?: CreationTimestamp;
    /**
     * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
     */
    AccessGrantId?: AccessGrantId;
    /**
     * The Amazon Resource Name (ARN) of the access grant. 
     */
    AccessGrantArn?: AccessGrantArn;
    /**
     * The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.
     */
    Grantee?: Grantee;
    /**
     * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register. 
     */
    AccessGrantsLocationId?: AccessGrantsLocationId;
    /**
     * The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access. 
     */
    AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
    /**
     * The type of access that you are granting to your S3 data, which can be set to one of the following values:    READ – Grant read-only access to the S3 data.    WRITE – Grant write-only access to the S3 data.    READWRITE – Grant both read and write access to the S3 data.  
     */
    Permission?: Permission;
    /**
     * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application. 
     */
    ApplicationArn?: IdentityCenterApplicationArn;
    /**
     * The S3 path of the data to which you are granting access. It is the result of appending the Subprefix to the location scope. 
     */
    GrantScope?: S3Prefix;
  }
  export interface CreateAccessGrantsInstanceRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * If you would like to associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, use this field to pass the Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the ListInstances API operation to retrieve a list of your Identity Center instances and their ARNs. 
     */
    IdentityCenterArn?: IdentityCenterArn;
    /**
     * The Amazon Web Services resource tags that you are adding to the S3 Access Grants instance. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. 
     */
    Tags?: TagList;
  }
  export interface CreateAccessGrantsInstanceResult {
    /**
     * The date and time when you created the S3 Access Grants instance. 
     */
    CreatedAt?: CreationTimestamp;
    /**
     * The ID of the S3 Access Grants instance. The ID is default. You can have one S3 Access Grants instance per Region per account. 
     */
    AccessGrantsInstanceId?: AccessGrantsInstanceId;
    /**
     * The Amazon Resource Name (ARN) of the S3 Access Grants instance. 
     */
    AccessGrantsInstanceArn?: AccessGrantsInstanceArn;
    /**
     * If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance passed in the request. S3 Access Grants creates this Identity Center application for this specific S3 Access Grants instance. 
     */
    IdentityCenterArn?: IdentityCenterArn;
  }
  export interface CreateAccessGrantsLocationRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The S3 path to the location that you are registering. The location scope can be the default S3 location s3://, the S3 path to a bucket s3://&lt;bucket&gt;, or the S3 path to a bucket and prefix s3://&lt;bucket&gt;/&lt;prefix&gt;. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the engineering/ prefix or object key names that start with the marketing/campaigns/ prefix.
     */
    LocationScope: S3Prefix;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. 
     */
    IAMRoleArn: IAMRoleArn;
    /**
     * The Amazon Web Services resource tags that you are adding to the S3 Access Grants location. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.
     */
    Tags?: TagList;
  }
  export interface CreateAccessGrantsLocationResult {
    /**
     * The date and time when you registered the location. 
     */
    CreatedAt?: CreationTimestamp;
    /**
     * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register. 
     */
    AccessGrantsLocationId?: AccessGrantsLocationId;
    /**
     * The Amazon Resource Name (ARN) of the location you are registering.
     */
    AccessGrantsLocationArn?: AccessGrantsLocationArn;
    /**
     * The S3 URI path to the location that you are registering. The location scope can be the default S3 location s3://, the S3 path to a bucket, or the S3 path to a bucket and prefix. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the engineering/ prefix or object key names that start with the marketing/campaigns/ prefix.
     */
    LocationScope?: S3Prefix;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. 
     */
    IAMRoleArn?: IAMRoleArn;
  }
  export interface CreateAccessPointForObjectLambdaRequest {
    /**
     * The Amazon Web Services account ID for owner of the specified Object Lambda Access Point.
     */
    AccountId: AccountId;
    /**
     * The name you want to assign to this Object Lambda Access Point.
     */
    Name: ObjectLambdaAccessPointName;
    /**
     * Object Lambda Access Point configuration as a JSON document.
     */
    Configuration: ObjectLambdaConfiguration;
  }
  export interface CreateAccessPointForObjectLambdaResult {
    /**
     * Specifies the ARN for the Object Lambda Access Point.
     */
    ObjectLambdaAccessPointArn?: ObjectLambdaAccessPointArn;
    /**
     * The alias of the Object Lambda Access Point.
     */
    Alias?: ObjectLambdaAccessPointAlias;
  }
  export interface CreateAccessPointRequest {
    /**
     * The Amazon Web Services account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name you want to assign to this access point.
     */
    Name: AccessPointName;
    /**
     * The name of the bucket that you want to associate this access point with. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
    /**
     * If you include this field, Amazon S3 restricts access to this access point to requests from the specified virtual private cloud (VPC).  This is required for creating an access point for Amazon S3 on Outposts buckets. 
     */
    VpcConfiguration?: VpcConfiguration;
    /**
     *  The PublicAccessBlock configuration that you want to apply to the access point. 
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
    /**
     * The Amazon Web Services account ID associated with the S3 bucket associated with this access point.
     */
    BucketAccountId?: AccountId;
  }
  export interface CreateAccessPointResult {
    /**
     * The ARN of the access point.  This is only supported by Amazon S3 on Outposts. 
     */
    AccessPointArn?: S3AccessPointArn;
    /**
     * The name or alias of the access point.
     */
    Alias?: Alias;
  }
  export interface CreateBucketConfiguration {
    /**
     * Specifies the Region where the bucket will be created. If you are creating a bucket on the US East (N. Virginia) Region (us-east-1), you do not need to specify the location.   This is not supported by Amazon S3 on Outposts buckets. 
     */
    LocationConstraint?: BucketLocationConstraint;
  }
  export interface CreateBucketRequest {
    /**
     * The canned ACL to apply to the bucket.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    ACL?: BucketCannedACL;
    /**
     * The name of the bucket.
     */
    Bucket: BucketName;
    /**
     * The configuration information for the bucket.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    CreateBucketConfiguration?: CreateBucketConfiguration;
    /**
     * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    GrantFullControl?: GrantFullControl;
    /**
     * Allows grantee to list the objects in the bucket.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    GrantRead?: GrantRead;
    /**
     * Allows grantee to read the bucket ACL.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    GrantReadACP?: GrantReadACP;
    /**
     * Allows grantee to create, overwrite, and delete any object in the bucket.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    GrantWrite?: GrantWrite;
    /**
     * Allows grantee to write the ACL for the applicable bucket.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    GrantWriteACP?: GrantWriteACP;
    /**
     * Specifies whether you want S3 Object Lock to be enabled for the new bucket.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    ObjectLockEnabledForBucket?: ObjectLockEnabledForBucket;
    /**
     * The ID of the Outposts where the bucket is being created.  This ID is required by Amazon S3 on Outposts buckets. 
     */
    OutpostId?: NonEmptyMaxLength64String;
  }
  export interface CreateBucketResult {
    /**
     * The location of the bucket.
     */
    Location?: Location;
    /**
     * The Amazon Resource Name (ARN) of the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    BucketArn?: S3RegionalBucketArn;
  }
  export interface CreateJobRequest {
    /**
     * The Amazon Web Services account ID that creates the job.
     */
    AccountId: AccountId;
    /**
     * Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.
     */
    ConfirmationRequired?: ConfirmationRequired;
    /**
     * The action that you want this job to perform on every object listed in the manifest. For more information about the available actions, see Operations in the Amazon S3 User Guide.
     */
    Operation: JobOperation;
    /**
     * Configuration parameters for the optional job-completion report.
     */
    Report: JobReport;
    /**
     * An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.
     */
    ClientRequestToken: NonEmptyMaxLength64String;
    /**
     * Configuration parameters for the manifest.
     */
    Manifest?: JobManifest;
    /**
     * A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.
     */
    Description?: NonEmptyMaxLength256String;
    /**
     * The numerical priority for this job. Higher numbers indicate higher priority.
     */
    Priority: JobPriority;
    /**
     * The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role that Batch Operations will use to run this job's action on every object in the manifest.
     */
    RoleArn: IAMRoleArn;
    /**
     * A set of tags to associate with the S3 Batch Operations job. This is an optional parameter. 
     */
    Tags?: S3TagSet;
    /**
     * The attribute container for the ManifestGenerator details. Jobs must be created with either a manifest file or a ManifestGenerator, but not both.
     */
    ManifestGenerator?: JobManifestGenerator;
  }
  export interface CreateJobResult {
    /**
     * The ID for this job. Amazon S3 generates this ID automatically and returns it after a successful Create Job request.
     */
    JobId?: JobId;
  }
  export interface CreateMultiRegionAccessPointInput {
    /**
     * The name of the Multi-Region Access Point associated with this request.
     */
    Name: MultiRegionAccessPointName;
    PublicAccessBlock?: PublicAccessBlockConfiguration;
    /**
     * The buckets in different Regions that are associated with the Multi-Region Access Point.
     */
    Regions: RegionCreationList;
  }
  export interface CreateMultiRegionAccessPointRequest {
    /**
     * The Amazon Web Services account ID for the owner of the Multi-Region Access Point. The owner of the Multi-Region Access Point also must own the underlying buckets.
     */
    AccountId: AccountId;
    /**
     * An idempotency token used to identify the request and guarantee that requests are unique.
     */
    ClientToken: MultiRegionAccessPointClientToken;
    /**
     * A container element containing details about the Multi-Region Access Point.
     */
    Details: CreateMultiRegionAccessPointInput;
  }
  export interface CreateMultiRegionAccessPointResult {
    /**
     * The request token associated with the request. You can use this token with DescribeMultiRegionAccessPointOperation to determine the status of asynchronous requests.
     */
    RequestTokenARN?: AsyncRequestTokenARN;
  }
  export interface CreateStorageLensGroupRequest {
    /**
     *  The Amazon Web Services account ID that the Storage Lens group is created from and associated with. 
     */
    AccountId: AccountId;
    /**
     *  The Storage Lens group configuration. 
     */
    StorageLensGroup: StorageLensGroup;
    /**
     *  The Amazon Web Services resource tags that you're adding to your Storage Lens group. This parameter is optional. 
     */
    Tags?: TagList;
  }
  export type CreationDate = Date;
  export type CreationTimestamp = Date;
  export interface Credentials {
    /**
     * The unique access key ID of the Amazon Web Services STS temporary credential that S3 Access Grants vends to grantees and client applications. 
     */
    AccessKeyId?: AccessKeyId;
    /**
     * The secret access key of the Amazon Web Services STS temporary credential that S3 Access Grants vends to grantees and client applications. 
     */
    SecretAccessKey?: SecretAccessKey;
    /**
     * The Amazon Web Services STS temporary credential that S3 Access Grants vends to grantees and client applications. 
     */
    SessionToken?: SessionToken;
    /**
     * The expiration date and time of the temporary credential that S3 Access Grants vends to grantees and client applications. 
     */
    Expiration?: Expiration;
  }
  export type _Date = Date;
  export type Days = number;
  export type DaysAfterInitiation = number;
  export interface DeleteAccessGrantRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
     */
    AccessGrantId: AccessGrantId;
  }
  export interface DeleteAccessGrantsInstanceRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
  }
  export interface DeleteAccessGrantsInstanceResourcePolicyRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
  }
  export interface DeleteAccessGrantsLocationRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The ID of the registered location that you are deregistering from your S3 Access Grants instance. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register. 
     */
    AccessGrantsLocationId: AccessGrantsLocationId;
  }
  export interface DeleteAccessPointForObjectLambdaRequest {
    /**
     * The account ID for the account that owns the specified Object Lambda Access Point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point you want to delete.
     */
    Name: ObjectLambdaAccessPointName;
  }
  export interface DeleteAccessPointPolicyForObjectLambdaRequest {
    /**
     * The account ID for the account that owns the specified Object Lambda Access Point.
     */
    AccountId: AccountId;
    /**
     * The name of the Object Lambda Access Point you want to delete the policy for.
     */
    Name: ObjectLambdaAccessPointName;
  }
  export interface DeleteAccessPointPolicyRequest {
    /**
     * The account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point whose policy you want to delete. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded. 
     */
    Name: AccessPointName;
  }
  export interface DeleteAccessPointRequest {
    /**
     * The Amazon Web Services account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point you want to delete. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded. 
     */
    Name: AccessPointName;
  }
  export interface DeleteBucketLifecycleConfigurationRequest {
    /**
     * The account ID of the lifecycle configuration to delete.
     */
    AccountId: AccountId;
    /**
     * Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
  }
  export interface DeleteBucketPolicyRequest {
    /**
     * The account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
  }
  export interface DeleteBucketReplicationRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket to delete the replication configuration for.
     */
    AccountId: AccountId;
    /**
     * Specifies the S3 on Outposts bucket to delete the replication configuration for. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
  }
  export interface DeleteBucketRequest {
    /**
     * The account ID that owns the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * Specifies the bucket being deleted. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
  }
  export interface DeleteBucketTaggingRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket tag set to be removed.
     */
    AccountId: AccountId;
    /**
     * The bucket ARN that has the tag set to be removed. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
  }
  export interface DeleteJobTaggingRequest {
    /**
     * The Amazon Web Services account ID associated with the S3 Batch Operations job.
     */
    AccountId: AccountId;
    /**
     * The ID for the S3 Batch Operations job whose tags you want to delete.
     */
    JobId: JobId;
  }
  export interface DeleteJobTaggingResult {
  }
  export interface DeleteMarkerReplication {
    /**
     * Indicates whether to replicate delete markers.
     */
    Status: DeleteMarkerReplicationStatus;
  }
  export type DeleteMarkerReplicationStatus = "Enabled"|"Disabled"|string;
  export interface DeleteMultiRegionAccessPointInput {
    /**
     * The name of the Multi-Region Access Point associated with this request.
     */
    Name: MultiRegionAccessPointName;
  }
  export interface DeleteMultiRegionAccessPointRequest {
    /**
     * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
     */
    AccountId: AccountId;
    /**
     * An idempotency token used to identify the request and guarantee that requests are unique.
     */
    ClientToken: MultiRegionAccessPointClientToken;
    /**
     * A container element containing details about the Multi-Region Access Point.
     */
    Details: DeleteMultiRegionAccessPointInput;
  }
  export interface DeleteMultiRegionAccessPointResult {
    /**
     * The request token associated with the request. You can use this token with DescribeMultiRegionAccessPointOperation to determine the status of asynchronous requests.
     */
    RequestTokenARN?: AsyncRequestTokenARN;
  }
  export interface DeletePublicAccessBlockRequest {
    /**
     * The account ID for the Amazon Web Services account whose PublicAccessBlock configuration you want to remove.
     */
    AccountId: AccountId;
  }
  export interface DeleteStorageLensConfigurationRequest {
    /**
     * The ID of the S3 Storage Lens configuration.
     */
    ConfigId: ConfigId;
    /**
     * The account ID of the requester.
     */
    AccountId: AccountId;
  }
  export interface DeleteStorageLensConfigurationTaggingRequest {
    /**
     * The ID of the S3 Storage Lens configuration.
     */
    ConfigId: ConfigId;
    /**
     * The account ID of the requester.
     */
    AccountId: AccountId;
  }
  export interface DeleteStorageLensConfigurationTaggingResult {
  }
  export interface DeleteStorageLensGroupRequest {
    /**
     *  The name of the Storage Lens group that you're trying to delete. 
     */
    Name: StorageLensGroupName;
    /**
     *  The Amazon Web Services account ID used to create the Storage Lens group that you're trying to delete. 
     */
    AccountId: AccountId;
  }
  export interface DescribeJobRequest {
    /**
     * The Amazon Web Services account ID associated with the S3 Batch Operations job.
     */
    AccountId: AccountId;
    /**
     * The ID for the job whose information you want to retrieve.
     */
    JobId: JobId;
  }
  export interface DescribeJobResult {
    /**
     * Contains the configuration parameters and status for the job specified in the Describe Job request.
     */
    Job?: JobDescriptor;
  }
  export interface DescribeMultiRegionAccessPointOperationRequest {
    /**
     * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
     */
    AccountId: AccountId;
    /**
     * The request token associated with the request you want to know about. This request token is returned as part of the response when you make an asynchronous request. You provide this token to query about the status of the asynchronous action.
     */
    RequestTokenARN: AsyncRequestTokenARN;
  }
  export interface DescribeMultiRegionAccessPointOperationResult {
    /**
     * A container element containing the details of the asynchronous operation.
     */
    AsyncOperation?: AsyncOperation;
  }
  export interface Destination {
    /**
     * The destination bucket owner's account ID. 
     */
    Account?: AccountId;
    /**
     * The Amazon Resource Name (ARN) of the access point for the destination bucket where you want S3 on Outposts to store the replication results.
     */
    Bucket: BucketIdentifierString;
    /**
     * A container that specifies S3 Replication Time Control (S3 RTC) settings, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a Metrics block.   This is not supported by Amazon S3 on Outposts buckets. 
     */
    ReplicationTime?: ReplicationTime;
    /**
     * Specify this property only in a cross-account scenario (where the source and destination bucket owners are not the same), and you want to change replica ownership to the Amazon Web Services account that owns the destination bucket. If this property is not specified in the replication configuration, the replicas are owned by same Amazon Web Services account that owns the source object.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    AccessControlTranslation?: AccessControlTranslation;
    /**
     * A container that provides information about encryption. If SourceSelectionCriteria is specified, you must specify this element.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    EncryptionConfiguration?: EncryptionConfiguration;
    /**
     *  A container that specifies replication metrics-related settings. 
     */
    Metrics?: Metrics;
    /**
     *  The storage class to use when replicating objects. All objects stored on S3 on Outposts are stored in the OUTPOSTS storage class. S3 on Outposts uses the OUTPOSTS storage class to create the object replicas.   Values other than OUTPOSTS are not supported by Amazon S3 on Outposts.  
     */
    StorageClass?: ReplicationStorageClass;
  }
  export interface DetailedStatusCodesMetrics {
    /**
     * A container that indicates whether detailed status code metrics are enabled.
     */
    IsEnabled?: IsEnabled;
  }
  export interface DissociateAccessGrantsIdentityCenterRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
  }
  export type DurationSeconds = number;
  export interface EncryptionConfiguration {
    /**
     * Specifies the ID of the customer managed KMS key that's stored in Key Management Service (KMS) for the destination bucket. This ID is either the Amazon Resource Name (ARN) for the KMS key or the alias ARN for the KMS key. Amazon S3 uses this KMS key to encrypt replica objects. Amazon S3 supports only symmetric encryption KMS keys. For more information, see Symmetric encryption KMS keys in the Amazon Web Services Key Management Service Developer Guide.
     */
    ReplicaKmsKeyID?: ReplicaKmsKeyID;
  }
  export type Endpoints = {[key: string]: NonEmptyMaxLength1024String};
  export interface EstablishedMultiRegionAccessPointPolicy {
    /**
     * The details of the last established policy.
     */
    Policy?: Policy;
  }
  export interface Exclude {
    /**
     * A container for the S3 Storage Lens bucket excludes.
     */
    Buckets?: Buckets;
    /**
     * A container for the S3 Storage Lens Region excludes.
     */
    Regions?: Regions;
  }
  export interface ExistingObjectReplication {
    /**
     * Specifies whether Amazon S3 replicates existing source bucket objects. 
     */
    Status: ExistingObjectReplicationStatus;
  }
  export type ExistingObjectReplicationStatus = "Enabled"|"Disabled"|string;
  export type Expiration = Date;
  export type ExpirationStatus = "Enabled"|"Disabled"|string;
  export type ExpiredObjectDeleteMarker = boolean;
  export type Format = "CSV"|"Parquet"|string;
  export type FunctionArnString = string;
  export interface GeneratedManifestEncryption {
    /**
     * Specifies the use of SSE-S3 to encrypt generated manifest objects.
     */
    SSES3?: SSES3Encryption;
    /**
     * Configuration details on how SSE-KMS is used to encrypt generated manifest objects.
     */
    SSEKMS?: SSEKMSEncryption;
  }
  export type GeneratedManifestFormat = "S3InventoryReport_CSV_20211130"|string;
  export interface GetAccessGrantRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
     */
    AccessGrantId: AccessGrantId;
  }
  export interface GetAccessGrantResult {
    /**
     * The date and time when you created the access grant. 
     */
    CreatedAt?: CreationTimestamp;
    /**
     * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
     */
    AccessGrantId?: AccessGrantId;
    /**
     * The Amazon Resource Name (ARN) of the access grant. 
     */
    AccessGrantArn?: AccessGrantArn;
    /**
     * The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added a corporate directory to Amazon Web Services IAM Identity Center and associated this Identity Center instance with the S3 Access Grants instance, the grantee can also be a corporate directory user or group.
     */
    Grantee?: Grantee;
    /**
     * The type of permission that was granted in the access grant. Can be one of the following values:    READ – Grant read-only access to the S3 data.    WRITE – Grant write-only access to the S3 data.    READWRITE – Grant both read and write access to the S3 data.  
     */
    Permission?: Permission;
    /**
     * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register. 
     */
    AccessGrantsLocationId?: AccessGrantsLocationId;
    /**
     * The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access. 
     */
    AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
    /**
     * The S3 path of the data to which you are granting access. It is the result of appending the Subprefix to the location scope.
     */
    GrantScope?: S3Prefix;
    /**
     * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application. 
     */
    ApplicationArn?: IdentityCenterApplicationArn;
  }
  export interface GetAccessGrantsInstanceForPrefixRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The S3 prefix of the access grants that you would like to retrieve.
     */
    S3Prefix: S3Prefix;
  }
  export interface GetAccessGrantsInstanceForPrefixResult {
    /**
     * The Amazon Resource Name (ARN) of the S3 Access Grants instance. 
     */
    AccessGrantsInstanceArn?: AccessGrantsInstanceArn;
    /**
     * The ID of the S3 Access Grants instance. The ID is default. You can have one S3 Access Grants instance per Region per account. 
     */
    AccessGrantsInstanceId?: AccessGrantsInstanceId;
  }
  export interface GetAccessGrantsInstanceRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
  }
  export interface GetAccessGrantsInstanceResourcePolicyRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
  }
  export interface GetAccessGrantsInstanceResourcePolicyResult {
    /**
     * The resource policy of the S3 Access Grants instance.
     */
    Policy?: PolicyDocument;
    /**
     * The Organization of the resource policy of the S3 Access Grants instance.
     */
    Organization?: Organization;
    /**
     * The date and time when you created the S3 Access Grants instance resource policy. 
     */
    CreatedAt?: CreationTimestamp;
  }
  export interface GetAccessGrantsInstanceResult {
    /**
     * The Amazon Resource Name (ARN) of the S3 Access Grants instance. 
     */
    AccessGrantsInstanceArn?: AccessGrantsInstanceArn;
    /**
     * The ID of the S3 Access Grants instance. The ID is default. You can have one S3 Access Grants instance per Region per account. 
     */
    AccessGrantsInstanceId?: AccessGrantsInstanceId;
    /**
     * If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance. 
     */
    IdentityCenterArn?: IdentityCenterArn;
    /**
     * The date and time when you created the S3 Access Grants instance. 
     */
    CreatedAt?: CreationTimestamp;
  }
  export interface GetAccessGrantsLocationRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The ID of the registered location that you are retrieving. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register. 
     */
    AccessGrantsLocationId: AccessGrantsLocationId;
  }
  export interface GetAccessGrantsLocationResult {
    /**
     * The date and time when you registered the location. 
     */
    CreatedAt?: CreationTimestamp;
    /**
     * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register. 
     */
    AccessGrantsLocationId?: AccessGrantsLocationId;
    /**
     * The Amazon Resource Name (ARN) of the registered location. 
     */
    AccessGrantsLocationArn?: AccessGrantsLocationArn;
    /**
     * The S3 URI path to the registered location. The location scope can be the default S3 location s3://, the S3 path to a bucket, or the S3 path to a bucket and prefix. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the engineering/ prefix or object key names that start with the marketing/campaigns/ prefix.
     */
    LocationScope?: S3Prefix;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. 
     */
    IAMRoleArn?: IAMRoleArn;
  }
  export interface GetAccessPointConfigurationForObjectLambdaRequest {
    /**
     * The account ID for the account that owns the specified Object Lambda Access Point.
     */
    AccountId: AccountId;
    /**
     * The name of the Object Lambda Access Point you want to return the configuration for.
     */
    Name: ObjectLambdaAccessPointName;
  }
  export interface GetAccessPointConfigurationForObjectLambdaResult {
    /**
     * Object Lambda Access Point configuration document.
     */
    Configuration?: ObjectLambdaConfiguration;
  }
  export interface GetAccessPointForObjectLambdaRequest {
    /**
     * The account ID for the account that owns the specified Object Lambda Access Point.
     */
    AccountId: AccountId;
    /**
     * The name of the Object Lambda Access Point.
     */
    Name: ObjectLambdaAccessPointName;
  }
  export interface GetAccessPointForObjectLambdaResult {
    /**
     * The name of the Object Lambda Access Point.
     */
    Name?: ObjectLambdaAccessPointName;
    /**
     * Configuration to block all public access. This setting is turned on and can not be edited. 
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
    /**
     * The date and time when the specified Object Lambda Access Point was created.
     */
    CreationDate?: CreationDate;
    /**
     * The alias of the Object Lambda Access Point.
     */
    Alias?: ObjectLambdaAccessPointAlias;
  }
  export interface GetAccessPointPolicyForObjectLambdaRequest {
    /**
     * The account ID for the account that owns the specified Object Lambda Access Point.
     */
    AccountId: AccountId;
    /**
     * The name of the Object Lambda Access Point.
     */
    Name: ObjectLambdaAccessPointName;
  }
  export interface GetAccessPointPolicyForObjectLambdaResult {
    /**
     * Object Lambda Access Point resource policy document.
     */
    Policy?: ObjectLambdaPolicy;
  }
  export interface GetAccessPointPolicyRequest {
    /**
     * The account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point whose policy you want to retrieve. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded. 
     */
    Name: AccessPointName;
  }
  export interface GetAccessPointPolicyResult {
    /**
     * The access point policy associated with the specified access point.
     */
    Policy?: Policy;
  }
  export interface GetAccessPointPolicyStatusForObjectLambdaRequest {
    /**
     * The account ID for the account that owns the specified Object Lambda Access Point.
     */
    AccountId: AccountId;
    /**
     * The name of the Object Lambda Access Point.
     */
    Name: ObjectLambdaAccessPointName;
  }
  export interface GetAccessPointPolicyStatusForObjectLambdaResult {
    PolicyStatus?: PolicyStatus;
  }
  export interface GetAccessPointPolicyStatusRequest {
    /**
     * The account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point whose policy status you want to retrieve.
     */
    Name: AccessPointName;
  }
  export interface GetAccessPointPolicyStatusResult {
    /**
     * Indicates the current policy status of the specified access point.
     */
    PolicyStatus?: PolicyStatus;
  }
  export interface GetAccessPointRequest {
    /**
     * The Amazon Web Services account ID for the account that owns the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point whose configuration information you want to retrieve. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded. 
     */
    Name: AccessPointName;
  }
  export interface GetAccessPointResult {
    /**
     * The name of the specified access point.
     */
    Name?: AccessPointName;
    /**
     * The name of the bucket associated with the specified access point.
     */
    Bucket?: BucketName;
    /**
     * Indicates whether this access point allows access from the public internet. If VpcConfiguration is specified for this access point, then NetworkOrigin is VPC, and the access point doesn't allow access from the public internet. Otherwise, NetworkOrigin is Internet, and the access point allows access from the public internet, subject to the access point and bucket access policies. This will always be true for an Amazon S3 on Outposts access point
     */
    NetworkOrigin?: NetworkOrigin;
    /**
     * Contains the virtual private cloud (VPC) configuration for the specified access point.  This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other Amazon Web Services. 
     */
    VpcConfiguration?: VpcConfiguration;
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
    /**
     * The date and time when the specified access point was created.
     */
    CreationDate?: CreationDate;
    /**
     * The name or alias of the access point.
     */
    Alias?: Alias;
    /**
     * The ARN of the access point.
     */
    AccessPointArn?: S3AccessPointArn;
    /**
     * The VPC endpoint for the access point.
     */
    Endpoints?: Endpoints;
    /**
     * The Amazon Web Services account ID associated with the S3 bucket associated with this access point.
     */
    BucketAccountId?: AccountId;
  }
  export interface GetBucketLifecycleConfigurationRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * The Amazon Resource Name (ARN) of the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
  }
  export interface GetBucketLifecycleConfigurationResult {
    /**
     * Container for the lifecycle rule of the Outposts bucket.
     */
    Rules?: LifecycleRules;
  }
  export interface GetBucketPolicyRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
  }
  export interface GetBucketPolicyResult {
    /**
     * The policy of the Outposts bucket.
     */
    Policy?: Policy;
  }
  export interface GetBucketReplicationRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * Specifies the bucket to get the replication information for. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
  }
  export interface GetBucketReplicationResult {
    /**
     * A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a replication configuration is 128 KB.
     */
    ReplicationConfiguration?: ReplicationConfiguration;
  }
  export interface GetBucketRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
  }
  export interface GetBucketResult {
    /**
     * The Outposts bucket requested.
     */
    Bucket?: BucketName;
    /**
     * 
     */
    PublicAccessBlockEnabled?: PublicAccessBlockEnabled;
    /**
     * The creation date of the Outposts bucket.
     */
    CreationDate?: CreationDate;
  }
  export interface GetBucketTaggingRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
  }
  export interface GetBucketTaggingResult {
    /**
     * The tags set of the Outposts bucket.
     */
    TagSet: S3TagSet;
  }
  export interface GetBucketVersioningRequest {
    /**
     * The Amazon Web Services account ID of the S3 on Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * The S3 on Outposts bucket to return the versioning state for.
     */
    Bucket: BucketName;
  }
  export interface GetBucketVersioningResult {
    /**
     * The versioning state of the S3 on Outposts bucket.
     */
    Status?: BucketVersioningStatus;
    /**
     * Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is returned only if the bucket has been configured with MFA delete. If MFA delete has never been configured for the bucket, this element is not returned.
     */
    MFADelete?: MFADeleteStatus;
  }
  export interface GetDataAccessRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The S3 URI path of the data to which you are requesting temporary access credentials. If the requesting account has an access grant for this data, S3 Access Grants vends temporary access credentials in the response.
     */
    Target: S3Prefix;
    /**
     * The type of permission granted to your S3 data, which can be set to one of the following values:    READ – Grant read-only access to the S3 data.    WRITE – Grant write-only access to the S3 data.    READWRITE – Grant both read and write access to the S3 data.  
     */
    Permission: Permission;
    /**
     * The session duration, in seconds, of the temporary access credential that S3 Access Grants vends to the grantee or client application. The default value is 1 hour, but the grantee can specify a range from 900 seconds (15 minutes) up to 43200 seconds (12 hours). If the grantee requests a value higher than this maximum, the operation fails. 
     */
    DurationSeconds?: DurationSeconds;
    /**
     * The scope of the temporary access credential that S3 Access Grants vends to the grantee or client application.     Default – The scope of the returned temporary access token is the scope of the grant that is closest to the target scope.    Minimal – The scope of the returned temporary access token is the same as the requested target scope as long as the requested scope is the same as or a subset of the grant scope.   
     */
    Privilege?: Privilege;
    /**
     * The type of Target. The only possible value is Object. Pass this value if the target data that you would like to access is a path to an object. Do not pass this value if the target data is a bucket or a bucket and a prefix. 
     */
    TargetType?: S3PrefixType;
  }
  export interface GetDataAccessResult {
    /**
     * The temporary credential token that S3 Access Grants vends.
     */
    Credentials?: Credentials;
    /**
     * The S3 URI path of the data to which you are being granted temporary access credentials. 
     */
    MatchedGrantTarget?: S3Prefix;
  }
  export interface GetJobTaggingRequest {
    /**
     * The Amazon Web Services account ID associated with the S3 Batch Operations job.
     */
    AccountId: AccountId;
    /**
     * The ID for the S3 Batch Operations job whose tags you want to retrieve.
     */
    JobId: JobId;
  }
  export interface GetJobTaggingResult {
    /**
     * The set of tags associated with the S3 Batch Operations job.
     */
    Tags?: S3TagSet;
  }
  export interface GetMultiRegionAccessPointPolicyRequest {
    /**
     * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
     */
    AccountId: AccountId;
    /**
     * Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Managing Multi-Region Access Points in the Amazon S3 User Guide.
     */
    Name: MultiRegionAccessPointName;
  }
  export interface GetMultiRegionAccessPointPolicyResult {
    /**
     * The policy associated with the specified Multi-Region Access Point.
     */
    Policy?: MultiRegionAccessPointPolicyDocument;
  }
  export interface GetMultiRegionAccessPointPolicyStatusRequest {
    /**
     * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
     */
    AccountId: AccountId;
    /**
     * Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Managing Multi-Region Access Points in the Amazon S3 User Guide.
     */
    Name: MultiRegionAccessPointName;
  }
  export interface GetMultiRegionAccessPointPolicyStatusResult {
    Established?: PolicyStatus;
  }
  export interface GetMultiRegionAccessPointRequest {
    /**
     * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
     */
    AccountId: AccountId;
    /**
     * The name of the Multi-Region Access Point whose configuration information you want to receive. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Managing Multi-Region Access Points in the Amazon S3 User Guide.
     */
    Name: MultiRegionAccessPointName;
  }
  export interface GetMultiRegionAccessPointResult {
    /**
     * A container element containing the details of the requested Multi-Region Access Point.
     */
    AccessPoint?: MultiRegionAccessPointReport;
  }
  export interface GetMultiRegionAccessPointRoutesRequest {
    /**
     * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
     */
    AccountId: AccountId;
    /**
     * The Multi-Region Access Point ARN.
     */
    Mrap: MultiRegionAccessPointId;
  }
  export interface GetMultiRegionAccessPointRoutesResult {
    /**
     * The Multi-Region Access Point ARN.
     */
    Mrap?: MultiRegionAccessPointId;
    /**
     * The different routes that make up the route configuration. Active routes return a value of 100, and passive routes return a value of 0.
     */
    Routes?: RouteList;
  }
  export interface GetPublicAccessBlockOutput {
    /**
     * The PublicAccessBlock configuration currently in effect for this Amazon Web Services account.
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  }
  export interface GetPublicAccessBlockRequest {
    /**
     * The account ID for the Amazon Web Services account whose PublicAccessBlock configuration you want to retrieve.
     */
    AccountId: AccountId;
  }
  export interface GetStorageLensConfigurationRequest {
    /**
     * The ID of the Amazon S3 Storage Lens configuration.
     */
    ConfigId: ConfigId;
    /**
     * The account ID of the requester.
     */
    AccountId: AccountId;
  }
  export interface GetStorageLensConfigurationResult {
    /**
     * The S3 Storage Lens configuration requested.
     */
    StorageLensConfiguration?: StorageLensConfiguration;
  }
  export interface GetStorageLensConfigurationTaggingRequest {
    /**
     * The ID of the Amazon S3 Storage Lens configuration.
     */
    ConfigId: ConfigId;
    /**
     * The account ID of the requester.
     */
    AccountId: AccountId;
  }
  export interface GetStorageLensConfigurationTaggingResult {
    /**
     * The tags of S3 Storage Lens configuration requested.
     */
    Tags?: StorageLensTags;
  }
  export interface GetStorageLensGroupRequest {
    /**
     *  The name of the Storage Lens group that you're trying to retrieve the configuration details for. 
     */
    Name: StorageLensGroupName;
    /**
     *  The Amazon Web Services account ID associated with the Storage Lens group that you're trying to retrieve the details for. 
     */
    AccountId: AccountId;
  }
  export interface GetStorageLensGroupResult {
    /**
     *  The name of the Storage Lens group that you're trying to retrieve the configuration details for. 
     */
    StorageLensGroup?: StorageLensGroup;
  }
  export type GrantFullControl = string;
  export type GrantRead = string;
  export type GrantReadACP = string;
  export type GrantWrite = string;
  export type GrantWriteACP = string;
  export interface Grantee {
    /**
     * The type of the grantee to which access has been granted. It can be one of the following values:    IAM - An IAM user or role.    DIRECTORY_USER - Your corporate directory user. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.    DIRECTORY_GROUP - Your corporate directory group. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.  
     */
    GranteeType?: GranteeType;
    /**
     * The unique identifier of the Grantee. If the grantee type is IAM, the identifier is the IAM Amazon Resource Name (ARN) of the user or role. If the grantee type is a directory user or group, the identifier is 128-bit universally unique identifier (UUID) in the format a1b2c3d4-5678-90ab-cdef-EXAMPLE11111. You can obtain this UUID from your Amazon Web Services IAM Identity Center instance.
     */
    GranteeIdentifier?: GranteeIdentifier;
  }
  export type GranteeIdentifier = string;
  export type GranteeType = "DIRECTORY_USER"|"DIRECTORY_GROUP"|"IAM"|string;
  export type IAMRoleArn = string;
  export type ID = string;
  export type IdentityCenterApplicationArn = string;
  export type IdentityCenterArn = string;
  export interface Include {
    /**
     * A container for the S3 Storage Lens bucket includes.
     */
    Buckets?: Buckets;
    /**
     * A container for the S3 Storage Lens Region includes.
     */
    Regions?: Regions;
  }
  export type IsEnabled = boolean;
  export type IsPublic = boolean;
  export type JobArn = string;
  export type JobCreationTime = Date;
  export interface JobDescriptor {
    /**
     * The ID for the specified job.
     */
    JobId?: JobId;
    /**
     * Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console.
     */
    ConfirmationRequired?: ConfirmationRequired;
    /**
     * The description for this job, if one was provided in this job's Create Job request.
     */
    Description?: NonEmptyMaxLength256String;
    /**
     * The Amazon Resource Name (ARN) for this job.
     */
    JobArn?: JobArn;
    /**
     * The current status of the specified job.
     */
    Status?: JobStatus;
    /**
     * The configuration information for the specified job's manifest object.
     */
    Manifest?: JobManifest;
    /**
     * The operation that the specified job is configured to run on the objects listed in the manifest.
     */
    Operation?: JobOperation;
    /**
     * The priority of the specified job.
     */
    Priority?: JobPriority;
    /**
     * Describes the total number of tasks that the specified job has run, the number of tasks that succeeded, and the number of tasks that failed.
     */
    ProgressSummary?: JobProgressSummary;
    /**
     * The reason for updating the job.
     */
    StatusUpdateReason?: JobStatusUpdateReason;
    /**
     * If the specified job failed, this field contains information describing the failure.
     */
    FailureReasons?: JobFailureList;
    /**
     * Contains the configuration information for the job-completion report if you requested one in the Create Job request.
     */
    Report?: JobReport;
    /**
     * A timestamp indicating when this job was created.
     */
    CreationTime?: JobCreationTime;
    /**
     * A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.
     */
    TerminationDate?: JobTerminationDate;
    /**
     * The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role assigned to run the tasks for this job.
     */
    RoleArn?: IAMRoleArn;
    /**
     * The timestamp when this job was suspended, if it has been suspended.
     */
    SuspendedDate?: SuspendedDate;
    /**
     * The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters the Suspended state to await confirmation before running. After you confirm the job, it automatically exits the Suspended state.
     */
    SuspendedCause?: SuspendedCause;
    /**
     * The manifest generator that was used to generate a job manifest for this job.
     */
    ManifestGenerator?: JobManifestGenerator;
    /**
     * The attribute of the JobDescriptor containing details about the job's generated manifest.
     */
    GeneratedManifestDescriptor?: S3GeneratedManifestDescriptor;
  }
  export interface JobFailure {
    /**
     * The failure code, if any, for the specified job.
     */
    FailureCode?: JobFailureCode;
    /**
     * The failure reason, if any, for the specified job.
     */
    FailureReason?: JobFailureReason;
  }
  export type JobFailureCode = string;
  export type JobFailureList = JobFailure[];
  export type JobFailureReason = string;
  export type JobId = string;
  export interface JobListDescriptor {
    /**
     * The ID for the specified job.
     */
    JobId?: JobId;
    /**
     * The user-specified description that was included in the specified job's Create Job request.
     */
    Description?: NonEmptyMaxLength256String;
    /**
     * The operation that the specified job is configured to run on every object listed in the manifest.
     */
    Operation?: OperationName;
    /**
     * The current priority for the specified job.
     */
    Priority?: JobPriority;
    /**
     * The specified job's current status.
     */
    Status?: JobStatus;
    /**
     * A timestamp indicating when the specified job was created.
     */
    CreationTime?: JobCreationTime;
    /**
     * A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.
     */
    TerminationDate?: JobTerminationDate;
    /**
     * Describes the total number of tasks that the specified job has run, the number of tasks that succeeded, and the number of tasks that failed.
     */
    ProgressSummary?: JobProgressSummary;
  }
  export type JobListDescriptorList = JobListDescriptor[];
  export interface JobManifest {
    /**
     * Describes the format of the specified job's manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.
     */
    Spec: JobManifestSpec;
    /**
     * Contains the information required to locate the specified job's manifest.
     */
    Location: JobManifestLocation;
  }
  export type JobManifestFieldList = JobManifestFieldName[];
  export type JobManifestFieldName = "Ignore"|"Bucket"|"Key"|"VersionId"|string;
  export type JobManifestFormat = "S3BatchOperations_CSV_20180820"|"S3InventoryReport_CSV_20161130"|string;
  export interface JobManifestGenerator {
    /**
     * The S3 job ManifestGenerator's configuration details.
     */
    S3JobManifestGenerator?: S3JobManifestGenerator;
  }
  export interface JobManifestGeneratorFilter {
    /**
     * Include objects in the generated manifest only if they are eligible for replication according to the Replication configuration on the source bucket.
     */
    EligibleForReplication?: Boolean;
    /**
     * If provided, the generated manifest includes only source bucket objects that were created after this time.
     */
    CreatedAfter?: ObjectCreationTime;
    /**
     * If provided, the generated manifest includes only source bucket objects that were created before this time.
     */
    CreatedBefore?: ObjectCreationTime;
    /**
     * If provided, the generated manifest includes only source bucket objects that have one of the specified Replication statuses.
     */
    ObjectReplicationStatuses?: ReplicationStatusFilterList;
    /**
     * If provided, the generated manifest includes only source bucket objects whose object keys match the string constraints specified for MatchAnyPrefix, MatchAnySuffix, and MatchAnySubstring.
     */
    KeyNameConstraint?: KeyNameConstraint;
    /**
     * If provided, the generated manifest includes only source bucket objects whose file size is greater than the specified number of bytes.
     */
    ObjectSizeGreaterThanBytes?: ObjectSizeGreaterThanBytes;
    /**
     * If provided, the generated manifest includes only source bucket objects whose file size is less than the specified number of bytes.
     */
    ObjectSizeLessThanBytes?: ObjectSizeLessThanBytes;
    /**
     * If provided, the generated manifest includes only source bucket objects that are stored with the specified storage class.
     */
    MatchAnyStorageClass?: StorageClassList;
  }
  export interface JobManifestLocation {
    /**
     * The Amazon Resource Name (ARN) for a manifest object.  When you're using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see  XML-related object key constraints in the Amazon S3 User Guide. 
     */
    ObjectArn: S3KeyArnString;
    /**
     * The optional version ID to identify a specific version of the manifest object.
     */
    ObjectVersionId?: S3ObjectVersionId;
    /**
     * The ETag for the specified manifest object.
     */
    ETag: NonEmptyMaxLength1024String;
  }
  export interface JobManifestSpec {
    /**
     * Indicates which of the available formats the specified manifest uses.
     */
    Format: JobManifestFormat;
    /**
     * If the specified manifest object is in the S3BatchOperations_CSV_20180820 format, this element describes which columns contain the required data.
     */
    Fields?: JobManifestFieldList;
  }
  export type JobNumberOfTasksFailed = number;
  export type JobNumberOfTasksSucceeded = number;
  export interface JobOperation {
    /**
     * Directs the specified job to invoke an Lambda function on every object in the manifest.
     */
    LambdaInvoke?: LambdaInvokeOperation;
    /**
     * Directs the specified job to run a PUT Copy object call on every object in the manifest.
     */
    S3PutObjectCopy?: S3CopyObjectOperation;
    /**
     * Directs the specified job to run a PutObjectAcl call on every object in the manifest.
     */
    S3PutObjectAcl?: S3SetObjectAclOperation;
    /**
     * Directs the specified job to run a PUT Object tagging call on every object in the manifest.
     */
    S3PutObjectTagging?: S3SetObjectTaggingOperation;
    /**
     * Directs the specified job to execute a DELETE Object tagging call on every object in the manifest.
     */
    S3DeleteObjectTagging?: S3DeleteObjectTaggingOperation;
    /**
     * Directs the specified job to initiate restore requests for every archived object in the manifest.
     */
    S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;
    S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;
    S3PutObjectRetention?: S3SetObjectRetentionOperation;
    /**
     * Directs the specified job to invoke ReplicateObject on every object in the job's manifest.
     */
    S3ReplicateObject?: S3ReplicateObjectOperation;
  }
  export type JobPriority = number;
  export interface JobProgressSummary {
    /**
     * 
     */
    TotalNumberOfTasks?: JobTotalNumberOfTasks;
    /**
     * 
     */
    NumberOfTasksSucceeded?: JobNumberOfTasksSucceeded;
    /**
     * 
     */
    NumberOfTasksFailed?: JobNumberOfTasksFailed;
    /**
     * The JobTimers attribute of a job's progress summary.
     */
    Timers?: JobTimers;
  }
  export interface JobReport {
    /**
     * The Amazon Resource Name (ARN) for the bucket where specified job-completion report will be stored.
     */
    Bucket?: S3BucketArnString;
    /**
     * The format of the specified job-completion report.
     */
    Format?: JobReportFormat;
    /**
     * Indicates whether the specified job will generate a job-completion report.
     */
    Enabled: Boolean;
    /**
     * An optional prefix to describe where in the specified bucket the job-completion report will be stored. Amazon S3 stores the job-completion report at &lt;prefix&gt;/job-&lt;job-id&gt;/report.json.
     */
    Prefix?: ReportPrefixString;
    /**
     * Indicates whether the job-completion report will include details of all tasks or only failed tasks.
     */
    ReportScope?: JobReportScope;
  }
  export type JobReportFormat = "Report_CSV_20180820"|string;
  export type JobReportScope = "AllTasks"|"FailedTasksOnly"|string;
  export type JobStatus = "Active"|"Cancelled"|"Cancelling"|"Complete"|"Completing"|"Failed"|"Failing"|"New"|"Paused"|"Pausing"|"Preparing"|"Ready"|"Suspended"|string;
  export type JobStatusList = JobStatus[];
  export type JobStatusUpdateReason = string;
  export type JobTerminationDate = Date;
  export type JobTimeInStateSeconds = number;
  export interface JobTimers {
    /**
     * Indicates the elapsed time in seconds the job has been in the Active job state.
     */
    ElapsedTimeInActiveSeconds?: JobTimeInStateSeconds;
  }
  export type JobTotalNumberOfTasks = number;
  export interface KeyNameConstraint {
    /**
     * If provided, the generated manifest includes objects where the specified string appears at the start of the object key string.
     */
    MatchAnyPrefix?: NonEmptyMaxLength1024StringList;
    /**
     * If provided, the generated manifest includes objects where the specified string appears at the end of the object key string.
     */
    MatchAnySuffix?: NonEmptyMaxLength1024StringList;
    /**
     * If provided, the generated manifest includes objects where the specified string appears anywhere within the object key string.
     */
    MatchAnySubstring?: NonEmptyMaxLength1024StringList;
  }
  export type KmsKeyArnString = string;
  export interface LambdaInvokeOperation {
    /**
     * The Amazon Resource Name (ARN) for the Lambda function that the specified job will invoke on every object in the manifest.
     */
    FunctionArn?: FunctionArnString;
  }
  export interface LifecycleConfiguration {
    /**
     * A lifecycle rule for individual objects in an Outposts bucket. 
     */
    Rules?: LifecycleRules;
  }
  export interface LifecycleExpiration {
    /**
     * Indicates at what date the object is to be deleted. Should be in GMT ISO 8601 format.
     */
    Date?: _Date;
    /**
     * Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.
     */
    Days?: Days;
    /**
     * Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to true, the delete marker will be expired. If set to false, the policy takes no action. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.
     */
    ExpiredObjectDeleteMarker?: ExpiredObjectDeleteMarker;
  }
  export interface LifecycleRule {
    /**
     * Specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker.
     */
    Expiration?: LifecycleExpiration;
    /**
     * Unique identifier for the rule. The value cannot be longer than 255 characters.
     */
    ID?: ID;
    /**
     * The container for the filter of lifecycle rule.
     */
    Filter?: LifecycleRuleFilter;
    /**
     * If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.
     */
    Status: ExpirationStatus;
    /**
     * Specifies when an Amazon S3 object transitions to a specified storage class.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    Transitions?: TransitionList;
    /**
     *  Specifies the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to a specific storage class at a set period in the object's lifetime.   This is not supported by Amazon S3 on Outposts buckets. 
     */
    NoncurrentVersionTransitions?: NoncurrentVersionTransitionList;
    /**
     * The noncurrent version expiration of the lifecycle rule.
     */
    NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
    /**
     * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 waits before permanently removing all parts of the upload. For more information, see  Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration in the Amazon S3 User Guide.
     */
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
  }
  export interface LifecycleRuleAndOperator {
    /**
     * Prefix identifying one or more objects to which the rule applies.
     */
    Prefix?: Prefix;
    /**
     * All of these tags must exist in the object's tag set in order for the rule to apply.
     */
    Tags?: S3TagSet;
    /**
     * Minimum object size to which the rule applies.
     */
    ObjectSizeGreaterThan?: ObjectSizeGreaterThanBytes;
    /**
     * Maximum object size to which the rule applies.
     */
    ObjectSizeLessThan?: ObjectSizeLessThanBytes;
  }
  export interface LifecycleRuleFilter {
    /**
     * Prefix identifying one or more objects to which the rule applies.  When you're using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see  XML-related object key constraints in the Amazon S3 User Guide. 
     */
    Prefix?: Prefix;
    Tag?: S3Tag;
    /**
     * The container for the AND condition for the lifecycle rule.
     */
    And?: LifecycleRuleAndOperator;
    /**
     * Minimum object size to which the rule applies.
     */
    ObjectSizeGreaterThan?: ObjectSizeGreaterThanBytes;
    /**
     * Maximum object size to which the rule applies.
     */
    ObjectSizeLessThan?: ObjectSizeLessThanBytes;
  }
  export type LifecycleRules = LifecycleRule[];
  export interface ListAccessGrantEntry {
    /**
     * The date and time when you created the S3 Access Grants instance. 
     */
    CreatedAt?: CreationTimestamp;
    /**
     * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
     */
    AccessGrantId?: AccessGrantId;
    /**
     * The Amazon Resource Name (ARN) of the access grant. 
     */
    AccessGrantArn?: AccessGrantArn;
    /**
     * The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.
     */
    Grantee?: Grantee;
    /**
     * The type of access granted to your S3 data, which can be set to one of the following values:    READ – Grant read-only access to the S3 data.    WRITE – Grant write-only access to the S3 data.    READWRITE – Grant both read and write access to the S3 data.  
     */
    Permission?: Permission;
    /**
     * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register. 
     */
    AccessGrantsLocationId?: AccessGrantsLocationId;
    /**
     * The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access. 
     */
    AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
    /**
     * The S3 path of the data to which you are granting access. It is the result of appending the Subprefix to the location scope.
     */
    GrantScope?: S3Prefix;
    /**
     * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application. 
     */
    ApplicationArn?: IdentityCenterApplicationArn;
  }
  export interface ListAccessGrantsInstanceEntry {
    /**
     * The ID of the S3 Access Grants instance. The ID is default. You can have one S3 Access Grants instance per Region per account. 
     */
    AccessGrantsInstanceId?: AccessGrantsInstanceId;
    /**
     * The Amazon Resource Name (ARN) of the S3 Access Grants instance. 
     */
    AccessGrantsInstanceArn?: AccessGrantsInstanceArn;
    /**
     * The date and time when you created the S3 Access Grants instance. 
     */
    CreatedAt?: CreationTimestamp;
    /**
     * If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance. 
     */
    IdentityCenterArn?: IdentityCenterArn;
  }
  export interface ListAccessGrantsInstancesRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants Instances request in order to retrieve the next page of results.
     */
    NextToken?: ContinuationToken;
    /**
     * The maximum number of access grants that you would like returned in the List Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAccessGrantsInstancesResult {
    /**
     * A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants Instances request in order to retrieve the next page of results.
     */
    NextToken?: ContinuationToken;
    /**
     * A container for a list of S3 Access Grants instances.
     */
    AccessGrantsInstancesList?: AccessGrantsInstancesList;
  }
  export interface ListAccessGrantsLocationsEntry {
    /**
     * The date and time when you registered the location. 
     */
    CreatedAt?: CreationTimestamp;
    /**
     * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register. 
     */
    AccessGrantsLocationId?: AccessGrantsLocationId;
    /**
     * The Amazon Resource Name (ARN) of the registered location. 
     */
    AccessGrantsLocationArn?: AccessGrantsLocationArn;
    /**
     * The S3 path to the location that you are registering. The location scope can be the default S3 location s3://, the S3 path to a bucket s3://&lt;bucket&gt;, or the S3 path to a bucket and prefix s3://&lt;bucket&gt;/&lt;prefix&gt;. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the engineering/ prefix or object key names that start with the marketing/campaigns/ prefix.
     */
    LocationScope?: S3Prefix;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. 
     */
    IAMRoleArn?: IAMRoleArn;
  }
  export interface ListAccessGrantsLocationsRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants Locations request in order to retrieve the next page of results.
     */
    NextToken?: ContinuationToken;
    /**
     * The maximum number of access grants that you would like returned in the List Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results.
     */
    MaxResults?: MaxResults;
    /**
     * The S3 path to the location that you are registering. The location scope can be the default S3 location s3://, the S3 path to a bucket s3://&lt;bucket&gt;, or the S3 path to a bucket and prefix s3://&lt;bucket&gt;/&lt;prefix&gt;. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the engineering/ prefix or object key names that start with the marketing/campaigns/ prefix.
     */
    LocationScope?: S3Prefix;
  }
  export interface ListAccessGrantsLocationsResult {
    /**
     * A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants Locations request in order to retrieve the next page of results.
     */
    NextToken?: ContinuationToken;
    /**
     * A container for a list of registered locations in an S3 Access Grants instance.
     */
    AccessGrantsLocationsList?: AccessGrantsLocationsList;
  }
  export interface ListAccessGrantsRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants request in order to retrieve the next page of results.
     */
    NextToken?: ContinuationToken;
    /**
     * The maximum number of access grants that you would like returned in the List Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results.
     */
    MaxResults?: MaxResults;
    /**
     * The type of the grantee to which access has been granted. It can be one of the following values:    IAM - An IAM user or role.    DIRECTORY_USER - Your corporate directory user. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.    DIRECTORY_GROUP - Your corporate directory group. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.  
     */
    GranteeType?: GranteeType;
    /**
     * The unique identifer of the Grantee. If the grantee type is IAM, the identifier is the IAM Amazon Resource Name (ARN) of the user or role. If the grantee type is a directory user or group, the identifier is 128-bit universally unique identifier (UUID) in the format a1b2c3d4-5678-90ab-cdef-EXAMPLE11111. You can obtain this UUID from your Amazon Web Services IAM Identity Center instance.
     */
    GranteeIdentifier?: GranteeIdentifier;
    /**
     * The type of permission granted to your S3 data, which can be set to one of the following values:    READ – Grant read-only access to the S3 data.    WRITE – Grant write-only access to the S3 data.    READWRITE – Grant both read and write access to the S3 data.  
     */
    Permission?: Permission;
    /**
     * The S3 path of the data to which you are granting access. It is the result of appending the Subprefix to the location scope.
     */
    GrantScope?: S3Prefix;
    /**
     * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application. 
     */
    ApplicationArn?: IdentityCenterApplicationArn;
  }
  export interface ListAccessGrantsResult {
    /**
     * A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants request in order to retrieve the next page of results.
     */
    NextToken?: ContinuationToken;
    /**
     * A container for a list of grants in an S3 Access Grants instance.
     */
    AccessGrantsList?: AccessGrantsList;
  }
  export interface ListAccessPointsForObjectLambdaRequest {
    /**
     * The account ID for the account that owns the specified Object Lambda Access Point.
     */
    AccountId: AccountId;
    /**
     * If the list has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.
     */
    NextToken?: NonEmptyMaxLength1024String;
    /**
     * The maximum number of access points that you want to include in the list. The response may contain fewer access points but will never contain more. If there are more than this number of access points, then the response will include a continuation token in the NextToken field that you can use to retrieve the next page of access points.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAccessPointsForObjectLambdaResult {
    /**
     * Returns list of Object Lambda Access Points.
     */
    ObjectLambdaAccessPointList?: ObjectLambdaAccessPointList;
    /**
     * If the list has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.
     */
    NextToken?: NonEmptyMaxLength1024String;
  }
  export interface ListAccessPointsRequest {
    /**
     * The Amazon Web Services account ID for the account that owns the specified access points.
     */
    AccountId: AccountId;
    /**
     * The name of the bucket whose associated access points you want to list. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket?: BucketName;
    /**
     * A continuation token. If a previous call to ListAccessPoints returned a continuation token in the NextToken field, then providing that value here causes Amazon S3 to retrieve the next page of results.
     */
    NextToken?: NonEmptyMaxLength1024String;
    /**
     * The maximum number of access points that you want to include in the list. If the specified bucket has more than this number of access points, then the response will include a continuation token in the NextToken field that you can use to retrieve the next page of access points.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAccessPointsResult {
    /**
     * Contains identification and configuration information for one or more access points associated with the specified bucket.
     */
    AccessPointList?: AccessPointList;
    /**
     * If the specified bucket has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.
     */
    NextToken?: NonEmptyMaxLength1024String;
  }
  export interface ListJobsRequest {
    /**
     * The Amazon Web Services account ID associated with the S3 Batch Operations job.
     */
    AccountId: AccountId;
    /**
     * The List Jobs request returns jobs that match the statuses listed in this element.
     */
    JobStatuses?: JobStatusList;
    /**
     * A pagination token to request the next page of results. Use the token that Amazon S3 returned in the NextToken element of the ListJobsResult from the previous List Jobs request.
     */
    NextToken?: StringForNextToken;
    /**
     * The maximum number of jobs that Amazon S3 will include in the List Jobs response. If there are more jobs than this number, the response will include a pagination token in the NextToken field to enable you to retrieve the next page of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListJobsResult {
    /**
     * If the List Jobs request produced more than the maximum number of results, you can pass this value into a subsequent List Jobs request in order to retrieve the next page of results.
     */
    NextToken?: StringForNextToken;
    /**
     * The list of current jobs and jobs that have ended within the last 30 days.
     */
    Jobs?: JobListDescriptorList;
  }
  export interface ListMultiRegionAccessPointsRequest {
    /**
     * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
     */
    AccountId: AccountId;
    /**
     * Not currently used. Do not use this parameter.
     */
    NextToken?: NonEmptyMaxLength1024String;
    /**
     * Not currently used. Do not use this parameter.
     */
    MaxResults?: MaxResults;
  }
  export interface ListMultiRegionAccessPointsResult {
    /**
     * The list of Multi-Region Access Points associated with the user.
     */
    AccessPoints?: MultiRegionAccessPointReportList;
    /**
     * If the specified bucket has more Multi-Region Access Points than can be returned in one call to this action, this field contains a continuation token. You can use this token tin subsequent calls to this action to retrieve additional Multi-Region Access Points.
     */
    NextToken?: NonEmptyMaxLength1024String;
  }
  export interface ListRegionalBucketsRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * 
     */
    NextToken?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    MaxResults?: MaxResults;
    /**
     * The ID of the Outposts resource.  This ID is required by Amazon S3 on Outposts buckets. 
     */
    OutpostId?: NonEmptyMaxLength64String;
  }
  export interface ListRegionalBucketsResult {
    /**
     * 
     */
    RegionalBucketList?: RegionalBucketList;
    /**
     *  NextToken is sent when isTruncated is true, which means there are more buckets that can be listed. The next list requests to Amazon S3 can be continued with this NextToken. NextToken is obfuscated and is not a real key.
     */
    NextToken?: NonEmptyMaxLength1024String;
  }
  export interface ListStorageLensConfigurationEntry {
    /**
     * A container for the S3 Storage Lens configuration ID.
     */
    Id: ConfigId;
    /**
     * The ARN of the S3 Storage Lens configuration. This property is read-only.
     */
    StorageLensArn: StorageLensArn;
    /**
     * A container for the S3 Storage Lens home Region. Your metrics data is stored and retained in your designated S3 Storage Lens home Region.
     */
    HomeRegion: S3AWSRegion;
    /**
     * A container for whether the S3 Storage Lens configuration is enabled. This property is required.
     */
    IsEnabled?: IsEnabled;
  }
  export interface ListStorageLensConfigurationsRequest {
    /**
     * The account ID of the requester.
     */
    AccountId: AccountId;
    /**
     * A pagination token to request the next page of results.
     */
    NextToken?: ContinuationToken;
  }
  export interface ListStorageLensConfigurationsResult {
    /**
     * If the request produced more than the maximum number of S3 Storage Lens configuration results, you can pass this value into a subsequent request to retrieve the next page of results.
     */
    NextToken?: ContinuationToken;
    /**
     * A list of S3 Storage Lens configurations.
     */
    StorageLensConfigurationList?: StorageLensConfigurationList;
  }
  export interface ListStorageLensGroupEntry {
    /**
     *  Contains the name of the Storage Lens group that exists in the specified home Region. 
     */
    Name: StorageLensGroupName;
    /**
     *  Contains the Amazon Resource Name (ARN) of the Storage Lens group. This property is read-only. 
     */
    StorageLensGroupArn: StorageLensGroupArn;
    /**
     *  Contains the Amazon Web Services Region where the Storage Lens group was created. 
     */
    HomeRegion: S3AWSRegion;
  }
  export interface ListStorageLensGroupsRequest {
    /**
     *  The Amazon Web Services account ID that owns the Storage Lens groups. 
     */
    AccountId: AccountId;
    /**
     * The token for the next set of results, or null if there are no more results. 
     */
    NextToken?: ContinuationToken;
  }
  export interface ListStorageLensGroupsResult {
    /**
     *  If NextToken is returned, there are more Storage Lens groups results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. 
     */
    NextToken?: ContinuationToken;
    /**
     *  The list of Storage Lens groups that exist in the specified home Region. 
     */
    StorageLensGroupList?: StorageLensGroupList;
  }
  export interface ListTagsForResourceRequest {
    /**
     *  The Amazon Web Services account ID of the resource owner. 
     */
    AccountId: AccountId;
    /**
     *  The Amazon Resource Name (ARN) of the S3 resource that you want to list the tags for. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant. 
     */
    ResourceArn: S3ResourceArn;
  }
  export interface ListTagsForResourceResult {
    /**
     *  The Amazon Web Services resource tags that are associated with the resource. 
     */
    Tags?: TagList;
  }
  export type Location = string;
  export type MFA = string;
  export type MFADelete = "Enabled"|"Disabled"|string;
  export type MFADeleteStatus = "Enabled"|"Disabled"|string;
  export type ManifestPrefixString = string;
  export type MatchAnyPrefix = Prefix[];
  export type MatchAnySuffix = Suffix[];
  export type MatchAnyTag = S3Tag[];
  export interface MatchObjectAge {
    /**
     *  Specifies the maximum object age in days. Must be a positive whole number, greater than the minimum object age and less than or equal to 2,147,483,647. 
     */
    DaysGreaterThan?: ObjectAgeValue;
    /**
     *  Specifies the minimum object age in days. The value must be a positive whole number, greater than 0 and less than or equal to 2,147,483,647. 
     */
    DaysLessThan?: ObjectAgeValue;
  }
  export interface MatchObjectSize {
    /**
     *  Specifies the minimum object size in Bytes. The value must be a positive number, greater than 0 and less than 5 TB. 
     */
    BytesGreaterThan?: ObjectSizeValue;
    /**
     *  Specifies the maximum object size in Bytes. The value must be a positive number, greater than the minimum object size and less than 5 TB. 
     */
    BytesLessThan?: ObjectSizeValue;
  }
  export type MaxLength1024String = string;
  export type MaxResults = number;
  export interface Metrics {
    /**
     * Specifies whether replication metrics are enabled. 
     */
    Status: MetricsStatus;
    /**
     * A container that specifies the time threshold for emitting the s3:Replication:OperationMissedThreshold event.   This is not supported by Amazon S3 on Outposts buckets. 
     */
    EventThreshold?: ReplicationTimeValue;
  }
  export type MetricsStatus = "Enabled"|"Disabled"|string;
  export type MinStorageBytesPercentage = number;
  export type Minutes = number;
  export type MultiRegionAccessPointAlias = string;
  export type MultiRegionAccessPointClientToken = string;
  export type MultiRegionAccessPointId = string;
  export type MultiRegionAccessPointName = string;
  export interface MultiRegionAccessPointPolicyDocument {
    /**
     * The last established policy for the Multi-Region Access Point.
     */
    Established?: EstablishedMultiRegionAccessPointPolicy;
    /**
     * The proposed policy for the Multi-Region Access Point.
     */
    Proposed?: ProposedMultiRegionAccessPointPolicy;
  }
  export interface MultiRegionAccessPointRegionalResponse {
    /**
     * The name of the Region in the Multi-Region Access Point.
     */
    Name?: RegionName;
    /**
     * The current status of the Multi-Region Access Point in this Region.
     */
    RequestStatus?: AsyncRequestStatus;
  }
  export type MultiRegionAccessPointRegionalResponseList = MultiRegionAccessPointRegionalResponse[];
  export interface MultiRegionAccessPointReport {
    /**
     * The name of the Multi-Region Access Point.
     */
    Name?: MultiRegionAccessPointName;
    /**
     * The alias for the Multi-Region Access Point. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Managing Multi-Region Access Points.
     */
    Alias?: MultiRegionAccessPointAlias;
    /**
     * When the Multi-Region Access Point create request was received.
     */
    CreatedAt?: CreationTimestamp;
    PublicAccessBlock?: PublicAccessBlockConfiguration;
    /**
     * The current status of the Multi-Region Access Point.  CREATING and DELETING are temporary states that exist while the request is propagating and being completed. If a Multi-Region Access Point has a status of PARTIALLY_CREATED, you can retry creation or send a request to delete the Multi-Region Access Point. If a Multi-Region Access Point has a status of PARTIALLY_DELETED, you can retry a delete request to finish the deletion of the Multi-Region Access Point.
     */
    Status?: MultiRegionAccessPointStatus;
    /**
     * A collection of the Regions and buckets associated with the Multi-Region Access Point.
     */
    Regions?: RegionReportList;
  }
  export type MultiRegionAccessPointReportList = MultiRegionAccessPointReport[];
  export interface MultiRegionAccessPointRoute {
    /**
     * The name of the Amazon S3 bucket for which you'll submit a routing configuration change. Either the Bucket or the Region value must be provided. If both are provided, the bucket must be in the specified Region.
     */
    Bucket?: BucketName;
    /**
     * The Amazon Web Services Region to which you'll be submitting a routing configuration change. Either the Bucket or the Region value must be provided. If both are provided, the bucket must be in the specified Region.
     */
    Region?: RegionName;
    /**
     * The traffic state for the specified bucket or Amazon Web Services Region.  A value of 0 indicates a passive state, which means that no new traffic will be routed to the Region.  A value of 100 indicates an active state, which means that traffic will be routed to the specified Region.  When the routing configuration for a Region is changed from active to passive, any in-progress operations (uploads, copies, deletes, and so on) to the formerly active Region will continue to run to until a final success or failure status is reached. If all Regions in the routing configuration are designated as passive, you'll receive an InvalidRequest error.
     */
    TrafficDialPercentage: TrafficDialPercentage;
  }
  export type MultiRegionAccessPointStatus = "READY"|"INCONSISTENT_ACROSS_REGIONS"|"CREATING"|"PARTIALLY_CREATED"|"PARTIALLY_DELETED"|"DELETING"|string;
  export interface MultiRegionAccessPointsAsyncResponse {
    /**
     * A collection of status information for the different Regions that a Multi-Region Access Point supports.
     */
    Regions?: MultiRegionAccessPointRegionalResponseList;
  }
  export type NetworkOrigin = "Internet"|"VPC"|string;
  export type NonEmptyMaxLength1024String = string;
  export type NonEmptyMaxLength1024StringList = NonEmptyMaxLength1024String[];
  export type NonEmptyMaxLength2048String = string;
  export type NonEmptyMaxLength256String = string;
  export type NonEmptyMaxLength64String = string;
  export type NoncurrentVersionCount = number;
  export interface NoncurrentVersionExpiration {
    /**
     * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see How Amazon S3 Calculates When an Object Became Noncurrent in the Amazon S3 User Guide.
     */
    NoncurrentDays?: Days;
    /**
     * Specifies how many noncurrent versions S3 on Outposts will retain. If there are this many more recent noncurrent versions, S3 on Outposts will take the associated action. For more information about noncurrent versions, see Lifecycle configuration elements in the Amazon S3 User Guide.
     */
    NewerNoncurrentVersions?: NoncurrentVersionCount;
  }
  export interface NoncurrentVersionTransition {
    /**
     * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see  How Amazon S3 Calculates How Long an Object Has Been Noncurrent in the Amazon S3 User Guide.
     */
    NoncurrentDays?: Days;
    /**
     * The class of storage used to store the object.
     */
    StorageClass?: TransitionStorageClass;
  }
  export type NoncurrentVersionTransitionList = NoncurrentVersionTransition[];
  export type ObjectAgeValue = number;
  export type ObjectCreationTime = Date;
  export interface ObjectLambdaAccessPoint {
    /**
     * The name of the Object Lambda Access Point.
     */
    Name: ObjectLambdaAccessPointName;
    /**
     * Specifies the ARN for the Object Lambda Access Point.
     */
    ObjectLambdaAccessPointArn?: ObjectLambdaAccessPointArn;
    /**
     * The alias of the Object Lambda Access Point.
     */
    Alias?: ObjectLambdaAccessPointAlias;
  }
  export interface ObjectLambdaAccessPointAlias {
    /**
     * The alias value of the Object Lambda Access Point.
     */
    Value?: ObjectLambdaAccessPointAliasValue;
    /**
     * The status of the Object Lambda Access Point alias. If the status is PROVISIONING, the Object Lambda Access Point is provisioning the alias and the alias is not ready for use yet. If the status is READY, the Object Lambda Access Point alias is successfully provisioned and ready for use.
     */
    Status?: ObjectLambdaAccessPointAliasStatus;
  }
  export type ObjectLambdaAccessPointAliasStatus = "PROVISIONING"|"READY"|string;
  export type ObjectLambdaAccessPointAliasValue = string;
  export type ObjectLambdaAccessPointArn = string;
  export type ObjectLambdaAccessPointList = ObjectLambdaAccessPoint[];
  export type ObjectLambdaAccessPointName = string;
  export type ObjectLambdaAllowedFeature = "GetObject-Range"|"GetObject-PartNumber"|"HeadObject-Range"|"HeadObject-PartNumber"|string;
  export type ObjectLambdaAllowedFeaturesList = ObjectLambdaAllowedFeature[];
  export interface ObjectLambdaConfiguration {
    /**
     * Standard access point associated with the Object Lambda Access Point.
     */
    SupportingAccessPoint: ObjectLambdaSupportingAccessPointArn;
    /**
     * A container for whether the CloudWatch metrics configuration is enabled.
     */
    CloudWatchMetricsEnabled?: Boolean;
    /**
     * A container for allowed features. Valid inputs are GetObject-Range, GetObject-PartNumber, HeadObject-Range, and HeadObject-PartNumber.
     */
    AllowedFeatures?: ObjectLambdaAllowedFeaturesList;
    /**
     * A container for transformation configurations for an Object Lambda Access Point.
     */
    TransformationConfigurations: ObjectLambdaTransformationConfigurationsList;
  }
  export interface ObjectLambdaContentTransformation {
    /**
     * A container for an Lambda function.
     */
    AwsLambda?: AwsLambdaTransformation;
  }
  export type ObjectLambdaPolicy = string;
  export type ObjectLambdaSupportingAccessPointArn = string;
  export interface ObjectLambdaTransformationConfiguration {
    /**
     * A container for the action of an Object Lambda Access Point configuration. Valid inputs are GetObject, ListObjects, HeadObject, and ListObjectsV2.
     */
    Actions: ObjectLambdaTransformationConfigurationActionsList;
    /**
     * A container for the content transformation of an Object Lambda Access Point configuration.
     */
    ContentTransformation: ObjectLambdaContentTransformation;
  }
  export type ObjectLambdaTransformationConfigurationAction = "GetObject"|"HeadObject"|"ListObjects"|"ListObjectsV2"|string;
  export type ObjectLambdaTransformationConfigurationActionsList = ObjectLambdaTransformationConfigurationAction[];
  export type ObjectLambdaTransformationConfigurationsList = ObjectLambdaTransformationConfiguration[];
  export type ObjectLockEnabledForBucket = boolean;
  export type ObjectSizeGreaterThanBytes = number;
  export type ObjectSizeLessThanBytes = number;
  export type ObjectSizeValue = number;
  export type OperationName = "LambdaInvoke"|"S3PutObjectCopy"|"S3PutObjectAcl"|"S3PutObjectTagging"|"S3DeleteObjectTagging"|"S3InitiateRestoreObject"|"S3PutObjectLegalHold"|"S3PutObjectRetention"|"S3ReplicateObject"|string;
  export type Organization = string;
  export type OutputSchemaVersion = "V_1"|string;
  export type OwnerOverride = "Destination"|string;
  export type Permission = "READ"|"WRITE"|"READWRITE"|string;
  export type Policy = string;
  export type PolicyDocument = string;
  export interface PolicyStatus {
    /**
     * 
     */
    IsPublic?: IsPublic;
  }
  export type Prefix = string;
  export interface PrefixLevel {
    /**
     * A container for the prefix-level storage metrics for S3 Storage Lens.
     */
    StorageMetrics: PrefixLevelStorageMetrics;
  }
  export interface PrefixLevelStorageMetrics {
    /**
     * A container for whether prefix-level storage metrics are enabled.
     */
    IsEnabled?: IsEnabled;
    SelectionCriteria?: SelectionCriteria;
  }
  export type Priority = number;
  export type Privilege = "Minimal"|"Default"|string;
  export interface ProposedMultiRegionAccessPointPolicy {
    /**
     * The details of the proposed policy.
     */
    Policy?: Policy;
  }
  export interface PublicAccessBlockConfiguration {
    /**
     * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:    PutBucketAcl and PutObjectAcl calls fail if the specified ACL is public.   PUT Object calls fail if the request includes a public ACL.   PUT Bucket calls fail if the request includes a public ACL.   Enabling this setting doesn't affect existing policies or ACLs. This property is not supported for Amazon S3 on Outposts.
     */
    BlockPublicAcls?: Setting;
    /**
     * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain.  Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. This property is not supported for Amazon S3 on Outposts.
     */
    IgnorePublicAcls?: Setting;
    /**
     * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.  Enabling this setting doesn't affect existing bucket policies. This property is not supported for Amazon S3 on Outposts.
     */
    BlockPublicPolicy?: Setting;
    /**
     * Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. Setting this element to TRUE restricts access to buckets with public policies to only Amazon Web Service principals and authorized users within this account. Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. This property is not supported for Amazon S3 on Outposts.
     */
    RestrictPublicBuckets?: Setting;
  }
  export type PublicAccessBlockEnabled = boolean;
  export interface PutAccessGrantsInstanceResourcePolicyRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The resource policy of the S3 Access Grants instance that you are updating.
     */
    Policy: PolicyDocument;
    /**
     * The Organization of the resource policy of the S3 Access Grants instance.
     */
    Organization?: Organization;
  }
  export interface PutAccessGrantsInstanceResourcePolicyResult {
    /**
     * The updated resource policy of the S3 Access Grants instance.
     */
    Policy?: PolicyDocument;
    /**
     * The Organization of the resource policy of the S3 Access Grants instance.
     */
    Organization?: Organization;
    /**
     * The date and time when you created the S3 Access Grants instance resource policy. 
     */
    CreatedAt?: CreationTimestamp;
  }
  export interface PutAccessPointConfigurationForObjectLambdaRequest {
    /**
     * The account ID for the account that owns the specified Object Lambda Access Point.
     */
    AccountId: AccountId;
    /**
     * The name of the Object Lambda Access Point.
     */
    Name: ObjectLambdaAccessPointName;
    /**
     * Object Lambda Access Point configuration document.
     */
    Configuration: ObjectLambdaConfiguration;
  }
  export interface PutAccessPointPolicyForObjectLambdaRequest {
    /**
     * The account ID for the account that owns the specified Object Lambda Access Point.
     */
    AccountId: AccountId;
    /**
     * The name of the Object Lambda Access Point.
     */
    Name: ObjectLambdaAccessPointName;
    /**
     * Object Lambda Access Point resource policy document.
     */
    Policy: ObjectLambdaPolicy;
  }
  export interface PutAccessPointPolicyRequest {
    /**
     * The Amazon Web Services account ID for owner of the bucket associated with the specified access point.
     */
    AccountId: AccountId;
    /**
     * The name of the access point that you want to associate with the specified policy. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded. 
     */
    Name: AccessPointName;
    /**
     * The policy that you want to apply to the specified access point. For more information about access point policies, see Managing data access with Amazon S3 access points in the Amazon S3 User Guide.
     */
    Policy: Policy;
  }
  export interface PutBucketLifecycleConfigurationRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * The name of the bucket for which to set the configuration.
     */
    Bucket: BucketName;
    /**
     * Container for lifecycle rules. You can add as many as 1,000 rules.
     */
    LifecycleConfiguration?: LifecycleConfiguration;
  }
  export interface PutBucketPolicyRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
    /**
     * Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.  This is not supported by Amazon S3 on Outposts buckets. 
     */
    ConfirmRemoveSelfBucketAccess?: ConfirmRemoveSelfBucketAccess;
    /**
     * The bucket policy as a JSON document.
     */
    Policy: Policy;
  }
  export interface PutBucketReplicationRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * Specifies the S3 on Outposts bucket to set the configuration for. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
    /**
     * 
     */
    ReplicationConfiguration: ReplicationConfiguration;
  }
  export interface PutBucketTaggingRequest {
    /**
     * The Amazon Web Services account ID of the Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * The Amazon Resource Name (ARN) of the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded. 
     */
    Bucket: BucketName;
    /**
     * 
     */
    Tagging: Tagging;
  }
  export interface PutBucketVersioningRequest {
    /**
     * The Amazon Web Services account ID of the S3 on Outposts bucket.
     */
    AccountId: AccountId;
    /**
     * The S3 on Outposts bucket to set the versioning state for.
     */
    Bucket: BucketName;
    /**
     * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.
     */
    MFA?: MFA;
    /**
     * The root-level tag for the VersioningConfiguration parameters.
     */
    VersioningConfiguration: VersioningConfiguration;
  }
  export interface PutJobTaggingRequest {
    /**
     * The Amazon Web Services account ID associated with the S3 Batch Operations job.
     */
    AccountId: AccountId;
    /**
     * The ID for the S3 Batch Operations job whose tags you want to replace.
     */
    JobId: JobId;
    /**
     * The set of tags to associate with the S3 Batch Operations job.
     */
    Tags: S3TagSet;
  }
  export interface PutJobTaggingResult {
  }
  export interface PutMultiRegionAccessPointPolicyInput {
    /**
     * The name of the Multi-Region Access Point associated with the request.
     */
    Name: MultiRegionAccessPointName;
    /**
     * The policy details for the PutMultiRegionAccessPoint request.
     */
    Policy: Policy;
  }
  export interface PutMultiRegionAccessPointPolicyRequest {
    /**
     * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
     */
    AccountId: AccountId;
    /**
     * An idempotency token used to identify the request and guarantee that requests are unique.
     */
    ClientToken: MultiRegionAccessPointClientToken;
    /**
     * A container element containing the details of the policy for the Multi-Region Access Point.
     */
    Details: PutMultiRegionAccessPointPolicyInput;
  }
  export interface PutMultiRegionAccessPointPolicyResult {
    /**
     * The request token associated with the request. You can use this token with DescribeMultiRegionAccessPointOperation to determine the status of asynchronous requests.
     */
    RequestTokenARN?: AsyncRequestTokenARN;
  }
  export interface PutPublicAccessBlockRequest {
    /**
     * The PublicAccessBlock configuration that you want to apply to the specified Amazon Web Services account.
     */
    PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
    /**
     * The account ID for the Amazon Web Services account whose PublicAccessBlock configuration you want to set.
     */
    AccountId: AccountId;
  }
  export interface PutStorageLensConfigurationRequest {
    /**
     * The ID of the S3 Storage Lens configuration.
     */
    ConfigId: ConfigId;
    /**
     * The account ID of the requester.
     */
    AccountId: AccountId;
    /**
     * The S3 Storage Lens configuration.
     */
    StorageLensConfiguration: StorageLensConfiguration;
    /**
     * The tag set of the S3 Storage Lens configuration.  You can set up to a maximum of 50 tags. 
     */
    Tags?: StorageLensTags;
  }
  export interface PutStorageLensConfigurationTaggingRequest {
    /**
     * The ID of the S3 Storage Lens configuration.
     */
    ConfigId: ConfigId;
    /**
     * The account ID of the requester.
     */
    AccountId: AccountId;
    /**
     * The tag set of the S3 Storage Lens configuration.  You can set up to a maximum of 50 tags. 
     */
    Tags: StorageLensTags;
  }
  export interface PutStorageLensConfigurationTaggingResult {
  }
  export interface Region {
    /**
     * The name of the associated bucket for the Region.
     */
    Bucket: BucketName;
    /**
     * The Amazon Web Services account ID that owns the Amazon S3 bucket that's associated with this Multi-Region Access Point.
     */
    BucketAccountId?: AccountId;
  }
  export type RegionCreationList = Region[];
  export type RegionName = string;
  export interface RegionReport {
    /**
     * The name of the bucket.
     */
    Bucket?: BucketName;
    /**
     * The name of the Region.
     */
    Region?: RegionName;
    /**
     * The Amazon Web Services account ID that owns the Amazon S3 bucket that's associated with this Multi-Region Access Point.
     */
    BucketAccountId?: AccountId;
  }
  export type RegionReportList = RegionReport[];
  export interface RegionalBucket {
    /**
     * 
     */
    Bucket: BucketName;
    /**
     * The Amazon Resource Name (ARN) for the regional bucket.
     */
    BucketArn?: S3RegionalBucketArn;
    /**
     * 
     */
    PublicAccessBlockEnabled: PublicAccessBlockEnabled;
    /**
     * The creation date of the regional bucket
     */
    CreationDate: CreationDate;
    /**
     * The Outposts ID of the regional bucket.
     */
    OutpostId?: NonEmptyMaxLength64String;
  }
  export type RegionalBucketList = RegionalBucket[];
  export type Regions = S3AWSRegion[];
  export type ReplicaKmsKeyID = string;
  export interface ReplicaModifications {
    /**
     * Specifies whether S3 on Outposts replicates modifications to object metadata on replicas.
     */
    Status: ReplicaModificationsStatus;
  }
  export type ReplicaModificationsStatus = "Enabled"|"Disabled"|string;
  export interface ReplicationConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that S3 on Outposts assumes when replicating objects. For information about S3 replication on Outposts configuration, see Setting up replication in the Amazon S3 User Guide.
     */
    Role: Role;
    /**
     * A container for one or more replication rules. A replication configuration must have at least one rule and can contain an array of 100 rules at the most. 
     */
    Rules: ReplicationRules;
  }
  export interface ReplicationRule {
    /**
     * A unique identifier for the rule. The maximum value is 255 characters.
     */
    ID?: ID;
    /**
     * The priority indicates which rule has precedence whenever two or more replication rules conflict. S3 on Outposts attempts to replicate objects according to all replication rules. However, if there are two or more rules with the same destination Outposts bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority.  For more information, see Creating replication rules on Outposts in the Amazon S3 User Guide.
     */
    Priority?: Priority;
    /**
     * An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in an Outposts bucket, specify an empty string.  When you're using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see  XML-related object key constraints in the Amazon S3 User Guide. 
     */
    Prefix?: Prefix;
    /**
     * A filter that identifies the subset of objects to which the replication rule applies. A Filter element must specify exactly one Prefix, Tag, or And child element.
     */
    Filter?: ReplicationRuleFilter;
    /**
     * Specifies whether the rule is enabled.
     */
    Status: ReplicationRuleStatus;
    /**
     * A container that describes additional filters for identifying the source Outposts objects that you want to replicate. You can choose to enable or disable the replication of these objects.
     */
    SourceSelectionCriteria?: SourceSelectionCriteria;
    /**
     * An optional configuration to replicate existing source bucket objects.   This is not supported by Amazon S3 on Outposts buckets. 
     */
    ExistingObjectReplication?: ExistingObjectReplication;
    /**
     * A container for information about the replication destination and its configurations.
     */
    Destination: Destination;
    /**
     * Specifies whether S3 on Outposts replicates delete markers. If you specify a Filter element in your replication configuration, you must also include a DeleteMarkerReplication element. If your Filter includes a Tag element, the DeleteMarkerReplication element's Status child element must be set to Disabled, because S3 on Outposts doesn't support replicating delete markers for tag-based rules. For more information about delete marker replication, see How delete operations affect replication in the Amazon S3 User Guide. 
     */
    DeleteMarkerReplication?: DeleteMarkerReplication;
    /**
     * The Amazon Resource Name (ARN) of the access point for the source Outposts bucket that you want S3 on Outposts to replicate the objects from.
     */
    Bucket: BucketIdentifierString;
  }
  export interface ReplicationRuleAndOperator {
    /**
     * An object key name prefix that identifies the subset of objects that the rule applies to.
     */
    Prefix?: Prefix;
    /**
     * An array of tags that contain key and value pairs.
     */
    Tags?: S3TagSet;
  }
  export interface ReplicationRuleFilter {
    /**
     * An object key name prefix that identifies the subset of objects that the rule applies to.  When you're using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see  XML-related object key constraints in the Amazon S3 User Guide. 
     */
    Prefix?: Prefix;
    Tag?: S3Tag;
    /**
     * A container for specifying rule filters. The filters determine the subset of objects that the rule applies to. This element is required only if you specify more than one filter. For example:    If you specify both a Prefix and a Tag filter, wrap these filters in an And element.   If you specify a filter based on multiple tags, wrap the Tag elements in an And element.  
     */
    And?: ReplicationRuleAndOperator;
  }
  export type ReplicationRuleStatus = "Enabled"|"Disabled"|string;
  export type ReplicationRules = ReplicationRule[];
  export type ReplicationStatus = "COMPLETED"|"FAILED"|"REPLICA"|"NONE"|string;
  export type ReplicationStatusFilterList = ReplicationStatus[];
  export type ReplicationStorageClass = "STANDARD"|"REDUCED_REDUNDANCY"|"STANDARD_IA"|"ONEZONE_IA"|"INTELLIGENT_TIERING"|"GLACIER"|"DEEP_ARCHIVE"|"OUTPOSTS"|"GLACIER_IR"|string;
  export interface ReplicationTime {
    /**
     * Specifies whether S3 Replication Time Control (S3 RTC) is enabled. 
     */
    Status: ReplicationTimeStatus;
    /**
     * A container that specifies the time by which replication should be complete for all objects and operations on objects. 
     */
    Time: ReplicationTimeValue;
  }
  export type ReplicationTimeStatus = "Enabled"|"Disabled"|string;
  export interface ReplicationTimeValue {
    /**
     * Contains an integer that specifies the time period in minutes.  Valid value: 15
     */
    Minutes?: Minutes;
  }
  export type ReportPrefixString = string;
  export type RequestedJobStatus = "Cancelled"|"Ready"|string;
  export type Role = string;
  export type RouteList = MultiRegionAccessPointRoute[];
  export type S3AWSRegion = string;
  export interface S3AccessControlList {
    /**
     * 
     */
    Owner: S3ObjectOwner;
    /**
     * 
     */
    Grants?: S3GrantList;
  }
  export interface S3AccessControlPolicy {
    /**
     * 
     */
    AccessControlList?: S3AccessControlList;
    /**
     * 
     */
    CannedAccessControlList?: S3CannedAccessControlList;
  }
  export type S3AccessPointArn = string;
  export type S3BucketArnString = string;
  export interface S3BucketDestination {
    /**
     * 
     */
    Format: Format;
    /**
     * The schema version of the export file.
     */
    OutputSchemaVersion: OutputSchemaVersion;
    /**
     * The account ID of the owner of the S3 Storage Lens metrics export bucket.
     */
    AccountId: AccountId;
    /**
     * The Amazon Resource Name (ARN) of the bucket. This property is read-only and follows the following format:  arn:aws:s3:us-east-1:example-account-id:bucket/your-destination-bucket-name  
     */
    Arn: S3BucketArnString;
    /**
     * The prefix of the destination bucket where the metrics export will be delivered.
     */
    Prefix?: Prefix;
    /**
     * The container for the type encryption of the metrics exports in this bucket.
     */
    Encryption?: StorageLensDataExportEncryption;
  }
  export type S3CannedAccessControlList = "private"|"public-read"|"public-read-write"|"aws-exec-read"|"authenticated-read"|"bucket-owner-read"|"bucket-owner-full-control"|string;
  export type S3ChecksumAlgorithm = "CRC32"|"CRC32C"|"SHA1"|"SHA256"|string;
  export type S3ContentLength = number;
  export interface S3CopyObjectOperation {
    /**
     * Specifies the destination bucket Amazon Resource Name (ARN) for the batch copy operation. For example, to copy objects to a bucket named destinationBucket, set the TargetResource property to arn:aws:s3:::destinationBucket.
     */
    TargetResource?: S3BucketArnString;
    /**
     * 
     */
    CannedAccessControlList?: S3CannedAccessControlList;
    /**
     * 
     */
    AccessControlGrants?: S3GrantList;
    /**
     * 
     */
    MetadataDirective?: S3MetadataDirective;
    /**
     * 
     */
    ModifiedSinceConstraint?: TimeStamp;
    /**
     * If you don't provide this parameter, Amazon S3 copies all the metadata from the original objects. If you specify an empty set, the new objects will have no tags. Otherwise, Amazon S3 assigns the supplied tags to the new objects.
     */
    NewObjectMetadata?: S3ObjectMetadata;
    /**
     * 
     */
    NewObjectTagging?: S3TagSet;
    /**
     * Specifies an optional metadata property for website redirects, x-amz-website-redirect-location. Allows webpage redirects if the object is accessed through a website endpoint.
     */
    RedirectLocation?: NonEmptyMaxLength2048String;
    /**
     * 
     */
    RequesterPays?: Boolean;
    /**
     * 
     */
    StorageClass?: S3StorageClass;
    /**
     * 
     */
    UnModifiedSinceConstraint?: TimeStamp;
    /**
     * 
     */
    SSEAwsKmsKeyId?: KmsKeyArnString;
    /**
     * Specifies the folder prefix that you want the objects to be copied into. For example, to copy objects into a folder named Folder1 in the destination bucket, set the TargetKeyPrefix property to Folder1.
     */
    TargetKeyPrefix?: NonEmptyMaxLength1024String;
    /**
     * The legal hold status to be applied to all objects in the Batch Operations job.
     */
    ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus;
    /**
     * The retention mode to be applied to all objects in the Batch Operations job.
     */
    ObjectLockMode?: S3ObjectLockMode;
    /**
     * The date when the applied object retention configuration expires on all objects in the Batch Operations job.
     */
    ObjectLockRetainUntilDate?: TimeStamp;
    /**
     * Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Amazon Web Services KMS (SSE-KMS). Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Specifying this header with an object action doesn’t affect bucket-level settings for S3 Bucket Key.
     */
    BucketKeyEnabled?: Boolean;
    /**
     * Indicates the algorithm that you want Amazon S3 to use to create the checksum. For more information, see  Checking object integrity in the Amazon S3 User Guide.
     */
    ChecksumAlgorithm?: S3ChecksumAlgorithm;
  }
  export interface S3DeleteObjectTaggingOperation {
  }
  export type S3ExpirationInDays = number;
  export interface S3GeneratedManifestDescriptor {
    /**
     * The format of the generated manifest.
     */
    Format?: GeneratedManifestFormat;
    Location?: JobManifestLocation;
  }
  export type S3GlacierJobTier = "BULK"|"STANDARD"|string;
  export interface S3Grant {
    /**
     * 
     */
    Grantee?: S3Grantee;
    /**
     * 
     */
    Permission?: S3Permission;
  }
  export type S3GrantList = S3Grant[];
  export interface S3Grantee {
    /**
     * 
     */
    TypeIdentifier?: S3GranteeTypeIdentifier;
    /**
     * 
     */
    Identifier?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    DisplayName?: NonEmptyMaxLength1024String;
  }
  export type S3GranteeTypeIdentifier = "id"|"emailAddress"|"uri"|string;
  export interface S3InitiateRestoreObjectOperation {
    /**
     * This argument specifies how long the S3 Glacier or S3 Glacier Deep Archive object remains available in Amazon S3. S3 Initiate Restore Object jobs that target S3 Glacier and S3 Glacier Deep Archive objects require ExpirationInDays set to 1 or greater. Conversely, do not set ExpirationInDays when creating S3 Initiate Restore Object jobs that target S3 Intelligent-Tiering Archive Access and Deep Archive Access tier objects. Objects in S3 Intelligent-Tiering archive access tiers are not subject to restore expiry, so specifying ExpirationInDays results in restore request failure. S3 Batch Operations jobs can operate either on S3 Glacier and S3 Glacier Deep Archive storage class objects or on S3 Intelligent-Tiering Archive Access and Deep Archive Access storage tier objects, but not both types in the same job. If you need to restore objects of both types you must create separate Batch Operations jobs. 
     */
    ExpirationInDays?: S3ExpirationInDays;
    /**
     * S3 Batch Operations supports STANDARD and BULK retrieval tiers, but not the EXPEDITED retrieval tier.
     */
    GlacierJobTier?: S3GlacierJobTier;
  }
  export interface S3JobManifestGenerator {
    /**
     * The Amazon Web Services account ID that owns the bucket the generated manifest is written to. If provided the generated manifest bucket's owner Amazon Web Services account ID must match this value, else the job fails.
     */
    ExpectedBucketOwner?: AccountId;
    /**
     * The source bucket used by the ManifestGenerator.
     */
    SourceBucket: S3BucketArnString;
    /**
     * Specifies the location the generated manifest will be written to.
     */
    ManifestOutputLocation?: S3ManifestOutputLocation;
    /**
     * Specifies rules the S3JobManifestGenerator should use to use to decide whether an object in the source bucket should or should not be included in the generated job manifest.
     */
    Filter?: JobManifestGeneratorFilter;
    /**
     * Determines whether or not to write the job's generated manifest to a bucket.
     */
    EnableManifestOutput: Boolean;
  }
  export type S3KeyArnString = string;
  export interface S3ManifestOutputLocation {
    /**
     * The Account ID that owns the bucket the generated manifest is written to.
     */
    ExpectedManifestBucketOwner?: AccountId;
    /**
     * The bucket ARN the generated manifest should be written to.
     */
    Bucket: S3BucketArnString;
    /**
     * Prefix identifying one or more objects to which the manifest applies.
     */
    ManifestPrefix?: ManifestPrefixString;
    /**
     * Specifies what encryption should be used when the generated manifest objects are written.
     */
    ManifestEncryption?: GeneratedManifestEncryption;
    /**
     * The format of the generated manifest.
     */
    ManifestFormat: GeneratedManifestFormat;
  }
  export type S3MetadataDirective = "COPY"|"REPLACE"|string;
  export interface S3ObjectLockLegalHold {
    /**
     * The Object Lock legal hold status to be applied to all objects in the Batch Operations job.
     */
    Status: S3ObjectLockLegalHoldStatus;
  }
  export type S3ObjectLockLegalHoldStatus = "OFF"|"ON"|string;
  export type S3ObjectLockMode = "COMPLIANCE"|"GOVERNANCE"|string;
  export type S3ObjectLockRetentionMode = "COMPLIANCE"|"GOVERNANCE"|string;
  export interface S3ObjectMetadata {
    /**
     * 
     */
    CacheControl?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    ContentDisposition?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    ContentEncoding?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    ContentLanguage?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    UserMetadata?: S3UserMetadata;
    /**
     * 
     */
    ContentLength?: S3ContentLength;
    /**
     * 
     */
    ContentMD5?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    ContentType?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    HttpExpiresDate?: TimeStamp;
    /**
     * 
     */
    RequesterCharged?: Boolean;
    /**
     * 
     */
    SSEAlgorithm?: S3SSEAlgorithm;
  }
  export interface S3ObjectOwner {
    /**
     * 
     */
    ID?: NonEmptyMaxLength1024String;
    /**
     * 
     */
    DisplayName?: NonEmptyMaxLength1024String;
  }
  export type S3ObjectVersionId = string;
  export type S3Permission = "FULL_CONTROL"|"READ"|"WRITE"|"READ_ACP"|"WRITE_ACP"|string;
  export type S3Prefix = string;
  export type S3PrefixType = "Object"|string;
  export type S3RegionalBucketArn = string;
  export interface S3ReplicateObjectOperation {
  }
  export type S3ResourceArn = string;
  export interface S3Retention {
    /**
     * The date when the applied Object Lock retention will expire on all objects set by the Batch Operations job.
     */
    RetainUntilDate?: TimeStamp;
    /**
     * The Object Lock retention mode to be applied to all objects in the Batch Operations job.
     */
    Mode?: S3ObjectLockRetentionMode;
  }
  export type S3SSEAlgorithm = "AES256"|"KMS"|string;
  export interface S3SetObjectAclOperation {
    /**
     * 
     */
    AccessControlPolicy?: S3AccessControlPolicy;
  }
  export interface S3SetObjectLegalHoldOperation {
    /**
     * Contains the Object Lock legal hold status to be applied to all objects in the Batch Operations job.
     */
    LegalHold: S3ObjectLockLegalHold;
  }
  export interface S3SetObjectRetentionOperation {
    /**
     * Indicates if the action should be applied to objects in the Batch Operations job even if they have Object Lock  GOVERNANCE type in place.
     */
    BypassGovernanceRetention?: Boolean;
    /**
     * Contains the Object Lock retention mode to be applied to all objects in the Batch Operations job. For more information, see Using S3 Object Lock retention with S3 Batch Operations in the Amazon S3 User Guide.
     */
    Retention: S3Retention;
  }
  export interface S3SetObjectTaggingOperation {
    /**
     * 
     */
    TagSet?: S3TagSet;
  }
  export type S3StorageClass = "STANDARD"|"STANDARD_IA"|"ONEZONE_IA"|"GLACIER"|"INTELLIGENT_TIERING"|"DEEP_ARCHIVE"|"GLACIER_IR"|string;
  export interface S3Tag {
    /**
     * Key of the tag
     */
    Key: TagKeyString;
    /**
     * Value of the tag
     */
    Value: TagValueString;
  }
  export type S3TagSet = S3Tag[];
  export type S3UserMetadata = {[key: string]: MaxLength1024String};
  export interface SSEKMS {
    /**
     * A container for the ARN of the SSE-KMS encryption. This property is read-only and follows the following format:  arn:aws:kms:us-east-1:example-account-id:key/example-9a73-4afc-8d29-8f5900cef44e  
     */
    KeyId: SSEKMSKeyId;
  }
  export interface SSEKMSEncryption {
    /**
     * Specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key to use for encrypting generated manifest objects.
     */
    KeyId: KmsKeyArnString;
  }
  export type SSEKMSKeyId = string;
  export interface SSES3 {
  }
  export interface SSES3Encryption {
  }
  export type SecretAccessKey = string;
  export interface SelectionCriteria {
    /**
     * A container for the delimiter of the selection criteria being used.
     */
    Delimiter?: StorageLensPrefixLevelDelimiter;
    /**
     * The max depth of the selection criteria
     */
    MaxDepth?: StorageLensPrefixLevelMaxDepth;
    /**
     * The minimum number of storage bytes percentage whose metrics will be selected.  You must choose a value greater than or equal to 1.0. 
     */
    MinStorageBytesPercentage?: MinStorageBytesPercentage;
  }
  export type SessionToken = string;
  export type Setting = boolean;
  export interface SourceSelectionCriteria {
    /**
     * A filter that you can use to select Amazon S3 objects that are encrypted with server-side encryption by using Key Management Service (KMS) keys. If you include SourceSelectionCriteria in the replication configuration, this element is required.   This is not supported by Amazon S3 on Outposts buckets. 
     */
    SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
    /**
     * A filter that you can use to specify whether replica modification sync is enabled. S3 on Outposts replica modification sync can help you keep object metadata synchronized between replicas and source objects. By default, S3 on Outposts replicates metadata from the source objects to the replicas only. When replica modification sync is enabled, S3 on Outposts replicates metadata changes made to the replica copies back to the source object, making the replication bidirectional. To replicate object metadata modifications on replicas, you can specify this element and set the Status of this element to Enabled.  You must enable replica modification sync on the source and destination buckets to replicate replica metadata changes between the source and the replicas. 
     */
    ReplicaModifications?: ReplicaModifications;
  }
  export interface SseKmsEncryptedObjects {
    /**
     * Specifies whether Amazon S3 replicates objects that are created with server-side encryption by using an KMS key stored in Key Management Service.
     */
    Status: SseKmsEncryptedObjectsStatus;
  }
  export type SseKmsEncryptedObjectsStatus = "Enabled"|"Disabled"|string;
  export type StorageClassList = S3StorageClass[];
  export type StorageLensArn = string;
  export interface StorageLensAwsOrg {
    /**
     * A container for the Amazon Resource Name (ARN) of the Amazon Web Services organization. This property is read-only and follows the following format:  arn:aws:organizations:us-east-1:example-account-id:organization/o-ex2l495dck  
     */
    Arn: AwsOrgArn;
  }
  export interface StorageLensConfiguration {
    /**
     * A container for the Amazon S3 Storage Lens configuration ID.
     */
    Id: ConfigId;
    /**
     * A container for all the account-level configurations of your S3 Storage Lens configuration.
     */
    AccountLevel: AccountLevel;
    /**
     * A container for what is included in this configuration. This container can only be valid if there is no Exclude container submitted, and it's not empty. 
     */
    Include?: Include;
    /**
     * A container for what is excluded in this configuration. This container can only be valid if there is no Include container submitted, and it's not empty. 
     */
    Exclude?: Exclude;
    /**
     * A container to specify the properties of your S3 Storage Lens metrics export including, the destination, schema and format.
     */
    DataExport?: StorageLensDataExport;
    /**
     * A container for whether the S3 Storage Lens configuration is enabled.
     */
    IsEnabled: IsEnabled;
    /**
     * A container for the Amazon Web Services organization for this S3 Storage Lens configuration.
     */
    AwsOrg?: StorageLensAwsOrg;
    /**
     * The Amazon Resource Name (ARN) of the S3 Storage Lens configuration. This property is read-only and follows the following format:  arn:aws:s3:us-east-1:example-account-id:storage-lens/your-dashboard-name  
     */
    StorageLensArn?: StorageLensArn;
  }
  export type StorageLensConfigurationList = ListStorageLensConfigurationEntry[];
  export interface StorageLensDataExport {
    /**
     * A container for the bucket where the S3 Storage Lens metrics export will be located.  This bucket must be located in the same Region as the storage lens configuration.  
     */
    S3BucketDestination?: S3BucketDestination;
    /**
     * A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.
     */
    CloudWatchMetrics?: CloudWatchMetrics;
  }
  export interface StorageLensDataExportEncryption {
    /**
     * 
     */
    SSES3?: SSES3;
    /**
     * 
     */
    SSEKMS?: SSEKMS;
  }
  export interface StorageLensGroup {
    /**
     *  Contains the name of the Storage Lens group. 
     */
    Name: StorageLensGroupName;
    /**
     * Sets the criteria for the Storage Lens group data that is displayed. For multiple filter conditions, the AND or OR logical operator is used.
     */
    Filter: StorageLensGroupFilter;
    /**
     *  Contains the Amazon Resource Name (ARN) of the Storage Lens group. This property is read-only. 
     */
    StorageLensGroupArn?: StorageLensGroupArn;
  }
  export interface StorageLensGroupAndOperator {
    /**
     *  Contains a list of prefixes. At least one prefix must be specified. Up to 10 prefixes are allowed. 
     */
    MatchAnyPrefix?: MatchAnyPrefix;
    /**
     *  Contains a list of suffixes. At least one suffix must be specified. Up to 10 suffixes are allowed. 
     */
    MatchAnySuffix?: MatchAnySuffix;
    /**
     *  Contains the list of object tags. At least one object tag must be specified. Up to 10 object tags are allowed. 
     */
    MatchAnyTag?: MatchAnyTag;
    /**
     *  Contains DaysGreaterThan and DaysLessThan to define the object age range (minimum and maximum number of days). 
     */
    MatchObjectAge?: MatchObjectAge;
    /**
     *  Contains BytesGreaterThan and BytesLessThan to define the object size range (minimum and maximum number of Bytes). 
     */
    MatchObjectSize?: MatchObjectSize;
  }
  export type StorageLensGroupArn = string;
  export interface StorageLensGroupFilter {
    /**
     *  Contains a list of prefixes. At least one prefix must be specified. Up to 10 prefixes are allowed. 
     */
    MatchAnyPrefix?: MatchAnyPrefix;
    /**
     *  Contains a list of suffixes. At least one suffix must be specified. Up to 10 suffixes are allowed. 
     */
    MatchAnySuffix?: MatchAnySuffix;
    /**
     *  Contains the list of S3 object tags. At least one object tag must be specified. Up to 10 object tags are allowed. 
     */
    MatchAnyTag?: MatchAnyTag;
    /**
     *  Contains DaysGreaterThan and DaysLessThan to define the object age range (minimum and maximum number of days). 
     */
    MatchObjectAge?: MatchObjectAge;
    /**
     *  Contains BytesGreaterThan and BytesLessThan to define the object size range (minimum and maximum number of Bytes). 
     */
    MatchObjectSize?: MatchObjectSize;
    /**
     * A logical operator that allows multiple filter conditions to be joined for more complex comparisons of Storage Lens group data. Objects must match all of the listed filter conditions that are joined by the And logical operator. Only one of each filter condition is allowed.
     */
    And?: StorageLensGroupAndOperator;
    /**
     * A single logical operator that allows multiple filter conditions to be joined. Objects can match any of the listed filter conditions, which are joined by the Or logical operator. Only one of each filter condition is allowed. 
     */
    Or?: StorageLensGroupOrOperator;
  }
  export interface StorageLensGroupLevel {
    /**
     *  Indicates which Storage Lens group ARNs to include or exclude in the Storage Lens group aggregation. If this value is left null, then all Storage Lens groups are selected. 
     */
    SelectionCriteria?: StorageLensGroupLevelSelectionCriteria;
  }
  export type StorageLensGroupLevelExclude = StorageLensGroupArn[];
  export type StorageLensGroupLevelInclude = StorageLensGroupArn[];
  export interface StorageLensGroupLevelSelectionCriteria {
    /**
     *  Indicates which Storage Lens group ARNs to include in the Storage Lens group aggregation. 
     */
    Include?: StorageLensGroupLevelInclude;
    /**
     *  Indicates which Storage Lens group ARNs to exclude from the Storage Lens group aggregation. 
     */
    Exclude?: StorageLensGroupLevelExclude;
  }
  export type StorageLensGroupList = ListStorageLensGroupEntry[];
  export type StorageLensGroupName = string;
  export interface StorageLensGroupOrOperator {
    /**
     *  Filters objects that match any of the specified prefixes. 
     */
    MatchAnyPrefix?: MatchAnyPrefix;
    /**
     *  Filters objects that match any of the specified suffixes. 
     */
    MatchAnySuffix?: MatchAnySuffix;
    /**
     *  Filters objects that match any of the specified S3 object tags. 
     */
    MatchAnyTag?: MatchAnyTag;
    /**
     *  Filters objects that match the specified object age range. 
     */
    MatchObjectAge?: MatchObjectAge;
    /**
     *  Filters objects that match the specified object size range. 
     */
    MatchObjectSize?: MatchObjectSize;
  }
  export type StorageLensPrefixLevelDelimiter = string;
  export type StorageLensPrefixLevelMaxDepth = number;
  export interface StorageLensTag {
    /**
     * 
     */
    Key: TagKeyString;
    /**
     * 
     */
    Value: TagValueString;
  }
  export type StorageLensTags = StorageLensTag[];
  export type StringForNextToken = string;
  export interface SubmitMultiRegionAccessPointRoutesRequest {
    /**
     * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
     */
    AccountId: AccountId;
    /**
     * The Multi-Region Access Point ARN.
     */
    Mrap: MultiRegionAccessPointId;
    /**
     * The different routes that make up the new route configuration. Active routes return a value of 100, and passive routes return a value of 0.
     */
    RouteUpdates: RouteList;
  }
  export interface SubmitMultiRegionAccessPointRoutesResult {
  }
  export type Suffix = string;
  export type SuspendedCause = string;
  export type SuspendedDate = Date;
  export interface Tag {
    /**
     * The key of the key-value pair of a tag added to your Amazon Web Services resource. A tag key can be up to 128 Unicode characters in length and is case-sensitive. System created tags that begin with aws: aren’t supported. 
     */
    Key: TagKeyString;
    /**
     *  The value of the key-value pair of a tag added to your Amazon Web Services resource. A tag value can be up to 256 Unicode characters in length and is case-sensitive. 
     */
    Value: TagValueString;
  }
  export type TagKeyList = TagKeyString[];
  export type TagKeyString = string;
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     *  The Amazon Web Services account ID that created the S3 resource that you're trying to add tags to or the requester's account ID. 
     */
    AccountId: AccountId;
    /**
     * The Amazon Resource Name (ARN) of the S3 resource that you're trying to add tags to. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.
     */
    ResourceArn: S3ResourceArn;
    /**
     *  The Amazon Web Services resource tags that you want to add to the specified S3 resource. 
     */
    Tags: TagList;
  }
  export interface TagResourceResult {
  }
  export type TagValueString = string;
  export interface Tagging {
    /**
     * A collection for a set of tags.
     */
    TagSet: S3TagSet;
  }
  export type TimeStamp = Date;
  export type TrafficDialPercentage = number;
  export interface Transition {
    /**
     * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
     */
    Date?: _Date;
    /**
     * Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer.
     */
    Days?: Days;
    /**
     * The storage class to which you want the object to transition.
     */
    StorageClass?: TransitionStorageClass;
  }
  export type TransitionList = Transition[];
  export type TransitionStorageClass = "GLACIER"|"STANDARD_IA"|"ONEZONE_IA"|"INTELLIGENT_TIERING"|"DEEP_ARCHIVE"|string;
  export interface UntagResourceRequest {
    /**
     *  The Amazon Web Services account ID that owns the resource that you're trying to remove the tags from. 
     */
    AccountId: AccountId;
    /**
     *  The Amazon Resource Name (ARN) of the S3 resource that you're trying to remove the tags from. 
     */
    ResourceArn: S3ResourceArn;
    /**
     *  The array of tag key-value pairs that you're trying to remove from of the S3 resource. 
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResult {
  }
  export interface UpdateAccessGrantsLocationRequest {
    /**
     * The ID of the Amazon Web Services account that is making this request.
     */
    AccountId: AccountId;
    /**
     * The ID of the registered location that you are updating. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register.  The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register.  If you are passing the default location, you cannot create an access grant for the entire default location. You must also specify a bucket or a bucket and prefix in the Subprefix field. 
     */
    AccessGrantsLocationId: AccessGrantsLocationId;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. 
     */
    IAMRoleArn: IAMRoleArn;
  }
  export interface UpdateAccessGrantsLocationResult {
    /**
     * The date and time when you registered the location. 
     */
    CreatedAt?: CreationTimestamp;
    /**
     * The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register. 
     */
    AccessGrantsLocationId?: AccessGrantsLocationId;
    /**
     * The Amazon Resource Name (ARN) of the registered location that you are updating. 
     */
    AccessGrantsLocationArn?: AccessGrantsLocationArn;
    /**
     * The S3 URI path of the location that you are updating. You cannot update the scope of the registered location. The location scope can be the default S3 location s3://, the S3 path to a bucket s3://&lt;bucket&gt;, or the S3 path to a bucket and prefix s3://&lt;bucket&gt;/&lt;prefix&gt;. 
     */
    LocationScope?: S3Prefix;
    /**
     * The Amazon Resource Name (ARN) of the IAM role of the registered location. S3 Access Grants assumes this role to manage access to the registered location. 
     */
    IAMRoleArn?: IAMRoleArn;
  }
  export interface UpdateJobPriorityRequest {
    /**
     * The Amazon Web Services account ID associated with the S3 Batch Operations job.
     */
    AccountId: AccountId;
    /**
     * The ID for the job whose priority you want to update.
     */
    JobId: JobId;
    /**
     * The priority you want to assign to this job.
     */
    Priority: JobPriority;
  }
  export interface UpdateJobPriorityResult {
    /**
     * The ID for the job whose priority Amazon S3 updated.
     */
    JobId: JobId;
    /**
     * The new priority assigned to the specified job.
     */
    Priority: JobPriority;
  }
  export interface UpdateJobStatusRequest {
    /**
     * The Amazon Web Services account ID associated with the S3 Batch Operations job.
     */
    AccountId: AccountId;
    /**
     * The ID of the job whose status you want to update.
     */
    JobId: JobId;
    /**
     * The status that you want to move the specified job to.
     */
    RequestedJobStatus: RequestedJobStatus;
    /**
     * A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.
     */
    StatusUpdateReason?: JobStatusUpdateReason;
  }
  export interface UpdateJobStatusResult {
    /**
     * The ID for the job whose status was updated.
     */
    JobId?: JobId;
    /**
     * The current status for the specified job.
     */
    Status?: JobStatus;
    /**
     * The reason that the specified job's status was updated.
     */
    StatusUpdateReason?: JobStatusUpdateReason;
  }
  export interface UpdateStorageLensGroupRequest {
    /**
     *  The name of the Storage Lens group that you want to update. 
     */
    Name: StorageLensGroupName;
    /**
     *  The Amazon Web Services account ID of the Storage Lens group owner. 
     */
    AccountId: AccountId;
    /**
     *  The JSON file that contains the Storage Lens group configuration. 
     */
    StorageLensGroup: StorageLensGroup;
  }
  export interface VersioningConfiguration {
    /**
     * Specifies whether MFA delete is enabled or disabled in the bucket versioning configuration for the S3 on Outposts bucket.
     */
    MFADelete?: MFADelete;
    /**
     * Sets the versioning state of the S3 on Outposts bucket.
     */
    Status?: BucketVersioningStatus;
  }
  export interface VpcConfiguration {
    /**
     * If this field is specified, this access point will only allow connections from the specified VPC ID.
     */
    VpcId: VpcId;
  }
  export type VpcId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-08-20"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & UseDualstackConfigOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the S3Control client.
   */
  export import Types = S3Control;
}
export = S3Control;
