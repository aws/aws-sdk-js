# language: en
@cloudsearch
Feature: Amazon CloudSearch (2013-01-01)

  I want to use Amazon CloudSearch

  Scenario: Describing domain
    Given I run the "describeDomains" operation
    Then the request should be successful
    And the value at "DomainStatusList" should be a list

  Scenario: Error handling
    Given I create a domain with name prefix ""
    Then the error code should be "ValidationError"

