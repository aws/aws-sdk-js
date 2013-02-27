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
@sqs @messages
Feature: SQS Messages

  I want to be able to send and process messages.

  Scenario: Send an SQS message
    Given I create a queue with the prefix name "aws-js-sdk"
    When I send the message "HELLO"
    Then the result should include a message ID
    And the result should have an MD5 digest of "eb61eead90e3b899c6bcbe27ac581660"
    And I should eventually be able to receive "HELLO" from the queue
    Then I delete the SQS queue
