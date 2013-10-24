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
    Given I create a Direct Connect connection with name prefix "aws-sdk-js"
    Then I should get a Direct Connect connection ID
    And I describe the connection
    Then the bandwidth should match the connection bandwidth
    And I delete the Direct Connect connection

  Scenario: Error handling
    Given I create a Direct Connect connection with an invalid location
    Then the error code should be "DirectConnectServerException"
    And the error message should be:
    """
    Unable to process request
    """
