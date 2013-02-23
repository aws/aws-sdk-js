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
@datapipeline
Feature: AWS Data Pipeline

  I want to use AWS Data Pipeline

  Scenario: Managing pipelines
    Given I create a Data Pipeline with name prefix "aws-sdk-js"
    Then the response should contain the pipeline ID
    When I describe the Data Pipelines
    Then the pipeline should be in the list
    And I put a Data Pipeline definition
    And I get the Data Pipeline definition
    And the the objects should be in the Data Pipeline definition
    And I delete the Data Pipeline

  Scenario: Error handling
    Given I create a Data Pipeline with name prefix ""
    Then the error code should be "ValidationException"
    And the error message should match:
    """
    Member must have length greater than or equal to 1
    """
