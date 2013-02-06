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
@ec2
Feature: Amazon Elastic Compute Cloud

  I want to use Amazon Elastic Compute Cloud

  Scenario: DescribeRegions
    Given I describe EC2 regions "us-east-1, us-west-1"
    Then the EC2 endpoint for "us-east-1" should be "ec2.us-east-1.amazonaws.com"
    And the EC2 endpoint for "us-west-1" should be "ec2.us-west-1.amazonaws.com"

  Scenario: Error handling
    Given I describe the EC2 instance "i-12345678"
    Then the error code should be "InvalidInstanceID.NotFound"
    And the error message should be:
    """
    The instance ID 'i-12345678' does not exist
    """
    And the status code should be 400
