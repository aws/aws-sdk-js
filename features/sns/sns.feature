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
@sns
Feature: Simple Notification Service

  I want to use Amazon Simple Notification Service

  Scenario: Topics
    Given I create an SNS topic with name "aws-js-sdk-integration-topic"
    And I list the SNS topics
    Then the list should contain the topic ARN
    And I delete the SNS topic

  Scenario: Error handling
    Given I get SNS topic attributes with an invalid ARN
    Then the error code should be "InvalidParameter"
