# language: en
@s3 @objects
Feature: Working with Objects in S3

  As a user of S3 I need to be able to work with objects in a bucket.

  Background:
    Given I create a shared bucket

  @crud
  Scenario: CRUD objects
    When I put "world" to the key "hello"
    Then the object "hello" should exist
    And the object "hello" should contain "world"
    When I put "new world" to the key "hello"
    Then the object "hello" should exist
    Then the object "hello" should contain "new world"
    Then I delete the object "hello"
    Then the object "hello" should not exist

  @content-length
  Scenario: Content length
    When I put "foo" to the key "contentlength" with ContentLength 3
    Then the object "contentlength" should exist
    And the object "contentlength" should contain "foo"

  @multi-byte
  Scenario: Putting a multi-byte string to an object
    When I put "åß∂ƒ©" to the key "multi"
    Then the object "multi" should exist
    Then the HTTP response should have a content length of 11
    And the object "multi" should contain "åß∂ƒ©"

  @copy
  Scenario: Copying an object
    Given I put "world" to the key "hello"
    When I copy the object "hello" to "byebye"
    Then the object "byebye" should exist
    And the object "byebye" should contain "world"
    And I delete the object "byebye"

  @unauthenticated
  Scenario: Unauthenticated requests
    When I put "world" to the public key "hello"
    And I make an unauthenticated request to read object "hello"
    Then the object "hello" should contain "world"

  @sse
  Scenario: Using server-side-encryption with customer-provided key
    When I put "hello" to the key "cryptobject" with an AES key
    And I read the object "cryptobject" with the AES key
    Then the object "cryptobject" should contain "hello"

  @blank
  Scenario: Putting nothing to an object
    When I put "" to the key "blank"
    Then the object "blank" should exist
    And the object "blank" should contain ""
    And the HTTP response should have a content length of 0

  @buffer
  Scenario: Putting an empty buffer to an object
    When I put an empty buffer to the key "emptybuffer"
    Then the object "emptybuffer" should exist
    And the HTTP response should have a content length of 0

  @buffer
  Scenario: Putting a small buffer to an object
    When I put a small buffer to the key "smallbuffer"
    Then the object "smallbuffer" should exist
    And the HTTP response should have a content length of 1048576

  @buffer
  Scenario: Putting a large buffer to an object
    When I put a large buffer to the key "largebuffer"
    Then the object "largebuffer" should exist
    And the HTTP response should have a content length of 524288000

  @file
  Scenario: Putting an empty file to an object
    When I put an empty file to the key "emptyfile"
    Then the object "emptyfile" should exist
    And the HTTP response should have a content length of 0

  @file
  Scenario: Putting a small file to an object
    When I put a small file to the key "smallfile"
    Then the object "smallfile" should exist
    And the HTTP response should have a content length of 1048576

  @file
  Scenario: Putting a large file to an object
    When I put a large file to the key "largefile"
    Then the object "largefile" should exist
    And the HTTP response should have a content length of 524288000

  @presigned
  Scenario: Putting to a pre-signed URL
    Given I get a pre-signed URL to PUT the key "presigned"
    And I access the URL via HTTP PUT with data "PRESIGNED BODY CONTENTS"
    Then I get a pre-signed URL to GET the key "presigned"
    And I access the URL via HTTP GET
    Then the HTTP response should equal "PRESIGNED BODY CONTENTS"

  @presigned @checksum
  Scenario: Pre-signed URLs with checksum
    Given I get a pre-signed URL to PUT the key "hello" with data "CHECKSUMMED"
    And I access the URL via HTTP PUT with data "NOT CHECKSUMMED"
    Then the HTTP response should contain "SignatureDoesNotMatch"

  @streams 
  Scenario: Buffers and streams
    Given I put "STREAMING CONTENT" to the key "streaming_object"
    Then the object "streaming_object" should exist
    When I stream key "streaming_object"
    Then the streamed data should contain "STREAMING CONTENT"
    When I stream2 key "streaming_object"
    Then the streamed data should contain "STREAMING CONTENT"

  @progress
  Scenario: Progress events
    When I put a 2MB buffer to the key "progress_object" with progress events
    Then more than 1 "httpUploadProgress" event should fire
    And the "total" value of the progress event should equal 2MB
    And the "loaded" value of the first progress event should be greater than 10 bytes

    When I read the key "progress_object" with progress events
    Then more than 1 "httpDownloadProgress" event should fire
    And the "total" value of the progress event should equal 2MB
    And the "loaded" value of the first progress event should be greater than 10 bytes

  @proxy
  Scenario: Proxy support
    When I put "world" to the key "proxy_object"
    Then the object "proxy_object" should exist
    And the object "proxy_object" should contain "world"

    When I delete the object "proxy_object"
    Then the object "proxy_object" should not exist

    And I teardown the local proxy server

  @pagination
  Scenario: Paginating responses
    Given an empty bucket
    And I put "data" to the key "obj0"
    And I put "data" to the key "obj1"
    And I put "data" to the key "obj2"
    And I put "data" to the key "obj3"
    And I put "data" to the key "obj4"
    And I put "data" to the key "obj5"
    And I put "data" to the key "obj6"
    And I put "data" to the key "obj7"
    And I put "data" to the key "obj8"
    And I put "data" to the key "obj9"
    And the object "obj9" should exist
    And I setup the listObjects request for the bucket
    When I paginate the "listObjects" operation with limit 3
    Then I should get 4 pages

  @error
  Scenario: Error handling
    Given I put "data" to the invalid key ""
    Then the status code should be 400
