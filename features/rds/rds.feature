# language: en
@rds
Feature: Amazon Relational Database Service

  I want to use Amazon Relational Database Service

  Scenario: Creating and deleting security groups
    Given I create a RDS security group with prefix name "aws-js-sdk"
    And the RDS security group name is in the result
    And I describe the RDS security group
    Then the RDS security group should be described
    And I delete the RDS security group

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
