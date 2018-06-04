module.exports = {
  "version": 1,
  "defaults": {
    "configuration": {
      "accessKey": "access-key",
      "userAgent": "my-user-agent",
      "region": "us-west-2",
      "clientSideMonitoring": true,
      "environmentVariables": {
        "AWS_PROFILE": "default",
        "AWSCSMENABLED": "true"
      },
      "sharedConfigFile": {}
    }
  },
  "cases": [
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
          "Service" : "DynamoDB",
          "Api" : "PutItem",
          "ClientId" : "",
          "Timestamp" : "ANY",
          "Type" : "ApiCall",
          "Version" : 1,
          "Latency" : "ANY",
          "AttemptCount" : 1
        },
        {
          "Service" : "DynamoDB",
          "Api" : "PutItem",
          "ClientId" : "",
          "Timestamp" : "ANY",
          "Type" : "ApiCallAttempt",
          "Version" : 1,
          "Fqdn" : "dynamodb.us-east-1.amazonaws.com",
          "Region" : "us-east-1",
          "UserAgent" : "my-user-agent",
          "AccessKey" : "access-key",
          "AttemptLatency" : "ANY",
          "HttpStatusCode" : 200,
          "XAmznRequestId" : "request-id"
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
          "Service" : "DynamoDB",
          "Api" : "PutItem",
          "ClientId" : "",
          "Timestamp" : "ANY",
          "Type" : "ApiCall",
          "Version" : 1,
          "Latency" : "ANY",
          "AttemptCount" : 2
        },
        {
          "Service" : "DynamoDB",
          "Api" : "PutItem",
          "ClientId" : "",
          "Timestamp" : "ANY",
          "Type" : "ApiCallAttempt",
          "Version" : 1,
          "Fqdn" : "dynamodb.us-west-2.amazonaws.com",
          "Region" : "us-west-2",
          "UserAgent" : "my-user-agent",
          "AccessKey" : "access-key",
          "SessionToken" : "ANY",
          "AttemptLatency" : "ANY",
          "HttpStatusCode" : 400,
          "AwsException" : "ProvisionedThroughputExceededException",
          "AwsExceptionMessage" : "ANY",
        },
        {
          "Service" : "DynamoDB",
          "Api" : "PutItem",
          "ClientId" : "",
          "Timestamp" : "ANY",
          "Type" : "ApiCallAttempt",
          "Version" : 1,
          "Fqdn" : "dynamodb.us-west-2.amazonaws.com",
          "Region" : "us-west-2",
          "UserAgent" : "my-user-agent",
          "AccessKey" : "access-key",
          "SessionToken" : "ANY",
          "AttemptLatency" : "ANY",
          "HttpStatusCode" : 200,
          "XAmznRequestId" : "request-id"
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
          "params": {"Bucket": "bucket", "Key": "key"},
          "attemptResponses": [
            {
              "sdkException": "NetworkingError",
              "sdkExceptionMessage": "NetworkingError",
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
          "Service" : "S3",
          "Api" : "GetObject",
          "ClientId" : "",
          "Timestamp" : "ANY",
          "Type" : "ApiCall",
          "Version" : 1,
          "Latency" : "ANY",
          "AttemptCount" : 2
        },
        {
          "Service" : "S3",
          "Api" : "GetObject",
          "ClientId" : "",
          "Timestamp" : "ANY",
          "Type" : "ApiCallAttempt",
          "Version" : 1,
          "Fqdn" : "bucket.s3.us-west-2.amazonaws.com",
          "Region" : "us-west-2",
          "UserAgent" : "my-user-agent",
          "AccessKey" : "access-key",
          "AttemptLatency" : "ANY",
          "SdkException" : "NetworkingError",
        },
        {
          "Service" : "S3",
          "Api" : "GetObject",
          "ClientId" : "",
          "Timestamp" : "ANY",
          "Type" : "ApiCallAttempt",
          "Version" : 1,
          "Fqdn" : "bucket.s3.us-west-2.amazonaws.com",
          "Region" :  "",
          "UserAgent" : "my-user-agent",
          "AccessKey" : "access-key",
          "AttemptLatency" : "ANY",
          "HttpStatusCode" : 200,
          "XAmzRequestId" : "ANY",
          "XAmzId2" : "ANY",
        }          
      ]
    },

    //Basical test cases as examples
    {
      "description": "Test a single client API call",
      "configuration": {},
      "apiCalls": [
        {
          "serviceId": "EC2",
          "operationName": "DescribeRegions",
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
          "Service": "EC2",
          "Api": "DescribeRegions",
          "ClientId": "",
          "Version": 1,
          "Timestamp": "ANY",
          "AttemptLatency": "ANY",
          "Fqdn": "ec2.us-west-2.amazonaws.com",
          "UserAgent": "my-user-agent",
          "Region": "us-west-2",
          "AccessKey": "access-key",
          "HttpStatusCode": 200
        },
        {
          "Type": "ApiCall",
          "Service": "EC2",
          "Api": "DescribeRegions",
          "ClientId": "",
          "Timestamp": "ANY",
          "Version": 1,
          "AttemptCount": 1,
          "Latency": "ANY"
        }
      ]
    },
    {
      "description": "Test a single client API call with bad request",
      "configuration": {},
      "apiCalls": [
        {
          "serviceId": "EC2",
          "operationName": "DescribeRegions",
          "params": {
            "RegionNames": [
              "some-non-existent-region"
            ]
          },
          "attemptResponses": [
            {
              "httpStatus": 400,
              "responseHeaders": {},
              "errorCode": "InvalidParameterValue",
              "errorMessage": "Invalid region provided"
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Type": "ApiCallAttempt",
          "Service": "EC2",
          "Api": "DescribeRegions",
          "ClientId": "",
          "Version": 1,
          "Timestamp": "ANY",
          "AttemptLatency": "ANY",
          "Fqdn": "ec2.us-west-2.amazonaws.com",
          "UserAgent": "my-user-agent",
          "Region": "us-west-2",
          "AccessKey": "access-key",
          "HttpStatusCode": 400,
          "AwsException": "InvalidParameterValue",
          "AwsExceptionMessage": "Invalid region provided"
        },
        {
          "Type": "ApiCall",
          "Service": "EC2",
          "Api": "DescribeRegions",
          "ClientId": "",
          "Timestamp": "ANY",
          "Version": 1,
          "AttemptCount": 1,
          "Latency": "ANY"
        }
      ]
    },
    {
      "description": "Test a single client API call with retries",
      "configuration": {},
      "apiCalls": [
        {
          "serviceId": "EC2",
          "operationName": "DescribeRegions",
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
          "Service": "EC2",
          "Api": "DescribeRegions",
          "ClientId": "",
          "Version": 1,
          "Timestamp": "ANY",
          "AttemptLatency": "ANY",
          "Fqdn": "ec2.us-west-2.amazonaws.com",
          "UserAgent": "my-user-agent",
          "Region": "us-west-2",
          "AccessKey": "access-key",
          "HttpStatusCode": 503,
          "AwsException": "ServiceUnavailable",
          "AwsExceptionMessage": "Service is unavailable"
        },
        {
          "Type": "ApiCallAttempt",
          "Service": "EC2",
          "Api": "DescribeRegions",
          "ClientId": "",
          "Version": 1,
          "Timestamp": "ANY",
          "AttemptLatency": "ANY",
          "Fqdn": "ec2.us-west-2.amazonaws.com",
          "UserAgent": "my-user-agent",
          "Region": "us-west-2",
          "AccessKey": "access-key",
          "HttpStatusCode": 200
        },
        {
          "Type": "ApiCall",
          "Service": "EC2",
          "Api": "DescribeRegions",
          "ClientId": "",
          "Timestamp": "ANY",
          "Version": 1,
          "AttemptCount": 2,
          "Latency": "ANY"
        }
      ]
    },
    {
      "description": "Test a single client API call with non-retryable SDK exception",
      "configuration": {},
      "apiCalls": [
        {
          "serviceId": "EC2",
          "operationName": "DescribeRegions",
          "params": {},
          "attemptResponses": [
            {
              "sdkException": "NonRetryableException",
              "sdkExceptionMessage": "Unexpected exception was thrown",
              "retryable": false,
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Type": "ApiCallAttempt",
          "Service": "EC2",
          "Api": "DescribeRegions",
          "ClientId": "",
          "Version": 1,
          "Timestamp": "ANY",
          "AttemptLatency": "ANY",
          "Fqdn": "ec2.us-west-2.amazonaws.com",
          "UserAgent": "my-user-agent",
          "Region": "us-west-2",
          "AccessKey": "access-key",
          "SdkException": "NonRetryableException",
          "SdkExceptionMessage": "Unexpected exception was thrown"
        },
        {
          "Type": "ApiCall",
          "Service": "EC2",
          "Api": "DescribeRegions",
          "ClientId": "",
          "Timestamp": "ANY",
          "Version": 1,
          "AttemptCount": 1,
          "Latency": "ANY"
        }
      ]
    }
  ]
}
