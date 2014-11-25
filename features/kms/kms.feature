# language: en
@kms
Feature: AWS Key Management Service

  I want to use AWS Key Management Service

  Scenario: List keys
    Given I run the "listKeys" operation
    Then the request should be successful
    And the value at "Keys" should be a list

  Scenario: Error handling
    Given I run the "createAlias" operation with params:
    """
    { "AliasName": "alias", "TargetKeyId": "non-existent" }
    """
    Then the error code should be "ValidationException"
