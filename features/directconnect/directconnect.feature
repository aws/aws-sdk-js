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
@directconnect
Feature: AWS Direct Connect

  I want to use AWS Direct Connect

  Scenario: Managing connections
    Given I describe Direct Connect offerings
    And I take the first offering ID
    When I create a Direct Connect connection with name prefix "aws-sdk-js" and the offering ID
    Then I should get a Direct Connect connection ID
    And the region should match the offering region
    And I describe connection details for the connection
    Then the bandwidth should match the offering bandwidth
    And I delete the Direct Connect connection

  Scenario: Error handling
    Given I create a Direct Connect connection with an invalid offering ID
    Then the error code should be "DirectConnectServerException"
    And the error message should be:
    """
    Unable to process request
    """
