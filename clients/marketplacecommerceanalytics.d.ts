import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
declare class MarketplaceCommerceAnalytics extends Service {
  /**
   * Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   */
  generateDataSet(params: MarketplaceCommerceAnalytics.GenerateDataSetRequest, callback?: (err: AWSError, data: MarketplaceCommerceAnalytics.GenerateDataSetResult) => void): Request<MarketplaceCommerceAnalytics.GenerateDataSetResult, AWSError>;
  /**
   * Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   */
  generateDataSet(callback?: (err: AWSError, data: MarketplaceCommerceAnalytics.GenerateDataSetResult) => void): Request<MarketplaceCommerceAnalytics.GenerateDataSetResult, AWSError>;
  /**
   * Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   */
  startSupportDataExport(params: MarketplaceCommerceAnalytics.StartSupportDataExportRequest, callback?: (err: AWSError, data: MarketplaceCommerceAnalytics.StartSupportDataExportResult) => void): Request<MarketplaceCommerceAnalytics.StartSupportDataExportResult, AWSError>;
  /**
   * Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   */
  startSupportDataExport(callback?: (err: AWSError, data: MarketplaceCommerceAnalytics.StartSupportDataExportResult) => void): Request<MarketplaceCommerceAnalytics.StartSupportDataExportResult, AWSError>;
}
declare namespace MarketplaceCommerceAnalytics {
  export type CustomerDefinedValues = {[key: string]: OptionalValue};
  export type DataSetPublicationDate = Date;
  export type DataSetRequestId = string;
  export type DataSetType = string;
  export type DestinationS3BucketName = string;
  export type DestinationS3Prefix = string;
  export type ExceptionMessage = string;
  export type FromDate = Date;
  export interface GenerateDataSetRequest {
    /**
     * The desired data set type.   customer_subscriber_hourly_monthly_subscriptions - Available daily by 5:00 PM Pacific Time since 2014-07-21. customer_subscriber_annual_subscriptions - Available daily by 5:00 PM Pacific Time since 2014-07-21. daily_business_usage_by_instance_type - Available daily by 5:00 PM Pacific Time since 2015-01-26. daily_business_fees - Available daily by 5:00 PM Pacific Time since 2015-01-26. daily_business_free_trial_conversions - Available daily by 5:00 PM Pacific Time since 2015-01-26. daily_business_new_instances - Available daily by 5:00 PM Pacific Time since 2015-01-26. daily_business_new_product_subscribers - Available daily by 5:00 PM Pacific Time since 2015-01-26. daily_business_canceled_product_subscribers - Available daily by 5:00 PM Pacific Time since 2015-01-26. monthly_revenue_billing_and_revenue_data - Available monthly on the 4th day of the month by 5:00 PM Pacific Time since 2015-02. monthly_revenue_annual_subscriptions - Available monthly on the 4th day of the month by 5:00 PM Pacific Time since 2015-02. disbursed_amount_by_product - Available every 30 days by 5:00 PM Pacific Time since 2015-01-26. disbursed_amount_by_product_with_uncollected_funds -This data set is only available from 2012-04-19 until 2015-01-25. After 2015-01-25, this data set was split into three data sets: disbursed_amount_by_product, disbursed_amount_by_age_of_uncollected_funds, and disbursed_amount_by_age_of_disbursed_funds.  disbursed_amount_by_customer_geo - Available every 30 days by 5:00 PM Pacific Time since 2012-04-19. disbursed_amount_by_age_of_uncollected_funds - Available every 30 days by 5:00 PM Pacific Time since 2015-01-26. disbursed_amount_by_age_of_disbursed_funds - Available every 30 days by 5:00 PM Pacific Time since 2015-01-26. customer_profile_by_industry - Available daily by 5:00 PM Pacific Time since 2015-10-01. customer_profile_by_revenue - Available daily by 5:00 PM Pacific Time since 2015-10-01. customer_profile_by_geography - Available daily by 5:00 PM Pacific Time since 2015-10-01.  
     */
    dataSetType: DataSetType;
    /**
     * The date a data set was published. For daily data sets, provide a date with day-level granularity for the desired day. For weekly data sets, provide a date with day-level granularity within the desired week (the day value will be ignored). For monthly data sets, provide a date with month-level granularity for the desired month (the day value will be ignored).
     */
    dataSetPublicationDate?: DataSetPublicationDate;
    /**
     * The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services.
     */
    roleNameArn?: RoleNameArn;
    /**
     * The name (friendly name, not ARN) of the destination S3 bucket.
     */
    destinationS3BucketName?: DestinationS3BucketName;
    /**
     * (Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name "mybucket" and the prefix "myprefix/mydatasets", the output file "outputfile" would be published to "s3://mybucket/myprefix/mydatasets/outputfile". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root.
     */
    destinationS3Prefix?: DestinationS3Prefix;
    /**
     * Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred.
     */
    snsTopicArn?: SnsTopicArn;
    /**
     * (Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file. These key-value pairs can be used to correlated responses with tracking information from other systems.
     */
    customerDefinedValues?: CustomerDefinedValues;
  }
  export interface GenerateDataSetResult {
    /**
     * A unique identifier representing a specific request to the GenerateDataSet operation. This identifier can be used to correlate a request with notifications from the SNS topic.
     */
    dataSetRequestId?: DataSetRequestId;
  }
  export type OptionalKey = string;
  export type OptionalValue = string;
  export type RoleNameArn = string;
  export type SnsTopicArn = string;
  export interface StartSupportDataExportRequest {
    /**
     *  Specifies the data set type to be written to the output csv file. The data set types customer_support_contacts_data and test_customer_support_contacts_data both result in a csv file containing the following fields: Product Id, Customer Guid, Subscription Guid, Subscription Start Date, Organization, AWS Account Id, Given Name, Surname, Telephone Number, Email, Title, Country Code, ZIP Code, Operation Type, and Operation Time. Currently, only the test_customer_support_contacts_data value is supported    customer_support_contacts_data Customer support contact data. The data set will contain all changes (Creates, Updates, and Deletes) to customer support contact data from the date specified in the from_date parameter. test_customer_support_contacts_data An example data set containing static test data in the same format as customer_support_contacts_data  
     */
    dataSetType: SupportDataSetType;
    /**
     * The start date from which to retrieve the data set. This parameter only affects the customer_support_contacts_data data set type.
     */
    fromDate?: FromDate;
    /**
     * The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services.
     */
    roleNameArn?: RoleNameArn;
    /**
     * The name (friendly name, not ARN) of the destination S3 bucket.
     */
    destinationS3BucketName?: DestinationS3BucketName;
    /**
     * (Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name "mybucket" and the prefix "myprefix/mydatasets", the output file "outputfile" would be published to "s3://mybucket/myprefix/mydatasets/outputfile". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root.
     */
    destinationS3Prefix?: DestinationS3Prefix;
    /**
     * Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred.
     */
    snsTopicArn?: SnsTopicArn;
    /**
     * (Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file.
     */
    customerDefinedValues?: CustomerDefinedValues;
  }
  export interface StartSupportDataExportResult {
    /**
     * A unique identifier representing a specific request to the StartSupportDataExport operation. This identifier can be used to correlate a request with notifications from the SNS topic.
     */
    dataSetRequestId?: DataSetRequestId;
  }
  export type SupportDataSetType = string;
}
export = MarketplaceCommerceAnalytics;
