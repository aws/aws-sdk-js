# language: en
@cloudhsm
Feature: AWS CloudHSM

  I want to use AWS CloudHSM

  Scenario: Listing HSMs
    Given I run the "listHsms" operation
    Then the request should be successful
    And the value at "HsmList" should be a list

  Scenario: Error handling
    Given I run the "deleteHsm" operation with params:
    """
    { "HsmArn": "arn:aws:cloudhsm::123456789012:hsm-12345678" }
    """
    Then the error code should be "InvalidRequestException"
