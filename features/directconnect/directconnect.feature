# language: en
@directconnect
Feature: AWS Direct Connect

  I want to use AWS Direct Connect

  Scenario: Managing connections
    Given I create a Direct Connect connection with name prefix "aws-sdk-js"
    Then I should get a Direct Connect connection ID
    And I describe the connection
    Then the bandwidth should match the connection bandwidth
    And I delete the Direct Connect connection

  Scenario: Error handling
    Given I create a Direct Connect connection with an invalid location
    Then the error code should be "DirectConnectServerException"
    And the error message should be:
    """
    Unable to process request
    """
