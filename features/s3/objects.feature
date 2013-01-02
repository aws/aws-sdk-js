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
@s3 @objects
Feature: Working with Objects in S3

  As a user of S3
  I need to be able to work with objects in a bucket.

  Scenario: CRUD objects
    When I write "world" to the key "hello"
    Then the object with the key "hello" should exist
    And the object with the key "hello" should contain "world"
    When I write "new world" to the key "hello"
    Then the object with the key "hello" should contain "new world"

    # Empty files
    When I write "" to the key "hello"
    Then the object with the key "hello" should exist
    And the object with the key "hello" should contain ""

    When I delete the object with the key "hello"
    Then the object with the key "hello" should not exist

    # final step here needs to happen to cleanup the shared bucket
    And I delete the shared bucket
