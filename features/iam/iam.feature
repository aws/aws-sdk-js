# language: en
@iam
Feature: IAM

  I want to use IAM

  Scenario: Users
    Given I have an IAM username "js-test"
    And I create an IAM user with the username
    And I get the IAM user
    Then the IAM user should exist
    And I delete the IAM user

  Scenario: Roles
    Given I create an IAM role with name prefix "aws-sdk-js"
    Then the IAM role should exist
    And I delete the IAM role

  Scenario: Error handling
    Given I have an IAM username "js-test-dupe"
    And I create an IAM user with the username
    And I create an IAM user with the username
    Then the error code should be "EntityAlreadyExists"
    And I delete the IAM user
