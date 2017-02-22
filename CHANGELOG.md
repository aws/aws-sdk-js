# Changelog for AWS SDK for JavaScript
<!--LATEST=2.18.0-->
<!--ENTRYINSERT-->

## 2.18.0
* feature: GameLift: Allow developers to configure global queues for creating GameSessions. Allow PlayerData on PlayerSessions to store player-specific data.
* feature: Route53: Added support for operations CreateVPCAssociationAuthorization and DeleteVPCAssociationAuthorization to throw a ConcurrentModification error when a conflicting modification occurs in parallel to the authorizations in place for a given hosted zone.
* feature: ElasticBeanstalk: Elastic Beanstalk adds support for creating and managing custom platform.

## 2.17.0
* bugfix: TypeScript: Enable the configuration credentials to be nulled so that the global config is not used.
* feature: EC2: Added the billingProduct parameter to the RegisterImage API.

## 2.16.0
* feature: DirectConnect: This update will introduce the ability for Direct Connect customers to take advantage of Link Aggregation (LAG). This allows you to bundle many individual physical interfaces into a single logical interface, referred to as a LAG. This makes administration much simpler as the majority of configuration is done on the LAG while you are free to add or remove physical interfaces from the bundle as bandwidth demand increases or decreases. A concrete example of the simplification added by LAG is that customers need only a single BGP session as opposed to one session per physical connection.

## 2.15.0
* feature: CognitoIdentity: Allows createIdentityPool and updateIdentityPool API to set server side token check value on identity pool.
* feature: ConfigService: AWS Config now supports a new test mode for the PutEvaluations API. Set the TestMode parameter to true in your custom rule to verify whether your AWS Lambda function will deliver evaluation results to AWS Config. No updates occur to your existing evaluations, and evaluation results are not sent to AWS Config.

## 2.14.0
* feature: KMS: This release of AWS Key Management Service introduces the ability to tag keys. Tagging keys can help you organize your keys and track your KMS costs in the cost allocation report. This release also increases the maximum length of a key ID to accommodate ARNs that include a long key alias.

## 2.13.0
* feature: Ec2: Adds support for the new Modify Volumes apis.

## 2.12.0
* feature: StorageGateway: File gateway mode in AWS Storage gateway provides access to objects in S3 as files on a Network File System (NFS) mount point. This is done by creating Nfs file shares using existing APIs CreateNfsFileShare. Using the feature in this update, the customer can restrict the clients that have read/write access to the gateway by specifying the list of clients as a list of IP addresses or CIDR blocks. This list can be specified using the API CreateNfsFileShare while creating new file shares, or UpdateNfsFileShare while update existing file shares. To find out the list of clients that have access, the existing API DescribeNfsFileShare will now output the list of clients that have access.

## 2.11.0
* bugfix: TypeScript: Add `endpoint` property to AWS.S3 instance declaration.
* feature: EC2: This feature allows customers to associate an IAM profile to running instances that do not have any.
* feature: Rekognition: DetectFaces and IndexFaces operations now return an estimate of the age of the face as an age range.

## 2.10.0
* bugfix: JSON: Fixes issue caused when trying to unmarshall null binary shapes.
* bugfix: TypeScript: Add `credentialProvider` as an optional parameter of `ConfigurationOptions`.
* feature: LexRuntime: Amazon Lex is a service for building conversational interactions into any application using voice or text.

## 2.9.0
* feature: EC2: Adds instance health check functionality to replace unhealthy EC2 Spot fleet instances with fresh ones
* feature: CloudDirectory: Amazon Cloud Directory is a highly scalable, high performance, multi-tenant directory service in the cloud. Its web-based directories make it easy for you to organize and manage application resources such as users, groups, locations, devices, policies, and the rich relationships between them.
* feature: CodeDeploy: This release of AWS CodeDeploy introduces support for blue/green deployments. In a blue/green deployment, the current set of instances in a deployment group is replaced by new instances that have the latest application revision installed on them. After traffic is rerouted behind a load balancer to the replacement instances, the original instances can be terminated automatically or kept running for other uses.
* feature: RDS: Added support for the `ModifyDBSnapshot` and `ModifyDBSnapshotMessage` operations

