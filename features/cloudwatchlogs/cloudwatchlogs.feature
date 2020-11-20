# language: en
@cloudwatchlogs
Feature: 

  I want to use Amazon CloudWatch Logs

  Scenario: Log Groups
    Given I create a CloudWatch logGroup with prefix "aws-js-sdk"
    Then I delete the CloudWatch logGroup

  Scenario: Error handling
    Given I create a CloudWatch logGroup with prefix ""
    Then the error code should be "InvalidParameterException"
