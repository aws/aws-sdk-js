# language: en
@cloudformation
Feature: AWS CloudFormation

  I want to use AWS CloudFormation

  Scenario: Describing stacks
    Given I run the "describeStacks" operation
    Then the request should be successful
    And the value at "Stacks" should be a list

  Scenario: Error handling
    Given I create a CloudFormation stack with name prefix ""
    Then the error code should be "ValidationError"

  @pagination
  Scenario: Paginating responses
    Given I paginate the "listStacks" operation 
    Then I should get at least one page
    And the last page should not contain a marker