## 2.8.0
* bugfix: RDS: Fixes issue wherein the wrong parameter name was used for cross region presigned urls.
* feature: ELBv2: Application Load Balancers now support native Internet Protocol version 6 (IPv6) in an Amazon Virtual Private Cloud (VPC). With this ability, clients can now connect to the Application Load Balancer in a dual-stack mode via either IPv4 or IPv6.
* feature: RDS: Adds cross region read replica copying.

## 2.7.28
* feature: CognitoIdentityCredentials: Adds `clientConfig` as an optional parameter to the `CognitoIdentityCredentials` constructor. This parameter can be used to pass in client configuration to the underlying service clients.
* feature: TemporaryCredentials: Allows passing of master credentials to the TemporaryCredentials provider.
* feature: CodeCommit: Added new API to list the different files between 2 commits
* feature: ECS: Amazon ECS now supports a state for container instances that can be used to drain a container instance in preparation for maintenance or cluster scale down.

## 2.7.27
* bugfix: Performance: This change reverts a request body cast in the node HTTP handler that caused a performance regression.
* feature: ACM: Updated response elements for DescribeCertificate API in support of managed renewal.

## 2.7.26
* feature: EC2: Amazon EC2 Spot instances now support dedicated tenancy, providing the ability to run Spot instances single-tenant manner on physically isolated hardware within a VPC to satisfy security, privacy, or other compliance requirements. Dedicated Spot instances can be requested using RequestSpotInstances and RequestSpotFleet.

## 2.7.25
* feature: RDS: Updates AWS.RDS API to the latest version.

## 2.7.24
* bugfix: HTTP: Ensure that buffers are not created with Buffer.from in node 4.0-4.4
* bugfix: core: Deprecate v2.7.23

## 2.7.23
* bugfix: S3: Convert string bodies to buffers to ensure correct encoding is used
* feature: DynamoDB: Adds support for tagging tables and indexes.

## 2.7.22
* feature: CUR: The AWS Cost and Usage Report Service API allows you to enable and disable the Cost & Usage report, as well as modify the report name, the data granularity, and the delivery preferences.
* bugfix: DynamoDB.DocumentClient: Allows objects created using Object.create(null) to be properly serialized by the DDB document client.

## 2.7.21
* feature: ConfigService: Updates putConfigRule to support using/writing rules based on the OversizedConfigurationItemChangeNotification message type.
* feature: MarketplaceCommerceAnalytics: Added support for data set disbursed_amount_by_instance_hours, with historical data available starting 2012-09-04. New data is published to this data set every 30 days.
* bugfix: DynamoDB.DocumentClient: Fixes issue where empty strings in nested members were not removed when convertEmptyValues was set.
* bugfix: CognitoIdentityCredentials: Fixes issue where the cached identity id would sometimes not be retrieved when SDK is run while offline.

## 2.7.20
* feature: CodeDeploy: CodeDeploy supports IAM Session Arns in addition to IAM User Arns for on premise host authentication.
* feature: ECS: Amazon EC2 Container Service (ECS) now supports the ability to customize the placement of tasks on container instances.

## 2.7.19
* feature: APIGateway: This update introduces two new operations used to dynamically discover SDK types and what configuration each type accepts.
* feature: ElasticBeanstalk: Adds a new feature for managing Application Version Lifecycle.
* feature: IAM: Adds service-specific credentials to IAM service to make it easier to onboard CodeCommit customers. These are username/password credentials that work with a single service.

## 2.7.18
* feature: Rekognition: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: EC2: Adds cross region encrypted snapshot copying (CopyDBSnapshot).
* feature: ECR: Amazon ECR now implements Docker Image Manifest V2, Schema 2 providing the ability to use multiple tags per image, support for storing Windows container images, and compatibility with the Open Container Initiative (OCI) image format. With this update, customers can also add tags to an image via PutImage and delete tags using BatchDeleteImage.

