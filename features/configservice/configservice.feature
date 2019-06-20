# language: en
@configservice
Feature: AWS Config

  I want to use AWS Config

  Scenario: Listing delivery channels
    Given I run the "describeDeliveryChannels" operation
    Then the request should be successful
    And the value at "DeliveryChannels" should be a list
