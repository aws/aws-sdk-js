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

    # ContentLength
    When I write "foobar" to the key "hello" with ContentLength 3
    Then the object with the key "hello" should exist
    And the object with the key "hello" should contain "foo"

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

  @presigned
  Scenario: Pre-signed URLs
    Given I get a pre-signed URL to PUT the key "hello"
    And I access the URL via HTTP PUT with data "PRESIGNED BODY CONTENTS"
    When I get a pre-signed URL to GET the key "hello"
    And I access the URL via HTTP GET
    Then the HTTP response should equal "PRESIGNED BODY CONTENTS"

  @presigned @checksum
  Scenario: Pre-signed URLs with checksum
    Given I get a pre-signed URL to PUT the key "hello" with data "CHECKSUMMED"
    And I access the URL via HTTP PUT with data "NOT CHECKSUMMED"
    Then the HTTP response should contain "SignatureDoesNotMatch"

  @buffer
  Scenario: Buffers and streams
    When I write buffer "world" to the key "hello"
    Then the object with the key "hello" should exist
    And the object with the key "hello" should contain "world"

    When I write file "testfile.txt" to the key "hello"
    Then the object with the key "hello" should exist
    And the object with the key "hello" should contain "CONTENTS OF FILE"

    When I stream key "hello"
    Then the streamed data should contain "CONTENTS OF FILE"

    When I stream2 key "hello"
    Then the streamed data should contain "CONTENTS OF FILE"

  @proxy
  Scenario: Proxy support
    When I write "world" to the key "hello"
    Then the object with the key "hello" should exist
    And the object with the key "hello" should contain "world"

    When I delete the object with the key "hello"
    Then the object with the key "hello" should not exist

    And I teardown the local proxy server

  @pagination
  Scenario: Paginating responses
    Given I delete the object with the key "hello"
    And I write "data" to the key "obj0"
    And I write "data" to the key "obj1"
    And I write "data" to the key "obj2"
    And I write "data" to the key "obj3"
    And I write "data" to the key "obj4"
    And I write "data" to the key "obj5"
    And I write "data" to the key "obj6"
    And I write "data" to the key "obj7"
    And I write "data" to the key "obj8"
    And I write "data" to the key "obj9"
    And the object with the key "obj9" should exist
    And I setup the listObjects request for the bucket
    When I paginate the "listObjects" operation with limit 3
    Then I should get 4 pages
