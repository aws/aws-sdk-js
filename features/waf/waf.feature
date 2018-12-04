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

  Scenario: Error handling
    Given I run the "createSqlInjectionMatchSet" operation with params:
    """
    {
      "Name": "fake_name",
      "ChangeToken": "fake_token"
    }
    """
    Then the error code should be "WAFStaleDataException"
