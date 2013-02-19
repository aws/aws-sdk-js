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
@iam
Feature: IAM

  I want to use IAM

  Scenario: Users
    Given I have an IAM username "js-test"
    And I create an IAM user with the username
    And I list the IAM users
    Then the list should contain the user
    And I delete the IAM user

  Scenario: Roles
    Given I create an IAM role with name prefix "aws-sdk-js"
    Then the IAM role should exist
    And I delete the IAM role

  Scenario: Error handling
    Given I have an IAM username "js-test-dupe"
    And I create an IAM user with the username
    And I create an IAM user with the username
    Then the error code should be "EntityAlreadyExists"
    And I delete the IAM user
