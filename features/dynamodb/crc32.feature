# language: en
@dynamodb @dynamodb-2011-12-05 @crc32
Feature: CRC32 response validation

  Scenario: Retry on corrupted request
    Given my first request is corrupted with CRC checking ON
    Then the request should be retried
    And the request should not fail with a CRC checking error

  Scenario: Failed retries on corrupted request
    Given all of my requests are corrupted with CRC checking ON
    Then the request is retried the maximum number of times
    And the request should fail with a CRC checking error

  Scenario: Ignore corrupted request with CRC checking OFF
    Given my first request is corrupted with CRC checking OFF
    Then the request should not be retried
    And the request should not fail with a CRC checking error
