# language: en
@redshift
Feature: Amazon Redshift

  I want to use Amazon Redshift

  Scenario: Creating and deleting cluster security groups
    Given I create a Redshift cluster security group with prefix name "aws-js-sdk"
    And the Redshift cluster security group name is in the result
    And I describe Redshift cluster security groups
    Then the Redshift cluster security group should be in the list
    And I delete the Redshift cluster security group

  Scenario: Error handling
    Given I create a Redshift cluster security group with prefix name ""
    Then the error code should be "InvalidParameterValue"
    Then the error message should be:
    """
    ClusterSecurityGroupName is required
    """
