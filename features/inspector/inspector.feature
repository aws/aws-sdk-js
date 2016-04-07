# language: en
@inspector
Feature: 

  I want to use Amazon Inspector

  Scenario: Making a request
    Given I run the "listRulesPackages" operation
    Then the request should be successful
    And the value at "rulesPackageArns" should be a list

  Scenario: Error handling
    Given I run the "stopAssessmentRun" operation with params:
    """
    { "assessmentRunArn": "fake_arn" }
    """
    Then the error code should be "InvalidInputException"
