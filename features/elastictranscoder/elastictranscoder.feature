# language: en
@elastictranscoder
Feature: Elastic Transcoder

  I want to use Amazon Elastic Transcoder

  @pipelines
  Scenario: Pipeline CRUD
    Given I create an IAM role with name prefix "aws-sdk-js"
    And I create a bucket
    And I create an Elastic Transcoder pipeline with name prefix "aws-sdk-js"
    And I list pipelines
    Then the list should contain the pipeline
    And I pause the pipeline
    And I read the pipeline
    Then the pipeline status should be "Paused"
    And I delete the pipeline
    And I delete the bucket
    And I delete the IAM role

  @error
  Scenario: Error handling
    Given I create an Elastic Transcoder pipeline with name prefix ""
    Then the error code should be "ValidationException"
