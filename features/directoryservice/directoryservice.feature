# language: en
@directoryservice
Feature: AWS Directory Service

  I want to use AWS Directory Service

  Scenario: Listing directories
    Given I run the "describeDirectories" operation
    Then the request should be successful
    And the value at "DirectoryDescriptions" should be a list

  Scenario: Error handling
    Given I run the "createDirectory" operation with params:
    """
    { "Name": "", "Password": "" , "Size": ""}
    """
    Then the error code should be "ValidationException"
