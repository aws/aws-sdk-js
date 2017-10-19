# language: en
@redshift
Feature: Amazon Redshift

  I want to use Amazon Redshift

  Scenario: Describe cluster parameter groups
    When I describe Redshift cluster parameter groups
    Then the response should be type of "Array"

  Scenario: Error handling
    Given I create a Redshift cluster parameter group with prefix name ""
    Then the error code should be "InvalidParameterValue"
    Then the error message should contain:
    """
    The parameter DBParameterGroupName must be provided and must not be blank
    """
