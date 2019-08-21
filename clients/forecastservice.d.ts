import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ForecastService extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ForecastService.Types.ClientConfiguration)
  config: Config & ForecastService.Types.ClientConfiguration;
  /**
   * Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:     DataFrequency  - How frequently your historical time-series data is collected. Amazon Forecast uses this information when training the model and generating a forecast.     Domain  and  DatasetType  - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.     Schema  - A schema specifies the fields of the dataset, including the field name and data type.   After creating a dataset, you import your training data into the dataset and add the dataset to a dataset group. You then use the dataset group to create a predictor. For more information, see howitworks-datasets-groups. To get a list of all your datasets, use the ListDatasets operation.  The Status of a dataset must be ACTIVE before you can import training data. Use the DescribeDataset operation to get the status. 
   */
  createDataset(params: ForecastService.Types.CreateDatasetRequest, callback?: (err: AWSError, data: ForecastService.Types.CreateDatasetResponse) => void): Request<ForecastService.Types.CreateDatasetResponse, AWSError>;
  /**
   * Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:     DataFrequency  - How frequently your historical time-series data is collected. Amazon Forecast uses this information when training the model and generating a forecast.     Domain  and  DatasetType  - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.     Schema  - A schema specifies the fields of the dataset, including the field name and data type.   After creating a dataset, you import your training data into the dataset and add the dataset to a dataset group. You then use the dataset group to create a predictor. For more information, see howitworks-datasets-groups. To get a list of all your datasets, use the ListDatasets operation.  The Status of a dataset must be ACTIVE before you can import training data. Use the DescribeDataset operation to get the status. 
   */
  createDataset(callback?: (err: AWSError, data: ForecastService.Types.CreateDatasetResponse) => void): Request<ForecastService.Types.CreateDatasetResponse, AWSError>;
  /**
   * Creates an Amazon Forecast dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or you can add datasets later with the UpdateDatasetGroup operation. After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see howitworks-datasets-groups. To get a list of all your datasets groups, use the ListDatasetGroups operation.  The Status of a dataset group must be ACTIVE before you can create a predictor using the dataset group. Use the DescribeDatasetGroup operation to get the status. 
   */
  createDatasetGroup(params: ForecastService.Types.CreateDatasetGroupRequest, callback?: (err: AWSError, data: ForecastService.Types.CreateDatasetGroupResponse) => void): Request<ForecastService.Types.CreateDatasetGroupResponse, AWSError>;
  /**
   * Creates an Amazon Forecast dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or you can add datasets later with the UpdateDatasetGroup operation. After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see howitworks-datasets-groups. To get a list of all your datasets groups, use the ListDatasetGroups operation.  The Status of a dataset group must be ACTIVE before you can create a predictor using the dataset group. Use the DescribeDatasetGroup operation to get the status. 
   */
  createDatasetGroup(callback?: (err: AWSError, data: ForecastService.Types.CreateDatasetGroupResponse) => void): Request<ForecastService.Types.CreateDatasetGroupResponse, AWSError>;
  /**
   * Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to. You must specify a DataSource object that includes an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data. For more information, see aws-forecast-iam-roles. Two properties of the training data are optionally specified:   The delimiter that separates the data fields. The default delimiter is a comma (,), which is the only supported delimiter in this release.   The format of timestamps. If the format is not specified, Amazon Forecast expects the format to be "yyyy-MM-dd HH:mm:ss".   When Amazon Forecast uploads your training data, it verifies that the data was collected at the DataFrequency specified when the target dataset was created. For more information, see CreateDataset and howitworks-datasets-groups. Amazon Forecast also verifies the delimiter and timestamp format. You can use the ListDatasetImportJobs operation to get a list of all your dataset import jobs, filtered by specified criteria. To get a list of all your dataset import jobs, filtered by the specified criteria, use the ListDatasetGroups operation.
   */
  createDatasetImportJob(params: ForecastService.Types.CreateDatasetImportJobRequest, callback?: (err: AWSError, data: ForecastService.Types.CreateDatasetImportJobResponse) => void): Request<ForecastService.Types.CreateDatasetImportJobResponse, AWSError>;
  /**
   * Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to. You must specify a DataSource object that includes an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data. For more information, see aws-forecast-iam-roles. Two properties of the training data are optionally specified:   The delimiter that separates the data fields. The default delimiter is a comma (,), which is the only supported delimiter in this release.   The format of timestamps. If the format is not specified, Amazon Forecast expects the format to be "yyyy-MM-dd HH:mm:ss".   When Amazon Forecast uploads your training data, it verifies that the data was collected at the DataFrequency specified when the target dataset was created. For more information, see CreateDataset and howitworks-datasets-groups. Amazon Forecast also verifies the delimiter and timestamp format. You can use the ListDatasetImportJobs operation to get a list of all your dataset import jobs, filtered by specified criteria. To get a list of all your dataset import jobs, filtered by the specified criteria, use the ListDatasetGroups operation.
   */
  createDatasetImportJob(callback?: (err: AWSError, data: ForecastService.Types.CreateDatasetImportJobResponse) => void): Request<ForecastService.Types.CreateDatasetImportJobResponse, AWSError>;
  /**
   * Creates a forecast for each item in the TARGET_TIME_SERIES dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3), use the CreateForecastExportJob operation. The range of the forecast is determined by the ForecastHorizon, specified in the CreatePredictor request, multiplied by the DataFrequency, specified in the CreateDataset request. When you query a forecast, you can request a specific date range within the complete forecast. To get a list of all your forecasts, use the ListForecasts operation.  The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was used to create the predictor.  For more information, see howitworks-forecast.  The Status of the forecast must be ACTIVE before you can query or export the forecast. Use the DescribeForecast operation to get the status. 
   */
  createForecast(params: ForecastService.Types.CreateForecastRequest, callback?: (err: AWSError, data: ForecastService.Types.CreateForecastResponse) => void): Request<ForecastService.Types.CreateForecastResponse, AWSError>;
  /**
   * Creates a forecast for each item in the TARGET_TIME_SERIES dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3), use the CreateForecastExportJob operation. The range of the forecast is determined by the ForecastHorizon, specified in the CreatePredictor request, multiplied by the DataFrequency, specified in the CreateDataset request. When you query a forecast, you can request a specific date range within the complete forecast. To get a list of all your forecasts, use the ListForecasts operation.  The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was used to create the predictor.  For more information, see howitworks-forecast.  The Status of the forecast must be ACTIVE before you can query or export the forecast. Use the DescribeForecast operation to get the status. 
   */
  createForecast(callback?: (err: AWSError, data: ForecastService.Types.CreateForecastResponse) => void): Request<ForecastService.Types.CreateForecastResponse, AWSError>;
  /**
   * Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all your forecast export jobs, use the ListForecastExportJobs operation.  The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. Use the DescribeForecastExportJob operation to get the status. 
   */
  createForecastExportJob(params: ForecastService.Types.CreateForecastExportJobRequest, callback?: (err: AWSError, data: ForecastService.Types.CreateForecastExportJobResponse) => void): Request<ForecastService.Types.CreateForecastExportJobResponse, AWSError>;
  /**
   * Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all your forecast export jobs, use the ListForecastExportJobs operation.  The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. Use the DescribeForecastExportJob operation to get the status. 
   */
  createForecastExportJob(callback?: (err: AWSError, data: ForecastService.Types.CreateForecastExportJobResponse) => void): Request<ForecastService.Types.CreateForecastExportJobResponse, AWSError>;
  /**
   * Creates an Amazon Forecast predictor. In the request, you provide a dataset group and either specify an algorithm or let Amazon Forecast choose the algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters. Amazon Forecast uses the chosen algorithm to train a model using the latest version of the datasets in the specified dataset group. The result is called a predictor. You then generate a forecast using the CreateForecast operation. After training a model, the CreatePredictor operation also evaluates it. To see the evaluation metrics, use the GetAccuracyMetrics operation. Always review the evaluation metrics before deciding to use the predictor to generate a forecast. Optionally, you can specify a featurization configuration to fill and aggragate the data fields in the TARGET_TIME_SERIES dataset to improve model training. For more information, see FeaturizationConfig.  AutoML  If you set PerformAutoML to true, Amazon Forecast evaluates each algorithm and chooses the one that minimizes the objective function. The objective function is defined as the mean of the weighted p10, p50, and p90 quantile losses. For more information, see EvaluationResult. When AutoML is enabled, the following properties are disallowed:    AlgorithmArn     HPOConfig     PerformHPO     TrainingParameters    To get a list of all your predictors, use the ListPredictors operation.  The Status of the predictor must be ACTIVE, signifying that training has completed, before you can use the predictor to create a forecast. Use the DescribePredictor operation to get the status. 
   */
  createPredictor(params: ForecastService.Types.CreatePredictorRequest, callback?: (err: AWSError, data: ForecastService.Types.CreatePredictorResponse) => void): Request<ForecastService.Types.CreatePredictorResponse, AWSError>;
  /**
   * Creates an Amazon Forecast predictor. In the request, you provide a dataset group and either specify an algorithm or let Amazon Forecast choose the algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters. Amazon Forecast uses the chosen algorithm to train a model using the latest version of the datasets in the specified dataset group. The result is called a predictor. You then generate a forecast using the CreateForecast operation. After training a model, the CreatePredictor operation also evaluates it. To see the evaluation metrics, use the GetAccuracyMetrics operation. Always review the evaluation metrics before deciding to use the predictor to generate a forecast. Optionally, you can specify a featurization configuration to fill and aggragate the data fields in the TARGET_TIME_SERIES dataset to improve model training. For more information, see FeaturizationConfig.  AutoML  If you set PerformAutoML to true, Amazon Forecast evaluates each algorithm and chooses the one that minimizes the objective function. The objective function is defined as the mean of the weighted p10, p50, and p90 quantile losses. For more information, see EvaluationResult. When AutoML is enabled, the following properties are disallowed:    AlgorithmArn     HPOConfig     PerformHPO     TrainingParameters    To get a list of all your predictors, use the ListPredictors operation.  The Status of the predictor must be ACTIVE, signifying that training has completed, before you can use the predictor to create a forecast. Use the DescribePredictor operation to get the status. 
   */
  createPredictor(callback?: (err: AWSError, data: ForecastService.Types.CreatePredictorResponse) => void): Request<ForecastService.Types.CreatePredictorResponse, AWSError>;
  /**
   * Deletes an Amazon Forecast dataset created using the CreateDataset operation. To be deleted, the dataset must have a status of ACTIVE or CREATE_FAILED. Use the DescribeDataset operation to get the status.
   */
  deleteDataset(params: ForecastService.Types.DeleteDatasetRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Amazon Forecast dataset created using the CreateDataset operation. To be deleted, the dataset must have a status of ACTIVE or CREATE_FAILED. Use the DescribeDataset operation to get the status.
   */
  deleteDataset(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a dataset group created using the CreateDatasetGroup operation. To be deleted, the dataset group must have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. Use the DescribeDatasetGroup operation to get the status. The operation deletes only the dataset group, not the datasets in the group.
   */
  deleteDatasetGroup(params: ForecastService.Types.DeleteDatasetGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a dataset group created using the CreateDatasetGroup operation. To be deleted, the dataset group must have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. Use the DescribeDatasetGroup operation to get the status. The operation deletes only the dataset group, not the datasets in the group.
   */
  deleteDatasetGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a dataset import job created using the CreateDatasetImportJob operation. To be deleted, the import job must have a status of ACTIVE or CREATE_FAILED. Use the DescribeDatasetImportJob operation to get the status.
   */
  deleteDatasetImportJob(params: ForecastService.Types.DeleteDatasetImportJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a dataset import job created using the CreateDatasetImportJob operation. To be deleted, the import job must have a status of ACTIVE or CREATE_FAILED. Use the DescribeDatasetImportJob operation to get the status.
   */
  deleteDatasetImportJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a forecast created using the CreateForecast operation. To be deleted, the forecast must have a status of ACTIVE or CREATE_FAILED. Use the DescribeForecast operation to get the status. You can't delete a forecast while it is being exported.
   */
  deleteForecast(params: ForecastService.Types.DeleteForecastRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a forecast created using the CreateForecast operation. To be deleted, the forecast must have a status of ACTIVE or CREATE_FAILED. Use the DescribeForecast operation to get the status. You can't delete a forecast while it is being exported.
   */
  deleteForecast(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a forecast export job created using the CreateForecastExportJob operation. To be deleted, the export job must have a status of ACTIVE or CREATE_FAILED. Use the DescribeForecastExportJob operation to get the status.
   */
  deleteForecastExportJob(params: ForecastService.Types.DeleteForecastExportJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a forecast export job created using the CreateForecastExportJob operation. To be deleted, the export job must have a status of ACTIVE or CREATE_FAILED. Use the DescribeForecastExportJob operation to get the status.
   */
  deleteForecastExportJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a predictor created using the CreatePredictor operation. To be deleted, the predictor must have a status of ACTIVE or CREATE_FAILED. Use the DescribePredictor operation to get the status. Any forecasts generated by the predictor will no longer be available.
   */
  deletePredictor(params: ForecastService.Types.DeletePredictorRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a predictor created using the CreatePredictor operation. To be deleted, the predictor must have a status of ACTIVE or CREATE_FAILED. Use the DescribePredictor operation to get the status. Any forecasts generated by the predictor will no longer be available.
   */
  deletePredictor(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to listing the properties provided by the user in the CreateDataset request, this operation includes the following properties:    CreationTime     LastModificationTime     Status   
   */
  describeDataset(params: ForecastService.Types.DescribeDatasetRequest, callback?: (err: AWSError, data: ForecastService.Types.DescribeDatasetResponse) => void): Request<ForecastService.Types.DescribeDatasetResponse, AWSError>;
  /**
   * Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to listing the properties provided by the user in the CreateDataset request, this operation includes the following properties:    CreationTime     LastModificationTime     Status   
   */
  describeDataset(callback?: (err: AWSError, data: ForecastService.Types.DescribeDatasetResponse) => void): Request<ForecastService.Types.DescribeDatasetResponse, AWSError>;
  /**
   * Describes a dataset group created using the CreateDatasetGroup operation. In addition to listing the properties provided by the user in the CreateDatasetGroup request, this operation includes the following properties:    DatasetArns - The datasets belonging to the group.    CreationTime     LastModificationTime     Status   
   */
  describeDatasetGroup(params: ForecastService.Types.DescribeDatasetGroupRequest, callback?: (err: AWSError, data: ForecastService.Types.DescribeDatasetGroupResponse) => void): Request<ForecastService.Types.DescribeDatasetGroupResponse, AWSError>;
  /**
   * Describes a dataset group created using the CreateDatasetGroup operation. In addition to listing the properties provided by the user in the CreateDatasetGroup request, this operation includes the following properties:    DatasetArns - The datasets belonging to the group.    CreationTime     LastModificationTime     Status   
   */
  describeDatasetGroup(callback?: (err: AWSError, data: ForecastService.Types.DescribeDatasetGroupResponse) => void): Request<ForecastService.Types.DescribeDatasetGroupResponse, AWSError>;
  /**
   * Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the properties provided by the user in the CreateDatasetImportJob request, this operation includes the following properties:    CreationTime     LastModificationTime     DataSize     FieldStatistics     Status     Message - If an error occurred, information about the error.  
   */
  describeDatasetImportJob(params: ForecastService.Types.DescribeDatasetImportJobRequest, callback?: (err: AWSError, data: ForecastService.Types.DescribeDatasetImportJobResponse) => void): Request<ForecastService.Types.DescribeDatasetImportJobResponse, AWSError>;
  /**
   * Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the properties provided by the user in the CreateDatasetImportJob request, this operation includes the following properties:    CreationTime     LastModificationTime     DataSize     FieldStatistics     Status     Message - If an error occurred, information about the error.  
   */
  describeDatasetImportJob(callback?: (err: AWSError, data: ForecastService.Types.DescribeDatasetImportJobResponse) => void): Request<ForecastService.Types.DescribeDatasetImportJobResponse, AWSError>;
  /**
   * Describes a forecast created using the CreateForecast operation. In addition to listing the properties provided by the user in the CreateForecast request, this operation includes the following properties:    DatasetGroupArn - The dataset group that provided the training data.    CreationTime     LastModificationTime     Status     Message - If an error occurred, information about the error.  
   */
  describeForecast(params: ForecastService.Types.DescribeForecastRequest, callback?: (err: AWSError, data: ForecastService.Types.DescribeForecastResponse) => void): Request<ForecastService.Types.DescribeForecastResponse, AWSError>;
  /**
   * Describes a forecast created using the CreateForecast operation. In addition to listing the properties provided by the user in the CreateForecast request, this operation includes the following properties:    DatasetGroupArn - The dataset group that provided the training data.    CreationTime     LastModificationTime     Status     Message - If an error occurred, information about the error.  
   */
  describeForecast(callback?: (err: AWSError, data: ForecastService.Types.DescribeForecastResponse) => void): Request<ForecastService.Types.DescribeForecastResponse, AWSError>;
  /**
   * Describes a forecast export job created using the CreateForecastExportJob operation. In addition to listing the properties provided by the user in the CreateForecastExportJob request, this operation includes the following properties:    CreationTime     LastModificationTime     Status     Message - If an error occurred, information about the error.  
   */
  describeForecastExportJob(params: ForecastService.Types.DescribeForecastExportJobRequest, callback?: (err: AWSError, data: ForecastService.Types.DescribeForecastExportJobResponse) => void): Request<ForecastService.Types.DescribeForecastExportJobResponse, AWSError>;
  /**
   * Describes a forecast export job created using the CreateForecastExportJob operation. In addition to listing the properties provided by the user in the CreateForecastExportJob request, this operation includes the following properties:    CreationTime     LastModificationTime     Status     Message - If an error occurred, information about the error.  
   */
  describeForecastExportJob(callback?: (err: AWSError, data: ForecastService.Types.DescribeForecastExportJobResponse) => void): Request<ForecastService.Types.DescribeForecastExportJobResponse, AWSError>;
  /**
   * Describes a predictor created using the CreatePredictor operation. In addition to listing the properties provided by the user in the CreatePredictor request, this operation includes the following properties:    DatasetImportJobArns - The dataset import jobs used to import training data.    AutoMLAlgorithmArns - If AutoML is performed, the algorithms evaluated.    CreationTime     LastModificationTime     Status     Message - If an error occurred, information about the error.  
   */
  describePredictor(params: ForecastService.Types.DescribePredictorRequest, callback?: (err: AWSError, data: ForecastService.Types.DescribePredictorResponse) => void): Request<ForecastService.Types.DescribePredictorResponse, AWSError>;
  /**
   * Describes a predictor created using the CreatePredictor operation. In addition to listing the properties provided by the user in the CreatePredictor request, this operation includes the following properties:    DatasetImportJobArns - The dataset import jobs used to import training data.    AutoMLAlgorithmArns - If AutoML is performed, the algorithms evaluated.    CreationTime     LastModificationTime     Status     Message - If an error occurred, information about the error.  
   */
  describePredictor(callback?: (err: AWSError, data: ForecastService.Types.DescribePredictorResponse) => void): Request<ForecastService.Types.DescribePredictorResponse, AWSError>;
  /**
   * Provides metrics on the accuracy of the models that were trained by the CreatePredictor operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. Metrics are generated for each backtest window evaluated. For more information, see EvaluationParameters. The parameters of the filling method determine which items contribute to the metrics. If zero is specified, all items contribute. If nan is specified, only those items that have complete data in the range being evaluated contribute. For more information, see FeaturizationMethod. For an example of how to train a model and review metrics, see getting-started.
   */
  getAccuracyMetrics(params: ForecastService.Types.GetAccuracyMetricsRequest, callback?: (err: AWSError, data: ForecastService.Types.GetAccuracyMetricsResponse) => void): Request<ForecastService.Types.GetAccuracyMetricsResponse, AWSError>;
  /**
   * Provides metrics on the accuracy of the models that were trained by the CreatePredictor operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. Metrics are generated for each backtest window evaluated. For more information, see EvaluationParameters. The parameters of the filling method determine which items contribute to the metrics. If zero is specified, all items contribute. If nan is specified, only those items that have complete data in the range being evaluated contribute. For more information, see FeaturizationMethod. For an example of how to train a model and review metrics, see getting-started.
   */
  getAccuracyMetrics(callback?: (err: AWSError, data: ForecastService.Types.GetAccuracyMetricsResponse) => void): Request<ForecastService.Types.GetAccuracyMetricsResponse, AWSError>;
  /**
   * Returns a list of dataset groups created using the CreateDatasetGroup operation. For each dataset group, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribeDatasetGroup operation.
   */
  listDatasetGroups(params: ForecastService.Types.ListDatasetGroupsRequest, callback?: (err: AWSError, data: ForecastService.Types.ListDatasetGroupsResponse) => void): Request<ForecastService.Types.ListDatasetGroupsResponse, AWSError>;
  /**
   * Returns a list of dataset groups created using the CreateDatasetGroup operation. For each dataset group, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribeDatasetGroup operation.
   */
  listDatasetGroups(callback?: (err: AWSError, data: ForecastService.Types.ListDatasetGroupsResponse) => void): Request<ForecastService.Types.ListDatasetGroupsResponse, AWSError>;
  /**
   * Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import job, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can filter the list by providing an array of Filter objects.
   */
  listDatasetImportJobs(params: ForecastService.Types.ListDatasetImportJobsRequest, callback?: (err: AWSError, data: ForecastService.Types.ListDatasetImportJobsResponse) => void): Request<ForecastService.Types.ListDatasetImportJobsResponse, AWSError>;
  /**
   * Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import job, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can filter the list by providing an array of Filter objects.
   */
  listDatasetImportJobs(callback?: (err: AWSError, data: ForecastService.Types.ListDatasetImportJobsResponse) => void): Request<ForecastService.Types.ListDatasetImportJobsResponse, AWSError>;
  /**
   * Returns a list of datasets created using the CreateDataset operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribeDataset operation.
   */
  listDatasets(params: ForecastService.Types.ListDatasetsRequest, callback?: (err: AWSError, data: ForecastService.Types.ListDatasetsResponse) => void): Request<ForecastService.Types.ListDatasetsResponse, AWSError>;
  /**
   * Returns a list of datasets created using the CreateDataset operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribeDataset operation.
   */
  listDatasets(callback?: (err: AWSError, data: ForecastService.Types.ListDatasetsResponse) => void): Request<ForecastService.Types.ListDatasetsResponse, AWSError>;
  /**
   * Returns a list of forecast export jobs created using the CreateForecastExportJob operation. For each forecast export job, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribeForecastExportJob operation. The list can be filtered using an array of Filter objects.
   */
  listForecastExportJobs(params: ForecastService.Types.ListForecastExportJobsRequest, callback?: (err: AWSError, data: ForecastService.Types.ListForecastExportJobsResponse) => void): Request<ForecastService.Types.ListForecastExportJobsResponse, AWSError>;
  /**
   * Returns a list of forecast export jobs created using the CreateForecastExportJob operation. For each forecast export job, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribeForecastExportJob operation. The list can be filtered using an array of Filter objects.
   */
  listForecastExportJobs(callback?: (err: AWSError, data: ForecastService.Types.ListForecastExportJobsResponse) => void): Request<ForecastService.Types.ListForecastExportJobsResponse, AWSError>;
  /**
   * Returns a list of forecasts created using the CreateForecast operation. For each forecast, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribeForecast operation. The list can be filtered using an array of Filter objects.
   */
  listForecasts(params: ForecastService.Types.ListForecastsRequest, callback?: (err: AWSError, data: ForecastService.Types.ListForecastsResponse) => void): Request<ForecastService.Types.ListForecastsResponse, AWSError>;
  /**
   * Returns a list of forecasts created using the CreateForecast operation. For each forecast, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribeForecast operation. The list can be filtered using an array of Filter objects.
   */
  listForecasts(callback?: (err: AWSError, data: ForecastService.Types.ListForecastsResponse) => void): Request<ForecastService.Types.ListForecastsResponse, AWSError>;
  /**
   * Returns a list of predictors created using the CreatePredictor operation. For each predictor, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribePredictor operation. The list can be filtered using an array of Filter objects.
   */
  listPredictors(params: ForecastService.Types.ListPredictorsRequest, callback?: (err: AWSError, data: ForecastService.Types.ListPredictorsResponse) => void): Request<ForecastService.Types.ListPredictorsResponse, AWSError>;
  /**
   * Returns a list of predictors created using the CreatePredictor operation. For each predictor, a summary of its properties, including its Amazon Resource Name (ARN), is returned. You can retrieve the complete set of properties by using the ARN with the DescribePredictor operation. The list can be filtered using an array of Filter objects.
   */
  listPredictors(callback?: (err: AWSError, data: ForecastService.Types.ListPredictorsResponse) => void): Request<ForecastService.Types.ListPredictorsResponse, AWSError>;
  /**
   * Replaces any existing datasets in the dataset group with the specified datasets.  The Status of the dataset group must be ACTIVE before creating a predictor using the dataset group. Use the DescribeDatasetGroup operation to get the status. 
   */
  updateDatasetGroup(params: ForecastService.Types.UpdateDatasetGroupRequest, callback?: (err: AWSError, data: ForecastService.Types.UpdateDatasetGroupResponse) => void): Request<ForecastService.Types.UpdateDatasetGroupResponse, AWSError>;
  /**
   * Replaces any existing datasets in the dataset group with the specified datasets.  The Status of the dataset group must be ACTIVE before creating a predictor using the dataset group. Use the DescribeDatasetGroup operation to get the status. 
   */
  updateDatasetGroup(callback?: (err: AWSError, data: ForecastService.Types.UpdateDatasetGroupResponse) => void): Request<ForecastService.Types.UpdateDatasetGroupResponse, AWSError>;
}
declare namespace ForecastService {
  export type Arn = string;
  export type ArnList = Arn[];
  export type AttributeType = "string"|"integer"|"float"|"timestamp"|string;
  export type Boolean = boolean;
  export interface CategoricalParameterRange {
    /**
     * The name of the categorical hyperparameter to tune.
     */
    Name: Name;
    /**
     * A list of the tunable categories for the hyperparameter.
     */
    Values: Values;
  }
  export type CategoricalParameterRanges = CategoricalParameterRange[];
  export interface ContinuousParameterRange {
    /**
     * The name of the hyperparameter to tune.
     */
    Name: Name;
    /**
     * The maximum tunable value of the hyperparameter.
     */
    MaxValue: Double;
    /**
     * The minimum tunable value of the hyperparameter.
     */
    MinValue: Double;
    /**
     * The scale that hyperparameter tuning uses to search the hyperparameter range. For information about choosing a hyperparameter scale, see Hyperparameter Scaling. One of the following values:  Auto  Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter.  Linear  Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.  Logarithmic  Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale. Logarithmic scaling works only for ranges that have only values greater than 0.  ReverseLogarithmic  Hyperparemeter tuning searches the values in the hyperparameter range by using a reverse logarithmic scale. Reverse logarithmic scaling works only for ranges that are entirely within the range 0 &lt;= x &lt; 1.0.  
     */
    ScalingType?: ScalingType;
  }
  export type ContinuousParameterRanges = ContinuousParameterRange[];
  export interface CreateDatasetGroupRequest {
    /**
     * A name for the dataset group.
     */
    DatasetGroupName: Name;
    /**
     * The domain associated with the dataset group. The Domain and DatasetType that you choose determine the fields that must be present in the training data that you import to the dataset. For example, if you choose the RETAIL domain and TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires item_id, timestamp, and demand fields to be present in your data. For more information, see howitworks-datasets-groups.
     */
    Domain: Domain;
    /**
     * An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.
     */
    DatasetArns?: ArnList;
  }
  export interface CreateDatasetGroupResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset group.
     */
    DatasetGroupArn?: Arn;
  }
  export interface CreateDatasetImportJobRequest {
    /**
     * The name for the dataset import job. It is recommended to include the current timestamp in the name to guard against getting a ResourceAlreadyExistsException exception, for example, 20190721DatasetImport.
     */
    DatasetImportJobName: Name;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data to.
     */
    DatasetArn: Arn;
    /**
     * The location of the training data to import and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data.
     */
    DataSource: DataSource;
    /**
     * The format of timestamps in the dataset. Two formats are supported, dependent on the DataFrequency specified when the dataset was created.   "yyyy-MM-dd" For data frequencies: Y, M, W, and D   "yyyy-MM-dd HH:mm:ss" For data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D  
     */
    TimestampFormat?: TimestampFormat;
  }
  export interface CreateDatasetImportJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset import job.
     */
    DatasetImportJobArn?: Arn;
  }
  export interface CreateDatasetRequest {
    /**
     * A name for the dataset.
     */
    DatasetName: Name;
    /**
     * The domain associated with the dataset. The Domain and DatasetType that you choose determine the fields that must be present in the training data that you import to the dataset. For example, if you choose the RETAIL domain and TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires item_id, timestamp, and demand fields to be present in your data. For more information, see howitworks-datasets-groups.
     */
    Domain: Domain;
    /**
     * The dataset type. Valid values depend on the chosen Domain.
     */
    DatasetType: DatasetType;
    /**
     * The frequency of data collection. Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "D" indicates every day and "15min" indicates every 15 minutes.
     */
    DataFrequency?: Frequency;
    /**
     * The schema for the dataset. The schema attributes and their order must match the fields in your data. The dataset Domain and DatasetType that you choose determine the minimum required fields in your training data. For information about the required fields for a specific dataset domain and type, see howitworks-domains-ds-types.
     */
    Schema: Schema;
    /**
     * An AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.
     */
    EncryptionConfig?: EncryptionConfig;
  }
  export interface CreateDatasetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    DatasetArn?: Arn;
  }
  export interface CreateForecastExportJobRequest {
    /**
     * The name for the forecast export job.
     */
    ForecastExportJobName: Name;
    /**
     * The Amazon Resource Name (ARN) of the forecast that you want to export.
     */
    ForecastArn: Arn;
    /**
     * The path to the Amazon S3 bucket where you want to save the forecast and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the bucket.
     */
    Destination: DataDestination;
  }
  export interface CreateForecastExportJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the export job.
     */
    ForecastExportJobArn?: Arn;
  }
  export interface CreateForecastRequest {
    /**
     * The name for the forecast.
     */
    ForecastName: Name;
    /**
     * The Amazon Resource Name (ARN) of the predictor to use to generate the forecast.
     */
    PredictorArn: Arn;
  }
  export interface CreateForecastResponse {
    /**
     * The Amazon Resource Name (ARN) of the forecast.
     */
    ForecastArn?: Arn;
  }
  export interface CreatePredictorRequest {
    /**
     * A name for the predictor.
     */
    PredictorName: Name;
    /**
     * The Amazon Resource Name (ARN) of the algorithm to use for model training. Required if PerformAutoML is not set to true.  Supported algorithms     arn:aws:forecast:::algorithm/ARIMA     arn:aws:forecast:::algorithm/Deep_AR_Plus   - supports hyperparameter optimization (HPO)     arn:aws:forecast:::algorithm/ETS     arn:aws:forecast:::algorithm/NPTS     arn:aws:forecast:::algorithm/Prophet   
     */
    AlgorithmArn?: Arn;
    /**
     * Specifies the number of time-steps that the model is trained to predict. The forecast horizon is also called the prediction length. For example, if you configure a dataset for daily data collection (using the DataFrequency parameter of the CreateDataset operation) and set the forecast horizon to 10, the model returns predictions for 10 days.
     */
    ForecastHorizon: Integer;
    /**
     * Whether to perform AutoML. The default value is false. In this case, you are required to specify an algorithm. If you want Amazon Forecast to evaluate the algorithms it provides and choose the best algorithm and configuration for your training dataset, set PerformAutoML to true. This is a good option if you aren't sure which algorithm is suitable for your application.
     */
    PerformAutoML?: Boolean;
    /**
     * Whether to perform hyperparameter optimization (HPO). HPO finds optimal hyperparameter values for your training data. The process of performing HPO is known as a hyperparameter tuning job. The default value is false. In this case, Amazon Forecast uses default hyperparameter values from the chosen algorithm. To override the default values, set PerformHPO to true and supply the HyperParameterTuningJobConfig object. The tuning job specifies an objective metric, the hyperparameters to optimize, and the valid range for each hyperparameter. The following algorithms support HPO:   DeepAR+  
     */
    PerformHPO?: Boolean;
    /**
     * The training parameters to override for model training. The parameters that you can override are listed in the individual algorithms in aws-forecast-choosing-recipes.
     */
    TrainingParameters?: TrainingParameters;
    /**
     * Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast evaluates a predictor by splitting a dataset into training data and testing data. The evaluation parameters define how to perform the split and the number of iterations.
     */
    EvaluationParameters?: EvaluationParameters;
    /**
     * Provides hyperparameter override values for the algorithm. If you don't provide this parameter, Amazon Forecast uses default values. The individual algorithms specify which hyperparameters support hyperparameter optimization (HPO). For more information, see aws-forecast-choosing-recipes.
     */
    HPOConfig?: HyperParameterTuningJobConfig;
    /**
     * Describes the dataset group that contains the data to use to train the predictor.
     */
    InputDataConfig: InputDataConfig;
    /**
     * The featurization configuration.
     */
    FeaturizationConfig: FeaturizationConfig;
    /**
     * An AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.
     */
    EncryptionConfig?: EncryptionConfig;
  }
  export interface CreatePredictorResponse {
    /**
     * The Amazon Resource Name (ARN) of the predictor.
     */
    PredictorArn?: Arn;
  }
  export interface DataDestination {
    /**
     * The path to an Amazon Simple Storage Service (Amazon S3) bucket along with the credentials to access the bucket.
     */
    S3Config: S3Config;
  }
  export interface DataSource {
    /**
     * The path to the training data stored in an Amazon Simple Storage Service (Amazon S3) bucket along with the credentials to access the data.
     */
    S3Config: S3Config;
  }
  export interface DatasetGroupSummary {
    /**
     * The Amazon Resource Name (ARN) of the dataset group.
     */
    DatasetGroupArn?: Arn;
    /**
     * The name of the dataset group.
     */
    DatasetGroupName?: Name;
    /**
     * When the datase group was created.
     */
    CreationTime?: Timestamp;
    /**
     * When the dataset group was created or last updated from a call to the UpdateDatasetGroup operation. While the dataset group is being updated, LastModificationTime is the current query time.
     */
    LastModificationTime?: Timestamp;
  }
  export type DatasetGroups = DatasetGroupSummary[];
  export interface DatasetImportJobSummary {
    /**
     * The Amazon Resource Name (ARN) of the dataset import job.
     */
    DatasetImportJobArn?: Arn;
    /**
     * The name of the dataset import job.
     */
    DatasetImportJobName?: Name;
    /**
     * The location of the Amazon S3 bucket that contains the training data.
     */
    DataSource?: DataSource;
    /**
     * The status of the dataset import job. The status is reflected in the status of the dataset. For example, when the import job status is CREATE_IN_PROGRESS, the status of the dataset is UPDATE_IN_PROGRESS. States include:    ACTIVE     CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED     DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED   
     */
    Status?: Status;
    /**
     * If an error occurred, an informational message about the error.
     */
    Message?: ErrorMessage;
    /**
     * When the dataset import job was created.
     */
    CreationTime?: Timestamp;
    /**
     * Dependent on the status as follows:    CREATE_PENDING - same as CreationTime     CREATE_IN_PROGRESS - the current timestamp    ACTIVE or CREATE_FAILED - when the job finished or failed  
     */
    LastModificationTime?: Timestamp;
  }
  export type DatasetImportJobs = DatasetImportJobSummary[];
  export interface DatasetSummary {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    DatasetArn?: Arn;
    /**
     * The name of the dataset.
     */
    DatasetName?: Name;
    /**
     * The dataset type.
     */
    DatasetType?: DatasetType;
    /**
     * The domain associated with the dataset.
     */
    Domain?: Domain;
    /**
     * When the dataset was created.
     */
    CreationTime?: Timestamp;
    /**
     * When the dataset is created, LastModificationTime is the same as CreationTime. After a CreateDatasetImportJob operation is called, LastModificationTime is when the import job finished or failed. While data is being imported to the dataset, LastModificationTime is the current query time.
     */
    LastModificationTime?: Timestamp;
  }
  export type DatasetType = "TARGET_TIME_SERIES"|"RELATED_TIME_SERIES"|"ITEM_METADATA"|string;
  export type Datasets = DatasetSummary[];
  export interface DeleteDatasetGroupRequest {
    /**
     * The Amazon Resource Name (ARN) of the dataset group to delete.
     */
    DatasetGroupArn: Arn;
  }
  export interface DeleteDatasetImportJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the dataset import job to delete.
     */
    DatasetImportJobArn: Arn;
  }
  export interface DeleteDatasetRequest {
    /**
     * The Amazon Resource Name (ARN) of the dataset to delete.
     */
    DatasetArn: Arn;
  }
  export interface DeleteForecastExportJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the forecast export job to delete.
     */
    ForecastExportJobArn: Arn;
  }
  export interface DeleteForecastRequest {
    /**
     * The Amazon Resource Name (ARN) of the forecast to delete.
     */
    ForecastArn: Arn;
  }
  export interface DeletePredictorRequest {
    /**
     * The Amazon Resource Name (ARN) of the predictor to delete.
     */
    PredictorArn: Arn;
  }
  export interface DescribeDatasetGroupRequest {
    /**
     * The Amazon Resource Name (ARN) of the dataset group.
     */
    DatasetGroupArn: Arn;
  }
  export interface DescribeDatasetGroupResponse {
    /**
     * The name of the dataset group.
     */
    DatasetGroupName?: Name;
    /**
     * The ARN of the dataset group.
     */
    DatasetGroupArn?: Arn;
    /**
     * An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset group.
     */
    DatasetArns?: ArnList;
    /**
     * The domain associated with the dataset group. The Domain and DatasetType that you choose determine the fields that must be present in the training data that you import to the dataset. For example, if you choose the RETAIL domain and TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires item_id, timestamp, and demand fields to be present in your data. For more information, see howitworks-datasets-groups.
     */
    Domain?: Domain;
    /**
     * The status of the dataset group. States include:    ACTIVE     CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED     DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED     UPDATE_PENDING, UPDATE_IN_PROGRESS, UPDATE_FAILED    The UPDATE states apply when the UpdateDatasetGroup operation is called.  The Status of the dataset group must be ACTIVE before creating a predictor using the dataset group. 
     */
    Status?: Status;
    /**
     * When the dataset group was created.
     */
    CreationTime?: Timestamp;
    /**
     * When the dataset group was created or last updated from a call to the UpdateDatasetGroup operation. While the dataset group is being updated, LastModificationTime is the current query time.
     */
    LastModificationTime?: Timestamp;
  }
  export interface DescribeDatasetImportJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the dataset import job.
     */
    DatasetImportJobArn: Arn;
  }
  export interface DescribeDatasetImportJobResponse {
    /**
     * The name of the dataset import job.
     */
    DatasetImportJobName?: Name;
    /**
     * The ARN of the dataset import job.
     */
    DatasetImportJobArn?: Arn;
    /**
     * The Amazon Resource Name (ARN) of the dataset that the training data was imported to.
     */
    DatasetArn?: Arn;
    /**
     * The format of timestamps in the dataset. Two formats are supported dependent on the DataFrequency specified when the dataset was created.   "yyyy-MM-dd" For data frequencies: Y, M, W, and D   "yyyy-MM-dd HH:mm:ss" For data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D  
     */
    TimestampFormat?: TimestampFormat;
    /**
     * The location of the training data to import. The training data must be stored in an Amazon S3 bucket.
     */
    DataSource?: DataSource;
    /**
     * Statistical information about each field in the input data.
     */
    FieldStatistics?: FieldStatistics;
    /**
     * The size of the dataset in gigabytes (GB) after completion of the import job.
     */
    DataSize?: Double;
    /**
     * The status of the dataset import job. The status is reflected in the status of the dataset. For example, when the import job status is CREATE_IN_PROGRESS, the status of the dataset is UPDATE_IN_PROGRESS. States include:    ACTIVE     CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED     DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED   
     */
    Status?: Status;
    /**
     * If an error occurred, an informational message about the error.
     */
    Message?: Message;
    /**
     * When the dataset import job was created.
     */
    CreationTime?: Timestamp;
    /**
     * Dependent on the status as follows:    CREATE_PENDING - same as CreationTime     CREATE_IN_PROGRESS - the current timestamp    ACTIVE or CREATE_FAILED - when the job finished or failed  
     */
    LastModificationTime?: Timestamp;
  }
  export interface DescribeDatasetRequest {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    DatasetArn: Arn;
  }
  export interface DescribeDatasetResponse {
    /**
     * The Amazon Resource Name (ARN) of the dataset.
     */
    DatasetArn?: Arn;
    /**
     * The name of the dataset.
     */
    DatasetName?: Name;
    /**
     * The dataset domain.
     */
    Domain?: Domain;
    /**
     * The dataset type.
     */
    DatasetType?: DatasetType;
    /**
     * The frequency of data collection. Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "M" indicates every month and "30min" indicates every 30 minutes.
     */
    DataFrequency?: Frequency;
    /**
     * An array of SchemaAttribute objects that specify the dataset fields. Each SchemaAttribute specifies the name and data type of a field.
     */
    Schema?: Schema;
    /**
     * An AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.
     */
    EncryptionConfig?: EncryptionConfig;
    /**
     * The status of the dataset. States include:    ACTIVE     CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED     DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED     UPDATE_PENDING, UPDATE_IN_PROGRESS, UPDATE_FAILED    The UPDATE states apply while data is imported to the dataset from a call to the CreateDatasetImportJob operation. During this time, the status reflects the status of the dataset import job. For example, when the import job status is CREATE_IN_PROGRESS, the status of the dataset is UPDATE_IN_PROGRESS.  The Status of the dataset must be ACTIVE before you can import training data. 
     */
    Status?: Status;
    /**
     * When the dataset was created.
     */
    CreationTime?: Timestamp;
    /**
     * When the dataset is created, LastModificationTime is the same as CreationTime. After a CreateDatasetImportJob operation is called, LastModificationTime is when the import job finished or failed. While data is being imported to the dataset, LastModificationTime is the current query time.
     */
    LastModificationTime?: Timestamp;
  }
  export interface DescribeForecastExportJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the forecast export job.
     */
    ForecastExportJobArn: Arn;
  }
  export interface DescribeForecastExportJobResponse {
    /**
     * The ARN of the forecast export job.
     */
    ForecastExportJobArn?: Arn;
    /**
     * The name of the forecast export job.
     */
    ForecastExportJobName?: Name;
    /**
     * The Amazon Resource Name (ARN) of the exported forecast.
     */
    ForecastArn?: Arn;
    /**
     * The path to the AWS S3 bucket where the forecast is exported.
     */
    Destination?: DataDestination;
    /**
     * If an error occurred, an informational message about the error.
     */
    Message?: Message;
    /**
     * The status of the forecast export job. One of the following states:    ACTIVE     CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED     DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED     The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. 
     */
    Status?: Status;
    /**
     * When the forecast export job was created.
     */
    CreationTime?: Timestamp;
    /**
     * When the last successful export job finished.
     */
    LastModificationTime?: Timestamp;
  }
  export interface DescribeForecastRequest {
    /**
     * The Amazon Resource Name (ARN) of the forecast.
     */
    ForecastArn: Arn;
  }
  export interface DescribeForecastResponse {
    /**
     * The same forecast ARN as given in the request.
     */
    ForecastArn?: Arn;
    /**
     * The name of the forecast.
     */
    ForecastName?: Name;
    /**
     * The ARN of the predictor used to generate the forecast.
     */
    PredictorArn?: Arn;
    /**
     * The ARN of the dataset group that provided the data used to train the predictor.
     */
    DatasetGroupArn?: Arn;
    /**
     * The status of the forecast. States include:    ACTIVE     CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED     DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED     The Status of the forecast must be ACTIVE before you can query or export the forecast. 
     */
    Status?: String;
    /**
     * If an error occurred, an informational message about the error.
     */
    Message?: ErrorMessage;
    /**
     * When the forecast creation task was created.
     */
    CreationTime?: Timestamp;
    /**
     * Initially, the same as CreationTime (status is CREATE_PENDING). Updated when inference (creating the forecast) starts (status changed to CREATE_IN_PROGRESS), and when inference is complete (status changed to ACTIVE) or fails (status changed to CREATE_FAILED).
     */
    LastModificationTime?: Timestamp;
  }
  export interface DescribePredictorRequest {
    /**
     * The Amazon Resource Name (ARN) of the predictor that you want information about.
     */
    PredictorArn: Arn;
  }
  export interface DescribePredictorResponse {
    /**
     * The ARN of the predictor.
     */
    PredictorArn?: Name;
    /**
     * The name of the predictor.
     */
    PredictorName?: Name;
    /**
     * The Amazon Resource Name (ARN) of the algorithm used for model training.
     */
    AlgorithmArn?: Arn;
    /**
     * The number of time-steps of the forecast. The forecast horizon is also called the prediction length.
     */
    ForecastHorizon?: Integer;
    /**
     * Whether the predictor is set to perform AutoML.
     */
    PerformAutoML?: Boolean;
    /**
     * Whether the predictor is set to perform HPO.
     */
    PerformHPO?: Boolean;
    /**
     * The training parameters to override for model training. The parameters that you can override are listed in the individual algorithms in aws-forecast-choosing-recipes.
     */
    TrainingParameters?: TrainingParameters;
    /**
     * Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast evaluates a predictor by splitting a dataset into training data and testing data. The evaluation parameters define how to perform the split and the number of iterations.
     */
    EvaluationParameters?: EvaluationParameters;
    /**
     * The hyperparameter override values for the algorithm.
     */
    HPOConfig?: HyperParameterTuningJobConfig;
    /**
     * Describes the dataset group that contains the data to use to train the predictor.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The featurization configuration.
     */
    FeaturizationConfig?: FeaturizationConfig;
    /**
     * An AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.
     */
    EncryptionConfig?: EncryptionConfig;
    /**
     * An array of ARNs of the dataset import jobs used to import training data for the predictor.
     */
    DatasetImportJobArns?: ArnList;
    /**
     * When PerformAutoML is specified, the ARN of the chosen algorithm.
     */
    AutoMLAlgorithmArns?: ArnList;
    /**
     * The status of the predictor. States include:    ACTIVE     CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED     DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED     UPDATE_PENDING, UPDATE_IN_PROGRESS, UPDATE_FAILED     The Status of the predictor must be ACTIVE before using the predictor to create a forecast. 
     */
    Status?: Status;
    /**
     * If an error occurred, an informational message about the error.
     */
    Message?: Message;
    /**
     * When the model training task was created.
     */
    CreationTime?: Timestamp;
    /**
     * Initially, the same as CreationTime (status is CREATE_PENDING). Updated when training starts (status changed to CREATE_IN_PROGRESS), and when training is complete (status changed to ACTIVE) or fails (status changed to CREATE_FAILED).
     */
    LastModificationTime?: Timestamp;
  }
  export type Domain = "RETAIL"|"CUSTOM"|"INVENTORY_PLANNING"|"EC2_CAPACITY"|"WORK_FORCE"|"WEB_TRAFFIC"|"METRICS"|string;
  export type Double = number;
  export interface EncryptionConfig {
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the AWS KMS key. Cross-account pass role is not allowed. If you pass a role that doesn't belong to your account, an InvalidInputException is thrown.
     */
    RoleArn: Arn;
    /**
     * The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key.
     */
    KMSKeyArn: KMSKeyArn;
  }
  export type ErrorMessage = string;
  export interface EvaluationParameters {
    /**
     * The number of times to split the input data. The default is 1. The range is 1 through 5.
     */
    NumberOfBacktestWindows?: Integer;
    /**
     * The point from the end of the dataset where you want to split the data for model training and evaluation. The value is specified as the number of data points.
     */
    BackTestWindowOffset?: Integer;
  }
  export interface EvaluationResult {
    /**
     * The Amazon Resource Name (ARN) of the algorithm that was evaluated.
     */
    AlgorithmArn?: Arn;
    /**
     * The array of test windows used for evaluating the algorithm. The NumberOfBacktestWindows from the EvaluationParameters object determines the number of windows in the array.
     */
    TestWindows?: TestWindows;
  }
  export type EvaluationType = "SUMMARY"|"COMPUTED"|string;
  export interface Featurization {
    /**
     * The name of the schema attribute specifying the data field to be featurized. In this release, only the target field of the TARGET_TIME_SERIES dataset type is supported. For example, for the RETAIL domain, the target is demand, and for the CUSTOM domain, the target is target_value.
     */
    AttributeName: Name;
    /**
     * An array FeaturizationMethod objects that specifies the feature transformation methods. For this release, the number of methods is limited to one.
     */
    FeaturizationPipeline?: FeaturizationPipeline;
  }
  export interface FeaturizationConfig {
    /**
     * The frequency of predictions in a forecast. Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "Y" indicates every year and "5min" indicates every five minutes.
     */
    ForecastFrequency: Frequency;
    /**
     * An array of dimension (field) names that specify how to group the generated forecast. For example, suppose that you are generating a forecast for item sales across all of your stores, and your dataset contains a store_id field. If you want the sales forecast for each item by store, you would specify store_id as the dimension.
     */
    ForecastDimensions?: ForecastDimensions;
    /**
     * An array of featurization (transformation) information for the fields of a dataset. In this release, only a single featurization is supported.
     */
    Featurizations?: Featurizations;
  }
  export interface FeaturizationMethod {
    /**
     * The name of the method. In this release, "filling" is the only supported method.
     */
    FeaturizationMethodName: FeaturizationMethodName;
    /**
     * The method parameters (key-value pairs). Specify these to override the default values. The following list shows the parameters and their valid values. Bold signifies the default value.    aggregation: sum, avg, first, min, max     frontfill: none     middlefill: zero, nan (not a number)    backfill: zero, nan   
     */
    FeaturizationMethodParameters?: FeaturizationMethodParameters;
  }
  export type FeaturizationMethodName = "filling"|string;
  export type FeaturizationMethodParameters = {[key: string]: ParameterValue};
  export type FeaturizationPipeline = FeaturizationMethod[];
  export type Featurizations = Featurization[];
  export type FieldStatistics = {[key: string]: Statistics};
  export interface Filter {
    /**
     * The name of the parameter to filter on.
     */
    Key: String;
    /**
     * A valid value for Key.
     */
    Value: Arn;
    /**
     * The condition to apply.
     */
    Condition: FilterConditionString;
  }
  export type FilterConditionString = "IS"|"IS_NOT"|string;
  export type Filters = Filter[];
  export type ForecastDimensions = Name[];
  export interface ForecastExportJobSummary {
    /**
     * The Amazon Resource Name (ARN) of the forecast export job.
     */
    ForecastExportJobArn?: Arn;
    /**
     * The name of the forecast export job.
     */
    ForecastExportJobName?: Name;
    /**
     * The path to the S3 bucket where the forecast is stored.
     */
    Destination?: DataDestination;
    /**
     * The status of the forecast export job. One of the following states:    ACTIVE     CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED     DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED     The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. 
     */
    Status?: Status;
    /**
     * If an error occurred, an informational message about the error.
     */
    Message?: ErrorMessage;
    /**
     * When the forecast export job was created.
     */
    CreationTime?: Timestamp;
    /**
     * When the last successful export job finished.
     */
    LastModificationTime?: Timestamp;
  }
  export type ForecastExportJobs = ForecastExportJobSummary[];
  export interface ForecastSummary {
    /**
     * The ARN of the forecast.
     */
    ForecastArn?: Arn;
    /**
     * The name of the forecast.
     */
    ForecastName?: Name;
    /**
     * The ARN of the predictor used to generate the forecast.
     */
    PredictorArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the dataset group that provided the data used to train the predictor.
     */
    DatasetGroupArn?: String;
    /**
     * The status of the forecast. States include:    ACTIVE     CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED     DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED     The Status of the forecast must be ACTIVE before you can query or export the forecast. 
     */
    Status?: Status;
    /**
     * If an error occurred, an informational message about the error.
     */
    Message?: ErrorMessage;
    /**
     * When the forecast creation task was created.
     */
    CreationTime?: Timestamp;
    /**
     * Initially, the same as CreationTime (status is CREATE_PENDING). Updated when inference (creating the forecast) starts (status changed to CREATE_IN_PROGRESS), and when inference is complete (status changed to ACTIVE) or fails (status changed to CREATE_FAILED).
     */
    LastModificationTime?: Timestamp;
  }
  export type Forecasts = ForecastSummary[];
  export type Frequency = string;
  export interface GetAccuracyMetricsRequest {
    /**
     * The Amazon Resource Name (ARN) of the predictor to get metrics for.
     */
    PredictorArn: Arn;
  }
  export interface GetAccuracyMetricsResponse {
    /**
     * An array of results from evaluating the predictor.
     */
    PredictorEvaluationResults?: PredictorEvaluationResults;
  }
  export interface HyperParameterTuningJobConfig {
    /**
     * Specifies the ranges of valid values for the hyperparameters.
     */
    ParameterRanges?: ParameterRanges;
  }
  export interface InputDataConfig {
    /**
     * The Amazon Resource Name (ARN) of the dataset group.
     */
    DatasetGroupArn: Arn;
    /**
     * An array of supplementary features. For this release, the only supported feature is a holiday calendar.
     */
    SupplementaryFeatures?: SupplementaryFeatures;
  }
  export type Integer = number;
  export interface IntegerParameterRange {
    /**
     * The name of the hyperparameter to tune.
     */
    Name: Name;
    /**
     * The maximum tunable value of the hyperparameter.
     */
    MaxValue: Integer;
    /**
     * The minimum tunable value of the hyperparameter.
     */
    MinValue: Integer;
    /**
     * The scale that hyperparameter tuning uses to search the hyperparameter range. For information about choosing a hyperparameter scale, see Hyperparameter Scaling. One of the following values:  Auto  Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter.  Linear  Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.  Logarithmic  Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale. Logarithmic scaling works only for ranges that have only values greater than 0.  ReverseLogarithmic  Not supported for IntegerParameterRange. Reverse logarithmic scaling works only for ranges that are entirely within the range 0 &lt;= x &lt; 1.0.  
     */
    ScalingType?: ScalingType;
  }
  export type IntegerParameterRanges = IntegerParameterRange[];
  export type KMSKeyArn = string;
  export interface ListDatasetGroupsRequest {
    /**
     * If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
     */
    NextToken?: NextToken;
    /**
     * The number of items to return in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDatasetGroupsResponse {
    /**
     * An array of objects that summarize each dataset group's properties.
     */
    DatasetGroups?: DatasetGroups;
    /**
     * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListDatasetImportJobsRequest {
    /**
     * If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
     */
    NextToken?: NextToken;
    /**
     * The number of items to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * An array of filters. For each filter, you provide a condition and a match statement. The condition is either IS or IS_NOT, which specifies whether to include or exclude, respectively, from the list, the predictors that match the statement. The match statement consists of a key and a value. In this release, Name is the only valid key, which filters on the DatasetImportJobName property.    Condition - IS or IS_NOT     Key - Name     Value - the value to match   For example, to list all dataset import jobs named my_dataset_import_job, you would specify:  "Filters": [ { "Condition": "IS", "Key": "Name", "Value": "my_dataset_import_job" } ] 
     */
    Filters?: Filters;
  }
  export interface ListDatasetImportJobsResponse {
    /**
     * An array of objects that summarize each dataset import job's properties.
     */
    DatasetImportJobs?: DatasetImportJobs;
    /**
     * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListDatasetsRequest {
    /**
     * If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
     */
    NextToken?: NextToken;
    /**
     * The number of items to return in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDatasetsResponse {
    /**
     * An array of objects that summarize each dataset's properties.
     */
    Datasets?: Datasets;
    /**
     * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListForecastExportJobsRequest {
    /**
     * If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
     */
    NextToken?: NextToken;
    /**
     * The number of items to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * An array of filters. For each filter, you provide a condition and a match statement. The condition is either IS or IS_NOT, which specifies whether to include or exclude, respectively, from the list, the predictors that match the statement. The match statement consists of a key and a value. In this release, Name is the only valid key, which filters on the ForecastExportJobName property.    Condition - IS or IS_NOT     Key - Name     Value - the value to match   For example, to list all forecast export jobs named my_forecast_export_job, you would specify:  "Filters": [ { "Condition": "IS", "Key": "Name", "Value": "my_forecast_export_job" } ] 
     */
    Filters?: Filters;
  }
  export interface ListForecastExportJobsResponse {
    /**
     * An array of objects that summarize each export job's properties.
     */
    ForecastExportJobs?: ForecastExportJobs;
    /**
     * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListForecastsRequest {
    /**
     * If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
     */
    NextToken?: NextToken;
    /**
     * The number of items to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * An array of filters. For each filter, you provide a condition and a match statement. The condition is either IS or IS_NOT, which specifies whether to include or exclude, respectively, from the list, the predictors that match the statement. The match statement consists of a key and a value. In this release, Name is the only valid key, which filters on the ForecastName property.    Condition - IS or IS_NOT     Key - Name     Value - the value to match   For example, to list all forecasts named my_forecast, you would specify:  "Filters": [ { "Condition": "IS", "Key": "Name", "Value": "my_forecast" } ] 
     */
    Filters?: Filters;
  }
  export interface ListForecastsResponse {
    /**
     * An array of objects that summarize each forecast's properties.
     */
    Forecasts?: Forecasts;
    /**
     * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export interface ListPredictorsRequest {
    /**
     * If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
     */
    NextToken?: NextToken;
    /**
     * The number of items to return in the response.
     */
    MaxResults?: MaxResults;
    /**
     * An array of filters. For each filter, you provide a condition and a match statement. The condition is either IS or IS_NOT, which specifies whether to include or exclude, respectively, from the list, the predictors that match the statement. The match statement consists of a key and a value. In this release, Name is the only valid key, which filters on the PredictorName property.    Condition - IS or IS_NOT     Key - Name     Value - the value to match   For example, to list all predictors named my_predictor, you would specify:  "Filters": [ { "Condition": "IS", "Key": "Name", "Value": "my_predictor" } ] 
     */
    Filters?: Filters;
  }
  export interface ListPredictorsResponse {
    /**
     * An array of objects that summarize each predictor's properties.
     */
    Predictors?: Predictors;
    /**
     * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type Message = string;
  export interface Metrics {
    /**
     * The root mean square error (RMSE).
     */
    RMSE?: Double;
    /**
     * An array of weighted quantile losses. Quantiles divide a probability distribution into regions of equal probability. The distribution in this case is the loss function.
     */
    WeightedQuantileLosses?: WeightedQuantileLosses;
  }
  export type Name = string;
  export type NextToken = string;
  export type ParameterKey = string;
  export interface ParameterRanges {
    /**
     * Specifies the tunable range for each categorical hyperparameter.
     */
    CategoricalParameterRanges?: CategoricalParameterRanges;
    /**
     * Specifies the tunable range for each continuous hyperparameter.
     */
    ContinuousParameterRanges?: ContinuousParameterRanges;
    /**
     * Specifies the tunable range for each integer hyperparameter.
     */
    IntegerParameterRanges?: IntegerParameterRanges;
  }
  export type ParameterValue = string;
  export type PredictorEvaluationResults = EvaluationResult[];
  export interface PredictorSummary {
    /**
     * The ARN of the predictor.
     */
    PredictorArn?: Arn;
    /**
     * The name of the predictor.
     */
    PredictorName?: Name;
    /**
     * The Amazon Resource Name (ARN) of the dataset group that contains the data used to train the predictor.
     */
    DatasetGroupArn?: Arn;
    /**
     * The status of the predictor. States include:    ACTIVE     CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED     DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED     UPDATE_PENDING, UPDATE_IN_PROGRESS, UPDATE_FAILED     The Status of the predictor must be ACTIVE before using the predictor to create a forecast. 
     */
    Status?: Status;
    /**
     * If an error occurred, an informational message about the error.
     */
    Message?: ErrorMessage;
    /**
     * When the model training task was created.
     */
    CreationTime?: Timestamp;
    /**
     * Initially, the same as CreationTime (status is CREATE_PENDING). Updated when training starts (status changed to CREATE_IN_PROGRESS), and when training is complete (status changed to ACTIVE) or fails (status changed to CREATE_FAILED).
     */
    LastModificationTime?: Timestamp;
  }
  export type Predictors = PredictorSummary[];
  export interface S3Config {
    /**
     * The path to an Amazon Simple Storage Service (Amazon S3) bucket or file(s) in an Amazon S3 bucket.
     */
    Path: S3Path;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket or file(s). Cross-account pass role is not allowed. If you pass a role that doesn't belong to your account, an InvalidInputException is thrown.
     */
    RoleArn: Arn;
    /**
     * The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key.
     */
    KMSKeyArn?: KMSKeyArn;
  }
  export type S3Path = string;
  export type ScalingType = "Auto"|"Linear"|"Logarithmic"|"ReverseLogarithmic"|string;
  export interface Schema {
    /**
     * An array of attributes specifying the name and type of each field in a dataset.
     */
    Attributes?: SchemaAttributes;
  }
  export interface SchemaAttribute {
    /**
     * The name of the dataset field.
     */
    AttributeName?: Name;
    /**
     * The data type of the field.
     */
    AttributeType?: AttributeType;
  }
  export type SchemaAttributes = SchemaAttribute[];
  export interface Statistics {
    /**
     * The number of values in the field.
     */
    Count?: Integer;
    /**
     * The number of distinct values in the field.
     */
    CountDistinct?: Integer;
    /**
     * The number of null values in the field.
     */
    CountNull?: Integer;
    /**
     * The number of NAN (not a number) values in the field.
     */
    CountNan?: Integer;
    /**
     * For a numeric field, the minimum value in the field.
     */
    Min?: String;
    /**
     * For a numeric field, the maximum value in the field.
     */
    Max?: String;
    /**
     * For a numeric field, the average value in the field.
     */
    Avg?: Double;
    /**
     * For a numeric field, the standard deviation.
     */
    Stddev?: Double;
  }
  export type Status = string;
  export type String = string;
  export interface SupplementaryFeature {
    /**
     * The name of the feature. This must be "holiday".
     */
    Name: Name;
    /**
     * One of the following 2 letter country codes:   "AU" - AUSTRALIA   "DE" - GERMANY   "JP" - JAPAN   "US" - UNITED_STATES   "UK" - UNITED_KINGDOM  
     */
    Value: Value;
  }
  export type SupplementaryFeatures = SupplementaryFeature[];
  export type TestWindows = WindowSummary[];
  export type Timestamp = Date;
  export type TimestampFormat = string;
  export type TrainingParameters = {[key: string]: ParameterValue};
  export interface UpdateDatasetGroupRequest {
    /**
     * The ARN of the dataset group.
     */
    DatasetGroupArn: Arn;
    /**
     * An array of Amazon Resource Names (ARNs) of the datasets to add to the dataset group.
     */
    DatasetArns: ArnList;
  }
  export interface UpdateDatasetGroupResponse {
  }
  export type Value = string;
  export type Values = Value[];
  export interface WeightedQuantileLoss {
    /**
     * The quantile. Quantiles divide a probability distribution into regions of equal probability. For example, if the distribution was divided into 5 regions of equal probability, the quantiles would be 0.2, 0.4, 0.6, and 0.8.
     */
    Quantile?: Double;
    /**
     * The difference between the predicted value and actual value over the quantile, weighted (normalized) by dividing by the sum over all quantiles.
     */
    LossValue?: Double;
  }
  export type WeightedQuantileLosses = WeightedQuantileLoss[];
  export interface WindowSummary {
    /**
     * The timestamp that defines the start of the window.
     */
    TestWindowStart?: Timestamp;
    /**
     * The timestamp that defines the end of the window.
     */
    TestWindowEnd?: Timestamp;
    /**
     * The number of data points within the window.
     */
    ItemCount?: Integer;
    /**
     * The type of evaluation.    SUMMARY - The average metrics across all windows.    COMPUTED - The metrics for the specified window.  
     */
    EvaluationType?: EvaluationType;
    Metrics?: Metrics;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-06-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ForecastService client.
   */
  export import Types = ForecastService;
}
export = ForecastService;
