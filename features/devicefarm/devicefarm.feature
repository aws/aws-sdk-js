# language: en
@devicefarm
Feature: AWS Device Farm

  I want to use AWS Device Farm

  Scenario: Listing devices
    Given I run the "listDevices" operation
    Then the request should be successful
    And the value at "devices" should be a list

  Scenario: Error handling
    Given I run the "getDevice" operation with params:
    """
    { "arn": "arn:aws:devicefarm:us-west-2::device:00000000000000000000000000000000" }
    """
    Then the error code should be "NotFoundException"
