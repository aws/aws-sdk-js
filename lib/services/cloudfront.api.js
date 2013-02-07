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
  format: 'rest-xml',
  signatureVersion: 'cloudfront',
  serviceName: 'cloudfront',
  globalEndpoint: 'cloudfront.amazonaws.com',
  xmlNamespace: 'http://cloudfront.amazonaws.com/doc/2012-05-05/',
  timestampFormat: 'iso8601',
  operations: {
    createCloudFrontOriginAccessIdentity: {
      m: 'POST',
      u: '/2012-05-05/origin-access-identity/cloudfront',
      i: {
        n: 'CloudFrontOriginAccessIdentityConfig',
        m: {
          CallerReference: {
            r: 1
          },
          Comment: {
            r: 1
          }
        }
      },
      o: {
        Location: {
          l: 'header',
          n: 'Location'
        },
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        Id: {
        },
        S3CanonicalUserId: {
        },
        CloudFrontOriginAccessIdentityConfig: {
          t: 'o',
          m: {
            CallerReference: {
            },
            Comment: {
            }
          }
        }
      }
    },
    createDistribution: {
      m: 'POST',
      u: '/2012-05-05/distribution',
      i: {
        n: 'DistributionConfig',
        m: {
          CallerReference: {
            r: 1
          },
          Aliases: {
            t: 'o',
            m: {
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'CNAME'
                }
              }
            },
            r: 1
          },
          DefaultRootObject: {
            r: 1
          },
          Origins: {
            t: 'o',
            m: {
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'Origin',
                  t: 'o',
                  m: {
                    Id: {
                      r: 1
                    },
                    DomainName: {
                      r: 1
                    },
                    S3OriginConfig: {
                      t: 'o',
                      m: {
                        OriginAccessIdentity: {
                          r: 1
                        }
                      }
                    },
                    CustomOriginConfig: {
                      t: 'o',
                      m: {
                        HTTPPort: {
                          t: 'i',
                          r: 1
                        },
                        HTTPSPort: {
                          t: 'i',
                          r: 1
                        },
                        OriginProtocolPolicy: {
                          r: 1
                        }
                      }
                    }
                  }
                }
              }
            },
            r: 1
          },
          DefaultCacheBehavior: {
            t: 'o',
            m: {
              TargetOriginId: {
                r: 1
              },
              ForwardedValues: {
                t: 'o',
                m: {
                  QueryString: {
                    t: 'b',
                    r: 1
                  }
                },
                r: 1
              },
              TrustedSigners: {
                t: 'o',
                m: {
                  Enabled: {
                    t: 'b',
                    r: 1
                  },
                  Quantity: {
                    t: 'i',
                    r: 1
                  },
                  Items: {
                    t: 'a',
                    m: {
                      n: 'AwsAccountNumber'
                    }
                  }
                },
                r: 1
              },
              ViewerProtocolPolicy: {
                r: 1
              },
              MinTTL: {
                t: 'i',
                r: 1
              }
            },
            r: 1
          },
          CacheBehaviors: {
            t: 'o',
            m: {
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'CacheBehavior',
                  t: 'o',
                  m: {
                    PathPattern: {
                      r: 1
                    },
                    TargetOriginId: {
                      r: 1
                    },
                    ForwardedValues: {
                      t: 'o',
                      m: {
                        QueryString: {
                          t: 'b',
                          r: 1
                        }
                      },
                      r: 1
                    },
                    TrustedSigners: {
                      t: 'o',
                      m: {
                        Enabled: {
                          t: 'b',
                          r: 1
                        },
                        Quantity: {
                          t: 'i',
                          r: 1
                        },
                        Items: {
                          t: 'a',
                          m: {
                            n: 'AwsAccountNumber'
                          }
                        }
                      },
                      r: 1
                    },
                    ViewerProtocolPolicy: {
                      r: 1
                    },
                    MinTTL: {
                      t: 'i',
                      r: 1
                    }
                  }
                }
              }
            },
            r: 1
          },
          Comment: {
            r: 1
          },
          Logging: {
            t: 'o',
            m: {
              Enabled: {
                t: 'b',
                r: 1
              },
              Bucket: {
                r: 1
              },
              Prefix: {
                r: 1
              }
            },
            r: 1
          },
          Enabled: {
            t: 'b',
            r: 1
          }
        }
      },
      o: {
        Location: {
          l: 'header',
          n: 'Location'
        },
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        Id: {
        },
        Status: {
        },
        LastModifiedTime: {
          t: 't'
        },
        InProgressInvalidationBatches: {
          t: 'i'
        },
        DomainName: {
        },
        ActiveTrustedSigners: {
          t: 'o',
          m: {
            Enabled: {
              t: 'b'
            },
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'Signer',
                t: 'o',
                m: {
                  AwsAccountNumber: {
                  },
                  KeyPairIds: {
                    t: 'o',
                    m: {
                      Quantity: {
                        t: 'i'
                      },
                      Items: {
                        t: 'a',
                        m: {
                          n: 'KeyPairId'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        DistributionConfig: {
          t: 'o',
          m: {
            CallerReference: {
            },
            Aliases: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'CNAME'
                  }
                }
              }
            },
            DefaultRootObject: {
            },
            Origins: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'Origin',
                    t: 'o',
                    m: {
                      Id: {
                      },
                      DomainName: {
                      },
                      S3OriginConfig: {
                        t: 'o',
                        m: {
                          OriginAccessIdentity: {
                          }
                        }
                      },
                      CustomOriginConfig: {
                        t: 'o',
                        m: {
                          HTTPPort: {
                            t: 'i'
                          },
                          HTTPSPort: {
                            t: 'i'
                          },
                          OriginProtocolPolicy: {
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            DefaultCacheBehavior: {
              t: 'o',
              m: {
                TargetOriginId: {
                },
                ForwardedValues: {
                  t: 'o',
                  m: {
                    QueryString: {
                      t: 'b'
                    }
                  }
                },
                TrustedSigners: {
                  t: 'o',
                  m: {
                    Enabled: {
                      t: 'b'
                    },
                    Quantity: {
                      t: 'i'
                    },
                    Items: {
                      t: 'a',
                      m: {
                        n: 'AwsAccountNumber'
                      }
                    }
                  }
                },
                ViewerProtocolPolicy: {
                },
                MinTTL: {
                  t: 'i'
                }
              }
            },
            CacheBehaviors: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'CacheBehavior',
                    t: 'o',
                    m: {
                      PathPattern: {
                      },
                      TargetOriginId: {
                      },
                      ForwardedValues: {
                        t: 'o',
                        m: {
                          QueryString: {
                            t: 'b'
                          }
                        }
                      },
                      TrustedSigners: {
                        t: 'o',
                        m: {
                          Enabled: {
                            t: 'b'
                          },
                          Quantity: {
                            t: 'i'
                          },
                          Items: {
                            t: 'a',
                            m: {
                              n: 'AwsAccountNumber'
                            }
                          }
                        }
                      },
                      ViewerProtocolPolicy: {
                      },
                      MinTTL: {
                        t: 'i'
                      }
                    }
                  }
                }
              }
            },
            Comment: {
            },
            Logging: {
              t: 'o',
              m: {
                Enabled: {
                  t: 'b'
                },
                Bucket: {
                },
                Prefix: {
                }
              }
            },
            Enabled: {
              t: 'b'
            }
          }
        }
      }
    },
    createInvalidation: {
      m: 'POST',
      u: '/2012-05-05/distribution/{DistributionId}/invalidation',
      i: {
        n: 'InvalidationBatch',
        m: {
          DistributionId: {
            r: 1,
            l: 'uri'
          },
          Paths: {
            t: 'o',
            m: {
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'Path'
                }
              }
            },
            r: 1
          },
          CallerReference: {
            r: 1
          }
        }
      },
      o: {
        Location: {
          l: 'header',
          n: 'Location'
        },
        Id: {
        },
        Status: {
        },
        CreateTime: {
          t: 't'
        },
        InvalidationBatch: {
          t: 'o',
          m: {
            Paths: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'Path'
                  }
                }
              }
            },
            CallerReference: {
            }
          }
        }
      }
    },
    createStreamingDistribution: {
      m: 'POST',
      u: '/2012-05-05/streaming-distribution',
      i: {
        n: 'StreamingDistributionConfig',
        m: {
          CallerReference: {
            r: 1
          },
          S3Origin: {
            t: 'o',
            m: {
              DomainName: {
                r: 1
              },
              OriginAccessIdentity: {
                r: 1
              }
            },
            r: 1
          },
          Aliases: {
            t: 'o',
            m: {
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'CNAME'
                }
              }
            },
            r: 1
          },
          Comment: {
            r: 1
          },
          Logging: {
            t: 'o',
            m: {
              Enabled: {
                t: 'b',
                r: 1
              },
              Bucket: {
                r: 1
              },
              Prefix: {
                r: 1
              }
            },
            r: 1
          },
          TrustedSigners: {
            t: 'o',
            m: {
              Enabled: {
                t: 'b',
                r: 1
              },
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'AwsAccountNumber'
                }
              }
            },
            r: 1
          },
          Enabled: {
            t: 'b',
            r: 1
          }
        }
      },
      o: {
        Location: {
          l: 'header',
          n: 'Location'
        },
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        Id: {
        },
        Status: {
        },
        LastModifiedTime: {
          t: 't'
        },
        DomainName: {
        },
        ActiveTrustedSigners: {
          t: 'o',
          m: {
            Enabled: {
              t: 'b'
            },
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'Signer',
                t: 'o',
                m: {
                  AwsAccountNumber: {
                  },
                  KeyPairIds: {
                    t: 'o',
                    m: {
                      Quantity: {
                        t: 'i'
                      },
                      Items: {
                        t: 'a',
                        m: {
                          n: 'KeyPairId'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        StreamingDistributionConfig: {
          t: 'o',
          m: {
            CallerReference: {
            },
            S3Origin: {
              t: 'o',
              m: {
                DomainName: {
                },
                OriginAccessIdentity: {
                }
              }
            },
            Aliases: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'CNAME'
                  }
                }
              }
            },
            Comment: {
            },
            Logging: {
              t: 'o',
              m: {
                Enabled: {
                  t: 'b'
                },
                Bucket: {
                },
                Prefix: {
                }
              }
            },
            TrustedSigners: {
              t: 'o',
              m: {
                Enabled: {
                  t: 'b'
                },
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'AwsAccountNumber'
                  }
                }
              }
            },
            Enabled: {
              t: 'b'
            }
          }
        }
      }
    },
    deleteCloudFrontOriginAccessIdentity: {
      m: 'DELETE',
      u: '/2012-05-05/origin-access-identity/cloudfront/{Id}',
      i: {
        m: {
          Id: {
            l: 'uri'
          },
          IfMatch: {
            l: 'header',
            n: 'If-Match'
          }
        }
      }
    },
    deleteDistribution: {
      m: 'DELETE',
      u: '/2012-05-05/distribution/{Id}',
      i: {
        m: {
          Id: {
            l: 'uri'
          },
          IfMatch: {
            l: 'header',
            n: 'If-Match'
          }
        }
      }
    },
    deleteStreamingDistribution: {
      m: 'DELETE',
      u: '/2012-05-05/streaming-distribution/{Id}',
      i: {
        m: {
          Id: {
            l: 'uri'
          },
          IfMatch: {
            l: 'header',
            n: 'If-Match'
          }
        }
      }
    },
    getCloudFrontOriginAccessIdentity: {
      m: 'GET',
      u: '/2012-05-05/origin-access-identity/cloudfront/{Id}',
      i: {
        m: {
          Id: {
            l: 'uri'
          }
        }
      },
      o: {
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        Id: {
        },
        S3CanonicalUserId: {
        },
        CloudFrontOriginAccessIdentityConfig: {
          t: 'o',
          m: {
            CallerReference: {
            },
            Comment: {
            }
          }
        }
      }
    },
    getCloudFrontOriginAccessIdentityConfig: {
      m: 'GET',
      u: '/2012-05-05/origin-access-identity/cloudfront/{Id}/config',
      i: {
        m: {
          Id: {
            l: 'uri'
          }
        }
      },
      o: {
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        CallerReference: {
        },
        Comment: {
        }
      }
    },
    getDistribution: {
      m: 'GET',
      u: '/2012-05-05/distribution/{Id}',
      i: {
        m: {
          Id: {
            l: 'uri'
          }
        }
      },
      o: {
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        Id: {
        },
        Status: {
        },
        LastModifiedTime: {
          t: 't'
        },
        InProgressInvalidationBatches: {
          t: 'i'
        },
        DomainName: {
        },
        ActiveTrustedSigners: {
          t: 'o',
          m: {
            Enabled: {
              t: 'b'
            },
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'Signer',
                t: 'o',
                m: {
                  AwsAccountNumber: {
                  },
                  KeyPairIds: {
                    t: 'o',
                    m: {
                      Quantity: {
                        t: 'i'
                      },
                      Items: {
                        t: 'a',
                        m: {
                          n: 'KeyPairId'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        DistributionConfig: {
          t: 'o',
          m: {
            CallerReference: {
            },
            Aliases: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'CNAME'
                  }
                }
              }
            },
            DefaultRootObject: {
            },
            Origins: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'Origin',
                    t: 'o',
                    m: {
                      Id: {
                      },
                      DomainName: {
                      },
                      S3OriginConfig: {
                        t: 'o',
                        m: {
                          OriginAccessIdentity: {
                          }
                        }
                      },
                      CustomOriginConfig: {
                        t: 'o',
                        m: {
                          HTTPPort: {
                            t: 'i'
                          },
                          HTTPSPort: {
                            t: 'i'
                          },
                          OriginProtocolPolicy: {
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            DefaultCacheBehavior: {
              t: 'o',
              m: {
                TargetOriginId: {
                },
                ForwardedValues: {
                  t: 'o',
                  m: {
                    QueryString: {
                      t: 'b'
                    }
                  }
                },
                TrustedSigners: {
                  t: 'o',
                  m: {
                    Enabled: {
                      t: 'b'
                    },
                    Quantity: {
                      t: 'i'
                    },
                    Items: {
                      t: 'a',
                      m: {
                        n: 'AwsAccountNumber'
                      }
                    }
                  }
                },
                ViewerProtocolPolicy: {
                },
                MinTTL: {
                  t: 'i'
                }
              }
            },
            CacheBehaviors: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'CacheBehavior',
                    t: 'o',
                    m: {
                      PathPattern: {
                      },
                      TargetOriginId: {
                      },
                      ForwardedValues: {
                        t: 'o',
                        m: {
                          QueryString: {
                            t: 'b'
                          }
                        }
                      },
                      TrustedSigners: {
                        t: 'o',
                        m: {
                          Enabled: {
                            t: 'b'
                          },
                          Quantity: {
                            t: 'i'
                          },
                          Items: {
                            t: 'a',
                            m: {
                              n: 'AwsAccountNumber'
                            }
                          }
                        }
                      },
                      ViewerProtocolPolicy: {
                      },
                      MinTTL: {
                        t: 'i'
                      }
                    }
                  }
                }
              }
            },
            Comment: {
            },
            Logging: {
              t: 'o',
              m: {
                Enabled: {
                  t: 'b'
                },
                Bucket: {
                },
                Prefix: {
                }
              }
            },
            Enabled: {
              t: 'b'
            }
          }
        }
      }
    },
    getDistributionConfig: {
      m: 'GET',
      u: '/2012-05-05/distribution/{Id}/config',
      i: {
        m: {
          Id: {
            l: 'uri'
          }
        }
      },
      o: {
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        CallerReference: {
        },
        Aliases: {
          t: 'o',
          m: {
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'CNAME'
              }
            }
          }
        },
        DefaultRootObject: {
        },
        Origins: {
          t: 'o',
          m: {
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'Origin',
                t: 'o',
                m: {
                  Id: {
                  },
                  DomainName: {
                  },
                  S3OriginConfig: {
                    t: 'o',
                    m: {
                      OriginAccessIdentity: {
                      }
                    }
                  },
                  CustomOriginConfig: {
                    t: 'o',
                    m: {
                      HTTPPort: {
                        t: 'i'
                      },
                      HTTPSPort: {
                        t: 'i'
                      },
                      OriginProtocolPolicy: {
                      }
                    }
                  }
                }
              }
            }
          }
        },
        DefaultCacheBehavior: {
          t: 'o',
          m: {
            TargetOriginId: {
            },
            ForwardedValues: {
              t: 'o',
              m: {
                QueryString: {
                  t: 'b'
                }
              }
            },
            TrustedSigners: {
              t: 'o',
              m: {
                Enabled: {
                  t: 'b'
                },
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'AwsAccountNumber'
                  }
                }
              }
            },
            ViewerProtocolPolicy: {
            },
            MinTTL: {
              t: 'i'
            }
          }
        },
        CacheBehaviors: {
          t: 'o',
          m: {
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'CacheBehavior',
                t: 'o',
                m: {
                  PathPattern: {
                  },
                  TargetOriginId: {
                  },
                  ForwardedValues: {
                    t: 'o',
                    m: {
                      QueryString: {
                        t: 'b'
                      }
                    }
                  },
                  TrustedSigners: {
                    t: 'o',
                    m: {
                      Enabled: {
                        t: 'b'
                      },
                      Quantity: {
                        t: 'i'
                      },
                      Items: {
                        t: 'a',
                        m: {
                          n: 'AwsAccountNumber'
                        }
                      }
                    }
                  },
                  ViewerProtocolPolicy: {
                  },
                  MinTTL: {
                    t: 'i'
                  }
                }
              }
            }
          }
        },
        Comment: {
        },
        Logging: {
          t: 'o',
          m: {
            Enabled: {
              t: 'b'
            },
            Bucket: {
            },
            Prefix: {
            }
          }
        },
        Enabled: {
          t: 'b'
        }
      }
    },
    getInvalidation: {
      m: 'GET',
      u: '/2012-05-05/distribution/{DistributionId}/invalidation/{Id}',
      i: {
        m: {
          DistributionId: {
            r: 1,
            l: 'uri'
          },
          Id: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        Id: {
        },
        Status: {
        },
        CreateTime: {
          t: 't'
        },
        InvalidationBatch: {
          t: 'o',
          m: {
            Paths: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'Path'
                  }
                }
              }
            },
            CallerReference: {
            }
          }
        }
      }
    },
    getStreamingDistribution: {
      m: 'GET',
      u: '/2012-05-05/streaming-distribution/{Id}',
      i: {
        m: {
          Id: {
            l: 'uri'
          }
        }
      },
      o: {
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        Id: {
        },
        Status: {
        },
        LastModifiedTime: {
          t: 't'
        },
        DomainName: {
        },
        ActiveTrustedSigners: {
          t: 'o',
          m: {
            Enabled: {
              t: 'b'
            },
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'Signer',
                t: 'o',
                m: {
                  AwsAccountNumber: {
                  },
                  KeyPairIds: {
                    t: 'o',
                    m: {
                      Quantity: {
                        t: 'i'
                      },
                      Items: {
                        t: 'a',
                        m: {
                          n: 'KeyPairId'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        StreamingDistributionConfig: {
          t: 'o',
          m: {
            CallerReference: {
            },
            S3Origin: {
              t: 'o',
              m: {
                DomainName: {
                },
                OriginAccessIdentity: {
                }
              }
            },
            Aliases: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'CNAME'
                  }
                }
              }
            },
            Comment: {
            },
            Logging: {
              t: 'o',
              m: {
                Enabled: {
                  t: 'b'
                },
                Bucket: {
                },
                Prefix: {
                }
              }
            },
            TrustedSigners: {
              t: 'o',
              m: {
                Enabled: {
                  t: 'b'
                },
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'AwsAccountNumber'
                  }
                }
              }
            },
            Enabled: {
              t: 'b'
            }
          }
        }
      }
    },
    getStreamingDistributionConfig: {
      m: 'GET',
      u: '/2012-05-05/streaming-distribution/{Id}/config',
      i: {
        m: {
          Id: {
            l: 'uri'
          }
        }
      },
      o: {
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        CallerReference: {
        },
        S3Origin: {
          t: 'o',
          m: {
            DomainName: {
            },
            OriginAccessIdentity: {
            }
          }
        },
        Aliases: {
          t: 'o',
          m: {
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'CNAME'
              }
            }
          }
        },
        Comment: {
        },
        Logging: {
          t: 'o',
          m: {
            Enabled: {
              t: 'b'
            },
            Bucket: {
            },
            Prefix: {
            }
          }
        },
        TrustedSigners: {
          t: 'o',
          m: {
            Enabled: {
              t: 'b'
            },
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'AwsAccountNumber'
              }
            }
          }
        },
        Enabled: {
          t: 'b'
        }
      }
    },
    listCloudFrontOriginAccessIdentities: {
      m: 'GET',
      u: '/2012-05-05/origin-access-identity/cloudfront?Marker={Marker}&MaxItems={MaxItems}',
      i: {
        m: {
          Marker: {
            l: 'uri'
          },
          MaxItems: {
            l: 'uri'
          }
        }
      },
      o: {
        Marker: {
        },
        NextMarker: {
        },
        MaxItems: {
          t: 'i'
        },
        IsTruncated: {
          t: 'b'
        },
        Quantity: {
          t: 'i'
        },
        Items: {
          t: 'a',
          m: {
            n: 'CloudFrontOriginAccessIdentitySummary',
            t: 'o',
            m: {
              Id: {
              },
              S3CanonicalUserId: {
              },
              Comment: {
              }
            }
          }
        }
      }
    },
    listDistributions: {
      m: 'GET',
      u: '/2012-05-05/distribution?Marker={Marker}&MaxItems={MaxItems}',
      i: {
        m: {
          Marker: {
            l: 'uri'
          },
          MaxItems: {
            l: 'uri'
          }
        }
      },
      o: {
        Marker: {
        },
        NextMarker: {
        },
        MaxItems: {
          t: 'i'
        },
        IsTruncated: {
          t: 'b'
        },
        Quantity: {
          t: 'i'
        },
        Items: {
          t: 'a',
          m: {
            n: 'DistributionSummary',
            t: 'o',
            m: {
              Id: {
              },
              Status: {
              },
              LastModifiedTime: {
                t: 't'
              },
              DomainName: {
              },
              Aliases: {
                t: 'o',
                m: {
                  Quantity: {
                    t: 'i'
                  },
                  Items: {
                    t: 'a',
                    m: {
                      n: 'CNAME'
                    }
                  }
                }
              },
              Origins: {
                t: 'o',
                m: {
                  Quantity: {
                    t: 'i'
                  },
                  Items: {
                    t: 'a',
                    m: {
                      n: 'Origin',
                      t: 'o',
                      m: {
                        Id: {
                        },
                        DomainName: {
                        },
                        S3OriginConfig: {
                          t: 'o',
                          m: {
                            OriginAccessIdentity: {
                            }
                          }
                        },
                        CustomOriginConfig: {
                          t: 'o',
                          m: {
                            HTTPPort: {
                              t: 'i'
                            },
                            HTTPSPort: {
                              t: 'i'
                            },
                            OriginProtocolPolicy: {
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              DefaultCacheBehavior: {
                t: 'o',
                m: {
                  TargetOriginId: {
                  },
                  ForwardedValues: {
                    t: 'o',
                    m: {
                      QueryString: {
                        t: 'b'
                      }
                    }
                  },
                  TrustedSigners: {
                    t: 'o',
                    m: {
                      Enabled: {
                        t: 'b'
                      },
                      Quantity: {
                        t: 'i'
                      },
                      Items: {
                        t: 'a',
                        m: {
                          n: 'AwsAccountNumber'
                        }
                      }
                    }
                  },
                  ViewerProtocolPolicy: {
                  },
                  MinTTL: {
                    t: 'i'
                  }
                }
              },
              CacheBehaviors: {
                t: 'o',
                m: {
                  Quantity: {
                    t: 'i'
                  },
                  Items: {
                    t: 'a',
                    m: {
                      n: 'CacheBehavior',
                      t: 'o',
                      m: {
                        PathPattern: {
                        },
                        TargetOriginId: {
                        },
                        ForwardedValues: {
                          t: 'o',
                          m: {
                            QueryString: {
                              t: 'b'
                            }
                          }
                        },
                        TrustedSigners: {
                          t: 'o',
                          m: {
                            Enabled: {
                              t: 'b'
                            },
                            Quantity: {
                              t: 'i'
                            },
                            Items: {
                              t: 'a',
                              m: {
                                n: 'AwsAccountNumber'
                              }
                            }
                          }
                        },
                        ViewerProtocolPolicy: {
                        },
                        MinTTL: {
                          t: 'i'
                        }
                      }
                    }
                  }
                }
              },
              Comment: {
              },
              Enabled: {
                t: 'b'
              }
            }
          }
        }
      }
    },
    listInvalidations: {
      m: 'GET',
      u: '/2012-05-05/distribution/{DistributionId}/invalidation?Marker={Marker}&MaxItems={MaxItems}',
      i: {
        m: {
          DistributionId: {
            r: 1,
            l: 'uri'
          },
          Marker: {
            l: 'uri'
          },
          MaxItems: {
            l: 'uri'
          }
        }
      },
      o: {
        Marker: {
        },
        NextMarker: {
        },
        MaxItems: {
          t: 'i'
        },
        IsTruncated: {
          t: 'b'
        },
        Quantity: {
          t: 'i'
        },
        Items: {
          t: 'a',
          m: {
            n: 'InvalidationSummary',
            t: 'o',
            m: {
              Id: {
              },
              Status: {
              }
            }
          }
        }
      }
    },
    listStreamingDistributions: {
      m: 'GET',
      u: '/2012-05-05/streaming-distribution?Marker={Marker}&MaxItems={MaxItems}',
      i: {
        m: {
          Marker: {
            l: 'uri'
          },
          MaxItems: {
            l: 'uri'
          }
        }
      },
      o: {
        Marker: {
        },
        NextMarker: {
        },
        MaxItems: {
          t: 'i'
        },
        IsTruncated: {
          t: 'b'
        },
        Quantity: {
          t: 'i'
        },
        Items: {
          t: 'a',
          m: {
            n: 'StreamingDistributionSummary',
            t: 'o',
            m: {
              Id: {
              },
              Status: {
              },
              LastModifiedTime: {
                t: 't'
              },
              DomainName: {
              },
              S3Origin: {
                t: 'o',
                m: {
                  DomainName: {
                  },
                  OriginAccessIdentity: {
                  }
                }
              },
              Aliases: {
                t: 'o',
                m: {
                  Quantity: {
                    t: 'i'
                  },
                  Items: {
                    t: 'a',
                    m: {
                      n: 'CNAME'
                    }
                  }
                }
              },
              TrustedSigners: {
                t: 'o',
                m: {
                  Enabled: {
                    t: 'b'
                  },
                  Quantity: {
                    t: 'i'
                  },
                  Items: {
                    t: 'a',
                    m: {
                      n: 'AwsAccountNumber'
                    }
                  }
                }
              },
              Comment: {
              },
              Enabled: {
                t: 'b'
              }
            }
          }
        }
      }
    },
    updateCloudFrontOriginAccessIdentity: {
      m: 'PUT',
      u: '/2012-05-05/origin-access-identity/cloudfront/{Id}/config',
      i: {
        n: 'CloudFrontOriginAccessIdentityConfig',
        m: {
          Id: {
            l: 'uri'
          },
          IfMatch: {
            l: 'header',
            n: 'If-Match'
          },
          CallerReference: {
            r: 1
          },
          Comment: {
            r: 1
          }
        }
      },
      o: {
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        Id: {
        },
        S3CanonicalUserId: {
        },
        CloudFrontOriginAccessIdentityConfig: {
          t: 'o',
          m: {
            CallerReference: {
            },
            Comment: {
            }
          }
        }
      }
    },
    updateDistribution: {
      m: 'PUT',
      u: '/2012-05-05/distribution/{Id}/config',
      i: {
        n: 'DistributionConfig',
        m: {
          Id: {
            l: 'uri'
          },
          IfMatch: {
            l: 'header',
            n: 'If-Match'
          },
          CallerReference: {
            r: 1
          },
          Aliases: {
            t: 'o',
            m: {
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'CNAME'
                }
              }
            },
            r: 1
          },
          DefaultRootObject: {
            r: 1
          },
          Origins: {
            t: 'o',
            m: {
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'Origin',
                  t: 'o',
                  m: {
                    Id: {
                      r: 1
                    },
                    DomainName: {
                      r: 1
                    },
                    S3OriginConfig: {
                      t: 'o',
                      m: {
                        OriginAccessIdentity: {
                          r: 1
                        }
                      }
                    },
                    CustomOriginConfig: {
                      t: 'o',
                      m: {
                        HTTPPort: {
                          t: 'i',
                          r: 1
                        },
                        HTTPSPort: {
                          t: 'i',
                          r: 1
                        },
                        OriginProtocolPolicy: {
                          r: 1
                        }
                      }
                    }
                  }
                }
              }
            },
            r: 1
          },
          DefaultCacheBehavior: {
            t: 'o',
            m: {
              TargetOriginId: {
                r: 1
              },
              ForwardedValues: {
                t: 'o',
                m: {
                  QueryString: {
                    t: 'b',
                    r: 1
                  }
                },
                r: 1
              },
              TrustedSigners: {
                t: 'o',
                m: {
                  Enabled: {
                    t: 'b',
                    r: 1
                  },
                  Quantity: {
                    t: 'i',
                    r: 1
                  },
                  Items: {
                    t: 'a',
                    m: {
                      n: 'AwsAccountNumber'
                    }
                  }
                },
                r: 1
              },
              ViewerProtocolPolicy: {
                r: 1
              },
              MinTTL: {
                t: 'i',
                r: 1
              }
            },
            r: 1
          },
          CacheBehaviors: {
            t: 'o',
            m: {
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'CacheBehavior',
                  t: 'o',
                  m: {
                    PathPattern: {
                      r: 1
                    },
                    TargetOriginId: {
                      r: 1
                    },
                    ForwardedValues: {
                      t: 'o',
                      m: {
                        QueryString: {
                          t: 'b',
                          r: 1
                        }
                      },
                      r: 1
                    },
                    TrustedSigners: {
                      t: 'o',
                      m: {
                        Enabled: {
                          t: 'b',
                          r: 1
                        },
                        Quantity: {
                          t: 'i',
                          r: 1
                        },
                        Items: {
                          t: 'a',
                          m: {
                            n: 'AwsAccountNumber'
                          }
                        }
                      },
                      r: 1
                    },
                    ViewerProtocolPolicy: {
                      r: 1
                    },
                    MinTTL: {
                      t: 'i',
                      r: 1
                    }
                  }
                }
              }
            },
            r: 1
          },
          Comment: {
            r: 1
          },
          Logging: {
            t: 'o',
            m: {
              Enabled: {
                t: 'b',
                r: 1
              },
              Bucket: {
                r: 1
              },
              Prefix: {
                r: 1
              }
            },
            r: 1
          },
          Enabled: {
            t: 'b',
            r: 1
          }
        }
      },
      o: {
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        Id: {
        },
        Status: {
        },
        LastModifiedTime: {
          t: 't'
        },
        InProgressInvalidationBatches: {
          t: 'i'
        },
        DomainName: {
        },
        ActiveTrustedSigners: {
          t: 'o',
          m: {
            Enabled: {
              t: 'b'
            },
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'Signer',
                t: 'o',
                m: {
                  AwsAccountNumber: {
                  },
                  KeyPairIds: {
                    t: 'o',
                    m: {
                      Quantity: {
                        t: 'i'
                      },
                      Items: {
                        t: 'a',
                        m: {
                          n: 'KeyPairId'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        DistributionConfig: {
          t: 'o',
          m: {
            CallerReference: {
            },
            Aliases: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'CNAME'
                  }
                }
              }
            },
            DefaultRootObject: {
            },
            Origins: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'Origin',
                    t: 'o',
                    m: {
                      Id: {
                      },
                      DomainName: {
                      },
                      S3OriginConfig: {
                        t: 'o',
                        m: {
                          OriginAccessIdentity: {
                          }
                        }
                      },
                      CustomOriginConfig: {
                        t: 'o',
                        m: {
                          HTTPPort: {
                            t: 'i'
                          },
                          HTTPSPort: {
                            t: 'i'
                          },
                          OriginProtocolPolicy: {
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            DefaultCacheBehavior: {
              t: 'o',
              m: {
                TargetOriginId: {
                },
                ForwardedValues: {
                  t: 'o',
                  m: {
                    QueryString: {
                      t: 'b'
                    }
                  }
                },
                TrustedSigners: {
                  t: 'o',
                  m: {
                    Enabled: {
                      t: 'b'
                    },
                    Quantity: {
                      t: 'i'
                    },
                    Items: {
                      t: 'a',
                      m: {
                        n: 'AwsAccountNumber'
                      }
                    }
                  }
                },
                ViewerProtocolPolicy: {
                },
                MinTTL: {
                  t: 'i'
                }
              }
            },
            CacheBehaviors: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'CacheBehavior',
                    t: 'o',
                    m: {
                      PathPattern: {
                      },
                      TargetOriginId: {
                      },
                      ForwardedValues: {
                        t: 'o',
                        m: {
                          QueryString: {
                            t: 'b'
                          }
                        }
                      },
                      TrustedSigners: {
                        t: 'o',
                        m: {
                          Enabled: {
                            t: 'b'
                          },
                          Quantity: {
                            t: 'i'
                          },
                          Items: {
                            t: 'a',
                            m: {
                              n: 'AwsAccountNumber'
                            }
                          }
                        }
                      },
                      ViewerProtocolPolicy: {
                      },
                      MinTTL: {
                        t: 'i'
                      }
                    }
                  }
                }
              }
            },
            Comment: {
            },
            Logging: {
              t: 'o',
              m: {
                Enabled: {
                  t: 'b'
                },
                Bucket: {
                },
                Prefix: {
                }
              }
            },
            Enabled: {
              t: 'b'
            }
          }
        }
      }
    },
    updateStreamingDistribution: {
      m: 'PUT',
      u: '/2012-05-05/streaming-distribution/{Id}/config',
      i: {
        n: 'StreamingDistributionConfig',
        m: {
          Id: {
            l: 'uri'
          },
          IfMatch: {
            l: 'header',
            n: 'If-Match'
          },
          CallerReference: {
            r: 1
          },
          S3Origin: {
            t: 'o',
            m: {
              DomainName: {
                r: 1
              },
              OriginAccessIdentity: {
                r: 1
              }
            },
            r: 1
          },
          Aliases: {
            t: 'o',
            m: {
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'CNAME'
                }
              }
            },
            r: 1
          },
          Comment: {
            r: 1
          },
          Logging: {
            t: 'o',
            m: {
              Enabled: {
                t: 'b',
                r: 1
              },
              Bucket: {
                r: 1
              },
              Prefix: {
                r: 1
              }
            },
            r: 1
          },
          TrustedSigners: {
            t: 'o',
            m: {
              Enabled: {
                t: 'b',
                r: 1
              },
              Quantity: {
                t: 'i',
                r: 1
              },
              Items: {
                t: 'a',
                m: {
                  n: 'AwsAccountNumber'
                }
              }
            },
            r: 1
          },
          Enabled: {
            t: 'b',
            r: 1
          }
        }
      },
      o: {
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        Id: {
        },
        Status: {
        },
        LastModifiedTime: {
          t: 't'
        },
        DomainName: {
        },
        ActiveTrustedSigners: {
          t: 'o',
          m: {
            Enabled: {
              t: 'b'
            },
            Quantity: {
              t: 'i'
            },
            Items: {
              t: 'a',
              m: {
                n: 'Signer',
                t: 'o',
                m: {
                  AwsAccountNumber: {
                  },
                  KeyPairIds: {
                    t: 'o',
                    m: {
                      Quantity: {
                        t: 'i'
                      },
                      Items: {
                        t: 'a',
                        m: {
                          n: 'KeyPairId'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        StreamingDistributionConfig: {
          t: 'o',
          m: {
            CallerReference: {
            },
            S3Origin: {
              t: 'o',
              m: {
                DomainName: {
                },
                OriginAccessIdentity: {
                }
              }
            },
            Aliases: {
              t: 'o',
              m: {
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'CNAME'
                  }
                }
              }
            },
            Comment: {
            },
            Logging: {
              t: 'o',
              m: {
                Enabled: {
                  t: 'b'
                },
                Bucket: {
                },
                Prefix: {
                }
              }
            },
            TrustedSigners: {
              t: 'o',
              m: {
                Enabled: {
                  t: 'b'
                },
                Quantity: {
                  t: 'i'
                },
                Items: {
                  t: 'a',
                  m: {
                    n: 'AwsAccountNumber'
                  }
                }
              }
            },
            Enabled: {
              t: 'b'
            }
          }
        }
      }
    }
  }
};
