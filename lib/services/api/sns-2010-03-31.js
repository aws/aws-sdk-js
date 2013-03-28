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
  apiVersion: '2010-03-31',
  endpointPrefix: 'sns',
  resultWrapped: true,
  serviceAbbreviation: 'Amazon SNS',
  serviceFullName: 'Amazon Simple Notification Service',
  signatureVersion: 'v2',
  timestampFormat: 'iso8601',
  operations: {
    addPermission: {
      name: 'AddPermission',
      input: {
        type: 'structure',
        members: {
          TopicArn: {
            required: true
          },
          Label: {
            required: true
          },
          AWSAccountId: {
            type: 'list',
            required: true
          },
          ActionName: {
            type: 'list',
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
    confirmSubscription: {
      name: 'ConfirmSubscription',
      input: {
        type: 'structure',
        members: {
          TopicArn: {
            required: true
          },
          Token: {
            required: true
          },
          AuthenticateOnUnsubscribe: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          SubscriptionArn: {
          }
        }
      }
    },
    createTopic: {
      name: 'CreateTopic',
      input: {
        type: 'structure',
        members: {
          Name: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TopicArn: {
          }
        }
      }
    },
    deleteTopic: {
      name: 'DeleteTopic',
      input: {
        type: 'structure',
        members: {
          TopicArn: {
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
    getSubscriptionAttributes: {
      name: 'GetSubscriptionAttributes',
      input: {
        type: 'structure',
        members: {
          SubscriptionArn: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Attributes: {
            type: 'map'
          }
        }
      }
    },
    getTopicAttributes: {
      name: 'GetTopicAttributes',
      input: {
        type: 'structure',
        members: {
          TopicArn: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Attributes: {
            type: 'map'
          }
        }
      }
    },
    listSubscriptions: {
      name: 'ListSubscriptions',
      input: {
        type: 'structure',
        members: {
          NextToken: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Subscriptions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                SubscriptionArn: {
                },
                Owner: {
                },
                Protocol: {
                },
                Endpoint: {
                },
                TopicArn: {
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    listSubscriptionsByTopic: {
      name: 'ListSubscriptionsByTopic',
      input: {
        type: 'structure',
        members: {
          TopicArn: {
            required: true
          },
          NextToken: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Subscriptions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                SubscriptionArn: {
                },
                Owner: {
                },
                Protocol: {
                },
                Endpoint: {
                },
                TopicArn: {
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    listTopics: {
      name: 'ListTopics',
      input: {
        type: 'structure',
        members: {
          NextToken: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Topics: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                TopicArn: {
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    publish: {
      name: 'Publish',
      input: {
        type: 'structure',
        members: {
          TopicArn: {
            required: true
          },
          Message: {
            required: true
          },
          Subject: {
          },
          MessageStructure: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          MessageId: {
          }
        }
      }
    },
    removePermission: {
      name: 'RemovePermission',
      input: {
        type: 'structure',
        members: {
          TopicArn: {
            required: true
          },
          Label: {
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
    setSubscriptionAttributes: {
      name: 'SetSubscriptionAttributes',
      input: {
        type: 'structure',
        members: {
          SubscriptionArn: {
            required: true
          },
          AttributeName: {
            required: true
          },
          AttributeValue: {
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
    setTopicAttributes: {
      name: 'SetTopicAttributes',
      input: {
        type: 'structure',
        members: {
          TopicArn: {
            required: true
          },
          AttributeName: {
            required: true
          },
          AttributeValue: {
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
    subscribe: {
      name: 'Subscribe',
      input: {
        type: 'structure',
        members: {
          TopicArn: {
            required: true
          },
          Protocol: {
            required: true
          },
          Endpoint: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          SubscriptionArn: {
          }
        }
      }
    },
    unsubscribe: {
      name: 'Unsubscribe',
      input: {
        type: 'structure',
        members: {
          SubscriptionArn: {
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
