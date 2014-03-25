# language: en
@cloudsearch @cloudsearch-2011-02-01
Feature: Amazon CloudSearch (2011-02-01)

  I want to use Amazon CloudSearch

  Scenario: Domain creation
    Given I create a domain with name prefix "aws-js-sdk"
    Then DomainStatus should show that Created is true
    And I delete the domain

  Scenario: Defining an index field
    Given I create a domain with name prefix "aws-js-sdk"
    And I define a CloudSearch index field with source attributes
    Then the status code should be 200
    And I delete the domain

  Scenario: Error handling
    Given I create a domain with name prefix ""
    Then the error code should be "ValidationError"

@cloudsearch @cloudsearch-2013-01-01
Feature: Amazon CloudSearch (2013-01-01)

  I want to use Amazon CloudSearch

  Scenario: Domain creation
    Given I create a domain with name prefix "aws-js-sdk"
    Then DomainStatus should show that Created is true
    And I delete the domain

  Scenario: Error handling
    Given I create a domain with name prefix ""
    Then the error code should be "ValidationError"
