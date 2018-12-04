# language: en
@elasticache
Feature: Amazon ElastiCache

  I want to use Amazon ElastiCache

  Scenario: Creating and deleting cache parameter groups
    Given I create a cache parameter group with name prefix "aws-js-sdk"
    And the cache parameter group name is in the result
    And I describe the cache parameter groups
    Then the value at "CacheParameterGroups" should be a list
    And the cache parameter group should be described
    And I delete the cache parameter group

  Scenario: Error handling
    Given I create a cache parameter group with name prefix ""
    Then the error code should be "InvalidParameterValue"
    Then the error message should contain:
    """
    The parameter CacheParameterGroupName must be provided and must not be blank
    """
