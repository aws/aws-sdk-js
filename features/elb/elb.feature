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
@elb
Feature: Elastic Load Balancing

  I want to use Elastic Load Balancing

  Scenario: Creating load balancers
    Given I create a load balancer with name prefix "aws-sdk-js"
    And I describe load balancers with the load balancer name
    Then the load balancer should be in the list
    And I delete the load balancer

  Scenario: Error handling
    Given I create a load balancer with name prefix "verylongelasticloadbalancername"
    Then the error code should be "ValidationError"
    Then the error message should be:
    """
    LoadBalancer name cannot be longer than 32 characters
    """
