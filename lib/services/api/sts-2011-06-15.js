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
  format: 'query',
  apiVersion: '2011-06-15',
  endpointPrefix: 'sts',
  globalEndpoint: 'sts.amazonaws.com',
  resultWrapped: true,
  serviceAbbreviation: 'AWS STS',
  serviceFullName: 'AWS Security Token Service',
  signatureVersion: 'v4',
  timestampFormat: 'iso8601',
  operations: {
    assumeRole: {
      name: 'AssumeRole',
      input: {
        type: 'structure',
        members: {
          RoleArn: {
            required: true
          },
          RoleSessionName: {
            required: true
          },
          Policy: {
          },
          DurationSeconds: {
            type: 'integer'
          },
          ExternalId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Credentials: {
            type: 'structure',
            members: {
              AccessKeyId: {
              },
              SecretAccessKey: {
              },
              SessionToken: {
              },
              Expiration: {
                type: 'timestamp'
              }
            }
          },
          AssumedRoleUser: {
            type: 'structure',
            members: {
              AssumedRoleId: {
              },
              Arn: {
              }
            }
          },
          PackedPolicySize: {
            type: 'integer'
          }
        }
      }
    },
    getFederationToken: {
      name: 'GetFederationToken',
      input: {
        type: 'structure',
        members: {
          Name: {
            required: true
          },
          Policy: {
          },
          DurationSeconds: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Credentials: {
            type: 'structure',
            members: {
              AccessKeyId: {
              },
              SecretAccessKey: {
              },
              SessionToken: {
              },
              Expiration: {
                type: 'timestamp'
              }
            }
          },
          FederatedUser: {
            type: 'structure',
            members: {
              FederatedUserId: {
              },
              Arn: {
              }
            }
          },
          PackedPolicySize: {
            type: 'integer'
          }
        }
      }
    },
    getSessionToken: {
      name: 'GetSessionToken',
      input: {
        type: 'structure',
        members: {
          DurationSeconds: {
            type: 'integer'
          },
          SerialNumber: {
          },
          TokenCode: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Credentials: {
            type: 'structure',
            members: {
              AccessKeyId: {
              },
              SecretAccessKey: {
              },
              SessionToken: {
              },
              Expiration: {
                type: 'timestamp'
              }
            }
          }
        }
      }
    }
  }
};
