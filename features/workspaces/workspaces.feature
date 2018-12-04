# language: en
@workspaces
Feature: Amazon WorkSpaces

  I want to use Amazon WorkSpaces

  Scenario: Describing workspaces 
    Given I run the "describeWorkspaces" operation
    Then the request should be successful
    And the value at "Workspaces" should be a list

  Scenario: Error handling
    Given I run the "rebuildWorkspaces" operation with params:
    """
    { "RebuildWorkspaceRequests": [] }
    """
    Then the error code should be "ValidationException"
