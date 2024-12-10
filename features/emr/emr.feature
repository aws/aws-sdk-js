# language: en
@emr
Feature: Amazon Elastic MapReduce

  I want to use Amazon Elastic MapReduce

   Scenario: Making a request
    Given I run the "listClusters" operation
    Then the request should be successful
    And the value at "Clusters" should be a list

  Scenario: Error handling
    Given I run an EMR job flow with invalid parameters
    Then the error code should be "ValidationException"
