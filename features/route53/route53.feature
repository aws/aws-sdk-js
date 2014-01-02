# language: en
@route53
Feature: Amazon Route 53

  I want to use Amazon Route 53

  Scenario: Managing hosted zones
    When I create a Route53 hosted zone with name prefix "aws-sdk-js"
    Then the result should contain the hosted zone ID
    And the result should contain the change ID
    And the result should contain the hosted zone name

    When I get information about the Route53 change ID
    Then the change status should be PENDING or INSYNC

    When I get information about the Route53 hosted zone ID
    Then the result should contain multiple nameservers

    And I delete the Route53 hosted zone

  Scenario: Managing health checks
    When I create a Route53 TCP health check with name prefix "aws-sdk-js"
    Then the result should contain health check information
    And the result should contain the health check ID

    When I get information about the health check ID
    Then the result should contain the previous health check information

    And I delete the Route53 TCP health check

  Scenario: Type checking
    When I list Route53 hosted zones
    Then the result should contain a property RequestId with a string
    And the result should contain a property HostedZones with an Array

  Scenario: Error handling
    When I create a Route53 hosted zone with name prefix ""
    Then the error code should be "InvalidInput"
    And the error message should match:
    """
    Member must have length greater than or equal to 1
    """
