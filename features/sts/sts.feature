# language: en
@sts
Feature: AWS Security Token Service

  I want to use AWS Security Token Service

  @requiresakid @nosession
  Scenario: Get a session token
    Given I get an STS session token with a duration of 900 seconds
    Then the result should contain an access key ID and secret access key

  Scenario: Error handling
    Given I get an STS session token with a duration of 60 seconds
    Then the error code should be "ValidationError"