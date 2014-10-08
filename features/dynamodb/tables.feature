# language: en
@dynamodb @dynamodb-2011-12-05 @tables
Feature: DynamoDB Tables (2011-12-05)

  Scenario: Item CRUD
    Given I have a table
    When I put the item:
    """
    {"id": {"S": "foo"}, "data": {"S": "bår"}}
    """
    Then the item with id "foo" should exist
    And it should have attribute "data.S" containing "bår"

  Scenario: UTF-8 support
    Given I try to delete an item with key "føø" from table "table"
    Then the error code should be "ResourceNotFoundException"

  Scenario: Improper table deletion
    Given I try to delete a table with an empty table parameter
    Then the error code should be "ValidationException"
    And the error message should be:
    """
    TableName must be at least 3 characters long and at most 255 characters long
    """
    And the status code should be 400

@dynamodb @dynamodb-2012-08-10 @tables
Feature: DynamoDB Tables (2012-08-10)

  Scenario: Item CRUD
    Given I have a table
    When I put the item:
    """
    {"id": {"S": "foo"}, "data": {"S": "bår"}}
    """
    Then the item with id "foo" should exist
    And it should have attribute "data.S" containing "bår"

  Scenario: UTF-8 support
    Given I try to delete an item with key "føø" from table "table"
    Then the error code should be "ResourceNotFoundException"

  Scenario: Improper table deletion
    Given I try to delete a table with an empty table parameter
    Then the error code should be "ValidationException"
    And the error message should be:
    """
    TableName must be at least 3 characters long and at most 255 characters long
    """
    And the status code should be 400

  @recursive
  Scenario: Recursive Attributes
    Given I have a table
    When I put the item:
    """
    {
      "id": {"S": "fooRecursive"},
      "data": {
        "M": {
          "attr1": {"L": [{"S": "value1"}, {"L":[{"M":{"attr12":{"S": "value2"}}}]}]},
          "attr2": {"L": [{"B": "value3"}, {"B": "value4"}, {"NULL": true}, {"BOOL": true}]}
        }
      }
    }
    """
    Then the request should be successful
    And the item with id "fooRecursive" should exist
    And it should have attribute "data.M.attr1.L[1].L[0].M.attr12.S" containing "value2"
