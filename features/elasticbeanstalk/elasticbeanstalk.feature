# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

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
