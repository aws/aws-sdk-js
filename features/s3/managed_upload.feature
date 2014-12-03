# language: en
@s3 @managed_upload
Feature: S3 Managed Upload

  Scenario: Uploading a large buffer
    When I use S3 managed upload to upload a large buffer
    Then the multipart upload should succeed

  Scenario: Uploading a large stream
    When I use S3 managed upload to upload a large stream
    Then the multipart upload should succeed
    And I should get progress events
