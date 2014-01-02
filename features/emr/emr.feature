# language: en
@emr
Feature: Amazon Elastic MapReduce

  I want to use Amazon Elastic MapReduce

  Scenario: Running a job flow
    Given I run an EMR job flow with name prefix "aws-sdk-js-integration"
    Then I should store the job flow ID
    And when I describe the EMR job flows
    Then the list should contain the job flow ID
    And I terminate the job flow

  Scenario: Error handling
    Given I run an EMR job flow with invalid parameters
    Then the error code should be "ValidationException"