## 2.7.17
* bugfix: Promises: Fixes issue introduced in v2.6.12. Calling AWS.config.setPromisesDependency(null) will once again force the SDK to use native promises if they are available.
* feature: Firehose: The processing feature enables users to process and modify records before Amazon Firehose delivers them to destinations.
* feature: StorageGateway: File gateway is a new mode in the AWS Storage Gateway that support a file interface into S3, alongside the current block-based volume and VTL storage. File gateway combines a service and virtual software appliance, enabling you to store and retrieve objects in Amazon S3 using industry standard file protocols such as NFS. The software appliance, or gateway, is deployed into your on-premises environment as a virtual machine (VM) running on VMware ESXi. The gateway provides access to objects in S3 as files on a Network File System (NFS) mount point.

## 2.7.16
* feature: DocumentClient: Add a constructor option to convert empty strings, sets, and binary strings to a Dynamo NULL typed field
* feature: Discovery: Adds new APIs to group discovered servers into Applications with get summary and neighbors. Includes additional filters for ListConfigurations and DescribeAgents API.
* feature: CognitoIdentity: Added fine-grained role-based access control for Cognito identity pools. Developers can configure an identity pool to get the IAM role from an authenticated user's token, or they can configure rules that will map a user to a different role

## 2.7.15
* bugfix: Buffer: Update base64 encode/decode to use Buffer.fill when available and throw an error if a number is provided.
* bugfix: XRay: Add X-Amzn-Trace-Id to list of unsigned headers to prevent signature mismatch errors if the header value is modified while the request is in flight.
* feature: Cognito: Add new regions and endpoints for Amazon Cognito Identity, Amazon Cognito Sync, and Amazon Cognito Identity Provider.
* feature: CognitoIdentityServiceProvider: User Pools now offers groups as an easy way to manage users and their permissions.
* feature: SSM: Add support for Patch Baseline and Patch Compliance APIs

## 2.7.14
* feature: Batch: AWS Batch is a batch computing service that lets customers define queues and compute environments and then submit work as batch jobs.
* feature: DMS: Adds support for SSL enabled Oracle endpoints and task modification.
* feature: CloudWatchLogs: Amazon CloudWatch announces detailed billing to CloudWatch Logs. You can now get usage and cost per log group. You can also add tags on your log groups to get a fine-grained view on cost for logs across business dimension such as cost center, application name, AWS services such as Lambda, CloudTrail, ECS, and other. Up to 50 tags can be added to each log group.

## 2.7.13
* feature: CloudFront:  Add lambda function associations to cache behaviors.
* feature: RDS: Add cluster create data to DBCluster APIs.
* feature: WAFRegional: With this new feature, customers can use AWS WAF directly on Application Load Balancers in a VPC within available regions to protect their websites and web services from malicious attacks such as SQL injection, Cross Site Scripting, bad bots, etc.

## 2.7.12
* feature: S3: Add the Version ID field to the Get and Put object tagging operations.

## 2.7.11
* bugfix: TypeScript: Exposes typings for classes that live on service namespaces (i.e. DynamoDB.DocumentClient). Also exposes interfaces off of service namespaces to allow easier migration from some 3rd party typings. Interfaces will continue to be exposed via Service.Types as well.
* bugfix: TypeScript: Removes remaining `reference` comments from definitions.
* feature: ConfigService: Increases the number of config rules for all accounts from 25 to 50.
* feature: EC2: Adds T2.xlarge, T2.2xlarge, and R4 instance types.

