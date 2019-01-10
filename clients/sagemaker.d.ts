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
   * Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, models, endpoint configurations, and endpoints. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see AWS Tagging Strategies.  Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the Tags parameter of CreateHyperParameterTuningJob  
   */
  addTags(params: SageMaker.Types.AddTagsInput, callback?: (err: AWSError, data: SageMaker.Types.AddTagsOutput) => void): Request<SageMaker.Types.AddTagsOutput, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, models, endpoint configurations, and endpoints. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see AWS Tagging Strategies.  Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the Tags parameter of CreateHyperParameterTuningJob  
   */
  addTags(callback?: (err: AWSError, data: SageMaker.Types.AddTagsOutput) => void): Request<SageMaker.Types.AddTagsOutput, AWSError>;
  /**
   * Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS Marketplace.
   */
  createAlgorithm(params: SageMaker.Types.CreateAlgorithmInput, callback?: (err: AWSError, data: SageMaker.Types.CreateAlgorithmOutput) => void): Request<SageMaker.Types.CreateAlgorithmOutput, AWSError>;
  /**
   * Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS Marketplace.
   */
  createAlgorithm(callback?: (err: AWSError, data: SageMaker.Types.CreateAlgorithmOutput) => void): Request<SageMaker.Types.CreateAlgorithmOutput, AWSError>;
  /**
   * Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with. The repository can be hosted either in AWS CodeCommit or in any other Git repository.
   */
  createCodeRepository(params: SageMaker.Types.CreateCodeRepositoryInput, callback?: (err: AWSError, data: SageMaker.Types.CreateCodeRepositoryOutput) => void): Request<SageMaker.Types.CreateCodeRepositoryOutput, AWSError>;
  /**
   * Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with. The repository can be hosted either in AWS CodeCommit or in any other Git repository.
   */
  createCodeRepository(callback?: (err: AWSError, data: SageMaker.Types.CreateCodeRepositoryOutput) => void): Request<SageMaker.Types.CreateCodeRepositoryOutput, AWSError>;
  /**
   * Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with AWS IoT Greengrass. In that case, deploy them as an ML resource. In the request body, you provide the following:   A name for the compilation job    Information about the input model artifacts    The output location for the compiled model and the device (target) that the model runs on     The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job    You can also provide a Tag to track the model compilation job's resource use and costs. The response body contains the CompilationJobArn for the compiled job. To stop a model compilation job, use StopCompilationJob. To get information about a particular model compilation job, use DescribeCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs.
   */
  createCompilationJob(params: SageMaker.Types.CreateCompilationJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateCompilationJobResponse) => void): Request<SageMaker.Types.CreateCompilationJobResponse, AWSError>;
  /**
   * Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with AWS IoT Greengrass. In that case, deploy them as an ML resource. In the request body, you provide the following:   A name for the compilation job    Information about the input model artifacts    The output location for the compiled model and the device (target) that the model runs on     The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job    You can also provide a Tag to track the model compilation job's resource use and costs. The response body contains the CompilationJobArn for the compiled job. To stop a model compilation job, use StopCompilationJob. To get information about a particular model compilation job, use DescribeCompilationJob. To get information about multiple model compilation jobs, use ListCompilationJobs.
   */
  createCompilationJob(callback?: (err: AWSError, data: SageMaker.Types.CreateCompilationJobResponse) => void): Request<SageMaker.Types.CreateCompilationJobResponse, AWSError>;
  /**
   * Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the CreateEndpointConfig API.    Use this API only for hosting models using Amazon SageMaker hosting services.   The endpoint name must be unique within an AWS Region in your AWS account.  When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them.  When Amazon SageMaker receives the request, it sets the endpoint status to Creating. After it creates the endpoint, it sets the status to InService. Amazon SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the DescribeEndpoint API. For an example, see Exercise 1: Using the K-Means Algorithm Provided by Amazon SageMaker.  If any of the models hosted at this endpoint get model data from an Amazon S3 location, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provided. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see Activating and Deactivating AWS STS i an AWS Region in the AWS Identity and Access Management User Guide.
   */
  createEndpoint(params: SageMaker.Types.CreateEndpointInput, callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointOutput) => void): Request<SageMaker.Types.CreateEndpointOutput, AWSError>;
  /**
   * Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the CreateEndpointConfig API.    Use this API only for hosting models using Amazon SageMaker hosting services.   The endpoint name must be unique within an AWS Region in your AWS account.  When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them.  When Amazon SageMaker receives the request, it sets the endpoint status to Creating. After it creates the endpoint, it sets the status to InService. Amazon SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the DescribeEndpoint API. For an example, see Exercise 1: Using the K-Means Algorithm Provided by Amazon SageMaker.  If any of the models hosted at this endpoint get model data from an Amazon S3 location, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provided. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see Activating and Deactivating AWS STS i an AWS Region in the AWS Identity and Access Management User Guide.
   */
  createEndpoint(callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointOutput) => void): Request<SageMaker.Types.CreateEndpointOutput, AWSError>;
  /**
   * Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want Amazon SageMaker to provision. Then you call the CreateEndpoint API.   Use this API only if you want to use Amazon SageMaker hosting services to deploy models into production.   In the request, you define one or more ProductionVariants, each of which identifies a model. Each ProductionVariant parameter also describes the resources that you want Amazon SageMaker to provision. This includes the number and type of ML compute instances to deploy.  If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. 
   */
  createEndpointConfig(params: SageMaker.Types.CreateEndpointConfigInput, callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointConfigOutput) => void): Request<SageMaker.Types.CreateEndpointConfigOutput, AWSError>;
  /**
   * Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want Amazon SageMaker to provision. Then you call the CreateEndpoint API.   Use this API only if you want to use Amazon SageMaker hosting services to deploy models into production.   In the request, you define one or more ProductionVariants, each of which identifies a model. Each ProductionVariant parameter also describes the resources that you want Amazon SageMaker to provision. This includes the number and type of ML compute instances to deploy.  If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. 
   */
  createEndpointConfig(callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointConfigOutput) => void): Request<SageMaker.Types.CreateEndpointConfigOutput, AWSError>;
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
   * Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the docker image containing inference code, artifacts (from prior training), and custom environment map that the inference code uses when you deploy the model for predictions. Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch transform job. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API. Amazon SageMaker then deploys all of the containers that you defined for the model in the hosting environment.  To run a batch transform using your model, you start a job with the CreateTransformJob API. Amazon SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location. In the CreateModel request, you must define a container with the PrimaryContainer parameter. In the request, you also provide an IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other AWS resources, you grant necessary permissions via this role.
   */
  createModel(params: SageMaker.Types.CreateModelInput, callback?: (err: AWSError, data: SageMaker.Types.CreateModelOutput) => void): Request<SageMaker.Types.CreateModelOutput, AWSError>;
  /**
   * Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the docker image containing inference code, artifacts (from prior training), and custom environment map that the inference code uses when you deploy the model for predictions. Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch transform job. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API. Amazon SageMaker then deploys all of the containers that you defined for the model in the hosting environment.  To run a batch transform using your model, you start a job with the CreateTransformJob API. Amazon SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location. In the CreateModel request, you must define a container with the PrimaryContainer parameter. In the request, you also provide an IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other AWS resources, you grant necessary permissions via this role.
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
   * Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook.  In a CreateNotebookInstance request, specify the type of ML compute instance that you want to run. Amazon SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance.  Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use Amazon SageMaker with a specific algorithm or with a machine learning framework.  After receiving the request, Amazon SageMaker does the following:   Creates a network interface in the Amazon SageMaker VPC.   (Option) If you specified SubnetId, Amazon SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, Amazon SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.   Launches an EC2 instance of the type specified in the request in the Amazon SageMaker VPC. If you specified SubnetId of your VPC, Amazon SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.   After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN). After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and validate hosted models.  For more information, see How It Works. 
   */
  createNotebookInstance(params: SageMaker.Types.CreateNotebookInstanceInput, callback?: (err: AWSError, data: SageMaker.Types.CreateNotebookInstanceOutput) => void): Request<SageMaker.Types.CreateNotebookInstanceOutput, AWSError>;
  /**
   * Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook.  In a CreateNotebookInstance request, specify the type of ML compute instance that you want to run. Amazon SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance.  Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use Amazon SageMaker with a specific algorithm or with a machine learning framework.  After receiving the request, Amazon SageMaker does the following:   Creates a network interface in the Amazon SageMaker VPC.   (Option) If you specified SubnetId, Amazon SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, Amazon SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.   Launches an EC2 instance of the type specified in the request in the Amazon SageMaker VPC. If you specified SubnetId of your VPC, Amazon SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.   After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN). After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and validate hosted models.  For more information, see How It Works. 
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
   * Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the Amazon SageMaker console, when you choose Open next to a notebook instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page. You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. To restrict access, attach an IAM policy that denies access to this API unless the call comes from an IP address in the specified list to every AWS Identity and Access Management user, group, or role used to access the notebook instance. Use the NotIpAddress condition operator and the aws:SourceIP condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see Limit Access to a Notebook Instance by IP Address.
   */
  createPresignedNotebookInstanceUrl(params: SageMaker.Types.CreatePresignedNotebookInstanceUrlInput, callback?: (err: AWSError, data: SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput) => void): Request<SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput, AWSError>;
  /**
   * Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the Amazon SageMaker console, when you choose Open next to a notebook instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page. You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. To restrict access, attach an IAM policy that denies access to this API unless the call comes from an IP address in the specified list to every AWS Identity and Access Management user, group, or role used to access the notebook instance. Use the NotIpAddress condition operator and the aws:SourceIP condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see Limit Access to a Notebook Instance by IP Address.
   */
  createPresignedNotebookInstanceUrl(callback?: (err: AWSError, data: SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput) => void): Request<SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput, AWSError>;
  /**
   * Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a deep learning service other than Amazon SageMaker, provided that you know how to use them for inferences.  In the request body, you provide the following:     AlgorithmSpecification - Identifies the training algorithm to use.     HyperParameters - Specify these algorithm-specific parameters to influence the quality of the final model. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see Algorithms.     InputDataConfig - Describes the training dataset and the Amazon S3 location where it is stored.    OutputDataConfig - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results of model training.      ResourceConfig - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance.     RoleARN - The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete model training.     StoppingCondition - Sets a duration for training. Use this parameter to cap model training costs.     For more information about Amazon SageMaker, see How It Works. 
   */
  createTrainingJob(params: SageMaker.Types.CreateTrainingJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateTrainingJobResponse) => void): Request<SageMaker.Types.CreateTrainingJobResponse, AWSError>;
  /**
   * Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a deep learning service other than Amazon SageMaker, provided that you know how to use them for inferences.  In the request body, you provide the following:     AlgorithmSpecification - Identifies the training algorithm to use.     HyperParameters - Specify these algorithm-specific parameters to influence the quality of the final model. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see Algorithms.     InputDataConfig - Describes the training dataset and the Amazon S3 location where it is stored.    OutputDataConfig - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results of model training.      ResourceConfig - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance.     RoleARN - The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete model training.     StoppingCondition - Sets a duration for training. Use this parameter to cap model training costs.     For more information about Amazon SageMaker, see How It Works. 
   */
  createTrainingJob(callback?: (err: AWSError, data: SageMaker.Types.CreateTrainingJobResponse) => void): Request<SageMaker.Types.CreateTrainingJobResponse, AWSError>;
  /**
   * Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify. To perform batch transformations, you create a transform job and use the data that you have readily available. In the request body, you provide the following:    TransformJobName - Identifies the transform job. The name must be unique within an AWS Region in an AWS account.    ModelName - Identifies the model to use. ModelName must be the name of an existing Amazon SageMaker model in the same AWS Region and AWS account. For information on creating a model, see CreateModel.    TransformInput - Describes the dataset to be transformed and the Amazon S3 location where it is stored.    TransformOutput - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.    TransformResources - Identifies the ML compute instances for the transform job.    For more information about how batch transformation works Amazon SageMaker, see How It Works. 
   */
  createTransformJob(params: SageMaker.Types.CreateTransformJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateTransformJobResponse) => void): Request<SageMaker.Types.CreateTransformJobResponse, AWSError>;
  /**
   * Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify. To perform batch transformations, you create a transform job and use the data that you have readily available. In the request body, you provide the following:    TransformJobName - Identifies the transform job. The name must be unique within an AWS Region in an AWS account.    ModelName - Identifies the model to use. ModelName must be the name of an existing Amazon SageMaker model in the same AWS Region and AWS account. For information on creating a model, see CreateModel.    TransformInput - Describes the dataset to be transformed and the Amazon S3 location where it is stored.    TransformOutput - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.    TransformResources - Identifies the ML compute instances for the transform job.    For more information about how batch transformation works Amazon SageMaker, see How It Works. 
   */
  createTransformJob(callback?: (err: AWSError, data: SageMaker.Types.CreateTransformJobResponse) => void): Request<SageMaker.Types.CreateTransformJobResponse, AWSError>;
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
   * Deletes the specified Git repository from your account.
   */
  deleteCodeRepository(params: SageMaker.Types.DeleteCodeRepositoryInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Git repository from your account.
   */
  deleteCodeRepository(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the endpoint was created.  Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the RevokeGrant API call.
   */
  deleteEndpoint(params: SageMaker.Types.DeleteEndpointInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the endpoint was created.  Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the RevokeGrant API call.
   */
  deleteEndpoint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint configuration. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration. 
   */
  deleteEndpointConfig(params: SageMaker.Types.DeleteEndpointConfigInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint configuration. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration. 
   */
  deleteEndpointConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
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
   * Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).
   */
  describeWorkteam(params: SageMaker.Types.DescribeWorkteamRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeWorkteamResponse) => void): Request<SageMaker.Types.DescribeWorkteamResponse, AWSError>;
  /**
   * Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).
   */
  describeWorkteam(callback?: (err: AWSError, data: SageMaker.Types.DescribeWorkteamResponse) => void): Request<SageMaker.Types.DescribeWorkteamResponse, AWSError>;
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
   * Gets a list of work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the NameContains parameter.
   */
  listWorkteams(params: SageMaker.Types.ListWorkteamsRequest, callback?: (err: AWSError, data: SageMaker.Types.ListWorkteamsResponse) => void): Request<SageMaker.Types.ListWorkteamsResponse, AWSError>;
  /**
   * Gets a list of work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the NameContains parameter.
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
   * Finds Amazon SageMaker resources that match a search query. Matching resource objects are returned as a list of SearchResult objects in the response. You can sort the search results by any resource property in a ascending or descending order. You can query against the following value types: numerical, text, Booleans, and timestamps.
   */
  search(params: SageMaker.Types.SearchRequest, callback?: (err: AWSError, data: SageMaker.Types.SearchResponse) => void): Request<SageMaker.Types.SearchResponse, AWSError>;
  /**
   * Finds Amazon SageMaker resources that match a search query. Matching resource objects are returned as a list of SearchResult objects in the response. You can sort the search results by any resource property in a ascending or descending order. You can query against the following value types: numerical, text, Booleans, and timestamps.
   */
  search(callback?: (err: AWSError, data: SageMaker.Types.SearchResponse) => void): Request<SageMaker.Types.SearchResponse, AWSError>;
  /**
   * Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the notebook instance status to InService. A notebook instance's status must be InService before you can connect to your Jupyter notebook. 
   */
  startNotebookInstance(params: SageMaker.Types.StartNotebookInstanceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the notebook instance status to InService. A notebook instance's status must be InService before you can connect to your Jupyter notebook. 
   */
  startNotebookInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
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
   * Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume.  To access data on the ML storage volume for a notebook instance that has been terminated, call the StartNotebookInstance API. StartNotebookInstance launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. 
   */
  stopNotebookInstance(params: SageMaker.Types.StopNotebookInstanceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume.  To access data on the ML storage volume for a notebook instance that has been terminated, call the StartNotebookInstance API. StartNotebookInstance launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. 
   */
  stopNotebookInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost.  Training algorithms provided by Amazon SageMaker save the intermediate results of a model training job. This intermediate data is a valid model artifact. You can use the model artifacts that are saved when Amazon SageMaker stops a training job to create a model.  When it receives a StopTrainingJob request, Amazon SageMaker changes the status of the job to Stopping. After Amazon SageMaker stops the job, it sets the status to Stopped.
   */
  stopTrainingJob(params: SageMaker.Types.StopTrainingJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost.  Training algorithms provided by Amazon SageMaker save the intermediate results of a model training job. This intermediate data is a valid model artifact. You can use the model artifacts that are saved when Amazon SageMaker stops a training job to create a model.  When it receives a StopTrainingJob request, Amazon SageMaker changes the status of the job to Stopping. After Amazon SageMaker stops the job, it sets the status to Stopped.
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
   * Deploys the new EndpointConfig specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous EndpointConfig (there is no availability loss).  When Amazon SageMaker receives the request, it sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API.   You cannot update an endpoint with the current EndpointConfig. To update an endpoint, you must create a new EndpointConfig. 
   */
  updateEndpoint(params: SageMaker.Types.UpdateEndpointInput, callback?: (err: AWSError, data: SageMaker.Types.UpdateEndpointOutput) => void): Request<SageMaker.Types.UpdateEndpointOutput, AWSError>;
  /**
   * Deploys the new EndpointConfig specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous EndpointConfig (there is no availability loss).  When Amazon SageMaker receives the request, it sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API.   You cannot update an endpoint with the current EndpointConfig. To update an endpoint, you must create a new EndpointConfig. 
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
   * Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements. You can also update the VPC security groups.
   */
  updateNotebookInstance(params: SageMaker.Types.UpdateNotebookInstanceInput, callback?: (err: AWSError, data: SageMaker.Types.UpdateNotebookInstanceOutput) => void): Request<SageMaker.Types.UpdateNotebookInstanceOutput, AWSError>;
  /**
   * Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements. You can also update the VPC security groups.
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
     * The registry path of the Docker image that contains the training algorithm. For information about docker registry paths for built-in algorithms, see Algorithms Provided by Amazon SageMaker: Common Parameters.
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
     * The Amazon Resource Name (ARN) of a Lambda function implements the logic for annotation consolidation. For the built-in bounding box, image classification, semantic segmentation, and text classification task types, Amazon SageMaker Ground Truth provides the following Lambda functions:    Bounding box - Finds the most similar boxes from different workers based on the Jaccard index of the boxes.  arn:aws:lambda:us-east-1:432418664414:function:ACS-BoundingBox   arn:aws:lambda:us-east-2:266458841044:function:ACS-BoundingBox   arn:aws:lambda:us-west-2:081040173940:function:ACS-BoundingBox   arn:aws:lambda:eu-west-1:568282634449:function:ACS-BoundingBox   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-BoundingBox     Image classification - Uses a variant of the Expectation Maximization approach to estimate the true class of an image based on annotations from individual workers.  arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClass   arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClass   arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClass   arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClass   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClass     Semantic segmentation - Treats each pixel in an image as a multi-class classification and treats pixel annotations from workers as "votes" for the correct label.  arn:aws:lambda:us-east-1:432418664414:function:ACS-SemanticSegmentation   arn:aws:lambda:us-east-2:266458841044:function:ACS-SemanticSegmentation   arn:aws:lambda:us-west-2:081040173940:function:ACS-SemanticSegmentation   arn:aws:lambda:eu-west-1:568282634449:function:ACS-SemanticSegmentation   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-SemanticSegmentation     Text classification - Uses a variant of the Expectation Maximization approach to estimate the true class of text based on annotations from individual workers.  arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClass   arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClass   arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClass   arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClass   arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClass    For more information, see Annotation Consolidation.
     */
    AnnotationConsolidationLambdaArn: LambdaFunctionArn;
  }
  export type ArnOrName = string;
  export type AssemblyType = "None"|"Line"|string;
  export type AttributeName = string;
  export type AttributeNames = AttributeName[];
  export type BatchStrategy = "MultiRecord"|"SingleRecord"|string;
  export type Boolean = boolean;
  export type BooleanOperator = "And"|"Or"|string;
  export type Branch = string;
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
  export type CognitoClientId = string;
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
    ClientId: CognitoClientId;
  }
  export type CognitoUserGroup = string;
  export type CognitoUserPool = string;
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
     * The type of device that the model will run on after compilation has completed.
     */
    CompilationTargetDevice: TargetDevice;
    /**
     * The time when the model compilation job was last modified.
     */
    LastModifiedTime?: LastModifiedTime;
    /**
     * The status of the model compilation job.
     */
    CompilationJobStatus: CompilationJobStatus;
  }
  export type CompressionType = "None"|"Gzip"|string;
  export type CompressionTypes = CompressionType[];
  export interface ContainerDefinition {
    /**
     * The DNS host name for the container after Amazon SageMaker deploys it.
     */
    ContainerHostname?: ContainerHostname;
    /**
     * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored. If you are using your own custom algorithm instead of an algorithm provided by Amazon SageMaker, the inference code must meet Amazon SageMaker requirements. Amazon SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see Using Your Own Algorithms with Amazon SageMaker 
     */
    Image?: Image;
    /**
     * The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).  If you provide a value for this parameter, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide.
     */
    ModelDataUrl?: Url;
    /**
     * The environment variables to set in the Docker container. Each key and value in the Environment string to string map can have length of up to 1024. We support up to 16 entries in the map. 
     */
    Environment?: EnvironmentMap;
    /**
     * The name of the model package to use to create the model.
     */
    ModelPackageName?: ArnOrName;
  }
  export type ContainerDefinitionList = ContainerDefinition[];
  export type ContainerHostname = string;
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
     * The Amazon Resource Name (ARN) of an IIAMAM role that enables Amazon SageMaker to perform tasks on your behalf.  During model compilation, Amazon SageMaker needs your permission to:   Read input data from an S3 bucket   Write model artifacts to an S3 bucket   Write logs to Amazon CloudWatch Logs   Publish metrics to Amazon CloudWatch   You grant permissions for all of these tasks to an IAM role. To pass this role to Amazon SageMaker, the caller of this API must have the iam:PassRole permission. For more information, see Amazon SageMaker Roles. 
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
     * The duration allowed for model compilation.
     */
    StoppingCondition: StoppingCondition;
  }
  export interface CreateCompilationJobResponse {
    /**
     * If the action is successful, the service sends back an HTTP 200 response. Amazon SageMaker returns the following data in JSON format:    CompilationJobArn: The Amazon Resource Name (ARN) of the compiled job.  
     */
    CompilationJobArn: CompilationJobArn;
  }
  export interface CreateEndpointConfigInput {
    /**
     * The name of the endpoint configuration. You specify this name in a CreateEndpoint request. 
     */
    EndpointConfigName: EndpointConfigName;
    /**
     * An array of ProductionVariant objects, one for each model that you want to host at this endpoint.
     */
    ProductionVariants: ProductionVariantList;
    /**
     * An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide. 
     */
    Tags?: TagList;
    /**
     * The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
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
  export interface CreateHyperParameterTuningJobRequest {
    /**
     * The name of the tuning job. This name is the prefix for the names of all training jobs that this tuning job launches. The name must be unique within the same AWS account and AWS Region. The name must have { } to { } characters. Valid characters are a-z, A-Z, 0-9, and : + = @ _ % - (hyphen). The name is not case sensitive.
     */
    HyperParameterTuningJobName: HyperParameterTuningJobName;
    /**
     * The HyperParameterTuningJobConfig object that describes the tuning job, including the search strategy, the objective metric used to evaluate training jobs, ranges of parameters to search, and resource limits for the tuning job. For more information, see automatic-model-tuning 
     */
    HyperParameterTuningJobConfig: HyperParameterTuningJobConfig;
    /**
     * The HyperParameterTrainingJobDefinition object that describes the training jobs that this tuning job launches, including static hyperparameters, input data configuration, output data configuration, resource configuration, and stopping condition.
     */
    TrainingJobDefinition: HyperParameterTrainingJobDefinition;
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
     * The S3 URL of the file that defines the categories used to label the data objects. The file is a JSON structure in the following format:  {    "document-version": "2018-11-28"    "labels": [    {    "label": "label 1"    },    {    "label": "label 2"    },    ...    {    "label": "label n"    }    ]   } 
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
     * Configures the information required for human workers to complete a labeling task.
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
     * Isolates the model container. No inbound or outbound network calls can be made to or from the model container.  The Semantic Segmentation built-in algorithm does not support network isolation. 
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
     *  If you provide a AWS KMS key ID, Amazon SageMaker uses it to encrypt data at rest on the ML storage volume that is attached to your notebook instance. The KMS key you provide must be enabled. For information, see Enabling and Disabling Keys in the AWS Key Management Service Developer Guide.
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
     * An array of Channel objects. Each channel is a named input source. InputDataConfig describes the input data and its location.  Algorithms can accept input data from one or more channels. For example, an algorithm might have two channels of input data, training_data and validation_data. The configuration for each channel provides the S3 location where the input data is stored. It also provides information about the stored data: the MIME type, compression method, and whether the data is wrapped in RecordIO format.  Depending on the input mode that the algorithm supports, Amazon SageMaker either copies input data files from an S3 bucket to a local directory in the Docker container, or makes it available as input streams. 
     */
    InputDataConfig?: InputDataConfig;
    /**
     * Specifies the path to the S3 bucket where you want to store model artifacts. Amazon SageMaker creates subfolders for the artifacts. 
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
     * Sets a duration for training. Use this parameter to cap model training costs. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts.  When Amazon SageMaker terminates a job because the stopping condition has been met, training algorithms provided by Amazon SageMaker save the intermediate results of the job. This intermediate data is a valid model artifact. You can use it to create a model using the CreateModel API. 
     */
    StoppingCondition: StoppingCondition;
    /**
     * An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide. 
     */
    Tags?: TagList;
    /**
     * Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If you enable network isolation for training jobs that are configured to use a VPC, Amazon SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.  The Semantic Segmentation built-in algorithm does not support network isolation. 
     */
    EnableNetworkIsolation?: Boolean;
    /**
     * To encrypt all communications between ML compute instances in distributed training, choose True,. Encryption provides greater security for distributed training, but training can take longer because of additional communications between ML compute instances.
     */
    EnableInterContainerTrafficEncryption?: Boolean;
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
     * The maximum number of parallel requests that can be sent to an algorithm container on an instance. This is good for algorithms that implement multiple workers on larger instances . The default value is 1. To allow Amazon SageMaker to determine the appropriate number for MaxConcurrentTransforms, do not set the value in the API.
     */
    MaxConcurrentTransforms?: MaxConcurrentTransforms;
    /**
     * The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata). The value in MaxPayloadInMB must be greater or equal to the size of a single record. You can approximate the size of a record by dividing the size of your dataset by the number of records. Then multiply this value by the number of records you want in a mini-batch. We recommend to enter a slightly larger value than this to ensure the records fit within the maximum payload size. The default value is 6 MB.  For cases where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding, set the value to 0. This feature only works in supported algorithms. Currently, Amazon SageMaker built-in algorithms do not support this feature.
     */
    MaxPayloadInMB?: MaxPayloadInMB;
    /**
     * Determines the number of records to include in a mini-batch. If you want to include only one record in a mini-batch, specify SingleRecord.. If you want mini-batches to contain a maximum of the number of records specified in the MaxPayloadInMB parameter, specify MultiRecord.  If you set SplitType to Line and BatchStrategy to MultiRecord, a batch transform automatically splits your input data into the specified payload size. There's no need to split the dataset into smaller files or to use larger payload sizes unless the records in your dataset are very large.
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
     * (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
     */
    Tags?: TagList;
  }
  export interface CreateTransformJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the transform job.
     */
    TransformJobArn: TransformJobArn;
  }
  export interface CreateWorkteamRequest {
    /**
     * The name of the work team. Use this name to identify the work team.
     */
    WorkteamName: WorkteamName;
    /**
     * A list of MemberDefinition objects that contains objects that identify the Amazon Cognito user pool that makes up the work team. For more information, see Amazon Cognito User Pools. All of the CognitoMemberDefinition objects that make up the member definition must have the same ClientId and UserPool values.
     */
    MemberDefinitions: MemberDefinitions;
    /**
     * A description of the work team.
     */
    Description: String200;
    /**
     * 
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
  export type DataInputConfig = string;
  export interface DataSource {
    /**
     * The S3 location of the data source that is associated with a channel.
     */
    S3DataSource: S3DataSource;
  }
  export interface DeleteAlgorithmInput {
    /**
     * The name of the algorithm to delete.
     */
    AlgorithmName: EntityName;
  }
  export interface DeleteCodeRepositoryInput {
    /**
     * The name of the Git repository to delete.
     */
    CodeRepositoryName: EntityName;
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
    SpecifiedImage?: Image;
    /**
     * The specific digest path of the image hosted in this ProductionVariant.
     */
    ResolvedImage?: Image;
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
     * The duration allowed for model compilation.
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
  export interface DescribeHyperParameterTuningJobRequest {
    /**
     * The name of the tuning job to describe.
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
    TrainingJobDefinition: HyperParameterTrainingJobDefinition;
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
     * The S3 location of the JSON file that defines the categories used to label data objects. The file is a JSON structure in the following format:  {    "document-version": "2018-11-28"    "labels": [    {    "label": "label 1"    },    {    "label": "label 2"    },    ...    {    "label": "label n"    }    ]   } 
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
     * If True, no inbound or outbound network calls can be made to or from the model container.  The Semantic Segmentation built-in algorithm does not support network isolation. 
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
     * Describes whether Amazon SageMaker provides internet access to the notebook instance. If this value is set to Disabled, he notebook instance does not have internet access, and cannot connect to Amazon SageMaker training and endpoint services. For more information, see Notebook Instances Are Internet-Enabled by Default.
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
     * Information about the Amazon S3 location that is configured for storing model artifacts. 
     */
    ModelArtifacts: ModelArtifacts;
    /**
     * The status of the training job. Amazon SageMaker provides the following training job statuses:    InProgress - The training is in progress.    Completed - The training job has completed.    Failed - The training job has failed. To see the reason for the failure, see the FailureReason field in the response to a DescribeTrainingJobResponse call.    Stopping - The training job is stopping.    Stopped - The training job has stopped.   For more detailed information, see SecondaryStatus. 
     */
    TrainingJobStatus: TrainingJobStatus;
    /**
     *  Provides detailed information about the state of the training job. For detailed information on the secondary status of the training job, see StatusMessage under SecondaryStatusTransition. Amazon SageMaker provides primary statuses and secondary statuses that apply to each of them:  InProgress     Starting - Starting the training job.    Downloading - An optional stage for algorithms that support File training input mode. It indicates that data is being downloaded to the ML storage volumes.    Training - Training is in progress.    Uploading - Training is complete and the model artifacts are being uploaded to the S3 location.    Completed     Completed - The training job has completed.    Failed     Failed - The training job has failed. The reason for the failure is returned in the FailureReason field of DescribeTrainingJobResponse.    Stopped     MaxRuntimeExceeded - The job stopped because it exceeded the maximum allowed runtime.    Stopped - The training job has stopped.    Stopping     Stopping - Stopping the training job.      Valid values for SecondaryStatus are subject to change.   We no longer support the following secondary statuses:    LaunchingMLInstances     PreparingTrainingStack     DownloadingTrainingImage   
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
     * The condition under which to stop the training job. 
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
     * If you want to allow inbound or outbound network calls, except for calls between peers within a training cluster for distributed training, choose True. If you enable network isolation for training jobs that are configured to use a VPC, Amazon SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.  The Semantic Segmentation built-in algorithm does not support network isolation. 
     */
    EnableNetworkIsolation?: Boolean;
    /**
     * To encrypt all communications between ML compute instances in distributed training, specify True. Encryption provides greater security for distributed training, but training take longer because of the additional communications between ML compute instances.
     */
    EnableInterContainerTrafficEncryption?: Boolean;
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
     * If the transform job failed, the reason that it failed.
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
     * The maximum payload size, in MB, used in the transform job.
     */
    MaxPayloadInMB?: MaxPayloadInMB;
    /**
     *  If you want to include only one record in a batch, specify SingleRecord.. If you want batches to contain a maximum of the number of records specified in the MaxPayloadInMB parameter, specify MultiRecord.S
     */
    BatchStrategy?: BatchStrategy;
    /**
     * 
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
  export type DetailedAlgorithmStatus = "NotStarted"|"InProgress"|"Completed"|"Failed"|string;
  export type DetailedModelPackageStatus = "NotStarted"|"InProgress"|"Completed"|"Failed"|string;
  export type DirectInternetAccess = "Enabled"|"Disabled"|string;
  export type DisassociateAdditionalCodeRepositories = boolean;
  export type DisassociateDefaultCodeRepository = boolean;
  export type DisassociateNotebookInstanceAcceleratorTypes = boolean;
  export type DisassociateNotebookInstanceLifecycleConfig = boolean;
  export type Dollars = number;
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
     * The status of the endpoint.    OutOfService: Endpoint is not available to take incoming requests.    Creating: CreateEndpoint is executing.    Updating: UpdateEndpoint or UpdateEndpointWeightsAndCapacities is executing.    SystemUpdating: Endpoint is undergoing maintenance and cannot be updated or deleted or re-scaled until it has completed. This mainenance operation does not change any customer-specified values such as VPC config, KMS encryption, model, instance type, or instance count.    RollingBack: Endpoint fails to scale up or down or change its variant weight and is in the process of rolling back to its previous configuration. Once the rollback completes, endpoint returns to an InService status. This transitional status only applies to an endpoint that has autoscaling enabled and is undergoing variant weight or capacity changes as part of an UpdateEndpointWeightsAndCapacities call or when the UpdateEndpointWeightsAndCapacities operation is called explicitly.    InService: Endpoint is available to process incoming requests.    Deleting: DeleteEndpoint is executing.    Failed: Endpoint could not be created, updated, or re-scaled. Use DescribeEndpointOutput$FailureReason for information about the failure. DeleteEndpoint is the only operation that can be performed on a failed endpoint.   To get a list of endpoints with a specified status, use the ListEndpointsInput$StatusEquals filter.
     */
    EndpointStatus: EndpointStatus;
  }
  export type EndpointSummaryList = EndpointSummary[];
  export type EntityDescription = string;
  export type EntityName = string;
  export type EnvironmentKey = string;
  export type EnvironmentMap = {[key: string]: EnvironmentValue};
  export type EnvironmentValue = string;
  export type FailureReason = string;
  export interface Filter {
    /**
     * A property name. For example, TrainingJobName. For the list of valid property names returned in a search result for each supported resource, see TrainingJob properties. You must specify a valid property name for the resource.
     */
    Name: ResourcePropertyName;
    /**
     * A Boolean binary operator that is used to evaluate the filter. The operator field contains one of the following values:  Equals  The specified resource in Name equals the specified Value.  NotEquals  The specified resource in Name does not equal the specified Value.  GreaterThan  The specified resource in Name is greater than the specified Value. Not supported for text-based properties.  GreaterThanOrEqualTo  The specified resource in Name is greater than or equal to the specified Value. Not supported for text-based properties.  LessThan  The specified resource in Name is less than the specified Value. Not supported for text-based properties.  LessThanOrEqualTo  The specified resource in Name is less than or equal to the specified Value. Not supported for text-based properties.  Contains  Only supported for text-based properties. The word-list of the property contains the specified Value.   If you have specified a filter Value, the default is Equals.
     */
    Operator?: Operator;
    /**
     * A value used with Resource and Operator to determine if objects satisfy the filter's condition. For numerical properties, Value must be an integer or floating-point decimal. For timestamp properties, Value must be an ISO 8601 date-time string of the following format: YYYY-mm-dd'T'HH:MM:SS.
     */
    Value?: FilterValue;
  }
  export type FilterList = Filter[];
  export type FilterValue = string;
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
  export type Framework = "TENSORFLOW"|"MXNET"|"ONNX"|"PYTORCH"|"XGBOOST"|string;
  export interface GetSearchSuggestionsRequest {
    /**
     * The name of the Amazon SageMaker resource to Search for. The only valid Resource value is TrainingJob.
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
     * The Amazon Resource Name (ARN) of a Lambda function that is run before a data object is sent to a human worker. Use this function to provide input to a custom labeling job. For the built-in bounding box, image classification, semantic segmentation, and text classification task types, Amazon SageMaker Ground Truth provides the following Lambda functions:  US East (Northern Virginia) (us-east-1):     arn:aws:lambda:us-east-1:432418664414:function:PRE-BoundingBox     arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClass     arn:aws:lambda:us-east-1:432418664414:function:PRE-SemanticSegmentation     arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClass     US East (Ohio) (us-east-2):     arn:aws:lambda:us-east-2:266458841044:function:PRE-BoundingBox     arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClass     arn:aws:lambda:us-east-2:266458841044:function:PRE-SemanticSegmentation     arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClass     US West (Oregon) (us-west-2):     arn:aws:lambda:us-west-2:081040173940:function:PRE-BoundingBox     arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClass     arn:aws:lambda:us-west-2:081040173940:function:PRE-SemanticSegmentation     arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClass     EU (Ireland) (eu-west-1):     arn:aws:lambda:eu-west-1:568282634449:function:PRE-BoundingBox     arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClass     arn:aws:lambda:eu-west-1:568282634449:function:PRE-SemanticSegmentation     arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClass     Asia Pacific (Tokyo (ap-northeast-1):     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-BoundingBox     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClass     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-SemanticSegmentation     arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClass   
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
     * The length of time that a task remains available for labelling by human workers.
     */
    TaskAvailabilityLifetimeInSeconds?: TaskAvailabilityLifetimeInSeconds;
    /**
     * Defines the maximum number of data objects that can be labeled by human workers at the same time. Each object may have more than one worker at one time.
     */
    MaxConcurrentTaskCount?: MaxConcurrentTaskCount;
    /**
     * Configures how labels are consolidated across human workers.
     */
    AnnotationConsolidationConfig: AnnotationConsolidationConfig;
    /**
     * The price that you pay for each task performed by a public worker.
     */
    PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
  }
  export interface HyperParameterAlgorithmSpecification {
    /**
     *  The registry path of the Docker image that contains the training algorithm. For information about Docker registry paths for built-in algorithms, see Algorithms Provided by Amazon SageMaker: Common Parameters.
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
     * Sets a maximum duration for the training jobs that the tuning job launches. Use this parameter to limit model training costs.  To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts. When Amazon SageMaker terminates a job because the stopping condition has been met, training algorithms provided by Amazon SageMaker save the intermediate results of the job.
     */
    StoppingCondition: StoppingCondition;
    /**
     * Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If network isolation is used for training jobs that are configured to use a VPC, Amazon SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.  The Semantic Segmentation built-in algorithm does not support network isolation. 
     */
    EnableNetworkIsolation?: Boolean;
    /**
     * To encrypt all communications between ML compute instances in distributed training, specify True. Encryption provides greater security for distributed training, but training take longer because of the additional communications between ML compute instances.
     */
    EnableInterContainerTrafficEncryption?: Boolean;
  }
  export type HyperParameterTrainingJobSummaries = HyperParameterTrainingJobSummary[];
  export interface HyperParameterTrainingJobSummary {
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
     * Specifies the search strategy for hyperparameters. Currently, the only valid value is Bayesian.
     */
    Strategy: HyperParameterTuningJobStrategyType;
    /**
     * The HyperParameterTuningJobObjective object that specifies the objective metric for this tuning job.
     */
    HyperParameterTuningJobObjective: HyperParameterTuningJobObjective;
    /**
     * The ResourceLimits object that specifies the maximum number of training jobs and parallel training jobs for this tuning job.
     */
    ResourceLimits: ResourceLimits;
    /**
     * The ParameterRanges object that specifies the ranges of hyperparameters that this tuning job searches.
     */
    ParameterRanges: ParameterRanges;
    /**
     * Specifies whether to use early stopping for training jobs launched by the hyperparameter tuning job. This can be one of the following values (the default value is OFF):  OFF  Training jobs launched by the hyperparameter tuning job do not use early stopping.  AUTO  Amazon SageMaker stops training jobs launched by the hyperparameter tuning job when they are unlikely to perform better than previously completed training jobs. For more information, see Stop Training Jobs Early.  
     */
    TrainingJobEarlyStoppingType?: TrainingJobEarlyStoppingType;
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
  export type HyperParameterTuningJobStrategyType = "Bayesian"|string;
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
  export type Image = string;
  export type ImageDigest = string;
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
     * Specifies the name and shape of the expected data inputs for your trained model with a JSON dictionary form. The data inputs are InputConfig$Framework specific.     TensorFlow: You must specify the name and shape (NHWC format) of the expected data inputs using a dictionary format for your trained model. The dictionary formats required for the console and CLI are different.   Examples for one input:   If using the console, {"input":[1,1024,1024,3]}    If using the CLI, {\"input\":[1,1024,1024,3]}      Examples for two inputs:   If using the console, {"data1": [1,28,28,1], "data2":[1,28,28,1]}    If using the CLI, {\"data1\": [1,28,28,1], \"data2\":[1,28,28,1]}         MXNET/ONNX: You must specify the name and shape (NCHW format) of the expected data inputs in order using a dictionary format for your trained model. The dictionary formats required for the console and CLI are different.   Examples for one input:   If using the console, {"data":[1,3,1024,1024]}    If using the CLI, {\"data\":[1,3,1024,1024]}      Examples for two inputs:   If using the console, {"var1": [1,1,28,28], "var2":[1,1,28,28]}     If using the CLI, {\"var1\": [1,1,28,28], \"var2\":[1,1,28,28]}         PyTorch: You can either specify the name and shape (NCHW format) of expected data inputs in order using a dictionary format for your trained model or you can specify the shape only using a list format. The dictionary formats required for the console and CLI are different. The list formats for the console and CLI are the same.   Examples for one input in dictionary format:   If using the console, {"input0":[1,3,224,224]}    If using the CLI, {\"input0\":[1,3,224,224]}      Example for one input in list format: [[1,3,224,224]]    Examples for two inputs in dictionary format:   If using the console, {"input0":[1,3,224,224], "input1":[1,3,224,224]}    If using the CLI, {\"input0\":[1,3,224,224], \"input1\":[1,3,224,224]}       Example for two inputs in list format: [[1,3,224,224], [1,3,224,224]]       XGBOOST: input data name and shape are not needed.  
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
  export type JobReferenceCode = string;
  export type JobReferenceCodeContains = string;
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
     * Specifies the Amazon Resource Name (ARN) of the algorithm used for auto-labeling. You must select one of the following ARNs:    Image classification   arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/image-classification     Text classification   arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/text-classification     Object detection   arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/object-detection   
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
    S3DataSource: LabelingJobS3DataSource;
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
     * The AWS Key Management Service ID of the key used to encrypt the output data, if any.
     */
    KmsKeyId?: KmsKeyId;
  }
  export interface LabelingJobResourceConfig {
    /**
     * The AWS Key Management Service key ID for the key used to encrypt the output data, if any.
     */
    VolumeKmsKeyId?: KmsKeyId;
  }
  export interface LabelingJobS3DataSource {
    /**
     * The Amazon S3 location of the manifest file that describes the input data objects.
     */
    ManifestS3Uri: S3Uri;
  }
  export type LabelingJobStatus = "InProgress"|"Completed"|"Failed"|"Stopping"|"Stopped"|string;
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
  export interface ListEndpointConfigsInput {
    /**
     * The field to sort results by. The default is CreationTime.
     */
    SortBy?: EndpointConfigSortKey;
    /**
     * The sort order for results. The default is Ascending.
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
     * A filter that returns only endpoint configurations created after the specified time (timestamp).
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
     * The sort order for results. The default is Ascending.
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
     * A filter that returns only endpoints that were created after the specified time (timestamp).
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
     * The sort order for results. The default is Ascending.
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
     * A filter that returns only models created after the specified time (timestamp).
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
  export type MaxConcurrentTaskCount = number;
  export type MaxConcurrentTransforms = number;
  export type MaxHumanLabeledObjectCount = number;
  export type MaxNumberOfTrainingJobs = number;
  export type MaxParallelTrainingJobs = number;
  export type MaxPayloadInMB = number;
  export type MaxPercentageOfInputDatasetLabeled = number;
  export type MaxResults = number;
  export type MaxRuntimeInSeconds = number;
  export interface MemberDefinition {
    /**
     * The Amazon Cognito user group that is part of the work team.
     */
    CognitoMemberDefinition?: CognitoMemberDefinition;
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
    Image: Image;
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
  export type NetworkInterfaceId = string;
  export type NextToken = string;
  export type NotebookInstanceAcceleratorType = "ml.eia1.medium"|"ml.eia1.large"|"ml.eia1.xlarge"|string;
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
  export type Operator = "Equals"|"NotEquals"|"GreaterThan"|"GreaterThanOrEqualTo"|"LessThan"|"LessThanOrEqualTo"|"Contains"|string;
  export type OrderKey = "Ascending"|"Descending"|string;
  export interface OutputConfig {
    /**
     * Identifies the S3 path where you want Amazon SageMaker to store the model artifacts. For example, s3://bucket-name/key-name-prefix.
     */
    S3OutputLocation: S3Uri;
    /**
     * Identifies the device that you want to run your model on after it has been compiled. For example: ml_c5.
     */
    TargetDevice: TargetDevice;
  }
  export interface OutputDataConfig {
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. The KmsKeyId can be any of the following formats:    // KMS Key ID  "1234abcd-12ab-34cd-56ef-1234567890ab"    // Amazon Resource Name (ARN) of a KMS Key  "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"    // KMS Key Alias  "alias/ExampleAlias"    // Amazon Resource Name (ARN) of a KMS Key Alias  "arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"    If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see KMS-Managed Encryption Keys in the Amazon Simple Storage Service Developer Guide.  The KMS key policy must grant permission to the IAM role that you specify in your CreateTramsformJob request. For more information, see Using Key Policies in AWS KMS in the AWS Key Management Service Developer Guide.
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
  export interface ParentHyperParameterTuningJob {
    /**
     * The name of the hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job.
     */
    HyperParameterTuningJobName?: HyperParameterTuningJobName;
  }
  export type ParentHyperParameterTuningJobs = ParentHyperParameterTuningJob[];
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
     * The size of the Elastic Inference (EI) instance to use for the production variant. EI instances provide on-demand GPU computing for inference. For more information, see Using Elastic Inference in Amazon SageMaker. For more information, see Using Elastic Inference in Amazon SageMaker.
     */
    AcceleratorType?: ProductionVariantAcceleratorType;
  }
  export type ProductionVariantAcceleratorType = "ml.eia1.medium"|"ml.eia1.large"|"ml.eia1.xlarge"|string;
  export type ProductionVariantInstanceType = "ml.t2.medium"|"ml.t2.large"|"ml.t2.xlarge"|"ml.t2.2xlarge"|"ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.m5.large"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.12xlarge"|"ml.m5.24xlarge"|"ml.c4.large"|"ml.c4.xlarge"|"ml.c4.2xlarge"|"ml.c4.4xlarge"|"ml.c4.8xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|"ml.c5.large"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.18xlarge"|string;
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
     * Text that is part of a property's name. The property names of hyperparameter, metric, and tag key names that begin with the specified text in the PropertyNameHint.
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
     * Defines the amount of money paid to a worker in United States dollars.
     */
    AmountInUsd?: USD;
  }
  export type RealtimeInferenceInstanceTypes = ProductionVariantInstanceType[];
  export type RecordWrapper = "None"|"RecordIO"|string;
  export interface RenderUiTemplateRequest {
    /**
     * A Template object containing the worker UI template to render.
     */
    UiTemplate: UiTemplate;
    /**
     * A RenderableTask object containing a representative task to render.
     */
    Task: RenderableTask;
    /**
     * The Amazon Resource Name (ARN) that has access to the S3 objects that are used by the template.
     */
    RoleArn: RoleArn;
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
     * The size of the ML storage volume that you want to provision.  ML storage volumes store model artifacts and incremental states. Training algorithms might also use the ML storage volume for scratch space. If you want to store the training data in the ML storage volume, choose File as the TrainingInputMode in the algorithm specification.  You must specify sufficient ML storage for your scenario.    Amazon SageMaker supports only the General Purpose SSD (gp2) ML storage volume type.  
     */
    VolumeSizeInGB: VolumeSizeInGB;
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the training job. The VolumeKmsKeyId can be any of the following formats:   // KMS Key ID  "1234abcd-12ab-34cd-56ef-1234567890ab"    // Amazon Resource Name (ARN) of a KMS Key  "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
  }
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
  export type ResourceType = "TrainingJob"|string;
  export type ResponseMIMEType = string;
  export type ResponseMIMETypes = ResponseMIMEType[];
  export type RoleArn = string;
  export type S3DataDistribution = "FullyReplicated"|"ShardedByS3Key"|string;
  export interface S3DataSource {
    /**
     * If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects that match the specified key name prefix for model training.  If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for model training.  If you choose AugmentedManifestFile, S3Uri identifies an object that is an augmented manifest file in JSON lines format. This file contains the data you want to use for model training. AugmentedManifestFile can only be used if the Channel's input mode is Pipe.
     */
    S3DataType: S3DataType;
    /**
     * Depending on the value specified for the S3DataType, identifies either a key name prefix or a manifest. For example:     A key name prefix might look like this: s3://bucketname/exampleprefix.     A manifest might look like this: s3://bucketname/example.manifest   The manifest is an S3 object which is a JSON file with the following format:   [    {"prefix": "s3://customer_bucket/some/prefix/"},    "relative/path/to/custdata-1",    "relative/path/custdata-2",    ...    ]   The preceding JSON matches the following s3Uris:   s3://customer_bucket/some/prefix/relative/path/to/custdata-1   s3://customer_bucket/some/prefix/relative/path/custdata-2   ...  The complete set of s3uris in this manifest is the input data for the channel for this datasource. The object that each s3uris points to must be readable by the IAM role that Amazon SageMaker uses to perform tasks on your behalf.   
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
     * A TrainingJob object that is returned as part of a Search request.
     */
    TrainingJob?: TrainingJob;
  }
  export interface SearchRequest {
    /**
     * The name of the Amazon SageMaker resource to search for. Currently, the only valid Resource value is TrainingJob.
     */
    Resource: ResourceType;
    /**
     * A Boolean conditional statement. Resource objects must satisfy this condition to be included in search results. You must provide at least one subexpression, filter, or nested filter. The maximum number of recursive SubExpressions, NestedFilters, and Filters that can be included in a SearchExpression object is 50.
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
     * If more than MaxResults resource objects match the specified SearchExpression, the SearchResponse includes a NextToken. The NextToken can be passed to the next SearchRequest to continue retrieving results for the specified SearchExpression and Sort parameters.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in a SearchResponse.
     */
    MaxResults?: MaxResults;
  }
  export interface SearchResponse {
    /**
     * A list of SearchResult objects.
     */
    Results?: SearchResultsList;
    /**
     * If the result of the previous Search request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export type SearchResultsList = SearchRecord[];
  export type SearchSortOrder = "Ascending"|"Descending"|string;
  export type SecondaryStatus = "Starting"|"LaunchingMLInstances"|"PreparingTrainingStack"|"Downloading"|"DownloadingTrainingImage"|"Training"|"Uploading"|"Stopping"|"Stopped"|"MaxRuntimeExceeded"|"Completed"|"Failed"|string;
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
     * A detailed description of the progress within a secondary status.  Amazon SageMaker provides secondary statuses and status messages that apply to each of them:  Starting    Starting the training job.   Launching requested ML instances.   Insufficient capacity error from EC2 while launching instances, retrying!   Launched instance was unhealthy, replacing it!   Preparing the instances for training.    Training    Downloading the training image.   Training image download completed. Training in progress.      Status messages are subject to change. Therefore, we recommend not including them in code that programmatically initiates actions. For examples, don't use status messages in if statements.  To have an overview of your training job's progress, view TrainingJobStatus and SecondaryStatus in DescribeTrainingJobResponse, and StatusMessage together. For example, at the start of a training job, you might see the following:    TrainingJobStatus - InProgress    SecondaryStatus - Training    StatusMessage - Downloading the training image  
     */
    StatusMessage?: StatusMessage;
  }
  export type SecondaryStatusTransitions = SecondaryStatusTransition[];
  export type SecretArn = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type Seed = number;
  export type SessionExpirationDurationInSeconds = number;
  export interface ShuffleConfig {
    /**
     * Determines the shuffling order in ShuffleConfig value.
     */
    Seed: Seed;
  }
  export type SortBy = "Name"|"CreationTime"|"Status"|string;
  export type SortOrder = "Ascending"|"Descending"|string;
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
  export type SplitType = "None"|"Line"|"RecordIO"|"TFRecord"|string;
  export interface StartNotebookInstanceInput {
    /**
     * The name of the notebook instance to start.
     */
    NotebookInstanceName: NotebookInstanceName;
  }
  export type StatusMessage = string;
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
  export interface StopNotebookInstanceInput {
    /**
     * The name of the notebook instance to terminate.
     */
    NotebookInstanceName: NotebookInstanceName;
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
     * The maximum length of time, in seconds, that the training job can run. If model training does not complete during this time, Amazon SageMaker ends the job. If value is not specified, default value is 1 day. Maximum value is 28 days.
     */
    MaxRuntimeInSeconds?: MaxRuntimeInSeconds;
  }
  export type String = string;
  export type String200 = string;
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
     * 
     */
    ListingId?: String;
  }
  export type SubscribedWorkteams = SubscribedWorkteam[];
  export type Success = boolean;
  export interface SuggestionQuery {
    /**
     * A type of SuggestionQuery. Defines a property name hint. Only property names that match the specified hint are included in the response.
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
  export type TargetDevice = "ml_m4"|"ml_m5"|"ml_c4"|"ml_c5"|"ml_p2"|"ml_p3"|"jetson_tx1"|"jetson_tx2"|"rasp3b"|"deeplens"|string;
  export type TaskAvailabilityLifetimeInSeconds = number;
  export type TaskCount = number;
  export type TaskDescription = string;
  export type TaskInput = string;
  export type TaskKeyword = string;
  export type TaskKeywords = TaskKeyword[];
  export type TaskTimeLimitInSeconds = number;
  export type TaskTitle = string;
  export type TemplateContent = string;
  export type TenthFractionsOfACent = number;
  export type Timestamp = Date;
  export type TrainingInputMode = "Pipe"|"File"|string;
  export type TrainingInstanceCount = number;
  export type TrainingInstanceType = "ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.m5.large"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.12xlarge"|"ml.m5.24xlarge"|"ml.c4.xlarge"|"ml.c4.2xlarge"|"ml.c4.4xlarge"|"ml.c4.8xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.18xlarge"|string;
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
     * The condition under which to stop the training job.
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
     * Sets a duration for training. Use this parameter to cap model training costs. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts.
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
    TrainingImage: Image;
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
     * Indicates whether the algorithm supports distributed training. If set to false, buyers can’t request more than one instance during training.
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
     * The method to use to split the transform job's data into smaller batches. If you don't want to split the data, specify None. If you want to split records on a newline character boundary, specify Line. To split records according to the RecordIO format, specify RecordIO. The default value is None.  Amazon SageMaker sends the maximum number of records per batch in each request up to the MaxPayloadInMB limit. For more information, see RecordIO data format.  For information about the RecordIO format, see Data Format. 
     */
    SplitType?: SplitType;
  }
  export type TransformInstanceCount = number;
  export type TransformInstanceType = "ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.c4.xlarge"|"ml.c4.2xlarge"|"ml.c4.4xlarge"|"ml.c4.8xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.18xlarge"|"ml.m5.large"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.12xlarge"|"ml.m5.24xlarge"|string;
  export type TransformInstanceTypes = TransformInstanceType[];
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
     * The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job. For example, s3://bucket-name/key-name-prefix. For every S3 object used as input for the transform job, the transformed data is stored in a corresponding subfolder in the location under the output prefix. For example, for the input data s3://bucket-name/input-name-prefix/dataset01/data.csv the transformed data is stored at s3://bucket-name/key-name-prefix/dataset01/. This is based on the original name, as a series of .part files (.part0001, part0002, etc.).
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
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. The KmsKeyId can be any of the following formats:    // KMS Key ID  "1234abcd-12ab-34cd-56ef-1234567890ab"    // Amazon Resource Name (ARN) of a KMS Key  "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"    // KMS Key Alias  "alias/ExampleAlias"    // Amazon Resource Name (ARN) of a KMS Key Alias  "arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"    If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see KMS-Managed Encryption Keys in the Amazon Simple Storage Service Developer Guide.  The KMS key policy must grant permission to the IAM role that you specify in your CreateTramsformJob request. For more information, see Using Key Policies in AWS KMS in the AWS Key Management Service Developer Guide.
     */
    KmsKeyId?: KmsKeyId;
  }
  export interface TransformResources {
    /**
     * The ML compute instance type for the transform job. For using built-in algorithms to transform moderately sized datasets, ml.m4.xlarge or ml.m5.large should suffice. There is no default value for InstanceType.
     */
    InstanceType: TransformInstanceType;
    /**
     * The number of ML compute instances to use in the transform job. For distributed transform, provide a value greater than 1. The default value is 1.
     */
    InstanceCount: TransformInstanceCount;
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the batch transform job. The VolumeKmsKeyId can be any of the following formats:   // KMS Key ID  "1234abcd-12ab-34cd-56ef-1234567890ab"    // Amazon Resource Name (ARN) of a KMS Key  "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
  }
  export interface TransformS3DataSource {
    /**
     * If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for batch transform.  If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for batch transform. 
     */
    S3DataType: S3DataType;
    /**
     * Depending on the value specified for the S3DataType, identifies either a key name prefix or a manifest. For example:    A key name prefix might look like this: s3://bucketname/exampleprefix.     A manifest might look like this: s3://bucketname/example.manifest   The manifest is an S3 object which is a JSON file with the following format:   [    {"prefix": "s3://customer_bucket/some/prefix/"},    "relative/path/to/custdata-1",    "relative/path/custdata-2",    ...    ]   The preceding JSON matches the following S3Uris:   s3://customer_bucket/some/prefix/relative/path/to/custdata-1   s3://customer_bucket/some/prefix/relative/path/custdata-1   ...   The complete set of S3Uris in this manifest constitutes the input data for the channel for this datasource. The object that each S3Uris points to must be readable by the IAM role that Amazon SageMaker uses to perform tasks on your behalf.  
     */
    S3Uri: S3Uri;
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
     * The Amazon S3 bucket location of the UI template. For more information about the contents of a UI template, see  Creating Your Custom Labeling Task Template.
     */
    UiTemplateS3Uri: S3Uri;
  }
  export interface UiTemplate {
    /**
     * The content of the Liquid template for the worker user interface.
     */
    Content: TemplateContent;
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
  export interface UpdateEndpointInput {
    /**
     * The name of the endpoint whose configuration you want to update.
     */
    EndpointName: EndpointName;
    /**
     * The name of the new endpoint configuration.
     */
    EndpointConfigName: EndpointConfigName;
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
     * Set to true to remove the notebook instance lifecycle configuration currently associated with the notebook instance.
     */
    DisassociateLifecycleConfig?: DisassociateNotebookInstanceLifecycleConfig;
    /**
     * The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB.
     */
    VolumeSizeInGB?: NotebookInstanceVolumeSizeInGB;
    /**
     * The Git repository to associate with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see Associating Git Repositories with Amazon SageMaker Notebook Instances.
     */
    DefaultCodeRepository?: CodeRepositoryNameOrUrl;
    /**
     * An array of up to three Git repositories to associate with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository.. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see Associating Git Repositories with Amazon SageMaker Notebook Instances.
     */
    AdditionalCodeRepositories?: AdditionalCodeRepositoryNamesOrUrls;
    /**
     * A list of the Elastic Inference (EI) instance types to associate with this notebook instance. Currently only one EI instance type can be associated with a notebook instance. For more information, see Using Elastic Inference in Amazon SageMaker.
     */
    AcceleratorTypes?: NotebookInstanceAcceleratorTypes;
    /**
     * A list of the Elastic Inference (EI) instance types to remove from this notebook instance.
     */
    DisassociateAcceleratorTypes?: DisassociateNotebookInstanceAcceleratorTypes;
    /**
     * The name or URL of the default Git repository to remove from this notebook instance.
     */
    DisassociateDefaultCodeRepository?: DisassociateDefaultCodeRepository;
    /**
     * A list of names or URLs of the default Git repositories to remove from this notebook instance.
     */
    DisassociateAdditionalCodeRepositories?: DisassociateAdditionalCodeRepositories;
  }
  export interface UpdateNotebookInstanceLifecycleConfigInput {
    /**
     * The name of the lifecycle configuration.
     */
    NotebookInstanceLifecycleConfigName: NotebookInstanceLifecycleConfigName;
    /**
     * The shell script that runs only once, when you create a notebook instance
     */
    OnCreate?: NotebookInstanceLifecycleConfigList;
    /**
     * The shell script that runs every time you start a notebook instance, including when you create the notebook instance.
     */
    OnStart?: NotebookInstanceLifecycleConfigList;
  }
  export interface UpdateNotebookInstanceLifecycleConfigOutput {
  }
  export interface UpdateNotebookInstanceOutput {
  }
  export interface UpdateWorkteamRequest {
    /**
     * The name of the work team to update.
     */
    WorkteamName: WorkteamName;
    /**
     * A list of MemberDefinition objects that contain the updated work team members.
     */
    MemberDefinitions?: MemberDefinitions;
    /**
     * An updated description for the work team.
     */
    Description?: String200;
  }
  export interface UpdateWorkteamResponse {
    /**
     * A Workteam object that describes the updated work team.
     */
    Workteam: Workteam;
  }
  export type Url = string;
  export type VariantName = string;
  export type VariantWeight = number;
  export type VolumeSizeInGB = number;
  export interface VpcConfig {
    /**
     * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
     */
    SecurityGroupIds: VpcSecurityGroupIds;
    /**
     * The ID of the subnets in the VPC to which you want to connect your training job or model. 
     */
    Subnets: Subnets;
  }
  export type VpcSecurityGroupIds = SecurityGroupId[];
  export interface Workteam {
    /**
     * The name of the work team.
     */
    WorkteamName: WorkteamName;
    /**
     * The Amazon Cognito user groups that make up the work team.
     */
    MemberDefinitions: MemberDefinitions;
    /**
     * The Amazon Resource Name (ARN) that identifies the work team.
     */
    WorkteamArn: WorkteamArn;
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
