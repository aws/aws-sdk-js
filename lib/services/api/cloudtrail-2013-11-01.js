/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

module.exports = {
  format: 'json',
  apiVersion: '2013-11-01',
  endpointPrefix: 'cloudtrail',
  jsonVersion: '1.1',
  serviceAbbreviation: 'CloudTrail',
  serviceFullName: 'AWS CloudTrail',
  signatureVersion: 'v4',
  targetPrefix: 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101',
  timestampFormat: 'iso8601',
  operations: {
    createTrail: {
      name: 'CreateTrail',
      input: {
        type: 'structure',
        members: {
          trail: {
            type: 'structure',
            members: {
              Name: {
              },
              S3BucketName: {
              },
              S3KeyPrefix: {
              },
              SnsTopicName: {
              },
              IncludeGlobalServiceEvents: {
                type: 'boolean'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          trail: {
            type: 'structure',
            members: {
              Name: {
              },
              S3BucketName: {
              },
              S3KeyPrefix: {
              },
              SnsTopicName: {
              },
              IncludeGlobalServiceEvents: {
                type: 'boolean'
              }
            }
          }
        }
      }
    },
    deleteTrail: {
      name: 'DeleteTrail',
      input: {
        type: 'structure',
        members: {
          Name: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    describeTrails: {
      name: 'DescribeTrails',
      input: {
        type: 'structure',
        members: {
          trailNameList: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          trailList: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                S3BucketName: {
                },
                S3KeyPrefix: {
                },
                SnsTopicName: {
                },
                IncludeGlobalServiceEvents: {
                  type: 'boolean'
                }
              }
            }
          }
        }
      }
    },
    getTrailStatus: {
      name: 'GetTrailStatus',
      input: {
        type: 'structure',
        members: {
          Name: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          IsLogging: {
            type: 'boolean'
          },
          LatestDeliveryError: {
          },
          LatestNotificationError: {
          },
          LatestDeliveryAttemptTime: {
          },
          LatestDeliveryAttemptSucceeded: {
          },
          LatestNotificationAttemptTime: {
          },
          LatestNotificationAttemptSucceeded: {
          },
          TimeLoggingStarted: {
          },
          TimeLoggingStopped: {
          }
        }
      }
    },
    startLogging: {
      name: 'StartLogging',
      input: {
        type: 'structure',
        members: {
          Name: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    stopLogging: {
      name: 'StopLogging',
      input: {
        type: 'structure',
        members: {
          Name: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    updateTrail: {
      name: 'UpdateTrail',
      input: {
        type: 'structure',
        members: {
          trail: {
            type: 'structure',
            members: {
              Name: {
              },
              S3BucketName: {
              },
              S3KeyPrefix: {
              },
              SnsTopicName: {
              },
              IncludeGlobalServiceEvents: {
                type: 'boolean'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          trail: {
            type: 'structure',
            members: {
              Name: {
              },
              S3BucketName: {
              },
              S3KeyPrefix: {
              },
              SnsTopicName: {
              },
              IncludeGlobalServiceEvents: {
                type: 'boolean'
              }
            }
          }
        }
      }
    }
  }
};
