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
  apiVersion: '2013-12-02',
  endpointPrefix: 'kinesis',
  jsonVersion: '1.1',
  serviceAbbreviation: 'Kinesis',
  serviceFullName: 'Amazon Kinesis',
  signatureVersion: 'v4',
  targetPrefix: 'Kinesis_20131202',
  timestampFormat: 'iso8601',
  operations: {
    createStream: {
      name: 'CreateStream',
      input: {
        type: 'structure',
        members: {
          StreamName: {
            required: true
          },
          ShardCount: {
            type: 'integer',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteStream: {
      name: 'DeleteStream',
      input: {
        type: 'structure',
        members: {
          StreamName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    describeStream: {
      name: 'DescribeStream',
      input: {
        type: 'structure',
        members: {
          StreamName: {
            required: true
          },
          Limit: {
            type: 'integer'
          },
          ExclusiveStartShardId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          StreamDescription: {
            type: 'structure',
            members: {
              StreamName: {
              },
              StreamARN: {
              },
              StreamStatus: {
              },
              Shards: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ShardId: {
                    },
                    ParentShardId: {
                    },
                    AdjacentParentShardId: {
                    },
                    HashKeyRange: {
                      type: 'structure',
                      members: {
                        StartingHashKey: {
                        },
                        EndingHashKey: {
                        }
                      }
                    },
                    SequenceNumberRange: {
                      type: 'structure',
                      members: {
                        StartingSequenceNumber: {
                        },
                        EndingSequenceNumber: {
                        }
                      }
                    }
                  }
                }
              },
              HasMoreShards: {
                type: 'boolean'
              }
            }
          }
        }
      }
    },
    getRecords: {
      name: 'GetRecords',
      input: {
        type: 'structure',
        members: {
          ShardIterator: {
            required: true
          },
          Limit: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Records: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                SequenceNumber: {
                },
                Data: {
                  type: 'base64'
                },
                PartitionKey: {
                }
              }
            }
          },
          NextShardIterator: {
          }
        }
      }
    },
    getShardIterator: {
      name: 'GetShardIterator',
      input: {
        type: 'structure',
        members: {
          StreamName: {
            required: true
          },
          ShardId: {
            required: true
          },
          ShardIteratorType: {
            required: true
          },
          StartingSequenceNumber: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ShardIterator: {
          }
        }
      }
    },
    listStreams: {
      name: 'ListStreams',
      input: {
        type: 'structure',
        members: {
          Limit: {
            type: 'integer'
          },
          ExclusiveStartStreamName: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          StreamNames: {
            type: 'list',
            members: {
            }
          },
          HasMoreStreams: {
            type: 'boolean'
          }
        }
      }
    },
    mergeShards: {
      name: 'MergeShards',
      input: {
        type: 'structure',
        members: {
          StreamName: {
            required: true
          },
          ShardToMerge: {
            required: true
          },
          AdjacentShardToMerge: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putRecord: {
      name: 'PutRecord',
      input: {
        type: 'structure',
        members: {
          StreamName: {
            required: true
          },
          Data: {
            type: 'base64',
            required: true
          },
          PartitionKey: {
            required: true
          },
          ExplicitHashKey: {
          },
          SequenceNumberForOrdering: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ShardId: {
          },
          SequenceNumber: {
          }
        }
      }
    },
    splitShard: {
      name: 'SplitShard',
      input: {
        type: 'structure',
        members: {
          StreamName: {
            required: true
          },
          ShardToSplit: {
            required: true
          },
          NewStartingHashKey: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    }
  }
};
