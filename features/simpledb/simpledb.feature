# language: en
@simpledb
Feature: Amazon SimpleDB

  I want to use Amazon SimpleDB

  Scenario: CRUD
    Given I create a SimpleDB domain
    And I put an item "key" with attributes:
    """
    [{"Name": "attr1", "Value": "value1"}]
    """
    And I get the item "key"
    Then the result should have attribute "attr1" with "value1"
    And I delete the domain

  Scenario: SELECT * statements
    Given I create a SimpleDB domain
    And I put an item "key" with attributes:
    """
    [{"Name": "attr1", "Value": "value1"}]
    """
    And I select "*" from the domain
    Then the select result should contain the item
    And I delete the domain

  Scenario: Error handling
    Given I create a domain with no name
    Then the error code should be "InvalidParameterValue"
