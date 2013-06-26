# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

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
