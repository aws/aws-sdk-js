# language: en
@machinelearning
Feature: Amazon Machine Learning

  I want to use Amazon Machine Learning

  Scenario: Describing MLModels 
    Given I run the "describeMLModels" operation
    Then the request should be successful
    And the value at "Results" should be a list

  Scenario: Error handling
    Given I run the "getBatchPrediction" operation with params:
    """
    { "BatchPredictionId": "non-exist" }
    """
    Then the error code should be "ResourceNotFoundException"