## 2.7.10
* feature: APIGateway: You can now publish your APIs on Amazon API Gateway as products on the AWS Marketplace. Use the SDK to associate your APIs on API Gateway with Marketplace Product Codes. API Gateway will then send metering data to the Marketplace Metering Service on your behalf. Also, API Gateway now supports documenting your API.
* feature: Appstream: Announcing Amazon AppStream 2.0 - a secure, fully managed desktop application streaming service that provides users instant access to their apps from a web browser.
* feature: CodeBuild: AWS CodeBuild is a fully-managed build service in the cloud. CodeBuild compiles source code, runs tests, and produces packages that are ready to deploy. CodeBuild eliminates the need to provision, manage, and scale your own build servers. CodeBuild scales continuously and processes multiple builds concurrently, so your builds are never waiting in a queue. You can get started quickly with CodeBuild’s prepackaged build environments, or you can use custom build environments to use your own build tools. With CodeBuild, you only pay by the minute.
* feature: DirectConnect: API Update for IPv6 for Direct Connect.
* feature: EC2: Adds IPv6 Support for EC2 and new F1 Instance types.
* feature: ElasticBeanstalk: Integrates AWS CodeBuild into ElasticBeanstalk.
* feature: Health: When your business is counting on the performance of your cloud solutions, having relevant and timely insights into events impacting your AWS resources is essential. The AWS Health API serves as the primary source for you to receive personalized information related to your AWS infrastructure, guiding your through scheduled changes, and accelerating the troubleshooting of issues impacting your AWS resources and accounts. At launch, the APIs will be available to Business and Enterprise Support customers.
* feature: Lambda: Adds new API `getAccountSettings`, dotnetcore 1.0 runtime support, DeadLetterConfig, and event source mappings with kinesis streams.
* feature: OpsWorksCM: AWS OpsWorks for Chef Automate gives customers a single tenant Chef Automate server. The Chef Automate server is fully managed by AWS and supports automatic backup, restore and upgrade operations.
* feature: Pinpoint: Amazon Pinpoint makes it easy to run targeted campaigns to improve user engagement. Pinpoint helps you understand your users behavior, define who to target, what messages to send, when to deliver them, and tracks the results of the campaign.
* feature: Shield: AWS Shield is a managed Distributed Denial of Service (DDoS) protection for web applications running on AWS.
* feature: SSM: Amazon EC2 Systems Manager is a flexible and easy to use management service that enables enterprises to securely manage and administer their workloads running on-premises or in the AWS cloud, using a single unified experience. These tasks include collecting system inventory, AWSmaintaining consistent state, ad hoc remote execution, automating imaging creation, applying OS patches, and managing configuration parameters.
* feature: StepFunctions: Adds support for the AWS Step Functions API.
* feature: XRay: AWS X-Ray helps developers analyze and debug distributed applications. With X-Ray, you can understand how your application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors.

## 2.7.9
* feature: Polly: Adds `AWS.Polly.Presigner` to create presigned urls for `synthesizeSpeech`.
* feature: Polly: Amazon Polly is a service that turns text into lifelike speech, making it easy to develop applications that use high-quality speech to increase engagement and accessibility. With Amazon Polly the developers can build speech-enabled apps that work in multiple geographies.
* feature: Lightsail: An extremely simplified VM creation and management service.
* feature: Rekognition: Amazon Rekognition is a service that makes it easy to add image analysis to your applications. With Rekognition, you can detect objects, scenes, and faces in images. You can also search and compare faces. Rekognition’s API enables you to quickly add sophisticated deep learning-based visual search and image classification to your applications. 
* feature: Snowball: This release of AWS Snowball introduces a new job type, new APIs, and the new AWS Snowball Edge device to support local compute and storage use cases. The local compute is AWS Lambda powered by AWS Greengrass, and the local storage is compatible with Amazon S3. Each 100 TB Snowball Edge can use the storage and compute power of the AWS cloud locally in places where connecting to the internet may not be an option. Additionally, Snowball Edges can be used in clusters for applications that require greater data durability.

## 2.7.8
* feature: core: The SDK will now automatically provide a version 4 UUID for top-level operation parameters that are modeled with the `idempotencyToken` flag. Users may continue to provide their own tokens.
* feature: S3: Updates the AWS.S3 API to the latest version.

