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
@cloudtrail
Feature: AWS CloudTrail

  I want to use AWS CloudTrail

  Scenario: Describing trails
    Given I describe trails
    Then the status code should be 200

  Scenario: Error handling
    Given I create a trail with an invalid name
    Then the error code should be "InvalidTrailNameException"
    And the error message should contain:
    """
    cannot be blank
    """
