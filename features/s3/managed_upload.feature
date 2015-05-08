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
    And the ContentLength should equal 524288000

  Scenario: Uploading an empty stream
    When I use S3 managed upload to upload an empty stream to the key "empty_upload_stream"
    Then the multipart upload should succeed
    And I should get progress events
    Then the object "empty_upload_stream" should exist
    And the ContentLength should equal 0

  Scenario: Uploading a small stream
    When I use S3 managed upload to upload a small stream to the key "small_upload_stream"
    Then the multipart upload should succeed
    And I should get progress events
    Then the object "small_upload_stream" should exist
    And the ContentLength should equal 1048576

  Scenario: Uploading a large stream
    When I use S3 managed upload to upload a large stream to the key "large_upload_stream"
    Then the multipart upload should succeed
    And I should get progress events
    Then the object "large_upload_stream" should exist
    And the ContentLength should equal 524288000
