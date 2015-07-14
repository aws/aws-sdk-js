# language: en
@dynamodbstreams
Feature: Amazon DynamoDB Streams

  I want to use Amazon DynamoDB Streams

  Scenario: Listing streams
    Given I run the "listStreams" operation
    Then the request should be successful
    And the value at "Streams" should be a list

  Scenario: Error handling
    Given I run the "describeStream" operation with params:
    """
    { "StreamArn": "fake-stream" }
    """
    Then the error code should be "ValidationException"
