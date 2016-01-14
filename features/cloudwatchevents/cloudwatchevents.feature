# language: en
@cloudwatchevents
Feature: 

  I want to use Amazon CloudWatch Events

  Scenario: Making a request
    Given I run the "listRules" operation
    Then the request should be successful
    And the value at "Rules" should be a list

  Scenario: Error handling
    Given I run the "describeRule" operation with params:
    """
    { "Name": "fake_rule" }
    """
    Then the error code should be "ResourceNotFoundException"
