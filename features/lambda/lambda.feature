# language: en
@lambda
Feature: Amazon Lambda

  I want to use Amazon Lambda

  Scenario: Listing functions
    Given I run the "listFunctions" operation
    Then the request should be successful
    And the value at "Functions" should be a list

  Scenario: Error handling
    Given I run the "invokeAsync" operation with params:
    """
    { "FunctionName": "non-exist", "InvokeArgs": "{}" }
    """
    Then the error code should be "ResourceNotFoundException"
