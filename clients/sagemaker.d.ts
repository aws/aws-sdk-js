import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
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
   * Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add tags to notebook instances, training jobs, models, endpoint configurations, and endpoints.  Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide. 
   */
  addTags(params: SageMaker.Types.AddTagsInput, callback?: (err: AWSError, data: SageMaker.Types.AddTagsOutput) => void): Request<SageMaker.Types.AddTagsOutput, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add tags to notebook instances, training jobs, models, endpoint configurations, and endpoints.  Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide. 
   */
  addTags(callback?: (err: AWSError, data: SageMaker.Types.AddTagsOutput) => void): Request<SageMaker.Types.AddTagsOutput, AWSError>;
  /**
   * Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the CreateEndpointConfig API.    Use this API only for hosting models using Amazon SageMaker hosting services.   The endpoint name must be unique within an AWS Region in your AWS account.  When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them.  When Amazon SageMaker receives the request, it sets the endpoint status to Creating. After it creates the endpoint, it sets the status to InService. Amazon SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the DescribeEndpoint API. For an example, see Exercise 1: Using the K-Means Algorithm Provided by Amazon SageMaker. 
   */
  createEndpoint(params: SageMaker.Types.CreateEndpointInput, callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointOutput) => void): Request<SageMaker.Types.CreateEndpointOutput, AWSError>;
  /**
   * Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the CreateEndpointConfig API.    Use this API only for hosting models using Amazon SageMaker hosting services.   The endpoint name must be unique within an AWS Region in your AWS account.  When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them.  When Amazon SageMaker receives the request, it sets the endpoint status to Creating. After it creates the endpoint, it sets the status to InService. Amazon SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the DescribeEndpoint API. For an example, see Exercise 1: Using the K-Means Algorithm Provided by Amazon SageMaker. 
   */
  createEndpoint(callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointOutput) => void): Request<SageMaker.Types.CreateEndpointOutput, AWSError>;
  /**
   * Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want Amazon SageMaker to provision. Then you call the CreateEndpoint API.    Use this API only if you want to use Amazon SageMaker hosting services to deploy models into production.   In the request, you define one or more ProductionVariants, each of which identifies a model. Each ProductionVariant parameter also describes the resources that you want Amazon SageMaker to provision. This includes the number and type of ML compute instances to deploy.  If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. 
   */
  createEndpointConfig(params: SageMaker.Types.CreateEndpointConfigInput, callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointConfigOutput) => void): Request<SageMaker.Types.CreateEndpointConfigOutput, AWSError>;
  /**
   * Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want Amazon SageMaker to provision. Then you call the CreateEndpoint API.    Use this API only if you want to use Amazon SageMaker hosting services to deploy models into production.   In the request, you define one or more ProductionVariants, each of which identifies a model. Each ProductionVariant parameter also describes the resources that you want Amazon SageMaker to provision. This includes the number and type of ML compute instances to deploy.  If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. 
   */
  createEndpointConfig(callback?: (err: AWSError, data: SageMaker.Types.CreateEndpointConfigOutput) => void): Request<SageMaker.Types.CreateEndpointConfigOutput, AWSError>;
  /**
   * Creates a model in Amazon SageMaker. In the request, you name the model and describe one or more containers. For each container, you specify the docker image containing inference code, artifacts (from prior training), and custom environment map that the inference code uses when you deploy the model into production.  Use this API to create a model only if you want to use Amazon SageMaker hosting services. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API.  Amazon SageMaker then deploys all of the containers that you defined for the model in the hosting environment.  In the CreateModel request, you must define a container with the PrimaryContainer parameter.  In the request, you also provide an IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other AWS resources, you grant necessary permissions via this role.
   */
  createModel(params: SageMaker.Types.CreateModelInput, callback?: (err: AWSError, data: SageMaker.Types.CreateModelOutput) => void): Request<SageMaker.Types.CreateModelOutput, AWSError>;
  /**
   * Creates a model in Amazon SageMaker. In the request, you name the model and describe one or more containers. For each container, you specify the docker image containing inference code, artifacts (from prior training), and custom environment map that the inference code uses when you deploy the model into production.  Use this API to create a model only if you want to use Amazon SageMaker hosting services. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API.  Amazon SageMaker then deploys all of the containers that you defined for the model in the hosting environment.  In the CreateModel request, you must define a container with the PrimaryContainer parameter.  In the request, you also provide an IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other AWS resources, you grant necessary permissions via this role.
   */
  createModel(callback?: (err: AWSError, data: SageMaker.Types.CreateModelOutput) => void): Request<SageMaker.Types.CreateModelOutput, AWSError>;
  /**
   * Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook.  In a CreateNotebookInstance request, specify the type of ML compute instance that you want to run. Amazon SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance.  Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use Amazon SageMaker with a specific algorithm or with a machine learning framework.  After receiving the request, Amazon SageMaker does the following:   Creates a network interface in the Amazon SageMaker VPC.   (Option) If you specified SubnetId, Amazon SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, Amazon SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.   Launches an EC2 instance of the type specified in the request in the Amazon SageMaker VPC. If you specified SubnetId of your VPC, Amazon SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.   After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN). After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and validate hosted models.  For more information, see How It Works. 
   */
  createNotebookInstance(params: SageMaker.Types.CreateNotebookInstanceInput, callback?: (err: AWSError, data: SageMaker.Types.CreateNotebookInstanceOutput) => void): Request<SageMaker.Types.CreateNotebookInstanceOutput, AWSError>;
  /**
   * Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook.  In a CreateNotebookInstance request, specify the type of ML compute instance that you want to run. Amazon SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance.  Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use Amazon SageMaker with a specific algorithm or with a machine learning framework.  After receiving the request, Amazon SageMaker does the following:   Creates a network interface in the Amazon SageMaker VPC.   (Option) If you specified SubnetId, Amazon SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, Amazon SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.   Launches an EC2 instance of the type specified in the request in the Amazon SageMaker VPC. If you specified SubnetId of your VPC, Amazon SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.   After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN). After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and validate hosted models.  For more information, see How It Works. 
   */
  createNotebookInstance(callback?: (err: AWSError, data: SageMaker.Types.CreateNotebookInstanceOutput) => void): Request<SageMaker.Types.CreateNotebookInstanceOutput, AWSError>;
  /**
   * Creates a lifecycle configuration that you can associate with a notebook instance. A lifecycle configuration is a collection of shell scripts that run when you create or start a notebook instance. Each lifecycle configuration script has a limit of 16384 characters. The value of the $PATH environment variable that is available to both scripts is /sbin:bin:/usr/sbin:/usr/bin. View CloudWatch Logs for notebook instance lifecycle configurations in log group /aws/sagemaker/NotebookInstances in log stream [notebook-instance-name]/[LifecycleConfigHook]. Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started. For information about notebook instance lifestyle configurations, see notebook-lifecycle-config.
   */
  createNotebookInstanceLifecycleConfig(params: SageMaker.Types.CreateNotebookInstanceLifecycleConfigInput, callback?: (err: AWSError, data: SageMaker.Types.CreateNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.CreateNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Creates a lifecycle configuration that you can associate with a notebook instance. A lifecycle configuration is a collection of shell scripts that run when you create or start a notebook instance. Each lifecycle configuration script has a limit of 16384 characters. The value of the $PATH environment variable that is available to both scripts is /sbin:bin:/usr/sbin:/usr/bin. View CloudWatch Logs for notebook instance lifecycle configurations in log group /aws/sagemaker/NotebookInstances in log stream [notebook-instance-name]/[LifecycleConfigHook]. Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started. For information about notebook instance lifestyle configurations, see notebook-lifecycle-config.
   */
  createNotebookInstanceLifecycleConfig(callback?: (err: AWSError, data: SageMaker.Types.CreateNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.CreateNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Returns a URL that you can use to connect to the Juypter server from a notebook instance. In the Amazon SageMaker console, when you choose Open next to a notebook instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page. 
   */
  createPresignedNotebookInstanceUrl(params: SageMaker.Types.CreatePresignedNotebookInstanceUrlInput, callback?: (err: AWSError, data: SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput) => void): Request<SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput, AWSError>;
  /**
   * Returns a URL that you can use to connect to the Juypter server from a notebook instance. In the Amazon SageMaker console, when you choose Open next to a notebook instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page. 
   */
  createPresignedNotebookInstanceUrl(callback?: (err: AWSError, data: SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput) => void): Request<SageMaker.Types.CreatePresignedNotebookInstanceUrlOutput, AWSError>;
  /**
   *  Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a deep learning service other than Amazon SageMaker, provided that you know how to use them for inferences.  In the request body, you provide the following:     AlgorithmSpecification - Identifies the training algorithm to use.     HyperParameters - Specify these algorithm-specific parameters to influence the quality of the final model. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see Algorithms.     InputDataConfig - Describes the training dataset and the Amazon S3 location where it is stored.    OutputDataConfig - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results of model training.      ResourceConfig - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance.     RoleARN - The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete model training.     StoppingCondition - Sets a duration for training. Use this parameter to cap model training costs.     For more information about Amazon SageMaker, see How It Works. 
   */
  createTrainingJob(params: SageMaker.Types.CreateTrainingJobRequest, callback?: (err: AWSError, data: SageMaker.Types.CreateTrainingJobResponse) => void): Request<SageMaker.Types.CreateTrainingJobResponse, AWSError>;
  /**
   *  Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify.  If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a deep learning service other than Amazon SageMaker, provided that you know how to use them for inferences.  In the request body, you provide the following:     AlgorithmSpecification - Identifies the training algorithm to use.     HyperParameters - Specify these algorithm-specific parameters to influence the quality of the final model. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see Algorithms.     InputDataConfig - Describes the training dataset and the Amazon S3 location where it is stored.    OutputDataConfig - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results of model training.      ResourceConfig - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance.     RoleARN - The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete model training.     StoppingCondition - Sets a duration for training. Use this parameter to cap model training costs.     For more information about Amazon SageMaker, see How It Works. 
   */
  createTrainingJob(callback?: (err: AWSError, data: SageMaker.Types.CreateTrainingJobResponse) => void): Request<SageMaker.Types.CreateTrainingJobResponse, AWSError>;
  /**
   * Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the endpoint was created. 
   */
  deleteEndpoint(params: SageMaker.Types.DeleteEndpointInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the endpoint was created. 
   */
  deleteEndpoint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint configuration. The DeleteEndpoingConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration. 
   */
  deleteEndpointConfig(params: SageMaker.Types.DeleteEndpointConfigInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an endpoint configuration. The DeleteEndpoingConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration. 
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
   * Deletes the specified tags from an Amazon SageMaker resource. To list a resource's tags, use the ListTags API. 
   */
  deleteTags(params: SageMaker.Types.DeleteTagsInput, callback?: (err: AWSError, data: SageMaker.Types.DeleteTagsOutput) => void): Request<SageMaker.Types.DeleteTagsOutput, AWSError>;
  /**
   * Deletes the specified tags from an Amazon SageMaker resource. To list a resource's tags, use the ListTags API. 
   */
  deleteTags(callback?: (err: AWSError, data: SageMaker.Types.DeleteTagsOutput) => void): Request<SageMaker.Types.DeleteTagsOutput, AWSError>;
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
   * Describes a model that you created using the CreateModel API.
   */
  describeModel(params: SageMaker.Types.DescribeModelInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeModelOutput) => void): Request<SageMaker.Types.DescribeModelOutput, AWSError>;
  /**
   * Describes a model that you created using the CreateModel API.
   */
  describeModel(callback?: (err: AWSError, data: SageMaker.Types.DescribeModelOutput) => void): Request<SageMaker.Types.DescribeModelOutput, AWSError>;
  /**
   * Returns information about a notebook instance.
   */
  describeNotebookInstance(params: SageMaker.Types.DescribeNotebookInstanceInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Returns information about a notebook instance.
   */
  describeNotebookInstance(callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Returns a description of a notebook instance lifecycle configuration. For information about notebook instance lifestyle configurations, see notebook-lifecycle-config.
   */
  describeNotebookInstanceLifecycleConfig(params: SageMaker.Types.DescribeNotebookInstanceLifecycleConfigInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Returns a description of a notebook instance lifecycle configuration. For information about notebook instance lifestyle configurations, see notebook-lifecycle-config.
   */
  describeNotebookInstanceLifecycleConfig(callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Returns information about a training job.
   */
  describeTrainingJob(params: SageMaker.Types.DescribeTrainingJobRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeTrainingJobResponse) => void): Request<SageMaker.Types.DescribeTrainingJobResponse, AWSError>;
  /**
   * Returns information about a training job.
   */
  describeTrainingJob(callback?: (err: AWSError, data: SageMaker.Types.DescribeTrainingJobResponse) => void): Request<SageMaker.Types.DescribeTrainingJobResponse, AWSError>;
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
   * Lists models created with the CreateModel API.
   */
  listModels(params: SageMaker.Types.ListModelsInput, callback?: (err: AWSError, data: SageMaker.Types.ListModelsOutput) => void): Request<SageMaker.Types.ListModelsOutput, AWSError>;
  /**
   * Lists models created with the CreateModel API.
   */
  listModels(callback?: (err: AWSError, data: SageMaker.Types.ListModelsOutput) => void): Request<SageMaker.Types.ListModelsOutput, AWSError>;
  /**
   * Lists notebook instance lifestyle configurations created with the API.
   */
  listNotebookInstanceLifecycleConfigs(params: SageMaker.Types.ListNotebookInstanceLifecycleConfigsInput, callback?: (err: AWSError, data: SageMaker.Types.ListNotebookInstanceLifecycleConfigsOutput) => void): Request<SageMaker.Types.ListNotebookInstanceLifecycleConfigsOutput, AWSError>;
  /**
   * Lists notebook instance lifestyle configurations created with the API.
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
   * Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the notebook instance status to InService. A notebook instance's status must be InService before you can connect to your Jupyter notebook. 
   */
  startNotebookInstance(params: SageMaker.Types.StartNotebookInstanceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the notebook instance status to InService. A notebook instance's status must be InService before you can connect to your Jupyter notebook. 
   */
  startNotebookInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
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
   *  Deploys the new EndpointConfig specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous EndpointConfig (there is no availability loss).  When Amazon SageMaker receives the request, it sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API. 
   */
  updateEndpoint(params: SageMaker.Types.UpdateEndpointInput, callback?: (err: AWSError, data: SageMaker.Types.UpdateEndpointOutput) => void): Request<SageMaker.Types.UpdateEndpointOutput, AWSError>;
  /**
   *  Deploys the new EndpointConfig specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous EndpointConfig (there is no availability loss).  When Amazon SageMaker receives the request, it sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API. 
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
   * Updates a notebook instance lifecycle configuration created with the API.
   */
  updateNotebookInstanceLifecycleConfig(params: SageMaker.Types.UpdateNotebookInstanceLifecycleConfigInput, callback?: (err: AWSError, data: SageMaker.Types.UpdateNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.UpdateNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Updates a notebook instance lifecycle configuration created with the API.
   */
  updateNotebookInstanceLifecycleConfig(callback?: (err: AWSError, data: SageMaker.Types.UpdateNotebookInstanceLifecycleConfigOutput) => void): Request<SageMaker.Types.UpdateNotebookInstanceLifecycleConfigOutput, AWSError>;
  /**
   * Waits for the notebookInstanceInService state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceInService", params: SageMaker.Types.DescribeNotebookInstanceInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the notebookInstanceInService state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceInService", callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the notebookInstanceStopped state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceStopped", params: SageMaker.Types.DescribeNotebookInstanceInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the notebookInstanceStopped state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceStopped", callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the notebookInstanceDeleted state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceDeleted", params: SageMaker.Types.DescribeNotebookInstanceInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the notebookInstanceDeleted state by periodically calling the underlying SageMaker.describeNotebookInstanceoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "notebookInstanceDeleted", callback?: (err: AWSError, data: SageMaker.Types.DescribeNotebookInstanceOutput) => void): Request<SageMaker.Types.DescribeNotebookInstanceOutput, AWSError>;
  /**
   * Waits for the trainingJobCompletedOrStopped state by periodically calling the underlying SageMaker.describeTrainingJoboperation every 120 seconds (at most 180 times).
   */
  waitFor(state: "trainingJobCompletedOrStopped", params: SageMaker.Types.DescribeTrainingJobRequest, callback?: (err: AWSError, data: SageMaker.Types.DescribeTrainingJobResponse) => void): Request<SageMaker.Types.DescribeTrainingJobResponse, AWSError>;
  /**
   * Waits for the trainingJobCompletedOrStopped state by periodically calling the underlying SageMaker.describeTrainingJoboperation every 120 seconds (at most 180 times).
   */
  waitFor(state: "trainingJobCompletedOrStopped", callback?: (err: AWSError, data: SageMaker.Types.DescribeTrainingJobResponse) => void): Request<SageMaker.Types.DescribeTrainingJobResponse, AWSError>;
  /**
   * Waits for the endpointInService state by periodically calling the underlying SageMaker.describeEndpointoperation every 30 seconds (at most 120 times).
   */
  waitFor(state: "endpointInService", params: SageMaker.Types.DescribeEndpointInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointOutput) => void): Request<SageMaker.Types.DescribeEndpointOutput, AWSError>;
  /**
   * Waits for the endpointInService state by periodically calling the underlying SageMaker.describeEndpointoperation every 30 seconds (at most 120 times).
   */
  waitFor(state: "endpointInService", callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointOutput) => void): Request<SageMaker.Types.DescribeEndpointOutput, AWSError>;
  /**
   * Waits for the endpointDeleted state by periodically calling the underlying SageMaker.describeEndpointoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "endpointDeleted", params: SageMaker.Types.DescribeEndpointInput, callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointOutput) => void): Request<SageMaker.Types.DescribeEndpointOutput, AWSError>;
  /**
   * Waits for the endpointDeleted state by periodically calling the underlying SageMaker.describeEndpointoperation every 30 seconds (at most 60 times).
   */
  waitFor(state: "endpointDeleted", callback?: (err: AWSError, data: SageMaker.Types.DescribeEndpointOutput) => void): Request<SageMaker.Types.DescribeEndpointOutput, AWSError>;
}
declare namespace SageMaker {
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
  export type AlgorithmImage = string;
  export interface AlgorithmSpecification {
    /**
     * The registry path of the Docker image that contains the training algorithm. For information about docker registry paths for built-in algorithms, see sagemaker-algo-docker-registry-paths.
     */
    TrainingImage: AlgorithmImage;
    /**
     * The input mode that the algorithm supports. For the input modes that Amazon SageMaker algorithms support, see Algorithms. If an algorithm supports the File input mode, Amazon SageMaker downloads the training data from S3 to the provisioned ML storage Volume, and mounts the directory to docker volume for training container. If an algorithm supports the Pipe input mode, Amazon SageMaker streams data directly from S3 to the container.   In File mode, make sure you provision ML storage volume with sufficient capacity to accommodate the data download from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container use ML storage volume to also store intermediate information, if any.   For distributed algorithms using File mode, training data is distributed uniformly, and your training duration is predictable if the input data objects size is approximately same. Amazon SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed where one host in a training cluster is overloaded, thus becoming bottleneck in training. 
     */
    TrainingInputMode: TrainingInputMode;
  }
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
     * If training data is compressed, the compression type. The default value is None. CompressionType is used only in PIPE input mode. In FILE mode, leave this field unset or set it to None.
     */
    CompressionType?: CompressionType;
    /**
     *  Specify RecordIO as the value when input data is in raw format but the training algorithm requires the RecordIO format, in which caseAmazon SageMaker wraps each individual S3 object in a RecordIO record. If the input data is already in RecordIO format, you don't need to set this attribute. For more information, see Create a Dataset Using RecordIO.  In FILE mode, leave this field unset or set it to None. 
     */
    RecordWrapperType?: RecordWrapper;
  }
  export type ChannelName = string;
  export type CompressionType = "None"|"Gzip"|string;
  export interface ContainerDefinition {
    /**
     * The DNS host name for the container after Amazon SageMaker deploys it.
     */
    ContainerHostname?: ContainerHostname;
    /**
     * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored. If you are using your own custom algorithm instead of an algorithm provided by Amazon SageMaker, the inference code must meet Amazon SageMaker requirements. For more information, see Using Your Own Algorithms with Amazon SageMaker 
     */
    Image: Image;
    /**
     * The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). 
     */
    ModelDataUrl?: Url;
    /**
     * The environment variables to set in the Docker container. Each key and value in the Environment string to string map can have length of up to 1024. We support up to 16 entries in the map. 
     */
    Environment?: EnvironmentMap;
  }
  export type ContainerHostname = string;
  export type ContentType = string;
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
  export interface CreateModelInput {
    /**
     * The name of the new model.
     */
    ModelName: ModelName;
    /**
     * The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed into production. 
     */
    PrimaryContainer: ContainerDefinition;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances. Deploying on ML compute instances is part of model hosting. For more information, see Amazon SageMaker Roles. 
     */
    ExecutionRoleArn: RoleArn;
    /**
     * An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide. 
     */
    Tags?: TagList;
  }
  export interface CreateModelOutput {
    /**
     * The ARN of the model created in Amazon SageMaker.
     */
    ModelArn: ModelArn;
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
     *  When you send any requests to AWS resources from the notebook instance, Amazon SageMaker assumes this role to perform tasks on your behalf. You must grant this role necessary permissions so Amazon SageMaker can perform these tasks. The policy must allow the Amazon SageMaker service principal (sagemaker.amazonaws.com) permissions to assume this role. For more information, see Amazon SageMaker Roles. 
     */
    RoleArn: RoleArn;
    /**
     *  If you provide a AWS KMS key ID, Amazon SageMaker uses it to encrypt data at rest on the ML storage volume that is attached to your notebook instance. 
     */
    KmsKeyId?: KmsKeyId;
    /**
     * A list of tags to associate with the notebook instance. You can add tags later by using the CreateTags API.
     */
    Tags?: TagList;
    /**
     * The name of a lifecycle configuration to associate with the notebook instance. For information about lifestyle configurations, see notebook-lifecycle-config.
     */
    LifecycleConfigName?: NotebookInstanceLifecycleConfigName;
    /**
     * Sets whether Amazon SageMaker provides internet access to the notebook instance. If you set this to Disabled this notebook instance will be able to access resources only in your VPC, and will not be able to connect to Amazon SageMaker training and endpoint services unless your configure a NAT Gateway in your VPC. For more information, see appendix-notebook-and-internet-access. You can set the value of this parameter to Disabled only if you set a value for the SubnetId parameter.
     */
    DirectInternetAccess?: DirectInternetAccess;
  }
  export interface CreateNotebookInstanceLifecycleConfigInput {
    /**
     * The name of the lifecycle configuration.
     */
    NotebookInstanceLifecycleConfigName: NotebookInstanceLifecycleConfigName;
    /**
     * A shell script that runs only once, when you create a notebook instance.
     */
    OnCreate?: NotebookInstanceLifecycleConfigList;
    /**
     * A shell script that runs every time you start a notebook instance, including when you create the notebook instance.
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
     * The name of the training job. The name must be unique within an AWS Region in an AWS account. It appears in the Amazon SageMaker console. 
     */
    TrainingJobName: TrainingJobName;
    /**
     * Algorithm-specific parameters. You set hyperparameters before you start the learning process. Hyperparameters influence the quality of the model. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see Algorithms.  You can specify a maximum of 100 hyperparameters. Each hyperparameter is a key-value pair. Each key and value is limited to 256 characters, as specified by the Length Constraint. 
     */
    HyperParameters?: HyperParameters;
    /**
     * The registry path of the Docker image that contains the training algorithm and algorithm-specific metadata, including the input mode. For more information about algorithms provided by Amazon SageMaker, see Algorithms. For information about providing your own algorithms, see your-algorithms. 
     */
    AlgorithmSpecification: AlgorithmSpecification;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.  During model training, Amazon SageMaker needs your permission to read input data from an S3 bucket, download a Docker image that contains training code, write model artifacts to an S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant permissions for all of these tasks to an IAM role. For more information, see Amazon SageMaker Roles. 
     */
    RoleArn: RoleArn;
    /**
     * An array of Channel objects. Each channel is a named input source. InputDataConfig describes the input data and its location.  Algorithms can accept input data from one or more channels. For example, an algorithm might have two channels of input data, training_data and validation_data. The configuration for each channel provides the S3 location where the input data is stored. It also provides information about the stored data: the MIME type, compression method, and whether the data is wrapped in RecordIO format.  Depending on the input mode that the algorithm supports, Amazon SageMaker either copies input data files from an S3 bucket to a local directory in the Docker container, or makes it available as input streams. 
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies the path to the S3 bucket where you want to store model artifacts. Amazon SageMaker creates subfolders for the artifacts. 
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The resources, including the ML compute instances and ML storage volumes, to use for model training.  ML storage volumes store model artifacts and incremental states. Training algorithms might also use ML storage volumes for scratch space. If you want Amazon SageMaker to use the ML storage volume to store the training data, choose File as the TrainingInputMode in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.
     */
    ResourceConfig: ResourceConfig;
    /**
     * Sets a duration for training. Use this parameter to cap model training costs. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts.  When Amazon SageMaker terminates a job because the stopping condition has been met, training algorithms provided by Amazon SageMaker save the intermediate results of the job. This intermediate data is a valid model artifact. You can use it to create a model using the CreateModel API. 
     */
    StoppingCondition: StoppingCondition;
    /**
     * An array of key-value pairs. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide. 
     */
    Tags?: TagList;
  }
  export interface CreateTrainingJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the training job.
     */
    TrainingJobArn: TrainingJobArn;
  }
  export type CreationTime = Date;
  export interface DataSource {
    /**
     * The S3 location of the data source that is associated with a channel.
     */
    S3DataSource: S3DataSource;
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
     *  An array of ProductionVariant objects, one for each model hosted behind this endpoint. 
     */
    ProductionVariants?: ProductionVariantSummaryList;
    /**
     * The status of the endpoint.
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
    PrimaryContainer: ContainerDefinition;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the model.
     */
    ExecutionRoleArn: RoleArn;
    /**
     * A timestamp that shows when the model was created.
     */
    CreationTime: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the model.
     */
    ModelArn: ModelArn;
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
     *  Name of the Amazon SageMaker notebook instance. 
     */
    NotebookInstanceName?: NotebookInstanceName;
    /**
     * The status of the notebook instance.
     */
    NotebookInstanceStatus?: NotebookInstanceStatus;
    /**
     * If status is failed, the reason it failed.
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
     *  Amazon Resource Name (ARN) of the IAM role associated with the instance. 
     */
    RoleArn?: RoleArn;
    /**
     *  AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance. 
     */
    KmsKeyId?: KmsKeyId;
    /**
     *  Network interface IDs that Amazon SageMaker created at the time of creating the instance. 
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
     * Returns the name of a notebook instance lifecycle configuration. For information about notebook instance lifestyle configurations, see notebook-lifecycle-config.
     */
    NotebookInstanceLifecycleConfigName?: NotebookInstanceLifecycleConfigName;
    /**
     * Describes whether Amazon SageMaker provides internet access to the notebook instance. If this value is set to Disabled, he notebook instance does not have internet access, and cannot connect to Amazon SageMaker training and endpoint services. For more information, see appendix-notebook-and-internet-access.
     */
    DirectInternetAccess?: DirectInternetAccess;
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
     * Information about the Amazon S3 location that is configured for storing model artifacts. 
     */
    ModelArtifacts: ModelArtifacts;
    /**
     * The status of the training job.  For the InProgress status, Amazon SageMaker can return these secondary statuses:   Starting - Preparing for training.   Downloading - Optional stage for algorithms that support File training input mode. It indicates data is being downloaded to ML storage volumes.   Training - Training is in progress.   Uploading - Training is complete and model upload is in progress.   For the Stopped training status, Amazon SageMaker can return these secondary statuses:   MaxRuntimeExceeded - Job stopped as a result of maximum allowed runtime exceeded.  
     */
    TrainingJobStatus: TrainingJobStatus;
    /**
     *  Provides granular information about the system state. For more information, see TrainingJobStatus. 
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
    InputDataConfig: InputDataConfig;
    /**
     * The S3 path where model artifacts that you configured when creating the job are stored. Amazon SageMaker creates subfolders for model artifacts. 
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * Resources, including ML compute instances and ML storage volumes, that are configured for model training. 
     */
    ResourceConfig: ResourceConfig;
    /**
     * The condition under which to stop the training job. 
     */
    StoppingCondition: StoppingCondition;
    /**
     * A timestamp that indicates when the training job was created.
     */
    CreationTime: Timestamp;
    /**
     * A timestamp that indicates when training started.
     */
    TrainingStartTime?: Timestamp;
    /**
     * A timestamp that indicates when model training ended.
     */
    TrainingEndTime?: Timestamp;
    /**
     * A timestamp that indicates when the status of the training job was last modified.
     */
    LastModifiedTime?: Timestamp;
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
  export type DirectInternetAccess = "Enabled"|"Disabled"|string;
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
  export type EndpointStatus = "OutOfService"|"Creating"|"Updating"|"RollingBack"|"InService"|"Deleting"|"Failed"|string;
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
     * The status of the endpoint.
     */
    EndpointStatus: EndpointStatus;
  }
  export type EndpointSummaryList = EndpointSummary[];
  export type EnvironmentKey = string;
  export type EnvironmentMap = {[key: string]: EnvironmentValue};
  export type EnvironmentValue = string;
  export type FailureReason = string;
  export type HyperParameters = {[key: string]: ParameterValue};
  export type Image = string;
  export type InputDataConfig = Channel[];
  export type InstanceType = "ml.t2.medium"|"ml.t2.large"|"ml.t2.xlarge"|"ml.t2.2xlarge"|"ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|string;
  export type KmsKeyId = string;
  export type LastModifiedTime = Date;
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
     *  If the previous call to the ListNotebookInstances is truncated, the response includes a NextToken. You can use this token in your subsequent ListNotebookInstances request to fetch the next set of notebook instances.    You might specify a filter or a sort order in your request. When response is truncated, you must use the same values for the filer and sort order in the next request.  
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
     * A filter that only training jobs created after the specified time (timestamp).
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
     * A string in the training job name. This filter returns only models whose name contains the specified string.
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
  export type MaxResults = number;
  export type MaxRuntimeInSeconds = number;
  export type ModelArn = string;
  export interface ModelArtifacts {
    /**
     * The path of the S3 object that contains the model artifacts. For example, s3://bucket-name/keynameprefix/model.tar.gz.
     */
    S3ModelArtifacts: S3Uri;
  }
  export type ModelName = string;
  export type ModelNameContains = string;
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
  export type NetworkInterfaceId = string;
  export type NextToken = string;
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
  export type NotebookInstanceStatus = "Pending"|"InService"|"Stopping"|"Stopped"|"Failed"|"Deleting"|string;
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
     * The name of a notebook instance lifecycle configuration associated with this notebook instance. For information about notebook instance lifestyle configurations, see notebook-lifecycle-config.
     */
    NotebookInstanceLifecycleConfigName?: NotebookInstanceLifecycleConfigName;
  }
  export type NotebookInstanceSummaryList = NotebookInstanceSummary[];
  export type NotebookInstanceUrl = string;
  export type OrderKey = "Ascending"|"Descending"|string;
  export interface OutputDataConfig {
    /**
     * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.   If the configuration of the output S3 bucket requires server-side encryption for objects, and you don't provide the KMS key ID, Amazon SageMaker uses the default service key. For more information, see KMS-Managed Encryption Keys in Amazon Simple Storage Service developer guide.    The KMS key policy must grant permission to the IAM role you specify in your CreateTrainingJob request. Using Key Policies in AWS KMS in the AWS Key Management Service Developer Guide.  
     */
    KmsKeyId?: KmsKeyId;
    /**
     * Identifies the S3 path where you want Amazon SageMaker to store the model artifacts. For example, s3://bucket-name/key-name-prefix. 
     */
    S3OutputPath: S3Uri;
  }
  export type PaginationToken = string;
  export type ParameterKey = string;
  export type ParameterValue = string;
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
  }
  export type ProductionVariantInstanceType = "ml.t2.medium"|"ml.t2.large"|"ml.t2.xlarge"|"ml.t2.2xlarge"|"ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.m5.large"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.12xlarge"|"ml.m5.24xlarge"|"ml.c4.large"|"ml.c4.xlarge"|"ml.c4.2xlarge"|"ml.c4.4xlarge"|"ml.c4.8xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|"ml.c5.large"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.18xlarge"|string;
  export type ProductionVariantList = ProductionVariant[];
  export interface ProductionVariantSummary {
    /**
     * The name of the variant.
     */
    VariantName: VariantName;
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
  export type RecordWrapper = "None"|"RecordIO"|string;
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
     * The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the training job.
     */
    VolumeKmsKeyId?: KmsKeyId;
  }
  export type RoleArn = string;
  export type S3DataDistribution = "FullyReplicated"|"ShardedByS3Key"|string;
  export interface S3DataSource {
    /**
     * If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for model training.  If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for model training. 
     */
    S3DataType: S3DataType;
    /**
     * Depending on the value specified for the S3DataType, identifies either a key name prefix or a manifest. For example:     A key name prefix might look like this: s3://bucketname/exampleprefix.     A manifest might look like this: s3://bucketname/example.manifest   The manifest is an S3 object which is a JSON file with the following format:   [    {"prefix": "s3://customer_bucket/some/prefix/"},    "relative/path/to/custdata-1",    "relative/path/custdata-2",    ...    ]   The preceding JSON matches the following s3Uris:   s3://customer_bucket/some/prefix/relative/path/to/custdata-1   s3://customer_bucket/some/prefix/relative/path/custdata-1   ...   The complete set of s3uris in this manifest constitutes the input data for the channel for this datasource. The object that each s3uris points to must readable by the IAM role that Amazon SageMaker uses to perform tasks on your behalf.   
     */
    S3Uri: S3Uri;
    /**
     * If you want Amazon SageMaker to replicate the entire dataset on each ML compute instance that is launched for model training, specify FullyReplicated.  If you want Amazon SageMaker to replicate a subset of data on each ML compute instance that is launched for model training, specify ShardedByS3Key. If there are n ML compute instances launched for a training job, each instance gets approximately 1/n of the number of S3 objects. In this case, model training on each machine uses only the subset of training data.  Don't choose more ML compute instances for training than available S3 objects. If you do, some nodes won't get any data and you will pay for nodes that aren't getting any training data. This applies in both FILE and PIPE modes. Keep this in mind when developing algorithms.  In distributed training, where you use multiple ML compute EC2 instances, you might choose ShardedByS3Key. If the algorithm requires copying training data to the ML storage volume (when TrainingInputMode is set to File), this copies 1/n of the number of objects. 
     */
    S3DataDistributionType?: S3DataDistribution;
  }
  export type S3DataType = "ManifestFile"|"S3Prefix"|string;
  export type S3Uri = string;
  export type SecondaryStatus = "Starting"|"Downloading"|"Training"|"Uploading"|"Stopping"|"Stopped"|"MaxRuntimeExceeded"|"Completed"|"Failed"|string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type SessionExpirationDurationInSeconds = number;
  export type SortBy = "Name"|"CreationTime"|"Status"|string;
  export type SortOrder = "Ascending"|"Descending"|string;
  export interface StartNotebookInstanceInput {
    /**
     * The name of the notebook instance to start.
     */
    NotebookInstanceName: NotebookInstanceName;
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
  export interface StoppingCondition {
    /**
     * The maximum length of time, in seconds, that the training job can run. If model training does not complete during this time, Amazon SageMaker ends the job. If value is not specified, default value is 1 day. Maximum value is 5 days.
     */
    MaxRuntimeInSeconds?: MaxRuntimeInSeconds;
  }
  export type SubnetId = string;
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
  export type TaskCount = number;
  export type Timestamp = Date;
  export type TrainingInputMode = "Pipe"|"File"|string;
  export type TrainingInstanceCount = number;
  export type TrainingInstanceType = "ml.m4.xlarge"|"ml.m4.2xlarge"|"ml.m4.4xlarge"|"ml.m4.10xlarge"|"ml.m4.16xlarge"|"ml.m5.large"|"ml.m5.xlarge"|"ml.m5.2xlarge"|"ml.m5.4xlarge"|"ml.m5.12xlarge"|"ml.m5.24xlarge"|"ml.c4.xlarge"|"ml.c4.2xlarge"|"ml.c4.4xlarge"|"ml.c4.8xlarge"|"ml.p2.xlarge"|"ml.p2.8xlarge"|"ml.p2.16xlarge"|"ml.p3.2xlarge"|"ml.p3.8xlarge"|"ml.p3.16xlarge"|"ml.c5.xlarge"|"ml.c5.2xlarge"|"ml.c5.4xlarge"|"ml.c5.9xlarge"|"ml.c5.18xlarge"|string;
  export type TrainingJobArn = string;
  export type TrainingJobName = string;
  export type TrainingJobStatus = "InProgress"|"Completed"|"Failed"|"Stopping"|"Stopped"|string;
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
     * Amazon Resource Name (ARN) of the IAM role to associate with the instance.
     */
    RoleArn?: RoleArn;
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
  export type Url = string;
  export type VariantName = string;
  export type VariantWeight = number;
  export type VolumeSizeInGB = number;
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
