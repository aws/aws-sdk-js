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
  signatureVersion: 'v4',
  serviceName: 'elasticloadbalancing',
  resultWrapped: true,
  apiVersion: '2012-06-01',
  timestampFormat: 'iso8601',
  operations: {
    applySecurityGroupsToLoadBalancer: {
      n: 'ApplySecurityGroupsToLoadBalancer',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          SecurityGroups: {
            t: 'a',
            r: 1
          }
        }
      },
      o: {
        SecurityGroups: {
          t: 'a'
        }
      }
    },
    attachLoadBalancerToSubnets: {
      n: 'AttachLoadBalancerToSubnets',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          Subnets: {
            t: 'a',
            r: 1
          }
        }
      },
      o: {
        Subnets: {
          t: 'a'
        }
      }
    },
    configureHealthCheck: {
      n: 'ConfigureHealthCheck',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          HealthCheck: {
            t: 'o',
            m: {
              Target: {
                r: 1
              },
              Interval: {
                t: 'i',
                r: 1
              },
              Timeout: {
                t: 'i',
                r: 1
              },
              UnhealthyThreshold: {
                t: 'i',
                r: 1
              },
              HealthyThreshold: {
                t: 'i',
                r: 1
              }
            },
            r: 1
          }
        }
      },
      o: {
        HealthCheck: {
          t: 'o',
          m: {
            Target: {
            },
            Interval: {
              t: 'i'
            },
            Timeout: {
              t: 'i'
            },
            UnhealthyThreshold: {
              t: 'i'
            },
            HealthyThreshold: {
              t: 'i'
            }
          }
        }
      }
    },
    createAppCookieStickinessPolicy: {
      n: 'CreateAppCookieStickinessPolicy',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          PolicyName: {
            r: 1
          },
          CookieName: {
            r: 1
          }
        }
      }
    },
    createLBCookieStickinessPolicy: {
      n: 'CreateLBCookieStickinessPolicy',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          PolicyName: {
            r: 1
          },
          CookieExpirationPeriod: {
            t: 'i'
          }
        }
      }
    },
    createLoadBalancer: {
      n: 'CreateLoadBalancer',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          Listeners: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Protocol: {
                  r: 1
                },
                LoadBalancerPort: {
                  t: 'i',
                  r: 1
                },
                InstanceProtocol: {
                },
                InstancePort: {
                  t: 'i',
                  r: 1
                },
                SSLCertificateId: {
                }
              }
            },
            r: 1
          },
          AvailabilityZones: {
            t: 'a'
          },
          Subnets: {
            t: 'a'
          },
          SecurityGroups: {
            t: 'a'
          },
          Scheme: {
          }
        }
      },
      o: {
        DNSName: {
        }
      }
    },
    createLoadBalancerListeners: {
      n: 'CreateLoadBalancerListeners',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          Listeners: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Protocol: {
                  r: 1
                },
                LoadBalancerPort: {
                  t: 'i',
                  r: 1
                },
                InstanceProtocol: {
                },
                InstancePort: {
                  t: 'i',
                  r: 1
                },
                SSLCertificateId: {
                }
              }
            },
            r: 1
          }
        }
      }
    },
    createLoadBalancerPolicy: {
      n: 'CreateLoadBalancerPolicy',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          PolicyName: {
            r: 1
          },
          PolicyTypeName: {
            r: 1
          },
          PolicyAttributes: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                AttributeName: {
                },
                AttributeValue: {
                }
              }
            }
          }
        }
      }
    },
    deleteLoadBalancer: {
      n: 'DeleteLoadBalancer',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          }
        }
      }
    },
    deleteLoadBalancerListeners: {
      n: 'DeleteLoadBalancerListeners',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          LoadBalancerPorts: {
            t: 'a',
            m: {
              t: 'i'
            },
            r: 1
          }
        }
      }
    },
    deleteLoadBalancerPolicy: {
      n: 'DeleteLoadBalancerPolicy',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          PolicyName: {
            r: 1
          }
        }
      }
    },
    deregisterInstancesFromLoadBalancer: {
      n: 'DeregisterInstancesFromLoadBalancer',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          Instances: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                InstanceId: {
                }
              }
            },
            r: 1
          }
        }
      },
      o: {
        Instances: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              InstanceId: {
              }
            }
          }
        }
      }
    },
    describeInstanceHealth: {
      n: 'DescribeInstanceHealth',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          Instances: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                InstanceId: {
                }
              }
            }
          }
        }
      },
      o: {
        InstanceStates: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              InstanceId: {
              },
              State: {
              },
              ReasonCode: {
              },
              Description: {
              }
            }
          }
        }
      }
    },
    describeLoadBalancerPolicies: {
      n: 'DescribeLoadBalancerPolicies',
      i: {
        m: {
          LoadBalancerName: {
          },
          PolicyNames: {
            t: 'a'
          }
        }
      },
      o: {
        PolicyDescriptions: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              PolicyName: {
              },
              PolicyTypeName: {
              },
              PolicyAttributeDescriptions: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    AttributeName: {
                    },
                    AttributeValue: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeLoadBalancerPolicyTypes: {
      n: 'DescribeLoadBalancerPolicyTypes',
      i: {
        m: {
          PolicyTypeNames: {
            t: 'a'
          }
        }
      },
      o: {
        PolicyTypeDescriptions: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              PolicyTypeName: {
              },
              Description: {
              },
              PolicyAttributeTypeDescriptions: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    AttributeName: {
                    },
                    AttributeType: {
                    },
                    Description: {
                    },
                    DefaultValue: {
                    },
                    Cardinality: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeLoadBalancers: {
      n: 'DescribeLoadBalancers',
      i: {
        m: {
          LoadBalancerNames: {
            t: 'a'
          },
          Marker: {
          }
        }
      },
      o: {
        LoadBalancerDescriptions: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              LoadBalancerName: {
              },
              DNSName: {
              },
              CanonicalHostedZoneName: {
              },
              CanonicalHostedZoneNameID: {
              },
              ListenerDescriptions: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    Listener: {
                      t: 'o',
                      m: {
                        Protocol: {
                        },
                        LoadBalancerPort: {
                          t: 'i'
                        },
                        InstanceProtocol: {
                        },
                        InstancePort: {
                          t: 'i'
                        },
                        SSLCertificateId: {
                        }
                      }
                    },
                    PolicyNames: {
                      t: 'a'
                    }
                  }
                }
              },
              Policies: {
                t: 'o',
                m: {
                  AppCookieStickinessPolicies: {
                    t: 'a',
                    m: {
                      t: 'o',
                      m: {
                        PolicyName: {
                        },
                        CookieName: {
                        }
                      }
                    }
                  },
                  LBCookieStickinessPolicies: {
                    t: 'a',
                    m: {
                      t: 'o',
                      m: {
                        PolicyName: {
                        },
                        CookieExpirationPeriod: {
                          t: 'i'
                        }
                      }
                    }
                  },
                  OtherPolicies: {
                    t: 'a'
                  }
                }
              },
              BackendServerDescriptions: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    InstancePort: {
                      t: 'i'
                    },
                    PolicyNames: {
                      t: 'a'
                    }
                  }
                }
              },
              AvailabilityZones: {
                t: 'a'
              },
              Subnets: {
                t: 'a'
              },
              VPCId: {
              },
              Instances: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    InstanceId: {
                    }
                  }
                }
              },
              HealthCheck: {
                t: 'o',
                m: {
                  Target: {
                  },
                  Interval: {
                    t: 'i'
                  },
                  Timeout: {
                    t: 'i'
                  },
                  UnhealthyThreshold: {
                    t: 'i'
                  },
                  HealthyThreshold: {
                    t: 'i'
                  }
                }
              },
              SourceSecurityGroup: {
                t: 'o',
                m: {
                  OwnerAlias: {
                  },
                  GroupName: {
                  }
                }
              },
              SecurityGroups: {
                t: 'a'
              },
              CreatedTime: {
                t: 't'
              },
              Scheme: {
              }
            }
          }
        },
        NextMarker: {
        }
      }
    },
    detachLoadBalancerFromSubnets: {
      n: 'DetachLoadBalancerFromSubnets',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          Subnets: {
            t: 'a',
            r: 1
          }
        }
      },
      o: {
        Subnets: {
          t: 'a'
        }
      }
    },
    disableAvailabilityZonesForLoadBalancer: {
      n: 'DisableAvailabilityZonesForLoadBalancer',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          AvailabilityZones: {
            t: 'a',
            r: 1
          }
        }
      },
      o: {
        AvailabilityZones: {
          t: 'a'
        }
      }
    },
    enableAvailabilityZonesForLoadBalancer: {
      n: 'EnableAvailabilityZonesForLoadBalancer',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          AvailabilityZones: {
            t: 'a',
            r: 1
          }
        }
      },
      o: {
        AvailabilityZones: {
          t: 'a'
        }
      }
    },
    registerInstancesWithLoadBalancer: {
      n: 'RegisterInstancesWithLoadBalancer',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          Instances: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                InstanceId: {
                }
              }
            },
            r: 1
          }
        }
      },
      o: {
        Instances: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              InstanceId: {
              }
            }
          }
        }
      }
    },
    setLoadBalancerListenerSSLCertificate: {
      n: 'SetLoadBalancerListenerSSLCertificate',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          LoadBalancerPort: {
            t: 'i',
            r: 1
          },
          SSLCertificateId: {
            r: 1
          }
        }
      }
    },
    setLoadBalancerPoliciesForBackendServer: {
      n: 'SetLoadBalancerPoliciesForBackendServer',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          InstancePort: {
            t: 'i',
            r: 1
          },
          PolicyNames: {
            t: 'a',
            r: 1
          }
        }
      }
    },
    setLoadBalancerPoliciesOfListener: {
      n: 'SetLoadBalancerPoliciesOfListener',
      i: {
        m: {
          LoadBalancerName: {
            r: 1
          },
          LoadBalancerPort: {
            t: 'i',
            r: 1
          },
          PolicyNames: {
            t: 'a',
            r: 1
          }
        }
      }
    }
  }
};
