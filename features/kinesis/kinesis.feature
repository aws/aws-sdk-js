# language: en
@kinesis
Feature: Amazon Kinesis

  I want to use Amazon Kinesis

  Scenario: Error handling
    Given I try to describe a stream in Kinesis
    Then the error code should be "ResourceNotFoundException"
