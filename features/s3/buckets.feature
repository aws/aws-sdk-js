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
@s3 @buckets
Feature: Working with Buckets

  Scenario: CRUD buckets
    When I create a bucket
    Then the bucket should exist
    When I delete the bucket
    Then the bucket should not exist

  @lifecycle
  Scenario: Bucket lifecycles
    When I create a bucket
    And I put a transition lifecycle configuration on the bucket with prefix "/"
    And I get the transition lifecycle configuration on the bucket
    Then the lifecycle configuration should have transition days of 0
    And the lifecycle configuration should have transition storage class of "GLACIER"

    And I delete the bucket

  # this test will exercise following 307 redirects
  Scenario: Creating a bucket with a location constraint
    When I create a bucket with the location constraint "EU"
    Then the bucket should have a location constraint of "EU"
    And I delete the bucket
