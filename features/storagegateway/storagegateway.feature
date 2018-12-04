# language: en
@storagegateway
Feature: AWS Storage Gateway

  I want to use AWS Storage Gateway

  Scenario: Listing Gateways
    Given I run the "listGateways" operation
    Then the request should be successful
    And the value at "Gateways" should be a list

  Scenario: Activating a Gateway
    When I try to activate a Storage Gateway
    Then the error code should be "InvalidGatewayRequestException"
    Then the error message should be:
    """
    The specified activation key was not found.
    """
