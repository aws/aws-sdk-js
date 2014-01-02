# language: en
@cloudformation
Feature: AWS CloudFormation

  I want to use AWS CloudFormation

  Scenario: Creating and deleting stacks
    Given I create a CloudFormation stack with name prefix "aws-js-sdk"
    And I get a CloudFormation template for the stack
    Then the result should contain the CloudFormation template body
    And I delete the CloudFormation stack

  Scenario: Error handling
    Given I create a CloudFormation stack with name prefix ""
    Then the error code should be "ValidationError"

  @pagination
  Scenario: Paginating responses
    Given I paginate the "listStacks" operation with limit 100
    Then I should get more than one page
    And I should get numPages - 1 markers
    And the last page should not contain a marker
