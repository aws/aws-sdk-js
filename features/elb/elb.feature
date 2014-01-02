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
