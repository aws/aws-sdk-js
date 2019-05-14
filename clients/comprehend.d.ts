import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Comprehend extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Comprehend.Types.ClientConfiguration)
  config: Config & Comprehend.Types.ClientConfiguration;
  /**
   * Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages. 
   */
  batchDetectDominantLanguage(params: Comprehend.Types.BatchDetectDominantLanguageRequest, callback?: (err: AWSError, data: Comprehend.Types.BatchDetectDominantLanguageResponse) => void): Request<Comprehend.Types.BatchDetectDominantLanguageResponse, AWSError>;
  /**
   * Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages. 
   */
  batchDetectDominantLanguage(callback?: (err: AWSError, data: Comprehend.Types.BatchDetectDominantLanguageResponse) => void): Request<Comprehend.Types.BatchDetectDominantLanguageResponse, AWSError>;
  /**
   * Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see how-entities 
   */
  batchDetectEntities(params: Comprehend.Types.BatchDetectEntitiesRequest, callback?: (err: AWSError, data: Comprehend.Types.BatchDetectEntitiesResponse) => void): Request<Comprehend.Types.BatchDetectEntitiesResponse, AWSError>;
  /**
   * Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see how-entities 
   */
  batchDetectEntities(callback?: (err: AWSError, data: Comprehend.Types.BatchDetectEntitiesResponse) => void): Request<Comprehend.Types.BatchDetectEntitiesResponse, AWSError>;
  /**
   * Detects the key noun phrases found in a batch of documents.
   */
  batchDetectKeyPhrases(params: Comprehend.Types.BatchDetectKeyPhrasesRequest, callback?: (err: AWSError, data: Comprehend.Types.BatchDetectKeyPhrasesResponse) => void): Request<Comprehend.Types.BatchDetectKeyPhrasesResponse, AWSError>;
  /**
   * Detects the key noun phrases found in a batch of documents.
   */
  batchDetectKeyPhrases(callback?: (err: AWSError, data: Comprehend.Types.BatchDetectKeyPhrasesResponse) => void): Request<Comprehend.Types.BatchDetectKeyPhrasesResponse, AWSError>;
  /**
   * Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED, or NEGATIVE, in each one.
   */
  batchDetectSentiment(params: Comprehend.Types.BatchDetectSentimentRequest, callback?: (err: AWSError, data: Comprehend.Types.BatchDetectSentimentResponse) => void): Request<Comprehend.Types.BatchDetectSentimentResponse, AWSError>;
  /**
   * Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED, or NEGATIVE, in each one.
   */
  batchDetectSentiment(callback?: (err: AWSError, data: Comprehend.Types.BatchDetectSentimentResponse) => void): Request<Comprehend.Types.BatchDetectSentimentResponse, AWSError>;
  /**
   * Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see how-syntax.
   */
  batchDetectSyntax(params: Comprehend.Types.BatchDetectSyntaxRequest, callback?: (err: AWSError, data: Comprehend.Types.BatchDetectSyntaxResponse) => void): Request<Comprehend.Types.BatchDetectSyntaxResponse, AWSError>;
  /**
   * Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see how-syntax.
   */
  batchDetectSyntax(callback?: (err: AWSError, data: Comprehend.Types.BatchDetectSyntaxResponse) => void): Request<Comprehend.Types.BatchDetectSyntaxResponse, AWSError>;
  /**
   * Creates a new document classifier that you can use to categorize documents. To create a classifier you provide a set of training documents that labeled with the categories that you want to use. After the classifier is trained you can use it to categorize a set of labeled documents into the categories. For more information, see how-document-classification.
   */
  createDocumentClassifier(params: Comprehend.Types.CreateDocumentClassifierRequest, callback?: (err: AWSError, data: Comprehend.Types.CreateDocumentClassifierResponse) => void): Request<Comprehend.Types.CreateDocumentClassifierResponse, AWSError>;
  /**
   * Creates a new document classifier that you can use to categorize documents. To create a classifier you provide a set of training documents that labeled with the categories that you want to use. After the classifier is trained you can use it to categorize a set of labeled documents into the categories. For more information, see how-document-classification.
   */
  createDocumentClassifier(callback?: (err: AWSError, data: Comprehend.Types.CreateDocumentClassifierResponse) => void): Request<Comprehend.Types.CreateDocumentClassifierResponse, AWSError>;
  /**
   * Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted, you can check job status using the API. 
   */
  createEntityRecognizer(params: Comprehend.Types.CreateEntityRecognizerRequest, callback?: (err: AWSError, data: Comprehend.Types.CreateEntityRecognizerResponse) => void): Request<Comprehend.Types.CreateEntityRecognizerResponse, AWSError>;
  /**
   * Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted, you can check job status using the API. 
   */
  createEntityRecognizer(callback?: (err: AWSError, data: Comprehend.Types.CreateEntityRecognizerResponse) => void): Request<Comprehend.Types.CreateEntityRecognizerResponse, AWSError>;
  /**
   * Deletes a previously created document classifier Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. 
   */
  deleteDocumentClassifier(params: Comprehend.Types.DeleteDocumentClassifierRequest, callback?: (err: AWSError, data: Comprehend.Types.DeleteDocumentClassifierResponse) => void): Request<Comprehend.Types.DeleteDocumentClassifierResponse, AWSError>;
  /**
   * Deletes a previously created document classifier Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. 
   */
  deleteDocumentClassifier(callback?: (err: AWSError, data: Comprehend.Types.DeleteDocumentClassifierResponse) => void): Request<Comprehend.Types.DeleteDocumentClassifierResponse, AWSError>;
  /**
   * Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. 
   */
  deleteEntityRecognizer(params: Comprehend.Types.DeleteEntityRecognizerRequest, callback?: (err: AWSError, data: Comprehend.Types.DeleteEntityRecognizerResponse) => void): Request<Comprehend.Types.DeleteEntityRecognizerResponse, AWSError>;
  /**
   * Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. 
   */
  deleteEntityRecognizer(callback?: (err: AWSError, data: Comprehend.Types.DeleteEntityRecognizerResponse) => void): Request<Comprehend.Types.DeleteEntityRecognizerResponse, AWSError>;
  /**
   * Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
   */
  describeDocumentClassificationJob(params: Comprehend.Types.DescribeDocumentClassificationJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeDocumentClassificationJobResponse) => void): Request<Comprehend.Types.DescribeDocumentClassificationJobResponse, AWSError>;
  /**
   * Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
   */
  describeDocumentClassificationJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeDocumentClassificationJobResponse) => void): Request<Comprehend.Types.DescribeDocumentClassificationJobResponse, AWSError>;
  /**
   * Gets the properties associated with a document classifier.
   */
  describeDocumentClassifier(params: Comprehend.Types.DescribeDocumentClassifierRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeDocumentClassifierResponse) => void): Request<Comprehend.Types.DescribeDocumentClassifierResponse, AWSError>;
  /**
   * Gets the properties associated with a document classifier.
   */
  describeDocumentClassifier(callback?: (err: AWSError, data: Comprehend.Types.DescribeDocumentClassifierResponse) => void): Request<Comprehend.Types.DescribeDocumentClassifierResponse, AWSError>;
  /**
   * Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
   */
  describeDominantLanguageDetectionJob(params: Comprehend.Types.DescribeDominantLanguageDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.DescribeDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
   */
  describeDominantLanguageDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.DescribeDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
   */
  describeEntitiesDetectionJob(params: Comprehend.Types.DescribeEntitiesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.DescribeEntitiesDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
   */
  describeEntitiesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.DescribeEntitiesDetectionJobResponse, AWSError>;
  /**
   * Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
   */
  describeEntityRecognizer(params: Comprehend.Types.DescribeEntityRecognizerRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeEntityRecognizerResponse) => void): Request<Comprehend.Types.DescribeEntityRecognizerResponse, AWSError>;
  /**
   * Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
   */
  describeEntityRecognizer(callback?: (err: AWSError, data: Comprehend.Types.DescribeEntityRecognizerResponse) => void): Request<Comprehend.Types.DescribeEntityRecognizerResponse, AWSError>;
  /**
   * Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
   */
  describeKeyPhrasesDetectionJob(params: Comprehend.Types.DescribeKeyPhrasesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.DescribeKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
   */
  describeKeyPhrasesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.DescribeKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
   */
  describeSentimentDetectionJob(params: Comprehend.Types.DescribeSentimentDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeSentimentDetectionJobResponse) => void): Request<Comprehend.Types.DescribeSentimentDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
   */
  describeSentimentDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeSentimentDetectionJobResponse) => void): Request<Comprehend.Types.DescribeSentimentDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
   */
  describeTopicsDetectionJob(params: Comprehend.Types.DescribeTopicsDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.DescribeTopicsDetectionJobResponse) => void): Request<Comprehend.Types.DescribeTopicsDetectionJobResponse, AWSError>;
  /**
   * Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
   */
  describeTopicsDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.DescribeTopicsDetectionJobResponse) => void): Request<Comprehend.Types.DescribeTopicsDetectionJobResponse, AWSError>;
  /**
   * Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages. 
   */
  detectDominantLanguage(params: Comprehend.Types.DetectDominantLanguageRequest, callback?: (err: AWSError, data: Comprehend.Types.DetectDominantLanguageResponse) => void): Request<Comprehend.Types.DetectDominantLanguageResponse, AWSError>;
  /**
   * Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages. 
   */
  detectDominantLanguage(callback?: (err: AWSError, data: Comprehend.Types.DetectDominantLanguageResponse) => void): Request<Comprehend.Types.DetectDominantLanguageResponse, AWSError>;
  /**
   * Inspects text for named entities, and returns information about them. For more information, about named entities, see how-entities. 
   */
  detectEntities(params: Comprehend.Types.DetectEntitiesRequest, callback?: (err: AWSError, data: Comprehend.Types.DetectEntitiesResponse) => void): Request<Comprehend.Types.DetectEntitiesResponse, AWSError>;
  /**
   * Inspects text for named entities, and returns information about them. For more information, about named entities, see how-entities. 
   */
  detectEntities(callback?: (err: AWSError, data: Comprehend.Types.DetectEntitiesResponse) => void): Request<Comprehend.Types.DetectEntitiesResponse, AWSError>;
  /**
   * Detects the key noun phrases found in the text. 
   */
  detectKeyPhrases(params: Comprehend.Types.DetectKeyPhrasesRequest, callback?: (err: AWSError, data: Comprehend.Types.DetectKeyPhrasesResponse) => void): Request<Comprehend.Types.DetectKeyPhrasesResponse, AWSError>;
  /**
   * Detects the key noun phrases found in the text. 
   */
  detectKeyPhrases(callback?: (err: AWSError, data: Comprehend.Types.DetectKeyPhrasesResponse) => void): Request<Comprehend.Types.DetectKeyPhrasesResponse, AWSError>;
  /**
   * Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE). 
   */
  detectSentiment(params: Comprehend.Types.DetectSentimentRequest, callback?: (err: AWSError, data: Comprehend.Types.DetectSentimentResponse) => void): Request<Comprehend.Types.DetectSentimentResponse, AWSError>;
  /**
   * Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE). 
   */
  detectSentiment(callback?: (err: AWSError, data: Comprehend.Types.DetectSentimentResponse) => void): Request<Comprehend.Types.DetectSentimentResponse, AWSError>;
  /**
   * Inspects text for syntax and the part of speech of words in the document. For more information, how-syntax.
   */
  detectSyntax(params: Comprehend.Types.DetectSyntaxRequest, callback?: (err: AWSError, data: Comprehend.Types.DetectSyntaxResponse) => void): Request<Comprehend.Types.DetectSyntaxResponse, AWSError>;
  /**
   * Inspects text for syntax and the part of speech of words in the document. For more information, how-syntax.
   */
  detectSyntax(callback?: (err: AWSError, data: Comprehend.Types.DetectSyntaxResponse) => void): Request<Comprehend.Types.DetectSyntaxResponse, AWSError>;
  /**
   * Gets a list of the documentation classification jobs that you have submitted.
   */
  listDocumentClassificationJobs(params: Comprehend.Types.ListDocumentClassificationJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListDocumentClassificationJobsResponse) => void): Request<Comprehend.Types.ListDocumentClassificationJobsResponse, AWSError>;
  /**
   * Gets a list of the documentation classification jobs that you have submitted.
   */
  listDocumentClassificationJobs(callback?: (err: AWSError, data: Comprehend.Types.ListDocumentClassificationJobsResponse) => void): Request<Comprehend.Types.ListDocumentClassificationJobsResponse, AWSError>;
  /**
   * Gets a list of the document classifiers that you have created.
   */
  listDocumentClassifiers(params: Comprehend.Types.ListDocumentClassifiersRequest, callback?: (err: AWSError, data: Comprehend.Types.ListDocumentClassifiersResponse) => void): Request<Comprehend.Types.ListDocumentClassifiersResponse, AWSError>;
  /**
   * Gets a list of the document classifiers that you have created.
   */
  listDocumentClassifiers(callback?: (err: AWSError, data: Comprehend.Types.ListDocumentClassifiersResponse) => void): Request<Comprehend.Types.ListDocumentClassifiersResponse, AWSError>;
  /**
   * Gets a list of the dominant language detection jobs that you have submitted.
   */
  listDominantLanguageDetectionJobs(params: Comprehend.Types.ListDominantLanguageDetectionJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListDominantLanguageDetectionJobsResponse) => void): Request<Comprehend.Types.ListDominantLanguageDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of the dominant language detection jobs that you have submitted.
   */
  listDominantLanguageDetectionJobs(callback?: (err: AWSError, data: Comprehend.Types.ListDominantLanguageDetectionJobsResponse) => void): Request<Comprehend.Types.ListDominantLanguageDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of the entity detection jobs that you have submitted.
   */
  listEntitiesDetectionJobs(params: Comprehend.Types.ListEntitiesDetectionJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListEntitiesDetectionJobsResponse) => void): Request<Comprehend.Types.ListEntitiesDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of the entity detection jobs that you have submitted.
   */
  listEntitiesDetectionJobs(callback?: (err: AWSError, data: Comprehend.Types.ListEntitiesDetectionJobsResponse) => void): Request<Comprehend.Types.ListEntitiesDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list. The results of this list are not in any particular order. Please get the list and sort locally if needed.
   */
  listEntityRecognizers(params: Comprehend.Types.ListEntityRecognizersRequest, callback?: (err: AWSError, data: Comprehend.Types.ListEntityRecognizersResponse) => void): Request<Comprehend.Types.ListEntityRecognizersResponse, AWSError>;
  /**
   * Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list. The results of this list are not in any particular order. Please get the list and sort locally if needed.
   */
  listEntityRecognizers(callback?: (err: AWSError, data: Comprehend.Types.ListEntityRecognizersResponse) => void): Request<Comprehend.Types.ListEntityRecognizersResponse, AWSError>;
  /**
   * Get a list of key phrase detection jobs that you have submitted.
   */
  listKeyPhrasesDetectionJobs(params: Comprehend.Types.ListKeyPhrasesDetectionJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListKeyPhrasesDetectionJobsResponse) => void): Request<Comprehend.Types.ListKeyPhrasesDetectionJobsResponse, AWSError>;
  /**
   * Get a list of key phrase detection jobs that you have submitted.
   */
  listKeyPhrasesDetectionJobs(callback?: (err: AWSError, data: Comprehend.Types.ListKeyPhrasesDetectionJobsResponse) => void): Request<Comprehend.Types.ListKeyPhrasesDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of sentiment detection jobs that you have submitted.
   */
  listSentimentDetectionJobs(params: Comprehend.Types.ListSentimentDetectionJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListSentimentDetectionJobsResponse) => void): Request<Comprehend.Types.ListSentimentDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of sentiment detection jobs that you have submitted.
   */
  listSentimentDetectionJobs(callback?: (err: AWSError, data: Comprehend.Types.ListSentimentDetectionJobsResponse) => void): Request<Comprehend.Types.ListSentimentDetectionJobsResponse, AWSError>;
  /**
   * Lists all tags associated with a given Amazon Comprehend resource. 
   */
  listTagsForResource(params: Comprehend.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Comprehend.Types.ListTagsForResourceResponse) => void): Request<Comprehend.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all tags associated with a given Amazon Comprehend resource. 
   */
  listTagsForResource(callback?: (err: AWSError, data: Comprehend.Types.ListTagsForResourceResponse) => void): Request<Comprehend.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Gets a list of the topic detection jobs that you have submitted.
   */
  listTopicsDetectionJobs(params: Comprehend.Types.ListTopicsDetectionJobsRequest, callback?: (err: AWSError, data: Comprehend.Types.ListTopicsDetectionJobsResponse) => void): Request<Comprehend.Types.ListTopicsDetectionJobsResponse, AWSError>;
  /**
   * Gets a list of the topic detection jobs that you have submitted.
   */
  listTopicsDetectionJobs(callback?: (err: AWSError, data: Comprehend.Types.ListTopicsDetectionJobsResponse) => void): Request<Comprehend.Types.ListTopicsDetectionJobsResponse, AWSError>;
  /**
   * Starts an asynchronous document classification job. Use the operation to track the progress of the job.
   */
  startDocumentClassificationJob(params: Comprehend.Types.StartDocumentClassificationJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartDocumentClassificationJobResponse) => void): Request<Comprehend.Types.StartDocumentClassificationJobResponse, AWSError>;
  /**
   * Starts an asynchronous document classification job. Use the operation to track the progress of the job.
   */
  startDocumentClassificationJob(callback?: (err: AWSError, data: Comprehend.Types.StartDocumentClassificationJobResponse) => void): Request<Comprehend.Types.StartDocumentClassificationJobResponse, AWSError>;
  /**
   * Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
   */
  startDominantLanguageDetectionJob(params: Comprehend.Types.StartDominantLanguageDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.StartDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
   */
  startDominantLanguageDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StartDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.StartDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job. This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional EntityRecognizerArn must be used in order to provide access to the recognizer being used to detect the custom entity.
   */
  startEntitiesDetectionJob(params: Comprehend.Types.StartEntitiesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.StartEntitiesDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job. This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional EntityRecognizerArn must be used in order to provide access to the recognizer being used to detect the custom entity.
   */
  startEntitiesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StartEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.StartEntitiesDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
   */
  startKeyPhrasesDetectionJob(params: Comprehend.Types.StartKeyPhrasesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.StartKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
   */
  startKeyPhrasesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StartKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.StartKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous sentiment detection job for a collection of documents. use the operation to track the status of a job.
   */
  startSentimentDetectionJob(params: Comprehend.Types.StartSentimentDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartSentimentDetectionJobResponse) => void): Request<Comprehend.Types.StartSentimentDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous sentiment detection job for a collection of documents. use the operation to track the status of a job.
   */
  startSentimentDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StartSentimentDetectionJobResponse) => void): Request<Comprehend.Types.StartSentimentDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status of a job.
   */
  startTopicsDetectionJob(params: Comprehend.Types.StartTopicsDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StartTopicsDetectionJobResponse) => void): Request<Comprehend.Types.StartTopicsDetectionJobResponse, AWSError>;
  /**
   * Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status of a job.
   */
  startTopicsDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StartTopicsDetectionJobResponse) => void): Request<Comprehend.Types.StartTopicsDetectionJobResponse, AWSError>;
  /**
   * Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopDominantLanguageDetectionJob(params: Comprehend.Types.StopDominantLanguageDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StopDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.StopDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopDominantLanguageDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StopDominantLanguageDetectionJobResponse) => void): Request<Comprehend.Types.StopDominantLanguageDetectionJobResponse, AWSError>;
  /**
   * Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopEntitiesDetectionJob(params: Comprehend.Types.StopEntitiesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StopEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.StopEntitiesDetectionJobResponse, AWSError>;
  /**
   * Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopEntitiesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StopEntitiesDetectionJobResponse) => void): Request<Comprehend.Types.StopEntitiesDetectionJobResponse, AWSError>;
  /**
   * Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopKeyPhrasesDetectionJob(params: Comprehend.Types.StopKeyPhrasesDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StopKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.StopKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopKeyPhrasesDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StopKeyPhrasesDetectionJobResponse) => void): Request<Comprehend.Types.StopKeyPhrasesDetectionJobResponse, AWSError>;
  /**
   * Stops a sentiment detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopSentimentDetectionJob(params: Comprehend.Types.StopSentimentDetectionJobRequest, callback?: (err: AWSError, data: Comprehend.Types.StopSentimentDetectionJobResponse) => void): Request<Comprehend.Types.StopSentimentDetectionJobResponse, AWSError>;
  /**
   * Stops a sentiment detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location.
   */
  stopSentimentDetectionJob(callback?: (err: AWSError, data: Comprehend.Types.StopSentimentDetectionJobResponse) => void): Request<Comprehend.Types.StopSentimentDetectionJobResponse, AWSError>;
  /**
   * Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body. 
   */
  stopTrainingDocumentClassifier(params: Comprehend.Types.StopTrainingDocumentClassifierRequest, callback?: (err: AWSError, data: Comprehend.Types.StopTrainingDocumentClassifierResponse) => void): Request<Comprehend.Types.StopTrainingDocumentClassifierResponse, AWSError>;
  /**
   * Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body. 
   */
  stopTrainingDocumentClassifier(callback?: (err: AWSError, data: Comprehend.Types.StopTrainingDocumentClassifierResponse) => void): Request<Comprehend.Types.StopTrainingDocumentClassifierResponse, AWSError>;
  /**
   * Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.
   */
  stopTrainingEntityRecognizer(params: Comprehend.Types.StopTrainingEntityRecognizerRequest, callback?: (err: AWSError, data: Comprehend.Types.StopTrainingEntityRecognizerResponse) => void): Request<Comprehend.Types.StopTrainingEntityRecognizerResponse, AWSError>;
  /**
   * Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.
   */
  stopTrainingEntityRecognizer(callback?: (err: AWSError, data: Comprehend.Types.StopTrainingEntityRecognizerResponse) => void): Request<Comprehend.Types.StopTrainingEntityRecognizerResponse, AWSError>;
  /**
   * Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 
   */
  tagResource(params: Comprehend.Types.TagResourceRequest, callback?: (err: AWSError, data: Comprehend.Types.TagResourceResponse) => void): Request<Comprehend.Types.TagResourceResponse, AWSError>;
  /**
   * Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 
   */
  tagResource(callback?: (err: AWSError, data: Comprehend.Types.TagResourceResponse) => void): Request<Comprehend.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a specific tag associated with an Amazon Comprehend resource. 
   */
  untagResource(params: Comprehend.Types.UntagResourceRequest, callback?: (err: AWSError, data: Comprehend.Types.UntagResourceResponse) => void): Request<Comprehend.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a specific tag associated with an Amazon Comprehend resource. 
   */
  untagResource(callback?: (err: AWSError, data: Comprehend.Types.UntagResourceResponse) => void): Request<Comprehend.Types.UntagResourceResponse, AWSError>;
}
declare namespace Comprehend {
  export type AnyLengthString = string;
  export interface BatchDetectDominantLanguageItemResult {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * One or more DominantLanguage objects describing the dominant languages in the document.
     */
    Languages?: ListOfDominantLanguages;
  }
  export interface BatchDetectDominantLanguageRequest {
    /**
     * A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document should contain at least 20 characters and must contain fewer than 5,000 bytes of UTF-8 encoded characters.
     */
    TextList: StringList;
  }
  export interface BatchDetectDominantLanguageResponse {
    /**
     * A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
     */
    ResultList: ListOfDetectDominantLanguageResult;
    /**
     * A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
     */
    ErrorList: BatchItemErrorList;
  }
  export interface BatchDetectEntitiesItemResult {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * One or more Entity objects, one for each entity detected in the document.
     */
    Entities?: ListOfEntities;
  }
  export interface BatchDetectEntitiesRequest {
    /**
     * A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer than 5,000 bytes of UTF-8 encoded characters.
     */
    TextList: StringList;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface BatchDetectEntitiesResponse {
    /**
     * A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
     */
    ResultList: ListOfDetectEntitiesResult;
    /**
     * A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
     */
    ErrorList: BatchItemErrorList;
  }
  export interface BatchDetectKeyPhrasesItemResult {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * One or more KeyPhrase objects, one for each key phrase detected in the document.
     */
    KeyPhrases?: ListOfKeyPhrases;
  }
  export interface BatchDetectKeyPhrasesRequest {
    /**
     * A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    TextList: StringList;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface BatchDetectKeyPhrasesResponse {
    /**
     * A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
     */
    ResultList: ListOfDetectKeyPhrasesResult;
    /**
     * A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
     */
    ErrorList: BatchItemErrorList;
  }
  export interface BatchDetectSentimentItemResult {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * The sentiment detected in the document.
     */
    Sentiment?: SentimentType;
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of its sentiment detection.
     */
    SentimentScore?: SentimentScore;
  }
  export interface BatchDetectSentimentRequest {
    /**
     * A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    TextList: StringList;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface BatchDetectSentimentResponse {
    /**
     * A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
     */
    ResultList: ListOfDetectSentimentResult;
    /**
     * A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
     */
    ErrorList: BatchItemErrorList;
  }
  export interface BatchDetectSyntaxItemResult {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * The syntax tokens for the words in the document, one token for each word.
     */
    SyntaxTokens?: ListOfSyntaxTokens;
  }
  export interface BatchDetectSyntaxRequest {
    /**
     * A list containing the text of the input documents. The list can contain a maximum of 25 documents. Each document must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    TextList: StringList;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: SyntaxLanguageCode;
  }
  export interface BatchDetectSyntaxResponse {
    /**
     * A list of objects containing the results of the operation. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If all of the documents contain an error, the ResultList is empty.
     */
    ResultList: ListOfDetectSyntaxResult;
    /**
     * A list containing one object for each document that contained an error. The results are sorted in ascending order by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the ErrorList is empty.
     */
    ErrorList: BatchItemErrorList;
  }
  export interface BatchItemError {
    /**
     * The zero-based index of the document in the input list.
     */
    Index?: Integer;
    /**
     * The numeric error code of the error.
     */
    ErrorCode?: String;
    /**
     * A text description of the error.
     */
    ErrorMessage?: String;
  }
  export type BatchItemErrorList = BatchItemError[];
  export interface ClassifierEvaluationMetrics {
    /**
     * The fraction of the labels that were correct recognized. It is computed by dividing the number of labels in the test documents that were correctly recognized by the total number of labels in the test documents.
     */
    Accuracy?: Double;
    /**
     * A measure of the usefulness of the classifier results in the test data. High precision means that the classifier returned substantially more relevant results than irrelevant ones.
     */
    Precision?: Double;
    /**
     * A measure of how complete the classifier results are for the test data. High recall means that the classifier returned most of the relevant results. 
     */
    Recall?: Double;
    /**
     * A measure of how accurate the classifier results are for the test data. It is derived from the Precision and Recall values. The F1Score is the harmonic average of the two scores. The highest score is 1, and the worst score is 0. 
     */
    F1Score?: Double;
  }
  export interface ClassifierMetadata {
    /**
     * The number of labels in the input data. 
     */
    NumberOfLabels?: Integer;
    /**
     * The number of documents in the input data that were used to train the classifier. Typically this is 80 to 90 percent of the input documents.
     */
    NumberOfTrainedDocuments?: Integer;
    /**
     * The number of documents in the input data that were used to test the classifier. Typically this is 10 to 20 percent of the input documents.
     */
    NumberOfTestDocuments?: Integer;
    /**
     *  Describes the result metrics for the test data associated with an documentation classifier.
     */
    EvaluationMetrics?: ClassifierEvaluationMetrics;
  }
  export type ClientRequestTokenString = string;
  export type ComprehendArn = string;
  export type ComprehendArnName = string;
  export interface CreateDocumentClassifierRequest {
    /**
     * The name of the document classifier.
     */
    DocumentClassifierName: ComprehendArnName;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * Tags to be associated with the document classifier being created. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 
     */
    Tags?: TagList;
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: DocumentClassifierInputDataConfig;
    /**
     * Enables the addition of output results configuration parameters for custom classifier jobs.
     */
    OutputDataConfig?: DocumentClassifierOutputDataConfig;
    /**
     * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export interface CreateDocumentClassifierResponse {
    /**
     * The Amazon Resource Name (ARN) that identifies the document classifier.
     */
    DocumentClassifierArn?: DocumentClassifierArn;
  }
  export interface CreateEntityRecognizerRequest {
    /**
     * The name given to the newly created recognizer. Recognizer names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name must be unique in the account/region.
     */
    RecognizerName: ComprehendArnName;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * Tags to be associated with the entity recognizer being created. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 
     */
    Tags?: TagList;
    /**
     * Specifies the format and location of the input data. The S3 bucket containing the input data must be located in the same region as the entity recognizer being created. 
     */
    InputDataConfig: EntityRecognizerInputDataConfig;
    /**
     *  A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
    /**
     *  The language of the input documents. All documents must be in the same language. Only English ("en") is currently supported. 
     */
    LanguageCode: LanguageCode;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export interface CreateEntityRecognizerResponse {
    /**
     * The Amazon Resource Name (ARN) that identifies the entity recognizer.
     */
    EntityRecognizerArn?: EntityRecognizerArn;
  }
  export interface DeleteDocumentClassifierRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the document classifier. 
     */
    DocumentClassifierArn: DocumentClassifierArn;
  }
  export interface DeleteDocumentClassifierResponse {
  }
  export interface DeleteEntityRecognizerRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the entity recognizer.
     */
    EntityRecognizerArn: EntityRecognizerArn;
  }
  export interface DeleteEntityRecognizerResponse {
  }
  export interface DescribeDocumentClassificationJobRequest {
    /**
     * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeDocumentClassificationJobResponse {
    /**
     * An object that describes the properties associated with the document classification job.
     */
    DocumentClassificationJobProperties?: DocumentClassificationJobProperties;
  }
  export interface DescribeDocumentClassifierRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the document classifier. The operation returns this identifier in its response.
     */
    DocumentClassifierArn: DocumentClassifierArn;
  }
  export interface DescribeDocumentClassifierResponse {
    /**
     * An object that contains the properties associated with a document classifier.
     */
    DocumentClassifierProperties?: DocumentClassifierProperties;
  }
  export interface DescribeDominantLanguageDetectionJobRequest {
    /**
     * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeDominantLanguageDetectionJobResponse {
    /**
     * An object that contains the properties associated with a dominant language detection job.
     */
    DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
  }
  export interface DescribeEntitiesDetectionJobRequest {
    /**
     * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeEntitiesDetectionJobResponse {
    /**
     * An object that contains the properties associated with an entities detection job.
     */
    EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
  }
  export interface DescribeEntityRecognizerRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the entity recognizer.
     */
    EntityRecognizerArn: EntityRecognizerArn;
  }
  export interface DescribeEntityRecognizerResponse {
    /**
     * Describes information associated with an entity recognizer.
     */
    EntityRecognizerProperties?: EntityRecognizerProperties;
  }
  export interface DescribeKeyPhrasesDetectionJobRequest {
    /**
     * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeKeyPhrasesDetectionJobResponse {
    /**
     * An object that contains the properties associated with a key phrases detection job. 
     */
    KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
  }
  export interface DescribeSentimentDetectionJobRequest {
    /**
     * The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeSentimentDetectionJobResponse {
    /**
     * An object that contains the properties associated with a sentiment detection job.
     */
    SentimentDetectionJobProperties?: SentimentDetectionJobProperties;
  }
  export interface DescribeTopicsDetectionJobRequest {
    /**
     * The identifier assigned by the user to the detection job.
     */
    JobId: JobId;
  }
  export interface DescribeTopicsDetectionJobResponse {
    /**
     * The list of properties for the requested job.
     */
    TopicsDetectionJobProperties?: TopicsDetectionJobProperties;
  }
  export interface DetectDominantLanguageRequest {
    /**
     * A UTF-8 text string. Each string should contain at least 20 characters and must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    Text: String;
  }
  export interface DetectDominantLanguageResponse {
    /**
     * The languages that Amazon Comprehend detected in the input text. For each language, the response returns the RFC 5646 language code and the level of confidence that Amazon Comprehend has in the accuracy of its inference. For more information about RFC 5646, see Tags for Identifying Languages on the IETF Tools web site.
     */
    Languages?: ListOfDominantLanguages;
  }
  export interface DetectEntitiesRequest {
    /**
     * A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    Text: String;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface DetectEntitiesResponse {
    /**
     * A collection of entities identified in the input text. For each entity, the response provides the entity text, entity type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the detection. For a list of entity types, see how-entities. 
     */
    Entities?: ListOfEntities;
  }
  export interface DetectKeyPhrasesRequest {
    /**
     * A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    Text: String;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface DetectKeyPhrasesResponse {
    /**
     * A collection of key phrases that Amazon Comprehend identified in the input text. For each key phrase, the response provides the text of the key phrase, where the key phrase begins and ends, and the level of confidence that Amazon Comprehend has in the accuracy of the detection. 
     */
    KeyPhrases?: ListOfKeyPhrases;
  }
  export interface DetectSentimentRequest {
    /**
     * A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters.
     */
    Text: String;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
  }
  export interface DetectSentimentResponse {
    /**
     * The inferred sentiment that Amazon Comprehend has the highest level of confidence in.
     */
    Sentiment?: SentimentType;
    /**
     * An object that lists the sentiments, and their corresponding confidence levels.
     */
    SentimentScore?: SentimentScore;
  }
  export interface DetectSyntaxRequest {
    /**
     * A UTF-8 string. Each string must contain fewer that 5,000 bytes of UTF encoded characters.
     */
    Text: String;
    /**
     * The language code of the input documents. You can specify English ("en") or Spanish ("es").
     */
    LanguageCode: SyntaxLanguageCode;
  }
  export interface DetectSyntaxResponse {
    /**
     * A collection of syntax tokens describing the text. For each token, the response provides the text, the token type, where the text begins and ends, and the level of confidence that Amazon Comprehend has that the token is correct. For a list of token types, see how-syntax.
     */
    SyntaxTokens?: ListOfSyntaxTokens;
  }
  export interface DocumentClassificationJobFilter {
    /**
     * Filters on the name of the job.
     */
    JobName?: JobName;
    /**
     * Filters the list based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface DocumentClassificationJobProperties {
    /**
     * The identifier assigned to the document classification job.
     */
    JobId?: JobId;
    /**
     * The name that you assigned to the document classification job.
     */
    JobName?: JobName;
    /**
     * The current status of the document classification job. If the status is FAILED, the Message field shows the reason for the failure.
     */
    JobStatus?: JobStatus;
    /**
     * A description of the status of the job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the document classification job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the document classification job completed.
     */
    EndTime?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) that identifies the document classifier. 
     */
    DocumentClassifierArn?: DocumentClassifierArn;
    /**
     * The input data configuration that you supplied when you created the document classification job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration that you supplied when you created the document classification job.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     *  Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export type DocumentClassificationJobPropertiesList = DocumentClassificationJobProperties[];
  export type DocumentClassifierArn = string;
  export interface DocumentClassifierFilter {
    /**
     * Filters the list of classifiers based on status. 
     */
    Status?: ModelStatus;
    /**
     * Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only classifiers submitted before the specified time. Classifiers are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only classifiers submitted after the specified time. Classifiers are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface DocumentClassifierInputDataConfig {
    /**
     * The Amazon S3 URI for the input data. The S3 bucket must be in the same region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of input files. For example, if you use the URI S3://bucketName/prefix, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.
     */
    S3Uri: S3Uri;
  }
  export interface DocumentClassifierOutputDataConfig {
    /**
     * When you use the OutputDataConfig object while creating a custom classifier, you specify the Amazon S3 location where you want to write the confusion matrix. The URI must be in the same region as the API endpoint that you are calling. The location is used as the prefix for the actual location of this output file. When the custom classifier job is finished, the service creates the output file in a directory specific to the job. The S3Uri field contains the location of the output file, called output.tar.gz. It is a compressed archive that contains the confusion matrix.
     */
    S3Uri?: S3Uri;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job. The KmsKeyId can be one of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"    KMS Key Alias: "alias/ExampleAlias"    ARN of a KMS Key Alias: "arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"   
     */
    KmsKeyId?: KmsKeyId;
  }
  export interface DocumentClassifierProperties {
    /**
     * The Amazon Resource Name (ARN) that identifies the document classifier.
     */
    DocumentClassifierArn?: DocumentClassifierArn;
    /**
     * The language code for the language of the documents that the classifier was trained on.
     */
    LanguageCode?: LanguageCode;
    /**
     * The status of the document classifier. If the status is TRAINED the classifier is ready to use. If the status is FAILED you can see additional information about why the classifier wasn't trained in the Message field.
     */
    Status?: ModelStatus;
    /**
     * Additional information about the status of the classifier.
     */
    Message?: AnyLengthString;
    /**
     * The time that the document classifier was submitted for training.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that training the document classifier completed.
     */
    EndTime?: Timestamp;
    /**
     * Indicates the time when the training starts on documentation classifiers. You are billed for the time interval between this time and the value of TrainingEndTime. 
     */
    TrainingStartTime?: Timestamp;
    /**
     * The time that training of the document classifier was completed. Indicates the time when the training completes on documentation classifiers. You are billed for the time interval between this time and the value of TrainingStartTime.
     */
    TrainingEndTime?: Timestamp;
    /**
     * The input data configuration that you supplied when you created the document classifier for training.
     */
    InputDataConfig?: DocumentClassifierInputDataConfig;
    /**
     *  Provides output results configuration parameters for custom classifier jobs.
     */
    OutputDataConfig?: DocumentClassifierOutputDataConfig;
    /**
     * Information about the document classifier, including the number of documents used for training the classifier, the number of documents used for test the classifier, and an accuracy rating.
     */
    ClassifierMetadata?: ClassifierMetadata;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     *  Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export type DocumentClassifierPropertiesList = DocumentClassifierProperties[];
  export interface DominantLanguage {
    /**
     * The RFC 5646 language code for the dominant language. For more information about RFC 5646, see Tags for Identifying Languages on the IETF Tools web site.
     */
    LanguageCode?: String;
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
     */
    Score?: Float;
  }
  export interface DominantLanguageDetectionJobFilter {
    /**
     * Filters on the name of the job.
     */
    JobName?: JobName;
    /**
     * Filters the list of jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface DominantLanguageDetectionJobProperties {
    /**
     * The identifier assigned to the dominant language detection job.
     */
    JobId?: JobId;
    /**
     * The name that you assigned to the dominant language detection job.
     */
    JobName?: JobName;
    /**
     * The current status of the dominant language detection job. If the status is FAILED, the Message field shows the reason for the failure.
     */
    JobStatus?: JobStatus;
    /**
     * A description for the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the dominant language detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the dominant language detection job completed.
     */
    EndTime?: Timestamp;
    /**
     * The input data configuration that you supplied when you created the dominant language detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration that you supplied when you created the dominant language detection job.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     *  Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your dominant language detection job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export type DominantLanguageDetectionJobPropertiesList = DominantLanguageDetectionJobProperties[];
  export type Double = number;
  export interface EntitiesDetectionJobFilter {
    /**
     * Filters on the name of the job.
     */
    JobName?: JobName;
    /**
     * Filters the list of jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface EntitiesDetectionJobProperties {
    /**
     * The identifier assigned to the entities detection job.
     */
    JobId?: JobId;
    /**
     * The name that you assigned the entities detection job.
     */
    JobName?: JobName;
    /**
     * The current status of the entities detection job. If the status is FAILED, the Message field shows the reason for the failure.
     */
    JobStatus?: JobStatus;
    /**
     * A description of the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the entities detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the entities detection job completed
     */
    EndTime?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) that identifies the entity recognizer.
     */
    EntityRecognizerArn?: EntityRecognizerArn;
    /**
     * The input data configuration that you supplied when you created the entities detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration that you supplied when you created the entities detection job. 
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The language code of the input documents.
     */
    LanguageCode?: LanguageCode;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     *  Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export type EntitiesDetectionJobPropertiesList = EntitiesDetectionJobProperties[];
  export interface Entity {
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
     */
    Score?: Float;
    /**
     * The entity's type.
     */
    Type?: EntityType;
    /**
     * The text of the entity.
     */
    Text?: String;
    /**
     * A character offset in the input text that shows where the entity begins (the first character is at position 0). The offset returns the position of each UTF-8 code point in the string. A code point is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.
     */
    BeginOffset?: Integer;
    /**
     * A character offset in the input text that shows where the entity ends. The offset returns the position of each UTF-8 code point in the string. A code point is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point. 
     */
    EndOffset?: Integer;
  }
  export interface EntityRecognizerAnnotations {
    /**
     *  Specifies the Amazon S3 location where the annotations for an entity recognizer are located. The URI must be in the same region as the API endpoint that you are calling.
     */
    S3Uri: S3Uri;
  }
  export type EntityRecognizerArn = string;
  export interface EntityRecognizerDocuments {
    /**
     *  Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The URI must be in the same region as the API endpoint that you are calling.
     */
    S3Uri: S3Uri;
  }
  export interface EntityRecognizerEntityList {
    /**
     * Specifies the Amazon S3 location where the entity list is located. The URI must be in the same region as the API endpoint that you are calling.
     */
    S3Uri: S3Uri;
  }
  export interface EntityRecognizerEvaluationMetrics {
    /**
     * A measure of the usefulness of the recognizer results in the test data. High precision means that the recognizer returned substantially more relevant results than irrelevant ones. 
     */
    Precision?: Double;
    /**
     * A measure of how complete the recognizer results are for the test data. High recall means that the recognizer returned most of the relevant results.
     */
    Recall?: Double;
    /**
     * A measure of how accurate the recognizer results are for the test data. It is derived from the Precision and Recall values. The F1Score is the harmonic average of the two scores. The highest score is 1, and the worst score is 0. 
     */
    F1Score?: Double;
  }
  export interface EntityRecognizerFilter {
    /**
     * The status of an entity recognizer.
     */
    Status?: ModelStatus;
    /**
     * Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface EntityRecognizerInputDataConfig {
    /**
     * The entity types in the input data for an entity recognizer.
     */
    EntityTypes: EntityTypesList;
    /**
     * S3 location of the documents folder for an entity recognizer
     */
    Documents: EntityRecognizerDocuments;
    /**
     * S3 location of the annotations file for an entity recognizer.
     */
    Annotations?: EntityRecognizerAnnotations;
    /**
     * S3 location of the entity list for an entity recognizer.
     */
    EntityList?: EntityRecognizerEntityList;
  }
  export interface EntityRecognizerMetadata {
    /**
     *  The number of documents in the input data that were used to train the entity recognizer. Typically this is 80 to 90 percent of the input documents.
     */
    NumberOfTrainedDocuments?: Integer;
    /**
     *  The number of documents in the input data that were used to test the entity recognizer. Typically this is 10 to 20 percent of the input documents.
     */
    NumberOfTestDocuments?: Integer;
    /**
     *  Detailed information about the accuracy of an entity recognizer.
     */
    EvaluationMetrics?: EntityRecognizerEvaluationMetrics;
    /**
     * Entity types from the metadata of an entity recognizer.
     */
    EntityTypes?: EntityRecognizerMetadataEntityTypesList;
  }
  export type EntityRecognizerMetadataEntityTypesList = EntityRecognizerMetadataEntityTypesListItem[];
  export interface EntityRecognizerMetadataEntityTypesListItem {
    /**
     * Type of entity from the list of entity types in the metadata of an entity recognizer. 
     */
    Type?: AnyLengthString;
  }
  export interface EntityRecognizerProperties {
    /**
     * The Amazon Resource Name (ARN) that identifies the entity recognizer.
     */
    EntityRecognizerArn?: EntityRecognizerArn;
    /**
     *  The language of the input documents. All documents must be in the same language. Only English ("en") is currently supported.
     */
    LanguageCode?: LanguageCode;
    /**
     * Provides the status of the entity recognizer.
     */
    Status?: ModelStatus;
    /**
     *  A description of the status of the recognizer.
     */
    Message?: AnyLengthString;
    /**
     * The time that the recognizer was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the recognizer creation completed.
     */
    EndTime?: Timestamp;
    /**
     * The time that training of the entity recognizer started.
     */
    TrainingStartTime?: Timestamp;
    /**
     * The time that training of the entity recognizer was completed.
     */
    TrainingEndTime?: Timestamp;
    /**
     * The input data properties of an entity recognizer.
     */
    InputDataConfig?: EntityRecognizerInputDataConfig;
    /**
     *  Provides information about an entity recognizer.
     */
    RecognizerMetadata?: EntityRecognizerMetadata;
    /**
     *  The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     *  Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export type EntityRecognizerPropertiesList = EntityRecognizerProperties[];
  export type EntityType = "PERSON"|"LOCATION"|"ORGANIZATION"|"COMMERCIAL_ITEM"|"EVENT"|"DATE"|"QUANTITY"|"TITLE"|"OTHER"|string;
  export type EntityTypeName = string;
  export type EntityTypesList = EntityTypesListItem[];
  export interface EntityTypesListItem {
    /**
     * Entity type of an item on an entity type list.
     */
    Type: EntityTypeName;
  }
  export type Float = number;
  export type IamRoleArn = string;
  export interface InputDataConfig {
    /**
     * The Amazon S3 URI for the input data. The URI must be in same region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of data files.  For example, if you use the URI S3://bucketName/prefix, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.
     */
    S3Uri: S3Uri;
    /**
     * Specifies how the text in an input file should be processed:    ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers.    ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.  
     */
    InputFormat?: InputFormat;
  }
  export type InputFormat = "ONE_DOC_PER_FILE"|"ONE_DOC_PER_LINE"|string;
  export type Integer = number;
  export type JobId = string;
  export type JobName = string;
  export type JobStatus = "SUBMITTED"|"IN_PROGRESS"|"COMPLETED"|"FAILED"|"STOP_REQUESTED"|"STOPPED"|string;
  export interface KeyPhrase {
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of the detection.
     */
    Score?: Float;
    /**
     * The text of a key noun phrase.
     */
    Text?: String;
    /**
     * A character offset in the input text that shows where the key phrase begins (the first character is at position 0). The offset returns the position of each UTF-8 code point in the string. A code point is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.
     */
    BeginOffset?: Integer;
    /**
     * A character offset in the input text where the key phrase ends. The offset returns the position of each UTF-8 code point in the string. A code point is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.
     */
    EndOffset?: Integer;
  }
  export interface KeyPhrasesDetectionJobFilter {
    /**
     * Filters on the name of the job.
     */
    JobName?: JobName;
    /**
     * Filters the list of jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface KeyPhrasesDetectionJobProperties {
    /**
     * The identifier assigned to the key phrases detection job.
     */
    JobId?: JobId;
    /**
     * The name that you assigned the key phrases detection job.
     */
    JobName?: JobName;
    /**
     * The current status of the key phrases detection job. If the status is FAILED, the Message field shows the reason for the failure.
     */
    JobStatus?: JobStatus;
    /**
     * A description of the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the key phrases detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the key phrases detection job completed.
     */
    EndTime?: Timestamp;
    /**
     * The input data configuration that you supplied when you created the key phrases detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration that you supplied when you created the key phrases detection job.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The language code of the input documents.
     */
    LanguageCode?: LanguageCode;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     *  Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your key phrases detection job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export type KeyPhrasesDetectionJobPropertiesList = KeyPhrasesDetectionJobProperties[];
  export type KmsKeyId = string;
  export type LanguageCode = "en"|"es"|"fr"|"de"|"it"|"pt"|string;
  export interface ListDocumentClassificationJobsRequest {
    /**
     * Filters the jobs that are returned. You can filter jobs on their names, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: DocumentClassificationJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListDocumentClassificationJobsResponse {
    /**
     * A list containing the properties of each job returned.
     */
    DocumentClassificationJobPropertiesList?: DocumentClassificationJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export interface ListDocumentClassifiersRequest {
    /**
     * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: DocumentClassifierFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListDocumentClassifiersResponse {
    /**
     * A list containing the properties of each job returned.
     */
    DocumentClassifierPropertiesList?: DocumentClassifierPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export interface ListDominantLanguageDetectionJobsRequest {
    /**
     * Filters that jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: DominantLanguageDetectionJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListDominantLanguageDetectionJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    DominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export interface ListEntitiesDetectionJobsRequest {
    /**
     * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: EntitiesDetectionJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListEntitiesDetectionJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    EntitiesDetectionJobPropertiesList?: EntitiesDetectionJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export interface ListEntityRecognizersRequest {
    /**
     * Filters the list of entities returned. You can filter on Status, SubmitTimeBefore, or SubmitTimeAfter. You can only set one filter at a time.
     */
    Filter?: EntityRecognizerFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     *  The maximum number of results to return on each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListEntityRecognizersResponse {
    /**
     * The list of properties of an entity recognizer.
     */
    EntityRecognizerPropertiesList?: EntityRecognizerPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export interface ListKeyPhrasesDetectionJobsRequest {
    /**
     * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: KeyPhrasesDetectionJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListKeyPhrasesDetectionJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    KeyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export type ListOfDetectDominantLanguageResult = BatchDetectDominantLanguageItemResult[];
  export type ListOfDetectEntitiesResult = BatchDetectEntitiesItemResult[];
  export type ListOfDetectKeyPhrasesResult = BatchDetectKeyPhrasesItemResult[];
  export type ListOfDetectSentimentResult = BatchDetectSentimentItemResult[];
  export type ListOfDetectSyntaxResult = BatchDetectSyntaxItemResult[];
  export type ListOfDominantLanguages = DominantLanguage[];
  export type ListOfEntities = Entity[];
  export type ListOfKeyPhrases = KeyPhrase[];
  export type ListOfSyntaxTokens = SyntaxToken[];
  export interface ListSentimentDetectionJobsRequest {
    /**
     * Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.
     */
    Filter?: SentimentDetectionJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListSentimentDetectionJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    SentimentDetectionJobPropertiesList?: SentimentDetectionJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying. 
     */
    ResourceArn: ComprehendArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying.
     */
    ResourceArn?: ComprehendArn;
    /**
     * Tags associated with the Amazon Comprehend resource being queried. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 
     */
    Tags?: TagList;
  }
  export interface ListTopicsDetectionJobsRequest {
    /**
     * Filters the jobs that are returned. Jobs can be filtered on their name, status, or the date and time that they were submitted. You can set only one filter at a time.
     */
    Filter?: TopicsDetectionJobFilter;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in each page. The default is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListTopicsDetectionJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    TopicsDetectionJobPropertiesList?: TopicsDetectionJobPropertiesList;
    /**
     * Identifies the next page of results to return.
     */
    NextToken?: String;
  }
  export type MaxResultsInteger = number;
  export type ModelStatus = "SUBMITTED"|"TRAINING"|"DELETING"|"STOP_REQUESTED"|"STOPPED"|"IN_ERROR"|"TRAINED"|string;
  export type NumberOfTopicsInteger = number;
  export interface OutputDataConfig {
    /**
     * When you use the OutputDataConfig object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data. The URI must be in the same region as the API endpoint that you are calling. The location is used as the prefix for the actual location of the output file. When the topic detection job is finished, the service creates an output file in a directory specific to the job. The S3Uri field contains the location of the output file, called output.tar.gz. It is a compressed archive that contains the ouput of the operation.
     */
    S3Uri: S3Uri;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job. The KmsKeyId can be one of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"    KMS Key Alias: "alias/ExampleAlias"    ARN of a KMS Key Alias: "arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"   
     */
    KmsKeyId?: KmsKeyId;
  }
  export interface PartOfSpeechTag {
    /**
     * Identifies the part of speech that the token represents.
     */
    Tag?: PartOfSpeechTagType;
    /**
     * The confidence that Amazon Comprehend has that the part of speech was correctly identified.
     */
    Score?: Float;
  }
  export type PartOfSpeechTagType = "ADJ"|"ADP"|"ADV"|"AUX"|"CONJ"|"CCONJ"|"DET"|"INTJ"|"NOUN"|"NUM"|"O"|"PART"|"PRON"|"PROPN"|"PUNCT"|"SCONJ"|"SYM"|"VERB"|string;
  export type S3Uri = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export interface SentimentDetectionJobFilter {
    /**
     * Filters on the name of the job.
     */
    JobName?: JobName;
    /**
     * Filters the list of jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface SentimentDetectionJobProperties {
    /**
     * The identifier assigned to the sentiment detection job.
     */
    JobId?: JobId;
    /**
     * The name that you assigned to the sentiment detection job
     */
    JobName?: JobName;
    /**
     * The current status of the sentiment detection job. If the status is FAILED, the Messages field shows the reason for the failure.
     */
    JobStatus?: JobStatus;
    /**
     * A description of the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the sentiment detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the sentiment detection job ended.
     */
    EndTime?: Timestamp;
    /**
     * The input data configuration that you supplied when you created the sentiment detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration that you supplied when you created the sentiment detection job.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The language code of the input documents.
     */
    LanguageCode?: LanguageCode;
    /**
     * The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn?: IamRoleArn;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     *  Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your sentiment detection job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export type SentimentDetectionJobPropertiesList = SentimentDetectionJobProperties[];
  export interface SentimentScore {
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the POSITIVE sentiment.
     */
    Positive?: Float;
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEGATIVE sentiment.
     */
    Negative?: Float;
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEUTRAL sentiment.
     */
    Neutral?: Float;
    /**
     * The level of confidence that Amazon Comprehend has in the accuracy of its detection of the MIXED sentiment.
     */
    Mixed?: Float;
  }
  export type SentimentType = "POSITIVE"|"NEGATIVE"|"NEUTRAL"|"MIXED"|string;
  export interface StartDocumentClassificationJobRequest {
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * The Amazon Resource Name (ARN) of the document classifier to use to process the job.
     */
    DocumentClassifierArn: DocumentClassifierArn;
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export interface StartDocumentClassificationJobResponse {
    /**
     * The identifier generated for the job. To get the status of the job, use this identifier with the operation.
     */
    JobId?: JobId;
    /**
     * The status of the job:   SUBMITTED - The job has been received and queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. For details, use the operation.   STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request.   STOPPED - The job was successfully stopped without completing.  
     */
    JobStatus?: JobStatus;
  }
  export interface StartDominantLanguageDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * An identifier for the job.
     */
    JobName?: JobName;
    /**
     * A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your dominant language detection job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export interface StartDominantLanguageDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of a job, use this identifier with the operation.
     */
    JobId?: JobId;
    /**
     * The status of the job.    SUBMITTED - The job has been received and is queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. To get details, use the operation.  
     */
    JobStatus?: JobStatus;
  }
  export interface StartEntitiesDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used by the StartEntitiesDetectionJob. This ARN is optional and is only used for a custom entity recognition job.
     */
    EntityRecognizerArn?: EntityRecognizerArn;
    /**
     * The language of the input documents. All documents must be in the same language. You can specify any of the languages supported by Amazon Comprehend: English ("en"), Spanish ("es"), French ("fr"), German ("de"), Italian ("it"), or Portuguese ("pt"). If custom entities recognition is used, this parameter is ignored and the language used for training the model is used instead.
     */
    LanguageCode: LanguageCode;
    /**
     * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export interface StartEntitiesDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of job, use this identifier with the operation.
     */
    JobId?: JobId;
    /**
     * The status of the job.    SUBMITTED - The job has been received and is queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. To get details, use the operation.   STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request.   STOPPED - The job was successfully stopped without completing.  
     */
    JobStatus?: JobStatus;
  }
  export interface StartKeyPhrasesDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files.
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
    /**
     * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     *  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your key phrases detection job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export interface StartKeyPhrasesDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of a job, use this identifier with the operation.
     */
    JobId?: JobId;
    /**
     * The status of the job.    SUBMITTED - The job has been received and is queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. To get details, use the operation.  
     */
    JobStatus?: JobStatus;
  }
  export interface StartSentimentDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files. 
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * The language of the input documents. You can specify English ("en") or Spanish ("es"). All documents must be in the same language.
     */
    LanguageCode: LanguageCode;
    /**
     * A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your sentiment detection job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export interface StartSentimentDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of a job, use this identifier with the operation.
     */
    JobId?: JobId;
    /**
     * The status of the job.    SUBMITTED - The job has been received and is queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. To get details, use the operation.  
     */
    JobStatus?: JobStatus;
  }
  export interface StartTopicsDetectionJobRequest {
    /**
     * Specifies the format and location of the input data for the job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies where to send the output files. The output is a compressed archive with two files, topic-terms.csv that lists the terms associated with each topic, and doc-topics.csv that lists the documents associated with each topic
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data. For more information, see https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The identifier of the job.
     */
    JobName?: JobName;
    /**
     * The number of topics to detect.
     */
    NumberOfTopics?: NumberOfTopicsInteger;
    /**
     * A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.
     */
    ClientRequestToken?: ClientRequestTokenString;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export interface StartTopicsDetectionJobResponse {
    /**
     * The identifier generated for the job. To get the status of the job, use this identifier with the DescribeTopicDetectionJob operation.
     */
    JobId?: JobId;
    /**
     * The status of the job:    SUBMITTED - The job has been received and is queued for processing.   IN_PROGRESS - Amazon Comprehend is processing the job.   COMPLETED - The job was successfully completed and the output is available.   FAILED - The job did not complete. To get details, use the DescribeTopicDetectionJob operation.  
     */
    JobStatus?: JobStatus;
  }
  export interface StopDominantLanguageDetectionJobRequest {
    /**
     * The identifier of the dominant language detection job to stop.
     */
    JobId: JobId;
  }
  export interface StopDominantLanguageDetectionJobResponse {
    /**
     * The identifier of the dominant language detection job to stop.
     */
    JobId?: JobId;
    /**
     * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the StopDominantLanguageDetectionJob operation.
     */
    JobStatus?: JobStatus;
  }
  export interface StopEntitiesDetectionJobRequest {
    /**
     * The identifier of the entities detection job to stop.
     */
    JobId: JobId;
  }
  export interface StopEntitiesDetectionJobResponse {
    /**
     * The identifier of the entities detection job to stop.
     */
    JobId?: JobId;
    /**
     * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the StopEntitiesDetectionJob operation.
     */
    JobStatus?: JobStatus;
  }
  export interface StopKeyPhrasesDetectionJobRequest {
    /**
     * The identifier of the key phrases detection job to stop.
     */
    JobId: JobId;
  }
  export interface StopKeyPhrasesDetectionJobResponse {
    /**
     * The identifier of the key phrases detection job to stop.
     */
    JobId?: JobId;
    /**
     * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the StopKeyPhrasesDetectionJob operation.
     */
    JobStatus?: JobStatus;
  }
  export interface StopSentimentDetectionJobRequest {
    /**
     * The identifier of the sentiment detection job to stop.
     */
    JobId: JobId;
  }
  export interface StopSentimentDetectionJobResponse {
    /**
     * The identifier of the sentiment detection job to stop.
     */
    JobId?: JobId;
    /**
     * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the StopSentimentDetectionJob operation.
     */
    JobStatus?: JobStatus;
  }
  export interface StopTrainingDocumentClassifierRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the document classifier currently being trained.
     */
    DocumentClassifierArn: DocumentClassifierArn;
  }
  export interface StopTrainingDocumentClassifierResponse {
  }
  export interface StopTrainingEntityRecognizerRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the entity recognizer currently being trained.
     */
    EntityRecognizerArn: EntityRecognizerArn;
  }
  export interface StopTrainingEntityRecognizerResponse {
  }
  export type String = string;
  export type StringList = String[];
  export type SubnetId = string;
  export type Subnets = SubnetId[];
  export type SyntaxLanguageCode = "en"|"es"|"fr"|"de"|"it"|"pt"|string;
  export interface SyntaxToken {
    /**
     * A unique identifier for a token.
     */
    TokenId?: Integer;
    /**
     * The word that was recognized in the source text.
     */
    Text?: String;
    /**
     * The zero-based offset from the beginning of the source text to the first character in the word.
     */
    BeginOffset?: Integer;
    /**
     * The zero-based offset from the beginning of the source text to the last character in the word.
     */
    EndOffset?: Integer;
    /**
     * Provides the part of speech label and the confidence level that Amazon Comprehend has that the part of speech was correctly identified. For more information, see how-syntax.
     */
    PartOfSpeech?: PartOfSpeechTag;
  }
  export interface Tag {
    /**
     * The initial part of a key-value pair that forms a tag associated with a given resource. For instance, if you want to show which resources are used by which departments, you might use “Department” as the key portion of the pair, with multiple possible values such as “sales,” “legal,” and “administration.” 
     */
    Key: TagKey;
    /**
     *  The second part of a key-value pair that forms a tag associated with a given resource. For instance, if you want to show which resources are used by which departments, you might use “Department” as the initial (key) portion of the pair, with a value of “sales” to indicate the sales department. 
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want to associate the tags. 
     */
    ResourceArn: ComprehendArn;
    /**
     * Tags being associated with a specific Amazon Comprehend resource. There can be a maximum of 50 tags (both existing and pending) associated with a specific resource. 
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export interface TopicsDetectionJobFilter {
    /**
     * 
     */
    JobName?: JobName;
    /**
     * Filters the list of topic detection jobs based on job status. Returns only jobs with the specified status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmitTimeBefore?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmitTimeAfter?: Timestamp;
  }
  export interface TopicsDetectionJobProperties {
    /**
     * The identifier assigned to the topic detection job.
     */
    JobId?: JobId;
    /**
     * The name of the topic detection job.
     */
    JobName?: JobName;
    /**
     * The current status of the topic detection job. If the status is Failed, the reason for the failure is shown in the Message field.
     */
    JobStatus?: JobStatus;
    /**
     * A description for the status of a job.
     */
    Message?: AnyLengthString;
    /**
     * The time that the topic detection job was submitted for processing.
     */
    SubmitTime?: Timestamp;
    /**
     * The time that the topic detection job was completed.
     */
    EndTime?: Timestamp;
    /**
     * The input data configuration supplied when you created the topic detection job.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output data configuration supplied when you created the topic detection job.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The number of topics to detect supplied when you created the topic detection job. The default is 10. 
     */
    NumberOfTopics?: Integer;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your job data. 
     */
    DataAccessRoleArn?: IamRoleArn;
    /**
     * ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"   
     */
    VolumeKmsKeyId?: KmsKeyId;
    /**
     * Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job. For more information, see Amazon VPC. 
     */
    VpcConfig?: VpcConfig;
  }
  export type TopicsDetectionJobPropertiesList = TopicsDetectionJobProperties[];
  export interface UntagResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you want to remove the tags. 
     */
    ResourceArn: ComprehendArn;
    /**
     * The initial part of a key-value pair that forms a tag being removed from a given resource. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. Keys must be unique and cannot be duplicated for a particular resource. 
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface VpcConfig {
    /**
     * The ID number for a security group on an instance of your private VPC. Security groups on your VPC function serve as a virtual firewall to control inbound and outbound traffic and provides security for the resources that you’ll be accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see Security Groups for your VPC. 
     */
    SecurityGroupIds: SecurityGroupIds;
    /**
     * The ID for each subnet being used in your private VPC. This subnet is a subset of the a range of IPv4 addresses used by the VPC and is specific to a given availability zone in the VPC’s region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055". For more information, see VPCs and Subnets. 
     */
    Subnets: Subnets;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-11-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Comprehend client.
   */
  export import Types = Comprehend;
}
export = Comprehend;
