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
  serviceName: 'redshift',
  resultWrapped: true,
  apiVersion: '2012-12-01',
  timestampFormat: 'iso8601',
  operations: {
    authorizeClusterSecurityGroupIngress: {
      n: 'AuthorizeClusterSecurityGroupIngress',
      i: {
        m: {
          ClusterSecurityGroupName: {
            r: 1
          },
          CIDRIP: {
          },
          EC2SecurityGroupName: {
          },
          EC2SecurityGroupOwnerId: {
          }
        }
      },
      o: {
        ClusterSecurityGroup: {
          t: 'o',
          m: {
            ClusterSecurityGroupName: {
            },
            Description: {
            },
            EC2SecurityGroups: {
              t: 'a',
              m: {
                n: 'EC2SecurityGroup',
                t: 'o',
                m: {
                  Status: {
                  },
                  EC2SecurityGroupName: {
                  },
                  EC2SecurityGroupOwnerId: {
                  }
                }
              }
            },
            IPRanges: {
              t: 'a',
              m: {
                n: 'IPRange',
                t: 'o',
                m: {
                  Status: {
                  },
                  CIDRIP: {
                  }
                }
              }
            }
          },
          wrapper: true
        }
      }
    },
    copyClusterSnapshot: {
      n: 'CopyClusterSnapshot',
      i: {
        m: {
          SourceSnapshotIdentifier: {
            r: 1
          },
          TargetSnapshotIdentifier: {
            r: 1
          }
        }
      },
      o: {
        Snapshot: {
          t: 'o',
          m: {
            SnapshotIdentifier: {
            },
            ClusterIdentifier: {
            },
            SnapshotCreateTime: {
              t: 't'
            },
            Status: {
            },
            Port: {
              t: 'i'
            },
            AvailabilityZone: {
            },
            ClusterCreateTime: {
              t: 't'
            },
            MasterUsername: {
            },
            ClusterVersion: {
            },
            SnapshotType: {
            },
            NodeType: {
            },
            NumberOfNodes: {
              t: 'i'
            },
            DBName: {
            },
            VpcId: {
            }
          },
          wrapper: true
        }
      }
    },
    createCluster: {
      n: 'CreateCluster',
      i: {
        m: {
          DBName: {
          },
          ClusterIdentifier: {
            r: 1
          },
          ClusterType: {
          },
          NodeType: {
            r: 1
          },
          MasterUsername: {
            r: 1
          },
          MasterUserPassword: {
            r: 1
          },
          ClusterSecurityGroups: {
            t: 'a',
            m: {
              n: 'ClusterSecurityGroupName'
            }
          },
          VpcSecurityGroupIds: {
            t: 'a',
            m: {
              n: 'VpcSecurityGroupId'
            }
          },
          ClusterSubnetGroupName: {
          },
          AvailabilityZone: {
          },
          PreferredMaintenanceWindow: {
          },
          ClusterParameterGroupName: {
          },
          AutomatedSnapshotRetentionPeriod: {
            t: 'i'
          },
          Port: {
            t: 'i'
          },
          ClusterVersion: {
          },
          AllowVersionUpgrade: {
            t: 'b'
          },
          NumberOfNodes: {
            t: 'i'
          },
          PubliclyAccessible: {
            t: 'b'
          }
        }
      },
      o: {
        Cluster: {
          t: 'o',
          m: {
            ClusterIdentifier: {
            },
            NodeType: {
            },
            ClusterStatus: {
            },
            ModifyStatus: {
            },
            MasterUsername: {
            },
            DBName: {
            },
            Endpoint: {
              t: 'o',
              m: {
                Address: {
                },
                Port: {
                  t: 'i'
                }
              }
            },
            ClusterCreateTime: {
              t: 't'
            },
            AutomatedSnapshotRetentionPeriod: {
              t: 'i'
            },
            ClusterSecurityGroups: {
              t: 'a',
              m: {
                n: 'ClusterSecurityGroup',
                t: 'o',
                m: {
                  ClusterSecurityGroupName: {
                  },
                  Status: {
                  }
                }
              }
            },
            VpcSecurityGroups: {
              t: 'a',
              m: {
                n: 'VpcSecurityGroup',
                t: 'o',
                m: {
                  VpcSecurityGroupId: {
                  },
                  Status: {
                  }
                }
              }
            },
            ClusterParameterGroups: {
              t: 'a',
              m: {
                n: 'ClusterParameterGroup',
                t: 'o',
                m: {
                  ParameterGroupName: {
                  },
                  ParameterApplyStatus: {
                  }
                }
              }
            },
            ClusterSubnetGroupName: {
            },
            VpcId: {
            },
            AvailabilityZone: {
            },
            PreferredMaintenanceWindow: {
            },
            PendingModifiedValues: {
              t: 'o',
              m: {
                MasterUserPassword: {
                },
                NodeType: {
                },
                NumberOfNodes: {
                  t: 'i'
                },
                ClusterType: {
                },
                ClusterVersion: {
                },
                AutomatedSnapshotRetentionPeriod: {
                  t: 'i'
                }
              }
            },
            ClusterVersion: {
            },
            AllowVersionUpgrade: {
              t: 'b'
            },
            NumberOfNodes: {
              t: 'i'
            },
            PubliclyAccessible: {
              t: 'b'
            }
          },
          wrapper: true
        }
      }
    },
    createClusterParameterGroup: {
      n: 'CreateClusterParameterGroup',
      i: {
        m: {
          ParameterGroupName: {
            r: 1
          },
          ParameterGroupFamily: {
            r: 1
          },
          Description: {
            r: 1
          }
        }
      },
      o: {
        ClusterParameterGroup: {
          t: 'o',
          m: {
            ParameterGroupName: {
            },
            ParameterGroupFamily: {
            },
            Description: {
            }
          },
          wrapper: true
        }
      }
    },
    createClusterSecurityGroup: {
      n: 'CreateClusterSecurityGroup',
      i: {
        m: {
          ClusterSecurityGroupName: {
            r: 1
          },
          Description: {
            r: 1
          }
        }
      },
      o: {
        ClusterSecurityGroup: {
          t: 'o',
          m: {
            ClusterSecurityGroupName: {
            },
            Description: {
            },
            EC2SecurityGroups: {
              t: 'a',
              m: {
                n: 'EC2SecurityGroup',
                t: 'o',
                m: {
                  Status: {
                  },
                  EC2SecurityGroupName: {
                  },
                  EC2SecurityGroupOwnerId: {
                  }
                }
              }
            },
            IPRanges: {
              t: 'a',
              m: {
                n: 'IPRange',
                t: 'o',
                m: {
                  Status: {
                  },
                  CIDRIP: {
                  }
                }
              }
            }
          },
          wrapper: true
        }
      }
    },
    createClusterSnapshot: {
      n: 'CreateClusterSnapshot',
      i: {
        m: {
          SnapshotIdentifier: {
            r: 1
          },
          ClusterIdentifier: {
            r: 1
          }
        }
      },
      o: {
        Snapshot: {
          t: 'o',
          m: {
            SnapshotIdentifier: {
            },
            ClusterIdentifier: {
            },
            SnapshotCreateTime: {
              t: 't'
            },
            Status: {
            },
            Port: {
              t: 'i'
            },
            AvailabilityZone: {
            },
            ClusterCreateTime: {
              t: 't'
            },
            MasterUsername: {
            },
            ClusterVersion: {
            },
            SnapshotType: {
            },
            NodeType: {
            },
            NumberOfNodes: {
              t: 'i'
            },
            DBName: {
            },
            VpcId: {
            }
          },
          wrapper: true
        }
      }
    },
    createClusterSubnetGroup: {
      n: 'CreateClusterSubnetGroup',
      i: {
        m: {
          ClusterSubnetGroupName: {
            r: 1
          },
          Description: {
            r: 1
          },
          SubnetIds: {
            t: 'a',
            m: {
              n: 'SubnetIdentifier'
            },
            r: 1
          }
        }
      },
      o: {
        ClusterSubnetGroup: {
          t: 'o',
          m: {
            ClusterSubnetGroupName: {
            },
            Description: {
            },
            VpcId: {
            },
            SubnetGroupStatus: {
            },
            Subnets: {
              t: 'a',
              m: {
                n: 'Subnet',
                t: 'o',
                m: {
                  SubnetIdentifier: {
                  },
                  SubnetAvailabilityZone: {
                    t: 'o',
                    m: {
                      Name: {
                      }
                    },
                    wrapper: true
                  },
                  SubnetStatus: {
                  }
                }
              }
            }
          },
          wrapper: true
        }
      }
    },
    deleteCluster: {
      n: 'DeleteCluster',
      i: {
        m: {
          ClusterIdentifier: {
            r: 1
          },
          SkipFinalClusterSnapshot: {
            t: 'b'
          },
          FinalClusterSnapshotIdentifier: {
          }
        }
      },
      o: {
        Cluster: {
          t: 'o',
          m: {
            ClusterIdentifier: {
            },
            NodeType: {
            },
            ClusterStatus: {
            },
            ModifyStatus: {
            },
            MasterUsername: {
            },
            DBName: {
            },
            Endpoint: {
              t: 'o',
              m: {
                Address: {
                },
                Port: {
                  t: 'i'
                }
              }
            },
            ClusterCreateTime: {
              t: 't'
            },
            AutomatedSnapshotRetentionPeriod: {
              t: 'i'
            },
            ClusterSecurityGroups: {
              t: 'a',
              m: {
                n: 'ClusterSecurityGroup',
                t: 'o',
                m: {
                  ClusterSecurityGroupName: {
                  },
                  Status: {
                  }
                }
              }
            },
            VpcSecurityGroups: {
              t: 'a',
              m: {
                n: 'VpcSecurityGroup',
                t: 'o',
                m: {
                  VpcSecurityGroupId: {
                  },
                  Status: {
                  }
                }
              }
            },
            ClusterParameterGroups: {
              t: 'a',
              m: {
                n: 'ClusterParameterGroup',
                t: 'o',
                m: {
                  ParameterGroupName: {
                  },
                  ParameterApplyStatus: {
                  }
                }
              }
            },
            ClusterSubnetGroupName: {
            },
            VpcId: {
            },
            AvailabilityZone: {
            },
            PreferredMaintenanceWindow: {
            },
            PendingModifiedValues: {
              t: 'o',
              m: {
                MasterUserPassword: {
                },
                NodeType: {
                },
                NumberOfNodes: {
                  t: 'i'
                },
                ClusterType: {
                },
                ClusterVersion: {
                },
                AutomatedSnapshotRetentionPeriod: {
                  t: 'i'
                }
              }
            },
            ClusterVersion: {
            },
            AllowVersionUpgrade: {
              t: 'b'
            },
            NumberOfNodes: {
              t: 'i'
            },
            PubliclyAccessible: {
              t: 'b'
            }
          },
          wrapper: true
        }
      }
    },
    deleteClusterParameterGroup: {
      n: 'DeleteClusterParameterGroup',
      i: {
        m: {
          ParameterGroupName: {
            r: 1
          }
        }
      }
    },
    deleteClusterSecurityGroup: {
      n: 'DeleteClusterSecurityGroup',
      i: {
        m: {
          ClusterSecurityGroupName: {
            r: 1
          }
        }
      }
    },
    deleteClusterSnapshot: {
      n: 'DeleteClusterSnapshot',
      i: {
        m: {
          SnapshotIdentifier: {
            r: 1
          }
        }
      },
      o: {
        Snapshot: {
          t: 'o',
          m: {
            SnapshotIdentifier: {
            },
            ClusterIdentifier: {
            },
            SnapshotCreateTime: {
              t: 't'
            },
            Status: {
            },
            Port: {
              t: 'i'
            },
            AvailabilityZone: {
            },
            ClusterCreateTime: {
              t: 't'
            },
            MasterUsername: {
            },
            ClusterVersion: {
            },
            SnapshotType: {
            },
            NodeType: {
            },
            NumberOfNodes: {
              t: 'i'
            },
            DBName: {
            },
            VpcId: {
            }
          },
          wrapper: true
        }
      }
    },
    deleteClusterSubnetGroup: {
      n: 'DeleteClusterSubnetGroup',
      i: {
        m: {
          ClusterSubnetGroupName: {
            r: 1
          }
        }
      }
    },
    describeClusterParameterGroups: {
      n: 'DescribeClusterParameterGroups',
      i: {
        m: {
          ParameterGroupName: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        Marker: {
        },
        ParameterGroups: {
          t: 'a',
          m: {
            n: 'ClusterParameterGroup',
            t: 'o',
            m: {
              ParameterGroupName: {
              },
              ParameterGroupFamily: {
              },
              Description: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    describeClusterParameters: {
      n: 'DescribeClusterParameters',
      i: {
        m: {
          ParameterGroupName: {
            r: 1
          },
          Source: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        Parameters: {
          t: 'a',
          m: {
            n: 'Parameter',
            t: 'o',
            m: {
              ParameterName: {
              },
              ParameterValue: {
              },
              Description: {
              },
              Source: {
              },
              DataType: {
              },
              AllowedValues: {
              },
              IsModifiable: {
                t: 'b'
              },
              MinimumEngineVersion: {
              }
            }
          }
        },
        Marker: {
        }
      }
    },
    describeClusterSecurityGroups: {
      n: 'DescribeClusterSecurityGroups',
      i: {
        m: {
          ClusterSecurityGroupName: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        Marker: {
        },
        ClusterSecurityGroups: {
          t: 'a',
          m: {
            n: 'ClusterSecurityGroup',
            t: 'o',
            m: {
              ClusterSecurityGroupName: {
              },
              Description: {
              },
              EC2SecurityGroups: {
                t: 'a',
                m: {
                  n: 'EC2SecurityGroup',
                  t: 'o',
                  m: {
                    Status: {
                    },
                    EC2SecurityGroupName: {
                    },
                    EC2SecurityGroupOwnerId: {
                    }
                  }
                }
              },
              IPRanges: {
                t: 'a',
                m: {
                  n: 'IPRange',
                  t: 'o',
                  m: {
                    Status: {
                    },
                    CIDRIP: {
                    }
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    describeClusterSnapshots: {
      n: 'DescribeClusterSnapshots',
      i: {
        m: {
          ClusterIdentifier: {
          },
          SnapshotIdentifier: {
          },
          SnapshotType: {
          },
          StartTime: {
            t: 't'
          },
          EndTime: {
            t: 't'
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        Marker: {
        },
        Snapshots: {
          t: 'a',
          m: {
            n: 'Snapshot',
            t: 'o',
            m: {
              SnapshotIdentifier: {
              },
              ClusterIdentifier: {
              },
              SnapshotCreateTime: {
                t: 't'
              },
              Status: {
              },
              Port: {
                t: 'i'
              },
              AvailabilityZone: {
              },
              ClusterCreateTime: {
                t: 't'
              },
              MasterUsername: {
              },
              ClusterVersion: {
              },
              SnapshotType: {
              },
              NodeType: {
              },
              NumberOfNodes: {
                t: 'i'
              },
              DBName: {
              },
              VpcId: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    describeClusterSubnetGroups: {
      n: 'DescribeClusterSubnetGroups',
      i: {
        m: {
          ClusterSubnetGroupName: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        Marker: {
        },
        ClusterSubnetGroups: {
          t: 'a',
          m: {
            n: 'ClusterSubnetGroup',
            t: 'o',
            m: {
              ClusterSubnetGroupName: {
              },
              Description: {
              },
              VpcId: {
              },
              SubnetGroupStatus: {
              },
              Subnets: {
                t: 'a',
                m: {
                  n: 'Subnet',
                  t: 'o',
                  m: {
                    SubnetIdentifier: {
                    },
                    SubnetAvailabilityZone: {
                      t: 'o',
                      m: {
                        Name: {
                        }
                      },
                      wrapper: true
                    },
                    SubnetStatus: {
                    }
                  }
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    describeClusterVersions: {
      n: 'DescribeClusterVersions',
      i: {
        m: {
          ClusterVersion: {
          },
          ClusterParameterGroupFamily: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        Marker: {
        },
        ClusterVersions: {
          t: 'a',
          m: {
            n: 'ClusterVersion',
            t: 'o',
            m: {
              ClusterVersion: {
              },
              ClusterParameterGroupFamily: {
              },
              Description: {
              }
            }
          }
        }
      }
    },
    describeClusters: {
      n: 'DescribeClusters',
      i: {
        m: {
          ClusterIdentifier: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        Marker: {
        },
        Clusters: {
          t: 'a',
          m: {
            n: 'Cluster',
            t: 'o',
            m: {
              ClusterIdentifier: {
              },
              NodeType: {
              },
              ClusterStatus: {
              },
              ModifyStatus: {
              },
              MasterUsername: {
              },
              DBName: {
              },
              Endpoint: {
                t: 'o',
                m: {
                  Address: {
                  },
                  Port: {
                    t: 'i'
                  }
                }
              },
              ClusterCreateTime: {
                t: 't'
              },
              AutomatedSnapshotRetentionPeriod: {
                t: 'i'
              },
              ClusterSecurityGroups: {
                t: 'a',
                m: {
                  n: 'ClusterSecurityGroup',
                  t: 'o',
                  m: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  }
                }
              },
              VpcSecurityGroups: {
                t: 'a',
                m: {
                  n: 'VpcSecurityGroup',
                  t: 'o',
                  m: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  }
                }
              },
              ClusterParameterGroups: {
                t: 'a',
                m: {
                  n: 'ClusterParameterGroup',
                  t: 'o',
                  m: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  }
                }
              },
              ClusterSubnetGroupName: {
              },
              VpcId: {
              },
              AvailabilityZone: {
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                t: 'o',
                m: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    t: 'i'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    t: 'i'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                t: 'b'
              },
              NumberOfNodes: {
                t: 'i'
              },
              PubliclyAccessible: {
                t: 'b'
              }
            },
            wrapper: true
          }
        }
      }
    },
    describeDefaultClusterParameters: {
      n: 'DescribeDefaultClusterParameters',
      i: {
        m: {
          ParameterGroupFamily: {
            r: 1
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        DefaultClusterParameters: {
          t: 'o',
          m: {
            ParameterGroupFamily: {
            },
            Marker: {
            },
            Parameters: {
              t: 'a',
              m: {
                n: 'Parameter',
                t: 'o',
                m: {
                  ParameterName: {
                  },
                  ParameterValue: {
                  },
                  Description: {
                  },
                  Source: {
                  },
                  DataType: {
                  },
                  AllowedValues: {
                  },
                  IsModifiable: {
                    t: 'b'
                  },
                  MinimumEngineVersion: {
                  }
                }
              }
            }
          },
          wrapper: true
        }
      }
    },
    describeEvents: {
      n: 'DescribeEvents',
      i: {
        m: {
          SourceIdentifier: {
          },
          SourceType: {
          },
          StartTime: {
            t: 't'
          },
          EndTime: {
            t: 't'
          },
          Duration: {
            t: 'i'
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        Marker: {
        },
        Events: {
          t: 'a',
          m: {
            n: 'Event',
            t: 'o',
            m: {
              SourceIdentifier: {
              },
              SourceType: {
              },
              Message: {
              },
              Date: {
                t: 't'
              }
            }
          }
        }
      }
    },
    describeOrderableClusterOptions: {
      n: 'DescribeOrderableClusterOptions',
      i: {
        m: {
          ClusterVersion: {
          },
          NodeType: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        OrderableClusterOptions: {
          t: 'a',
          m: {
            n: 'OrderableClusterOption',
            t: 'o',
            m: {
              ClusterVersion: {
              },
              ClusterType: {
              },
              NodeType: {
              },
              AvailabilityZones: {
                t: 'a',
                m: {
                  n: 'AvailabilityZone',
                  t: 'o',
                  m: {
                    Name: {
                    }
                  },
                  wrapper: true
                }
              }
            },
            wrapper: true
          }
        },
        Marker: {
        }
      }
    },
    describeReservedNodeOfferings: {
      n: 'DescribeReservedNodeOfferings',
      i: {
        m: {
          ReservedNodeOfferingId: {
          },
          NodeType: {
          },
          Duration: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        Marker: {
        },
        ReservedNodeOfferings: {
          t: 'a',
          m: {
            n: 'ReservedNodeOffering',
            t: 'o',
            m: {
              ReservedNodeOfferingId: {
              },
              NodeType: {
              },
              Duration: {
                t: 'i'
              },
              FixedPrice: {
                t: 'n'
              },
              UsagePrice: {
                t: 'n'
              },
              CurrencyCode: {
              },
              OfferingType: {
              },
              RecurringCharges: {
                t: 'a',
                m: {
                  n: 'RecurringCharge',
                  t: 'o',
                  m: {
                    RecurringChargeAmount: {
                      t: 'n'
                    },
                    RecurringChargeFrequency: {
                    }
                  },
                  wrapper: true
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    describeReservedNodes: {
      n: 'DescribeReservedNodes',
      i: {
        m: {
          ReservedNodeId: {
          },
          ReservedNodeOfferingId: {
          },
          NodeType: {
          },
          Duration: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        Marker: {
        },
        ReservedNodes: {
          t: 'a',
          m: {
            n: 'ReservedNode',
            t: 'o',
            m: {
              ReservedNodeId: {
              },
              ReservedNodeOfferingId: {
              },
              NodeType: {
              },
              StartTime: {
                t: 't'
              },
              Duration: {
                t: 'i'
              },
              FixedPrice: {
                t: 'n'
              },
              UsagePrice: {
                t: 'n'
              },
              CurrencyCode: {
              },
              NodeCount: {
                t: 'i'
              },
              State: {
              },
              OfferingType: {
              },
              RecurringCharges: {
                t: 'a',
                m: {
                  n: 'RecurringCharge',
                  t: 'o',
                  m: {
                    RecurringChargeAmount: {
                      t: 'n'
                    },
                    RecurringChargeFrequency: {
                    }
                  },
                  wrapper: true
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    describeResize: {
      n: 'DescribeResize',
      i: {
        m: {
          ClusterIdentifier: {
            r: 1
          }
        }
      },
      o: {
        TargetNodeType: {
        },
        TargetNumberOfNodes: {
          t: 'i'
        },
        TargetClusterType: {
        },
        Status: {
        },
        ImportTablesCompleted: {
          t: 'a'
        },
        ImportTablesInProgress: {
          t: 'a'
        },
        ImportTablesNotStarted: {
          t: 'a'
        }
      }
    },
    modifyCluster: {
      n: 'ModifyCluster',
      i: {
        m: {
          ClusterIdentifier: {
            r: 1
          },
          ClusterType: {
          },
          NodeType: {
          },
          NumberOfNodes: {
            t: 'i'
          },
          ClusterSecurityGroups: {
            t: 'a',
            m: {
              n: 'ClusterSecurityGroupName'
            }
          },
          VpcSecurityGroupIds: {
            t: 'a',
            m: {
              n: 'VpcSecurityGroupId'
            }
          },
          MasterUserPassword: {
          },
          ClusterParameterGroupName: {
          },
          AutomatedSnapshotRetentionPeriod: {
            t: 'i'
          },
          PreferredMaintenanceWindow: {
          },
          ClusterVersion: {
          },
          AllowVersionUpgrade: {
            t: 'b'
          }
        }
      },
      o: {
        Cluster: {
          t: 'o',
          m: {
            ClusterIdentifier: {
            },
            NodeType: {
            },
            ClusterStatus: {
            },
            ModifyStatus: {
            },
            MasterUsername: {
            },
            DBName: {
            },
            Endpoint: {
              t: 'o',
              m: {
                Address: {
                },
                Port: {
                  t: 'i'
                }
              }
            },
            ClusterCreateTime: {
              t: 't'
            },
            AutomatedSnapshotRetentionPeriod: {
              t: 'i'
            },
            ClusterSecurityGroups: {
              t: 'a',
              m: {
                n: 'ClusterSecurityGroup',
                t: 'o',
                m: {
                  ClusterSecurityGroupName: {
                  },
                  Status: {
                  }
                }
              }
            },
            VpcSecurityGroups: {
              t: 'a',
              m: {
                n: 'VpcSecurityGroup',
                t: 'o',
                m: {
                  VpcSecurityGroupId: {
                  },
                  Status: {
                  }
                }
              }
            },
            ClusterParameterGroups: {
              t: 'a',
              m: {
                n: 'ClusterParameterGroup',
                t: 'o',
                m: {
                  ParameterGroupName: {
                  },
                  ParameterApplyStatus: {
                  }
                }
              }
            },
            ClusterSubnetGroupName: {
            },
            VpcId: {
            },
            AvailabilityZone: {
            },
            PreferredMaintenanceWindow: {
            },
            PendingModifiedValues: {
              t: 'o',
              m: {
                MasterUserPassword: {
                },
                NodeType: {
                },
                NumberOfNodes: {
                  t: 'i'
                },
                ClusterType: {
                },
                ClusterVersion: {
                },
                AutomatedSnapshotRetentionPeriod: {
                  t: 'i'
                }
              }
            },
            ClusterVersion: {
            },
            AllowVersionUpgrade: {
              t: 'b'
            },
            NumberOfNodes: {
              t: 'i'
            },
            PubliclyAccessible: {
              t: 'b'
            }
          },
          wrapper: true
        }
      }
    },
    modifyClusterParameterGroup: {
      n: 'ModifyClusterParameterGroup',
      i: {
        m: {
          ParameterGroupName: {
            r: 1
          },
          Parameters: {
            t: 'a',
            m: {
              n: 'Parameter',
              t: 'o',
              m: {
                ParameterName: {
                },
                ParameterValue: {
                },
                Description: {
                },
                Source: {
                },
                DataType: {
                },
                AllowedValues: {
                },
                IsModifiable: {
                  t: 'b'
                },
                MinimumEngineVersion: {
                }
              }
            },
            r: 1
          }
        }
      },
      o: {
        ParameterGroupName: {
        },
        ParameterGroupStatus: {
        }
      }
    },
    modifyClusterSubnetGroup: {
      n: 'ModifyClusterSubnetGroup',
      i: {
        m: {
          ClusterSubnetGroupName: {
            r: 1
          },
          Description: {
          },
          SubnetIds: {
            t: 'a',
            m: {
              n: 'SubnetIdentifier'
            },
            r: 1
          }
        }
      },
      o: {
        ClusterSubnetGroup: {
          t: 'o',
          m: {
            ClusterSubnetGroupName: {
            },
            Description: {
            },
            VpcId: {
            },
            SubnetGroupStatus: {
            },
            Subnets: {
              t: 'a',
              m: {
                n: 'Subnet',
                t: 'o',
                m: {
                  SubnetIdentifier: {
                  },
                  SubnetAvailabilityZone: {
                    t: 'o',
                    m: {
                      Name: {
                      }
                    },
                    wrapper: true
                  },
                  SubnetStatus: {
                  }
                }
              }
            }
          },
          wrapper: true
        }
      }
    },
    purchaseReservedNodeOffering: {
      n: 'PurchaseReservedNodeOffering',
      i: {
        m: {
          ReservedNodeOfferingId: {
            r: 1
          },
          ReservedNodeId: {
          },
          NodeCount: {
            t: 'i'
          }
        }
      },
      o: {
        ReservedNode: {
          t: 'o',
          m: {
            ReservedNodeId: {
            },
            ReservedNodeOfferingId: {
            },
            NodeType: {
            },
            StartTime: {
              t: 't'
            },
            Duration: {
              t: 'i'
            },
            FixedPrice: {
              t: 'n'
            },
            UsagePrice: {
              t: 'n'
            },
            CurrencyCode: {
            },
            NodeCount: {
              t: 'i'
            },
            State: {
            },
            OfferingType: {
            },
            RecurringCharges: {
              t: 'a',
              m: {
                n: 'RecurringCharge',
                t: 'o',
                m: {
                  RecurringChargeAmount: {
                    t: 'n'
                  },
                  RecurringChargeFrequency: {
                  }
                },
                wrapper: true
              }
            }
          },
          wrapper: true
        }
      }
    },
    rebootCluster: {
      n: 'RebootCluster',
      i: {
        m: {
          ClusterIdentifier: {
            r: 1
          }
        }
      },
      o: {
        Cluster: {
          t: 'o',
          m: {
            ClusterIdentifier: {
            },
            NodeType: {
            },
            ClusterStatus: {
            },
            ModifyStatus: {
            },
            MasterUsername: {
            },
            DBName: {
            },
            Endpoint: {
              t: 'o',
              m: {
                Address: {
                },
                Port: {
                  t: 'i'
                }
              }
            },
            ClusterCreateTime: {
              t: 't'
            },
            AutomatedSnapshotRetentionPeriod: {
              t: 'i'
            },
            ClusterSecurityGroups: {
              t: 'a',
              m: {
                n: 'ClusterSecurityGroup',
                t: 'o',
                m: {
                  ClusterSecurityGroupName: {
                  },
                  Status: {
                  }
                }
              }
            },
            VpcSecurityGroups: {
              t: 'a',
              m: {
                n: 'VpcSecurityGroup',
                t: 'o',
                m: {
                  VpcSecurityGroupId: {
                  },
                  Status: {
                  }
                }
              }
            },
            ClusterParameterGroups: {
              t: 'a',
              m: {
                n: 'ClusterParameterGroup',
                t: 'o',
                m: {
                  ParameterGroupName: {
                  },
                  ParameterApplyStatus: {
                  }
                }
              }
            },
            ClusterSubnetGroupName: {
            },
            VpcId: {
            },
            AvailabilityZone: {
            },
            PreferredMaintenanceWindow: {
            },
            PendingModifiedValues: {
              t: 'o',
              m: {
                MasterUserPassword: {
                },
                NodeType: {
                },
                NumberOfNodes: {
                  t: 'i'
                },
                ClusterType: {
                },
                ClusterVersion: {
                },
                AutomatedSnapshotRetentionPeriod: {
                  t: 'i'
                }
              }
            },
            ClusterVersion: {
            },
            AllowVersionUpgrade: {
              t: 'b'
            },
            NumberOfNodes: {
              t: 'i'
            },
            PubliclyAccessible: {
              t: 'b'
            }
          },
          wrapper: true
        }
      }
    },
    resetClusterParameterGroup: {
      n: 'ResetClusterParameterGroup',
      i: {
        m: {
          ParameterGroupName: {
            r: 1
          },
          ResetAllParameters: {
            t: 'b'
          },
          Parameters: {
            t: 'a',
            m: {
              n: 'Parameter',
              t: 'o',
              m: {
                ParameterName: {
                },
                ParameterValue: {
                },
                Description: {
                },
                Source: {
                },
                DataType: {
                },
                AllowedValues: {
                },
                IsModifiable: {
                  t: 'b'
                },
                MinimumEngineVersion: {
                }
              }
            }
          }
        }
      },
      o: {
        ParameterGroupName: {
        },
        ParameterGroupStatus: {
        }
      }
    },
    restoreFromClusterSnapshot: {
      n: 'RestoreFromClusterSnapshot',
      i: {
        m: {
          ClusterIdentifier: {
            r: 1
          },
          SnapshotIdentifier: {
            r: 1
          },
          Port: {
            t: 'i'
          },
          AvailabilityZone: {
          },
          AllowVersionUpgrade: {
            t: 'b'
          },
          ClusterSubnetGroupName: {
          },
          PubliclyAccessible: {
            t: 'b'
          }
        }
      },
      o: {
        Cluster: {
          t: 'o',
          m: {
            ClusterIdentifier: {
            },
            NodeType: {
            },
            ClusterStatus: {
            },
            ModifyStatus: {
            },
            MasterUsername: {
            },
            DBName: {
            },
            Endpoint: {
              t: 'o',
              m: {
                Address: {
                },
                Port: {
                  t: 'i'
                }
              }
            },
            ClusterCreateTime: {
              t: 't'
            },
            AutomatedSnapshotRetentionPeriod: {
              t: 'i'
            },
            ClusterSecurityGroups: {
              t: 'a',
              m: {
                n: 'ClusterSecurityGroup',
                t: 'o',
                m: {
                  ClusterSecurityGroupName: {
                  },
                  Status: {
                  }
                }
              }
            },
            VpcSecurityGroups: {
              t: 'a',
              m: {
                n: 'VpcSecurityGroup',
                t: 'o',
                m: {
                  VpcSecurityGroupId: {
                  },
                  Status: {
                  }
                }
              }
            },
            ClusterParameterGroups: {
              t: 'a',
              m: {
                n: 'ClusterParameterGroup',
                t: 'o',
                m: {
                  ParameterGroupName: {
                  },
                  ParameterApplyStatus: {
                  }
                }
              }
            },
            ClusterSubnetGroupName: {
            },
            VpcId: {
            },
            AvailabilityZone: {
            },
            PreferredMaintenanceWindow: {
            },
            PendingModifiedValues: {
              t: 'o',
              m: {
                MasterUserPassword: {
                },
                NodeType: {
                },
                NumberOfNodes: {
                  t: 'i'
                },
                ClusterType: {
                },
                ClusterVersion: {
                },
                AutomatedSnapshotRetentionPeriod: {
                  t: 'i'
                }
              }
            },
            ClusterVersion: {
            },
            AllowVersionUpgrade: {
              t: 'b'
            },
            NumberOfNodes: {
              t: 'i'
            },
            PubliclyAccessible: {
              t: 'b'
            }
          },
          wrapper: true
        }
      }
    },
    revokeClusterSecurityGroupIngress: {
      n: 'RevokeClusterSecurityGroupIngress',
      i: {
        m: {
          ClusterSecurityGroupName: {
            r: 1
          },
          CIDRIP: {
          },
          EC2SecurityGroupName: {
          },
          EC2SecurityGroupOwnerId: {
          }
        }
      },
      o: {
        ClusterSecurityGroup: {
          t: 'o',
          m: {
            ClusterSecurityGroupName: {
            },
            Description: {
            },
            EC2SecurityGroups: {
              t: 'a',
              m: {
                n: 'EC2SecurityGroup',
                t: 'o',
                m: {
                  Status: {
                  },
                  EC2SecurityGroupName: {
                  },
                  EC2SecurityGroupOwnerId: {
                  }
                }
              }
            },
            IPRanges: {
              t: 'a',
              m: {
                n: 'IPRange',
                t: 'o',
                m: {
                  Status: {
                  },
                  CIDRIP: {
                  }
                }
              }
            }
          },
          wrapper: true
        }
      }
    }
  }
};
