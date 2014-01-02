# language: en
@datapipeline
Feature: AWS Data Pipeline

  I want to use AWS Data Pipeline

  Scenario: Managing pipelines
    Given I create a Data Pipeline with name prefix "aws-sdk-js"
    Then the response should contain the pipeline ID
    When I describe the Data Pipelines
    Then the pipeline should be in the list
    And I put a Data Pipeline definition
    And I get the Data Pipeline definition
    And the the objects should be in the Data Pipeline definition
    And I delete the Data Pipeline

  Scenario: Error handling
    Given I create a Data Pipeline with name prefix ""
    Then the error code should be "ValidationException"
    And the error message should match:
    """
    Member must have length greater than or equal to 1
    """
