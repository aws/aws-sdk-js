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
  apiVersion: '2012-12-01',
  endpointPrefix: 'redshift',
  resultWrapped: true,
  serviceFullName: 'Amazon Redshift',
  signatureVersion: 'v4',
  timestampFormat: 'iso8601',
  operations: {
    authorizeClusterSecurityGroupIngress: {
      name: 'AuthorizeClusterSecurityGroupIngress',
      input: {
        type: 'structure',
        members: {
          ClusterSecurityGroupName: {
            required: true
          },
          CIDRIP: {
          },
          EC2SecurityGroupName: {
          },
          EC2SecurityGroupOwnerId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterSecurityGroup: {
            type: 'structure',
            members: {
              ClusterSecurityGroupName: {
              },
              Description: {
              },
              EC2SecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    EC2SecurityGroupName: {
                    },
                    EC2SecurityGroupOwnerId: {
                    }
                  },
                  name: 'EC2SecurityGroup'
                }
              },
              IPRanges: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    CIDRIP: {
                    }
                  },
                  name: 'IPRange'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    copyClusterSnapshot: {
      name: 'CopyClusterSnapshot',
      input: {
        type: 'structure',
        members: {
          SourceSnapshotIdentifier: {
            required: true
          },
          TargetSnapshotIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Snapshot: {
            type: 'structure',
            members: {
              SnapshotIdentifier: {
              },
              ClusterIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              ClusterCreateTime: {
                type: 'timestamp'
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
                type: 'integer'
              },
              DBName: {
              },
              VpcId: {
              },
              Encrypted: {
                type: 'boolean'
              }
            },
            wrapper: true
          }
        }
      }
    },
    createCluster: {
      name: 'CreateCluster',
      input: {
        type: 'structure',
        members: {
          DBName: {
          },
          ClusterIdentifier: {
            required: true
          },
          ClusterType: {
          },
          NodeType: {
            required: true
          },
          MasterUsername: {
            required: true
          },
          MasterUserPassword: {
            required: true
          },
          ClusterSecurityGroups: {
            type: 'list',
            members: {
              name: 'ClusterSecurityGroupName'
            }
          },
          VpcSecurityGroupIds: {
            type: 'list',
            members: {
              name: 'VpcSecurityGroupId'
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
            type: 'integer'
          },
          Port: {
            type: 'integer'
          },
          ClusterVersion: {
          },
          AllowVersionUpgrade: {
            type: 'boolean'
          },
          NumberOfNodes: {
            type: 'integer'
          },
          PubliclyAccessible: {
            type: 'boolean'
          },
          Encrypted: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
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
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              }
            },
            wrapper: true
          }
        }
      }
    },
    createClusterParameterGroup: {
      name: 'CreateClusterParameterGroup',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
            required: true
          },
          ParameterGroupFamily: {
            required: true
          },
          Description: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterParameterGroup: {
            type: 'structure',
            members: {
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
    createClusterSecurityGroup: {
      name: 'CreateClusterSecurityGroup',
      input: {
        type: 'structure',
        members: {
          ClusterSecurityGroupName: {
            required: true
          },
          Description: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterSecurityGroup: {
            type: 'structure',
            members: {
              ClusterSecurityGroupName: {
              },
              Description: {
              },
              EC2SecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    EC2SecurityGroupName: {
                    },
                    EC2SecurityGroupOwnerId: {
                    }
                  },
                  name: 'EC2SecurityGroup'
                }
              },
              IPRanges: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    CIDRIP: {
                    }
                  },
                  name: 'IPRange'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    createClusterSnapshot: {
      name: 'CreateClusterSnapshot',
      input: {
        type: 'structure',
        members: {
          SnapshotIdentifier: {
            required: true
          },
          ClusterIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Snapshot: {
            type: 'structure',
            members: {
              SnapshotIdentifier: {
              },
              ClusterIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              ClusterCreateTime: {
                type: 'timestamp'
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
                type: 'integer'
              },
              DBName: {
              },
              VpcId: {
              },
              Encrypted: {
                type: 'boolean'
              }
            },
            wrapper: true
          }
        }
      }
    },
    createClusterSubnetGroup: {
      name: 'CreateClusterSubnetGroup',
      input: {
        type: 'structure',
        members: {
          ClusterSubnetGroupName: {
            required: true
          },
          Description: {
            required: true
          },
          SubnetIds: {
            type: 'list',
            members: {
              name: 'SubnetIdentifier'
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterSubnetGroup: {
            type: 'structure',
            members: {
              ClusterSubnetGroupName: {
              },
              Description: {
              },
              VpcId: {
              },
              SubnetGroupStatus: {
              },
              Subnets: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    SubnetIdentifier: {
                    },
                    SubnetAvailabilityZone: {
                      type: 'structure',
                      members: {
                        Name: {
                        }
                      },
                      wrapper: true
                    },
                    SubnetStatus: {
                    }
                  },
                  name: 'Subnet'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    deleteCluster: {
      name: 'DeleteCluster',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          },
          SkipFinalClusterSnapshot: {
            type: 'boolean'
          },
          FinalClusterSnapshotIdentifier: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
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
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              }
            },
            wrapper: true
          }
        }
      }
    },
    deleteClusterParameterGroup: {
      name: 'DeleteClusterParameterGroup',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
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
    deleteClusterSecurityGroup: {
      name: 'DeleteClusterSecurityGroup',
      input: {
        type: 'structure',
        members: {
          ClusterSecurityGroupName: {
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
    deleteClusterSnapshot: {
      name: 'DeleteClusterSnapshot',
      input: {
        type: 'structure',
        members: {
          SnapshotIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Snapshot: {
            type: 'structure',
            members: {
              SnapshotIdentifier: {
              },
              ClusterIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              ClusterCreateTime: {
                type: 'timestamp'
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
                type: 'integer'
              },
              DBName: {
              },
              VpcId: {
              },
              Encrypted: {
                type: 'boolean'
              }
            },
            wrapper: true
          }
        }
      }
    },
    deleteClusterSubnetGroup: {
      name: 'DeleteClusterSubnetGroup',
      input: {
        type: 'structure',
        members: {
          ClusterSubnetGroupName: {
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
    describeClusterParameterGroups: {
      name: 'DescribeClusterParameterGroups',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ParameterGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterGroupName: {
                },
                ParameterGroupFamily: {
                },
                Description: {
                }
              },
              wrapper: true,
              name: 'ClusterParameterGroup'
            }
          }
        }
      }
    },
    describeClusterParameters: {
      name: 'DescribeClusterParameters',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
            required: true
          },
          Source: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Parameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
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
                  type: 'boolean'
                },
                MinimumEngineVersion: {
                }
              },
              name: 'Parameter'
            }
          },
          Marker: {
          }
        }
      }
    },
    describeClusterSecurityGroups: {
      name: 'DescribeClusterSecurityGroups',
      input: {
        type: 'structure',
        members: {
          ClusterSecurityGroupName: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ClusterSecurityGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ClusterSecurityGroupName: {
                },
                Description: {
                },
                EC2SecurityGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Status: {
                      },
                      EC2SecurityGroupName: {
                      },
                      EC2SecurityGroupOwnerId: {
                      }
                    },
                    name: 'EC2SecurityGroup'
                  }
                },
                IPRanges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Status: {
                      },
                      CIDRIP: {
                      }
                    },
                    name: 'IPRange'
                  }
                }
              },
              wrapper: true,
              name: 'ClusterSecurityGroup'
            }
          }
        }
      }
    },
    describeClusterSnapshots: {
      name: 'DescribeClusterSnapshots',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
          },
          SnapshotIdentifier: {
          },
          SnapshotType: {
          },
          StartTime: {
            type: 'timestamp'
          },
          EndTime: {
            type: 'timestamp'
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          Snapshots: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                SnapshotIdentifier: {
                },
                ClusterIdentifier: {
                },
                SnapshotCreateTime: {
                  type: 'timestamp'
                },
                Status: {
                },
                Port: {
                  type: 'integer'
                },
                AvailabilityZone: {
                },
                ClusterCreateTime: {
                  type: 'timestamp'
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
                  type: 'integer'
                },
                DBName: {
                },
                VpcId: {
                },
                Encrypted: {
                  type: 'boolean'
                }
              },
              wrapper: true,
              name: 'Snapshot'
            }
          }
        }
      }
    },
    describeClusterSubnetGroups: {
      name: 'DescribeClusterSubnetGroups',
      input: {
        type: 'structure',
        members: {
          ClusterSubnetGroupName: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ClusterSubnetGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ClusterSubnetGroupName: {
                },
                Description: {
                },
                VpcId: {
                },
                SubnetGroupStatus: {
                },
                Subnets: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      SubnetIdentifier: {
                      },
                      SubnetAvailabilityZone: {
                        type: 'structure',
                        members: {
                          Name: {
                          }
                        },
                        wrapper: true
                      },
                      SubnetStatus: {
                      }
                    },
                    name: 'Subnet'
                  }
                }
              },
              wrapper: true,
              name: 'ClusterSubnetGroup'
            }
          }
        }
      }
    },
    describeClusterVersions: {
      name: 'DescribeClusterVersions',
      input: {
        type: 'structure',
        members: {
          ClusterVersion: {
          },
          ClusterParameterGroupFamily: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ClusterVersions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ClusterVersion: {
                },
                ClusterParameterGroupFamily: {
                },
                Description: {
                }
              },
              name: 'ClusterVersion'
            }
          }
        }
      }
    },
    describeClusters: {
      name: 'DescribeClusters',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          Clusters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
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
                  type: 'structure',
                  members: {
                    Address: {
                    },
                    Port: {
                      type: 'integer'
                    }
                  }
                },
                ClusterCreateTime: {
                  type: 'timestamp'
                },
                AutomatedSnapshotRetentionPeriod: {
                  type: 'integer'
                },
                ClusterSecurityGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      ClusterSecurityGroupName: {
                      },
                      Status: {
                      }
                    },
                    name: 'ClusterSecurityGroup'
                  }
                },
                VpcSecurityGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      VpcSecurityGroupId: {
                      },
                      Status: {
                      }
                    },
                    name: 'VpcSecurityGroup'
                  }
                },
                ClusterParameterGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      ParameterGroupName: {
                      },
                      ParameterApplyStatus: {
                      }
                    },
                    name: 'ClusterParameterGroup'
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
                  type: 'structure',
                  members: {
                    MasterUserPassword: {
                    },
                    NodeType: {
                    },
                    NumberOfNodes: {
                      type: 'integer'
                    },
                    ClusterType: {
                    },
                    ClusterVersion: {
                    },
                    AutomatedSnapshotRetentionPeriod: {
                      type: 'integer'
                    }
                  }
                },
                ClusterVersion: {
                },
                AllowVersionUpgrade: {
                  type: 'boolean'
                },
                NumberOfNodes: {
                  type: 'integer'
                },
                PubliclyAccessible: {
                  type: 'boolean'
                },
                Encrypted: {
                  type: 'boolean'
                }
              },
              wrapper: true,
              name: 'Cluster'
            }
          }
        }
      }
    },
    describeDefaultClusterParameters: {
      name: 'DescribeDefaultClusterParameters',
      input: {
        type: 'structure',
        members: {
          ParameterGroupFamily: {
            required: true
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DefaultClusterParameters: {
            type: 'structure',
            members: {
              ParameterGroupFamily: {
              },
              Marker: {
              },
              Parameters: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
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
                      type: 'boolean'
                    },
                    MinimumEngineVersion: {
                    }
                  },
                  name: 'Parameter'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    describeEvents: {
      name: 'DescribeEvents',
      input: {
        type: 'structure',
        members: {
          SourceIdentifier: {
          },
          SourceType: {
          },
          StartTime: {
            type: 'timestamp'
          },
          EndTime: {
            type: 'timestamp'
          },
          Duration: {
            type: 'integer'
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          Events: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                SourceIdentifier: {
                },
                SourceType: {
                },
                Message: {
                },
                Date: {
                  type: 'timestamp'
                }
              },
              name: 'Event'
            }
          }
        }
      }
    },
    describeOrderableClusterOptions: {
      name: 'DescribeOrderableClusterOptions',
      input: {
        type: 'structure',
        members: {
          ClusterVersion: {
          },
          NodeType: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          OrderableClusterOptions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ClusterVersion: {
                },
                ClusterType: {
                },
                NodeType: {
                },
                AvailabilityZones: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Name: {
                      }
                    },
                    wrapper: true,
                    name: 'AvailabilityZone'
                  }
                }
              },
              wrapper: true,
              name: 'OrderableClusterOption'
            }
          },
          Marker: {
          }
        }
      }
    },
    describeReservedNodeOfferings: {
      name: 'DescribeReservedNodeOfferings',
      input: {
        type: 'structure',
        members: {
          ReservedNodeOfferingId: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ReservedNodeOfferings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ReservedNodeOfferingId: {
                },
                NodeType: {
                },
                Duration: {
                  type: 'integer'
                },
                FixedPrice: {
                  type: 'float'
                },
                UsagePrice: {
                  type: 'float'
                },
                CurrencyCode: {
                },
                OfferingType: {
                },
                RecurringCharges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      RecurringChargeAmount: {
                        type: 'float'
                      },
                      RecurringChargeFrequency: {
                      }
                    },
                    wrapper: true,
                    name: 'RecurringCharge'
                  }
                }
              },
              wrapper: true,
              name: 'ReservedNodeOffering'
            }
          }
        }
      }
    },
    describeReservedNodes: {
      name: 'DescribeReservedNodes',
      input: {
        type: 'structure',
        members: {
          ReservedNodeId: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          ReservedNodes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ReservedNodeId: {
                },
                ReservedNodeOfferingId: {
                },
                NodeType: {
                },
                StartTime: {
                  type: 'timestamp'
                },
                Duration: {
                  type: 'integer'
                },
                FixedPrice: {
                  type: 'float'
                },
                UsagePrice: {
                  type: 'float'
                },
                CurrencyCode: {
                },
                NodeCount: {
                  type: 'integer'
                },
                State: {
                },
                OfferingType: {
                },
                RecurringCharges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      RecurringChargeAmount: {
                        type: 'float'
                      },
                      RecurringChargeFrequency: {
                      }
                    },
                    wrapper: true,
                    name: 'RecurringCharge'
                  }
                }
              },
              wrapper: true,
              name: 'ReservedNode'
            }
          }
        }
      }
    },
    describeResize: {
      name: 'DescribeResize',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TargetNodeType: {
          },
          TargetNumberOfNodes: {
            type: 'integer'
          },
          TargetClusterType: {
          },
          Status: {
          },
          ImportTablesCompleted: {
            type: 'list'
          },
          ImportTablesInProgress: {
            type: 'list'
          },
          ImportTablesNotStarted: {
            type: 'list'
          }
        }
      }
    },
    modifyCluster: {
      name: 'ModifyCluster',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          },
          ClusterType: {
          },
          NodeType: {
          },
          NumberOfNodes: {
            type: 'integer'
          },
          ClusterSecurityGroups: {
            type: 'list',
            members: {
              name: 'ClusterSecurityGroupName'
            }
          },
          VpcSecurityGroupIds: {
            type: 'list',
            members: {
              name: 'VpcSecurityGroupId'
            }
          },
          MasterUserPassword: {
          },
          ClusterParameterGroupName: {
          },
          AutomatedSnapshotRetentionPeriod: {
            type: 'integer'
          },
          PreferredMaintenanceWindow: {
          },
          ClusterVersion: {
          },
          AllowVersionUpgrade: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
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
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              }
            },
            wrapper: true
          }
        }
      }
    },
    modifyClusterParameterGroup: {
      name: 'ModifyClusterParameterGroup',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
            required: true
          },
          Parameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
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
                  type: 'boolean'
                },
                MinimumEngineVersion: {
                }
              },
              name: 'Parameter'
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ParameterGroupName: {
          },
          ParameterGroupStatus: {
          }
        }
      }
    },
    modifyClusterSubnetGroup: {
      name: 'ModifyClusterSubnetGroup',
      input: {
        type: 'structure',
        members: {
          ClusterSubnetGroupName: {
            required: true
          },
          Description: {
          },
          SubnetIds: {
            type: 'list',
            members: {
              name: 'SubnetIdentifier'
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterSubnetGroup: {
            type: 'structure',
            members: {
              ClusterSubnetGroupName: {
              },
              Description: {
              },
              VpcId: {
              },
              SubnetGroupStatus: {
              },
              Subnets: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    SubnetIdentifier: {
                    },
                    SubnetAvailabilityZone: {
                      type: 'structure',
                      members: {
                        Name: {
                        }
                      },
                      wrapper: true
                    },
                    SubnetStatus: {
                    }
                  },
                  name: 'Subnet'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    purchaseReservedNodeOffering: {
      name: 'PurchaseReservedNodeOffering',
      input: {
        type: 'structure',
        members: {
          ReservedNodeOfferingId: {
            required: true
          },
          NodeCount: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ReservedNode: {
            type: 'structure',
            members: {
              ReservedNodeId: {
              },
              ReservedNodeOfferingId: {
              },
              NodeType: {
              },
              StartTime: {
                type: 'timestamp'
              },
              Duration: {
                type: 'integer'
              },
              FixedPrice: {
                type: 'float'
              },
              UsagePrice: {
                type: 'float'
              },
              CurrencyCode: {
              },
              NodeCount: {
                type: 'integer'
              },
              State: {
              },
              OfferingType: {
              },
              RecurringCharges: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    RecurringChargeAmount: {
                      type: 'float'
                    },
                    RecurringChargeFrequency: {
                    }
                  },
                  wrapper: true,
                  name: 'RecurringCharge'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    rebootCluster: {
      name: 'RebootCluster',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
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
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              }
            },
            wrapper: true
          }
        }
      }
    },
    resetClusterParameterGroup: {
      name: 'ResetClusterParameterGroup',
      input: {
        type: 'structure',
        members: {
          ParameterGroupName: {
            required: true
          },
          ResetAllParameters: {
            type: 'boolean'
          },
          Parameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
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
                  type: 'boolean'
                },
                MinimumEngineVersion: {
                }
              },
              name: 'Parameter'
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ParameterGroupName: {
          },
          ParameterGroupStatus: {
          }
        }
      }
    },
    restoreFromClusterSnapshot: {
      name: 'RestoreFromClusterSnapshot',
      input: {
        type: 'structure',
        members: {
          ClusterIdentifier: {
            required: true
          },
          SnapshotIdentifier: {
            required: true
          },
          Port: {
            type: 'integer'
          },
          AvailabilityZone: {
          },
          AllowVersionUpgrade: {
            type: 'boolean'
          },
          ClusterSubnetGroupName: {
          },
          PubliclyAccessible: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Cluster: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClusterCreateTime: {
                type: 'timestamp'
              },
              AutomatedSnapshotRetentionPeriod: {
                type: 'integer'
              },
              ClusterSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ClusterSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'ClusterSecurityGroup'
                }
              },
              VpcSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VpcSecurityGroupId: {
                    },
                    Status: {
                    }
                  },
                  name: 'VpcSecurityGroup'
                }
              },
              ClusterParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'ClusterParameterGroup'
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
                type: 'structure',
                members: {
                  MasterUserPassword: {
                  },
                  NodeType: {
                  },
                  NumberOfNodes: {
                    type: 'integer'
                  },
                  ClusterType: {
                  },
                  ClusterVersion: {
                  },
                  AutomatedSnapshotRetentionPeriod: {
                    type: 'integer'
                  }
                }
              },
              ClusterVersion: {
              },
              AllowVersionUpgrade: {
                type: 'boolean'
              },
              NumberOfNodes: {
                type: 'integer'
              },
              PubliclyAccessible: {
                type: 'boolean'
              },
              Encrypted: {
                type: 'boolean'
              }
            },
            wrapper: true
          }
        }
      }
    },
    revokeClusterSecurityGroupIngress: {
      name: 'RevokeClusterSecurityGroupIngress',
      input: {
        type: 'structure',
        members: {
          ClusterSecurityGroupName: {
            required: true
          },
          CIDRIP: {
          },
          EC2SecurityGroupName: {
          },
          EC2SecurityGroupOwnerId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ClusterSecurityGroup: {
            type: 'structure',
            members: {
              ClusterSecurityGroupName: {
              },
              Description: {
              },
              EC2SecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    EC2SecurityGroupName: {
                    },
                    EC2SecurityGroupOwnerId: {
                    }
                  },
                  name: 'EC2SecurityGroup'
                }
              },
              IPRanges: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Status: {
                    },
                    CIDRIP: {
                    }
                  },
                  name: 'IPRange'
                }
              }
            },
            wrapper: true
          }
        }
      }
    }
  }
};
