# language: en
@es
Feature: 

  I want to use Amazon ES

  Scenario: Making a request
    Given I run the "listDomainNames" operation
    Then the request should be successful
    And the value at "DomainNames" should be a list

  Scenario: Error handling
    Given I run the "describeElasticsearchDomain" operation with params:
    """
    { "DomainName": "not-a-domain" }
    """
    Then the error code should be "ResourceNotFoundException"
