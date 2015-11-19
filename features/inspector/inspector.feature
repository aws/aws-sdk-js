# language: en
@inspector
Feature: 

  I want to use Amazon Inspector

  Scenario: Making a request
    Given I run the "listApplications" operation
    Then the request should be successful
    And the value at "applicationArnList" should be a list

  Scenario: Error handling
    Given I run the "describeApplication" operation with params:
    """
    { "applicationArn": "fake_arn" }
    """
    Then the error code should be "InvalidInputException"
