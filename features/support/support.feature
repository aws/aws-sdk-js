# language: en
@support
Feature: AWS Support

  I want to use AWS Support

  Scenario: Describe Services
    Given I describe Support services
    Then the request should be successful
    And the value at "services" should be a list

  Scenario: Error handling
    Given I create a case with an invalid category
    Then the error code should be "ValidationException"
