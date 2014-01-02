# language: en
@sqs @queues
Feature: SQS Queues

  I want to be able to create, list and delete queues.

  Scenario: Creating and deleting queues
    Given I create a queue with the prefix name "aws-js-sdk"
    And I create a queue with the prefix name "aws-js-sdk"
    Then list queues should eventually return the queue urls
    Then I delete the SQS queue
    Then I delete the SQS queue

  Scenario: Making a queue request across regions
    Given I have a "SQS" service in the "us-west-1" region
    And I create a queue with the prefix name "aws-js-sdk"
    When I have a "SQS" service in the "us-east-1" region
    Then I delete the SQS queue
