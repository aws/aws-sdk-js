# language: en
@redshift
Feature: Amazon Redshift

  I want to use Amazon Redshift

  Scenario: Creating and deleting cluster parameter groups
    Given I create a Redshift cluster parameter group with prefix name "aws-js-sdk"
    And the Redshift cluster parameter group name is in the result
    And I describe Redshift cluster parameter groups
    Then the Redshift cluster parameter group should be in the list
    And I delete the Redshift cluster parameter group

  Scenario: Error handling
    Given I create a Redshift cluster parameter group with prefix name ""
    Then the error code should be "InvalidParameterValue"
    Then the error message should contain:
    """
    The parameter DBParameterGroupName must be provided and must not be blank
    """
