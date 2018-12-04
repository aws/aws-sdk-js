# language: en
@dms
Feature: 

  I want to use AWS Database Migration Service

  Scenario: Making a request
    Given I run the "describeEndpoints" operation
    Then the request should be successful
    And the value at "Endpoints" should be a list

  Scenario: Error handling
    Given I run the "startReplicationTask" operation with params:
    """
    { "ReplicationTaskArn": "fake-arn", "StartReplicationTaskType": "fake-arn"}
    """
    Then the error code should be "InvalidParameterValueException"
