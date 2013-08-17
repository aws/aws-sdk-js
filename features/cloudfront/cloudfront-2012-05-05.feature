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
@cloudfront @cloudfront-2012-05-05
Feature: Amazon CloudFront

  I want to use Amazon CloudFront

  Scenario: Listing distributions
    Given I list CloudFront distributions
    Then the result should contain a property Quantity with a number
    And the result should contain a property Items with an Array

  # Let this fail with NoSuchOrigin to confirm we serialized inputs
  # but without creating a distribution.
  Scenario: Creating a distribution
    Given I create a CloudFront distribution with name prefix "aws-js-sdk"
    Then the error code should be "NoSuchOrigin"
    And the error message should be:
    """
    One or more of your origins do not exist.
    """

  Scenario: Error handling
    Given I create a CloudFront distribution with name prefix ""
    Then the error code should be "InvalidArgument"
    And the error message should be:
    """
    The parameter CallerReference is too small.
    """
