# language: en
@emr
Feature: Amazon Elastic MapReduce

  I want to use Amazon Elastic MapReduce

  Scenario: Running a job flow
    Given I create a service role with name prefix "emr-integ"
    And I create an instance profile with name prefix "emr-ec2-integ"
    And I create a job flow role with name prefix "emr-ec2-integ"
    And I add the job flow role to the instance profile 
    Then I run an EMR job flow with name prefix "aws-sdk-js-integration"
    And I store the job flow ID
    And when I describe the EMR job flows
    Then the list should contain the job flow ID
    And I terminate the job flow
    And I delete the service role
    And I remove the job flow role from the instance profile
    And I delete the job flow role
    And I delete the instance profile

  Scenario: Error handling
    Given I run an EMR job flow with invalid parameters
    Then the error code should be "ValidationException"
