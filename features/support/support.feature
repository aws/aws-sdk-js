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
@support
Feature: AWS Support

  I want to use AWS Support

  Scenario: Describe Services
    Given I describe Support services
    Then the Supported services list should contain a service with code "amazon-dynamodb"
    And the Supported services list should contain a service with name "DynamoDB"

  Scenario: Error handling
    Given I create a case with an invalid category
    Then the error code should be "ValidationException"
    And the error message should contain:
    """
    1 validation error detected: Value 'INVALID-CODE' at 'serviceCode' failed to satisfy constraint
    """