## 2.7.7
* feature: CloudFormation: List-imports API is to list all stacks of user's namespace that are using a specific output.
* feature: Glacier: Allow customers to retrieve their data with different tiers.
* feature: Route53: Expand current IPAddress field to accept IPv6 address.
* feature: S3: Allow customers to specify different restore tiers when accessing their data.

## 2.7.6
* feature: CloudTrail: This release of AWS CloudTrail supports configuring your trail with event selectors. Use event selectors to specify the type of events that you want your trails to log. You can configure event selectors to log read-only, write-only, or all events. CloudTrail supports logging Amazon S3 object level APIs such as GetObject, DeleteObject, and PutObject. You can configure event selectors for your trail to log object level operations.
* feature: ECS: ECS will include a new field named `version` in API responses relating to tasks and container instances. Version is a number that increments every time a change has been made to the associated resource. Users replicating their ECS resource state can use the version field reported by the ECS APIs to determine if their local state is fresh.

## 2.7.5
* bugfix: TypeScript: Stubs DOM interfaces and removes type reference to node.
* feature: ElasticTranscoder: Support for multiple media input files that can be stitched together.
* feature: Lambda: Adds support for Environment variables.
* feature: Gamelift: Provide the ability to remote access into GameLift managed servers.
* feature: EMR: Automatic Scaling of EMR clusters based on metrics. Adds support for cancelling a pending Amazon EMR step.
* feature: ApplicationAutoScaling: Adds support for a new target resource (EMR Instance Groups) as a scalable target.

## 2.7.4
* feature: MarketplaceMetering: Allows third parties to send metering records.
* feature: SQS: Updates the latest version of the SQS API.
* feature: CloudWatch: Amazon CloudWatch now supports Percentiles as a statistical function.
* feature: APIGateway: Allows defining an encoding for the API per content type in order to support 'binary' use case.

## 2.7.3
* feature: Route53: Adds support for cross account VPC association.
* feature: ServiceCatalog: This release enables Service Catalog users to perform administer operations via API.

## 2.7.2
* feature: ElastiCache: Additional parameter to 2 create apis to provide an auth Token for Redis.
* feature: DirectoryService: Adds support for SchemaExtensions.
* feature: Kinesis: Adds DescribeLimits API which displays customer's current shard limit and the number of open shards that are being used. Also adds a 'display stream creation timestamp' feature to DescribeStream API.

## 2.7.1
* feature: CognitoIdentityServiceProvider: Adds schema attributes to CreateUserPool.
* bugfix: TypeScript: Updates definitions to work when `noImplicitAny` and `strictNullChecks` are set to `true`.

## 2.7.0
* feature: TypeScript: Adds typescript definition files to the SDK.
* feature: CloudWatchLogs: Amazon CloudWatch Metrics to Logs is a capability that helps pivot from your logs-extracted metrics directly to the corresponding logs.

## 2.6.15
* feature: DirectConnect: AWS Direct Connect provides three new APIs to support basic tagging on Direct Connect resources.

## 2.6.14
* feature: SES: Amazon Simple Email Service (Amazon SES) now enables you to track your bounce, complaint, delivery, sent, and rejected email metrics with fine-grained granularity.

## 2.6.13
* feature: CloudFormation: Adding ResourcesToSkip parameter to ContinueUpdateRollback API, adding support for ListExports, new ChangeSet types and Transforms.

## 2.6.12
* feature: CredentialProviderChain: Adds promise support for the `resolve` method on the AWS.CredentialProviderChain class. Corresponding promise method is called `resolvePromise`.
* feature: Credentials: Adds promise support for the `get` and `refresh` methods of the AWS.Credentials class. Corresponding promise methods are called `getPromise` and `refreshPromise`.
* feature: ManagedUpload: Adds promise support for S3.ManagedUpload. Calling `s3.upload(params).promise()` will return a promise.
* feature: SMS: AWS Server Migration Service (SMS) is an agentless service which makes it easier and faster for you to migrate thousands of on-premises workloads to AWS. AWS SMS allows you to automate, schedule, and track incremental replications of live server volumes, making it easier for you to coordinate large-scale server migrations.

