# language: en
@rds
Feature: Amazon Relational Database Service

  I want to use Amazon Relational Database Service

  Scenario: Describe DB security group
    Given I run the "describeDBSecurityGroups" operation
    Then the request should be successful
    And the value at "DBSecurityGroups" should be a list
    And the value at "DBSecurityGroups" should contain "DBSecurityGroupDescription" with "default"

  Scenario: Error handling
    Given I create a RDS security group with prefix name ""
    Then the error code should be "InvalidParameterValue"
    Then the error message should be:
    """
    DBSecurityGroupName is required
    """

  @pagination
  Scenario: Paginating responses
    Given I paginate the "describeReservedDBInstancesOfferings" operation with limit 100
    Then I should get more than one page
    And I should get numPages - 1 markers
    And the last page should not contain a marker

  @pagination
  Scenario: Paginating responses (with callback)
    Given I paginate the "describeReservedDBInstancesOfferings" operation asynchronously with limit 100
    Then I should be able to asynchronously paginate all pages
