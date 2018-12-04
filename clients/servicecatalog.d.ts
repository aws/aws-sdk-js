import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ServiceCatalog extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ServiceCatalog.Types.ClientConfiguration)
  config: Config & ServiceCatalog.Types.ClientConfiguration;
  /**
   * Accepts an offer to share the specified portfolio.
   */
  acceptPortfolioShare(params: ServiceCatalog.Types.AcceptPortfolioShareInput, callback?: (err: AWSError, data: ServiceCatalog.Types.AcceptPortfolioShareOutput) => void): Request<ServiceCatalog.Types.AcceptPortfolioShareOutput, AWSError>;
  /**
   * Accepts an offer to share the specified portfolio.
   */
  acceptPortfolioShare(callback?: (err: AWSError, data: ServiceCatalog.Types.AcceptPortfolioShareOutput) => void): Request<ServiceCatalog.Types.AcceptPortfolioShareOutput, AWSError>;
  /**
   * Associates the specified principal ARN with the specified portfolio.
   */
  associatePrincipalWithPortfolio(params: ServiceCatalog.Types.AssociatePrincipalWithPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.AssociatePrincipalWithPortfolioOutput) => void): Request<ServiceCatalog.Types.AssociatePrincipalWithPortfolioOutput, AWSError>;
  /**
   * Associates the specified principal ARN with the specified portfolio.
   */
  associatePrincipalWithPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.AssociatePrincipalWithPortfolioOutput) => void): Request<ServiceCatalog.Types.AssociatePrincipalWithPortfolioOutput, AWSError>;
  /**
   * Associates the specified product with the specified portfolio.
   */
  associateProductWithPortfolio(params: ServiceCatalog.Types.AssociateProductWithPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.AssociateProductWithPortfolioOutput) => void): Request<ServiceCatalog.Types.AssociateProductWithPortfolioOutput, AWSError>;
  /**
   * Associates the specified product with the specified portfolio.
   */
  associateProductWithPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.AssociateProductWithPortfolioOutput) => void): Request<ServiceCatalog.Types.AssociateProductWithPortfolioOutput, AWSError>;
  /**
   * Associates a self-service action with a provisioning artifact.
   */
  associateServiceActionWithProvisioningArtifact(params: ServiceCatalog.Types.AssociateServiceActionWithProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.AssociateServiceActionWithProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.AssociateServiceActionWithProvisioningArtifactOutput, AWSError>;
  /**
   * Associates a self-service action with a provisioning artifact.
   */
  associateServiceActionWithProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.AssociateServiceActionWithProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.AssociateServiceActionWithProvisioningArtifactOutput, AWSError>;
  /**
   * Associate the specified TagOption with the specified portfolio or product.
   */
  associateTagOptionWithResource(params: ServiceCatalog.Types.AssociateTagOptionWithResourceInput, callback?: (err: AWSError, data: ServiceCatalog.Types.AssociateTagOptionWithResourceOutput) => void): Request<ServiceCatalog.Types.AssociateTagOptionWithResourceOutput, AWSError>;
  /**
   * Associate the specified TagOption with the specified portfolio or product.
   */
  associateTagOptionWithResource(callback?: (err: AWSError, data: ServiceCatalog.Types.AssociateTagOptionWithResourceOutput) => void): Request<ServiceCatalog.Types.AssociateTagOptionWithResourceOutput, AWSError>;
  /**
   * Associates multiple self-service actions with provisioning artifacts.
   */
  batchAssociateServiceActionWithProvisioningArtifact(params: ServiceCatalog.Types.BatchAssociateServiceActionWithProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.BatchAssociateServiceActionWithProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.BatchAssociateServiceActionWithProvisioningArtifactOutput, AWSError>;
  /**
   * Associates multiple self-service actions with provisioning artifacts.
   */
  batchAssociateServiceActionWithProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.BatchAssociateServiceActionWithProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.BatchAssociateServiceActionWithProvisioningArtifactOutput, AWSError>;
  /**
   * Disassociates a batch of self-service actions from the specified provisioning artifact.
   */
  batchDisassociateServiceActionFromProvisioningArtifact(params: ServiceCatalog.Types.BatchDisassociateServiceActionFromProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.BatchDisassociateServiceActionFromProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.BatchDisassociateServiceActionFromProvisioningArtifactOutput, AWSError>;
  /**
   * Disassociates a batch of self-service actions from the specified provisioning artifact.
   */
  batchDisassociateServiceActionFromProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.BatchDisassociateServiceActionFromProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.BatchDisassociateServiceActionFromProvisioningArtifactOutput, AWSError>;
  /**
   * Copies the specified source product to the specified target product or a new product. You can copy a product to the same account or another account. You can copy a product to the same region or another region. This operation is performed asynchronously. To track the progress of the operation, use DescribeCopyProductStatus.
   */
  copyProduct(params: ServiceCatalog.Types.CopyProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CopyProductOutput) => void): Request<ServiceCatalog.Types.CopyProductOutput, AWSError>;
  /**
   * Copies the specified source product to the specified target product or a new product. You can copy a product to the same account or another account. You can copy a product to the same region or another region. This operation is performed asynchronously. To track the progress of the operation, use DescribeCopyProductStatus.
   */
  copyProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.CopyProductOutput) => void): Request<ServiceCatalog.Types.CopyProductOutput, AWSError>;
  /**
   * Creates a constraint.
   */
  createConstraint(params: ServiceCatalog.Types.CreateConstraintInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreateConstraintOutput) => void): Request<ServiceCatalog.Types.CreateConstraintOutput, AWSError>;
  /**
   * Creates a constraint.
   */
  createConstraint(callback?: (err: AWSError, data: ServiceCatalog.Types.CreateConstraintOutput) => void): Request<ServiceCatalog.Types.CreateConstraintOutput, AWSError>;
  /**
   * Creates a portfolio.
   */
  createPortfolio(params: ServiceCatalog.Types.CreatePortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreatePortfolioOutput) => void): Request<ServiceCatalog.Types.CreatePortfolioOutput, AWSError>;
  /**
   * Creates a portfolio.
   */
  createPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.CreatePortfolioOutput) => void): Request<ServiceCatalog.Types.CreatePortfolioOutput, AWSError>;
  /**
   * Shares the specified portfolio with the specified account.
   */
  createPortfolioShare(params: ServiceCatalog.Types.CreatePortfolioShareInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreatePortfolioShareOutput) => void): Request<ServiceCatalog.Types.CreatePortfolioShareOutput, AWSError>;
  /**
   * Shares the specified portfolio with the specified account.
   */
  createPortfolioShare(callback?: (err: AWSError, data: ServiceCatalog.Types.CreatePortfolioShareOutput) => void): Request<ServiceCatalog.Types.CreatePortfolioShareOutput, AWSError>;
  /**
   * Creates a product.
   */
  createProduct(params: ServiceCatalog.Types.CreateProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreateProductOutput) => void): Request<ServiceCatalog.Types.CreateProductOutput, AWSError>;
  /**
   * Creates a product.
   */
  createProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.CreateProductOutput) => void): Request<ServiceCatalog.Types.CreateProductOutput, AWSError>;
  /**
   * Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed. You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED. To view the resource changes in the change set, use DescribeProvisionedProductPlan. To create or modify the provisioned product, use ExecuteProvisionedProductPlan.
   */
  createProvisionedProductPlan(params: ServiceCatalog.Types.CreateProvisionedProductPlanInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreateProvisionedProductPlanOutput) => void): Request<ServiceCatalog.Types.CreateProvisionedProductPlanOutput, AWSError>;
  /**
   * Creates a plan. A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed. You can create one plan per provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILBLE or TAINTED. To view the resource changes in the change set, use DescribeProvisionedProductPlan. To create or modify the provisioned product, use ExecuteProvisionedProductPlan.
   */
  createProvisionedProductPlan(callback?: (err: AWSError, data: ServiceCatalog.Types.CreateProvisionedProductPlanOutput) => void): Request<ServiceCatalog.Types.CreateProvisionedProductPlanOutput, AWSError>;
  /**
   * Creates a provisioning artifact (also known as a version) for the specified product. You cannot create a provisioning artifact for a product that was shared with you.
   */
  createProvisioningArtifact(params: ServiceCatalog.Types.CreateProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreateProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.CreateProvisioningArtifactOutput, AWSError>;
  /**
   * Creates a provisioning artifact (also known as a version) for the specified product. You cannot create a provisioning artifact for a product that was shared with you.
   */
  createProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.CreateProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.CreateProvisioningArtifactOutput, AWSError>;
  /**
   * Creates a self-service action.
   */
  createServiceAction(params: ServiceCatalog.Types.CreateServiceActionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreateServiceActionOutput) => void): Request<ServiceCatalog.Types.CreateServiceActionOutput, AWSError>;
  /**
   * Creates a self-service action.
   */
  createServiceAction(callback?: (err: AWSError, data: ServiceCatalog.Types.CreateServiceActionOutput) => void): Request<ServiceCatalog.Types.CreateServiceActionOutput, AWSError>;
  /**
   * Creates a TagOption.
   */
  createTagOption(params: ServiceCatalog.Types.CreateTagOptionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.CreateTagOptionOutput) => void): Request<ServiceCatalog.Types.CreateTagOptionOutput, AWSError>;
  /**
   * Creates a TagOption.
   */
  createTagOption(callback?: (err: AWSError, data: ServiceCatalog.Types.CreateTagOptionOutput) => void): Request<ServiceCatalog.Types.CreateTagOptionOutput, AWSError>;
  /**
   * Deletes the specified constraint.
   */
  deleteConstraint(params: ServiceCatalog.Types.DeleteConstraintInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteConstraintOutput) => void): Request<ServiceCatalog.Types.DeleteConstraintOutput, AWSError>;
  /**
   * Deletes the specified constraint.
   */
  deleteConstraint(callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteConstraintOutput) => void): Request<ServiceCatalog.Types.DeleteConstraintOutput, AWSError>;
  /**
   * Deletes the specified portfolio. You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.
   */
  deletePortfolio(params: ServiceCatalog.Types.DeletePortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeletePortfolioOutput) => void): Request<ServiceCatalog.Types.DeletePortfolioOutput, AWSError>;
  /**
   * Deletes the specified portfolio. You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.
   */
  deletePortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.DeletePortfolioOutput) => void): Request<ServiceCatalog.Types.DeletePortfolioOutput, AWSError>;
  /**
   * Stops sharing the specified portfolio with the specified account.
   */
  deletePortfolioShare(params: ServiceCatalog.Types.DeletePortfolioShareInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeletePortfolioShareOutput) => void): Request<ServiceCatalog.Types.DeletePortfolioShareOutput, AWSError>;
  /**
   * Stops sharing the specified portfolio with the specified account.
   */
  deletePortfolioShare(callback?: (err: AWSError, data: ServiceCatalog.Types.DeletePortfolioShareOutput) => void): Request<ServiceCatalog.Types.DeletePortfolioShareOutput, AWSError>;
  /**
   * Deletes the specified product. You cannot delete a product if it was shared with you or is associated with a portfolio.
   */
  deleteProduct(params: ServiceCatalog.Types.DeleteProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteProductOutput) => void): Request<ServiceCatalog.Types.DeleteProductOutput, AWSError>;
  /**
   * Deletes the specified product. You cannot delete a product if it was shared with you or is associated with a portfolio.
   */
  deleteProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteProductOutput) => void): Request<ServiceCatalog.Types.DeleteProductOutput, AWSError>;
  /**
   * Deletes the specified plan.
   */
  deleteProvisionedProductPlan(params: ServiceCatalog.Types.DeleteProvisionedProductPlanInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteProvisionedProductPlanOutput) => void): Request<ServiceCatalog.Types.DeleteProvisionedProductPlanOutput, AWSError>;
  /**
   * Deletes the specified plan.
   */
  deleteProvisionedProductPlan(callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteProvisionedProductPlanOutput) => void): Request<ServiceCatalog.Types.DeleteProvisionedProductPlanOutput, AWSError>;
  /**
   * Deletes the specified provisioning artifact (also known as a version) for the specified product. You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.
   */
  deleteProvisioningArtifact(params: ServiceCatalog.Types.DeleteProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.DeleteProvisioningArtifactOutput, AWSError>;
  /**
   * Deletes the specified provisioning artifact (also known as a version) for the specified product. You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.
   */
  deleteProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.DeleteProvisioningArtifactOutput, AWSError>;
  /**
   * Deletes a self-service action.
   */
  deleteServiceAction(params: ServiceCatalog.Types.DeleteServiceActionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteServiceActionOutput) => void): Request<ServiceCatalog.Types.DeleteServiceActionOutput, AWSError>;
  /**
   * Deletes a self-service action.
   */
  deleteServiceAction(callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteServiceActionOutput) => void): Request<ServiceCatalog.Types.DeleteServiceActionOutput, AWSError>;
  /**
   * Deletes the specified TagOption. You cannot delete a TagOption if it is associated with a product or portfolio.
   */
  deleteTagOption(params: ServiceCatalog.Types.DeleteTagOptionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteTagOptionOutput) => void): Request<ServiceCatalog.Types.DeleteTagOptionOutput, AWSError>;
  /**
   * Deletes the specified TagOption. You cannot delete a TagOption if it is associated with a product or portfolio.
   */
  deleteTagOption(callback?: (err: AWSError, data: ServiceCatalog.Types.DeleteTagOptionOutput) => void): Request<ServiceCatalog.Types.DeleteTagOptionOutput, AWSError>;
  /**
   * Gets information about the specified constraint.
   */
  describeConstraint(params: ServiceCatalog.Types.DescribeConstraintInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeConstraintOutput) => void): Request<ServiceCatalog.Types.DescribeConstraintOutput, AWSError>;
  /**
   * Gets information about the specified constraint.
   */
  describeConstraint(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeConstraintOutput) => void): Request<ServiceCatalog.Types.DescribeConstraintOutput, AWSError>;
  /**
   * Gets the status of the specified copy product operation.
   */
  describeCopyProductStatus(params: ServiceCatalog.Types.DescribeCopyProductStatusInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeCopyProductStatusOutput) => void): Request<ServiceCatalog.Types.DescribeCopyProductStatusOutput, AWSError>;
  /**
   * Gets the status of the specified copy product operation.
   */
  describeCopyProductStatus(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeCopyProductStatusOutput) => void): Request<ServiceCatalog.Types.DescribeCopyProductStatusOutput, AWSError>;
  /**
   * Gets information about the specified portfolio.
   */
  describePortfolio(params: ServiceCatalog.Types.DescribePortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribePortfolioOutput) => void): Request<ServiceCatalog.Types.DescribePortfolioOutput, AWSError>;
  /**
   * Gets information about the specified portfolio.
   */
  describePortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribePortfolioOutput) => void): Request<ServiceCatalog.Types.DescribePortfolioOutput, AWSError>;
  /**
   * Gets information about the specified product.
   */
  describeProduct(params: ServiceCatalog.Types.DescribeProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductOutput) => void): Request<ServiceCatalog.Types.DescribeProductOutput, AWSError>;
  /**
   * Gets information about the specified product.
   */
  describeProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductOutput) => void): Request<ServiceCatalog.Types.DescribeProductOutput, AWSError>;
  /**
   * Gets information about the specified product. This operation is run with administrator access.
   */
  describeProductAsAdmin(params: ServiceCatalog.Types.DescribeProductAsAdminInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductAsAdminOutput) => void): Request<ServiceCatalog.Types.DescribeProductAsAdminOutput, AWSError>;
  /**
   * Gets information about the specified product. This operation is run with administrator access.
   */
  describeProductAsAdmin(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductAsAdminOutput) => void): Request<ServiceCatalog.Types.DescribeProductAsAdminOutput, AWSError>;
  /**
   * Gets information about the specified product.
   */
  describeProductView(params: ServiceCatalog.Types.DescribeProductViewInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductViewOutput) => void): Request<ServiceCatalog.Types.DescribeProductViewOutput, AWSError>;
  /**
   * Gets information about the specified product.
   */
  describeProductView(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProductViewOutput) => void): Request<ServiceCatalog.Types.DescribeProductViewOutput, AWSError>;
  /**
   * Gets information about the specified provisioned product.
   */
  describeProvisionedProduct(params: ServiceCatalog.Types.DescribeProvisionedProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisionedProductOutput) => void): Request<ServiceCatalog.Types.DescribeProvisionedProductOutput, AWSError>;
  /**
   * Gets information about the specified provisioned product.
   */
  describeProvisionedProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisionedProductOutput) => void): Request<ServiceCatalog.Types.DescribeProvisionedProductOutput, AWSError>;
  /**
   * Gets information about the resource changes for the specified plan.
   */
  describeProvisionedProductPlan(params: ServiceCatalog.Types.DescribeProvisionedProductPlanInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisionedProductPlanOutput) => void): Request<ServiceCatalog.Types.DescribeProvisionedProductPlanOutput, AWSError>;
  /**
   * Gets information about the resource changes for the specified plan.
   */
  describeProvisionedProductPlan(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisionedProductPlanOutput) => void): Request<ServiceCatalog.Types.DescribeProvisionedProductPlanOutput, AWSError>;
  /**
   * Gets information about the specified provisioning artifact (also known as a version) for the specified product.
   */
  describeProvisioningArtifact(params: ServiceCatalog.Types.DescribeProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.DescribeProvisioningArtifactOutput, AWSError>;
  /**
   * Gets information about the specified provisioning artifact (also known as a version) for the specified product.
   */
  describeProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.DescribeProvisioningArtifactOutput, AWSError>;
  /**
   * Gets information about the configuration required to provision the specified product using the specified provisioning artifact. If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to ProvisionProduct, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[N]:Value". Tag the provisioned product with the value sc-tagoption-conflict-portfolioId-productId.
   */
  describeProvisioningParameters(params: ServiceCatalog.Types.DescribeProvisioningParametersInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisioningParametersOutput) => void): Request<ServiceCatalog.Types.DescribeProvisioningParametersOutput, AWSError>;
  /**
   * Gets information about the configuration required to provision the specified product using the specified provisioning artifact. If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to ProvisionProduct, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[N]:Value". Tag the provisioned product with the value sc-tagoption-conflict-portfolioId-productId.
   */
  describeProvisioningParameters(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeProvisioningParametersOutput) => void): Request<ServiceCatalog.Types.DescribeProvisioningParametersOutput, AWSError>;
  /**
   * Gets information about the specified request operation. Use this operation after calling a request operation (for example, ProvisionProduct, TerminateProvisionedProduct, or UpdateProvisionedProduct). 
   */
  describeRecord(params: ServiceCatalog.Types.DescribeRecordInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeRecordOutput) => void): Request<ServiceCatalog.Types.DescribeRecordOutput, AWSError>;
  /**
   * Gets information about the specified request operation. Use this operation after calling a request operation (for example, ProvisionProduct, TerminateProvisionedProduct, or UpdateProvisionedProduct). 
   */
  describeRecord(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeRecordOutput) => void): Request<ServiceCatalog.Types.DescribeRecordOutput, AWSError>;
  /**
   * Describes a self-service action.
   */
  describeServiceAction(params: ServiceCatalog.Types.DescribeServiceActionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeServiceActionOutput) => void): Request<ServiceCatalog.Types.DescribeServiceActionOutput, AWSError>;
  /**
   * Describes a self-service action.
   */
  describeServiceAction(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeServiceActionOutput) => void): Request<ServiceCatalog.Types.DescribeServiceActionOutput, AWSError>;
  /**
   * Gets information about the specified TagOption.
   */
  describeTagOption(params: ServiceCatalog.Types.DescribeTagOptionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeTagOptionOutput) => void): Request<ServiceCatalog.Types.DescribeTagOptionOutput, AWSError>;
  /**
   * Gets information about the specified TagOption.
   */
  describeTagOption(callback?: (err: AWSError, data: ServiceCatalog.Types.DescribeTagOptionOutput) => void): Request<ServiceCatalog.Types.DescribeTagOptionOutput, AWSError>;
  /**
   * Disassociates a previously associated principal ARN from a specified portfolio.
   */
  disassociatePrincipalFromPortfolio(params: ServiceCatalog.Types.DisassociatePrincipalFromPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociatePrincipalFromPortfolioOutput) => void): Request<ServiceCatalog.Types.DisassociatePrincipalFromPortfolioOutput, AWSError>;
  /**
   * Disassociates a previously associated principal ARN from a specified portfolio.
   */
  disassociatePrincipalFromPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociatePrincipalFromPortfolioOutput) => void): Request<ServiceCatalog.Types.DisassociatePrincipalFromPortfolioOutput, AWSError>;
  /**
   * Disassociates the specified product from the specified portfolio. 
   */
  disassociateProductFromPortfolio(params: ServiceCatalog.Types.DisassociateProductFromPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociateProductFromPortfolioOutput) => void): Request<ServiceCatalog.Types.DisassociateProductFromPortfolioOutput, AWSError>;
  /**
   * Disassociates the specified product from the specified portfolio. 
   */
  disassociateProductFromPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociateProductFromPortfolioOutput) => void): Request<ServiceCatalog.Types.DisassociateProductFromPortfolioOutput, AWSError>;
  /**
   * Disassociates the specified self-service action association from the specified provisioning artifact.
   */
  disassociateServiceActionFromProvisioningArtifact(params: ServiceCatalog.Types.DisassociateServiceActionFromProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociateServiceActionFromProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.DisassociateServiceActionFromProvisioningArtifactOutput, AWSError>;
  /**
   * Disassociates the specified self-service action association from the specified provisioning artifact.
   */
  disassociateServiceActionFromProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociateServiceActionFromProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.DisassociateServiceActionFromProvisioningArtifactOutput, AWSError>;
  /**
   * Disassociates the specified TagOption from the specified resource.
   */
  disassociateTagOptionFromResource(params: ServiceCatalog.Types.DisassociateTagOptionFromResourceInput, callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociateTagOptionFromResourceOutput) => void): Request<ServiceCatalog.Types.DisassociateTagOptionFromResourceOutput, AWSError>;
  /**
   * Disassociates the specified TagOption from the specified resource.
   */
  disassociateTagOptionFromResource(callback?: (err: AWSError, data: ServiceCatalog.Types.DisassociateTagOptionFromResourceOutput) => void): Request<ServiceCatalog.Types.DisassociateTagOptionFromResourceOutput, AWSError>;
  /**
   * Provisions or modifies a product based on the resource changes for the specified plan.
   */
  executeProvisionedProductPlan(params: ServiceCatalog.Types.ExecuteProvisionedProductPlanInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ExecuteProvisionedProductPlanOutput) => void): Request<ServiceCatalog.Types.ExecuteProvisionedProductPlanOutput, AWSError>;
  /**
   * Provisions or modifies a product based on the resource changes for the specified plan.
   */
  executeProvisionedProductPlan(callback?: (err: AWSError, data: ServiceCatalog.Types.ExecuteProvisionedProductPlanOutput) => void): Request<ServiceCatalog.Types.ExecuteProvisionedProductPlanOutput, AWSError>;
  /**
   * Executes a self-service action against a provisioned product.
   */
  executeProvisionedProductServiceAction(params: ServiceCatalog.Types.ExecuteProvisionedProductServiceActionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ExecuteProvisionedProductServiceActionOutput) => void): Request<ServiceCatalog.Types.ExecuteProvisionedProductServiceActionOutput, AWSError>;
  /**
   * Executes a self-service action against a provisioned product.
   */
  executeProvisionedProductServiceAction(callback?: (err: AWSError, data: ServiceCatalog.Types.ExecuteProvisionedProductServiceActionOutput) => void): Request<ServiceCatalog.Types.ExecuteProvisionedProductServiceActionOutput, AWSError>;
  /**
   * Lists all portfolios for which sharing was accepted by this account.
   */
  listAcceptedPortfolioShares(params: ServiceCatalog.Types.ListAcceptedPortfolioSharesInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListAcceptedPortfolioSharesOutput) => void): Request<ServiceCatalog.Types.ListAcceptedPortfolioSharesOutput, AWSError>;
  /**
   * Lists all portfolios for which sharing was accepted by this account.
   */
  listAcceptedPortfolioShares(callback?: (err: AWSError, data: ServiceCatalog.Types.ListAcceptedPortfolioSharesOutput) => void): Request<ServiceCatalog.Types.ListAcceptedPortfolioSharesOutput, AWSError>;
  /**
   * Lists the constraints for the specified portfolio and product.
   */
  listConstraintsForPortfolio(params: ServiceCatalog.Types.ListConstraintsForPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListConstraintsForPortfolioOutput) => void): Request<ServiceCatalog.Types.ListConstraintsForPortfolioOutput, AWSError>;
  /**
   * Lists the constraints for the specified portfolio and product.
   */
  listConstraintsForPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.ListConstraintsForPortfolioOutput) => void): Request<ServiceCatalog.Types.ListConstraintsForPortfolioOutput, AWSError>;
  /**
   * Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
   */
  listLaunchPaths(params: ServiceCatalog.Types.ListLaunchPathsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListLaunchPathsOutput) => void): Request<ServiceCatalog.Types.ListLaunchPathsOutput, AWSError>;
  /**
   * Lists the paths to the specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.
   */
  listLaunchPaths(callback?: (err: AWSError, data: ServiceCatalog.Types.ListLaunchPathsOutput) => void): Request<ServiceCatalog.Types.ListLaunchPathsOutput, AWSError>;
  /**
   * Lists the account IDs that have access to the specified portfolio.
   */
  listPortfolioAccess(params: ServiceCatalog.Types.ListPortfolioAccessInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfolioAccessOutput) => void): Request<ServiceCatalog.Types.ListPortfolioAccessOutput, AWSError>;
  /**
   * Lists the account IDs that have access to the specified portfolio.
   */
  listPortfolioAccess(callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfolioAccessOutput) => void): Request<ServiceCatalog.Types.ListPortfolioAccessOutput, AWSError>;
  /**
   * Lists all portfolios in the catalog.
   */
  listPortfolios(params: ServiceCatalog.Types.ListPortfoliosInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfoliosOutput) => void): Request<ServiceCatalog.Types.ListPortfoliosOutput, AWSError>;
  /**
   * Lists all portfolios in the catalog.
   */
  listPortfolios(callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfoliosOutput) => void): Request<ServiceCatalog.Types.ListPortfoliosOutput, AWSError>;
  /**
   * Lists all portfolios that the specified product is associated with.
   */
  listPortfoliosForProduct(params: ServiceCatalog.Types.ListPortfoliosForProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfoliosForProductOutput) => void): Request<ServiceCatalog.Types.ListPortfoliosForProductOutput, AWSError>;
  /**
   * Lists all portfolios that the specified product is associated with.
   */
  listPortfoliosForProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.ListPortfoliosForProductOutput) => void): Request<ServiceCatalog.Types.ListPortfoliosForProductOutput, AWSError>;
  /**
   * Lists all principal ARNs associated with the specified portfolio.
   */
  listPrincipalsForPortfolio(params: ServiceCatalog.Types.ListPrincipalsForPortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListPrincipalsForPortfolioOutput) => void): Request<ServiceCatalog.Types.ListPrincipalsForPortfolioOutput, AWSError>;
  /**
   * Lists all principal ARNs associated with the specified portfolio.
   */
  listPrincipalsForPortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.ListPrincipalsForPortfolioOutput) => void): Request<ServiceCatalog.Types.ListPrincipalsForPortfolioOutput, AWSError>;
  /**
   * Lists the plans for the specified provisioned product or all plans to which the user has access.
   */
  listProvisionedProductPlans(params: ServiceCatalog.Types.ListProvisionedProductPlansInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListProvisionedProductPlansOutput) => void): Request<ServiceCatalog.Types.ListProvisionedProductPlansOutput, AWSError>;
  /**
   * Lists the plans for the specified provisioned product or all plans to which the user has access.
   */
  listProvisionedProductPlans(callback?: (err: AWSError, data: ServiceCatalog.Types.ListProvisionedProductPlansOutput) => void): Request<ServiceCatalog.Types.ListProvisionedProductPlansOutput, AWSError>;
  /**
   * Lists all provisioning artifacts (also known as versions) for the specified product.
   */
  listProvisioningArtifacts(params: ServiceCatalog.Types.ListProvisioningArtifactsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListProvisioningArtifactsOutput) => void): Request<ServiceCatalog.Types.ListProvisioningArtifactsOutput, AWSError>;
  /**
   * Lists all provisioning artifacts (also known as versions) for the specified product.
   */
  listProvisioningArtifacts(callback?: (err: AWSError, data: ServiceCatalog.Types.ListProvisioningArtifactsOutput) => void): Request<ServiceCatalog.Types.ListProvisioningArtifactsOutput, AWSError>;
  /**
   * Lists all provisioning artifacts (also known as versions) for the specified self-service action.
   */
  listProvisioningArtifactsForServiceAction(params: ServiceCatalog.Types.ListProvisioningArtifactsForServiceActionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListProvisioningArtifactsForServiceActionOutput) => void): Request<ServiceCatalog.Types.ListProvisioningArtifactsForServiceActionOutput, AWSError>;
  /**
   * Lists all provisioning artifacts (also known as versions) for the specified self-service action.
   */
  listProvisioningArtifactsForServiceAction(callback?: (err: AWSError, data: ServiceCatalog.Types.ListProvisioningArtifactsForServiceActionOutput) => void): Request<ServiceCatalog.Types.ListProvisioningArtifactsForServiceActionOutput, AWSError>;
  /**
   * Lists the specified requests or all performed requests.
   */
  listRecordHistory(params: ServiceCatalog.Types.ListRecordHistoryInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListRecordHistoryOutput) => void): Request<ServiceCatalog.Types.ListRecordHistoryOutput, AWSError>;
  /**
   * Lists the specified requests or all performed requests.
   */
  listRecordHistory(callback?: (err: AWSError, data: ServiceCatalog.Types.ListRecordHistoryOutput) => void): Request<ServiceCatalog.Types.ListRecordHistoryOutput, AWSError>;
  /**
   * Lists the resources associated with the specified TagOption.
   */
  listResourcesForTagOption(params: ServiceCatalog.Types.ListResourcesForTagOptionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListResourcesForTagOptionOutput) => void): Request<ServiceCatalog.Types.ListResourcesForTagOptionOutput, AWSError>;
  /**
   * Lists the resources associated with the specified TagOption.
   */
  listResourcesForTagOption(callback?: (err: AWSError, data: ServiceCatalog.Types.ListResourcesForTagOptionOutput) => void): Request<ServiceCatalog.Types.ListResourcesForTagOptionOutput, AWSError>;
  /**
   * Lists all self-service actions.
   */
  listServiceActions(params: ServiceCatalog.Types.ListServiceActionsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListServiceActionsOutput) => void): Request<ServiceCatalog.Types.ListServiceActionsOutput, AWSError>;
  /**
   * Lists all self-service actions.
   */
  listServiceActions(callback?: (err: AWSError, data: ServiceCatalog.Types.ListServiceActionsOutput) => void): Request<ServiceCatalog.Types.ListServiceActionsOutput, AWSError>;
  /**
   * Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
   */
  listServiceActionsForProvisioningArtifact(params: ServiceCatalog.Types.ListServiceActionsForProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListServiceActionsForProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.ListServiceActionsForProvisioningArtifactOutput, AWSError>;
  /**
   * Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.
   */
  listServiceActionsForProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.ListServiceActionsForProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.ListServiceActionsForProvisioningArtifactOutput, AWSError>;
  /**
   * Lists the specified TagOptions or all TagOptions.
   */
  listTagOptions(params: ServiceCatalog.Types.ListTagOptionsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ListTagOptionsOutput) => void): Request<ServiceCatalog.Types.ListTagOptionsOutput, AWSError>;
  /**
   * Lists the specified TagOptions or all TagOptions.
   */
  listTagOptions(callback?: (err: AWSError, data: ServiceCatalog.Types.ListTagOptionsOutput) => void): Request<ServiceCatalog.Types.ListTagOptionsOutput, AWSError>;
  /**
   * Provisions the specified product. A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using DescribeRecord. If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[N]:Value".
   */
  provisionProduct(params: ServiceCatalog.Types.ProvisionProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ProvisionProductOutput) => void): Request<ServiceCatalog.Types.ProvisionProductOutput, AWSError>;
  /**
   * Provisions the specified product. A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources. You can check the status of this request using DescribeRecord. If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[N]:Value".
   */
  provisionProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.ProvisionProductOutput) => void): Request<ServiceCatalog.Types.ProvisionProductOutput, AWSError>;
  /**
   * Rejects an offer to share the specified portfolio.
   */
  rejectPortfolioShare(params: ServiceCatalog.Types.RejectPortfolioShareInput, callback?: (err: AWSError, data: ServiceCatalog.Types.RejectPortfolioShareOutput) => void): Request<ServiceCatalog.Types.RejectPortfolioShareOutput, AWSError>;
  /**
   * Rejects an offer to share the specified portfolio.
   */
  rejectPortfolioShare(callback?: (err: AWSError, data: ServiceCatalog.Types.RejectPortfolioShareOutput) => void): Request<ServiceCatalog.Types.RejectPortfolioShareOutput, AWSError>;
  /**
   * Lists the provisioned products that are available (not terminated). To use additional filtering, see SearchProvisionedProducts.
   */
  scanProvisionedProducts(params: ServiceCatalog.Types.ScanProvisionedProductsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.ScanProvisionedProductsOutput) => void): Request<ServiceCatalog.Types.ScanProvisionedProductsOutput, AWSError>;
  /**
   * Lists the provisioned products that are available (not terminated). To use additional filtering, see SearchProvisionedProducts.
   */
  scanProvisionedProducts(callback?: (err: AWSError, data: ServiceCatalog.Types.ScanProvisionedProductsOutput) => void): Request<ServiceCatalog.Types.ScanProvisionedProductsOutput, AWSError>;
  /**
   * Gets information about the products to which the caller has access.
   */
  searchProducts(params: ServiceCatalog.Types.SearchProductsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProductsOutput) => void): Request<ServiceCatalog.Types.SearchProductsOutput, AWSError>;
  /**
   * Gets information about the products to which the caller has access.
   */
  searchProducts(callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProductsOutput) => void): Request<ServiceCatalog.Types.SearchProductsOutput, AWSError>;
  /**
   * Gets information about the products for the specified portfolio or all products.
   */
  searchProductsAsAdmin(params: ServiceCatalog.Types.SearchProductsAsAdminInput, callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProductsAsAdminOutput) => void): Request<ServiceCatalog.Types.SearchProductsAsAdminOutput, AWSError>;
  /**
   * Gets information about the products for the specified portfolio or all products.
   */
  searchProductsAsAdmin(callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProductsAsAdminOutput) => void): Request<ServiceCatalog.Types.SearchProductsAsAdminOutput, AWSError>;
  /**
   * Gets information about the provisioned products that meet the specified criteria.
   */
  searchProvisionedProducts(params: ServiceCatalog.Types.SearchProvisionedProductsInput, callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProvisionedProductsOutput) => void): Request<ServiceCatalog.Types.SearchProvisionedProductsOutput, AWSError>;
  /**
   * Gets information about the provisioned products that meet the specified criteria.
   */
  searchProvisionedProducts(callback?: (err: AWSError, data: ServiceCatalog.Types.SearchProvisionedProductsOutput) => void): Request<ServiceCatalog.Types.SearchProvisionedProductsOutput, AWSError>;
  /**
   * Terminates the specified provisioned product. This operation does not delete any records associated with the provisioned product. You can check the status of this request using DescribeRecord.
   */
  terminateProvisionedProduct(params: ServiceCatalog.Types.TerminateProvisionedProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.TerminateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.TerminateProvisionedProductOutput, AWSError>;
  /**
   * Terminates the specified provisioned product. This operation does not delete any records associated with the provisioned product. You can check the status of this request using DescribeRecord.
   */
  terminateProvisionedProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.TerminateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.TerminateProvisionedProductOutput, AWSError>;
  /**
   * Updates the specified constraint.
   */
  updateConstraint(params: ServiceCatalog.Types.UpdateConstraintInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateConstraintOutput) => void): Request<ServiceCatalog.Types.UpdateConstraintOutput, AWSError>;
  /**
   * Updates the specified constraint.
   */
  updateConstraint(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateConstraintOutput) => void): Request<ServiceCatalog.Types.UpdateConstraintOutput, AWSError>;
  /**
   * Updates the specified portfolio. You cannot update a product that was shared with you.
   */
  updatePortfolio(params: ServiceCatalog.Types.UpdatePortfolioInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdatePortfolioOutput) => void): Request<ServiceCatalog.Types.UpdatePortfolioOutput, AWSError>;
  /**
   * Updates the specified portfolio. You cannot update a product that was shared with you.
   */
  updatePortfolio(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdatePortfolioOutput) => void): Request<ServiceCatalog.Types.UpdatePortfolioOutput, AWSError>;
  /**
   * Updates the specified product.
   */
  updateProduct(params: ServiceCatalog.Types.UpdateProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProductOutput) => void): Request<ServiceCatalog.Types.UpdateProductOutput, AWSError>;
  /**
   * Updates the specified product.
   */
  updateProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProductOutput) => void): Request<ServiceCatalog.Types.UpdateProductOutput, AWSError>;
  /**
   * Requests updates to the configuration of the specified provisioned product. If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely. You can check the status of this request using DescribeRecord.
   */
  updateProvisionedProduct(params: ServiceCatalog.Types.UpdateProvisionedProductInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.UpdateProvisionedProductOutput, AWSError>;
  /**
   * Requests updates to the configuration of the specified provisioned product. If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely. You can check the status of this request using DescribeRecord.
   */
  updateProvisionedProduct(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProvisionedProductOutput) => void): Request<ServiceCatalog.Types.UpdateProvisionedProductOutput, AWSError>;
  /**
   * Updates the specified provisioning artifact (also known as a version) for the specified product. You cannot update a provisioning artifact for a product that was shared with you.
   */
  updateProvisioningArtifact(params: ServiceCatalog.Types.UpdateProvisioningArtifactInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.UpdateProvisioningArtifactOutput, AWSError>;
  /**
   * Updates the specified provisioning artifact (also known as a version) for the specified product. You cannot update a provisioning artifact for a product that was shared with you.
   */
  updateProvisioningArtifact(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateProvisioningArtifactOutput) => void): Request<ServiceCatalog.Types.UpdateProvisioningArtifactOutput, AWSError>;
  /**
   * Updates a self-service action.
   */
  updateServiceAction(params: ServiceCatalog.Types.UpdateServiceActionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateServiceActionOutput) => void): Request<ServiceCatalog.Types.UpdateServiceActionOutput, AWSError>;
  /**
   * Updates a self-service action.
   */
  updateServiceAction(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateServiceActionOutput) => void): Request<ServiceCatalog.Types.UpdateServiceActionOutput, AWSError>;
  /**
   * Updates the specified TagOption.
   */
  updateTagOption(params: ServiceCatalog.Types.UpdateTagOptionInput, callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateTagOptionOutput) => void): Request<ServiceCatalog.Types.UpdateTagOptionOutput, AWSError>;
  /**
   * Updates the specified TagOption.
   */
  updateTagOption(callback?: (err: AWSError, data: ServiceCatalog.Types.UpdateTagOptionOutput) => void): Request<ServiceCatalog.Types.UpdateTagOptionOutput, AWSError>;
}
declare namespace ServiceCatalog {
  export type AcceptLanguage = string;
  export interface AcceptPortfolioShareInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
  }
  export interface AcceptPortfolioShareOutput {
  }
  export interface AccessLevelFilter {
    /**
     * The access level.    Account - Filter results based on the account.    Role - Filter results based on the federated role of the specified user.    User - Filter results based on the specified user.  
     */
    Key?: AccessLevelFilterKey;
    /**
     * The user to which the access level applies. The only supported value is Self.
     */
    Value?: AccessLevelFilterValue;
  }
  export type AccessLevelFilterKey = "Account"|"Role"|"User"|string;
  export type AccessLevelFilterValue = string;
  export type AccountId = string;
  export type AccountIds = AccountId[];
  export type AddTags = Tag[];
  export type AllowedValue = string;
  export type AllowedValues = AllowedValue[];
  export type ApproximateCount = number;
  export interface AssociatePrincipalWithPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The ARN of the principal (IAM user, role, or group).
     */
    PrincipalARN: PrincipalARN;
    /**
     * The principal type. The supported value is IAM.
     */
    PrincipalType: PrincipalType;
  }
  export interface AssociatePrincipalWithPortfolioOutput {
  }
  export interface AssociateProductWithPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The identifier of the source portfolio.
     */
    SourcePortfolioId?: Id;
  }
  export interface AssociateProductWithPortfolioOutput {
  }
  export interface AssociateServiceActionWithProvisioningArtifactInput {
    /**
     * The product identifier. For example, prod-abcdzk7xy33qa.
     */
    ProductId: Id;
    /**
     * The identifier of the provisioning artifact. For example, pa-4abcdjnxjj6ne.
     */
    ProvisioningArtifactId: Id;
    /**
     * The self-service action identifier. For example, act-fs7abcd89wxyz.
     */
    ServiceActionId: Id;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface AssociateServiceActionWithProvisioningArtifactOutput {
  }
  export interface AssociateTagOptionWithResourceInput {
    /**
     * The resource identifier.
     */
    ResourceId: ResourceId;
    /**
     * The TagOption identifier.
     */
    TagOptionId: TagOptionId;
  }
  export interface AssociateTagOptionWithResourceOutput {
  }
  export type AttributeValue = string;
  export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
    /**
     * One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
     */
    ServiceActionAssociations: ServiceActionAssociations;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {
    /**
     * An object that contains a list of errors, along with information to help you identify the self-service action.
     */
    FailedServiceActionAssociations?: FailedServiceActionAssociations;
  }
  export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
    /**
     * One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
     */
    ServiceActionAssociations: ServiceActionAssociations;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
    /**
     * An object that contains a list of errors, along with information to help you identify the self-service action.
     */
    FailedServiceActionAssociations?: FailedServiceActionAssociations;
  }
  export type CausingEntity = string;
  export type ChangeAction = "ADD"|"MODIFY"|"REMOVE"|string;
  export interface CloudWatchDashboard {
    /**
     * The name of the CloudWatch dashboard.
     */
    Name?: CloudWatchDashboardName;
  }
  export type CloudWatchDashboardName = string;
  export type CloudWatchDashboards = CloudWatchDashboard[];
  export type ConstraintDescription = string;
  export interface ConstraintDetail {
    /**
     * The identifier of the constraint.
     */
    ConstraintId?: Id;
    /**
     * The type of constraint.    LAUNCH     NOTIFICATION     TEMPLATE   
     */
    Type?: ConstraintType;
    /**
     * The description of the constraint.
     */
    Description?: ConstraintDescription;
    /**
     * The owner of the constraint.
     */
    Owner?: AccountId;
  }
  export type ConstraintDetails = ConstraintDetail[];
  export type ConstraintParameters = string;
  export type ConstraintSummaries = ConstraintSummary[];
  export interface ConstraintSummary {
    /**
     * The type of constraint.    LAUNCH     NOTIFICATION     TEMPLATE   
     */
    Type?: ConstraintType;
    /**
     * The description of the constraint.
     */
    Description?: ConstraintDescription;
  }
  export type ConstraintType = string;
  export type CopyOption = "CopyTags"|string;
  export type CopyOptions = CopyOption[];
  export interface CopyProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The Amazon Resource Name (ARN) of the source product.
     */
    SourceProductArn: ProductArn;
    /**
     * The identifier of the target product. By default, a new product is created.
     */
    TargetProductId?: Id;
    /**
     * A name for the target product. The default is the name of the source product.
     */
    TargetProductName?: ProductViewName;
    /**
     * The identifiers of the provisioning artifacts (also known as versions) of the product to copy. By default, all provisioning artifacts are copied.
     */
    SourceProvisioningArtifactIdentifiers?: SourceProvisioningArtifactProperties;
    /**
     * The copy options. If the value is CopyTags, the tags from the source product are copied to the target product.
     */
    CopyOptions?: CopyOptions;
    /**
     *  A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request. 
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CopyProductOutput {
    /**
     * The token to use to track the progress of the operation.
     */
    CopyProductToken?: Id;
  }
  export type CopyProductStatus = "SUCCEEDED"|"IN_PROGRESS"|"FAILED"|string;
  export interface CreateConstraintInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:  LAUNCH  Specify the RoleArn property as follows: \"RoleArn\" : \"arn:aws:iam::123456789012:role/LaunchRole\"  NOTIFICATION  Specify the NotificationArns property as follows: \"NotificationArns\" : [\"arn:aws:sns:us-east-1:123456789012:Topic\"]  TEMPLATE  Specify the Rules property. For more information, see Template Constraint Rules.  
     */
    Parameters: ConstraintParameters;
    /**
     * The type of constraint.    LAUNCH     NOTIFICATION     TEMPLATE   
     */
    Type: ConstraintType;
    /**
     * The description of the constraint.
     */
    Description?: ConstraintDescription;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreateConstraintOutput {
    /**
     * Information about the constraint.
     */
    ConstraintDetail?: ConstraintDetail;
    /**
     * The constraint parameters.
     */
    ConstraintParameters?: ConstraintParameters;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface CreatePortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The name to use for display purposes.
     */
    DisplayName: PortfolioDisplayName;
    /**
     * The description of the portfolio.
     */
    Description?: PortfolioDescription;
    /**
     * The name of the portfolio provider.
     */
    ProviderName: ProviderName;
    /**
     * One or more tags.
     */
    Tags?: AddTags;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreatePortfolioOutput {
    /**
     * Information about the portfolio.
     */
    PortfolioDetail?: PortfolioDetail;
    /**
     * Information about the tags associated with the portfolio.
     */
    Tags?: Tags;
  }
  export interface CreatePortfolioShareInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The AWS account ID.
     */
    AccountId: AccountId;
  }
  export interface CreatePortfolioShareOutput {
  }
  export interface CreateProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The name of the product.
     */
    Name: ProductViewName;
    /**
     * The owner of the product.
     */
    Owner: ProductViewOwner;
    /**
     * The description of the product.
     */
    Description?: ProductViewShortDescription;
    /**
     * The distributor of the product.
     */
    Distributor?: ProductViewOwner;
    /**
     * The support information about the product.
     */
    SupportDescription?: SupportDescription;
    /**
     * The contact email for product support.
     */
    SupportEmail?: SupportEmail;
    /**
     * The contact URL for product support.
     */
    SupportUrl?: SupportUrl;
    /**
     * The type of product.
     */
    ProductType: ProductType;
    /**
     * One or more tags.
     */
    Tags?: AddTags;
    /**
     * The configuration of the provisioning artifact.
     */
    ProvisioningArtifactParameters: ProvisioningArtifactProperties;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreateProductOutput {
    /**
     * Information about the product view.
     */
    ProductViewDetail?: ProductViewDetail;
    /**
     * Information about the provisioning artifact.
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * Information about the tags associated with the product.
     */
    Tags?: Tags;
  }
  export interface CreateProvisionedProductPlanInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The name of the plan.
     */
    PlanName: ProvisionedProductPlanName;
    /**
     * The plan type.
     */
    PlanType: ProvisionedProductPlanType;
    /**
     * Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.
     */
    NotificationArns?: NotificationArns;
    /**
     * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths.
     */
    PathId?: Id;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * A user-friendly name for the provisioned product. This value must be unique for the AWS account and cannot be updated after the product is provisioned.
     */
    ProvisionedProductName: ProvisionedProductName;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId: Id;
    /**
     * Parameters specified by the administrator that are required for provisioning the product.
     */
    ProvisioningParameters?: UpdateProvisioningParameters;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
     */
    IdempotencyToken: IdempotencyToken;
    /**
     * One or more tags.
     */
    Tags?: Tags;
  }
  export interface CreateProvisionedProductPlanOutput {
    /**
     * The name of the plan.
     */
    PlanName?: ProvisionedProductPlanName;
    /**
     * The plan identifier.
     */
    PlanId?: Id;
    /**
     * The product identifier.
     */
    ProvisionProductId?: Id;
    /**
     * The user-friendly name of the provisioned product.
     */
    ProvisionedProductName?: ProvisionedProductName;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId?: Id;
  }
  export interface CreateProvisioningArtifactInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The configuration for the provisioning artifact.
     */
    Parameters: ProvisioningArtifactProperties;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreateProvisioningArtifactOutput {
    /**
     * Information about the provisioning artifact.
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * The URL of the CloudFormation template in Amazon S3, in JSON format.
     */
    Info?: ProvisioningArtifactInfo;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface CreateServiceActionInput {
    /**
     * The self-service action name.
     */
    Name: ServiceActionName;
    /**
     * The service action definition type. For example, SSM_AUTOMATION.
     */
    DefinitionType: ServiceActionDefinitionType;
    /**
     * The self-service action definition. Can be one of the following:  Name  The name of the AWS Systems Manager Document. For example, AWS-RestartEC2Instance.  Version  The AWS Systems Manager automation document version. For example, "Version": "1"   AssumeRole  The Amazon Resource Name (ARN) of the role that performs the self-service actions on your behalf. For example, "AssumeRole": "arn:aws:iam::12345678910:role/ActionRole". To reuse the provisioned product launch role, set to "AssumeRole": "LAUNCH_ROLE".  Parameters  The list of parameters in JSON format. For example: [{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"}].  
     */
    Definition: ServiceActionDefinitionMap;
    /**
     * The self-service action description.
     */
    Description?: ServiceActionDescription;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface CreateServiceActionOutput {
    /**
     * An object containing information about the self-service action.
     */
    ServiceActionDetail?: ServiceActionDetail;
  }
  export interface CreateTagOptionInput {
    /**
     * The TagOption key.
     */
    Key: TagOptionKey;
    /**
     * The TagOption value.
     */
    Value: TagOptionValue;
  }
  export interface CreateTagOptionOutput {
    /**
     * Information about the TagOption.
     */
    TagOptionDetail?: TagOptionDetail;
  }
  export type CreatedTime = Date;
  export type CreationTime = Date;
  export type DefaultValue = string;
  export interface DeleteConstraintInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the constraint.
     */
    Id: Id;
  }
  export interface DeleteConstraintOutput {
  }
  export interface DeletePortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    Id: Id;
  }
  export interface DeletePortfolioOutput {
  }
  export interface DeletePortfolioShareInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The AWS account ID.
     */
    AccountId: AccountId;
  }
  export interface DeletePortfolioShareOutput {
  }
  export interface DeleteProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    Id: Id;
  }
  export interface DeleteProductOutput {
  }
  export interface DeleteProvisionedProductPlanInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The plan identifier.
     */
    PlanId: Id;
    /**
     * If set to true, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.
     */
    IgnoreErrors?: IgnoreErrors;
  }
  export interface DeleteProvisionedProductPlanOutput {
  }
  export interface DeleteProvisioningArtifactInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId: Id;
  }
  export interface DeleteProvisioningArtifactOutput {
  }
  export interface DeleteServiceActionInput {
    /**
     * The self-service action identifier. For example, act-fs7abcd89wxyz.
     */
    Id: Id;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface DeleteServiceActionOutput {
  }
  export interface DeleteTagOptionInput {
    /**
     * The TagOption identifier.
     */
    Id: TagOptionId;
  }
  export interface DeleteTagOptionOutput {
  }
  export interface DescribeConstraintInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the constraint.
     */
    Id: Id;
  }
  export interface DescribeConstraintOutput {
    /**
     * Information about the constraint.
     */
    ConstraintDetail?: ConstraintDetail;
    /**
     * The constraint parameters.
     */
    ConstraintParameters?: ConstraintParameters;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface DescribeCopyProductStatusInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The token for the copy product operation. This token is returned by CopyProduct.
     */
    CopyProductToken: Id;
  }
  export interface DescribeCopyProductStatusOutput {
    /**
     * The status of the copy product operation.
     */
    CopyProductStatus?: CopyProductStatus;
    /**
     * The identifier of the copied product.
     */
    TargetProductId?: Id;
    /**
     * The status message.
     */
    StatusDetail?: StatusDetail;
  }
  export interface DescribePortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    Id: Id;
  }
  export interface DescribePortfolioOutput {
    /**
     * Information about the portfolio.
     */
    PortfolioDetail?: PortfolioDetail;
    /**
     * Information about the tags associated with the portfolio.
     */
    Tags?: Tags;
    /**
     * Information about the TagOptions associated with the portfolio.
     */
    TagOptions?: TagOptionDetails;
  }
  export interface DescribeProductAsAdminInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    Id: Id;
  }
  export interface DescribeProductAsAdminOutput {
    /**
     * Information about the product view.
     */
    ProductViewDetail?: ProductViewDetail;
    /**
     * Information about the provisioning artifacts (also known as versions) for the specified product.
     */
    ProvisioningArtifactSummaries?: ProvisioningArtifactSummaries;
    /**
     * Information about the tags associated with the product.
     */
    Tags?: Tags;
    /**
     * Information about the TagOptions associated with the product.
     */
    TagOptions?: TagOptionDetails;
  }
  export interface DescribeProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    Id: Id;
  }
  export interface DescribeProductOutput {
    /**
     * Summary information about the product view.
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * Information about the provisioning artifacts for the specified product.
     */
    ProvisioningArtifacts?: ProvisioningArtifacts;
  }
  export interface DescribeProductViewInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product view identifier.
     */
    Id: Id;
  }
  export interface DescribeProductViewOutput {
    /**
     * Summary information about the product.
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * Information about the provisioning artifacts for the product.
     */
    ProvisioningArtifacts?: ProvisioningArtifacts;
  }
  export interface DescribeProvisionedProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The provisioned product identifier.
     */
    Id: Id;
  }
  export interface DescribeProvisionedProductOutput {
    /**
     * Information about the provisioned product.
     */
    ProvisionedProductDetail?: ProvisionedProductDetail;
    /**
     * Any CloudWatch dashboards that were created when provisioning the product.
     */
    CloudWatchDashboards?: CloudWatchDashboards;
  }
  export interface DescribeProvisionedProductPlanInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The plan identifier.
     */
    PlanId: Id;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface DescribeProvisionedProductPlanOutput {
    /**
     * Information about the plan.
     */
    ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails;
    /**
     * Information about the resource changes that will occur when the plan is executed.
     */
    ResourceChanges?: ResourceChanges;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface DescribeProvisioningArtifactInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId: Id;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * Indicates whether a verbose level of detail is enabled.
     */
    Verbose?: Verbose;
  }
  export interface DescribeProvisioningArtifactOutput {
    /**
     * Information about the provisioning artifact.
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * The URL of the CloudFormation template in Amazon S3.
     */
    Info?: ProvisioningArtifactInfo;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface DescribeProvisioningParametersInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId: Id;
    /**
     * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths.
     */
    PathId?: Id;
  }
  export interface DescribeProvisioningParametersOutput {
    /**
     * Information about the parameters used to provision the product.
     */
    ProvisioningArtifactParameters?: ProvisioningArtifactParameters;
    /**
     * Information about the constraints used to provision the product.
     */
    ConstraintSummaries?: ConstraintSummaries;
    /**
     * Any additional metadata specifically related to the provisioning of the product. For example, see the Version field of the CloudFormation template.
     */
    UsageInstructions?: UsageInstructions;
    /**
     * Information about the TagOptions associated with the resource.
     */
    TagOptions?: TagOptionSummaries;
  }
  export interface DescribeRecordInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The record identifier of the provisioned product. This identifier is returned by the request operation.
     */
    Id: Id;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeRecordOutput {
    /**
     * Information about the product.
     */
    RecordDetail?: RecordDetail;
    /**
     * Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
     */
    RecordOutputs?: RecordOutputs;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface DescribeServiceActionInput {
    /**
     * The self-service action identifier.
     */
    Id: Id;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface DescribeServiceActionOutput {
    /**
     * Detailed information about the self-service action.
     */
    ServiceActionDetail?: ServiceActionDetail;
  }
  export interface DescribeTagOptionInput {
    /**
     * The TagOption identifier.
     */
    Id: TagOptionId;
  }
  export interface DescribeTagOptionOutput {
    /**
     * Information about the TagOption.
     */
    TagOptionDetail?: TagOptionDetail;
  }
  export type Description = string;
  export interface DisassociatePrincipalFromPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The ARN of the principal (IAM user, role, or group).
     */
    PrincipalARN: PrincipalARN;
  }
  export interface DisassociatePrincipalFromPortfolioOutput {
  }
  export interface DisassociateProductFromPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
  }
  export interface DisassociateProductFromPortfolioOutput {
  }
  export interface DisassociateServiceActionFromProvisioningArtifactInput {
    /**
     * The product identifier. For example, prod-abcdzk7xy33qa.
     */
    ProductId: Id;
    /**
     * The identifier of the provisioning artifact. For example, pa-4abcdjnxjj6ne.
     */
    ProvisioningArtifactId: Id;
    /**
     * The self-service action identifier. For example, act-fs7abcd89wxyz.
     */
    ServiceActionId: Id;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface DisassociateServiceActionFromProvisioningArtifactOutput {
  }
  export interface DisassociateTagOptionFromResourceInput {
    /**
     * The resource identifier.
     */
    ResourceId: ResourceId;
    /**
     * The TagOption identifier.
     */
    TagOptionId: TagOptionId;
  }
  export interface DisassociateTagOptionFromResourceOutput {
  }
  export type ErrorCode = string;
  export type ErrorDescription = string;
  export type EvaluationType = "STATIC"|"DYNAMIC"|string;
  export interface ExecuteProvisionedProductPlanInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The plan identifier.
     */
    PlanId: Id;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
     */
    IdempotencyToken: IdempotencyToken;
  }
  export interface ExecuteProvisionedProductPlanOutput {
    /**
     * Information about the result of provisioning the product.
     */
    RecordDetail?: RecordDetail;
  }
  export interface ExecuteProvisionedProductServiceActionInput {
    /**
     * The identifier of the provisioned product.
     */
    ProvisionedProductId: Id;
    /**
     * The self-service action identifier. For example, act-fs7abcd89wxyz.
     */
    ServiceActionId: Id;
    /**
     * An idempotency token that uniquely identifies the execute request.
     */
    ExecuteToken: IdempotencyToken;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface ExecuteProvisionedProductServiceActionOutput {
    /**
     * An object containing detailed information about the result of provisioning the product.
     */
    RecordDetail?: RecordDetail;
  }
  export interface FailedServiceActionAssociation {
    /**
     * The self-service action identifier. For example, act-fs7abcd89wxyz.
     */
    ServiceActionId?: Id;
    /**
     * The product identifier. For example, prod-abcdzk7xy33qa.
     */
    ProductId?: Id;
    /**
     * The identifier of the provisioning artifact. For example, pa-4abcdjnxjj6ne.
     */
    ProvisioningArtifactId?: Id;
    /**
     * The error code. Valid values are listed below.
     */
    ErrorCode?: ServiceActionAssociationErrorCode;
    /**
     * A text description of the error.
     */
    ErrorMessage?: ServiceActionAssociationErrorMessage;
  }
  export type FailedServiceActionAssociations = FailedServiceActionAssociation[];
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
     * The identifier of the product path.
     */
    Id?: Id;
    /**
     * The constraints on the portfolio-product relationship.
     */
    ConstraintSummaries?: ConstraintSummaries;
    /**
     * The tags associated with this product path.
     */
    Tags?: Tags;
    /**
     * The name of the portfolio to which the user was assigned.
     */
    Name?: PortfolioName;
  }
  export interface ListAcceptedPortfolioSharesInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The type of shared portfolios to list. The default is to list imported portfolios.    AWS_SERVICECATALOG - List default portfolios    IMPORTED - List imported portfolios  
     */
    PortfolioShareType?: PortfolioShareType;
  }
  export interface ListAcceptedPortfolioSharesOutput {
    /**
     * Information about the portfolios.
     */
    PortfolioDetails?: PortfolioDetails;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListConstraintsForPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The product identifier.
     */
    ProductId?: Id;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface ListConstraintsForPortfolioOutput {
    /**
     * Information about the constraints.
     */
    ConstraintDetails?: ConstraintDetails;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListLaunchPathsInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface ListLaunchPathsOutput {
    /**
     * Information about the launch path.
     */
    LaunchPathSummaries?: LaunchPathSummaries;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListPortfolioAccessInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
  }
  export interface ListPortfolioAccessOutput {
    /**
     * Information about the AWS accounts with access to the portfolio.
     */
    AccountIds?: AccountIds;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListPortfoliosForProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface ListPortfoliosForProductOutput {
    /**
     * Information about the portfolios.
     */
    PortfolioDetails?: PortfolioDetails;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListPortfoliosInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface ListPortfoliosOutput {
    /**
     * Information about the portfolios.
     */
    PortfolioDetails?: PortfolioDetails;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListPrincipalsForPortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface ListPrincipalsForPortfolioOutput {
    /**
     * The IAM principals (users or roles) associated with the portfolio.
     */
    Principals?: Principals;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListProvisionedProductPlansInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProvisionProductId?: Id;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
    /**
     * The access level to use to obtain results. The default is User.
     */
    AccessLevelFilter?: AccessLevelFilter;
  }
  export interface ListProvisionedProductPlansOutput {
    /**
     * Information about the plans.
     */
    ProvisionedProductPlans?: ProvisionedProductPlans;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListProvisioningArtifactsForServiceActionInput {
    /**
     * The self-service action identifier. For example, act-fs7abcd89wxyz.
     */
    ServiceActionId: Id;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface ListProvisioningArtifactsForServiceActionOutput {
    /**
     * An array of objects with information about product views and provisioning artifacts.
     */
    ProvisioningArtifactViews?: ProvisioningArtifactViews;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListProvisioningArtifactsInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
  }
  export interface ListProvisioningArtifactsOutput {
    /**
     * Information about the provisioning artifacts.
     */
    ProvisioningArtifactDetails?: ProvisioningArtifactDetails;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListRecordHistoryInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The access level to use to obtain results. The default is User.
     */
    AccessLevelFilter?: AccessLevelFilter;
    /**
     * The search filter to scope the results.
     */
    SearchFilter?: ListRecordHistorySearchFilter;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface ListRecordHistoryOutput {
    /**
     * The records, in reverse chronological order.
     */
    RecordDetails?: RecordDetails;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListRecordHistorySearchFilter {
    /**
     * The filter key.    product - Filter results based on the specified product identifier.    provisionedproduct - Filter results based on the provisioned product identifier.  
     */
    Key?: SearchFilterKey;
    /**
     * The filter value.
     */
    Value?: SearchFilterValue;
  }
  export interface ListResourcesForTagOptionInput {
    /**
     * The TagOption identifier.
     */
    TagOptionId: TagOptionId;
    /**
     * The resource type.    Portfolio     Product   
     */
    ResourceType?: ResourceType;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface ListResourcesForTagOptionOutput {
    /**
     * Information about the resources.
     */
    ResourceDetails?: ResourceDetails;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface ListServiceActionsForProvisioningArtifactInput {
    /**
     * The product identifier. For example, prod-abcdzk7xy33qa.
     */
    ProductId: Id;
    /**
     * The identifier of the provisioning artifact. For example, pa-4abcdjnxjj6ne.
     */
    ProvisioningArtifactId: Id;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface ListServiceActionsForProvisioningArtifactOutput {
    /**
     * An object containing information about the self-service actions associated with the provisioning artifact.
     */
    ServiceActionSummaries?: ServiceActionSummaries;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListServiceActionsInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface ListServiceActionsOutput {
    /**
     * An object containing information about the service actions associated with the provisioning artifact.
     */
    ServiceActionSummaries?: ServiceActionSummaries;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface ListTagOptionsFilters {
    /**
     * The TagOption key.
     */
    Key?: TagOptionKey;
    /**
     * The TagOption value.
     */
    Value?: TagOptionValue;
    /**
     * The active state.
     */
    Active?: TagOptionActive;
  }
  export interface ListTagOptionsInput {
    /**
     * The search filters. If no search filters are specified, the output includes all TagOptions.
     */
    Filters?: ListTagOptionsFilters;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface ListTagOptionsOutput {
    /**
     * Information about the TagOptions.
     */
    TagOptionDetails?: TagOptionDetails;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export type LogicalResourceId = string;
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
  export type PhysicalId = string;
  export type PhysicalResourceId = string;
  export type PlanResourceType = string;
  export type PortfolioDescription = string;
  export interface PortfolioDetail {
    /**
     * The portfolio identifier.
     */
    Id?: Id;
    /**
     * The ARN assigned to the portfolio.
     */
    ARN?: ResourceARN;
    /**
     * The name to use for display purposes.
     */
    DisplayName?: PortfolioDisplayName;
    /**
     * The description of the portfolio.
     */
    Description?: PortfolioDescription;
    /**
     * The UTC time stamp of the creation time.
     */
    CreatedTime?: CreationTime;
    /**
     * The name of the portfolio provider.
     */
    ProviderName?: ProviderName;
  }
  export type PortfolioDetails = PortfolioDetail[];
  export type PortfolioDisplayName = string;
  export type PortfolioName = string;
  export type PortfolioShareType = "IMPORTED"|"AWS_SERVICECATALOG"|string;
  export interface Principal {
    /**
     * The ARN of the principal (IAM user, role, or group).
     */
    PrincipalARN?: PrincipalARN;
    /**
     * The principal type. The supported value is IAM.
     */
    PrincipalType?: PrincipalType;
  }
  export type PrincipalARN = string;
  export type PrincipalType = "IAM"|string;
  export type Principals = Principal[];
  export type ProductArn = string;
  export type ProductSource = "ACCOUNT"|string;
  export type ProductType = "CLOUD_FORMATION_TEMPLATE"|"MARKETPLACE"|string;
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
  export interface ProductViewDetail {
    /**
     * Summary information about the product view.
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * The status of the product.    AVAILABLE - The product is ready for use.    CREATING - Product creation has started; the product is not ready for use.    FAILED - An action failed.  
     */
    Status?: Status;
    /**
     * The ARN of the product.
     */
    ProductARN?: ResourceARN;
    /**
     * The UTC time stamp of the creation time.
     */
    CreatedTime?: CreatedTime;
  }
  export type ProductViewDetails = ProductViewDetail[];
  export type ProductViewDistributor = string;
  export type ProductViewFilterBy = "FullTextSearch"|"Owner"|"ProductType"|"SourceProductId"|string;
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
     * The product type. Contact the product administrator for the significance of this value. If this value is MARKETPLACE, the product was created by AWS Marketplace.
     */
    Type?: ProductType;
    /**
     * The distributor of the product. Contact the product administrator for the significance of this value.
     */
    Distributor?: ProductViewDistributor;
    /**
     * Indicates whether the product has a default path. If the product does not have a default path, call ListLaunchPaths to disambiguate between paths. Otherwise, ListLaunchPaths is not required, and the output of ProductViewSummary can be used directly with DescribeProvisioningParameters.
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
  export type PropertyName = string;
  export type ProviderName = string;
  export interface ProvisionProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId: Id;
    /**
     * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths.
     */
    PathId?: Id;
    /**
     * A user-friendly name for the provisioned product. This value must be unique for the AWS account and cannot be updated after the product is provisioned.
     */
    ProvisionedProductName: ProvisionedProductName;
    /**
     * Parameters specified by the administrator that are required for provisioning the product.
     */
    ProvisioningParameters?: ProvisioningParameters;
    /**
     * One or more tags.
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
     * Information about the result of provisioning the product.
     */
    RecordDetail?: RecordDetail;
  }
  export interface ProvisionedProductAttribute {
    /**
     * The user-friendly name of the provisioned product.
     */
    Name?: ProvisionedProductNameOrArn;
    /**
     * The ARN of the provisioned product.
     */
    Arn?: ProvisionedProductNameOrArn;
    /**
     * The type of provisioned product. The supported value is CFN_STACK.
     */
    Type?: ProvisionedProductType;
    /**
     * The identifier of the provisioned product.
     */
    Id?: Id;
    /**
     * The current status of the provisioned product.    AVAILABLE - Stable state, ready to perform any operation. The most recent operation succeeded and completed.    UNDER_CHANGE - Transitive state, operations performed might not have valid results. Wait for an AVAILABLE status before performing operations.    TAINTED - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.    ERROR - An unexpected error occurred, the provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.  
     */
    Status?: ProvisionedProductStatus;
    /**
     * The current status message of the provisioned product.
     */
    StatusMessage?: ProvisionedProductStatusMessage;
    /**
     * The UTC time stamp of the creation time.
     */
    CreatedTime?: CreatedTime;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
     */
    IdempotencyToken?: IdempotencyToken;
    /**
     * The record identifier of the last request performed on this provisioned product.
     */
    LastRecordId?: Id;
    /**
     * One or more tags.
     */
    Tags?: Tags;
    /**
     * The assigned identifier for the resource, such as an EC2 instance ID or an S3 bucket name.
     */
    PhysicalId?: PhysicalId;
    /**
     * The product identifier.
     */
    ProductId?: Id;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId?: Id;
    /**
     * The Amazon Resource Name (ARN) of the IAM user.
     */
    UserArn?: UserArn;
    /**
     * The ARN of the IAM user in the session. This ARN might contain a session ID.
     */
    UserArnSession?: UserArnSession;
  }
  export type ProvisionedProductAttributes = ProvisionedProductAttribute[];
  export interface ProvisionedProductDetail {
    /**
     * The user-friendly name of the provisioned product.
     */
    Name?: ProvisionedProductNameOrArn;
    /**
     * The ARN of the provisioned product.
     */
    Arn?: ProvisionedProductNameOrArn;
    /**
     * The type of provisioned product. The supported value is CFN_STACK.
     */
    Type?: ProvisionedProductType;
    /**
     * The identifier of the provisioned product.
     */
    Id?: ProvisionedProductId;
    /**
     * The current status of the provisioned product.    AVAILABLE - Stable state, ready to perform any operation. The most recent operation succeeded and completed.    UNDER_CHANGE - Transitive state, operations performed might not have valid results. Wait for an AVAILABLE status before performing operations.    TAINTED - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.    ERROR - An unexpected error occurred, the provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.  
     */
    Status?: ProvisionedProductStatus;
    /**
     * The current status message of the provisioned product.
     */
    StatusMessage?: ProvisionedProductStatusMessage;
    /**
     * The UTC time stamp of the creation time.
     */
    CreatedTime?: CreatedTime;
    /**
     * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
     */
    IdempotencyToken?: IdempotencyToken;
    /**
     * The record identifier of the last request performed on this provisioned product.
     */
    LastRecordId?: LastRequestId;
    /**
     * The product identifier. For example, prod-abcdzk7xy33qa.
     */
    ProductId?: Id;
    /**
     * The identifier of the provisioning artifact. For example, pa-4abcdjnxjj6ne.
     */
    ProvisioningArtifactId?: Id;
  }
  export type ProvisionedProductDetails = ProvisionedProductDetail[];
  export type ProvisionedProductFilters = {[key: string]: ProvisionedProductViewFilterValues};
  export type ProvisionedProductId = string;
  export type ProvisionedProductName = string;
  export type ProvisionedProductNameOrArn = string;
  export interface ProvisionedProductPlanDetails {
    /**
     * The UTC time stamp of the creation time.
     */
    CreatedTime?: CreatedTime;
    /**
     * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths.
     */
    PathId?: Id;
    /**
     * The product identifier.
     */
    ProductId?: Id;
    /**
     * The name of the plan.
     */
    PlanName?: ProvisionedProductPlanName;
    /**
     * The plan identifier.
     */
    PlanId?: Id;
    /**
     * The product identifier.
     */
    ProvisionProductId?: Id;
    /**
     * The user-friendly name of the provisioned product.
     */
    ProvisionProductName?: ProvisionedProductName;
    /**
     * The plan type.
     */
    PlanType?: ProvisionedProductPlanType;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId?: Id;
    /**
     * The status.
     */
    Status?: ProvisionedProductPlanStatus;
    /**
     * The time when the plan was last updated.
     */
    UpdatedTime?: UpdatedTime;
    /**
     * Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.
     */
    NotificationArns?: NotificationArns;
    /**
     * Parameters specified by the administrator that are required for provisioning the product.
     */
    ProvisioningParameters?: UpdateProvisioningParameters;
    /**
     * One or more tags.
     */
    Tags?: Tags;
    /**
     * The status message.
     */
    StatusMessage?: StatusMessage;
  }
  export type ProvisionedProductPlanName = string;
  export type ProvisionedProductPlanStatus = "CREATE_IN_PROGRESS"|"CREATE_SUCCESS"|"CREATE_FAILED"|"EXECUTE_IN_PROGRESS"|"EXECUTE_SUCCESS"|"EXECUTE_FAILED"|string;
  export interface ProvisionedProductPlanSummary {
    /**
     * The name of the plan.
     */
    PlanName?: ProvisionedProductPlanName;
    /**
     * The plan identifier.
     */
    PlanId?: Id;
    /**
     * The product identifier.
     */
    ProvisionProductId?: Id;
    /**
     * The user-friendly name of the provisioned product.
     */
    ProvisionProductName?: ProvisionedProductName;
    /**
     * The plan type.
     */
    PlanType?: ProvisionedProductPlanType;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId?: Id;
  }
  export type ProvisionedProductPlanType = "CLOUDFORMATION"|string;
  export type ProvisionedProductPlans = ProvisionedProductPlanSummary[];
  export type ProvisionedProductStatus = "AVAILABLE"|"UNDER_CHANGE"|"TAINTED"|"ERROR"|"PLAN_IN_PROGRESS"|string;
  export type ProvisionedProductStatusMessage = string;
  export type ProvisionedProductType = string;
  export type ProvisionedProductViewFilterBy = "SearchQuery"|string;
  export type ProvisionedProductViewFilterValue = string;
  export type ProvisionedProductViewFilterValues = ProvisionedProductViewFilterValue[];
  export interface ProvisioningArtifact {
    /**
     * The identifier of the provisioning artifact.
     */
    Id?: Id;
    /**
     * The name of the provisioning artifact.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The description of the provisioning artifact.
     */
    Description?: ProvisioningArtifactDescription;
    /**
     * The UTC time stamp of the creation time.
     */
    CreatedTime?: ProvisioningArtifactCreatedTime;
  }
  export type ProvisioningArtifactActive = boolean;
  export type ProvisioningArtifactCreatedTime = Date;
  export type ProvisioningArtifactDescription = string;
  export interface ProvisioningArtifactDetail {
    /**
     * The identifier of the provisioning artifact.
     */
    Id?: Id;
    /**
     * The name of the provisioning artifact.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The description of the provisioning artifact.
     */
    Description?: ProvisioningArtifactName;
    /**
     * The type of provisioning artifact.    CLOUD_FORMATION_TEMPLATE - AWS CloudFormation template    MARKETPLACE_AMI - AWS Marketplace AMI    MARKETPLACE_CAR - AWS Marketplace Clusters and AWS Resources  
     */
    Type?: ProvisioningArtifactType;
    /**
     * The UTC time stamp of the creation time.
     */
    CreatedTime?: CreationTime;
    /**
     * Indicates whether the product version is active.
     */
    Active?: ProvisioningArtifactActive;
  }
  export type ProvisioningArtifactDetails = ProvisioningArtifactDetail[];
  export type ProvisioningArtifactInfo = {[key: string]: ProvisioningArtifactInfoValue};
  export type ProvisioningArtifactInfoKey = string;
  export type ProvisioningArtifactInfoValue = string;
  export type ProvisioningArtifactName = string;
  export interface ProvisioningArtifactParameter {
    /**
     * The parameter key.
     */
    ParameterKey?: ParameterKey;
    /**
     * The default value.
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
     * The description of the parameter.
     */
    Description?: Description;
    /**
     * Constraints that the administrator has put on a parameter.
     */
    ParameterConstraints?: ParameterConstraints;
  }
  export type ProvisioningArtifactParameters = ProvisioningArtifactParameter[];
  export interface ProvisioningArtifactProperties {
    /**
     * The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The description of the provisioning artifact, including how it differs from the previous provisioning artifact.
     */
    Description?: ProvisioningArtifactDescription;
    /**
     * The URL of the CloudFormation template in Amazon S3. Specify the URL in JSON format as follows:  "LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..." 
     */
    Info: ProvisioningArtifactInfo;
    /**
     * The type of provisioning artifact.    CLOUD_FORMATION_TEMPLATE - AWS CloudFormation template    MARKETPLACE_AMI - AWS Marketplace AMI    MARKETPLACE_CAR - AWS Marketplace Clusters and AWS Resources  
     */
    Type?: ProvisioningArtifactType;
  }
  export type ProvisioningArtifactPropertyName = "Id"|string;
  export type ProvisioningArtifactPropertyValue = string;
  export type ProvisioningArtifactSummaries = ProvisioningArtifactSummary[];
  export interface ProvisioningArtifactSummary {
    /**
     * The identifier of the provisioning artifact.
     */
    Id?: Id;
    /**
     * The name of the provisioning artifact.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The description of the provisioning artifact.
     */
    Description?: ProvisioningArtifactDescription;
    /**
     * The UTC time stamp of the creation time.
     */
    CreatedTime?: ProvisioningArtifactCreatedTime;
    /**
     * The metadata for the provisioning artifact. This is used with AWS Marketplace products.
     */
    ProvisioningArtifactMetadata?: ProvisioningArtifactInfo;
  }
  export type ProvisioningArtifactType = "CLOUD_FORMATION_TEMPLATE"|"MARKETPLACE_AMI"|"MARKETPLACE_CAR"|string;
  export interface ProvisioningArtifactView {
    /**
     * Summary information about a product view.
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * Information about a provisioning artifact. A provisioning artifact is also known as a product version.
     */
    ProvisioningArtifact?: ProvisioningArtifact;
  }
  export type ProvisioningArtifactViews = ProvisioningArtifactView[];
  export type ProvisioningArtifacts = ProvisioningArtifact[];
  export interface ProvisioningParameter {
    /**
     * The parameter key.
     */
    Key?: ParameterKey;
    /**
     * The parameter value.
     */
    Value?: ParameterValue;
  }
  export type ProvisioningParameters = ProvisioningParameter[];
  export interface RecordDetail {
    /**
     * The identifier of the record.
     */
    RecordId?: Id;
    /**
     * The user-friendly name of the provisioned product.
     */
    ProvisionedProductName?: ProvisionedProductName;
    /**
     * The status of the provisioned product.    CREATED - The request was created but the operation has not started.    IN_PROGRESS - The requested operation is in progress.    IN_PROGRESS_IN_ERROR - The provisioned product is under change but the requested operation failed and some remediation is occurring. For example, a rollback.    SUCCEEDED - The requested operation has successfully completed.    FAILED - The requested operation has unsuccessfully completed. Investigate using the error messages returned.  
     */
    Status?: RecordStatus;
    /**
     * The UTC time stamp of the creation time.
     */
    CreatedTime?: CreatedTime;
    /**
     * The time when the record was last updated.
     */
    UpdatedTime?: UpdatedTime;
    /**
     * The type of provisioned product. The supported value is CFN_STACK.
     */
    ProvisionedProductType?: ProvisionedProductType;
    /**
     * The record type.    PROVISION_PRODUCT     UPDATE_PROVISIONED_PRODUCT     TERMINATE_PROVISIONED_PRODUCT   
     */
    RecordType?: RecordType;
    /**
     * The identifier of the provisioned product.
     */
    ProvisionedProductId?: Id;
    /**
     * The product identifier.
     */
    ProductId?: Id;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId?: Id;
    /**
     * The path identifier.
     */
    PathId?: Id;
    /**
     * The errors that occurred.
     */
    RecordErrors?: RecordErrors;
    /**
     * One or more tags.
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
     * The description of the error.
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
     * The description of the output.
     */
    Description?: Description;
  }
  export type RecordOutputs = RecordOutput[];
  export type RecordStatus = "CREATED"|"IN_PROGRESS"|"IN_PROGRESS_IN_ERROR"|"SUCCEEDED"|"FAILED"|string;
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
  export interface RejectPortfolioShareInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId: Id;
  }
  export interface RejectPortfolioShareOutput {
  }
  export type Replacement = "TRUE"|"FALSE"|"CONDITIONAL"|string;
  export type RequiresRecreation = "NEVER"|"CONDITIONALLY"|"ALWAYS"|string;
  export type ResourceARN = string;
  export type ResourceAttribute = "PROPERTIES"|"METADATA"|"CREATIONPOLICY"|"UPDATEPOLICY"|"DELETIONPOLICY"|"TAGS"|string;
  export interface ResourceChange {
    /**
     * The change action.
     */
    Action?: ChangeAction;
    /**
     * The ID of the resource, as defined in the CloudFormation template.
     */
    LogicalResourceId?: LogicalResourceId;
    /**
     * The ID of the resource, if it was already created.
     */
    PhysicalResourceId?: PhysicalResourceId;
    /**
     * The type of resource.
     */
    ResourceType?: PlanResourceType;
    /**
     * If the change type is Modify, indicates whether the existing resource is deleted and replaced with a new one.
     */
    Replacement?: Replacement;
    /**
     * The change scope.
     */
    Scope?: Scope;
    /**
     * Information about the resource changes.
     */
    Details?: ResourceChangeDetails;
  }
  export interface ResourceChangeDetail {
    /**
     * Information about the resource attribute to be modified.
     */
    Target?: ResourceTargetDefinition;
    /**
     * For static evaluations, the value of the resource attribute will change and the new value is known. For dynamic evaluations, the value might change, and any new value will be determined when the plan is updated.
     */
    Evaluation?: EvaluationType;
    /**
     * The ID of the entity that caused the change.
     */
    CausingEntity?: CausingEntity;
  }
  export type ResourceChangeDetails = ResourceChangeDetail[];
  export type ResourceChanges = ResourceChange[];
  export interface ResourceDetail {
    /**
     * The identifier of the resource.
     */
    Id?: ResourceDetailId;
    /**
     * The ARN of the resource.
     */
    ARN?: ResourceDetailARN;
    /**
     * The name of the resource.
     */
    Name?: ResourceDetailName;
    /**
     * The description of the resource.
     */
    Description?: ResourceDetailDescription;
    /**
     * The creation time of the resource.
     */
    CreatedTime?: ResourceDetailCreatedTime;
  }
  export type ResourceDetailARN = string;
  export type ResourceDetailCreatedTime = Date;
  export type ResourceDetailDescription = string;
  export type ResourceDetailId = string;
  export type ResourceDetailName = string;
  export type ResourceDetails = ResourceDetail[];
  export type ResourceId = string;
  export interface ResourceTargetDefinition {
    /**
     * The attribute to be changed.
     */
    Attribute?: ResourceAttribute;
    /**
     * If the attribute is Properties, the value is the name of the property. Otherwise, the value is null.
     */
    Name?: PropertyName;
    /**
     * If the attribute is Properties, indicates whether a change to this property causes the resource to be re-created.
     */
    RequiresRecreation?: RequiresRecreation;
  }
  export type ResourceType = string;
  export interface ScanProvisionedProductsInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The access level to use to obtain results. The default is User.
     */
    AccessLevelFilter?: AccessLevelFilter;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface ScanProvisionedProductsOutput {
    /**
     * Information about the provisioned products.
     */
    ProvisionedProducts?: ProvisionedProductDetails;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export type Scope = ResourceAttribute[];
  export type SearchFilterKey = string;
  export type SearchFilterValue = string;
  export interface SearchProductsAsAdminInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    PortfolioId?: Id;
    /**
     * The search filters. If no search filters are specified, the output includes all products to which the administrator has access.
     */
    Filters?: ProductViewFilters;
    /**
     * The sort field. If no value is specified, the results are not sorted.
     */
    SortBy?: ProductViewSortBy;
    /**
     * The sort order. If no value is specified, the results are not sorted.
     */
    SortOrder?: SortOrder;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * Access level of the source of the product.
     */
    ProductSource?: ProductSource;
  }
  export interface SearchProductsAsAdminOutput {
    /**
     * Information about the product views.
     */
    ProductViewDetails?: ProductViewDetails;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface SearchProductsInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The search filters. If no search filters are specified, the output includes all products to which the caller has access.
     */
    Filters?: ProductViewFilters;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: PageSize;
    /**
     * The sort field. If no value is specified, the results are not sorted.
     */
    SortBy?: ProductViewSortBy;
    /**
     * The sort order. If no value is specified, the results are not sorted.
     */
    SortOrder?: SortOrder;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface SearchProductsOutput {
    /**
     * Information about the product views.
     */
    ProductViewSummaries?: ProductViewSummaries;
    /**
     * The product view aggregations.
     */
    ProductViewAggregations?: ProductViewAggregations;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export interface SearchProvisionedProductsInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The access level to use to obtain results. The default is User.
     */
    AccessLevelFilter?: AccessLevelFilter;
    /**
     * The search filters. When the key is SearchQuery, the searchable fields are arn, createdTime, id, lastRecordId, idempotencyToken, name, physicalId, productId, provisioningArtifact, type, status, tags, userArn, and userArnSession. Example: "SearchQuery":["status:AVAILABLE"] 
     */
    Filters?: ProvisionedProductFilters;
    /**
     * The sort field. If no value is specified, the results are not sorted. The valid values are arn, id, name, and lastRecordId.
     */
    SortBy?: SortField;
    /**
     * The sort order. If no value is specified, the results are not sorted.
     */
    SortOrder?: SortOrder;
    /**
     * The maximum number of items to return with this call.
     */
    PageSize?: SearchProvisionedProductsPageSize;
    /**
     * The page token for the next set of results. To retrieve the first set of results, use null.
     */
    PageToken?: PageToken;
  }
  export interface SearchProvisionedProductsOutput {
    /**
     * Information about the provisioned products.
     */
    ProvisionedProducts?: ProvisionedProductAttributes;
    /**
     * The number of provisioned products found.
     */
    TotalResultsCount?: TotalResultsCount;
    /**
     * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
     */
    NextPageToken?: PageToken;
  }
  export type SearchProvisionedProductsPageSize = number;
  export interface ServiceActionAssociation {
    /**
     * The self-service action identifier. For example, act-fs7abcd89wxyz.
     */
    ServiceActionId: Id;
    /**
     * The product identifier. For example, prod-abcdzk7xy33qa.
     */
    ProductId: Id;
    /**
     * The identifier of the provisioning artifact. For example, pa-4abcdjnxjj6ne.
     */
    ProvisioningArtifactId: Id;
  }
  export type ServiceActionAssociationErrorCode = "DUPLICATE_RESOURCE"|"INTERNAL_FAILURE"|"LIMIT_EXCEEDED"|"RESOURCE_NOT_FOUND"|"THROTTLING"|string;
  export type ServiceActionAssociationErrorMessage = string;
  export type ServiceActionAssociations = ServiceActionAssociation[];
  export type ServiceActionDefinitionKey = "Name"|"Version"|"AssumeRole"|"Parameters"|string;
  export type ServiceActionDefinitionMap = {[key: string]: ServiceActionDefinitionValue};
  export type ServiceActionDefinitionType = "SSM_AUTOMATION"|string;
  export type ServiceActionDefinitionValue = string;
  export type ServiceActionDescription = string;
  export interface ServiceActionDetail {
    /**
     * Summary information about the self-service action.
     */
    ServiceActionSummary?: ServiceActionSummary;
    /**
     * A map that defines the self-service action.
     */
    Definition?: ServiceActionDefinitionMap;
  }
  export type ServiceActionName = string;
  export type ServiceActionSummaries = ServiceActionSummary[];
  export interface ServiceActionSummary {
    /**
     * The self-service action identifier.
     */
    Id?: Id;
    /**
     * The self-service action name.
     */
    Name?: ServiceActionName;
    /**
     * The self-service action description.
     */
    Description?: ServiceActionDescription;
    /**
     * The self-service action definition type. For example, SSM_AUTOMATION.
     */
    DefinitionType?: ServiceActionDefinitionType;
  }
  export type SortField = string;
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export type SourceProvisioningArtifactProperties = SourceProvisioningArtifactPropertiesMap[];
  export type SourceProvisioningArtifactPropertiesMap = {[key: string]: ProvisioningArtifactPropertyValue};
  export type Status = "AVAILABLE"|"CREATING"|"FAILED"|string;
  export type StatusDetail = string;
  export type StatusMessage = string;
  export type SupportDescription = string;
  export type SupportEmail = string;
  export type SupportUrl = string;
  export interface Tag {
    /**
     * The tag key.
     */
    Key: TagKey;
    /**
     * The value for this key.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagOptionActive = boolean;
  export interface TagOptionDetail {
    /**
     * The TagOption key.
     */
    Key?: TagOptionKey;
    /**
     * The TagOption value.
     */
    Value?: TagOptionValue;
    /**
     * The TagOption active state.
     */
    Active?: TagOptionActive;
    /**
     * The TagOption identifier.
     */
    Id?: TagOptionId;
  }
  export type TagOptionDetails = TagOptionDetail[];
  export type TagOptionId = string;
  export type TagOptionKey = string;
  export type TagOptionSummaries = TagOptionSummary[];
  export interface TagOptionSummary {
    /**
     * The TagOption key.
     */
    Key?: TagOptionKey;
    /**
     * The TagOption value.
     */
    Values?: TagOptionValues;
  }
  export type TagOptionValue = string;
  export type TagOptionValues = TagOptionValue[];
  export type TagValue = string;
  export type Tags = Tag[];
  export interface TerminateProvisionedProductInput {
    /**
     * The name of the provisioned product. You cannot specify both ProvisionedProductName and ProvisionedProductId.
     */
    ProvisionedProductName?: ProvisionedProductNameOrArn;
    /**
     * The identifier of the provisioned product. You cannot specify both ProvisionedProductName and ProvisionedProductId.
     */
    ProvisionedProductId?: Id;
    /**
     * An idempotency token that uniquely identifies the termination request. This token is only valid during the termination process. After the provisioned product is terminated, subsequent requests to terminate the same provisioned product always return ResourceNotFound.
     */
    TerminateToken: IdempotencyToken;
    /**
     * If set to true, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.
     */
    IgnoreErrors?: IgnoreErrors;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface TerminateProvisionedProductOutput {
    /**
     * Information about the result of this request.
     */
    RecordDetail?: RecordDetail;
  }
  export type TotalResultsCount = number;
  export interface UpdateConstraintInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The identifier of the constraint.
     */
    Id: Id;
    /**
     * The updated description of the constraint.
     */
    Description?: ConstraintDescription;
  }
  export interface UpdateConstraintOutput {
    /**
     * Information about the constraint.
     */
    ConstraintDetail?: ConstraintDetail;
    /**
     * The constraint parameters.
     */
    ConstraintParameters?: ConstraintParameters;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface UpdatePortfolioInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The portfolio identifier.
     */
    Id: Id;
    /**
     * The name to use for display purposes.
     */
    DisplayName?: PortfolioDisplayName;
    /**
     * The updated description of the portfolio.
     */
    Description?: PortfolioDescription;
    /**
     * The updated name of the portfolio provider.
     */
    ProviderName?: ProviderName;
    /**
     * The tags to add.
     */
    AddTags?: AddTags;
    /**
     * The tags to remove.
     */
    RemoveTags?: TagKeys;
  }
  export interface UpdatePortfolioOutput {
    /**
     * Information about the portfolio.
     */
    PortfolioDetail?: PortfolioDetail;
    /**
     * Information about the tags associated with the portfolio.
     */
    Tags?: Tags;
  }
  export interface UpdateProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    Id: Id;
    /**
     * The updated product name.
     */
    Name?: ProductViewName;
    /**
     * The updated owner of the product.
     */
    Owner?: ProductViewOwner;
    /**
     * The updated description of the product.
     */
    Description?: ProductViewShortDescription;
    /**
     * The updated distributor of the product.
     */
    Distributor?: ProductViewOwner;
    /**
     * The updated support description for the product.
     */
    SupportDescription?: SupportDescription;
    /**
     * The updated support email for the product.
     */
    SupportEmail?: SupportEmail;
    /**
     * The updated support URL for the product.
     */
    SupportUrl?: SupportUrl;
    /**
     * The tags to add to the product.
     */
    AddTags?: AddTags;
    /**
     * The tags to remove from the product.
     */
    RemoveTags?: TagKeys;
  }
  export interface UpdateProductOutput {
    /**
     * Information about the product view.
     */
    ProductViewDetail?: ProductViewDetail;
    /**
     * Information about the tags associated with the product.
     */
    Tags?: Tags;
  }
  export interface UpdateProvisionedProductInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The updated name of the provisioned product. You cannot specify both ProvisionedProductName and ProvisionedProductId.
     */
    ProvisionedProductName?: ProvisionedProductNameOrArn;
    /**
     * The identifier of the provisioned product. You cannot specify both ProvisionedProductName and ProvisionedProductId.
     */
    ProvisionedProductId?: Id;
    /**
     * The identifier of the provisioned product.
     */
    ProductId?: Id;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId?: Id;
    /**
     * The new path identifier. This value is optional if the product has a default path, and required if the product has more than one path.
     */
    PathId?: Id;
    /**
     * The new parameters.
     */
    ProvisioningParameters?: UpdateProvisioningParameters;
    /**
     * The idempotency token that uniquely identifies the provisioning update request.
     */
    UpdateToken: IdempotencyToken;
  }
  export interface UpdateProvisionedProductOutput {
    /**
     * Information about the result of the request.
     */
    RecordDetail?: RecordDetail;
  }
  export interface UpdateProvisioningArtifactInput {
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
    /**
     * The product identifier.
     */
    ProductId: Id;
    /**
     * The identifier of the provisioning artifact.
     */
    ProvisioningArtifactId: Id;
    /**
     * The updated name of the provisioning artifact.
     */
    Name?: ProvisioningArtifactName;
    /**
     * The updated description of the provisioning artifact.
     */
    Description?: ProvisioningArtifactDescription;
    /**
     * Indicates whether the product version is active.
     */
    Active?: ProvisioningArtifactActive;
  }
  export interface UpdateProvisioningArtifactOutput {
    /**
     * Information about the provisioning artifact.
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * The URL of the CloudFormation template in Amazon S3.
     */
    Info?: ProvisioningArtifactInfo;
    /**
     * The status of the current request.
     */
    Status?: Status;
  }
  export interface UpdateProvisioningParameter {
    /**
     * The parameter key.
     */
    Key?: ParameterKey;
    /**
     * The parameter value.
     */
    Value?: ParameterValue;
    /**
     * If set to true, Value is ignored and the previous parameter value is kept.
     */
    UsePreviousValue?: UsePreviousValue;
  }
  export type UpdateProvisioningParameters = UpdateProvisioningParameter[];
  export interface UpdateServiceActionInput {
    /**
     * The self-service action identifier.
     */
    Id: Id;
    /**
     * The self-service action name.
     */
    Name?: ServiceActionName;
    /**
     * A map that defines the self-service action.
     */
    Definition?: ServiceActionDefinitionMap;
    /**
     * The self-service action description.
     */
    Description?: ServiceActionDescription;
    /**
     * The language code.    en - English (default)    jp - Japanese    zh - Chinese  
     */
    AcceptLanguage?: AcceptLanguage;
  }
  export interface UpdateServiceActionOutput {
    /**
     * Detailed information about the self-service action.
     */
    ServiceActionDetail?: ServiceActionDetail;
  }
  export interface UpdateTagOptionInput {
    /**
     * The TagOption identifier.
     */
    Id: TagOptionId;
    /**
     * The updated value.
     */
    Value?: TagOptionValue;
    /**
     * The updated active state.
     */
    Active?: TagOptionActive;
  }
  export interface UpdateTagOptionOutput {
    /**
     * Information about the TagOption.
     */
    TagOptionDetail?: TagOptionDetail;
  }
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
  export type UserArn = string;
  export type UserArnSession = string;
  export type Verbose = boolean;
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
  /**
   * Contains interfaces for use with the ServiceCatalog client.
   */
  export import Types = ServiceCatalog;
}
export = ServiceCatalog;
