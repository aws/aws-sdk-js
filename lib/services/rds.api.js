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
  apiVersion: '2012-07-31',
  endpointPrefix: 'rds',
  resultWrapped: true,
  serviceAbbreviation: 'Amazon RDS',
  serviceFullName: 'Amazon Relational Database Service (Beta)',
  signatureVersion: 'v2',
  timestampFormat: 'iso8601',
  operations: {
    authorizeDBSecurityGroupIngress: {
      name: 'AuthorizeDBSecurityGroupIngress',
      input: {
        type: 'structure',
        members: {
          DBSecurityGroupName: {
            required: true
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
      output: {
        type: 'structure',
        members: {
          DBSecurityGroup: {
            type: 'structure',
            members: {
              OwnerId: {
              },
              DBSecurityGroupName: {
              },
              DBSecurityGroupDescription: {
              },
              VpcId: {
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
                    EC2SecurityGroupId: {
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
    copyDBSnapshot: {
      name: 'CopyDBSnapshot',
      input: {
        type: 'structure',
        members: {
          SourceDBSnapshotIdentifier: {
            required: true
          },
          TargetDBSnapshotIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DBSnapshot: {
            type: 'structure',
            members: {
              DBSnapshotIdentifier: {
              },
              DBInstanceIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Engine: {
              },
              AllocatedStorage: {
                type: 'integer'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              VpcId: {
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {
              },
              EngineVersion: {
              },
              LicenseModel: {
              },
              SnapshotType: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    createDBInstance: {
      name: 'CreateDBInstance',
      input: {
        type: 'structure',
        members: {
          DBName: {
          },
          DBInstanceIdentifier: {
            required: true
          },
          AllocatedStorage: {
            type: 'integer',
            required: true
          },
          DBInstanceClass: {
            required: true
          },
          Engine: {
            required: true
          },
          MasterUsername: {
            required: true
          },
          MasterUserPassword: {
            required: true
          },
          DBSecurityGroups: {
            type: 'list',
            members: {
              name: 'DBSecurityGroupName'
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
            type: 'integer'
          },
          PreferredBackupWindow: {
          },
          Port: {
            type: 'integer'
          },
          MultiAZ: {
            type: 'boolean'
          },
          EngineVersion: {
          },
          AutoMinorVersionUpgrade: {
            type: 'boolean'
          },
          LicenseModel: {
          },
          OptionGroupName: {
          },
          CharacterSetName: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DBInstance: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              AllocatedStorage: {
                type: 'integer'
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              PreferredBackupWindow: {
              },
              BackupRetentionPeriod: {
                type: 'integer'
              },
              DBSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'DBSecurityGroup'
                }
              },
              DBParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'DBParameterGroup'
                }
              },
              AvailabilityZone: {
              },
              DBSubnetGroup: {
                type: 'structure',
                members: {
                  DBSubnetGroupName: {
                  },
                  DBSubnetGroupDescription: {
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
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  DBInstanceClass: {
                  },
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  MasterUserPassword: {
                  },
                  Port: {
                    type: 'integer'
                  },
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  MultiAZ: {
                    type: 'boolean'
                  },
                  EngineVersion: {
                  }
                }
              },
              LatestRestorableTime: {
                type: 'timestamp'
              },
              MultiAZ: {
                type: 'boolean'
              },
              EngineVersion: {
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              ReadReplicaSourceDBInstanceIdentifier: {
              },
              ReadReplicaDBInstanceIdentifiers: {
                type: 'list',
                members: {
                  name: 'ReadReplicaDBInstanceIdentifier'
                }
              },
              LicenseModel: {
              },
              OptionGroupMembership: {
                type: 'structure',
                members: {
                  OptionGroupName: {
                  },
                  Status: {
                  }
                }
              },
              CharacterSetName: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    createDBInstanceReadReplica: {
      name: 'CreateDBInstanceReadReplica',
      input: {
        type: 'structure',
        members: {
          DBInstanceIdentifier: {
            required: true
          },
          SourceDBInstanceIdentifier: {
            required: true
          },
          DBInstanceClass: {
          },
          AvailabilityZone: {
          },
          Port: {
            type: 'integer'
          },
          AutoMinorVersionUpgrade: {
            type: 'boolean'
          },
          OptionGroupName: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DBInstance: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              AllocatedStorage: {
                type: 'integer'
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              PreferredBackupWindow: {
              },
              BackupRetentionPeriod: {
                type: 'integer'
              },
              DBSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'DBSecurityGroup'
                }
              },
              DBParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'DBParameterGroup'
                }
              },
              AvailabilityZone: {
              },
              DBSubnetGroup: {
                type: 'structure',
                members: {
                  DBSubnetGroupName: {
                  },
                  DBSubnetGroupDescription: {
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
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  DBInstanceClass: {
                  },
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  MasterUserPassword: {
                  },
                  Port: {
                    type: 'integer'
                  },
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  MultiAZ: {
                    type: 'boolean'
                  },
                  EngineVersion: {
                  }
                }
              },
              LatestRestorableTime: {
                type: 'timestamp'
              },
              MultiAZ: {
                type: 'boolean'
              },
              EngineVersion: {
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              ReadReplicaSourceDBInstanceIdentifier: {
              },
              ReadReplicaDBInstanceIdentifiers: {
                type: 'list',
                members: {
                  name: 'ReadReplicaDBInstanceIdentifier'
                }
              },
              LicenseModel: {
              },
              OptionGroupMembership: {
                type: 'structure',
                members: {
                  OptionGroupName: {
                  },
                  Status: {
                  }
                }
              },
              CharacterSetName: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    createDBParameterGroup: {
      name: 'CreateDBParameterGroup',
      input: {
        type: 'structure',
        members: {
          DBParameterGroupName: {
            required: true
          },
          DBParameterGroupFamily: {
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
          DBParameterGroup: {
            type: 'structure',
            members: {
              DBParameterGroupName: {
              },
              DBParameterGroupFamily: {
              },
              Description: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    createDBSecurityGroup: {
      name: 'CreateDBSecurityGroup',
      input: {
        type: 'structure',
        members: {
          DBSecurityGroupName: {
            required: true
          },
          DBSecurityGroupDescription: {
            required: true
          },
          EC2VpcId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DBSecurityGroup: {
            type: 'structure',
            members: {
              OwnerId: {
              },
              DBSecurityGroupName: {
              },
              DBSecurityGroupDescription: {
              },
              VpcId: {
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
                    EC2SecurityGroupId: {
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
    createDBSnapshot: {
      name: 'CreateDBSnapshot',
      input: {
        type: 'structure',
        members: {
          DBSnapshotIdentifier: {
            required: true
          },
          DBInstanceIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DBSnapshot: {
            type: 'structure',
            members: {
              DBSnapshotIdentifier: {
              },
              DBInstanceIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Engine: {
              },
              AllocatedStorage: {
                type: 'integer'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              VpcId: {
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {
              },
              EngineVersion: {
              },
              LicenseModel: {
              },
              SnapshotType: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    createDBSubnetGroup: {
      name: 'CreateDBSubnetGroup',
      input: {
        type: 'structure',
        members: {
          DBSubnetGroupName: {
            required: true
          },
          DBSubnetGroupDescription: {
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
          DBSubnetGroup: {
            type: 'structure',
            members: {
              DBSubnetGroupName: {
              },
              DBSubnetGroupDescription: {
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
    createOptionGroup: {
      name: 'CreateOptionGroup',
      input: {
        type: 'structure',
        members: {
          OptionGroupName: {
            required: true
          },
          EngineName: {
            required: true
          },
          MajorEngineVersion: {
            required: true
          },
          OptionGroupDescription: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          OptionGroup: {
            type: 'structure',
            members: {
              OptionGroupName: {
              },
              OptionGroupDescription: {
              },
              EngineName: {
              },
              MajorEngineVersion: {
              },
              Options: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    OptionName: {
                    },
                    OptionDescription: {
                    },
                    Port: {
                      type: 'integer'
                    },
                    DBSecurityGroupMemberships: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          DBSecurityGroupName: {
                          },
                          Status: {
                          }
                        },
                        name: 'DBSecurityGroup'
                      }
                    }
                  },
                  name: 'Option'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    deleteDBInstance: {
      name: 'DeleteDBInstance',
      input: {
        type: 'structure',
        members: {
          DBInstanceIdentifier: {
            required: true
          },
          SkipFinalSnapshot: {
            type: 'boolean'
          },
          FinalDBSnapshotIdentifier: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DBInstance: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              AllocatedStorage: {
                type: 'integer'
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              PreferredBackupWindow: {
              },
              BackupRetentionPeriod: {
                type: 'integer'
              },
              DBSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'DBSecurityGroup'
                }
              },
              DBParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'DBParameterGroup'
                }
              },
              AvailabilityZone: {
              },
              DBSubnetGroup: {
                type: 'structure',
                members: {
                  DBSubnetGroupName: {
                  },
                  DBSubnetGroupDescription: {
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
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  DBInstanceClass: {
                  },
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  MasterUserPassword: {
                  },
                  Port: {
                    type: 'integer'
                  },
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  MultiAZ: {
                    type: 'boolean'
                  },
                  EngineVersion: {
                  }
                }
              },
              LatestRestorableTime: {
                type: 'timestamp'
              },
              MultiAZ: {
                type: 'boolean'
              },
              EngineVersion: {
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              ReadReplicaSourceDBInstanceIdentifier: {
              },
              ReadReplicaDBInstanceIdentifiers: {
                type: 'list',
                members: {
                  name: 'ReadReplicaDBInstanceIdentifier'
                }
              },
              LicenseModel: {
              },
              OptionGroupMembership: {
                type: 'structure',
                members: {
                  OptionGroupName: {
                  },
                  Status: {
                  }
                }
              },
              CharacterSetName: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    deleteDBParameterGroup: {
      name: 'DeleteDBParameterGroup',
      input: {
        type: 'structure',
        members: {
          DBParameterGroupName: {
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
    deleteDBSecurityGroup: {
      name: 'DeleteDBSecurityGroup',
      input: {
        type: 'structure',
        members: {
          DBSecurityGroupName: {
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
    deleteDBSnapshot: {
      name: 'DeleteDBSnapshot',
      input: {
        type: 'structure',
        members: {
          DBSnapshotIdentifier: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DBSnapshot: {
            type: 'structure',
            members: {
              DBSnapshotIdentifier: {
              },
              DBInstanceIdentifier: {
              },
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Engine: {
              },
              AllocatedStorage: {
                type: 'integer'
              },
              Status: {
              },
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {
              },
              VpcId: {
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {
              },
              EngineVersion: {
              },
              LicenseModel: {
              },
              SnapshotType: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    deleteDBSubnetGroup: {
      name: 'DeleteDBSubnetGroup',
      input: {
        type: 'structure',
        members: {
          DBSubnetGroupName: {
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
    deleteOptionGroup: {
      name: 'DeleteOptionGroup',
      input: {
        type: 'structure',
        members: {
          OptionGroupName: {
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
    describeDBEngineVersions: {
      name: 'DescribeDBEngineVersions',
      input: {
        type: 'structure',
        members: {
          Engine: {
          },
          EngineVersion: {
          },
          DBParameterGroupFamily: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          },
          DefaultOnly: {
            type: 'boolean'
          },
          ListSupportedCharacterSets: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          DBEngineVersions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
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
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      CharacterSetName: {
                      },
                      CharacterSetDescription: {
                      }
                    },
                    name: 'CharacterSet'
                  }
                }
              },
              name: 'DBEngineVersion'
            }
          }
        }
      }
    },
    describeDBInstances: {
      name: 'DescribeDBInstances',
      input: {
        type: 'structure',
        members: {
          DBInstanceIdentifier: {
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
          DBInstances: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
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
                  type: 'structure',
                  members: {
                    Address: {
                    },
                    Port: {
                      type: 'integer'
                    }
                  }
                },
                AllocatedStorage: {
                  type: 'integer'
                },
                InstanceCreateTime: {
                  type: 'timestamp'
                },
                PreferredBackupWindow: {
                },
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                DBSecurityGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      DBSecurityGroupName: {
                      },
                      Status: {
                      }
                    },
                    name: 'DBSecurityGroup'
                  }
                },
                DBParameterGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      DBParameterGroupName: {
                      },
                      ParameterApplyStatus: {
                      }
                    },
                    name: 'DBParameterGroup'
                  }
                },
                AvailabilityZone: {
                },
                DBSubnetGroup: {
                  type: 'structure',
                  members: {
                    DBSubnetGroupName: {
                    },
                    DBSubnetGroupDescription: {
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
                },
                PreferredMaintenanceWindow: {
                },
                PendingModifiedValues: {
                  type: 'structure',
                  members: {
                    DBInstanceClass: {
                    },
                    AllocatedStorage: {
                      type: 'integer'
                    },
                    MasterUserPassword: {
                    },
                    Port: {
                      type: 'integer'
                    },
                    BackupRetentionPeriod: {
                      type: 'integer'
                    },
                    MultiAZ: {
                      type: 'boolean'
                    },
                    EngineVersion: {
                    }
                  }
                },
                LatestRestorableTime: {
                  type: 'timestamp'
                },
                MultiAZ: {
                  type: 'boolean'
                },
                EngineVersion: {
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                ReadReplicaSourceDBInstanceIdentifier: {
                },
                ReadReplicaDBInstanceIdentifiers: {
                  type: 'list',
                  members: {
                    name: 'ReadReplicaDBInstanceIdentifier'
                  }
                },
                LicenseModel: {
                },
                OptionGroupMembership: {
                  type: 'structure',
                  members: {
                    OptionGroupName: {
                    },
                    Status: {
                    }
                  }
                },
                CharacterSetName: {
                }
              },
              wrapper: true,
              name: 'DBInstance'
            }
          }
        }
      }
    },
    describeDBParameterGroups: {
      name: 'DescribeDBParameterGroups',
      input: {
        type: 'structure',
        members: {
          DBParameterGroupName: {
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
          DBParameterGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                DBParameterGroupName: {
                },
                DBParameterGroupFamily: {
                },
                Description: {
                }
              },
              wrapper: true,
              name: 'DBParameterGroup'
            }
          }
        }
      }
    },
    describeDBParameters: {
      name: 'DescribeDBParameters',
      input: {
        type: 'structure',
        members: {
          DBParameterGroupName: {
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
                ApplyType: {
                },
                DataType: {
                },
                AllowedValues: {
                },
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {
                },
                ApplyMethod: {
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
    describeDBSecurityGroups: {
      name: 'DescribeDBSecurityGroups',
      input: {
        type: 'structure',
        members: {
          DBSecurityGroupName: {
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
          DBSecurityGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                OwnerId: {
                },
                DBSecurityGroupName: {
                },
                DBSecurityGroupDescription: {
                },
                VpcId: {
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
                      EC2SecurityGroupId: {
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
              name: 'DBSecurityGroup'
            }
          }
        }
      }
    },
    describeDBSnapshots: {
      name: 'DescribeDBSnapshots',
      input: {
        type: 'structure',
        members: {
          DBInstanceIdentifier: {
          },
          DBSnapshotIdentifier: {
          },
          SnapshotType: {
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
          DBSnapshots: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                DBSnapshotIdentifier: {
                },
                DBInstanceIdentifier: {
                },
                SnapshotCreateTime: {
                  type: 'timestamp'
                },
                Engine: {
                },
                AllocatedStorage: {
                  type: 'integer'
                },
                Status: {
                },
                Port: {
                  type: 'integer'
                },
                AvailabilityZone: {
                },
                VpcId: {
                },
                InstanceCreateTime: {
                  type: 'timestamp'
                },
                MasterUsername: {
                },
                EngineVersion: {
                },
                LicenseModel: {
                },
                SnapshotType: {
                }
              },
              wrapper: true,
              name: 'DBSnapshot'
            }
          }
        }
      }
    },
    describeDBSubnetGroups: {
      name: 'DescribeDBSubnetGroups',
      input: {
        type: 'structure',
        members: {
          DBSubnetGroupName: {
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
          DBSubnetGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                DBSubnetGroupName: {
                },
                DBSubnetGroupDescription: {
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
              name: 'DBSubnetGroup'
            }
          }
        }
      }
    },
    describeEngineDefaultParameters: {
      name: 'DescribeEngineDefaultParameters',
      input: {
        type: 'structure',
        members: {
          DBParameterGroupFamily: {
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
          EngineDefaults: {
            type: 'structure',
            members: {
              DBParameterGroupFamily: {
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
                    ApplyType: {
                    },
                    DataType: {
                    },
                    AllowedValues: {
                    },
                    IsModifiable: {
                      type: 'boolean'
                    },
                    MinimumEngineVersion: {
                    },
                    ApplyMethod: {
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
    describeOptionGroupOptions: {
      name: 'DescribeOptionGroupOptions',
      input: {
        type: 'structure',
        members: {
          EngineName: {
            required: true
          },
          MajorEngineVersion: {
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
          OptionGroupOptions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
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
                  type: 'boolean'
                },
                DefaultPort: {
                  type: 'integer'
                },
                OptionsDependedOn: {
                  type: 'list',
                  members: {
                    name: 'OptionName'
                  }
                }
              },
              name: 'OptionGroupOption'
            }
          },
          Marker: {
          }
        }
      }
    },
    describeOptionGroups: {
      name: 'DescribeOptionGroups',
      input: {
        type: 'structure',
        members: {
          OptionGroupName: {
          },
          Marker: {
          },
          MaxRecords: {
            type: 'integer'
          },
          EngineName: {
          },
          MajorEngineVersion: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          OptionGroupsList: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                OptionGroupName: {
                },
                OptionGroupDescription: {
                },
                EngineName: {
                },
                MajorEngineVersion: {
                },
                Options: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      OptionName: {
                      },
                      OptionDescription: {
                      },
                      Port: {
                        type: 'integer'
                      },
                      DBSecurityGroupMemberships: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            DBSecurityGroupName: {
                            },
                            Status: {
                            }
                          },
                          name: 'DBSecurityGroup'
                        }
                      }
                    },
                    name: 'Option'
                  }
                }
              },
              wrapper: true,
              name: 'OptionGroup'
            }
          },
          Marker: {
          }
        }
      }
    },
    describeOrderableDBInstanceOptions: {
      name: 'DescribeOrderableDBInstanceOptions',
      input: {
        type: 'structure',
        members: {
          Engine: {
            required: true
          },
          EngineVersion: {
          },
          DBInstanceClass: {
          },
          LicenseModel: {
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
          OrderableDBInstanceOptions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Engine: {
                },
                EngineVersion: {
                },
                DBInstanceClass: {
                },
                LicenseModel: {
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
                },
                MultiAZCapable: {
                  type: 'boolean'
                },
                ReadReplicaCapable: {
                  type: 'boolean'
                },
                VpcCapable: {
                  type: 'boolean'
                },
                VpcMultiAZCapable: {
                  type: 'boolean'
                },
                VpcReadReplicaCapable: {
                  type: 'boolean'
                }
              },
              wrapper: true,
              name: 'OrderableDBInstanceOption'
            }
          },
          Marker: {
          }
        }
      }
    },
    describeReservedDBInstances: {
      name: 'DescribeReservedDBInstances',
      input: {
        type: 'structure',
        members: {
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
            type: 'boolean'
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
          ReservedDBInstances: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ReservedDBInstanceId: {
                },
                ReservedDBInstancesOfferingId: {
                },
                DBInstanceClass: {
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
                DBInstanceCount: {
                  type: 'integer'
                },
                ProductDescription: {
                },
                OfferingType: {
                },
                MultiAZ: {
                  type: 'boolean'
                },
                State: {
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
              name: 'ReservedDBInstance'
            }
          }
        }
      }
    },
    describeReservedDBInstancesOfferings: {
      name: 'DescribeReservedDBInstancesOfferings',
      input: {
        type: 'structure',
        members: {
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
            type: 'boolean'
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
          ReservedDBInstancesOfferings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ReservedDBInstancesOfferingId: {
                },
                DBInstanceClass: {
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
                ProductDescription: {
                },
                OfferingType: {
                },
                MultiAZ: {
                  type: 'boolean'
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
              name: 'ReservedDBInstancesOffering'
            }
          }
        }
      }
    },
    modifyDBInstance: {
      name: 'ModifyDBInstance',
      input: {
        type: 'structure',
        members: {
          DBInstanceIdentifier: {
            required: true
          },
          AllocatedStorage: {
            type: 'integer'
          },
          DBInstanceClass: {
          },
          DBSecurityGroups: {
            type: 'list',
            members: {
              name: 'DBSecurityGroupName'
            }
          },
          ApplyImmediately: {
            type: 'boolean'
          },
          MasterUserPassword: {
          },
          DBParameterGroupName: {
          },
          BackupRetentionPeriod: {
            type: 'integer'
          },
          PreferredBackupWindow: {
          },
          PreferredMaintenanceWindow: {
          },
          MultiAZ: {
            type: 'boolean'
          },
          EngineVersion: {
          },
          AllowMajorVersionUpgrade: {
            type: 'boolean'
          },
          AutoMinorVersionUpgrade: {
            type: 'boolean'
          },
          OptionGroupName: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DBInstance: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              AllocatedStorage: {
                type: 'integer'
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              PreferredBackupWindow: {
              },
              BackupRetentionPeriod: {
                type: 'integer'
              },
              DBSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'DBSecurityGroup'
                }
              },
              DBParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'DBParameterGroup'
                }
              },
              AvailabilityZone: {
              },
              DBSubnetGroup: {
                type: 'structure',
                members: {
                  DBSubnetGroupName: {
                  },
                  DBSubnetGroupDescription: {
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
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  DBInstanceClass: {
                  },
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  MasterUserPassword: {
                  },
                  Port: {
                    type: 'integer'
                  },
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  MultiAZ: {
                    type: 'boolean'
                  },
                  EngineVersion: {
                  }
                }
              },
              LatestRestorableTime: {
                type: 'timestamp'
              },
              MultiAZ: {
                type: 'boolean'
              },
              EngineVersion: {
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              ReadReplicaSourceDBInstanceIdentifier: {
              },
              ReadReplicaDBInstanceIdentifiers: {
                type: 'list',
                members: {
                  name: 'ReadReplicaDBInstanceIdentifier'
                }
              },
              LicenseModel: {
              },
              OptionGroupMembership: {
                type: 'structure',
                members: {
                  OptionGroupName: {
                  },
                  Status: {
                  }
                }
              },
              CharacterSetName: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    modifyDBParameterGroup: {
      name: 'ModifyDBParameterGroup',
      input: {
        type: 'structure',
        members: {
          DBParameterGroupName: {
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
                ApplyType: {
                },
                DataType: {
                },
                AllowedValues: {
                },
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {
                },
                ApplyMethod: {
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
          DBParameterGroupName: {
          }
        }
      }
    },
    modifyDBSubnetGroup: {
      name: 'ModifyDBSubnetGroup',
      input: {
        type: 'structure',
        members: {
          DBSubnetGroupName: {
            required: true
          },
          DBSubnetGroupDescription: {
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
          DBSubnetGroup: {
            type: 'structure',
            members: {
              DBSubnetGroupName: {
              },
              DBSubnetGroupDescription: {
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
    modifyOptionGroup: {
      name: 'ModifyOptionGroup',
      input: {
        type: 'structure',
        members: {
          OptionGroupName: {
            required: true
          },
          OptionsToInclude: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                OptionName: {
                  required: true
                },
                Port: {
                  type: 'integer'
                },
                DBSecurityGroupMemberships: {
                  type: 'list',
                  members: {
                    name: 'DBSecurityGroupName'
                  }
                }
              },
              name: 'OptionConfiguration'
            }
          },
          OptionsToRemove: {
            type: 'list'
          },
          ApplyImmediately: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          OptionGroup: {
            type: 'structure',
            members: {
              OptionGroupName: {
              },
              OptionGroupDescription: {
              },
              EngineName: {
              },
              MajorEngineVersion: {
              },
              Options: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    OptionName: {
                    },
                    OptionDescription: {
                    },
                    Port: {
                      type: 'integer'
                    },
                    DBSecurityGroupMemberships: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          DBSecurityGroupName: {
                          },
                          Status: {
                          }
                        },
                        name: 'DBSecurityGroup'
                      }
                    }
                  },
                  name: 'Option'
                }
              }
            },
            wrapper: true
          }
        }
      }
    },
    purchaseReservedDBInstancesOffering: {
      name: 'PurchaseReservedDBInstancesOffering',
      input: {
        type: 'structure',
        members: {
          ReservedDBInstancesOfferingId: {
            required: true
          },
          ReservedDBInstanceId: {
          },
          DBInstanceCount: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ReservedDBInstance: {
            type: 'structure',
            members: {
              ReservedDBInstanceId: {
              },
              ReservedDBInstancesOfferingId: {
              },
              DBInstanceClass: {
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
              DBInstanceCount: {
                type: 'integer'
              },
              ProductDescription: {
              },
              OfferingType: {
              },
              MultiAZ: {
                type: 'boolean'
              },
              State: {
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
    rebootDBInstance: {
      name: 'RebootDBInstance',
      input: {
        type: 'structure',
        members: {
          DBInstanceIdentifier: {
            required: true
          },
          ForceFailover: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DBInstance: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              AllocatedStorage: {
                type: 'integer'
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              PreferredBackupWindow: {
              },
              BackupRetentionPeriod: {
                type: 'integer'
              },
              DBSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'DBSecurityGroup'
                }
              },
              DBParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'DBParameterGroup'
                }
              },
              AvailabilityZone: {
              },
              DBSubnetGroup: {
                type: 'structure',
                members: {
                  DBSubnetGroupName: {
                  },
                  DBSubnetGroupDescription: {
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
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  DBInstanceClass: {
                  },
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  MasterUserPassword: {
                  },
                  Port: {
                    type: 'integer'
                  },
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  MultiAZ: {
                    type: 'boolean'
                  },
                  EngineVersion: {
                  }
                }
              },
              LatestRestorableTime: {
                type: 'timestamp'
              },
              MultiAZ: {
                type: 'boolean'
              },
              EngineVersion: {
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              ReadReplicaSourceDBInstanceIdentifier: {
              },
              ReadReplicaDBInstanceIdentifiers: {
                type: 'list',
                members: {
                  name: 'ReadReplicaDBInstanceIdentifier'
                }
              },
              LicenseModel: {
              },
              OptionGroupMembership: {
                type: 'structure',
                members: {
                  OptionGroupName: {
                  },
                  Status: {
                  }
                }
              },
              CharacterSetName: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    resetDBParameterGroup: {
      name: 'ResetDBParameterGroup',
      input: {
        type: 'structure',
        members: {
          DBParameterGroupName: {
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
                ApplyType: {
                },
                DataType: {
                },
                AllowedValues: {
                },
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {
                },
                ApplyMethod: {
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
          DBParameterGroupName: {
          }
        }
      }
    },
    restoreDBInstanceFromDBSnapshot: {
      name: 'RestoreDBInstanceFromDBSnapshot',
      input: {
        type: 'structure',
        members: {
          DBInstanceIdentifier: {
            required: true
          },
          DBSnapshotIdentifier: {
            required: true
          },
          DBInstanceClass: {
          },
          Port: {
            type: 'integer'
          },
          AvailabilityZone: {
          },
          DBSubnetGroupName: {
          },
          MultiAZ: {
            type: 'boolean'
          },
          AutoMinorVersionUpgrade: {
            type: 'boolean'
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
      output: {
        type: 'structure',
        members: {
          DBInstance: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              AllocatedStorage: {
                type: 'integer'
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              PreferredBackupWindow: {
              },
              BackupRetentionPeriod: {
                type: 'integer'
              },
              DBSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'DBSecurityGroup'
                }
              },
              DBParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'DBParameterGroup'
                }
              },
              AvailabilityZone: {
              },
              DBSubnetGroup: {
                type: 'structure',
                members: {
                  DBSubnetGroupName: {
                  },
                  DBSubnetGroupDescription: {
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
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  DBInstanceClass: {
                  },
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  MasterUserPassword: {
                  },
                  Port: {
                    type: 'integer'
                  },
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  MultiAZ: {
                    type: 'boolean'
                  },
                  EngineVersion: {
                  }
                }
              },
              LatestRestorableTime: {
                type: 'timestamp'
              },
              MultiAZ: {
                type: 'boolean'
              },
              EngineVersion: {
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              ReadReplicaSourceDBInstanceIdentifier: {
              },
              ReadReplicaDBInstanceIdentifiers: {
                type: 'list',
                members: {
                  name: 'ReadReplicaDBInstanceIdentifier'
                }
              },
              LicenseModel: {
              },
              OptionGroupMembership: {
                type: 'structure',
                members: {
                  OptionGroupName: {
                  },
                  Status: {
                  }
                }
              },
              CharacterSetName: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    restoreDBInstanceToPointInTime: {
      name: 'RestoreDBInstanceToPointInTime',
      input: {
        type: 'structure',
        members: {
          SourceDBInstanceIdentifier: {
            required: true
          },
          TargetDBInstanceIdentifier: {
            required: true
          },
          RestoreTime: {
            type: 'timestamp'
          },
          UseLatestRestorableTime: {
            type: 'boolean'
          },
          DBInstanceClass: {
          },
          Port: {
            type: 'integer'
          },
          AvailabilityZone: {
          },
          DBSubnetGroupName: {
          },
          MultiAZ: {
            type: 'boolean'
          },
          AutoMinorVersionUpgrade: {
            type: 'boolean'
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
      output: {
        type: 'structure',
        members: {
          DBInstance: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              AllocatedStorage: {
                type: 'integer'
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              PreferredBackupWindow: {
              },
              BackupRetentionPeriod: {
                type: 'integer'
              },
              DBSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'DBSecurityGroup'
                }
              },
              DBParameterGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    DBParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    }
                  },
                  name: 'DBParameterGroup'
                }
              },
              AvailabilityZone: {
              },
              DBSubnetGroup: {
                type: 'structure',
                members: {
                  DBSubnetGroupName: {
                  },
                  DBSubnetGroupDescription: {
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
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  DBInstanceClass: {
                  },
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  MasterUserPassword: {
                  },
                  Port: {
                    type: 'integer'
                  },
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  MultiAZ: {
                    type: 'boolean'
                  },
                  EngineVersion: {
                  }
                }
              },
              LatestRestorableTime: {
                type: 'timestamp'
              },
              MultiAZ: {
                type: 'boolean'
              },
              EngineVersion: {
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              ReadReplicaSourceDBInstanceIdentifier: {
              },
              ReadReplicaDBInstanceIdentifiers: {
                type: 'list',
                members: {
                  name: 'ReadReplicaDBInstanceIdentifier'
                }
              },
              LicenseModel: {
              },
              OptionGroupMembership: {
                type: 'structure',
                members: {
                  OptionGroupName: {
                  },
                  Status: {
                  }
                }
              },
              CharacterSetName: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    revokeDBSecurityGroupIngress: {
      name: 'RevokeDBSecurityGroupIngress',
      input: {
        type: 'structure',
        members: {
          DBSecurityGroupName: {
            required: true
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
      output: {
        type: 'structure',
        members: {
          DBSecurityGroup: {
            type: 'structure',
            members: {
              OwnerId: {
              },
              DBSecurityGroupName: {
              },
              DBSecurityGroupDescription: {
              },
              VpcId: {
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
                    EC2SecurityGroupId: {
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
