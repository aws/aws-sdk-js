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
  serviceName: 'sns',
  resultWrapped: true,
  apiVersion: '2010-03-31',
  timestampFormat: 'iso8601',
  operations: {
    addPermission: {
      n: 'AddPermission',
      i: {
        m: {
          TopicArn: {
            r: 1
          },
          Label: {
            r: 1
          },
          AWSAccountId: {
            t: 'a',
            r: 1
          },
          ActionName: {
            t: 'a',
            r: 1
          }
        }
      }
    },
    confirmSubscription: {
      n: 'ConfirmSubscription',
      i: {
        m: {
          TopicArn: {
            r: 1
          },
          Token: {
            r: 1
          },
          AuthenticateOnUnsubscribe: {
          }
        }
      },
      o: {
        SubscriptionArn: {
        }
      }
    },
    createTopic: {
      n: 'CreateTopic',
      i: {
        m: {
          Name: {
            r: 1
          }
        }
      },
      o: {
        TopicArn: {
        }
      }
    },
    deleteTopic: {
      n: 'DeleteTopic',
      i: {
        m: {
          TopicArn: {
            r: 1
          }
        }
      }
    },
    getSubscriptionAttributes: {
      n: 'GetSubscriptionAttributes',
      i: {
        m: {
          SubscriptionArn: {
            r: 1
          }
        }
      },
      o: {
        Attributes: {
          t: 'm'
        }
      }
    },
    getTopicAttributes: {
      n: 'GetTopicAttributes',
      i: {
        m: {
          TopicArn: {
            r: 1
          }
        }
      },
      o: {
        Attributes: {
          t: 'm'
        }
      }
    },
    listSubscriptions: {
      n: 'ListSubscriptions',
      i: {
        m: {
          NextToken: {
          }
        }
      },
      o: {
        Subscriptions: {
          t: 'a',
          m: {
            t: 'o',
            m: {
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
    },
    listSubscriptionsByTopic: {
      n: 'ListSubscriptionsByTopic',
      i: {
        m: {
          TopicArn: {
            r: 1
          },
          NextToken: {
          }
        }
      },
      o: {
        Subscriptions: {
          t: 'a',
          m: {
            t: 'o',
            m: {
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
    },
    listTopics: {
      n: 'ListTopics',
      i: {
        m: {
          NextToken: {
          }
        }
      },
      o: {
        Topics: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              TopicArn: {
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    publish: {
      n: 'Publish',
      i: {
        m: {
          TopicArn: {
            r: 1
          },
          Message: {
            r: 1
          },
          Subject: {
          },
          MessageStructure: {
          }
        }
      },
      o: {
        MessageId: {
        }
      }
    },
    removePermission: {
      n: 'RemovePermission',
      i: {
        m: {
          TopicArn: {
            r: 1
          },
          Label: {
            r: 1
          }
        }
      }
    },
    setSubscriptionAttributes: {
      n: 'SetSubscriptionAttributes',
      i: {
        m: {
          SubscriptionArn: {
            r: 1
          },
          AttributeName: {
            r: 1
          },
          AttributeValue: {
            r: 1
          }
        }
      }
    },
    setTopicAttributes: {
      n: 'SetTopicAttributes',
      i: {
        m: {
          TopicArn: {
            r: 1
          },
          AttributeName: {
            r: 1
          },
          AttributeValue: {
            r: 1
          }
        }
      }
    },
    subscribe: {
      n: 'Subscribe',
      i: {
        m: {
          TopicArn: {
            r: 1
          },
          Protocol: {
            r: 1
          },
          Endpoint: {
            r: 1
          }
        }
      },
      o: {
        SubscriptionArn: {
        }
      }
    },
    unsubscribe: {
      n: 'Unsubscribe',
      i: {
        m: {
          SubscriptionArn: {
            r: 1
          }
        }
      }
    }
  }
};
