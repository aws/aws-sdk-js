# language: en
@codepipeline
Feature: AWS CodePipeline

  I want to use AWS CodePipeline

  Scenario: Listing repositories
    Given I run the "listPipelines" operation
    Then the request should be successful
    And the value at "pipelines" should be a list

  Scenario: Error handling
    Given I run the "getPipeline" operation with params:
    """
    { "name": "fake-pipeline" }
    """
    Then the error code should be "PipelineNotFoundException"
