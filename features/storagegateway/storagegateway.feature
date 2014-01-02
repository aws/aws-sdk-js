# language: en
@storagegateway
Feature: AWS Storage Gateway

  I want to use AWS Storage Gateway

  Scenario: Activating a Gateway
    When I try to activate a Storage Gateway
    Then the error code should be "InvalidGatewayRequestException"
    Then the error message should be:
    """
    The specified activation key was not found.
    """
