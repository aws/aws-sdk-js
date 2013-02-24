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
@glacier
Feature: Amazon Glacier

  I want to use Amazon Glacier

  Scenario: Vaults and Archives
    Given I create a Glacier vault with name "aws-sdk-js-integration"
    When I describe the Glacier vault
    Then the result should contain a property NumberOfArchives with a number

    When I upload a 0.25MB Glacier archive to the vault
    Then the result should contain the Glacier archive ID
    And the result should contain the same tree hash checksum

    And I delete the Glacier archive

  Scenario: Error handling
    Given I create a Glacier vault with name "aws-sdk-js-integration"
    And I upload a 0.05MB Glacier archive to the vault with incorrect checksum
    Then the error code should be "InvalidParameterValueException"
    And the error message should match:
    """
    Checksum mismatch:
    """

    When I upload a 0.05MB Glacier archive to the vault with invalid checksum
    Then the error code should be "InvalidParameterValueException"
    And the error message should equal:
    """
    Invalid x-amz-sha256-tree-hash: 000
    """
