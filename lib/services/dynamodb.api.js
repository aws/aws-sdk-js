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
  signatureVersion: 'v4',
  serviceName: 'dynamodb',
  targetPrefix: 'DynamoDB_20111205',
  timestampFormat: 'iso8601',
  operations: {
    batchGetItem: {
      n: 'BatchGetItem',
      i: {
        m: {
          RequestItems: {
            t: 'm',
            m: {
              t: 'o',
              m: {
                Keys: {
                  t: 'a',
                  m: {
                    t: 'o',
                    m: {
                      HashKeyElement: {
                        t: 'o',
                        m: {
                          S: {
                          },
                          N: {
                          },
                          B: {
                            t: 'bl'
                          },
                          SS: {
                            t: 'a'
                          },
                          NS: {
                            t: 'a'
                          },
                          BS: {
                            t: 'a',
                            m: {
                              t: 'bl'
                            }
                          }
                        },
                        r: 1
                      },
                      RangeKeyElement: {
                        t: 'o',
                        m: {
                          S: {
                          },
                          N: {
                          },
                          B: {
                            t: 'bl'
                          },
                          SS: {
                            t: 'a'
                          },
                          NS: {
                            t: 'a'
                          },
                          BS: {
                            t: 'a',
                            m: {
                              t: 'bl'
                            }
                          }
                        }
                      }
                    }
                  },
                  r: 1
                },
                AttributesToGet: {
                  t: 'a'
                },
                ConsistentRead: {
                  t: 'b'
                }
              }
            },
            r: 1
          }
        }
      }
    },
    batchWriteItem: {
      n: 'BatchWriteItem',
      i: {
        m: {
          RequestItems: {
            t: 'm',
            m: {
              t: 'a',
              m: {
                t: 'o',
                m: {
                  PutRequest: {
                    t: 'o',
                    m: {
                      Item: {
                        t: 'm',
                        m: {
                          t: 'o',
                          m: {
                            S: {
                            },
                            N: {
                            },
                            B: {
                              t: 'bl'
                            },
                            SS: {
                              t: 'a'
                            },
                            NS: {
                              t: 'a'
                            },
                            BS: {
                              t: 'a',
                              m: {
                                t: 'bl'
                              }
                            }
                          }
                        },
                        r: 1
                      }
                    }
                  },
                  DeleteRequest: {
                    t: 'o',
                    m: {
                      Key: {
                        t: 'o',
                        m: {
                          HashKeyElement: {
                            t: 'o',
                            m: {
                              S: {
                              },
                              N: {
                              },
                              B: {
                                t: 'bl'
                              },
                              SS: {
                                t: 'a'
                              },
                              NS: {
                                t: 'a'
                              },
                              BS: {
                                t: 'a',
                                m: {
                                  t: 'bl'
                                }
                              }
                            },
                            r: 1
                          },
                          RangeKeyElement: {
                            t: 'o',
                            m: {
                              S: {
                              },
                              N: {
                              },
                              B: {
                                t: 'bl'
                              },
                              SS: {
                                t: 'a'
                              },
                              NS: {
                                t: 'a'
                              },
                              BS: {
                                t: 'a',
                                m: {
                                  t: 'bl'
                                }
                              }
                            }
                          }
                        },
                        r: 1
                      }
                    }
                  }
                }
              }
            },
            r: 1
          }
        }
      }
    },
    createTable: {
      n: 'CreateTable',
      i: {
        m: {
          TableName: {
            r: 1
          },
          KeySchema: {
            t: 'o',
            m: {
              HashKeyElement: {
                t: 'o',
                m: {
                  AttributeName: {
                    r: 1
                  },
                  AttributeType: {
                    r: 1
                  }
                },
                r: 1
              },
              RangeKeyElement: {
                t: 'o',
                m: {
                  AttributeName: {
                    r: 1
                  },
                  AttributeType: {
                    r: 1
                  }
                }
              }
            },
            r: 1
          },
          ProvisionedThroughput: {
            t: 'o',
            m: {
              ReadCapacityUnits: {
                t: 'i',
                r: 1
              },
              WriteCapacityUnits: {
                t: 'i',
                r: 1
              }
            },
            r: 1
          }
        }
      }
    },
    deleteItem: {
      n: 'DeleteItem',
      i: {
        m: {
          TableName: {
            r: 1
          },
          Key: {
            t: 'o',
            m: {
              HashKeyElement: {
                t: 'o',
                m: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    t: 'bl'
                  },
                  SS: {
                    t: 'a'
                  },
                  NS: {
                    t: 'a'
                  },
                  BS: {
                    t: 'a',
                    m: {
                      t: 'bl'
                    }
                  }
                },
                r: 1
              },
              RangeKeyElement: {
                t: 'o',
                m: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    t: 'bl'
                  },
                  SS: {
                    t: 'a'
                  },
                  NS: {
                    t: 'a'
                  },
                  BS: {
                    t: 'a',
                    m: {
                      t: 'bl'
                    }
                  }
                }
              }
            },
            r: 1
          },
          Expected: {
            t: 'm',
            m: {
              t: 'o',
              m: {
                Value: {
                  t: 'o',
                  m: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      t: 'bl'
                    },
                    SS: {
                      t: 'a'
                    },
                    NS: {
                      t: 'a'
                    },
                    BS: {
                      t: 'a',
                      m: {
                        t: 'bl'
                      }
                    }
                  }
                },
                Exists: {
                  t: 'b'
                }
              }
            }
          },
          ReturnValues: {
          }
        }
      }
    },
    deleteTable: {
      n: 'DeleteTable',
      i: {
        m: {
          TableName: {
            r: 1
          }
        }
      }
    },
    describeTable: {
      n: 'DescribeTable',
      i: {
        m: {
          TableName: {
            r: 1
          }
        }
      }
    },
    getItem: {
      n: 'GetItem',
      i: {
        m: {
          TableName: {
            r: 1
          },
          Key: {
            t: 'o',
            m: {
              HashKeyElement: {
                t: 'o',
                m: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    t: 'bl'
                  },
                  SS: {
                    t: 'a'
                  },
                  NS: {
                    t: 'a'
                  },
                  BS: {
                    t: 'a',
                    m: {
                      t: 'bl'
                    }
                  }
                },
                r: 1
              },
              RangeKeyElement: {
                t: 'o',
                m: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    t: 'bl'
                  },
                  SS: {
                    t: 'a'
                  },
                  NS: {
                    t: 'a'
                  },
                  BS: {
                    t: 'a',
                    m: {
                      t: 'bl'
                    }
                  }
                }
              }
            },
            r: 1
          },
          AttributesToGet: {
            t: 'a'
          },
          ConsistentRead: {
            t: 'b'
          }
        }
      }
    },
    listTables: {
      n: 'ListTables',
      i: {
        m: {
          ExclusiveStartTableName: {
          },
          Limit: {
            t: 'i'
          }
        }
      }
    },
    putItem: {
      n: 'PutItem',
      i: {
        m: {
          TableName: {
            r: 1
          },
          Item: {
            t: 'm',
            m: {
              t: 'o',
              m: {
                S: {
                },
                N: {
                },
                B: {
                  t: 'bl'
                },
                SS: {
                  t: 'a'
                },
                NS: {
                  t: 'a'
                },
                BS: {
                  t: 'a',
                  m: {
                    t: 'bl'
                  }
                }
              }
            },
            r: 1
          },
          Expected: {
            t: 'm',
            m: {
              t: 'o',
              m: {
                Value: {
                  t: 'o',
                  m: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      t: 'bl'
                    },
                    SS: {
                      t: 'a'
                    },
                    NS: {
                      t: 'a'
                    },
                    BS: {
                      t: 'a',
                      m: {
                        t: 'bl'
                      }
                    }
                  }
                },
                Exists: {
                  t: 'b'
                }
              }
            }
          },
          ReturnValues: {
          }
        }
      }
    },
    query: {
      n: 'Query',
      i: {
        m: {
          TableName: {
            r: 1
          },
          AttributesToGet: {
            t: 'a'
          },
          Limit: {
            t: 'i'
          },
          ConsistentRead: {
            t: 'b'
          },
          Count: {
            t: 'b'
          },
          HashKeyValue: {
            t: 'o',
            m: {
              S: {
              },
              N: {
              },
              B: {
                t: 'bl'
              },
              SS: {
                t: 'a'
              },
              NS: {
                t: 'a'
              },
              BS: {
                t: 'a',
                m: {
                  t: 'bl'
                }
              }
            },
            r: 1
          },
          RangeKeyCondition: {
            t: 'o',
            m: {
              AttributeValueList: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      t: 'bl'
                    },
                    SS: {
                      t: 'a'
                    },
                    NS: {
                      t: 'a'
                    },
                    BS: {
                      t: 'a',
                      m: {
                        t: 'bl'
                      }
                    }
                  }
                }
              },
              ComparisonOperator: {
                r: 1
              }
            }
          },
          ScanIndexForward: {
            t: 'b'
          },
          ExclusiveStartKey: {
            t: 'o',
            m: {
              HashKeyElement: {
                t: 'o',
                m: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    t: 'bl'
                  },
                  SS: {
                    t: 'a'
                  },
                  NS: {
                    t: 'a'
                  },
                  BS: {
                    t: 'a',
                    m: {
                      t: 'bl'
                    }
                  }
                },
                r: 1
              },
              RangeKeyElement: {
                t: 'o',
                m: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    t: 'bl'
                  },
                  SS: {
                    t: 'a'
                  },
                  NS: {
                    t: 'a'
                  },
                  BS: {
                    t: 'a',
                    m: {
                      t: 'bl'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    scan: {
      n: 'Scan',
      i: {
        m: {
          TableName: {
            r: 1
          },
          AttributesToGet: {
            t: 'a'
          },
          Limit: {
            t: 'i'
          },
          Count: {
            t: 'b'
          },
          ScanFilter: {
            t: 'm',
            m: {
              t: 'o',
              m: {
                AttributeValueList: {
                  t: 'a',
                  m: {
                    t: 'o',
                    m: {
                      S: {
                      },
                      N: {
                      },
                      B: {
                        t: 'bl'
                      },
                      SS: {
                        t: 'a'
                      },
                      NS: {
                        t: 'a'
                      },
                      BS: {
                        t: 'a',
                        m: {
                          t: 'bl'
                        }
                      }
                    }
                  }
                },
                ComparisonOperator: {
                  r: 1
                }
              }
            }
          },
          ExclusiveStartKey: {
            t: 'o',
            m: {
              HashKeyElement: {
                t: 'o',
                m: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    t: 'bl'
                  },
                  SS: {
                    t: 'a'
                  },
                  NS: {
                    t: 'a'
                  },
                  BS: {
                    t: 'a',
                    m: {
                      t: 'bl'
                    }
                  }
                },
                r: 1
              },
              RangeKeyElement: {
                t: 'o',
                m: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    t: 'bl'
                  },
                  SS: {
                    t: 'a'
                  },
                  NS: {
                    t: 'a'
                  },
                  BS: {
                    t: 'a',
                    m: {
                      t: 'bl'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    updateItem: {
      n: 'UpdateItem',
      i: {
        m: {
          TableName: {
            r: 1
          },
          Key: {
            t: 'o',
            m: {
              HashKeyElement: {
                t: 'o',
                m: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    t: 'bl'
                  },
                  SS: {
                    t: 'a'
                  },
                  NS: {
                    t: 'a'
                  },
                  BS: {
                    t: 'a',
                    m: {
                      t: 'bl'
                    }
                  }
                },
                r: 1
              },
              RangeKeyElement: {
                t: 'o',
                m: {
                  S: {
                  },
                  N: {
                  },
                  B: {
                    t: 'bl'
                  },
                  SS: {
                    t: 'a'
                  },
                  NS: {
                    t: 'a'
                  },
                  BS: {
                    t: 'a',
                    m: {
                      t: 'bl'
                    }
                  }
                }
              }
            },
            r: 1
          },
          AttributeUpdates: {
            t: 'm',
            m: {
              t: 'o',
              m: {
                Value: {
                  t: 'o',
                  m: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      t: 'bl'
                    },
                    SS: {
                      t: 'a'
                    },
                    NS: {
                      t: 'a'
                    },
                    BS: {
                      t: 'a',
                      m: {
                        t: 'bl'
                      }
                    }
                  }
                },
                Action: {
                }
              }
            },
            r: 1
          },
          Expected: {
            t: 'm',
            m: {
              t: 'o',
              m: {
                Value: {
                  t: 'o',
                  m: {
                    S: {
                    },
                    N: {
                    },
                    B: {
                      t: 'bl'
                    },
                    SS: {
                      t: 'a'
                    },
                    NS: {
                      t: 'a'
                    },
                    BS: {
                      t: 'a',
                      m: {
                        t: 'bl'
                      }
                    }
                  }
                },
                Exists: {
                  t: 'b'
                }
              }
            }
          },
          ReturnValues: {
          }
        }
      }
    },
    updateTable: {
      n: 'UpdateTable',
      i: {
        m: {
          TableName: {
            r: 1
          },
          ProvisionedThroughput: {
            t: 'o',
            m: {
              ReadCapacityUnits: {
                t: 'i',
                r: 1
              },
              WriteCapacityUnits: {
                t: 'i',
                r: 1
              }
            },
            r: 1
          }
        }
      }
    }
  }
};
