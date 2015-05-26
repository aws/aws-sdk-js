# language: en
@efs
Feature: Amazon Elastic File System

  I want to use Amazon Elastic File System

  Scenario: Listing file systems
    Given I run the "describeFileSystems" operation
    Then the request should be successful
    And the value at "FileSystems" should be a list

  Scenario: Error handling
    Given I run the "deleteFileSystem" operation with params:
    """
    { "FileSystemId": "fake-id" }
    """
    Then the error code should be "ValidationException"
