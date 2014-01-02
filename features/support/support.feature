# language: en
@support
Feature: AWS Support

  I want to use AWS Support

  Scenario: Describe Services
    Given I describe Support services
    Then the Supported services list should contain a service with code "amazon-dynamodb"
    And the Supported services list should contain a service with name "DynamoDB"

  Scenario: Error handling
    Given I create a case with an invalid category
    Then the error code should be "ValidationException"
    And the error message should contain:
    """
    1 validation error detected: Value 'INVALID-CODE' at 'serviceCode' failed to satisfy constraint
    """
