# language: en
@mobileanalytics
Feature: Amazon Mobile Analytics

  I want to use Amazon Mobile Analytics

  Scenario: Putting events
        Given I run the "putEvents" operation with params:
    """
    {
        "events":[
            {
                "eventType":"_session.start",
                "timestamp":"2015-03-19T17:32:40.577Z",
                "session":{
                    "id":"715fc007-8c32-1e50-0cf2-c45311393281",
                    "startTimestamp":"2015-03-19T17:32:40.560Z"
                },
                "version":"v2.0",
                "attributes":{},
                "metrics":{}
            }
        ],
        "clientContext": "{\"client\":{\"client_id\":\"b4a5edf7-fbd4-6e8f-e0ba-8a5632c76191\"},\"env\":{\"platform\":\"\"},\"services\":{\"mobile_analytics\":{\"app_id\":\"f94b9f4fd5004f94a31b66187a227610\",\"sdk_name\":\"aws-sdk-mobile-analytics-js\",\"sdk_version\":\"0.9.0\"}},\"custom\":{}}"
    }
    """
    Then the request should be successful

  Scenario: Error handling
    Given I run the "putEvents" operation with params:
    """
    {"events": [{"eventType": "test", "timestamp": "test"}], "clientContext": "test"}
    """
    Then the error code should be "BadRequestException"
