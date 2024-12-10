# language: en
@waf
Feature: AWS WAF

  I want to use AWS WAF

  Scenario: Making a request
    Given I run the "listRules" operation with params:
    """
    { "Limit": 20 }
    """
    Then the request should be successful
    And the value at "Rules" should be a list
