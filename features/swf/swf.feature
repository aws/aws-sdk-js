# language: en
@swf
Feature: Amazon Simple Workflow Service

  I want to use Amazon Simple Workflow Service

  Scenario: Listing domains
    Given I run the "listDomains" operation with params:
    """
    { "registrationStatus": "REGISTERED" }
    """
    Then the request should be successful
    And the value at "domainInfos" should be a list

  Scenario: Error handling
    Given I run the "describeDomain" operation with params:
    """
    { "name": "fake-domain" }
    """
    Then the error code should be "UnknownResourceFault"
