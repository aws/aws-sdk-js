# language: en
@codedeploy
Feature: AWS CodeDeploy

  I want to use AWS CodeDeploy

  Scenario: Listing Applicaitons
    Given I run the "listApplications" operation
    Then the request should be successful
    And the value at "applications" should be a list

  Scenario: Error handling
    Given I run the "createApplication" operation with params:
    """
    { "applicationName": "" }
    """
    Then the error code should be "ApplicationNameRequiredException"
