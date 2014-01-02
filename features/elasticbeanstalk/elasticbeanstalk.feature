# language: en
@elasticbeanstalk
Feature: AWS Elastic Beanstalk

  I want to use AWS Elastic Beanstalk

  @requiresakid
  Scenario: Creating applications and application versions
    Given I create an Elastic Beanstalk application with name prefix "aws-js-sdk"
    And I create an Elastic Beanstalk application version with label "1.0.0"
    And I describe the Elastic Beanstalk application
    Then the result should contain the Elastic Beanstalk application version
    And the result should contain the Elastic Beanstalk application name
    And I delete the Elastic Beanstalk application

  Scenario: Error handling
    Given I create an Elastic Beanstalk application with name prefix ""
    Then the error code should be "ValidationError"
    And the error message should match:
    """
    Value '' at 'applicationName'
    """
