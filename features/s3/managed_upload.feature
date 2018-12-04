# language: en
@s3 @managed_upload
Feature: S3 Managed Upload

  Background:
    Given I create a shared bucket

  Scenario: Uploading an empty buffer
    When I use S3 managed upload to upload an empty buffer to the key "empty_upload_buffer"
    Then the multipart upload should succeed
    And the object "empty_upload_buffer" should exist
    And the ContentLength should equal 0

  Scenario: Uploading a small buffer
    When I use S3 managed upload to upload a small buffer to the key "small_upload_buffer"
    Then the multipart upload should succeed
    And the object "small_upload_buffer" should exist
    And the ContentLength should equal 1048576

  Scenario: Uploading a large buffer
    When I use S3 managed upload to upload a large buffer to the key "large_upload_buffer"
    Then the multipart upload should succeed
    And the object "large_upload_buffer" should exist
    And the ContentLength should equal 20971520

  @streaming
  Scenario: Uploading an empty stream
    When I use S3 managed upload to upload an empty stream to the key "empty_upload_stream"
    Then the multipart upload should succeed
    Then the object "empty_upload_stream" should exist
    And the ContentLength should equal 0

  @streaming
  Scenario: Uploading a small stream
    When I use S3 managed upload to upload a small stream to the key "small_upload_stream"
    Then the multipart upload should succeed
    And I should get progress events
    Then the object "small_upload_stream" should exist
    And the ContentLength should equal 1048576

  @streaming
  Scenario: Uploading a large stream
    When I use S3 managed upload to upload a large stream to the key "large_upload_stream"
    Then the multipart upload should succeed
    And I should get progress events
    Then the object "large_upload_stream" should exist
    And the ContentLength should equal 20971520

  Scenario: Verifying uploaded data integrity
    And I generate the MD5 checksum of a 20MB buffer
    Given I use S3 managed upload to upload the buffer to the key "checksummed_data"
    Then the object "checksummed_data" should exist
    When I get the object "checksummed_data"
    Then the HTTP response should have a content length of 20971520
    And the MD5 checksum of the response data should equal the generated checksum

  @leave_parts_on_error
  Scenario: Resuming an upload
    When I use S3 managed upload to upload some 20MB buffer to the key "broken_buffer"
    And I abort the upload
    Then I receive a "RequestAbortedError" error
    When I resume the upload
    Then the object "broken_buffer" should exist
    And the ContentLength should equal 20971520

  @leave_parts_on_error
  Scenario: Resuming a partial upload
    When I use S3 managed upload to partially upload some 20MB buffer to the key "partial_buffer"
    Then I receive a "RequestAbortedError" error
    When I resume the upload
    Then the object "partial_buffer" should exist
    And the ContentLength should equal 20971520
    And uploadPart should have been called 5 times
    