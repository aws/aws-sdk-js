var AWS = require('../core');

AWS.EC2.prototype.api = {
  apiVersion: '2012-07-20',
  xmlNamespace: 'http://ec2.amazonaws.com/doc/2012-08-15',
  operations: {
    activateLicense: {
      n: 'ActivateLicense',
      i: {
        LicenseId: {
          r: 1
        },
        Capacity: {
          t: 'i',
          r: 1
        }
      }
    },
    allocateAddress: {
      n: 'AllocateAddress',
      i: {
        Domain: {
        }
      }
    },
    assignPrivateIpAddresses: {
      n: 'AssignPrivateIpAddresses',
      i: {
        NetworkInterfaceId: {
          r: 1
        },
        PrivateIpAddresses: {
          n: 'PrivateIpAddress',
          t: 'a',
          m: {
          }
        },
        SecondaryPrivateIpAddressCount: {
          t: 'i'
        },
        AllowReassignment: {
          t: 'b'
        }
      }
    },
    associateAddress: {
      n: 'AssociateAddress',
      i: {
        InstanceId: {
          r: 1
        },
        PublicIp: {
          r: 1
        },
        AllocationId: {
        },
        NetworkInterfaceId: {
        },
        PrivateIpAddress: {
        },
        AllowReassociation: {
          t: 'b'
        }
      }
    },
    associateDhcpOptions: {
      n: 'AssociateDhcpOptions',
      i: {
        DhcpOptionsId: {
          r: 1
        },
        VpcId: {
          r: 1
        }
      }
    },
    associateRouteTable: {
      n: 'AssociateRouteTable',
      i: {
        SubnetId: {
          r: 1
        },
        RouteTableId: {
          r: 1
        }
      }
    },
    attachInternetGateway: {
      n: 'AttachInternetGateway',
      i: {
        InternetGatewayId: {
          r: 1
        },
        VpcId: {
          r: 1
        }
      }
    },
    attachNetworkInterface: {
      n: 'AttachNetworkInterface',
      i: {
        NetworkInterfaceId: {
          r: 1
        },
        InstanceId: {
          r: 1
        },
        DeviceIndex: {
          t: 'i',
          r: 1
        }
      }
    },
    attachVolume: {
      n: 'AttachVolume',
      i: {
        VolumeId: {
          r: 1
        },
        InstanceId: {
          r: 1
        },
        Device: {
          r: 1
        }
      }
    },
    attachVpnGateway: {
      n: 'AttachVpnGateway',
      i: {
        VpnGatewayId: {
          r: 1
        },
        VpcId: {
          r: 1
        }
      }
    },
    authorizeSecurityGroupEgress: {
      n: 'AuthorizeSecurityGroupEgress',
      i: {
        GroupId: {
          r: 1
        },
        SourceSecurityGroupName: {
        },
        SourceSecurityGroupOwnerId: {
        },
        IpProtocol: {
        },
        FromPort: {
          t: 'i'
        },
        ToPort: {
          t: 'i'
        },
        CidrIp: {
        },
        IpPermissions: {
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              IpProtocol: {
              },
              FromPort: {
                t: 'i'
              },
              ToPort: {
                t: 'i'
              },
              UserIdGroupPairs: {
                n: 'Groups',
                t: 'a',
                m: {
                  n: 'Item',
                  t: 'o',
                  m: {
                    UserId: {
                    },
                    GroupName: {
                    },
                    GroupId: {
                    }
                  }
                }
              },
              IpRanges: {
                n: 'IpRanges',
                t: 'a',
                m: {
                  n: 'Item',
                  t: 'o',
                  m: {
                    CidrIp: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    authorizeSecurityGroupIngress: {
      n: 'AuthorizeSecurityGroupIngress',
      i: {
        GroupName: {
        },
        GroupId: {
        },
        SourceSecurityGroupName: {
        },
        SourceSecurityGroupOwnerId: {
        },
        IpProtocol: {
        },
        FromPort: {
          t: 'i'
        },
        ToPort: {
          t: 'i'
        },
        CidrIp: {
        },
        IpPermissions: {
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              IpProtocol: {
              },
              FromPort: {
                t: 'i'
              },
              ToPort: {
                t: 'i'
              },
              UserIdGroupPairs: {
                n: 'Groups',
                t: 'a',
                m: {
                  n: 'Item',
                  t: 'o',
                  m: {
                    UserId: {
                    },
                    GroupName: {
                    },
                    GroupId: {
                    }
                  }
                }
              },
              IpRanges: {
                n: 'IpRanges',
                t: 'a',
                m: {
                  n: 'Item',
                  t: 'o',
                  m: {
                    CidrIp: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    bundleInstance: {
      n: 'BundleInstance',
      i: {
        InstanceId: {
          r: 1
        },
        Storage: {
          t: 'o',
          m: {
            S3: {
              n: 'S3',
              t: 'o',
              m: {
                Bucket: {
                },
                Prefix: {
                },
                AWSAccessKeyId: {
                },
                UploadPolicy: {
                },
                UploadPolicySignature: {
                }
              }
            }
          },
          r: 1
        }
      }
    },
    cancelBundleTask: {
      n: 'CancelBundleTask',
      i: {
        BundleId: {
          r: 1
        }
      }
    },
    cancelConversionTask: {
      n: 'CancelConversionTask',
      i: {
        ConversionTaskId: {
          r: 1
        },
        ReasonMessage: {
        }
      }
    },
    cancelExportTask: {
      n: 'CancelExportTask',
      i: {
        ExportTaskId: {
          r: 1
        }
      }
    },
    cancelReservedInstancesListing: {
      n: 'CancelReservedInstancesListing',
      i: {
        ReservedInstancesListingId: {
          r: 1
        }
      }
    },
    cancelSpotInstanceRequests: {
      n: 'CancelSpotInstanceRequests',
      i: {
        SpotInstanceRequestIds: {
          n: 'SpotInstanceRequestId',
          t: 'a',
          m: {
          },
          r: 1
        }
      }
    },
    confirmProductInstance: {
      n: 'ConfirmProductInstance',
      i: {
        ProductCode: {
          r: 1
        },
        InstanceId: {
          r: 1
        }
      }
    },
    createCustomerGateway: {
      n: 'CreateCustomerGateway',
      i: {
        Type: {
          r: 1
        },
        PublicIp: {
          r: 1
        },
        BgpAsn: {
          t: 'i',
          r: 1
        }
      }
    },
    createDhcpOptions: {
      n: 'CreateDhcpOptions',
      i: {
        DhcpConfigurations: {
          n: 'DhcpConfiguration',
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              Key: {
              },
              Values: {
                n: 'ValueSet',
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
    createImage: {
      n: 'CreateImage',
      i: {
        InstanceId: {
          r: 1
        },
        Name: {
          r: 1
        },
        Description: {
        },
        NoReboot: {
          t: 'b'
        },
        BlockDeviceMappings: {
          n: 'BlockDeviceMapping',
          t: 'a',
          m: {
            n: 'BlockDeviceMapping',
            t: 'o',
            m: {
              VirtualName: {
              },
              DeviceName: {
              },
              Ebs: {
                t: 'o',
                m: {
                  SnapshotId: {
                  },
                  VolumeSize: {
                    t: 'i'
                  },
                  DeleteOnTermination: {
                    t: 'b'
                  },
                  VolumeType: {
                  },
                  Iops: {
                    t: 'i'
                  }
                }
              },
              NoDevice: {
              }
            }
          }
        }
      }
    },
    createInstanceExportTask: {
      n: 'CreateInstanceExportTask',
      i: {
        Description: {
        },
        InstanceId: {
          r: 1
        },
        TargetEnvironment: {
        },
        ExportToS3Task: {
          n: 'ExportToS3',
          t: 'o',
          m: {
            DiskImageFormat: {
            },
            ContainerFormat: {
            },
            S3Bucket: {
            },
            S3Prefix: {
            }
          }
        }
      }
    },
    createInternetGateway: {
      n: 'CreateInternetGateway',
      i: {
      }
    },
    createKeyPair: {
      n: 'CreateKeyPair',
      i: {
        KeyName: {
          r: 1
        }
      }
    },
    createNetworkAcl: {
      n: 'CreateNetworkAcl',
      i: {
        VpcId: {
          r: 1
        }
      }
    },
    createNetworkAclEntry: {
      n: 'CreateNetworkAclEntry',
      i: {
        NetworkAclId: {
          r: 1
        },
        RuleNumber: {
          t: 'i',
          r: 1
        },
        Protocol: {
          r: 1
        },
        RuleAction: {
          r: 1
        },
        Egress: {
          t: 'b',
          r: 1
        },
        CidrBlock: {
          r: 1
        },
        IcmpTypeCode: {
          n: 'Icmp',
          t: 'o',
          m: {
            Type: {
              t: 'i'
            },
            Code: {
              t: 'i'
            }
          }
        },
        PortRange: {
          t: 'o',
          m: {
            From: {
              t: 'i'
            },
            To: {
              t: 'i'
            }
          }
        }
      }
    },
    createNetworkInterface: {
      n: 'CreateNetworkInterface',
      i: {
        SubnetId: {
          r: 1
        },
        Description: {
        },
        PrivateIpAddress: {
        },
        Groups: {
          n: 'SecurityGroupId',
          t: 'a',
          m: {
          }
        },
        PrivateIpAddresses: {
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              PrivateIpAddress: {
                r: 1
              },
              Primary: {
                t: 'b'
              }
            }
          }
        },
        SecondaryPrivateIpAddressCount: {
          t: 'i'
        }
      }
    },
    createPlacementGroup: {
      n: 'CreatePlacementGroup',
      i: {
        GroupName: {
          r: 1
        },
        Strategy: {
          r: 1
        }
      }
    },
    createReservedInstancesListing: {
      n: 'CreateReservedInstancesListing',
      i: {
        ReservedInstancesId: {
          r: 1
        },
        InstanceCount: {
          t: 'i',
          r: 1
        },
        PriceSchedules: {
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              Term: {
                t: 'i'
              },
              Price: {
                t: 'n'
              },
              CurrencyCode: {
              }
            }
          },
          r: 1
        },
        ClientToken: {
          r: 1
        }
      }
    },
    createRoute: {
      n: 'CreateRoute',
      i: {
        RouteTableId: {
          r: 1
        },
        DestinationCidrBlock: {
          r: 1
        },
        GatewayId: {
        },
        InstanceId: {
        },
        NetworkInterfaceId: {
        }
      }
    },
    createRouteTable: {
      n: 'CreateRouteTable',
      i: {
        VpcId: {
          r: 1
        }
      }
    },
    createSecurityGroup: {
      n: 'CreateSecurityGroup',
      i: {
        GroupName: {
          r: 1
        },
        Description: {
          r: 1
        },
        VpcId: {
        }
      }
    },
    createSnapshot: {
      n: 'CreateSnapshot',
      i: {
        VolumeId: {
          r: 1
        },
        Description: {
        }
      }
    },
    createSpotDatafeedSubscription: {
      n: 'CreateSpotDatafeedSubscription',
      i: {
        Bucket: {
          r: 1
        },
        Prefix: {
        }
      }
    },
    createSubnet: {
      n: 'CreateSubnet',
      i: {
        VpcId: {
          r: 1
        },
        CidrBlock: {
          r: 1
        },
        AvailabilityZone: {
        }
      }
    },
    createTags: {
      n: 'CreateTags',
      i: {
        Resources: {
          n: 'ResourceId',
          t: 'a',
          m: {
          },
          r: 1
        },
        Tags: {
          n: 'Tag',
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              Key: {
              },
              Value: {
              }
            }
          },
          r: 1
        }
      }
    },
    createVolume: {
      n: 'CreateVolume',
      i: {
        Size: {
          t: 'i'
        },
        SnapshotId: {
        },
        AvailabilityZone: {
          r: 1
        },
        VolumeType: {
        },
        Iops: {
          t: 'i'
        }
      }
    },
    createVpc: {
      n: 'CreateVpc',
      i: {
        CidrBlock: {
          r: 1
        },
        InstanceTenancy: {
        }
      }
    },
    createVpnConnection: {
      n: 'CreateVpnConnection',
      i: {
        Type: {
          r: 1
        },
        CustomerGatewayId: {
          r: 1
        },
        VpnGatewayId: {
          r: 1
        },
        Options: {
          t: 'o',
          m: {
            StaticRoutesOnly: {
              t: 'b'
            }
          }
        }
      }
    },
    createVpnConnectionRoute: {
      n: 'CreateVpnConnectionRoute',
      i: {
        VpnConnectionId: {
          r: 1
        },
        DestinationCidrBlock: {
          r: 1
        }
      }
    },
    createVpnGateway: {
      n: 'CreateVpnGateway',
      i: {
        Type: {
          r: 1
        },
        AvailabilityZone: {
        }
      }
    },
    deactivateLicense: {
      n: 'DeactivateLicense',
      i: {
        LicenseId: {
          r: 1
        },
        Capacity: {
          t: 'i',
          r: 1
        }
      }
    },
    deleteCustomerGateway: {
      n: 'DeleteCustomerGateway',
      i: {
        CustomerGatewayId: {
          r: 1
        }
      }
    },
    deleteDhcpOptions: {
      n: 'DeleteDhcpOptions',
      i: {
        DhcpOptionsId: {
          r: 1
        }
      }
    },
    deleteInternetGateway: {
      n: 'DeleteInternetGateway',
      i: {
        InternetGatewayId: {
          r: 1
        }
      }
    },
    deleteKeyPair: {
      n: 'DeleteKeyPair',
      i: {
        KeyName: {
          r: 1
        }
      }
    },
    deleteNetworkAcl: {
      n: 'DeleteNetworkAcl',
      i: {
        NetworkAclId: {
          r: 1
        }
      }
    },
    deleteNetworkAclEntry: {
      n: 'DeleteNetworkAclEntry',
      i: {
        NetworkAclId: {
          r: 1
        },
        RuleNumber: {
          t: 'i',
          r: 1
        },
        Egress: {
          t: 'b',
          r: 1
        }
      }
    },
    deleteNetworkInterface: {
      n: 'DeleteNetworkInterface',
      i: {
        NetworkInterfaceId: {
          r: 1
        }
      }
    },
    deletePlacementGroup: {
      n: 'DeletePlacementGroup',
      i: {
        GroupName: {
          r: 1
        }
      }
    },
    deleteRoute: {
      n: 'DeleteRoute',
      i: {
        RouteTableId: {
          r: 1
        },
        DestinationCidrBlock: {
          r: 1
        }
      }
    },
    deleteRouteTable: {
      n: 'DeleteRouteTable',
      i: {
        RouteTableId: {
          r: 1
        }
      }
    },
    deleteSecurityGroup: {
      n: 'DeleteSecurityGroup',
      i: {
        GroupName: {
        },
        GroupId: {
        }
      }
    },
    deleteSnapshot: {
      n: 'DeleteSnapshot',
      i: {
        SnapshotId: {
          r: 1
        }
      }
    },
    deleteSpotDatafeedSubscription: {
      n: 'DeleteSpotDatafeedSubscription',
      i: {
      }
    },
    deleteSubnet: {
      n: 'DeleteSubnet',
      i: {
        SubnetId: {
          r: 1
        }
      }
    },
    deleteTags: {
      n: 'DeleteTags',
      i: {
        Resources: {
          n: 'ResourceId',
          t: 'a',
          m: {
          },
          r: 1
        },
        Tags: {
          n: 'Tag',
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              Key: {
              },
              Value: {
              }
            }
          }
        }
      }
    },
    deleteVolume: {
      n: 'DeleteVolume',
      i: {
        VolumeId: {
          r: 1
        }
      }
    },
    deleteVpc: {
      n: 'DeleteVpc',
      i: {
        VpcId: {
          r: 1
        }
      }
    },
    deleteVpnConnection: {
      n: 'DeleteVpnConnection',
      i: {
        VpnConnectionId: {
          r: 1
        }
      }
    },
    deleteVpnConnectionRoute: {
      n: 'DeleteVpnConnectionRoute',
      i: {
        VpnConnectionId: {
          r: 1
        },
        DestinationCidrBlock: {
          r: 1
        }
      }
    },
    deleteVpnGateway: {
      n: 'DeleteVpnGateway',
      i: {
        VpnGatewayId: {
          r: 1
        }
      }
    },
    deregisterImage: {
      n: 'DeregisterImage',
      i: {
        ImageId: {
          r: 1
        }
      }
    },
    describeAddresses: {
      n: 'DescribeAddresses',
      i: {
        PublicIps: {
          n: 'PublicIp',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        },
        AllocationIds: {
          n: 'AllocationId',
          t: 'a',
          m: {
          }
        }
      }
    },
    describeAvailabilityZones: {
      n: 'DescribeAvailabilityZones',
      i: {
        ZoneNames: {
          n: 'ZoneName',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeBundleTasks: {
      n: 'DescribeBundleTasks',
      i: {
        BundleIds: {
          n: 'BundleId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeConversionTasks: {
      n: 'DescribeConversionTasks',
      i: {
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        },
        ConversionTaskIds: {
          n: 'ConversionTaskId',
          t: 'a',
          m: {
          }
        }
      }
    },
    describeCustomerGateways: {
      n: 'DescribeCustomerGateways',
      i: {
        CustomerGatewayIds: {
          n: 'CustomerGatewayId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeDhcpOptions: {
      n: 'DescribeDhcpOptions',
      i: {
        DhcpOptionsIds: {
          n: 'DhcpOptionsId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeExportTasks: {
      n: 'DescribeExportTasks',
      i: {
        ExportTaskIds: {
          n: 'ExportTaskId',
          t: 'a',
          m: {
          }
        }
      }
    },
    describeImageAttribute: {
      n: 'DescribeImageAttribute',
      i: {
        ImageId: {
          r: 1
        },
        Attribute: {
          r: 1
        }
      }
    },
    describeImages: {
      n: 'DescribeImages',
      i: {
        ImageIds: {
          n: 'ImageId',
          t: 'a',
          m: {
          }
        },
        Owners: {
          n: 'Owner',
          t: 'a',
          m: {
          }
        },
        ExecutableUsers: {
          n: 'ExecutableBy',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeInstanceAttribute: {
      n: 'DescribeInstanceAttribute',
      i: {
        InstanceId: {
          r: 1
        },
        Attribute: {
          r: 1
        }
      }
    },
    describeInstanceStatus: {
      n: 'DescribeInstanceStatus',
      i: {
        InstanceIds: {
          n: 'InstanceId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        },
        NextToken: {
        },
        MaxResults: {
          t: 'i'
        },
        IncludeAllInstances: {
          t: 'b'
        }
      }
    },
    describeInstances: {
      n: 'DescribeInstances',
      i: {
        InstanceIds: {
          n: 'InstanceId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeInternetGateways: {
      n: 'DescribeInternetGateways',
      i: {
        InternetGatewayIds: {
          n: 'InternetGatewayId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeKeyPairs: {
      n: 'DescribeKeyPairs',
      i: {
        KeyNames: {
          n: 'KeyName',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeLicenses: {
      n: 'DescribeLicenses',
      i: {
        LicenseIds: {
          n: 'LicenseId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeNetworkAcls: {
      n: 'DescribeNetworkAcls',
      i: {
        NetworkAclIds: {
          n: 'NetworkAclId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeNetworkInterfaceAttribute: {
      n: 'DescribeNetworkInterfaceAttribute',
      i: {
        NetworkInterfaceId: {
          r: 1
        },
        Description: {
        },
        SourceDestCheck: {
        },
        Groups: {
        },
        Attachment: {
        }
      }
    },
    describeNetworkInterfaces: {
      n: 'DescribeNetworkInterfaces',
      i: {
        NetworkInterfaceIds: {
          n: 'NetworkInterfaceId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describePlacementGroups: {
      n: 'DescribePlacementGroups',
      i: {
        GroupNames: {
          n: 'GroupName',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeRegions: {
      n: 'DescribeRegions',
      i: {
        RegionNames: {
          n: 'RegionName',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeReservedInstances: {
      n: 'DescribeReservedInstances',
      i: {
        ReservedInstancesIds: {
          n: 'ReservedInstancesId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        },
        OfferingType: {
        }
      }
    },
    describeReservedInstancesListings: {
      n: 'DescribeReservedInstancesListings',
      i: {
        ReservedInstancesId: {
        },
        ReservedInstancesListingId: {
        },
        Filters: {
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeReservedInstancesOfferings: {
      n: 'DescribeReservedInstancesOfferings',
      i: {
        ReservedInstancesOfferingIds: {
          n: 'ReservedInstancesOfferingId',
          t: 'a',
          m: {
          }
        },
        InstanceType: {
        },
        AvailabilityZone: {
        },
        ProductDescription: {
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        },
        InstanceTenancy: {
        },
        OfferingType: {
        }
      }
    },
    describeRouteTables: {
      n: 'DescribeRouteTables',
      i: {
        RouteTableIds: {
          n: 'RouteTableId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeSecurityGroups: {
      n: 'DescribeSecurityGroups',
      i: {
        GroupNames: {
          n: 'GroupName',
          t: 'a',
          m: {
          }
        },
        GroupIds: {
          n: 'GroupId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeSnapshotAttribute: {
      n: 'DescribeSnapshotAttribute',
      i: {
        SnapshotId: {
          r: 1
        },
        Attribute: {
          r: 1
        }
      }
    },
    describeSnapshots: {
      n: 'DescribeSnapshots',
      i: {
        SnapshotIds: {
          n: 'SnapshotId',
          t: 'a',
          m: {
          }
        },
        OwnerIds: {
          n: 'Owner',
          t: 'a',
          m: {
          }
        },
        RestorableByUserIds: {
          n: 'RestorableBy',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeSpotDatafeedSubscription: {
      n: 'DescribeSpotDatafeedSubscription',
      i: {
      }
    },
    describeSpotInstanceRequests: {
      n: 'DescribeSpotInstanceRequests',
      i: {
        SpotInstanceRequestIds: {
          n: 'SpotInstanceRequestId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeSpotPriceHistory: {
      n: 'DescribeSpotPriceHistory',
      i: {
        StartTime: {
          t: 't'
        },
        EndTime: {
          t: 't'
        },
        InstanceTypes: {
          n: 'InstanceType',
          t: 'a',
          m: {
          }
        },
        ProductDescriptions: {
          n: 'ProductDescription',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        },
        AvailabilityZone: {
        },
        MaxResults: {
          t: 'i'
        },
        NextToken: {
        }
      }
    },
    describeSubnets: {
      n: 'DescribeSubnets',
      i: {
        SubnetIds: {
          n: 'SubnetId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeTags: {
      n: 'DescribeTags',
      i: {
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeVolumeAttribute: {
      n: 'DescribeVolumeAttribute',
      i: {
        VolumeId: {
          r: 1
        },
        Attribute: {
        }
      }
    },
    describeVolumeStatus: {
      n: 'DescribeVolumeStatus',
      i: {
        VolumeIds: {
          n: 'VolumeId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        },
        NextToken: {
        },
        MaxResults: {
          t: 'i'
        }
      }
    },
    describeVolumes: {
      n: 'DescribeVolumes',
      i: {
        VolumeIds: {
          n: 'VolumeId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeVpcs: {
      n: 'DescribeVpcs',
      i: {
        VpcIds: {
          n: 'VpcId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeVpnConnections: {
      n: 'DescribeVpnConnections',
      i: {
        VpnConnectionIds: {
          n: 'VpnConnectionId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    describeVpnGateways: {
      n: 'DescribeVpnGateways',
      i: {
        VpnGatewayIds: {
          n: 'VpnGatewayId',
          t: 'a',
          m: {
          }
        },
        Filters: {
          n: 'Filter',
          t: 'a',
          m: {
            n: 'Filter',
            t: 'o',
            m: {
              Name: {
              },
              Values: {
                n: 'Value',
                t: 'a',
                m: {
                }
              }
            }
          }
        }
      }
    },
    detachInternetGateway: {
      n: 'DetachInternetGateway',
      i: {
        InternetGatewayId: {
          r: 1
        },
        VpcId: {
          r: 1
        }
      }
    },
    detachNetworkInterface: {
      n: 'DetachNetworkInterface',
      i: {
        AttachmentId: {
          r: 1
        },
        Force: {
          t: 'b'
        }
      }
    },
    detachVolume: {
      n: 'DetachVolume',
      i: {
        VolumeId: {
          r: 1
        },
        InstanceId: {
        },
        Device: {
        },
        Force: {
          t: 'b'
        }
      }
    },
    detachVpnGateway: {
      n: 'DetachVpnGateway',
      i: {
        VpnGatewayId: {
          r: 1
        },
        VpcId: {
          r: 1
        }
      }
    },
    disableVgwRoutePropagation: {
      n: 'DisableVgwRoutePropagation',
      i: {
        RouteTableId: {
          r: 1
        },
        GatewayId: {
          r: 1
        }
      }
    },
    disassociateAddress: {
      n: 'DisassociateAddress',
      i: {
        PublicIp: {
          r: 1
        },
        AssociationId: {
        }
      }
    },
    disassociateRouteTable: {
      n: 'DisassociateRouteTable',
      i: {
        AssociationId: {
          r: 1
        }
      }
    },
    enableVgwRoutePropagation: {
      n: 'EnableVgwRoutePropagation',
      i: {
        RouteTableId: {
          r: 1
        },
        GatewayId: {
          r: 1
        }
      }
    },
    enableVolumeIO: {
      n: 'EnableVolumeIO',
      i: {
        VolumeId: {
          r: 1
        }
      }
    },
    getConsoleOutput: {
      n: 'GetConsoleOutput',
      i: {
        InstanceId: {
          r: 1
        }
      }
    },
    getPasswordData: {
      n: 'GetPasswordData',
      i: {
        InstanceId: {
          r: 1
        }
      }
    },
    importInstance: {
      n: 'ImportInstance',
      i: {
        Description: {
        },
        LaunchSpecification: {
          t: 'o',
          m: {
            Architecture: {
            },
            SecurityGroups: {
              n: 'SecurityGroup',
              t: 'a',
              m: {
              }
            },
            AdditionalInfo: {
            },
            UserData: {
            },
            InstanceType: {
            },
            Placement: {
              t: 'o',
              m: {
                AvailabilityZone: {
                },
                GroupName: {
                },
                Tenancy: {
                }
              }
            },
            BlockDeviceMappings: {
              n: 'BlockDeviceMapping',
              t: 'a',
              m: {
                n: 'BlockDeviceMapping',
                t: 'o',
                m: {
                  VirtualName: {
                  },
                  DeviceName: {
                  },
                  Ebs: {
                    t: 'o',
                    m: {
                      SnapshotId: {
                      },
                      VolumeSize: {
                        t: 'i'
                      },
                      DeleteOnTermination: {
                        t: 'b'
                      },
                      VolumeType: {
                      },
                      Iops: {
                        t: 'i'
                      }
                    }
                  },
                  NoDevice: {
                  }
                }
              }
            },
            Monitoring: {
              t: 'b'
            },
            SubnetId: {
            },
            DisableApiTermination: {
              t: 'b'
            },
            InstanceInitiatedShutdownBehavior: {
            },
            PrivateIpAddress: {
            }
          }
        },
        DiskImages: {
          n: 'DiskImage',
          t: 'a',
          m: {
            t: 'o',
            m: {
              Image: {
                t: 'o',
                m: {
                  Format: {
                    r: 1
                  },
                  Bytes: {
                    t: 'i',
                    r: 1
                  },
                  ImportManifestUrl: {
                    r: 1
                  }
                }
              },
              Description: {
              },
              Volume: {
                t: 'o',
                m: {
                  Size: {
                    t: 'i',
                    r: 1
                  }
                }
              }
            }
          }
        },
        Platform: {
          r: 1
        }
      }
    },
    importKeyPair: {
      n: 'ImportKeyPair',
      i: {
        KeyName: {
          r: 1
        },
        PublicKeyMaterial: {
          r: 1
        }
      }
    },
    importVolume: {
      n: 'ImportVolume',
      i: {
        AvailabilityZone: {
        },
        Image: {
          t: 'o',
          m: {
            Format: {
              r: 1
            },
            Bytes: {
              t: 'i',
              r: 1
            },
            ImportManifestUrl: {
              r: 1
            }
          }
        },
        Description: {
        },
        Volume: {
          t: 'o',
          m: {
            Size: {
              t: 'i',
              r: 1
            }
          }
        }
      }
    },
    modifyImageAttribute: {
      n: 'ModifyImageAttribute',
      i: {
        ImageId: {
          r: 1
        },
        Attribute: {
        },
        OperationType: {
        },
        UserIds: {
          n: 'UserId',
          t: 'a',
          m: {
          }
        },
        UserGroups: {
          n: 'UserGroup',
          t: 'a',
          m: {
          }
        },
        ProductCodes: {
          n: 'ProductCode',
          t: 'a',
          m: {
          }
        },
        Value: {
        },
        LaunchPermission: {
          t: 'o',
          m: {
            Add: {
              t: 'a',
              m: {
                n: 'Item',
                t: 'o',
                m: {
                  UserId: {
                  },
                  Group: {
                  }
                }
              }
            },
            Remove: {
              t: 'a',
              m: {
                n: 'Item',
                t: 'o',
                m: {
                  UserId: {
                  },
                  Group: {
                  }
                }
              }
            }
          }
        },
        Description: {
          t: 'o',
          m: {
            Value: {
            }
          }
        }
      }
    },
    modifyInstanceAttribute: {
      n: 'ModifyInstanceAttribute',
      i: {
        InstanceId: {
          r: 1
        },
        Attribute: {
        },
        Value: {
        },
        BlockDeviceMappings: {
          n: 'BlockDeviceMapping',
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              DeviceName: {
              },
              Ebs: {
                t: 'o',
                m: {
                  VolumeId: {
                  },
                  DeleteOnTermination: {
                    t: 'b'
                  }
                }
              },
              VirtualName: {
              },
              NoDevice: {
              }
            }
          }
        },
        SourceDestCheck: {
          t: 'o',
          m: {
            Value: {
              t: 'b'
            }
          }
        },
        DisableApiTermination: {
          t: 'o',
          m: {
            Value: {
              t: 'b'
            }
          }
        },
        InstanceType: {
          t: 'o',
          m: {
            Value: {
            }
          }
        },
        Kernel: {
          t: 'o',
          m: {
            Value: {
            }
          }
        },
        Ramdisk: {
          t: 'o',
          m: {
            Value: {
            }
          }
        },
        UserData: {
          t: 'o',
          m: {
            Value: {
            }
          }
        },
        InstanceInitiatedShutdownBehavior: {
          t: 'o',
          m: {
            Value: {
            }
          }
        },
        Groups: {
          n: 'GroupId',
          t: 'a',
          m: {
          }
        },
        EbsOptimized: {
          t: 'o',
          m: {
            Value: {
              t: 'b'
            }
          }
        }
      }
    },
    modifyNetworkInterfaceAttribute: {
      n: 'ModifyNetworkInterfaceAttribute',
      i: {
        NetworkInterfaceId: {
          r: 1
        },
        Description: {
          t: 'o',
          m: {
            Value: {
            }
          }
        },
        SourceDestCheck: {
          t: 'o',
          m: {
            Value: {
              t: 'b'
            }
          }
        },
        Groups: {
          n: 'SecurityGroupId',
          t: 'a',
          m: {
          }
        },
        Attachment: {
          t: 'o',
          m: {
            AttachmentId: {
            },
            DeleteOnTermination: {
              t: 'b'
            }
          }
        }
      }
    },
    modifySnapshotAttribute: {
      n: 'ModifySnapshotAttribute',
      i: {
        SnapshotId: {
          r: 1
        },
        Attribute: {
        },
        OperationType: {
        },
        UserIds: {
          n: 'UserId',
          t: 'a',
          m: {
          }
        },
        GroupNames: {
          n: 'UserGroup',
          t: 'a',
          m: {
          }
        },
        CreateVolumePermission: {
          t: 'o',
          m: {
            Add: {
              t: 'a',
              m: {
                n: 'Item',
                t: 'o',
                m: {
                  UserId: {
                  },
                  Group: {
                  }
                }
              }
            },
            Remove: {
              t: 'a',
              m: {
                n: 'Item',
                t: 'o',
                m: {
                  UserId: {
                  },
                  Group: {
                  }
                }
              }
            }
          }
        }
      }
    },
    modifyVolumeAttribute: {
      n: 'ModifyVolumeAttribute',
      i: {
        VolumeId: {
          r: 1
        },
        AutoEnableIO: {
          t: 'b'
        }
      }
    },
    monitorInstances: {
      n: 'MonitorInstances',
      i: {
        InstanceIds: {
          n: 'InstanceId',
          t: 'a',
          m: {
          },
          r: 1
        }
      }
    },
    purchaseReservedInstancesOffering: {
      n: 'PurchaseReservedInstancesOffering',
      i: {
        ReservedInstancesOfferingId: {
          r: 1
        },
        InstanceCount: {
          t: 'i',
          r: 1
        },
        LimitPrice: {
          t: 'o',
          m: {
            Amount: {
              t: 'n'
            },
            CurrencyCode: {
            }
          }
        }
      }
    },
    rebootInstances: {
      n: 'RebootInstances',
      i: {
        InstanceIds: {
          n: 'InstanceId',
          t: 'a',
          m: {
          },
          r: 1
        }
      }
    },
    registerImage: {
      n: 'RegisterImage',
      i: {
        ImageLocation: {
        },
        Name: {
        },
        Description: {
        },
        Architecture: {
        },
        KernelId: {
        },
        RamdiskId: {
        },
        RootDeviceName: {
        },
        BlockDeviceMappings: {
          n: 'BlockDeviceMapping',
          t: 'a',
          m: {
            n: 'BlockDeviceMapping',
            t: 'o',
            m: {
              VirtualName: {
              },
              DeviceName: {
              },
              Ebs: {
                t: 'o',
                m: {
                  SnapshotId: {
                  },
                  VolumeSize: {
                    t: 'i'
                  },
                  DeleteOnTermination: {
                    t: 'b'
                  },
                  VolumeType: {
                  },
                  Iops: {
                    t: 'i'
                  }
                }
              },
              NoDevice: {
              }
            }
          }
        }
      }
    },
    releaseAddress: {
      n: 'ReleaseAddress',
      i: {
        PublicIp: {
        },
        AllocationId: {
        }
      }
    },
    replaceNetworkAclAssociation: {
      n: 'ReplaceNetworkAclAssociation',
      i: {
        AssociationId: {
          r: 1
        },
        NetworkAclId: {
          r: 1
        }
      }
    },
    replaceNetworkAclEntry: {
      n: 'ReplaceNetworkAclEntry',
      i: {
        NetworkAclId: {
          r: 1
        },
        RuleNumber: {
          t: 'i',
          r: 1
        },
        Protocol: {
          r: 1
        },
        RuleAction: {
          r: 1
        },
        Egress: {
          t: 'b',
          r: 1
        },
        CidrBlock: {
          r: 1
        },
        IcmpTypeCode: {
          n: 'Icmp',
          t: 'o',
          m: {
            Type: {
              t: 'i'
            },
            Code: {
              t: 'i'
            }
          }
        },
        PortRange: {
          t: 'o',
          m: {
            From: {
              t: 'i'
            },
            To: {
              t: 'i'
            }
          }
        }
      }
    },
    replaceRoute: {
      n: 'ReplaceRoute',
      i: {
        RouteTableId: {
          r: 1
        },
        DestinationCidrBlock: {
          r: 1
        },
        GatewayId: {
        },
        InstanceId: {
        },
        NetworkInterfaceId: {
        }
      }
    },
    replaceRouteTableAssociation: {
      n: 'ReplaceRouteTableAssociation',
      i: {
        AssociationId: {
          r: 1
        },
        RouteTableId: {
          r: 1
        }
      }
    },
    reportInstanceStatus: {
      n: 'ReportInstanceStatus',
      i: {
        Instances: {
          n: 'InstanceId',
          t: 'a',
          m: {
          }
        },
        Status: {
        },
        StartTime: {
          t: 't'
        },
        EndTime: {
          t: 't'
        },
        ReasonCodes: {
          n: 'ReasonCode',
          t: 'a',
          m: {
          }
        },
        Description: {
        }
      }
    },
    requestSpotInstances: {
      n: 'RequestSpotInstances',
      i: {
        SpotPrice: {
          r: 1
        },
        InstanceCount: {
          t: 'i'
        },
        Type: {
        },
        ValidFrom: {
          t: 't'
        },
        ValidUntil: {
          t: 't'
        },
        LaunchGroup: {
        },
        AvailabilityZoneGroup: {
        },
        LaunchSpecification: {
          t: 'o',
          m: {
            ImageId: {
            },
            KeyName: {
            },
            SecurityGroups: {
              n: 'GroupSet',
              t: 'a',
              m: {
                n: 'Item',
                t: 'o',
                m: {
                  GroupName: {
                  },
                  GroupId: {
                  }
                }
              }
            },
            UserData: {
            },
            AddressingType: {
            },
            InstanceType: {
            },
            Placement: {
              t: 'o',
              m: {
                AvailabilityZone: {
                },
                GroupName: {
                }
              }
            },
            KernelId: {
            },
            RamdiskId: {
            },
            BlockDeviceMappings: {
              n: 'BlockDeviceMapping',
              t: 'a',
              m: {
                n: 'Item',
                t: 'o',
                m: {
                  VirtualName: {
                  },
                  DeviceName: {
                  },
                  Ebs: {
                    t: 'o',
                    m: {
                      SnapshotId: {
                      },
                      VolumeSize: {
                        t: 'i'
                      },
                      DeleteOnTermination: {
                        t: 'b'
                      },
                      VolumeType: {
                      },
                      Iops: {
                        t: 'i'
                      }
                    }
                  },
                  NoDevice: {
                  }
                }
              }
            },
            MonitoringEnabled: {
              t: 'b'
            },
            SubnetId: {
            },
            NetworkInterfaces: {
              n: 'NetworkInterfaceSet',
              t: 'a',
              m: {
                n: 'Item',
                t: 'o',
                m: {
                  NetworkInterfaceId: {
                  },
                  DeviceIndex: {
                    t: 'i'
                  },
                  SubnetId: {
                  },
                  Description: {
                  },
                  PrivateIpAddress: {
                  },
                  Groups: {
                    n: 'SecurityGroupId',
                    t: 'a',
                    m: {
                    }
                  },
                  DeleteOnTermination: {
                    t: 'b'
                  },
                  PrivateIpAddresses: {
                    n: 'PrivateIpAddressesSet',
                    t: 'a',
                    m: {
                      n: 'Item',
                      t: 'o',
                      m: {
                        PrivateIpAddress: {
                          r: 1
                        },
                        Primary: {
                          t: 'b'
                        }
                      }
                    }
                  },
                  SecondaryPrivateIpAddressCount: {
                    t: 'i'
                  }
                }
              }
            },
            IamInstanceProfile: {
              t: 'o',
              m: {
                Arn: {
                },
                Name: {
                }
              }
            },
            EbsOptimized: {
              t: 'b'
            }
          }
        }
      }
    },
    resetImageAttribute: {
      n: 'ResetImageAttribute',
      i: {
        ImageId: {
          r: 1
        },
        Attribute: {
          r: 1
        }
      }
    },
    resetInstanceAttribute: {
      n: 'ResetInstanceAttribute',
      i: {
        InstanceId: {
          r: 1
        },
        Attribute: {
          r: 1
        }
      }
    },
    resetNetworkInterfaceAttribute: {
      n: 'ResetNetworkInterfaceAttribute',
      i: {
        NetworkInterfaceId: {
          r: 1
        },
        SourceDestCheck: {
        }
      }
    },
    resetSnapshotAttribute: {
      n: 'ResetSnapshotAttribute',
      i: {
        SnapshotId: {
          r: 1
        },
        Attribute: {
          r: 1
        }
      }
    },
    revokeSecurityGroupEgress: {
      n: 'RevokeSecurityGroupEgress',
      i: {
        GroupId: {
          r: 1
        },
        SourceSecurityGroupName: {
        },
        SourceSecurityGroupOwnerId: {
        },
        IpProtocol: {
        },
        FromPort: {
          t: 'i'
        },
        ToPort: {
          t: 'i'
        },
        CidrIp: {
        },
        IpPermissions: {
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              IpProtocol: {
              },
              FromPort: {
                t: 'i'
              },
              ToPort: {
                t: 'i'
              },
              UserIdGroupPairs: {
                n: 'Groups',
                t: 'a',
                m: {
                  n: 'Item',
                  t: 'o',
                  m: {
                    UserId: {
                    },
                    GroupName: {
                    },
                    GroupId: {
                    }
                  }
                }
              },
              IpRanges: {
                n: 'IpRanges',
                t: 'a',
                m: {
                  n: 'Item',
                  t: 'o',
                  m: {
                    CidrIp: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    revokeSecurityGroupIngress: {
      n: 'RevokeSecurityGroupIngress',
      i: {
        GroupName: {
        },
        GroupId: {
        },
        SourceSecurityGroupName: {
        },
        SourceSecurityGroupOwnerId: {
        },
        IpProtocol: {
        },
        FromPort: {
          t: 'i'
        },
        ToPort: {
          t: 'i'
        },
        CidrIp: {
        },
        IpPermissions: {
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              IpProtocol: {
              },
              FromPort: {
                t: 'i'
              },
              ToPort: {
                t: 'i'
              },
              UserIdGroupPairs: {
                n: 'Groups',
                t: 'a',
                m: {
                  n: 'Item',
                  t: 'o',
                  m: {
                    UserId: {
                    },
                    GroupName: {
                    },
                    GroupId: {
                    }
                  }
                }
              },
              IpRanges: {
                n: 'IpRanges',
                t: 'a',
                m: {
                  n: 'Item',
                  t: 'o',
                  m: {
                    CidrIp: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    runInstances: {
      n: 'RunInstances',
      i: {
        ImageId: {
          r: 1
        },
        MinCount: {
          t: 'i',
          r: 1
        },
        MaxCount: {
          t: 'i',
          r: 1
        },
        KeyName: {
        },
        SecurityGroups: {
          n: 'SecurityGroup',
          t: 'a',
          m: {
          }
        },
        SecurityGroupIds: {
          n: 'SecurityGroupId',
          t: 'a',
          m: {
          }
        },
        UserData: {
        },
        AddressingType: {
        },
        InstanceType: {
        },
        Placement: {
          t: 'o',
          m: {
            AvailabilityZone: {
            },
            GroupName: {
            },
            Tenancy: {
            }
          }
        },
        KernelId: {
        },
        RamdiskId: {
        },
        BlockDeviceMappings: {
          n: 'BlockDeviceMapping',
          t: 'a',
          m: {
            n: 'BlockDeviceMapping',
            t: 'o',
            m: {
              VirtualName: {
              },
              DeviceName: {
              },
              Ebs: {
                t: 'o',
                m: {
                  SnapshotId: {
                  },
                  VolumeSize: {
                    t: 'i'
                  },
                  DeleteOnTermination: {
                    t: 'b'
                  },
                  VolumeType: {
                  },
                  Iops: {
                    t: 'i'
                  }
                }
              },
              NoDevice: {
              }
            }
          }
        },
        Monitoring: {
          t: 'o',
          m: {
            Enabled: {
              t: 'b',
              r: 1
            }
          }
        },
        SubnetId: {
        },
        DisableApiTermination: {
          t: 'b'
        },
        InstanceInitiatedShutdownBehavior: {
        },
        License: {
          t: 'o',
          m: {
            Pool: {
            }
          }
        },
        PrivateIpAddress: {
        },
        ClientToken: {
        },
        AdditionalInfo: {
        },
        NetworkInterfaces: {
          n: 'NetworkInterface',
          t: 'a',
          m: {
            n: 'Item',
            t: 'o',
            m: {
              NetworkInterfaceId: {
              },
              DeviceIndex: {
                t: 'i'
              },
              SubnetId: {
              },
              Description: {
              },
              PrivateIpAddress: {
              },
              Groups: {
                n: 'SecurityGroupId',
                t: 'a',
                m: {
                }
              },
              DeleteOnTermination: {
                t: 'b'
              },
              PrivateIpAddresses: {
                n: 'PrivateIpAddressesSet',
                t: 'a',
                m: {
                  n: 'Item',
                  t: 'o',
                  m: {
                    PrivateIpAddress: {
                      r: 1
                    },
                    Primary: {
                      t: 'b'
                    }
                  }
                }
              },
              SecondaryPrivateIpAddressCount: {
                t: 'i'
              }
            }
          }
        },
        IamInstanceProfile: {
          t: 'o',
          m: {
            Arn: {
            },
            Name: {
            }
          }
        },
        EbsOptimized: {
          t: 'b'
        }
      }
    },
    startInstances: {
      n: 'StartInstances',
      i: {
        InstanceIds: {
          n: 'InstanceId',
          t: 'a',
          m: {
          },
          r: 1
        },
        AdditionalInfo: {
        }
      }
    },
    stopInstances: {
      n: 'StopInstances',
      i: {
        InstanceIds: {
          n: 'InstanceId',
          t: 'a',
          m: {
          },
          r: 1
        },
        Force: {
          t: 'b'
        }
      }
    },
    terminateInstances: {
      n: 'TerminateInstances',
      i: {
        InstanceIds: {
          n: 'InstanceId',
          t: 'a',
          m: {
          },
          r: 1
        }
      }
    },
    unassignPrivateIpAddresses: {
      n: 'UnassignPrivateIpAddresses',
      i: {
        NetworkInterfaceId: {
          r: 1
        },
        PrivateIpAddresses: {
          n: 'PrivateIpAddress',
          t: 'a',
          m: {
          },
          r: 1
        }
      }
    },
    unmonitorInstances: {
      n: 'UnmonitorInstances',
      i: {
        InstanceIds: {
          n: 'InstanceId',
          t: 'a',
          m: {
          },
          r: 1
        }
      }
    }
  }
};