module.exports = {
  "version": 1,
  "defaults": {
    "configuration": {
      "accessKey": "myaccesskey",
      "region": "us-west-2",
      "environmentVariables": {
        "AWS_CSM_ENABLED": "true"
      },
      "sharedConfigFile": {}
    },
    "optionalEventFields": {
      "ApiCall": {},
      "ApiCallAttempt": {
        "DestinationIp": "ANY_STR",
        "AcquireConnectionLatency": "ANY_INT",
        "ConnectionReused": "ANY_INT",
        "ConnectLatency": "ANY_INT",
        "RequestLatency": "ANY_INT",
        "DnsLatency": "ANY_INT",
        "TcpLatency": "ANY_INT",
        "SslLatency": "ANY_INT"
      }
    }
  },
  "cases": [
    {
      "description": "Test a single client API call with no configuration provided",
      "configuration": {
        "accessKey": "myaccesskey",
        "region": "us-west-2",
        "environmentVariables": {},
        "sharedConfigFile": {}
      },
      "apiCalls": [
        {
          "serviceId": "CSM Test",
          "operationName": "TestOperation",
          "params": {},
          "attemptResponses": [
            {
              "httpStatus": 200,
              "responseHeaders": {}
            }
          ]
        }
      ],
      "expectedMonitoringEvents": []
    },
    {
      "description": "Test a single client API call",
      "apiCalls": [
        {
          "serviceId": "CSM Test",
          "operationName": "TestOperation",
          "params": {},
          "attemptResponses": [
            {
              "httpStatus": 200,
              "responseHeaders": {}
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Version": 1,
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "UserAgent": "ANY_STR",
          "Region": "us-west-2",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200
        },
        {
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Version": 1,
          "AttemptCount": 1,
          "Latency": "ANY_INT"

        }
      ]
    },
    {
      "description": "Test a single client API call with bad request",
      "apiCalls": [
        {
          "serviceId": "CSM Test",
          "operationName": "TestOperation",
          "params": {},
          "attemptResponses": [
            {
              "httpStatus": 400,
              "responseHeaders": {},
              "errorCode": "TestOperationException",
              "errorMessage": "There was an error"
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Version": 1,
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "UserAgent": "ANY_STR",
          "Region": "us-west-2",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 400,
          "AwsException": "TestOperationException",
          "AwsExceptionMessage": "There was an error"
        },
        {
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Version": 1,
          "AttemptCount": 1,
          "Latency": "ANY_INT"
        }
      ]
    },
    {
      "description": "Test a single client API call with retries",
      "apiCalls": [
        {
          "serviceId": "CSM Test",
          "operationName": "TestOperation",
          "params": {},
          "attemptResponses": [
            {
              "httpStatus": 503,
              "responseHeaders": {},
              "errorCode": "ServiceUnavailable",
              "errorMessage": "Service is unavailable"
            },
            {
              "httpStatus": 200,
              "responseHeaders": {}
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Version": 1,
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "UserAgent": "ANY_STR",
          "Region": "us-west-2",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 503,
          "AwsException": "ServiceUnavailable",
          "AwsExceptionMessage": "Service is unavailable"
        },
        {
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Version": 1,
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "UserAgent": "ANY_STR",
          "Region": "us-west-2",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200
        },
        {
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Version": 1,
          "AttemptCount": 2,
          "Latency": "ANY_INT"
        }
      ]
    },
    {
      "description": "Test a single client API call with non-retryable SDK exception",
      "apiCalls": [
        {
          "serviceId": "CSM Test",
          "operationName": "TestOperation",
          "params": {},
          "attemptResponses": [
            {
              "sdkException": {
                "isRetryable": false,
                "message": "Unexpected exception was thrown"
              }
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Version": 1,
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "UserAgent": "ANY_STR",
          "Region": "us-west-2",
          "AccessKey": "myaccesskey",
          "SdkException": "ANY_STR",
          "SdkExceptionMessage": "Unexpected exception was thrown"
        },
        {
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Version": 1,
          "AttemptCount": 1,
          "Latency": "ANY_INT"
        }
      ]
    },
    // three scenarios from functional test plan
    {
      "description": "A call to DynamoDb's PutItem API in the IAD region that consists of a single successful attempt",
      "configuration": {
        "region": "us-east-1",
        "paramValidation": false,
      },
      "apiCalls": [
        {
          "serviceId": "DynamoDB",
          "operationName": "PutItem",
          "params": {},
          "attemptResponses": [
            {
              "httpStatus": 200,
              "responseHeaders": {
                "x-amzn-requestid": "request-id"
              }
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Service": "DynamoDB",
          "Api": "PutItem",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Type": "ApiCall",
          "Version": 1,
          "Latency": "ANY_INT",
          "AttemptCount": 1
        },
        {
          "Service": "DynamoDB",
          "Api": "PutItem",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Type": "ApiCallAttempt",
          "Version": 1,
          "Fqdn": "dynamodb.us-east-1.amazonaws.com",
          "Region": "us-east-1",
          "UserAgent": "my-user-agent",
          "AccessKey": "myaccesskey",
          "AttemptLatency": "ANY_INT",
          "HttpStatusCode": 200,
          "XAmznRequestId": "request-id"
        }
      ]
    },
    {
      "description": "A call to DynamoDb's PutItem API in the PDX region. The first attempt fails with a ThroughputExceeded exception, while the second attempt succeeds.",
      "configuration": {
        "region": "us-west-2",
        "paramValidation": false,
      },
      "apiCalls": [
        {
          "serviceId": "DynamoDB",
          "operationName": "PutItem",
          "params": {},
          "attemptResponses": [
            {
              "httpStatus": 400,
              "responseHeaders": {},
              "errorCode": "ProvisionedThroughputExceededException",
              "errorMessage": "provisioned throughput exceeded."
            },
            {
              "httpStatus": 200,
              "responseHeaders": {
                "x-amzn-requestid": "request-id"
              },
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Service": "DynamoDB",
          "Api": "PutItem",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Type": "ApiCall",
          "Version": 1,
          "Latency": "ANY_INT",
          "AttemptCount": 2
        },
        {
          "Service": "DynamoDB",
          "Api": "PutItem",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Type": "ApiCallAttempt",
          "Version": 1,
          "Fqdn": "dynamodb.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "my-user-agent",
          "AccessKey": "myaccesskey",
          "SessionToken": "ANY_STR",
          "AttemptLatency": "ANY_INT",
          "HttpStatusCode": 400,
          "AwsException": "ProvisionedThroughputExceededException",
          "AwsExceptionMessage": "ANY_STR",
        },
        {
          "Service": "DynamoDB",
          "Api": "PutItem",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Type": "ApiCallAttempt",
          "Version": 1,
          "Fqdn": "dynamodb.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "my-user-agent",
          "AccessKey": "myaccesskey",
          "SessionToken": "ANY_STR",
          "AttemptLatency": "ANY_INT",
          "HttpStatusCode": 200,
          "XAmznRequestId": "request-id"
        }
      ]
    },
    {
      "description": "A call to S3's GetObject API via virtual addressing.  The first attempt fails with a DNS resolution error, while the second attempt succeeds.",
      "configuration": {},
      "apiCalls": [
        {
          "serviceId": "S3",
          "operationName": "GetObject",
          "params": { "Bucket": "bucket", "Key": "key" },
          "attemptResponses": [
            {
              "sdkException": {
                "message": "NetworkingError"
              },
            },
            {
              "httpStatus": 200,
              "responseHeaders": {
                "x-amzn-requestid": "request-id",
                "x-amz-id-2": "request-id-2",
              },
            }
          ],
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Service": "S3",
          "Api": "GetObject",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Type": "ApiCall",
          "Version": 1,
          "Latency": "ANY_INT",
          "AttemptCount": 2
        },
        {
          "Service": "S3",
          "Api": "GetObject",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Type": "ApiCallAttempt",
          "Version": 1,
          "Fqdn": "bucket.s3.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "my-user-agent",
          "AccessKey": "myaccesskey",
          "AttemptLatency": "ANY_INT",
          "SdkException": "NetworkingError",
        },
        {
          "Service": "S3",
          "Api": "GetObject",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Type": "ApiCallAttempt",
          "Version": 1,
          "Fqdn": "bucket.s3.us-west-2.amazonaws.com",
          "Region": "",
          "UserAgent": "my-user-agent",
          "AccessKey": "myaccesskey",
          "AttemptLatency": "ANY_INT",
          "HttpStatusCode": 200,
          "XAmzRequestId": "ANY_STR",
          "XAmzId2": "ANY_STR",
        }
      ]
    },
  ]
}
