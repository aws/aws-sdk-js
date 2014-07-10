# language: en
@cognitosync
Feature: 

  I want to use Amazon Cognito Sync

  Scenario: Identity Pool Usage
    Given I list Cognito identity pool usage
    Then the status code should be 200

  Scenario: Error handling
    Given I list Cognito data sets with identity pool id "INVALID" and identity id "A:B:C"
    Then the error message should contain:
    """
    validation errors detected
    """
