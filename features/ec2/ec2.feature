# language: en
@ec2
Feature: Amazon Elastic Compute Cloud

  I want to use Amazon Elastic Compute Cloud

  Scenario: DescribeRegions
    Given I describe EC2 regions "us-east-1, us-west-1"
    Then the EC2 endpoint for "us-east-1" should be "ec2.us-east-1.amazonaws.com"
    And the EC2 endpoint for "us-west-1" should be "ec2.us-west-1.amazonaws.com"

  Scenario: Error handling
    Given I describe the EC2 instance ""
    Then the error code should be "MissingParameter"
    And the error message should be:
    """
    The request must contain the parameter InstanceId
    """
    And the status code should be 400

  Scenario: Encrypted CopySnapshot
    Given I attempt to copy an encrypted snapshot across regions
    Then the copy snapshot attempt should be successful

  @pagination
  Scenario: Paginating responses
    Given I paginate the "describeReservedInstancesOfferings" operation with limit 20 and max pages 3
    Then I should get 3 pages
