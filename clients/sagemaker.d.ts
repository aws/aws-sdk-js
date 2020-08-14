import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class SageMaker extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SageMaker.Types.ClientConfiguration)
  config: Config & SageMaker.Types.ClientConfiguration;
  /**
   * Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see AWS Tagging Strategies.  Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the Tags parameter of CreateHyperParameterTuningJob  
   */
  addTags(params: SageMaker.Types.AddTagsInput, callback?: (err: AWSError, data: SageMaker.Types.AddTagsOutput) => void): Request<SageMaker.Types.AddTagsOutput, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see AWS Tagging Strategies.  Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the Tags parameter of CreateHyperParameterTuningJob  
   */
  addTags(callback?: (err: AWSError, data: SageMaker.Types.AddTagsOutput) => void): Request<SageMaker.Types.AddTagsOutput, AWSError>;
  /**
   * Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the DisassociateTrialComponent API.
   */
  associateTrialComponent(params: SageMaker.Types.AssociateTrialComponentRequest, callback?: (err: AWSError, data: SageMaker.Types.AssociateTrialComponentResponse) => void): Request<SageMaker.Types.AssociateTrialComponentResponse, AWSError>;
  /**
   * Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the DisassociateTrialComponent API.
   */
  associateTrialComponent(callback?: (err: AWSError, data: SageMaker.Types.AssociateTrialComponentResponse) => void): Request<SageMaker.Types.AssociateTrialComponentResponse, AWSError>;
  /**
   * Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS Marketplace.
   */
  createAlgorithm(params: SageMaker.Types.CreateAlgorithmInput, callback?: (err: AWSError, data: SageMaker.Types.CreateAlgorithmOutput) => void): Request<SageMaker.Types.CreateAlgorithmOutput, AWSError>;
  /**
   * Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS Marketplace.
   */
  createAlgorithm(callback?: (err: AWSError, data: SageMaker.Types.CreateAlgorithmOutput) => void): Request<SageMaker.Types.CreateAlgorithmOutput, AWSError>;
  /**
   * Creates a running App for the specified UserProfile. Supported Apps are JupyterServer and KernelGateway. This operation is automatically invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously.
   */
  createApp(params: SageMaker.Types.CreateAppRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateAppResponse) => void): Request<SageMaker.Types.CreateAppResponse, AWSError>;
  /**
   * Creates a running App for the specified UserProfile. Supported Apps are JupyterServer and KernelGateway. This operation is automatically invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously.
   */
  createApp(callback?: (err: AWSError, data: SageMaker.Types.CreateAppResponse) => void): Request<SageMaker.Types.CreateAppResponse, AWSError>;
  /**
   * Creates an Autopilot job. Find the best performing model after you run an Autopilot job by calling . Deploy that model by following the steps described in Step 6.1: Deploy the Model to Amazon SageMaker Hosting Services. For information about how to use Autopilot, see  Automate Model Development with Amazon SageMaker Autopilot.
   */
  createAutoMLJob(params: SageMaker.Types.CreateAutoMLJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateAutoMLJobResponse) => void): Request<SageMaker.Types.CreateAutoMLJobResponse, AWSError>;
  /**
   * Creates an Autopilot job. Find the best performing model after you run an Autopilot job by calling . Deploy that model by following the steps described in Step 6.1: Deploy the Model to Amazon SageMaker Hosting Services. For information about how to use Autopilot, see  Automate Model Development with Amazon SageMaker Autopilot.
   */
  createAutoMLJob(callback?: (err: AWSError, data: SageMaker.Types.CreateAutoMLJobResponse) => void): Request<SageMaker.Types.CreateAutoMLJobResponse, AWSError>;
  /**
   * Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with. The repository can be hosted either in AWS CodeCommit or in any other Git repository.
   */
  createCodeRepository(params: SageMaker.Types.CreateCodeRepositoryInput, callback?: (err: AWSError, data: SageMaker.Types.CreateCodeRepositoryOutput) => void): Request<SageMaker.Types.CreateCodeRepositoryOutput, AWSError>;
  /**
   * Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with. The repository can be hosted either in AWS CodeCommit or in any other Git repository.
   */
  createCodeRepository(callback?: (err: AWSError, data: SageMaker.Types.CreateCodeRepositoryOutput) => void): Request<SageMaker.Types.CreateCodeRepositoryOutput, AWSError>;
  /**
   * Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with AWS IoT Greengrass. In that case, deploy them as an ML resource. In the request body, you provide the following:   A name for the compilation job    Information about the input model artifacts    The output location for the compiled model and the device (target) that the model runs on    The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job.    You can also provide a Tag to track the model compilation job's resource use and costs. The response body contains the CompilationJobArn for the compiled job. To stop a model compilation job, use StopCompilationJob. To get information about a particular model compilation job, use DescribeCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs.
   */
  createCompilationJob(params: SageMaker.Types.CreateCompilationJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateCompilationJobResponse) => void): Request<SageMaker.Types.CreateCompilationJobResponse, AWSError>;
  /**
   * Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with AWS IoT Greengrass. In that case, deploy them as an ML resource. In the request body, you provide the following:   A name for the compilation job    Information about the input model artifacts    The output location for the compiled model and the device (target) that the model runs on    The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job.    You can also provide a Tag to track the model compilation job's resource use and costs. The response body contains the CompilationJobArn for the compiled job. To stop a model compilation job, use StopCompilationJob. To get information about a particular model compilation job, use DescribeCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs.
   */
  createCompilationJob(callback?: (err: AWSError, data: SageMaker.Types.CreateCompilationJobResponse) => void): Request<SageMaker.Types.CreateCompilationJobResponse, AWSError>;
  /**
   * Creates a Domain used by SageMaker Studio. A domain consists of an associated directory, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. An AWS account is limited to one domain per region. Users within a domain can share notebook files and other artifacts with each other. When a domain is created, an Amazon Elastic File System (EFS) volume is also created for use by all of the users within the domain. Each user receives a private home directory within the EFS for notebooks, Git repositories, and data files. All traffic between the domain and the EFS volume is communicated through the specified subnet IDs. All other traffic goes over the Internet through an Amazon SageMaker system VPC. The EFS traffic uses the NFS/TCP protocol over port 2049.  NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a SageMaker Studio app successfully. 
   */
  createDomain(params: SageMaker.Types.CreateDomainRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateDomainResponse) => void): Request<SageMaker.Types.CreateDomainResponse, AWSError>;
  /**
   * Creates a Domain used by SageMaker Studio. A domain consists of an associated directory, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. An AWS account is limited to one domain per region. Users within a domain can share notebook files and other artifacts with each other. When a domain is created, an Amazon Elastic File System (EFS) volume is also created for use by all of the users within the domain. Each user receives a private home directory within the EFS for notebooks, Git repositories, and data files. All traffic between the domain and the EFS volume is communicated through the specified subnet IDs. All other traffic goes over the Internet through an Amazon SageMaker system VPC. The EFS traffic uses the NFS/TCP protocol over port 2049.  NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a SageMaker Studio app successfully. 
   */
  createDomain(callback?: (err: AWSError, data: SageMaker.Types.CreateDomainResponse) => void): Request<SageMaker.Types.CreateDomainResponse, AWSError>;
  /**
   * Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the CreateEndpointConfig API.   Use this API to deploy models using Amazon SageMaker hosting services.  For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see Deploy the Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto 3)).    You must not delete an EndpointConfig that is in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. To update an endpoint, you must create a new EndpointConfig.  The endpoint name must be unique within an AWS Region in your AWS account.  When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them.   When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting  Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read.  When Amazon SageMaker receives the request, it sets the endpoint status to Creating. After it creates the endpoint, it sets the status to InService. Amazon SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the DescribeEndpoint API. If any of the models hosted at this endpoint get model data from an Amazon S3 location, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provided. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide.
   */
  createEndpoint(params: SageMaker.Types.CreateEndpointInput, callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointOutput) => void): Request<SageMaker.Types.CreateEndpointOutput, AWSError>;
  /**
   * Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the CreateEndpointConfig API.   Use this API to deploy models using Amazon SageMaker hosting services.  For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see Deploy the Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto 3)).    You must not delete an EndpointConfig that is in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. To update an endpoint, you must create a new EndpointConfig.  The endpoint name must be unique within an AWS Region in your AWS account.  When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them.   When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting  Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read.  When Amazon SageMaker receives the request, it sets the endpoint status to Creating. After it creates the endpoint, it sets the status to InService. Amazon SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the DescribeEndpoint API. If any of the models hosted at this endpoint get model data from an Amazon S3 location, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provided. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide.
   */
  createEndpoint(callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointOutput) => void): Request<SageMaker.Types.CreateEndpointOutput, AWSError>;
  /**
   * Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want Amazon SageMaker to provision. Then you call the CreateEndpoint API.   Use this API if you want to use Amazon SageMaker hosting services to deploy models into production.   In the request, you define a ProductionVariant, for each model that you want to deploy. Each ProductionVariant parameter also describes the resources that you want Amazon SageMaker to provision. This includes the number and type of ML compute instances to deploy.  If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B.  For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see Deploy the Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto 3)).   When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting  Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read. 
   */
  createEndpointConfig(params: SageMaker.Types.CreateEndpointConfigInput, callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointConfigOutput) => void): Request<SageMaker.Types.CreateEndpointConfigOutput, AWSError>;
  /**
   * Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want Amazon SageMaker to provision. Then you call the CreateEndpoint API.   Use this API if you want to use Amazon SageMaker hosting services to deploy models into production.   In the request, you define a ProductionVariant, for each model that you want to deploy. Each ProductionVariant parameter also describes the resources that you want Amazon SageMaker to provision. This includes the number and type of ML compute instances to deploy.  If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B.  For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see Deploy the Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto 3)).   When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting  Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read. 
   */
  createEndpointConfig(callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointConfigOutput) => void): Request<SageMaker.Types.CreateEndpointConfigOutput, AWSError>;
  /**
   * Creates an SageMaker experiment. An experiment is a collection of trials that are observed, compared and evaluated as a group. A trial is a set of steps, called trial components, that produce a machine learning model. The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant. When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to experiments, trials, trial components and then use the Search API to search for the tags. To add a description to an experiment, specify the optional Description parameter. To add a description later, or to change the description, call the UpdateExperiment API. To get a list of all your experiments, call the ListExperiments API. To view an experiment's properties, call the DescribeExperiment API. To get a list of all the trials associated with an experiment, call the ListTrials API. To create a trial call the CreateTrial API.
   */
  createExperiment(params: SageMaker.Types.CreateExperimentRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateExperimentResponse) => void): Request<SageMaker.Types.CreateExperimentResponse, AWSError>;
  /**
   * Creates an SageMaker experiment. An experiment is a collection of trials that are observed, compared and evaluated as a group. A trial is a set of steps, called trial components, that produce a machine learning model. The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant. When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to experiments, trials, trial components and then use the Search API to search for the tags. To add a description to an experiment, specify the optional Description parameter. To add a description later, or to change the description, call the UpdateExperiment API. To get a list of all your experiments, call the ListExperiments API. To view an experiment's properties, call the DescribeExperiment API. To get a list of all the trials associated with an experiment, call the ListTrials API. To create a trial call the CreateTrial API.
   */
  createExperiment(callback?: (err: AWSError, data: SageMaker.Types.CreateExperimentResponse) => void): Request<SageMaker.Types.CreateExperimentResponse, AWSError>;
  /**
   * Creates a flow definition.
   */
  createFlowDefinition(params: SageMaker.Types.CreateFlowDefinitionRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateFlowDefinitionResponse) => void): Request<SageMaker.Types.CreateFlowDefinitionResponse, AWSError>;
  /**
   * Creates a flow definition.
   */
  createFlowDefinition(callback?: (err: AWSError, data: SageMaker.Types.CreateFlowDefinitionResponse) => void): Request<SageMaker.Types.CreateFlowDefinitionResponse, AWSError>;
  /**
   * Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.
   */
  createHumanTaskUi(params: SageMaker.Types.CreateHumanTaskUiRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateHumanTaskUiResponse) => void): Request<SageMaker.Types.CreateHumanTaskUiResponse, AWSError>;
  /**
   * Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.
   */
  createHumanTaskUi(callback?: (err: AWSError, data: SageMaker.Types.CreateHumanTaskUiResponse) => void): Request<SageMaker.Types.CreateHumanTaskUiResponse, AWSError>;
  /**
   * Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose.
   */
  createHyperParameterTuningJob(params: SageMaker.Types.CreateHyperParameterTuningJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateHyperParameterTuningJobResponse) => void): Request<SageMaker.Types.CreateHyperParameterTuningJobResponse, AWSError>;
  /**
   * Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose.
   */
  createHyperParameterTuningJob(callback?: (err: AWSError, data: SageMaker.Types.CreateHyperParameterTuningJobResponse) => void): Request<SageMaker.Types.CreateHyperParameterTuningJobResponse, AWSError>;
  /**
   * Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models. You can select your workforce from one of three providers:   A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required.   One or more vendors that you select from the AWS Marketplace. Vendors provide expertise in specific areas.    The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information.   You can also use automated data labeling to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses active learning to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see Using Automated Data Labeling. The data objects to be labeled are contained in an Amazon S3 bucket. You create a manifest file that describes the location of each object. For more information, see Using Input and Output Data. The output can be used as the manifest file for another labeling job or as training data for your machine learning models.
   */
  createLabelingJob(params: SageMaker.Types.CreateLabelingJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateLabelingJobResponse) => void): Request<SageMaker.Types.CreateLabelingJobResponse, AWSError>;
  /**
   * Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models. You can select your workforce from one of three providers:   A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required.   One or more vendors that you select from the AWS Marketplace. Vendors provide expertise in specific areas.    The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information.   You can also use automated data labeling to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses active learning to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see Using Automated Data Labeling. The data objects to be labeled are contained in an Amazon S3 bucket. You create a manifest file that describes the location of each object. For more information, see Using Input and Output Data. The output can be used as the manifest file for another labeling job or as training data for your machine learning models.
   */
  createLabelingJob(callback?: (err: AWSError, data: SageMaker.Types.CreateLabelingJobResponse) => void): Request<SageMaker.Types.CreateLabelingJobResponse, AWSError>;
  /**
   * Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions. Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch transform job. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API. Amazon SageMaker then deploys all of the containers that you defined for the model in the hosting environment.  For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see Deploy the Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto 3)).  To run a batch transform using your model, you start a job with the CreateTransformJob API. Amazon SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location. In the CreateModel request, you must define a container with the PrimaryContainer parameter. In the request, you also provide an IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other AWS resources, you grant necessary permissions via this role.
   */
  createModel(params: SageMaker.Types.CreateModelInput, callback?: (err: AWSError, data: SageMaker.Types.CreateModelOutput) => void): Request<SageMaker.Types.CreateModelOutput, AWSError>;
  /**
   * Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions. Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch transform job. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API. Amazon SageMaker then deploys all of the containers that you defined for the model in the hosting environment.  For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see Deploy the Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto 3)).  To run a batch transform using your model, you start a job with the CreateTransformJob API. Amazon SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location. In the CreateModel request, you must define a container with the PrimaryContainer parameter. In the request, you also provide an IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other AWS resources, you grant necessary permissions via this role.
   */
  createModel(callback?: (err: AWSError, data: SageMaker.Types.CreateModelOutput) => void): Request<SageMaker.Types.CreateModelOutput, AWSError>;
  /**
   * Creates a model package that you can use to create Amazon SageMaker models or list on AWS Marketplace. Buyers can subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker. To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for InferenceSpecification. To create a model from an algorithm resource that you created or subscribed to in AWS Marketplace, provide a value for SourceAlgorithmSpecification.
   */
  createModelPackage(params: SageMaker.Types.CreateModelPackageInput, callback?: (err: AWSError, data: SageMaker.Types.CreateModelPackageOutput) => void): Request<SageMaker.Types.CreateModelPackageOutput, AWSError>;
  /**
   * Creates a model package that you can use to create Amazon SageMaker models or list on AWS Marketplace. Buyers can subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker. To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for InferenceSpecification. To create a model from an algorithm resource that you created or subscribed to in AWS Marketplace, provide a value for SourceAlgorithmSpecification.
   */
  createModelPackage(callback?: (err: AWSError, data: SageMaker.Types.CreateModelPackageOutput) => void): Request<SageMaker.Types.CreateModelPackageOutput, AWSError>;
  /**
   * Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data captured for an Amazon SageMaker Endoint.
   */
  createMonitoringSchedule(params: SageMaker.Types.CreateMonitoringScheduleRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateMonitoringScheduleResponse) => void): Request<SageMaker.Types.CreateMonitoringScheduleResponse, AWSError>;
  /**
   * Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data captured for an Amazon SageMaker Endoint.
   */
  createMonitoringSchedule(callback?: (err: AWSError, data: SageMaker.Types.CreateMonitoringScheduleResponse) => void): Request<SageMaker.Types.CreateMonitoringScheduleResponse, AWSError>;
  /**
   * Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook.  In a CreateNotebookInstance request, specify the type of ML compute instance that you want to run. Amazon SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance.  Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use Amazon SageMaker with a specific algorithm or with a machine learning framework.  After receiving the request, Amazon SageMaker does the following:   Creates a network interface in the Amazon SageMaker VPC.   (Option) If you specified SubnetId, Amazon SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, Amazon SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.   Launches an EC2 instance of the type specified in the request in the Amazon SageMaker VPC. If you specified SubnetId of your VPC, Amazon SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.   After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it. After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and validate hosted models.  For more information, see How It Works. 
   */
  createNotebookInstance(params: SageMaker.Types.CreateNotebookInstanceInput, callback?: (err: AWSError, data: SageMaker.Types.CreateNotebookInstanceOutput) => void): Request<SageMaker.Types.CreateNotebookInstanceOutput, AWSError>;
  /**
   * Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook.  In a CreateNotebookInstance request, specify the type of ML compute instance that you want to run. Amazon SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance.  Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use Amazon SageMaker with a specific algorithm or with a machine learning framework.  After receiving the request, Amazon SageMaker does the following:   Creates a network interface in the Amazon SageMaker VPC.   (Option) If you specified SubnetId, Amazon SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, Amazon SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.   Launches an EC2 instance of the type specified in the request in the Amazon SageMaker VPC. If you specified SubnetId of your VPC, Amazon SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.   After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it. After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and validate hosted models.  For more information, see How It Works. 
   */
  createNotebookInstance(callback?: (err: AWSError, data: SageMaker.Types.CreateNotebookInstanceOutput) => void): Request<SageMaker.Types.CreateNotebookInstanceOutput, AWSError>;
  /**
   * Creates a lifecycle configuration that you can associate with a notebook instance. A lifecycle configuration is a collection of shell scripts that run when you create or start a notebook instance. Each lifecycle configuration script has a limit of 16384 characters. The value of the $PATH environment variable that is available to both scripts is /sbin:bin:/usr/sbin:/usr/bin. View CloudWatch Logs for notebook instance lifecycle configurations in log group /aws/sagemaker/NotebookInstances in log stream [notebook-instance-name]/[LifecycleConfigHook]. Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance.
   */
  createNotebookInstanceLifecycleConfig(params: SageMaker.Types.CreateNotebookInstanceLifecycleConfigInput, callback?: (err: AWSError, data: SageMaker.Types.CreateNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.CreateNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Creates a lifecycle configuration that you can associate with a notebook instance. A lifecycle configuration is a collection of shell scripts that run when you create or start a notebook instance. Each lifecycle configuration script has a limit of 16384 characters. The value of the $PATH environment variable that is available to both scripts is /sbin:bin:/usr/sbin:/usr/bin. View CloudWatch Logs for notebook instance lifecycle configurations in log group /aws/sagemaker/NotebookInstances in log stream [notebook-instance-name]/[LifecycleConfigHook]. Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance.
   */
  createNotebookInstanceLifecycleConfig(callback?: (err: AWSError, data: SageMaker.Types.CreateNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.CreateNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume. This operation can only be called when the authentication mode equals IAM. 
   */
  createPresignedDomainUrl(params: SageMaker.Types.CreatePresignedDomainUrlRequest, callback?: (err: AWSError, data: SageMaker.Types.CreatePresignedDomainUrlResponse) => void): Request<SageMaker.Types.CreatePresignedDomainUrlResponse, AWSError>;
  /**
   * Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume. This operation can only be called when the authentication mode equals IAM. 
   */
  createPresignedDomainUrl(callback?: (err: AWSError, data: SageMaker.Types.CreatePresignedDomainUrlResponse) => void): Request<SageMaker.Types.CreatePresignedDomainUrlResponse, AWSError>;
  /**
   * Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the Amazon SageMaker console, when you choose Open next to a notebook instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.  The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance. You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the NotIpAddress condition operator and the aws:SourceIP condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see Limit Access to a Notebook Instance by IP Address.  The URL that you get from a call to CreatePresignedNotebookInstanceUrl is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the AWS console sign-in page. 
   */
  createPresignedNotebookInstanceUrl(params: SageMaker.Types.CreatePresignedNotebookInstanceUrlInput, callback?: (err: AWSError, data: SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput) => void): Request<SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput, AWSError>;
  /**
   * Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the Amazon SageMaker console, when you choose Open next to a notebook instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.  The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance. You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the NotIpAddress condition operator and the aws:SourceIP condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see Limit Access to a Notebook Instance by IP Address.  The URL that you get from a call to CreatePresignedNotebookInstanceUrl is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the AWS console sign-in page. 
   */
  createPresignedNotebookInstanceUrl(callback?: (err: AWSError, data: SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput) => void): Request<SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput, AWSError>;
  /**
   * Creates a processing job.
   */
  createProcessingJob(params: SageMaker.Types.CreateProcessingJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateProcessingJobResponse) => void): Request<SageMaker.Types.CreateProcessingJobResponse, AWSError>;
  /**
   * Creates a processing job.
   */
  createProcessingJob(callback?: (err: AWSError, data: SageMaker.Types.CreateProcessingJobResponse) => void): Request<SageMaker.Types.CreateProcessingJobResponse, AWSError>;
  /**
   * Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than Amazon SageMaker, provided that you know how to use them for inferences.  In the request body, you provide the following:     AlgorithmSpecification - Identifies the training algorithm to use.     HyperParameters - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see Algorithms.     InputDataConfig - Describes the training dataset and the Amazon S3, EFS, or FSx location where it is stored.    OutputDataConfig - Identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of model training.      ResourceConfig - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance.     EnableManagedSpotTraining - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see Managed Spot Training.     RoleARN - The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete model training.     StoppingCondition - To help cap training costs, use MaxRuntimeInSeconds to set a time limit for training. Use MaxWaitTimeInSeconds to specify how long you are willing to wait for a managed spot training job to complete.     For more information about Amazon SageMaker, see How It Works. 
   */
  createTrainingJob(params: SageMaker.Types.CreateTrainingJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateTrainingJobResponse) => void): Request<SageMaker.Types.CreateTrainingJobResponse, AWSError>;
  /**
   * Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than Amazon SageMaker, provided that you know how to use them for inferences.  In the request body, you provide the following:     AlgorithmSpecification - Identifies the training algorithm to use.     HyperParameters - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see Algorithms.     InputDataConfig - Describes the training dataset and the Amazon S3, EFS, or FSx location where it is stored.    OutputDataConfig - Identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of model training.      ResourceConfig - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance.     EnableManagedSpotTraining - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see Managed Spot Training.     RoleARN - The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete model training.     StoppingCondition - To help cap training costs, use MaxRuntimeInSeconds to set a time limit for training. Use MaxWaitTimeInSeconds to specify how long you are willing to wait for a managed spot training job to complete.     For more information about Amazon SageMaker, see How It Works. 
   */
  createTrainingJob(callback?: (err: AWSError, data: SageMaker.Types.CreateTrainingJobResponse) => void): Request<SageMaker.Types.CreateTrainingJobResponse, AWSError>;
  /**
   * Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify. To perform batch transformations, you create a transform job and use the data that you have readily available. In the request body, you provide the following:    TransformJobName - Identifies the transform job. The name must be unique within an AWS Region in an AWS account.    ModelName - Identifies the model to use. ModelName must be the name of an existing Amazon SageMaker model in the same AWS Region and AWS account. For information on creating a model, see CreateModel.    TransformInput - Describes the dataset to be transformed and the Amazon S3 location where it is stored.    TransformOutput - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.    TransformResources - Identifies the ML compute instances for the transform job.   For more information about how batch transformation works, see Batch Transform.
   */
  createTransformJob(params: SageMaker.Types.CreateTransformJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateTransformJobResponse) => void): Request<SageMaker.Types.CreateTransformJobResponse, AWSError>;
  /**
   * Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify. To perform batch transformations, you create a transform job and use the data that you have readily available. In the request body, you provide the following:    TransformJobName - Identifies the transform job. The name must be unique within an AWS Region in an AWS account.    ModelName - Identifies the model to use. ModelName must be the name of an existing Amazon SageMaker model in the same AWS Region and AWS account. For information on creating a model, see CreateModel.    TransformInput - Describes the dataset to be transformed and the Amazon S3 location where it is stored.    TransformOutput - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.    TransformResources - Identifies the ML compute instances for the transform job.   For more information about how batch transformation works, see Batch Transform.
   */
  createTransformJob(callback?: (err: AWSError, data: SageMaker.Types.CreateTransformJobResponse) => void): Request<SageMaker.Types.CreateTransformJobResponse, AWSError>;
  /**
   * Creates an Amazon SageMaker trial. A trial is a set of steps called trial components that produce a machine learning model. A trial is part of a single Amazon SageMaker experiment. When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to a trial and then use the Search API to search for the tags. To get a list of all your trials, call the ListTrials API. To view a trial's properties, call the DescribeTrial API. To create a trial component, call the CreateTrialComponent API.
   */
  createTrial(params: SageMaker.Types.CreateTrialRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateTrialResponse) => void): Request<SageMaker.Types.CreateTrialResponse, AWSError>;
  /**
   * Creates an Amazon SageMaker trial. A trial is a set of steps called trial components that produce a machine learning model. A trial is part of a single Amazon SageMaker experiment. When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to a trial and then use the Search API to search for the tags. To get a list of all your trials, call the ListTrials API. To view a trial's properties, call the DescribeTrial API. To create a trial component, call the CreateTrialComponent API.
   */
  createTrial(callback?: (err: AWSError, data: SageMaker.Types.CreateTrialResponse) => void): Request<SageMaker.Types.CreateTrialResponse, AWSError>;
  /**
   * Creates a trial component, which is a stage of a machine learning trial. A trial is composed of one or more trial components. A trial component can be used in multiple trials. Trial components include pre-processing jobs, training jobs, and batch transform jobs. When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to a trial component and then use the Search API to search for the tags.   CreateTrialComponent can only be invoked from within an Amazon SageMaker managed environment. This includes Amazon SageMaker training jobs, processing jobs, transform jobs, and Amazon SageMaker notebooks. A call to CreateTrialComponent from outside one of these environments results in an error. 
   */
  createTrialComponent(params: SageMaker.Types.CreateTrialComponentRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateTrialComponentResponse) => void): Request<SageMaker.Types.CreateTrialComponentResponse, AWSError>;
  /**
   * Creates a trial component, which is a stage of a machine learning trial. A trial is composed of one or more trial components. A trial component can be used in multiple trials. Trial components include pre-processing jobs, training jobs, and batch transform jobs. When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to a trial component and then use the Search API to search for the tags.   CreateTrialComponent can only be invoked from within an Amazon SageMaker managed environment. This includes Amazon SageMaker training jobs, processing jobs, transform jobs, and Amazon SageMaker notebooks. A call to CreateTrialComponent from outside one of these environments results in an error. 
   */
  createTrialComponent(callback?: (err: AWSError, data: SageMaker.Types.CreateTrialComponentResponse) => void): Request<SageMaker.Types.CreateTrialComponentResponse, AWSError>;
  /**
   * Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from SSO, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory. 
   */
  createUserProfile(params: SageMaker.Types.CreateUserProfileRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateUserProfileResponse) => void): Request<SageMaker.Types.CreateUserProfileResponse, AWSError>;
  /**
   * Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from SSO, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory. 
   */
  createUserProfile(callback?: (err: AWSError, data: SageMaker.Types.CreateUserProfileResponse) => void): Request<SageMaker.Types.CreateUserProfileResponse, AWSError>;
  /**
   * Use this operation to create a workforce. This operation will return an error if a workforce already exists in the AWS Region that you specify. You can only create one workforce in each AWS Region per AWS account. If you want to create a new workforce in an AWS Region where a workforce already exists, use the API operation to delete the existing workforce and then use CreateWorkforce to create a new workforce. To create a private workforce using Amazon Cognito, you must specify a Cognito user pool in CognitoConfig. You can also create an Amazon Cognito workforce using the Amazon SageMaker console. For more information, see  Create a Private Workforce (Amazon Cognito). To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP configuration in OidcConfig. Your OIDC IdP must support groups because groups are used by Ground Truth and Amazon A2I to create work teams. For more information, see  Create a Private Workforce (OIDC IdP).
   */
  createWorkforce(params: SageMaker.Types.CreateWorkforceRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateWorkforceResponse) => void): Request<SageMaker.Types.CreateWorkforceResponse, AWSError>;
  /**
   * Use this operation to create a workforce. This operation will return an error if a workforce already exists in the AWS Region that you specify. You can only create one workforce in each AWS Region per AWS account. If you want to create a new workforce in an AWS Region where a workforce already exists, use the API operation to delete the existing workforce and then use CreateWorkforce to create a new workforce. To create a private workforce using Amazon Cognito, you must specify a Cognito user pool in CognitoConfig. You can also create an Amazon Cognito workforce using the Amazon SageMaker console. For more information, see  Create a Private Workforce (Amazon Cognito). To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP configuration in OidcConfig. Your OIDC IdP must support groups because groups are used by Ground Truth and Amazon A2I to create work teams. For more information, see  Create a Private Workforce (OIDC IdP).
   */
  createWorkforce(callback?: (err: AWSError, data: SageMaker.Types.CreateWorkforceResponse) => void): Request<SageMaker.Types.CreateWorkforceResponse, AWSError>;
  /**
   * Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team. You cannot create more than 25 work teams in an account and region.
   */
  createWorkteam(params: SageMaker.Types.CreateWorkteamRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateWorkteamResponse) => void): Request<SageMaker.Types.CreateWorkteamResponse, AWSError>;
  /**
   * Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team. You cannot create more than 25 work teams in an account and region.
   */
  createWorkteam(callback?: (err: AWSError, data: SageMaker.Types.CreateWorkteamResponse) => void): Request<SageMaker.Types.CreateWorkteamResponse, AWSError>;
  /**
   * Removes the specified algorithm from your account.
   */
  deleteAlgorithm(params: SageMaker.Types.DeleteAlgorithmInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified algorithm from your account.
   */
  deleteAlgorithm(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used to stop and delete an app.
   */
  deleteApp(params: SageMaker.Types.DeleteAppRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used to stop and delete an app.
   */
  deleteApp(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Git repository from your account.
   */
  deleteCodeRepository(params: SageMaker.Types.DeleteCodeRepositoryInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Git repository from your account.
   */
  deleteCodeRepository(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using SSO. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts. 
   */
  deleteDomain(params: SageMaker.Types.DeleteDomainRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using SSO. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts. 
   */
  deleteDomain(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the endpoint was created.  Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the RevokeGrant API call.
   */
  deleteEndpoint(params: SageMaker.Types.DeleteEndpointInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the endpoint was created.  Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the RevokeGrant API call.
   */
  deleteEndpoint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint configuration. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration.  You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.
   */
  deleteEndpointConfig(params: SageMaker.Types.DeleteEndpointConfigInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint configuration. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration.  You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.
   */
  deleteEndpointConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Amazon SageMaker experiment. All trials associated with the experiment must be deleted first. Use the ListTrials API to get a list of the trials associated with the experiment.
   */
  deleteExperiment(params: SageMaker.Types.DeleteExperimentRequest, callback?: (err: AWSError, data: SageMaker.Types.DeleteExperimentResponse) => void): Request<SageMaker.Types.DeleteExperimentResponse, AWSError>;
  /**
   * Deletes an Amazon SageMaker experiment. All trials associated with the experiment must be deleted first. Use the ListTrials API to get a list of the trials associated with the experiment.
   */
  deleteExperiment(callback?: (err: AWSError, data: SageMaker.Types.DeleteExperimentResponse) => void): Request<SageMaker.Types.DeleteExperimentResponse, AWSError>;
  /**
   * Deletes the specified flow definition.
   */
  deleteFlowDefinition(params: SageMaker.Types.DeleteFlowDefinitionRequest, callback?: (err: AWSError, data: SageMaker.Types.DeleteFlowDefinitionResponse) => void): Request<SageMaker.Types.DeleteFlowDefinitionResponse, AWSError>;
  /**
   * Deletes the specified flow definition.
   */
  deleteFlowDefinition(callback?: (err: AWSError, data: SageMaker.Types.DeleteFlowDefinitionResponse) => void): Request<SageMaker.Types.DeleteFlowDefinitionResponse, AWSError>;
  /**
   * Use this operation to delete a human task user interface (worker task template).  To see a list of human task user interfaces (work task templates) in your account, use . When you delete a worker task template, it no longer appears when you call ListHumanTaskUis.
   */
  deleteHumanTaskUi(params: SageMaker.Types.DeleteHumanTaskUiRequest, callback?: (err: AWSError, data: SageMaker.Types.DeleteHumanTaskUiResponse) => void): Request<SageMaker.Types.DeleteHumanTaskUiResponse, AWSError>;
  /**
   * Use this operation to delete a human task user interface (worker task template).  To see a list of human task user interfaces (work task templates) in your account, use . When you delete a worker task template, it no longer appears when you call ListHumanTaskUis.
   */
  deleteHumanTaskUi(callback?: (err: AWSError, data: SageMaker.Types.DeleteHumanTaskUiResponse) => void): Request<SageMaker.Types.DeleteHumanTaskUiResponse, AWSError>;
  /**
   * Deletes a model. The DeleteModel API deletes only the model entry that was created in Amazon SageMaker when you called the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model. 
   */
  deleteModel(params: SageMaker.Types.DeleteModelInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a model. The DeleteModel API deletes only the model entry that was created in Amazon SageMaker when you called the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model. 
   */
  deleteModel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a model package. A model package is used to create Amazon SageMaker models or list on AWS Marketplace. Buyers can subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker.
   */
  deleteModelPackage(params: SageMaker.Types.DeleteModelPackageInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a model package. A model package is used to create Amazon SageMaker models or list on AWS Marketplace. Buyers can subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker.
   */
  deleteModelPackage(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule. 
   */
  deleteMonitoringSchedule(params: SageMaker.Types.DeleteMonitoringScheduleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule. 
   */
  deleteMonitoringSchedule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the StopNotebookInstance API.   When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance.  
   */
  deleteNotebookInstance(params: SageMaker.Types.DeleteNotebookInstanceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the StopNotebookInstance API.   When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance.  
   */
  deleteNotebookInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a notebook instance lifecycle configuration.
   */
  deleteNotebookInstanceLifecycleConfig(params: SageMaker.Types.DeleteNotebookInstanceLifecycleConfigInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a notebook instance lifecycle configuration.
   */
  deleteNotebookInstanceLifecycleConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified tags from an Amazon SageMaker resource. To list a resource's tags, use the ListTags API.   When you call this API to delete tags from a hyperparameter tuning job, the deleted tags are not removed from training jobs that the hyperparameter tuning job launched before you called this API. 
   */
  deleteTags(params: SageMaker.Types.DeleteTagsInput, callback?: (err: AWSError, data: SageMaker.Types.DeleteTagsOutput) => void): Request<SageMaker.Types.DeleteTagsOutput, AWSError>;
  /**
   * Deletes the specified tags from an Amazon SageMaker resource. To list a resource's tags, use the ListTags API.   When you call this API to delete tags from a hyperparameter tuning job, the deleted tags are not removed from training jobs that the hyperparameter tuning job launched before you called this API. 
   */
  deleteTags(callback?: (err: AWSError, data: SageMaker.Types.DeleteTagsOutput) => void): Request<SageMaker.Types.DeleteTagsOutput, AWSError>;
  /**
   * Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the DescribeTrialComponent API to get the list of trial components.
   */
  deleteTrial(params: SageMaker.Types.DeleteTrialRequest, callback?: (err: AWSError, data: SageMaker.Types.DeleteTrialResponse) => void): Request<SageMaker.Types.DeleteTrialResponse, AWSError>;
  /**
   * Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the DescribeTrialComponent API to get the list of trial components.
   */
  deleteTrial(callback?: (err: AWSError, data: SageMaker.Types.DeleteTrialResponse) => void): Request<SageMaker.Types.DeleteTrialResponse, AWSError>;
  /**
   * Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the DisassociateTrialComponent API.
   */
  deleteTrialComponent(params: SageMaker.Types.DeleteTrialComponentRequest, callback?: (err: AWSError, data: SageMaker.Types.DeleteTrialComponentResponse) => void): Request<SageMaker.Types.DeleteTrialComponentResponse, AWSError>;
  /**
   * Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the DisassociateTrialComponent API.
   */
  deleteTrialComponent(callback?: (err: AWSError, data: SageMaker.Types.DeleteTrialComponentResponse) => void): Request<SageMaker.Types.DeleteTrialComponentResponse, AWSError>;
  /**
   * Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.
   */
  deleteUserProfile(params: SageMaker.Types.DeleteUserProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.
   */
  deleteUserProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Use this operation to delete a workforce. If you want to create a new workforce in an AWS Region where a workforce already exists, use this operation to delete the existing workforce and then use to create a new workforce.  If a private workforce contains one or more work teams, you must use the operation to delete all work teams before you delete the workforce. If you try to delete a workforce that contains one or more work teams, you will recieve a ResourceInUse error. 
   */
  deleteWorkforce(params: SageMaker.Types.DeleteWorkforceRequest, callback?: (err: AWSError, data: SageMaker.Types.DeleteWorkforceResponse) => void): Request<SageMaker.Types.DeleteWorkforceResponse, AWSError>;
  /**
   * Use this operation to delete a workforce. If you want to create a new workforce in an AWS Region where a workforce already exists, use this operation to delete the existing workforce and then use to create a new workforce.  If a private workforce contains one or more work teams, you must use the operation to delete all work teams before you delete the workforce. If you try to delete a workforce that contains one or more work teams, you will recieve a ResourceInUse error. 
   */
  deleteWorkforce(callback?: (err: AWSError, data: SageMaker.Types.DeleteWorkforceResponse) => void): Request<SageMaker.Types.DeleteWorkforceResponse, AWSError>;
  /**
   * Deletes an existing work team. This operation can't be undone.
   */
  deleteWorkteam(params: SageMaker.Types.DeleteWorkteamRequest, callback?: (err: AWSError, data: SageMaker.Types.DeleteWorkteamResponse) => void): Request<SageMaker.Types.DeleteWorkteamResponse, AWSError>;
  /**
   * Deletes an existing work team. This operation can't be undone.
   */
  deleteWorkteam(callback?: (err: AWSError, data: SageMaker.Types.DeleteWorkteamResponse) => void): Request<SageMaker.Types.DeleteWorkteamResponse, AWSError>;
  /**
   * Returns a description of the specified algorithm that is in your account.
   */
  describeAlgorithm(params: SageMaker.Types.DescribeAlgorithmInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeAlgorithmOutput) => void): Request<SageMaker.Types.DescribeAlgorithmOutput, AWSError>;
  /**
   * Returns a description of the specified algorithm that is in your account.
   */
  describeAlgorithm(callback?: (err: AWSError, data: SageMaker.Types.DescribeAlgorithmOutput) => void): Request<SageMaker.Types.DescribeAlgorithmOutput, AWSError>;
  /**
   * Describes the app.
   */
  describeApp(params: SageMaker.Types.DescribeAppRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeAppResponse) => void): Request<SageMaker.Types.DescribeAppResponse, AWSError>;
  /**
   * Describes the app.
   */
  describeApp(callback?: (err: AWSError, data: SageMaker.Types.DescribeAppResponse) => void): Request<SageMaker.Types.DescribeAppResponse, AWSError>;
  /**
   * Returns information about an Amazon SageMaker job.
   */
  describeAutoMLJob(params: SageMaker.Types.DescribeAutoMLJobRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeAutoMLJobResponse) => void): Request<SageMaker.Types.DescribeAutoMLJobResponse, AWSError>;
  /**
   * Returns information about an Amazon SageMaker job.
   */
  describeAutoMLJob(callback?: (err: AWSError, data: SageMaker.Types.DescribeAutoMLJobResponse) => void): Request<SageMaker.Types.DescribeAutoMLJobResponse, AWSError>;
  /**
   * Gets details about the specified Git repository.
   */
  describeCodeRepository(params: SageMaker.Types.DescribeCodeRepositoryInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeCodeRepositoryOutput) => void): Request<SageMaker.Types.DescribeCodeRepositoryOutput, AWSError>;
  /**
   * Gets details about the specified Git repository.
   */
  describeCodeRepository(callback?: (err: AWSError, data: SageMaker.Types.DescribeCodeRepositoryOutput) => void): Request<SageMaker.Types.DescribeCodeRepositoryOutput, AWSError>;
  /**
   * Returns information about a model compilation job. To create a model compilation job, use CreateCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs.
   */
  describeCompilationJob(params: SageMaker.Types.DescribeCompilationJobRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeCompilationJobResponse) => void): Request<SageMaker.Types.DescribeCompilationJobResponse, AWSError>;
  /**
   * Returns information about a model compilation job. To create a model compilation job, use CreateCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs.
   */
  describeCompilationJob(callback?: (err: AWSError, data: SageMaker.Types.DescribeCompilationJobResponse) => void): Request<SageMaker.Types.DescribeCompilationJobResponse, AWSError>;
  /**
   * The description of the domain.
   */
  describeDomain(params: SageMaker.Types.DescribeDomainRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeDomainResponse) => void): Request<SageMaker.Types.DescribeDomainResponse, AWSError>;
  /**
   * The description of the domain.
   */
  describeDomain(callback?: (err: AWSError, data: SageMaker.Types.DescribeDomainResponse) => void): Request<SageMaker.Types.DescribeDomainResponse, AWSError>;
  /**
   * Returns the description of an endpoint.
   */
  describeEndpoint(params: SageMaker.Types.DescribeEndpointInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointOutput) => void): Request<SageMaker.Types.DescribeEndpointOutput, AWSError>;
  /**
   * Returns the description of an endpoint.
   */
  describeEndpoint(callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointOutput) => void): Request<SageMaker.Types.DescribeEndpointOutput, AWSError>;
  /**
   * Returns the description of an endpoint configuration created using the CreateEndpointConfig API.
   */
  describeEndpointConfig(params: SageMaker.Types.DescribeEndpointConfigInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointConfigOutput) => void): Request<SageMaker.Types.DescribeEndpointConfigOutput, AWSError>;
  /**
   * Returns the description of an endpoint configuration created using the CreateEndpointConfig API.
   */
  describeEndpointConfig(callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointConfigOutput) => void): Request<SageMaker.Types.DescribeEndpointConfigOutput, AWSError>;
  /**
   * Provides a list of an experiment's properties.
   */
  describeExperiment(params: SageMaker.Types.DescribeExperimentRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeExperimentResponse) => void): Request<SageMaker.Types.DescribeExperimentResponse, AWSError>;
  /**
   * Provides a list of an experiment's properties.
   */
  describeExperiment(callback?: (err: AWSError, data: SageMaker.Types.DescribeExperimentResponse) => void): Request<SageMaker.Types.DescribeExperimentResponse, AWSError>;
  /**
   * Returns information about the specified flow definition.
   */
  describeFlowDefinition(params: SageMaker.Types.DescribeFlowDefinitionRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeFlowDefinitionResponse) => void): Request<SageMaker.Types.DescribeFlowDefinitionResponse, AWSError>;
  /**
   * Returns information about the specified flow definition.
   */
  describeFlowDefinition(callback?: (err: AWSError, data: SageMaker.Types.DescribeFlowDefinitionResponse) => void): Request<SageMaker.Types.DescribeFlowDefinitionResponse, AWSError>;
  /**
   * Returns information about the requested human task user interface (worker task template).
   */
  describeHumanTaskUi(params: SageMaker.Types.DescribeHumanTaskUiRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeHumanTaskUiResponse) => void): Request<SageMaker.Types.DescribeHumanTaskUiResponse, AWSError>;
  /**
   * Returns information about the requested human task user interface (worker task template).
   */
  describeHumanTaskUi(callback?: (err: AWSError, data: SageMaker.Types.DescribeHumanTaskUiResponse) => void): Request<SageMaker.Types.DescribeHumanTaskUiResponse, AWSError>;
  /**
   * Gets a description of a hyperparameter tuning job.
   */
  describeHyperParameterTuningJob(params: SageMaker.Types.DescribeHyperParameterTuningJobRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeHyperParameterTuningJobResponse) => void): Request<SageMaker.Types.DescribeHyperParameterTuningJobResponse, AWSError>;
  /**
   * Gets a description of a hyperparameter tuning job.
   */
  describeHyperParameterTuningJob(callback?: (err: AWSError, data: SageMaker.Types.DescribeHyperParameterTuningJobResponse) => void): Request<SageMaker.Types.DescribeHyperParameterTuningJobResponse, AWSError>;
  /**
   * Gets information about a labeling job.
   */
  describeLabelingJob(params: SageMaker.Types.DescribeLabelingJobRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeLabelingJobResponse) => void): Request<SageMaker.Types.DescribeLabelingJobResponse, AWSError>;
  /**
   * Gets information about a labeling job.
   */
  describeLabelingJob(callback?: (err: AWSError, data: SageMaker.Types.DescribeLabelingJobResponse) => void): Request<SageMaker.Types.DescribeLabelingJobResponse, AWSError>;
  /**
   * Describes a model that you created using the CreateModel API.
   */
  describeModel(params: SageMaker.Types.DescribeModelInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeModelOutput) => void): Request<SageMaker.Types.DescribeModelOutput, AWSError>;
  /**
   * Describes a model that you created using the CreateModel API.
   */
  describeModel(callback?: (err: AWSError, data: SageMaker.Types.DescribeModelOutput) => void): Request<SageMaker.Types.DescribeModelOutput, AWSError>;
  /**
   * Returns a description of the specified model package, which is used to create Amazon SageMaker models or list them on AWS Marketplace. To create models in Amazon SageMaker, buyers can subscribe to model packages listed on AWS Marketplace.
   */
  describeModelPackage(params: SageMaker.Types.DescribeModelPackageInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeModelPackageOutput) => void): Request<SageMaker.Types.DescribeModelPackageOutput, AWSError>;
  /**
   * Returns a description of the specified model package, which is used to create Amazon SageMaker models or list them on AWS Marketplace. To create models in Amazon SageMaker, buyers can subscribe to model packages listed on AWS Marketplace.
   */
  describeModelPackage(callback?: (err: AWSError, data: SageMaker.Types.DescribeModelPackageOutput) => void): Request<SageMaker.Types.DescribeModelPackageOutput, AWSError>;
  /**
   * Describes the schedule for a monitoring job.
   */
  describeMonitoringSchedule(params: SageMaker.Types.DescribeMonitoringScheduleRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeMonitoringScheduleResponse) => void): Request<SageMaker.Types.DescribeMonitoringScheduleResponse, AWSError>;
  /**
   * Describes the schedule for a monitoring job.
   */
  describeMonitoringSchedule(callback?: (err: AWSError, data: SageMaker.Types.DescribeMonitoringScheduleResponse) => void): Request<SageMaker.Types.DescribeMonitoringScheduleResponse, AWSError>;
  /**
   * Returns information about a notebook instance.
   */
  describeNotebookInstance(params: SageMaker.Types.DescribeNotebookInstanceInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Returns information about a notebook instance.
   */
  describeNotebookInstance(callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Returns a description of a notebook instance lifecycle configuration. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance.
   */
  describeNotebookInstanceLifecycleConfig(params: SageMaker.Types.DescribeNotebookInstanceLifecycleConfigInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Returns a description of a notebook instance lifecycle configuration. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance.
   */
  describeNotebookInstanceLifecycleConfig(callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Returns a description of a processing job.
   */
  describeProcessingJob(params: SageMaker.Types.DescribeProcessingJobRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeProcessingJobResponse) => void): Request<SageMaker.Types.DescribeProcessingJobResponse, AWSError>;
  /**
   * Returns a description of a processing job.
   */
  describeProcessingJob(callback?: (err: AWSError, data: SageMaker.Types.DescribeProcessingJobResponse) => void): Request<SageMaker.Types.DescribeProcessingJobResponse, AWSError>;
  /**
   * Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the AWS Marketplace.
   */
  describeSubscribedWorkteam(params: SageMaker.Types.DescribeSubscribedWorkteamRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeSubscribedWorkteamResponse) => void): Request<SageMaker.Types.DescribeSubscribedWorkteamResponse, AWSError>;
  /**
   * Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the AWS Marketplace.
   */
  describeSubscribedWorkteam(callback?: (err: AWSError, data: SageMaker.Types.DescribeSubscribedWorkteamResponse) => void): Request<SageMaker.Types.DescribeSubscribedWorkteamResponse, AWSError>;
  /**
   * Returns information about a training job.
   */
  describeTrainingJob(params: SageMaker.Types.DescribeTrainingJobRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeTrainingJobResponse) => void): Request<SageMaker.Types.DescribeTrainingJobResponse, AWSError>;
  /**
   * Returns information about a training job.
   */
  describeTrainingJob(callback?: (err: AWSError, data: SageMaker.Types.DescribeTrainingJobResponse) => void): Request<SageMaker.Types.DescribeTrainingJobResponse, AWSError>;
  /**
   * Returns information about a transform job.
   */
  describeTransformJob(params: SageMaker.Types.DescribeTransformJobRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeTransformJobResponse) => void): Request<SageMaker.Types.DescribeTransformJobResponse, AWSError>;
  /**
   * Returns information about a transform job.
   */
  describeTransformJob(callback?: (err: AWSError, data: SageMaker.Types.DescribeTransformJobResponse) => void): Request<SageMaker.Types.DescribeTransformJobResponse, AWSError>;
  /**
   * Provides a list of a trial's properties.
   */
  describeTrial(params: SageMaker.Types.DescribeTrialRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeTrialResponse) => void): Request<SageMaker.Types.DescribeTrialResponse, AWSError>;
  /**
   * Provides a list of a trial's properties.
   */
  describeTrial(callback?: (err: AWSError, data: SageMaker.Types.DescribeTrialResponse) => void): Request<SageMaker.Types.DescribeTrialResponse, AWSError>;
  /**
   * Provides a list of a trials component's properties.
   */
  describeTrialComponent(params: SageMaker.Types.DescribeTrialComponentRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeTrialComponentResponse) => void): Request<SageMaker.Types.DescribeTrialComponentResponse, AWSError>;
  /**
   * Provides a list of a trials component's properties.
   */
  describeTrialComponent(callback?: (err: AWSError, data: SageMaker.Types.DescribeTrialComponentResponse) => void): Request<SageMaker.Types.DescribeTrialComponentResponse, AWSError>;
  /**
   * Describes a user profile. For more information, see CreateUserProfile.
   */
  describeUserProfile(params: SageMaker.Types.DescribeUserProfileRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeUserProfileResponse) => void): Request<SageMaker.Types.DescribeUserProfileResponse, AWSError>;
  /**
   * Describes a user profile. For more information, see CreateUserProfile.
   */
  describeUserProfile(callback?: (err: AWSError, data: SageMaker.Types.DescribeUserProfileResponse) => void): Request<SageMaker.Types.DescribeUserProfileResponse, AWSError>;
  /**
   * Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (CIDRs). Allowable IP address ranges are the IP addresses that workers can use to access tasks.   This operation applies only to private workforces. 
   */
  describeWorkforce(params: SageMaker.Types.DescribeWorkforceRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeWorkforceResponse) => void): Request<SageMaker.Types.DescribeWorkforceResponse, AWSError>;
  /**
   * Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (CIDRs). Allowable IP address ranges are the IP addresses that workers can use to access tasks.   This operation applies only to private workforces. 
   */
  describeWorkforce(callback?: (err: AWSError, data: SageMaker.Types.DescribeWorkforceResponse) => void): Request<SageMaker.Types.DescribeWorkforceResponse, AWSError>;
  /**
   * Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).
   */
  describeWorkteam(params: SageMaker.Types.DescribeWorkteamRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeWorkteamResponse) => void): Request<SageMaker.Types.DescribeWorkteamResponse, AWSError>;
  /**
   * Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).
   */
  describeWorkteam(callback?: (err: AWSError, data: SageMaker.Types.DescribeWorkteamResponse) => void): Request<SageMaker.Types.DescribeWorkteamResponse, AWSError>;
  /**
   * Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the AssociateTrialComponent API. To get a list of the trials a component is associated with, use the Search API. Specify ExperimentTrialComponent for the Resource parameter. The list appears in the response under Results.TrialComponent.Parents.
   */
  disassociateTrialComponent(params: SageMaker.Types.DisassociateTrialComponentRequest, callback?: (err: AWSError, data: SageMaker.Types.DisassociateTrialComponentResponse) => void): Request<SageMaker.Types.DisassociateTrialComponentResponse, AWSError>;
  /**
   * Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the AssociateTrialComponent API. To get a list of the trials a component is associated with, use the Search API. Specify ExperimentTrialComponent for the Resource parameter. The list appears in the response under Results.TrialComponent.Parents.
   */
  disassociateTrialComponent(callback?: (err: AWSError, data: SageMaker.Types.DisassociateTrialComponentResponse) => void): Request<SageMaker.Types.DisassociateTrialComponentResponse, AWSError>;
  /**
   * An auto-complete API for the search functionality in the Amazon SageMaker console. It returns suggestions of possible matches for the property name to use in Search queries. Provides suggestions for HyperParameters, Tags, and Metrics.
   */
  getSearchSuggestions(params: SageMaker.Types.GetSearchSuggestionsRequest, callback?: (err: AWSError, data: SageMaker.Types.GetSearchSuggestionsResponse) => void): Request<SageMaker.Types.GetSearchSuggestionsResponse, AWSError>;
  /**
   * An auto-complete API for the search functionality in the Amazon SageMaker console. It returns suggestions of possible matches for the property name to use in Search queries. Provides suggestions for HyperParameters, Tags, and Metrics.
   */
  getSearchSuggestions(callback?: (err: AWSError, data: SageMaker.Types.GetSearchSuggestionsResponse) => void): Request<SageMaker.Types.GetSearchSuggestionsResponse, AWSError>;
  /**
   * Lists the machine learning algorithms that have been created.
   */
  listAlgorithms(params: SageMaker.Types.ListAlgorithmsInput, callback?: (err: AWSError, data: SageMaker.Types.ListAlgorithmsOutput) => void): Request<SageMaker.Types.ListAlgorithmsOutput, AWSError>;
  /**
   * Lists the machine learning algorithms that have been created.
   */
  listAlgorithms(callback?: (err: AWSError, data: SageMaker.Types.ListAlgorithmsOutput) => void): Request<SageMaker.Types.ListAlgorithmsOutput, AWSError>;
  /**
   * Lists apps.
   */
  listApps(params: SageMaker.Types.ListAppsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListAppsResponse) => void): Request<SageMaker.Types.ListAppsResponse, AWSError>;
  /**
   * Lists apps.
   */
  listApps(callback?: (err: AWSError, data: SageMaker.Types.ListAppsResponse) => void): Request<SageMaker.Types.ListAppsResponse, AWSError>;
  /**
   * Request a list of jobs.
   */
  listAutoMLJobs(params: SageMaker.Types.ListAutoMLJobsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListAutoMLJobsResponse) => void): Request<SageMaker.Types.ListAutoMLJobsResponse, AWSError>;
  /**
   * Request a list of jobs.
   */
  listAutoMLJobs(callback?: (err: AWSError, data: SageMaker.Types.ListAutoMLJobsResponse) => void): Request<SageMaker.Types.ListAutoMLJobsResponse, AWSError>;
  /**
   * List the Candidates created for the job.
   */
  listCandidatesForAutoMLJob(params: SageMaker.Types.ListCandidatesForAutoMLJobRequest, callback?: (err: AWSError, data: SageMaker.Types.ListCandidatesForAutoMLJobResponse) => void): Request<SageMaker.Types.ListCandidatesForAutoMLJobResponse, AWSError>;
  /**
   * List the Candidates created for the job.
   */
  listCandidatesForAutoMLJob(callback?: (err: AWSError, data: SageMaker.Types.ListCandidatesForAutoMLJobResponse) => void): Request<SageMaker.Types.ListCandidatesForAutoMLJobResponse, AWSError>;
  /**
   * Gets a list of the Git repositories in your account.
   */
  listCodeRepositories(params: SageMaker.Types.ListCodeRepositoriesInput, callback?: (err: AWSError, data: SageMaker.Types.ListCodeRepositoriesOutput) => void): Request<SageMaker.Types.ListCodeRepositoriesOutput, AWSError>;
  /**
   * Gets a list of the Git repositories in your account.
   */
  listCodeRepositories(callback?: (err: AWSError, data: SageMaker.Types.ListCodeRepositoriesOutput) => void): Request<SageMaker.Types.ListCodeRepositoriesOutput, AWSError>;
  /**
   * Lists model compilation jobs that satisfy various filters. To create a model compilation job, use CreateCompilationJob. To get information about a particular model compilation job you have created, use DescribeCompilationJob.
   */
  listCompilationJobs(params: SageMaker.Types.ListCompilationJobsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListCompilationJobsResponse) => void): Request<SageMaker.Types.ListCompilationJobsResponse, AWSError>;
  /**
   * Lists model compilation jobs that satisfy various filters. To create a model compilation job, use CreateCompilationJob. To get information about a particular model compilation job you have created, use DescribeCompilationJob.
   */
  listCompilationJobs(callback?: (err: AWSError, data: SageMaker.Types.ListCompilationJobsResponse) => void): Request<SageMaker.Types.ListCompilationJobsResponse, AWSError>;
  /**
   * Lists the domains.
   */
  listDomains(params: SageMaker.Types.ListDomainsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListDomainsResponse) => void): Request<SageMaker.Types.ListDomainsResponse, AWSError>;
  /**
   * Lists the domains.
   */
  listDomains(callback?: (err: AWSError, data: SageMaker.Types.ListDomainsResponse) => void): Request<SageMaker.Types.ListDomainsResponse, AWSError>;
  /**
   * Lists endpoint configurations.
   */
  listEndpointConfigs(params: SageMaker.Types.ListEndpointConfigsInput, callback?: (err: AWSError, data: SageMaker.Types.ListEndpointConfigsOutput) => void): Request<SageMaker.Types.ListEndpointConfigsOutput, AWSError>;
  /**
   * Lists endpoint configurations.
   */
  listEndpointConfigs(callback?: (err: AWSError, data: SageMaker.Types.ListEndpointConfigsOutput) => void): Request<SageMaker.Types.ListEndpointConfigsOutput, AWSError>;
  /**
   * Lists endpoints.
   */
  listEndpoints(params: SageMaker.Types.ListEndpointsInput, callback?: (err: AWSError, data: SageMaker.Types.ListEndpointsOutput) => void): Request<SageMaker.Types.ListEndpointsOutput, AWSError>;
  /**
   * Lists endpoints.
   */
  listEndpoints(callback?: (err: AWSError, data: SageMaker.Types.ListEndpointsOutput) => void): Request<SageMaker.Types.ListEndpointsOutput, AWSError>;
  /**
   * Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.
   */
  listExperiments(params: SageMaker.Types.ListExperimentsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListExperimentsResponse) => void): Request<SageMaker.Types.ListExperimentsResponse, AWSError>;
  /**
   * Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.
   */
  listExperiments(callback?: (err: AWSError, data: SageMaker.Types.ListExperimentsResponse) => void): Request<SageMaker.Types.ListExperimentsResponse, AWSError>;
  /**
   * Returns information about the flow definitions in your account.
   */
  listFlowDefinitions(params: SageMaker.Types.ListFlowDefinitionsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListFlowDefinitionsResponse) => void): Request<SageMaker.Types.ListFlowDefinitionsResponse, AWSError>;
  /**
   * Returns information about the flow definitions in your account.
   */
  listFlowDefinitions(callback?: (err: AWSError, data: SageMaker.Types.ListFlowDefinitionsResponse) => void): Request<SageMaker.Types.ListFlowDefinitionsResponse, AWSError>;
  /**
   * Returns information about the human task user interfaces in your account.
   */
  listHumanTaskUis(params: SageMaker.Types.ListHumanTaskUisRequest, callback?: (err: AWSError, data: SageMaker.Types.ListHumanTaskUisResponse) => void): Request<SageMaker.Types.ListHumanTaskUisResponse, AWSError>;
  /**
   * Returns information about the human task user interfaces in your account.
   */
  listHumanTaskUis(callback?: (err: AWSError, data: SageMaker.Types.ListHumanTaskUisResponse) => void): Request<SageMaker.Types.ListHumanTaskUisResponse, AWSError>;
  /**
   * Gets a list of HyperParameterTuningJobSummary objects that describe the hyperparameter tuning jobs launched in your account.
   */
  listHyperParameterTuningJobs(params: SageMaker.Types.ListHyperParameterTuningJobsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListHyperParameterTuningJobsResponse) => void): Request<SageMaker.Types.ListHyperParameterTuningJobsResponse, AWSError>;
  /**
   * Gets a list of HyperParameterTuningJobSummary objects that describe the hyperparameter tuning jobs launched in your account.
   */
  listHyperParameterTuningJobs(callback?: (err: AWSError, data: SageMaker.Types.ListHyperParameterTuningJobsResponse) => void): Request<SageMaker.Types.ListHyperParameterTuningJobsResponse, AWSError>;
  /**
   * Gets a list of labeling jobs.
   */
  listLabelingJobs(params: SageMaker.Types.ListLabelingJobsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListLabelingJobsResponse) => void): Request<SageMaker.Types.ListLabelingJobsResponse, AWSError>;
  /**
   * Gets a list of labeling jobs.
   */
  listLabelingJobs(callback?: (err: AWSError, data: SageMaker.Types.ListLabelingJobsResponse) => void): Request<SageMaker.Types.ListLabelingJobsResponse, AWSError>;
  /**
   * Gets a list of labeling jobs assigned to a specified work team.
   */
  listLabelingJobsForWorkteam(params: SageMaker.Types.ListLabelingJobsForWorkteamRequest, callback?: (err: AWSError, data: SageMaker.Types.ListLabelingJobsForWorkteamResponse) => void): Request<SageMaker.Types.ListLabelingJobsForWorkteamResponse, AWSError>;
  /**
   * Gets a list of labeling jobs assigned to a specified work team.
   */
  listLabelingJobsForWorkteam(callback?: (err: AWSError, data: SageMaker.Types.ListLabelingJobsForWorkteamResponse) => void): Request<SageMaker.Types.ListLabelingJobsForWorkteamResponse, AWSError>;
  /**
   * Lists the model packages that have been created.
   */
  listModelPackages(params: SageMaker.Types.ListModelPackagesInput, callback?: (err: AWSError, data: SageMaker.Types.ListModelPackagesOutput) => void): Request<SageMaker.Types.ListModelPackagesOutput, AWSError>;
  /**
   * Lists the model packages that have been created.
   */
  listModelPackages(callback?: (err: AWSError, data: SageMaker.Types.ListModelPackagesOutput) => void): Request<SageMaker.Types.ListModelPackagesOutput, AWSError>;
  /**
   * Lists models created with the CreateModel API.
   */
  listModels(params: SageMaker.Types.ListModelsInput, callback?: (err: AWSError, data: SageMaker.Types.ListModelsOutput) => void): Request<SageMaker.Types.ListModelsOutput, AWSError>;
  /**
   * Lists models created with the CreateModel API.
   */
  listModels(callback?: (err: AWSError, data: SageMaker.Types.ListModelsOutput) => void): Request<SageMaker.Types.ListModelsOutput, AWSError>;
  /**
   * Returns list of all monitoring job executions.
   */
  listMonitoringExecutions(params: SageMaker.Types.ListMonitoringExecutionsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListMonitoringExecutionsResponse) => void): Request<SageMaker.Types.ListMonitoringExecutionsResponse, AWSError>;
  /**
   * Returns list of all monitoring job executions.
   */
  listMonitoringExecutions(callback?: (err: AWSError, data: SageMaker.Types.ListMonitoringExecutionsResponse) => void): Request<SageMaker.Types.ListMonitoringExecutionsResponse, AWSError>;
  /**
   * Returns list of all monitoring schedules.
   */
  listMonitoringSchedules(params: SageMaker.Types.ListMonitoringSchedulesRequest, callback?: (err: AWSError, data: SageMaker.Types.ListMonitoringSchedulesResponse) => void): Request<SageMaker.Types.ListMonitoringSchedulesResponse, AWSError>;
  /**
   * Returns list of all monitoring schedules.
   */
  listMonitoringSchedules(callback?: (err: AWSError, data: SageMaker.Types.ListMonitoringSchedulesResponse) => void): Request<SageMaker.Types.ListMonitoringSchedulesResponse, AWSError>;
  /**
   * Lists notebook instance lifestyle configurations created with the CreateNotebookInstanceLifecycleConfig API.
   */
  listNotebookInstanceLifecycleConfigs(params: SageMaker.Types.ListNotebookInstanceLifecycleConfigsInput, callback?: (err: AWSError, data: SageMaker.Types.ListNotebookInstanceLifecycleConfigsOutput) => void): Request<SageMaker.Types.ListNotebookInstanceLifecycleConfigsOutput, AWSError>;
  /**
   * Lists notebook instance lifestyle configurations created with the CreateNotebookInstanceLifecycleConfig API.
   */
  listNotebookInstanceLifecycleConfigs(callback?: (err: AWSError, data: SageMaker.Types.ListNotebookInstanceLifecycleConfigsOutput) => void): Request<SageMaker.Types.ListNotebookInstanceLifecycleConfigsOutput, AWSError>;
  /**
   * Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS Region. 
   */
  listNotebookInstances(params: SageMaker.Types.ListNotebookInstancesInput, callback?: (err: AWSError, data: SageMaker.Types.ListNotebookInstancesOutput) => void): Request<SageMaker.Types.ListNotebookInstancesOutput, AWSError>;
  /**
   * Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS Region. 
   */
  listNotebookInstances(callback?: (err: AWSError, data: SageMaker.Types.ListNotebookInstancesOutput) => void): Request<SageMaker.Types.ListNotebookInstancesOutput, AWSError>;
  /**
   * Lists processing jobs that satisfy various filters.
   */
  listProcessingJobs(params: SageMaker.Types.ListProcessingJobsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListProcessingJobsResponse) => void): Request<SageMaker.Types.ListProcessingJobsResponse, AWSError>;
  /**
   * Lists processing jobs that satisfy various filters.
   */
  listProcessingJobs(callback?: (err: AWSError, data: SageMaker.Types.ListProcessingJobsResponse) => void): Request<SageMaker.Types.ListProcessingJobsResponse, AWSError>;
  /**
   * Gets a list of the work teams that you are subscribed to in the AWS Marketplace. The list may be empty if no work team satisfies the filter specified in the NameContains parameter.
   */
  listSubscribedWorkteams(params: SageMaker.Types.ListSubscribedWorkteamsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListSubscribedWorkteamsResponse) => void): Request<SageMaker.Types.ListSubscribedWorkteamsResponse, AWSError>;
  /**
   * Gets a list of the work teams that you are subscribed to in the AWS Marketplace. The list may be empty if no work team satisfies the filter specified in the NameContains parameter.
   */
  listSubscribedWorkteams(callback?: (err: AWSError, data: SageMaker.Types.ListSubscribedWorkteamsResponse) => void): Request<SageMaker.Types.ListSubscribedWorkteamsResponse, AWSError>;
  /**
   * Returns the tags for the specified Amazon SageMaker resource.
   */
  listTags(params: SageMaker.Types.ListTagsInput, callback?: (err: AWSError, data: SageMaker.Types.ListTagsOutput) => void): Request<SageMaker.Types.ListTagsOutput, AWSError>;
  /**
   * Returns the tags for the specified Amazon SageMaker resource.
   */
  listTags(callback?: (err: AWSError, data: SageMaker.Types.ListTagsOutput) => void): Request<SageMaker.Types.ListTagsOutput, AWSError>;
  /**
   * Lists training jobs.
   */
  listTrainingJobs(params: SageMaker.Types.ListTrainingJobsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListTrainingJobsResponse) => void): Request<SageMaker.Types.ListTrainingJobsResponse, AWSError>;
  /**
   * Lists training jobs.
   */
  listTrainingJobs(callback?: (err: AWSError, data: SageMaker.Types.ListTrainingJobsResponse) => void): Request<SageMaker.Types.ListTrainingJobsResponse, AWSError>;
  /**
   * Gets a list of TrainingJobSummary objects that describe the training jobs that a hyperparameter tuning job launched.
   */
  listTrainingJobsForHyperParameterTuningJob(params: SageMaker.Types.ListTrainingJobsForHyperParameterTuningJobRequest, callback?: (err: AWSError, data: SageMaker.Types.ListTrainingJobsForHyperParameterTuningJobResponse) => void): Request<SageMaker.Types.ListTrainingJobsForHyperParameterTuningJobResponse, AWSError>;
  /**
   * Gets a list of TrainingJobSummary objects that describe the training jobs that a hyperparameter tuning job launched.
   */
  listTrainingJobsForHyperParameterTuningJob(callback?: (err: AWSError, data: SageMaker.Types.ListTrainingJobsForHyperParameterTuningJobResponse) => void): Request<SageMaker.Types.ListTrainingJobsForHyperParameterTuningJobResponse, AWSError>;
  /**
   * Lists transform jobs.
   */
  listTransformJobs(params: SageMaker.Types.ListTransformJobsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListTransformJobsResponse) => void): Request<SageMaker.Types.ListTransformJobsResponse, AWSError>;
  /**
   * Lists transform jobs.
   */
  listTransformJobs(callback?: (err: AWSError, data: SageMaker.Types.ListTransformJobsResponse) => void): Request<SageMaker.Types.ListTransformJobsResponse, AWSError>;
  /**
   * Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following:    ExperimentName     SourceArn     TrialName   
   */
  listTrialComponents(params: SageMaker.Types.ListTrialComponentsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListTrialComponentsResponse) => void): Request<SageMaker.Types.ListTrialComponentsResponse, AWSError>;
  /**
   * Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following:    ExperimentName     SourceArn     TrialName   
   */
  listTrialComponents(callback?: (err: AWSError, data: SageMaker.Types.ListTrialComponentsResponse) => void): Request<SageMaker.Types.ListTrialComponentsResponse, AWSError>;
  /**
   * Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.
   */
  listTrials(params: SageMaker.Types.ListTrialsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListTrialsResponse) => void): Request<SageMaker.Types.ListTrialsResponse, AWSError>;
  /**
   * Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.
   */
  listTrials(callback?: (err: AWSError, data: SageMaker.Types.ListTrialsResponse) => void): Request<SageMaker.Types.ListTrialsResponse, AWSError>;
  /**
   * Lists user profiles.
   */
  listUserProfiles(params: SageMaker.Types.ListUserProfilesRequest, callback?: (err: AWSError, data: SageMaker.Types.ListUserProfilesResponse) => void): Request<SageMaker.Types.ListUserProfilesResponse, AWSError>;
  /**
   * Lists user profiles.
   */
  listUserProfiles(callback?: (err: AWSError, data: SageMaker.Types.ListUserProfilesResponse) => void): Request<SageMaker.Types.ListUserProfilesResponse, AWSError>;
  /**
   * Use this operation to list all private and vendor workforces in an AWS Region. Note that you can only have one private workforce per AWS Region.
   */
  listWorkforces(params: SageMaker.Types.ListWorkforcesRequest, callback?: (err: AWSError, data: SageMaker.Types.ListWorkforcesResponse) => void): Request<SageMaker.Types.ListWorkforcesResponse, AWSError>;
  /**
   * Use this operation to list all private and vendor workforces in an AWS Region. Note that you can only have one private workforce per AWS Region.
   */
  listWorkforces(callback?: (err: AWSError, data: SageMaker.Types.ListWorkforcesResponse) => void): Request<SageMaker.Types.ListWorkforcesResponse, AWSError>;
  /**
   * Gets a list of private work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the NameContains parameter.
   */
  listWorkteams(params: SageMaker.Types.ListWorkteamsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListWorkteamsResponse) => void): Request<SageMaker.Types.ListWorkteamsResponse, AWSError>;
  /**
   * Gets a list of private work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the NameContains parameter.
   */
  listWorkteams(callback?: (err: AWSError, data: SageMaker.Types.ListWorkteamsResponse) => void): Request<SageMaker.Types.ListWorkteamsResponse, AWSError>;
  /**
   * Renders the UI template so that you can preview the worker's experience. 
   */
  renderUiTemplate(params: SageMaker.Types.RenderUiTemplateRequest, callback?: (err: AWSError, data: SageMaker.Types.RenderUiTemplateResponse) => void): Request<SageMaker.Types.RenderUiTemplateResponse, AWSError>;
  /**
   * Renders the UI template so that you can preview the worker's experience. 
   */
  renderUiTemplate(callback?: (err: AWSError, data: SageMaker.Types.RenderUiTemplateResponse) => void): Request<SageMaker.Types.RenderUiTemplateResponse, AWSError>;
  /**
   * Finds Amazon SageMaker resources that match a search query. Matching resources are returned as a list of SearchRecord objects in the response. You can sort the search results by any resource property in a ascending or descending order. You can query against the following value types: numeric, text, Boolean, and timestamp.
   */
  search(params: SageMaker.Types.SearchRequest, callback?: (err: AWSError, data: SageMaker.Types.SearchResponse) => void): Request<SageMaker.Types.SearchResponse, AWSError>;
  /**
   * Finds Amazon SageMaker resources that match a search query. Matching resources are returned as a list of SearchRecord objects in the response. You can sort the search results by any resource property in a ascending or descending order. You can query against the following value types: numeric, text, Boolean, and timestamp.
   */
  search(callback?: (err: AWSError, data: SageMaker.Types.SearchResponse) => void): Request<SageMaker.Types.SearchResponse, AWSError>;
  /**
   * Starts a previously stopped monitoring schedule.  New monitoring schedules are immediately started after creation. 
   */
  startMonitoringSchedule(params: SageMaker.Types.StartMonitoringScheduleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Starts a previously stopped monitoring schedule.  New monitoring schedules are immediately started after creation. 
   */
  startMonitoringSchedule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the notebook instance status to InService. A notebook instance's status must be InService before you can connect to your Jupyter notebook. 
   */
  startNotebookInstance(params: SageMaker.Types.StartNotebookInstanceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the notebook instance status to InService. A notebook instance's status must be InService before you can connect to your Jupyter notebook. 
   */
  startNotebookInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * A method for forcing the termination of a running job.
   */
  stopAutoMLJob(params: SageMaker.Types.StopAutoMLJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * A method for forcing the termination of a running job.
   */
  stopAutoMLJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a model compilation job.  To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal. When it receives a StopCompilationJob request, Amazon SageMaker changes the CompilationJobSummary$CompilationJobStatus of the job to Stopping. After Amazon SageMaker stops the job, it sets the CompilationJobSummary$CompilationJobStatus to Stopped. 
   */
  stopCompilationJob(params: SageMaker.Types.StopCompilationJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a model compilation job.  To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal. When it receives a StopCompilationJob request, Amazon SageMaker changes the CompilationJobSummary$CompilationJobStatus of the job to Stopping. After Amazon SageMaker stops the job, it sets the CompilationJobSummary$CompilationJobStatus to Stopped. 
   */
  stopCompilationJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched. All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the Stopped state, it releases all reserved resources for the tuning job.
   */
  stopHyperParameterTuningJob(params: SageMaker.Types.StopHyperParameterTuningJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched. All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the Stopped state, it releases all reserved resources for the tuning job.
   */
  stopHyperParameterTuningJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.
   */
  stopLabelingJob(params: SageMaker.Types.StopLabelingJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.
   */
  stopLabelingJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a previously started monitoring schedule.
   */
  stopMonitoringSchedule(params: SageMaker.Types.StopMonitoringScheduleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a previously started monitoring schedule.
   */
  stopMonitoringSchedule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume. Amazon SageMaker stops charging you for the ML compute instance when you call StopNotebookInstance. To access data on the ML storage volume for a notebook instance that has been terminated, call the StartNotebookInstance API. StartNotebookInstance launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. 
   */
  stopNotebookInstance(params: SageMaker.Types.StopNotebookInstanceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume. Amazon SageMaker stops charging you for the ML compute instance when you call StopNotebookInstance. To access data on the ML storage volume for a notebook instance that has been terminated, call the StartNotebookInstance API. StartNotebookInstance launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. 
   */
  stopNotebookInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a processing job.
   */
  stopProcessingJob(params: SageMaker.Types.StopProcessingJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a processing job.
   */
  stopProcessingJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost.  When it receives a StopTrainingJob request, Amazon SageMaker changes the status of the job to Stopping. After Amazon SageMaker stops the job, it sets the status to Stopped.
   */
  stopTrainingJob(params: SageMaker.Types.StopTrainingJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost.  When it receives a StopTrainingJob request, Amazon SageMaker changes the status of the job to Stopping. After Amazon SageMaker stops the job, it sets the status to Stopped.
   */
  stopTrainingJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a transform job. When Amazon SageMaker receives a StopTransformJob request, the status of the job changes to Stopping. After Amazon SageMaker stops the job, the status is set to Stopped. When you stop a transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.
   */
  stopTransformJob(params: SageMaker.Types.StopTransformJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a transform job. When Amazon SageMaker receives a StopTransformJob request, the status of the job changes to Stopping. After Amazon SageMaker stops the job, the status is set to Stopped. When you stop a transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.
   */
  stopTransformJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the specified Git repository with the specified values.
   */
  updateCodeRepository(params: SageMaker.Types.UpdateCodeRepositoryInput, callback?: (err: AWSError, data: SageMaker.Types.UpdateCodeRepositoryOutput) => void): Request<SageMaker.Types.UpdateCodeRepositoryOutput, AWSError>;
  /**
   * Updates the specified Git repository with the specified values.
   */
  updateCodeRepository(callback?: (err: AWSError, data: SageMaker.Types.UpdateCodeRepositoryOutput) => void): Request<SageMaker.Types.UpdateCodeRepositoryOutput, AWSError>;
  /**
   * Updates the default settings for new user profiles in the domain.
   */
  updateDomain(params: SageMaker.Types.UpdateDomainRequest, callback?: (err: AWSError, data: SageMaker.Types.UpdateDomainResponse) => void): Request<SageMaker.Types.UpdateDomainResponse, AWSError>;
  /**
   * Updates the default settings for new user profiles in the domain.
   */
  updateDomain(callback?: (err: AWSError, data: SageMaker.Types.UpdateDomainResponse) => void): Request<SageMaker.Types.UpdateDomainResponse, AWSError>;
  /**
   * Deploys the new EndpointConfig specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous EndpointConfig (there is no availability loss).  When Amazon SageMaker receives the request, it sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API.   You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. To update an endpoint, you must create a new EndpointConfig. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges. 
   */
  updateEndpoint(params: SageMaker.Types.UpdateEndpointInput, callback?: (err: AWSError, data: SageMaker.Types.UpdateEndpointOutput) => void): Request<SageMaker.Types.UpdateEndpointOutput, AWSError>;
  /**
   * Deploys the new EndpointConfig specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous EndpointConfig (there is no availability loss).  When Amazon SageMaker receives the request, it sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API.   You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. To update an endpoint, you must create a new EndpointConfig. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges. 
   */
  updateEndpoint(callback?: (err: AWSError, data: SageMaker.Types.UpdateEndpointOutput) => void): Request<SageMaker.Types.UpdateEndpointOutput, AWSError>;
  /**
   * Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, Amazon SageMaker sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API. 
   */
  updateEndpointWeightsAndCapacities(params: SageMaker.Types.UpdateEndpointWeightsAndCapacitiesInput, callback?: (err: AWSError, data: SageMaker.Types.UpdateEndpointWeightsAndCapacitiesOutput) => void): Request<SageMaker.Types.UpdateEndpointWeightsAndCapacitiesOutput, AWSError>;
  /**
   * Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, Amazon SageMaker sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API. 
   */
  updateEndpointWeightsAndCapacities(callback?: (err: AWSError, data: SageMaker.Types.UpdateEndpointWeightsAndCapacitiesOutput) => void): Request<SageMaker.Types.UpdateEndpointWeightsAndCapacitiesOutput, AWSError>;
  /**
   * Adds, updates, or removes the description of an experiment. Updates the display name of an experiment.
   */
  updateExperiment(params: SageMaker.Types.UpdateExperimentRequest, callback?: (err: AWSError, data: SageMaker.Types.UpdateExperimentResponse) => void): Request<SageMaker.Types.UpdateExperimentResponse, AWSError>;
  /**
   * Adds, updates, or removes the description of an experiment. Updates the display name of an experiment.
   */
  updateExperiment(callback?: (err: AWSError, data: SageMaker.Types.UpdateExperimentResponse) => void): Request<SageMaker.Types.UpdateExperimentResponse, AWSError>;
  /**
   * Updates a previously created schedule.
   */
  updateMonitoringSchedule(params: SageMaker.Types.UpdateMonitoringScheduleRequest, callback?: (err: AWSError, data: SageMaker.Types.UpdateMonitoringScheduleResponse) => void): Request<SageMaker.Types.UpdateMonitoringScheduleResponse, AWSError>;
  /**
   * Updates a previously created schedule.
   */
  updateMonitoringSchedule(callback?: (err: AWSError, data: SageMaker.Types.UpdateMonitoringScheduleResponse) => void): Request<SageMaker.Types.UpdateMonitoringScheduleResponse, AWSError>;
  /**
   * Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements.
   */
  updateNotebookInstance(params: SageMaker.Types.UpdateNotebookInstanceInput, callback?: (err: AWSError, data: SageMaker.Types.UpdateNotebookInstanceOutput) => void): Request<SageMaker.Types.UpdateNotebookInstanceOutput, AWSError>;
  /**
   * Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements.
   */
  updateNotebookInstance(callback?: (err: AWSError, data: SageMaker.Types.UpdateNotebookInstanceOutput) => void): Request<SageMaker.Types.UpdateNotebookInstanceOutput, AWSError>;
  /**
   * Updates a notebook instance lifecycle configuration created with the CreateNotebookInstanceLifecycleConfig API.
   */
  updateNotebookInstanceLifecycleConfig(params: SageMaker.Types.UpdateNotebookInstanceLifecycleConfigInput, callback?: (err: AWSError, data: SageMaker.Types.UpdateNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.UpdateNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Updates a notebook instance lifecycle configuration created with the CreateNotebookInstanceLifecycleConfig API.
   */
  updateNotebookInstanceLifecycleConfig(callback?: (err: AWSError, data: SageMaker.Types.UpdateNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.UpdateNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Updates the display name of a trial.
   */
  updateTrial(params: SageMaker.Types.UpdateTrialRequest, callback?: (err: AWSError, data: SageMaker.Types.UpdateTrialResponse) => void): Request<SageMaker.Types.UpdateTrialResponse, AWSError>;
  /**
   * Updates the display name of a trial.
   */
  updateTrial(callback?: (err: AWSError, data: SageMaker.Types.UpdateTrialResponse) => void): Request<SageMaker.Types.UpdateTrialResponse, AWSError>;
  /**
   * Updates one or more properties of a trial component.
   */
  updateTrialComponent(params: SageMaker.Types.UpdateTrialComponentRequest, callback?: (err: AWSError, data: SageMaker.Types.UpdateTrialComponentResponse) => void): Request<SageMaker.Types.UpdateTrialComponentResponse, AWSError>;
  /**
   * Updates one or more properties of a trial component.
   */
  updateTrialComponent(callback?: (err: AWSError, data: SageMaker.Types.UpdateTrialComponentResponse) => void): Request<SageMaker.Types.UpdateTrialComponentResponse, AWSError>;
  /**
   * Updates a user profile.
   */
  updateUserProfile(params: SageMaker.Types.UpdateUserProfileRequest, callback?: (err: AWSError, data: SageMaker.Types.UpdateUserProfileResponse) => void): Request<SageMaker.Types.UpdateUserProfileResponse, AWSError>;
  /**
   * Updates a user profile.
   */
  updateUserProfile(callback?: (err: AWSError, data: SageMaker.Types.UpdateUserProfileResponse) => void): Request<SageMaker.Types.UpdateUserProfileResponse, AWSError>;
  /**
   * Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.  Use SourceIpConfig to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten CIDRs. By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a Not Found error message on the worker portal. Use OidcConfig to update the configuration of a workforce created using your own OIDC IdP.   You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the operation.  After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the operation.  This operation only applies to private workforces. 
   */
  updateWorkforce(params: SageMaker.Types.UpdateWorkforceRequest, callback?: (err: AWSError, data: SageMaker.Types.UpdateWorkforceResponse) => void): Request<SageMaker.Types.UpdateWorkforceResponse, AWSError>;
  /**
   * Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.  Use SourceIpConfig to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten CIDRs. By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a Not Found error message on the worker portal. Use OidcConfig to update the configuration of a workforce created using your own OIDC IdP.   You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the operation.  After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the operation.  This operation only applies to private workforces. 
   */
  updateWorkforce(callback?: (err: AWSError, data: SageMaker.Types.UpdateWorkforceResponse) => void): Request<SageMaker.Types.UpdateWorkforceResponse, AWSError>;
  /**
   * Updates an existing work team with new member definitions or description.
   */
  updateWorkteam(params: SageMaker.Types.UpdateWorkteamRequest, callback?: (err: AWSError, data: SageMaker.Types.UpdateWorkteamResponse) => void): Request<SageMaker.Types.UpdateWorkteamResponse, AWSError>;
  /**
   * Updates an existing work team with new member definitions or description.
   */
  updateWorkteam(callback?: (err: AWSError, data: SageMaker.Types.UpdateWorkteamResponse) => void): Request<SageMaker.Types.UpdateWorkteamResponse, AWSError>;
  /**
   * Waits for the notebookInstanceInService state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceInService", params: SageMaker.Types.DescribeNotebookInstanceInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the notebookInstanceInService state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceInService", callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the notebookInstanceStopped state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceStopped", params: SageMaker.Types.DescribeNotebookInstanceInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the notebookInstanceStopped state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceStopped", callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the notebookInstanceDeleted state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceDeleted", params: SageMaker.Types.DescribeNotebookInstanceInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the notebookInstanceDeleted state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceDeleted", callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the trainingJobCompletedOrStopped state by periodically calling the underlying SageMaker.describeTrainingJoboperation every 120 seconds (at most 180 times).
   */
  waitFor(state: "trainingJobCompletedOrStopped", params: SageMaker.Types.DescribeTrainingJobRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SageMaker.Types.DescribeTrainingJobResponse) => void): Request<SageMaker.Types.DescribeTrainingJobResponse, AWSError>;
  /**
   * Waits for the trainingJobCompletedOrStopped state by periodically calling the underlying SageMaker.describeTrainingJoboperation every 120 seconds (at most 180 times).
   */
  waitFor(state: "trainingJobCompletedOrStopped", callback?: (err: AWSError, data: SageMaker.Types.DescribeTrainingJobResponse) => void): Request<SageMaker.Types.DescribeTrainingJobResponse, AWSError>;
  /**
   * Waits for the endpointInService state by periodically calling the underlying SageMaker.describeEndpointoperation every 30 seconds (at most 120 times).
   */
  waitFor(state: "endpointInService", params: SageMaker.Types.DescribeEndpointInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointOutput) => void): Request<SageMaker.Types.DescribeEndpointOutput, AWSError>;
  /**
   * Waits for the endpointInService state by periodically calling the underlying SageMaker.describeEndpointoperation every 30 seconds (at most 120 times).
   */
  waitFor(state: "endpointInService", callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointOutput) => void): Request<SageMaker.Types.DescribeEndpointOutput, AWSError>;
  /**
   * Waits for the endpointDeleted state by periodically calling the underlying SageMaker.describeEndpointoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "endpointDeleted", params: SageMaker.Types.DescribeEndpointInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointOutput) => void): Request<SageMaker.Types.DescribeEndpointOutput, AWSError>;
  /**
   * Waits for the endpointDeleted state by periodically calling the underlying SageMaker.describeEndpointoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "endpointDeleted", callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointOutput) => void): Request<SageMaker.Types.DescribeEndpointOutput, AWSError>;
  /**
   * Waits for the transformJobCompletedOrStopped state by periodically calling the underlying SageMaker.describeTransformJoboperation every 60 seconds (at most 60 times).
   */
  waitFor(state: "transformJobCompletedOrStopped", params: SageMaker.Types.DescribeTransformJobRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SageMaker.Types.DescribeTransformJobResponse) => void): Request<SageMaker.Types.DescribeTransformJobResponse, AWSError>;
  /**
   * Waits for the transformJobCompletedOrStopped state by periodically calling the underlying SageMaker.describeTransformJoboperation every 60 seconds (at most 60 times).
   */
  waitFor(state: "transformJobCompletedOrStopped", callback?: (err: AWSError, data: SageMaker.Types.DescribeTransformJobResponse) => void): Request<SageMaker.Types.DescribeTransformJobResponse, AWSError>;
  /**
   * Waits for the processingJobCompletedOrStopped state by periodically calling the underlying SageMaker.describeProcessingJoboperation every 60 seconds (at most 60 times).
   */
  waitFor(state: "processingJobCompletedOrStopped", params: SageMaker.Types.DescribeProcessingJobRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SageMaker.Types.DescribeProcessingJobResponse) => void): Request<SageMaker.Types.DescribeProcessingJobResponse, AWSError>;
  /**
   * Waits for the processingJobCompletedOrStopped state by periodically calling the underlying SageMaker.describeProcessingJoboperation every 60 seconds (at most 60 times).
   */
  waitFor(state: "processingJobCompletedOrStopped", callback?: (err: AWSError, data: SageMaker.Types.DescribeProcessingJobResponse) => void): Request<SageMaker.Types.DescribeProcessingJobResponse, AWSError>;
}
declare namespace SageMaker {
  export type Accept = string;
  export type AccountId = string;
  export interface AddTagsInput {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to tag.
     */
    ResourceArn: ResourceArn;
    /**
     * An array of Tag objects. Each tag is a key-value pair. Only the key parameter is required. If you don't specify a value, Amazon SageMaker sets the value to an empty string. 
     */
    Tags: TagList;
  }
  export interface AddTagsOutput {
    /**
     * A list of tags associated with the Amazon SageMaker resource.
     */
    Tags?: TagList;
  }
  export type AdditionalCodeRepositoryNamesOrUrls = CodeRepositoryNameOrUrl[];
  export type AlgorithmArn = string;
  export type AlgorithmImage = string;
  export type AlgorithmSortBy = "Name"|"CreationTime"|string;
  export interface AlgorithmSpecification {
    /**
     * The registry path of the Docker image that contains the training algorithm. For information about docker registry paths for built-in algorithms, see Algorithms Provided by Amazon SageMaker: Common Parameters. Amazon SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see Using Your Own Algorithms with Amazon SageMaker.
     */
    TrainingImage?: AlgorithmImage;
    /**
     * The name of the algorithm resource to use for the training job. This must be an algorithm resource that you created or subscribe to on AWS Marketplace. If you specify a value for this parameter, you can't specify a value for TrainingImage.
     */
    AlgorithmName?: ArnOrName;
    /**
     * The input mode that the algorithm supports. For the input modes that Amazon SageMaker algorithms support, see Algorithms. If an algorithm supports the File input mode, Amazon SageMaker downloads the training data from S3 to the provisioned ML storage Volume, and mounts the directory to docker volume for training container. If an algorithm supports the Pipe input mode, Amazon SageMaker streams data directly from S3 to the container.   In File mode, make sure you provision ML storage volume with sufficient capacity to accommodate the data download from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container use ML storage volume to also store intermediate information, if any.   For distributed algorithms using File mode, training data is distributed uniformly, and your training duration is predictable if the input data objects size is approximately same. Amazon SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed where one host in a training cluster is overloaded, thus becoming bottleneck in training. 
     */
    TrainingInputMode: TrainingInputMode;
    /**
     * A list of metric definition objects. Each object specifies the metric name and regular expressions used to parse algorithm logs. Amazon SageMaker publishes each metric to Amazon CloudWatch.
     */
    MetricDefinitions?: MetricDefinitionList;
    /**
     * To generate and save time-series metrics during training, set to true. The default is false and time-series metrics aren't generated except in the following cases:   You use one of the Amazon SageMaker built-in algorithms   You use one of the following Prebuilt Amazon SageMaker Docker Images:   Tensorflow (version &gt;= 1.15)   MXNet (version &gt;= 1.6)   PyTorch (version &gt;= 1.3)     You specify at least one MetricDefinition   
     */
    EnableSageMakerMetricsTimeSeries?: Boolean;
  }
  export type AlgorithmStatus = "Pending"|"InProgress"|"Completed"|"Failed"|"Deleting"|string;
  export interface AlgorithmStatusDetails {
    /**
     * The status of algorithm validation.
     */
    ValidationStatuses?: AlgorithmStatusItemList;
    /**
     * The status of the scan of the algorithm's Docker image container.
     */
    ImageScanStatuses?: AlgorithmStatusItemList;
  }
  export interface AlgorithmStatusItem {
    /**
     * The name of the algorithm for which the overall status is being reported.
     */
    Name: EntityName;
    /**
     * The current status.
     */
    Status: DetailedAlgorithmStatus;
    /**
     * if the overall status is Failed, the reason for the failure.
     */
    FailureReason?: String;
  }
  export type AlgorithmStatusItemList = AlgorithmStatusItem[];
  export interface AlgorithmSummary {
    /**
     * The name of the algorithm that is described by the summary.
     */
    AlgorithmName: EntityName;
    /**
     * The Amazon Resource Name (ARN) of the algorithm.
     */
    AlgorithmArn: AlgorithmArn;
    /**
     * A brief description of the algorithm.
     */
    AlgorithmDescription?: EntityDescription;
    /**
     * A timestamp that shows when the algorithm was created.
     */
    CreationTime: CreationTime;
    /**
     * The overall status of the algorithm.
     */
    AlgorithmStatus: AlgorithmStatus;
  }
  export type AlgorithmSummaryList = AlgorithmSummary[];
  export interface AlgorithmValidationProfile {
    /**
     * The name of the profile for the algorithm. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).
     */
    ProfileName: EntityName;
    /**
     * The TrainingJobDefinition object that describes the training job that Amazon SageMaker runs to validate your algorithm.
     */
    TrainingJobDefinition: TrainingJobDefinition;
    /**
     * The TransformJobDefinition object that describes the transform job that Amazon SageMaker runs to validate your algorithm.
     */
    TransformJobDefinition?: TransformJobDefinition;
  }
  export type AlgorithmValidationProfiles = AlgorithmValidationProfile[];
  export interface AlgorithmValidationSpecification {
    /**
     * The IAM roles that Amazon SageMaker uses to run the training jobs.
     */
    ValidationRole: RoleArn;
    /**
     * An array of AlgorithmValidationProfile objects, each of which specifies a training job and batch transform job that Amazon SageMaker runs to validate your algorithm.
     */
    ValidationProfiles: AlgorithmValidationProfiles;
  }
  export interface AnnotationConsolidationConfig {
    /**
     * The Amazon Resource Name (ARN) of a Lambda function implements the logic for annotation consolidation and to process output data. This parameter is required for all labeling jobs. For built-in task types, use one of the following Amazon SageMaker Ground Truth Lambda function ARNs for AnnotationConsolidationLambdaArn. For custom labeling workflows, see Post-annotation Lambda.   Bounding box - Finds the most similar boxes from different workers based on the Jaccard index of the boxes.    arn:aws:lambda:us-east-1:432418664414:function:ACS-BoundingBox   arn:aws:lambda:us-east-2:266458841044:function:ACS-BoundingBox   arn:aws:lambda:us-west-2:081040173940:function:ACS-BoundingBox   arn:aws:lambda:eu-west-1:568282634449:function:ACS-BoundingBox   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-BoundingBox   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-BoundingBox   arn:aws:lambda:ap-south-1:565803892007:function:ACS-BoundingBox   arn:aws:lambda:eu-central-1:203001061592:function:ACS-BoundingBox   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-BoundingBox   arn:aws:lambda:eu-west-2:487402164563:function:ACS-BoundingBox   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-BoundingBox   arn:aws:lambda:ca-central-1:918755190332:function:ACS-BoundingBox     Image classification - Uses a variant of the Expectation Maximization approach to estimate the true class of an image based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClass   arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClass   arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClass   arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClass   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClass   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClass   arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClass   arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClass   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClass   arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClass   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClass   arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClass     Multi-label image classification - Uses a variant of the Expectation Maximization approach to estimate the true classes of an image based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClassMultiLabel   arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClassMultiLabel     Semantic segmentation - Treats each pixel in an image as a multi-class classification and treats pixel annotations from workers as "votes" for the correct label.    arn:aws:lambda:us-east-1:432418664414:function:ACS-SemanticSegmentation   arn:aws:lambda:us-east-2:266458841044:function:ACS-SemanticSegmentation   arn:aws:lambda:us-west-2:081040173940:function:ACS-SemanticSegmentation   arn:aws:lambda:eu-west-1:568282634449:function:ACS-SemanticSegmentation   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-SemanticSegmentation   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-SemanticSegmentation   arn:aws:lambda:ap-south-1:565803892007:function:ACS-SemanticSegmentation   arn:aws:lambda:eu-central-1:203001061592:function:ACS-SemanticSegmentation   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-SemanticSegmentation   arn:aws:lambda:eu-west-2:487402164563:function:ACS-SemanticSegmentation   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-SemanticSegmentation   arn:aws:lambda:ca-central-1:918755190332:function:ACS-SemanticSegmentation     Text classification - Uses a variant of the Expectation Maximization approach to estimate the true class of text based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClass   arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClass   arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClass   arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClass   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClass   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClass   arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClass   arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClass   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClass   arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClass   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClass   arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClass     Multi-label text classification - Uses a variant of the Expectation Maximization approach to estimate the true classes of text based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClassMultiLabel   arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClassMultiLabel     Named entity recognition - Groups similar selections and calculates aggregate boundaries, resolving to most-assigned label.    arn:aws:lambda:us-east-1:432418664414:function:ACS-NamedEntityRecognition   arn:aws:lambda:us-east-2:266458841044:function:ACS-NamedEntityRecognition   arn:aws:lambda:us-west-2:081040173940:function:ACS-NamedEntityRecognition   arn:aws:lambda:eu-west-1:568282634449:function:ACS-NamedEntityRecognition   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-NamedEntityRecognition   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-NamedEntityRecognition   arn:aws:lambda:ap-south-1:565803892007:function:ACS-NamedEntityRecognition   arn:aws:lambda:eu-central-1:203001061592:function:ACS-NamedEntityRecognition   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-NamedEntityRecognition   arn:aws:lambda:eu-west-2:487402164563:function:ACS-NamedEntityRecognition   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-NamedEntityRecognition   arn:aws:lambda:ca-central-1:918755190332:function:ACS-NamedEntityRecognition     Named entity recognition - Groups similar selections and calculates aggregate boundaries, resolving to most-assigned label.    arn:aws:lambda:us-east-1:432418664414:function:ACS-NamedEntityRecognition   arn:aws:lambda:us-east-2:266458841044:function:ACS-NamedEntityRecognition   arn:aws:lambda:us-west-2:081040173940:function:ACS-NamedEntityRecognition   arn:aws:lambda:eu-west-1:568282634449:function:ACS-NamedEntityRecognition   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-NamedEntityRecognition   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-NamedEntityRecognition   arn:aws:lambda:ap-south-1:565803892007:function:ACS-NamedEntityRecognition   arn:aws:lambda:eu-central-1:203001061592:function:ACS-NamedEntityRecognition   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-NamedEntityRecognition   arn:aws:lambda:eu-west-2:487402164563:function:ACS-NamedEntityRecognition   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-NamedEntityRecognition   arn:aws:lambda:ca-central-1:918755190332:function:ACS-NamedEntityRecognition     Video Classification - Use this task type when you need workers to classify videos using predefined labels that you specify. Workers are shown videos and are asked to choose one label for each video.    arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoMultiClass   arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoMultiClass   arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoMultiClass   arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoMultiClass   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoMultiClass   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoMultiClass   arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoMultiClass   arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoMultiClass   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoMultiClass   arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoMultiClass   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoMultiClass   arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoMultiClass     Video Frame Object Detection - Use this task type to have workers identify and locate objects in a sequence of video frames (images extracted from a video) using bounding boxes. For example, you can use this task to ask workers to identify and localize various objects in a series of video frames, such as cars, bikes, and pedestrians.    arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoObjectDetection   arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoObjectDetection   arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoObjectDetection   arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoObjectDetection   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoObjectDetection   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoObjectDetection   arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoObjectDetection   arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoObjectDetection   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoObjectDetection   arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoObjectDetection   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoObjectDetection   arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoObjectDetection     Video Frame Object Tracking - Use this task type to have workers track the movement of objects in a sequence of video frames (images extracted from a video) using bounding boxes. For example, you can use this task to ask workers to track the movement of objects, such as cars, bikes, and pedestrians.     arn:aws:lambda:us-east-1:432418664414:function:ACS-VideoObjectTracking   arn:aws:lambda:us-east-2:266458841044:function:ACS-VideoObjectTracking   arn:aws:lambda:us-west-2:081040173940:function:ACS-VideoObjectTracking   arn:aws:lambda:eu-west-1:568282634449:function:ACS-VideoObjectTracking   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VideoObjectTracking   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VideoObjectTracking   arn:aws:lambda:ap-south-1:565803892007:function:ACS-VideoObjectTracking   arn:aws:lambda:eu-central-1:203001061592:function:ACS-VideoObjectTracking   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VideoObjectTracking   arn:aws:lambda:eu-west-2:487402164563:function:ACS-VideoObjectTracking   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VideoObjectTracking   arn:aws:lambda:ca-central-1:918755190332:function:ACS-VideoObjectTracking     3D point cloud object detection - Use this task type when you want workers to classify objects in a 3D point cloud by drawing 3D cuboids around objects. For example, you can use this task type to ask workers to identify different types of objects in a point cloud, such as cars, bikes, and pedestrians.    arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudObjectDetection   arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudObjectDetection     3D point cloud object tracking - Use this task type when you want workers to draw 3D cuboids around objects that appear in a sequence of 3D point cloud frames. For example, you can use this task type to ask workers to track the movement of vehicles across multiple point cloud frames.     arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudObjectTracking   arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudObjectTracking     3D point cloud semantic segmentation - Use this task type when you want workers to create a point-level semantic segmentation masks by painting objects in a 3D point cloud using different colors where each color is assigned to one of the classes you specify.    arn:aws:lambda:us-east-1:432418664414:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:us-east-2:266458841044:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:us-west-2:081040173940:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:eu-west-1:568282634449:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:ap-south-1:565803892007:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:eu-central-1:203001061592:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:eu-west-2:487402164563:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-3DPointCloudSemanticSegmentation   arn:aws:lambda:ca-central-1:918755190332:function:ACS-3DPointCloudSemanticSegmentation     Use the following ARNs for Label Verification and Adjustment Jobs  Use label verification and adjustment jobs to review and adjust labels. To learn more, see Verify and Adjust Labels .  Semantic segmentation adjustment - Treats each pixel in an image as a multi-class classification and treats pixel adjusted annotations from workers as "votes" for the correct label.    arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentSemanticSegmentation   arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentSemanticSegmentation     Semantic segmentation verification - Uses a variant of the Expectation Maximization approach to estimate the true class of verification judgment for semantic segmentation labels based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationSemanticSegmentation   arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationSemanticSegmentation     Bounding box verification - Uses a variant of the Expectation Maximization approach to estimate the true class of verification judgement for bounding box labels based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationBoundingBox   arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationBoundingBox   arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationBoundingBox   arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationBoundingBox   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationBoundingBox   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationBoundingBox   arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationBoundingBox   arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationBoundingBox   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationBoundingBox   arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationBoundingBox   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationBoundingBox   arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationBoundingBox     Bounding box adjustment - Finds the most similar boxes from different workers based on the Jaccard index of the adjusted annotations.    arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentBoundingBox   arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentBoundingBox     Video Frame Object Detection Adjustment - Use this task type when you want workers to adjust bounding boxes that workers have added to video frames to classify and localize objects in a sequence of video frames.    arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentVideoObjectDetection   arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentVideoObjectDetection     Video Frame Object Tracking Adjustment - Use this task type when you want workers to adjust bounding boxes that workers have added to video frames to track object movement across a sequence of video frames.    arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentVideoObjectTracking   arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentVideoObjectTracking     3D point cloud object detection adjustment - Use this task type when you want workers to adjust 3D cuboids around objects in a 3D point cloud.     arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectDetection   arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectDetection     3D point cloud object tracking adjustment - Use this task type when you want workers to adjust 3D cuboids around objects that appear in a sequence of 3D point cloud frames.    arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudObjectTracking   arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudObjectTracking     3D point cloud semantic segmentation adjustment - Use this task type when you want workers to adjust a point-level semantic segmentation masks using a paint tool.    arn:aws:lambda:us-east-1:432418664414:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:us-east-2:266458841044:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:us-west-2:081040173940:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:eu-west-1:568282634449:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:ap-south-1:565803892007:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:eu-central-1:203001061592:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:eu-west-2:487402164563:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-Adjustment3DPointCloudSemanticSegmentation   arn:aws:lambda:ca-central-1:918755190332:function:ACS-Adjustment3DPointCloudSemanticSegmentation   
     */
    AnnotationConsolidationLambdaArn: LambdaFunctionArn;
  }
  export type AppArn = string;
  export interface AppDetails {
    /**
     * The domain ID.
     */
    DomainId?: DomainId;
    /**
     * The user profile name.
     */
    UserProfileName?: UserProfileName;
    /**
     * The type of app.
     */
    AppType?: AppType;
    /**
     * The name of the app.
     */
    AppName?: AppName;
    /**
     * The status.
     */
    Status?: AppStatus;
    /**
     * The creation time.
     */
    CreationTime?: CreationTime;
  }
  export type AppInstanceType = "system"|"ml.t3.micro"|"ml.t3.small"|"ml.t3.medium"|"ml.t3.large"|"ml.t3.xlarge"|"ml.t3.2xlarge"|"ml.m5.large"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.8xlarge"|"ml.m5.12xlarge"|"ml.m5.16xlarge"|"ml.m5.24xlarge"|"ml.c5.large"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.12xlarge"|"ml.c5.18xlarge"|"ml.c5.24xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|"ml.g4dn.xlarge"|"ml.g4dn.2xlarge"|"ml.g4dn.4xlarge"|"ml.g4dn.8xlarge"|"ml.g4dn.12xlarge"|"ml.g4dn.16xlarge"|string;
  export type AppList = AppDetails[];
  export type AppName = string;
  export type AppSortKey = "CreationTime"|string;
  export interface AppSpecification {
    /**
     * The container image to be run by the processing job.
     */
    ImageUri: ImageUri;
    /**
     * The entrypoint for a container used to run a processing job.
     */
    ContainerEntrypoint?: ContainerEntrypoint;
    /**
     * The arguments for a container used to run a processing job.
     */
    ContainerArguments?: ContainerArguments;
  }
  export type AppStatus = "Deleted"|"Deleting"|"Failed"|"InService"|"Pending"|string;
  export type AppType = "JupyterServer"|"KernelGateway"|"TensorBoard"|string;
  export type ArnOrName = string;
  export type AssemblyType = "None"|"Line"|string;
  export interface AssociateTrialComponentRequest {
    /**
     * The name of the component to associated with the trial.
     */
    TrialComponentName: ExperimentEntityName;
    /**
     * The name of the trial to associate with.
     */
    TrialName: ExperimentEntityName;
  }
  export interface AssociateTrialComponentResponse {
    /**
     * The ARN of the trial component.
     */
    TrialComponentArn?: TrialComponentArn;
    /**
     * The Amazon Resource Name (ARN) of the trial.
     */
    TrialArn?: TrialArn;
  }
  export type AttributeName = string;
  export type AttributeNames = AttributeName[];
  export type AuthMode = "SSO"|"IAM"|string;
  export interface AutoMLCandidate {
    /**
     * The candidate name.
     */
    CandidateName: CandidateName;
    FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric;
    /**
     * The objective status.
     */
    ObjectiveStatus: ObjectiveStatus;
    /**
     * The candidate's steps.
     */
    CandidateSteps: CandidateSteps;
    /**
     * The candidate's status.
     */
    CandidateStatus: CandidateStatus;
    /**
     * The inference containers.
     */
    InferenceContainers?: AutoMLContainerDefinitions;
    /**
     * The creation time.
     */
    CreationTime: Timestamp;
    /**
     * The end time.
     */
    EndTime?: Timestamp;
    /**
     * The last modified time.
     */
    LastModifiedTime: Timestamp;
    /**
     * The failure reason.
     */
    FailureReason?: AutoMLFailureReason;
  }
  export interface AutoMLCandidateStep {
    /**
     * Whether the Candidate is at the transform, training, or processing step.
     */
    CandidateStepType: CandidateStepType;
    /**
     * The ARN for the Candidate's step.
     */
    CandidateStepArn: CandidateStepArn;
    /**
     * The name for the Candidate's step.
     */
    CandidateStepName: CandidateStepName;
  }
  export type AutoMLCandidates = AutoMLCandidate[];
  export interface AutoMLChannel {
    /**
     * The data source.
     */
    DataSource: AutoMLDataSource;
    /**
     * You can use Gzip or None. The default value is None.
     */
    CompressionType?: CompressionType;
    /**
     * The name of the target variable in supervised learning, a.k.a. 'y'.
     */
    TargetAttributeName: TargetAttributeName;
  }
  export interface AutoMLContainerDefinition {
    /**
     * The ECR path of the container. Refer to ContainerDefinition for more details.
     */
    Image: ContainerImage;
    /**
     * The location of the model artifacts. Refer to ContainerDefinition for more details.
     */
    ModelDataUrl: Url;
    /**
     * Environment variables to set in the container. Refer to ContainerDefinition for more details.
     */
    Environment?: EnvironmentMap;
  }
  export type AutoMLContainerDefinitions = AutoMLContainerDefinition[];
  export interface AutoMLDataSource {
    /**
     * The Amazon S3 location of the input data.  The input data must be in CSV format and contain at least 1000 rows. 
     */
    S3DataSource: AutoMLS3DataSource;
  }
  export type AutoMLFailureReason = string;
  export type AutoMLInputDataConfig = AutoMLChannel[];
  export type AutoMLJobArn = string;
  export interface AutoMLJobArtifacts {
    /**
     * The URL to the notebook location.
     */
    CandidateDefinitionNotebookLocation?: CandidateDefinitionNotebookLocation;
    /**
     * The URL to the notebook location.
     */
    DataExplorationNotebookLocation?: DataExplorationNotebookLocation;
  }
  export interface AutoMLJobCompletionCriteria {
    /**
     * The maximum number of times a training job is allowed to run.
     */
    MaxCandidates?: MaxCandidates;
    /**
     * The maximum time, in seconds, a job is allowed to run.
     */
    MaxRuntimePerTrainingJobInSeconds?: MaxRuntimePerTrainingJobInSeconds;
    /**
     * The maximum time, in seconds, an AutoML job is allowed to wait for a trial to complete. It must be equal to or greater than MaxRuntimePerTrainingJobInSeconds.
     */
    MaxAutoMLJobRuntimeInSeconds?: MaxAutoMLJobRuntimeInSeconds;
  }
  export interface AutoMLJobConfig {
    /**
     * How long a job is allowed to run, or how many candidates a job is allowed to generate.
     */
    CompletionCriteria?: AutoMLJobCompletionCriteria;
    /**
     * Security configuration for traffic encryption or Amazon VPC settings.
     */
    SecurityConfig?: AutoMLSecurityConfig;
  }
  export type AutoMLJobName = string;
  export interface AutoMLJobObjective {
    /**
     * The name of the objective metric used to measure the predictive quality of a machine learning system. This metric is optimized during training to provide the best estimate for model parameter values from data. Here are the options:    MSE: The mean squared error (MSE) is the average of the squared differences between the predicted and actual values. It is used for regression. MSE values are always positive, the better a model is at predicting the actual values the smaller the MSE value. When the data contains outliers, they tend to dominate the MSE which might cause subpar prediction performance.    Accuracy: The ratio of the number correctly classified items to the total number (correctly and incorrectly) classified. It is used for binary and multiclass classification. Measures how close the predicted class values are to the actual values. Accuracy values vary between zero and one, one being perfect accuracy and zero perfect inaccuracy.    F1: The F1 score is the harmonic mean of the precision and recall. It is used for binary classification into classes traditionally referred to as positive and negative. Predictions are said to be true when they match their actual (correct) class; false when they do not. Precision is the ratio of the true positive predictions to all positive predictions (including the false positives) in a data set and measures the quality of the prediction when it predicts the positive class. Recall (or sensitivity) is the ratio of the true positive predictions to all actual positive instances and measures how completely a model predicts the actual class members in a data set. The standard F1 score weighs precision and recall equally. But which metric is paramount typically depends on specific aspects of a problem. F1 scores vary between zero and one, one being the best possible performance and zero the worst.    AUC: The area under the curve (AUC) metric is used to compare and evaluate binary classification by algorithms such as logistic regression that return probabilities. A threshold is needed to map the probabilities into classifications. The relevant curve is the receiver operating characteristic curve that plots the true positive rate (TPR) of predictions (or recall) against the false positive rate (FPR) as a function of the threshold value, above which a prediction is considered positive. Increasing the threshold results in fewer false positives but more false negatives. AUC is the area under this receiver operating characteristic curve and so provides an aggregated measure of the model performance across all possible classification thresholds. The AUC score can also be interpreted as the probability that a randomly selected positive data point is more likely to be predicted positive than a randomly selected negative example. AUC scores vary between zero and one, one being perfect accuracy and one half not better than a random classifier. Values less that one half predict worse than a random predictor and such consistently bad predictors can be inverted to obtain better than random predictors.    F1macro: The F1macro score applies F1 scoring to multiclass classification. In this context, you have multiple classes to predict. You just calculate the precision and recall for each class as you did for the positive class in binary classification. Then used these values to calculate the F1 score for each class and average them to obtain the F1macro score. F1macro scores vary between zero and one, one being the best possible performance and zero the worst.   If you do not specify a metric explicitly, the default behavior is to automatically use:    MSE: for regression.    F1: for binary classification    Accuracy: for multiclass classification.  
     */
    MetricName: AutoMLMetricEnum;
  }
  export type AutoMLJobObjectiveType = "Maximize"|"Minimize"|string;
  export type AutoMLJobSecondaryStatus = "Starting"|"AnalyzingData"|"FeatureEngineering"|"ModelTuning"|"MaxCandidatesReached"|"Failed"|"Stopped"|"MaxAutoMLJobRuntimeReached"|"Stopping"|"CandidateDefinitionsGenerated"|string;
  export type AutoMLJobStatus = "Completed"|"InProgress"|"Failed"|"Stopped"|"Stopping"|string;
  export type AutoMLJobSummaries = AutoMLJobSummary[];
  export interface AutoMLJobSummary {
    /**
     * The name of the object you are requesting.
     */
    AutoMLJobName: AutoMLJobName;
    /**
     * The ARN of the job.
     */
    AutoMLJobArn: AutoMLJobArn;
    /**
     * The job's status.
     */
    AutoMLJobStatus: AutoMLJobStatus;
    /**
     * The job's secondary status.
     */
    AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus;
    /**
     * When the job was created.
     */
    CreationTime: Timestamp;
    /**
     * The end time of an AutoML job.
     */
    EndTime?: Timestamp;
    /**
     * When the job was last modified.
     */
    LastModifiedTime: Timestamp;
    /**
     * The failure reason of a job.
     */
    FailureReason?: AutoMLFailureReason;
  }
  export type AutoMLMaxResults = number;
  export type AutoMLMetricEnum = "Accuracy"|"MSE"|"F1"|"F1macro"|"AUC"|string;
  export type AutoMLNameContains = string;
  export interface AutoMLOutputDataConfig {
    /**
     * The AWS KMS encryption key ID.
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The Amazon S3 output path. Must be 128 characters or less.
     */
    S3OutputPath: S3Uri;
  }
  export interface AutoMLS3DataSource {
    /**
     * The data type.
     */
    S3DataType: AutoMLS3DataType;
    /**
     * The URL to the Amazon S3 data source.
     */
    S3Uri: S3Uri;
  }
  export type AutoMLS3DataType = "ManifestFile"|"S3Prefix"|string;
  export interface AutoMLSecurityConfig {
    /**
     * The key used to encrypt stored data.
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     * Whether to use traffic encryption between the container layers.
     */
    EnableInterContainerTrafficEncryption?: Boolean;
    /**
     * VPC configuration.
     */
    VpcConfig?: VpcConfig;
  }
  export type AutoMLSortBy = "Name"|"CreationTime"|"Status"|string;
  export type AutoMLSortOrder = "Ascending"|"Descending"|string;
  export type AwsManagedHumanLoopRequestSource = "AWS/Rekognition/DetectModerationLabels/Image/V3"|"AWS/Textract/AnalyzeDocument/Forms/V1"|string;
  export type BatchStrategy = "MultiRecord"|"SingleRecord"|string;
  export type BillableTimeInSeconds = number;
  export type Boolean = boolean;
  export type BooleanOperator = "And"|"Or"|string;
  export type Branch = string;
  export type CandidateDefinitionNotebookLocation = string;
  export type CandidateName = string;
  export type CandidateSortBy = "CreationTime"|"Status"|"FinalObjectiveMetricValue"|string;
  export type CandidateStatus = "Completed"|"InProgress"|"Failed"|"Stopped"|"Stopping"|string;
  export type CandidateStepArn = string;
  export type CandidateStepName = string;
  export type CandidateStepType = "AWS::SageMaker::TrainingJob"|"AWS::SageMaker::TransformJob"|"AWS::SageMaker::ProcessingJob"|string;
  export type CandidateSteps = AutoMLCandidateStep[];
  export interface CaptureContentTypeHeader {
    /**
     * 
     */
    CsvContentTypes?: CsvContentTypes;
    /**
     * 
     */
    JsonContentTypes?: JsonContentTypes;
  }
  export type CaptureMode = "Input"|"Output"|string;
  export interface CaptureOption {
    /**
     * 
     */
    CaptureMode: CaptureMode;
  }
  export type CaptureOptionList = CaptureOption[];
  export type CaptureStatus = "Started"|"Stopped"|string;
  export interface CategoricalParameterRange {
    /**
     * The name of the categorical hyperparameter to tune.
     */
    Name: ParameterKey;
    /**
     * A list of the categories for the hyperparameter.
     */
    Values: ParameterValues;
  }
  export interface CategoricalParameterRangeSpecification {
    /**
     * The allowed categories for the hyperparameter.
     */
    Values: ParameterValues;
  }
  export type CategoricalParameterRanges = CategoricalParameterRange[];
  export type Cents = number;
  export type CertifyForMarketplace = boolean;
  export interface Channel {
    /**
     * The name of the channel. 
     */
    ChannelName: ChannelName;
    /**
     * The location of the channel data.
     */
    DataSource: DataSource;
    /**
     * The MIME type of the data.
     */
    ContentType?: ContentType;
    /**
     * If training data is compressed, the compression type. The default value is None. CompressionType is used only in Pipe input mode. In File mode, leave this field unset or set it to None.
     */
    CompressionType?: CompressionType;
    /**
     *  Specify RecordIO as the value when input data is in raw format but the training algorithm requires the RecordIO format. In this case, Amazon SageMaker wraps each individual S3 object in a RecordIO record. If the input data is already in RecordIO format, you don't need to set this attribute. For more information, see Create a Dataset Using RecordIO.  In File mode, leave this field unset or set it to None.
     */
    RecordWrapperType?: RecordWrapper;
    /**
     * (Optional) The input mode to use for the data channel in a training job. If you don't set a value for InputMode, Amazon SageMaker uses the value set for TrainingInputMode. Use this parameter to override the TrainingInputMode setting in a AlgorithmSpecification request when you have a channel that needs a different input mode from the training job's general setting. To download the data from Amazon Simple Storage Service (Amazon S3) to the provisioned ML storage volume, and mount the directory to a Docker volume, use File input mode. To stream data directly from Amazon S3 to the container, choose Pipe input mode. To use a model for incremental training, choose File input model.
     */
    InputMode?: TrainingInputMode;
    /**
     * A configuration for a shuffle option for input data in a channel. If you use S3Prefix for S3DataType, this shuffles the results of the S3 key prefix matches. If you use ManifestFile, the order of the S3 object references in the ManifestFile is shuffled. If you use AugmentedManifestFile, the order of the JSON lines in the AugmentedManifestFile is shuffled. The shuffling order is determined using the Seed value. For Pipe input mode, shuffling is done at the start of every epoch. With large datasets this ensures that the order of the training data is different for each epoch, it helps reduce bias and possible overfitting. In a multi-node training job when ShuffleConfig is combined with S3DataDistributionType of ShardedByS3Key, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.
     */
    ShuffleConfig?: ShuffleConfig;
  }
  export type ChannelName = string;
  export interface ChannelSpecification {
    /**
     * The name of the channel.
     */
    Name: ChannelName;
    /**
     * A brief description of the channel.
     */
    Description?: EntityDescription;
    /**
     * Indicates whether the channel is required by the algorithm.
     */
    IsRequired?: Boolean;
    /**
     * The supported MIME types for the data.
     */
    SupportedContentTypes: ContentTypes;
    /**
     * The allowed compression types, if data compression is used.
     */
    SupportedCompressionTypes?: CompressionTypes;
    /**
     * The allowed input mode, either FILE or PIPE. In FILE mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode. In PIPE mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.
     */
    SupportedInputModes: InputModes;
  }
  export type ChannelSpecifications = ChannelSpecification[];
  export interface CheckpointConfig {
    /**
     * Identifies the S3 path where you want Amazon SageMaker to store checkpoints. For example, s3://bucket-name/key-name-prefix.
     */
    S3Uri: S3Uri;
    /**
     * (Optional) The local directory where checkpoints are written. The default directory is /opt/ml/checkpoints/. 
     */
    LocalPath?: DirectoryPath;
  }
  export type Cidr = string;
  export type Cidrs = Cidr[];
  export type ClientId = string;
  export type ClientSecret = string;
  export type CodeRepositoryArn = string;
  export type CodeRepositoryContains = string;
  export type CodeRepositoryNameContains = string;
  export type CodeRepositoryNameOrUrl = string;
  export type CodeRepositorySortBy = "Name"|"CreationTime"|"LastModifiedTime"|string;
  export type CodeRepositorySortOrder = "Ascending"|"Descending"|string;
  export interface CodeRepositorySummary {
    /**
     * The name of the Git repository.
     */
    CodeRepositoryName: EntityName;
    /**
     * The Amazon Resource Name (ARN) of the Git repository.
     */
    CodeRepositoryArn: CodeRepositoryArn;
    /**
     * The date and time that the Git repository was created.
     */
    CreationTime: CreationTime;
    /**
     * The date and time that the Git repository was last modified.
     */
    LastModifiedTime: LastModifiedTime;
    /**
     * Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository.
     */
    GitConfig?: GitConfig;
  }
  export type CodeRepositorySummaryList = CodeRepositorySummary[];
  export interface CognitoConfig {
    /**
     * A  user pool is a user directory in Amazon Cognito. With a user pool, your users can sign in to your web or mobile app through Amazon Cognito. Your users can also sign in through social identity providers like Google, Facebook, Amazon, or Apple, and through SAML identity providers.
     */
    UserPool: CognitoUserPool;
    /**
     * The client ID for your Amazon Cognito user pool.
     */
    ClientId: ClientId;
  }
  export interface CognitoMemberDefinition {
    /**
     * An identifier for a user pool. The user pool must be in the same region as the service that you are calling.
     */
    UserPool: CognitoUserPool;
    /**
     * An identifier for a user group.
     */
    UserGroup: CognitoUserGroup;
    /**
     * An identifier for an application client. You must create the app client ID using Amazon Cognito.
     */
    ClientId: ClientId;
  }
  export type CognitoUserGroup = string;
  export type CognitoUserPool = string;
  export interface CollectionConfiguration {
    /**
     * The name of the tensor collection. The name must be unique relative to other rule configuration names.
     */
    CollectionName?: CollectionName;
    /**
     * Parameter values for the tensor collection. The allowed parameters are "name", "include_regex", "reduction_config", "save_config", "tensor_names", and "save_histogram".
     */
    CollectionParameters?: CollectionParameters;
  }
  export type CollectionConfigurations = CollectionConfiguration[];
  export type CollectionName = string;
  export type CollectionParameters = {[key: string]: ConfigValue};
  export type CompilationJobArn = string;
  export type CompilationJobStatus = "INPROGRESS"|"COMPLETED"|"FAILED"|"STARTING"|"STOPPING"|"STOPPED"|string;
  export type CompilationJobSummaries = CompilationJobSummary[];
  export interface CompilationJobSummary {
    /**
     * The name of the model compilation job that you want a summary for.
     */
    CompilationJobName: EntityName;
    /**
     * The Amazon Resource Name (ARN) of the model compilation job.
     */
    CompilationJobArn: CompilationJobArn;
    /**
     * The time when the model compilation job was created.
     */
    CreationTime: CreationTime;
    /**
     * The time when the model compilation job started.
     */
    CompilationStartTime?: Timestamp;
    /**
     * The time when the model compilation job completed.
     */
    CompilationEndTime?: Timestamp;
    /**
     * The type of device that the model will run on after the compilation job has completed.
     */
    CompilationTargetDevice?: TargetDevice;
    /**
     * The type of OS that the model will run on after the compilation job has completed.
     */
    CompilationTargetPlatformOs?: TargetPlatformOs;
    /**
     * The type of architecture that the model will run on after the compilation job has completed.
     */
    CompilationTargetPlatformArch?: TargetPlatformArch;
    /**
     * The type of accelerator that the model will run on after the compilation job has completed.
     */
    CompilationTargetPlatformAccelerator?: TargetPlatformAccelerator;
    /**
     * The time when the model compilation job was last modified.
     */
    LastModifiedTime?: LastModifiedTime;
    /**
     * The status of the model compilation job.
     */
    CompilationJobStatus: CompilationJobStatus;
  }
  export type CompilerOptions = string;
  export type CompressionType = "None"|"Gzip"|string;
  export type CompressionTypes = CompressionType[];
  export type ConfigKey = string;
  export type ConfigValue = string;
  export type ContainerArgument = string;
  export type ContainerArguments = ContainerArgument[];
  export interface ContainerDefinition {
    /**
     * This parameter is ignored for models that contain only a PrimaryContainer. When a ContainerDefinition is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see Use Logs and Metrics to Monitor an Inference Pipeline. If you don't specify a value for this parameter for a ContainerDefinition that is part of an inference pipeline, a unique name is automatically assigned based on the position of the ContainerDefinition in the pipeline. If you specify a value for the ContainerHostName for any ContainerDefinition that is part of an inference pipeline, you must specify a value for the ContainerHostName parameter of every ContainerDefinition in that pipeline.
     */
    ContainerHostname?: ContainerHostname;
    /**
     * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored. If you are using your own custom algorithm instead of an algorithm provided by Amazon SageMaker, the inference code must meet Amazon SageMaker requirements. Amazon SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see Using Your Own Algorithms with Amazon SageMaker 
     */
    Image?: ContainerImage;
    /**
     * Specifies whether the model container is in Amazon ECR or a private Docker registry in your Amazon Virtual Private Cloud (VPC). For information about storing containers in a private Docker registry, see Use a Private Docker Registry for Real-Time Inference Containers 
     */
    ImageConfig?: ImageConfig;
    /**
     * Whether the container hosts a single model or multiple models.
     */
    Mode?: ContainerMode;
    /**
     * The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for Amazon SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see Common Parameters.  If you provide a value for this parameter, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide.  If you use a built-in algorithm to create a model, Amazon SageMaker requires that you provide a S3 path to the model artifacts in ModelDataUrl. 
     */
    ModelDataUrl?: Url;
    /**
     * The environment variables to set in the Docker container. Each key and value in the Environment string to string map can have length of up to 1024. We support up to 16 entries in the map. 
     */
    Environment?: EnvironmentMap;
    /**
     * The name or Amazon Resource Name (ARN) of the model package to use to create the model.
     */
    ModelPackageName?: ArnOrName;
  }
  export type ContainerDefinitionList = ContainerDefinition[];
  export type ContainerEntrypoint = ContainerEntrypointString[];
  export type ContainerEntrypointString = string;
  export type ContainerHostname = string;
  export type ContainerImage = string;
  export type ContainerMode = "SingleModel"|"MultiModel"|string;
  export type ContentClassifier = "FreeOfPersonallyIdentifiableInformation"|"FreeOfAdultContent"|string;
  export type ContentClassifiers = ContentClassifier[];
  export type ContentType = string;
  export type ContentTypes = ContentType[];
  export interface ContinuousParameterRange {
    /**
     * The name of the continuous hyperparameter to tune.
     */
    Name: ParameterKey;
    /**
     * The minimum value for the hyperparameter. The tuning job uses floating-point values between this value and MaxValuefor tuning.
     */
    MinValue: ParameterValue;
    /**
     * The maximum value for the hyperparameter. The tuning job uses floating-point values between MinValue value and this value for tuning.
     */
    MaxValue: ParameterValue;
    /**
     * The scale that hyperparameter tuning uses to search the hyperparameter range. For information about choosing a hyperparameter scale, see Hyperparameter Scaling. One of the following values:  Auto  Amazon SageMaker hyperparameter tuning chooses the best scale for the hyperparameter.  Linear  Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.  Logarithmic  Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale. Logarithmic scaling works only for ranges that have only values greater than 0.  ReverseLogarithmic  Hyperparameter tuning searches the values in the hyperparameter range by using a reverse logarithmic scale. Reverse logarithmic scaling works only for ranges that are entirely within the range 0&lt;=x&lt;1.0.  
     */
    ScalingType?: HyperParameterScalingType;
  }
  export interface ContinuousParameterRangeSpecification {
    /**
     * The minimum floating-point value allowed.
     */
    MinValue: ParameterValue;
    /**
     * The maximum floating-point value allowed.
     */
    MaxValue: ParameterValue;
  }
  export type ContinuousParameterRanges = ContinuousParameterRange[];
  export interface CreateAlgorithmInput {
    /**
     * The name of the algorithm.
     */
    AlgorithmName: EntityName;
    /**
     * A description of the algorithm.
     */
    AlgorithmDescription?: EntityDescription;
    /**
     * Specifies details about training jobs run by this algorithm, including the following:   The Amazon ECR path of the container and the version digest of the algorithm.   The hyperparameters that the algorithm supports.   The instance types that the algorithm supports for training.   Whether the algorithm supports distributed training.   The metrics that the algorithm emits to Amazon CloudWatch.   Which metrics that the algorithm emits can be used as the objective metric for hyperparameter tuning jobs.   The input channels that the algorithm supports for training data. For example, an algorithm might support train, validation, and test channels.  
     */
    TrainingSpecification: TrainingSpecification;
    /**
     * Specifies details about inference jobs that the algorithm runs, including the following:   The Amazon ECR paths of containers that contain the inference code and model artifacts.   The instance types that the algorithm supports for transform jobs and real-time endpoints used for inference.   The input and output content formats that the algorithm supports for inference.  
     */
    InferenceSpecification?: InferenceSpecification;
    /**
     * Specifies configurations for one or more training jobs and that Amazon SageMaker runs to test the algorithm's training code and, optionally, one or more batch transform jobs that Amazon SageMaker runs to test the algorithm's inference code.
     */
    ValidationSpecification?: AlgorithmValidationSpecification;
    /**
     * Whether to certify the algorithm so that it can be listed in AWS Marketplace.
     */
    CertifyForMarketplace?: CertifyForMarketplace;
  }
  export interface CreateAlgorithmOutput {
    /**
     * The Amazon Resource Name (ARN) of the new algorithm.
     */
    AlgorithmArn: AlgorithmArn;
  }
  export interface CreateAppRequest {
    /**
     * The domain ID.
     */
    DomainId: DomainId;
    /**
     * The user profile name.
     */
    UserProfileName: UserProfileName;
    /**
     * The type of app.
     */
    AppType: AppType;
    /**
     * The name of the app.
     */
    AppName: AppName;
    /**
     * Each tag consists of a key and an optional value. Tag keys must be unique per resource.
     */
    Tags?: TagList;
    /**
     * The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.
     */
    ResourceSpec?: ResourceSpec;
  }
  export interface CreateAppResponse {
    /**
     * The App's Amazon Resource Name (ARN).
     */
    AppArn?: AppArn;
  }
  export interface CreateAutoMLJobRequest {
    /**
     * Identifies an Autopilot job. Must be unique to your account and is case-insensitive.
     */
    AutoMLJobName: AutoMLJobName;
    /**
     * Similar to InputDataConfig supported by Tuning. Format(s) supported: CSV. Minimum of 1000 rows.
     */
    InputDataConfig: AutoMLInputDataConfig;
    /**
     * Similar to OutputDataConfig supported by Tuning. Format(s) supported: CSV.
     */
    OutputDataConfig: AutoMLOutputDataConfig;
    /**
     * Defines the kind of preprocessing and algorithms intended for the candidates. Options include: BinaryClassification, MulticlassClassification, and Regression.
     */
    ProblemType?: ProblemType;
    /**
     * Defines the objective of a an AutoML job. You provide a AutoMLJobObjective$MetricName and Autopilot infers whether to minimize or maximize it. If a metric is not specified, the most commonly used ObjectiveMetric for problem type is automaically selected.
     */
    AutoMLJobObjective?: AutoMLJobObjective;
    /**
     * Contains CompletionCriteria and SecurityConfig.
     */
    AutoMLJobConfig?: AutoMLJobConfig;
    /**
     * The ARN of the role that is used to access the data.
     */
    RoleArn: RoleArn;
    /**
     * Generates possible candidates without training a model. A candidate is a combination of data preprocessors, algorithms, and algorithm parameter settings.
     */
    GenerateCandidateDefinitionsOnly?: GenerateCandidateDefinitionsOnly;
    /**
     * Each tag consists of a key and an optional value. Tag keys must be unique per resource.
     */
    Tags?: TagList;
  }
  export interface CreateAutoMLJobResponse {
    /**
     * When a job is created, it is assigned a unique ARN.
     */
    AutoMLJobArn: AutoMLJobArn;
  }
  export interface CreateCodeRepositoryInput {
    /**
     * The name of the Git repository. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).
     */
    CodeRepositoryName: EntityName;
    /**
     * Specifies details about the repository, including the URL where the repository is located, the default branch, and credentials to use to access the repository.
     */
    GitConfig: GitConfig;
  }
  export interface CreateCodeRepositoryOutput {
    /**
     * The Amazon Resource Name (ARN) of the new repository.
     */
    CodeRepositoryArn: CodeRepositoryArn;
  }
  export interface CreateCompilationJobRequest {
    /**
     * A name for the model compilation job. The name must be unique within the AWS Region and within your AWS account. 
     */
    CompilationJobName: EntityName;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.  During model compilation, Amazon SageMaker needs your permission to:   Read input data from an S3 bucket   Write model artifacts to an S3 bucket   Write logs to Amazon CloudWatch Logs   Publish metrics to Amazon CloudWatch   You grant permissions for all of these tasks to an IAM role. To pass this role to Amazon SageMaker, the caller of this API must have the iam:PassRole permission. For more information, see Amazon SageMaker Roles. 
     */
    RoleArn: RoleArn;
    /**
     * Provides information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
     */
    InputConfig: InputConfig;
    /**
     * Provides information about the output location for the compiled model and the target device the model runs on.
     */
    OutputConfig: OutputConfig;
    /**
     * Specifies a limit to how long a model compilation job can run. When the job reaches the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training costs.
     */
    StoppingCondition: StoppingCondition;
  }
  export interface CreateCompilationJobResponse {
    /**
     * If the action is successful, the service sends back an HTTP 200 response. Amazon SageMaker returns the following data in JSON format:    CompilationJobArn: The Amazon Resource Name (ARN) of the compiled job.  
     */
    CompilationJobArn: CompilationJobArn;
  }
  export interface CreateDomainRequest {
    /**
     * A name for the domain.
     */
    DomainName: DomainName;
    /**
     * The mode of authentication that members use to access the domain.
     */
    AuthMode: AuthMode;
    /**
     * The default user settings.
     */
    DefaultUserSettings: UserSettings;
    /**
     * The VPC subnets to use for communication with the EFS volume.
     */
    SubnetIds: Subnets;
    /**
     * The ID of the Amazon Virtual Private Cloud (VPC) to use for communication with the EFS volume.
     */
    VpcId: VpcId;
    /**
     * Tags to associated with the Domain. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.
     */
    Tags?: TagList;
    /**
     * The AWS Key Management Service (KMS) encryption key ID. Encryption with a customer master key (CMK) is not supported.
     */
    HomeEfsFileSystemKmsKeyId?: KmsKeyId;
  }
  export interface CreateDomainResponse {
    /**
     * The Amazon Resource Name (ARN) of the created domain.
     */
    DomainArn?: DomainArn;
    /**
     * The URL to the created domain.
     */
    Url?: String1024;
  }
  export interface CreateEndpointConfigInput {
    /**
     * The name of the endpoint configuration. You specify this name in a CreateEndpoint request. 
     */
    EndpointConfigName: EndpointConfigName;
    /**
     * An list of ProductionVariant objects, one for each model that you want to host at this endpoint.
     */
    ProductionVariants: ProductionVariantList;
    DataCaptureConfig?: DataCaptureConfig;
    /**
     * A list of key-value pairs. For more information, see Using Cost Allocation Tags in the  AWS Billing and Cost Management User Guide. 
     */
    Tags?: TagList;
    /**
     * The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. The KmsKeyId can be any of the following formats:    Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias name ARN: arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias    The KMS key policy must grant permission to the IAM role that you specify in your CreateEndpoint, UpdateEndpoint requests. For more information, refer to the AWS Key Management Service section Using Key Policies in AWS KMS    Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a KmsKeyId when using an instance type with local storage. If any of the models that you specify in the ProductionVariants parameter use nitro-based instances with local storage, do not specify a value for the KmsKeyId parameter. If you specify a value for KmsKeyId when using any nitro-based instances with local storage, the call to CreateEndpointConfig fails. For a list of instance types that support local instance storage, see Instance Store Volumes. For more information about local instance storage encryption, see SSD Instance Store Volumes. 
     */
    KmsKeyId?: KmsKeyId;
  }
  export interface CreateEndpointConfigOutput {
    /**
     * The Amazon Resource Name (ARN) of the endpoint configuration. 
     */
    EndpointConfigArn: EndpointConfigArn;
  }
  export interface CreateEndpointInput {
    /**
     * The name of the endpoint. The name must be unique within an AWS Region in your AWS account.
     */
    EndpointName: EndpointName;
    /**
     * The name of an endpoint configuration. For more information, see CreateEndpointConfig. 
     */
    EndpointConfigName: EndpointConfigName;
    /**
     * An array of key-value pairs. For more information, see Using Cost Allocation Tagsin the AWS Billing and Cost Management User Guide. 
     */
    Tags?: TagList;
  }
  export interface CreateEndpointOutput {
    /**
     * The Amazon Resource Name (ARN) of the endpoint.
     */
    EndpointArn: EndpointArn;
  }
  export interface CreateExperimentRequest {
    /**
     * The name of the experiment. The name must be unique in your AWS account and is not case-sensitive.
     */
    ExperimentName: ExperimentEntityName;
    /**
     * The name of the experiment as displayed. The name doesn't need to be unique. If you don't specify DisplayName, the value in ExperimentName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    /**
     * The description of the experiment.
     */
    Description?: ExperimentDescription;
    /**
     * A list of tags to associate with the experiment. You can use Search API to search on the tags.
     */
    Tags?: TagList;
  }
  export interface CreateExperimentResponse {
    /**
     * The Amazon Resource Name (ARN) of the experiment.
     */
    ExperimentArn?: ExperimentArn;
  }
  export interface CreateFlowDefinitionRequest {
    /**
     * The name of your flow definition.
     */
    FlowDefinitionName: FlowDefinitionName;
    /**
     * Container for configuring the source of human task requests. Use to specify if Amazon Rekognition or Amazon Textract is used as an integration source.
     */
    HumanLoopRequestSource?: HumanLoopRequestSource;
    /**
     * An object containing information about the events that trigger a human workflow.
     */
    HumanLoopActivationConfig?: HumanLoopActivationConfig;
    /**
     * An object containing information about the tasks the human reviewers will perform.
     */
    HumanLoopConfig: HumanLoopConfig;
    /**
     * An object containing information about where the human review results will be uploaded.
     */
    OutputConfig: FlowDefinitionOutputConfig;
    /**
     * The Amazon Resource Name (ARN) of the role needed to call other services on your behalf. For example, arn:aws:iam::1234567890:role/service-role/AmazonSageMaker-ExecutionRole-20180111T151298.
     */
    RoleArn: RoleArn;
    /**
     * An array of key-value pairs that contain metadata to help you categorize and organize a flow definition. Each tag consists of a key and a value, both of which you define.
     */
    Tags?: TagList;
  }
  export interface CreateFlowDefinitionResponse {
    /**
     * The Amazon Resource Name (ARN) of the flow definition you create.
     */
    FlowDefinitionArn: FlowDefinitionArn;
  }
  export interface CreateHumanTaskUiRequest {
    /**
     * The name of the user interface you are creating.
     */
    HumanTaskUiName: HumanTaskUiName;
    UiTemplate: UiTemplate;
    /**
     * An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. Each tag consists of a key and a value, both of which you define.
     */
    Tags?: TagList;
  }
  export interface CreateHumanTaskUiResponse {
    /**
     * The Amazon Resource Name (ARN) of the human review workflow user interface you create.
     */
    HumanTaskUiArn: HumanTaskUiArn;
  }
  export interface CreateHyperParameterTuningJobRequest {
    /**
     * The name of the tuning job. This name is the prefix for the names of all training jobs that this tuning job launches. The name must be unique within the same AWS account and AWS Region. The name must have { } to { } characters. Valid characters are a-z, A-Z, 0-9, and : + = @ _ % - (hyphen). The name is not case sensitive.
     */
    HyperParameterTuningJobName: HyperParameterTuningJobName;
    /**
     * The HyperParameterTuningJobConfig object that describes the tuning job, including the search strategy, the objective metric used to evaluate training jobs, ranges of parameters to search, and resource limits for the tuning job. For more information, see How Hyperparameter Tuning Works.
     */
    HyperParameterTuningJobConfig: HyperParameterTuningJobConfig;
    /**
     * The HyperParameterTrainingJobDefinition object that describes the training jobs that this tuning job launches, including static hyperparameters, input data configuration, output data configuration, resource configuration, and stopping condition.
     */
    TrainingJobDefinition?: HyperParameterTrainingJobDefinition;
    /**
     * A list of the HyperParameterTrainingJobDefinition objects launched for this tuning job.
     */
    TrainingJobDefinitions?: HyperParameterTrainingJobDefinitions;
    /**
     * Specifies the configuration for starting the hyperparameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job. All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric. If you specify IDENTICAL_DATA_AND_ALGORITHM as the WarmStartType value for the warm start configuration, the training job that performs the best in the new tuning job is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.  All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job. 
     */
    WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;
    /**
     * An array of key-value pairs. You can use tags to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. For more information, see AWS Tagging Strategies. Tags that you specify for the tuning job are also added to all training jobs that the tuning job launches.
     */
    Tags?: TagList;
  }
  export interface CreateHyperParameterTuningJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the tuning job. Amazon SageMaker assigns an ARN to a hyperparameter tuning job when you create it.
     */
    HyperParameterTuningJobArn: HyperParameterTuningJobArn;
  }
  export interface CreateLabelingJobRequest {
    /**
     * The name of the labeling job. This name is used to identify the job in a list of labeling jobs.
     */
    LabelingJobName: LabelingJobName;
    /**
     * The attribute name to use for the label in the output manifest file. This is the key for the key/value pair formed with the label that a worker assigns to the object. The name can't end with "-metadata". If you are running a semantic segmentation labeling job, the attribute name must end with "-ref". If you are running any other kind of labeling job, the attribute name must not end with "-ref".
     */
    LabelAttributeName: LabelAttributeName;
    /**
     * Input data for the labeling job, such as the Amazon S3 location of the data objects and the location of the manifest file that describes the data objects.
     */
    InputConfig: LabelingJobInputConfig;
    /**
     * The location of the output data and the AWS Key Management Service key ID for the key used to encrypt the output data, if any.
     */
    OutputConfig: LabelingJobOutputConfig;
    /**
     * The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete data labeling.
     */
    RoleArn: RoleArn;
    /**
     * The S3 URL of the file that defines the categories used to label the data objects. For 3D point cloud task types, see Create a Labeling Category Configuration File for 3D Point Cloud Labeling Jobs.  For all other built-in task types and custom tasks, your label category configuration file must be a JSON file in the following format. Identify the labels you want to use by replacing label_1, label_2,...,label_n with your label categories.  {    "document-version": "2018-11-28"    "labels": [    {    "label": "label_1"    },    {    "label": "label_2"    },    ...    {    "label": "label_n"    }    ]   } 
     */
    LabelCategoryConfigS3Uri?: S3Uri;
    /**
     * A set of conditions for stopping the labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.
     */
    StoppingConditions?: LabelingJobStoppingConditions;
    /**
     * Configures the information required to perform automated data labeling.
     */
    LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;
    /**
     * Configures the labeling task and how it is presented to workers; including, but not limited to price, keywords, and batch size (task count).
     */
    HumanTaskConfig: HumanTaskConfig;
    /**
     * An array of key/value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
     */
    Tags?: TagList;
  }
  export interface CreateLabelingJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the labeling job. You use this ARN to identify the labeling job.
     */
    LabelingJobArn: LabelingJobArn;
  }
  export interface CreateModelInput {
    /**
     * The name of the new model.
     */
    ModelName: ModelName;
    /**
     * The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions. 
     */
    PrimaryContainer?: ContainerDefinition;
    /**
     * Specifies the containers in the inference pipeline.
     */
    Containers?: ContainerDefinitionList;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs. Deploying on ML compute instances is part of model hosting. For more information, see Amazon SageMaker Roles.   To be able to pass this role to Amazon SageMaker, the caller of this API must have the iam:PassRole permission. 
     */
    ExecutionRoleArn: RoleArn;
    /**
     * An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide. 
     */
    Tags?: TagList;
    /**
     * A VpcConfig object that specifies the VPC that you want your model to connect to. Control access to and from your model container by configuring the VPC. VpcConfig is used in hosting services and in batch transform. For more information, see Protect Endpoints by Using an Amazon Virtual Private Cloud and Protect Data in Batch Transform Jobs by Using an Amazon Virtual Private Cloud.
     */
    VpcConfig?: VpcConfig;
    /**
     * Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
     */
    EnableNetworkIsolation?: Boolean;
  }
  export interface CreateModelOutput {
    /**
     * The ARN of the model created in Amazon SageMaker.
     */
    ModelArn: ModelArn;
  }
  export interface CreateModelPackageInput {
    /**
     * The name of the model package. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).
     */
    ModelPackageName: EntityName;
    /**
     * A description of the model package.
     */
    ModelPackageDescription?: EntityDescription;
    /**
     * Specifies details about inference jobs that can be run with models based on this model package, including the following:   The Amazon ECR paths of containers that contain the inference code and model artifacts.   The instance types that the model package supports for transform jobs and real-time endpoints used for inference.   The input and output content formats that the model package supports for inference.  
     */
    InferenceSpecification?: InferenceSpecification;
    /**
     * Specifies configurations for one or more transform jobs that Amazon SageMaker runs to test the model package.
     */
    ValidationSpecification?: ModelPackageValidationSpecification;
    /**
     * Details about the algorithm that was used to create the model package.
     */
    SourceAlgorithmSpecification?: SourceAlgorithmSpecification;
    /**
     * Whether to certify the model package for listing on AWS Marketplace.
     */
    CertifyForMarketplace?: CertifyForMarketplace;
  }
  export interface CreateModelPackageOutput {
    /**
     * The Amazon Resource Name (ARN) of the new model package.
     */
    ModelPackageArn: ModelPackageArn;
  }
  export interface CreateMonitoringScheduleRequest {
    /**
     * The name of the monitoring schedule. The name must be unique within an AWS Region within an AWS account.
     */
    MonitoringScheduleName: MonitoringScheduleName;
    /**
     * The configuration object that specifies the monitoring schedule and defines the monitoring job.
     */
    MonitoringScheduleConfig: MonitoringScheduleConfig;
    /**
     * (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
     */
    Tags?: TagList;
  }
  export interface CreateMonitoringScheduleResponse {
    /**
     * The Amazon Resource Name (ARN) of the monitoring schedule.
     */
    MonitoringScheduleArn: MonitoringScheduleArn;
  }
  export interface CreateNotebookInstanceInput {
    /**
     * The name of the new notebook instance.
     */
    NotebookInstanceName: NotebookInstanceName;
    /**
     * The type of ML compute instance to launch for the notebook instance.
     */
    InstanceType: InstanceType;
    /**
     * The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance. 
     */
    SubnetId?: SubnetId;
    /**
     * The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet. 
     */
    SecurityGroupIds?: SecurityGroupIds;
    /**
     *  When you send any requests to AWS resources from the notebook instance, Amazon SageMaker assumes this role to perform tasks on your behalf. You must grant this role necessary permissions so Amazon SageMaker can perform these tasks. The policy must allow the Amazon SageMaker service principal (sagemaker.amazonaws.com) permissions to assume this role. For more information, see Amazon SageMaker Roles.   To be able to pass this role to Amazon SageMaker, the caller of this API must have the iam:PassRole permission. 
     */
    RoleArn: RoleArn;
    /**
     * The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to your notebook instance. The KMS key you provide must be enabled. For information, see Enabling and Disabling Keys in the AWS Key Management Service Developer Guide.
     */
    KmsKeyId?: KmsKeyId;
    /**
     * A list of tags to associate with the notebook instance. You can add tags later by using the CreateTags API.
     */
    Tags?: TagList;
    /**
     * The name of a lifecycle configuration to associate with the notebook instance. For information about lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance.
     */
    LifecycleConfigName?: NotebookInstanceLifecycleConfigName;
    /**
     * Sets whether Amazon SageMaker provides internet access to the notebook instance. If you set this to Disabled this notebook instance will be able to access resources only in your VPC, and will not be able to connect to Amazon SageMaker training and endpoint services unless your configure a NAT Gateway in your VPC. For more information, see Notebook Instances Are Internet-Enabled by Default. You can set the value of this parameter to Disabled only if you set a value for the SubnetId parameter.
     */
    DirectInternetAccess?: DirectInternetAccess;
    /**
     * The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB.
     */
    VolumeSizeInGB?: NotebookInstanceVolumeSizeInGB;
    /**
     * A list of Elastic Inference (EI) instance types to associate with this notebook instance. Currently, only one instance type can be associated with a notebook instance. For more information, see Using Elastic Inference in Amazon SageMaker.
     */
    AcceleratorTypes?: NotebookInstanceAcceleratorTypes;
    /**
     * A Git repository to associate with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see Associating Git Repositories with Amazon SageMaker Notebook Instances.
     */
    DefaultCodeRepository?: CodeRepositoryNameOrUrl;
    /**
     * An array of up to three Git repositories to associate with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see Associating Git Repositories with Amazon SageMaker Notebook Instances.
     */
    AdditionalCodeRepositories?: AdditionalCodeRepositoryNamesOrUrls;
    /**
     * Whether root access is enabled or disabled for users of the notebook instance. The default value is Enabled.  Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users. 
     */
    RootAccess?: RootAccess;
  }
  export interface CreateNotebookInstanceLifecycleConfigInput {
    /**
     * The name of the lifecycle configuration.
     */
    NotebookInstanceLifecycleConfigName: NotebookInstanceLifecycleConfigName;
    /**
     * A shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.
     */
    OnCreate?: NotebookInstanceLifecycleConfigList;
    /**
     * A shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.
     */
    OnStart?: NotebookInstanceLifecycleConfigList;
  }
  export interface CreateNotebookInstanceLifecycleConfigOutput {
    /**
     * The Amazon Resource Name (ARN) of the lifecycle configuration.
     */
    NotebookInstanceLifecycleConfigArn?: NotebookInstanceLifecycleConfigArn;
  }
  export interface CreateNotebookInstanceOutput {
    /**
     * The Amazon Resource Name (ARN) of the notebook instance. 
     */
    NotebookInstanceArn?: NotebookInstanceArn;
  }
  export interface CreatePresignedDomainUrlRequest {
    /**
     * The domain ID.
     */
    DomainId: DomainId;
    /**
     * The name of the UserProfile to sign-in as.
     */
    UserProfileName: UserProfileName;
    /**
     * The session expiration duration in seconds.
     */
    SessionExpirationDurationInSeconds?: SessionExpirationDurationInSeconds;
  }
  export interface CreatePresignedDomainUrlResponse {
    /**
     * The presigned URL.
     */
    AuthorizedUrl?: PresignedDomainUrl;
  }
  export interface CreatePresignedNotebookInstanceUrlInput {
    /**
     * The name of the notebook instance.
     */
    NotebookInstanceName: NotebookInstanceName;
    /**
     * The duration of the session, in seconds. The default is 12 hours.
     */
    SessionExpirationDurationInSeconds?: SessionExpirationDurationInSeconds;
  }
  export interface CreatePresignedNotebookInstanceUrlOutput {
    /**
     * A JSON object that contains the URL string. 
     */
    AuthorizedUrl?: NotebookInstanceUrl;
  }
  export interface CreateProcessingJobRequest {
    /**
     * For each input, data is downloaded from S3 into the processing container before the processing job begins running if "S3InputMode" is set to File.
     */
    ProcessingInputs?: ProcessingInputs;
    /**
     * Output configuration for the processing job.
     */
    ProcessingOutputConfig?: ProcessingOutputConfig;
    /**
     *  The name of the processing job. The name must be unique within an AWS Region in the AWS account.
     */
    ProcessingJobName: ProcessingJobName;
    /**
     * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
     */
    ProcessingResources: ProcessingResources;
    /**
     * The time limit for how long the processing job is allowed to run.
     */
    StoppingCondition?: ProcessingStoppingCondition;
    /**
     * Configures the processing job to run a specified Docker container image.
     */
    AppSpecification: AppSpecification;
    /**
     * Sets the environment variables in the Docker container.
     */
    Environment?: ProcessingEnvironmentMap;
    /**
     * Networking options for a processing job.
     */
    NetworkConfig?: NetworkConfig;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     */
    RoleArn: RoleArn;
    /**
     * (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
     */
    Tags?: TagList;
    ExperimentConfig?: ExperimentConfig;
  }
  export interface CreateProcessingJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the processing job.
     */
    ProcessingJobArn: ProcessingJobArn;
  }
  export interface CreateTrainingJobRequest {
    /**
     * The name of the training job. The name must be unique within an AWS Region in an AWS account. 
     */
    TrainingJobName: TrainingJobName;
    /**
     * Algorithm-specific parameters that influence the quality of the model. You set hyperparameters before you start the learning process. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see Algorithms.  You can specify a maximum of 100 hyperparameters. Each hyperparameter is a key-value pair. Each key and value is limited to 256 characters, as specified by the Length Constraint. 
     */
    HyperParameters?: HyperParameters;
    /**
     * The registry path of the Docker image that contains the training algorithm and algorithm-specific metadata, including the input mode. For more information about algorithms provided by Amazon SageMaker, see Algorithms. For information about providing your own algorithms, see Using Your Own Algorithms with Amazon SageMaker. 
     */
    AlgorithmSpecification: AlgorithmSpecification;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.  During model training, Amazon SageMaker needs your permission to read input data from an S3 bucket, download a Docker image that contains training code, write model artifacts to an S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant permissions for all of these tasks to an IAM role. For more information, see Amazon SageMaker Roles.   To be able to pass this role to Amazon SageMaker, the caller of this API must have the iam:PassRole permission. 
     */
    RoleArn: RoleArn;
    /**
     * An array of Channel objects. Each channel is a named input source. InputDataConfig describes the input data and its location.  Algorithms can accept input data from one or more channels. For example, an algorithm might have two channels of input data, training_data and validation_data. The configuration for each channel provides the S3, EFS, or FSx location where the input data is stored. It also provides information about the stored data: the MIME type, compression method, and whether the data is wrapped in RecordIO format.  Depending on the input mode that the algorithm supports, Amazon SageMaker either copies input data files from an S3 bucket to a local directory in the Docker container, or makes it available as input streams. For example, if you specify an EFS location, input data files will be made available as input streams. They do not need to be downloaded.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * Specifies the path to the S3 location where you want to store model artifacts. Amazon SageMaker creates subfolders for the artifacts. 
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The resources, including the ML compute instances and ML storage volumes, to use for model training.  ML storage volumes store model artifacts and incremental states. Training algorithms might also use ML storage volumes for scratch space. If you want Amazon SageMaker to use the ML storage volume to store the training data, choose File as the TrainingInputMode in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.
     */
    ResourceConfig: ResourceConfig;
    /**
     * A VpcConfig object that specifies the VPC that you want your training job to connect to. Control access to and from your training container by configuring the VPC. For more information, see Protect Training Jobs by Using an Amazon Virtual Private Cloud.
     */
    VpcConfig?: VpcConfig;
    /**
     * Specifies a limit to how long a model training job can run. When the job reaches the time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. 
     */
    StoppingCondition: StoppingCondition;
    /**
     * An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide. 
     */
    Tags?: TagList;
    /**
     * Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If you enable network isolation for training jobs that are configured to use a VPC, Amazon SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.
     */
    EnableNetworkIsolation?: Boolean;
    /**
     * To encrypt all communications between ML compute instances in distributed training, choose True. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithm in distributed training. For more information, see Protect Communications Between ML Compute Instances in a Distributed Training Job.
     */
    EnableInterContainerTrafficEncryption?: Boolean;
    /**
     * To train models using managed spot training, choose True. Managed spot training provides a fully managed and scalable infrastructure for training machine learning models. this option is useful when training jobs can be interrupted and when there is flexibility when the training job is run.  The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be used as a starting point to train models incrementally. Amazon SageMaker provides metrics and logs in CloudWatch. They can be used to see when managed spot training jobs are running, interrupted, resumed, or completed. 
     */
    EnableManagedSpotTraining?: Boolean;
    /**
     * Contains information about the output location for managed spot training checkpoint data.
     */
    CheckpointConfig?: CheckpointConfig;
    DebugHookConfig?: DebugHookConfig;
    /**
     * Configuration information for debugging rules.
     */
    DebugRuleConfigurations?: DebugRuleConfigurations;
    TensorBoardOutputConfig?: TensorBoardOutputConfig;
    ExperimentConfig?: ExperimentConfig;
  }
  export interface CreateTrainingJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the training job.
     */
    TrainingJobArn: TrainingJobArn;
  }
  export interface CreateTransformJobRequest {
    /**
     * The name of the transform job. The name must be unique within an AWS Region in an AWS account. 
     */
    TransformJobName: TransformJobName;
    /**
     * The name of the model that you want to use for the transform job. ModelName must be the name of an existing Amazon SageMaker model within an AWS Region in an AWS account.
     */
    ModelName: ModelName;
    /**
     * The maximum number of parallel requests that can be sent to each instance in a transform job. If MaxConcurrentTransforms is set to 0 or left unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your chosen algorithm. If the execution-parameters endpoint is not enabled, the default value is 1. For more information on execution-parameters, see How Containers Serve Requests. For built-in algorithms, you don't need to set a value for MaxConcurrentTransforms.
     */
    MaxConcurrentTransforms?: MaxConcurrentTransforms;
    /**
     * Configures the timeout and maximum number of retries for processing a transform job invocation.
     */
    ModelClientConfig?: ModelClientConfig;
    /**
     * The maximum allowed size of the payload, in MB. A payload is the data portion of a record (without metadata). The value in MaxPayloadInMB must be greater than, or equal to, the size of a single record. To estimate the size of a record in MB, divide the size of your dataset by the number of records. To ensure that the records fit within the maximum payload size, we recommend using a slightly larger value. The default value is 6 MB.  For cases where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding, set the value to 0. This feature works only in supported algorithms. Currently, Amazon SageMaker built-in algorithms do not support HTTP chunked encoding.
     */
    MaxPayloadInMB?: MaxPayloadInMB;
    /**
     * Specifies the number of records to include in a mini-batch for an HTTP inference request. A record  is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record.  To enable the batch strategy, you must set the SplitType property to Line, RecordIO, or TFRecord. To use only one record when making an HTTP invocation request to a container, set BatchStrategy to SingleRecord and SplitType to Line. To fit as many records in a mini-batch as can fit within the MaxPayloadInMB limit, set BatchStrategy to MultiRecord and SplitType to Line.
     */
    BatchStrategy?: BatchStrategy;
    /**
     * The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.
     */
    Environment?: TransformEnvironmentMap;
    /**
     * Describes the input source and the way the transform job consumes it.
     */
    TransformInput: TransformInput;
    /**
     * Describes the results of the transform job.
     */
    TransformOutput: TransformOutput;
    /**
     * Describes the resources, including ML instance types and ML instance count, to use for the transform job.
     */
    TransformResources: TransformResources;
    /**
     * The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see Associate Prediction Results with their Corresponding Input Records.
     */
    DataProcessing?: DataProcessing;
    /**
     * (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
     */
    Tags?: TagList;
    ExperimentConfig?: ExperimentConfig;
  }
  export interface CreateTransformJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the transform job.
     */
    TransformJobArn: TransformJobArn;
  }
  export interface CreateTrialComponentRequest {
    /**
     * The name of the component. The name must be unique in your AWS account and is not case-sensitive.
     */
    TrialComponentName: ExperimentEntityName;
    /**
     * The name of the component as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    /**
     * The status of the component. States include:   InProgress   Completed   Failed  
     */
    Status?: TrialComponentStatus;
    /**
     * When the component started.
     */
    StartTime?: Timestamp;
    /**
     * When the component ended.
     */
    EndTime?: Timestamp;
    /**
     * The hyperparameters for the component.
     */
    Parameters?: TrialComponentParameters;
    /**
     * The input artifacts for the component. Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types.
     */
    InputArtifacts?: TrialComponentArtifacts;
    /**
     * The output artifacts for the component. Examples of output artifacts are metrics, snapshots, logs, and images.
     */
    OutputArtifacts?: TrialComponentArtifacts;
    /**
     * A list of tags to associate with the component. You can use Search API to search on the tags.
     */
    Tags?: TagList;
  }
  export interface CreateTrialComponentResponse {
    /**
     * The Amazon Resource Name (ARN) of the trial component.
     */
    TrialComponentArn?: TrialComponentArn;
  }
  export interface CreateTrialRequest {
    /**
     * The name of the trial. The name must be unique in your AWS account and is not case-sensitive.
     */
    TrialName: ExperimentEntityName;
    /**
     * The name of the trial as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    /**
     * The name of the experiment to associate the trial with.
     */
    ExperimentName: ExperimentEntityName;
    /**
     * A list of tags to associate with the trial. You can use Search API to search on the tags.
     */
    Tags?: TagList;
  }
  export interface CreateTrialResponse {
    /**
     * The Amazon Resource Name (ARN) of the trial.
     */
    TrialArn?: TrialArn;
  }
  export interface CreateUserProfileRequest {
    /**
     * The ID of the associated Domain.
     */
    DomainId: DomainId;
    /**
     * A name for the UserProfile.
     */
    UserProfileName: UserProfileName;
    /**
     * A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified. 
     */
    SingleSignOnUserIdentifier?: SingleSignOnUserIdentifier;
    /**
     * The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified. 
     */
    SingleSignOnUserValue?: String256;
    /**
     * Each tag consists of a key and an optional value. Tag keys must be unique per resource.
     */
    Tags?: TagList;
    /**
     * A collection of settings.
     */
    UserSettings?: UserSettings;
  }
  export interface CreateUserProfileResponse {
    /**
     * The user profile Amazon Resource Name (ARN).
     */
    UserProfileArn?: UserProfileArn;
  }
  export interface CreateWorkforceRequest {
    /**
     * Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single  Amazon Cognito user pool. Do not use OidcConfig if you specify values for CognitoConfig.
     */
    CognitoConfig?: CognitoConfig;
    /**
     * Use this parameter to configure a private workforce using your own OIDC Identity Provider. Do not use CognitoConfig if you specify values for OidcConfig.
     */
    OidcConfig?: OidcConfig;
    SourceIpConfig?: SourceIpConfig;
    /**
     * The name of the private workforce.
     */
    WorkforceName: WorkforceName;
    /**
     * An array of key-value pairs that contain metadata to help you categorize and organize our workforce. Each tag consists of a key and a value, both of which you define.
     */
    Tags?: TagList;
  }
  export interface CreateWorkforceResponse {
    /**
     * The Amazon Resource Name (ARN) of the workforce.
     */
    WorkforceArn: WorkforceArn;
  }
  export interface CreateWorkteamRequest {
    /**
     * The name of the work team. Use this name to identify the work team.
     */
    WorkteamName: WorkteamName;
    /**
     * The name of the workforce.
     */
    WorkforceName?: WorkforceName;
    /**
     * A list of MemberDefinition objects that contains objects that identify the workers that make up the work team.  Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use CognitoMemberDefinition. For workforces created using your own OIDC identity provider (IdP) use OidcMemberDefinition. Do not provide input for both of these parameters in a single request. For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito user groups within the user pool used to create a workforce. All of the CognitoMemberDefinition objects that make up the member definition must have the same ClientId and UserPool values. To add a Amazon Cognito user group to an existing worker pool, see Adding groups to a User Pool. For more information about user pools, see Amazon Cognito User Pools. For workforces created using your own OIDC IdP, specify the user groups that you want to include in your private work team in OidcMemberDefinition by listing those groups in Groups.
     */
    MemberDefinitions: MemberDefinitions;
    /**
     * A description of the work team.
     */
    Description: String200;
    /**
     * Configures notification of workers regarding available or expiring work items.
     */
    NotificationConfiguration?: NotificationConfiguration;
    /**
     * An array of key-value pairs. For more information, see Resource Tag and Using Cost Allocation Tags in the  AWS Billing and Cost Management User Guide.
     */
    Tags?: TagList;
  }
  export interface CreateWorkteamResponse {
    /**
     * The Amazon Resource Name (ARN) of the work team. You can use this ARN to identify the work team.
     */
    WorkteamArn?: WorkteamArn;
  }
  export type CreationTime = Date;
  export type CsvContentType = string;
  export type CsvContentTypes = CsvContentType[];
  export interface DataCaptureConfig {
    /**
     * 
     */
    EnableCapture?: EnableCapture;
    /**
     * 
     */
    InitialSamplingPercentage: SamplingPercentage;
    /**
     * 
     */
    DestinationS3Uri: DestinationS3Uri;
    /**
     * 
     */
    KmsKeyId?: KmsKeyId;
    /**
     * 
     */
    CaptureOptions: CaptureOptionList;
    /**
     * 
     */
    CaptureContentTypeHeader?: CaptureContentTypeHeader;
  }
  export interface DataCaptureConfigSummary {
    /**
     * 
     */
    EnableCapture: EnableCapture;
    /**
     * 
     */
    CaptureStatus: CaptureStatus;
    /**
     * 
     */
    CurrentSamplingPercentage: SamplingPercentage;
    /**
     * 
     */
    DestinationS3Uri: DestinationS3Uri;
    /**
     * 
     */
    KmsKeyId: KmsKeyId;
  }
  export type DataExplorationNotebookLocation = string;
  export type DataInputConfig = string;
  export interface DataProcessing {
    /**
     * A JSONPath expression used to select a portion of the input data to pass to the algorithm. Use the InputFilter parameter to exclude fields, such as an ID column, from the input. If you want Amazon SageMaker to pass the entire input dataset to the algorithm, accept the default value $. Examples: "$", "$[1:]", "$.features" 
     */
    InputFilter?: JsonPath;
    /**
     * A JSONPath expression used to select a portion of the joined dataset to save in the output file for a batch transform job. If you want Amazon SageMaker to store the entire input dataset in the output file, leave the default value, $. If you specify indexes that aren't within the dimension size of the joined dataset, you get an error. Examples: "$", "$[0,5:]", "$['id','SageMakerOutput']" 
     */
    OutputFilter?: JsonPath;
    /**
     * Specifies the source of the data to join with the transformed data. The valid values are None and Input. The default value is None, which specifies not to join the input with the transformed data. If you want the batch transform job to join the original input data with the transformed data, set JoinSource to Input.  For JSON or JSONLines objects, such as a JSON array, Amazon SageMaker adds the transformed data to the input JSON object in an attribute called SageMakerOutput. The joined result for JSON must be a key-value pair object. If the input is not a key-value pair object, Amazon SageMaker creates a new JSON file. In the new JSON file, and the input data is stored under the SageMakerInput key and the results are stored in SageMakerOutput. For CSV files, Amazon SageMaker combines the transformed data with the input data at the end of the input data and stores it in the output file. The joined data has the joined input data followed by the transformed data and the output is a CSV file. 
     */
    JoinSource?: JoinSource;
  }
  export interface DataSource {
    /**
     * The S3 location of the data source that is associated with a channel.
     */
    S3DataSource?: S3DataSource;
    /**
     * The file system that is associated with a channel.
     */
    FileSystemDataSource?: FileSystemDataSource;
  }
  export interface DebugHookConfig {
    /**
     * Path to local storage location for tensors. Defaults to /opt/ml/output/tensors/.
     */
    LocalPath?: DirectoryPath;
    /**
     * Path to Amazon S3 storage location for tensors.
     */
    S3OutputPath: S3Uri;
    /**
     * Configuration information for the debug hook parameters.
     */
    HookParameters?: HookParameters;
    /**
     * Configuration information for tensor collections.
     */
    CollectionConfigurations?: CollectionConfigurations;
  }
  export interface DebugRuleConfiguration {
    /**
     * The name of the rule configuration. It must be unique relative to other rule configuration names.
     */
    RuleConfigurationName: RuleConfigurationName;
    /**
     * Path to local storage location for output of rules. Defaults to /opt/ml/processing/output/rule/.
     */
    LocalPath?: DirectoryPath;
    /**
     * Path to Amazon S3 storage location for rules.
     */
    S3OutputPath?: S3Uri;
    /**
     * The Amazon Elastic Container (ECR) Image for the managed rule evaluation.
     */
    RuleEvaluatorImage: AlgorithmImage;
    /**
     * The instance type to deploy for a training job.
     */
    InstanceType?: ProcessingInstanceType;
    /**
     * The size, in GB, of the ML storage volume attached to the processing instance.
     */
    VolumeSizeInGB?: OptionalVolumeSizeInGB;
    /**
     *  Runtime configuration for rule container.
     */
    RuleParameters?: RuleParameters;
  }
  export type DebugRuleConfigurations = DebugRuleConfiguration[];
  export interface DebugRuleEvaluationStatus {
    /**
     * The name of the rule configuration
     */
    RuleConfigurationName?: RuleConfigurationName;
    /**
     * The Amazon Resource Name (ARN) of the rule evaluation job.
     */
    RuleEvaluationJobArn?: ProcessingJobArn;
    /**
     * Status of the rule evaluation.
     */
    RuleEvaluationStatus?: RuleEvaluationStatus;
    /**
     * Details from the rule evaluation.
     */
    StatusDetails?: StatusDetails;
    /**
     * Timestamp when the rule evaluation status was last modified.
     */
    LastModifiedTime?: Timestamp;
  }
  export type DebugRuleEvaluationStatuses = DebugRuleEvaluationStatus[];
  export interface DeleteAlgorithmInput {
    /**
     * The name of the algorithm to delete.
     */
    AlgorithmName: EntityName;
  }
  export interface DeleteAppRequest {
    /**
     * The domain ID.
     */
    DomainId: DomainId;
    /**
     * The user profile name.
     */
    UserProfileName: UserProfileName;
    /**
     * The type of app.
     */
    AppType: AppType;
    /**
     * The name of the app.
     */
    AppName: AppName;
  }
  export interface DeleteCodeRepositoryInput {
    /**
     * The name of the Git repository to delete.
     */
    CodeRepositoryName: EntityName;
  }
  export interface DeleteDomainRequest {
    /**
     * The domain ID.
     */
    DomainId: DomainId;
    /**
     * The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted. By default, all resources are retained (not automatically deleted). 
     */
    RetentionPolicy?: RetentionPolicy;
  }
  export interface DeleteEndpointConfigInput {
    /**
     * The name of the endpoint configuration that you want to delete.
     */
    EndpointConfigName: EndpointConfigName;
  }
  export interface DeleteEndpointInput {
    /**
     * The name of the endpoint that you want to delete.
     */
    EndpointName: EndpointName;
  }
  export interface DeleteExperimentRequest {
    /**
     * The name of the experiment to delete.
     */
    ExperimentName: ExperimentEntityName;
  }
  export interface DeleteExperimentResponse {
    /**
     * The Amazon Resource Name (ARN) of the experiment that is being deleted.
     */
    ExperimentArn?: ExperimentArn;
  }
  export interface DeleteFlowDefinitionRequest {
    /**
     * The name of the flow definition you are deleting.
     */
    FlowDefinitionName: FlowDefinitionName;
  }
  export interface DeleteFlowDefinitionResponse {
  }
  export interface DeleteHumanTaskUiRequest {
    /**
     * The name of the human task user interface (work task template) you want to delete.
     */
    HumanTaskUiName: HumanTaskUiName;
  }
  export interface DeleteHumanTaskUiResponse {
  }
  export interface DeleteModelInput {
    /**
     * The name of the model to delete.
     */
    ModelName: ModelName;
  }
  export interface DeleteModelPackageInput {
    /**
     * The name of the model package. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).
     */
    ModelPackageName: EntityName;
  }
  export interface DeleteMonitoringScheduleRequest {
    /**
     * The name of the monitoring schedule to delete.
     */
    MonitoringScheduleName: MonitoringScheduleName;
  }
  export interface DeleteNotebookInstanceInput {
    /**
     * The name of the Amazon SageMaker notebook instance to delete.
     */
    NotebookInstanceName: NotebookInstanceName;
  }
  export interface DeleteNotebookInstanceLifecycleConfigInput {
    /**
     * The name of the lifecycle configuration to delete.
     */
    NotebookInstanceLifecycleConfigName: NotebookInstanceLifecycleConfigName;
  }
  export interface DeleteTagsInput {
    /**
     * The Amazon Resource Name (ARN) of the resource whose tags you want to delete.
     */
    ResourceArn: ResourceArn;
    /**
     * An array or one or more tag keys to delete.
     */
    TagKeys: TagKeyList;
  }
  export interface DeleteTagsOutput {
  }
  export interface DeleteTrialComponentRequest {
    /**
     * The name of the component to delete.
     */
    TrialComponentName: ExperimentEntityName;
  }
  export interface DeleteTrialComponentResponse {
    /**
     * The Amazon Resource Name (ARN) of the component is being deleted.
     */
    TrialComponentArn?: TrialComponentArn;
  }
  export interface DeleteTrialRequest {
    /**
     * The name of the trial to delete.
     */
    TrialName: ExperimentEntityName;
  }
  export interface DeleteTrialResponse {
    /**
     * The Amazon Resource Name (ARN) of the trial that is being deleted.
     */
    TrialArn?: TrialArn;
  }
  export interface DeleteUserProfileRequest {
    /**
     * The domain ID.
     */
    DomainId: DomainId;
    /**
     * The user profile name.
     */
    UserProfileName: UserProfileName;
  }
  export interface DeleteWorkforceRequest {
    /**
     * The name of the workforce.
     */
    WorkforceName: WorkforceName;
  }
  export interface DeleteWorkforceResponse {
  }
  export interface DeleteWorkteamRequest {
    /**
     * The name of the work team to delete.
     */
    WorkteamName: WorkteamName;
  }
  export interface DeleteWorkteamResponse {
    /**
     * Returns true if the work team was successfully deleted; otherwise, returns false.
     */
    Success: Success;
  }
  export interface DeployedImage {
    /**
     * The image path you specified when you created the model.
     */
    SpecifiedImage?: ContainerImage;
    /**
     * The specific digest path of the image hosted in this ProductionVariant.
     */
    ResolvedImage?: ContainerImage;
    /**
     * The date and time when the image path for the model resolved to the ResolvedImage 
     */
    ResolutionTime?: Timestamp;
  }
  export type DeployedImages = DeployedImage[];
  export interface DescribeAlgorithmInput {
    /**
     * The name of the algorithm to describe.
     */
    AlgorithmName: ArnOrName;
  }
  export interface DescribeAlgorithmOutput {
    /**
     * The name of the algorithm being described.
     */
    AlgorithmName: EntityName;
    /**
     * The Amazon Resource Name (ARN) of the algorithm.
     */
    AlgorithmArn: AlgorithmArn;
    /**
     * A brief summary about the algorithm.
     */
    AlgorithmDescription?: EntityDescription;
    /**
     * A timestamp specifying when the algorithm was created.
     */
    CreationTime: CreationTime;
    /**
     * Details about training jobs run by this algorithm.
     */
    TrainingSpecification: TrainingSpecification;
    /**
     * Details about inference jobs that the algorithm runs.
     */
    InferenceSpecification?: InferenceSpecification;
    /**
     * Details about configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm.
     */
    ValidationSpecification?: AlgorithmValidationSpecification;
    /**
     * The current status of the algorithm.
     */
    AlgorithmStatus: AlgorithmStatus;
    /**
     * Details about the current status of the algorithm.
     */
    AlgorithmStatusDetails: AlgorithmStatusDetails;
    /**
     * The product identifier of the algorithm.
     */
    ProductId?: ProductId;
    /**
     * Whether the algorithm is certified to be listed in AWS Marketplace.
     */
    CertifyForMarketplace?: CertifyForMarketplace;
  }
  export interface DescribeAppRequest {
    /**
     * The domain ID.
     */
    DomainId: DomainId;
    /**
     * The user profile name.
     */
    UserProfileName: UserProfileName;
    /**
     * The type of app.
     */
    AppType: AppType;
    /**
     * The name of the app.
     */
    AppName: AppName;
  }
  export interface DescribeAppResponse {
    /**
     * The app's Amazon Resource Name (ARN).
     */
    AppArn?: AppArn;
    /**
     * The type of app.
     */
    AppType?: AppType;
    /**
     * The name of the app.
     */
    AppName?: AppName;
    /**
     * The domain ID.
     */
    DomainId?: DomainId;
    /**
     * The user profile name.
     */
    UserProfileName?: UserProfileName;
    /**
     * The status.
     */
    Status?: AppStatus;
    /**
     * The timestamp of the last health check.
     */
    LastHealthCheckTimestamp?: Timestamp;
    /**
     * The timestamp of the last user's activity.
     */
    LastUserActivityTimestamp?: Timestamp;
    /**
     * The creation time.
     */
    CreationTime?: CreationTime;
    /**
     * The failure reason.
     */
    FailureReason?: FailureReason;
    /**
     * The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.
     */
    ResourceSpec?: ResourceSpec;
  }
  export interface DescribeAutoMLJobRequest {
    /**
     * Request information about a job using that job's unique name.
     */
    AutoMLJobName: AutoMLJobName;
  }
  export interface DescribeAutoMLJobResponse {
    /**
     * Returns the name of a job.
     */
    AutoMLJobName: AutoMLJobName;
    /**
     * Returns the job's ARN.
     */
    AutoMLJobArn: AutoMLJobArn;
    /**
     * Returns the job's input data config.
     */
    InputDataConfig: AutoMLInputDataConfig;
    /**
     * Returns the job's output data config.
     */
    OutputDataConfig: AutoMLOutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that has read permission to the input data location and write permission to the output data location in Amazon S3.
     */
    RoleArn: RoleArn;
    /**
     * Returns the job's objective.
     */
    AutoMLJobObjective?: AutoMLJobObjective;
    /**
     * Returns the job's problem type.
     */
    ProblemType?: ProblemType;
    /**
     * Returns the job's config.
     */
    AutoMLJobConfig?: AutoMLJobConfig;
    /**
     * Returns the job's creation time.
     */
    CreationTime: Timestamp;
    /**
     * Returns the job's end time.
     */
    EndTime?: Timestamp;
    /**
     * Returns the job's last modified time.
     */
    LastModifiedTime: Timestamp;
    /**
     * Returns the job's FailureReason.
     */
    FailureReason?: AutoMLFailureReason;
    /**
     * Returns the job's BestCandidate.
     */
    BestCandidate?: AutoMLCandidate;
    /**
     * Returns the job's AutoMLJobStatus.
     */
    AutoMLJobStatus: AutoMLJobStatus;
    /**
     * Returns the job's AutoMLJobSecondaryStatus.
     */
    AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus;
    /**
     * Returns the job's output from GenerateCandidateDefinitionsOnly.
     */
    GenerateCandidateDefinitionsOnly?: GenerateCandidateDefinitionsOnly;
    /**
     * Returns information on the job's artifacts found in AutoMLJobArtifacts.
     */
    AutoMLJobArtifacts?: AutoMLJobArtifacts;
    /**
     * This contains ProblemType, AutoMLJobObjective and CompletionCriteria. They're auto-inferred values, if not provided by you. If you do provide them, then they'll be the same as provided.
     */
    ResolvedAttributes?: ResolvedAttributes;
  }
  export interface DescribeCodeRepositoryInput {
    /**
     * The name of the Git repository to describe.
     */
    CodeRepositoryName: EntityName;
  }
  export interface DescribeCodeRepositoryOutput {
    /**
     * The name of the Git repository.
     */
    CodeRepositoryName: EntityName;
    /**
     * The Amazon Resource Name (ARN) of the Git repository.
     */
    CodeRepositoryArn: CodeRepositoryArn;
    /**
     * The date and time that the repository was created.
     */
    CreationTime: CreationTime;
    /**
     * The date and time that the repository was last changed.
     */
    LastModifiedTime: LastModifiedTime;
    /**
     * Configuration details about the repository, including the URL where the repository is located, the default branch, and the Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the repository.
     */
    GitConfig?: GitConfig;
  }
  export interface DescribeCompilationJobRequest {
    /**
     * The name of the model compilation job that you want information about.
     */
    CompilationJobName: EntityName;
  }
  export interface DescribeCompilationJobResponse {
    /**
     * The name of the model compilation job.
     */
    CompilationJobName: EntityName;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker assumes to perform the model compilation job.
     */
    CompilationJobArn: CompilationJobArn;
    /**
     * The status of the model compilation job.
     */
    CompilationJobStatus: CompilationJobStatus;
    /**
     * The time when the model compilation job started the CompilationJob instances.  You are billed for the time between this timestamp and the timestamp in the DescribeCompilationJobResponse$CompilationEndTime field. In Amazon CloudWatch Logs, the start time might be later than this time. That's because it takes time to download the compilation job, which depends on the size of the compilation job container. 
     */
    CompilationStartTime?: Timestamp;
    /**
     * The time when the model compilation job on a compilation job instance ended. For a successful or stopped job, this is when the job's model artifacts have finished uploading. For a failed job, this is when Amazon SageMaker detected that the job failed. 
     */
    CompilationEndTime?: Timestamp;
    /**
     * Specifies a limit to how long a model compilation job can run. When the job reaches the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training costs.
     */
    StoppingCondition: StoppingCondition;
    /**
     * The time that the model compilation job was created.
     */
    CreationTime: CreationTime;
    /**
     * The time that the status of the model compilation job was last modified.
     */
    LastModifiedTime: LastModifiedTime;
    /**
     * If a model compilation job failed, the reason it failed. 
     */
    FailureReason: FailureReason;
    /**
     * Information about the location in Amazon S3 that has been configured for storing the model artifacts used in the compilation job.
     */
    ModelArtifacts: ModelArtifacts;
    /**
     * The Amazon Resource Name (ARN) of the model compilation job.
     */
    RoleArn: RoleArn;
    /**
     * Information about the location in Amazon S3 of the input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
     */
    InputConfig: InputConfig;
    /**
     * Information about the output location for the compiled model and the target device that the model runs on.
     */
    OutputConfig: OutputConfig;
  }
  export interface DescribeDomainRequest {
    /**
     * The domain ID.
     */
    DomainId: DomainId;
  }
  export interface DescribeDomainResponse {
    /**
     * The domain's Amazon Resource Name (ARN).
     */
    DomainArn?: DomainArn;
    /**
     * The domain ID.
     */
    DomainId?: DomainId;
    /**
     * The domain name.
     */
    DomainName?: DomainName;
    /**
     * The ID of the Amazon Elastic File System (EFS) managed by this Domain.
     */
    HomeEfsFileSystemId?: ResourceId;
    /**
     * The SSO managed application instance ID.
     */
    SingleSignOnManagedApplicationInstanceId?: String256;
    /**
     * The status.
     */
    Status?: DomainStatus;
    /**
     * The creation time.
     */
    CreationTime?: CreationTime;
    /**
     * The last modified time.
     */
    LastModifiedTime?: LastModifiedTime;
    /**
     * The failure reason.
     */
    FailureReason?: FailureReason;
    /**
     * The domain's authentication mode.
     */
    AuthMode?: AuthMode;
    /**
     * Settings which are applied to all UserProfile in this domain, if settings are not explicitly specified in a given UserProfile. 
     */
    DefaultUserSettings?: UserSettings;
    /**
     * The AWS Key Management Service encryption key ID.
     */
    HomeEfsFileSystemKmsKeyId?: KmsKeyId;
    /**
     * Security setting to limit to a set of subnets.
     */
    SubnetIds?: Subnets;
    /**
     * The domain's URL.
     */
    Url?: String1024;
    /**
     * The ID of the Amazon Virtual Private Cloud.
     */
    VpcId?: VpcId;
  }
  export interface DescribeEndpointConfigInput {
    /**
     * The name of the endpoint configuration.
     */
    EndpointConfigName: EndpointConfigName;
  }
  export interface DescribeEndpointConfigOutput {
    /**
     * Name of the Amazon SageMaker endpoint configuration.
     */
    EndpointConfigName: EndpointConfigName;
    /**
     * The Amazon Resource Name (ARN) of the endpoint configuration.
     */
    EndpointConfigArn: EndpointConfigArn;
    /**
     * An array of ProductionVariant objects, one for each model that you want to host at this endpoint.
     */
    ProductionVariants: ProductionVariantList;
    DataCaptureConfig?: DataCaptureConfig;
    /**
     * AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance.
     */
    KmsKeyId?: KmsKeyId;
    /**
     * A timestamp that shows when the endpoint configuration was created.
     */
    CreationTime: Timestamp;
  }
  export interface DescribeEndpointInput {
    /**
     * The name of the endpoint.
     */
    EndpointName: EndpointName;
  }
  export interface DescribeEndpointOutput {
    /**
     * Name of the endpoint.
     */
    EndpointName: EndpointName;
    /**
     * The Amazon Resource Name (ARN) of the endpoint.
     */
    EndpointArn: EndpointArn;
    /**
     * The name of the endpoint configuration associated with this endpoint.
     */
    EndpointConfigName: EndpointConfigName;
    /**
     *  An array of ProductionVariantSummary objects, one for each model hosted behind this endpoint. 
     */
    ProductionVariants?: ProductionVariantSummaryList;
    DataCaptureConfig?: DataCaptureConfigSummary;
    /**
     * The status of the endpoint.    OutOfService: Endpoint is not available to take incoming requests.    Creating: CreateEndpoint is executing.    Updating: UpdateEndpoint or UpdateEndpointWeightsAndCapacities is executing.    SystemUpdating: Endpoint is undergoing maintenance and cannot be updated or deleted or re-scaled until it has completed. This maintenance operation does not change any customer-specified values such as VPC config, KMS encryption, model, instance type, or instance count.    RollingBack: Endpoint fails to scale up or down or change its variant weight and is in the process of rolling back to its previous configuration. Once the rollback completes, endpoint returns to an InService status. This transitional status only applies to an endpoint that has autoscaling enabled and is undergoing variant weight or capacity changes as part of an UpdateEndpointWeightsAndCapacities call or when the UpdateEndpointWeightsAndCapacities operation is called explicitly.    InService: Endpoint is available to process incoming requests.    Deleting: DeleteEndpoint is executing.    Failed: Endpoint could not be created, updated, or re-scaled. Use DescribeEndpointOutput$FailureReason for information about the failure. DeleteEndpoint is the only operation that can be performed on a failed endpoint.  
     */
    EndpointStatus: EndpointStatus;
    /**
     * If the status of the endpoint is Failed, the reason why it failed. 
     */
    FailureReason?: FailureReason;
    /**
     * A timestamp that shows when the endpoint was created.
     */
    CreationTime: Timestamp;
    /**
     * A timestamp that shows when the endpoint was last modified.
     */
    LastModifiedTime: Timestamp;
  }
  export interface DescribeExperimentRequest {
    /**
     * The name of the experiment to describe.
     */
    ExperimentName: ExperimentEntityName;
  }
  export interface DescribeExperimentResponse {
    /**
     * The name of the experiment.
     */
    ExperimentName?: ExperimentEntityName;
    /**
     * The Amazon Resource Name (ARN) of the experiment.
     */
    ExperimentArn?: ExperimentArn;
    /**
     * The name of the experiment as displayed. If DisplayName isn't specified, ExperimentName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    /**
     * The ARN of the source and, optionally, the type.
     */
    Source?: ExperimentSource;
    /**
     * The description of the experiment.
     */
    Description?: ExperimentDescription;
    /**
     * When the experiment was created.
     */
    CreationTime?: Timestamp;
    /**
     * Who created the experiment.
     */
    CreatedBy?: UserContext;
    /**
     * When the experiment was last modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * Who last modified the experiment.
     */
    LastModifiedBy?: UserContext;
  }
  export interface DescribeFlowDefinitionRequest {
    /**
     * The name of the flow definition.
     */
    FlowDefinitionName: FlowDefinitionName;
  }
  export interface DescribeFlowDefinitionResponse {
    /**
     * The Amazon Resource Name (ARN) of the flow defintion.
     */
    FlowDefinitionArn: FlowDefinitionArn;
    /**
     * The Amazon Resource Name (ARN) of the flow definition.
     */
    FlowDefinitionName: FlowDefinitionName;
    /**
     * The status of the flow definition. Valid values are listed below.
     */
    FlowDefinitionStatus: FlowDefinitionStatus;
    /**
     * The timestamp when the flow definition was created.
     */
    CreationTime: Timestamp;
    /**
     * Container for configuring the source of human task requests. Used to specify if Amazon Rekognition or Amazon Textract is used as an integration source.
     */
    HumanLoopRequestSource?: HumanLoopRequestSource;
    /**
     * An object containing information about what triggers a human review workflow.
     */
    HumanLoopActivationConfig?: HumanLoopActivationConfig;
    /**
     * An object containing information about who works on the task, the workforce task price, and other task details.
     */
    HumanLoopConfig: HumanLoopConfig;
    /**
     * An object containing information about the output file.
     */
    OutputConfig: FlowDefinitionOutputConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) execution role for the flow definition.
     */
    RoleArn: RoleArn;
    /**
     * The reason your flow definition failed.
     */
    FailureReason?: FailureReason;
  }
  export interface DescribeHumanTaskUiRequest {
    /**
     * The name of the human task user interface (worker task template) you want information about.
     */
    HumanTaskUiName: HumanTaskUiName;
  }
  export interface DescribeHumanTaskUiResponse {
    /**
     * The Amazon Resource Name (ARN) of the human task user interface (worker task template).
     */
    HumanTaskUiArn: HumanTaskUiArn;
    /**
     * The name of the human task user interface (worker task template).
     */
    HumanTaskUiName: HumanTaskUiName;
    /**
     * The status of the human task user interface (worker task template). Valid values are listed below.
     */
    HumanTaskUiStatus?: HumanTaskUiStatus;
    /**
     * The timestamp when the human task user interface was created.
     */
    CreationTime: Timestamp;
    UiTemplate: UiTemplateInfo;
  }
  export interface DescribeHyperParameterTuningJobRequest {
    /**
     * The name of the tuning job.
     */
    HyperParameterTuningJobName: HyperParameterTuningJobName;
  }
  export interface DescribeHyperParameterTuningJobResponse {
    /**
     * The name of the tuning job.
     */
    HyperParameterTuningJobName: HyperParameterTuningJobName;
    /**
     * The Amazon Resource Name (ARN) of the tuning job.
     */
    HyperParameterTuningJobArn: HyperParameterTuningJobArn;
    /**
     * The HyperParameterTuningJobConfig object that specifies the configuration of the tuning job.
     */
    HyperParameterTuningJobConfig: HyperParameterTuningJobConfig;
    /**
     * The HyperParameterTrainingJobDefinition object that specifies the definition of the training jobs that this tuning job launches.
     */
    TrainingJobDefinition?: HyperParameterTrainingJobDefinition;
    /**
     * A list of the HyperParameterTrainingJobDefinition objects launched for this tuning job.
     */
    TrainingJobDefinitions?: HyperParameterTrainingJobDefinitions;
    /**
     * The status of the tuning job: InProgress, Completed, Failed, Stopping, or Stopped.
     */
    HyperParameterTuningJobStatus: HyperParameterTuningJobStatus;
    /**
     * The date and time that the tuning job started.
     */
    CreationTime: Timestamp;
    /**
     * The date and time that the tuning job ended.
     */
    HyperParameterTuningEndTime?: Timestamp;
    /**
     * The date and time that the status of the tuning job was modified. 
     */
    LastModifiedTime?: Timestamp;
    /**
     * The TrainingJobStatusCounters object that specifies the number of training jobs, categorized by status, that this tuning job launched.
     */
    TrainingJobStatusCounters: TrainingJobStatusCounters;
    /**
     * The ObjectiveStatusCounters object that specifies the number of training jobs, categorized by the status of their final objective metric, that this tuning job launched.
     */
    ObjectiveStatusCounters: ObjectiveStatusCounters;
    /**
     * A TrainingJobSummary object that describes the training job that completed with the best current HyperParameterTuningJobObjective.
     */
    BestTrainingJob?: HyperParameterTrainingJobSummary;
    /**
     * If the hyperparameter tuning job is an warm start tuning job with a WarmStartType of IDENTICAL_DATA_AND_ALGORITHM, this is the TrainingJobSummary for the training job with the best objective metric value of all training jobs launched by this tuning job and all parent jobs specified for the warm start tuning job.
     */
    OverallBestTrainingJob?: HyperParameterTrainingJobSummary;
    /**
     * The configuration for starting the hyperparameter parameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.
     */
    WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;
    /**
     * If the tuning job failed, the reason it failed.
     */
    FailureReason?: FailureReason;
  }
  export interface DescribeLabelingJobRequest {
    /**
     * The name of the labeling job to return information for.
     */
    LabelingJobName: LabelingJobName;
  }
  export interface DescribeLabelingJobResponse {
    /**
     * The processing status of the labeling job. 
     */
    LabelingJobStatus: LabelingJobStatus;
    /**
     * Provides a breakdown of the number of data objects labeled by humans, the number of objects labeled by machine, the number of objects than couldn't be labeled, and the total number of objects labeled. 
     */
    LabelCounters: LabelCounters;
    /**
     * If the job failed, the reason that it failed. 
     */
    FailureReason?: FailureReason;
    /**
     * The date and time that the labeling job was created.
     */
    CreationTime: Timestamp;
    /**
     * The date and time that the labeling job was last updated.
     */
    LastModifiedTime: Timestamp;
    /**
     * A unique identifier for work done as part of a labeling job.
     */
    JobReferenceCode: JobReferenceCode;
    /**
     * The name assigned to the labeling job when it was created.
     */
    LabelingJobName: LabelingJobName;
    /**
     * The Amazon Resource Name (ARN) of the labeling job.
     */
    LabelingJobArn: LabelingJobArn;
    /**
     * The attribute used as the label in the output manifest file.
     */
    LabelAttributeName?: LabelAttributeName;
    /**
     * Input configuration information for the labeling job, such as the Amazon S3 location of the data objects and the location of the manifest file that describes the data objects.
     */
    InputConfig: LabelingJobInputConfig;
    /**
     * The location of the job's output data and the AWS Key Management Service key ID for the key used to encrypt the output data, if any.
     */
    OutputConfig: LabelingJobOutputConfig;
    /**
     * The Amazon Resource Name (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during data labeling.
     */
    RoleArn: RoleArn;
    /**
     * The S3 location of the JSON file that defines the categories used to label data objects. Please note the following label-category limits:   Semantic segmentation labeling jobs using automated labeling: 20 labels   Box bounding labeling jobs (all): 10 labels   The file is a JSON structure in the following format:  {    "document-version": "2018-11-28"    "labels": [    {    "label": "label 1"    },    {    "label": "label 2"    },    ...    {    "label": "label n"    }    ]   } 
     */
    LabelCategoryConfigS3Uri?: S3Uri;
    /**
     * A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped.
     */
    StoppingConditions?: LabelingJobStoppingConditions;
    /**
     * Configuration information for automated data labeling.
     */
    LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;
    /**
     * Configuration information required for human workers to complete a labeling task.
     */
    HumanTaskConfig: HumanTaskConfig;
    /**
     * An array of key/value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
     */
    Tags?: TagList;
    /**
     * The location of the output produced by the labeling job.
     */
    LabelingJobOutput?: LabelingJobOutput;
  }
  export interface DescribeModelInput {
    /**
     * The name of the model.
     */
    ModelName: ModelName;
  }
  export interface DescribeModelOutput {
    /**
     * Name of the Amazon SageMaker model.
     */
    ModelName: ModelName;
    /**
     * The location of the primary inference code, associated artifacts, and custom environment map that the inference code uses when it is deployed in production. 
     */
    PrimaryContainer?: ContainerDefinition;
    /**
     * The containers in the inference pipeline.
     */
    Containers?: ContainerDefinitionList;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the model.
     */
    ExecutionRoleArn: RoleArn;
    /**
     * A VpcConfig object that specifies the VPC that this model has access to. For more information, see Protect Endpoints by Using an Amazon Virtual Private Cloud 
     */
    VpcConfig?: VpcConfig;
    /**
     * A timestamp that shows when the model was created.
     */
    CreationTime: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the model.
     */
    ModelArn: ModelArn;
    /**
     * If True, no inbound or outbound network calls can be made to or from the model container.
     */
    EnableNetworkIsolation?: Boolean;
  }
  export interface DescribeModelPackageInput {
    /**
     * The name of the model package to describe.
     */
    ModelPackageName: ArnOrName;
  }
  export interface DescribeModelPackageOutput {
    /**
     * The name of the model package being described.
     */
    ModelPackageName: EntityName;
    /**
     * The Amazon Resource Name (ARN) of the model package.
     */
    ModelPackageArn: ModelPackageArn;
    /**
     * A brief summary of the model package.
     */
    ModelPackageDescription?: EntityDescription;
    /**
     * A timestamp specifying when the model package was created.
     */
    CreationTime: CreationTime;
    /**
     * Details about inference jobs that can be run with models based on this model package.
     */
    InferenceSpecification?: InferenceSpecification;
    /**
     * Details about the algorithm that was used to create the model package.
     */
    SourceAlgorithmSpecification?: SourceAlgorithmSpecification;
    /**
     * Configurations for one or more transform jobs that Amazon SageMaker runs to test the model package.
     */
    ValidationSpecification?: ModelPackageValidationSpecification;
    /**
     * The current status of the model package.
     */
    ModelPackageStatus: ModelPackageStatus;
    /**
     * Details about the current status of the model package.
     */
    ModelPackageStatusDetails: ModelPackageStatusDetails;
    /**
     * Whether the model package is certified for listing on AWS Marketplace.
     */
    CertifyForMarketplace?: CertifyForMarketplace;
  }
  export interface DescribeMonitoringScheduleRequest {
    /**
     * Name of a previously created monitoring schedule.
     */
    MonitoringScheduleName: MonitoringScheduleName;
  }
  export interface DescribeMonitoringScheduleResponse {
    /**
     * The Amazon Resource Name (ARN) of the monitoring schedule.
     */
    MonitoringScheduleArn: MonitoringScheduleArn;
    /**
     * Name of the monitoring schedule.
     */
    MonitoringScheduleName: MonitoringScheduleName;
    /**
     * The status of an monitoring job.
     */
    MonitoringScheduleStatus: ScheduleStatus;
    /**
     * A string, up to one KB in size, that contains the reason a monitoring job failed, if it failed.
     */
    FailureReason?: FailureReason;
    /**
     * The time at which the monitoring job was created.
     */
    CreationTime: Timestamp;
    /**
     * The time at which the monitoring job was last modified.
     */
    LastModifiedTime: Timestamp;
    /**
     * The configuration object that specifies the monitoring schedule and defines the monitoring job.
     */
    MonitoringScheduleConfig: MonitoringScheduleConfig;
    /**
     *  The name of the endpoint for the monitoring job.
     */
    EndpointName?: EndpointName;
    /**
     * Describes metadata on the last execution to run, if there was one.
     */
    LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
  }
  export interface DescribeNotebookInstanceInput {
    /**
     * The name of the notebook instance that you want information about.
     */
    NotebookInstanceName: NotebookInstanceName;
  }
  export interface DescribeNotebookInstanceLifecycleConfigInput {
    /**
     * The name of the lifecycle configuration to describe.
     */
    NotebookInstanceLifecycleConfigName: NotebookInstanceLifecycleConfigName;
  }
  export interface DescribeNotebookInstanceLifecycleConfigOutput {
    /**
     * The Amazon Resource Name (ARN) of the lifecycle configuration.
     */
    NotebookInstanceLifecycleConfigArn?: NotebookInstanceLifecycleConfigArn;
    /**
     * The name of the lifecycle configuration.
     */
    NotebookInstanceLifecycleConfigName?: NotebookInstanceLifecycleConfigName;
    /**
     * The shell script that runs only once, when you create a notebook instance.
     */
    OnCreate?: NotebookInstanceLifecycleConfigList;
    /**
     * The shell script that runs every time you start a notebook instance, including when you create the notebook instance.
     */
    OnStart?: NotebookInstanceLifecycleConfigList;
    /**
     * A timestamp that tells when the lifecycle configuration was last modified.
     */
    LastModifiedTime?: LastModifiedTime;
    /**
     * A timestamp that tells when the lifecycle configuration was created.
     */
    CreationTime?: CreationTime;
  }
  export interface DescribeNotebookInstanceOutput {
    /**
     * The Amazon Resource Name (ARN) of the notebook instance.
     */
    NotebookInstanceArn?: NotebookInstanceArn;
    /**
     * The name of the Amazon SageMaker notebook instance. 
     */
    NotebookInstanceName?: NotebookInstanceName;
    /**
     * The status of the notebook instance.
     */
    NotebookInstanceStatus?: NotebookInstanceStatus;
    /**
     * If status is Failed, the reason it failed.
     */
    FailureReason?: FailureReason;
    /**
     * The URL that you use to connect to the Jupyter notebook that is running in your notebook instance. 
     */
    Url?: NotebookInstanceUrl;
    /**
     * The type of ML compute instance running on the notebook instance.
     */
    InstanceType?: InstanceType;
    /**
     * The ID of the VPC subnet.
     */
    SubnetId?: SubnetId;
    /**
     * The IDs of the VPC security groups.
     */
    SecurityGroups?: SecurityGroupIds;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the instance. 
     */
    RoleArn?: RoleArn;
    /**
     * The AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance. 
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The network interface IDs that Amazon SageMaker created at the time of creating the instance. 
     */
    NetworkInterfaceId?: NetworkInterfaceId;
    /**
     * A timestamp. Use this parameter to retrieve the time when the notebook instance was last modified. 
     */
    LastModifiedTime?: LastModifiedTime;
    /**
     * A timestamp. Use this parameter to return the time when the notebook instance was created
     */
    CreationTime?: CreationTime;
    /**
     * Returns the name of a notebook instance lifecycle configuration. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance 
     */
    NotebookInstanceLifecycleConfigName?: NotebookInstanceLifecycleConfigName;
    /**
     * Describes whether Amazon SageMaker provides internet access to the notebook instance. If this value is set to Disabled, the notebook instance does not have internet access, and cannot connect to Amazon SageMaker training and endpoint services. For more information, see Notebook Instances Are Internet-Enabled by Default.
     */
    DirectInternetAccess?: DirectInternetAccess;
    /**
     * The size, in GB, of the ML storage volume attached to the notebook instance.
     */
    VolumeSizeInGB?: NotebookInstanceVolumeSizeInGB;
    /**
     * A list of the Elastic Inference (EI) instance types associated with this notebook instance. Currently only one EI instance type can be associated with a notebook instance. For more information, see Using Elastic Inference in Amazon SageMaker.
     */
    AcceleratorTypes?: NotebookInstanceAcceleratorTypes;
    /**
     * The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see Associating Git Repositories with Amazon SageMaker Notebook Instances.
     */
    DefaultCodeRepository?: CodeRepositoryNameOrUrl;
    /**
     * An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see Associating Git Repositories with Amazon SageMaker Notebook Instances.
     */
    AdditionalCodeRepositories?: AdditionalCodeRepositoryNamesOrUrls;
    /**
     * Whether root access is enabled or disabled for users of the notebook instance.  Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users. 
     */
    RootAccess?: RootAccess;
  }
  export interface DescribeProcessingJobRequest {
    /**
     * The name of the processing job. The name must be unique within an AWS Region in the AWS account.
     */
    ProcessingJobName: ProcessingJobName;
  }
  export interface DescribeProcessingJobResponse {
    /**
     * The inputs for a processing job.
     */
    ProcessingInputs?: ProcessingInputs;
    /**
     * Output configuration for the processing job.
     */
    ProcessingOutputConfig?: ProcessingOutputConfig;
    /**
     * The name of the processing job. The name must be unique within an AWS Region in the AWS account.
     */
    ProcessingJobName: ProcessingJobName;
    /**
     * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
     */
    ProcessingResources: ProcessingResources;
    /**
     * The time limit for how long the processing job is allowed to run.
     */
    StoppingCondition?: ProcessingStoppingCondition;
    /**
     * Configures the processing job to run a specified container image.
     */
    AppSpecification: AppSpecification;
    /**
     * The environment variables set in the Docker container.
     */
    Environment?: ProcessingEnvironmentMap;
    /**
     * Networking options for a processing job.
     */
    NetworkConfig?: NetworkConfig;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     */
    RoleArn?: RoleArn;
    /**
     * The configuration information used to create an experiment.
     */
    ExperimentConfig?: ExperimentConfig;
    /**
     * The Amazon Resource Name (ARN) of the processing job.
     */
    ProcessingJobArn: ProcessingJobArn;
    /**
     * Provides the status of a processing job.
     */
    ProcessingJobStatus: ProcessingJobStatus;
    /**
     * An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits.
     */
    ExitMessage?: ExitMessage;
    /**
     * A string, up to one KB in size, that contains the reason a processing job failed, if it failed.
     */
    FailureReason?: FailureReason;
    /**
     * The time at which the processing job completed.
     */
    ProcessingEndTime?: Timestamp;
    /**
     * The time at which the processing job started.
     */
    ProcessingStartTime?: Timestamp;
    /**
     * The time at which the processing job was last modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * The time at which the processing job was created.
     */
    CreationTime: Timestamp;
    /**
     * The ARN of a monitoring schedule for an endpoint associated with this processing job.
     */
    MonitoringScheduleArn?: MonitoringScheduleArn;
    /**
     * The ARN of an AutoML job associated with this processing job.
     */
    AutoMLJobArn?: AutoMLJobArn;
    /**
     * The ARN of a training job associated with this processing job.
     */
    TrainingJobArn?: TrainingJobArn;
  }
  export interface DescribeSubscribedWorkteamRequest {
    /**
     * The Amazon Resource Name (ARN) of the subscribed work team to describe.
     */
    WorkteamArn: WorkteamArn;
  }
  export interface DescribeSubscribedWorkteamResponse {
    /**
     * A Workteam instance that contains information about the work team.
     */
    SubscribedWorkteam: SubscribedWorkteam;
  }
  export interface DescribeTrainingJobRequest {
    /**
     * The name of the training job.
     */
    TrainingJobName: TrainingJobName;
  }
  export interface DescribeTrainingJobResponse {
    /**
     *  Name of the model training job. 
     */
    TrainingJobName: TrainingJobName;
    /**
     * The Amazon Resource Name (ARN) of the training job.
     */
    TrainingJobArn: TrainingJobArn;
    /**
     * The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the training job was launched by a hyperparameter tuning job.
     */
    TuningJobArn?: HyperParameterTuningJobArn;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the transform or training job.
     */
    LabelingJobArn?: LabelingJobArn;
    /**
     * The Amazon Resource Name (ARN) of an AutoML job.
     */
    AutoMLJobArn?: AutoMLJobArn;
    /**
     * Information about the Amazon S3 location that is configured for storing model artifacts. 
     */
    ModelArtifacts: ModelArtifacts;
    /**
     * The status of the training job. Amazon SageMaker provides the following training job statuses:    InProgress - The training is in progress.    Completed - The training job has completed.    Failed - The training job has failed. To see the reason for the failure, see the FailureReason field in the response to a DescribeTrainingJobResponse call.    Stopping - The training job is stopping.    Stopped - The training job has stopped.   For more detailed information, see SecondaryStatus. 
     */
    TrainingJobStatus: TrainingJobStatus;
    /**
     *  Provides detailed information about the state of the training job. For detailed information on the secondary status of the training job, see StatusMessage under SecondaryStatusTransition. Amazon SageMaker provides primary statuses and secondary statuses that apply to each of them:  InProgress     Starting - Starting the training job.    Downloading - An optional stage for algorithms that support File training input mode. It indicates that data is being downloaded to the ML storage volumes.    Training - Training is in progress.    Interrupted - The job stopped because the managed spot training instances were interrupted.     Uploading - Training is complete and the model artifacts are being uploaded to the S3 location.    Completed     Completed - The training job has completed.    Failed     Failed - The training job has failed. The reason for the failure is returned in the FailureReason field of DescribeTrainingJobResponse.    Stopped     MaxRuntimeExceeded - The job stopped because it exceeded the maximum allowed runtime.    MaxWaitTimeExceeded - The job stopped because it exceeded the maximum allowed wait time.    Stopped - The training job has stopped.    Stopping     Stopping - Stopping the training job.      Valid values for SecondaryStatus are subject to change.   We no longer support the following secondary statuses:    LaunchingMLInstances     PreparingTrainingStack     DownloadingTrainingImage   
     */
    SecondaryStatus: SecondaryStatus;
    /**
     * If the training job failed, the reason it failed. 
     */
    FailureReason?: FailureReason;
    /**
     * Algorithm-specific parameters. 
     */
    HyperParameters?: HyperParameters;
    /**
     * Information about the algorithm used for training, and algorithm metadata. 
     */
    AlgorithmSpecification: AlgorithmSpecification;
    /**
     * The AWS Identity and Access Management (IAM) role configured for the training job. 
     */
    RoleArn?: RoleArn;
    /**
     * An array of Channel objects that describes each data input channel. 
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The S3 path where model artifacts that you configured when creating the job are stored. Amazon SageMaker creates subfolders for model artifacts. 
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * Resources, including ML compute instances and ML storage volumes, that are configured for model training. 
     */
    ResourceConfig: ResourceConfig;
    /**
     * A VpcConfig object that specifies the VPC that this training job has access to. For more information, see Protect Training Jobs by Using an Amazon Virtual Private Cloud.
     */
    VpcConfig?: VpcConfig;
    /**
     * Specifies a limit to how long a model training job can run. It also specifies the maximum time to wait for a spot instance. When the job reaches the time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. 
     */
    StoppingCondition: StoppingCondition;
    /**
     * A timestamp that indicates when the training job was created.
     */
    CreationTime: Timestamp;
    /**
     * Indicates the time when the training job starts on training instances. You are billed for the time interval between this time and the value of TrainingEndTime. The start time in CloudWatch Logs might be later than this time. The difference is due to the time it takes to download the training data and to the size of the training container.
     */
    TrainingStartTime?: Timestamp;
    /**
     * Indicates the time when the training job ends on training instances. You are billed for the time interval between the value of TrainingStartTime and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.
     */
    TrainingEndTime?: Timestamp;
    /**
     * A timestamp that indicates when the status of the training job was last modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * A history of all of the secondary statuses that the training job has transitioned through.
     */
    SecondaryStatusTransitions?: SecondaryStatusTransitions;
    /**
     * A collection of MetricData objects that specify the names, values, and dates and times that the training algorithm emitted to Amazon CloudWatch.
     */
    FinalMetricDataList?: FinalMetricDataList;
    /**
     * If you want to allow inbound or outbound network calls, except for calls between peers within a training cluster for distributed training, choose True. If you enable network isolation for training jobs that are configured to use a VPC, Amazon SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.
     */
    EnableNetworkIsolation?: Boolean;
    /**
     * To encrypt all communications between ML compute instances in distributed training, choose True. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithms in distributed training.
     */
    EnableInterContainerTrafficEncryption?: Boolean;
    /**
     * A Boolean indicating whether managed spot training is enabled (True) or not (False).
     */
    EnableManagedSpotTraining?: Boolean;
    CheckpointConfig?: CheckpointConfig;
    /**
     * The training time in seconds.
     */
    TrainingTimeInSeconds?: TrainingTimeInSeconds;
    /**
     * The billable time in seconds. You can calculate the savings from using managed spot training using the formula (1 - BillableTimeInSeconds / TrainingTimeInSeconds) * 100. For example, if BillableTimeInSeconds is 100 and TrainingTimeInSeconds is 500, the savings is 80%.
     */
    BillableTimeInSeconds?: BillableTimeInSeconds;
    DebugHookConfig?: DebugHookConfig;
    ExperimentConfig?: ExperimentConfig;
    /**
     * Configuration information for debugging rules.
     */
    DebugRuleConfigurations?: DebugRuleConfigurations;
    TensorBoardOutputConfig?: TensorBoardOutputConfig;
    /**
     * Status about the debug rule evaluation.
     */
    DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatuses;
  }
  export interface DescribeTransformJobRequest {
    /**
     * The name of the transform job that you want to view details of.
     */
    TransformJobName: TransformJobName;
  }
  export interface DescribeTransformJobResponse {
    /**
     * The name of the transform job.
     */
    TransformJobName: TransformJobName;
    /**
     * The Amazon Resource Name (ARN) of the transform job.
     */
    TransformJobArn: TransformJobArn;
    /**
     * The status of the transform job. If the transform job failed, the reason is returned in the FailureReason field.
     */
    TransformJobStatus: TransformJobStatus;
    /**
     * If the transform job failed, FailureReason describes why it failed. A transform job creates a log file, which includes error messages, and stores it as an Amazon S3 object. For more information, see Log Amazon SageMaker Events with Amazon CloudWatch.
     */
    FailureReason?: FailureReason;
    /**
     * The name of the model used in the transform job.
     */
    ModelName: ModelName;
    /**
     * The maximum number of parallel requests on each instance node that can be launched in a transform job. The default value is 1.
     */
    MaxConcurrentTransforms?: MaxConcurrentTransforms;
    /**
     * The timeout and maximum number of retries for processing a transform job invocation.
     */
    ModelClientConfig?: ModelClientConfig;
    /**
     * The maximum payload size, in MB, used in the transform job.
     */
    MaxPayloadInMB?: MaxPayloadInMB;
    /**
     * Specifies the number of records to include in a mini-batch for an HTTP inference request. A record  is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record.  To enable the batch strategy, you must set SplitType to Line, RecordIO, or TFRecord.
     */
    BatchStrategy?: BatchStrategy;
    /**
     * The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.
     */
    Environment?: TransformEnvironmentMap;
    /**
     * Describes the dataset to be transformed and the Amazon S3 location where it is stored.
     */
    TransformInput: TransformInput;
    /**
     * Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.
     */
    TransformOutput?: TransformOutput;
    /**
     * Describes the resources, including ML instance types and ML instance count, to use for the transform job.
     */
    TransformResources: TransformResources;
    /**
     * A timestamp that shows when the transform Job was created.
     */
    CreationTime: Timestamp;
    /**
     * Indicates when the transform job starts on ML instances. You are billed for the time interval between this time and the value of TransformEndTime.
     */
    TransformStartTime?: Timestamp;
    /**
     * Indicates when the transform job has been completed, or has stopped or failed. You are billed for the time interval between this time and the value of TransformStartTime.
     */
    TransformEndTime?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the transform or training job.
     */
    LabelingJobArn?: LabelingJobArn;
    /**
     * The Amazon Resource Name (ARN) of the AutoML transform job.
     */
    AutoMLJobArn?: AutoMLJobArn;
    DataProcessing?: DataProcessing;
    ExperimentConfig?: ExperimentConfig;
  }
  export interface DescribeTrialComponentRequest {
    /**
     * The name of the trial component to describe.
     */
    TrialComponentName: ExperimentEntityName;
  }
  export interface DescribeTrialComponentResponse {
    /**
     * The name of the trial component.
     */
    TrialComponentName?: ExperimentEntityName;
    /**
     * The Amazon Resource Name (ARN) of the trial component.
     */
    TrialComponentArn?: TrialComponentArn;
    /**
     * The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    /**
     * The Amazon Resource Name (ARN) of the source and, optionally, the job type.
     */
    Source?: TrialComponentSource;
    /**
     * The status of the component. States include:   InProgress   Completed   Failed  
     */
    Status?: TrialComponentStatus;
    /**
     * When the component started.
     */
    StartTime?: Timestamp;
    /**
     * When the component ended.
     */
    EndTime?: Timestamp;
    /**
     * When the component was created.
     */
    CreationTime?: Timestamp;
    /**
     * Who created the component.
     */
    CreatedBy?: UserContext;
    /**
     * When the component was last modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * Who last modified the component.
     */
    LastModifiedBy?: UserContext;
    /**
     * The hyperparameters of the component.
     */
    Parameters?: TrialComponentParameters;
    /**
     * The input artifacts of the component.
     */
    InputArtifacts?: TrialComponentArtifacts;
    /**
     * The output artifacts of the component.
     */
    OutputArtifacts?: TrialComponentArtifacts;
    /**
     * The metrics for the component.
     */
    Metrics?: TrialComponentMetricSummaries;
  }
  export interface DescribeTrialRequest {
    /**
     * The name of the trial to describe.
     */
    TrialName: ExperimentEntityName;
  }
  export interface DescribeTrialResponse {
    /**
     * The name of the trial.
     */
    TrialName?: ExperimentEntityName;
    /**
     * The Amazon Resource Name (ARN) of the trial.
     */
    TrialArn?: TrialArn;
    /**
     * The name of the trial as displayed. If DisplayName isn't specified, TrialName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    /**
     * The name of the experiment the trial is part of.
     */
    ExperimentName?: ExperimentEntityName;
    /**
     * The Amazon Resource Name (ARN) of the source and, optionally, the job type.
     */
    Source?: TrialSource;
    /**
     * When the trial was created.
     */
    CreationTime?: Timestamp;
    /**
     * Who created the trial.
     */
    CreatedBy?: UserContext;
    /**
     * When the trial was last modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * Who last modified the trial.
     */
    LastModifiedBy?: UserContext;
  }
  export interface DescribeUserProfileRequest {
    /**
     * The domain ID.
     */
    DomainId: DomainId;
    /**
     * The user profile name.
     */
    UserProfileName: UserProfileName;
  }
  export interface DescribeUserProfileResponse {
    /**
     * The ID of the domain that contains the profile.
     */
    DomainId?: DomainId;
    /**
     * The user profile Amazon Resource Name (ARN).
     */
    UserProfileArn?: UserProfileArn;
    /**
     * The user profile name.
     */
    UserProfileName?: UserProfileName;
    /**
     * The ID of the user's profile in the Amazon Elastic File System (EFS) volume.
     */
    HomeEfsFileSystemUid?: EfsUid;
    /**
     * The status.
     */
    Status?: UserProfileStatus;
    /**
     * The last modified time.
     */
    LastModifiedTime?: LastModifiedTime;
    /**
     * The creation time.
     */
    CreationTime?: CreationTime;
    /**
     * The failure reason.
     */
    FailureReason?: FailureReason;
    /**
     * The SSO user identifier.
     */
    SingleSignOnUserIdentifier?: SingleSignOnUserIdentifier;
    /**
     * The SSO user value.
     */
    SingleSignOnUserValue?: String256;
    /**
     * A collection of settings.
     */
    UserSettings?: UserSettings;
  }
  export interface DescribeWorkforceRequest {
    /**
     * The name of the private workforce whose access you want to restrict. WorkforceName is automatically set to default when a workforce is created and cannot be modified. 
     */
    WorkforceName: WorkforceName;
  }
  export interface DescribeWorkforceResponse {
    /**
     * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each AWS Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see Create a Private Workforce.
     */
    Workforce: Workforce;
  }
  export interface DescribeWorkteamRequest {
    /**
     * The name of the work team to return a description of.
     */
    WorkteamName: WorkteamName;
  }
  export interface DescribeWorkteamResponse {
    /**
     * A Workteam instance that contains information about the work team. 
     */
    Workteam: Workteam;
  }
  export interface DesiredWeightAndCapacity {
    /**
     * The name of the variant to update.
     */
    VariantName: VariantName;
    /**
     * The variant's weight.
     */
    DesiredWeight?: VariantWeight;
    /**
     * The variant's capacity.
     */
    DesiredInstanceCount?: TaskCount;
  }
  export type DesiredWeightAndCapacityList = DesiredWeightAndCapacity[];
  export type DestinationS3Uri = string;
  export type DetailedAlgorithmStatus = "NotStarted"|"InProgress"|"Completed"|"Failed"|string;
  export type DetailedModelPackageStatus = "NotStarted"|"InProgress"|"Completed"|"Failed"|string;
  export type DirectInternetAccess = "Enabled"|"Disabled"|string;
  export type DirectoryPath = string;
  export type DisassociateAdditionalCodeRepositories = boolean;
  export type DisassociateDefaultCodeRepository = boolean;
  export type DisassociateNotebookInstanceAcceleratorTypes = boolean;
  export type DisassociateNotebookInstanceLifecycleConfig = boolean;
  export interface DisassociateTrialComponentRequest {
    /**
     * The name of the component to disassociate from the trial.
     */
    TrialComponentName: ExperimentEntityName;
    /**
     * The name of the trial to disassociate from.
     */
    TrialName: ExperimentEntityName;
  }
  export interface DisassociateTrialComponentResponse {
    /**
     * The ARN of the trial component.
     */
    TrialComponentArn?: TrialComponentArn;
    /**
     * The Amazon Resource Name (ARN) of the trial.
     */
    TrialArn?: TrialArn;
  }
  export type Dollars = number;
  export type DomainArn = string;
  export interface DomainDetails {
    /**
     * The domain's Amazon Resource Name (ARN).
     */
    DomainArn?: DomainArn;
    /**
     * The domain ID.
     */
    DomainId?: DomainId;
    /**
     * The domain name.
     */
    DomainName?: DomainName;
    /**
     * The status.
     */
    Status?: DomainStatus;
    /**
     * The creation time.
     */
    CreationTime?: CreationTime;
    /**
     * The last modified time.
     */
    LastModifiedTime?: LastModifiedTime;
    /**
     * The domain's URL.
     */
    Url?: String1024;
  }
  export type DomainId = string;
  export type DomainList = DomainDetails[];
  export type DomainName = string;
  export type DomainStatus = "Deleting"|"Failed"|"InService"|"Pending"|string;
  export type DoubleParameterValue = number;
  export type EfsUid = string;
  export type EnableCapture = boolean;
  export type EndpointArn = string;
  export type EndpointConfigArn = string;
  export type EndpointConfigName = string;
  export type EndpointConfigNameContains = string;
  export type EndpointConfigSortKey = "Name"|"CreationTime"|string;
  export interface EndpointConfigSummary {
    /**
     * The name of the endpoint configuration.
     */
    EndpointConfigName: EndpointConfigName;
    /**
     * The Amazon Resource Name (ARN) of the endpoint configuration.
     */
    EndpointConfigArn: EndpointConfigArn;
    /**
     * A timestamp that shows when the endpoint configuration was created.
     */
    CreationTime: Timestamp;
  }
  export type EndpointConfigSummaryList = EndpointConfigSummary[];
  export interface EndpointInput {
    /**
     * An endpoint in customer's account which has enabled DataCaptureConfig enabled.
     */
    EndpointName: EndpointName;
    /**
     * Path to the filesystem where the endpoint data is available to the container.
     */
    LocalPath: ProcessingLocalPath;
    /**
     * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
     */
    S3InputMode?: ProcessingS3InputMode;
    /**
     * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated 
     */
    S3DataDistributionType?: ProcessingS3DataDistributionType;
  }
  export type EndpointName = string;
  export type EndpointNameContains = string;
  export type EndpointSortKey = "Name"|"CreationTime"|"Status"|string;
  export type EndpointStatus = "OutOfService"|"Creating"|"Updating"|"SystemUpdating"|"RollingBack"|"InService"|"Deleting"|"Failed"|string;
  export interface EndpointSummary {
    /**
     * The name of the endpoint.
     */
    EndpointName: EndpointName;
    /**
     * The Amazon Resource Name (ARN) of the endpoint.
     */
    EndpointArn: EndpointArn;
    /**
     * A timestamp that shows when the endpoint was created.
     */
    CreationTime: Timestamp;
    /**
     * A timestamp that shows when the endpoint was last modified.
     */
    LastModifiedTime: Timestamp;
    /**
     * The status of the endpoint.    OutOfService: Endpoint is not available to take incoming requests.    Creating: CreateEndpoint is executing.    Updating: UpdateEndpoint or UpdateEndpointWeightsAndCapacities is executing.    SystemUpdating: Endpoint is undergoing maintenance and cannot be updated or deleted or re-scaled until it has completed. This maintenance operation does not change any customer-specified values such as VPC config, KMS encryption, model, instance type, or instance count.    RollingBack: Endpoint fails to scale up or down or change its variant weight and is in the process of rolling back to its previous configuration. Once the rollback completes, endpoint returns to an InService status. This transitional status only applies to an endpoint that has autoscaling enabled and is undergoing variant weight or capacity changes as part of an UpdateEndpointWeightsAndCapacities call or when the UpdateEndpointWeightsAndCapacities operation is called explicitly.    InService: Endpoint is available to process incoming requests.    Deleting: DeleteEndpoint is executing.    Failed: Endpoint could not be created, updated, or re-scaled. Use DescribeEndpointOutput$FailureReason for information about the failure. DeleteEndpoint is the only operation that can be performed on a failed endpoint.   To get a list of endpoints with a specified status, use the ListEndpointsInput$StatusEquals filter.
     */
    EndpointStatus: EndpointStatus;
  }
  export type EndpointSummaryList = EndpointSummary[];
  export type EntityDescription = string;
  export type EntityName = string;
  export type EnvironmentKey = string;
  export type EnvironmentMap = {[key: string]: EnvironmentValue};
  export type EnvironmentValue = string;
  export type ExecutionStatus = "Pending"|"Completed"|"CompletedWithViolations"|"InProgress"|"Failed"|"Stopping"|"Stopped"|string;
  export type ExitMessage = string;
  export interface Experiment {
    /**
     * The name of the experiment.
     */
    ExperimentName?: ExperimentEntityName;
    /**
     * The Amazon Resource Name (ARN) of the experiment.
     */
    ExperimentArn?: ExperimentArn;
    /**
     * The name of the experiment as displayed. If DisplayName isn't specified, ExperimentName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    Source?: ExperimentSource;
    /**
     * The description of the experiment.
     */
    Description?: ExperimentDescription;
    /**
     * When the experiment was created.
     */
    CreationTime?: Timestamp;
    CreatedBy?: UserContext;
    /**
     * When the experiment was last modified.
     */
    LastModifiedTime?: Timestamp;
    LastModifiedBy?: UserContext;
    /**
     * The list of tags that are associated with the experiment. You can use Search API to search on the tags.
     */
    Tags?: TagList;
  }
  export type ExperimentArn = string;
  export interface ExperimentConfig {
    /**
     * The name of an existing experiment to associate the trial component with.
     */
    ExperimentName?: ExperimentEntityName;
    /**
     * The name of an existing trial to associate the trial component with. If not specified, a new trial is created.
     */
    TrialName?: ExperimentEntityName;
    /**
     * The display name for the trial component. If this key isn't specified, the display name is the trial component name.
     */
    TrialComponentDisplayName?: ExperimentEntityName;
  }
  export type ExperimentDescription = string;
  export type ExperimentEntityName = string;
  export interface ExperimentSource {
    /**
     * The Amazon Resource Name (ARN) of the source.
     */
    SourceArn: ExperimentSourceArn;
    /**
     * The source type.
     */
    SourceType?: SourceType;
  }
  export type ExperimentSourceArn = string;
  export type ExperimentSummaries = ExperimentSummary[];
  export interface ExperimentSummary {
    /**
     * The Amazon Resource Name (ARN) of the experiment.
     */
    ExperimentArn?: ExperimentArn;
    /**
     * The name of the experiment.
     */
    ExperimentName?: ExperimentEntityName;
    /**
     * The name of the experiment as displayed. If DisplayName isn't specified, ExperimentName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    ExperimentSource?: ExperimentSource;
    /**
     * When the experiment was created.
     */
    CreationTime?: Timestamp;
    /**
     * When the experiment was last modified.
     */
    LastModifiedTime?: Timestamp;
  }
  export type FailureReason = string;
  export type FileSystemAccessMode = "rw"|"ro"|string;
  export interface FileSystemDataSource {
    /**
     * The file system id.
     */
    FileSystemId: FileSystemId;
    /**
     * The access mode of the mount of the directory associated with the channel. A directory can be mounted either in ro (read-only) or rw (read-write) mode.
     */
    FileSystemAccessMode: FileSystemAccessMode;
    /**
     * The file system type. 
     */
    FileSystemType: FileSystemType;
    /**
     * The full path to the directory to associate with the channel.
     */
    DirectoryPath: DirectoryPath;
  }
  export type FileSystemId = string;
  export type FileSystemType = "EFS"|"FSxLustre"|string;
  export interface Filter {
    /**
     * A resource property name. For example, TrainingJobName. For valid property names, see SearchRecord. You must specify a valid property for the resource.
     */
    Name: ResourcePropertyName;
    /**
     * A Boolean binary operator that is used to evaluate the filter. The operator field contains one of the following values:  Equals  The value of Name equals Value.  NotEquals  The value of Name doesn't equal Value.  Exists  The Name property exists.  NotExists  The Name property does not exist.  GreaterThan  The value of Name is greater than Value. Not supported for text properties.  GreaterThanOrEqualTo  The value of Name is greater than or equal to Value. Not supported for text properties.  LessThan  The value of Name is less than Value. Not supported for text properties.  LessThanOrEqualTo  The value of Name is less than or equal to Value. Not supported for text properties.  In  The value of Name is one of the comma delimited strings in Value. Only supported for text properties.  Contains  The value of Name contains the string Value. Only supported for text properties. A SearchExpression can include the Contains operator multiple times when the value of Name is one of the following:    Experiment.DisplayName     Experiment.ExperimentName     Experiment.Tags     Trial.DisplayName     Trial.TrialName     Trial.Tags     TrialComponent.DisplayName     TrialComponent.TrialComponentName     TrialComponent.Tags     TrialComponent.InputArtifacts     TrialComponent.OutputArtifacts    A SearchExpression can include only one Contains operator for all other values of Name. In these cases, if you include multiple Contains operators in the SearchExpression, the result is the following error message: "'CONTAINS' operator usage limit of 1 exceeded."  
     */
    Operator?: Operator;
    /**
     * A value used with Name and Operator to determine which resources satisfy the filter's condition. For numerical properties, Value must be an integer or floating-point decimal. For timestamp properties, Value must be an ISO 8601 date-time string of the following format: YYYY-mm-dd'T'HH:MM:SS.
     */
    Value?: FilterValue;
  }
  export type FilterList = Filter[];
  export type FilterValue = string;
  export interface FinalAutoMLJobObjectiveMetric {
    /**
     * The type of metric with the best result.
     */
    Type?: AutoMLJobObjectiveType;
    /**
     * The name of the metric with the best result. For a description of the possible objective metrics, see AutoMLJobObjective$MetricName.
     */
    MetricName: AutoMLMetricEnum;
    /**
     * The value of the metric with the best result.
     */
    Value: MetricValue;
  }
  export interface FinalHyperParameterTuningJobObjectiveMetric {
    /**
     * Whether to minimize or maximize the objective metric. Valid values are Minimize and Maximize.
     */
    Type?: HyperParameterTuningJobObjectiveType;
    /**
     * The name of the objective metric.
     */
    MetricName: MetricName;
    /**
     * The value of the objective metric.
     */
    Value: MetricValue;
  }
  export type FinalMetricDataList = MetricData[];
  export type Float = number;
  export type FlowDefinitionArn = string;
  export type FlowDefinitionName = string;
  export interface FlowDefinitionOutputConfig {
    /**
     * The Amazon S3 path where the object containing human output will be made available.
     */
    S3OutputPath: S3Uri;
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    KmsKeyId?: KmsKeyId;
  }
  export type FlowDefinitionStatus = "Initializing"|"Active"|"Failed"|"Deleting"|string;
  export type FlowDefinitionSummaries = FlowDefinitionSummary[];
  export interface FlowDefinitionSummary {
    /**
     * The name of the flow definition.
     */
    FlowDefinitionName: FlowDefinitionName;
    /**
     * The Amazon Resource Name (ARN) of the flow definition.
     */
    FlowDefinitionArn: FlowDefinitionArn;
    /**
     * The status of the flow definition. Valid values:
     */
    FlowDefinitionStatus: FlowDefinitionStatus;
    /**
     * The timestamp when SageMaker created the flow definition.
     */
    CreationTime: Timestamp;
    /**
     * The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is Failed.
     */
    FailureReason?: FailureReason;
  }
  export type FlowDefinitionTaskAvailabilityLifetimeInSeconds = number;
  export type FlowDefinitionTaskCount = number;
  export type FlowDefinitionTaskDescription = string;
  export type FlowDefinitionTaskKeyword = string;
  export type FlowDefinitionTaskKeywords = FlowDefinitionTaskKeyword[];
  export type FlowDefinitionTaskTimeLimitInSeconds = number;
  export type FlowDefinitionTaskTitle = string;
  export type Framework = "TENSORFLOW"|"KERAS"|"MXNET"|"ONNX"|"PYTORCH"|"XGBOOST"|"TFLITE"|string;
  export type GenerateCandidateDefinitionsOnly = boolean;
  export interface GetSearchSuggestionsRequest {
    /**
     * The name of the Amazon SageMaker resource to search for.
     */
    Resource: ResourceType;
    /**
     * Limits the property names that are included in the response.
     */
    SuggestionQuery?: SuggestionQuery;
  }
  export interface GetSearchSuggestionsResponse {
    /**
     * A list of property names for a Resource that match a SuggestionQuery.
     */
    PropertyNameSuggestions?: PropertyNameSuggestionList;
  }
  export interface GitConfig {
    /**
     * The URL where the Git repository is located.
     */
    RepositoryUrl: GitConfigUrl;
    /**
     * The default branch for the Git repository.
     */
    Branch?: Branch;
    /**
     * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository. The secret must have a staging label of AWSCURRENT and must be in the following format:  {"username": UserName, "password": Password} 
     */
    SecretArn?: SecretArn;
  }
  export interface GitConfigForUpdate {
    /**
     * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository. The secret must have a staging label of AWSCURRENT and must be in the following format:  {"username": UserName, "password": Password} 
     */
    SecretArn?: SecretArn;
  }
  export type GitConfigUrl = string;
  export type Group = string;
  export type Groups = Group[];
  export type HookParameters = {[key: string]: ConfigValue};
  export type HumanLoopActivationConditions = string;
  export interface HumanLoopActivationConditionsConfig {
    /**
     * JSON expressing use-case specific conditions declaratively. If any condition is matched, atomic tasks are created against the configured work team. The set of conditions is different for Rekognition and Textract. For more information about how to structure the JSON, see JSON Schema for Human Loop Activation Conditions in Amazon Augmented AI in the Amazon SageMaker Developer Guide.
     */
    HumanLoopActivationConditions: HumanLoopActivationConditions;
  }
  export interface HumanLoopActivationConfig {
    /**
     * Container structure for defining under what conditions SageMaker creates a human loop.
     */
    HumanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig;
  }
  export interface HumanLoopConfig {
    /**
     * Amazon Resource Name (ARN) of a team of workers.
     */
    WorkteamArn: WorkteamArn;
    /**
     * The Amazon Resource Name (ARN) of the human task user interface.
     */
    HumanTaskUiArn: HumanTaskUiArn;
    /**
     * A title for the human worker task.
     */
    TaskTitle: FlowDefinitionTaskTitle;
    /**
     * A description for the human worker task.
     */
    TaskDescription: FlowDefinitionTaskDescription;
    /**
     * The number of distinct workers who will perform the same task on each object. For example, if TaskCount is set to 3 for an image classification labeling job, three workers will classify each input image. Increasing TaskCount can improve label accuracy.
     */
    TaskCount: FlowDefinitionTaskCount;
    /**
     * The length of time that a task remains available for labeling by human workers.
     */
    TaskAvailabilityLifetimeInSeconds?: FlowDefinitionTaskAvailabilityLifetimeInSeconds;
    /**
     * The amount of time that a worker has to complete a task.
     */
    TaskTimeLimitInSeconds?: FlowDefinitionTaskTimeLimitInSeconds;
    /**
     * Keywords used to describe the task so that workers can discover the task.
     */
    TaskKeywords?: FlowDefinitionTaskKeywords;
    PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
  }
  export interface HumanLoopRequestSource {
    /**
     * Specifies whether Amazon Rekognition or Amazon Textract are used as the integration source. The default field settings and JSON parsing rules are different based on the integration source. Valid values:
     */
    AwsManagedHumanLoopRequestSource: AwsManagedHumanLoopRequestSource;
  }
  export interface HumanTaskConfig {
    /**
     * The Amazon Resource Name (ARN) of the work team assigned to complete the tasks.
     */
    WorkteamArn: WorkteamArn;
    /**
     * Information about the user interface that workers use to complete the labeling task.
     */
    UiConfig: UiConfig;
    /**
     * The Amazon Resource Name (ARN) of a Lambda function that is run before a data object is sent to a human worker. Use this function to provide input to a custom labeling job. For built-in task types, use one of the following Amazon SageMaker Ground Truth Lambda function ARNs for PreHumanTaskLambdaArn. For custom labeling workflows, see Pre-annotation Lambda.   Bounding box - Finds the most similar boxes from different workers based on the Jaccard index of the boxes.    arn:aws:lambda:us-east-1:432418664414:function:PRE-BoundingBox     arn:aws:lambda:us-east-2:266458841044:function:PRE-BoundingBox     arn:aws:lambda:us-west-2:081040173940:function:PRE-BoundingBox     arn:aws:lambda:ca-central-1:918755190332:function:PRE-BoundingBox     arn:aws:lambda:eu-west-1:568282634449:function:PRE-BoundingBox     arn:aws:lambda:eu-west-2:487402164563:function:PRE-BoundingBox     arn:aws:lambda:eu-central-1:203001061592:function:PRE-BoundingBox     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-BoundingBox     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-BoundingBox     arn:aws:lambda:ap-south-1:565803892007:function:PRE-BoundingBox     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-BoundingBox     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-BoundingBox     Image classification - Uses a variant of the Expectation Maximization approach to estimate the true class of an image based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClass     arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClass     arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClass     arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClass     arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClass     arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClass     arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClass     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClass     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClass     arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClass     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClass     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClass     Multi-label image classification - Uses a variant of the Expectation Maximization approach to estimate the true classes of an image based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClassMultiLabel     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClassMultiLabel     Semantic segmentation - Treats each pixel in an image as a multi-class classification and treats pixel annotations from workers as "votes" for the correct label.    arn:aws:lambda:us-east-1:432418664414:function:PRE-SemanticSegmentation     arn:aws:lambda:us-east-2:266458841044:function:PRE-SemanticSegmentation     arn:aws:lambda:us-west-2:081040173940:function:PRE-SemanticSegmentation     arn:aws:lambda:ca-central-1:918755190332:function:PRE-SemanticSegmentation     arn:aws:lambda:eu-west-1:568282634449:function:PRE-SemanticSegmentation     arn:aws:lambda:eu-west-2:487402164563:function:PRE-SemanticSegmentation     arn:aws:lambda:eu-central-1:203001061592:function:PRE-SemanticSegmentation     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-SemanticSegmentation     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-SemanticSegmentation     arn:aws:lambda:ap-south-1:565803892007:function:PRE-SemanticSegmentation     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-SemanticSegmentation     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-SemanticSegmentation     Text classification - Uses a variant of the Expectation Maximization approach to estimate the true class of text based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClass     arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClass     arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClass     arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClass     arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClass     arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClass     arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClass     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClass     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClass     arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClass     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClass     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClass     Multi-label text classification - Uses a variant of the Expectation Maximization approach to estimate the true classes of text based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClassMultiLabel     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClassMultiLabel     Named entity recognition - Groups similar selections and calculates aggregate boundaries, resolving to most-assigned label.    arn:aws:lambda:us-east-1:432418664414:function:PRE-NamedEntityRecognition     arn:aws:lambda:us-east-2:266458841044:function:PRE-NamedEntityRecognition     arn:aws:lambda:us-west-2:081040173940:function:PRE-NamedEntityRecognition     arn:aws:lambda:ca-central-1:918755190332:function:PRE-NamedEntityRecognition     arn:aws:lambda:eu-west-1:568282634449:function:PRE-NamedEntityRecognition     arn:aws:lambda:eu-west-2:487402164563:function:PRE-NamedEntityRecognition     arn:aws:lambda:eu-central-1:203001061592:function:PRE-NamedEntityRecognition     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-NamedEntityRecognition     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-NamedEntityRecognition     arn:aws:lambda:ap-south-1:565803892007:function:PRE-NamedEntityRecognition     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-NamedEntityRecognition     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-NamedEntityRecognition     Video Classification - Use this task type when you need workers to classify videos using predefined labels that you specify. Workers are shown videos and are asked to choose one label for each video.    arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoMultiClass     arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoMultiClass     arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoMultiClass     arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoMultiClass     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoMultiClass     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoMultiClass     arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoMultiClass     arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoMultiClass     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoMultiClass     arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoMultiClass     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoMultiClass     arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoMultiClass     Video Frame Object Detection - Use this task type to have workers identify and locate objects in a sequence of video frames (images extracted from a video) using bounding boxes. For example, you can use this task to ask workers to identify and localize various objects in a series of video frames, such as cars, bikes, and pedestrians.    arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectDetection     arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectDetection     arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectDetection     arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectDetection     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectDetection     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectDetection     arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectDetection     arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectDetection     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectDetection     arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectDetection     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectDetection     arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectDetection     Video Frame Object Tracking - Use this task type to have workers track the movement of objects in a sequence of video frames (images extracted from a video) using bounding boxes. For example, you can use this task to ask workers to track the movement of objects, such as cars, bikes, and pedestrians.     arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectTracking     arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectTracking     arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectTracking     arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectTracking     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectTracking     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectTracking     arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectTracking     arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectTracking     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectTracking     arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectTracking     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectTracking     arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectTracking     3D Point Cloud Modalities  Use the following pre-annotation lambdas for 3D point cloud labeling modality tasks. See 3D Point Cloud Task types  to learn more.   3D Point Cloud Object Detection - Use this task type when you want workers to classify objects in a 3D point cloud by drawing 3D cuboids around objects. For example, you can use this task type to ask workers to identify different types of objects in a point cloud, such as cars, bikes, and pedestrians.    arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectDetection     arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectDetection     3D Point Cloud Object Tracking - Use this task type when you want workers to draw 3D cuboids around objects that appear in a sequence of 3D point cloud frames. For example, you can use this task type to ask workers to track the movement of vehicles across multiple point cloud frames.     arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectTracking     arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectTracking     3D Point Cloud Semantic Segmentation - Use this task type when you want workers to create a point-level semantic segmentation masks by painting objects in a 3D point cloud using different colors where each color is assigned to one of the classes you specify.    arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudSemanticSegmentation     arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudSemanticSegmentation     Use the following ARNs for Label Verification and Adjustment Jobs  Use label verification and adjustment jobs to review and adjust labels. To learn more, see Verify and Adjust Labels .  Bounding box verification - Uses a variant of the Expectation Maximization approach to estimate the true class of verification judgement for bounding box labels based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectTracking     Bounding box adjustment - Finds the most similar boxes from different workers based on the Jaccard index of the adjusted annotations.    arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentBoundingBox     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentBoundingBox     Semantic segmentation verification - Uses a variant of the Expectation Maximization approach to estimate the true class of verification judgment for semantic segmentation labels based on annotations from individual workers.    arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationSemanticSegmentation     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationSemanticSegmentation     Semantic segmentation adjustment - Treats each pixel in an image as a multi-class classification and treats pixel adjusted annotations from workers as "votes" for the correct label.    arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentSemanticSegmentation     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentSemanticSegmentation     Video Frame Object Detection Adjustment - Use this task type when you want workers to adjust bounding boxes that workers have added to video frames to classify and localize objects in a sequence of video frames.    arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectDetection     arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectDetection     Video Frame Object Tracking Adjustment - Use this task type when you want workers to adjust bounding boxes that workers have added to video frames to track object movement across a sequence of video frames.    arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectTracking     arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectTracking     3D point cloud object detection adjustment - Adjust 3D cuboids in a point cloud frame.     arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectDetection     arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectDetection     3D point cloud object tracking adjustment - Adjust 3D cuboids across a sequence of point cloud frames.     arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectTracking     arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectTracking     3D point cloud semantic segmentation adjustment - Adjust semantic segmentation masks in a 3D point cloud.     arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudSemanticSegmentation     arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudSemanticSegmentation   
     */
    PreHumanTaskLambdaArn: LambdaFunctionArn;
    /**
     * Keywords used to describe the task so that workers on Amazon Mechanical Turk can discover the task.
     */
    TaskKeywords?: TaskKeywords;
    /**
     * A title for the task for your human workers.
     */
    TaskTitle: TaskTitle;
    /**
     * A description of the task for your human workers.
     */
    TaskDescription: TaskDescription;
    /**
     * The number of human workers that will label an object. 
     */
    NumberOfHumanWorkersPerDataObject: NumberOfHumanWorkersPerDataObject;
    /**
     * The amount of time that a worker has to complete a task.
     */
    TaskTimeLimitInSeconds: TaskTimeLimitInSeconds;
    /**
     * The length of time that a task remains available for labeling by human workers. If you choose the Amazon Mechanical Turk workforce, the maximum is 12 hours (43200). The default value is 864000 seconds (10 days). For private and vendor workforces, the maximum is as listed.
     */
    TaskAvailabilityLifetimeInSeconds?: TaskAvailabilityLifetimeInSeconds;
    /**
     * Defines the maximum number of data objects that can be labeled by human workers at the same time. Also referred to as batch size. Each object may have more than one worker at one time. The default value is 1000 objects.
     */
    MaxConcurrentTaskCount?: MaxConcurrentTaskCount;
    /**
     * Configures how labels are consolidated across human workers.
     */
    AnnotationConsolidationConfig: AnnotationConsolidationConfig;
    /**
     * The price that you pay for each task performed by an Amazon Mechanical Turk worker.
     */
    PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
  }
  export type HumanTaskUiArn = string;
  export type HumanTaskUiName = string;
  export type HumanTaskUiStatus = "Active"|"Deleting"|string;
  export type HumanTaskUiSummaries = HumanTaskUiSummary[];
  export interface HumanTaskUiSummary {
    /**
     * The name of the human task user interface.
     */
    HumanTaskUiName: HumanTaskUiName;
    /**
     * The Amazon Resource Name (ARN) of the human task user interface.
     */
    HumanTaskUiArn: HumanTaskUiArn;
    /**
     * A timestamp when SageMaker created the human task user interface.
     */
    CreationTime: Timestamp;
  }
  export interface HyperParameterAlgorithmSpecification {
    /**
     *  The registry path of the Docker image that contains the training algorithm. For information about Docker registry paths for built-in algorithms, see Algorithms Provided by Amazon SageMaker: Common Parameters. Amazon SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see Using Your Own Algorithms with Amazon SageMaker.
     */
    TrainingImage?: AlgorithmImage;
    /**
     * The input mode that the algorithm supports: File or Pipe. In File input mode, Amazon SageMaker downloads the training data from Amazon S3 to the storage volume that is attached to the training instance and mounts the directory to the Docker volume for the training container. In Pipe input mode, Amazon SageMaker streams data directly from Amazon S3 to the container.  If you specify File mode, make sure that you provision the storage volume that is attached to the training instance with enough capacity to accommodate the training data downloaded from Amazon S3, the model artifacts, and intermediate information.  For more information about input modes, see Algorithms. 
     */
    TrainingInputMode: TrainingInputMode;
    /**
     * The name of the resource algorithm to use for the hyperparameter tuning job. If you specify a value for this parameter, do not specify a value for TrainingImage.
     */
    AlgorithmName?: ArnOrName;
    /**
     * An array of MetricDefinition objects that specify the metrics that the algorithm emits.
     */
    MetricDefinitions?: MetricDefinitionList;
  }
  export type HyperParameterScalingType = "Auto"|"Linear"|"Logarithmic"|"ReverseLogarithmic"|string;
  export interface HyperParameterSpecification {
    /**
     * The name of this hyperparameter. The name must be unique.
     */
    Name: ParameterName;
    /**
     * A brief description of the hyperparameter.
     */
    Description?: EntityDescription;
    /**
     * The type of this hyperparameter. The valid types are Integer, Continuous, Categorical, and FreeText.
     */
    Type: ParameterType;
    /**
     * The allowed range for this hyperparameter.
     */
    Range?: ParameterRange;
    /**
     * Indicates whether this hyperparameter is tunable in a hyperparameter tuning job.
     */
    IsTunable?: Boolean;
    /**
     * Indicates whether this hyperparameter is required.
     */
    IsRequired?: Boolean;
    /**
     * The default value for this hyperparameter. If a default value is specified, a hyperparameter cannot be required.
     */
    DefaultValue?: ParameterValue;
  }
  export type HyperParameterSpecifications = HyperParameterSpecification[];
  export interface HyperParameterTrainingJobDefinition {
    /**
     * The job definition name.
     */
    DefinitionName?: HyperParameterTrainingJobDefinitionName;
    TuningObjective?: HyperParameterTuningJobObjective;
    HyperParameterRanges?: ParameterRanges;
    /**
     * Specifies the values of hyperparameters that do not change for the tuning job.
     */
    StaticHyperParameters?: HyperParameters;
    /**
     * The HyperParameterAlgorithmSpecification object that specifies the resource algorithm to use for the training jobs that the tuning job launches.
     */
    AlgorithmSpecification: HyperParameterAlgorithmSpecification;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the training jobs that the tuning job launches.
     */
    RoleArn: RoleArn;
    /**
     * An array of Channel objects that specify the input for the training jobs that the tuning job launches.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The VpcConfig object that specifies the VPC that you want the training jobs that this hyperparameter tuning job launches to connect to. Control access to and from your training container by configuring the VPC. For more information, see Protect Training Jobs by Using an Amazon Virtual Private Cloud.
     */
    VpcConfig?: VpcConfig;
    /**
     * Specifies the path to the Amazon S3 bucket where you store model artifacts from the training jobs that the tuning job launches.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The resources, including the compute instances and storage volumes, to use for the training jobs that the tuning job launches. Storage volumes store model artifacts and incremental states. Training algorithms might also use storage volumes for scratch space. If you want Amazon SageMaker to use the storage volume to store the training data, choose File as the TrainingInputMode in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.
     */
    ResourceConfig: ResourceConfig;
    /**
     * Specifies a limit to how long a model hyperparameter training job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the a limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.
     */
    StoppingCondition: StoppingCondition;
    /**
     * Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If network isolation is used for training jobs that are configured to use a VPC, Amazon SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.
     */
    EnableNetworkIsolation?: Boolean;
    /**
     * To encrypt all communications between ML compute instances in distributed training, choose True. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithm in distributed training.
     */
    EnableInterContainerTrafficEncryption?: Boolean;
    /**
     * A Boolean indicating whether managed spot training is enabled (True) or not (False).
     */
    EnableManagedSpotTraining?: Boolean;
    CheckpointConfig?: CheckpointConfig;
  }
  export type HyperParameterTrainingJobDefinitionName = string;
  export type HyperParameterTrainingJobDefinitions = HyperParameterTrainingJobDefinition[];
  export type HyperParameterTrainingJobSummaries = HyperParameterTrainingJobSummary[];
  export interface HyperParameterTrainingJobSummary {
    /**
     * The training job definition name.
     */
    TrainingJobDefinitionName?: HyperParameterTrainingJobDefinitionName;
    /**
     * The name of the training job.
     */
    TrainingJobName: TrainingJobName;
    /**
     * The Amazon Resource Name (ARN) of the training job.
     */
    TrainingJobArn: TrainingJobArn;
    /**
     * The HyperParameter tuning job that launched the training job.
     */
    TuningJobName?: HyperParameterTuningJobName;
    /**
     * The date and time that the training job was created.
     */
    CreationTime: Timestamp;
    /**
     * The date and time that the training job started.
     */
    TrainingStartTime?: Timestamp;
    /**
     * Specifies the time when the training job ends on training instances. You are billed for the time interval between the value of TrainingStartTime and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.
     */
    TrainingEndTime?: Timestamp;
    /**
     * The status of the training job.
     */
    TrainingJobStatus: TrainingJobStatus;
    /**
     * A list of the hyperparameters for which you specified ranges to search.
     */
    TunedHyperParameters: HyperParameters;
    /**
     * The reason that the training job failed. 
     */
    FailureReason?: FailureReason;
    /**
     * The FinalHyperParameterTuningJobObjectiveMetric object that specifies the value of the objective metric of the tuning job that launched this training job.
     */
    FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;
    /**
     * The status of the objective metric for the training job:   Succeeded: The final objective metric for the training job was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process.     Pending: The training job is in progress and evaluation of its final objective metric is pending.     Failed: The final objective metric for the training job was not evaluated, and was not used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric.  
     */
    ObjectiveStatus?: ObjectiveStatus;
  }
  export type HyperParameterTuningJobArn = string;
  export interface HyperParameterTuningJobConfig {
    /**
     * Specifies how hyperparameter tuning chooses the combinations of hyperparameter values to use for the training job it launches. To use the Bayesian search strategy, set this to Bayesian. To randomly search, set it to Random. For information about search strategies, see How Hyperparameter Tuning Works.
     */
    Strategy: HyperParameterTuningJobStrategyType;
    /**
     * The HyperParameterTuningJobObjective object that specifies the objective metric for this tuning job.
     */
    HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;
    /**
     * The ResourceLimits object that specifies the maximum number of training jobs and parallel training jobs for this tuning job.
     */
    ResourceLimits: ResourceLimits;
    /**
     * The ParameterRanges object that specifies the ranges of hyperparameters that this tuning job searches.
     */
    ParameterRanges?: ParameterRanges;
    /**
     * Specifies whether to use early stopping for training jobs launched by the hyperparameter tuning job. This can be one of the following values (the default value is OFF):  OFF  Training jobs launched by the hyperparameter tuning job do not use early stopping.  AUTO  Amazon SageMaker stops training jobs launched by the hyperparameter tuning job when they are unlikely to perform better than previously completed training jobs. For more information, see Stop Training Jobs Early.  
     */
    TrainingJobEarlyStoppingType?: TrainingJobEarlyStoppingType;
    /**
     * The tuning job's completion criteria.
     */
    TuningJobCompletionCriteria?: TuningJobCompletionCriteria;
  }
  export type HyperParameterTuningJobName = string;
  export interface HyperParameterTuningJobObjective {
    /**
     * Whether to minimize or maximize the objective metric.
     */
    Type: HyperParameterTuningJobObjectiveType;
    /**
     * The name of the metric to use for the objective metric.
     */
    MetricName: MetricName;
  }
  export type HyperParameterTuningJobObjectiveType = "Maximize"|"Minimize"|string;
  export type HyperParameterTuningJobObjectives = HyperParameterTuningJobObjective[];
  export type HyperParameterTuningJobSortByOptions = "Name"|"Status"|"CreationTime"|string;
  export type HyperParameterTuningJobStatus = "Completed"|"InProgress"|"Failed"|"Stopped"|"Stopping"|string;
  export type HyperParameterTuningJobStrategyType = "Bayesian"|"Random"|string;
  export type HyperParameterTuningJobSummaries = HyperParameterTuningJobSummary[];
  export interface HyperParameterTuningJobSummary {
    /**
     * The name of the tuning job.
     */
    HyperParameterTuningJobName: HyperParameterTuningJobName;
    /**
     * The Amazon Resource Name (ARN) of the tuning job.
     */
    HyperParameterTuningJobArn: HyperParameterTuningJobArn;
    /**
     * The status of the tuning job.
     */
    HyperParameterTuningJobStatus: HyperParameterTuningJobStatus;
    /**
     * Specifies the search strategy hyperparameter tuning uses to choose which hyperparameters to use for each iteration. Currently, the only valid value is Bayesian.
     */
    Strategy: HyperParameterTuningJobStrategyType;
    /**
     * The date and time that the tuning job was created.
     */
    CreationTime: Timestamp;
    /**
     * The date and time that the tuning job ended.
     */
    HyperParameterTuningEndTime?: Timestamp;
    /**
     * The date and time that the tuning job was modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * The TrainingJobStatusCounters object that specifies the numbers of training jobs, categorized by status, that this tuning job launched.
     */
    TrainingJobStatusCounters: TrainingJobStatusCounters;
    /**
     * The ObjectiveStatusCounters object that specifies the numbers of training jobs, categorized by objective metric status, that this tuning job launched.
     */
    ObjectiveStatusCounters: ObjectiveStatusCounters;
    /**
     * The ResourceLimits object that specifies the maximum number of training jobs and parallel training jobs allowed for this tuning job.
     */
    ResourceLimits?: ResourceLimits;
  }
  export interface HyperParameterTuningJobWarmStartConfig {
    /**
     * An array of hyperparameter tuning jobs that are used as the starting point for the new hyperparameter tuning job. For more information about warm starting a hyperparameter tuning job, see Using a Previous Hyperparameter Tuning Job as a Starting Point. Hyperparameter tuning jobs created before October 1, 2018 cannot be used as parent jobs for warm start tuning jobs.
     */
    ParentHyperParameterTuningJobs: ParentHyperParameterTuningJobs;
    /**
     * Specifies one of the following:  IDENTICAL_DATA_AND_ALGORITHM  The new hyperparameter tuning job uses the same input data and training image as the parent tuning jobs. You can change the hyperparameter ranges to search and the maximum number of training jobs that the hyperparameter tuning job launches. You cannot use a new version of the training algorithm, unless the changes in the new version do not affect the algorithm itself. For example, changes that improve logging or adding support for a different data format are allowed. You can also change hyperparameters from tunable to static, and from static to tunable, but the total number of static plus tunable hyperparameters must remain the same as it is in all parent jobs. The objective metric for the new tuning job must be the same as for all parent jobs.  TRANSFER_LEARNING  The new hyperparameter tuning job can include input data, hyperparameter ranges, maximum number of concurrent training jobs, and maximum number of training jobs that are different than those of its parent hyperparameter tuning jobs. The training image can also be a different version from the version used in the parent hyperparameter tuning job. You can also change hyperparameters from tunable to static, and from static to tunable, but the total number of static plus tunable hyperparameters must remain the same as it is in all parent jobs. The objective metric for the new tuning job must be the same as for all parent jobs.  
     */
    WarmStartType: HyperParameterTuningJobWarmStartType;
  }
  export type HyperParameterTuningJobWarmStartType = "IdenticalDataAndAlgorithm"|"TransferLearning"|string;
  export type HyperParameters = {[key: string]: ParameterValue};
  export type ImageArn = string;
  export interface ImageConfig {
    /**
     * Set this to one of the following values:    Platform - The model image is hosted in Amazon ECR.    VPC - The model image is hosted in a private Docker registry in your VPC.  
     */
    RepositoryAccessMode: RepositoryAccessMode;
  }
  export type ImageDigest = string;
  export type ImageUri = string;
  export interface InferenceSpecification {
    /**
     * The Amazon ECR registry path of the Docker image that contains the inference code.
     */
    Containers: ModelPackageContainerDefinitionList;
    /**
     * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
     */
    SupportedTransformInstanceTypes: TransformInstanceTypes;
    /**
     * A list of the instance types that are used to generate inferences in real-time.
     */
    SupportedRealtimeInferenceInstanceTypes: RealtimeInferenceInstanceTypes;
    /**
     * The supported MIME types for the input data.
     */
    SupportedContentTypes: ContentTypes;
    /**
     * The supported MIME types for the output data.
     */
    SupportedResponseMIMETypes: ResponseMIMETypes;
  }
  export interface InputConfig {
    /**
     * The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
     */
    S3Uri: S3Uri;
    /**
     * Specifies the name and shape of the expected data inputs for your trained model with a JSON dictionary form. The data inputs are InputConfig$Framework specific.     TensorFlow: You must specify the name and shape (NHWC format) of the expected data inputs using a dictionary format for your trained model. The dictionary formats required for the console and CLI are different.   Examples for one input:   If using the console, {"input":[1,1024,1024,3]}    If using the CLI, {\"input\":[1,1024,1024,3]}      Examples for two inputs:   If using the console, {"data1": [1,28,28,1], "data2":[1,28,28,1]}    If using the CLI, {\"data1\": [1,28,28,1], \"data2\":[1,28,28,1]}         KERAS: You must specify the name and shape (NCHW format) of expected data inputs using a dictionary format for your trained model. Note that while Keras model artifacts should be uploaded in NHWC (channel-last) format, DataInputConfig should be specified in NCHW (channel-first) format. The dictionary formats required for the console and CLI are different.   Examples for one input:   If using the console, {"input_1":[1,3,224,224]}    If using the CLI, {\"input_1\":[1,3,224,224]}      Examples for two inputs:   If using the console, {"input_1": [1,3,224,224], "input_2":[1,3,224,224]}     If using the CLI, {\"input_1\": [1,3,224,224], \"input_2\":[1,3,224,224]}         MXNET/ONNX: You must specify the name and shape (NCHW format) of the expected data inputs in order using a dictionary format for your trained model. The dictionary formats required for the console and CLI are different.   Examples for one input:   If using the console, {"data":[1,3,1024,1024]}    If using the CLI, {\"data\":[1,3,1024,1024]}      Examples for two inputs:   If using the console, {"var1": [1,1,28,28], "var2":[1,1,28,28]}     If using the CLI, {\"var1\": [1,1,28,28], \"var2\":[1,1,28,28]}         PyTorch: You can either specify the name and shape (NCHW format) of expected data inputs in order using a dictionary format for your trained model or you can specify the shape only using a list format. The dictionary formats required for the console and CLI are different. The list formats for the console and CLI are the same.   Examples for one input in dictionary format:   If using the console, {"input0":[1,3,224,224]}    If using the CLI, {\"input0\":[1,3,224,224]}      Example for one input in list format: [[1,3,224,224]]    Examples for two inputs in dictionary format:   If using the console, {"input0":[1,3,224,224], "input1":[1,3,224,224]}    If using the CLI, {\"input0\":[1,3,224,224], \"input1\":[1,3,224,224]}       Example for two inputs in list format: [[1,3,224,224], [1,3,224,224]]       XGBOOST: input data name and shape are not needed.  
     */
    DataInputConfig: DataInputConfig;
    /**
     * Identifies the framework in which the model was trained. For example: TENSORFLOW.
     */
    Framework: Framework;
  }
  export type InputDataConfig = Channel[];
  export type InputModes = TrainingInputMode[];
  export type InstanceType = "ml.t2.medium"|"ml.t2.large"|"ml.t2.xlarge"|"ml.t2.2xlarge"|"ml.t3.medium"|"ml.t3.large"|"ml.t3.xlarge"|"ml.t3.2xlarge"|"ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.12xlarge"|"ml.m5.24xlarge"|"ml.c4.xlarge"|"ml.c4.2xlarge"|"ml.c4.4xlarge"|"ml.c4.8xlarge"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.18xlarge"|"ml.c5d.xlarge"|"ml.c5d.2xlarge"|"ml.c5d.4xlarge"|"ml.c5d.9xlarge"|"ml.c5d.18xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|string;
  export interface IntegerParameterRange {
    /**
     * The name of the hyperparameter to search.
     */
    Name: ParameterKey;
    /**
     * The minimum value of the hyperparameter to search.
     */
    MinValue: ParameterValue;
    /**
     * The maximum value of the hyperparameter to search.
     */
    MaxValue: ParameterValue;
    /**
     * The scale that hyperparameter tuning uses to search the hyperparameter range. For information about choosing a hyperparameter scale, see Hyperparameter Scaling. One of the following values:  Auto  Amazon SageMaker hyperparameter tuning chooses the best scale for the hyperparameter.  Linear  Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.  Logarithmic  Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale. Logarithmic scaling works only for ranges that have only values greater than 0.  
     */
    ScalingType?: HyperParameterScalingType;
  }
  export interface IntegerParameterRangeSpecification {
    /**
     * The minimum integer value allowed.
     */
    MinValue: ParameterValue;
    /**
     * The maximum integer value allowed.
     */
    MaxValue: ParameterValue;
  }
  export type IntegerParameterRanges = IntegerParameterRange[];
  export type InvocationsMaxRetries = number;
  export type InvocationsTimeoutInSeconds = number;
  export type JobReferenceCode = string;
  export type JobReferenceCodeContains = string;
  export type JoinSource = "Input"|"None"|string;
  export type JsonContentType = string;
  export type JsonContentTypes = JsonContentType[];
  export type JsonPath = string;
  export interface JupyterServerAppSettings {
    /**
     * The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.
     */
    DefaultResourceSpec?: ResourceSpec;
  }
  export interface KernelGatewayAppSettings {
    /**
     * The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.
     */
    DefaultResourceSpec?: ResourceSpec;
  }
  export type KmsKeyId = string;
  export type LabelAttributeName = string;
  export type LabelCounter = number;
  export interface LabelCounters {
    /**
     * The total number of objects labeled.
     */
    TotalLabeled?: LabelCounter;
    /**
     * The total number of objects labeled by a human worker.
     */
    HumanLabeled?: LabelCounter;
    /**
     * The total number of objects labeled by automated data labeling.
     */
    MachineLabeled?: LabelCounter;
    /**
     * The total number of objects that could not be labeled due to an error.
     */
    FailedNonRetryableError?: LabelCounter;
    /**
     * The total number of objects not yet labeled.
     */
    Unlabeled?: LabelCounter;
  }
  export interface LabelCountersForWorkteam {
    /**
     * The total number of data objects labeled by a human worker.
     */
    HumanLabeled?: LabelCounter;
    /**
     * The total number of data objects that need to be labeled by a human worker.
     */
    PendingHuman?: LabelCounter;
    /**
     * The total number of tasks in the labeling job.
     */
    Total?: LabelCounter;
  }
  export type LabelingJobAlgorithmSpecificationArn = string;
  export interface LabelingJobAlgorithmsConfig {
    /**
     * Specifies the Amazon Resource Name (ARN) of the algorithm used for auto-labeling. You must select one of the following ARNs:    Image classification   arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/image-classification     Text classification   arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/text-classification     Object detection   arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/object-detection     Semantic Segmentation   arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/semantic-segmentation   
     */
    LabelingJobAlgorithmSpecificationArn: LabelingJobAlgorithmSpecificationArn;
    /**
     * At the end of an auto-label job Amazon SageMaker Ground Truth sends the Amazon Resource Nam (ARN) of the final model used for auto-labeling. You can use this model as the starting point for subsequent similar jobs by providing the ARN of the model here. 
     */
    InitialActiveLearningModelArn?: ModelArn;
    /**
     * Provides configuration information for a labeling job.
     */
    LabelingJobResourceConfig?: LabelingJobResourceConfig;
  }
  export type LabelingJobArn = string;
  export interface LabelingJobDataAttributes {
    /**
     * Declares that your content is free of personally identifiable information or adult content. Amazon SageMaker may restrict the Amazon Mechanical Turk workers that can view your task based on this information.
     */
    ContentClassifiers?: ContentClassifiers;
  }
  export interface LabelingJobDataSource {
    /**
     * The Amazon S3 location of the input data objects.
     */
    S3DataSource?: LabelingJobS3DataSource;
  }
  export interface LabelingJobForWorkteamSummary {
    /**
     * The name of the labeling job that the work team is assigned to.
     */
    LabelingJobName?: LabelingJobName;
    /**
     * A unique identifier for a labeling job. You can use this to refer to a specific labeling job.
     */
    JobReferenceCode: JobReferenceCode;
    /**
     * 
     */
    WorkRequesterAccountId: AccountId;
    /**
     * The date and time that the labeling job was created.
     */
    CreationTime: Timestamp;
    /**
     * Provides information about the progress of a labeling job.
     */
    LabelCounters?: LabelCountersForWorkteam;
    /**
     * The configured number of workers per data object.
     */
    NumberOfHumanWorkersPerDataObject?: NumberOfHumanWorkersPerDataObject;
  }
  export type LabelingJobForWorkteamSummaryList = LabelingJobForWorkteamSummary[];
  export interface LabelingJobInputConfig {
    /**
     * The location of the input data.
     */
    DataSource: LabelingJobDataSource;
    /**
     * Attributes of the data specified by the customer.
     */
    DataAttributes?: LabelingJobDataAttributes;
  }
  export type LabelingJobName = string;
  export interface LabelingJobOutput {
    /**
     * The Amazon S3 bucket location of the manifest file for labeled data. 
     */
    OutputDatasetS3Uri: S3Uri;
    /**
     * The Amazon Resource Name (ARN) for the most recent Amazon SageMaker model trained as part of automated data labeling. 
     */
    FinalActiveLearningModelArn?: ModelArn;
  }
  export interface LabelingJobOutputConfig {
    /**
     * The Amazon S3 location to write output data.
     */
    S3OutputPath: S3Uri;
    /**
     * The AWS Key Management Service ID of the key used to encrypt the output data, if any. If you use a KMS key ID or an alias of your master key, the Amazon SageMaker execution role must include permissions to call kms:Encrypt. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. Amazon SageMaker uses server-side encryption with KMS-managed keys for LabelingJobOutputConfig. If you use a bucket policy with an s3:PutObject permission that only allows objects with server-side encryption, set the condition key of s3:x-amz-server-side-encryption to "aws:kms". For more information, see KMS-Managed Encryption Keys in the Amazon Simple Storage Service Developer Guide.  The KMS key policy must grant permission to the IAM role that you specify in your CreateLabelingJob request. For more information, see Using Key Policies in AWS KMS in the AWS Key Management Service Developer Guide.
     */
    KmsKeyId?: KmsKeyId;
  }
  export interface LabelingJobResourceConfig {
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the training job. The VolumeKmsKeyId can be any of the following formats:   // KMS Key ID  "1234abcd-12ab-34cd-56ef-1234567890ab"    // Amazon Resource Name (ARN) of a KMS Key  "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
  }
  export interface LabelingJobS3DataSource {
    /**
     * The Amazon S3 location of the manifest file that describes the input data objects.
     */
    ManifestS3Uri: S3Uri;
  }
  export type LabelingJobStatus = "Initializing"|"InProgress"|"Completed"|"Failed"|"Stopping"|"Stopped"|string;
  export interface LabelingJobStoppingConditions {
    /**
     * The maximum number of objects that can be labeled by human workers.
     */
    MaxHumanLabeledObjectCount?: MaxHumanLabeledObjectCount;
    /**
     * The maximum number of input data objects that should be labeled.
     */
    MaxPercentageOfInputDatasetLabeled?: MaxPercentageOfInputDatasetLabeled;
  }
  export interface LabelingJobSummary {
    /**
     * The name of the labeling job.
     */
    LabelingJobName: LabelingJobName;
    /**
     * The Amazon Resource Name (ARN) assigned to the labeling job when it was created.
     */
    LabelingJobArn: LabelingJobArn;
    /**
     * The date and time that the job was created (timestamp).
     */
    CreationTime: Timestamp;
    /**
     * The date and time that the job was last modified (timestamp).
     */
    LastModifiedTime: Timestamp;
    /**
     * The current status of the labeling job. 
     */
    LabelingJobStatus: LabelingJobStatus;
    /**
     * Counts showing the progress of the labeling job.
     */
    LabelCounters: LabelCounters;
    /**
     * The Amazon Resource Name (ARN) of the work team assigned to the job.
     */
    WorkteamArn: WorkteamArn;
    /**
     * The Amazon Resource Name (ARN) of a Lambda function. The function is run before each data object is sent to a worker.
     */
    PreHumanTaskLambdaArn: LambdaFunctionArn;
    /**
     * The Amazon Resource Name (ARN) of the Lambda function used to consolidate the annotations from individual workers into a label for a data object. For more information, see Annotation Consolidation.
     */
    AnnotationConsolidationLambdaArn?: LambdaFunctionArn;
    /**
     * If the LabelingJobStatus field is Failed, this field contains a description of the error.
     */
    FailureReason?: FailureReason;
    /**
     * The location of the output produced by the labeling job.
     */
    LabelingJobOutput?: LabelingJobOutput;
    /**
     * Input configuration for the labeling job.
     */
    InputConfig?: LabelingJobInputConfig;
  }
  export type LabelingJobSummaryList = LabelingJobSummary[];
  export type LambdaFunctionArn = string;
  export type LastModifiedTime = Date;
  export interface ListAlgorithmsInput {
    /**
     * A filter that returns only algorithms created after the specified time (timestamp).
     */
    CreationTimeAfter?: CreationTime;
    /**
     * A filter that returns only algorithms created before the specified time (timestamp).
     */
    CreationTimeBefore?: CreationTime;
    /**
     * The maximum number of algorithms to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * A string in the algorithm name. This filter returns only algorithms whose name contains the specified string.
     */
    NameContains?: NameContains;
    /**
     * If the response to a previous ListAlgorithms request was truncated, the response includes a NextToken. To retrieve the next set of algorithms, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The parameter by which to sort the results. The default is CreationTime.
     */
    SortBy?: AlgorithmSortBy;
    /**
     * The sort order for the results. The default is Ascending.
     */
    SortOrder?: SortOrder;
  }
  export interface ListAlgorithmsOutput {
    /**
     * &gt;An array of AlgorithmSummary objects, each of which lists an algorithm.
     */
    AlgorithmSummaryList: AlgorithmSummaryList;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of algorithms, use it in the subsequent request.
     */
    NextToken?: NextToken;
  }
  export interface ListAppsRequest {
    /**
     * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Returns a list up to a specified limit.
     */
    MaxResults?: MaxResults;
    /**
     * The sort order for the results. The default is Ascending.
     */
    SortOrder?: SortOrder;
    /**
     * The parameter by which to sort the results. The default is CreationTime.
     */
    SortBy?: AppSortKey;
    /**
     * A parameter to search for the domain ID.
     */
    DomainIdEquals?: DomainId;
    /**
     * A parameter to search by user profile name.
     */
    UserProfileNameEquals?: UserProfileName;
  }
  export interface ListAppsResponse {
    /**
     * The list of apps.
     */
    Apps?: AppList;
    /**
     * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListAutoMLJobsRequest {
    /**
     * Request a list of jobs, using a filter for time.
     */
    CreationTimeAfter?: Timestamp;
    /**
     * Request a list of jobs, using a filter for time.
     */
    CreationTimeBefore?: Timestamp;
    /**
     * Request a list of jobs, using a filter for time.
     */
    LastModifiedTimeAfter?: Timestamp;
    /**
     * Request a list of jobs, using a filter for time.
     */
    LastModifiedTimeBefore?: Timestamp;
    /**
     * Request a list of jobs, using a search filter for name.
     */
    NameContains?: AutoMLNameContains;
    /**
     * Request a list of jobs, using a filter for status.
     */
    StatusEquals?: AutoMLJobStatus;
    /**
     * The sort order for the results. The default is Descending.
     */
    SortOrder?: AutoMLSortOrder;
    /**
     * The parameter by which to sort the results. The default is AutoMLJobName.
     */
    SortBy?: AutoMLSortBy;
    /**
     * Request a list of jobs up to a specified limit.
     */
    MaxResults?: AutoMLMaxResults;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListAutoMLJobsResponse {
    /**
     * Returns a summary list of jobs.
     */
    AutoMLJobSummaries: AutoMLJobSummaries;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListCandidatesForAutoMLJobRequest {
    /**
     * List the Candidates created for the job by providing the job's name.
     */
    AutoMLJobName: AutoMLJobName;
    /**
     * List the Candidates for the job and filter by status.
     */
    StatusEquals?: CandidateStatus;
    /**
     * List the Candidates for the job and filter by candidate name.
     */
    CandidateNameEquals?: CandidateName;
    /**
     * The sort order for the results. The default is Ascending.
     */
    SortOrder?: AutoMLSortOrder;
    /**
     * The parameter by which to sort the results. The default is Descending.
     */
    SortBy?: CandidateSortBy;
    /**
     * List the job's Candidates up to a specified limit.
     */
    MaxResults?: AutoMLMaxResults;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListCandidatesForAutoMLJobResponse {
    /**
     * Summaries about the Candidates.
     */
    Candidates: AutoMLCandidates;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListCodeRepositoriesInput {
    /**
     * A filter that returns only Git repositories that were created after the specified time.
     */
    CreationTimeAfter?: CreationTime;
    /**
     * A filter that returns only Git repositories that were created before the specified time.
     */
    CreationTimeBefore?: CreationTime;
    /**
     * A filter that returns only Git repositories that were last modified after the specified time.
     */
    LastModifiedTimeAfter?: Timestamp;
    /**
     * A filter that returns only Git repositories that were last modified before the specified time.
     */
    LastModifiedTimeBefore?: Timestamp;
    /**
     * The maximum number of Git repositories to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * A string in the Git repositories name. This filter returns only repositories whose name contains the specified string.
     */
    NameContains?: CodeRepositoryNameContains;
    /**
     * If the result of a ListCodeRepositoriesOutput request was truncated, the response includes a NextToken. To get the next set of Git repositories, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The field to sort results by. The default is Name.
     */
    SortBy?: CodeRepositorySortBy;
    /**
     * The sort order for results. The default is Ascending.
     */
    SortOrder?: CodeRepositorySortOrder;
  }
  export interface ListCodeRepositoriesOutput {
    /**
     * Gets a list of summaries of the Git repositories. Each summary specifies the following values for the repository:    Name   Amazon Resource Name (ARN)   Creation time   Last modified time   Configuration information, including the URL location of the repository and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository.  
     */
    CodeRepositorySummaryList: CodeRepositorySummaryList;
    /**
     * If the result of a ListCodeRepositoriesOutput request was truncated, the response includes a NextToken. To get the next set of Git repositories, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListCompilationJobsRequest {
    /**
     * If the result of the previous ListCompilationJobs request was truncated, the response includes a NextToken. To retrieve the next set of model compilation jobs, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of model compilation jobs to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * A filter that returns the model compilation jobs that were created after a specified time. 
     */
    CreationTimeAfter?: CreationTime;
    /**
     * A filter that returns the model compilation jobs that were created before a specified time.
     */
    CreationTimeBefore?: CreationTime;
    /**
     * A filter that returns the model compilation jobs that were modified after a specified time.
     */
    LastModifiedTimeAfter?: LastModifiedTime;
    /**
     * A filter that returns the model compilation jobs that were modified before a specified time.
     */
    LastModifiedTimeBefore?: LastModifiedTime;
    /**
     * A filter that returns the model compilation jobs whose name contains a specified string.
     */
    NameContains?: NameContains;
    /**
     * A filter that retrieves model compilation jobs with a specific DescribeCompilationJobResponse$CompilationJobStatus status.
     */
    StatusEquals?: CompilationJobStatus;
    /**
     * The field by which to sort results. The default is CreationTime.
     */
    SortBy?: ListCompilationJobsSortBy;
    /**
     * The sort order for results. The default is Ascending.
     */
    SortOrder?: SortOrder;
  }
  export interface ListCompilationJobsResponse {
    /**
     * An array of CompilationJobSummary objects, each describing a model compilation job. 
     */
    CompilationJobSummaries: CompilationJobSummaries;
    /**
     * If the response is truncated, Amazon SageMaker returns this NextToken. To retrieve the next set of model compilation jobs, use this token in the next request.
     */
    NextToken?: NextToken;
  }
  export type ListCompilationJobsSortBy = "Name"|"CreationTime"|"Status"|string;
  export interface ListDomainsRequest {
    /**
     * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Returns a list up to a specified limit.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDomainsResponse {
    /**
     * The list of domains.
     */
    Domains?: DomainList;
    /**
     * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListEndpointConfigsInput {
    /**
     * The field to sort results by. The default is CreationTime.
     */
    SortBy?: EndpointConfigSortKey;
    /**
     * The sort order for results. The default is Descending.
     */
    SortOrder?: OrderKey;
    /**
     * If the result of the previous ListEndpointConfig request was truncated, the response includes a NextToken. To retrieve the next set of endpoint configurations, use the token in the next request. 
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of training jobs to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * A string in the endpoint configuration name. This filter returns only endpoint configurations whose name contains the specified string. 
     */
    NameContains?: EndpointConfigNameContains;
    /**
     * A filter that returns only endpoint configurations created before the specified time (timestamp).
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter that returns only endpoint configurations with a creation time greater than or equal to the specified time (timestamp).
     */
    CreationTimeAfter?: Timestamp;
  }
  export interface ListEndpointConfigsOutput {
    /**
     * An array of endpoint configurations.
     */
    EndpointConfigs: EndpointConfigSummaryList;
    /**
     *  If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of endpoint configurations, use it in the subsequent request 
     */
    NextToken?: PaginationToken;
  }
  export interface ListEndpointsInput {
    /**
     * Sorts the list of results. The default is CreationTime.
     */
    SortBy?: EndpointSortKey;
    /**
     * The sort order for results. The default is Descending.
     */
    SortOrder?: OrderKey;
    /**
     * If the result of a ListEndpoints request was truncated, the response includes a NextToken. To retrieve the next set of endpoints, use the token in the next request.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of endpoints to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * A string in endpoint names. This filter returns only endpoints whose name contains the specified string.
     */
    NameContains?: EndpointNameContains;
    /**
     * A filter that returns only endpoints that were created before the specified time (timestamp).
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter that returns only endpoints with a creation time greater than or equal to the specified time (timestamp).
     */
    CreationTimeAfter?: Timestamp;
    /**
     *  A filter that returns only endpoints that were modified before the specified timestamp. 
     */
    LastModifiedTimeBefore?: Timestamp;
    /**
     *  A filter that returns only endpoints that were modified after the specified timestamp. 
     */
    LastModifiedTimeAfter?: Timestamp;
    /**
     *  A filter that returns only endpoints with the specified status.
     */
    StatusEquals?: EndpointStatus;
  }
  export interface ListEndpointsOutput {
    /**
     *  An array or endpoint objects. 
     */
    Endpoints: EndpointSummaryList;
    /**
     *  If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of training jobs, use it in the subsequent request. 
     */
    NextToken?: PaginationToken;
  }
  export interface ListExperimentsRequest {
    /**
     * A filter that returns only experiments created after the specified time.
     */
    CreatedAfter?: Timestamp;
    /**
     * A filter that returns only experiments created before the specified time.
     */
    CreatedBefore?: Timestamp;
    /**
     * The property used to sort results. The default value is CreationTime.
     */
    SortBy?: SortExperimentsBy;
    /**
     * The sort order. The default value is Descending.
     */
    SortOrder?: SortOrder;
    /**
     * If the previous call to ListExperiments didn't return the full set of experiments, the call returns a token for getting the next set of experiments.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of experiments to return in the response. The default value is 10.
     */
    MaxResults?: MaxResults;
  }
  export interface ListExperimentsResponse {
    /**
     * A list of the summaries of your experiments.
     */
    ExperimentSummaries?: ExperimentSummaries;
    /**
     * A token for getting the next set of experiments, if there are any.
     */
    NextToken?: NextToken;
  }
  export interface ListFlowDefinitionsRequest {
    /**
     * A filter that returns only flow definitions with a creation time greater than or equal to the specified timestamp.
     */
    CreationTimeAfter?: Timestamp;
    /**
     * A filter that returns only flow definitions that were created before the specified timestamp.
     */
    CreationTimeBefore?: Timestamp;
    /**
     * An optional value that specifies whether you want the results sorted in Ascending or Descending order.
     */
    SortOrder?: SortOrder;
    /**
     * A token to resume pagination.
     */
    NextToken?: NextToken;
    /**
     * The total number of items to return. If the total number of available items is more than the value specified in MaxResults, then a NextToken will be provided in the output that you can use to resume pagination.
     */
    MaxResults?: MaxResults;
  }
  export interface ListFlowDefinitionsResponse {
    /**
     * An array of objects describing the flow definitions.
     */
    FlowDefinitionSummaries: FlowDefinitionSummaries;
    /**
     * A token to resume pagination.
     */
    NextToken?: NextToken;
  }
  export interface ListHumanTaskUisRequest {
    /**
     * A filter that returns only human task user interfaces with a creation time greater than or equal to the specified timestamp.
     */
    CreationTimeAfter?: Timestamp;
    /**
     * A filter that returns only human task user interfaces that were created before the specified timestamp.
     */
    CreationTimeBefore?: Timestamp;
    /**
     * An optional value that specifies whether you want the results sorted in Ascending or Descending order.
     */
    SortOrder?: SortOrder;
    /**
     * A token to resume pagination.
     */
    NextToken?: NextToken;
    /**
     * The total number of items to return. If the total number of available items is more than the value specified in MaxResults, then a NextToken will be provided in the output that you can use to resume pagination.
     */
    MaxResults?: MaxResults;
  }
  export interface ListHumanTaskUisResponse {
    /**
     * An array of objects describing the human task user interfaces.
     */
    HumanTaskUiSummaries: HumanTaskUiSummaries;
    /**
     * A token to resume pagination.
     */
    NextToken?: NextToken;
  }
  export interface ListHyperParameterTuningJobsRequest {
    /**
     * If the result of the previous ListHyperParameterTuningJobs request was truncated, the response includes a NextToken. To retrieve the next set of tuning jobs, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of tuning jobs to return. The default value is 10.
     */
    MaxResults?: MaxResults;
    /**
     * The field to sort results by. The default is Name.
     */
    SortBy?: HyperParameterTuningJobSortByOptions;
    /**
     * The sort order for results. The default is Ascending.
     */
    SortOrder?: SortOrder;
    /**
     * A string in the tuning job name. This filter returns only tuning jobs whose name contains the specified string.
     */
    NameContains?: NameContains;
    /**
     * A filter that returns only tuning jobs that were created after the specified time.
     */
    CreationTimeAfter?: Timestamp;
    /**
     * A filter that returns only tuning jobs that were created before the specified time.
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter that returns only tuning jobs that were modified after the specified time.
     */
    LastModifiedTimeAfter?: Timestamp;
    /**
     * A filter that returns only tuning jobs that were modified before the specified time.
     */
    LastModifiedTimeBefore?: Timestamp;
    /**
     * A filter that returns only tuning jobs with the specified status.
     */
    StatusEquals?: HyperParameterTuningJobStatus;
  }
  export interface ListHyperParameterTuningJobsResponse {
    /**
     * A list of HyperParameterTuningJobSummary objects that describe the tuning jobs that the ListHyperParameterTuningJobs request returned.
     */
    HyperParameterTuningJobSummaries: HyperParameterTuningJobSummaries;
    /**
     * If the result of this ListHyperParameterTuningJobs request was truncated, the response includes a NextToken. To retrieve the next set of tuning jobs, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListLabelingJobsForWorkteamRequest {
    /**
     * The Amazon Resource Name (ARN) of the work team for which you want to see labeling jobs for.
     */
    WorkteamArn: WorkteamArn;
    /**
     * The maximum number of labeling jobs to return in each page of the response.
     */
    MaxResults?: MaxResults;
    /**
     * If the result of the previous ListLabelingJobsForWorkteam request was truncated, the response includes a NextToken. To retrieve the next set of labeling jobs, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * A filter that returns only labeling jobs created after the specified time (timestamp).
     */
    CreationTimeAfter?: Timestamp;
    /**
     * A filter that returns only labeling jobs created before the specified time (timestamp).
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter the limits jobs to only the ones whose job reference code contains the specified string.
     */
    JobReferenceCodeContains?: JobReferenceCodeContains;
    /**
     * The field to sort results by. The default is CreationTime.
     */
    SortBy?: ListLabelingJobsForWorkteamSortByOptions;
    /**
     * The sort order for results. The default is Ascending.
     */
    SortOrder?: SortOrder;
  }
  export interface ListLabelingJobsForWorkteamResponse {
    /**
     * An array of LabelingJobSummary objects, each describing a labeling job.
     */
    LabelingJobSummaryList: LabelingJobForWorkteamSummaryList;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of labeling jobs, use it in the subsequent request.
     */
    NextToken?: NextToken;
  }
  export type ListLabelingJobsForWorkteamSortByOptions = "CreationTime"|string;
  export interface ListLabelingJobsRequest {
    /**
     * A filter that returns only labeling jobs created after the specified time (timestamp).
     */
    CreationTimeAfter?: Timestamp;
    /**
     * A filter that returns only labeling jobs created before the specified time (timestamp).
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter that returns only labeling jobs modified after the specified time (timestamp).
     */
    LastModifiedTimeAfter?: Timestamp;
    /**
     * A filter that returns only labeling jobs modified before the specified time (timestamp).
     */
    LastModifiedTimeBefore?: Timestamp;
    /**
     * The maximum number of labeling jobs to return in each page of the response.
     */
    MaxResults?: MaxResults;
    /**
     * If the result of the previous ListLabelingJobs request was truncated, the response includes a NextToken. To retrieve the next set of labeling jobs, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * A string in the labeling job name. This filter returns only labeling jobs whose name contains the specified string.
     */
    NameContains?: NameContains;
    /**
     * The field to sort results by. The default is CreationTime.
     */
    SortBy?: SortBy;
    /**
     * The sort order for results. The default is Ascending.
     */
    SortOrder?: SortOrder;
    /**
     * A filter that retrieves only labeling jobs with a specific status.
     */
    StatusEquals?: LabelingJobStatus;
  }
  export interface ListLabelingJobsResponse {
    /**
     * An array of LabelingJobSummary objects, each describing a labeling job.
     */
    LabelingJobSummaryList?: LabelingJobSummaryList;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of labeling jobs, use it in the subsequent request.
     */
    NextToken?: NextToken;
  }
  export interface ListModelPackagesInput {
    /**
     * A filter that returns only model packages created after the specified time (timestamp).
     */
    CreationTimeAfter?: CreationTime;
    /**
     * A filter that returns only model packages created before the specified time (timestamp).
     */
    CreationTimeBefore?: CreationTime;
    /**
     * The maximum number of model packages to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * A string in the model package name. This filter returns only model packages whose name contains the specified string.
     */
    NameContains?: NameContains;
    /**
     * If the response to a previous ListModelPackages request was truncated, the response includes a NextToken. To retrieve the next set of model packages, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The parameter by which to sort the results. The default is CreationTime.
     */
    SortBy?: ModelPackageSortBy;
    /**
     * The sort order for the results. The default is Ascending.
     */
    SortOrder?: SortOrder;
  }
  export interface ListModelPackagesOutput {
    /**
     * An array of ModelPackageSummary objects, each of which lists a model package.
     */
    ModelPackageSummaryList: ModelPackageSummaryList;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of model packages, use it in the subsequent request.
     */
    NextToken?: NextToken;
  }
  export interface ListModelsInput {
    /**
     * Sorts the list of results. The default is CreationTime.
     */
    SortBy?: ModelSortKey;
    /**
     * The sort order for results. The default is Descending.
     */
    SortOrder?: OrderKey;
    /**
     * If the response to a previous ListModels request was truncated, the response includes a NextToken. To retrieve the next set of models, use the token in the next request.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of models to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * A string in the training job name. This filter returns only models in the training job whose name contains the specified string.
     */
    NameContains?: ModelNameContains;
    /**
     * A filter that returns only models created before the specified time (timestamp).
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter that returns only models with a creation time greater than or equal to the specified time (timestamp).
     */
    CreationTimeAfter?: Timestamp;
  }
  export interface ListModelsOutput {
    /**
     * An array of ModelSummary objects, each of which lists a model.
     */
    Models: ModelSummaryList;
    /**
     *  If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of models, use it in the subsequent request. 
     */
    NextToken?: PaginationToken;
  }
  export interface ListMonitoringExecutionsRequest {
    /**
     * Name of a specific schedule to fetch jobs for.
     */
    MonitoringScheduleName?: MonitoringScheduleName;
    /**
     * Name of a specific endpoint to fetch jobs for.
     */
    EndpointName?: EndpointName;
    /**
     * Whether to sort results by Status, CreationTime, ScheduledTime field. The default is CreationTime.
     */
    SortBy?: MonitoringExecutionSortKey;
    /**
     * Whether to sort the results in Ascending or Descending order. The default is Descending.
     */
    SortOrder?: SortOrder;
    /**
     * The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of jobs to return in the response. The default value is 10.
     */
    MaxResults?: MaxResults;
    /**
     * Filter for jobs scheduled before a specified time.
     */
    ScheduledTimeBefore?: Timestamp;
    /**
     * Filter for jobs scheduled after a specified time.
     */
    ScheduledTimeAfter?: Timestamp;
    /**
     * A filter that returns only jobs created before a specified time.
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter that returns only jobs created after a specified time.
     */
    CreationTimeAfter?: Timestamp;
    /**
     * A filter that returns only jobs modified after a specified time.
     */
    LastModifiedTimeBefore?: Timestamp;
    /**
     * A filter that returns only jobs modified before a specified time.
     */
    LastModifiedTimeAfter?: Timestamp;
    /**
     * A filter that retrieves only jobs with a specific status.
     */
    StatusEquals?: ExecutionStatus;
  }
  export interface ListMonitoringExecutionsResponse {
    /**
     * A JSON array in which each element is a summary for a monitoring execution.
     */
    MonitoringExecutionSummaries: MonitoringExecutionSummaryList;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs, use it in the subsequent reques
     */
    NextToken?: NextToken;
  }
  export interface ListMonitoringSchedulesRequest {
    /**
     * Name of a specific endpoint to fetch schedules for.
     */
    EndpointName?: EndpointName;
    /**
     * Whether to sort results by Status, CreationTime, ScheduledTime field. The default is CreationTime.
     */
    SortBy?: MonitoringScheduleSortKey;
    /**
     * Whether to sort the results in Ascending or Descending order. The default is Descending.
     */
    SortOrder?: SortOrder;
    /**
     * The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of jobs to return in the response. The default value is 10.
     */
    MaxResults?: MaxResults;
    /**
     * Filter for monitoring schedules whose name contains a specified string.
     */
    NameContains?: NameContains;
    /**
     * A filter that returns only monitoring schedules created before a specified time.
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter that returns only monitoring schedules created after a specified time.
     */
    CreationTimeAfter?: Timestamp;
    /**
     * A filter that returns only monitoring schedules modified before a specified time.
     */
    LastModifiedTimeBefore?: Timestamp;
    /**
     * A filter that returns only monitoring schedules modified after a specified time.
     */
    LastModifiedTimeAfter?: Timestamp;
    /**
     * A filter that returns only monitoring schedules modified before a specified time.
     */
    StatusEquals?: ScheduleStatus;
  }
  export interface ListMonitoringSchedulesResponse {
    /**
     * A JSON array in which each element is a summary for a monitoring schedule.
     */
    MonitoringScheduleSummaries: MonitoringScheduleSummaryList;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs, use it in the subsequent reques
     */
    NextToken?: NextToken;
  }
  export interface ListNotebookInstanceLifecycleConfigsInput {
    /**
     * If the result of a ListNotebookInstanceLifecycleConfigs request was truncated, the response includes a NextToken. To get the next set of lifecycle configurations, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of lifecycle configurations to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * Sorts the list of results. The default is CreationTime.
     */
    SortBy?: NotebookInstanceLifecycleConfigSortKey;
    /**
     * The sort order for results.
     */
    SortOrder?: NotebookInstanceLifecycleConfigSortOrder;
    /**
     * A string in the lifecycle configuration name. This filter returns only lifecycle configurations whose name contains the specified string.
     */
    NameContains?: NotebookInstanceLifecycleConfigNameContains;
    /**
     * A filter that returns only lifecycle configurations that were created before the specified time (timestamp).
     */
    CreationTimeBefore?: CreationTime;
    /**
     * A filter that returns only lifecycle configurations that were created after the specified time (timestamp).
     */
    CreationTimeAfter?: CreationTime;
    /**
     * A filter that returns only lifecycle configurations that were modified before the specified time (timestamp).
     */
    LastModifiedTimeBefore?: LastModifiedTime;
    /**
     * A filter that returns only lifecycle configurations that were modified after the specified time (timestamp).
     */
    LastModifiedTimeAfter?: LastModifiedTime;
  }
  export interface ListNotebookInstanceLifecycleConfigsOutput {
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To get the next set of lifecycle configurations, use it in the next request. 
     */
    NextToken?: NextToken;
    /**
     * An array of NotebookInstanceLifecycleConfiguration objects, each listing a lifecycle configuration.
     */
    NotebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummaryList;
  }
  export interface ListNotebookInstancesInput {
    /**
     *  If the previous call to the ListNotebookInstances is truncated, the response includes a NextToken. You can use this token in your subsequent ListNotebookInstances request to fetch the next set of notebook instances.   You might specify a filter or a sort order in your request. When response is truncated, you must use the same values for the filer and sort order in the next request.  
     */
    NextToken?: NextToken;
    /**
     * The maximum number of notebook instances to return.
     */
    MaxResults?: MaxResults;
    /**
     * The field to sort results by. The default is Name.
     */
    SortBy?: NotebookInstanceSortKey;
    /**
     * The sort order for results. 
     */
    SortOrder?: NotebookInstanceSortOrder;
    /**
     * A string in the notebook instances' name. This filter returns only notebook instances whose name contains the specified string.
     */
    NameContains?: NotebookInstanceNameContains;
    /**
     * A filter that returns only notebook instances that were created before the specified time (timestamp). 
     */
    CreationTimeBefore?: CreationTime;
    /**
     * A filter that returns only notebook instances that were created after the specified time (timestamp).
     */
    CreationTimeAfter?: CreationTime;
    /**
     * A filter that returns only notebook instances that were modified before the specified time (timestamp).
     */
    LastModifiedTimeBefore?: LastModifiedTime;
    /**
     * A filter that returns only notebook instances that were modified after the specified time (timestamp).
     */
    LastModifiedTimeAfter?: LastModifiedTime;
    /**
     * A filter that returns only notebook instances with the specified status.
     */
    StatusEquals?: NotebookInstanceStatus;
    /**
     * A string in the name of a notebook instances lifecycle configuration associated with this notebook instance. This filter returns only notebook instances associated with a lifecycle configuration with a name that contains the specified string.
     */
    NotebookInstanceLifecycleConfigNameContains?: NotebookInstanceLifecycleConfigName;
    /**
     * A string in the name or URL of a Git repository associated with this notebook instance. This filter returns only notebook instances associated with a git repository with a name that contains the specified string.
     */
    DefaultCodeRepositoryContains?: CodeRepositoryContains;
    /**
     * A filter that returns only notebook instances with associated with the specified git repository.
     */
    AdditionalCodeRepositoryEquals?: CodeRepositoryNameOrUrl;
  }
  export interface ListNotebookInstancesOutput {
    /**
     * If the response to the previous ListNotebookInstances request was truncated, Amazon SageMaker returns this token. To retrieve the next set of notebook instances, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * An array of NotebookInstanceSummary objects, one for each notebook instance.
     */
    NotebookInstances?: NotebookInstanceSummaryList;
  }
  export interface ListProcessingJobsRequest {
    /**
     * A filter that returns only processing jobs created after the specified time.
     */
    CreationTimeAfter?: Timestamp;
    /**
     * A filter that returns only processing jobs created after the specified time.
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter that returns only processing jobs modified after the specified time.
     */
    LastModifiedTimeAfter?: Timestamp;
    /**
     * A filter that returns only processing jobs modified before the specified time.
     */
    LastModifiedTimeBefore?: Timestamp;
    /**
     * A string in the processing job name. This filter returns only processing jobs whose name contains the specified string.
     */
    NameContains?: String;
    /**
     * A filter that retrieves only processing jobs with a specific status.
     */
    StatusEquals?: ProcessingJobStatus;
    /**
     * The field to sort results by. The default is CreationTime.
     */
    SortBy?: SortBy;
    /**
     * The sort order for results. The default is Ascending.
     */
    SortOrder?: SortOrder;
    /**
     * If the result of the previous ListProcessingJobs request was truncated, the response includes a NextToken. To retrieve the next set of processing jobs, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of processing jobs to return in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface ListProcessingJobsResponse {
    /**
     * An array of ProcessingJobSummary objects, each listing a processing job.
     */
    ProcessingJobSummaries: ProcessingJobSummaries;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of processing jobs, use it in the subsequent request.
     */
    NextToken?: NextToken;
  }
  export interface ListSubscribedWorkteamsRequest {
    /**
     * A string in the work team name. This filter returns only work teams whose name contains the specified string.
     */
    NameContains?: WorkteamName;
    /**
     * If the result of the previous ListSubscribedWorkteams request was truncated, the response includes a NextToken. To retrieve the next set of labeling jobs, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of work teams to return in each page of the response.
     */
    MaxResults?: MaxResults;
  }
  export interface ListSubscribedWorkteamsResponse {
    /**
     * An array of Workteam objects, each describing a work team.
     */
    SubscribedWorkteams: SubscribedWorkteams;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of work teams, use it in the subsequent request.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsInput {
    /**
     * The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.
     */
    ResourceArn: ResourceArn;
    /**
     *  If the response to the previous ListTags request is truncated, Amazon SageMaker returns this token. To retrieve the next set of tags, use it in the subsequent request. 
     */
    NextToken?: NextToken;
    /**
     * Maximum number of tags to return.
     */
    MaxResults?: ListTagsMaxResults;
  }
  export type ListTagsMaxResults = number;
  export interface ListTagsOutput {
    /**
     * An array of Tag objects, each with a tag key and a value.
     */
    Tags?: TagList;
    /**
     *  If response is truncated, Amazon SageMaker includes a token in the response. You can use this token in your subsequent request to fetch next set of tokens. 
     */
    NextToken?: NextToken;
  }
  export interface ListTrainingJobsForHyperParameterTuningJobRequest {
    /**
     * The name of the tuning job whose training jobs you want to list.
     */
    HyperParameterTuningJobName: HyperParameterTuningJobName;
    /**
     * If the result of the previous ListTrainingJobsForHyperParameterTuningJob request was truncated, the response includes a NextToken. To retrieve the next set of training jobs, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of training jobs to return. The default value is 10.
     */
    MaxResults?: MaxResults;
    /**
     * A filter that returns only training jobs with the specified status.
     */
    StatusEquals?: TrainingJobStatus;
    /**
     * The field to sort results by. The default is Name. If the value of this field is FinalObjectiveMetricValue, any training jobs that did not return an objective metric are not listed.
     */
    SortBy?: TrainingJobSortByOptions;
    /**
     * The sort order for results. The default is Ascending.
     */
    SortOrder?: SortOrder;
  }
  export interface ListTrainingJobsForHyperParameterTuningJobResponse {
    /**
     * A list of TrainingJobSummary objects that describe the training jobs that the ListTrainingJobsForHyperParameterTuningJob request returned.
     */
    TrainingJobSummaries: HyperParameterTrainingJobSummaries;
    /**
     * If the result of this ListTrainingJobsForHyperParameterTuningJob request was truncated, the response includes a NextToken. To retrieve the next set of training jobs, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListTrainingJobsRequest {
    /**
     * If the result of the previous ListTrainingJobs request was truncated, the response includes a NextToken. To retrieve the next set of training jobs, use the token in the next request. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of training jobs to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * A filter that returns only training jobs created after the specified time (timestamp).
     */
    CreationTimeAfter?: Timestamp;
    /**
     * A filter that returns only training jobs created before the specified time (timestamp).
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter that returns only training jobs modified after the specified time (timestamp).
     */
    LastModifiedTimeAfter?: Timestamp;
    /**
     * A filter that returns only training jobs modified before the specified time (timestamp).
     */
    LastModifiedTimeBefore?: Timestamp;
    /**
     * A string in the training job name. This filter returns only training jobs whose name contains the specified string.
     */
    NameContains?: NameContains;
    /**
     * A filter that retrieves only training jobs with a specific status.
     */
    StatusEquals?: TrainingJobStatus;
    /**
     * The field to sort results by. The default is CreationTime.
     */
    SortBy?: SortBy;
    /**
     * The sort order for results. The default is Ascending.
     */
    SortOrder?: SortOrder;
  }
  export interface ListTrainingJobsResponse {
    /**
     * An array of TrainingJobSummary objects, each listing a training job.
     */
    TrainingJobSummaries: TrainingJobSummaries;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of training jobs, use it in the subsequent request.
     */
    NextToken?: NextToken;
  }
  export interface ListTransformJobsRequest {
    /**
     * A filter that returns only transform jobs created after the specified time.
     */
    CreationTimeAfter?: Timestamp;
    /**
     * A filter that returns only transform jobs created before the specified time.
     */
    CreationTimeBefore?: Timestamp;
    /**
     * A filter that returns only transform jobs modified after the specified time.
     */
    LastModifiedTimeAfter?: Timestamp;
    /**
     * A filter that returns only transform jobs modified before the specified time.
     */
    LastModifiedTimeBefore?: Timestamp;
    /**
     * A string in the transform job name. This filter returns only transform jobs whose name contains the specified string.
     */
    NameContains?: NameContains;
    /**
     * A filter that retrieves only transform jobs with a specific status.
     */
    StatusEquals?: TransformJobStatus;
    /**
     * The field to sort results by. The default is CreationTime.
     */
    SortBy?: SortBy;
    /**
     * The sort order for results. The default is Descending.
     */
    SortOrder?: SortOrder;
    /**
     * If the result of the previous ListTransformJobs request was truncated, the response includes a NextToken. To retrieve the next set of transform jobs, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of transform jobs to return in the response. The default value is 10.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTransformJobsResponse {
    /**
     * An array of TransformJobSummary objects.
     */
    TransformJobSummaries: TransformJobSummaries;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of transform jobs, use it in the next request.
     */
    NextToken?: NextToken;
  }
  export type ListTrialComponentKey256 = TrialComponentKey256[];
  export interface ListTrialComponentsRequest {
    /**
     * A filter that returns only components that are part of the specified experiment. If you specify ExperimentName, you can't filter by SourceArn or TrialName.
     */
    ExperimentName?: ExperimentEntityName;
    /**
     * A filter that returns only components that are part of the specified trial. If you specify TrialName, you can't filter by ExperimentName or SourceArn.
     */
    TrialName?: ExperimentEntityName;
    /**
     * A filter that returns only components that have the specified source Amazon Resource Name (ARN). If you specify SourceArn, you can't filter by ExperimentName or TrialName.
     */
    SourceArn?: String256;
    /**
     * A filter that returns only components created after the specified time.
     */
    CreatedAfter?: Timestamp;
    /**
     * A filter that returns only components created before the specified time.
     */
    CreatedBefore?: Timestamp;
    /**
     * The property used to sort results. The default value is CreationTime.
     */
    SortBy?: SortTrialComponentsBy;
    /**
     * The sort order. The default value is Descending.
     */
    SortOrder?: SortOrder;
    /**
     * The maximum number of components to return in the response. The default value is 10.
     */
    MaxResults?: MaxResults;
    /**
     * If the previous call to ListTrialComponents didn't return the full set of components, the call returns a token for getting the next set of components.
     */
    NextToken?: NextToken;
  }
  export interface ListTrialComponentsResponse {
    /**
     * A list of the summaries of your trial components.
     */
    TrialComponentSummaries?: TrialComponentSummaries;
    /**
     * A token for getting the next set of components, if there are any.
     */
    NextToken?: NextToken;
  }
  export interface ListTrialsRequest {
    /**
     * A filter that returns only trials that are part of the specified experiment.
     */
    ExperimentName?: ExperimentEntityName;
    /**
     * A filter that returns only trials that are associated with the specified trial component.
     */
    TrialComponentName?: ExperimentEntityName;
    /**
     * A filter that returns only trials created after the specified time.
     */
    CreatedAfter?: Timestamp;
    /**
     * A filter that returns only trials created before the specified time.
     */
    CreatedBefore?: Timestamp;
    /**
     * The property used to sort results. The default value is CreationTime.
     */
    SortBy?: SortTrialsBy;
    /**
     * The sort order. The default value is Descending.
     */
    SortOrder?: SortOrder;
    /**
     * The maximum number of trials to return in the response. The default value is 10.
     */
    MaxResults?: MaxResults;
    /**
     * If the previous call to ListTrials didn't return the full set of trials, the call returns a token for getting the next set of trials.
     */
    NextToken?: NextToken;
  }
  export interface ListTrialsResponse {
    /**
     * A list of the summaries of your trials.
     */
    TrialSummaries?: TrialSummaries;
    /**
     * A token for getting the next set of trials, if there are any.
     */
    NextToken?: NextToken;
  }
  export interface ListUserProfilesRequest {
    /**
     * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Returns a list up to a specified limit.
     */
    MaxResults?: MaxResults;
    /**
     * The sort order for the results. The default is Ascending.
     */
    SortOrder?: SortOrder;
    /**
     * The parameter by which to sort the results. The default is CreationTime.
     */
    SortBy?: UserProfileSortKey;
    /**
     * A parameter by which to filter the results.
     */
    DomainIdEquals?: DomainId;
    /**
     * A parameter by which to filter the results.
     */
    UserProfileNameContains?: UserProfileName;
  }
  export interface ListUserProfilesResponse {
    /**
     * The list of user profiles.
     */
    UserProfiles?: UserProfileList;
    /**
     * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListWorkforcesRequest {
    /**
     * Sort workforces using the workforce name or creation date.
     */
    SortBy?: ListWorkforcesSortByOptions;
    /**
     * Sort workforces in ascending or descending order.
     */
    SortOrder?: SortOrder;
    /**
     * A filter you can use to search for workforces using part of the workforce name.
     */
    NameContains?: WorkforceName;
    /**
     * A token to resume pagination.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of workforces returned in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface ListWorkforcesResponse {
    /**
     * A list containing information about your workforce.
     */
    Workforces: Workforces;
    /**
     * A token to resume pagination.
     */
    NextToken?: NextToken;
  }
  export type ListWorkforcesSortByOptions = "Name"|"CreateDate"|string;
  export interface ListWorkteamsRequest {
    /**
     * The field to sort results by. The default is CreationTime.
     */
    SortBy?: ListWorkteamsSortByOptions;
    /**
     * The sort order for results. The default is Ascending.
     */
    SortOrder?: SortOrder;
    /**
     * A string in the work team's name. This filter returns only work teams whose name contains the specified string.
     */
    NameContains?: WorkteamName;
    /**
     * If the result of the previous ListWorkteams request was truncated, the response includes a NextToken. To retrieve the next set of labeling jobs, use the token in the next request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of work teams to return in each page of the response.
     */
    MaxResults?: MaxResults;
  }
  export interface ListWorkteamsResponse {
    /**
     * An array of Workteam objects, each describing a work team.
     */
    Workteams: Workteams;
    /**
     * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of work teams, use it in the subsequent request.
     */
    NextToken?: NextToken;
  }
  export type ListWorkteamsSortByOptions = "Name"|"CreateDate"|string;
  export type MaxAutoMLJobRuntimeInSeconds = number;
  export type MaxCandidates = number;
  export type MaxConcurrentTaskCount = number;
  export type MaxConcurrentTransforms = number;
  export type MaxHumanLabeledObjectCount = number;
  export type MaxNumberOfTrainingJobs = number;
  export type MaxParallelTrainingJobs = number;
  export type MaxPayloadInMB = number;
  export type MaxPercentageOfInputDatasetLabeled = number;
  export type MaxResults = number;
  export type MaxRuntimeInSeconds = number;
  export type MaxRuntimePerTrainingJobInSeconds = number;
  export type MaxWaitTimeInSeconds = number;
  export type MediaType = string;
  export interface MemberDefinition {
    /**
     * The Amazon Cognito user group that is part of the work team.
     */
    CognitoMemberDefinition?: CognitoMemberDefinition;
    /**
     * A list user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. When you add a user group to the list of Groups, you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.
     */
    OidcMemberDefinition?: OidcMemberDefinition;
  }
  export type MemberDefinitions = MemberDefinition[];
  export interface MetricData {
    /**
     * The name of the metric.
     */
    MetricName?: MetricName;
    /**
     * The value of the metric.
     */
    Value?: Float;
    /**
     * The date and time that the algorithm emitted the metric.
     */
    Timestamp?: Timestamp;
  }
  export interface MetricDefinition {
    /**
     * The name of the metric.
     */
    Name: MetricName;
    /**
     * A regular expression that searches the output of a training job and gets the value of the metric. For more information about using regular expressions to define metrics, see Defining Objective Metrics.
     */
    Regex: MetricRegex;
  }
  export type MetricDefinitionList = MetricDefinition[];
  export type MetricName = string;
  export type MetricRegex = string;
  export type MetricValue = number;
  export type ModelArn = string;
  export interface ModelArtifacts {
    /**
     * The path of the S3 object that contains the model artifacts. For example, s3://bucket-name/keynameprefix/model.tar.gz.
     */
    S3ModelArtifacts: S3Uri;
  }
  export interface ModelClientConfig {
    /**
     * The timeout value in seconds for an invocation request.
     */
    InvocationsTimeoutInSeconds?: InvocationsTimeoutInSeconds;
    /**
     * The maximum number of retries when invocation requests are failing.
     */
    InvocationsMaxRetries?: InvocationsMaxRetries;
  }
  export type ModelName = string;
  export type ModelNameContains = string;
  export type ModelPackageArn = string;
  export interface ModelPackageContainerDefinition {
    /**
     * The DNS host name for the Docker container.
     */
    ContainerHostname?: ContainerHostname;
    /**
     * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored. If you are using your own custom algorithm instead of an algorithm provided by Amazon SageMaker, the inference code must meet Amazon SageMaker requirements. Amazon SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see Using Your Own Algorithms with Amazon SageMaker.
     */
    Image: ContainerImage;
    /**
     * An MD5 hash of the training algorithm that identifies the Docker image used for training.
     */
    ImageDigest?: ImageDigest;
    /**
     * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
     */
    ModelDataUrl?: Url;
    /**
     * The AWS Marketplace product ID of the model package.
     */
    ProductId?: ProductId;
  }
  export type ModelPackageContainerDefinitionList = ModelPackageContainerDefinition[];
  export type ModelPackageSortBy = "Name"|"CreationTime"|string;
  export type ModelPackageStatus = "Pending"|"InProgress"|"Completed"|"Failed"|"Deleting"|string;
  export interface ModelPackageStatusDetails {
    /**
     * The validation status of the model package.
     */
    ValidationStatuses: ModelPackageStatusItemList;
    /**
     * The status of the scan of the Docker image container for the model package.
     */
    ImageScanStatuses?: ModelPackageStatusItemList;
  }
  export interface ModelPackageStatusItem {
    /**
     * The name of the model package for which the overall status is being reported.
     */
    Name: EntityName;
    /**
     * The current status.
     */
    Status: DetailedModelPackageStatus;
    /**
     * if the overall status is Failed, the reason for the failure.
     */
    FailureReason?: String;
  }
  export type ModelPackageStatusItemList = ModelPackageStatusItem[];
  export interface ModelPackageSummary {
    /**
     * The name of the model package.
     */
    ModelPackageName: EntityName;
    /**
     * The Amazon Resource Name (ARN) of the model package.
     */
    ModelPackageArn: ModelPackageArn;
    /**
     * A brief description of the model package.
     */
    ModelPackageDescription?: EntityDescription;
    /**
     * A timestamp that shows when the model package was created.
     */
    CreationTime: CreationTime;
    /**
     * The overall status of the model package.
     */
    ModelPackageStatus: ModelPackageStatus;
  }
  export type ModelPackageSummaryList = ModelPackageSummary[];
  export interface ModelPackageValidationProfile {
    /**
     * The name of the profile for the model package.
     */
    ProfileName: EntityName;
    /**
     * The TransformJobDefinition object that describes the transform job used for the validation of the model package.
     */
    TransformJobDefinition: TransformJobDefinition;
  }
  export type ModelPackageValidationProfiles = ModelPackageValidationProfile[];
  export interface ModelPackageValidationSpecification {
    /**
     * The IAM roles to be used for the validation of the model package.
     */
    ValidationRole: RoleArn;
    /**
     * An array of ModelPackageValidationProfile objects, each of which specifies a batch transform job that Amazon SageMaker runs to validate your model package.
     */
    ValidationProfiles: ModelPackageValidationProfiles;
  }
  export type ModelSortKey = "Name"|"CreationTime"|string;
  export interface ModelSummary {
    /**
     * The name of the model that you want a summary for.
     */
    ModelName: ModelName;
    /**
     * The Amazon Resource Name (ARN) of the model.
     */
    ModelArn: ModelArn;
    /**
     * A timestamp that indicates when the model was created.
     */
    CreationTime: Timestamp;
  }
  export type ModelSummaryList = ModelSummary[];
  export interface MonitoringAppSpecification {
    /**
     * The container image to be run by the monitoring job.
     */
    ImageUri: ImageUri;
    /**
     * Specifies the entrypoint for a container used to run the monitoring job.
     */
    ContainerEntrypoint?: ContainerEntrypoint;
    /**
     * An array of arguments for the container used to run the monitoring job.
     */
    ContainerArguments?: MonitoringContainerArguments;
    /**
     * An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers.
     */
    RecordPreprocessorSourceUri?: S3Uri;
    /**
     * An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.
     */
    PostAnalyticsProcessorSourceUri?: S3Uri;
  }
  export interface MonitoringBaselineConfig {
    /**
     * The baseline constraint file in Amazon S3 that the current monitoring job should validated against.
     */
    ConstraintsResource?: MonitoringConstraintsResource;
    /**
     * The baseline statistics file in Amazon S3 that the current monitoring job should be validated against.
     */
    StatisticsResource?: MonitoringStatisticsResource;
  }
  export interface MonitoringClusterConfig {
    /**
     * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
     */
    InstanceCount: ProcessingInstanceCount;
    /**
     * The ML compute instance type for the processing job.
     */
    InstanceType: ProcessingInstanceType;
    /**
     * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
     */
    VolumeSizeInGB: ProcessingVolumeSizeInGB;
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
     */
    VolumeKmsKeyId?: KmsKeyId;
  }
  export interface MonitoringConstraintsResource {
    /**
     * The Amazon S3 URI for the constraints resource.
     */
    S3Uri?: S3Uri;
  }
  export type MonitoringContainerArguments = ContainerArgument[];
  export type MonitoringEnvironmentMap = {[key: string]: ProcessingEnvironmentValue};
  export type MonitoringExecutionSortKey = "CreationTime"|"ScheduledTime"|"Status"|string;
  export interface MonitoringExecutionSummary {
    /**
     * The name of the monitoring schedule.
     */
    MonitoringScheduleName: MonitoringScheduleName;
    /**
     * The time the monitoring job was scheduled.
     */
    ScheduledTime: Timestamp;
    /**
     * The time at which the monitoring job was created.
     */
    CreationTime: Timestamp;
    /**
     * A timestamp that indicates the last time the monitoring job was modified.
     */
    LastModifiedTime: Timestamp;
    /**
     * The status of the monitoring job.
     */
    MonitoringExecutionStatus: ExecutionStatus;
    /**
     * The Amazon Resource Name (ARN) of the monitoring job.
     */
    ProcessingJobArn?: ProcessingJobArn;
    /**
     * The name of teh endpoint used to run the monitoring job.
     */
    EndpointName?: EndpointName;
    /**
     * Contains the reason a monitoring job failed, if it failed.
     */
    FailureReason?: FailureReason;
  }
  export type MonitoringExecutionSummaryList = MonitoringExecutionSummary[];
  export interface MonitoringInput {
    /**
     * The endpoint for a monitoring job.
     */
    EndpointInput: EndpointInput;
  }
  export type MonitoringInputs = MonitoringInput[];
  export interface MonitoringJobDefinition {
    /**
     * Baseline configuration used to validate that the data conforms to the specified constraints and statistics
     */
    BaselineConfig?: MonitoringBaselineConfig;
    /**
     * The array of inputs for the monitoring job. Currently we support monitoring an Amazon SageMaker Endpoint.
     */
    MonitoringInputs: MonitoringInputs;
    /**
     * The array of outputs from the monitoring job to be uploaded to Amazon Simple Storage Service (Amazon S3).
     */
    MonitoringOutputConfig: MonitoringOutputConfig;
    /**
     * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a monitoring job. In distributed processing, you specify more than one instance.
     */
    MonitoringResources: MonitoringResources;
    /**
     * Configures the monitoring job to run a specified Docker container image.
     */
    MonitoringAppSpecification: MonitoringAppSpecification;
    /**
     * Specifies a time limit for how long the monitoring job is allowed to run.
     */
    StoppingCondition?: MonitoringStoppingCondition;
    /**
     * Sets the environment variables in the Docker container.
     */
    Environment?: MonitoringEnvironmentMap;
    /**
     * Specifies networking options for an monitoring job.
     */
    NetworkConfig?: NetworkConfig;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     */
    RoleArn: RoleArn;
  }
  export type MonitoringMaxRuntimeInSeconds = number;
  export interface MonitoringOutput {
    /**
     * The Amazon S3 storage location where the results of a monitoring job are saved.
     */
    S3Output: MonitoringS3Output;
  }
  export interface MonitoringOutputConfig {
    /**
     * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
     */
    MonitoringOutputs: MonitoringOutputs;
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
     */
    KmsKeyId?: KmsKeyId;
  }
  export type MonitoringOutputs = MonitoringOutput[];
  export interface MonitoringResources {
    /**
     * The configuration for the cluster resources used to run the processing job.
     */
    ClusterConfig: MonitoringClusterConfig;
  }
  export interface MonitoringS3Output {
    /**
     * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
     */
    S3Uri: MonitoringS3Uri;
    /**
     * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
     */
    LocalPath: ProcessingLocalPath;
    /**
     * Whether to upload the results of the monitoring job continuously or after the job completes.
     */
    S3UploadMode?: ProcessingS3UploadMode;
  }
  export type MonitoringS3Uri = string;
  export type MonitoringScheduleArn = string;
  export interface MonitoringScheduleConfig {
    /**
     * Configures the monitoring schedule.
     */
    ScheduleConfig?: ScheduleConfig;
    /**
     * Defines the monitoring job.
     */
    MonitoringJobDefinition: MonitoringJobDefinition;
  }
  export type MonitoringScheduleName = string;
  export type MonitoringScheduleSortKey = "Name"|"CreationTime"|"Status"|string;
  export interface MonitoringScheduleSummary {
    /**
     * The name of the monitoring schedule.
     */
    MonitoringScheduleName: MonitoringScheduleName;
    /**
     * The Amazon Resource Name (ARN) of the monitoring schedule.
     */
    MonitoringScheduleArn: MonitoringScheduleArn;
    /**
     * The creation time of the monitoring schedule.
     */
    CreationTime: Timestamp;
    /**
     * The last time the monitoring schedule was modified.
     */
    LastModifiedTime: Timestamp;
    /**
     * The status of the monitoring schedule.
     */
    MonitoringScheduleStatus: ScheduleStatus;
    /**
     * The name of the endpoint using the monitoring schedule.
     */
    EndpointName?: EndpointName;
  }
  export type MonitoringScheduleSummaryList = MonitoringScheduleSummary[];
  export interface MonitoringStatisticsResource {
    /**
     * The Amazon S3 URI for the statistics resource.
     */
    S3Uri?: S3Uri;
  }
  export interface MonitoringStoppingCondition {
    /**
     * The maximum runtime allowed in seconds.
     */
    MaxRuntimeInSeconds: MonitoringMaxRuntimeInSeconds;
  }
  export type NameContains = string;
  export interface NestedFilters {
    /**
     * The name of the property to use in the nested filters. The value must match a listed property name, such as InputDataConfig.
     */
    NestedPropertyName: ResourcePropertyName;
    /**
     * A list of filters. Each filter acts on a property. Filters must contain at least one Filters value. For example, a NestedFilters call might include a filter on the PropertyName parameter of the InputDataConfig property: InputDataConfig.DataSource.S3DataSource.S3Uri.
     */
    Filters: FilterList;
  }
  export type NestedFiltersList = NestedFilters[];
  export interface NetworkConfig {
    /**
     * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
     */
    EnableInterContainerTrafficEncryption?: Boolean;
    /**
     * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
     */
    EnableNetworkIsolation?: Boolean;
    VpcConfig?: VpcConfig;
  }
  export type NetworkInterfaceId = string;
  export type NextToken = string;
  export type NotebookInstanceAcceleratorType = "ml.eia1.medium"|"ml.eia1.large"|"ml.eia1.xlarge"|"ml.eia2.medium"|"ml.eia2.large"|"ml.eia2.xlarge"|string;
  export type NotebookInstanceAcceleratorTypes = NotebookInstanceAcceleratorType[];
  export type NotebookInstanceArn = string;
  export type NotebookInstanceLifecycleConfigArn = string;
  export type NotebookInstanceLifecycleConfigContent = string;
  export type NotebookInstanceLifecycleConfigList = NotebookInstanceLifecycleHook[];
  export type NotebookInstanceLifecycleConfigName = string;
  export type NotebookInstanceLifecycleConfigNameContains = string;
  export type NotebookInstanceLifecycleConfigSortKey = "Name"|"CreationTime"|"LastModifiedTime"|string;
  export type NotebookInstanceLifecycleConfigSortOrder = "Ascending"|"Descending"|string;
  export interface NotebookInstanceLifecycleConfigSummary {
    /**
     * The name of the lifecycle configuration.
     */
    NotebookInstanceLifecycleConfigName: NotebookInstanceLifecycleConfigName;
    /**
     * The Amazon Resource Name (ARN) of the lifecycle configuration.
     */
    NotebookInstanceLifecycleConfigArn: NotebookInstanceLifecycleConfigArn;
    /**
     * A timestamp that tells when the lifecycle configuration was created.
     */
    CreationTime?: CreationTime;
    /**
     * A timestamp that tells when the lifecycle configuration was last modified.
     */
    LastModifiedTime?: LastModifiedTime;
  }
  export type NotebookInstanceLifecycleConfigSummaryList = NotebookInstanceLifecycleConfigSummary[];
  export interface NotebookInstanceLifecycleHook {
    /**
     * A base64-encoded string that contains a shell script for a notebook instance lifecycle configuration.
     */
    Content?: NotebookInstanceLifecycleConfigContent;
  }
  export type NotebookInstanceName = string;
  export type NotebookInstanceNameContains = string;
  export type NotebookInstanceSortKey = "Name"|"CreationTime"|"Status"|string;
  export type NotebookInstanceSortOrder = "Ascending"|"Descending"|string;
  export type NotebookInstanceStatus = "Pending"|"InService"|"Stopping"|"Stopped"|"Failed"|"Deleting"|"Updating"|string;
  export interface NotebookInstanceSummary {
    /**
     * The name of the notebook instance that you want a summary for.
     */
    NotebookInstanceName: NotebookInstanceName;
    /**
     * The Amazon Resource Name (ARN) of the notebook instance.
     */
    NotebookInstanceArn: NotebookInstanceArn;
    /**
     * The status of the notebook instance.
     */
    NotebookInstanceStatus?: NotebookInstanceStatus;
    /**
     * The URL that you use to connect to the Jupyter instance running in your notebook instance. 
     */
    Url?: NotebookInstanceUrl;
    /**
     * The type of ML compute instance that the notebook instance is running on.
     */
    InstanceType?: InstanceType;
    /**
     * A timestamp that shows when the notebook instance was created.
     */
    CreationTime?: CreationTime;
    /**
     * A timestamp that shows when the notebook instance was last modified.
     */
    LastModifiedTime?: LastModifiedTime;
    /**
     * The name of a notebook instance lifecycle configuration associated with this notebook instance. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance.
     */
    NotebookInstanceLifecycleConfigName?: NotebookInstanceLifecycleConfigName;
    /**
     * The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see Associating Git Repositories with Amazon SageMaker Notebook Instances.
     */
    DefaultCodeRepository?: CodeRepositoryNameOrUrl;
    /**
     * An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see Associating Git Repositories with Amazon SageMaker Notebook Instances.
     */
    AdditionalCodeRepositories?: AdditionalCodeRepositoryNamesOrUrls;
  }
  export type NotebookInstanceSummaryList = NotebookInstanceSummary[];
  export type NotebookInstanceUrl = string;
  export type NotebookInstanceVolumeSizeInGB = number;
  export type NotebookOutputOption = "Allowed"|"Disabled"|string;
  export interface NotificationConfiguration {
    /**
     * The ARN for the SNS topic to which notifications should be published.
     */
    NotificationTopicArn?: NotificationTopicArn;
  }
  export type NotificationTopicArn = string;
  export type NumberOfHumanWorkersPerDataObject = number;
  export type ObjectiveStatus = "Succeeded"|"Pending"|"Failed"|string;
  export type ObjectiveStatusCounter = number;
  export interface ObjectiveStatusCounters {
    /**
     * The number of training jobs whose final objective metric was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process.
     */
    Succeeded?: ObjectiveStatusCounter;
    /**
     * The number of training jobs that are in progress and pending evaluation of their final objective metric.
     */
    Pending?: ObjectiveStatusCounter;
    /**
     * The number of training jobs whose final objective metric was not evaluated and used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric.
     */
    Failed?: ObjectiveStatusCounter;
  }
  export interface OidcConfig {
    /**
     * The OIDC IdP client ID used to configure your private workforce.
     */
    ClientId: ClientId;
    /**
     * The OIDC IdP client secret used to configure your private workforce.
     */
    ClientSecret: ClientSecret;
    /**
     * The OIDC IdP issuer used to configure your private workforce.
     */
    Issuer: OidcEndpoint;
    /**
     * The OIDC IdP authorization endpoint used to configure your private workforce.
     */
    AuthorizationEndpoint: OidcEndpoint;
    /**
     * The OIDC IdP token endpoint used to configure your private workforce.
     */
    TokenEndpoint: OidcEndpoint;
    /**
     * The OIDC IdP user information endpoint used to configure your private workforce.
     */
    UserInfoEndpoint: OidcEndpoint;
    /**
     * The OIDC IdP logout endpoint used to configure your private workforce.
     */
    LogoutEndpoint: OidcEndpoint;
    /**
     * The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.
     */
    JwksUri: OidcEndpoint;
  }
  export interface OidcConfigForResponse {
    /**
     * The OIDC IdP client ID used to configure your private workforce.
     */
    ClientId?: ClientId;
    /**
     * The OIDC IdP issuer used to configure your private workforce.
     */
    Issuer?: OidcEndpoint;
    /**
     * The OIDC IdP authorization endpoint used to configure your private workforce.
     */
    AuthorizationEndpoint?: OidcEndpoint;
    /**
     * The OIDC IdP token endpoint used to configure your private workforce.
     */
    TokenEndpoint?: OidcEndpoint;
    /**
     * The OIDC IdP user information endpoint used to configure your private workforce.
     */
    UserInfoEndpoint?: OidcEndpoint;
    /**
     * The OIDC IdP logout endpoint used to configure your private workforce.
     */
    LogoutEndpoint?: OidcEndpoint;
    /**
     * The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.
     */
    JwksUri?: OidcEndpoint;
  }
  export type OidcEndpoint = string;
  export interface OidcMemberDefinition {
    /**
     * A list of comma seperated strings that identifies user groups in your OIDC IdP. Each user group is made up of a group of private workers.
     */
    Groups: Groups;
  }
  export type Operator = "Equals"|"NotEquals"|"GreaterThan"|"GreaterThanOrEqualTo"|"LessThan"|"LessThanOrEqualTo"|"Contains"|"Exists"|"NotExists"|"In"|string;
  export type OptionalDouble = number;
  export type OptionalInteger = number;
  export type OptionalVolumeSizeInGB = number;
  export type OrderKey = "Ascending"|"Descending"|string;
  export interface OutputConfig {
    /**
     * Identifies the S3 bucket where you want Amazon SageMaker to store the model artifacts. For example, s3://bucket-name/key-name-prefix.
     */
    S3OutputLocation: S3Uri;
    /**
     * Identifies the target device or the machine learning instance that you want to run your model on after the compilation has completed. Alternatively, you can specify OS, architecture, and accelerator using TargetPlatform fields. It can be used instead of TargetPlatform.
     */
    TargetDevice?: TargetDevice;
    /**
     * Contains information about a target platform that you want your model to run on, such as OS, architecture, and accelerators. It is an alternative of TargetDevice. The following examples show how to configure the TargetPlatform and CompilerOptions JSON strings for popular target platforms:    Raspberry Pi 3 Model B+  "TargetPlatform": {"Os": "LINUX", "Arch": "ARM_EABIHF"},    "CompilerOptions": {'mattr': ['+neon']}    Jetson TX2  "TargetPlatform": {"Os": "LINUX", "Arch": "ARM64", "Accelerator": "NVIDIA"},    "CompilerOptions": {'gpu-code': 'sm_62', 'trt-ver': '6.0.1', 'cuda-ver': '10.0'}    EC2 m5.2xlarge instance OS  "TargetPlatform": {"Os": "LINUX", "Arch": "X86_64", "Accelerator": "NVIDIA"},    "CompilerOptions": {'mcpu': 'skylake-avx512'}    RK3399  "TargetPlatform": {"Os": "LINUX", "Arch": "ARM64", "Accelerator": "MALI"}    ARMv7 phone (CPU)  "TargetPlatform": {"Os": "ANDROID", "Arch": "ARM_EABI"},    "CompilerOptions": {'ANDROID_PLATFORM': 25, 'mattr': ['+neon']}    ARMv8 phone (CPU)  "TargetPlatform": {"Os": "ANDROID", "Arch": "ARM64"},    "CompilerOptions": {'ANDROID_PLATFORM': 29}   
     */
    TargetPlatform?: TargetPlatform;
    /**
     * Specifies additional parameters for compiler options in JSON format. The compiler options are TargetPlatform specific. It is required for NVIDIA accelerators and highly recommended for CPU compliations. For any other cases, it is optional to specify CompilerOptions.     CPU: Compilation for CPU supports the following compiler options.    mcpu: CPU micro-architecture. For example, {'mcpu': 'skylake-avx512'}     mattr: CPU flags. For example, {'mattr': ['+neon', '+vfpv4']}       ARM: Details of ARM CPU compilations.    NEON: NEON is an implementation of the Advanced SIMD extension used in ARMv7 processors. For example, add {'mattr': ['+neon']} to the compiler options if compiling for ARM 32-bit platform with the NEON support.      NVIDIA: Compilation for NVIDIA GPU supports the following compiler options.    gpu_code: Specifies the targeted architecture.    trt-ver: Specifies the TensorRT versions in x.y.z. format.    cuda-ver: Specifies the CUDA version in x.y format.   For example, {'gpu-code': 'sm_72', 'trt-ver': '6.0.1', 'cuda-ver': '10.1'}     ANDROID: Compilation for the Android OS supports the following compiler options:    ANDROID_PLATFORM: Specifies the Android API levels. Available levels range from 21 to 29. For example, {'ANDROID_PLATFORM': 28}.    mattr: Add {'mattr': ['+neon']} to compiler options if compiling for ARM 32-bit platform with NEON support.    
     */
    CompilerOptions?: CompilerOptions;
  }
  export interface OutputDataConfig {
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. The KmsKeyId can be any of the following formats:    // KMS Key ID  "1234abcd-12ab-34cd-56ef-1234567890ab"    // Amazon Resource Name (ARN) of a KMS Key  "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"    // KMS Key Alias  "alias/ExampleAlias"    // Amazon Resource Name (ARN) of a KMS Key Alias  "arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"    If you use a KMS key ID or an alias of your master key, the Amazon SageMaker execution role must include permissions to call kms:Encrypt. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. Amazon SageMaker uses server-side encryption with KMS-managed keys for OutputDataConfig. If you use a bucket policy with an s3:PutObject permission that only allows objects with server-side encryption, set the condition key of s3:x-amz-server-side-encryption to "aws:kms". For more information, see KMS-Managed Encryption Keys in the Amazon Simple Storage Service Developer Guide.  The KMS key policy must grant permission to the IAM role that you specify in your CreateTrainingJob, CreateTransformJob, or CreateHyperParameterTuningJob requests. For more information, see Using Key Policies in AWS KMS in the AWS Key Management Service Developer Guide.
     */
    KmsKeyId?: KmsKeyId;
    /**
     * Identifies the S3 path where you want Amazon SageMaker to store the model artifacts. For example, s3://bucket-name/key-name-prefix. 
     */
    S3OutputPath: S3Uri;
  }
  export type PaginationToken = string;
  export type ParameterKey = string;
  export type ParameterName = string;
  export interface ParameterRange {
    /**
     * A IntegerParameterRangeSpecification object that defines the possible values for an integer hyperparameter.
     */
    IntegerParameterRangeSpecification?: IntegerParameterRangeSpecification;
    /**
     * A ContinuousParameterRangeSpecification object that defines the possible values for a continuous hyperparameter.
     */
    ContinuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;
    /**
     * A CategoricalParameterRangeSpecification object that defines the possible values for a categorical hyperparameter.
     */
    CategoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;
  }
  export interface ParameterRanges {
    /**
     * The array of IntegerParameterRange objects that specify ranges of integer hyperparameters that a hyperparameter tuning job searches.
     */
    IntegerParameterRanges?: IntegerParameterRanges;
    /**
     * The array of ContinuousParameterRange objects that specify ranges of continuous hyperparameters that a hyperparameter tuning job searches.
     */
    ContinuousParameterRanges?: ContinuousParameterRanges;
    /**
     * The array of CategoricalParameterRange objects that specify ranges of categorical hyperparameters that a hyperparameter tuning job searches.
     */
    CategoricalParameterRanges?: CategoricalParameterRanges;
  }
  export type ParameterType = "Integer"|"Continuous"|"Categorical"|"FreeText"|string;
  export type ParameterValue = string;
  export type ParameterValues = ParameterValue[];
  export interface Parent {
    /**
     * The name of the trial.
     */
    TrialName?: ExperimentEntityName;
    /**
     * The name of the experiment.
     */
    ExperimentName?: ExperimentEntityName;
  }
  export interface ParentHyperParameterTuningJob {
    /**
     * The name of the hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job.
     */
    HyperParameterTuningJobName?: HyperParameterTuningJobName;
  }
  export type ParentHyperParameterTuningJobs = ParentHyperParameterTuningJob[];
  export type Parents = Parent[];
  export type PresignedDomainUrl = string;
  export type ProblemType = "BinaryClassification"|"MulticlassClassification"|"Regression"|string;
  export interface ProcessingClusterConfig {
    /**
     * The number of ML compute instances to use in the processing job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
     */
    InstanceCount: ProcessingInstanceCount;
    /**
     * The ML compute instance type for the processing job.
     */
    InstanceType: ProcessingInstanceType;
    /**
     * The size of the ML storage volume in gigabytes that you want to provision. You must specify sufficient ML storage for your scenario.
     */
    VolumeSizeInGB: ProcessingVolumeSizeInGB;
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job. 
     */
    VolumeKmsKeyId?: KmsKeyId;
  }
  export type ProcessingEnvironmentKey = string;
  export type ProcessingEnvironmentMap = {[key: string]: ProcessingEnvironmentValue};
  export type ProcessingEnvironmentValue = string;
  export interface ProcessingInput {
    /**
     * The name of the inputs for the processing job.
     */
    InputName: String;
    /**
     * The S3 inputs for the processing job. 
     */
    S3Input: ProcessingS3Input;
  }
  export type ProcessingInputs = ProcessingInput[];
  export type ProcessingInstanceCount = number;
  export type ProcessingInstanceType = "ml.t3.medium"|"ml.t3.large"|"ml.t3.xlarge"|"ml.t3.2xlarge"|"ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.c4.xlarge"|"ml.c4.2xlarge"|"ml.c4.4xlarge"|"ml.c4.8xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.18xlarge"|"ml.m5.large"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.12xlarge"|"ml.m5.24xlarge"|"ml.r5.large"|"ml.r5.xlarge"|"ml.r5.2xlarge"|"ml.r5.4xlarge"|"ml.r5.8xlarge"|"ml.r5.12xlarge"|"ml.r5.16xlarge"|"ml.r5.24xlarge"|string;
  export interface ProcessingJob {
    /**
     * For each input, data is downloaded from S3 into the processing container before the processing job begins running if "S3InputMode" is set to File.
     */
    ProcessingInputs?: ProcessingInputs;
    ProcessingOutputConfig?: ProcessingOutputConfig;
    /**
     * The name of the processing job.
     */
    ProcessingJobName?: ProcessingJobName;
    ProcessingResources?: ProcessingResources;
    StoppingCondition?: ProcessingStoppingCondition;
    AppSpecification?: AppSpecification;
    /**
     * Sets the environment variables in the Docker container.
     */
    Environment?: ProcessingEnvironmentMap;
    NetworkConfig?: NetworkConfig;
    /**
     * The ARN of the role used to create the processing job.
     */
    RoleArn?: RoleArn;
    ExperimentConfig?: ExperimentConfig;
    /**
     * The ARN of the processing job.
     */
    ProcessingJobArn?: ProcessingJobArn;
    /**
     * The status of the processing job.
     */
    ProcessingJobStatus?: ProcessingJobStatus;
    /**
     * A string, up to one KB in size, that contains metadata from the processing container when the processing job exits.
     */
    ExitMessage?: ExitMessage;
    /**
     * A string, up to one KB in size, that contains the reason a processing job failed, if it failed.
     */
    FailureReason?: FailureReason;
    /**
     * The time that the processing job ended.
     */
    ProcessingEndTime?: Timestamp;
    /**
     * The time that the processing job started.
     */
    ProcessingStartTime?: Timestamp;
    /**
     * The time the processing job was last modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * The time the processing job was created.
     */
    CreationTime?: Timestamp;
    /**
     * The ARN of a monitoring schedule for an endpoint associated with this processing job.
     */
    MonitoringScheduleArn?: MonitoringScheduleArn;
    /**
     * The Amazon Resource Name (ARN) of the AutoML job associated with this processing job.
     */
    AutoMLJobArn?: AutoMLJobArn;
    /**
     * The ARN of the training job associated with this processing job.
     */
    TrainingJobArn?: TrainingJobArn;
    /**
     * An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
     */
    Tags?: TagList;
  }
  export type ProcessingJobArn = string;
  export type ProcessingJobName = string;
  export type ProcessingJobStatus = "InProgress"|"Completed"|"Failed"|"Stopping"|"Stopped"|string;
  export type ProcessingJobSummaries = ProcessingJobSummary[];
  export interface ProcessingJobSummary {
    /**
     * The name of the processing job.
     */
    ProcessingJobName: ProcessingJobName;
    /**
     * The Amazon Resource Name (ARN) of the processing job..
     */
    ProcessingJobArn: ProcessingJobArn;
    /**
     * The time at which the processing job was created.
     */
    CreationTime: Timestamp;
    /**
     * The time at which the processing job completed.
     */
    ProcessingEndTime?: Timestamp;
    /**
     * A timestamp that indicates the last time the processing job was modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * The status of the processing job.
     */
    ProcessingJobStatus: ProcessingJobStatus;
    /**
     * A string, up to one KB in size, that contains the reason a processing job failed, if it failed.
     */
    FailureReason?: FailureReason;
    /**
     * An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits.
     */
    ExitMessage?: ExitMessage;
  }
  export type ProcessingLocalPath = string;
  export type ProcessingMaxRuntimeInSeconds = number;
  export interface ProcessingOutput {
    /**
     * The name for the processing job output.
     */
    OutputName: String;
    /**
     * Configuration for processing job outputs in Amazon S3.
     */
    S3Output: ProcessingS3Output;
  }
  export interface ProcessingOutputConfig {
    /**
     * Output configuration information for a processing job.
     */
    Outputs: ProcessingOutputs;
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output. KmsKeyId can be an ID of a KMS key, ARN of a KMS key, alias of a KMS key, or alias of a KMS key. The KmsKeyId is applied to all outputs.
     */
    KmsKeyId?: KmsKeyId;
  }
  export type ProcessingOutputs = ProcessingOutput[];
  export interface ProcessingResources {
    /**
     * The configuration for the resources in a cluster used to run the processing job.
     */
    ClusterConfig: ProcessingClusterConfig;
  }
  export type ProcessingS3CompressionType = "None"|"Gzip"|string;
  export type ProcessingS3DataDistributionType = "FullyReplicated"|"ShardedByS3Key"|string;
  export type ProcessingS3DataType = "ManifestFile"|"S3Prefix"|string;
  export interface ProcessingS3Input {
    /**
     * The URI for the Amazon S3 storage where you want Amazon SageMaker to download the artifacts needed to run a processing job.
     */
    S3Uri: S3Uri;
    /**
     * The local path to the Amazon S3 bucket where you want Amazon SageMaker to download the inputs to run a processing job. LocalPath is an absolute path to the input data.
     */
    LocalPath: ProcessingLocalPath;
    /**
     * Whether you use an S3Prefix or a ManifestFile for the data type. If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing job. If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for the processing job.
     */
    S3DataType: ProcessingS3DataType;
    /**
     * Whether to use File or Pipe input mode. In File mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.
     */
    S3InputMode: ProcessingS3InputMode;
    /**
     * Whether the data stored in Amazon S3 is FullyReplicated or ShardedByS3Key.
     */
    S3DataDistributionType?: ProcessingS3DataDistributionType;
    /**
     * Whether to use Gzip compression for Amazon S3 storage.
     */
    S3CompressionType?: ProcessingS3CompressionType;
  }
  export type ProcessingS3InputMode = "Pipe"|"File"|string;
  export interface ProcessingS3Output {
    /**
     * A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job.
     */
    S3Uri: S3Uri;
    /**
     * The local path to the Amazon S3 bucket where you want Amazon SageMaker to save the results of an processing job. LocalPath is an absolute path to the input data.
     */
    LocalPath: ProcessingLocalPath;
    /**
     * Whether to upload the results of the processing job continuously or after the job completes.
     */
    S3UploadMode: ProcessingS3UploadMode;
  }
  export type ProcessingS3UploadMode = "Continuous"|"EndOfJob"|string;
  export interface ProcessingStoppingCondition {
    /**
     * Specifies the maximum runtime in seconds.
     */
    MaxRuntimeInSeconds: ProcessingMaxRuntimeInSeconds;
  }
  export type ProcessingVolumeSizeInGB = number;
  export type ProductId = string;
  export type ProductListings = String[];
  export interface ProductionVariant {
    /**
     * The name of the production variant.
     */
    VariantName: VariantName;
    /**
     * The name of the model that you want to host. This is the name that you specified when creating the model.
     */
    ModelName: ModelName;
    /**
     * Number of instances to launch initially.
     */
    InitialInstanceCount: TaskCount;
    /**
     * The ML compute instance type.
     */
    InstanceType: ProductionVariantInstanceType;
    /**
     * Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. The traffic to a production variant is determined by the ratio of the VariantWeight to the sum of all VariantWeight values across all ProductionVariants. If unspecified, it defaults to 1.0. 
     */
    InitialVariantWeight?: VariantWeight;
    /**
     * The size of the Elastic Inference (EI) instance to use for the production variant. EI instances provide on-demand GPU computing for inference. For more information, see Using Elastic Inference in Amazon SageMaker.
     */
    AcceleratorType?: ProductionVariantAcceleratorType;
  }
  export type ProductionVariantAcceleratorType = "ml.eia1.medium"|"ml.eia1.large"|"ml.eia1.xlarge"|"ml.eia2.medium"|"ml.eia2.large"|"ml.eia2.xlarge"|string;
  export type ProductionVariantInstanceType = "ml.t2.medium"|"ml.t2.large"|"ml.t2.xlarge"|"ml.t2.2xlarge"|"ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.m5.large"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.12xlarge"|"ml.m5.24xlarge"|"ml.m5d.large"|"ml.m5d.xlarge"|"ml.m5d.2xlarge"|"ml.m5d.4xlarge"|"ml.m5d.12xlarge"|"ml.m5d.24xlarge"|"ml.c4.large"|"ml.c4.xlarge"|"ml.c4.2xlarge"|"ml.c4.4xlarge"|"ml.c4.8xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|"ml.c5.large"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.18xlarge"|"ml.c5d.large"|"ml.c5d.xlarge"|"ml.c5d.2xlarge"|"ml.c5d.4xlarge"|"ml.c5d.9xlarge"|"ml.c5d.18xlarge"|"ml.g4dn.xlarge"|"ml.g4dn.2xlarge"|"ml.g4dn.4xlarge"|"ml.g4dn.8xlarge"|"ml.g4dn.12xlarge"|"ml.g4dn.16xlarge"|"ml.r5.large"|"ml.r5.xlarge"|"ml.r5.2xlarge"|"ml.r5.4xlarge"|"ml.r5.12xlarge"|"ml.r5.24xlarge"|"ml.r5d.large"|"ml.r5d.xlarge"|"ml.r5d.2xlarge"|"ml.r5d.4xlarge"|"ml.r5d.12xlarge"|"ml.r5d.24xlarge"|"ml.inf1.xlarge"|"ml.inf1.2xlarge"|"ml.inf1.6xlarge"|"ml.inf1.24xlarge"|string;
  export type ProductionVariantList = ProductionVariant[];
  export interface ProductionVariantSummary {
    /**
     * The name of the variant.
     */
    VariantName: VariantName;
    /**
     * An array of DeployedImage objects that specify the Amazon EC2 Container Registry paths of the inference images deployed on instances of this ProductionVariant.
     */
    DeployedImages?: DeployedImages;
    /**
     * The weight associated with the variant.
     */
    CurrentWeight?: VariantWeight;
    /**
     * The requested weight, as specified in the UpdateEndpointWeightsAndCapacities request. 
     */
    DesiredWeight?: VariantWeight;
    /**
     * The number of instances associated with the variant.
     */
    CurrentInstanceCount?: TaskCount;
    /**
     * The number of instances requested in the UpdateEndpointWeightsAndCapacities request. 
     */
    DesiredInstanceCount?: TaskCount;
  }
  export type ProductionVariantSummaryList = ProductionVariantSummary[];
  export type PropertyNameHint = string;
  export interface PropertyNameQuery {
    /**
     * Text that begins a property's name.
     */
    PropertyNameHint: PropertyNameHint;
  }
  export interface PropertyNameSuggestion {
    /**
     * A suggested property name based on what you entered in the search textbox in the Amazon SageMaker console.
     */
    PropertyName?: ResourcePropertyName;
  }
  export type PropertyNameSuggestionList = PropertyNameSuggestion[];
  export interface PublicWorkforceTaskPrice {
    /**
     * Defines the amount of money paid to an Amazon Mechanical Turk worker in United States dollars.
     */
    AmountInUsd?: USD;
  }
  export type RealtimeInferenceInstanceTypes = ProductionVariantInstanceType[];
  export type RecordWrapper = "None"|"RecordIO"|string;
  export interface RenderUiTemplateRequest {
    /**
     * A Template object containing the worker UI template to render.
     */
    UiTemplate?: UiTemplate;
    /**
     * A RenderableTask object containing a representative task to render.
     */
    Task: RenderableTask;
    /**
     * The Amazon Resource Name (ARN) that has access to the S3 objects that are used by the template.
     */
    RoleArn: RoleArn;
    /**
     * The HumanTaskUiArn of the worker UI that you want to render. Do not provide a HumanTaskUiArn if you use the UiTemplate parameter. See a list of available Human Ui Amazon Resource Names (ARNs) in UiConfig.
     */
    HumanTaskUiArn?: HumanTaskUiArn;
  }
  export interface RenderUiTemplateResponse {
    /**
     * A Liquid template that renders the HTML for the worker UI.
     */
    RenderedContent: String;
    /**
     * A list of one or more RenderingError objects if any were encountered while rendering the template. If there were no errors, the list is empty.
     */
    Errors: RenderingErrorList;
  }
  export interface RenderableTask {
    /**
     * A JSON object that contains values for the variables defined in the template. It is made available to the template under the substitution variable task.input. For example, if you define a variable task.input.text in your template, you can supply the variable in the JSON object as "text": "sample text".
     */
    Input: TaskInput;
  }
  export interface RenderingError {
    /**
     * A unique identifier for a specific class of errors.
     */
    Code: String;
    /**
     * A human-readable message describing the error.
     */
    Message: String;
  }
  export type RenderingErrorList = RenderingError[];
  export type RepositoryAccessMode = "Platform"|"Vpc"|string;
  export interface ResolvedAttributes {
    AutoMLJobObjective?: AutoMLJobObjective;
    /**
     * The problem type.
     */
    ProblemType?: ProblemType;
    CompletionCriteria?: AutoMLJobCompletionCriteria;
  }
  export type ResourceArn = string;
  export interface ResourceConfig {
    /**
     * The ML compute instance type. 
     */
    InstanceType: TrainingInstanceType;
    /**
     * The number of ML compute instances to use. For distributed training, provide a value greater than 1. 
     */
    InstanceCount: TrainingInstanceCount;
    /**
     * The size of the ML storage volume that you want to provision.  ML storage volumes store model artifacts and incremental states. Training algorithms might also use the ML storage volume for scratch space. If you want to store the training data in the ML storage volume, choose File as the TrainingInputMode in the algorithm specification.  You must specify sufficient ML storage for your scenario.    Amazon SageMaker supports only the General Purpose SSD (gp2) ML storage volume type.    Certain Nitro-based instances include local storage with a fixed total size, dependent on the instance type. When using these instances for training, Amazon SageMaker mounts the local instance storage instead of Amazon EBS gp2 storage. You can't request a VolumeSizeInGB greater than the total size of the local instance storage. For a list of instance types that support local instance storage, including the total size per instance type, see Instance Store Volumes. 
     */
    VolumeSizeInGB: VolumeSizeInGB;
    /**
     * The AWS KMS key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the training job.  Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a VolumeKmsKeyId when using an instance type with local storage. For a list of instance types that support local instance storage, see Instance Store Volumes. For more information about local instance storage encryption, see SSD Instance Store Volumes.  The VolumeKmsKeyId can be in any of the following formats:   // KMS Key ID  "1234abcd-12ab-34cd-56ef-1234567890ab"    // Amazon Resource Name (ARN) of a KMS Key  "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
  }
  export type ResourceId = string;
  export interface ResourceLimits {
    /**
     * The maximum number of training jobs that a hyperparameter tuning job can launch.
     */
    MaxNumberOfTrainingJobs: MaxNumberOfTrainingJobs;
    /**
     * The maximum number of concurrent training jobs that a hyperparameter tuning job can launch.
     */
    MaxParallelTrainingJobs: MaxParallelTrainingJobs;
  }
  export type ResourcePropertyName = string;
  export interface ResourceSpec {
    /**
     * The Amazon Resource Name (ARN) of the SageMaker image created on the instance.
     */
    SageMakerImageArn?: ImageArn;
    /**
     * The instance type.
     */
    InstanceType?: AppInstanceType;
  }
  export type ResourceType = "TrainingJob"|"Experiment"|"ExperimentTrial"|"ExperimentTrialComponent"|string;
  export type ResponseMIMEType = string;
  export type ResponseMIMETypes = ResponseMIMEType[];
  export interface RetentionPolicy {
    /**
     * The default is Retain, which specifies to keep the data stored on the EFS volume. Specify Delete to delete the data stored on the EFS volume.
     */
    HomeEfsFileSystem?: RetentionType;
  }
  export type RetentionType = "Retain"|"Delete"|string;
  export type RoleArn = string;
  export type RootAccess = "Enabled"|"Disabled"|string;
  export type RuleConfigurationName = string;
  export type RuleEvaluationStatus = "InProgress"|"NoIssuesFound"|"IssuesFound"|"Error"|"Stopping"|"Stopped"|string;
  export type RuleParameters = {[key: string]: ConfigValue};
  export type S3DataDistribution = "FullyReplicated"|"ShardedByS3Key"|string;
  export interface S3DataSource {
    /**
     * If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects that match the specified key name prefix for model training.  If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for model training.  If you choose AugmentedManifestFile, S3Uri identifies an object that is an augmented manifest file in JSON lines format. This file contains the data you want to use for model training. AugmentedManifestFile can only be used if the Channel's input mode is Pipe.
     */
    S3DataType: S3DataType;
    /**
     * Depending on the value specified for the S3DataType, identifies either a key name prefix or a manifest. For example:     A key name prefix might look like this: s3://bucketname/exampleprefix     A manifest might look like this: s3://bucketname/example.manifest   A manifest is an S3 object which is a JSON file consisting of an array of elements. The first element is a prefix which is followed by one or more suffixes. SageMaker appends the suffix elements to the prefix to get a full set of S3Uri. Note that the prefix must be a valid non-empty S3Uri that precludes users from specifying a manifest whose individual S3Uri is sourced from different S3 buckets.  The following code example shows a valid manifest format:   [ {"prefix": "s3://customer_bucket/some/prefix/"},    "relative/path/to/custdata-1",    "relative/path/custdata-2",    ...    "relative/path/custdata-N"   ]   This JSON is equivalent to the following S3Uri list:  s3://customer_bucket/some/prefix/relative/path/to/custdata-1   s3://customer_bucket/some/prefix/relative/path/custdata-2   ...   s3://customer_bucket/some/prefix/relative/path/custdata-N  The complete set of S3Uri in this manifest is the input data for the channel for this data source. The object that each S3Uri points to must be readable by the IAM role that Amazon SageMaker uses to perform tasks on your behalf.   
     */
    S3Uri: S3Uri;
    /**
     * If you want Amazon SageMaker to replicate the entire dataset on each ML compute instance that is launched for model training, specify FullyReplicated.  If you want Amazon SageMaker to replicate a subset of data on each ML compute instance that is launched for model training, specify ShardedByS3Key. If there are n ML compute instances launched for a training job, each instance gets approximately 1/n of the number of S3 objects. In this case, model training on each machine uses only the subset of training data.  Don't choose more ML compute instances for training than available S3 objects. If you do, some nodes won't get any data and you will pay for nodes that aren't getting any training data. This applies in both File and Pipe modes. Keep this in mind when developing algorithms.  In distributed training, where you use multiple ML compute EC2 instances, you might choose ShardedByS3Key. If the algorithm requires copying training data to the ML storage volume (when TrainingInputMode is set to File), this copies 1/n of the number of objects. 
     */
    S3DataDistributionType?: S3DataDistribution;
    /**
     * A list of one or more attribute names to use that are found in a specified augmented manifest file.
     */
    AttributeNames?: AttributeNames;
  }
  export type S3DataType = "ManifestFile"|"S3Prefix"|"AugmentedManifestFile"|string;
  export type S3Uri = string;
  export type SamplingPercentage = number;
  export interface ScheduleConfig {
    /**
     * A cron expression that describes details about the monitoring schedule. Currently the only supported cron expressions are:   If you want to set the job to start every hour, please use the following:  Hourly: cron(0 * ? * * *)    If you want to start the job daily:  cron(0 [00-23] ? * * *)    For example, the following are valid cron expressions:   Daily at noon UTC: cron(0 12 ? * * *)    Daily at midnight UTC: cron(0 0 ? * * *)    To support running every 6, 12 hours, the following are also supported:  cron(0 [00-23]/[01-24] ? * * *)  For example, the following are valid cron expressions:   Every 12 hours, starting at 5pm UTC: cron(0 17/12 ? * * *)    Every two hours starting at midnight: cron(0 0/2 ? * * *)       Even though the cron expression is set to start at 5PM UTC, note that there could be a delay of 0-20 minutes from the actual requested time to run the execution.    We recommend that if you would like a daily schedule, you do not provide this parameter. Amazon SageMaker will pick a time for running every day.   
     */
    ScheduleExpression: ScheduleExpression;
  }
  export type ScheduleExpression = string;
  export type ScheduleStatus = "Pending"|"Failed"|"Scheduled"|"Stopped"|string;
  export interface SearchExpression {
    /**
     * A list of filter objects.
     */
    Filters?: FilterList;
    /**
     * A list of nested filter objects.
     */
    NestedFilters?: NestedFiltersList;
    /**
     * A list of search expression objects.
     */
    SubExpressions?: SearchExpressionList;
    /**
     * A Boolean operator used to evaluate the search expression. If you want every conditional statement in all lists to be satisfied for the entire search expression to be true, specify And. If only a single conditional statement needs to be true for the entire search expression to be true, specify Or. The default value is And.
     */
    Operator?: BooleanOperator;
  }
  export type SearchExpressionList = SearchExpression[];
  export interface SearchRecord {
    /**
     * The properties of a training job.
     */
    TrainingJob?: TrainingJob;
    /**
     * The properties of an experiment.
     */
    Experiment?: Experiment;
    /**
     * The properties of a trial.
     */
    Trial?: Trial;
    /**
     * The properties of a trial component.
     */
    TrialComponent?: TrialComponent;
  }
  export interface SearchRequest {
    /**
     * The name of the Amazon SageMaker resource to search for.
     */
    Resource: ResourceType;
    /**
     * A Boolean conditional statement. Resources must satisfy this condition to be included in search results. You must provide at least one subexpression, filter, or nested filter. The maximum number of recursive SubExpressions, NestedFilters, and Filters that can be included in a SearchExpression object is 50.
     */
    SearchExpression?: SearchExpression;
    /**
     * The name of the resource property used to sort the SearchResults. The default is LastModifiedTime.
     */
    SortBy?: ResourcePropertyName;
    /**
     * How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending.
     */
    SortOrder?: SearchSortOrder;
    /**
     * If more than MaxResults resources match the specified SearchExpression, the response includes a NextToken. The NextToken can be passed to the next SearchRequest to continue retrieving results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
  }
  export interface SearchResponse {
    /**
     * A list of SearchRecord objects.
     */
    Results?: SearchResultsList;
    /**
     * If the result of the previous Search request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export type SearchResultsList = SearchRecord[];
  export type SearchSortOrder = "Ascending"|"Descending"|string;
  export type SecondaryStatus = "Starting"|"LaunchingMLInstances"|"PreparingTrainingStack"|"Downloading"|"DownloadingTrainingImage"|"Training"|"Uploading"|"Stopping"|"Stopped"|"MaxRuntimeExceeded"|"Completed"|"Failed"|"Interrupted"|"MaxWaitTimeExceeded"|string;
  export interface SecondaryStatusTransition {
    /**
     * Contains a secondary status information from a training job. Status might be one of the following secondary statuses:  InProgress     Starting - Starting the training job.    Downloading - An optional stage for algorithms that support File training input mode. It indicates that data is being downloaded to the ML storage volumes.    Training - Training is in progress.    Uploading - Training is complete and the model artifacts are being uploaded to the S3 location.    Completed     Completed - The training job has completed.    Failed     Failed - The training job has failed. The reason for the failure is returned in the FailureReason field of DescribeTrainingJobResponse.    Stopped     MaxRuntimeExceeded - The job stopped because it exceeded the maximum allowed runtime.    Stopped - The training job has stopped.    Stopping     Stopping - Stopping the training job.     We no longer support the following secondary statuses:    LaunchingMLInstances     PreparingTrainingStack     DownloadingTrainingImage   
     */
    Status: SecondaryStatus;
    /**
     * A timestamp that shows when the training job transitioned to the current secondary status state.
     */
    StartTime: Timestamp;
    /**
     * A timestamp that shows when the training job transitioned out of this secondary status state into another secondary status state or when the training job has ended.
     */
    EndTime?: Timestamp;
    /**
     * A detailed description of the progress within a secondary status.  Amazon SageMaker provides secondary statuses and status messages that apply to each of them:  Starting    Starting the training job.   Launching requested ML instances.   Insufficient capacity error from EC2 while launching instances, retrying!   Launched instance was unhealthy, replacing it!   Preparing the instances for training.    Training    Downloading the training image.   Training image download completed. Training in progress.      Status messages are subject to change. Therefore, we recommend not including them in code that programmatically initiates actions. For examples, don't use status messages in if statements.  To have an overview of your training job's progress, view TrainingJobStatus and SecondaryStatus in DescribeTrainingJob, and StatusMessage together. For example, at the start of a training job, you might see the following:    TrainingJobStatus - InProgress    SecondaryStatus - Training    StatusMessage - Downloading the training image  
     */
    StatusMessage?: StatusMessage;
  }
  export type SecondaryStatusTransitions = SecondaryStatusTransition[];
  export type SecretArn = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type Seed = number;
  export type SessionExpirationDurationInSeconds = number;
  export interface SharingSettings {
    /**
     * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
     */
    NotebookOutputOption?: NotebookOutputOption;
    /**
     * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to save the notebook cell output. If S3OutputPath isn't specified, a default bucket is used.
     */
    S3OutputPath?: S3Uri;
    /**
     * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
     */
    S3KmsKeyId?: KmsKeyId;
  }
  export interface ShuffleConfig {
    /**
     * Determines the shuffling order in ShuffleConfig value.
     */
    Seed: Seed;
  }
  export type SingleSignOnUserIdentifier = string;
  export type SortBy = "Name"|"CreationTime"|"Status"|string;
  export type SortExperimentsBy = "Name"|"CreationTime"|string;
  export type SortOrder = "Ascending"|"Descending"|string;
  export type SortTrialComponentsBy = "Name"|"CreationTime"|string;
  export type SortTrialsBy = "Name"|"CreationTime"|string;
  export interface SourceAlgorithm {
    /**
     * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
     */
    ModelDataUrl?: Url;
    /**
     * The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
     */
    AlgorithmName: ArnOrName;
  }
  export type SourceAlgorithmList = SourceAlgorithm[];
  export interface SourceAlgorithmSpecification {
    /**
     * A list of the algorithms that were used to create a model package.
     */
    SourceAlgorithms: SourceAlgorithmList;
  }
  export interface SourceIpConfig {
    /**
     * A list of one to ten Classless Inter-Domain Routing (CIDR) values. Maximum: Ten CIDR values  The following Length Constraints apply to individual CIDR values in the CIDR value list. 
     */
    Cidrs: Cidrs;
  }
  export type SourceType = string;
  export type SplitType = "None"|"Line"|"RecordIO"|"TFRecord"|string;
  export interface StartMonitoringScheduleRequest {
    /**
     * The name of the schedule to start.
     */
    MonitoringScheduleName: MonitoringScheduleName;
  }
  export interface StartNotebookInstanceInput {
    /**
     * The name of the notebook instance to start.
     */
    NotebookInstanceName: NotebookInstanceName;
  }
  export type StatusDetails = string;
  export type StatusMessage = string;
  export interface StopAutoMLJobRequest {
    /**
     * The name of the object you are requesting.
     */
    AutoMLJobName: AutoMLJobName;
  }
  export interface StopCompilationJobRequest {
    /**
     * The name of the model compilation job to stop.
     */
    CompilationJobName: EntityName;
  }
  export interface StopHyperParameterTuningJobRequest {
    /**
     * The name of the tuning job to stop.
     */
    HyperParameterTuningJobName: HyperParameterTuningJobName;
  }
  export interface StopLabelingJobRequest {
    /**
     * The name of the labeling job to stop.
     */
    LabelingJobName: LabelingJobName;
  }
  export interface StopMonitoringScheduleRequest {
    /**
     * The name of the schedule to stop.
     */
    MonitoringScheduleName: MonitoringScheduleName;
  }
  export interface StopNotebookInstanceInput {
    /**
     * The name of the notebook instance to terminate.
     */
    NotebookInstanceName: NotebookInstanceName;
  }
  export interface StopProcessingJobRequest {
    /**
     * The name of the processing job to stop.
     */
    ProcessingJobName: ProcessingJobName;
  }
  export interface StopTrainingJobRequest {
    /**
     * The name of the training job to stop.
     */
    TrainingJobName: TrainingJobName;
  }
  export interface StopTransformJobRequest {
    /**
     * The name of the transform job to stop.
     */
    TransformJobName: TransformJobName;
  }
  export interface StoppingCondition {
    /**
     * The maximum length of time, in seconds, that the training or compilation job can run. If job does not complete during this time, Amazon SageMaker ends the job. If value is not specified, default value is 1 day. The maximum value is 28 days.
     */
    MaxRuntimeInSeconds?: MaxRuntimeInSeconds;
    /**
     * The maximum length of time, in seconds, how long you are willing to wait for a managed spot training job to complete. It is the amount of time spent waiting for Spot capacity plus the amount of time the training job runs. It must be equal to or greater than MaxRuntimeInSeconds. 
     */
    MaxWaitTimeInSeconds?: MaxWaitTimeInSeconds;
  }
  export type String = string;
  export type String1024 = string;
  export type String200 = string;
  export type String256 = string;
  export type StringParameterValue = string;
  export type SubnetId = string;
  export type Subnets = SubnetId[];
  export interface SubscribedWorkteam {
    /**
     * The Amazon Resource Name (ARN) of the vendor that you have subscribed.
     */
    WorkteamArn: WorkteamArn;
    /**
     * The title of the service provided by the vendor in the Amazon Marketplace.
     */
    MarketplaceTitle?: String200;
    /**
     * The name of the vendor in the Amazon Marketplace.
     */
    SellerName?: String;
    /**
     * The description of the vendor from the Amazon Marketplace.
     */
    MarketplaceDescription?: String200;
    /**
     * Marketplace product listing ID.
     */
    ListingId?: String;
  }
  export type SubscribedWorkteams = SubscribedWorkteam[];
  export type Success = boolean;
  export interface SuggestionQuery {
    /**
     * Defines a property name hint. Only property names that begin with the specified hint are included in the response.
     */
    PropertyNameQuery?: PropertyNameQuery;
  }
  export interface Tag {
    /**
     * The tag key.
     */
    Key: TagKey;
    /**
     * The tag value.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export type TagValue = string;
  export type TargetAttributeName = string;
  export type TargetDevice = "lambda"|"ml_m4"|"ml_m5"|"ml_c4"|"ml_c5"|"ml_p2"|"ml_p3"|"ml_g4dn"|"ml_inf1"|"jetson_tx1"|"jetson_tx2"|"jetson_nano"|"jetson_xavier"|"rasp3b"|"imx8qm"|"deeplens"|"rk3399"|"rk3288"|"aisage"|"sbe_c"|"qcs605"|"qcs603"|"sitara_am57x"|"amba_cv22"|"x86_win32"|"x86_win64"|string;
  export type TargetObjectiveMetricValue = number;
  export interface TargetPlatform {
    /**
     * Specifies a target platform OS.    LINUX: Linux-based operating systems.    ANDROID: Android operating systems. Android API level can be specified using the ANDROID_PLATFORM compiler option. For example, "CompilerOptions": {'ANDROID_PLATFORM': 28}   
     */
    Os: TargetPlatformOs;
    /**
     * Specifies a target platform architecture.    X86_64: 64-bit version of the x86 instruction set.    X86: 32-bit version of the x86 instruction set.    ARM64: ARMv8 64-bit CPU.    ARM_EABIHF: ARMv7 32-bit, Hard Float.    ARM_EABI: ARMv7 32-bit, Soft Float. Used by Android 32-bit ARM platform.  
     */
    Arch: TargetPlatformArch;
    /**
     * Specifies a target platform accelerator (optional).    NVIDIA: Nvidia graphics processing unit. It also requires gpu-code, trt-ver, cuda-ver compiler options    MALI: ARM Mali graphics processor    INTEL_GRAPHICS: Integrated Intel graphics  
     */
    Accelerator?: TargetPlatformAccelerator;
  }
  export type TargetPlatformAccelerator = "INTEL_GRAPHICS"|"MALI"|"NVIDIA"|string;
  export type TargetPlatformArch = "X86_64"|"X86"|"ARM64"|"ARM_EABI"|"ARM_EABIHF"|string;
  export type TargetPlatformOs = "ANDROID"|"LINUX"|string;
  export type TaskAvailabilityLifetimeInSeconds = number;
  export type TaskCount = number;
  export type TaskDescription = string;
  export type TaskInput = string;
  export type TaskKeyword = string;
  export type TaskKeywords = TaskKeyword[];
  export type TaskTimeLimitInSeconds = number;
  export type TaskTitle = string;
  export type TemplateContent = string;
  export type TemplateContentSha256 = string;
  export type TemplateUrl = string;
  export interface TensorBoardAppSettings {
    /**
     * The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.
     */
    DefaultResourceSpec?: ResourceSpec;
  }
  export interface TensorBoardOutputConfig {
    /**
     * Path to local storage location for tensorBoard output. Defaults to /opt/ml/output/tensorboard.
     */
    LocalPath?: DirectoryPath;
    /**
     * Path to Amazon S3 storage location for TensorBoard output.
     */
    S3OutputPath: S3Uri;
  }
  export type TenthFractionsOfACent = number;
  export type Timestamp = Date;
  export type TrainingInputMode = "Pipe"|"File"|string;
  export type TrainingInstanceCount = number;
  export type TrainingInstanceType = "ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.g4dn.xlarge"|"ml.g4dn.2xlarge"|"ml.g4dn.4xlarge"|"ml.g4dn.8xlarge"|"ml.g4dn.12xlarge"|"ml.g4dn.16xlarge"|"ml.m5.large"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.12xlarge"|"ml.m5.24xlarge"|"ml.c4.xlarge"|"ml.c4.2xlarge"|"ml.c4.4xlarge"|"ml.c4.8xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|"ml.p3dn.24xlarge"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.18xlarge"|"ml.c5n.xlarge"|"ml.c5n.2xlarge"|"ml.c5n.4xlarge"|"ml.c5n.9xlarge"|"ml.c5n.18xlarge"|string;
  export type TrainingInstanceTypes = TrainingInstanceType[];
  export interface TrainingJob {
    /**
     * The name of the training job.
     */
    TrainingJobName?: TrainingJobName;
    /**
     * The Amazon Resource Name (ARN) of the training job.
     */
    TrainingJobArn?: TrainingJobArn;
    /**
     * The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the training job was launched by a hyperparameter tuning job.
     */
    TuningJobArn?: HyperParameterTuningJobArn;
    /**
     * The Amazon Resource Name (ARN) of the labeling job.
     */
    LabelingJobArn?: LabelingJobArn;
    /**
     * The Amazon Resource Name (ARN) of the job.
     */
    AutoMLJobArn?: AutoMLJobArn;
    /**
     * Information about the Amazon S3 location that is configured for storing model artifacts.
     */
    ModelArtifacts?: ModelArtifacts;
    /**
     * The status of the training job. Training job statuses are:    InProgress - The training is in progress.    Completed - The training job has completed.    Failed - The training job has failed. To see the reason for the failure, see the FailureReason field in the response to a DescribeTrainingJobResponse call.    Stopping - The training job is stopping.    Stopped - The training job has stopped.   For more detailed information, see SecondaryStatus. 
     */
    TrainingJobStatus?: TrainingJobStatus;
    /**
     *  Provides detailed information about the state of the training job. For detailed information about the secondary status of the training job, see StatusMessage under SecondaryStatusTransition. Amazon SageMaker provides primary statuses and secondary statuses that apply to each of them:  InProgress     Starting - Starting the training job.    Downloading - An optional stage for algorithms that support File training input mode. It indicates that data is being downloaded to the ML storage volumes.    Training - Training is in progress.    Uploading - Training is complete and the model artifacts are being uploaded to the S3 location.    Completed     Completed - The training job has completed.    Failed     Failed - The training job has failed. The reason for the failure is returned in the FailureReason field of DescribeTrainingJobResponse.    Stopped     MaxRuntimeExceeded - The job stopped because it exceeded the maximum allowed runtime.    Stopped - The training job has stopped.    Stopping     Stopping - Stopping the training job.      Valid values for SecondaryStatus are subject to change.   We no longer support the following secondary statuses:    LaunchingMLInstances     PreparingTrainingStack     DownloadingTrainingImage   
     */
    SecondaryStatus?: SecondaryStatus;
    /**
     * If the training job failed, the reason it failed.
     */
    FailureReason?: FailureReason;
    /**
     * Algorithm-specific parameters.
     */
    HyperParameters?: HyperParameters;
    /**
     * Information about the algorithm used for training, and algorithm metadata.
     */
    AlgorithmSpecification?: AlgorithmSpecification;
    /**
     * The AWS Identity and Access Management (IAM) role configured for the training job.
     */
    RoleArn?: RoleArn;
    /**
     * An array of Channel objects that describes each data input channel.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The S3 path where model artifacts that you configured when creating the job are stored. Amazon SageMaker creates subfolders for model artifacts.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * Resources, including ML compute instances and ML storage volumes, that are configured for model training.
     */
    ResourceConfig?: ResourceConfig;
    /**
     * A VpcConfig object that specifies the VPC that this training job has access to. For more information, see Protect Training Jobs by Using an Amazon Virtual Private Cloud.
     */
    VpcConfig?: VpcConfig;
    /**
     * Specifies a limit to how long a model training job can run. When the job reaches the time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. 
     */
    StoppingCondition?: StoppingCondition;
    /**
     * A timestamp that indicates when the training job was created.
     */
    CreationTime?: Timestamp;
    /**
     * Indicates the time when the training job starts on training instances. You are billed for the time interval between this time and the value of TrainingEndTime. The start time in CloudWatch Logs might be later than this time. The difference is due to the time it takes to download the training data and to the size of the training container.
     */
    TrainingStartTime?: Timestamp;
    /**
     * Indicates the time when the training job ends on training instances. You are billed for the time interval between the value of TrainingStartTime and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.
     */
    TrainingEndTime?: Timestamp;
    /**
     * A timestamp that indicates when the status of the training job was last modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * A history of all of the secondary statuses that the training job has transitioned through.
     */
    SecondaryStatusTransitions?: SecondaryStatusTransitions;
    /**
     * A list of final metric values that are set when the training job completes. Used only if the training job was configured to use metrics.
     */
    FinalMetricDataList?: FinalMetricDataList;
    /**
     * If the TrainingJob was created with network isolation, the value is set to true. If network isolation is enabled, nodes can't communicate beyond the VPC they run in.
     */
    EnableNetworkIsolation?: Boolean;
    /**
     * To encrypt all communications between ML compute instances in distributed training, choose True. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithm in distributed training.
     */
    EnableInterContainerTrafficEncryption?: Boolean;
    /**
     * When true, enables managed spot training using Amazon EC2 Spot instances to run training jobs instead of on-demand instances. For more information, see Managed Spot Training.
     */
    EnableManagedSpotTraining?: Boolean;
    CheckpointConfig?: CheckpointConfig;
    /**
     * The training time in seconds.
     */
    TrainingTimeInSeconds?: TrainingTimeInSeconds;
    /**
     * The billable time in seconds.
     */
    BillableTimeInSeconds?: BillableTimeInSeconds;
    DebugHookConfig?: DebugHookConfig;
    ExperimentConfig?: ExperimentConfig;
    /**
     * Information about the debug rule configuration.
     */
    DebugRuleConfigurations?: DebugRuleConfigurations;
    TensorBoardOutputConfig?: TensorBoardOutputConfig;
    /**
     * Information about the evaluation status of the rules for the training job.
     */
    DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatuses;
    /**
     * An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
     */
    Tags?: TagList;
  }
  export type TrainingJobArn = string;
  export interface TrainingJobDefinition {
    /**
     * The input mode used by the algorithm for the training job. For the input modes that Amazon SageMaker algorithms support, see Algorithms. If an algorithm supports the File input mode, Amazon SageMaker downloads the training data from S3 to the provisioned ML storage Volume, and mounts the directory to docker volume for training container. If an algorithm supports the Pipe input mode, Amazon SageMaker streams data directly from S3 to the container.
     */
    TrainingInputMode: TrainingInputMode;
    /**
     * The hyperparameters used for the training job.
     */
    HyperParameters?: HyperParameters;
    /**
     * An array of Channel objects, each of which specifies an input source.
     */
    InputDataConfig: InputDataConfig;
    /**
     * the path to the S3 bucket where you want to store model artifacts. Amazon SageMaker creates subfolders for the artifacts.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The resources, including the ML compute instances and ML storage volumes, to use for model training.
     */
    ResourceConfig: ResourceConfig;
    /**
     * Specifies a limit to how long a model training job can run. When the job reaches the time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts.
     */
    StoppingCondition: StoppingCondition;
  }
  export type TrainingJobEarlyStoppingType = "Off"|"Auto"|string;
  export type TrainingJobName = string;
  export type TrainingJobSortByOptions = "Name"|"CreationTime"|"Status"|"FinalObjectiveMetricValue"|string;
  export type TrainingJobStatus = "InProgress"|"Completed"|"Failed"|"Stopping"|"Stopped"|string;
  export type TrainingJobStatusCounter = number;
  export interface TrainingJobStatusCounters {
    /**
     * The number of completed training jobs launched by the hyperparameter tuning job.
     */
    Completed?: TrainingJobStatusCounter;
    /**
     * The number of in-progress training jobs launched by a hyperparameter tuning job.
     */
    InProgress?: TrainingJobStatusCounter;
    /**
     * The number of training jobs that failed, but can be retried. A failed training job can be retried only if it failed because an internal service error occurred.
     */
    RetryableError?: TrainingJobStatusCounter;
    /**
     * The number of training jobs that failed and can't be retried. A failed training job can't be retried if it failed because a client error occurred.
     */
    NonRetryableError?: TrainingJobStatusCounter;
    /**
     * The number of training jobs launched by a hyperparameter tuning job that were manually stopped.
     */
    Stopped?: TrainingJobStatusCounter;
  }
  export type TrainingJobSummaries = TrainingJobSummary[];
  export interface TrainingJobSummary {
    /**
     * The name of the training job that you want a summary for.
     */
    TrainingJobName: TrainingJobName;
    /**
     * The Amazon Resource Name (ARN) of the training job.
     */
    TrainingJobArn: TrainingJobArn;
    /**
     * A timestamp that shows when the training job was created.
     */
    CreationTime: Timestamp;
    /**
     * A timestamp that shows when the training job ended. This field is set only if the training job has one of the terminal statuses (Completed, Failed, or Stopped). 
     */
    TrainingEndTime?: Timestamp;
    /**
     *  Timestamp when the training job was last modified. 
     */
    LastModifiedTime?: Timestamp;
    /**
     * The status of the training job.
     */
    TrainingJobStatus: TrainingJobStatus;
  }
  export interface TrainingSpecification {
    /**
     * The Amazon ECR registry path of the Docker image that contains the training algorithm.
     */
    TrainingImage: ContainerImage;
    /**
     * An MD5 hash of the training algorithm that identifies the Docker image used for training.
     */
    TrainingImageDigest?: ImageDigest;
    /**
     * A list of the HyperParameterSpecification objects, that define the supported hyperparameters. This is required if the algorithm supports automatic model tuning.&gt;
     */
    SupportedHyperParameters?: HyperParameterSpecifications;
    /**
     * A list of the instance types that this algorithm can use for training.
     */
    SupportedTrainingInstanceTypes: TrainingInstanceTypes;
    /**
     * Indicates whether the algorithm supports distributed training. If set to false, buyers can't request more than one instance during training.
     */
    SupportsDistributedTraining?: Boolean;
    /**
     * A list of MetricDefinition objects, which are used for parsing metrics generated by the algorithm.
     */
    MetricDefinitions?: MetricDefinitionList;
    /**
     * A list of ChannelSpecification objects, which specify the input sources to be used by the algorithm.
     */
    TrainingChannels: ChannelSpecifications;
    /**
     * A list of the metrics that the algorithm emits that can be used as the objective metric in a hyperparameter tuning job.
     */
    SupportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjectives;
  }
  export type TrainingTimeInSeconds = number;
  export interface TransformDataSource {
    /**
     * The S3 location of the data source that is associated with a channel.
     */
    S3DataSource: TransformS3DataSource;
  }
  export type TransformEnvironmentKey = string;
  export type TransformEnvironmentMap = {[key: string]: TransformEnvironmentValue};
  export type TransformEnvironmentValue = string;
  export interface TransformInput {
    /**
     * Describes the location of the channel data, which is, the S3 location of the input data that the model can consume.
     */
    DataSource: TransformDataSource;
    /**
     * The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.
     */
    ContentType?: ContentType;
    /**
     * If your transform data is compressed, specify the compression type. Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is None.
     */
    CompressionType?: CompressionType;
    /**
     * The method to use to split the transform job's data files into smaller batches. Splitting is necessary when the total size of each object is too large to fit in a single request. You can also use data splitting to improve performance by processing multiple concurrent mini-batches. The default value for SplitType is None, which indicates that input data files are not split, and request payloads contain the entire contents of an input object. Set the value of this parameter to Line to split records on a newline character boundary. SplitType also supports a number of record-oriented binary data formats. Currently, the supported record formats are:   RecordIO   TFRecord   When splitting is enabled, the size of a mini-batch depends on the values of the BatchStrategy and MaxPayloadInMB parameters. When the value of BatchStrategy is MultiRecord, Amazon SageMaker sends the maximum number of records in each request, up to the MaxPayloadInMB limit. If the value of BatchStrategy is SingleRecord, Amazon SageMaker sends individual records in each request.  Some data formats represent a record as a binary payload wrapped with extra padding bytes. When splitting is applied to a binary data format, padding is removed if the value of BatchStrategy is set to SingleRecord. Padding is not removed if the value of BatchStrategy is set to MultiRecord. For more information about RecordIO, see Create a Dataset Using RecordIO in the MXNet documentation. For more information about TFRecord, see Consuming TFRecord data in the TensorFlow documentation. 
     */
    SplitType?: SplitType;
  }
  export type TransformInstanceCount = number;
  export type TransformInstanceType = "ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.c4.xlarge"|"ml.c4.2xlarge"|"ml.c4.4xlarge"|"ml.c4.8xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.18xlarge"|"ml.m5.large"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.12xlarge"|"ml.m5.24xlarge"|string;
  export type TransformInstanceTypes = TransformInstanceType[];
  export interface TransformJob {
    /**
     * The name of the transform job.
     */
    TransformJobName?: TransformJobName;
    /**
     * The Amazon Resource Name (ARN) of the transform job.
     */
    TransformJobArn?: TransformJobArn;
    /**
     * The status of the transform job. Transform job statuses are:    InProgress - The job is in progress.    Completed - The job has completed.    Failed - The transform job has failed. To see the reason for the failure, see the FailureReason field in the response to a DescribeTransformJob call.    Stopping - The transform job is stopping.    Stopped - The transform job has stopped.  
     */
    TransformJobStatus?: TransformJobStatus;
    /**
     * If the transform job failed, the reason it failed.
     */
    FailureReason?: FailureReason;
    /**
     * The name of the model associated with the transform job.
     */
    ModelName?: ModelName;
    /**
     * The maximum number of parallel requests that can be sent to each instance in a transform job. If MaxConcurrentTransforms is set to 0 or left unset, SageMaker checks the optional execution-parameters to determine the settings for your chosen algorithm. If the execution-parameters endpoint is not enabled, the default value is 1. For built-in algorithms, you don't need to set a value for MaxConcurrentTransforms.
     */
    MaxConcurrentTransforms?: MaxConcurrentTransforms;
    ModelClientConfig?: ModelClientConfig;
    /**
     * The maximum allowed size of the payload, in MB. A payload is the data portion of a record (without metadata). The value in MaxPayloadInMB must be greater than, or equal to, the size of a single record. To estimate the size of a record in MB, divide the size of your dataset by the number of records. To ensure that the records fit within the maximum payload size, we recommend using a slightly larger value. The default value is 6 MB. For cases where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding, set the value to 0. This feature works only in supported algorithms. Currently, SageMaker built-in algorithms do not support HTTP chunked encoding.
     */
    MaxPayloadInMB?: MaxPayloadInMB;
    /**
     * Specifies the number of records to include in a mini-batch for an HTTP inference request. A record is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record.
     */
    BatchStrategy?: BatchStrategy;
    /**
     * The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.
     */
    Environment?: TransformEnvironmentMap;
    TransformInput?: TransformInput;
    TransformOutput?: TransformOutput;
    TransformResources?: TransformResources;
    /**
     * A timestamp that shows when the transform Job was created.
     */
    CreationTime?: Timestamp;
    /**
     * Indicates when the transform job starts on ML instances. You are billed for the time interval between this time and the value of TransformEndTime.
     */
    TransformStartTime?: Timestamp;
    /**
     * Indicates when the transform job has been completed, or has stopped or failed. You are billed for the time interval between this time and the value of TransformStartTime.
     */
    TransformEndTime?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the labeling job that created the transform job.
     */
    LabelingJobArn?: LabelingJobArn;
    /**
     * The Amazon Resource Name (ARN) of the AutoML job that created the transform job.
     */
    AutoMLJobArn?: AutoMLJobArn;
    DataProcessing?: DataProcessing;
    ExperimentConfig?: ExperimentConfig;
    /**
     * A list of tags associated with the transform job.
     */
    Tags?: TagList;
  }
  export type TransformJobArn = string;
  export interface TransformJobDefinition {
    /**
     * The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1.
     */
    MaxConcurrentTransforms?: MaxConcurrentTransforms;
    /**
     * The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata).
     */
    MaxPayloadInMB?: MaxPayloadInMB;
    /**
     * A string that determines the number of records included in a single mini-batch.  SingleRecord means only one record is used per mini-batch. MultiRecord means a mini-batch is set to contain as many records that can fit within the MaxPayloadInMB limit.
     */
    BatchStrategy?: BatchStrategy;
    /**
     * The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.
     */
    Environment?: TransformEnvironmentMap;
    /**
     * A description of the input source and the way the transform job consumes it.
     */
    TransformInput: TransformInput;
    /**
     * Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.
     */
    TransformOutput: TransformOutput;
    /**
     * Identifies the ML compute instances for the transform job.
     */
    TransformResources: TransformResources;
  }
  export type TransformJobName = string;
  export type TransformJobStatus = "InProgress"|"Completed"|"Failed"|"Stopping"|"Stopped"|string;
  export type TransformJobSummaries = TransformJobSummary[];
  export interface TransformJobSummary {
    /**
     * The name of the transform job.
     */
    TransformJobName: TransformJobName;
    /**
     * The Amazon Resource Name (ARN) of the transform job.
     */
    TransformJobArn: TransformJobArn;
    /**
     * A timestamp that shows when the transform Job was created.
     */
    CreationTime: Timestamp;
    /**
     * Indicates when the transform job ends on compute instances. For successful jobs and stopped jobs, this is the exact time recorded after the results are uploaded. For failed jobs, this is when Amazon SageMaker detected that the job failed.
     */
    TransformEndTime?: Timestamp;
    /**
     * Indicates when the transform job was last modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * The status of the transform job.
     */
    TransformJobStatus: TransformJobStatus;
    /**
     * If the transform job failed, the reason it failed.
     */
    FailureReason?: FailureReason;
  }
  export interface TransformOutput {
    /**
     * The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job. For example, s3://bucket-name/key-name-prefix. For every S3 object used as input for the transform job, batch transform stores the transformed data with an .out suffix in a corresponding subfolder in the location in the output prefix. For example, for the input data stored at s3://bucket-name/input-name-prefix/dataset01/data.csv, batch transform stores the transformed data at s3://bucket-name/output-name-prefix/input-name-prefix/data.csv.out. Batch transform doesn't upload partially processed objects. For an input S3 object that contains multiple records, it creates an .out file only if the transform job succeeds on the entire file. When the input contains multiple S3 objects, the batch transform job processes the listed S3 objects and uploads only the output for successfully processed objects. If any object fails in the transform job batch transform marks the job as failed to prompt investigation.
     */
    S3OutputPath: S3Uri;
    /**
     * The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.
     */
    Accept?: Accept;
    /**
     * Defines how to assemble the results of the transform job as a single S3 object. Choose a format that is most convenient to you. To concatenate the results in binary format, specify None. To add a newline character at the end of every transformed record, specify Line.
     */
    AssembleWith?: AssemblyType;
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. The KmsKeyId can be any of the following formats:    Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias name ARN: arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias    If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see KMS-Managed Encryption Keys in the Amazon Simple Storage Service Developer Guide.  The KMS key policy must grant permission to the IAM role that you specify in your CreateModel request. For more information, see Using Key Policies in AWS KMS in the AWS Key Management Service Developer Guide.
     */
    KmsKeyId?: KmsKeyId;
  }
  export interface TransformResources {
    /**
     * The ML compute instance type for the transform job. If you are using built-in algorithms to transform moderately sized datasets, we recommend using ml.m4.xlarge or ml.m5.large instance types.
     */
    InstanceType: TransformInstanceType;
    /**
     * The number of ML compute instances to use in the transform job. For distributed transform jobs, specify a value greater than 1. The default value is 1.
     */
    InstanceCount: TransformInstanceCount;
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume attached to the ML compute instance(s) that run the batch transform job. The VolumeKmsKeyId can be any of the following formats:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias name ARN: arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias   
     */
    VolumeKmsKeyId?: KmsKeyId;
  }
  export interface TransformS3DataSource {
    /**
     * If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for batch transform.  If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for batch transform.  The following values are compatible: ManifestFile, S3Prefix  The following value is not compatible: AugmentedManifestFile 
     */
    S3DataType: S3DataType;
    /**
     * Depending on the value specified for the S3DataType, identifies either a key name prefix or a manifest. For example:    A key name prefix might look like this: s3://bucketname/exampleprefix.     A manifest might look like this: s3://bucketname/example.manifest   The manifest is an S3 object which is a JSON file with the following format:   [ {"prefix": "s3://customer_bucket/some/prefix/"},   "relative/path/to/custdata-1",   "relative/path/custdata-2",   ...   "relative/path/custdata-N"   ]   The preceding JSON matches the following S3Uris:   s3://customer_bucket/some/prefix/relative/path/to/custdata-1   s3://customer_bucket/some/prefix/relative/path/custdata-2   ...   s3://customer_bucket/some/prefix/relative/path/custdata-N   The complete set of S3Uris in this manifest constitutes the input data for the channel for this datasource. The object that each S3Uris points to must be readable by the IAM role that Amazon SageMaker uses to perform tasks on your behalf.  
     */
    S3Uri: S3Uri;
  }
  export interface Trial {
    /**
     * The name of the trial.
     */
    TrialName?: ExperimentEntityName;
    /**
     * The Amazon Resource Name (ARN) of the trial.
     */
    TrialArn?: TrialArn;
    /**
     * The name of the trial as displayed. If DisplayName isn't specified, TrialName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    /**
     * The name of the experiment the trial is part of.
     */
    ExperimentName?: ExperimentEntityName;
    Source?: TrialSource;
    /**
     * When the trial was created.
     */
    CreationTime?: Timestamp;
    CreatedBy?: UserContext;
    /**
     * Who last modified the trial.
     */
    LastModifiedTime?: Timestamp;
    LastModifiedBy?: UserContext;
    /**
     * The list of tags that are associated with the trial. You can use Search API to search on the tags.
     */
    Tags?: TagList;
    /**
     * A list of the components associated with the trial. For each component, a summary of the component's properties is included.
     */
    TrialComponentSummaries?: TrialComponentSimpleSummaries;
  }
  export type TrialArn = string;
  export interface TrialComponent {
    /**
     * The name of the trial component.
     */
    TrialComponentName?: ExperimentEntityName;
    /**
     * The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    /**
     * The Amazon Resource Name (ARN) of the trial component.
     */
    TrialComponentArn?: TrialComponentArn;
    /**
     * The Amazon Resource Name (ARN) and job type of the source of the component.
     */
    Source?: TrialComponentSource;
    Status?: TrialComponentStatus;
    /**
     * When the component started.
     */
    StartTime?: Timestamp;
    /**
     * When the component ended.
     */
    EndTime?: Timestamp;
    /**
     * When the component was created.
     */
    CreationTime?: Timestamp;
    CreatedBy?: UserContext;
    /**
     * When the component was last modified.
     */
    LastModifiedTime?: Timestamp;
    LastModifiedBy?: UserContext;
    /**
     * The hyperparameters of the component.
     */
    Parameters?: TrialComponentParameters;
    /**
     * The input artifacts of the component.
     */
    InputArtifacts?: TrialComponentArtifacts;
    /**
     * The output artifacts of the component.
     */
    OutputArtifacts?: TrialComponentArtifacts;
    /**
     * The metrics for the component.
     */
    Metrics?: TrialComponentMetricSummaries;
    /**
     * Details of the source of the component.
     */
    SourceDetail?: TrialComponentSourceDetail;
    /**
     * The list of tags that are associated with the component. You can use Search API to search on the tags.
     */
    Tags?: TagList;
    /**
     * An array of the parents of the component. A parent is a trial the component is associated with and the experiment the trial is part of. A component might not have any parents.
     */
    Parents?: Parents;
  }
  export type TrialComponentArn = string;
  export interface TrialComponentArtifact {
    /**
     * The media type of the artifact, which indicates the type of data in the artifact file. The media type consists of a type and a subtype concatenated with a slash (/) character, for example, text/csv, image/jpeg, and s3/uri. The type specifies the category of the media. The subtype specifies the kind of data.
     */
    MediaType?: MediaType;
    /**
     * The location of the artifact.
     */
    Value: TrialComponentArtifactValue;
  }
  export type TrialComponentArtifactValue = string;
  export type TrialComponentArtifacts = {[key: string]: TrialComponentArtifact};
  export type TrialComponentKey256 = string;
  export type TrialComponentKey64 = string;
  export type TrialComponentMetricSummaries = TrialComponentMetricSummary[];
  export interface TrialComponentMetricSummary {
    /**
     * The name of the metric.
     */
    MetricName?: MetricName;
    /**
     * The Amazon Resource Name (ARN) of the source.
     */
    SourceArn?: TrialComponentSourceArn;
    /**
     * When the metric was last updated.
     */
    TimeStamp?: Timestamp;
    /**
     * The maximum value of the metric.
     */
    Max?: OptionalDouble;
    /**
     * The minimum value of the metric.
     */
    Min?: OptionalDouble;
    /**
     * The most recent value of the metric.
     */
    Last?: OptionalDouble;
    /**
     * The number of samples used to generate the metric.
     */
    Count?: OptionalInteger;
    /**
     * The average value of the metric.
     */
    Avg?: OptionalDouble;
    /**
     * The standard deviation of the metric.
     */
    StdDev?: OptionalDouble;
  }
  export interface TrialComponentParameterValue {
    /**
     * The string value of a categorical hyperparameter. If you specify a value for this parameter, you can't specify the NumberValue parameter.
     */
    StringValue?: StringParameterValue;
    /**
     * The numeric value of a numeric hyperparameter. If you specify a value for this parameter, you can't specify the StringValue parameter.
     */
    NumberValue?: DoubleParameterValue;
  }
  export type TrialComponentParameters = {[key: string]: TrialComponentParameterValue};
  export type TrialComponentPrimaryStatus = "InProgress"|"Completed"|"Failed"|"Stopping"|"Stopped"|string;
  export type TrialComponentSimpleSummaries = TrialComponentSimpleSummary[];
  export interface TrialComponentSimpleSummary {
    /**
     * The name of the trial component.
     */
    TrialComponentName?: ExperimentEntityName;
    /**
     * The Amazon Resource Name (ARN) of the trial component.
     */
    TrialComponentArn?: TrialComponentArn;
    TrialComponentSource?: TrialComponentSource;
    /**
     * When the component was created.
     */
    CreationTime?: Timestamp;
    CreatedBy?: UserContext;
  }
  export interface TrialComponentSource {
    /**
     * The source ARN.
     */
    SourceArn: TrialComponentSourceArn;
    /**
     * The source job type.
     */
    SourceType?: SourceType;
  }
  export type TrialComponentSourceArn = string;
  export interface TrialComponentSourceDetail {
    /**
     * The Amazon Resource Name (ARN) of the source.
     */
    SourceArn?: TrialComponentSourceArn;
    /**
     * Information about a training job that's the source of a trial component.
     */
    TrainingJob?: TrainingJob;
    /**
     * Information about a processing job that's the source of a trial component.
     */
    ProcessingJob?: ProcessingJob;
    /**
     * Information about a transform job that's the source of the trial component.
     */
    TransformJob?: TransformJob;
  }
  export interface TrialComponentStatus {
    /**
     * The status of the trial component.
     */
    PrimaryStatus?: TrialComponentPrimaryStatus;
    /**
     * If the component failed, a message describing why.
     */
    Message?: TrialComponentStatusMessage;
  }
  export type TrialComponentStatusMessage = string;
  export type TrialComponentSummaries = TrialComponentSummary[];
  export interface TrialComponentSummary {
    /**
     * The name of the trial component.
     */
    TrialComponentName?: ExperimentEntityName;
    /**
     * The ARN of the trial component.
     */
    TrialComponentArn?: TrialComponentArn;
    /**
     * The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    TrialComponentSource?: TrialComponentSource;
    /**
     * The status of the component. States include:   InProgress   Completed   Failed  
     */
    Status?: TrialComponentStatus;
    /**
     * When the component started.
     */
    StartTime?: Timestamp;
    /**
     * When the component ended.
     */
    EndTime?: Timestamp;
    /**
     * When the component was created.
     */
    CreationTime?: Timestamp;
    /**
     * Who created the component.
     */
    CreatedBy?: UserContext;
    /**
     * When the component was last modified.
     */
    LastModifiedTime?: Timestamp;
    /**
     * Who last modified the component.
     */
    LastModifiedBy?: UserContext;
  }
  export interface TrialSource {
    /**
     * The Amazon Resource Name (ARN) of the source.
     */
    SourceArn: TrialSourceArn;
    /**
     * The source job type.
     */
    SourceType?: SourceType;
  }
  export type TrialSourceArn = string;
  export type TrialSummaries = TrialSummary[];
  export interface TrialSummary {
    /**
     * The Amazon Resource Name (ARN) of the trial.
     */
    TrialArn?: TrialArn;
    /**
     * The name of the trial.
     */
    TrialName?: ExperimentEntityName;
    /**
     * The name of the trial as displayed. If DisplayName isn't specified, TrialName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    TrialSource?: TrialSource;
    /**
     * When the trial was created.
     */
    CreationTime?: Timestamp;
    /**
     * When the trial was last modified.
     */
    LastModifiedTime?: Timestamp;
  }
  export interface TuningJobCompletionCriteria {
    /**
     * The value of the objective metric.
     */
    TargetObjectiveMetricValue: TargetObjectiveMetricValue;
  }
  export interface USD {
    /**
     * The whole number of dollars in the amount.
     */
    Dollars?: Dollars;
    /**
     * The fractional portion, in cents, of the amount. 
     */
    Cents?: Cents;
    /**
     * Fractions of a cent, in tenths.
     */
    TenthFractionsOfACent?: TenthFractionsOfACent;
  }
  export interface UiConfig {
    /**
     * The Amazon S3 bucket location of the UI template, or worker task template. This is the template used to render the worker UI and tools for labeling job tasks. For more information about the contents of a UI template, see  Creating Your Custom Labeling Task Template.
     */
    UiTemplateS3Uri?: S3Uri;
    /**
     * The ARN of the worker task template used to render the worker UI and tools for labeling job tasks. Use this parameter when you are creating a labeling job for 3D point cloud and video fram labeling jobs. Use your labeling job task type to select one of the following ARN's and use it with this parameter when you create a labeling job. Replace aws-region with the AWS region you are creating your labeling job in.  3D Point Cloud HumanTaskUiArns  Use this HumanTaskUiArn for 3D point cloud object detection and 3D point cloud object detection adjustment labeling jobs.     arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectDetection     Use this HumanTaskUiArn for 3D point cloud object tracking and 3D point cloud object tracking adjustment labeling jobs.     arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectTracking     Use this HumanTaskUiArn for 3D point cloud semantic segmentation and 3D point cloud semantic segmentation adjustment labeling jobs.    arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudSemanticSegmentation     Video Frame HumanTaskUiArns  Use this HumanTaskUiArn for video frame object detection and video frame object detection adjustment labeling jobs.     arn:aws:sagemaker:region:394669845002:human-task-ui/VideoObjectDetection     Use this HumanTaskUiArn for video frame object tracking and video frame object tracking adjustment labeling jobs.     arn:aws:sagemaker:aws-region:394669845002:human-task-ui/VideoObjectTracking   
     */
    HumanTaskUiArn?: HumanTaskUiArn;
  }
  export interface UiTemplate {
    /**
     * The content of the Liquid template for the worker user interface.
     */
    Content: TemplateContent;
  }
  export interface UiTemplateInfo {
    /**
     * The URL for the user interface template.
     */
    Url?: TemplateUrl;
    /**
     * The SHA-256 digest of the contents of the template.
     */
    ContentSha256?: TemplateContentSha256;
  }
  export interface UpdateCodeRepositoryInput {
    /**
     * The name of the Git repository to update.
     */
    CodeRepositoryName: EntityName;
    /**
     * The configuration of the git repository, including the URL and the Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the repository. The secret must have a staging label of AWSCURRENT and must be in the following format:  {"username": UserName, "password": Password} 
     */
    GitConfig?: GitConfigForUpdate;
  }
  export interface UpdateCodeRepositoryOutput {
    /**
     * The ARN of the Git repository.
     */
    CodeRepositoryArn: CodeRepositoryArn;
  }
  export interface UpdateDomainRequest {
    /**
     * The ID of the domain to be updated.
     */
    DomainId: DomainId;
    /**
     * A collection of settings.
     */
    DefaultUserSettings?: UserSettings;
  }
  export interface UpdateDomainResponse {
    /**
     * The Amazon Resource Name (ARN) of the domain.
     */
    DomainArn?: DomainArn;
  }
  export interface UpdateEndpointInput {
    /**
     * The name of the endpoint whose configuration you want to update.
     */
    EndpointName: EndpointName;
    /**
     * The name of the new endpoint configuration.
     */
    EndpointConfigName: EndpointConfigName;
    /**
     * When updating endpoint resources, enables or disables the retention of variant properties, such as the instance count or the variant weight. To retain the variant properties of an endpoint when updating it, set RetainAllVariantProperties to true. To use the variant properties specified in a new EndpointConfig call when updating an endpoint, set RetainAllVariantProperties to false.
     */
    RetainAllVariantProperties?: Boolean;
    /**
     * When you are updating endpoint resources with UpdateEndpointInput$RetainAllVariantProperties, whose value is set to true, ExcludeRetainedVariantProperties specifies the list of type VariantProperty to override with the values provided by EndpointConfig. If you don't specify a value for ExcludeAllVariantProperties, no variant properties are overridden. 
     */
    ExcludeRetainedVariantProperties?: VariantPropertyList;
  }
  export interface UpdateEndpointOutput {
    /**
     * The Amazon Resource Name (ARN) of the endpoint.
     */
    EndpointArn: EndpointArn;
  }
  export interface UpdateEndpointWeightsAndCapacitiesInput {
    /**
     * The name of an existing Amazon SageMaker endpoint.
     */
    EndpointName: EndpointName;
    /**
     * An object that provides new capacity and weight values for a variant.
     */
    DesiredWeightsAndCapacities: DesiredWeightAndCapacityList;
  }
  export interface UpdateEndpointWeightsAndCapacitiesOutput {
    /**
     * The Amazon Resource Name (ARN) of the updated endpoint.
     */
    EndpointArn: EndpointArn;
  }
  export interface UpdateExperimentRequest {
    /**
     * The name of the experiment to update.
     */
    ExperimentName: ExperimentEntityName;
    /**
     * The name of the experiment as displayed. The name doesn't need to be unique. If DisplayName isn't specified, ExperimentName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    /**
     * The description of the experiment.
     */
    Description?: ExperimentDescription;
  }
  export interface UpdateExperimentResponse {
    /**
     * The Amazon Resource Name (ARN) of the experiment.
     */
    ExperimentArn?: ExperimentArn;
  }
  export interface UpdateMonitoringScheduleRequest {
    /**
     * The name of the monitoring schedule. The name must be unique within an AWS Region within an AWS account.
     */
    MonitoringScheduleName: MonitoringScheduleName;
    /**
     * The configuration object that specifies the monitoring schedule and defines the monitoring job.
     */
    MonitoringScheduleConfig: MonitoringScheduleConfig;
  }
  export interface UpdateMonitoringScheduleResponse {
    /**
     * The Amazon Resource Name (ARN) of the monitoring schedule.
     */
    MonitoringScheduleArn: MonitoringScheduleArn;
  }
  export interface UpdateNotebookInstanceInput {
    /**
     * The name of the notebook instance to update.
     */
    NotebookInstanceName: NotebookInstanceName;
    /**
     * The Amazon ML compute instance type.
     */
    InstanceType?: InstanceType;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access the notebook instance. For more information, see Amazon SageMaker Roles.   To be able to pass this role to Amazon SageMaker, the caller of this API must have the iam:PassRole permission. 
     */
    RoleArn?: RoleArn;
    /**
     * The name of a lifecycle configuration to associate with the notebook instance. For information about lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance.
     */
    LifecycleConfigName?: NotebookInstanceLifecycleConfigName;
    /**
     * Set to true to remove the notebook instance lifecycle configuration currently associated with the notebook instance. This operation is idempotent. If you specify a lifecycle configuration that is not associated with the notebook instance when you call this method, it does not throw an error.
     */
    DisassociateLifecycleConfig?: DisassociateNotebookInstanceLifecycleConfig;
    /**
     * The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB. ML storage volumes are encrypted, so Amazon SageMaker can't determine the amount of available free space on the volume. Because of this, you can increase the volume size when you update a notebook instance, but you can't decrease the volume size. If you want to decrease the size of the ML storage volume in use, create a new notebook instance with the desired size.
     */
    VolumeSizeInGB?: NotebookInstanceVolumeSizeInGB;
    /**
     * The Git repository to associate with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see Associating Git Repositories with Amazon SageMaker Notebook Instances.
     */
    DefaultCodeRepository?: CodeRepositoryNameOrUrl;
    /**
     * An array of up to three Git repositories to associate with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see Associating Git Repositories with Amazon SageMaker Notebook Instances.
     */
    AdditionalCodeRepositories?: AdditionalCodeRepositoryNamesOrUrls;
    /**
     * A list of the Elastic Inference (EI) instance types to associate with this notebook instance. Currently only one EI instance type can be associated with a notebook instance. For more information, see Using Elastic Inference in Amazon SageMaker.
     */
    AcceleratorTypes?: NotebookInstanceAcceleratorTypes;
    /**
     * A list of the Elastic Inference (EI) instance types to remove from this notebook instance. This operation is idempotent. If you specify an accelerator type that is not associated with the notebook instance when you call this method, it does not throw an error.
     */
    DisassociateAcceleratorTypes?: DisassociateNotebookInstanceAcceleratorTypes;
    /**
     * The name or URL of the default Git repository to remove from this notebook instance. This operation is idempotent. If you specify a Git repository that is not associated with the notebook instance when you call this method, it does not throw an error.
     */
    DisassociateDefaultCodeRepository?: DisassociateDefaultCodeRepository;
    /**
     * A list of names or URLs of the default Git repositories to remove from this notebook instance. This operation is idempotent. If you specify a Git repository that is not associated with the notebook instance when you call this method, it does not throw an error.
     */
    DisassociateAdditionalCodeRepositories?: DisassociateAdditionalCodeRepositories;
    /**
     * Whether root access is enabled or disabled for users of the notebook instance. The default value is Enabled.  If you set this to Disabled, users don't have root access on the notebook instance, but lifecycle configuration scripts still run with root permissions. 
     */
    RootAccess?: RootAccess;
  }
  export interface UpdateNotebookInstanceLifecycleConfigInput {
    /**
     * The name of the lifecycle configuration.
     */
    NotebookInstanceLifecycleConfigName: NotebookInstanceLifecycleConfigName;
    /**
     * The shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.
     */
    OnCreate?: NotebookInstanceLifecycleConfigList;
    /**
     * The shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.
     */
    OnStart?: NotebookInstanceLifecycleConfigList;
  }
  export interface UpdateNotebookInstanceLifecycleConfigOutput {
  }
  export interface UpdateNotebookInstanceOutput {
  }
  export interface UpdateTrialComponentRequest {
    /**
     * The name of the component to update.
     */
    TrialComponentName: ExperimentEntityName;
    /**
     * The name of the component as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed.
     */
    DisplayName?: ExperimentEntityName;
    /**
     * The new status of the component.
     */
    Status?: TrialComponentStatus;
    /**
     * When the component started.
     */
    StartTime?: Timestamp;
    /**
     * When the component ended.
     */
    EndTime?: Timestamp;
    /**
     * Replaces all of the component's hyperparameters with the specified hyperparameters.
     */
    Parameters?: TrialComponentParameters;
    /**
     * The hyperparameters to remove from the component.
     */
    ParametersToRemove?: ListTrialComponentKey256;
    /**
     * Replaces all of the component's input artifacts with the specified artifacts.
     */
    InputArtifacts?: TrialComponentArtifacts;
    /**
     * The input artifacts to remove from the component.
     */
    InputArtifactsToRemove?: ListTrialComponentKey256;
    /**
     * Replaces all of the component's output artifacts with the specified artifacts.
     */
    OutputArtifacts?: TrialComponentArtifacts;
    /**
     * The output artifacts to remove from the component.
     */
    OutputArtifactsToRemove?: ListTrialComponentKey256;
  }
  export interface UpdateTrialComponentResponse {
    /**
     * The Amazon Resource Name (ARN) of the trial component.
     */
    TrialComponentArn?: TrialComponentArn;
  }
  export interface UpdateTrialRequest {
    /**
     * The name of the trial to update.
     */
    TrialName: ExperimentEntityName;
    /**
     * The name of the trial as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialName is displayed.
     */
    DisplayName?: ExperimentEntityName;
  }
  export interface UpdateTrialResponse {
    /**
     * The Amazon Resource Name (ARN) of the trial.
     */
    TrialArn?: TrialArn;
  }
  export interface UpdateUserProfileRequest {
    /**
     * The domain ID.
     */
    DomainId: DomainId;
    /**
     * The user profile name.
     */
    UserProfileName: UserProfileName;
    /**
     * A collection of settings.
     */
    UserSettings?: UserSettings;
  }
  export interface UpdateUserProfileResponse {
    /**
     * The user profile Amazon Resource Name (ARN).
     */
    UserProfileArn?: UserProfileArn;
  }
  export interface UpdateWorkforceRequest {
    /**
     * The name of the private workforce that you want to update. You can find your workforce name by using the operation.
     */
    WorkforceName: WorkforceName;
    /**
     * A list of one to ten worker IP address ranges (CIDRs) that can be used to access tasks assigned to this workforce. Maximum: Ten CIDR values
     */
    SourceIpConfig?: SourceIpConfig;
    /**
     * Use this parameter to update your OIDC Identity Provider (IdP) configuration for a workforce made using your own IdP.
     */
    OidcConfig?: OidcConfig;
  }
  export interface UpdateWorkforceResponse {
    /**
     * A single private workforce. You can create one private work force in each AWS Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see Create a Private Workforce.
     */
    Workforce: Workforce;
  }
  export interface UpdateWorkteamRequest {
    /**
     * The name of the work team to update.
     */
    WorkteamName: WorkteamName;
    /**
     * A list of MemberDefinition objects that contains objects that identify the workers that make up the work team.  Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use CognitoMemberDefinition. For workforces created using your own OIDC identity provider (IdP) use OidcMemberDefinition. You should not provide input for both of these parameters in a single request. For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito user groups within the user pool used to create a workforce. All of the CognitoMemberDefinition objects that make up the member definition must have the same ClientId and UserPool values. To add a Amazon Cognito user group to an existing worker pool, see Adding groups to a User Pool. For more information about user pools, see Amazon Cognito User Pools. For workforces created using your own OIDC IdP, specify the user groups that you want to include in your private work team in OidcMemberDefinition by listing those groups in Groups. Be aware that user groups that are already in the work team must also be listed in Groups when you make this request to remain on the work team. If you do not include these user groups, they will no longer be associated with the work team you update. 
     */
    MemberDefinitions?: MemberDefinitions;
    /**
     * An updated description for the work team.
     */
    Description?: String200;
    /**
     * Configures SNS topic notifications for available or expiring work items
     */
    NotificationConfiguration?: NotificationConfiguration;
  }
  export interface UpdateWorkteamResponse {
    /**
     * A Workteam object that describes the updated work team.
     */
    Workteam: Workteam;
  }
  export type Url = string;
  export interface UserContext {
    /**
     * The Amazon Resource Name (ARN) of the user's profile.
     */
    UserProfileArn?: String;
    /**
     * The name of the user's profile.
     */
    UserProfileName?: String;
    /**
     * The domain associated with the user.
     */
    DomainId?: String;
  }
  export type UserProfileArn = string;
  export interface UserProfileDetails {
    /**
     * The domain ID.
     */
    DomainId?: DomainId;
    /**
     * The user profile name.
     */
    UserProfileName?: UserProfileName;
    /**
     * The status.
     */
    Status?: UserProfileStatus;
    /**
     * The creation time.
     */
    CreationTime?: CreationTime;
    /**
     * The last modified time.
     */
    LastModifiedTime?: LastModifiedTime;
  }
  export type UserProfileList = UserProfileDetails[];
  export type UserProfileName = string;
  export type UserProfileSortKey = "CreationTime"|"LastModifiedTime"|string;
  export type UserProfileStatus = "Deleting"|"Failed"|"InService"|"Pending"|string;
  export interface UserSettings {
    /**
     * The execution role for the user.
     */
    ExecutionRole?: RoleArn;
    /**
     * The security groups.
     */
    SecurityGroups?: SecurityGroupIds;
    /**
     * The sharing settings.
     */
    SharingSettings?: SharingSettings;
    /**
     * The Jupyter server's app settings.
     */
    JupyterServerAppSettings?: JupyterServerAppSettings;
    /**
     * The kernel gateway app settings.
     */
    KernelGatewayAppSettings?: KernelGatewayAppSettings;
    /**
     * The TensorBoard app settings.
     */
    TensorBoardAppSettings?: TensorBoardAppSettings;
  }
  export type VariantName = string;
  export interface VariantProperty {
    /**
     * The type of variant property. The supported values are:    DesiredInstanceCount: Overrides the existing variant instance counts using the ProductionVariant$InitialInstanceCount values in the CreateEndpointConfigInput$ProductionVariants.    DesiredWeight: Overrides the existing variant weights using the ProductionVariant$InitialVariantWeight values in the CreateEndpointConfigInput$ProductionVariants.    DataCaptureConfig: (Not currently supported.)  
     */
    VariantPropertyType: VariantPropertyType;
  }
  export type VariantPropertyList = VariantProperty[];
  export type VariantPropertyType = "DesiredInstanceCount"|"DesiredWeight"|"DataCaptureConfig"|string;
  export type VariantWeight = number;
  export type VolumeSizeInGB = number;
  export interface VpcConfig {
    /**
     * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
     */
    SecurityGroupIds: VpcSecurityGroupIds;
    /**
     * The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see Supported Instance Types and Availability Zones.
     */
    Subnets: Subnets;
  }
  export type VpcId = string;
  export type VpcSecurityGroupIds = SecurityGroupId[];
  export interface Workforce {
    /**
     * The name of the private workforce.
     */
    WorkforceName: WorkforceName;
    /**
     * The Amazon Resource Name (ARN) of the private workforce.
     */
    WorkforceArn: WorkforceArn;
    /**
     * The most recent date that was used to successfully add one or more IP address ranges (CIDRs) to a private workforce's allow list.
     */
    LastUpdatedDate?: Timestamp;
    /**
     * A list of one to ten IP address ranges (CIDRs) to be added to the workforce allow list. By default, a workforce isn't restricted to specific IP addresses.
     */
    SourceIpConfig?: SourceIpConfig;
    /**
     * The subdomain for your OIDC Identity Provider.
     */
    SubDomain?: String;
    /**
     * The configuration of an Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single  Amazon Cognito user pool.
     */
    CognitoConfig?: CognitoConfig;
    /**
     * The configuration of an OIDC Identity Provider (IdP) private workforce.
     */
    OidcConfig?: OidcConfigForResponse;
    /**
     * The date that the workforce is created.
     */
    CreateDate?: Timestamp;
  }
  export type WorkforceArn = string;
  export type WorkforceName = string;
  export type Workforces = Workforce[];
  export interface Workteam {
    /**
     * The name of the work team.
     */
    WorkteamName: WorkteamName;
    /**
     * A list of MemberDefinition objects that contains objects that identify the workers that make up the work team.  Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use CognitoMemberDefinition. For workforces created using your own OIDC identity provider (IdP) use OidcMemberDefinition.
     */
    MemberDefinitions: MemberDefinitions;
    /**
     * The Amazon Resource Name (ARN) that identifies the work team.
     */
    WorkteamArn: WorkteamArn;
    /**
     * The Amazon Resource Name (ARN) of the workforce.
     */
    WorkforceArn?: WorkforceArn;
    /**
     * The Amazon Marketplace identifier for a vendor's work team.
     */
    ProductListingIds?: ProductListings;
    /**
     * A description of the work team.
     */
    Description: String200;
    /**
     * The URI of the labeling job's user interface. Workers open this URI to start labeling your data objects.
     */
    SubDomain?: String;
    /**
     * The date and time that the work team was created (timestamp).
     */
    CreateDate?: Timestamp;
    /**
     * The date and time that the work team was last updated (timestamp).
     */
    LastUpdatedDate?: Timestamp;
    /**
     * Configures SNS notifications of available or expiring work items for work teams.
     */
    NotificationConfiguration?: NotificationConfiguration;
  }
  export type WorkteamArn = string;
  export type WorkteamName = string;
  export type Workteams = Workteam[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-24"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SageMaker client.
   */
  export import Types = SageMaker;
}
export = SageMaker;
