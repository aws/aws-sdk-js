# language: en
@gamelift
Feature: 

  I want to use Amazon GameLift

  Scenario: Making a request
    Given I run the "listBuilds" operation
    Then the request should be successful
    And the value at "Builds" should be a list

  Scenario: Error handling
    Given I run the "describeAlias" operation with params:
    """
    { "AliasId": "fake_id" }
    """
    Then the error code should be "InvalidRequestException"
