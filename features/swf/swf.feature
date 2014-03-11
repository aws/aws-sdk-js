# language: en
@swf
Feature: Amazon Simple Workflow Service

  I want to use Amazon Simple Workflow Service

  Scenario: Domains
    Given I register a SWF domain with prefix "aws-js-sdk-integration"
    And I list SWF domains with status "REGISTERED"
    Then the SWF domain should be in the list
    And I delete the SWF domain

  Scenario: Error handling
    Given I try to create a SWF domain with an empty name
    Then the error code should be "ValidationException"
