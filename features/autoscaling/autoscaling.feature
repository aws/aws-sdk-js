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
@autoscaling
Feature: Auto Scaling

  I want to use Auto Scaling

  Scenario: Managing auto scaling groups
    Given I create a launch configuration with name prefix "aws-sdk-js"
    And I create an auto scaling group with name prefix "aws-sdk-js"
    And I list auto scaling groups with the group name
    Then the list should contain the auto scaling group
    And I delete the auto scaling group
    And I delete the launch configuration

  Scenario: Error handling
    Given I create a launch configuration with name prefix ""
    Then the error code should be "ValidationError"
    And the error message should contain:
    """
    Member must have length greater than or equal to 1
    """
