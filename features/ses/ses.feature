# language: en
@ses
Feature: SES

  I want to use Simple Email Service.

  Scenario: Check quota
    When I check quota
    Then the result should include number "SentLast24Hours"
    And the result should include number "MaxSendRate"

  Scenario: Verify email
    When I ask to verify the email address "foo@example.com"
    Then the status code should be 200

  Scenario: Rescue SES InvalidParameterValue
    When I ask to verify the email address "abc123"
    Then I should get the error:
    | code                  | message                        |
    | InvalidParameterValue | Invalid email address<abc123>. |
