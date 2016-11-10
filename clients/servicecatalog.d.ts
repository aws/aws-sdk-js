///<reference types="node" />
import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
declare class ServiceCatalog extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ServiceCatalog.Types.ClientConfiguration)
  config: Config & ServiceCatalog.Types.ClientConfiguration;
  /**
   * Retrieves information about a specified product. This operation is functionally identical to DescribeProductView except that it takes as input ProductId instead of ProductViewId.
   */
  describeProduct(params: ServiceCatalog.Types.DescribeProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductOutput) => void): Request<ServiceCatalog.Types.DescribeProductOutput, AWSError>;
  /**
   * Retrieves information about a specified product. This operation is functionally identical to DescribeProductView except that it takes as input ProductId instead of ProductViewId.
   */
  describeProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductOutput) => void): Request<ServiceCatalog.Types.DescribeProductOutput, AWSError>;
  /**
   * Retrieves information about a specified product. This operation is functionally identical to DescribeProduct except that it takes as input ProductViewId instead of ProductId.
   */
  describeProductView(params: ServiceCatalog.Types.DescribeProductViewInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductViewOutput) => void): Request<ServiceCatalog.Types.DescribeProductViewOutput, AWSError>;
  /**
   * Retrieves information about a specified product. This operation is functionally identical to DescribeProduct except that it takes as input ProductViewId instead of ProductId.
   */
  describeProductView(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductViewOutput) => void): Request<ServiceCatalog.Types.DescribeProductViewOutput, AWSError>;
  /**
   * Provides information about parameters required to provision a specified product in a specified manner. Use this operation to obtain the list of ProvisioningArtifactParameters parameters available to call the ProvisionProduct operation for the specified product.
   */
  describeProvisioningParameters(params: ServiceCatalog.Types.DescribeProvisioningParametersInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisioningParametersOutput) => void): Request<ServiceCatalog.Types.DescribeProvisioningParametersOutput, AWSError>;
  /**
   * Provides information about parameters required to provision a specified product in a specified manner. Use this operation to obtain the list of ProvisioningArtifactParameters parameters available to call the ProvisionProduct operation for the specified product.
   */
  describeProvisioningParameters(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisioningParametersOutput) => void): Request<ServiceCatalog.Types.DescribeProvisioningParametersOutput, AWSError>;
  /**
   * Retrieves a paginated list of the full details of a specific request. Use this operation after calling a request operation (ProvisionProduct, TerminateProvisionedProduct, or UpdateProvisionedProduct). 
   */
  describeRecord(params: ServiceCatalog.Types.DescribeRecordInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeRecordOutput) => void): Request<ServiceCatalog.Types.DescribeRecordOutput, AWSError>;
  /**
   * Retrieves a paginated list of the full details of a specific request. Use this operation after calling a request operation (ProvisionProduct, TerminateProvisionedProduct, or UpdateProvisionedProduct). 
   */
  describeRecord(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeRecordOutput) => void): Request<ServiceCatalog.Types.DescribeRecordOutput, AWSError>;
  /**
   * Returns a paginated list of all paths to a specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
   */
  listLaunchPaths(params: ServiceCatalog.Types.ListLaunchPathsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListLaunchPathsOutput) => void): Request<ServiceCatalog.Types.ListLaunchPathsOutput, AWSError>;
  /**
   * Returns a paginated list of all paths to a specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
   */
  listLaunchPaths(callback?: (err: AWSError, data: ServiceCatalog.Types.ListLaunchPathsOutput) => void): Request<ServiceCatalog.Types.ListLaunchPathsOutput, AWSError>;
  /**
   * Returns a paginated list of all performed requests, in the form of RecordDetails objects that are filtered as specified.
   */
  listRecordHistory(params: ServiceCatalog.Types.ListRecordHistoryInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListRecordHistoryOutput) => void): Request<ServiceCatalog.Types.ListRecordHistoryOutput, AWSError>;
  /**
   * Returns a paginated list of all performed requests, in the form of RecordDetails objects that are filtered as specified.
   */
  listRecordHistory(callback?: (err: AWSError, data: ServiceCatalog.Types.ListRecordHistoryOutput) => void): Request<ServiceCatalog.Types.ListRecordHistoryOutput, AWSError>;
  /**
   * Requests a Provision of a specified product. A ProvisionedProduct is a resourced instance for a product. For example, provisioning a CloudFormation-template-backed product results in launching a CloudFormation stack and all the underlying resources that come with it.  You can check the status of this request using the DescribeRecord operation.
   */
  provisionProduct(params: ServiceCatalog.Types.ProvisionProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ProvisionProductOutput) => void): Request<ServiceCatalog.Types.ProvisionProductOutput, AWSError>;
  /**
   * Requests a Provision of a specified product. A ProvisionedProduct is a resourced instance for a product. For example, provisioning a CloudFormation-template-backed product results in launching a CloudFormation stack and all the underlying resources that come with it.  You can check the status of this request using the DescribeRecord operation.
   */
  provisionProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.ProvisionProductOutput) => void): Request<ServiceCatalog.Types.ProvisionProductOutput, AWSError>;
  /**
   * Returns a paginated list of all the ProvisionedProduct objects that are currently available (not terminated). 
   */
  scanProvisionedProducts(params: ServiceCatalog.Types.ScanProvisionedProductsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ScanProvisionedProductsOutput) => void): Request<ServiceCatalog.Types.ScanProvisionedProductsOutput, AWSError>;
  /**
   * Returns a paginated list of all the ProvisionedProduct objects that are currently available (not terminated). 
   */
  scanProvisionedProducts(callback?: (err: AWSError, data: ServiceCatalog.Types.ScanProvisionedProductsOutput) => void): Request<ServiceCatalog.Types.ScanProvisionedProductsOutput, AWSError>;
  /**
   * Returns a paginated list all of the Products objects to which the caller has access.  The output of this operation can be used as input for other operations, such as DescribeProductView.
   */
  searchProducts(params: ServiceCatalog.Types.SearchProductsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProductsOutput) => void): Request<ServiceCatalog.Types.SearchProductsOutput, AWSError>;
  /**
   * Returns a paginated list all of the Products objects to which the caller has access.  The output of this operation can be used as input for other operations, such as DescribeProductView.
   */
  searchProducts(callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProductsOutput) => void): Request<ServiceCatalog.Types.SearchProductsOutput, AWSError>;
  /**
   * Requests termination of an existing ProvisionedProduct object. If there are Tags associated with the object, they are terminated when the ProvisionedProduct object is terminated.  This operation does not delete any records associated with the ProvisionedProduct object. You can check the status of this request using the DescribeRecord operation.
   */
  terminateProvisionedProduct(params: ServiceCatalog.Types.TerminateProvisionedProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.TerminateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.TerminateProvisionedProductOutput, AWSError>;
  /**
   * Requests termination of an existing ProvisionedProduct object. If there are Tags associated with the object, they are terminated when the ProvisionedProduct object is terminated.  This operation does not delete any records associated with the ProvisionedProduct object. You can check the status of this request using the DescribeRecord operation.
   */
  terminateProvisionedProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.TerminateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.TerminateProvisionedProductOutput, AWSError>;
  /**
   * Requests updates to the configuration of an existing ProvisionedProduct object. If there are tags associated with the object, they cannot be updated or added with this operation. Depending on the specific updates requested, this operation may update with no interruption, with some interruption, or replace the ProvisionedProduct object entirely.  You can check the status of this request using the DescribeRecord operation.
   */
  updateProvisionedProduct(params: ServiceCatalog.Types.UpdateProvisionedProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.UpdateProvisionedProductOutput, AWSError>;
  /**
   * Requests updates to the configuration of an existing ProvisionedProduct object. If there are tags associated with the object, they cannot be updated or added with this operation. Depending on the specific updates requested, this operation may update with no interruption, with some interruption, or replace the ProvisionedProduct object entirely.  You can check the status of this request using the DescribeRecord operation.
   */
  updateProvisionedProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.UpdateProvisionedProductOutput, AWSError>;
}
declare namespace ServiceCatalog.Types {
  export type AcceptLanguage = string;
  export interface AccessLevelFilter {
    /**
     * Specifies the access level.  Account allows results at the account level.   Role allows results based on the federated role of the specified user.  User allows results limited to the specified user. 
     */
    Key?: AccessLevelFilterKey;
    /**
     * Specifies the user to which the access level applies. A value of Self is currently supported.
     */
    Value?: AccessLevelFilterValue;
  }
  export type AccessLevelFilterKey = "Account"|"Role"|"User"|string;
  export type AccessLevelFilterValue = string;
  export type AllowedValue = string;
  export type AllowedValues = AllowedValue[];
  export type ApproximateCount = number;
  export type AttributeValue = string;
  export type ConstraintDescription = string;
  export type ConstraintSummaries = ConstraintSummary[];
  export interface ConstraintSummary {
    /**
     * The type of the constraint. 
     */
    Type?: ConstraintType;
    /**
     * The text description of the constraint.
     */
    Description?: ConstraintDescription;
  }
  export type ConstraintType = string;
  export type CreatedTime = Date;
  export type DefaultValue = string;
  export interface DescribeProductInput {
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The ProductId of the product to describe.
     */
    Id: Id;
  }
  export interface DescribeProductOutput {
    /**
     * The summary metadata about the specified product.
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * A list of provisioning artifact objects for the specified product. The ProvisioningArtifacts parameter represent the ways the specified product can be provisioned.
     */
    ProvisioningArtifacts?: ProvisioningArtifacts;
  }
  export interface DescribeProductViewInput {
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The ProductViewId of the product to describe.
     */
    Id: Id;
  }
  export interface DescribeProductViewOutput {
    /**
     * The summary metadata about the specified product.
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * A list of provisioning artifact objects for the specified product. The ProvisioningArtifacts represent the ways in which the specified product can be provisioned.
     */
    ProvisioningArtifacts?: ProvisioningArtifacts;
  }
  export interface DescribeProvisioningParametersInput {
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the product.
     */
    ProductId: Id;
    /**
     * The provisioning artifact identifier for this product.
     */
    ProvisioningArtifactId: Id;
    /**
     * The identifier of the path for this product's provisioning. This value is optional if the product has a default path, and is required if there is more than one path for the specified product.
     */
    PathId?: Id;
  }
  export interface DescribeProvisioningParametersOutput {
    /**
     * The list of parameters used to successfully provision the product. Each parameter includes a list of allowable values and additional metadata about each parameter.
     */
    ProvisioningArtifactParameters?: ProvisioningArtifactParameters;
    /**
     * The list of constraint summaries that apply to provisioning this product.
     */
    ConstraintSummaries?: ConstraintSummaries;
    /**
     * Any additional metadata specifically related to the provisioning of the product. For example, see the Version field of the CloudFormation template.
     */
    UsageInstructions?: UsageInstructions;
  }
  export interface DescribeRecordInput {
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The record identifier of the ProvisionedProduct object for which to retrieve output information. This is the RecordDetail.RecordId obtained from the request operation's response.
     */
    Id: Id;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
  }
  export interface DescribeRecordOutput {
    /**
     * Detailed record information for the specified product. 
     */
    RecordDetail?: RecordDetail;
    /**
     * A list of outputs for the specified Product object created as the result of a request. For example, a CloudFormation-backed product that creates an S3 bucket would have an output for the S3 bucket URL.
     */
    RecordOutputs?: RecordOutputs;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export type Description = string;
  export type ErrorCode = string;
  export type ErrorDescription = string;
  export type HasDefaultPath = boolean;
  export type Id = string;
  export type IdempotencyToken = string;
  export type IgnoreErrors = boolean;
  export type InstructionType = string;
  export type InstructionValue = string;
  export type LastRequestId = string;
  export type LaunchPathSummaries = LaunchPathSummary[];
  export interface LaunchPathSummary {
    /**
     * The unique identifier of the product path.
     */
    Id?: Id;
    /**
     * List of constraints on the portfolio-product relationship.
     */
    ConstraintSummaries?: ConstraintSummaries;
    /**
     * List of tags used by this launch path.
     */
    Tags?: Tags;
    /**
     * Corresponds to the name of the portfolio to which the user was assigned.
     */
    Name?: PortfolioName;
  }
  export interface ListLaunchPathsInput {
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * Identifies the product for which to retrieve LaunchPathSummaries information.
     */
    ProductId: Id;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ListLaunchPathsOutput {
    /**
     * List of launch path information summaries for the specified PageToken.
     */
    LaunchPathSummaries?: LaunchPathSummaries;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListRecordHistoryInput {
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The access level for obtaining results. If left unspecified, User level access is used.
     */
    AccessLevelFilter?: AccessLevelFilter;
    /**
     * The filter to limit search results. 
     */
    SearchFilter?: ListRecordHistorySearchFilter;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ListRecordHistoryOutput {
    /**
     * A list of record detail objects, listed in reverse chronological order.
     */
    RecordDetails?: RecordDetails;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListRecordHistorySearchFilter {
    /**
     * The filter key.
     */
    Key?: SearchFilterKey;
    /**
     * The filter value for Key.
     */
    Value?: SearchFilterValue;
  }
  export type NoEcho = boolean;
  export type NotificationArn = string;
  export type NotificationArns = NotificationArn[];
  export type OutputKey = string;
  export type OutputValue = string;
  export type PageSize = number;
  export type PageToken = string;
  export interface ParameterConstraints {
    /**
     * The values that the administrator has allowed for the parameter.
     */
    AllowedValues?: AllowedValues;
  }
  export type ParameterKey = string;
  export type ParameterType = string;
  export type ParameterValue = string;
  export type PortfolioName = string;
  export type ProductType = string;
  export type ProductViewAggregationType = string;
  export interface ProductViewAggregationValue {
    /**
     * The value of the product view aggregation.
     */
    Value?: AttributeValue;
    /**
     * An approximate count of the products that match the value.
     */
    ApproximateCount?: ApproximateCount;
  }
  export type ProductViewAggregationValues = ProductViewAggregationValue[];
  export type ProductViewAggregations = {[key: string]: ProductViewAggregationValues};
  export type ProductViewDistributor = string;
  export type ProductViewFilterBy = "FullTextSearch"|"Owner"|"ProductType"|string;
  export type ProductViewFilterValue = string;
  export type ProductViewFilterValues = ProductViewFilterValue[];
  export type ProductViewFilters = {[key: string]: ProductViewFilterValues};
  export type ProductViewName = string;
  export type ProductViewOwner = string;
  export type ProductViewShortDescription = string;
  export type ProductViewSortBy = "Title"|"VersionCount"|"CreationDate"|string;
  export type ProductViewSummaries = ProductViewSummary[];
  export interface ProductViewSummary {
    /**
     * The product view identifier.
     */
    Id?: Id;
    /**
     * The product identifier.
     */
    ProductId?: Id;
    /**
     * The name of the product.
     */
    Name?: ProductViewName;
    /**
     * The owner of the product. Contact the product administrator for the significance of this value.
     */
    Owner?: ProductViewOwner;
    /**
     * Short description of the product.
     */
    ShortDescription?: ProductViewShortDescription;
    /**
     * The product type. Contact the product administrator for the significance of this value.
     */
    Type?: ProductType;
    /**
     * The distributor of the product. Contact the product administrator for the significance of this value.
     */
    Distributor?: ProductViewDistributor;
    /**
     * A value of false indicates that the product does not have a default path, while a value of true indicates that it does. If it's false, call ListLaunchPaths to disambiguate between paths. If true, ListLaunchPaths is not required, and the output of the ProductViewSummary operation can be used directly with DescribeProvisioningParameters.
     */
    HasDefaultPath?: HasDefaultPath;
    /**
     * The email contact information to obtain support for this Product.
     */
    SupportEmail?: SupportEmail;
    /**
     * The description of the support for this Product.
     */
    SupportDescription?: SupportDescription;
    /**
     * The URL information to obtain support for this Product.
     */
    SupportUrl?: SupportUrl;
  }
  export interface ProvisionProductInput {
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the product.
     */
    ProductId: Id;
    /**
     * The provisioning artifact identifier for this product.
     */
    ProvisioningArtifactId: Id;
    /**
     * The identifier of the path for this product's provisioning. This value is optional if the product has a default path, and is required if there is more than one path for the specified product.
     */
    PathId?: Id;
    /**
     * A user-friendly name to identify the ProvisionedProduct object. This value must be unique for the AWS account and cannot be updated after the product is provisioned.
     */
    ProvisionedProductName: ProvisionedProductName;
    /**
     * Parameters specified by the administrator that are required for provisioning the product.
     */
    ProvisioningParameters?: ProvisioningParameters;
    /**
     * A list of tags to use as provisioning options.
     */
    Tags?: Tags;
    /**
     * Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.
     */
    NotificationArns?: NotificationArns;
    /**
     * An idempotency token that uniquely identifies the provisioning request. 
     */
    ProvisionToken: IdempotencyToken;
  }
  export interface ProvisionProductOutput {
    /**
     * The detailed result of the ProvisionProduct request, containing the inputs made to that request, the current state of the request, a pointer to the ProvisionedProduct object of the request, and a list of any errors that the request encountered. 
     */
    RecordDetail?: RecordDetail;
  }
  export interface ProvisionedProductDetail {
    /**
     * The user-friendly name of the ProvisionedProduct object.
     */
    Name?: ProvisionedProductNameOrArn;
    /**
     * The ARN associated with the ProvisionedProduct object.
     */
    Arn?: ProvisionedProductNameOrArn;
    /**
     * The type of the ProvisionedProduct object.
     */
    Type?: ProvisionedProductType;
    /**
     * The identifier of the ProvisionedProduct object.
     */
    Id?: ProvisionedProductId;
    /**
     * The current status of the ProvisionedProduct.
     */
    Status?: RecordStatus;
    /**
     * The current status message of the ProvisionedProduct.
     */
    StatusMessage?: ProvisionedProductStatusMessage;
    /**
     * The time the ProvisionedProduct was created.
     */
    CreatedTime?: CreatedTime;
    /**
     * An idempotency token that uniquely identifies this ProvisionedProduct.
     */
    IdempotencyToken?: IdempotencyToken;
    /**
     * The record identifier of the last request performed on this ProvisionedProduct object.
     */
    LastRecordId?: LastRequestId;
  }
  export type ProvisionedProductDetails = ProvisionedProductDetail[];
  export type ProvisionedProductId = string;
  export type ProvisionedProductName = string;
  export type ProvisionedProductNameOrArn = string;
  export type ProvisionedProductStatusMessage = string;
  export type ProvisionedProductType = string;
  export interface ProvisioningArtifact {
    /**
     * The identifier for the artifact.
     */
    Id?: Id;
    /**
     * The name of the artifact.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The text description of the artifact.
     */
    Description?: ProvisioningArtifactDescription;
    /**
     * The time that the artifact was created by the Administrator.
     */
    CreatedTime?: ProvisioningArtifactCreatedTime;
  }
  export type ProvisioningArtifactCreatedTime = Date;
  export type ProvisioningArtifactDescription = string;
  export type ProvisioningArtifactName = string;
  export interface ProvisioningArtifactParameter {
    /**
     * The parameter key. 
     */
    ParameterKey?: ParameterKey;
    /**
     * The default value for this parameter.
     */
    DefaultValue?: DefaultValue;
    /**
     * The parameter type.
     */
    ParameterType?: ParameterType;
    /**
     * If this value is true, the value for this parameter is obfuscated from view when the parameter is retrieved. This parameter is used to hide sensitive information.
     */
    IsNoEcho?: NoEcho;
    /**
     * The text description of the parameter.
     */
    Description?: Description;
    /**
     * The list of constraints that the administrator has put on the parameter.
     */
    ParameterConstraints?: ParameterConstraints;
  }
  export type ProvisioningArtifactParameters = ProvisioningArtifactParameter[];
  export type ProvisioningArtifacts = ProvisioningArtifact[];
  export interface ProvisioningParameter {
    /**
     * The ProvisioningArtifactParameter.ParameterKey parameter from DescribeProvisioningParameters.
     */
    Key?: ParameterKey;
    /**
     * The value to use for provisioning. Any constraints on this value can be found in ProvisioningArtifactParameter for Key.
     */
    Value?: ParameterValue;
  }
  export type ProvisioningParameters = ProvisioningParameter[];
  export interface RecordDetail {
    /**
     * The identifier of the ProvisionedProduct object record.
     */
    RecordId?: Id;
    /**
     * The user-friendly name of the ProvisionedProduct object.
     */
    ProvisionedProductName?: ProvisionedProductName;
    /**
     * The status of the ProvisionedProduct object.
     */
    Status?: RecordStatus;
    /**
     * The time when the record for the ProvisionedProduct object was created.
     */
    CreatedTime?: CreatedTime;
    /**
     * The time when the record for the ProvisionedProduct object was last updated.
     */
    UpdatedTime?: UpdatedTime;
    /**
     * The type of the ProvisionedProduct object.
     */
    ProvisionedProductType?: ProvisionedProductType;
    /**
     * The record type for this record.
     */
    RecordType?: RecordType;
    /**
     * The identifier of the ProvisionedProduct object.
     */
    ProvisionedProductId?: Id;
    /**
     * The identifier of the product.
     */
    ProductId?: Id;
    /**
     * The provisioning artifact identifier for this product.
     */
    ProvisioningArtifactId?: Id;
    /**
     * The identifier of the path for this product's provisioning.
     */
    PathId?: Id;
    /**
     * A list of errors that occurred while processing the request.
     */
    RecordErrors?: RecordErrors;
    /**
     * List of tags associated with this record.
     */
    RecordTags?: RecordTags;
  }
  export type RecordDetails = RecordDetail[];
  export interface RecordError {
    /**
     * The numeric value of the error.
     */
    Code?: ErrorCode;
    /**
     * The text description of the error.
     */
    Description?: ErrorDescription;
  }
  export type RecordErrors = RecordError[];
  export interface RecordOutput {
    /**
     * The output key.
     */
    OutputKey?: OutputKey;
    /**
     * The output value.
     */
    OutputValue?: OutputValue;
    /**
     * The text description of the output.
     */
    Description?: Description;
  }
  export type RecordOutputs = RecordOutput[];
  export type RecordStatus = "IN_PROGRESS"|"SUCCEEDED"|"ERROR"|string;
  export interface RecordTag {
    /**
     * The key for this tag.
     */
    Key?: RecordTagKey;
    /**
     * The value for this tag.
     */
    Value?: RecordTagValue;
  }
  export type RecordTagKey = string;
  export type RecordTagValue = string;
  export type RecordTags = RecordTag[];
  export type RecordType = string;
  export interface ScanProvisionedProductsInput {
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The access level for obtaining results. If left unspecified, User level access is used.
     */
    AccessLevelFilter?: AccessLevelFilter;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface ScanProvisionedProductsOutput {
    /**
     * A list of ProvisionedProduct detail objects.
     */
    ProvisionedProducts?: ProvisionedProductDetails;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export type SearchFilterKey = string;
  export type SearchFilterValue = string;
  export interface SearchProductsInput {
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The list of filters with which to limit search results. If no search filters are specified, the output is all the products to which the calling user has access. 
     */
    Filters?: ProductViewFilters;
    /**
     * The maximum number of items to return in the results. If more results exist than fit in the specified PageSize, the value of NextPageToken in the response is non-null.
     */
    PageSize?: PageSize;
    /**
     * The sort field specifier. If no value is specified, results are not sorted.
     */
    SortBy?: ProductViewSortBy;
    /**
     * The sort order specifier. If no value is specified, results are not sorted.
     */
    SortOrder?: SortOrder;
    /**
     * The page token of the first page retrieved. If null, this retrieves the first page of size PageSize.
     */
    PageToken?: PageToken;
  }
  export interface SearchProductsOutput {
    /**
     * A list of the product view summary objects.
     */
    ProductViewSummaries?: ProductViewSummaries;
    /**
     * A list of the product view aggregation value objects.
     */
    ProductViewAggregations?: ProductViewAggregations;
    /**
     * The page token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export type SupportDescription = string;
  export type SupportEmail = string;
  export type SupportUrl = string;
  export interface Tag {
    /**
     * The ProvisioningArtifactParameter.TagKey parameter from DescribeProvisioningParameters.
     */
    Key?: TagKey;
    /**
     * The esired value for this key.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagValue = string;
  export type Tags = Tag[];
  export interface TerminateProvisionedProductInput {
    /**
     * The name of the ProvisionedProduct object to terminate. You must specify either ProvisionedProductName or ProvisionedProductId, but not both.
     */
    ProvisionedProductName?: ProvisionedProductNameOrArn;
    /**
     * The identifier of the ProvisionedProduct object to terminate. You must specify either ProvisionedProductName or ProvisionedProductId, but not both.
     */
    ProvisionedProductId?: Id;
    /**
     * An idempotency token that uniquely identifies the termination request. This token is only valid during the termination process. After the ProvisionedProduct object is terminated, further requests to terminate the same ProvisionedProduct object always return ResourceNotFound regardless of the value of TerminateToken.
     */
    TerminateToken: IdempotencyToken;
    /**
     * If set to true, AWS Service Catalog stops managing the specified ProvisionedProduct object even if it cannot delete the underlying resources.
     */
    IgnoreErrors?: IgnoreErrors;
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface TerminateProvisionedProductOutput {
    /**
     * The detailed result of the TerminateProvisionedProduct request, containing the inputs made to that request, the current state of the request, a pointer to the ProvisionedProduct object that the request is modifying, and a list of any errors that the request encountered.
     */
    RecordDetail?: RecordDetail;
  }
  export interface UpdateProvisionedProductInput {
    /**
     * The language code to use for this operation. Supported language codes are as follows: "en" (English) "jp" (Japanese) "zh" (Chinese) If no code is specified, "en" is used as the default.
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The updated name of the ProvisionedProduct object . You must specify either ProvisionedProductName or ProvisionedProductId, but not both.
     */
    ProvisionedProductName?: ProvisionedProductNameOrArn;
    /**
     * The identifier of the ProvisionedProduct object to update. You must specify either ProvisionedProductName or ProvisionedProductId, but not both.
     */
    ProvisionedProductId?: Id;
    /**
     * The identifier of the ProvisionedProduct object.
     */
    ProductId?: Id;
    /**
     * The provisioning artifact identifier for this product.
     */
    ProvisioningArtifactId?: Id;
    /**
     * The identifier of the path to use in the updated ProvisionedProduct object. This value is optional if the product has a default path, and is required if there is more than one path for the specified product.
     */
    PathId?: Id;
    /**
     * A list of ProvisioningParameter objects used to update the ProvisionedProduct object.
     */
    ProvisioningParameters?: UpdateProvisioningParameters;
    /**
     * The idempotency token that uniquely identifies the provisioning update request.
     */
    UpdateToken: IdempotencyToken;
  }
  export interface UpdateProvisionedProductOutput {
    /**
     * The detailed result of the UpdateProvisionedProduct request, containing the inputs made to that request, the current state of the request, a pointer to the ProvisionedProduct object that the request is modifying, and a list of any errors that the request encountered.
     */
    RecordDetail?: RecordDetail;
  }
  export interface UpdateProvisioningParameter {
    /**
     * The ProvisioningArtifactParameter.ParameterKey parameter from DescribeProvisioningParameters.
     */
    Key?: ParameterKey;
    /**
     * The value to use for updating the product provisioning. Any constraints on this value can be found in the ProvisioningArtifactParameter parameter for Key.
     */
    Value?: ParameterValue;
    /**
     * If true, uses the currently set value for Key, ignoring UpdateProvisioningParameter.Value.
     */
    UsePreviousValue?: UsePreviousValue;
  }
  export type UpdateProvisioningParameters = UpdateProvisioningParameter[];
  export type UpdatedTime = Date;
  export interface UsageInstruction {
    /**
     * The usage instruction type for the value.
     */
    Type?: InstructionType;
    /**
     * The usage instruction value for this type.
     */
    Value?: InstructionValue;
  }
  export type UsageInstructions = UsageInstruction[];
  export type UsePreviousValue = boolean;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-12-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = ServiceCatalog;
