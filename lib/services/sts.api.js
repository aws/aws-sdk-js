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
  signatureVersion: 'v4',
  serviceName: 'sts',
  resultWrapped: true,
  globalEndpoint: 'sts.amazonaws.com',
  apiVersion: '2011-06-15',
  timestampFormat: 'iso8601',
  operations: {
    assumeRole: {
      n: 'AssumeRole',
      i: {
        m: {
          RoleArn: {
            r: 1
          },
          RoleSessionName: {
            r: 1
          },
          Policy: {
          },
          DurationSeconds: {
            t: 'i'
          },
          ExternalId: {
          }
        }
      },
      o: {
        Credentials: {
          t: 'o',
          m: {
            AccessKeyId: {
            },
            SecretAccessKey: {
            },
            SessionToken: {
            },
            Expiration: {
              t: 't'
            }
          }
        },
        AssumedRoleUser: {
          t: 'o',
          m: {
            AssumedRoleId: {
            },
            Arn: {
            }
          }
        },
        PackedPolicySize: {
          t: 'i'
        }
      }
    },
    getFederationToken: {
      n: 'GetFederationToken',
      i: {
        m: {
          Name: {
            r: 1
          },
          Policy: {
          },
          DurationSeconds: {
            t: 'i'
          }
        }
      },
      o: {
        Credentials: {
          t: 'o',
          m: {
            AccessKeyId: {
            },
            SecretAccessKey: {
            },
            SessionToken: {
            },
            Expiration: {
              t: 't'
            }
          }
        },
        FederatedUser: {
          t: 'o',
          m: {
            FederatedUserId: {
            },
            Arn: {
            }
          }
        },
        PackedPolicySize: {
          t: 'i'
        }
      }
    },
    getSessionToken: {
      n: 'GetSessionToken',
      i: {
        m: {
          DurationSeconds: {
            t: 'i'
          },
          SerialNumber: {
          },
          TokenCode: {
          }
        }
      },
      o: {
        Credentials: {
          t: 'o',
          m: {
            AccessKeyId: {
            },
            SecretAccessKey: {
            },
            SessionToken: {
            },
            Expiration: {
              t: 't'
            }
          }
        }
      }
    }
  }
};