## 2.6.11
* feature: Budgets: Adds the AWS Budgets service API via AWS.Budgets.

## 2.6.10
* feature: CloudFront: Ability to use Amazon CloudFront to deliver your content both via IPv6 and IPv4 using HTTP/HTTPS.
* feature: IoT: Updates IoT API to the latest available version.
* feature: RDS: Updates RDS to support accessing other AWS services by gassociating an IAM role with necessary permissions to your DB cluster.

## 2.6.9
* bugfix: s3: Propagate an error from a stream to s3.upload callback #1169
* feature: S3: Adds support for using dualstack with accelerate endpoints.
* feature: ACM: This change allows users to import third-party SSL/TLS certificates into ACM.
* feature: ElasticBeanstalk: Adds CodeCommit integraion. DescribeApplicationVersions updated to support pagination.
* feature: GameLift: New APIs to protect game developer resource (builds, alias, fleets, instances, game sessions and player sessions) against abuse.

## 2.6.8
* feature: ECR: DescribeImages is a new api used to expose image metadata which today includes image size and image creation timestamp.
* feature: ElastiCache: Elasticache is launching a new major engine release of Redis, 3.2 (providing stability updates and new command sets over 2.8), as well as ElasticSupport for enabling Redis Cluster in 3.2, which provides support for multiple node groups to horizontally scale data, as well as superior engine failover capabilities.

## 2.6.7
* feature: CognitoIdentityServiceProvider: Added new operation "AdminCreateUser" that creates a new user in the specified user pool and sends a welcome message via email or phone (SMS).
* feature: Route53: Retries PriorRequestNotComplete errors.

## 2.6.6
* feature: EC2: Adding support for EC2 Convertible RIs and the EC2 RI regional benefit.
* feature: S3: S3 API update with partNumber extension and a bug fix to address list-objects command failing when a bucket is marked with request-pays.

## 2.6.5
* bugfix: apiVersion: Fixes an issue where some service clients would fail to instantiate if an older apiVersion was specified.
* feature: CloudFormation: Adds support for specifying an IAM service role for CloudFormation stack operations.

## 2.6.4
* bugfix: Browser: Updates `url` and `querystring` dependencies to be controlled by the SDK instead of tools like browserify or webpack.
* bugfix: Config: Fixes an issue where specifying service-specific config on the global AWS.config object would fail if the service had not yet been instantiated.
* feature: CodeDeploy: AWS CodeDeploy now integrates with Amazon CloudWatch alarms, making it possible to stop a deployment if there is a change in the state of a specified alarm for a number of consecutive periods, as specified in the alarm threshold. AWS CodeDeploy also now supports automatically rolling back a deployment if certain conditions are met, such as a deployment failure or an activated alarm.
* feature: EMR: Added support for Security Configurations which can be used to enable encryption at-rest and in-transit for certain applications on Amazon EMR.
* feature: RDS: Provide local time zone support for AWS RDS SqlServer database instances.
* feature: Redshift: This release of Amazon Redshift introduces Enhanced VPC Routing. When you use Amazon Redshift Enhanced VPC Routing, Amazon Redshift forces all COPY and UNLOAD traffic between your cluster and your data repositories through your Amazon VPC.

## 2.6.3
* bugfix: Node_Https: Fixes an issue caused when https.globalAgent is set to false.
* feature: Iot: Updates registerCertificate operation, and allows users to specify cannedAcl for S3 action.
* feature: RDS: Updates describeDbCluster operation to allow specifying a ReaderEndpoint for accessing cluster readers.

## 2.6.2
* feature: ServiceCatalog: Updates the API for AWS.ServiceCatalog.

## 2.6.1
* bugfix: SDK: Fixes an issue that caused all services to be loaded into memory when requiring the SDK. This issue was introduced in version `2.6.0` of the SDK, and address #1124.

