import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ElasticBeanstalk extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ElasticBeanstalk.Types.ClientConfiguration)
  config: Config & ElasticBeanstalk.Types.ClientConfiguration;
  /**
   * Cancels in-progress environment configuration update or application version deployment.
   */
  abortEnvironmentUpdate(params: ElasticBeanstalk.Types.AbortEnvironmentUpdateMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels in-progress environment configuration update or application version deployment.
   */
  abortEnvironmentUpdate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Applies a scheduled managed action immediately. A managed action can be applied only if its status is Scheduled. Get the status and action ID of a managed action with DescribeEnvironmentManagedActions.
   */
  applyEnvironmentManagedAction(params: ElasticBeanstalk.Types.ApplyEnvironmentManagedActionRequest, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplyEnvironmentManagedActionResult) => void): Request<ElasticBeanstalk.Types.ApplyEnvironmentManagedActionResult, AWSError>;
  /**
   * Applies a scheduled managed action immediately. A managed action can be applied only if its status is Scheduled. Get the status and action ID of a managed action with DescribeEnvironmentManagedActions.
   */
  applyEnvironmentManagedAction(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplyEnvironmentManagedActionResult) => void): Request<ElasticBeanstalk.Types.ApplyEnvironmentManagedActionResult, AWSError>;
  /**
   * Checks if the specified CNAME is available.
   */
  checkDNSAvailability(params: ElasticBeanstalk.Types.CheckDNSAvailabilityMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.CheckDNSAvailabilityResultMessage) => void): Request<ElasticBeanstalk.Types.CheckDNSAvailabilityResultMessage, AWSError>;
  /**
   * Checks if the specified CNAME is available.
   */
  checkDNSAvailability(callback?: (err: AWSError, data: ElasticBeanstalk.Types.CheckDNSAvailabilityResultMessage) => void): Request<ElasticBeanstalk.Types.CheckDNSAvailabilityResultMessage, AWSError>;
  /**
   * Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named env.yaml. See Compose Environments for details.
   */
  composeEnvironments(params: ElasticBeanstalk.Types.ComposeEnvironmentsMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.EnvironmentDescriptionsMessage, AWSError>;
  /**
   * Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named env.yaml. See Compose Environments for details.
   */
  composeEnvironments(callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.EnvironmentDescriptionsMessage, AWSError>;
  /**
   *  Creates an application that has one configuration template named default and no application versions. 
   */
  createApplication(params: ElasticBeanstalk.Types.CreateApplicationMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationDescriptionMessage) => void): Request<ElasticBeanstalk.Types.ApplicationDescriptionMessage, AWSError>;
  /**
   *  Creates an application that has one configuration template named default and no application versions. 
   */
  createApplication(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationDescriptionMessage) => void): Request<ElasticBeanstalk.Types.ApplicationDescriptionMessage, AWSError>;
  /**
   * Creates an application version for the specified application.  Once you create an application version with a specified Amazon S3 bucket and key location, you cannot change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version. 
   */
  createApplicationVersion(params: ElasticBeanstalk.Types.CreateApplicationVersionMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationVersionDescriptionMessage) => void): Request<ElasticBeanstalk.Types.ApplicationVersionDescriptionMessage, AWSError>;
  /**
   * Creates an application version for the specified application.  Once you create an application version with a specified Amazon S3 bucket and key location, you cannot change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version. 
   */
  createApplicationVersion(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationVersionDescriptionMessage) => void): Request<ElasticBeanstalk.Types.ApplicationVersionDescriptionMessage, AWSError>;
  /**
   * Creates a configuration template. Templates are associated with a specific application and are used to deploy different versions of the application with the same configuration settings. Related Topics    DescribeConfigurationOptions     DescribeConfigurationSettings     ListAvailableSolutionStacks   
   */
  createConfigurationTemplate(params: ElasticBeanstalk.Types.CreateConfigurationTemplateMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ConfigurationSettingsDescription) => void): Request<ElasticBeanstalk.Types.ConfigurationSettingsDescription, AWSError>;
  /**
   * Creates a configuration template. Templates are associated with a specific application and are used to deploy different versions of the application with the same configuration settings. Related Topics    DescribeConfigurationOptions     DescribeConfigurationSettings     ListAvailableSolutionStacks   
   */
  createConfigurationTemplate(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ConfigurationSettingsDescription) => void): Request<ElasticBeanstalk.Types.ConfigurationSettingsDescription, AWSError>;
  /**
   * Launches an environment for the specified application using the specified configuration.
   */
  createEnvironment(params: ElasticBeanstalk.Types.CreateEnvironmentMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentDescription) => void): Request<ElasticBeanstalk.Types.EnvironmentDescription, AWSError>;
  /**
   * Launches an environment for the specified application using the specified configuration.
   */
  createEnvironment(callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentDescription) => void): Request<ElasticBeanstalk.Types.EnvironmentDescription, AWSError>;
  /**
   * Creates the Amazon S3 storage location for the account. This location is used to store user log files.
   */
  createStorageLocation(callback?: (err: AWSError, data: ElasticBeanstalk.Types.CreateStorageLocationResultMessage) => void): Request<ElasticBeanstalk.Types.CreateStorageLocationResultMessage, AWSError>;
  /**
   * Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.  You cannot delete an application that has a running environment. 
   */
  deleteApplication(params: ElasticBeanstalk.Types.DeleteApplicationMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.  You cannot delete an application that has a running environment. 
   */
  deleteApplication(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified version from the specified application.  You cannot delete an application version that is associated with a running environment. 
   */
  deleteApplicationVersion(params: ElasticBeanstalk.Types.DeleteApplicationVersionMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified version from the specified application.  You cannot delete an application version that is associated with a running environment. 
   */
  deleteApplicationVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified configuration template.  When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment. 
   */
  deleteConfigurationTemplate(params: ElasticBeanstalk.Types.DeleteConfigurationTemplateMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified configuration template.  When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment. 
   */
  deleteConfigurationTemplate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the draft configuration associated with the running environment. Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using DescribeConfigurationSettings while the update is in progress or if the update fails. The DeploymentStatus for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.
   */
  deleteEnvironmentConfiguration(params: ElasticBeanstalk.Types.DeleteEnvironmentConfigurationMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the draft configuration associated with the running environment. Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using DescribeConfigurationSettings while the update is in progress or if the update fails. The DeploymentStatus for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.
   */
  deleteEnvironmentConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieve a list of application versions stored in your AWS Elastic Beanstalk storage bucket.
   */
  describeApplicationVersions(params: ElasticBeanstalk.Types.DescribeApplicationVersionsMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationVersionDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.ApplicationVersionDescriptionsMessage, AWSError>;
  /**
   * Retrieve a list of application versions stored in your AWS Elastic Beanstalk storage bucket.
   */
  describeApplicationVersions(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationVersionDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.ApplicationVersionDescriptionsMessage, AWSError>;
  /**
   * Returns the descriptions of existing applications.
   */
  describeApplications(params: ElasticBeanstalk.Types.DescribeApplicationsMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.ApplicationDescriptionsMessage, AWSError>;
  /**
   * Returns the descriptions of existing applications.
   */
  describeApplications(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.ApplicationDescriptionsMessage, AWSError>;
  /**
   * Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.
   */
  describeConfigurationOptions(params: ElasticBeanstalk.Types.DescribeConfigurationOptionsMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ConfigurationOptionsDescription) => void): Request<ElasticBeanstalk.Types.ConfigurationOptionsDescription, AWSError>;
  /**
   * Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.
   */
  describeConfigurationOptions(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ConfigurationOptionsDescription) => void): Request<ElasticBeanstalk.Types.ConfigurationOptionsDescription, AWSError>;
  /**
   * Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment. When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy. Related Topics    DeleteEnvironmentConfiguration   
   */
  describeConfigurationSettings(params: ElasticBeanstalk.Types.DescribeConfigurationSettingsMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ConfigurationSettingsDescriptions) => void): Request<ElasticBeanstalk.Types.ConfigurationSettingsDescriptions, AWSError>;
  /**
   * Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment. When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy. Related Topics    DeleteEnvironmentConfiguration   
   */
  describeConfigurationSettings(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ConfigurationSettingsDescriptions) => void): Request<ElasticBeanstalk.Types.ConfigurationSettingsDescriptions, AWSError>;
  /**
   * Returns information about the overall health of the specified environment. The DescribeEnvironmentHealth operation is only available with AWS Elastic Beanstalk Enhanced Health.
   */
  describeEnvironmentHealth(params: ElasticBeanstalk.Types.DescribeEnvironmentHealthRequest, callback?: (err: AWSError, data: ElasticBeanstalk.Types.DescribeEnvironmentHealthResult) => void): Request<ElasticBeanstalk.Types.DescribeEnvironmentHealthResult, AWSError>;
  /**
   * Returns information about the overall health of the specified environment. The DescribeEnvironmentHealth operation is only available with AWS Elastic Beanstalk Enhanced Health.
   */
  describeEnvironmentHealth(callback?: (err: AWSError, data: ElasticBeanstalk.Types.DescribeEnvironmentHealthResult) => void): Request<ElasticBeanstalk.Types.DescribeEnvironmentHealthResult, AWSError>;
  /**
   * Lists an environment's completed and failed managed actions.
   */
  describeEnvironmentManagedActionHistory(params: ElasticBeanstalk.Types.DescribeEnvironmentManagedActionHistoryRequest, callback?: (err: AWSError, data: ElasticBeanstalk.Types.DescribeEnvironmentManagedActionHistoryResult) => void): Request<ElasticBeanstalk.Types.DescribeEnvironmentManagedActionHistoryResult, AWSError>;
  /**
   * Lists an environment's completed and failed managed actions.
   */
  describeEnvironmentManagedActionHistory(callback?: (err: AWSError, data: ElasticBeanstalk.Types.DescribeEnvironmentManagedActionHistoryResult) => void): Request<ElasticBeanstalk.Types.DescribeEnvironmentManagedActionHistoryResult, AWSError>;
  /**
   * Lists an environment's upcoming and in-progress managed actions.
   */
  describeEnvironmentManagedActions(params: ElasticBeanstalk.Types.DescribeEnvironmentManagedActionsRequest, callback?: (err: AWSError, data: ElasticBeanstalk.Types.DescribeEnvironmentManagedActionsResult) => void): Request<ElasticBeanstalk.Types.DescribeEnvironmentManagedActionsResult, AWSError>;
  /**
   * Lists an environment's upcoming and in-progress managed actions.
   */
  describeEnvironmentManagedActions(callback?: (err: AWSError, data: ElasticBeanstalk.Types.DescribeEnvironmentManagedActionsResult) => void): Request<ElasticBeanstalk.Types.DescribeEnvironmentManagedActionsResult, AWSError>;
  /**
   * Returns AWS resources for this environment.
   */
  describeEnvironmentResources(params: ElasticBeanstalk.Types.DescribeEnvironmentResourcesMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentResourceDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.EnvironmentResourceDescriptionsMessage, AWSError>;
  /**
   * Returns AWS resources for this environment.
   */
  describeEnvironmentResources(callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentResourceDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.EnvironmentResourceDescriptionsMessage, AWSError>;
  /**
   * Returns descriptions for existing environments.
   */
  describeEnvironments(params: ElasticBeanstalk.Types.DescribeEnvironmentsMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.EnvironmentDescriptionsMessage, AWSError>;
  /**
   * Returns descriptions for existing environments.
   */
  describeEnvironments(callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.EnvironmentDescriptionsMessage, AWSError>;
  /**
   * Returns list of event descriptions matching criteria up to the last 6 weeks.  This action returns the most recent 1,000 events from the specified NextToken. 
   */
  describeEvents(params: ElasticBeanstalk.Types.DescribeEventsMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.EventDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.EventDescriptionsMessage, AWSError>;
  /**
   * Returns list of event descriptions matching criteria up to the last 6 weeks.  This action returns the most recent 1,000 events from the specified NextToken. 
   */
  describeEvents(callback?: (err: AWSError, data: ElasticBeanstalk.Types.EventDescriptionsMessage) => void): Request<ElasticBeanstalk.Types.EventDescriptionsMessage, AWSError>;
  /**
   * Returns more detailed information about the health of the specified instances (for example, CPU utilization, load average, and causes). The DescribeInstancesHealth operation is only available with AWS Elastic Beanstalk Enhanced Health.
   */
  describeInstancesHealth(params: ElasticBeanstalk.Types.DescribeInstancesHealthRequest, callback?: (err: AWSError, data: ElasticBeanstalk.Types.DescribeInstancesHealthResult) => void): Request<ElasticBeanstalk.Types.DescribeInstancesHealthResult, AWSError>;
  /**
   * Returns more detailed information about the health of the specified instances (for example, CPU utilization, load average, and causes). The DescribeInstancesHealth operation is only available with AWS Elastic Beanstalk Enhanced Health.
   */
  describeInstancesHealth(callback?: (err: AWSError, data: ElasticBeanstalk.Types.DescribeInstancesHealthResult) => void): Request<ElasticBeanstalk.Types.DescribeInstancesHealthResult, AWSError>;
  /**
   * Returns a list of the available solution stack names.
   */
  listAvailableSolutionStacks(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ListAvailableSolutionStacksResultMessage) => void): Request<ElasticBeanstalk.Types.ListAvailableSolutionStacksResultMessage, AWSError>;
  /**
   * Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
   */
  rebuildEnvironment(params: ElasticBeanstalk.Types.RebuildEnvironmentMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
   */
  rebuildEnvironment(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Initiates a request to compile the specified type of information of the deployed environment.  Setting the InfoType to tail compiles the last lines from the application server log files of every Amazon EC2 instance in your environment.   Setting the InfoType to bundle compresses the application server log files for every Amazon EC2 instance into a .zip file. Legacy and .NET containers do not support bundle logs.   Use RetrieveEnvironmentInfo to obtain the set of logs.  Related Topics    RetrieveEnvironmentInfo   
   */
  requestEnvironmentInfo(params: ElasticBeanstalk.Types.RequestEnvironmentInfoMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Initiates a request to compile the specified type of information of the deployed environment.  Setting the InfoType to tail compiles the last lines from the application server log files of every Amazon EC2 instance in your environment.   Setting the InfoType to bundle compresses the application server log files for every Amazon EC2 instance into a .zip file. Legacy and .NET containers do not support bundle logs.   Use RetrieveEnvironmentInfo to obtain the set of logs.  Related Topics    RetrieveEnvironmentInfo   
   */
  requestEnvironmentInfo(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Causes the environment to restart the application container server running on each Amazon EC2 instance.
   */
  restartAppServer(params: ElasticBeanstalk.Types.RestartAppServerMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Causes the environment to restart the application container server running on each Amazon EC2 instance.
   */
  restartAppServer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the compiled information from a RequestEnvironmentInfo request. Related Topics    RequestEnvironmentInfo   
   */
  retrieveEnvironmentInfo(params: ElasticBeanstalk.Types.RetrieveEnvironmentInfoMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.RetrieveEnvironmentInfoResultMessage) => void): Request<ElasticBeanstalk.Types.RetrieveEnvironmentInfoResultMessage, AWSError>;
  /**
   * Retrieves the compiled information from a RequestEnvironmentInfo request. Related Topics    RequestEnvironmentInfo   
   */
  retrieveEnvironmentInfo(callback?: (err: AWSError, data: ElasticBeanstalk.Types.RetrieveEnvironmentInfoResultMessage) => void): Request<ElasticBeanstalk.Types.RetrieveEnvironmentInfoResultMessage, AWSError>;
  /**
   * Swaps the CNAMEs of two environments.
   */
  swapEnvironmentCNAMEs(params: ElasticBeanstalk.Types.SwapEnvironmentCNAMEsMessage, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Swaps the CNAMEs of two environments.
   */
  swapEnvironmentCNAMEs(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Terminates the specified environment.
   */
  terminateEnvironment(params: ElasticBeanstalk.Types.TerminateEnvironmentMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentDescription) => void): Request<ElasticBeanstalk.Types.EnvironmentDescription, AWSError>;
  /**
   * Terminates the specified environment.
   */
  terminateEnvironment(callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentDescription) => void): Request<ElasticBeanstalk.Types.EnvironmentDescription, AWSError>;
  /**
   * Updates the specified application to have the specified properties.  If a property (for example, description) is not provided, the value remains unchanged. To clear these properties, specify an empty string. 
   */
  updateApplication(params: ElasticBeanstalk.Types.UpdateApplicationMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationDescriptionMessage) => void): Request<ElasticBeanstalk.Types.ApplicationDescriptionMessage, AWSError>;
  /**
   * Updates the specified application to have the specified properties.  If a property (for example, description) is not provided, the value remains unchanged. To clear these properties, specify an empty string. 
   */
  updateApplication(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationDescriptionMessage) => void): Request<ElasticBeanstalk.Types.ApplicationDescriptionMessage, AWSError>;
  /**
   * Updates the specified application version to have the specified properties.  If a property (for example, description) is not provided, the value remains unchanged. To clear properties, specify an empty string. 
   */
  updateApplicationVersion(params: ElasticBeanstalk.Types.UpdateApplicationVersionMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationVersionDescriptionMessage) => void): Request<ElasticBeanstalk.Types.ApplicationVersionDescriptionMessage, AWSError>;
  /**
   * Updates the specified application version to have the specified properties.  If a property (for example, description) is not provided, the value remains unchanged. To clear properties, specify an empty string. 
   */
  updateApplicationVersion(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ApplicationVersionDescriptionMessage) => void): Request<ElasticBeanstalk.Types.ApplicationVersionDescriptionMessage, AWSError>;
  /**
   * Updates the specified configuration template to have the specified properties or configuration option values.  If a property (for example, ApplicationName) is not provided, its value remains unchanged. To clear such properties, specify an empty string.  Related Topics    DescribeConfigurationOptions   
   */
  updateConfigurationTemplate(params: ElasticBeanstalk.Types.UpdateConfigurationTemplateMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ConfigurationSettingsDescription) => void): Request<ElasticBeanstalk.Types.ConfigurationSettingsDescription, AWSError>;
  /**
   * Updates the specified configuration template to have the specified properties or configuration option values.  If a property (for example, ApplicationName) is not provided, its value remains unchanged. To clear such properties, specify an empty string.  Related Topics    DescribeConfigurationOptions   
   */
  updateConfigurationTemplate(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ConfigurationSettingsDescription) => void): Request<ElasticBeanstalk.Types.ConfigurationSettingsDescription, AWSError>;
  /**
   * Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.  Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an InvalidParameterCombination error.   When updating the configuration settings to a new template or individual settings, a draft configuration is created and DescribeConfigurationSettings for this environment returns two setting descriptions with different DeploymentStatus values. 
   */
  updateEnvironment(params: ElasticBeanstalk.Types.UpdateEnvironmentMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentDescription) => void): Request<ElasticBeanstalk.Types.EnvironmentDescription, AWSError>;
  /**
   * Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.  Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an InvalidParameterCombination error.   When updating the configuration settings to a new template or individual settings, a draft configuration is created and DescribeConfigurationSettings for this environment returns two setting descriptions with different DeploymentStatus values. 
   */
  updateEnvironment(callback?: (err: AWSError, data: ElasticBeanstalk.Types.EnvironmentDescription) => void): Request<ElasticBeanstalk.Types.EnvironmentDescription, AWSError>;
  /**
   * Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid. This action returns a list of messages indicating any errors or warnings associated with the selection of option values.
   */
  validateConfigurationSettings(params: ElasticBeanstalk.Types.ValidateConfigurationSettingsMessage, callback?: (err: AWSError, data: ElasticBeanstalk.Types.ConfigurationSettingsValidationMessages) => void): Request<ElasticBeanstalk.Types.ConfigurationSettingsValidationMessages, AWSError>;
  /**
   * Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid. This action returns a list of messages indicating any errors or warnings associated with the selection of option values.
   */
  validateConfigurationSettings(callback?: (err: AWSError, data: ElasticBeanstalk.Types.ConfigurationSettingsValidationMessages) => void): Request<ElasticBeanstalk.Types.ConfigurationSettingsValidationMessages, AWSError>;
}
declare namespace ElasticBeanstalk.Types {
  export interface AbortEnvironmentUpdateMessage {
    /**
     * This specifies the ID of the environment with the in-progress update that you want to cancel.
     */
    EnvironmentId?: EnvironmentId;
    /**
     * This specifies the name of the environment with the in-progress update that you want to cancel.
     */
    EnvironmentName?: EnvironmentName;
  }
  export type AbortableOperationInProgress = boolean;
  export type ActionHistoryStatus = "Completed"|"Failed"|"Unknown"|string;
  export type ActionStatus = "Scheduled"|"Pending"|"Running"|"Unknown"|string;
  export type ActionType = "InstanceRefresh"|"PlatformUpdate"|"Unknown"|string;
  export interface ApplicationDescription {
    /**
     * The name of the application.
     */
    ApplicationName?: ApplicationName;
    /**
     * User-defined description of the application.
     */
    Description?: Description;
    /**
     * The date when the application was created.
     */
    DateCreated?: CreationDate;
    /**
     * The date when the application was last modified.
     */
    DateUpdated?: UpdateDate;
    /**
     * The names of the versions for this application.
     */
    Versions?: VersionLabelsList;
    /**
     * The names of the configuration templates associated with this application.
     */
    ConfigurationTemplates?: ConfigurationTemplateNamesList;
  }
  export type ApplicationDescriptionList = ApplicationDescription[];
  export interface ApplicationDescriptionMessage {
    /**
     *  The ApplicationDescription of the application. 
     */
    Application?: ApplicationDescription;
  }
  export interface ApplicationDescriptionsMessage {
    /**
     * This parameter contains a list of ApplicationDescription.
     */
    Applications?: ApplicationDescriptionList;
  }
  export interface ApplicationMetrics {
    /**
     * The amount of time that the metrics cover (usually 10 seconds). For example, you might have 5 requests (request_count) within the most recent time slice of 10 seconds (duration).
     */
    Duration?: NullableInteger;
    /**
     * Average number of requests handled by the web server per second over the last 10 seconds.
     */
    RequestCount?: RequestCount;
    /**
     * Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response.
     */
    StatusCodes?: StatusCodes;
    /**
     * Represents the average latency for the slowest X percent of requests over the last 10 seconds. Latencies are in seconds with one milisecond resolution.
     */
    Latency?: Latency;
  }
  export type ApplicationName = string;
  export type ApplicationNamesList = ApplicationName[];
  export interface ApplicationVersionDescription {
    /**
     * The name of the application associated with this release.
     */
    ApplicationName?: ApplicationName;
    /**
     * The description of this application version.
     */
    Description?: Description;
    /**
     * A label uniquely identifying the version for the associated application.
     */
    VersionLabel?: VersionLabel;
    SourceBuildInformation?: SourceBuildInformation;
    /**
     * The location where the source bundle is located for this version.
     */
    SourceBundle?: S3Location;
    /**
     * The creation date of the application version.
     */
    DateCreated?: CreationDate;
    /**
     * The last modified date of the application version.
     */
    DateUpdated?: UpdateDate;
    /**
     * The processing status of the application version.
     */
    Status?: ApplicationVersionStatus;
  }
  export type ApplicationVersionDescriptionList = ApplicationVersionDescription[];
  export interface ApplicationVersionDescriptionMessage {
    /**
     *  The ApplicationVersionDescription of the application version. 
     */
    ApplicationVersion?: ApplicationVersionDescription;
  }
  export interface ApplicationVersionDescriptionsMessage {
    /**
     * List of ApplicationVersionDescription objects sorted by order of creation.
     */
    ApplicationVersions?: ApplicationVersionDescriptionList;
    /**
     * For a paginated request, the token that you can pass in a subsequent request to get the next page.
     */
    NextToken?: Token;
  }
  export type ApplicationVersionProccess = boolean;
  export type ApplicationVersionStatus = "Processed"|"Unprocessed"|"Failed"|"Processing"|string;
  export interface ApplyEnvironmentManagedActionRequest {
    /**
     * The name of the target environment.
     */
    EnvironmentName?: String;
    /**
     * The environment ID of the target environment.
     */
    EnvironmentId?: String;
    /**
     * The action ID of the scheduled managed action to execute.
     */
    ActionId: String;
  }
  export interface ApplyEnvironmentManagedActionResult {
    /**
     * The action ID of the managed action.
     */
    ActionId?: String;
    /**
     * A description of the managed action.
     */
    ActionDescription?: String;
    /**
     * The type of managed action.
     */
    ActionType?: ActionType;
    /**
     * The status of the managed action.
     */
    Status?: String;
  }
  export type AutoCreateApplication = boolean;
  export interface AutoScalingGroup {
    /**
     * The name of the AutoScalingGroup . 
     */
    Name?: ResourceId;
  }
  export type AutoScalingGroupList = AutoScalingGroup[];
  export type AvailableSolutionStackDetailsList = SolutionStackDescription[];
  export type AvailableSolutionStackNamesList = SolutionStackName[];
  export interface CPUUtilization {
    /**
     * Percentage of time that the CPU has spent in the User state over the last 10 seconds.
     */
    User?: NullableDouble;
    /**
     * Percentage of time that the CPU has spent in the Nice state over the last 10 seconds.
     */
    Nice?: NullableDouble;
    /**
     * Percentage of time that the CPU has spent in the System state over the last 10 seconds.
     */
    System?: NullableDouble;
    /**
     * Percentage of time that the CPU has spent in the Idle state over the last 10 seconds.
     */
    Idle?: NullableDouble;
    /**
     * Percentage of time that the CPU has spent in the I/O Wait state over the last 10 seconds.
     */
    IOWait?: NullableDouble;
    /**
     * Percentage of time that the CPU has spent in the IRQ state over the last 10 seconds.
     */
    IRQ?: NullableDouble;
    /**
     * Percentage of time that the CPU has spent in the SoftIRQ state over the last 10 seconds.
     */
    SoftIRQ?: NullableDouble;
  }
  export type Cause = string;
  export type Causes = Cause[];
  export interface CheckDNSAvailabilityMessage {
    /**
     * The prefix used when this CNAME is reserved.
     */
    CNAMEPrefix: DNSCnamePrefix;
  }
  export interface CheckDNSAvailabilityResultMessage {
    /**
     * Indicates if the specified CNAME is available:    true : The CNAME is available.    false : The CNAME is not available.  
     */
    Available?: CnameAvailability;
    /**
     * The fully qualified CNAME to reserve when CreateEnvironment is called with the provided prefix.
     */
    FullyQualifiedCNAME?: DNSCname;
  }
  export type CnameAvailability = boolean;
  export interface ComposeEnvironmentsMessage {
    /**
     * The name of the application to which the specified source bundles belong.
     */
    ApplicationName?: ApplicationName;
    /**
     * The name of the group to which the target environments belong. Specify a group name only if the environment name defined in each target environment's manifest ends with a + (plus) character. See Environment Manifest (env.yaml) for details.
     */
    GroupName?: GroupName;
    /**
     * A list of version labels, specifying one or more application source bundles that belong to the target application. Each source bundle must include an environment manifest that specifies the name of the environment and the name of the solution stack to use, and optionally can specify environment links to create.
     */
    VersionLabels?: VersionLabels;
  }
  export type ConfigurationDeploymentStatus = "deployed"|"pending"|"failed"|string;
  export type ConfigurationOptionDefaultValue = string;
  export interface ConfigurationOptionDescription {
    /**
     * A unique namespace identifying the option's associated AWS resource.
     */
    Namespace?: OptionNamespace;
    /**
     * The name of the configuration option.
     */
    Name?: ConfigurationOptionName;
    /**
     * The default value for this configuration option.
     */
    DefaultValue?: ConfigurationOptionDefaultValue;
    /**
     * An indication of which action is required if the value for this configuration option changes:    NoInterruption : There is no interruption to the environment or application availability.    RestartEnvironment : The environment is entirely restarted, all AWS resources are deleted and recreated, and the environment is unavailable during the process.    RestartApplicationServer : The environment is available the entire time. However, a short application outage occurs when the application servers on the running Amazon EC2 instances are restarted.  
     */
    ChangeSeverity?: ConfigurationOptionSeverity;
    /**
     * An indication of whether the user defined this configuration option:    true : This configuration option was defined by the user. It is a valid choice for specifying if this as an Option to Remove when updating configuration settings.     false : This configuration was not defined by the user.    Constraint: You can remove only UserDefined options from a configuration.   Valid Values: true | false 
     */
    UserDefined?: UserDefinedOption;
    /**
     * An indication of which type of values this option has and whether it is allowable to select one or more than one of the possible values:    Scalar : Values for this option are a single selection from the possible values, or an unformatted string, or numeric value governed by the MIN/MAX/Regex constraints.    List : Values for this option are multiple selections from the possible values.    Boolean : Values for this option are either true or false .    Json : Values for this option are a JSON representation of a ConfigDocument.  
     */
    ValueType?: ConfigurationOptionValueType;
    /**
     * If specified, values for the configuration option are selected from this list.
     */
    ValueOptions?: ConfigurationOptionPossibleValues;
    /**
     * If specified, the configuration option must be a numeric value greater than this value.
     */
    MinValue?: OptionRestrictionMinValue;
    /**
     * If specified, the configuration option must be a numeric value less than this value.
     */
    MaxValue?: OptionRestrictionMaxValue;
    /**
     * If specified, the configuration option must be a string value no longer than this value.
     */
    MaxLength?: OptionRestrictionMaxLength;
    /**
     * If specified, the configuration option must be a string value that satisfies this regular expression.
     */
    Regex?: OptionRestrictionRegex;
  }
  export type ConfigurationOptionDescriptionsList = ConfigurationOptionDescription[];
  export type ConfigurationOptionName = string;
  export type ConfigurationOptionPossibleValue = string;
  export type ConfigurationOptionPossibleValues = ConfigurationOptionPossibleValue[];
  export interface ConfigurationOptionSetting {
    /**
     * A unique resource name for a time-based scaling configuration option.
     */
    ResourceName?: ResourceName;
    /**
     * A unique namespace identifying the option's associated AWS resource.
     */
    Namespace?: OptionNamespace;
    /**
     * The name of the configuration option.
     */
    OptionName?: ConfigurationOptionName;
    /**
     * The current value for the configuration option.
     */
    Value?: ConfigurationOptionValue;
  }
  export type ConfigurationOptionSettingsList = ConfigurationOptionSetting[];
  export type ConfigurationOptionSeverity = string;
  export type ConfigurationOptionValue = string;
  export type ConfigurationOptionValueType = "Scalar"|"List"|string;
  export interface ConfigurationOptionsDescription {
    /**
     * The name of the solution stack these configuration options belong to.
     */
    SolutionStackName?: SolutionStackName;
    /**
     *  A list of ConfigurationOptionDescription. 
     */
    Options?: ConfigurationOptionDescriptionsList;
  }
  export interface ConfigurationSettingsDescription {
    /**
     * The name of the solution stack this configuration set uses.
     */
    SolutionStackName?: SolutionStackName;
    /**
     * The name of the application associated with this configuration set.
     */
    ApplicationName?: ApplicationName;
    /**
     *  If not null, the name of the configuration template for this configuration set. 
     */
    TemplateName?: ConfigurationTemplateName;
    /**
     * Describes this configuration set.
     */
    Description?: Description;
    /**
     *  If not null, the name of the environment for this configuration set. 
     */
    EnvironmentName?: EnvironmentName;
    /**
     *  If this configuration set is associated with an environment, the DeploymentStatus parameter indicates the deployment status of this configuration set:     null: This configuration is not associated with a running environment.    pending: This is a draft configuration that is not deployed to the associated environment but is in the process of deploying.    deployed: This is the configuration that is currently deployed to the associated running environment.    failed: This is a draft configuration that failed to successfully deploy.  
     */
    DeploymentStatus?: ConfigurationDeploymentStatus;
    /**
     * The date (in UTC time) when this configuration set was created.
     */
    DateCreated?: CreationDate;
    /**
     * The date (in UTC time) when this configuration set was last modified.
     */
    DateUpdated?: UpdateDate;
    /**
     * A list of the configuration options and their values in this configuration set.
     */
    OptionSettings?: ConfigurationOptionSettingsList;
  }
  export type ConfigurationSettingsDescriptionList = ConfigurationSettingsDescription[];
  export interface ConfigurationSettingsDescriptions {
    /**
     *  A list of ConfigurationSettingsDescription. 
     */
    ConfigurationSettings?: ConfigurationSettingsDescriptionList;
  }
  export interface ConfigurationSettingsValidationMessages {
    /**
     *  A list of ValidationMessage. 
     */
    Messages?: ValidationMessagesList;
  }
  export type ConfigurationTemplateName = string;
  export type ConfigurationTemplateNamesList = ConfigurationTemplateName[];
  export interface CreateApplicationMessage {
    /**
     * The name of the application. Constraint: This name must be unique within your account. If the specified name already exists, the action returns an InvalidParameterValue error.
     */
    ApplicationName: ApplicationName;
    /**
     * Describes the application.
     */
    Description?: Description;
  }
  export interface CreateApplicationVersionMessage {
    /**
     *  The name of the application. If no application is found with this name, and AutoCreateApplication is false, returns an InvalidParameterValue error. 
     */
    ApplicationName: ApplicationName;
    /**
     * A label identifying this version. Constraint: Must be unique per application. If an application version already exists with this label for the specified application, AWS Elastic Beanstalk returns an InvalidParameterValue error. 
     */
    VersionLabel: VersionLabel;
    /**
     * Describes this version.
     */
    Description?: Description;
    SourceBuildInformation?: SourceBuildInformation;
    /**
     * The Amazon S3 bucket and key that identify the location of the source bundle for this version.  If data found at the Amazon S3 location exceeds the maximum allowed source bundle size, AWS Elastic Beanstalk returns an InvalidParameterValue error. The maximum size allowed is 512 MB.  Default: If not specified, AWS Elastic Beanstalk uses a sample application. If only partially specified (for example, a bucket is provided but not the key) or if no data is found at the Amazon S3 location, AWS Elastic Beanstalk returns an InvalidParameterCombination error. 
     */
    SourceBundle?: S3Location;
    /**
     * Determines how the system behaves if the specified application for this version does not already exist:    true : Automatically creates the specified application for this release if it does not already exist.    false : Throws an InvalidParameterValue if the specified application for this release does not already exist.    Default: false   Valid Values: true | false 
     */
    AutoCreateApplication?: AutoCreateApplication;
    /**
     * Preprocesses and validates the environment manifest and configuration files in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment.
     */
    Process?: ApplicationVersionProccess;
  }
  export interface CreateConfigurationTemplateMessage {
    /**
     * The name of the application to associate with this configuration template. If no application is found with this name, AWS Elastic Beanstalk returns an InvalidParameterValue error. 
     */
    ApplicationName: ApplicationName;
    /**
     * The name of the configuration template. Constraint: This name must be unique per application. Default: If a configuration template already exists with this name, AWS Elastic Beanstalk returns an InvalidParameterValue error. 
     */
    TemplateName: ConfigurationTemplateName;
    /**
     * The name of the solution stack used by this configuration. The solution stack specifies the operating system, architecture, and application server for a configuration template. It determines the set of configuration options as well as the possible and default values.  Use ListAvailableSolutionStacks to obtain a list of available solution stacks.   A solution stack name or a source configuration parameter must be specified, otherwise AWS Elastic Beanstalk returns an InvalidParameterValue error.  If a solution stack name is not specified and the source configuration parameter is specified, AWS Elastic Beanstalk uses the same solution stack as the source configuration template.
     */
    SolutionStackName?: SolutionStackName;
    /**
     * If specified, AWS Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.  Values specified in the OptionSettings parameter of this call overrides any values obtained from the SourceConfiguration.   If no configuration template is found, returns an InvalidParameterValue error.   Constraint: If both the solution stack name parameter and the source configuration parameters are specified, the solution stack of the source configuration template must match the specified solution stack name or else AWS Elastic Beanstalk returns an InvalidParameterCombination error. 
     */
    SourceConfiguration?: SourceConfiguration;
    /**
     * The ID of the environment used with this configuration template.
     */
    EnvironmentId?: EnvironmentId;
    /**
     * Describes this configuration.
     */
    Description?: Description;
    /**
     * If specified, AWS Elastic Beanstalk sets the specified configuration option to the requested value. The new value overrides the value obtained from the solution stack or the source configuration template.
     */
    OptionSettings?: ConfigurationOptionSettingsList;
  }
  export interface CreateEnvironmentMessage {
    /**
     * The name of the application that contains the version to be deployed.  If no application is found with this name, CreateEnvironment returns an InvalidParameterValue error. 
     */
    ApplicationName: ApplicationName;
    /**
     * A unique name for the deployment environment. Used in the application URL. Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It cannot start or end with a hyphen. This name must be unique in your account. If the specified name already exists, AWS Elastic Beanstalk returns an InvalidParameterValue error.  Default: If the CNAME parameter is not specified, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.
     */
    EnvironmentName?: EnvironmentName;
    /**
     * The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name parameter. See Environment Manifest (env.yaml) for details.
     */
    GroupName?: GroupName;
    /**
     * Describes this environment.
     */
    Description?: Description;
    /**
     * If specified, the environment attempts to use this value as the prefix for the CNAME. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.
     */
    CNAMEPrefix?: DNSCnamePrefix;
    /**
     * This specifies the tier to use for creating this environment.
     */
    Tier?: EnvironmentTier;
    /**
     * This specifies the tags applied to resources in the environment.
     */
    Tags?: Tags;
    /**
     * The name of the application version to deploy.  If the specified application has no associated application versions, AWS Elastic Beanstalk UpdateEnvironment returns an InvalidParameterValue error.  Default: If not specified, AWS Elastic Beanstalk attempts to launch the sample application in the container.
     */
    VersionLabel?: VersionLabel;
    /**
     *  The name of the configuration template to use in deployment. If no configuration template is found with this name, AWS Elastic Beanstalk returns an InvalidParameterValue error.   Condition: You must specify either this parameter or a SolutionStackName, but not both. If you specify both, AWS Elastic Beanstalk returns an InvalidParameterCombination error. If you do not specify either, AWS Elastic Beanstalk returns a MissingRequiredParameter error. 
     */
    TemplateName?: ConfigurationTemplateName;
    /**
     * This is an alternative to specifying a template name. If specified, AWS Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack.  Condition: You must specify either this or a TemplateName, but not both. If you specify both, AWS Elastic Beanstalk returns an InvalidParameterCombination error. If you do not specify either, AWS Elastic Beanstalk returns a MissingRequiredParameter error. 
     */
    SolutionStackName?: SolutionStackName;
    /**
     * If specified, AWS Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template.
     */
    OptionSettings?: ConfigurationOptionSettingsList;
    /**
     * A list of custom user-defined configuration options to remove from the configuration set for this new environment.
     */
    OptionsToRemove?: OptionsSpecifierList;
  }
  export interface CreateStorageLocationResultMessage {
    /**
     * The name of the Amazon S3 bucket created.
     */
    S3Bucket?: S3Bucket;
  }
  export type CreationDate = Date;
  export type DNSCname = string;
  export type DNSCnamePrefix = string;
  export interface DeleteApplicationMessage {
    /**
     * The name of the application to delete.
     */
    ApplicationName: ApplicationName;
    /**
     * When set to true, running environments will be terminated before deleting the application.
     */
    TerminateEnvByForce?: TerminateEnvForce;
  }
  export interface DeleteApplicationVersionMessage {
    /**
     * The name of the application to delete releases from.
     */
    ApplicationName: ApplicationName;
    /**
     * The label of the version to delete.
     */
    VersionLabel: VersionLabel;
    /**
     * Indicates whether to delete the associated source bundle from Amazon S3:    true: An attempt is made to delete the associated Amazon S3 source bundle specified at time of creation.    false: No action is taken on the Amazon S3 source bundle specified at time of creation.    Valid Values: true | false 
     */
    DeleteSourceBundle?: DeleteSourceBundle;
  }
  export interface DeleteConfigurationTemplateMessage {
    /**
     * The name of the application to delete the configuration template from.
     */
    ApplicationName: ApplicationName;
    /**
     * The name of the configuration template to delete.
     */
    TemplateName: ConfigurationTemplateName;
  }
  export interface DeleteEnvironmentConfigurationMessage {
    /**
     * The name of the application the environment is associated with.
     */
    ApplicationName: ApplicationName;
    /**
     * The name of the environment to delete the draft configuration from.
     */
    EnvironmentName: EnvironmentName;
  }
  export type DeleteSourceBundle = boolean;
  export interface Deployment {
    /**
     * The version label of the application version in the deployment.
     */
    VersionLabel?: String;
    /**
     * The ID of the deployment. This number increases by one each time that you deploy source code or change instance configuration settings.
     */
    DeploymentId?: NullableLong;
    /**
     * The status of the deployment:    In Progress : The deployment is in progress.    Deployed : The deployment succeeded.    Failed : The deployment failed.  
     */
    Status?: String;
    /**
     * For in-progress deployments, the time that the deloyment started. For completed deployments, the time that the deployment ended.
     */
    DeploymentTime?: DeploymentTimestamp;
  }
  export type DeploymentTimestamp = Date;
  export interface DescribeApplicationVersionsMessage {
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include ones that are associated with the specified application.
     */
    ApplicationName?: ApplicationName;
    /**
     * If specified, restricts the returned descriptions to only include ones that have the specified version labels.
     */
    VersionLabels?: VersionLabelsList;
    /**
     * Specify a maximum number of application versions to paginate in the request.
     */
    MaxRecords?: MaxRecords;
    /**
     * Specify a next token to retrieve the next page in a paginated request.
     */
    NextToken?: Token;
  }
  export interface DescribeApplicationsMessage {
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include those with the specified names.
     */
    ApplicationNames?: ApplicationNamesList;
  }
  export interface DescribeConfigurationOptionsMessage {
    /**
     * The name of the application associated with the configuration template or environment. Only needed if you want to describe the configuration options associated with either the configuration template or environment.
     */
    ApplicationName?: ApplicationName;
    /**
     * The name of the configuration template whose configuration options you want to describe.
     */
    TemplateName?: ConfigurationTemplateName;
    /**
     * The name of the environment whose configuration options you want to describe.
     */
    EnvironmentName?: EnvironmentName;
    /**
     * The name of the solution stack whose configuration options you want to describe.
     */
    SolutionStackName?: SolutionStackName;
    /**
     * If specified, restricts the descriptions to only the specified options.
     */
    Options?: OptionsSpecifierList;
  }
  export interface DescribeConfigurationSettingsMessage {
    /**
     * The application for the environment or configuration template.
     */
    ApplicationName: ApplicationName;
    /**
     * The name of the configuration template to describe.  Conditional: You must specify either this parameter or an EnvironmentName, but not both. If you specify both, AWS Elastic Beanstalk returns an InvalidParameterCombination error. If you do not specify either, AWS Elastic Beanstalk returns a MissingRequiredParameter error. 
     */
    TemplateName?: ConfigurationTemplateName;
    /**
     * The name of the environment to describe.  Condition: You must specify either this or a TemplateName, but not both. If you specify both, AWS Elastic Beanstalk returns an InvalidParameterCombination error. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentName?: EnvironmentName;
  }
  export interface DescribeEnvironmentHealthRequest {
    /**
     * Specifies the AWS Elastic Beanstalk environment name. Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentName?: EnvironmentName;
    /**
     * Specifies the AWS Elastic Beanstalk environment ID. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentId?: EnvironmentId;
    /**
     * Specifies the response elements you wish to receive. If no attribute names are specified, AWS Elastic Beanstalk only returns the name of the environment.
     */
    AttributeNames?: EnvironmentHealthAttributes;
  }
  export interface DescribeEnvironmentHealthResult {
    /**
     * The AWS Elastic Beanstalk environment name.
     */
    EnvironmentName?: EnvironmentName;
    /**
     * Contains the response body with information about the health of the environment.
     */
    HealthStatus?: String;
    /**
     * Returns the health status value of the environment. For more information, see Health Colors and Statuses.
     */
    Status?: EnvironmentHealth;
    /**
     * Returns the color indicator that tells you information about the health of the environment. For more information, see Health Colors and Statuses.
     */
    Color?: String;
    /**
     * Returns potential causes for the reported status.
     */
    Causes?: Causes;
    ApplicationMetrics?: ApplicationMetrics;
    InstancesHealth?: InstanceHealthSummary;
    /**
     * The date and time the information was last refreshed.
     */
    RefreshedAt?: RefreshedAt;
  }
  export interface DescribeEnvironmentManagedActionHistoryRequest {
    /**
     * The environment ID of the target environment.
     */
    EnvironmentId?: EnvironmentId;
    /**
     * The name of the target environment.
     */
    EnvironmentName?: EnvironmentName;
    /**
     * The pagination token returned by a previous request.
     */
    NextToken?: String;
    /**
     * The maximum number of items to return for a single request.
     */
    MaxItems?: Integer;
  }
  export interface DescribeEnvironmentManagedActionHistoryResult {
    /**
     * A list of completed and failed managed actions.
     */
    ManagedActionHistoryItems?: ManagedActionHistoryItems;
    /**
     * A pagination token that you pass to DescribeEnvironmentManagedActionHistory to get the next page of results.
     */
    NextToken?: String;
  }
  export interface DescribeEnvironmentManagedActionsRequest {
    /**
     * The name of the target environment.
     */
    EnvironmentName?: String;
    /**
     * The environment ID of the target environment.
     */
    EnvironmentId?: String;
    /**
     * To show only actions with a particular status, specify a status.
     */
    Status?: ActionStatus;
  }
  export interface DescribeEnvironmentManagedActionsResult {
    /**
     * A list of upcoming and in-progress managed actions.
     */
    ManagedActions?: ManagedActions;
  }
  export interface DescribeEnvironmentResourcesMessage {
    /**
     * The ID of the environment to retrieve AWS resource usage data.  Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentId?: EnvironmentId;
    /**
     * The name of the environment to retrieve AWS resource usage data.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentName?: EnvironmentName;
  }
  export interface DescribeEnvironmentsMessage {
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application.
     */
    ApplicationName?: ApplicationName;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version.
     */
    VersionLabel?: VersionLabel;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs.
     */
    EnvironmentIds?: EnvironmentIdList;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names.
     */
    EnvironmentNames?: EnvironmentNamesList;
    /**
     * Indicates whether to include deleted environments:  true: Environments that have been deleted after IncludedDeletedBackTo are displayed.  false: Do not include deleted environments.
     */
    IncludeDeleted?: IncludeDeleted;
    /**
     *  If specified when IncludeDeleted is set to true, then environments deleted after this date are displayed. 
     */
    IncludedDeletedBackTo?: IncludeDeletedBackTo;
  }
  export interface DescribeEventsMessage {
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those associated with this application.
     */
    ApplicationName?: ApplicationName;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this application version.
     */
    VersionLabel?: VersionLabel;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration.
     */
    TemplateName?: ConfigurationTemplateName;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.
     */
    EnvironmentId?: EnvironmentId;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.
     */
    EnvironmentName?: EnvironmentName;
    /**
     * If specified, AWS Elastic Beanstalk restricts the described events to include only those associated with this request ID.
     */
    RequestId?: RequestId;
    /**
     * If specified, limits the events returned from this call to include only those with the specified severity or higher.
     */
    Severity?: EventSeverity;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time.
     */
    StartTime?: TimeFilterStart;
    /**
     *  If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the EndTime. 
     */
    EndTime?: TimeFilterEnd;
    /**
     * Specifies the maximum number of events that can be returned, beginning with the most recent event.
     */
    MaxRecords?: MaxRecords;
    /**
     * Pagination token. If specified, the events return the next batch of results.
     */
    NextToken?: Token;
  }
  export interface DescribeInstancesHealthRequest {
    /**
     * Specifies the AWS Elastic Beanstalk environment name.
     */
    EnvironmentName?: EnvironmentName;
    /**
     * Specifies the AWS Elastic Beanstalk environment ID.
     */
    EnvironmentId?: EnvironmentId;
    /**
     * Specifies the response elements you wish to receive. If no attribute names are specified, AWS Elastic Beanstalk only returns a list of instances.
     */
    AttributeNames?: InstancesHealthAttributes;
    /**
     * Specifies the next token of the request.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstancesHealthResult {
    /**
     * Contains the response body with information about the health of the instance.
     */
    InstanceHealthList?: InstanceHealthList;
    /**
     * The date and time the information was last refreshed.
     */
    RefreshedAt?: RefreshedAt;
    /**
     * The next token.
     */
    NextToken?: NextToken;
  }
  export type Description = string;
  export type Ec2InstanceId = string;
  export type EndpointURL = string;
  export interface EnvironmentDescription {
    /**
     * The name of this environment.
     */
    EnvironmentName?: EnvironmentName;
    /**
     * The ID of this environment.
     */
    EnvironmentId?: EnvironmentId;
    /**
     * The name of the application associated with this environment.
     */
    ApplicationName?: ApplicationName;
    /**
     * The application version deployed in this environment.
     */
    VersionLabel?: VersionLabel;
    /**
     *  The name of the SolutionStack deployed with this environment. 
     */
    SolutionStackName?: SolutionStackName;
    /**
     * The name of the configuration template used to originally launch this environment.
     */
    TemplateName?: ConfigurationTemplateName;
    /**
     * Describes this environment.
     */
    Description?: Description;
    /**
     * For load-balanced, autoscaling environments, the URL to the LoadBalancer. For single-instance environments, the IP address of the instance.
     */
    EndpointURL?: EndpointURL;
    /**
     * The URL to the CNAME for this environment.
     */
    CNAME?: DNSCname;
    /**
     * The creation date for this environment.
     */
    DateCreated?: CreationDate;
    /**
     * The last modified date for this environment.
     */
    DateUpdated?: UpdateDate;
    /**
     * The current operational status of the environment:    Launching: Environment is in the process of initial deployment.    Updating: Environment is in the process of updating its configuration settings or application version.    Ready: Environment is available to have an action performed on it, such as update or terminate.    Terminating: Environment is in the shut-down process.    Terminated: Environment is not running.  
     */
    Status?: EnvironmentStatus;
    /**
     * Indicates if there is an in-progress environment configuration update or application version deployment that you can cancel.  true: There is an update in progress.   false: There are no updates currently in progress. 
     */
    AbortableOperationInProgress?: AbortableOperationInProgress;
    /**
     * Describes the health status of the environment. AWS Elastic Beanstalk indicates the failure levels for a running environment:    Red: Indicates the environment is not responsive. Occurs when three or more consecutive failures occur for an environment.    Yellow: Indicates that something is wrong. Occurs when two consecutive failures occur for an environment.    Green: Indicates the environment is healthy and fully functional.    Grey: Default health for a new environment. The environment is not fully launched and health checks have not started or health checks are suspended during an UpdateEnvironment or RestartEnvironement request.    Default: Grey 
     */
    Health?: EnvironmentHealth;
    /**
     * Returns the health status of the application running in your environment. For more information, see Health Colors and Statuses.
     */
    HealthStatus?: EnvironmentHealthStatus;
    /**
     * The description of the AWS resources used by this environment.
     */
    Resources?: EnvironmentResourcesDescription;
    /**
     * Describes the current tier of this environment.
     */
    Tier?: EnvironmentTier;
    /**
     * A list of links to other environments in the same group.
     */
    EnvironmentLinks?: EnvironmentLinks;
  }
  export type EnvironmentDescriptionsList = EnvironmentDescription[];
  export interface EnvironmentDescriptionsMessage {
    /**
     *  Returns an EnvironmentDescription list. 
     */
    Environments?: EnvironmentDescriptionsList;
  }
  export type EnvironmentHealth = "Green"|"Yellow"|"Red"|"Grey"|string;
  export type EnvironmentHealthAttribute = "Status"|"Color"|"Causes"|"ApplicationMetrics"|"InstancesHealth"|"All"|"HealthStatus"|"RefreshedAt"|string;
  export type EnvironmentHealthAttributes = EnvironmentHealthAttribute[];
  export type EnvironmentHealthStatus = "NoData"|"Unknown"|"Pending"|"Ok"|"Info"|"Warning"|"Degraded"|"Severe"|string;
  export type EnvironmentId = string;
  export type EnvironmentIdList = EnvironmentId[];
  export interface EnvironmentInfoDescription {
    /**
     * The type of information retrieved.
     */
    InfoType?: EnvironmentInfoType;
    /**
     * The Amazon EC2 Instance ID for this information.
     */
    Ec2InstanceId?: Ec2InstanceId;
    /**
     * The time stamp when this information was retrieved.
     */
    SampleTimestamp?: SampleTimestamp;
    /**
     * The retrieved information.
     */
    Message?: Message;
  }
  export type EnvironmentInfoDescriptionList = EnvironmentInfoDescription[];
  export type EnvironmentInfoType = "tail"|"bundle"|string;
  export interface EnvironmentLink {
    /**
     * The name of the link.
     */
    LinkName?: String;
    /**
     * The name of the linked environment (the dependency).
     */
    EnvironmentName?: String;
  }
  export type EnvironmentLinks = EnvironmentLink[];
  export type EnvironmentName = string;
  export type EnvironmentNamesList = EnvironmentName[];
  export interface EnvironmentResourceDescription {
    /**
     * The name of the environment.
     */
    EnvironmentName?: EnvironmentName;
    /**
     *  The AutoScalingGroups used by this environment. 
     */
    AutoScalingGroups?: AutoScalingGroupList;
    /**
     * The Amazon EC2 instances used by this environment.
     */
    Instances?: InstanceList;
    /**
     * The Auto Scaling launch configurations in use by this environment.
     */
    LaunchConfigurations?: LaunchConfigurationList;
    /**
     * The LoadBalancers in use by this environment.
     */
    LoadBalancers?: LoadBalancerList;
    /**
     * The AutoScaling triggers in use by this environment. 
     */
    Triggers?: TriggerList;
    /**
     * The queues used by this environment.
     */
    Queues?: QueueList;
  }
  export interface EnvironmentResourceDescriptionsMessage {
    /**
     *  A list of EnvironmentResourceDescription. 
     */
    EnvironmentResources?: EnvironmentResourceDescription;
  }
  export interface EnvironmentResourcesDescription {
    /**
     * Describes the LoadBalancer.
     */
    LoadBalancer?: LoadBalancerDescription;
  }
  export type EnvironmentStatus = "Launching"|"Updating"|"Ready"|"Terminating"|"Terminated"|string;
  export interface EnvironmentTier {
    /**
     * The name of this environment tier.
     */
    Name?: String;
    /**
     * The type of this environment tier.
     */
    Type?: String;
    /**
     * The version of this environment tier.
     */
    Version?: String;
  }
  export type EventDate = Date;
  export interface EventDescription {
    /**
     * The date when the event occurred.
     */
    EventDate?: EventDate;
    /**
     * The event message.
     */
    Message?: EventMessage;
    /**
     * The application associated with the event.
     */
    ApplicationName?: ApplicationName;
    /**
     * The release label for the application version associated with this event.
     */
    VersionLabel?: VersionLabel;
    /**
     * The name of the configuration associated with this event.
     */
    TemplateName?: ConfigurationTemplateName;
    /**
     * The name of the environment associated with this event.
     */
    EnvironmentName?: EnvironmentName;
    /**
     * The web service request ID for the activity of this event.
     */
    RequestId?: RequestId;
    /**
     * The severity level of this event.
     */
    Severity?: EventSeverity;
  }
  export type EventDescriptionList = EventDescription[];
  export interface EventDescriptionsMessage {
    /**
     *  A list of EventDescription. 
     */
    Events?: EventDescriptionList;
    /**
     *  If returned, this indicates that there are more results to obtain. Use this token in the next DescribeEvents call to get the next batch of events. 
     */
    NextToken?: Token;
  }
  export type EventMessage = string;
  export type EventSeverity = "TRACE"|"DEBUG"|"INFO"|"WARN"|"ERROR"|"FATAL"|string;
  export type ExceptionMessage = string;
  export type FailureType = "UpdateCancelled"|"CancellationFailed"|"RollbackFailed"|"RollbackSuccessful"|"InternalFailure"|"InvalidEnvironmentState"|"PermissionsError"|string;
  export type FileTypeExtension = string;
  export type ForceTerminate = boolean;
  export type GroupName = string;
  export type IncludeDeleted = boolean;
  export type IncludeDeletedBackTo = Date;
  export interface Instance {
    /**
     * The ID of the Amazon EC2 instance.
     */
    Id?: ResourceId;
  }
  export type InstanceHealthList = SingleInstanceHealth[];
  export interface InstanceHealthSummary {
    /**
     *  Grey. AWS Elastic Beanstalk and the health agent are reporting no data on an instance.
     */
    NoData?: NullableInteger;
    /**
     *  Grey. AWS Elastic Beanstalk and the health agent are reporting an insufficient amount of data on an instance.
     */
    Unknown?: NullableInteger;
    /**
     *  Grey. An operation is in progress on an instance within the command timeout.
     */
    Pending?: NullableInteger;
    /**
     *  Green. An instance is passing health checks and the health agent is not reporting any problems.
     */
    Ok?: NullableInteger;
    /**
     *  Green. An operation is in progress on an instance.
     */
    Info?: NullableInteger;
    /**
     *  Yellow. The health agent is reporting a moderate number of request failures or other issues for an instance or environment.
     */
    Warning?: NullableInteger;
    /**
     *  Red. The health agent is reporting a high number of request failures or other issues for an instance or environment.
     */
    Degraded?: NullableInteger;
    /**
     *  Red. The health agent is reporting a very high number of request failures or other issues for an instance or environment.
     */
    Severe?: NullableInteger;
  }
  export type InstanceId = string;
  export type InstanceList = Instance[];
  export type InstancesHealthAttribute = "HealthStatus"|"Color"|"Causes"|"ApplicationMetrics"|"RefreshedAt"|"LaunchedAt"|"System"|"Deployment"|"AvailabilityZone"|"InstanceType"|"All"|string;
  export type InstancesHealthAttributes = InstancesHealthAttribute[];
  export type Integer = number;
  export interface Latency {
    /**
     * The average latency for the slowest 0.1 percent of requests over the last 10 seconds.
     */
    P999?: NullableDouble;
    /**
     * The average latency for the slowest 1 percent of requests over the last 10 seconds.
     */
    P99?: NullableDouble;
    /**
     * The average latency for the slowest 5 percent of requests over the last 10 seconds.
     */
    P95?: NullableDouble;
    /**
     * The average latency for the slowest 10 percent of requests over the last 10 seconds.
     */
    P90?: NullableDouble;
    /**
     * The average latency for the slowest 15 percent of requests over the last 10 seconds.
     */
    P85?: NullableDouble;
    /**
     * The average latency for the slowest 25 percent of requests over the last 10 seconds.
     */
    P75?: NullableDouble;
    /**
     * The average latency for the slowest 50 percent of requests over the last 10 seconds.
     */
    P50?: NullableDouble;
    /**
     * The average latency for the slowest 90 percent of requests over the last 10 seconds.
     */
    P10?: NullableDouble;
  }
  export interface LaunchConfiguration {
    /**
     * The name of the launch configuration.
     */
    Name?: ResourceId;
  }
  export type LaunchConfigurationList = LaunchConfiguration[];
  export type LaunchedAt = Date;
  export interface ListAvailableSolutionStacksResultMessage {
    /**
     * A list of available solution stacks.
     */
    SolutionStacks?: AvailableSolutionStackNamesList;
    /**
     *  A list of available solution stacks and their SolutionStackDescription. 
     */
    SolutionStackDetails?: AvailableSolutionStackDetailsList;
  }
  export interface Listener {
    /**
     * The protocol that is used by the Listener.
     */
    Protocol?: String;
    /**
     * The port that is used by the Listener.
     */
    Port?: Integer;
  }
  export type LoadAverage = LoadAverageValue[];
  export type LoadAverageValue = number;
  export interface LoadBalancer {
    /**
     * The name of the LoadBalancer.
     */
    Name?: ResourceId;
  }
  export interface LoadBalancerDescription {
    /**
     * The name of the LoadBalancer.
     */
    LoadBalancerName?: String;
    /**
     * The domain name of the LoadBalancer.
     */
    Domain?: String;
    /**
     * A list of Listeners used by the LoadBalancer.
     */
    Listeners?: LoadBalancerListenersDescription;
  }
  export type LoadBalancerList = LoadBalancer[];
  export type LoadBalancerListenersDescription = Listener[];
  export interface ManagedAction {
    /**
     * A unique identifier for the managed action.
     */
    ActionId?: String;
    /**
     * A description of the managed action.
     */
    ActionDescription?: String;
    /**
     * The type of managed action.
     */
    ActionType?: ActionType;
    /**
     * The status of the managed action. If the action is Scheduled, you can apply it immediately with ApplyEnvironmentManagedAction.
     */
    Status?: ActionStatus;
    /**
     * The start time of the maintenance window in which the managed action will execute.
     */
    WindowStartTime?: Timestamp;
  }
  export interface ManagedActionHistoryItem {
    /**
     * A unique identifier for the managed action.
     */
    ActionId?: String;
    /**
     * The type of the managed action.
     */
    ActionType?: ActionType;
    /**
     * A description of the managed action.
     */
    ActionDescription?: String;
    /**
     * If the action failed, the type of failure.
     */
    FailureType?: FailureType;
    /**
     * The status of the action.
     */
    Status?: ActionHistoryStatus;
    /**
     * If the action failed, a description of the failure.
     */
    FailureDescription?: String;
    /**
     * The date and time that the action started executing.
     */
    ExecutedTime?: Timestamp;
    /**
     * The date and time that the action finished executing.
     */
    FinishedTime?: Timestamp;
  }
  export type ManagedActionHistoryItems = ManagedActionHistoryItem[];
  export type ManagedActions = ManagedAction[];
  export type MaxRecords = number;
  export type Message = string;
  export type NextToken = string;
  export type NullableDouble = number;
  export type NullableInteger = number;
  export type NullableLong = number;
  export type OptionNamespace = string;
  export type OptionRestrictionMaxLength = number;
  export type OptionRestrictionMaxValue = number;
  export type OptionRestrictionMinValue = number;
  export interface OptionRestrictionRegex {
    /**
     * The regular expression pattern that a string configuration option value with this restriction must match.
     */
    Pattern?: RegexPattern;
    /**
     * A unique name representing this regular expression.
     */
    Label?: RegexLabel;
  }
  export interface OptionSpecification {
    /**
     * A unique resource name for a time-based scaling configuration option.
     */
    ResourceName?: ResourceName;
    /**
     * A unique namespace identifying the option's associated AWS resource.
     */
    Namespace?: OptionNamespace;
    /**
     * The name of the configuration option.
     */
    OptionName?: ConfigurationOptionName;
  }
  export type OptionsSpecifierList = OptionSpecification[];
  export interface Queue {
    /**
     * The name of the queue.
     */
    Name?: String;
    /**
     * The URL of the queue.
     */
    URL?: String;
  }
  export type QueueList = Queue[];
  export interface RebuildEnvironmentMessage {
    /**
     * The ID of the environment to rebuild.  Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentId?: EnvironmentId;
    /**
     * The name of the environment to rebuild.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentName?: EnvironmentName;
  }
  export type RefreshedAt = Date;
  export type RegexLabel = string;
  export type RegexPattern = string;
  export type RequestCount = number;
  export interface RequestEnvironmentInfoMessage {
    /**
     * The ID of the environment of the requested data. If no such environment is found, RequestEnvironmentInfo returns an InvalidParameterValue error.  Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentId?: EnvironmentId;
    /**
     * The name of the environment of the requested data. If no such environment is found, RequestEnvironmentInfo returns an InvalidParameterValue error.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentName?: EnvironmentName;
    /**
     * The type of information to request.
     */
    InfoType: EnvironmentInfoType;
  }
  export type RequestId = string;
  export type ResourceId = string;
  export type ResourceName = string;
  export interface RestartAppServerMessage {
    /**
     * The ID of the environment to restart the server for.  Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentId?: EnvironmentId;
    /**
     * The name of the environment to restart the server for.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentName?: EnvironmentName;
  }
  export interface RetrieveEnvironmentInfoMessage {
    /**
     * The ID of the data's environment. If no such environment is found, returns an InvalidParameterValue error. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error.
     */
    EnvironmentId?: EnvironmentId;
    /**
     * The name of the data's environment.  If no such environment is found, returns an InvalidParameterValue error.   Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentName?: EnvironmentName;
    /**
     * The type of information to retrieve.
     */
    InfoType: EnvironmentInfoType;
  }
  export interface RetrieveEnvironmentInfoResultMessage {
    /**
     *  The EnvironmentInfoDescription of the environment. 
     */
    EnvironmentInfo?: EnvironmentInfoDescriptionList;
  }
  export type S3Bucket = string;
  export type S3Key = string;
  export interface S3Location {
    /**
     * The Amazon S3 bucket where the data is located.
     */
    S3Bucket?: S3Bucket;
    /**
     * The Amazon S3 key where the data is located.
     */
    S3Key?: S3Key;
  }
  export type SampleTimestamp = Date;
  export interface SingleInstanceHealth {
    /**
     * The ID of the Amazon EC2 instance.
     */
    InstanceId?: InstanceId;
    /**
     * Returns the health status of the specified instance. For more information, see Health Colors and Statuses.
     */
    HealthStatus?: String;
    /**
     * Represents the color indicator that gives you information about the health of the EC2 instance. For more information, see Health Colors and Statuses.
     */
    Color?: String;
    /**
     * Represents the causes, which provide more information about the current health status.
     */
    Causes?: Causes;
    /**
     * The time at which the EC2 instance was launched.
     */
    LaunchedAt?: LaunchedAt;
    ApplicationMetrics?: ApplicationMetrics;
    System?: SystemStatus;
    /**
     * Information about the most recent deployment to an instance.
     */
    Deployment?: Deployment;
    /**
     * The availability zone in which the instance runs.
     */
    AvailabilityZone?: String;
    /**
     * The instance's type.
     */
    InstanceType?: String;
  }
  export interface SolutionStackDescription {
    /**
     * The name of the solution stack.
     */
    SolutionStackName?: SolutionStackName;
    /**
     * The permitted file types allowed for a solution stack.
     */
    PermittedFileTypes?: SolutionStackFileTypeList;
  }
  export type SolutionStackFileTypeList = FileTypeExtension[];
  export type SolutionStackName = string;
  export interface SourceBuildInformation {
    SourceType: SourceType;
    SourceRepository: SourceRepository;
    SourceLocation: SourceLocation;
  }
  export interface SourceConfiguration {
    /**
     * The name of the application associated with the configuration.
     */
    ApplicationName?: ApplicationName;
    /**
     * The name of the configuration template.
     */
    TemplateName?: ConfigurationTemplateName;
  }
  export type SourceLocation = string;
  export type SourceRepository = "CodeCommit"|string;
  export type SourceType = "Git"|string;
  export interface StatusCodes {
    /**
     * The percentage of requests over the last 10 seconds that resulted in a 2xx (200, 201, etc.) status code.
     */
    Status2xx?: NullableInteger;
    /**
     * The percentage of requests over the last 10 seconds that resulted in a 3xx (300, 301, etc.) status code.
     */
    Status3xx?: NullableInteger;
    /**
     * The percentage of requests over the last 10 seconds that resulted in a 4xx (400, 401, etc.) status code.
     */
    Status4xx?: NullableInteger;
    /**
     * The percentage of requests over the last 10 seconds that resulted in a 5xx (500, 501, etc.) status code.
     */
    Status5xx?: NullableInteger;
  }
  export type String = string;
  export interface SwapEnvironmentCNAMEsMessage {
    /**
     * The ID of the source environment.  Condition: You must specify at least the SourceEnvironmentID or the SourceEnvironmentName. You may also specify both. If you specify the SourceEnvironmentId, you must specify the DestinationEnvironmentId. 
     */
    SourceEnvironmentId?: EnvironmentId;
    /**
     * The name of the source environment.  Condition: You must specify at least the SourceEnvironmentID or the SourceEnvironmentName. You may also specify both. If you specify the SourceEnvironmentName, you must specify the DestinationEnvironmentName. 
     */
    SourceEnvironmentName?: EnvironmentName;
    /**
     * The ID of the destination environment.  Condition: You must specify at least the DestinationEnvironmentID or the DestinationEnvironmentName. You may also specify both. You must specify the SourceEnvironmentId with the DestinationEnvironmentId. 
     */
    DestinationEnvironmentId?: EnvironmentId;
    /**
     * The name of the destination environment.  Condition: You must specify at least the DestinationEnvironmentID or the DestinationEnvironmentName. You may also specify both. You must specify the SourceEnvironmentName with the DestinationEnvironmentName. 
     */
    DestinationEnvironmentName?: EnvironmentName;
  }
  export interface SystemStatus {
    CPUUtilization?: CPUUtilization;
    /**
     * Load average in the last 1-minute and 5-minute periods. For more information, see Operating System Metrics.
     */
    LoadAverage?: LoadAverage;
  }
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key?: TagKey;
    /**
     * The value of the tag.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagValue = string;
  export type Tags = Tag[];
  export type TerminateEnvForce = boolean;
  export interface TerminateEnvironmentMessage {
    /**
     * The ID of the environment to terminate.  Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentId?: EnvironmentId;
    /**
     * The name of the environment to terminate.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentName?: EnvironmentName;
    /**
     * Indicates whether the associated AWS resources should shut down when the environment is terminated:    true: The specified environment as well as the associated AWS resources, such as Auto Scaling group and LoadBalancer, are terminated.    false: AWS Elastic Beanstalk resource management is removed from the environment, but the AWS resources continue to operate.    For more information, see the  AWS Elastic Beanstalk User Guide.    Default: true   Valid Values: true | false 
     */
    TerminateResources?: TerminateEnvironmentResources;
    /**
     * Terminates the target environment even if another environment in the same group is dependent on it.
     */
    ForceTerminate?: ForceTerminate;
  }
  export type TerminateEnvironmentResources = boolean;
  export type TimeFilterEnd = Date;
  export type TimeFilterStart = Date;
  export type Timestamp = Date;
  export type Token = string;
  export interface Trigger {
    /**
     * The name of the trigger.
     */
    Name?: ResourceId;
  }
  export type TriggerList = Trigger[];
  export interface UpdateApplicationMessage {
    /**
     * The name of the application to update. If no such application is found, UpdateApplication returns an InvalidParameterValue error. 
     */
    ApplicationName: ApplicationName;
    /**
     * A new description for the application. Default: If not specified, AWS Elastic Beanstalk does not update the description.
     */
    Description?: Description;
  }
  export interface UpdateApplicationVersionMessage {
    /**
     * The name of the application associated with this version.  If no application is found with this name, UpdateApplication returns an InvalidParameterValue error. 
     */
    ApplicationName: ApplicationName;
    /**
     * The name of the version to update.  If no application version is found with this label, UpdateApplication returns an InvalidParameterValue error. 
     */
    VersionLabel: VersionLabel;
    /**
     * A new description for this release.
     */
    Description?: Description;
  }
  export interface UpdateConfigurationTemplateMessage {
    /**
     * The name of the application associated with the configuration template to update.  If no application is found with this name, UpdateConfigurationTemplate returns an InvalidParameterValue error. 
     */
    ApplicationName: ApplicationName;
    /**
     * The name of the configuration template to update.  If no configuration template is found with this name, UpdateConfigurationTemplate returns an InvalidParameterValue error. 
     */
    TemplateName: ConfigurationTemplateName;
    /**
     * A new description for the configuration.
     */
    Description?: Description;
    /**
     * A list of configuration option settings to update with the new specified option value.
     */
    OptionSettings?: ConfigurationOptionSettingsList;
    /**
     * A list of configuration options to remove from the configuration set.  Constraint: You can remove only UserDefined configuration options. 
     */
    OptionsToRemove?: OptionsSpecifierList;
  }
  export type UpdateDate = Date;
  export interface UpdateEnvironmentMessage {
    /**
     * The name of the application with which the environment is associated.
     */
    ApplicationName?: ApplicationName;
    /**
     * The ID of the environment to update. If no environment with this ID exists, AWS Elastic Beanstalk returns an InvalidParameterValue error. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentId?: EnvironmentId;
    /**
     * The name of the environment to update. If no environment with this name exists, AWS Elastic Beanstalk returns an InvalidParameterValue error.  Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns MissingRequiredParameter error. 
     */
    EnvironmentName?: EnvironmentName;
    /**
     * The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name or environment ID parameters. See Environment Manifest (env.yaml) for details.
     */
    GroupName?: GroupName;
    /**
     * If this parameter is specified, AWS Elastic Beanstalk updates the description of this environment.
     */
    Description?: Description;
    /**
     * This specifies the tier to use to update the environment. Condition: At this time, if you change the tier version, name, or type, AWS Elastic Beanstalk returns InvalidParameterValue error. 
     */
    Tier?: EnvironmentTier;
    /**
     * If this parameter is specified, AWS Elastic Beanstalk deploys the named application version to the environment. If no such application version is found, returns an InvalidParameterValue error. 
     */
    VersionLabel?: VersionLabel;
    /**
     * If this parameter is specified, AWS Elastic Beanstalk deploys this configuration template to the environment. If no such configuration template is found, AWS Elastic Beanstalk returns an InvalidParameterValue error. 
     */
    TemplateName?: ConfigurationTemplateName;
    /**
     * This specifies the platform version that the environment will run after the environment is updated.
     */
    SolutionStackName?: SolutionStackName;
    /**
     * If specified, AWS Elastic Beanstalk updates the configuration set associated with the running environment and sets the specified configuration options to the requested value.
     */
    OptionSettings?: ConfigurationOptionSettingsList;
    /**
     * A list of custom user-defined configuration options to remove from the configuration set for this environment.
     */
    OptionsToRemove?: OptionsSpecifierList;
  }
  export type UserDefinedOption = boolean;
  export interface ValidateConfigurationSettingsMessage {
    /**
     * The name of the application that the configuration template or environment belongs to.
     */
    ApplicationName: ApplicationName;
    /**
     * The name of the configuration template to validate the settings against. Condition: You cannot specify both this and an environment name.
     */
    TemplateName?: ConfigurationTemplateName;
    /**
     * The name of the environment to validate the settings against. Condition: You cannot specify both this and a configuration template name.
     */
    EnvironmentName?: EnvironmentName;
    /**
     * A list of the options and desired values to evaluate.
     */
    OptionSettings: ConfigurationOptionSettingsList;
  }
  export interface ValidationMessage {
    /**
     * A message describing the error or warning.
     */
    Message?: ValidationMessageString;
    /**
     * An indication of the severity of this message:    error: This message indicates that this is not a valid setting for an option.    warning: This message is providing information you should take into account.  
     */
    Severity?: ValidationSeverity;
    /**
     * 
     */
    Namespace?: OptionNamespace;
    /**
     * 
     */
    OptionName?: ConfigurationOptionName;
  }
  export type ValidationMessageString = string;
  export type ValidationMessagesList = ValidationMessage[];
  export type ValidationSeverity = "error"|"warning"|string;
  export type VersionLabel = string;
  export type VersionLabels = VersionLabel[];
  export type VersionLabelsList = VersionLabel[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2010-12-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = ElasticBeanstalk;
