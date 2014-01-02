# language: en
@autoscaling
Feature: Auto Scaling

  I want to use Auto Scaling

  Scenario: Managing auto scaling groups
    Given I create a launch configuration with name prefix "aws-sdk-js"
    And I create an auto scaling group with name prefix "aws-sdk-js"
    And I list auto scaling groups with the group name
    Then the list should contain the auto scaling group
    And I delete the auto scaling group
    And I delete the launch configuration

  Scenario: Error handling
    Given I create a launch configuration with name prefix ""
    Then the error code should be "ValidationError"
    And the error message should contain:
    """
    Member must have length greater than or equal to 1
    """