## 2.6.0
* feature: CloudFront: Adds HTTP2 support for Amazon CloudFront distributions.
* feature: MetadataService: Adds retry logic to the EC2 Metadata Service, so that EC2MetadataCredentials will retry TimeoutError. This retry logic is also added to ECSCredentials. Resolves #692
* feature: ServiceCatalog: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: Tools: Adds support for bundling the SDK with webpack. Also adds support for creating node.js bundles using webpack or browserify.

## 2.5.6
* feature: RDS: Adds new operation describeSourceRegions to provide list of all the source region names and endpoints for any region. Source regions are the regions where current region can get a replica or copy a snapshot from.

## 2.5.5
* feature: CognitoIdentityServiceProvider: Adds support for bulk import of users.
* feature: GameLift: Adds Linux support.
* feature: Iot: Adds Iot as a default service in the browser distribution of the AWS SDK for JavaScript.
* feature: RDS: Adds information in response of describeOptionGroupOptions about options that conflict with each other.

## 2.5.4
* feature: CloudFront: CloudFront is adding a Querystring Whitelist Option. Customers will be able to choose to forward certain querystring keys instead of a.) all of them or b.) none of them.
* feature: CodePipeline: CodePiepline has introduced a new feature to return pipeline execution details. Execution details consists of source revisions that are running in the pipeline. Customers will be able to tell what source revisions that are running through the stages in pipeline by fetching execution details of each stage.
* feature: Route53: With this release, Route 53 will support the following new features: support for the NAPTR DNS record type, a new testDNSAnswer API which enables customers to send a test query against a specific name server using spoofed delegation nameserver, resolver, and ECS IPs, and support metric-based health check in ap-south-1 region.

## 2.5.3
* feature: RDS: Adds resource ARNs to Describe APIs.

## 2.5.2
* bugfix: Waiter: Fixes bug in `clusterDeleted` waiter for AWS.Redshift.
* feature: EC2: Adds  new APIs supporting dedicated host reservations. Also adds new property to response of `describeSpotFleetRequests` to indicate  the activity status of spot fleet requests.
* feature: Request: eachItem method stops iteration on returning false (like eachPage)
* feature: WorkSpaces: Adds new APIs to support the launch and management of WorkSpaces that are paid for and used by the hour.

## 2.5.1
* feature: ACM: Increase tagging limit from 10 to 50.
* feature: APIGateway: Amazon API Gateway now supports API usage plans. Usage plans allows you to easily manage and monetize your APIs for your API-based business.
* feature: ECS: Adds support for memory reservation and network mode on task definitions. Also adds splunk as a supported log driver.

## 2.5.0
* feature: AutoScaling: Adds 3 new APIs for ELB L7 integration: attachLoadBalancerTargetGroups, detachLoadBalancerTargetGroups, and describeLoadBalancerTargetGroups.
* feature: ECS: Adds ECS support for ELBv2. Supports Application Load Balancer target groups to enable dynamic ports and path-based routing.
* feature: ELBv2: Adds new backwards incompatible application load balancer API version.  Application load balancers are a new load balancer that is now supported by the Elastic Load Balancing service. Application load balancers support HTTP/2, WebSockets, routing based on URL path, and routing to multiple ports on a single instance.
* feature: KMS: Adds support for importing customer-supplied cryptographic keys. New import key feature lets you import keys from your own key management infrastructure to KMS for greater control over generation and storage of keys and meeting compliance requirements of sensitive workloads.
* feature: KinesisAnalytics: Adds the new service Amazon Kinesis Analytics, a fully managed service for continuously querying streaming data using standard SQL. With Kinesis Analytics, you can write standard SQL queries on streaming data and gain actionable insights in real-time, without having to learn any new programming skills. The service allows you to build applications that continuously read data from streaming data sources, process that data using standard SQL, and send the processed data to up to four destinations of your choice. Kinesis Analytics enables you to generate time-series analytics, feed a real-time dashboard, create real-time alarms and notifications, and much more.
* feature: S3: Adds support for IPv6/IPv4 Dualstack endpoint. A new opt-in boolean  option `use Dualstack` can be specified for S3 service clients: `new AWS.S3({useDualstack: true})`. Alternatively, to configure it once for all subsequent S3 service clients: `AWS.config.update({s3: {useDualstack: true}})`.
* feature: Snowball: Adds Amazon Snowball, a new job management service.

