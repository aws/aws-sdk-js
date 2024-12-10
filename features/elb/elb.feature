# language: en
@elb
Feature: Elastic Load Balancing

  I want to use Elastic Load Balancing

  Scenario:  Making a request
    Given I run the "describeLoadBalancers" operation
    Then the request should be successful

  Scenario: Error handling
    Given I create a load balancer with name prefix "verylongelasticloadbalancername"
    Then the error code should be "ValidationError"
    And the status code should be 400
