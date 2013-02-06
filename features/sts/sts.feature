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
@sts
Feature: AWS Security Token Service

  I want to use AWS Security Token Service

  Scenario: Get a session token
    Given I get an STS session token with a duration of 900 seconds
    Then the result should contain an access key ID and secret access key
    And the TTL on the session token credentials should be less than 900

  Scenario: Error handling
    Given I get an STS session token with a duration of 60 seconds
    Then the error code should be "ValidationError"
