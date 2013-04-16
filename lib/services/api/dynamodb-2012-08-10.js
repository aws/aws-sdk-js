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
  apiVersion: '2012-08-10',
  endpointPrefix: 'dynamodb',
  jsonVersion: '1.0',
  serviceAbbreviation: 'DynamoDB',
  serviceFullName: 'Amazon DynamoDB',
  signatureVersion: 'v4',
  targetPrefix: 'DynamoDB_20120810',
  timestampFormat: 'iso8601',
  operations: {
    batchGetItem: {
      name: 'BatchGetItem',
      input: {
        type: 'structure',
        members: {
          RequestItems: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                Keys: {
                  type: 'list',
                  members: {
                    type: 'map',
                    members: {
                      type: 'structure',
                      members: {
                        S: {
                        },
                        N: {
                        },
                        B: {
                          type: 'base64'
                        },
                        SS: {
                          type: 'list'
                        },
                        NS: {
                          type: 'list'
                        },
                        BS: {
                          type: 'list',
                          members: {
                            type: 'base64'
                          }
                        }
                      }
                    }
                  },
                  required: true
                },
                AttributesToGet: {
                  type: 'list'
                },
                ConsistentRead: {
                  type: 'boolean'
                }
              }
            },
            required: true
          },
          ReturnConsumedCapacity: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Responses: {
            type: 'map',
            members: {
              type: 'list',
              members: {
                type: 'map',
                members: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list'
                    },
                    NS: {
                      type: 'list'
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                }
              }
            }
          },
          UnprocessedKeys: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                Keys: {
                  type: 'list',
                  members: {
                    type: 'map',
                    members: {
                      type: 'structure',
                      members: {
                        S: {
                        },
                        N: {
                        },
                        B: {
                          type: 'base64'
                        },
                        SS: {
                          type: 'list'
                        },
                        NS: {
                          type: 'list'
                        },
                        BS: {
                          type: 'list',
                          members: {
                            type: 'base64'
                          }
                        }
                      }
                    }
                  }
                },
                AttributesToGet: {
                  type: 'list'
                },
                ConsistentRead: {
                  type: 'boolean'
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                TableName: {
                },
                CapacityUnits: {
                  type: 'float'
                }
              }
            }
          }
        }
      }
    },
    batchWriteItem: {
      name: 'BatchWriteItem',
      input: {
        type: 'structure',
        members: {
          RequestItems: {
            type: 'map',
            members: {
              type: 'list',
              members: {
                type: 'structure',
                members: {
                  PutRequest: {
                    type: 'structure',
                    members: {
                      Item: {
                        type: 'map',
                        members: {
                          type: 'structure',
                          members: {
                            S: {
                            },
                            N: {
                            },
                            B: {
                              type: 'base64'
                            },
                            SS: {
                              type: 'list'
                            },
                            NS: {
                              type: 'list'
                            },
                            BS: {
                              type: 'list',
                              members: {
                                type: 'base64'
                              }
                            }
                          }
                        },
                        required: true
                      }
                    }
                  },
                  DeleteRequest: {
                    type: 'structure',
                    members: {
                      Key: {
                        type: 'map',
                        members: {
                          type: 'structure',
                          members: {
                            S: {
                            },
                            N: {
                            },
                            B: {
                              type: 'base64'
                            },
                            SS: {
                              type: 'list'
                            },
                            NS: {
                              type: 'list'
                            },
                            BS: {
                              type: 'list',
                              members: {
                                type: 'base64'
                              }
                            }
                          }
                        },
                        required: true
                      }
                    }
                  }
                }
              }
            },
            required: true
          },
          ReturnConsumedCapacity: {
          },
          ReturnItemCollectionMetrics: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          UnprocessedItems: {
            type: 'map',
            members: {
              type: 'list',
              members: {
                type: 'structure',
                members: {
                  PutRequest: {
                    type: 'structure',
                    members: {
                      Item: {
                        type: 'map',
                        members: {
                          type: 'structure',
                          members: {
                            S: {
                            },
                            N: {
                            },
                            B: {
                              type: 'base64'
                            },
                            SS: {
                              type: 'list'
                            },
                            NS: {
                              type: 'list'
                            },
                            BS: {
                              type: 'list',
                              members: {
                                type: 'base64'
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  DeleteRequest: {
                    type: 'structure',
                    members: {
                      Key: {
                        type: 'map',
                        members: {
                          type: 'structure',
                          members: {
                            S: {
                            },
                            N: {
                            },
                            B: {
                              type: 'base64'
                            },
                            SS: {
                              type: 'list'
                            },
                            NS: {
                              type: 'list'
                            },
                            BS: {
                              type: 'list',
                              members: {
                                type: 'base64'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ItemCollectionMetrics: {
            type: 'map',
            members: {
              type: 'list',
              members: {
                type: 'structure',
                members: {
                  ItemCollectionKey: {
                    type: 'map',
                    members: {
                      type: 'structure',
                      members: {
                        S: {
                        },
                        N: {
                        },
                        B: {
                          type: 'base64'
                        },
                        SS: {
                          type: 'list'
                        },
                        NS: {
                          type: 'list'
                        },
                        BS: {
                          type: 'list',
                          members: {
                            type: 'base64'
                          }
                        }
                      }
                    }
                  },
                  SizeEstimateRangeGB: {
                    type: 'list',
                    members: {
                      type: 'float'
                    }
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                TableName: {
                },
                CapacityUnits: {
                  type: 'float'
                }
              }
            }
          }
        }
      }
    },
    createTable: {
      name: 'CreateTable',
      input: {
        type: 'structure',
        members: {
          AttributeDefinitions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AttributeName: {
                  required: true
                },
                AttributeType: {
                  required: true
                }
              }
            },
            required: true
          },
          TableName: {
            required: true
          },
          KeySchema: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AttributeName: {
                  required: true
                },
                KeyType: {
                  required: true
                }
              }
            },
            required: true
          },
          LocalSecondaryIndexes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                IndexName: {
                  required: true
                },
                KeySchema: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                        required: true
                      },
                      KeyType: {
                        required: true
                      }
                    }
                  },
                  required: true
                },
                Projection: {
                  type: 'structure',
                  members: {
                    ProjectionType: {
                    },
                    NonKeyAttributes: {
                      type: 'list'
                    }
                  },
                  required: true
                }
              }
            }
          },
          ProvisionedThroughput: {
            type: 'structure',
            members: {
              ReadCapacityUnits: {
                type: 'integer',
                required: true
              },
              WriteCapacityUnits: {
                type: 'integer',
                required: true
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TableDescription: {
            type: 'structure',
            members: {
              AttributeDefinitions: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    AttributeType: {
                    }
                  }
                }
              },
              TableName: {
              },
              KeySchema: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    KeyType: {
                    }
                  }
                }
              },
              TableStatus: {
              },
              CreationDateTime: {
                type: 'timestamp'
              },
              ProvisionedThroughput: {
                type: 'structure',
                members: {
                  LastIncreaseDateTime: {
                    type: 'timestamp'
                  },
                  LastDecreaseDateTime: {
                    type: 'timestamp'
                  },
                  NumberOfDecreasesToday: {
                    type: 'integer'
                  },
                  ReadCapacityUnits: {
                    type: 'integer'
                  },
                  WriteCapacityUnits: {
                    type: 'integer'
                  }
                }
              },
              TableSizeBytes: {
                type: 'integer'
              },
              ItemCount: {
                type: 'integer'
              },
              LocalSecondaryIndexes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    IndexName: {
                    },
                    KeySchema: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          AttributeName: {
                          },
                          KeyType: {
                          }
                        }
                      }
                    },
                    Projection: {
                      type: 'structure',
                      members: {
                        ProjectionType: {
                        },
                        NonKeyAttributes: {
                          type: 'list'
                        }
                      }
                    },
                    IndexSizeBytes: {
                      type: 'integer'
                    },
                    ItemCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    deleteItem: {
      name: 'DeleteItem',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          Key: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            },
            required: true
          },
          Expected: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                Value: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list'
                    },
                    NS: {
                      type: 'list'
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                },
                Exists: {
                  type: 'boolean'
                }
              }
            }
          },
          ReturnValues: {
          },
          ReturnConsumedCapacity: {
          },
          ReturnItemCollectionMetrics: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Attributes: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          },
          ItemCollectionMetrics: {
            type: 'structure',
            members: {
              ItemCollectionKey: {
                type: 'map',
                members: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list'
                    },
                    NS: {
                      type: 'list'
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                }
              },
              SizeEstimateRangeGB: {
                type: 'list',
                members: {
                  type: 'float'
                }
              }
            }
          }
        }
      }
    },
    deleteTable: {
      name: 'DeleteTable',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TableDescription: {
            type: 'structure',
            members: {
              AttributeDefinitions: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    AttributeType: {
                    }
                  }
                }
              },
              TableName: {
              },
              KeySchema: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    KeyType: {
                    }
                  }
                }
              },
              TableStatus: {
              },
              CreationDateTime: {
                type: 'timestamp'
              },
              ProvisionedThroughput: {
                type: 'structure',
                members: {
                  LastIncreaseDateTime: {
                    type: 'timestamp'
                  },
                  LastDecreaseDateTime: {
                    type: 'timestamp'
                  },
                  NumberOfDecreasesToday: {
                    type: 'integer'
                  },
                  ReadCapacityUnits: {
                    type: 'integer'
                  },
                  WriteCapacityUnits: {
                    type: 'integer'
                  }
                }
              },
              TableSizeBytes: {
                type: 'integer'
              },
              ItemCount: {
                type: 'integer'
              },
              LocalSecondaryIndexes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    IndexName: {
                    },
                    KeySchema: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          AttributeName: {
                          },
                          KeyType: {
                          }
                        }
                      }
                    },
                    Projection: {
                      type: 'structure',
                      members: {
                        ProjectionType: {
                        },
                        NonKeyAttributes: {
                          type: 'list'
                        }
                      }
                    },
                    IndexSizeBytes: {
                      type: 'integer'
                    },
                    ItemCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeTable: {
      name: 'DescribeTable',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Table: {
            type: 'structure',
            members: {
              AttributeDefinitions: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    AttributeType: {
                    }
                  }
                }
              },
              TableName: {
              },
              KeySchema: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    KeyType: {
                    }
                  }
                }
              },
              TableStatus: {
              },
              CreationDateTime: {
                type: 'timestamp'
              },
              ProvisionedThroughput: {
                type: 'structure',
                members: {
                  LastIncreaseDateTime: {
                    type: 'timestamp'
                  },
                  LastDecreaseDateTime: {
                    type: 'timestamp'
                  },
                  NumberOfDecreasesToday: {
                    type: 'integer'
                  },
                  ReadCapacityUnits: {
                    type: 'integer'
                  },
                  WriteCapacityUnits: {
                    type: 'integer'
                  }
                }
              },
              TableSizeBytes: {
                type: 'integer'
              },
              ItemCount: {
                type: 'integer'
              },
              LocalSecondaryIndexes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    IndexName: {
                    },
                    KeySchema: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          AttributeName: {
                          },
                          KeyType: {
                          }
                        }
                      }
                    },
                    Projection: {
                      type: 'structure',
                      members: {
                        ProjectionType: {
                        },
                        NonKeyAttributes: {
                          type: 'list'
                        }
                      }
                    },
                    IndexSizeBytes: {
                      type: 'integer'
                    },
                    ItemCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    getItem: {
      name: 'GetItem',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          Key: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            },
            required: true
          },
          AttributesToGet: {
            type: 'list'
          },
          ConsistentRead: {
            type: 'boolean'
          },
          ReturnConsumedCapacity: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Item: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          }
        }
      }
    },
    listTables: {
      name: 'ListTables',
      input: {
        type: 'structure',
        members: {
          ExclusiveStartTableName: {
          },
          Limit: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TableNames: {
            type: 'list'
          },
          LastEvaluatedTableName: {
          }
        }
      }
    },
    putItem: {
      name: 'PutItem',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          Item: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            },
            required: true
          },
          Expected: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                Value: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list'
                    },
                    NS: {
                      type: 'list'
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                },
                Exists: {
                  type: 'boolean'
                }
              }
            }
          },
          ReturnValues: {
          },
          ReturnConsumedCapacity: {
          },
          ReturnItemCollectionMetrics: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Attributes: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          },
          ItemCollectionMetrics: {
            type: 'structure',
            members: {
              ItemCollectionKey: {
                type: 'map',
                members: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list'
                    },
                    NS: {
                      type: 'list'
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                }
              },
              SizeEstimateRangeGB: {
                type: 'list',
                members: {
                  type: 'float'
                }
              }
            }
          }
        }
      }
    },
    query: {
      name: 'Query',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          IndexName: {
          },
          Select: {
          },
          AttributesToGet: {
            type: 'list'
          },
          Limit: {
            type: 'integer'
          },
          ConsistentRead: {
            type: 'boolean'
          },
          KeyConditions: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                AttributeValueList: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      S: {
                      },
                      N: {
                      },
                      B: {
                        type: 'base64'
                      },
                      SS: {
                        type: 'list'
                      },
                      NS: {
                        type: 'list'
                      },
                      BS: {
                        type: 'list',
                        members: {
                          type: 'base64'
                        }
                      }
                    }
                  }
                },
                ComparisonOperator: {
                  required: true
                }
              }
            }
          },
          ScanIndexForward: {
            type: 'boolean'
          },
          ExclusiveStartKey: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ReturnConsumedCapacity: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Items: {
            type: 'list',
            members: {
              type: 'map',
              members: {
                type: 'structure',
                members: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    type: 'base64'
                  },
                  SS: {
                    type: 'list'
                  },
                  NS: {
                    type: 'list'
                  },
                  BS: {
                    type: 'list',
                    members: {
                      type: 'base64'
                    }
                  }
                }
              }
            }
          },
          Count: {
            type: 'integer'
          },
          LastEvaluatedKey: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          }
        }
      }
    },
    scan: {
      name: 'Scan',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          AttributesToGet: {
            type: 'list'
          },
          Limit: {
            type: 'integer'
          },
          Select: {
          },
          ScanFilter: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                AttributeValueList: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      S: {
                      },
                      N: {
                      },
                      B: {
                        type: 'base64'
                      },
                      SS: {
                        type: 'list'
                      },
                      NS: {
                        type: 'list'
                      },
                      BS: {
                        type: 'list',
                        members: {
                          type: 'base64'
                        }
                      }
                    }
                  }
                },
                ComparisonOperator: {
                  required: true
                }
              }
            }
          },
          ExclusiveStartKey: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ReturnConsumedCapacity: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Items: {
            type: 'list',
            members: {
              type: 'map',
              members: {
                type: 'structure',
                members: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    type: 'base64'
                  },
                  SS: {
                    type: 'list'
                  },
                  NS: {
                    type: 'list'
                  },
                  BS: {
                    type: 'list',
                    members: {
                      type: 'base64'
                    }
                  }
                }
              }
            }
          },
          Count: {
            type: 'integer'
          },
          ScannedCount: {
            type: 'integer'
          },
          LastEvaluatedKey: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          }
        }
      }
    },
    updateItem: {
      name: 'UpdateItem',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          Key: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            },
            required: true
          },
          AttributeUpdates: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                Value: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list'
                    },
                    NS: {
                      type: 'list'
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                },
                Action: {
                }
              }
            }
          },
          Expected: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                Value: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list'
                    },
                    NS: {
                      type: 'list'
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                },
                Exists: {
                  type: 'boolean'
                }
              }
            }
          },
          ReturnValues: {
          },
          ReturnConsumedCapacity: {
          },
          ReturnItemCollectionMetrics: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Attributes: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                S: {
                },
                N: {
                },
                B: {
                  type: 'base64'
                },
                SS: {
                  type: 'list'
                },
                NS: {
                  type: 'list'
                },
                BS: {
                  type: 'list',
                  members: {
                    type: 'base64'
                  }
                }
              }
            }
          },
          ConsumedCapacity: {
            type: 'structure',
            members: {
              TableName: {
              },
              CapacityUnits: {
                type: 'float'
              }
            }
          },
          ItemCollectionMetrics: {
            type: 'structure',
            members: {
              ItemCollectionKey: {
                type: 'map',
                members: {
                  type: 'structure',
                  members: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      type: 'base64'
                    },
                    SS: {
                      type: 'list'
                    },
                    NS: {
                      type: 'list'
                    },
                    BS: {
                      type: 'list',
                      members: {
                        type: 'base64'
                      }
                    }
                  }
                }
              },
              SizeEstimateRangeGB: {
                type: 'list',
                members: {
                  type: 'float'
                }
              }
            }
          }
        }
      }
    },
    updateTable: {
      name: 'UpdateTable',
      input: {
        type: 'structure',
        members: {
          TableName: {
            required: true
          },
          ProvisionedThroughput: {
            type: 'structure',
            members: {
              ReadCapacityUnits: {
                type: 'integer',
                required: true
              },
              WriteCapacityUnits: {
                type: 'integer',
                required: true
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TableDescription: {
            type: 'structure',
            members: {
              AttributeDefinitions: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    AttributeType: {
                    }
                  }
                }
              },
              TableName: {
              },
              KeySchema: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AttributeName: {
                    },
                    KeyType: {
                    }
                  }
                }
              },
              TableStatus: {
              },
              CreationDateTime: {
                type: 'timestamp'
              },
              ProvisionedThroughput: {
                type: 'structure',
                members: {
                  LastIncreaseDateTime: {
                    type: 'timestamp'
                  },
                  LastDecreaseDateTime: {
                    type: 'timestamp'
                  },
                  NumberOfDecreasesToday: {
                    type: 'integer'
                  },
                  ReadCapacityUnits: {
                    type: 'integer'
                  },
                  WriteCapacityUnits: {
                    type: 'integer'
                  }
                }
              },
              TableSizeBytes: {
                type: 'integer'
              },
              ItemCount: {
                type: 'integer'
              },
              LocalSecondaryIndexes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    IndexName: {
                    },
                    KeySchema: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          AttributeName: {
                          },
                          KeyType: {
                          }
                        }
                      }
                    },
                    Projection: {
                      type: 'structure',
                      members: {
                        ProjectionType: {
                        },
                        NonKeyAttributes: {
                          type: 'list'
                        }
                      }
                    },
                    IndexSizeBytes: {
                      type: 'integer'
                    },
                    ItemCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
