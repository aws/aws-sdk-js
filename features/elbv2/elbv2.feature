# language: en
@elbv2
Feature: 

  I want to use Elastic Load Balancing v2

  Scenario: Making a request
    Given I run the "describeTargetGroups" operation
    Then the request should be successful
    And the value at "TargetGroups" should be a list

  Scenario: Error handling
    Given I run the "describeTags" operation with params:
    """
    { "ResourceArns": ["fake_arn"] }
    """
    Then the error code should be "ValidationError"
