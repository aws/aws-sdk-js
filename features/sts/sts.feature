# language: en
@sts
Feature: AWS Security Token Service

  I want to use AWS Security Token Service

  @requiresakid
  Scenario: Get a session token
    Given I get an STS session token with a duration of 900 seconds
    Then the result should contain an access key ID and secret access key
    And the TTL on the session token credentials should be less than 900

  Scenario: Web Identity Federation
    Given I try to assume role with web identity
    Then the error message should equal:
    """
    Not authorized to perform sts:AssumeRoleWithWebIdentity
    """

  Scenario: SAML Support
    Given I try to assume role with SAML
    Then the error message should equal:
    """
    Not authorized to perform sts:AssumeRoleWithSAML
    """

  Scenario: Error handling
    Given I get an STS session token with a duration of 60 seconds
    Then the error code should be "ValidationError"
