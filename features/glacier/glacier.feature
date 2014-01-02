# language: en
@glacier
Feature: Amazon Glacier

  I want to use Amazon Glacier

  @vault
  Scenario: Creating a vault
    Given I have a Glacier vault
    When I describe the Glacier vault
    Then the result should contain a property NumberOfArchives with a number

  @archive
  Scenario: Uploading an archive
    Given I have a Glacier vault
    When I upload a 0.25MB Glacier archive to the vault
    Then the result should contain the Glacier archive ID
    And the result should contain the same tree hash checksum
    And I delete the Glacier archive

  @multipart
  Scenario: Multi-part upload
    Given I have a Glacier vault
    When I initiate a Glacier multi-part upload on a 2.5MB archive in 1MB chunks
    Then the result should contain the Glacier multi-part upload ID
    And I send the Glacier archive data in chunks
    And I complete the Glacier multi-part upload
    Then the result should contain the Glacier archive ID
    And the result should contain the same tree hash checksum
    And I delete the Glacier archive

  @error
  Scenario: Error handling
    Given I have a Glacier vault
    And I upload a 0.05MB Glacier archive to the vault with incorrect checksum
    Then the error code should be "InvalidParameterValueException"
    And the error message should match:
    """
    Checksum mismatch:
    """

    When I upload a 0.05MB Glacier archive to the vault with invalid checksum
    Then the error code should be "InvalidParameterValueException"
    And the error message should equal:
    """
    Invalid x-amz-sha256-tree-hash: 000
    """
