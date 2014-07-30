# language: en
@route53domains
Feature: Amazon Route 53 Domains

  I want to use Amazon Route 53 Domains

  Scenario: Feature
    Given I list Route53 domains
    Then the request should be successful
    And the value at "Domains" should be a list

  Scenario: Error handling
    Given I try to register a Route53 domain with invalid parameters
    Then the error code should be "InvalidInput"
