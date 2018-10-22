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
      "ApiCall": {
        "APICallTimeout": "ANY_INT"
      },
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
          "Latency": "ANY_INT",
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
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
          "Latency": "ANY_INT",
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
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
          "Latency": "ANY_INT",
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
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
          "Latency": "ANY_INT",
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Tests a single client API call with a retryable SDK exception",
      "apiCalls": [
        {
          "serviceId": "CSM Test",
          "operationName": "TestOperation",
          "params": {},
          "attemptResponses": [
            {
              "sdkException": {
                "isRetryable": true,
                "message": "Retryable exception was thrown"
              }
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
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "SdkException": "ANY_STR",
          "SdkExceptionMessage": "Retryable exception was thrown"
        },
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 2,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Tests enabling using the shared config file",
      "configuration": {
        "accessKey": "myaccesskey",
        "region": "us-west-2",
        "environmentVariables": {},
        "sharedConfigFile": {
          "csm_enabled": "true"
        }
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
      "expectedMonitoringEvents": [
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 1,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Tests explicitly disabling with environment variables",
      "configuration": {
        "accessKey": "myaccesskey",
        "region": "us-west-2",
        "environmentVariables": {
          "AWS_CSM_ENABLED": "false"
        },
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
      "description": "Tests explicitly disabling with shared config file",
      "configuration": {
        "accessKey": "myaccesskey",
        "region": "us-west-2",
        "environmentVariables": {},
        "sharedConfigFile": {
          "csm_enabled": "false"
        }
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
      "description": "Tests overriding disables in shared config file with environment variables",
      "configuration": {
        "accessKey": "myaccesskey",
        "region": "us-west-2",
        "environmentVariables": {
          "AWS_CSM_ENABLED": "true"
        },
        "sharedConfigFile": {
          "csm_enabled": "false"
        }
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
      "expectedMonitoringEvents": [
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 1,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Tests overriding enables in shared config file with environment variables",
      "configuration": {
        "accessKey": "myaccesskey",
        "region": "us-west-2",
        "environmentVariables": {
          "AWS_CSM_ENABLED": "false"
        },
        "sharedConfigFile": {
          "csm_enabled": "true"
        }
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
      "description": "Tests setting the client id with environment variables",
      "configuration": {
        "accessKey": "myaccesskey",
        "region": "us-west-2",
        "environmentVariables": {
          "AWS_CSM_ENABLED": "true",
          "AWS_CSM_CLIENT_ID": "from-env"
        },
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
      "expectedMonitoringEvents": [
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "from-env",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "from-env",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 1,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Tests setting the client id with shared config file",
      "configuration": {
        "accessKey": "myaccesskey",
        "region": "us-west-2",
        "environmentVariables": {
          "AWS_CSM_ENABLED": "true"
        },
        "sharedConfigFile": {
          "csm_client_id": "from-config"
        }
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
      "expectedMonitoringEvents": [
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "from-config",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "from-config",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 1,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Tests setting the client id with environment variables overrides the client id from the shared config file",
      "configuration": {
        "accessKey": "myaccesskey",
        "region": "us-west-2",
        "environmentVariables": {
          "AWS_CSM_ENABLED": "true",
          "AWS_CSM_CLIENT_ID": "from-env"
        },
        "sharedConfigFile": {
          "csm_client_id": "from-config"
        }
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
      "expectedMonitoringEvents": [
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "from-env",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "from-env",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 1,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Tests a single client API call using a session token",
      "configuration": {
        "accessKey": "myaccesskey",
        "sessionToken": "mysessiontoken",
        "region": "us-west-2",
        "environmentVariables": {
          "AWS_CSM_ENABLED": "true"
        },
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
      "expectedMonitoringEvents": [
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "SessionToken": "mysessiontoken",
          "HttpStatusCode": 200
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 1,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Test a single client API call with x-amzn-RequestId response header",
      "apiCalls": [
        {
          "serviceId": "CSM Test",
          "operationName": "TestOperation",
          "params": {},
          "attemptResponses": [
            {
              "httpStatus": 200,
              "responseHeaders": {
                "x-amzn-RequestId": "request-id"
              }
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200,
          "XAmznRequestId": "request-id"
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 1,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Test a single client API call with x-amz-request-id response header",
      "apiCalls": [
        {
          "serviceId": "CSM Test",
          "operationName": "TestOperation",
          "params": {},
          "attemptResponses": [
            {
              "httpStatus": 200,
              "responseHeaders": {
                "x-amz-request-id": "request-id"
              }
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200,
          "XAmzRequestId": "request-id"
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 1,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Test a single client API call with x-amz-id-2 response header",
      "apiCalls": [
        {
          "serviceId": "CSM Test",
          "operationName": "TestOperation",
          "params": {},
          "attemptResponses": [
            {
              "httpStatus": 200,
              "responseHeaders": {
                "x-amz-id-2": "request-id"
              }
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "HttpStatusCode": 200,
          "XAmzId2": "request-id"
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 1,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 0,
        }
      ]
    },
    {
      "description": "Test a single client API call with exceeded retries",
      "configuration": {
        "maxRetries": 1
      },
      "apiCalls": [
        {
          "serviceId": "CSM Test",
          "operationName": "TestOperation",
          "params": {},
          "attemptResponses": [
            {
              "sdkException": {
                "isRetryable": true,
                "message": "Retryable exception was thrown"
              }
            },
            {
              "sdkException": {
                "isRetryable": true,
                "message": "Retryable exception was thrown"
              }
            }
          ]
        }
      ],
      "expectedMonitoringEvents": [
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "SdkException": "ANY_STR",
          "SdkExceptionMessage": "Retryable exception was thrown"
        },
        {
          "Version": 1,
          "Type": "ApiCallAttempt",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "AttemptLatency": "ANY_INT",
          "Fqdn": "csmtest.us-west-2.amazonaws.com",
          "Region": "us-west-2",
          "UserAgent": "ANY_STR",
          "AccessKey": "myaccesskey",
          "SdkException": "ANY_STR",
          "SdkExceptionMessage": "Retryable exception was thrown"
        },
        {
          "Version": 1,
          "Type": "ApiCall",
          "Service": "CSM Test",
          "Api": "TestOperation",
          "ClientId": "",
          "Timestamp": "ANY_INT",
          "Latency": "ANY_INT",
          "AttemptCount": 2,
          "Region": "us-west-2",
          "MaxRetriesExceeded": 1,
        }
      ]
    }
  ]
}