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
@sqs @queues
Feature: SQS Queues

  I want to be able to create, list and delete queues.

  Scenario: Creating and deleting queues
    Given I create a queue with the prefix name "aws-js-sdk"
    And I create a queue with the prefix name "aws-js-sdk"
    Then list queues should eventually return the queue urls
    Then I delete the SQS queue
    Then I delete the SQS queue

  Scenario: Making a queue request across regions
    Given I have a "SQS" client in the "us-west-1" region
    And I create a queue with the prefix name "aws-js-sdk"
    When I have a "SQS" client in the "us-east-1" region
    Then I delete the SQS queue
