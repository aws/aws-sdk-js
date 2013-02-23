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
  apiVersion: '2010-06-01',
  endpointPrefix: 'importexport',
  globalEndpoint: 'importexport.amazonaws.com',
  resultWrapped: true,
  serviceFullName: 'AWS Import/Export',
  signatureVersion: 'v2',
  timestampFormat: 'iso8601',
  operations: {
    cancelJob: {
      name: 'CancelJob',
      http: {
        method: 'POST',
        uri: '/?Operation=CancelJob'
      },
      input: {
        type: 'structure',
        members: {
          JobId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Success: {
            type: 'boolean'
          }
        }
      }
    },
    createJob: {
      name: 'CreateJob',
      http: {
        method: 'POST',
        uri: '/?Operation=CreateJob'
      },
      input: {
        type: 'structure',
        members: {
          JobType: {
            required: true
          },
          Manifest: {
            required: true
          },
          ManifestAddendum: {
          },
          ValidateOnly: {
            type: 'boolean',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          JobId: {
          },
          JobType: {
          },
          AwsShippingAddress: {
          },
          Signature: {
          },
          SignatureFileContents: {
          },
          WarningMessage: {
          }
        }
      }
    },
    getStatus: {
      name: 'GetStatus',
      http: {
        method: 'POST',
        uri: '/?Operation=GetStatus'
      },
      input: {
        type: 'structure',
        members: {
          JobId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          JobId: {
          },
          JobType: {
          },
          AwsShippingAddress: {
          },
          LocationCode: {
          },
          LocationMessage: {
          },
          ProgressCode: {
          },
          ProgressMessage: {
          },
          Carrier: {
          },
          TrackingNumber: {
          },
          LogBucket: {
          },
          LogKey: {
          },
          ErrorCount: {
            type: 'integer'
          },
          Signature: {
          },
          SignatureFileContents: {
          },
          CurrentManifest: {
          },
          CreationDate: {
            type: 'timestamp'
          }
        }
      }
    },
    listJobs: {
      name: 'ListJobs',
      http: {
        method: 'POST',
        uri: '/?Operation=ListJobs'
      },
      input: {
        type: 'structure',
        members: {
          MaxJobs: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Jobs: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                JobId: {
                },
                CreationDate: {
                  type: 'timestamp'
                },
                IsCanceled: {
                  type: 'boolean'
                },
                JobType: {
                }
              }
            }
          },
          IsTruncated: {
            type: 'boolean'
          }
        }
      }
    },
    updateJob: {
      name: 'UpdateJob',
      http: {
        method: 'POST',
        uri: '/?Operation=UpdateJob'
      },
      input: {
        type: 'structure',
        members: {
          JobId: {
            required: true
          },
          Manifest: {
            required: true
          },
          JobType: {
            required: true
          },
          ValidateOnly: {
            type: 'boolean',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Success: {
            type: 'boolean'
          },
          WarningMessage: {
          }
        }
      }
    }
  }
};
