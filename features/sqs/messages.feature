# language: en
@sqs @messages
Feature: SQS Messages

  I want to be able to send and process messages.

  Scenario: Send an SQS message
    Given I create a queue with the prefix name "aws-js-sdk"
    When I send the message "HELLO"
    Then the result should include a message ID
    And the result should have an MD5 digest of "eb61eead90e3b899c6bcbe27ac581660"
    And I should eventually be able to receive "HELLO" from the queue
    Then I delete the SQS queue

  Scenario: Binary payloads
    Given I create a queue with the prefix name "aws-js-sdk"
    When I send the message "HELLO" with a binary attribute
    Then the result should include a message ID
    And the result should have an MD5 digest of "eb61eead90e3b899c6bcbe27ac581660"
    And I should eventually be able to receive "HELLO" from the queue with a binary attribute
    Then I delete the SQS queue
