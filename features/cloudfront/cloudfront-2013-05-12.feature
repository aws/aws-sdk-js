# language: en
@cloudfront @cloudfront-2013-05-12
Feature: Amazon CloudFront

  I want to use Amazon CloudFront

  Scenario: Listing distributions
    Given I list CloudFront distributions
    Then the result should contain a property Quantity with a number
    And the result should contain a property Items with an Array

  # Let this fail with NoSuchOrigin to confirm we serialized inputs
  # but without creating a distribution.
  Scenario: Creating a distribution
    Given I create a CloudFront distribution with name prefix "aws-js-sdk"
    Then the error code should be "NoSuchOrigin"
    And the error message should be:
    """
    One or more of your origins do not exist.
    """

  Scenario: Error handling
    Given I create a CloudFront distribution with name prefix ""
    Then the error code should be "InvalidArgument"
    And the error message should be:
    """
    The parameter CallerReference is too small.
    """
