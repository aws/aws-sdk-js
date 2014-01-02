# language: en
@elasticache
Feature: Amazon ElastiCache

  I want to use Amazon ElastiCache

  Scenario: Creating and deleting security groups
    Given I create a ElastiCache security group with prefix name "aws-js-sdk"
    And the ElastiCache security group name is in the result
    And I describe the ElastiCache security group
    Then the ElastiCache security group should be described
    And I delete the ElastiCache security group

  Scenario: Error handling
    Given I create a ElastiCache security group with prefix name ""
    Then the error code should be "InvalidParameterValue"
    Then the error message should be:
    """
    CacheSecurityGroupName is required
    """
