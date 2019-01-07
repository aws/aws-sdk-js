# language: en
@datapipeline
Feature: AWS Data Pipeline

  I want to use AWS Data Pipeline

  Scenario: Listing pipelines
    Given I run the "listPipelines" operation
    Then the request should be successful
    And the value at "pipelineIdList" should be a list

  Scenario: Error handling
    Given I create a Data Pipeline with name prefix ""
    Then the error code should be "ValidationException"
    And the error message should match:
    """
    Member must have length greater than or equal to 1
    """
