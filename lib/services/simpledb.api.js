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
  serviceName: 'sdb',
  resultWrapped: true,
  apiVersion: '2009-04-15',
  timestampFormat: 'iso8601',
  operations: {
    batchDeleteAttributes: {
      n: 'BatchDeleteAttributes',
      i: {
        m: {
          DomainName: {
            r: 1
          },
          Items: {
            t: 'a',
            m: {
              n: 'Item',
              t: 'o',
              m: {
                Name: {
                  n: 'ItemName',
                  r: 1
                },
                Attributes: {
                  t: 'a',
                  m: {
                    n: 'Attribute',
                    t: 'o',
                    m: {
                      Name: {
                        r: 1
                      },
                      AlternateNameEncoding: {
                      },
                      Value: {
                        r: 1
                      },
                      AlternateValueEncoding: {
                      }
                    }
                  },
                  f: 1
                }
              }
            },
            f: 1,
            r: 1
          }
        }
      }
    },
    batchPutAttributes: {
      n: 'BatchPutAttributes',
      i: {
        m: {
          DomainName: {
            r: 1
          },
          Items: {
            t: 'a',
            m: {
              n: 'Item',
              t: 'o',
              m: {
                Name: {
                  n: 'ItemName',
                  r: 1
                },
                Attributes: {
                  t: 'a',
                  m: {
                    n: 'Attribute',
                    t: 'o',
                    m: {
                      Name: {
                        r: 1
                      },
                      Value: {
                        r: 1
                      },
                      Replace: {
                        t: 'b'
                      }
                    }
                  },
                  f: 1,
                  r: 1
                }
              }
            },
            f: 1,
            r: 1
          }
        }
      }
    },
    createDomain: {
      n: 'CreateDomain',
      i: {
        m: {
          DomainName: {
            r: 1
          }
        }
      }
    },
    deleteAttributes: {
      n: 'DeleteAttributes',
      i: {
        m: {
          DomainName: {
            r: 1
          },
          ItemName: {
            r: 1
          },
          Attributes: {
            t: 'a',
            m: {
              n: 'Attribute',
              t: 'o',
              m: {
                Name: {
                  r: 1
                },
                AlternateNameEncoding: {
                },
                Value: {
                  r: 1
                },
                AlternateValueEncoding: {
                }
              }
            },
            f: 1
          },
          Expected: {
            t: 'o',
            m: {
              Name: {
              },
              Value: {
              },
              Exists: {
                t: 'b'
              }
            }
          }
        }
      }
    },
    deleteDomain: {
      n: 'DeleteDomain',
      i: {
        m: {
          DomainName: {
            r: 1
          }
        }
      }
    },
    domainMetadata: {
      n: 'DomainMetadata',
      i: {
        m: {
          DomainName: {
            r: 1
          }
        }
      },
      o: {
        ItemCount: {
          t: 'i'
        },
        ItemNamesSizeBytes: {
          t: 'i'
        },
        AttributeNameCount: {
          t: 'i'
        },
        AttributeNamesSizeBytes: {
          t: 'i'
        },
        AttributeValueCount: {
          t: 'i'
        },
        AttributeValuesSizeBytes: {
          t: 'i'
        },
        Timestamp: {
          t: 'i'
        }
      }
    },
    getAttributes: {
      n: 'GetAttributes',
      i: {
        m: {
          DomainName: {
            r: 1
          },
          ItemName: {
            r: 1
          },
          AttributeNames: {
            t: 'a',
            m: {
              n: 'AttributeName'
            },
            f: 1
          },
          ConsistentRead: {
            t: 'b'
          }
        }
      },
      o: {
        Attribute: {
          t: 'a',
          m: {
            n: 'Attribute',
            t: 'o',
            m: {
              Name: {
              },
              AlternateNameEncoding: {
              },
              Value: {
              },
              AlternateValueEncoding: {
              }
            }
          },
          f: 1,
          n: 'Attributes'
        }
      }
    },
    listDomains: {
      n: 'ListDomains',
      i: {
        m: {
          MaxNumberOfDomains: {
            t: 'i'
          },
          NextToken: {
          }
        }
      },
      o: {
        DomainName: {
          t: 'a',
          m: {
            n: 'DomainName'
          },
          f: 1,
          n: 'DomainNames'
        },
        NextToken: {
        }
      }
    },
    putAttributes: {
      n: 'PutAttributes',
      i: {
        m: {
          DomainName: {
            r: 1
          },
          ItemName: {
            r: 1
          },
          Attributes: {
            t: 'a',
            m: {
              n: 'Attribute',
              t: 'o',
              m: {
                Name: {
                  r: 1
                },
                Value: {
                  r: 1
                },
                Replace: {
                  t: 'b'
                }
              }
            },
            f: 1,
            r: 1
          },
          Expected: {
            t: 'o',
            m: {
              Name: {
              },
              Value: {
              },
              Exists: {
                t: 'b'
              }
            }
          }
        }
      }
    },
    select: {
      n: 'Select',
      i: {
        m: {
          SelectExpression: {
            r: 1
          },
          NextToken: {
          },
          ConsistentRead: {
            t: 'b'
          }
        }
      },
      o: {
        Item: {
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              Name: {
              },
              AlternateNameEncoding: {
              },
              Attribute: {
                t: 'a',
                m: {
                  n: 'Attribute',
                  t: 'o',
                  m: {
                    Name: {
                    },
                    AlternateNameEncoding: {
                    },
                    Value: {
                    },
                    AlternateValueEncoding: {
                    }
                  }
                },
                f: 1,
                n: 'Attributes'
              }
            }
          },
          f: 1,
          n: 'Items'
        },
        NextToken: {
        }
      }
    }
  }
};
