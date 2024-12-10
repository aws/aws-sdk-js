# language: en
@s3 @buckets
Feature: Working with Buckets

  Scenario: CRUD buckets using the classic endpoint
    Given I am using the S3 "us-east-1" region
    When I create a bucket
    Then the bucket should exist
    When I delete the bucket
    Then the bucket should not exist

  Scenario: CRUD buckets using a regional endpoint
    Given I am using the S3 "us-west-2" region
    When I create a bucket
    Then the bucket should exist
    When I delete the bucket
    Then the bucket should not exist

  @us-east-1-regional-endpoint
  Scenario: Support us-east-1 regional endpoint
    Given I am using the S3 us-east-1 regional endpoint
    When I create a bucket
    Then the bucket should exist
    When I delete the bucket
    Then the bucket should not exist

  @cors
  Scenario: Bucket CORS
    When I create a bucket
    And I put a bucket CORS configuration
    And I get the bucket CORS configuration
    Then the AllowedMethods list should inclue "DELETE POST PUT"
    Then the AllowedOrigin value should equal "http://example.com"
    Then the AllowedHeader value should equal "*"
    Then the ExposeHeader value should equal "x-amz-server-side-encryption"
    Then the MaxAgeSeconds value should equal 5000
    Then I delete the bucket

  @lifecycle
  Scenario: Bucket lifecycles
    When I create a bucket
    And I put a transition lifecycle configuration on the bucket with prefix "/"
    And I get the transition lifecycle configuration on the bucket
    Then the lifecycle configuration should have transition days of 0
    And the lifecycle configuration should have transition storage class of "GLACIER"
    Then I delete the bucket

  @tagging
  Scenario: Bucket Tagging
    When I create a bucket
    And I put a bucket tag with key "KEY" and value "VALUE"
    And I get the bucket tagging
    Then the first tag in the tag set should have key and value "KEY", "VALUE"
    Then I delete the bucket

  Scenario: Access bucket following 307 redirects
    Given I am using the S3 "us-east-1" region with signatureVersion "s3"
    When I create a bucket with the location constraint "EU"
    Then the bucket should exist
    Then the bucket should have a location constraint of "EU"
    Then I delete the bucket

  Scenario: Working with bucket names that contain '.'
    When I create a bucket with a DNS compatible name that contains a dot
    Then the bucket should exist
    When I delete the bucket
    Then the bucket should not exist

  @path-style
  Scenario: Operating on a bucket using path style
    Given I force path style requests
    And I create a bucket
    When I put "abc" to the key "hello" in the bucket
    Then the bucket name should be in the request path
    And the bucket name should not be in the request host
    Then I delete the object "hello" from the bucket
    Then I delete the bucket

  Scenario: Follow 307 redirect on new buckets
    Given I am using the S3 "us-east-1" region with signatureVersion "s3"
    When I create a bucket with the location constraint "us-west-2"
    And I put a large buffer to the key "largeobject" in the bucket
    Then the object "largeobject" should exist in the bucket
    Then I delete the object "largeobject" from the bucket
    Then I delete the bucket
