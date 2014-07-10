# language: en
@cognitoidentity
Feature: 

  I want to use Amazon Cognito Identity

  Scenario: Identity Pools
    Given I create a Cognito identity pool with prefix "awssdkjs"
    And I describe the Cognito identity pool ID
    Then the status code should be 200
    And I delete the Cognito identity pool

  Scenario: Error handling
    Given I create a Cognito identity pool with prefix ""
    Then the error code should be "ValidationException"
