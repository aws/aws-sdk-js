# language: en
@directconnect
Feature: AWS Direct Connect

  I want to use AWS Direct Connect

  Scenario: Managing connections
    Given I describe the connection
    Then I should get response of type Array

  Scenario: Error handling
    Given I create a Direct Connect connection with an invalid location
    Then the error code should be "DirectConnectClientException"