## 2.4.14
* feature: CloudFront: Amazon CloudFront now supports tagging for Web and Streaming distributions. Tags make it easier for you to allocate costs and optimize spending by categorizing and grouping AWS resources.
* feature: ECR: Adds filtering of ListImages requests based on whether an image is tagged or untagged.
* feature: MarketplaceCommerceAnalytics: Adds the `startSupportDataExport` operation.

## 2.4.13
* feature: ApplicationAutoScaling: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: AutoScaling: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: CodeDeploy: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: GameLift: Provides a new Search API for GameLift, which allows game developers to retrieve filtered and sorted lists of their GameSessions.
* feature: RDS: You can now use the AWS Management Console to easily move your DB instance to a different VPC, or to a different subnet group in the same VPC. For more information, see Updating the VPC for a DB Instance. If your DB instance is not in a VPC, you can now use the AWS Management Console to easily move your DB instance into a VPC. You can now copy the source files from a MySQL database to an Amazon Simple Storage Service (Amazon S3) bucket, and then restore an Amazon Aurora DB cluster from those files. This option can be considerably faster than migrating data using mysqldump.

## 2.4.12
* bugfix: Request: Adds a content-length check for the stream returned from `createReadStream()`, and the stream will emit an error when the bytes received are fewer than specified by the response content-length header.
* bugfix: S3: Reverts behavior introduced in version `2.4.0` of the SDK to default the `signatureVersion` of S3 clients to `v4`. S3 clients instantiated without a user-defined `signatureVersion` will now default to `v2` unless the region only supports `v4` signing. This change is being made due to issues sending non-ascii characters in headers when using `v4` signing.
* feature: CloudWatchLogs: Updates the `putMetricFilter` operation.
* feature: EMR: Adds enhanced debugging.
* feature: Iot: Adds `listOutgoingCertificates` and support for allowing autoregistration.
* feature: MachineLearning: Adds compute time and entity timestamp to multiple operations.
* feature: RDS: Support for license model and versioning of option groups.
* feature: Route53Domains: Adds new APIs to renew domains for a specified duration, get domain suggestions, and view billing.

## 2.4.11
* feature: APIGateway: Adds support for authentication through Cognito User Pools.
* feature: CognitoIdentityServiceProvider: Introduces support for Your User Pools.
* feature: DirectoryService: Enables routing to on-premises public IP for Microsoft Active Directory.
* feature: EC2: Enables resolution of DNS queries from a peered VPC to a private IP address.
* feature: ES: Updates to Elasticsearch version 2.3, which offers improved performance, memory management, and security. It also offers several new features includinng pipeline aggregations to perform advanced analytics like moving averages and derivatives, and enhancements to geospatial queries.
* feature: Waiter: Adds Waiters for AWS.CodeDeploy.

## 2.4.10
* feature: util: Parse ini files containing comments using #
* feature: Iot: Adds support for thing types. Thing types are entities that store a description of common features of Things that are of the same logical type. Also adds support for `:` in Thing name. Adds a separator in Firehose action.

## 2.4.9
* feature: ACM: Adds reason for failure when describing certificates.
* feature: ConfigService: Adds support for RDS and ACM resources types and introduces two new APIs: DeleteEvaluationResults and StartConfigRulesEvaluation. Updated PutConfigRule API can now create Config rules that are triggered by both configuration changes and periodicity.
* feature: ElasticTranscoder: Adds WAV file format output support.
* feature: Paginator: Adds paginator for SSM DescribeInstanceInformation operation.

## 2.4.8
* feature: CloudFormation: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: CloudHSM: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: DeviceFarm: Adds session-based APIs.
* feature: EMR: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: ElastiCache: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: ElasticBeanstalk: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: Redshift: CORS support added. Now a default service in the browser build of the JavaScript SDK.
* feature: SSM: Adds notification support.