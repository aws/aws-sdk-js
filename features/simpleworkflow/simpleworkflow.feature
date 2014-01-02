# language: en
@simpleworkflow
Feature: Amazon Simple Workflow Service

  I want to use Amazon Simple Workflow Service

  Scenario: Domains
    Given I register a SimpleWorkFlow domain with prefix "aws-js-sdk-integration"
    And I list SimpleWorkFlow domains with status "REGISTERED"
    Then the SimpleWorkFlow domain should be in the list
    And I delete the SimpleWorkFlow domain

  Scenario: Error handling
    Given I try to create a SimpleWorkFlowDomain with an empty name
    Then the error code should be "ValidationException"
