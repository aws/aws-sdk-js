# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

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
    And it should have attribute "data" containing "bår"

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
    And it should have attribute "data" containing "bår"

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
