# language: en
@ecs
Feature: Amazon ECS

  I want to use Amazon ECS

  Scenario: Listing clusters
    Given I run the "listClusters" operation
    Then the request should be successful
    And the value at "clusterArns" should be a list

  Scenario: Error handling
    Given I run the "stopTask" operation with params:
    """
    { "task": "xxxxxxxxxxx-xxxxxxxxxxxx-xxxxxxxxxxx" }
    """
    Then the status code should be 400
