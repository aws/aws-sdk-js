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
  serviceName: 'rds',
  resultWrapped: true,
  apiVersion: '2012-07-31',
  timestampFormat: 'iso8601',
  operations: {
    authorizeDBSecurityGroupIngress: {
      n: 'AuthorizeDBSecurityGroupIngress',
      i: {
        m: {
          DBSecurityGroupName: {
            r: 1
          },
          CIDRIP: {
          },
          EC2SecurityGroupName: {
          },
          EC2SecurityGroupId: {
          },
          EC2SecurityGroupOwnerId: {
          }
        }
      },
      o: {
        OwnerId: {
        },
        DBSecurityGroupName: {
        },
        DBSecurityGroupDescription: {
        },
        VpcId: {
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
              EC2SecurityGroupId: {
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
      }
    },
    copyDBSnapshot: {
      n: 'CopyDBSnapshot',
      i: {
        m: {
          SourceDBSnapshotIdentifier: {
            r: 1
          },
          TargetDBSnapshotIdentifier: {
            r: 1
          }
        }
      },
      o: {
        DBSnapshotIdentifier: {
        },
        DBInstanceIdentifier: {
        },
        SnapshotCreateTime: {
          t: 't'
        },
        Engine: {
        },
        AllocatedStorage: {
          t: 'i'
        },
        Status: {
        },
        Port: {
          t: 'i'
        },
        AvailabilityZone: {
        },
        VpcId: {
        },
        InstanceCreateTime: {
          t: 't'
        },
        MasterUsername: {
        },
        EngineVersion: {
        },
        LicenseModel: {
        },
        SnapshotType: {
        }
      }
    },
    createDBInstance: {
      n: 'CreateDBInstance',
      i: {
        m: {
          DBName: {
          },
          DBInstanceIdentifier: {
            r: 1
          },
          AllocatedStorage: {
            t: 'i',
            r: 1
          },
          DBInstanceClass: {
            r: 1
          },
          Engine: {
            r: 1
          },
          MasterUsername: {
            r: 1
          },
          MasterUserPassword: {
            r: 1
          },
          DBSecurityGroups: {
            t: 'a',
            m: {
              n: 'DBSecurityGroupName'
            }
          },
          AvailabilityZone: {
          },
          DBSubnetGroupName: {
          },
          PreferredMaintenanceWindow: {
          },
          DBParameterGroupName: {
          },
          BackupRetentionPeriod: {
            t: 'i'
          },
          PreferredBackupWindow: {
          },
          Port: {
            t: 'i'
          },
          MultiAZ: {
            t: 'b'
          },
          EngineVersion: {
          },
          AutoMinorVersionUpgrade: {
            t: 'b'
          },
          LicenseModel: {
          },
          OptionGroupName: {
          },
          CharacterSetName: {
          }
        }
      },
      o: {
        DBInstanceIdentifier: {
        },
        DBInstanceClass: {
        },
        Engine: {
        },
        DBInstanceStatus: {
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
        AllocatedStorage: {
          t: 'i'
        },
        InstanceCreateTime: {
          t: 't'
        },
        PreferredBackupWindow: {
        },
        BackupRetentionPeriod: {
          t: 'i'
        },
        DBSecurityGroups: {
          t: 'a',
          m: {
            n: 'DBSecurityGroup',
            t: 'o',
            m: {
              DBSecurityGroupName: {
              },
              Status: {
              }
            }
          }
        },
        DBParameterGroups: {
          t: 'a',
          m: {
            n: 'DBParameterGroup',
            t: 'o',
            m: {
              DBParameterGroupName: {
              },
              ParameterApplyStatus: {
              }
            }
          }
        },
        AvailabilityZone: {
        },
        DBSubnetGroup: {
          t: 'o',
          m: {
            DBSubnetGroupName: {
            },
            DBSubnetGroupDescription: {
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
                    }
                  },
                  SubnetStatus: {
                  }
                }
              }
            }
          }
        },
        PreferredMaintenanceWindow: {
        },
        PendingModifiedValues: {
          t: 'o',
          m: {
            DBInstanceClass: {
            },
            AllocatedStorage: {
              t: 'i'
            },
            MasterUserPassword: {
            },
            Port: {
              t: 'i'
            },
            BackupRetentionPeriod: {
              t: 'i'
            },
            MultiAZ: {
              t: 'b'
            },
            EngineVersion: {
            }
          }
        },
        LatestRestorableTime: {
          t: 't'
        },
        MultiAZ: {
          t: 'b'
        },
        EngineVersion: {
        },
        AutoMinorVersionUpgrade: {
          t: 'b'
        },
        ReadReplicaSourceDBInstanceIdentifier: {
        },
        ReadReplicaDBInstanceIdentifiers: {
          t: 'a',
          m: {
            n: 'ReadReplicaDBInstanceIdentifier'
          }
        },
        LicenseModel: {
        },
        OptionGroupMembership: {
          t: 'o',
          m: {
            OptionGroupName: {
            },
            Status: {
            }
          }
        },
        CharacterSetName: {
        }
      }
    },
    createDBInstanceReadReplica: {
      n: 'CreateDBInstanceReadReplica',
      i: {
        m: {
          DBInstanceIdentifier: {
            r: 1
          },
          SourceDBInstanceIdentifier: {
            r: 1
          },
          DBInstanceClass: {
          },
          AvailabilityZone: {
          },
          Port: {
            t: 'i'
          },
          AutoMinorVersionUpgrade: {
            t: 'b'
          },
          OptionGroupName: {
          }
        }
      },
      o: {
        DBInstanceIdentifier: {
        },
        DBInstanceClass: {
        },
        Engine: {
        },
        DBInstanceStatus: {
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
        AllocatedStorage: {
          t: 'i'
        },
        InstanceCreateTime: {
          t: 't'
        },
        PreferredBackupWindow: {
        },
        BackupRetentionPeriod: {
          t: 'i'
        },
        DBSecurityGroups: {
          t: 'a',
          m: {
            n: 'DBSecurityGroup',
            t: 'o',
            m: {
              DBSecurityGroupName: {
              },
              Status: {
              }
            }
          }
        },
        DBParameterGroups: {
          t: 'a',
          m: {
            n: 'DBParameterGroup',
            t: 'o',
            m: {
              DBParameterGroupName: {
              },
              ParameterApplyStatus: {
              }
            }
          }
        },
        AvailabilityZone: {
        },
        DBSubnetGroup: {
          t: 'o',
          m: {
            DBSubnetGroupName: {
            },
            DBSubnetGroupDescription: {
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
                    }
                  },
                  SubnetStatus: {
                  }
                }
              }
            }
          }
        },
        PreferredMaintenanceWindow: {
        },
        PendingModifiedValues: {
          t: 'o',
          m: {
            DBInstanceClass: {
            },
            AllocatedStorage: {
              t: 'i'
            },
            MasterUserPassword: {
            },
            Port: {
              t: 'i'
            },
            BackupRetentionPeriod: {
              t: 'i'
            },
            MultiAZ: {
              t: 'b'
            },
            EngineVersion: {
            }
          }
        },
        LatestRestorableTime: {
          t: 't'
        },
        MultiAZ: {
          t: 'b'
        },
        EngineVersion: {
        },
        AutoMinorVersionUpgrade: {
          t: 'b'
        },
        ReadReplicaSourceDBInstanceIdentifier: {
        },
        ReadReplicaDBInstanceIdentifiers: {
          t: 'a',
          m: {
            n: 'ReadReplicaDBInstanceIdentifier'
          }
        },
        LicenseModel: {
        },
        OptionGroupMembership: {
          t: 'o',
          m: {
            OptionGroupName: {
            },
            Status: {
            }
          }
        },
        CharacterSetName: {
        }
      }
    },
    createDBParameterGroup: {
      n: 'CreateDBParameterGroup',
      i: {
        m: {
          DBParameterGroupName: {
            r: 1
          },
          DBParameterGroupFamily: {
            r: 1
          },
          Description: {
            r: 1
          }
        }
      },
      o: {
        DBParameterGroupName: {
        },
        DBParameterGroupFamily: {
        },
        Description: {
        }
      }
    },
    createDBSecurityGroup: {
      n: 'CreateDBSecurityGroup',
      i: {
        m: {
          DBSecurityGroupName: {
            r: 1
          },
          DBSecurityGroupDescription: {
            r: 1
          },
          EC2VpcId: {
          }
        }
      },
      o: {
        OwnerId: {
        },
        DBSecurityGroupName: {
        },
        DBSecurityGroupDescription: {
        },
        VpcId: {
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
              EC2SecurityGroupId: {
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
      }
    },
    createDBSnapshot: {
      n: 'CreateDBSnapshot',
      i: {
        m: {
          DBSnapshotIdentifier: {
            r: 1
          },
          DBInstanceIdentifier: {
            r: 1
          }
        }
      },
      o: {
        DBSnapshotIdentifier: {
        },
        DBInstanceIdentifier: {
        },
        SnapshotCreateTime: {
          t: 't'
        },
        Engine: {
        },
        AllocatedStorage: {
          t: 'i'
        },
        Status: {
        },
        Port: {
          t: 'i'
        },
        AvailabilityZone: {
        },
        VpcId: {
        },
        InstanceCreateTime: {
          t: 't'
        },
        MasterUsername: {
        },
        EngineVersion: {
        },
        LicenseModel: {
        },
        SnapshotType: {
        }
      }
    },
    createDBSubnetGroup: {
      n: 'CreateDBSubnetGroup',
      i: {
        m: {
          DBSubnetGroupName: {
            r: 1
          },
          DBSubnetGroupDescription: {
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
        DBSubnetGroupName: {
        },
        DBSubnetGroupDescription: {
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
                }
              },
              SubnetStatus: {
              }
            }
          }
        }
      }
    },
    createOptionGroup: {
      n: 'CreateOptionGroup',
      i: {
        m: {
          OptionGroupName: {
            r: 1
          },
          EngineName: {
            r: 1
          },
          MajorEngineVersion: {
            r: 1
          },
          OptionGroupDescription: {
            r: 1
          }
        }
      },
      o: {
        OptionGroupName: {
        },
        OptionGroupDescription: {
        },
        EngineName: {
        },
        MajorEngineVersion: {
        },
        Options: {
          t: 'a',
          m: {
            n: 'Option',
            t: 'o',
            m: {
              OptionName: {
              },
              OptionDescription: {
              },
              Port: {
                t: 'i'
              },
              DBSecurityGroupMemberships: {
                t: 'a',
                m: {
                  n: 'DBSecurityGroup',
                  t: 'o',
                  m: {
                    DBSecurityGroupName: {
                    },
                    Status: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    deleteDBInstance: {
      n: 'DeleteDBInstance',
      i: {
        m: {
          DBInstanceIdentifier: {
            r: 1
          },
          SkipFinalSnapshot: {
            t: 'b'
          },
          FinalDBSnapshotIdentifier: {
          }
        }
      },
      o: {
        DBInstanceIdentifier: {
        },
        DBInstanceClass: {
        },
        Engine: {
        },
        DBInstanceStatus: {
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
        AllocatedStorage: {
          t: 'i'
        },
        InstanceCreateTime: {
          t: 't'
        },
        PreferredBackupWindow: {
        },
        BackupRetentionPeriod: {
          t: 'i'
        },
        DBSecurityGroups: {
          t: 'a',
          m: {
            n: 'DBSecurityGroup',
            t: 'o',
            m: {
              DBSecurityGroupName: {
              },
              Status: {
              }
            }
          }
        },
        DBParameterGroups: {
          t: 'a',
          m: {
            n: 'DBParameterGroup',
            t: 'o',
            m: {
              DBParameterGroupName: {
              },
              ParameterApplyStatus: {
              }
            }
          }
        },
        AvailabilityZone: {
        },
        DBSubnetGroup: {
          t: 'o',
          m: {
            DBSubnetGroupName: {
            },
            DBSubnetGroupDescription: {
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
                    }
                  },
                  SubnetStatus: {
                  }
                }
              }
            }
          }
        },
        PreferredMaintenanceWindow: {
        },
        PendingModifiedValues: {
          t: 'o',
          m: {
            DBInstanceClass: {
            },
            AllocatedStorage: {
              t: 'i'
            },
            MasterUserPassword: {
            },
            Port: {
              t: 'i'
            },
            BackupRetentionPeriod: {
              t: 'i'
            },
            MultiAZ: {
              t: 'b'
            },
            EngineVersion: {
            }
          }
        },
        LatestRestorableTime: {
          t: 't'
        },
        MultiAZ: {
          t: 'b'
        },
        EngineVersion: {
        },
        AutoMinorVersionUpgrade: {
          t: 'b'
        },
        ReadReplicaSourceDBInstanceIdentifier: {
        },
        ReadReplicaDBInstanceIdentifiers: {
          t: 'a',
          m: {
            n: 'ReadReplicaDBInstanceIdentifier'
          }
        },
        LicenseModel: {
        },
        OptionGroupMembership: {
          t: 'o',
          m: {
            OptionGroupName: {
            },
            Status: {
            }
          }
        },
        CharacterSetName: {
        }
      }
    },
    deleteDBParameterGroup: {
      n: 'DeleteDBParameterGroup',
      i: {
        m: {
          DBParameterGroupName: {
            r: 1
          }
        }
      }
    },
    deleteDBSecurityGroup: {
      n: 'DeleteDBSecurityGroup',
      i: {
        m: {
          DBSecurityGroupName: {
            r: 1
          }
        }
      }
    },
    deleteDBSnapshot: {
      n: 'DeleteDBSnapshot',
      i: {
        m: {
          DBSnapshotIdentifier: {
            r: 1
          }
        }
      },
      o: {
        DBSnapshotIdentifier: {
        },
        DBInstanceIdentifier: {
        },
        SnapshotCreateTime: {
          t: 't'
        },
        Engine: {
        },
        AllocatedStorage: {
          t: 'i'
        },
        Status: {
        },
        Port: {
          t: 'i'
        },
        AvailabilityZone: {
        },
        VpcId: {
        },
        InstanceCreateTime: {
          t: 't'
        },
        MasterUsername: {
        },
        EngineVersion: {
        },
        LicenseModel: {
        },
        SnapshotType: {
        }
      }
    },
    deleteDBSubnetGroup: {
      n: 'DeleteDBSubnetGroup',
      i: {
        m: {
          DBSubnetGroupName: {
            r: 1
          }
        }
      }
    },
    deleteOptionGroup: {
      n: 'DeleteOptionGroup',
      i: {
        m: {
          OptionGroupName: {
            r: 1
          }
        }
      }
    },
    describeDBEngineVersions: {
      n: 'DescribeDBEngineVersions',
      i: {
        m: {
          Engine: {
          },
          EngineVersion: {
          },
          DBParameterGroupFamily: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          },
          DefaultOnly: {
            t: 'b'
          },
          ListSupportedCharacterSets: {
            t: 'b'
          }
        }
      },
      o: {
        Marker: {
        },
        DBEngineVersions: {
          t: 'a',
          m: {
            n: 'DBEngineVersion',
            t: 'o',
            m: {
              Engine: {
              },
              EngineVersion: {
              },
              DBParameterGroupFamily: {
              },
              DBEngineDescription: {
              },
              DBEngineVersionDescription: {
              },
              SupportedCharacterSets: {
                t: 'a',
                m: {
                  n: 'CharacterSet',
                  t: 'o',
                  m: {
                    CharacterSetName: {
                    },
                    CharacterSetDescription: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeDBInstances: {
      n: 'DescribeDBInstances',
      i: {
        m: {
          DBInstanceIdentifier: {
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
        DBInstances: {
          t: 'a',
          m: {
            n: 'DBInstance',
            t: 'o',
            m: {
              DBInstanceIdentifier: {
              },
              DBInstanceClass: {
              },
              Engine: {
              },
              DBInstanceStatus: {
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
              AllocatedStorage: {
                t: 'i'
              },
              InstanceCreateTime: {
                t: 't'
              },
              PreferredBackupWindow: {
              },
              BackupRetentionPeriod: {
                t: 'i'
              },
              DBSecurityGroups: {
                t: 'a',
                m: {
                  n: 'DBSecurityGroup',
                  t: 'o',
                  m: {
                    DBSecurityGroupName: {
                    },
                    Status: {
                    }
                  }
                }
              },
              DBParameterGroups: {
                t: 'a',
                m: {
                  n: 'DBParameterGroup',
                  t: 'o',
                  m: {
                    DBParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  }
                }
              },
              AvailabilityZone: {
              },
              DBSubnetGroup: {
                t: 'o',
                m: {
                  DBSubnetGroupName: {
                  },
                  DBSubnetGroupDescription: {
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
                          }
                        },
                        SubnetStatus: {
                        }
                      }
                    }
                  }
                }
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                t: 'o',
                m: {
                  DBInstanceClass: {
                  },
                  AllocatedStorage: {
                    t: 'i'
                  },
                  MasterUserPassword: {
                  },
                  Port: {
                    t: 'i'
                  },
                  BackupRetentionPeriod: {
                    t: 'i'
                  },
                  MultiAZ: {
                    t: 'b'
                  },
                  EngineVersion: {
                  }
                }
              },
              LatestRestorableTime: {
                t: 't'
              },
              MultiAZ: {
                t: 'b'
              },
              EngineVersion: {
              },
              AutoMinorVersionUpgrade: {
                t: 'b'
              },
              ReadReplicaSourceDBInstanceIdentifier: {
              },
              ReadReplicaDBInstanceIdentifiers: {
                t: 'a',
                m: {
                  n: 'ReadReplicaDBInstanceIdentifier'
                }
              },
              LicenseModel: {
              },
              OptionGroupMembership: {
                t: 'o',
                m: {
                  OptionGroupName: {
                  },
                  Status: {
                  }
                }
              },
              CharacterSetName: {
              }
            }
          }
        }
      }
    },
    describeDBParameterGroups: {
      n: 'DescribeDBParameterGroups',
      i: {
        m: {
          DBParameterGroupName: {
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
        DBParameterGroups: {
          t: 'a',
          m: {
            n: 'DBParameterGroup',
            t: 'o',
            m: {
              DBParameterGroupName: {
              },
              DBParameterGroupFamily: {
              },
              Description: {
              }
            }
          }
        }
      }
    },
    describeDBParameters: {
      n: 'DescribeDBParameters',
      i: {
        m: {
          DBParameterGroupName: {
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
              ApplyType: {
              },
              DataType: {
              },
              AllowedValues: {
              },
              IsModifiable: {
                t: 'b'
              },
              MinimumEngineVersion: {
              },
              ApplyMethod: {
              }
            }
          }
        },
        Marker: {
        }
      }
    },
    describeDBSecurityGroups: {
      n: 'DescribeDBSecurityGroups',
      i: {
        m: {
          DBSecurityGroupName: {
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
        DBSecurityGroups: {
          t: 'a',
          m: {
            n: 'DBSecurityGroup',
            t: 'o',
            m: {
              OwnerId: {
              },
              DBSecurityGroupName: {
              },
              DBSecurityGroupDescription: {
              },
              VpcId: {
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
                    EC2SecurityGroupId: {
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
            }
          }
        }
      }
    },
    describeDBSnapshots: {
      n: 'DescribeDBSnapshots',
      i: {
        m: {
          DBInstanceIdentifier: {
          },
          DBSnapshotIdentifier: {
          },
          SnapshotType: {
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
        DBSnapshots: {
          t: 'a',
          m: {
            n: 'DBSnapshot',
            t: 'o',
            m: {
              DBSnapshotIdentifier: {
              },
              DBInstanceIdentifier: {
              },
              SnapshotCreateTime: {
                t: 't'
              },
              Engine: {
              },
              AllocatedStorage: {
                t: 'i'
              },
              Status: {
              },
              Port: {
                t: 'i'
              },
              AvailabilityZone: {
              },
              VpcId: {
              },
              InstanceCreateTime: {
                t: 't'
              },
              MasterUsername: {
              },
              EngineVersion: {
              },
              LicenseModel: {
              },
              SnapshotType: {
              }
            }
          }
        }
      }
    },
    describeDBSubnetGroups: {
      n: 'DescribeDBSubnetGroups',
      i: {
        m: {
          DBSubnetGroupName: {
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
        DBSubnetGroups: {
          t: 'a',
          m: {
            n: 'DBSubnetGroup',
            t: 'o',
            m: {
              DBSubnetGroupName: {
              },
              DBSubnetGroupDescription: {
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
                      }
                    },
                    SubnetStatus: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeEngineDefaultParameters: {
      n: 'DescribeEngineDefaultParameters',
      i: {
        m: {
          DBParameterGroupFamily: {
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
        DBParameterGroupFamily: {
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
              ApplyType: {
              },
              DataType: {
              },
              AllowedValues: {
              },
              IsModifiable: {
                t: 'b'
              },
              MinimumEngineVersion: {
              },
              ApplyMethod: {
              }
            }
          }
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
    describeOptionGroupOptions: {
      n: 'DescribeOptionGroupOptions',
      i: {
        m: {
          EngineName: {
            r: 1
          },
          MajorEngineVersion: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        OptionGroupOptions: {
          t: 'a',
          m: {
            n: 'OptionGroupOption',
            t: 'o',
            m: {
              Name: {
              },
              Description: {
              },
              EngineName: {
              },
              MajorEngineVersion: {
              },
              MinimumRequiredMinorEngineVersion: {
              },
              PortRequired: {
                t: 'b'
              },
              DefaultPort: {
                t: 'i'
              },
              OptionsDependedOn: {
                t: 'a',
                m: {
                  n: 'OptionName'
                }
              }
            }
          }
        },
        Marker: {
        }
      }
    },
    describeOptionGroups: {
      n: 'DescribeOptionGroups',
      i: {
        m: {
          OptionGroupName: {
          },
          Marker: {
          },
          MaxRecords: {
            t: 'i'
          },
          EngineName: {
          },
          MajorEngineVersion: {
          }
        }
      },
      o: {
        OptionGroupsList: {
          t: 'a',
          m: {
            n: 'OptionGroup',
            t: 'o',
            m: {
              OptionGroupName: {
              },
              OptionGroupDescription: {
              },
              EngineName: {
              },
              MajorEngineVersion: {
              },
              Options: {
                t: 'a',
                m: {
                  n: 'Option',
                  t: 'o',
                  m: {
                    OptionName: {
                    },
                    OptionDescription: {
                    },
                    Port: {
                      t: 'i'
                    },
                    DBSecurityGroupMemberships: {
                      t: 'a',
                      m: {
                        n: 'DBSecurityGroup',
                        t: 'o',
                        m: {
                          DBSecurityGroupName: {
                          },
                          Status: {
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
        Marker: {
        }
      }
    },
    describeOrderableDBInstanceOptions: {
      n: 'DescribeOrderableDBInstanceOptions',
      i: {
        m: {
          Engine: {
            r: 1
          },
          EngineVersion: {
          },
          DBInstanceClass: {
          },
          LicenseModel: {
          },
          MaxRecords: {
            t: 'i'
          },
          Marker: {
          }
        }
      },
      o: {
        OrderableDBInstanceOptions: {
          t: 'a',
          m: {
            n: 'OrderableDBInstanceOption',
            t: 'o',
            m: {
              Engine: {
              },
              EngineVersion: {
              },
              DBInstanceClass: {
              },
              LicenseModel: {
              },
              AvailabilityZones: {
                t: 'a',
                m: {
                  n: 'AvailabilityZone',
                  t: 'o',
                  m: {
                    Name: {
                    }
                  }
                }
              },
              MultiAZCapable: {
                t: 'b'
              },
              ReadReplicaCapable: {
                t: 'b'
              },
              VpcCapable: {
                t: 'b'
              },
              VpcMultiAZCapable: {
                t: 'b'
              },
              VpcReadReplicaCapable: {
                t: 'b'
              }
            }
          }
        },
        Marker: {
        }
      }
    },
    describeReservedDBInstances: {
      n: 'DescribeReservedDBInstances',
      i: {
        m: {
          ReservedDBInstanceId: {
          },
          ReservedDBInstancesOfferingId: {
          },
          DBInstanceClass: {
          },
          Duration: {
          },
          ProductDescription: {
          },
          OfferingType: {
          },
          MultiAZ: {
            t: 'b'
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
        ReservedDBInstances: {
          t: 'a',
          m: {
            n: 'ReservedDBInstance',
            t: 'o',
            m: {
              ReservedDBInstanceId: {
              },
              ReservedDBInstancesOfferingId: {
              },
              DBInstanceClass: {
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
              DBInstanceCount: {
                t: 'i'
              },
              ProductDescription: {
              },
              OfferingType: {
              },
              MultiAZ: {
                t: 'b'
              },
              State: {
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
                  }
                }
              }
            }
          }
        }
      }
    },
    describeReservedDBInstancesOfferings: {
      n: 'DescribeReservedDBInstancesOfferings',
      i: {
        m: {
          ReservedDBInstancesOfferingId: {
          },
          DBInstanceClass: {
          },
          Duration: {
          },
          ProductDescription: {
          },
          OfferingType: {
          },
          MultiAZ: {
            t: 'b'
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
        ReservedDBInstancesOfferings: {
          t: 'a',
          m: {
            n: 'ReservedDBInstancesOffering',
            t: 'o',
            m: {
              ReservedDBInstancesOfferingId: {
              },
              DBInstanceClass: {
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
              ProductDescription: {
              },
              OfferingType: {
              },
              MultiAZ: {
                t: 'b'
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
                  }
                }
              }
            }
          }
        }
      }
    },
    modifyDBInstance: {
      n: 'ModifyDBInstance',
      i: {
        m: {
          DBInstanceIdentifier: {
            r: 1
          },
          AllocatedStorage: {
            t: 'i'
          },
          DBInstanceClass: {
          },
          DBSecurityGroups: {
            t: 'a',
            m: {
              n: 'DBSecurityGroupName'
            }
          },
          ApplyImmediately: {
            t: 'b'
          },
          MasterUserPassword: {
          },
          DBParameterGroupName: {
          },
          BackupRetentionPeriod: {
            t: 'i'
          },
          PreferredBackupWindow: {
          },
          PreferredMaintenanceWindow: {
          },
          MultiAZ: {
            t: 'b'
          },
          EngineVersion: {
          },
          AllowMajorVersionUpgrade: {
            t: 'b'
          },
          AutoMinorVersionUpgrade: {
            t: 'b'
          },
          OptionGroupName: {
          }
        }
      },
      o: {
        DBInstanceIdentifier: {
        },
        DBInstanceClass: {
        },
        Engine: {
        },
        DBInstanceStatus: {
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
        AllocatedStorage: {
          t: 'i'
        },
        InstanceCreateTime: {
          t: 't'
        },
        PreferredBackupWindow: {
        },
        BackupRetentionPeriod: {
          t: 'i'
        },
        DBSecurityGroups: {
          t: 'a',
          m: {
            n: 'DBSecurityGroup',
            t: 'o',
            m: {
              DBSecurityGroupName: {
              },
              Status: {
              }
            }
          }
        },
        DBParameterGroups: {
          t: 'a',
          m: {
            n: 'DBParameterGroup',
            t: 'o',
            m: {
              DBParameterGroupName: {
              },
              ParameterApplyStatus: {
              }
            }
          }
        },
        AvailabilityZone: {
        },
        DBSubnetGroup: {
          t: 'o',
          m: {
            DBSubnetGroupName: {
            },
            DBSubnetGroupDescription: {
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
                    }
                  },
                  SubnetStatus: {
                  }
                }
              }
            }
          }
        },
        PreferredMaintenanceWindow: {
        },
        PendingModifiedValues: {
          t: 'o',
          m: {
            DBInstanceClass: {
            },
            AllocatedStorage: {
              t: 'i'
            },
            MasterUserPassword: {
            },
            Port: {
              t: 'i'
            },
            BackupRetentionPeriod: {
              t: 'i'
            },
            MultiAZ: {
              t: 'b'
            },
            EngineVersion: {
            }
          }
        },
        LatestRestorableTime: {
          t: 't'
        },
        MultiAZ: {
          t: 'b'
        },
        EngineVersion: {
        },
        AutoMinorVersionUpgrade: {
          t: 'b'
        },
        ReadReplicaSourceDBInstanceIdentifier: {
        },
        ReadReplicaDBInstanceIdentifiers: {
          t: 'a',
          m: {
            n: 'ReadReplicaDBInstanceIdentifier'
          }
        },
        LicenseModel: {
        },
        OptionGroupMembership: {
          t: 'o',
          m: {
            OptionGroupName: {
            },
            Status: {
            }
          }
        },
        CharacterSetName: {
        }
      }
    },
    modifyDBParameterGroup: {
      n: 'ModifyDBParameterGroup',
      i: {
        m: {
          DBParameterGroupName: {
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
                ApplyType: {
                },
                DataType: {
                },
                AllowedValues: {
                },
                IsModifiable: {
                  t: 'b'
                },
                MinimumEngineVersion: {
                },
                ApplyMethod: {
                }
              }
            },
            r: 1
          }
        }
      },
      o: {
        DBParameterGroupName: {
        }
      }
    },
    modifyDBSubnetGroup: {
      n: 'ModifyDBSubnetGroup',
      i: {
        m: {
          DBSubnetGroupName: {
            r: 1
          },
          DBSubnetGroupDescription: {
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
        DBSubnetGroupName: {
        },
        DBSubnetGroupDescription: {
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
                }
              },
              SubnetStatus: {
              }
            }
          }
        }
      }
    },
    modifyOptionGroup: {
      n: 'ModifyOptionGroup',
      i: {
        m: {
          OptionGroupName: {
            r: 1
          },
          OptionsToInclude: {
            t: 'a',
            m: {
              n: 'OptionConfiguration',
              t: 'o',
              m: {
                OptionName: {
                  r: 1
                },
                Port: {
                  t: 'i'
                },
                DBSecurityGroupMemberships: {
                  t: 'a',
                  m: {
                    n: 'DBSecurityGroupName'
                  }
                }
              }
            }
          },
          OptionsToRemove: {
            t: 'a'
          },
          ApplyImmediately: {
            t: 'b'
          }
        }
      },
      o: {
        OptionGroupName: {
        },
        OptionGroupDescription: {
        },
        EngineName: {
        },
        MajorEngineVersion: {
        },
        Options: {
          t: 'a',
          m: {
            n: 'Option',
            t: 'o',
            m: {
              OptionName: {
              },
              OptionDescription: {
              },
              Port: {
                t: 'i'
              },
              DBSecurityGroupMemberships: {
                t: 'a',
                m: {
                  n: 'DBSecurityGroup',
                  t: 'o',
                  m: {
                    DBSecurityGroupName: {
                    },
                    Status: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    purchaseReservedDBInstancesOffering: {
      n: 'PurchaseReservedDBInstancesOffering',
      i: {
        m: {
          ReservedDBInstancesOfferingId: {
            r: 1
          },
          ReservedDBInstanceId: {
          },
          DBInstanceCount: {
            t: 'i'
          }
        }
      },
      o: {
        ReservedDBInstanceId: {
        },
        ReservedDBInstancesOfferingId: {
        },
        DBInstanceClass: {
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
        DBInstanceCount: {
          t: 'i'
        },
        ProductDescription: {
        },
        OfferingType: {
        },
        MultiAZ: {
          t: 'b'
        },
        State: {
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
            }
          }
        }
      }
    },
    rebootDBInstance: {
      n: 'RebootDBInstance',
      i: {
        m: {
          DBInstanceIdentifier: {
            r: 1
          },
          ForceFailover: {
            t: 'b'
          }
        }
      },
      o: {
        DBInstanceIdentifier: {
        },
        DBInstanceClass: {
        },
        Engine: {
        },
        DBInstanceStatus: {
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
        AllocatedStorage: {
          t: 'i'
        },
        InstanceCreateTime: {
          t: 't'
        },
        PreferredBackupWindow: {
        },
        BackupRetentionPeriod: {
          t: 'i'
        },
        DBSecurityGroups: {
          t: 'a',
          m: {
            n: 'DBSecurityGroup',
            t: 'o',
            m: {
              DBSecurityGroupName: {
              },
              Status: {
              }
            }
          }
        },
        DBParameterGroups: {
          t: 'a',
          m: {
            n: 'DBParameterGroup',
            t: 'o',
            m: {
              DBParameterGroupName: {
              },
              ParameterApplyStatus: {
              }
            }
          }
        },
        AvailabilityZone: {
        },
        DBSubnetGroup: {
          t: 'o',
          m: {
            DBSubnetGroupName: {
            },
            DBSubnetGroupDescription: {
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
                    }
                  },
                  SubnetStatus: {
                  }
                }
              }
            }
          }
        },
        PreferredMaintenanceWindow: {
        },
        PendingModifiedValues: {
          t: 'o',
          m: {
            DBInstanceClass: {
            },
            AllocatedStorage: {
              t: 'i'
            },
            MasterUserPassword: {
            },
            Port: {
              t: 'i'
            },
            BackupRetentionPeriod: {
              t: 'i'
            },
            MultiAZ: {
              t: 'b'
            },
            EngineVersion: {
            }
          }
        },
        LatestRestorableTime: {
          t: 't'
        },
        MultiAZ: {
          t: 'b'
        },
        EngineVersion: {
        },
        AutoMinorVersionUpgrade: {
          t: 'b'
        },
        ReadReplicaSourceDBInstanceIdentifier: {
        },
        ReadReplicaDBInstanceIdentifiers: {
          t: 'a',
          m: {
            n: 'ReadReplicaDBInstanceIdentifier'
          }
        },
        LicenseModel: {
        },
        OptionGroupMembership: {
          t: 'o',
          m: {
            OptionGroupName: {
            },
            Status: {
            }
          }
        },
        CharacterSetName: {
        }
      }
    },
    resetDBParameterGroup: {
      n: 'ResetDBParameterGroup',
      i: {
        m: {
          DBParameterGroupName: {
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
                ApplyType: {
                },
                DataType: {
                },
                AllowedValues: {
                },
                IsModifiable: {
                  t: 'b'
                },
                MinimumEngineVersion: {
                },
                ApplyMethod: {
                }
              }
            }
          }
        }
      },
      o: {
        DBParameterGroupName: {
        }
      }
    },
    restoreDBInstanceFromDBSnapshot: {
      n: 'RestoreDBInstanceFromDBSnapshot',
      i: {
        m: {
          DBInstanceIdentifier: {
            r: 1
          },
          DBSnapshotIdentifier: {
            r: 1
          },
          DBInstanceClass: {
          },
          Port: {
            t: 'i'
          },
          AvailabilityZone: {
          },
          DBSubnetGroupName: {
          },
          MultiAZ: {
            t: 'b'
          },
          AutoMinorVersionUpgrade: {
            t: 'b'
          },
          LicenseModel: {
          },
          DBName: {
          },
          Engine: {
          },
          OptionGroupName: {
          }
        }
      },
      o: {
        DBInstanceIdentifier: {
        },
        DBInstanceClass: {
        },
        Engine: {
        },
        DBInstanceStatus: {
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
        AllocatedStorage: {
          t: 'i'
        },
        InstanceCreateTime: {
          t: 't'
        },
        PreferredBackupWindow: {
        },
        BackupRetentionPeriod: {
          t: 'i'
        },
        DBSecurityGroups: {
          t: 'a',
          m: {
            n: 'DBSecurityGroup',
            t: 'o',
            m: {
              DBSecurityGroupName: {
              },
              Status: {
              }
            }
          }
        },
        DBParameterGroups: {
          t: 'a',
          m: {
            n: 'DBParameterGroup',
            t: 'o',
            m: {
              DBParameterGroupName: {
              },
              ParameterApplyStatus: {
              }
            }
          }
        },
        AvailabilityZone: {
        },
        DBSubnetGroup: {
          t: 'o',
          m: {
            DBSubnetGroupName: {
            },
            DBSubnetGroupDescription: {
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
                    }
                  },
                  SubnetStatus: {
                  }
                }
              }
            }
          }
        },
        PreferredMaintenanceWindow: {
        },
        PendingModifiedValues: {
          t: 'o',
          m: {
            DBInstanceClass: {
            },
            AllocatedStorage: {
              t: 'i'
            },
            MasterUserPassword: {
            },
            Port: {
              t: 'i'
            },
            BackupRetentionPeriod: {
              t: 'i'
            },
            MultiAZ: {
              t: 'b'
            },
            EngineVersion: {
            }
          }
        },
        LatestRestorableTime: {
          t: 't'
        },
        MultiAZ: {
          t: 'b'
        },
        EngineVersion: {
        },
        AutoMinorVersionUpgrade: {
          t: 'b'
        },
        ReadReplicaSourceDBInstanceIdentifier: {
        },
        ReadReplicaDBInstanceIdentifiers: {
          t: 'a',
          m: {
            n: 'ReadReplicaDBInstanceIdentifier'
          }
        },
        LicenseModel: {
        },
        OptionGroupMembership: {
          t: 'o',
          m: {
            OptionGroupName: {
            },
            Status: {
            }
          }
        },
        CharacterSetName: {
        }
      }
    },
    restoreDBInstanceToPointInTime: {
      n: 'RestoreDBInstanceToPointInTime',
      i: {
        m: {
          SourceDBInstanceIdentifier: {
            r: 1
          },
          TargetDBInstanceIdentifier: {
            r: 1
          },
          RestoreTime: {
            t: 't'
          },
          UseLatestRestorableTime: {
            t: 'b'
          },
          DBInstanceClass: {
          },
          Port: {
            t: 'i'
          },
          AvailabilityZone: {
          },
          DBSubnetGroupName: {
          },
          MultiAZ: {
            t: 'b'
          },
          AutoMinorVersionUpgrade: {
            t: 'b'
          },
          LicenseModel: {
          },
          DBName: {
          },
          Engine: {
          },
          OptionGroupName: {
          }
        }
      },
      o: {
        DBInstanceIdentifier: {
        },
        DBInstanceClass: {
        },
        Engine: {
        },
        DBInstanceStatus: {
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
        AllocatedStorage: {
          t: 'i'
        },
        InstanceCreateTime: {
          t: 't'
        },
        PreferredBackupWindow: {
        },
        BackupRetentionPeriod: {
          t: 'i'
        },
        DBSecurityGroups: {
          t: 'a',
          m: {
            n: 'DBSecurityGroup',
            t: 'o',
            m: {
              DBSecurityGroupName: {
              },
              Status: {
              }
            }
          }
        },
        DBParameterGroups: {
          t: 'a',
          m: {
            n: 'DBParameterGroup',
            t: 'o',
            m: {
              DBParameterGroupName: {
              },
              ParameterApplyStatus: {
              }
            }
          }
        },
        AvailabilityZone: {
        },
        DBSubnetGroup: {
          t: 'o',
          m: {
            DBSubnetGroupName: {
            },
            DBSubnetGroupDescription: {
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
                    }
                  },
                  SubnetStatus: {
                  }
                }
              }
            }
          }
        },
        PreferredMaintenanceWindow: {
        },
        PendingModifiedValues: {
          t: 'o',
          m: {
            DBInstanceClass: {
            },
            AllocatedStorage: {
              t: 'i'
            },
            MasterUserPassword: {
            },
            Port: {
              t: 'i'
            },
            BackupRetentionPeriod: {
              t: 'i'
            },
            MultiAZ: {
              t: 'b'
            },
            EngineVersion: {
            }
          }
        },
        LatestRestorableTime: {
          t: 't'
        },
        MultiAZ: {
          t: 'b'
        },
        EngineVersion: {
        },
        AutoMinorVersionUpgrade: {
          t: 'b'
        },
        ReadReplicaSourceDBInstanceIdentifier: {
        },
        ReadReplicaDBInstanceIdentifiers: {
          t: 'a',
          m: {
            n: 'ReadReplicaDBInstanceIdentifier'
          }
        },
        LicenseModel: {
        },
        OptionGroupMembership: {
          t: 'o',
          m: {
            OptionGroupName: {
            },
            Status: {
            }
          }
        },
        CharacterSetName: {
        }
      }
    },
    revokeDBSecurityGroupIngress: {
      n: 'RevokeDBSecurityGroupIngress',
      i: {
        m: {
          DBSecurityGroupName: {
            r: 1
          },
          CIDRIP: {
          },
          EC2SecurityGroupName: {
          },
          EC2SecurityGroupId: {
          },
          EC2SecurityGroupOwnerId: {
          }
        }
      },
      o: {
        OwnerId: {
        },
        DBSecurityGroupName: {
        },
        DBSecurityGroupDescription: {
        },
        VpcId: {
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
              EC2SecurityGroupId: {
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
      }
    }
  }
};
