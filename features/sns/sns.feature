# language: en
@sns
Feature: Simple Notification Service

  I want to use Amazon Simple Notification Service

  Scenario: Topics
    Given I create an SNS topic with name "aws-js-sdk-integration-topic"
    And I list the SNS topics
    Then the list should contain the topic ARN
    And I delete the SNS topic

  Scenario: Error handling
    Given I get SNS topic attributes with an invalid ARN
    Then the error code should be "InvalidParameter"
