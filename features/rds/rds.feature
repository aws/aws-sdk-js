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
@rds
Feature: Amazon Relational Database Service

  I want to use Amazon Relational Database Service

  Scenario: Creating and deleting security groups
    Given I create a RDS security group with prefix name "aws-js-sdk"
    And the RDS security group name is in the result
    And I describe the RDS security group
    Then the RDS security group should be described
    And I delete the RDS security group

  Scenario: Error handling
    Given I create a RDS security group with prefix name ""
    Then the error code should be "InvalidParameterValue"
    Then the error message should be:
    """
    DBSecurityGroupName is required
    """
