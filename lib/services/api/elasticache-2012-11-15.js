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
  apiVersion: '2012-11-15',
  endpointPrefix: 'elasticache',
  resultWrapped: true,
  serviceFullName: 'Amazon ElastiCache',
  signatureVersion: 'v2',
  timestampFormat: 'iso8601',
  operations: {
    authorizeCacheSecurityGroupIngress: {
      name: 'AuthorizeCacheSecurityGroupIngress',
      input: {
        type: 'structure',
        members: {
          CacheSecurityGroupName: {
            required: true
          },
          EC2SecurityGroupName: {
            required: true
          },
          EC2SecurityGroupOwnerId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CacheSecurityGroup: {
            type: 'structure',
            members: {
              OwnerId: {
              },
              CacheSecurityGroupName: {
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
              }
            },
            wrapper: true
          }
        }
      }
    },
    createCacheCluster: {
      name: 'CreateCacheCluster',
      input: {
        type: 'structure',
        members: {
          CacheClusterId: {
            required: true
          },
          NumCacheNodes: {
            type: 'integer',
            required: true
          },
          CacheNodeType: {
            required: true
          },
          Engine: {
            required: true
          },
          EngineVersion: {
          },
          CacheParameterGroupName: {
          },
          CacheSubnetGroupName: {
          },
          CacheSecurityGroupNames: {
            type: 'list',
            members: {
              name: 'CacheSecurityGroupName'
            }
          },
          SecurityGroupIds: {
            type: 'list',
            members: {
              name: 'SecurityGroupId'
            }
          },
          PreferredAvailabilityZone: {
          },
          PreferredMaintenanceWindow: {
          },
          Port: {
            type: 'integer'
          },
          NotificationTopicArn: {
          },
          AutoMinorVersionUpgrade: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CacheCluster: {
            type: 'structure',
            members: {
              CacheClusterId: {
              },
              ConfigurationEndpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClientDownloadLandingPage: {
              },
              CacheNodeType: {
              },
              Engine: {
              },
              EngineVersion: {
              },
              CacheClusterStatus: {
              },
              NumCacheNodes: {
                type: 'integer'
              },
              PreferredAvailabilityZone: {
              },
              CacheClusterCreateTime: {
                type: 'timestamp'
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  NumCacheNodes: {
                    type: 'integer'
                  },
                  CacheNodeIdsToRemove: {
                    type: 'list',
                    members: {
                      name: 'CacheNodeId'
                    }
                  },
                  EngineVersion: {
                  }
                }
              },
              NotificationConfiguration: {
                type: 'structure',
                members: {
                  TopicArn: {
                  },
                  TopicStatus: {
                  }
                }
              },
              CacheSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    CacheSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'CacheSecurityGroup'
                }
              },
              CacheParameterGroup: {
                type: 'structure',
                members: {
                  CacheParameterGroupName: {
                  },
                  ParameterApplyStatus: {
                  },
                  CacheNodeIdsToReboot: {
                    type: 'list',
                    members: {
                      name: 'CacheNodeId'
                    }
                  }
                }
              },
              CacheSubnetGroupName: {
              },
              CacheNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    CacheNodeId: {
                    },
                    CacheNodeStatus: {
                    },
                    CacheNodeCreateTime: {
                      type: 'timestamp'
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
                    ParameterGroupStatus: {
                    }
                  },
                  name: 'CacheNode'
                }
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              SecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    SecurityGroupId: {
                    },
                    Status: {
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
    createCacheParameterGroup: {
      name: 'CreateCacheParameterGroup',
      input: {
        type: 'structure',
        members: {
          CacheParameterGroupName: {
            required: true
          },
          CacheParameterGroupFamily: {
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
          CacheParameterGroup: {
            type: 'structure',
            members: {
              CacheParameterGroupName: {
              },
              CacheParameterGroupFamily: {
              },
              Description: {
              }
            },
            wrapper: true
          }
        }
      }
    },
    createCacheSecurityGroup: {
      name: 'CreateCacheSecurityGroup',
      input: {
        type: 'structure',
        members: {
          CacheSecurityGroupName: {
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
          CacheSecurityGroup: {
            type: 'structure',
            members: {
              OwnerId: {
              },
              CacheSecurityGroupName: {
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
              }
            },
            wrapper: true
          }
        }
      }
    },
    createCacheSubnetGroup: {
      name: 'CreateCacheSubnetGroup',
      input: {
        type: 'structure',
        members: {
          CacheSubnetGroupName: {
            required: true
          },
          CacheSubnetGroupDescription: {
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
          CacheSubnetGroup: {
            type: 'structure',
            members: {
              CacheSubnetGroupName: {
              },
              CacheSubnetGroupDescription: {
              },
              VpcId: {
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
    deleteCacheCluster: {
      name: 'DeleteCacheCluster',
      input: {
        type: 'structure',
        members: {
          CacheClusterId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CacheCluster: {
            type: 'structure',
            members: {
              CacheClusterId: {
              },
              ConfigurationEndpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClientDownloadLandingPage: {
              },
              CacheNodeType: {
              },
              Engine: {
              },
              EngineVersion: {
              },
              CacheClusterStatus: {
              },
              NumCacheNodes: {
                type: 'integer'
              },
              PreferredAvailabilityZone: {
              },
              CacheClusterCreateTime: {
                type: 'timestamp'
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  NumCacheNodes: {
                    type: 'integer'
                  },
                  CacheNodeIdsToRemove: {
                    type: 'list',
                    members: {
                      name: 'CacheNodeId'
                    }
                  },
                  EngineVersion: {
                  }
                }
              },
              NotificationConfiguration: {
                type: 'structure',
                members: {
                  TopicArn: {
                  },
                  TopicStatus: {
                  }
                }
              },
              CacheSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    CacheSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'CacheSecurityGroup'
                }
              },
              CacheParameterGroup: {
                type: 'structure',
                members: {
                  CacheParameterGroupName: {
                  },
                  ParameterApplyStatus: {
                  },
                  CacheNodeIdsToReboot: {
                    type: 'list',
                    members: {
                      name: 'CacheNodeId'
                    }
                  }
                }
              },
              CacheSubnetGroupName: {
              },
              CacheNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    CacheNodeId: {
                    },
                    CacheNodeStatus: {
                    },
                    CacheNodeCreateTime: {
                      type: 'timestamp'
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
                    ParameterGroupStatus: {
                    }
                  },
                  name: 'CacheNode'
                }
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              SecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    SecurityGroupId: {
                    },
                    Status: {
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
    deleteCacheParameterGroup: {
      name: 'DeleteCacheParameterGroup',
      input: {
        type: 'structure',
        members: {
          CacheParameterGroupName: {
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
    deleteCacheSecurityGroup: {
      name: 'DeleteCacheSecurityGroup',
      input: {
        type: 'structure',
        members: {
          CacheSecurityGroupName: {
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
    deleteCacheSubnetGroup: {
      name: 'DeleteCacheSubnetGroup',
      input: {
        type: 'structure',
        members: {
          CacheSubnetGroupName: {
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
    describeCacheClusters: {
      name: 'DescribeCacheClusters',
      input: {
        type: 'structure',
        members: {
          CacheClusterId: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          },
          ShowCacheNodeInfo: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          CacheClusters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                CacheClusterId: {
                },
                ConfigurationEndpoint: {
                  type: 'structure',
                  members: {
                    Address: {
                    },
                    Port: {
                      type: 'integer'
                    }
                  }
                },
                ClientDownloadLandingPage: {
                },
                CacheNodeType: {
                },
                Engine: {
                },
                EngineVersion: {
                },
                CacheClusterStatus: {
                },
                NumCacheNodes: {
                  type: 'integer'
                },
                PreferredAvailabilityZone: {
                },
                CacheClusterCreateTime: {
                  type: 'timestamp'
                },
                PreferredMaintenanceWindow: {
                },
                PendingModifiedValues: {
                  type: 'structure',
                  members: {
                    NumCacheNodes: {
                      type: 'integer'
                    },
                    CacheNodeIdsToRemove: {
                      type: 'list',
                      members: {
                        name: 'CacheNodeId'
                      }
                    },
                    EngineVersion: {
                    }
                  }
                },
                NotificationConfiguration: {
                  type: 'structure',
                  members: {
                    TopicArn: {
                    },
                    TopicStatus: {
                    }
                  }
                },
                CacheSecurityGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      CacheSecurityGroupName: {
                      },
                      Status: {
                      }
                    },
                    name: 'CacheSecurityGroup'
                  }
                },
                CacheParameterGroup: {
                  type: 'structure',
                  members: {
                    CacheParameterGroupName: {
                    },
                    ParameterApplyStatus: {
                    },
                    CacheNodeIdsToReboot: {
                      type: 'list',
                      members: {
                        name: 'CacheNodeId'
                      }
                    }
                  }
                },
                CacheSubnetGroupName: {
                },
                CacheNodes: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      CacheNodeId: {
                      },
                      CacheNodeStatus: {
                      },
                      CacheNodeCreateTime: {
                        type: 'timestamp'
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
                      ParameterGroupStatus: {
                      }
                    },
                    name: 'CacheNode'
                  }
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                SecurityGroups: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      SecurityGroupId: {
                      },
                      Status: {
                      }
                    }
                  }
                }
              },
              wrapper: true,
              name: 'CacheCluster'
            }
          }
        }
      }
    },
    describeCacheEngineVersions: {
      name: 'DescribeCacheEngineVersions',
      input: {
        type: 'structure',
        members: {
          Engine: {
          },
          EngineVersion: {
          },
          CacheParameterGroupFamily: {
          },
          MaxRecords: {
            type: 'integer'
          },
          Marker: {
          },
          DefaultOnly: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          CacheEngineVersions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Engine: {
                },
                EngineVersion: {
                },
                CacheParameterGroupFamily: {
                },
                CacheEngineDescription: {
                },
                CacheEngineVersionDescription: {
                }
              },
              name: 'CacheEngineVersion'
            }
          }
        }
      }
    },
    describeCacheParameterGroups: {
      name: 'DescribeCacheParameterGroups',
      input: {
        type: 'structure',
        members: {
          CacheParameterGroupName: {
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
          CacheParameterGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                CacheParameterGroupName: {
                },
                CacheParameterGroupFamily: {
                },
                Description: {
                }
              },
              wrapper: true,
              name: 'CacheParameterGroup'
            }
          }
        }
      }
    },
    describeCacheParameters: {
      name: 'DescribeCacheParameters',
      input: {
        type: 'structure',
        members: {
          CacheParameterGroupName: {
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
          },
          CacheNodeTypeSpecificParameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterName: {
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
                },
                CacheNodeTypeSpecificValues: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      CacheNodeType: {
                      },
                      Value: {
                      }
                    },
                    name: 'CacheNodeTypeSpecificValue'
                  }
                }
              },
              name: 'CacheNodeTypeSpecificParameter'
            }
          }
        }
      }
    },
    describeCacheSecurityGroups: {
      name: 'DescribeCacheSecurityGroups',
      input: {
        type: 'structure',
        members: {
          CacheSecurityGroupName: {
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
          CacheSecurityGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                OwnerId: {
                },
                CacheSecurityGroupName: {
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
                }
              },
              wrapper: true,
              name: 'CacheSecurityGroup'
            }
          }
        }
      }
    },
    describeCacheSubnetGroups: {
      name: 'DescribeCacheSubnetGroups',
      input: {
        type: 'structure',
        members: {
          CacheSubnetGroupName: {
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
          CacheSubnetGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                CacheSubnetGroupName: {
                },
                CacheSubnetGroupDescription: {
                },
                VpcId: {
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
                      }
                    },
                    name: 'Subnet'
                  }
                }
              },
              wrapper: true,
              name: 'CacheSubnetGroup'
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
          CacheParameterGroupFamily: {
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
              CacheParameterGroupFamily: {
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
              },
              CacheNodeTypeSpecificParameters: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ParameterName: {
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
                    },
                    CacheNodeTypeSpecificValues: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          CacheNodeType: {
                          },
                          Value: {
                          }
                        },
                        name: 'CacheNodeTypeSpecificValue'
                      }
                    }
                  },
                  name: 'CacheNodeTypeSpecificParameter'
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
    describeReservedCacheNodes: {
      name: 'DescribeReservedCacheNodes',
      input: {
        type: 'structure',
        members: {
          ReservedCacheNodeId: {
          },
          ReservedCacheNodesOfferingId: {
          },
          CacheNodeType: {
          },
          Duration: {
          },
          ProductDescription: {
          },
          OfferingType: {
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
          ReservedCacheNodes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ReservedCacheNodeId: {
                },
                ReservedCacheNodesOfferingId: {
                },
                CacheNodeType: {
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
                CacheNodeCount: {
                  type: 'integer'
                },
                ProductDescription: {
                },
                OfferingType: {
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
              name: 'ReservedCacheNode'
            }
          }
        }
      }
    },
    describeReservedCacheNodesOfferings: {
      name: 'DescribeReservedCacheNodesOfferings',
      input: {
        type: 'structure',
        members: {
          ReservedCacheNodesOfferingId: {
          },
          CacheNodeType: {
          },
          Duration: {
          },
          ProductDescription: {
          },
          OfferingType: {
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
          ReservedCacheNodesOfferings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ReservedCacheNodesOfferingId: {
                },
                CacheNodeType: {
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
                ProductDescription: {
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
              name: 'ReservedCacheNodesOffering'
            }
          }
        }
      }
    },
    modifyCacheCluster: {
      name: 'ModifyCacheCluster',
      input: {
        type: 'structure',
        members: {
          CacheClusterId: {
            required: true
          },
          NumCacheNodes: {
            type: 'integer'
          },
          CacheNodeIdsToRemove: {
            type: 'list',
            members: {
              name: 'CacheNodeId'
            }
          },
          CacheSecurityGroupNames: {
            type: 'list',
            members: {
              name: 'CacheSecurityGroupName'
            }
          },
          SecurityGroupIds: {
            type: 'list',
            members: {
              name: 'SecurityGroupId'
            }
          },
          PreferredMaintenanceWindow: {
          },
          NotificationTopicArn: {
          },
          CacheParameterGroupName: {
          },
          NotificationTopicStatus: {
          },
          ApplyImmediately: {
            type: 'boolean'
          },
          EngineVersion: {
          },
          AutoMinorVersionUpgrade: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CacheCluster: {
            type: 'structure',
            members: {
              CacheClusterId: {
              },
              ConfigurationEndpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClientDownloadLandingPage: {
              },
              CacheNodeType: {
              },
              Engine: {
              },
              EngineVersion: {
              },
              CacheClusterStatus: {
              },
              NumCacheNodes: {
                type: 'integer'
              },
              PreferredAvailabilityZone: {
              },
              CacheClusterCreateTime: {
                type: 'timestamp'
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  NumCacheNodes: {
                    type: 'integer'
                  },
                  CacheNodeIdsToRemove: {
                    type: 'list',
                    members: {
                      name: 'CacheNodeId'
                    }
                  },
                  EngineVersion: {
                  }
                }
              },
              NotificationConfiguration: {
                type: 'structure',
                members: {
                  TopicArn: {
                  },
                  TopicStatus: {
                  }
                }
              },
              CacheSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    CacheSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'CacheSecurityGroup'
                }
              },
              CacheParameterGroup: {
                type: 'structure',
                members: {
                  CacheParameterGroupName: {
                  },
                  ParameterApplyStatus: {
                  },
                  CacheNodeIdsToReboot: {
                    type: 'list',
                    members: {
                      name: 'CacheNodeId'
                    }
                  }
                }
              },
              CacheSubnetGroupName: {
              },
              CacheNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    CacheNodeId: {
                    },
                    CacheNodeStatus: {
                    },
                    CacheNodeCreateTime: {
                      type: 'timestamp'
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
                    ParameterGroupStatus: {
                    }
                  },
                  name: 'CacheNode'
                }
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              SecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    SecurityGroupId: {
                    },
                    Status: {
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
    modifyCacheParameterGroup: {
      name: 'ModifyCacheParameterGroup',
      input: {
        type: 'structure',
        members: {
          CacheParameterGroupName: {
            required: true
          },
          ParameterNameValues: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterName: {
                },
                ParameterValue: {
                }
              },
              name: 'ParameterNameValue'
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CacheParameterGroupName: {
          }
        }
      }
    },
    modifyCacheSubnetGroup: {
      name: 'ModifyCacheSubnetGroup',
      input: {
        type: 'structure',
        members: {
          CacheSubnetGroupName: {
            required: true
          },
          CacheSubnetGroupDescription: {
          },
          SubnetIds: {
            type: 'list',
            members: {
              name: 'SubnetIdentifier'
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CacheSubnetGroup: {
            type: 'structure',
            members: {
              CacheSubnetGroupName: {
              },
              CacheSubnetGroupDescription: {
              },
              VpcId: {
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
    purchaseReservedCacheNodesOffering: {
      name: 'PurchaseReservedCacheNodesOffering',
      input: {
        type: 'structure',
        members: {
          ReservedCacheNodesOfferingId: {
            required: true
          },
          ReservedCacheNodeId: {
          },
          CacheNodeCount: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ReservedCacheNode: {
            type: 'structure',
            members: {
              ReservedCacheNodeId: {
              },
              ReservedCacheNodesOfferingId: {
              },
              CacheNodeType: {
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
              CacheNodeCount: {
                type: 'integer'
              },
              ProductDescription: {
              },
              OfferingType: {
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
    rebootCacheCluster: {
      name: 'RebootCacheCluster',
      input: {
        type: 'structure',
        members: {
          CacheClusterId: {
            required: true
          },
          CacheNodeIdsToReboot: {
            type: 'list',
            members: {
              name: 'CacheNodeId'
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CacheCluster: {
            type: 'structure',
            members: {
              CacheClusterId: {
              },
              ConfigurationEndpoint: {
                type: 'structure',
                members: {
                  Address: {
                  },
                  Port: {
                    type: 'integer'
                  }
                }
              },
              ClientDownloadLandingPage: {
              },
              CacheNodeType: {
              },
              Engine: {
              },
              EngineVersion: {
              },
              CacheClusterStatus: {
              },
              NumCacheNodes: {
                type: 'integer'
              },
              PreferredAvailabilityZone: {
              },
              CacheClusterCreateTime: {
                type: 'timestamp'
              },
              PreferredMaintenanceWindow: {
              },
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  NumCacheNodes: {
                    type: 'integer'
                  },
                  CacheNodeIdsToRemove: {
                    type: 'list',
                    members: {
                      name: 'CacheNodeId'
                    }
                  },
                  EngineVersion: {
                  }
                }
              },
              NotificationConfiguration: {
                type: 'structure',
                members: {
                  TopicArn: {
                  },
                  TopicStatus: {
                  }
                }
              },
              CacheSecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    CacheSecurityGroupName: {
                    },
                    Status: {
                    }
                  },
                  name: 'CacheSecurityGroup'
                }
              },
              CacheParameterGroup: {
                type: 'structure',
                members: {
                  CacheParameterGroupName: {
                  },
                  ParameterApplyStatus: {
                  },
                  CacheNodeIdsToReboot: {
                    type: 'list',
                    members: {
                      name: 'CacheNodeId'
                    }
                  }
                }
              },
              CacheSubnetGroupName: {
              },
              CacheNodes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    CacheNodeId: {
                    },
                    CacheNodeStatus: {
                    },
                    CacheNodeCreateTime: {
                      type: 'timestamp'
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
                    ParameterGroupStatus: {
                    }
                  },
                  name: 'CacheNode'
                }
              },
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              SecurityGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    SecurityGroupId: {
                    },
                    Status: {
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
    resetCacheParameterGroup: {
      name: 'ResetCacheParameterGroup',
      input: {
        type: 'structure',
        members: {
          CacheParameterGroupName: {
            required: true
          },
          ResetAllParameters: {
            type: 'boolean'
          },
          ParameterNameValues: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterName: {
                },
                ParameterValue: {
                }
              },
              name: 'ParameterNameValue'
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CacheParameterGroupName: {
          }
        }
      }
    },
    revokeCacheSecurityGroupIngress: {
      name: 'RevokeCacheSecurityGroupIngress',
      input: {
        type: 'structure',
        members: {
          CacheSecurityGroupName: {
            required: true
          },
          EC2SecurityGroupName: {
            required: true
          },
          EC2SecurityGroupOwnerId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CacheSecurityGroup: {
            type: 'structure',
            members: {
              OwnerId: {
              },
              CacheSecurityGroupName: {
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
              }
            },
            wrapper: true
          }
        }
      }
    }
  }
};
