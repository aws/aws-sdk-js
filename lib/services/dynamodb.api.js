var AWS = require('../core');

AWS.DynamoDB.prototype.api = {
  apiVersion: '2011-12-05',
  targetPrefix: 'DynamoDB_20111205.',
  xmlNamespace: 'http://dynamodb.amazonaws.com/doc/2011-12-05/',
  operations: {
    batchGetItem: {
      n: 'BatchGetItem',
      i: {
        RequestItems: {
          t: 'm',
          k: {
          },
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
                        SS: {
                          t: 'a',
                          m: {
                          }
                        },
                        NS: {
                          t: 'a',
                          m: {
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
                        SS: {
                          t: 'a',
                          m: {
                          }
                        },
                        NS: {
                          t: 'a',
                          m: {
                          }
                        }
                      }
                    }
                  }
                },
                r: 1
              },
              AttributesToGet: {
                t: 'a',
                m: {
                }
              }
            }
          },
          r: 1
        }
      }
    },
    batchWriteItem: {
      n: 'BatchWriteItem',
      i: {
        RequestItems: {
          t: 'm',
          k: {
          },
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
                      k: {
                      },
                      m: {
                        t: 'o',
                        m: {
                          S: {
                          },
                          N: {
                          },
                          SS: {
                            t: 'a',
                            m: {
                            }
                          },
                          NS: {
                            t: 'a',
                            m: {
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
                            SS: {
                              t: 'a',
                              m: {
                              }
                            },
                            NS: {
                              t: 'a',
                              m: {
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
                            SS: {
                              t: 'a',
                              m: {
                              }
                            },
                            NS: {
                              t: 'a',
                              m: {
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
    },
    createTable: {
      n: 'CreateTable',
      i: {
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
    },
    deleteItem: {
      n: 'DeleteItem',
      i: {
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
                SS: {
                  t: 'a',
                  m: {
                  }
                },
                NS: {
                  t: 'a',
                  m: {
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
                SS: {
                  t: 'a',
                  m: {
                  }
                },
                NS: {
                  t: 'a',
                  m: {
                  }
                }
              }
            }
          },
          r: 1
        },
        Expected: {
          t: 'm',
          k: {
          },
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
                  SS: {
                    t: 'a',
                    m: {
                    }
                  },
                  NS: {
                    t: 'a',
                    m: {
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
    },
    deleteTable: {
      n: 'DeleteTable',
      i: {
        TableName: {
          r: 1
        }
      }
    },
    describeTable: {
      n: 'DescribeTable',
      i: {
        TableName: {
          r: 1
        }
      }
    },
    getItem: {
      n: 'GetItem',
      i: {
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
                SS: {
                  t: 'a',
                  m: {
                  }
                },
                NS: {
                  t: 'a',
                  m: {
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
                SS: {
                  t: 'a',
                  m: {
                  }
                },
                NS: {
                  t: 'a',
                  m: {
                  }
                }
              }
            }
          },
          r: 1
        },
        AttributesToGet: {
          t: 'a',
          m: {
          }
        },
        ConsistentRead: {
          t: 'b'
        }
      }
    },
    listTables: {
      n: 'ListTables',
      i: {
        ExclusiveStartTableName: {
        },
        Limit: {
          t: 'i'
        }
      }
    },
    putItem: {
      n: 'PutItem',
      i: {
        TableName: {
          r: 1
        },
        Item: {
          t: 'm',
          k: {
          },
          m: {
            t: 'o',
            m: {
              S: {
              },
              N: {
              },
              SS: {
                t: 'a',
                m: {
                }
              },
              NS: {
                t: 'a',
                m: {
                }
              }
            }
          },
          r: 1
        },
        Expected: {
          t: 'm',
          k: {
          },
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
                  SS: {
                    t: 'a',
                    m: {
                    }
                  },
                  NS: {
                    t: 'a',
                    m: {
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
    },
    query: {
      n: 'Query',
      i: {
        TableName: {
          r: 1
        },
        AttributesToGet: {
          t: 'a',
          m: {
          }
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
            SS: {
              t: 'a',
              m: {
              }
            },
            NS: {
              t: 'a',
              m: {
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
                  SS: {
                    t: 'a',
                    m: {
                    }
                  },
                  NS: {
                    t: 'a',
                    m: {
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
                SS: {
                  t: 'a',
                  m: {
                  }
                },
                NS: {
                  t: 'a',
                  m: {
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
                SS: {
                  t: 'a',
                  m: {
                  }
                },
                NS: {
                  t: 'a',
                  m: {
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
        TableName: {
          r: 1
        },
        AttributesToGet: {
          t: 'a',
          m: {
          }
        },
        Limit: {
          t: 'i'
        },
        Count: {
          t: 'b'
        },
        ScanFilter: {
          t: 'm',
          k: {
          },
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
                    SS: {
                      t: 'a',
                      m: {
                      }
                    },
                    NS: {
                      t: 'a',
                      m: {
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
                SS: {
                  t: 'a',
                  m: {
                  }
                },
                NS: {
                  t: 'a',
                  m: {
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
                SS: {
                  t: 'a',
                  m: {
                  }
                },
                NS: {
                  t: 'a',
                  m: {
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
                SS: {
                  t: 'a',
                  m: {
                  }
                },
                NS: {
                  t: 'a',
                  m: {
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
                SS: {
                  t: 'a',
                  m: {
                  }
                },
                NS: {
                  t: 'a',
                  m: {
                  }
                }
              }
            }
          },
          r: 1
        },
        AttributeUpdates: {
          t: 'm',
          k: {
          },
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
                  SS: {
                    t: 'a',
                    m: {
                    }
                  },
                  NS: {
                    t: 'a',
                    m: {
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
          k: {
          },
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
                  SS: {
                    t: 'a',
                    m: {
                    }
                  },
                  NS: {
                    t: 'a',
                    m: {
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
    },
    updateTable: {
      n: 'UpdateTable',
      i: {
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
};
