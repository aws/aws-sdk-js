# language: en
@route53
Feature: Amazon Route 53

  I want to use Amazon Route 53

  Scenario: Making a request
    Given I run the "listHostedZones" operation
    Then the request should be successful
    And the value at "HostedZones" should be a list

  Scenario: Error handling
    Given I run the "getHostedZone" operation with params:
    """
    { "Id": "fake-zone" }
    """
    Then the error code should be "NoSuchHostedZone"
