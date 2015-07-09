# language: en
@codecommit
Feature: AWS CodeCommit

  I want to use AWS CodeCommit

  Scenario: Listing repositories
    Given I run the "listRepositories" operation
    Then the request should be successful
    And the value at "repositories" should be a list

  Scenario: Error handling
    Given I run the "listBranches" operation with params:
    """
    { "repositoryName": "fake-repo" }
    """
    Then the error code should be "RepositoryDoesNotExistException"
