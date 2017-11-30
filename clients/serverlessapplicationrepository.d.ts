import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ServerlessApplicationRepository extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ServerlessApplicationRepository.Types.ClientConfiguration)
  config: Config & ServerlessApplicationRepository.Types.ClientConfiguration;
  /**
   * Creates an application, optionally including an AWS SAM file to create the first application version in the same call.
   */
  createApplication(params: ServerlessApplicationRepository.Types.CreateApplicationRequest, callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.CreateApplicationResponse) => void): Request<ServerlessApplicationRepository.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates an application, optionally including an AWS SAM file to create the first application version in the same call.
   */
  createApplication(callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.CreateApplicationResponse) => void): Request<ServerlessApplicationRepository.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates an application version.
   */
  createApplicationVersion(params: ServerlessApplicationRepository.Types.CreateApplicationVersionRequest, callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.CreateApplicationVersionResponse) => void): Request<ServerlessApplicationRepository.Types.CreateApplicationVersionResponse, AWSError>;
  /**
   * Creates an application version.
   */
  createApplicationVersion(callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.CreateApplicationVersionResponse) => void): Request<ServerlessApplicationRepository.Types.CreateApplicationVersionResponse, AWSError>;
  /**
   * Creates an AWS CloudFormation ChangeSet for the given application.
   */
  createCloudFormationChangeSet(params: ServerlessApplicationRepository.Types.CreateCloudFormationChangeSetRequest, callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.CreateCloudFormationChangeSetResponse) => void): Request<ServerlessApplicationRepository.Types.CreateCloudFormationChangeSetResponse, AWSError>;
  /**
   * Creates an AWS CloudFormation ChangeSet for the given application.
   */
  createCloudFormationChangeSet(callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.CreateCloudFormationChangeSetResponse) => void): Request<ServerlessApplicationRepository.Types.CreateCloudFormationChangeSetResponse, AWSError>;
  /**
   * Gets the specified application.
   */
  getApplication(params: ServerlessApplicationRepository.Types.GetApplicationRequest, callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.GetApplicationResponse) => void): Request<ServerlessApplicationRepository.Types.GetApplicationResponse, AWSError>;
  /**
   * Gets the specified application.
   */
  getApplication(callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.GetApplicationResponse) => void): Request<ServerlessApplicationRepository.Types.GetApplicationResponse, AWSError>;
  /**
   * Gets the policy for the specified application.
   */
  getApplicationPolicy(params: ServerlessApplicationRepository.Types.GetApplicationPolicyRequest, callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.GetApplicationPolicyResponse) => void): Request<ServerlessApplicationRepository.Types.GetApplicationPolicyResponse, AWSError>;
  /**
   * Gets the policy for the specified application.
   */
  getApplicationPolicy(callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.GetApplicationPolicyResponse) => void): Request<ServerlessApplicationRepository.Types.GetApplicationPolicyResponse, AWSError>;
  /**
   * Lists versions for the specified application.
   */
  listApplicationVersions(params: ServerlessApplicationRepository.Types.ListApplicationVersionsRequest, callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.ListApplicationVersionsResponse) => void): Request<ServerlessApplicationRepository.Types.ListApplicationVersionsResponse, AWSError>;
  /**
   * Lists versions for the specified application.
   */
  listApplicationVersions(callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.ListApplicationVersionsResponse) => void): Request<ServerlessApplicationRepository.Types.ListApplicationVersionsResponse, AWSError>;
  /**
   * Lists applications owned by the requester.
   */
  listApplications(params: ServerlessApplicationRepository.Types.ListApplicationsRequest, callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.ListApplicationsResponse) => void): Request<ServerlessApplicationRepository.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists applications owned by the requester.
   */
  listApplications(callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.ListApplicationsResponse) => void): Request<ServerlessApplicationRepository.Types.ListApplicationsResponse, AWSError>;
  /**
   * Puts the policy for the specified application.
   */
  putApplicationPolicy(params: ServerlessApplicationRepository.Types.PutApplicationPolicyRequest, callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.PutApplicationPolicyResponse) => void): Request<ServerlessApplicationRepository.Types.PutApplicationPolicyResponse, AWSError>;
  /**
   * Puts the policy for the specified application.
   */
  putApplicationPolicy(callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.PutApplicationPolicyResponse) => void): Request<ServerlessApplicationRepository.Types.PutApplicationPolicyResponse, AWSError>;
  /**
   * Updates the specified application.
   */
  updateApplication(params: ServerlessApplicationRepository.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.UpdateApplicationResponse) => void): Request<ServerlessApplicationRepository.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates the specified application.
   */
  updateApplication(callback?: (err: AWSError, data: ServerlessApplicationRepository.Types.UpdateApplicationResponse) => void): Request<ServerlessApplicationRepository.Types.UpdateApplicationResponse, AWSError>;
}
declare namespace ServerlessApplicationRepository {
  export interface Application {
    /**
     * The application Amazon Resource Name (ARN).
     */
    ApplicationId?: __string;
    /**
     * The name of the author publishing the app.\nMin Length=1. Max Length=127.\nPattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
     */
    Author?: __string;
    /**
     * The date/time this resource was created.
     */
    CreationTime?: __string;
    /**
     * The description of the application.\nMin Length=1. Max Length=256
     */
    Description?: __string;
    /**
     * Labels to improve discovery of apps in search results.\nMin Length=1. Max Length=127. Maximum number of labels: 10\nPattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
     */
    Labels?: ListOf__string;
    /**
     * A link to a license file of the app that matches the spdxLicenseID of your application.\nMax size 5 MB
     */
    LicenseUrl?: __string;
    /**
     * The name of the application.\nMin Length=1. Max Length=140\nPattern: "[a-zA-Z0-9\\-]+";
     */
    Name?: __string;
    /**
     * A link to the Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeUrl?: __string;
    /**
     * A valid identifier from https://spdx.org/licenses/.
     */
    SpdxLicenseId?: __string;
    /**
     * Version information about the application.
     */
    Version?: Version;
  }
  export interface ApplicationPage {
    /**
     * Array of application summaries.
     */
    Applications?: ListOfApplicationSummary;
    /**
     * The token to request the next page of results.
     */
    NextToken?: __string;
  }
  export interface ApplicationPolicy {
    /**
     * Array of policy statements applied to the application.
     */
    Statements?: ListOfApplicationPolicyStatement;
  }
  export interface ApplicationPolicyStatement {
    /**
     * A list of supported actions:\n\n GetApplication \n \n\n CreateCloudFormationChangeSet \n \n\n ListApplicationVersions \n \n\n SearchApplications \n \n\n Deploy (Note: This action enables all other actions above.)
     */
    Actions?: ListOf__string;
    /**
     * An AWS account ID, or * to make the application public.
     */
    Principals?: ListOf__string;
    /**
     * A unique ID for the statement.
     */
    StatementId?: __string;
  }
  export interface ApplicationSummary {
    /**
     * The application ARN.
     */
    ApplicationId?: __string;
    /**
     * The name of the author publishing the app\nMin Length=1. Max Length=127.\nPattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
     */
    Author?: __string;
    /**
     * The date/time this resource was created.
     */
    CreationTime?: __string;
    /**
     * The description of the application.\nMin Length=1. Max Length=256
     */
    Description?: __string;
    /**
     * Labels to improve discovery of apps in search results.\nMin Length=1. Max Length=127. Maximum number of labels: 10\nPattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
     */
    Labels?: ListOf__string;
    /**
     * The name of the application.\nMin Length=1. Max Length=140\nPattern: "[a-zA-Z0-9\\-]+";
     */
    Name?: __string;
    /**
     * A valid identifier from https://spdx.org/licenses/ .
     */
    SpdxLicenseId?: __string;
  }
  export interface ApplicationVersionPage {
    /**
     * The token to request the next page of results.
     */
    NextToken?: __string;
    /**
     * Array of version summaries for the application.
     */
    Versions?: ListOfVersionSummary;
  }
  export interface ChangeSetDetails {
    /**
     * The application Amazon Resource Name (ARN).
     */
    ApplicationId?: __string;
    /**
     * The ARN of the change set.\nLength Constraints: Minimum length of 1.\nPattern: arn:[-a-zA-Z0-9:/]*
     */
    ChangeSetId?: __string;
    /**
     * The semantic version of the application:\n\n https://semver.org/
     */
    SemanticVersion?: __string;
    /**
     * The unique ID of the stack.
     */
    StackId?: __string;
  }
  export interface CreateApplicationInput {
    /**
     * The name of the author publishing the app.\nMin Length=1. Max Length=127.\nPattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
     */
    Author?: __string;
    /**
     * The description of the application.\nMin Length=1. Max Length=256
     */
    Description?: __string;
    /**
     * Labels to improve discovery of apps in search results.\nMin Length=1. Max Length=127. Maximum number of labels: 10\nPattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
     */
    Labels?: ListOf__string;
    /**
     * A raw text file that contains the license of the app that matches the spdxLicenseID of your application.\nMax size 5 MB
     */
    LicenseBody?: __string;
    /**
     * A link to a license file of the app that matches the spdxLicenseID of your application.\nMax size 5 MB
     */
    LicenseUrl?: __string;
    /**
     * The name of the application you want to publish.\nMin Length=1. Max Length=140\nPattern: "[a-zA-Z0-9\\-]+";
     */
    Name?: __string;
    /**
     * A raw text Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeBody?: __string;
    /**
     * A link to the Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeUrl?: __string;
    /**
     * The semantic version of the application:\n\n https://semver.org/
     */
    SemanticVersion?: __string;
    /**
     * A link to a public repository for the source code of your application.
     */
    SourceCodeUrl?: __string;
    /**
     * A valid identifier from https://spdx.org/licenses/ .
     */
    SpdxLicenseId?: __string;
    /**
     * The raw packaged SAM template of your application.
     */
    TemplateBody?: __string;
    /**
     * A link to the packaged SAM template of your application.
     */
    TemplateUrl?: __string;
  }
  export interface CreateApplicationRequest {
    /**
     * The name of the author publishing the app.\nMin Length=1. Max Length=127.\nPattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
     */
    Author?: __string;
    /**
     * The description of the application.\nMin Length=1. Max Length=256
     */
    Description?: __string;
    /**
     * Labels to improve discovery of apps in search results.\nMin Length=1. Max Length=127. Maximum number of labels: 10\nPattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
     */
    Labels?: ListOf__string;
    /**
     * A raw text file that contains the license of the app that matches the spdxLicenseID of your application.\nMax size 5 MB
     */
    LicenseBody?: __string;
    /**
     * A link to a license file of the app that matches the spdxLicenseID of your application.\nMax size 5 MB
     */
    LicenseUrl?: __string;
    /**
     * The name of the application you want to publish.\nMin Length=1. Max Length=140\nPattern: "[a-zA-Z0-9\\-]+";
     */
    Name?: __string;
    /**
     * A raw text Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeBody?: __string;
    /**
     * A link to the Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeUrl?: __string;
    /**
     * The semantic version of the application:\n\n https://semver.org/
     */
    SemanticVersion?: __string;
    /**
     * A link to a public repository for the source code of your application.
     */
    SourceCodeUrl?: __string;
    /**
     * A valid identifier from https://spdx.org/licenses/ .
     */
    SpdxLicenseId?: __string;
    /**
     * The raw packaged SAM template of your application.
     */
    TemplateBody?: __string;
    /**
     * A link to the packaged SAM template of your application.
     */
    TemplateUrl?: __string;
  }
  export interface CreateApplicationResponse {
    /**
     * The application Amazon Resource Name (ARN).
     */
    ApplicationId?: __string;
    /**
     * The name of the author publishing the app.\nMin Length=1. Max Length=127.\nPattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
     */
    Author?: __string;
    /**
     * The date/time this resource was created.
     */
    CreationTime?: __string;
    /**
     * The description of the application.\nMin Length=1. Max Length=256
     */
    Description?: __string;
    /**
     * Labels to improve discovery of apps in search results.\nMin Length=1. Max Length=127. Maximum number of labels: 10\nPattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
     */
    Labels?: ListOf__string;
    /**
     * A link to a license file of the app that matches the spdxLicenseID of your application.\nMax size 5 MB
     */
    LicenseUrl?: __string;
    /**
     * The name of the application.\nMin Length=1. Max Length=140\nPattern: "[a-zA-Z0-9\\-]+";
     */
    Name?: __string;
    /**
     * A link to the Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeUrl?: __string;
    /**
     * A valid identifier from https://spdx.org/licenses/.
     */
    SpdxLicenseId?: __string;
    /**
     * Version information about the application.
     */
    Version?: Version;
  }
  export interface CreateApplicationVersionInput {
    /**
     * A link to a public repository for the source code of your application.
     */
    SourceCodeUrl?: __string;
    /**
     * The raw packaged SAM template of your application.
     */
    TemplateBody?: __string;
    /**
     * A link to the packaged SAM template of your application.
     */
    TemplateUrl?: __string;
  }
  export interface CreateApplicationVersionRequest {
    /**
     * The id of the application to create a new version for
     */
    ApplicationId: __string;
    /**
     * The semantic version of the new version
     */
    SemanticVersion: __string;
    /**
     * A link to a public repository for the source code of your application.
     */
    SourceCodeUrl?: __string;
    /**
     * The raw packaged SAM template of your application.
     */
    TemplateBody?: __string;
    /**
     * A link to the packaged SAM template of your application.
     */
    TemplateUrl?: __string;
  }
  export interface CreateApplicationVersionResponse {
    /**
     * The application Amazon Resource Name (ARN).
     */
    ApplicationId?: __string;
    /**
     * The date/time this resource was created.
     */
    CreationTime?: __string;
    /**
     * Array of parameter types supported by the application.
     */
    ParameterDefinitions?: ListOfParameterDefinition;
    /**
     * The semantic version of the application:\n\n https://semver.org/
     */
    SemanticVersion?: __string;
    /**
     * A link to a public repository for the source code of your application.
     */
    SourceCodeUrl?: __string;
    /**
     * A link to the packaged SAM template of your application.
     */
    TemplateUrl?: __string;
  }
  export interface CreateCloudFormationChangeSetInput {
    /**
     * A list of parameter values for the parameters of the application.
     */
    ParameterOverrides?: ListOfParameterValue;
    /**
     * The semantic version of the application:\n\n https://semver.org/
     */
    SemanticVersion?: __string;
    /**
     * The name or the unique ID of the stack for which you are creating a change set. AWS CloudFormation generates\n the change set by comparing this stack's information with the information that you submit, such as a modified\n template or different parameter input values. \nConstraints: Minimum length of 1.\nPattern: ([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)
     */
    StackName?: __string;
  }
  export interface CreateCloudFormationChangeSetRequest {
    /**
     * The id of the application to create the ChangeSet for
     */
    ApplicationId: __string;
    /**
     * A list of parameter values for the parameters of the application.
     */
    ParameterOverrides?: ListOfParameterValue;
    /**
     * The semantic version of the application:\n\n https://semver.org/
     */
    SemanticVersion?: __string;
    /**
     * The name or the unique ID of the stack for which you are creating a change set. AWS CloudFormation generates\n the change set by comparing this stack's information with the information that you submit, such as a modified\n template or different parameter input values. \nConstraints: Minimum length of 1.\nPattern: ([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)
     */
    StackName?: __string;
  }
  export interface CreateCloudFormationChangeSetResponse {
    /**
     * The application Amazon Resource Name (ARN).
     */
    ApplicationId?: __string;
    /**
     * The ARN of the change set.\nLength Constraints: Minimum length of 1.\nPattern: arn:[-a-zA-Z0-9:/]*
     */
    ChangeSetId?: __string;
    /**
     * The semantic version of the application:\n\n https://semver.org/
     */
    SemanticVersion?: __string;
    /**
     * The unique ID of the stack.
     */
    StackId?: __string;
  }
  export interface GetApplicationPolicyRequest {
    /**
     * The id of the application to get policy for
     */
    ApplicationId: __string;
  }
  export interface GetApplicationPolicyResponse {
    /**
     * Array of policy statements applied to the application.
     */
    Statements?: ListOfApplicationPolicyStatement;
  }
  export interface GetApplicationRequest {
    /**
     * The id of the application to get
     */
    ApplicationId: __string;
    /**
     * The semantic version of the application to get
     */
    SemanticVersion?: __string;
  }
  export interface GetApplicationResponse {
    /**
     * The application Amazon Resource Name (ARN).
     */
    ApplicationId?: __string;
    /**
     * The name of the author publishing the app.\nMin Length=1. Max Length=127.\nPattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
     */
    Author?: __string;
    /**
     * The date/time this resource was created.
     */
    CreationTime?: __string;
    /**
     * The description of the application.\nMin Length=1. Max Length=256
     */
    Description?: __string;
    /**
     * Labels to improve discovery of apps in search results.\nMin Length=1. Max Length=127. Maximum number of labels: 10\nPattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
     */
    Labels?: ListOf__string;
    /**
     * A link to a license file of the app that matches the spdxLicenseID of your application.\nMax size 5 MB
     */
    LicenseUrl?: __string;
    /**
     * The name of the application.\nMin Length=1. Max Length=140\nPattern: "[a-zA-Z0-9\\-]+";
     */
    Name?: __string;
    /**
     * A link to the Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeUrl?: __string;
    /**
     * A valid identifier from https://spdx.org/licenses/.
     */
    SpdxLicenseId?: __string;
    /**
     * Version information about the application.
     */
    Version?: Version;
  }
  export interface ListApplicationVersionsRequest {
    /**
     * The id of the application to list
     */
    ApplicationId: __string;
    /**
     * The total number of items to return
     */
    MaxItems?: MaxItems;
    /**
     * A token to specify where to start paginating
     */
    NextToken?: __string;
  }
  export interface ListApplicationVersionsResponse {
    /**
     * The token to request the next page of results.
     */
    NextToken?: __string;
    /**
     * Array of version summaries for the application.
     */
    Versions?: ListOfVersionSummary;
  }
  export interface ListApplicationsRequest {
    /**
     * The total number of items to return
     */
    MaxItems?: MaxItems;
    /**
     * A token to specify where to start paginating
     */
    NextToken?: __string;
  }
  export interface ListApplicationsResponse {
    /**
     * Array of application summaries.
     */
    Applications?: ListOfApplicationSummary;
    /**
     * The token to request the next page of results.
     */
    NextToken?: __string;
  }
  export type ListOfApplicationPolicyStatement = ApplicationPolicyStatement[];
  export type ListOfApplicationSummary = ApplicationSummary[];
  export type ListOfParameterDefinition = ParameterDefinition[];
  export type ListOfParameterValue = ParameterValue[];
  export type ListOfVersionSummary = VersionSummary[];
  export type ListOf__string = __string[];
  export type MaxItems = number;
  export interface ParameterDefinition {
    /**
     * A regular expression that represents the patterns to allow for String types.
     */
    AllowedPattern?: __string;
    /**
     * Array containing the list of values allowed for the parameter.
     */
    AllowedValues?: ListOf__string;
    /**
     * A string that explains a constraint when the constraint is violated. For example, without a constraint description,\n a parameter that has an allowed pattern of [A-Za-z0-9]+ displays the following error message when the user\n specifies an invalid value:\n\n Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+ \n \nBy adding a constraint description, such as "must contain only uppercase and lowercase letters, and numbers," you can display\n the following customized error message:\n\n Malformed input-Parameter MyParameter must contain only uppercase and lowercase letters and numbers.
     */
    ConstraintDescription?: __string;
    /**
     * A value of the appropriate type for the template to use if no value is specified when a stack is created.\n If you define constraints for the parameter, you must specify a value that adheres to those constraints.
     */
    DefaultValue?: __string;
    /**
     * A string of up to 4,000 characters that describes the parameter.
     */
    Description?: __string;
    /**
     * An integer value that determines the largest number of characters you want to allow for String types.
     */
    MaxLength?: __integer;
    /**
     * A numeric value that determines the largest numeric value you want to allow for Number types.
     */
    MaxValue?: __integer;
    /**
     * An integer value that determines the smallest number of characters you want to allow for String types.
     */
    MinLength?: __integer;
    /**
     * A numeric value that determines the smallest numeric value you want to allow for Number types.
     */
    MinValue?: __integer;
    /**
     * The name of the parameter.
     */
    Name?: __string;
    /**
     * Whether to mask the parameter value whenever anyone makes a call that describes the stack. If you set the\n value to true, the parameter value is masked with asterisks (*****).
     */
    NoEcho?: __boolean;
    /**
     * A list of SAM resources that use this parameter.
     */
    ReferencedByResources?: ListOf__string;
    /**
     * The type of the parameter.\nValid values: String | Number | List | CommaDelimitedList \n \n\n String : A literal string.\nFor example, users could specify "MyUserName" .\n\n Number : An integer or float. AWS CloudFormation validates the parameter value as a number; however, when you use the\n parameter elsewhere in your template (for example, by using the Ref intrinsic function), the parameter value becomes a string.\nFor example, users could specify "8888" .\n\n List : An array of integers or floats that are separated by commas. AWS CloudFormation validates the parameter value as numbers; however, when\n you use the parameter elsewhere in your template (for example, by using the Ref intrinsic function), the parameter value becomes a list of strings.\nFor example, users could specify "80,20", and a Ref results in ["80","20"] .\n\n CommaDelimitedList : An array of literal strings that are separated by commas. The total number of strings should be one more than the total number of commas.\n Also, each member string is space-trimmed.\nFor example, users could specify "test,dev,prod", and a Ref results in ["test","dev","prod"] .
     */
    Type?: __string;
  }
  export interface ParameterValue {
    /**
     * The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation\n uses the default value that is specified in your template.
     */
    Name?: __string;
    /**
     * The input value associated with the parameter.
     */
    Value?: __string;
  }
  export interface PutApplicationPolicyRequest {
    /**
     * The id of the application to put policy for
     */
    ApplicationId: __string;
    /**
     * Array of policy statements applied to the application.
     */
    Statements?: ListOfApplicationPolicyStatement;
  }
  export interface PutApplicationPolicyResponse {
    /**
     * Array of policy statements applied to the application.
     */
    Statements?: ListOfApplicationPolicyStatement;
  }
  export interface UpdateApplicationInput {
    /**
     * The name of the author publishing the app.\nMin Length=1. Max Length=127.\nPattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
     */
    Author?: __string;
    /**
     * The description of the application.\nMin Length=1. Max Length=256
     */
    Description?: __string;
    /**
     * Labels to improve discovery of apps in search results.\nMin Length=1. Max Length=127. Maximum number of labels: 10\nPattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
     */
    Labels?: ListOf__string;
    /**
     * A raw text Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeBody?: __string;
    /**
     * A link to the Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeUrl?: __string;
  }
  export interface UpdateApplicationRequest {
    /**
     * The id of the application to update
     */
    ApplicationId: __string;
    /**
     * The name of the author publishing the app.\nMin Length=1. Max Length=127.\nPattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
     */
    Author?: __string;
    /**
     * The description of the application.\nMin Length=1. Max Length=256
     */
    Description?: __string;
    /**
     * Labels to improve discovery of apps in search results.\nMin Length=1. Max Length=127. Maximum number of labels: 10\nPattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
     */
    Labels?: ListOf__string;
    /**
     * A raw text Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeBody?: __string;
    /**
     * A link to the Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeUrl?: __string;
  }
  export interface UpdateApplicationResponse {
    /**
     * The application Amazon Resource Name (ARN).
     */
    ApplicationId?: __string;
    /**
     * The name of the author publishing the app.\nMin Length=1. Max Length=127.\nPattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";
     */
    Author?: __string;
    /**
     * The date/time this resource was created.
     */
    CreationTime?: __string;
    /**
     * The description of the application.\nMin Length=1. Max Length=256
     */
    Description?: __string;
    /**
     * Labels to improve discovery of apps in search results.\nMin Length=1. Max Length=127. Maximum number of labels: 10\nPattern: "^[a-zA-Z0-9+\\-_:\\/@]+$";
     */
    Labels?: ListOf__string;
    /**
     * A link to a license file of the app that matches the spdxLicenseID of your application.\nMax size 5 MB
     */
    LicenseUrl?: __string;
    /**
     * The name of the application.\nMin Length=1. Max Length=140\nPattern: "[a-zA-Z0-9\\-]+";
     */
    Name?: __string;
    /**
     * A link to the Readme file that contains a more detailed description of the application and how it works in markdown language.\nMax size 5 MB
     */
    ReadmeUrl?: __string;
    /**
     * A valid identifier from https://spdx.org/licenses/.
     */
    SpdxLicenseId?: __string;
    /**
     * Version information about the application.
     */
    Version?: Version;
  }
  export interface Version {
    /**
     * The application Amazon Resource Name (ARN).
     */
    ApplicationId?: __string;
    /**
     * The date/time this resource was created.
     */
    CreationTime?: __string;
    /**
     * Array of parameter types supported by the application.
     */
    ParameterDefinitions?: ListOfParameterDefinition;
    /**
     * The semantic version of the application:\n\n https://semver.org/
     */
    SemanticVersion?: __string;
    /**
     * A link to a public repository for the source code of your application.
     */
    SourceCodeUrl?: __string;
    /**
     * A link to the packaged SAM template of your application.
     */
    TemplateUrl?: __string;
  }
  export interface VersionSummary {
    /**
     * The application Amazon Resource Name (ARN).
     */
    ApplicationId?: __string;
    /**
     * The date/time this resource was created.
     */
    CreationTime?: __string;
    /**
     * The semantic version of the application:\n\n https://semver.org/
     */
    SemanticVersion?: __string;
    /**
     * A link to a public repository for the source code of your application.
     */
    SourceCodeUrl?: __string;
  }
  export type __boolean = boolean;
  export type __double = number;
  export type __integer = number;
  export type __string = string;
  export type __timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-09-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ServerlessApplicationRepository client.
   */
  export import Types = ServerlessApplicationRepository;
}
export = ServerlessApplicationRepository;
