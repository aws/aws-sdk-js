# language: en
@directconnect
Feature: AWS Direct Connect

  I want to use AWS Direct Connect

  Scenario: describe connections
    Given I run the "describeConnections" operation
    Then the request should be successful
    And the value at "connections" should be a list

  Scenario: Error handling
    Given I create a Direct Connect connection with an invalid location
    Then the error code should be "DirectConnectClientException"
