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
    Then the object with the key "hello" should exist
    Then the object with the key "hello" should contain "new world"

    # Empty files
    When I write "" to the key "hello"
    Then the object with the key "hello" should exist
    And the object with the key "hello" should contain ""

    # UTF-8
    When I write "åß∂ƒ©" to the key "hello"
    Then the object with the key "hello" should exist
    And the object with the key "hello" should contain "åß∂ƒ©"

    When I copy an object with the key "hello" to "byebye"
    Then the object with the key "byebye" should exist
    And the object with the key "byebye" should contain "åß∂ƒ©"
    And I delete the object with the key "byebye"

    When I delete the object with the key "hello"
    Then the object with the key "hello" should not exist

  @buffer
  Scenario: Buffers and streams
    When I write buffer "world" to the key "hello"
    Then the object with the key "hello" should exist
    And the object with the key "hello" should contain "world"
    And I delete the object with the key "hello"

    When I write file "testfile.txt" to the key "hello"
    Then the object with the key "hello" should exist
    And the object with the key "hello" should contain "CONTENTS OF FILE"

    When I stream key "hello"
    Then the streamed data should contain "CONTENTS OF FILE"

    And I delete the object with the key "hello"

    # final step here needs to happen to cleanup the shared bucket
    And I delete the shared bucket
