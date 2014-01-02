# language: en
@cloudtrail
Feature: AWS CloudTrail

  I want to use AWS CloudTrail

  Scenario: Describing trails
    Given I describe trails
    Then the status code should be 200

  Scenario: Error handling
    Given I create a trail with an invalid name
    Then the error code should be "InvalidTrailNameException"
    And the error message should contain:
    """
    cannot be blank
    """
