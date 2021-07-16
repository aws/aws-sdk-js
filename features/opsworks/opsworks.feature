# language: en
@opsworks
Feature: AWS OpsWorks

  I want to use AWS OpsWorks

  Scenario: Creating and deleting user profiles
    Given I have an IAM username "aws-js-sdk"
    And I create an IAM user with the username
    And I create an OpsWorks user profile with the IAM user ARN
    And the IAM user ARN is in the result
    And I describe the OpsWorks user profiles
    Then the IAM user ARN should be in the result
    And the name should be equal to the IAM username
    And the SSH username should be equal to the IAM username
    And I delete the OpsWorks user profile
    And I delete the IAM user

  Scenario: Error handling
    Given I have an IAM username ""
    And I create an OpsWorks user profile with the IAM user ARN
    Then the error code should be "ValidationException"
    Then the error message should be:
    """
    Please provide user ARN
    """
