# language: en
@autoscaling
Feature: Auto Scaling

  I want to use Auto Scaling

  Scenario: Managing auto scaling groups
    Given I create a launch configuration with name "launch-config-integ"
    And I describe launch configurations
    Then the list should contain the launch configuration "launch-config-integ"
    And I delete the launch configuration "launch-config-integ"

  @pagination
  Scenario: Paginating responses
    Given I create a launch configuration with name "launch-config-integ-1"
    And I create a launch configuration with name "launch-config-integ-2"
    And I paginate the "describeLaunchConfigurations" operation with limit 1
    Then I should get more than one page
    And I should get numPages - 1 markers
    And the last page should not contain a marker
    And I delete the launch configuration "launch-config-integ-1"
    And I delete the launch configuration "launch-config-integ-2"

  Scenario: Error handling
    Given I create a launch configuration with name ""
    Then the error code should be "ValidationError"
    And the error message should contain:
    """
    Member must have length greater than or equal to 1
    """
