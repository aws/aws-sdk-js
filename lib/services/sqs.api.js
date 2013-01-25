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
  signatureVersion: 'v2',
  serviceName: 'sqs',
  resultWrapped: true,
  apiVersion: '2011-10-01',
  timestampFormat: 'iso8601',
  operations: {
    addPermission: {
      n: 'AddPermission',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          Label: {
            r: 1
          },
          AWSAccountIds: {
            t: 'a',
            m: {
              n: 'AWSAccountId'
            },
            f: 1,
            r: 1
          },
          Actions: {
            t: 'a',
            m: {
              n: 'ActionName'
            },
            f: 1,
            r: 1
          }
        }
      }
    },
    changeMessageVisibility: {
      n: 'ChangeMessageVisibility',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          ReceiptHandle: {
            r: 1
          },
          VisibilityTimeout: {
            t: 'i',
            r: 1
          }
        }
      }
    },
    changeMessageVisibilityBatch: {
      n: 'ChangeMessageVisibilityBatch',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          Entries: {
            t: 'a',
            m: {
              n: 'ChangeMessageVisibilityBatchRequestEntry',
              t: 'o',
              m: {
                Id: {
                  r: 1
                },
                ReceiptHandle: {
                  r: 1
                },
                VisibilityTimeout: {
                  t: 'i'
                }
              }
            },
            f: 1,
            r: 1
          }
        }
      },
      o: {
        ChangeMessageVisibilityBatchResultEntry: {
          t: 'a',
          m: {
            n: 'ChangeMessageVisibilityBatchResultEntry',
            t: 'o',
            m: {
              Id: {
              }
            }
          },
          f: 1,
          n: 'Successful'
        },
        BatchResultErrorEntry: {
          t: 'a',
          m: {
            n: 'BatchResultErrorEntry',
            t: 'o',
            m: {
              Id: {
              },
              SenderFault: {
                t: 'b'
              },
              Code: {
              },
              Message: {
              }
            }
          },
          f: 1,
          n: 'Failed'
        }
      }
    },
    createQueue: {
      n: 'CreateQueue',
      i: {
        m: {
          QueueName: {
            r: 1
          },
          Attributes: {
            n: 'Attribute',
            t: 'm',
            k: {
              n: 'Name'
            },
            m: {
              n: 'Value'
            },
            f: 1
          }
        }
      },
      o: {
        QueueUrl: {
        }
      }
    },
    deleteMessage: {
      n: 'DeleteMessage',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          ReceiptHandle: {
            r: 1
          }
        }
      }
    },
    deleteMessageBatch: {
      n: 'DeleteMessageBatch',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          Entries: {
            t: 'a',
            m: {
              n: 'DeleteMessageBatchRequestEntry',
              t: 'o',
              m: {
                Id: {
                  r: 1
                },
                ReceiptHandle: {
                  r: 1
                }
              }
            },
            f: 1,
            r: 1
          }
        }
      },
      o: {
        DeleteMessageBatchResultEntry: {
          t: 'a',
          m: {
            n: 'DeleteMessageBatchResultEntry',
            t: 'o',
            m: {
              Id: {
              }
            }
          },
          f: 1,
          n: 'Successful'
        },
        BatchResultErrorEntry: {
          t: 'a',
          m: {
            n: 'BatchResultErrorEntry',
            t: 'o',
            m: {
              Id: {
              },
              SenderFault: {
                t: 'b'
              },
              Code: {
              },
              Message: {
              }
            }
          },
          f: 1,
          n: 'Failed'
        }
      }
    },
    deleteQueue: {
      n: 'DeleteQueue',
      i: {
        m: {
          QueueUrl: {
            r: 1
          }
        }
      }
    },
    getQueueAttributes: {
      n: 'GetQueueAttributes',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          AttributeNames: {
            t: 'a',
            m: {
              n: 'AttributeName'
            },
            f: 1
          }
        }
      },
      o: {
        Attribute: {
          n: 'Attributes',
          t: 'm',
          k: {
            n: 'Name'
          },
          m: {
            n: 'Value'
          },
          f: 1
        }
      }
    },
    getQueueUrl: {
      n: 'GetQueueUrl',
      i: {
        m: {
          QueueName: {
            r: 1
          },
          QueueOwnerAWSAccountId: {
          }
        }
      },
      o: {
        QueueUrl: {
        }
      }
    },
    listQueues: {
      n: 'ListQueues',
      i: {
        m: {
          QueueNamePrefix: {
          }
        }
      },
      o: {
        QueueUrl: {
          t: 'a',
          m: {
            n: 'QueueUrl'
          },
          f: 1,
          n: 'QueueUrls'
        }
      }
    },
    receiveMessage: {
      n: 'ReceiveMessage',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          AttributeNames: {
            t: 'a',
            m: {
              n: 'AttributeName'
            },
            f: 1
          },
          MaxNumberOfMessages: {
            t: 'i'
          },
          VisibilityTimeout: {
            t: 'i'
          },
          WaitTimeSeconds: {
            t: 'i'
          }
        }
      },
      o: {
        Message: {
          t: 'a',
          m: {
            n: 'Message',
            t: 'o',
            m: {
              MessageId: {
              },
              ReceiptHandle: {
              },
              MD5OfBody: {
              },
              Body: {
              },
              Attribute: {
                n: 'Attributes',
                t: 'm',
                k: {
                  n: 'Name'
                },
                m: {
                  n: 'Value'
                },
                f: 1
              }
            }
          },
          f: 1,
          n: 'Messages'
        }
      }
    },
    removePermission: {
      n: 'RemovePermission',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          Label: {
            r: 1
          }
        }
      }
    },
    sendMessage: {
      n: 'SendMessage',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          MessageBody: {
            r: 1
          },
          DelaySeconds: {
            t: 'i'
          }
        }
      },
      o: {
        MD5OfMessageBody: {
        },
        MessageId: {
        }
      }
    },
    sendMessageBatch: {
      n: 'SendMessageBatch',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          Entries: {
            t: 'a',
            m: {
              n: 'SendMessageBatchRequestEntry',
              t: 'o',
              m: {
                Id: {
                  r: 1
                },
                MessageBody: {
                  r: 1
                },
                DelaySeconds: {
                  t: 'i'
                }
              }
            },
            f: 1,
            r: 1
          }
        }
      },
      o: {
        SendMessageBatchResultEntry: {
          t: 'a',
          m: {
            n: 'SendMessageBatchResultEntry',
            t: 'o',
            m: {
              Id: {
              },
              MessageId: {
              },
              MD5OfMessageBody: {
              }
            }
          },
          f: 1,
          n: 'Successful'
        },
        BatchResultErrorEntry: {
          t: 'a',
          m: {
            n: 'BatchResultErrorEntry',
            t: 'o',
            m: {
              Id: {
              },
              SenderFault: {
                t: 'b'
              },
              Code: {
              },
              Message: {
              }
            }
          },
          f: 1,
          n: 'Failed'
        }
      }
    },
    setQueueAttributes: {
      n: 'SetQueueAttributes',
      i: {
        m: {
          QueueUrl: {
            r: 1
          },
          Attributes: {
            n: 'Attribute',
            t: 'm',
            k: {
              n: 'Name'
            },
            m: {
              n: 'Value'
            },
            f: 1,
            r: 1
          }
        }
      }
    }
  }
};
