# language: en
@ssm
Feature: 

  I want to use AWS Simple Systems Management

  Scenario: Listing Documents
    Given I run the "listDocuments" operation
    Then the request should be successful
    And the value at "DocumentIdentifiers" should be a list

  Scenario: Error handling
    Given I run the "describeDocument" operation with params:
    """
    {"Name": "foo-bar-baz" }
    """
    Then the error code should be "InvalidDocument"
