import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class MarketplaceAgreement extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MarketplaceAgreement.Types.ClientConfiguration)
  config: Config & MarketplaceAgreement.Types.ClientConfiguration;
  /**
   * Provides details about an agreement, such as the proposer, acceptor, start date, and end date.
   */
  describeAgreement(params: MarketplaceAgreement.Types.DescribeAgreementInput, callback?: (err: AWSError, data: MarketplaceAgreement.Types.DescribeAgreementOutput) => void): Request<MarketplaceAgreement.Types.DescribeAgreementOutput, AWSError>;
  /**
   * Provides details about an agreement, such as the proposer, acceptor, start date, and end date.
   */
  describeAgreement(callback?: (err: AWSError, data: MarketplaceAgreement.Types.DescribeAgreementOutput) => void): Request<MarketplaceAgreement.Types.DescribeAgreementOutput, AWSError>;
  /**
   * Obtains details about the terms in an agreement that you participated in as proposer or acceptor. The details include:    TermType – The type of term, such as LegalTerm, RenewalTerm, or ConfigurableUpfrontPricingTerm.    TermID – The ID of the particular term, which is common between offer and agreement.    TermPayload – The key information contained in the term, such as the EULA for LegalTerm or pricing and dimensions for various pricing terms, such as ConfigurableUpfrontPricingTerm or UsageBasedPricingTerm.      Configuration – The buyer/acceptor's selection at the time of agreement creation, such as the number of units purchased for a dimension or setting the EnableAutoRenew flag.  
   */
  getAgreementTerms(params: MarketplaceAgreement.Types.GetAgreementTermsInput, callback?: (err: AWSError, data: MarketplaceAgreement.Types.GetAgreementTermsOutput) => void): Request<MarketplaceAgreement.Types.GetAgreementTermsOutput, AWSError>;
  /**
   * Obtains details about the terms in an agreement that you participated in as proposer or acceptor. The details include:    TermType – The type of term, such as LegalTerm, RenewalTerm, or ConfigurableUpfrontPricingTerm.    TermID – The ID of the particular term, which is common between offer and agreement.    TermPayload – The key information contained in the term, such as the EULA for LegalTerm or pricing and dimensions for various pricing terms, such as ConfigurableUpfrontPricingTerm or UsageBasedPricingTerm.      Configuration – The buyer/acceptor's selection at the time of agreement creation, such as the number of units purchased for a dimension or setting the EnableAutoRenew flag.  
   */
  getAgreementTerms(callback?: (err: AWSError, data: MarketplaceAgreement.Types.GetAgreementTermsOutput) => void): Request<MarketplaceAgreement.Types.GetAgreementTermsOutput, AWSError>;
  /**
   * Searches across all agreements that a proposer or an acceptor has in AWS Marketplace. The search returns a list of agreements with basic agreement information. The following filter combinations are supported:    PartyType as Proposer + AgreementType + ResourceIdentifier     PartyType as Proposer + AgreementType + OfferId     PartyType as Proposer + AgreementType + AcceptorAccountId     PartyType as Proposer + AgreementType + Status     PartyType as Proposer + AgreementType + ResourceIdentifier + Status     PartyType as Proposer + AgreementType + OfferId + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + Status     PartyType as Proposer + AgreementType + ResourceType + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceType + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + OfferId     PartyType as Proposer + AgreementType + AcceptorAccountId + OfferId + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceIdentifier     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceIdentifier + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceType   
   */
  searchAgreements(params: MarketplaceAgreement.Types.SearchAgreementsInput, callback?: (err: AWSError, data: MarketplaceAgreement.Types.SearchAgreementsOutput) => void): Request<MarketplaceAgreement.Types.SearchAgreementsOutput, AWSError>;
  /**
   * Searches across all agreements that a proposer or an acceptor has in AWS Marketplace. The search returns a list of agreements with basic agreement information. The following filter combinations are supported:    PartyType as Proposer + AgreementType + ResourceIdentifier     PartyType as Proposer + AgreementType + OfferId     PartyType as Proposer + AgreementType + AcceptorAccountId     PartyType as Proposer + AgreementType + Status     PartyType as Proposer + AgreementType + ResourceIdentifier + Status     PartyType as Proposer + AgreementType + OfferId + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + Status     PartyType as Proposer + AgreementType + ResourceType + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceType + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + OfferId     PartyType as Proposer + AgreementType + AcceptorAccountId + OfferId + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceIdentifier     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceIdentifier + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceType   
   */
  searchAgreements(callback?: (err: AWSError, data: MarketplaceAgreement.Types.SearchAgreementsOutput) => void): Request<MarketplaceAgreement.Types.SearchAgreementsOutput, AWSError>;
}
declare namespace MarketplaceAgreement {
  export type AWSAccountId = string;
  export interface AcceptedTerm {
    /**
     * Enables you and your customers to move your existing agreements to AWS Marketplace. The customer won't be charged for product usage in AWS Marketplace because they already paid for the product outside of AWS Marketplace.
     */
    byolPricingTerm?: ByolPricingTerm;
    /**
     * Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.
     */
    configurableUpfrontPricingTerm?: ConfigurableUpfrontPricingTerm;
    /**
     * Defines a pre-paid pricing model where the customers are charged a fixed upfront amount.
     */
    fixedUpfrontPricingTerm?: FixedUpfrontPricingTerm;
    /**
     * Defines a short-term free pricing model where the buyers aren’t charged anything within a specified limit.
     */
    freeTrialPricingTerm?: FreeTrialPricingTerm;
    /**
     * Defines the list of text agreements proposed to the acceptors. An example is the end user license agreement (EULA).
     */
    legalTerm?: LegalTerm;
    /**
     * Defines an installment-based pricing model where customers are charged a fixed price on different dates during the agreement validity period. This is used most commonly for flexible payment schedule pricing.
     */
    paymentScheduleTerm?: PaymentScheduleTerm;
    /**
     * Defines a pricing model where customers are charged a fixed recurring price at the end of each billing period.
     */
    recurringPaymentTerm?: RecurringPaymentTerm;
    /**
     * Defines that on graceful expiration of the agreement (when the agreement ends on its pre-defined end date), a new agreement will be created using the accepted terms on the existing agreement. In other words, the agreement will be renewed. Presence of RenewalTerm in the offer document means that auto-renewal is allowed. Buyers will have the option to accept or decline auto-renewal at the offer acceptance/agreement creation. Buyers can also change this flag from True to False or False to True at anytime during the agreement's lifecycle.
     */
    renewalTerm?: RenewalTerm;
    /**
     * Defines the customer support available for the acceptors when they purchase the software.
     */
    supportTerm?: SupportTerm;
    /**
     * Defines a usage-based pricing model (typically, pay-as-you-go pricing), where the customers are charged based on product usage.
     */
    usageBasedPricingTerm?: UsageBasedPricingTerm;
    /**
     * Defines the conditions that will keep an agreement created from this offer valid.
     */
    validityTerm?: ValidityTerm;
  }
  export type AcceptedTermList = AcceptedTerm[];
  export interface Acceptor {
    /**
     * The AWS account ID of the acceptor.
     */
    accountId?: AWSAccountId;
  }
  export type AgreementResourceType = string;
  export type AgreementStatus = "ACTIVE"|"ARCHIVED"|"CANCELLED"|"EXPIRED"|"RENEWED"|"REPLACED"|"ROLLED_BACK"|"SUPERSEDED"|"TERMINATED"|string;
  export type AgreementType = string;
  export interface AgreementViewSummary {
    /**
     * The date and time that the agreement was accepted.
     */
    acceptanceTime?: Timestamp;
    /**
     * Details of the party accepting the agreement terms. This is commonly the buyer for PurchaseAgreement. 
     */
    acceptor?: Acceptor;
    /**
     * The unique identifier of the agreement.
     */
    agreementId?: ResourceId;
    /**
     * The type of agreement. Values are PurchaseAgreement or VendorInsightsAgreement.
     */
    agreementType?: AgreementType;
    /**
     * The date and time when the agreement ends. The field is null for pay-as-you-go agreements, which don’t have end dates.
     */
    endTime?: Timestamp;
    /**
     * A summary of the proposal
     */
    proposalSummary?: ProposalSummary;
    /**
     * Details of the party proposing the agreement terms, most commonly the seller for PurchaseAgreement.
     */
    proposer?: Proposer;
    /**
     * The date and time when the agreement starts.
     */
    startTime?: Timestamp;
    /**
     * The current status of the agreement. 
     */
    status?: AgreementStatus;
  }
  export type AgreementViewSummaryList = AgreementViewSummary[];
  export type Boolean = boolean;
  export type BoundedString = string;
  export interface ByolPricingTerm {
    /**
     * Type of the term being updated.
     */
    type?: UnversionedTermType;
  }
  export type Catalog = string;
  export interface ConfigurableUpfrontPricingTerm {
    /**
     * Additional parameters specified by the acceptor while accepting the term.
     */
    configuration?: ConfigurableUpfrontPricingTermConfiguration;
    /**
     * Defines the currency for the prices mentioned in the term.
     */
    currencyCode?: CurrencyCode;
    /**
     * A rate card defines the per unit rates for product dimensions.
     */
    rateCards?: ConfigurableUpfrontRateCardList;
    /**
     * Category of selector.
     */
    type?: UnversionedTermType;
  }
  export interface ConfigurableUpfrontPricingTermConfiguration {
    /**
     * Defines the dimensions that the acceptor has purchased from the overall set of dimensions presented in the rate card.
     */
    dimensions: DimensionList;
    /**
     * Defines the length of time for which the particular pricing/dimension is being purchased by the acceptor.
     */
    selectorValue: BoundedString;
  }
  export interface ConfigurableUpfrontRateCardItem {
    /**
     * Defines limits on how the term can be configured by acceptors.
     */
    constraints?: Constraints;
    /**
     * Defines the per unit rates for product dimensions.
     */
    rateCard?: RateCardList;
    /**
     * Differentiates between the mutually exclusive rate cards in the same pricing term to be selected by the buyer.
     */
    selector?: Selector;
  }
  export type ConfigurableUpfrontRateCardList = ConfigurableUpfrontRateCardItem[];
  export interface Constraints {
    /**
     * Determines if buyers are allowed to select multiple dimensions in the rate card. The possible values are Allowed and Disallowed. The default value is Allowed.
     */
    multipleDimensionSelection?: BoundedString;
    /**
     * Determines if acceptors are allowed to configure quantity for each dimension in rate card. The possible values are Allowed and Disallowed. The default value is Allowed.
     */
    quantityConfiguration?: BoundedString;
  }
  export type CurrencyCode = string;
  export interface DescribeAgreementInput {
    /**
     * The unique identifier of the agreement.
     */
    agreementId: ResourceId;
  }
  export interface DescribeAgreementOutput {
    /**
     * The date and time the offer was accepted or the agreement was created.   AcceptanceTime and StartTime can differ for future dated agreements (FDAs). 
     */
    acceptanceTime?: Timestamp;
    /**
     * The details of the party accepting the agreement terms. This is commonly the buyer for PurchaseAgreement.
     */
    acceptor?: Acceptor;
    /**
     * The unique identifier of the agreement.
     */
    agreementId?: ResourceId;
    /**
     * The type of agreement. Values are PurchaseAgreement or VendorInsightsAgreement.
     */
    agreementType?: AgreementType;
    /**
     * The date and time when the agreement ends. The field is null for pay-as-you-go agreements, which don’t have end dates.
     */
    endTime?: Timestamp;
    /**
     * The estimated cost of the agreement.
     */
    estimatedCharges?: EstimatedCharges;
    /**
     * A summary of the proposal received from the proposer.
     */
    proposalSummary?: ProposalSummary;
    /**
     * The details of the party proposing the agreement terms. This is commonly the seller for PurchaseAgreement.
     */
    proposer?: Proposer;
    /**
     * The date and time when the agreement starts.
     */
    startTime?: Timestamp;
    /**
     * The current status of the agreement. Statuses include:    ACTIVE – The terms of the agreement are active.    ARCHIVED – The agreement ended without a specified reason.    CANCELLED – The acceptor ended the agreement before the defined end date.    EXPIRED – The agreement ended on the defined end date.    RENEWED – The agreement was renewed into a new agreement (for example, an auto-renewal).    REPLACED – The agreement was replaced using an agreement replacement offer.    ROLLED_BACK (Only applicable to inactive agreement revisions) – The agreement revision has been rolled back because of an error. An earlier revision is now active.    SUPERCEDED (Only applicable to inactive agreement revisions) – The agreement revision is no longer active and another agreement revision is now active.    TERMINATED – The agreement ended before the defined end date because of an AWS termination (for example, a payment failure).  
     */
    status?: AgreementStatus;
  }
  export interface Dimension {
    /**
     * The name of key value of the dimension.
     */
    dimensionKey: BoundedString;
    /**
     * The number of units of the dimension the acceptor has purchased.  For Agreements with ConfigurableUpfrontPricingTerm, the RateCard section will define the prices and dimensions defined by the seller (proposer), whereas the Configuration section will define the actual dimensions, prices, and units the buyer has chosen to accept. 
     */
    dimensionValue: ZeroValueInteger;
  }
  export type DimensionList = Dimension[];
  export interface DocumentItem {
    /**
     * Category of the document. Document types include:    CustomEula – A custom EULA provided by you as seller. A URL for a EULA stored in an accessible Amazon S3 bucket is required for this document type.    CustomDsa – A custom Data Subscription Agreement (DSA) provided by you as seller. A URL for a DSA stored in an accessible Amazon S3 bucket is required for this document type.    StandardEula – The Standard Contract for AWS Marketplace (SCMP). For more information about SCMP, see the AWS Marketplace Seller Guide. You don’t provide a URL for this type because it’s managed by AWS Marketplace.    StandardDsa – DSA for AWS Marketplace. For more information about the DSA, see the AWS Data Exchange User Guide. You don’t provide a URL for this type because it’s managed by AWS Marketplace.  
     */
    type?: BoundedString;
    /**
     * A URL to the legal document for buyers to read. Required when Type is CustomEula.
     */
    url?: BoundedString;
    /**
     * Version of standard contracts provided by AWS Marketplace. Required when Type is StandardEula or StandardDsa. 
     */
    version?: BoundedString;
  }
  export type DocumentList = DocumentItem[];
  export interface EstimatedCharges {
    /**
     * The total known amount customer has to pay across the lifecycle of the agreement.  This is the total contract value if accepted terms contain ConfigurableUpfrontPricingTerm or FixedUpfrontPricingTerm. In the case of pure contract pricing, this will be the total value of the contract. In the case of contracts with consumption pricing, this will only include the committed value and not include any overages that occur. If the accepted terms contain PaymentScheduleTerm, it will be the total payment schedule amount. This occurs when flexible payment schedule is used, and is the sum of all invoice charges in the payment schedule. In case a customer has amended an agreement, by purchasing more units of any dimension, this will include both the original cost as well as the added cost incurred due to addition of new units.  This is 0 if the accepted terms contain UsageBasedPricingTerm without ConfigurableUpfrontPricingTerm or RecurringPaymentTerm. This occurs for usage-based pricing (such as SaaS metered or AMI/container hourly or monthly), because the exact usage is not known upfront. 
     */
    agreementValue?: BoundedString;
    /**
     * Defines the currency code for the charge.
     */
    currencyCode?: CurrencyCode;
  }
  export interface Filter {
    /**
     * The name of the filter.
     */
    name?: FilterName;
    /**
     * The filter value.
     */
    values?: FilterValueList;
  }
  export type FilterList = Filter[];
  export type FilterName = string;
  export type FilterValue = string;
  export type FilterValueList = FilterValue[];
  export interface FixedUpfrontPricingTerm {
    /**
     * Defines the currency for the prices mentioned in this term. 
     */
    currencyCode?: CurrencyCode;
    /**
     * Contract duration for the terms.
     */
    duration?: BoundedString;
    /**
     * Entitlements granted to the acceptor of fixed upfront as part of agreement execution.
     */
    grants?: GrantList;
    /**
     * Fixed amount to be charged to the customer when this term is accepted.
     */
    price?: BoundedString;
    /**
     * Category of the term being updated.
     */
    type?: UnversionedTermType;
  }
  export interface FreeTrialPricingTerm {
    /**
     * Duration of the free trial period (5–31 days). 
     */
    duration?: BoundedString;
    /**
     * Entitlements granted to the acceptor of a free trial as part of an agreement execution.
     */
    grants?: GrantList;
    /**
     * Category of the term.
     */
    type?: UnversionedTermType;
  }
  export interface GetAgreementTermsInput {
    /**
     * The unique identifier of the agreement.
     */
    agreementId: ResourceId;
    /**
     * The maximum number of agreements to return in the response.
     */
    maxResults?: MaxResults;
    /**
     * A token to specify where to start pagination
     */
    nextToken?: NextToken;
  }
  export interface GetAgreementTermsOutput {
    /**
     * A subset of terms proposed by the proposer that have been accepted by the acceptor as part of the agreement creation.
     */
    acceptedTerms?: AcceptedTermList;
    /**
     * A token to specify where to start pagination
     */
    nextToken?: NextToken;
  }
  export interface GrantItem {
    /**
     * Unique dimension key defined in the product document. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace. 
     */
    dimensionKey?: BoundedString;
    /**
     * Maximum amount of capacity that the buyer can be entitled to the given dimension of the product. If MaxQuantity is not provided, the buyer will be able to use an unlimited amount of the given dimension. 
     */
    maxQuantity?: PositiveIntegerWithDefaultValueOne;
  }
  export type GrantList = GrantItem[];
  export interface LegalTerm {
    /**
     * List of references to legal resources proposed to the buyers. An example is the EULA.
     */
    documents?: DocumentList;
    /**
     * Category of the term being updated.
     */
    type?: UnversionedTermType;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type OfferId = string;
  export interface PaymentScheduleTerm {
    /**
     * Defines the currency for the prices mentioned in the term. 
     */
    currencyCode?: CurrencyCode;
    /**
     * List of the payment schedule where each element defines one installment of payment. It contains the information necessary for calculating the price.
     */
    schedule?: ScheduleList;
    /**
     * Type of the term.
     */
    type?: UnversionedTermType;
  }
  export type PositiveIntegerWithDefaultValueOne = number;
  export interface ProposalSummary {
    /**
     * The unique identifier of the offer in AWS Marketplace.
     */
    offerId?: OfferId;
    /**
     * The list of resources involved in the agreement.
     */
    resources?: Resources;
  }
  export interface Proposer {
    /**
     * The AWS account ID of the proposer.
     */
    accountId?: AWSAccountId;
  }
  export interface RateCardItem {
    /**
     * Dimension for which the given entitlement applies. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace.
     */
    dimensionKey?: BoundedString;
    /**
     * Per unit price for the product dimension that’s used for calculating the amount to be charged.
     */
    price?: BoundedString;
  }
  export type RateCardList = RateCardItem[];
  export interface RecurringPaymentTerm {
    /**
     * Defines the recurrence at which buyers are charged.
     */
    billingPeriod?: BoundedString;
    /**
     * Defines the currency for the prices mentioned in this term. 
     */
    currencyCode?: CurrencyCode;
    /**
     * Amount charged to the buyer every billing period.
     */
    price?: BoundedString;
    /**
     * Type of the term being updated.
     */
    type?: UnversionedTermType;
  }
  export interface RenewalTerm {
    /**
     * Additional parameters specified by the acceptor while accepting the term.
     */
    configuration?: RenewalTermConfiguration;
    /**
     * Category of the term being updated. 
     */
    type?: UnversionedTermType;
  }
  export interface RenewalTermConfiguration {
    /**
     * Defines whether the acceptor has chosen to auto-renew the agreement at the end of its lifecycle. Can be set to True or False.
     */
    enableAutoRenew: Boolean;
  }
  export interface Resource {
    /**
     * The unique identifier of the resource.  We mention the term resource, which is most commonly a product, so a resourceId is also a productId. 
     */
    id?: ResourceId;
    /**
     * Type of the resource, which is the product. Values include SaaSProduct or AmiProduct.
     */
    type?: AgreementResourceType;
  }
  export type ResourceId = string;
  export type Resources = Resource[];
  export interface ScheduleItem {
    /**
     * The price that the customer would pay on the scheduled date (chargeDate).
     */
    chargeAmount?: BoundedString;
    /**
     * The date that the customer would pay the price defined in this payment schedule term. Invoices are generated on the date provided.
     */
    chargeDate?: Timestamp;
  }
  export type ScheduleList = ScheduleItem[];
  export interface SearchAgreementsInput {
    /**
     * The catalog in which the agreement was created.
     */
    catalog?: Catalog;
    /**
     * The filter name and value pair used to return a specific list of results. The following filters are supported:    ResourceIdentifier – The unique identifier of the resource.    ResourceType – Type of the resource, which is the product (AmiProduct, ContainerProduct, or SaaSProduct).    PartyType – The party type (either Acceptor or Proposer) of the caller. For agreements where the caller is the proposer, use the Proposer filter. For agreements where the caller is the acceptor, use the Acceptor filter.    AcceptorAccountId – The AWS account ID of the party accepting the agreement terms.    OfferId – The unique identifier of the offer in which the terms are registered in the agreement token.    Status – The current status of the agreement. Values include ACTIVE, ARCHIVED, CANCELLED, EXPIRED, RENEWED, REPLACED, and TERMINATED.    BeforeEndTime – A date used to filter agreements with a date before the endTime of an agreement.    AfterEndTime – A date used to filter agreements with a date after the endTime of an agreement.    AgreementType – The type of agreement. Values include PurchaseAgreement or VendorInsightsAgreement.  
     */
    filters?: FilterList;
    /**
     * The maximum number of agreements to return in the response.
     */
    maxResults?: MaxResults;
    /**
     * A token to specify where to start pagination.
     */
    nextToken?: NextToken;
    /**
     * An object that contains the SortBy and SortOrder attributes.
     */
    sort?: Sort;
  }
  export interface SearchAgreementsOutput {
    /**
     * A summary of the agreement, including top-level attributes (for example, the agreement ID, version, proposer, and acceptor).
     */
    agreementViewSummaries?: AgreementViewSummaryList;
    /**
     * The token used for pagination. The field is null if there are no more results.
     */
    nextToken?: NextToken;
  }
  export interface Selector {
    /**
     * Category of selector.
     */
    type?: BoundedString;
    /**
     * Contract duration. This field supports the ISO 8601 format. 
     */
    value?: BoundedString;
  }
  export interface Sort {
    /**
     * The attribute on which the data is grouped, which can be by StartTime and EndTime. The default value is EndTime.
     */
    sortBy?: SortBy;
    /**
     * The sorting order, which can be ASCENDING or DESCENDING. The default value is DESCENDING.
     */
    sortOrder?: SortOrder;
  }
  export type SortBy = string;
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export interface SupportTerm {
    /**
     * Free-text field about the refund policy description that will be shown to customers as is on the website and console.
     */
    refundPolicy?: BoundedString;
    /**
     * Category of the term being updated.
     */
    type?: UnversionedTermType;
  }
  export type Timestamp = Date;
  export type UnversionedTermType = string;
  export interface UsageBasedPricingTerm {
    /**
     * Defines the currency for the prices mentioned in the term. 
     */
    currencyCode?: CurrencyCode;
    /**
     * List of rate cards.
     */
    rateCards?: UsageBasedRateCardList;
    /**
     * Category of the term.
     */
    type?: UnversionedTermType;
  }
  export interface UsageBasedRateCardItem {
    /**
     * Defines the per unit rates for product dimensions.
     */
    rateCard?: RateCardList;
  }
  export type UsageBasedRateCardList = UsageBasedRateCardItem[];
  export interface ValidityTerm {
    /**
     * Defines the duration that the agreement remains active. If AgreementStartDate isn’t provided, the agreement duration is relative to the agreement signature time. The duration is represented in the ISO_8601 format.
     */
    agreementDuration?: BoundedString;
    /**
     * Defines the date when the agreement ends. The agreement ends at 23:59:59.999 UTC on the date provided. If AgreementEndDate isn’t provided, the agreement end date is determined by the validity of individual terms.
     */
    agreementEndDate?: Timestamp;
    /**
     * Defines the date when agreement starts. The agreement starts at 00:00:00.000 UTC on the date provided. If AgreementStartDate isn’t provided, the agreement start date is determined based on agreement signature time.
     */
    agreementStartDate?: Timestamp;
    /**
     * Category of the term being updated. 
     */
    type?: UnversionedTermType;
  }
  export type ZeroValueInteger = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-03-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MarketplaceAgreement client.
   */
  export import Types = MarketplaceAgreement;
}
export = MarketplaceAgreement;
