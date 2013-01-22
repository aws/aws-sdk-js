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
@ses
Feature: SES

  I want to use Simple Email Service.

  Scenario: Check quota
    When I check quota
    Then the result should include number "SentLast24Hours"
    And the result should include number "MaxSendRate"

  Scenario: Verify email
    When I ask to verify the email address "foo@example.com"
    Then the status code should be 200

  Scenario: Rescue SES InvalidParameterValue
    When I ask to verify the email address "abc123"
    Then I should get the error:
    | code                  | message                        |
    | InvalidParameterValue | Invalid email address<abc123>. |
