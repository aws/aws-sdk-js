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
  apiVersion: '2011-12-05',
  endpointPrefix: 'dynamodb',
  jsonVersion: '1.0',
  serviceAbbreviation: 'DynamoDB',
  serviceFullName: 'Amazon DynamoDB',
  signatureVersion: 'v4',
  targetPrefix: 'DynamoDB_20111205',
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
                    type: 'structure',
                    members: {
                      HashKeyElement: {
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
                        },
                        required: true
                      },
                      RangeKeyElement: {
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
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Responses: {
            type: 'map',
            members: {
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
                ConsumedCapacityUnits: {
                  type: 'float'
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
                    type: 'structure',
                    members: {
                      HashKeyElement: {
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
                      RangeKeyElement: {
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
                AttributesToGet: {
                  type: 'list'
                },
                ConsistentRead: {
                  type: 'boolean'
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
                        type: 'structure',
                        members: {
                          HashKeyElement: {
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
                            },
                            required: true
                          },
                          RangeKeyElement: {
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
                      }
                    }
                  }
                }
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Responses: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                ConsumedCapacityUnits: {
                  type: 'float'
                }
              }
            }
          },
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
                        type: 'structure',
                        members: {
                          HashKeyElement: {
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
                          RangeKeyElement: {
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
          TableName: {
            required: true
          },
          KeySchema: {
            type: 'structure',
            members: {
              HashKeyElement: {
                type: 'structure',
                members: {
                  AttributeName: {
                    required: true
                  },
                  AttributeType: {
                    required: true
                  }
                },
                required: true
              },
              RangeKeyElement: {
                type: 'structure',
                members: {
                  AttributeName: {
                    required: true
                  },
                  AttributeType: {
                    required: true
                  }
                }
              }
            },
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
              TableName: {
              },
              KeySchema: {
                type: 'structure',
                members: {
                  HashKeyElement: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                      },
                      AttributeType: {
                      }
                    }
                  },
                  RangeKeyElement: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                      },
                      AttributeType: {
                      }
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
            type: 'structure',
            members: {
              HashKeyElement: {
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
                },
                required: true
              },
              RangeKeyElement: {
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
          ConsumedCapacityUnits: {
            type: 'float'
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
              TableName: {
              },
              KeySchema: {
                type: 'structure',
                members: {
                  HashKeyElement: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                      },
                      AttributeType: {
                      }
                    }
                  },
                  RangeKeyElement: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                      },
                      AttributeType: {
                      }
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
              TableName: {
              },
              KeySchema: {
                type: 'structure',
                members: {
                  HashKeyElement: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                      },
                      AttributeType: {
                      }
                    }
                  },
                  RangeKeyElement: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                      },
                      AttributeType: {
                      }
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
            type: 'structure',
            members: {
              HashKeyElement: {
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
                },
                required: true
              },
              RangeKeyElement: {
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
          ConsumedCapacityUnits: {
            type: 'float'
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
          ConsumedCapacityUnits: {
            type: 'float'
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
          AttributesToGet: {
            type: 'list'
          },
          Limit: {
            type: 'integer'
          },
          ConsistentRead: {
            type: 'boolean'
          },
          Count: {
            type: 'boolean'
          },
          HashKeyValue: {
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
            },
            required: true
          },
          RangeKeyCondition: {
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
          },
          ScanIndexForward: {
            type: 'boolean'
          },
          ExclusiveStartKey: {
            type: 'structure',
            members: {
              HashKeyElement: {
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
                },
                required: true
              },
              RangeKeyElement: {
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
            type: 'structure',
            members: {
              HashKeyElement: {
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
              RangeKeyElement: {
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
          ConsumedCapacityUnits: {
            type: 'float'
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
          Count: {
            type: 'boolean'
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
            type: 'structure',
            members: {
              HashKeyElement: {
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
                },
                required: true
              },
              RangeKeyElement: {
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
            type: 'structure',
            members: {
              HashKeyElement: {
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
              RangeKeyElement: {
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
          ConsumedCapacityUnits: {
            type: 'float'
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
            type: 'structure',
            members: {
              HashKeyElement: {
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
                },
                required: true
              },
              RangeKeyElement: {
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
          ConsumedCapacityUnits: {
            type: 'float'
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
              TableName: {
              },
              KeySchema: {
                type: 'structure',
                members: {
                  HashKeyElement: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                      },
                      AttributeType: {
                      }
                    }
                  },
                  RangeKeyElement: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                      },
                      AttributeType: {
                      }
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
              }
            }
          }
        }
      }
    }
  }
};
