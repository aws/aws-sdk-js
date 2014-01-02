# language: en
@cloudwatch
Feature: Amazon CloudWatch

  I want to use Amazon CloudWatch

  Scenario: Alarms
    Given I create a CloudWatch alarm with prefix "aws-js-sdk-alarm"
    And I list the CloudWatch alarms
    Then the list should contain the CloudWatch alarm
    And I delete the CloudWatch alarm

  Scenario: Error handling
    Given I create a CloudWatch alarm with name ""
    Then the error code should be "ValidationError"
