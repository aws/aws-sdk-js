var AWS = require('../core');

AWS.EC2.prototype.api = {
  format: 'query',
  apiVersion: '2012-07-20',
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
      },
      o: {
        PublicIp: {
          n: 'publicIp'
        },
        Domain: {
          n: 'domain'
        },
        AllocationId: {
          n: 'allocationId'
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
            n: 'PrivateIpAddress'
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
      },
      o: {
        AssociationId: {
          n: 'associationId'
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
      },
      o: {
        AssociationId: {
          n: 'associationId'
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
      },
      o: {
        AttachmentId: {
          n: 'attachmentId'
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
      },
      o: {
        Attachment: {
          n: 'attachment',
          t: 'o',
          m: {
            VolumeId: {
              n: 'volumeId'
            },
            InstanceId: {
              n: 'instanceId'
            },
            Device: {
              n: 'device'
            },
            State: {
              n: 'status'
            },
            AttachTime: {
              n: 'attachTime',
              t: 't'
            },
            DeleteOnTermination: {
              n: 'deleteOnTermination',
              t: 'b'
            }
          }
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
      },
      o: {
        VpcAttachement: {
          n: 'attachment',
          t: 'o',
          m: {
            VpcId: {
              n: 'vpcId'
            },
            State: {
              n: 'state'
            }
          }
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
      },
      o: {
        BundleTask: {
          n: 'bundleInstanceTask',
          t: 'o',
          m: {
            InstanceId: {
              n: 'instanceId'
            },
            BundleId: {
              n: 'bundleId'
            },
            State: {
              n: 'state'
            },
            StartTime: {
              n: 'startTime',
              t: 't'
            },
            UpdateTime: {
              n: 'updateTime',
              t: 't'
            },
            Storage: {
              n: 'storage',
              t: 'o',
              m: {
                S3: {
                  n: 'S3',
                  t: 'o',
                  m: {
                    Bucket: {
                      n: 'bucket'
                    },
                    Prefix: {
                      n: 'prefix'
                    },
                    AWSAccessKeyId: {
                      n: 'AWSAccessKeyId'
                    },
                    UploadPolicy: {
                      n: 'uploadPolicy'
                    },
                    UploadPolicySignature: {
                      n: 'uploadPolicySignature'
                    }
                  }
                }
              }
            },
            Progress: {
              n: 'progress'
            },
            BundleTaskError: {
              n: 'error',
              t: 'o',
              m: {
                Code: {
                  n: 'code'
                },
                Message: {
                  n: 'message'
                }
              }
            }
          }
        }
      }
    },
    cancelBundleTask: {
      n: 'CancelBundleTask',
      i: {
        BundleId: {
          r: 1
        }
      },
      o: {
        BundleTask: {
          n: 'bundleInstanceTask',
          t: 'o',
          m: {
            InstanceId: {
              n: 'instanceId'
            },
            BundleId: {
              n: 'bundleId'
            },
            State: {
              n: 'state'
            },
            StartTime: {
              n: 'startTime',
              t: 't'
            },
            UpdateTime: {
              n: 'updateTime',
              t: 't'
            },
            Storage: {
              n: 'storage',
              t: 'o',
              m: {
                S3: {
                  n: 'S3',
                  t: 'o',
                  m: {
                    Bucket: {
                      n: 'bucket'
                    },
                    Prefix: {
                      n: 'prefix'
                    },
                    AWSAccessKeyId: {
                      n: 'AWSAccessKeyId'
                    },
                    UploadPolicy: {
                      n: 'uploadPolicy'
                    },
                    UploadPolicySignature: {
                      n: 'uploadPolicySignature'
                    }
                  }
                }
              }
            },
            Progress: {
              n: 'progress'
            },
            BundleTaskError: {
              n: 'error',
              t: 'o',
              m: {
                Code: {
                  n: 'code'
                },
                Message: {
                  n: 'message'
                }
              }
            }
          }
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
      },
      o: {
        ReservedInstancesListings: {
          n: 'reservedInstancesListingsSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ReservedInstancesListingId: {
                n: 'reservedInstancesListingId'
              },
              ReservedInstancesId: {
                n: 'reservedInstancesId'
              },
              CreateDate: {
                n: 'createDate',
                t: 't'
              },
              UpdateDate: {
                n: 'updateDate',
                t: 't'
              },
              Status: {
                n: 'status'
              },
              StatusMessage: {
                n: 'statusMessage'
              },
              InstanceCounts: {
                n: 'instanceCounts',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    State: {
                      n: 'state'
                    },
                    InstanceCount: {
                      n: 'instanceCount',
                      t: 'i'
                    }
                  }
                }
              },
              PriceSchedules: {
                n: 'priceSchedules',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Term: {
                      n: 'term',
                      t: 'i'
                    },
                    Price: {
                      n: 'price',
                      t: 'n'
                    },
                    CurrencyCode: {
                      n: 'currencyCode'
                    },
                    Active: {
                      n: 'active',
                      t: 'b'
                    }
                  }
                }
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              ClientToken: {
                n: 'clientToken'
              }
            }
          }
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
            n: 'SpotInstanceRequestId'
          },
          r: 1
        }
      },
      o: {
        CancelledSpotInstanceRequests: {
          n: 'spotInstanceRequestSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              SpotInstanceRequestId: {
                n: 'spotInstanceRequestId'
              },
              State: {
                n: 'state'
              }
            }
          }
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
      },
      o: {
        OwnerId: {
          n: 'ownerId'
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
          n: 'IpAddress',
          r: 1
        },
        BgpAsn: {
          t: 'i',
          r: 1
        }
      },
      o: {
        CustomerGateway: {
          n: 'customerGateway',
          t: 'o',
          m: {
            CustomerGatewayId: {
              n: 'customerGatewayId'
            },
            State: {
              n: 'state'
            },
            Type: {
              n: 'type'
            },
            IpAddress: {
              n: 'ipAddress'
            },
            BgpAsn: {
              n: 'bgpAsn'
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            }
          }
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
                  n: 'Item'
                }
              }
            }
          },
          r: 1
        }
      },
      o: {
        DhcpOptions: {
          n: 'dhcpOptions',
          t: 'o',
          m: {
            DhcpOptionsId: {
              n: 'dhcpOptionsId'
            },
            DhcpConfigurations: {
              n: 'dhcpConfigurationSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Values: {
                    n: 'valueSet',
                    t: 'a',
                    m: {
                      n: 'item'
                    }
                  }
                }
              }
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            }
          }
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
      },
      o: {
        ImageId: {
          n: 'imageId'
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
      },
      o: {
        ExportTask: {
          n: 'exportTask',
          t: 'o',
          m: {
            ExportTaskId: {
              n: 'exportTaskId'
            },
            Description: {
              n: 'description'
            },
            State: {
              n: 'state'
            },
            StatusMessage: {
              n: 'statusMessage'
            },
            InstanceExportDetails: {
              n: 'instanceExport',
              t: 'o',
              m: {
                InstanceId: {
                  n: 'instanceId'
                },
                TargetEnvironment: {
                  n: 'targetEnvironment'
                }
              }
            },
            ExportToS3Task: {
              n: 'exportToS3',
              t: 'o',
              m: {
                DiskImageFormat: {
                  n: 'diskImageFormat'
                },
                ContainerFormat: {
                  n: 'containerFormat'
                },
                S3Bucket: {
                  n: 's3Bucket'
                },
                S3Key: {
                  n: 's3Key'
                }
              }
            }
          }
        }
      }
    },
    createInternetGateway: {
      n: 'CreateInternetGateway',
      i: null,
      o: {
        InternetGateway: {
          n: 'internetGateway',
          t: 'o',
          m: {
            InternetGatewayId: {
              n: 'internetGatewayId'
            },
            Attachments: {
              n: 'attachmentSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  VpcId: {
                    n: 'vpcId'
                  },
                  State: {
                    n: 'state'
                  }
                }
              }
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            }
          }
        }
      }
    },
    createKeyPair: {
      n: 'CreateKeyPair',
      i: {
        KeyName: {
          r: 1
        }
      },
      o: {
        KeyPair: {
          n: 'keyPair',
          t: 'o',
          m: {
            KeyName: {
              n: 'keyName'
            },
            KeyFingerprint: {
              n: 'keyFingerprint'
            },
            KeyMaterial: {
              n: 'keyMaterial'
            }
          }
        }
      }
    },
    createNetworkAcl: {
      n: 'CreateNetworkAcl',
      i: {
        VpcId: {
          r: 1
        }
      },
      o: {
        NetworkAcl: {
          n: 'networkAcl',
          t: 'o',
          m: {
            NetworkAclId: {
              n: 'networkAclId'
            },
            VpcId: {
              n: 'vpcId'
            },
            IsDefault: {
              n: 'default',
              t: 'b'
            },
            Entries: {
              n: 'entrySet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  RuleNumber: {
                    n: 'ruleNumber',
                    t: 'i'
                  },
                  Protocol: {
                    n: 'protocol'
                  },
                  RuleAction: {
                    n: 'ruleAction'
                  },
                  Egress: {
                    n: 'egress',
                    t: 'b'
                  },
                  CidrBlock: {
                    n: 'cidrBlock'
                  },
                  IcmpTypeCode: {
                    n: 'icmpTypeCode',
                    t: 'o',
                    m: {
                      Type: {
                        n: 'type',
                        t: 'i'
                      },
                      Code: {
                        n: 'code',
                        t: 'i'
                      }
                    }
                  },
                  PortRange: {
                    n: 'portRange',
                    t: 'o',
                    m: {
                      From: {
                        n: 'from',
                        t: 'i'
                      },
                      To: {
                        n: 'to',
                        t: 'i'
                      }
                    }
                  }
                }
              }
            },
            Associations: {
              n: 'associationSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  NetworkAclAssociationId: {
                    n: 'networkAclAssociationId'
                  },
                  NetworkAclId: {
                    n: 'networkAclId'
                  },
                  SubnetId: {
                    n: 'subnetId'
                  }
                }
              }
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            }
          }
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
            n: 'SecurityGroupId'
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
      },
      o: {
        NetworkInterface: {
          n: 'networkInterface',
          t: 'o',
          m: {
            NetworkInterfaceId: {
              n: 'networkInterfaceId'
            },
            SubnetId: {
              n: 'subnetId'
            },
            VpcId: {
              n: 'vpcId'
            },
            AvailabilityZone: {
              n: 'availabilityZone'
            },
            Description: {
              n: 'description'
            },
            OwnerId: {
              n: 'ownerId'
            },
            RequesterId: {
              n: 'requesterId'
            },
            RequesterManaged: {
              n: 'requesterManaged',
              t: 'b'
            },
            Status: {
              n: 'status'
            },
            MacAddress: {
              n: 'macAddress'
            },
            PrivateIpAddress: {
              n: 'privateIpAddress'
            },
            PrivateDnsName: {
              n: 'privateDnsName'
            },
            SourceDestCheck: {
              n: 'sourceDestCheck',
              t: 'b'
            },
            Groups: {
              n: 'groupSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  GroupName: {
                    n: 'groupName'
                  },
                  GroupId: {
                    n: 'groupId'
                  }
                }
              }
            },
            Attachment: {
              n: 'attachment',
              t: 'o',
              m: {
                AttachmentId: {
                  n: 'attachmentId'
                },
                InstanceId: {
                  n: 'instanceId'
                },
                InstanceOwnerId: {
                  n: 'instanceOwnerId'
                },
                DeviceIndex: {
                  n: 'deviceIndex',
                  t: 'i'
                },
                Status: {
                  n: 'status'
                },
                AttachTime: {
                  n: 'attachTime',
                  t: 't'
                },
                DeleteOnTermination: {
                  n: 'deleteOnTermination',
                  t: 'b'
                }
              }
            },
            Association: {
              n: 'association',
              t: 'o',
              m: {
                PublicIp: {
                  n: 'publicIp'
                },
                IpOwnerId: {
                  n: 'ipOwnerId'
                },
                AllocationId: {
                  n: 'allocationId'
                },
                AssociationId: {
                  n: 'associationId'
                }
              }
            },
            TagSet: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            },
            PrivateIpAddresses: {
              n: 'privateIpAddressesSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  PrivateIpAddress: {
                    n: 'privateIpAddress'
                  },
                  Primary: {
                    n: 'primary',
                    t: 'b'
                  },
                  Association: {
                    n: 'association',
                    t: 'o',
                    m: {
                      PublicIp: {
                        n: 'publicIp'
                      },
                      IpOwnerId: {
                        n: 'ipOwnerId'
                      },
                      AllocationId: {
                        n: 'allocationId'
                      },
                      AssociationId: {
                        n: 'associationId'
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
      },
      o: {
        ReservedInstancesListings: {
          n: 'reservedInstancesListingsSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ReservedInstancesListingId: {
                n: 'reservedInstancesListingId'
              },
              ReservedInstancesId: {
                n: 'reservedInstancesId'
              },
              CreateDate: {
                n: 'createDate',
                t: 't'
              },
              UpdateDate: {
                n: 'updateDate',
                t: 't'
              },
              Status: {
                n: 'status'
              },
              StatusMessage: {
                n: 'statusMessage'
              },
              InstanceCounts: {
                n: 'instanceCounts',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    State: {
                      n: 'state'
                    },
                    InstanceCount: {
                      n: 'instanceCount',
                      t: 'i'
                    }
                  }
                }
              },
              PriceSchedules: {
                n: 'priceSchedules',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Term: {
                      n: 'term',
                      t: 'i'
                    },
                    Price: {
                      n: 'price',
                      t: 'n'
                    },
                    CurrencyCode: {
                      n: 'currencyCode'
                    },
                    Active: {
                      n: 'active',
                      t: 'b'
                    }
                  }
                }
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              ClientToken: {
                n: 'clientToken'
              }
            }
          }
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
      },
      o: {
        RouteTable: {
          n: 'routeTable',
          t: 'o',
          m: {
            RouteTableId: {
              n: 'routeTableId'
            },
            VpcId: {
              n: 'vpcId'
            },
            Routes: {
              n: 'routeSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  DestinationCidrBlock: {
                    n: 'destinationCidrBlock'
                  },
                  GatewayId: {
                    n: 'gatewayId'
                  },
                  InstanceId: {
                    n: 'instanceId'
                  },
                  InstanceOwnerId: {
                    n: 'instanceOwnerId'
                  },
                  NetworkInterfaceId: {
                    n: 'networkInterfaceId'
                  },
                  State: {
                    n: 'state'
                  }
                }
              }
            },
            Associations: {
              n: 'associationSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  RouteTableAssociationId: {
                    n: 'routeTableAssociationId'
                  },
                  RouteTableId: {
                    n: 'routeTableId'
                  },
                  SubnetId: {
                    n: 'subnetId'
                  },
                  Main: {
                    n: 'main',
                    t: 'b'
                  }
                }
              }
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            },
            PropagatingVgws: {
              n: 'propagatingVgwSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  GatewayId: {
                    n: 'gatewayId'
                  }
                }
              }
            },
            PropagatedRoutes: {
              n: 'propagatedRouteSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  DestinationCidrBlock: {
                    n: 'destinationCidrBlock'
                  },
                  GatewayId: {
                    n: 'gatewayId'
                  },
                  Status: {
                    n: 'status'
                  },
                  SourceId: {
                    n: 'sourceId'
                  }
                }
              }
            }
          }
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
          n: 'GroupDescription',
          r: 1
        },
        VpcId: {
        }
      },
      o: {
        GroupId: {
          n: 'groupId'
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
      },
      o: {
        Snapshot: {
          n: 'snapshot',
          t: 'o',
          m: {
            SnapshotId: {
              n: 'snapshotId'
            },
            VolumeId: {
              n: 'volumeId'
            },
            State: {
              n: 'status'
            },
            StartTime: {
              n: 'startTime',
              t: 't'
            },
            Progress: {
              n: 'progress'
            },
            OwnerId: {
              n: 'ownerId'
            },
            Description: {
              n: 'description'
            },
            VolumeSize: {
              n: 'volumeSize',
              t: 'i'
            },
            OwnerAlias: {
              n: 'ownerAlias'
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            }
          }
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
      },
      o: {
        SpotDatafeedSubscription: {
          n: 'spotDatafeedSubscription',
          t: 'o',
          m: {
            OwnerId: {
              n: 'ownerId'
            },
            Bucket: {
              n: 'bucket'
            },
            Prefix: {
              n: 'prefix'
            },
            State: {
              n: 'state'
            },
            Fault: {
              n: 'fault',
              t: 'o',
              m: {
                Code: {
                  n: 'code'
                },
                Message: {
                  n: 'message'
                }
              }
            }
          }
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
      },
      o: {
        Subnet: {
          n: 'subnet',
          t: 'o',
          m: {
            SubnetId: {
              n: 'subnetId'
            },
            State: {
              n: 'state'
            },
            VpcId: {
              n: 'vpcId'
            },
            CidrBlock: {
              n: 'cidrBlock'
            },
            AvailableIpAddressCount: {
              n: 'availableIpAddressCount',
              t: 'i'
            },
            AvailabilityZone: {
              n: 'availabilityZone'
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            }
          }
        }
      }
    },
    createTags: {
      n: 'CreateTags',
      i: {
        Resources: {
          n: 'ResourceId',
          t: 'a',
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
      },
      o: {
        Volume: {
          n: 'volume',
          t: 'o',
          m: {
            VolumeId: {
              n: 'volumeId'
            },
            Size: {
              n: 'size',
              t: 'i'
            },
            SnapshotId: {
              n: 'snapshotId'
            },
            AvailabilityZone: {
              n: 'availabilityZone'
            },
            State: {
              n: 'status'
            },
            CreateTime: {
              n: 'createTime',
              t: 't'
            },
            Attachments: {
              n: 'attachmentSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  VolumeId: {
                    n: 'volumeId'
                  },
                  InstanceId: {
                    n: 'instanceId'
                  },
                  Device: {
                    n: 'device'
                  },
                  State: {
                    n: 'status'
                  },
                  AttachTime: {
                    n: 'attachTime',
                    t: 't'
                  },
                  DeleteOnTermination: {
                    n: 'deleteOnTermination',
                    t: 'b'
                  }
                }
              }
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            },
            VolumeType: {
              n: 'volumeType'
            },
            Iops: {
              n: 'iops',
              t: 'i'
            }
          }
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
      },
      o: {
        Vpc: {
          n: 'vpc',
          t: 'o',
          m: {
            VpcId: {
              n: 'vpcId'
            },
            State: {
              n: 'state'
            },
            CidrBlock: {
              n: 'cidrBlock'
            },
            DhcpOptionsId: {
              n: 'dhcpOptionsId'
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            },
            InstanceTenancy: {
              n: 'instanceTenancy'
            }
          }
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
      },
      o: {
        VpnConnection: {
          n: 'vpnConnection',
          t: 'o',
          m: {
            VpnConnectionId: {
              n: 'vpnConnectionId'
            },
            State: {
              n: 'state'
            },
            CustomerGatewayConfiguration: {
              n: 'customerGatewayConfiguration'
            },
            Type: {
              n: 'type'
            },
            CustomerGatewayId: {
              n: 'customerGatewayId'
            },
            VpnGatewayId: {
              n: 'vpnGatewayId'
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            },
            VgwTelemetry: {
              n: 'vgwTelemetry',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  OutsideIpAddress: {
                    n: 'outsideIpAddress'
                  },
                  Status: {
                    n: 'status'
                  },
                  LastStatusChange: {
                    n: 'lastStatusChange',
                    t: 't'
                  },
                  StatusMessage: {
                    n: 'statusMessage'
                  },
                  AcceptedRouteCount: {
                    n: 'acceptedRouteCount',
                    t: 'i'
                  }
                }
              }
            },
            Options: {
              n: 'options',
              t: 'o',
              m: {
                StaticRoutesOnly: {
                  n: 'staticRoutesOnly',
                  t: 'b'
                }
              }
            },
            Routes: {
              n: 'routes',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  DestinationCidrBlock: {
                    n: 'destinationCidrBlock'
                  },
                  Source: {
                    n: 'source'
                  },
                  State: {
                    n: 'state'
                  }
                }
              }
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
      },
      o: {
        VpnGateway: {
          n: 'vpnGateway',
          t: 'o',
          m: {
            VpnGatewayId: {
              n: 'vpnGatewayId'
            },
            State: {
              n: 'state'
            },
            Type: {
              n: 'type'
            },
            AvailabilityZone: {
              n: 'availabilityZone'
            },
            VpcAttachments: {
              n: 'attachments',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  VpcId: {
                    n: 'vpcId'
                  },
                  State: {
                    n: 'state'
                  }
                }
              }
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            }
          }
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
      i: null
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
            n: 'PublicIp'
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
                  n: 'Item'
                }
              }
            }
          }
        },
        AllocationIds: {
          n: 'AllocationId',
          t: 'a',
          m: {
            n: 'AllocationId'
          }
        }
      },
      o: {
        Addresses: {
          n: 'addressesSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              InstanceId: {
                n: 'instanceId'
              },
              PublicIp: {
                n: 'publicIp'
              },
              AllocationId: {
                n: 'allocationId'
              },
              AssociationId: {
                n: 'associationId'
              },
              Domain: {
                n: 'domain'
              },
              NetworkInterfaceId: {
                n: 'networkInterfaceId'
              },
              NetworkInterfaceOwnerId: {
                n: 'networkInterfaceOwnerId'
              },
              PrivateIpAddress: {
                n: 'privateIpAddress'
              }
            }
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
            n: 'ZoneName'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        AvailabilityZones: {
          n: 'availabilityZoneInfo',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ZoneName: {
                n: 'zoneName'
              },
              State: {
                n: 'zoneState'
              },
              RegionName: {
                n: 'regionName'
              },
              Messages: {
                n: 'messageSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Message: {
                      n: 'message'
                    }
                  }
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
            n: 'BundleId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        BundleTasks: {
          n: 'bundleInstanceTasksSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              InstanceId: {
                n: 'instanceId'
              },
              BundleId: {
                n: 'bundleId'
              },
              State: {
                n: 'state'
              },
              StartTime: {
                n: 'startTime',
                t: 't'
              },
              UpdateTime: {
                n: 'updateTime',
                t: 't'
              },
              Storage: {
                n: 'storage',
                t: 'o',
                m: {
                  S3: {
                    n: 'S3',
                    t: 'o',
                    m: {
                      Bucket: {
                        n: 'bucket'
                      },
                      Prefix: {
                        n: 'prefix'
                      },
                      AWSAccessKeyId: {
                        n: 'AWSAccessKeyId'
                      },
                      UploadPolicy: {
                        n: 'uploadPolicy'
                      },
                      UploadPolicySignature: {
                        n: 'uploadPolicySignature'
                      }
                    }
                  }
                }
              },
              Progress: {
                n: 'progress'
              },
              BundleTaskError: {
                n: 'error',
                t: 'o',
                m: {
                  Code: {
                    n: 'code'
                  },
                  Message: {
                    n: 'message'
                  }
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
                  n: 'Item'
                }
              }
            }
          }
        },
        ConversionTaskIds: {
          n: 'ConversionTaskId',
          t: 'a',
          m: {
            n: 'Item'
          }
        }
      },
      o: {
        ConversionTasks: {
          n: 'conversionTasks',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ConversionTaskId: {
                n: 'conversionTaskId'
              },
              ExpirationTime: {
                n: 'expirationTime'
              },
              ImportInstance: {
                n: 'importInstance',
                t: 'o',
                m: {
                  Volumes: {
                    n: 'volumes',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        BytesConverted: {
                          n: 'bytesConverted',
                          t: 'i'
                        },
                        AvailabilityZone: {
                          n: 'availabilityZone'
                        },
                        Image: {
                          n: 'image',
                          t: 'o',
                          m: {
                            Format: {
                              n: 'format'
                            },
                            Size: {
                              n: 'size',
                              t: 'i'
                            },
                            ImportManifestUrl: {
                              n: 'importManifestUrl'
                            },
                            Checksum: {
                              n: 'checksum'
                            }
                          }
                        },
                        Volume: {
                          n: 'volume',
                          t: 'o',
                          m: {
                            Size: {
                              n: 'size',
                              t: 'i'
                            },
                            Id: {
                              n: 'id'
                            }
                          }
                        },
                        Status: {
                          n: 'status'
                        },
                        StatusMessage: {
                          n: 'statusMessage'
                        },
                        Description: {
                          n: 'description'
                        }
                      }
                    }
                  },
                  InstanceId: {
                    n: 'instanceId'
                  },
                  Platform: {
                    n: 'platform'
                  },
                  Description: {
                    n: 'description'
                  }
                }
              },
              ImportVolume: {
                n: 'importVolume',
                t: 'o',
                m: {
                  BytesConverted: {
                    n: 'bytesConverted',
                    t: 'i'
                  },
                  AvailabilityZone: {
                    n: 'availabilityZone'
                  },
                  Description: {
                    n: 'description'
                  },
                  Image: {
                    n: 'image',
                    t: 'o',
                    m: {
                      Format: {
                        n: 'format'
                      },
                      Size: {
                        n: 'size',
                        t: 'i'
                      },
                      ImportManifestUrl: {
                        n: 'importManifestUrl'
                      },
                      Checksum: {
                        n: 'checksum'
                      }
                    }
                  },
                  Volume: {
                    n: 'volume',
                    t: 'o',
                    m: {
                      Size: {
                        n: 'size',
                        t: 'i'
                      },
                      Id: {
                        n: 'id'
                      }
                    }
                  }
                }
              },
              State: {
                n: 'state'
              },
              StatusMessage: {
                n: 'statusMessage'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              }
            }
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
            n: 'CustomerGatewayId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        CustomerGateways: {
          n: 'customerGatewaySet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              CustomerGatewayId: {
                n: 'customerGatewayId'
              },
              State: {
                n: 'state'
              },
              Type: {
                n: 'type'
              },
              IpAddress: {
                n: 'ipAddress'
              },
              BgpAsn: {
                n: 'bgpAsn'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
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
            n: 'DhcpOptionsId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        DhcpOptions: {
          n: 'dhcpOptionsSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              DhcpOptionsId: {
                n: 'dhcpOptionsId'
              },
              DhcpConfigurations: {
                n: 'dhcpConfigurationSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Values: {
                      n: 'valueSet',
                      t: 'a',
                      m: {
                        n: 'item'
                      }
                    }
                  }
                }
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
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
            n: 'ExportTaskId'
          }
        }
      },
      o: {
        ExportTasks: {
          n: 'exportTaskSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ExportTaskId: {
                n: 'exportTaskId'
              },
              Description: {
                n: 'description'
              },
              State: {
                n: 'state'
              },
              StatusMessage: {
                n: 'statusMessage'
              },
              InstanceExportDetails: {
                n: 'instanceExport',
                t: 'o',
                m: {
                  InstanceId: {
                    n: 'instanceId'
                  },
                  TargetEnvironment: {
                    n: 'targetEnvironment'
                  }
                }
              },
              ExportToS3Task: {
                n: 'exportToS3',
                t: 'o',
                m: {
                  DiskImageFormat: {
                    n: 'diskImageFormat'
                  },
                  ContainerFormat: {
                    n: 'containerFormat'
                  },
                  S3Bucket: {
                    n: 's3Bucket'
                  },
                  S3Key: {
                    n: 's3Key'
                  }
                }
              }
            }
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
      },
      o: {
        ImageAttribute: {
          n: 'imageAttribute',
          t: 'o',
          m: {
            ImageId: {
              n: 'imageId'
            },
            LaunchPermissions: {
              n: 'launchPermission',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  UserId: {
                    n: 'userId'
                  },
                  Group: {
                    n: 'group'
                  }
                }
              }
            },
            ProductCodes: {
              n: 'productCodes',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  ProductCodeId: {
                    n: 'productCode'
                  },
                  ProductCodeType: {
                    n: 'type'
                  }
                }
              }
            },
            KernelId: {
              n: 'kernel',
              t: 'o',
              m: {
                Value: {
                  n: 'value'
                }
              }
            },
            RamdiskId: {
              n: 'ramdisk',
              t: 'o',
              m: {
                Value: {
                  n: 'value'
                }
              }
            },
            Description: {
              n: 'description',
              t: 'o',
              m: {
                Value: {
                  n: 'value'
                }
              }
            },
            BlockDeviceMappings: {
              n: 'blockDeviceMapping',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  VirtualName: {
                    n: 'virtualName'
                  },
                  DeviceName: {
                    n: 'deviceName'
                  },
                  Ebs: {
                    n: 'ebs',
                    t: 'o',
                    m: {
                      SnapshotId: {
                        n: 'snapshotId'
                      },
                      VolumeSize: {
                        n: 'volumeSize',
                        t: 'i'
                      },
                      DeleteOnTermination: {
                        n: 'deleteOnTermination',
                        t: 'b'
                      },
                      VolumeType: {
                        n: 'volumeType'
                      },
                      Iops: {
                        n: 'iops',
                        t: 'i'
                      }
                    }
                  },
                  NoDevice: {
                    n: 'noDevice'
                  }
                }
              }
            }
          }
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
            n: 'ImageId'
          }
        },
        Owners: {
          n: 'Owner',
          t: 'a',
          m: {
            n: 'Owner'
          }
        },
        ExecutableUsers: {
          n: 'ExecutableBy',
          t: 'a',
          m: {
            n: 'ExecutableBy'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        Images: {
          n: 'imagesSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ImageId: {
                n: 'imageId'
              },
              ImageLocation: {
                n: 'imageLocation'
              },
              State: {
                n: 'imageState'
              },
              OwnerId: {
                n: 'imageOwnerId'
              },
              Public: {
                n: 'isPublic',
                t: 'b'
              },
              ProductCodes: {
                n: 'productCodes',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    ProductCodeId: {
                      n: 'productCode'
                    },
                    ProductCodeType: {
                      n: 'type'
                    }
                  }
                }
              },
              Architecture: {
                n: 'architecture'
              },
              ImageType: {
                n: 'imageType'
              },
              KernelId: {
                n: 'kernelId'
              },
              RamdiskId: {
                n: 'ramdiskId'
              },
              Platform: {
                n: 'platform'
              },
              StateReason: {
                n: 'stateReason',
                t: 'o',
                m: {
                  Code: {
                    n: 'code'
                  },
                  Message: {
                    n: 'message'
                  }
                }
              },
              ImageOwnerAlias: {
                n: 'imageOwnerAlias'
              },
              Name: {
                n: 'name'
              },
              Description: {
                n: 'description'
              },
              RootDeviceType: {
                n: 'rootDeviceType'
              },
              RootDeviceName: {
                n: 'rootDeviceName'
              },
              BlockDeviceMappings: {
                n: 'blockDeviceMapping',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    VirtualName: {
                      n: 'virtualName'
                    },
                    DeviceName: {
                      n: 'deviceName'
                    },
                    Ebs: {
                      n: 'ebs',
                      t: 'o',
                      m: {
                        SnapshotId: {
                          n: 'snapshotId'
                        },
                        VolumeSize: {
                          n: 'volumeSize',
                          t: 'i'
                        },
                        DeleteOnTermination: {
                          n: 'deleteOnTermination',
                          t: 'b'
                        },
                        VolumeType: {
                          n: 'volumeType'
                        },
                        Iops: {
                          n: 'iops',
                          t: 'i'
                        }
                      }
                    },
                    NoDevice: {
                      n: 'noDevice'
                    }
                  }
                }
              },
              VirtualizationType: {
                n: 'virtualizationType'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              Hypervisor: {
                n: 'hypervisor'
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
      },
      o: {
        InstanceAttribute: {
          n: 'InstanceAttribute',
          t: 'o',
          m: {
            InstanceId: {
              n: 'instanceId'
            },
            InstanceType: {
              n: 'instanceType',
              t: 'o',
              m: {
                Value: {
                  n: 'value'
                }
              }
            },
            KernelId: {
              n: 'kernel',
              t: 'o',
              m: {
                Value: {
                  n: 'value'
                }
              }
            },
            RamdiskId: {
              n: 'ramdisk',
              t: 'o',
              m: {
                Value: {
                  n: 'value'
                }
              }
            },
            UserData: {
              n: 'userData',
              t: 'o',
              m: {
                Value: {
                  n: 'value'
                }
              }
            },
            DisableApiTermination: {
              n: 'disableApiTermination',
              t: 'o',
              m: {
                Value: {
                  n: 'value',
                  t: 'b'
                }
              }
            },
            InstanceInitiatedShutdownBehavior: {
              n: 'instanceInitiatedShutdownBehavior',
              t: 'o',
              m: {
                Value: {
                  n: 'value'
                }
              }
            },
            RootDeviceName: {
              n: 'rootDeviceName',
              t: 'o',
              m: {
                Value: {
                  n: 'value'
                }
              }
            },
            BlockDeviceMappings: {
              n: 'blockDeviceMapping',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  DeviceName: {
                    n: 'deviceName'
                  },
                  Ebs: {
                    n: 'ebs',
                    t: 'o',
                    m: {
                      VolumeId: {
                        n: 'volumeId'
                      },
                      Status: {
                        n: 'status'
                      },
                      AttachTime: {
                        n: 'attachTime',
                        t: 't'
                      },
                      DeleteOnTermination: {
                        n: 'deleteOnTermination',
                        t: 'b'
                      }
                    }
                  }
                }
              }
            },
            ProductCodes: {
              n: 'productCodes',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  ProductCodeId: {
                    n: 'productCode'
                  },
                  ProductCodeType: {
                    n: 'type'
                  }
                }
              }
            },
            EbsOptimized: {
              n: 'ebsOptimized',
              t: 'o',
              m: {
                Value: {
                  n: 'value',
                  t: 'b'
                }
              }
            }
          }
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
            n: 'InstanceId'
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
                  n: 'Item'
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
      },
      o: {
        InstanceStatuses: {
          n: 'instanceStatusSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              InstanceId: {
                n: 'instanceId'
              },
              AvailabilityZone: {
                n: 'availabilityZone'
              },
              Events: {
                n: 'eventsSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Code: {
                      n: 'code'
                    },
                    Description: {
                      n: 'description'
                    },
                    NotBefore: {
                      n: 'notBefore',
                      t: 't'
                    },
                    NotAfter: {
                      n: 'notAfter',
                      t: 't'
                    }
                  }
                }
              },
              InstanceState: {
                n: 'instanceState',
                t: 'o',
                m: {
                  Code: {
                    n: 'code',
                    t: 'i'
                  },
                  Name: {
                    n: 'name'
                  }
                }
              },
              SystemStatus: {
                n: 'systemStatus',
                t: 'o',
                m: {
                  Status: {
                    n: 'status'
                  },
                  Details: {
                    n: 'details',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        Name: {
                          n: 'name'
                        },
                        Status: {
                          n: 'status'
                        },
                        ImpairedSince: {
                          n: 'impairedSince',
                          t: 't'
                        }
                      }
                    }
                  }
                }
              },
              InstanceStatus: {
                n: 'instanceStatus',
                t: 'o',
                m: {
                  Status: {
                    n: 'status'
                  },
                  Details: {
                    n: 'details',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        Name: {
                          n: 'name'
                        },
                        Status: {
                          n: 'status'
                        },
                        ImpairedSince: {
                          n: 'impairedSince',
                          t: 't'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        NextToken: {
          n: 'nextToken'
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
            n: 'InstanceId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        Reservations: {
          n: 'reservationSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ReservationId: {
                n: 'reservationId'
              },
              OwnerId: {
                n: 'ownerId'
              },
              RequesterId: {
                n: 'requesterId'
              },
              Groups: {
                n: 'groupSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    GroupName: {
                      n: 'groupName'
                    },
                    GroupId: {
                      n: 'groupId'
                    }
                  }
                }
              },
              Instances: {
                n: 'instancesSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    InstanceId: {
                      n: 'instanceId'
                    },
                    ImageId: {
                      n: 'imageId'
                    },
                    State: {
                      n: 'instanceState',
                      t: 'o',
                      m: {
                        Code: {
                          n: 'code',
                          t: 'i'
                        },
                        Name: {
                          n: 'name'
                        }
                      }
                    },
                    PrivateDnsName: {
                      n: 'privateDnsName'
                    },
                    PublicDnsName: {
                      n: 'dnsName'
                    },
                    StateTransitionReason: {
                      n: 'reason'
                    },
                    KeyName: {
                      n: 'keyName'
                    },
                    AmiLaunchIndex: {
                      n: 'amiLaunchIndex',
                      t: 'i'
                    },
                    ProductCodes: {
                      n: 'productCodes',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          ProductCodeId: {
                            n: 'productCode'
                          },
                          ProductCodeType: {
                            n: 'type'
                          }
                        }
                      }
                    },
                    InstanceType: {
                      n: 'instanceType'
                    },
                    LaunchTime: {
                      n: 'launchTime',
                      t: 't'
                    },
                    Placement: {
                      n: 'placement',
                      t: 'o',
                      m: {
                        AvailabilityZone: {
                          n: 'availabilityZone'
                        },
                        GroupName: {
                          n: 'groupName'
                        },
                        Tenancy: {
                          n: 'tenancy'
                        }
                      }
                    },
                    KernelId: {
                      n: 'kernelId'
                    },
                    RamdiskId: {
                      n: 'ramdiskId'
                    },
                    Platform: {
                      n: 'platform'
                    },
                    Monitoring: {
                      n: 'monitoring',
                      t: 'o',
                      m: {
                        State: {
                          n: 'state'
                        }
                      }
                    },
                    SubnetId: {
                      n: 'subnetId'
                    },
                    VpcId: {
                      n: 'vpcId'
                    },
                    PrivateIpAddress: {
                      n: 'privateIpAddress'
                    },
                    PublicIpAddress: {
                      n: 'ipAddress'
                    },
                    StateReason: {
                      n: 'stateReason',
                      t: 'o',
                      m: {
                        Code: {
                          n: 'code'
                        },
                        Message: {
                          n: 'message'
                        }
                      }
                    },
                    Architecture: {
                      n: 'architecture'
                    },
                    RootDeviceType: {
                      n: 'rootDeviceType'
                    },
                    RootDeviceName: {
                      n: 'rootDeviceName'
                    },
                    BlockDeviceMappings: {
                      n: 'blockDeviceMapping',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          DeviceName: {
                            n: 'deviceName'
                          },
                          Ebs: {
                            n: 'ebs',
                            t: 'o',
                            m: {
                              VolumeId: {
                                n: 'volumeId'
                              },
                              Status: {
                                n: 'status'
                              },
                              AttachTime: {
                                n: 'attachTime',
                                t: 't'
                              },
                              DeleteOnTermination: {
                                n: 'deleteOnTermination',
                                t: 'b'
                              }
                            }
                          }
                        }
                      }
                    },
                    VirtualizationType: {
                      n: 'virtualizationType'
                    },
                    InstanceLifecycle: {
                      n: 'instanceLifecycle'
                    },
                    SpotInstanceRequestId: {
                      n: 'spotInstanceRequestId'
                    },
                    License: {
                      n: 'license',
                      t: 'o',
                      m: {
                        Pool: {
                          n: 'pool'
                        }
                      }
                    },
                    ClientToken: {
                      n: 'clientToken'
                    },
                    Tags: {
                      n: 'tagSet',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          Key: {
                            n: 'key'
                          },
                          Value: {
                            n: 'value'
                          }
                        }
                      }
                    },
                    SecurityGroups: {
                      n: 'groupSet',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          GroupName: {
                            n: 'groupName'
                          },
                          GroupId: {
                            n: 'groupId'
                          }
                        }
                      }
                    },
                    SourceDestCheck: {
                      n: 'sourceDestCheck',
                      t: 'b'
                    },
                    Hypervisor: {
                      n: 'hypervisor'
                    },
                    NetworkInterfaces: {
                      n: 'networkInterfaceSet',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          NetworkInterfaceId: {
                            n: 'networkInterfaceId'
                          },
                          SubnetId: {
                            n: 'subnetId'
                          },
                          VpcId: {
                            n: 'vpcId'
                          },
                          Description: {
                            n: 'description'
                          },
                          OwnerId: {
                            n: 'ownerId'
                          },
                          Status: {
                            n: 'status'
                          },
                          PrivateIpAddress: {
                            n: 'privateIpAddress'
                          },
                          PrivateDnsName: {
                            n: 'privateDnsName'
                          },
                          SourceDestCheck: {
                            n: 'sourceDestCheck',
                            t: 'b'
                          },
                          Groups: {
                            n: 'groupSet',
                            t: 'a',
                            m: {
                              n: 'item',
                              t: 'o',
                              m: {
                                GroupName: {
                                  n: 'groupName'
                                },
                                GroupId: {
                                  n: 'groupId'
                                }
                              }
                            }
                          },
                          Attachment: {
                            n: 'attachment',
                            t: 'o',
                            m: {
                              AttachmentId: {
                                n: 'attachmentId'
                              },
                              DeviceIndex: {
                                n: 'deviceIndex',
                                t: 'i'
                              },
                              Status: {
                                n: 'status'
                              },
                              AttachTime: {
                                n: 'attachTime',
                                t: 't'
                              },
                              DeleteOnTermination: {
                                n: 'deleteOnTermination',
                                t: 'b'
                              }
                            }
                          },
                          Association: {
                            n: 'association',
                            t: 'o',
                            m: {
                              PublicIp: {
                                n: 'publicIp'
                              },
                              IpOwnerId: {
                                n: 'ipOwnerId'
                              }
                            }
                          }
                        }
                      }
                    },
                    IamInstanceProfile: {
                      n: 'iamInstanceProfile',
                      t: 'o',
                      m: {
                        Arn: {
                          n: 'arn'
                        },
                        Id: {
                          n: 'id'
                        }
                      }
                    },
                    EbsOptimized: {
                      n: 'ebsOptimized',
                      t: 'b'
                    }
                  }
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
            n: 'Item'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        InternetGateways: {
          n: 'internetGatewaySet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              InternetGatewayId: {
                n: 'internetGatewayId'
              },
              Attachments: {
                n: 'attachmentSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    VpcId: {
                      n: 'vpcId'
                    },
                    State: {
                      n: 'state'
                    }
                  }
                }
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
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
            n: 'KeyName'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        KeyPairs: {
          n: 'keySet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              KeyName: {
                n: 'keyName'
              },
              KeyFingerprint: {
                n: 'keyFingerprint'
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
          t: 'a'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        Licenses: {
          n: 'licenseSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              LicenseId: {
                n: 'licenseId'
              },
              Type: {
                n: 'type'
              },
              Pool: {
                n: 'pool'
              },
              Capacities: {
                n: 'capacitySet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Capacity: {
                      n: 'capacity',
                      t: 'i'
                    },
                    InstanceCapacity: {
                      n: 'instanceCapacity',
                      t: 'i'
                    },
                    State: {
                      n: 'state'
                    },
                    EarliestAllowedDeactivationTime: {
                      n: 'earliestAllowedDeactivationTime',
                      t: 't'
                    }
                  }
                }
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
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
            n: 'Item'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        NetworkAcls: {
          n: 'networkAclSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              NetworkAclId: {
                n: 'networkAclId'
              },
              VpcId: {
                n: 'vpcId'
              },
              IsDefault: {
                n: 'default',
                t: 'b'
              },
              Entries: {
                n: 'entrySet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    RuleNumber: {
                      n: 'ruleNumber',
                      t: 'i'
                    },
                    Protocol: {
                      n: 'protocol'
                    },
                    RuleAction: {
                      n: 'ruleAction'
                    },
                    Egress: {
                      n: 'egress',
                      t: 'b'
                    },
                    CidrBlock: {
                      n: 'cidrBlock'
                    },
                    IcmpTypeCode: {
                      n: 'icmpTypeCode',
                      t: 'o',
                      m: {
                        Type: {
                          n: 'type',
                          t: 'i'
                        },
                        Code: {
                          n: 'code',
                          t: 'i'
                        }
                      }
                    },
                    PortRange: {
                      n: 'portRange',
                      t: 'o',
                      m: {
                        From: {
                          n: 'from',
                          t: 'i'
                        },
                        To: {
                          n: 'to',
                          t: 'i'
                        }
                      }
                    }
                  }
                }
              },
              Associations: {
                n: 'associationSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    NetworkAclAssociationId: {
                      n: 'networkAclAssociationId'
                    },
                    NetworkAclId: {
                      n: 'networkAclId'
                    },
                    SubnetId: {
                      n: 'subnetId'
                    }
                  }
                }
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
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
          n: 'GroupSet'
        },
        Attachment: {
        }
      },
      o: {
        NetworkInterfaceId: {
          n: 'networkInterfaceId'
        },
        Description: {
          n: 'description',
          t: 'o',
          m: {
            Value: {
              n: 'value'
            }
          }
        },
        SourceDestCheck: {
          n: 'sourceDestCheck',
          t: 'o',
          m: {
            Value: {
              n: 'value',
              t: 'b'
            }
          }
        },
        Groups: {
          n: 'groupSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              GroupName: {
                n: 'groupName'
              },
              GroupId: {
                n: 'groupId'
              }
            }
          }
        },
        Attachment: {
          n: 'attachment',
          t: 'o',
          m: {
            AttachmentId: {
              n: 'attachmentId'
            },
            InstanceId: {
              n: 'instanceId'
            },
            InstanceOwnerId: {
              n: 'instanceOwnerId'
            },
            DeviceIndex: {
              n: 'deviceIndex',
              t: 'i'
            },
            Status: {
              n: 'status'
            },
            AttachTime: {
              n: 'attachTime',
              t: 't'
            },
            DeleteOnTermination: {
              n: 'deleteOnTermination',
              t: 'b'
            }
          }
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
            n: 'Item'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        NetworkInterfaces: {
          n: 'networkInterfaceSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              NetworkInterfaceId: {
                n: 'networkInterfaceId'
              },
              SubnetId: {
                n: 'subnetId'
              },
              VpcId: {
                n: 'vpcId'
              },
              AvailabilityZone: {
                n: 'availabilityZone'
              },
              Description: {
                n: 'description'
              },
              OwnerId: {
                n: 'ownerId'
              },
              RequesterId: {
                n: 'requesterId'
              },
              RequesterManaged: {
                n: 'requesterManaged',
                t: 'b'
              },
              Status: {
                n: 'status'
              },
              MacAddress: {
                n: 'macAddress'
              },
              PrivateIpAddress: {
                n: 'privateIpAddress'
              },
              PrivateDnsName: {
                n: 'privateDnsName'
              },
              SourceDestCheck: {
                n: 'sourceDestCheck',
                t: 'b'
              },
              Groups: {
                n: 'groupSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    GroupName: {
                      n: 'groupName'
                    },
                    GroupId: {
                      n: 'groupId'
                    }
                  }
                }
              },
              Attachment: {
                n: 'attachment',
                t: 'o',
                m: {
                  AttachmentId: {
                    n: 'attachmentId'
                  },
                  InstanceId: {
                    n: 'instanceId'
                  },
                  InstanceOwnerId: {
                    n: 'instanceOwnerId'
                  },
                  DeviceIndex: {
                    n: 'deviceIndex',
                    t: 'i'
                  },
                  Status: {
                    n: 'status'
                  },
                  AttachTime: {
                    n: 'attachTime',
                    t: 't'
                  },
                  DeleteOnTermination: {
                    n: 'deleteOnTermination',
                    t: 'b'
                  }
                }
              },
              Association: {
                n: 'association',
                t: 'o',
                m: {
                  PublicIp: {
                    n: 'publicIp'
                  },
                  IpOwnerId: {
                    n: 'ipOwnerId'
                  },
                  AllocationId: {
                    n: 'allocationId'
                  },
                  AssociationId: {
                    n: 'associationId'
                  }
                }
              },
              TagSet: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              PrivateIpAddresses: {
                n: 'privateIpAddressesSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    PrivateIpAddress: {
                      n: 'privateIpAddress'
                    },
                    Primary: {
                      n: 'primary',
                      t: 'b'
                    },
                    Association: {
                      n: 'association',
                      t: 'o',
                      m: {
                        PublicIp: {
                          n: 'publicIp'
                        },
                        IpOwnerId: {
                          n: 'ipOwnerId'
                        },
                        AllocationId: {
                          n: 'allocationId'
                        },
                        AssociationId: {
                          n: 'associationId'
                        }
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
    describePlacementGroups: {
      n: 'DescribePlacementGroups',
      i: {
        GroupNames: {
          n: 'GroupName',
          t: 'a'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        PlacementGroups: {
          n: 'placementGroupSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              GroupName: {
                n: 'groupName'
              },
              Strategy: {
                n: 'strategy'
              },
              State: {
                n: 'state'
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
            n: 'RegionName'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        Regions: {
          n: 'regionInfo',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              RegionName: {
                n: 'regionName'
              },
              Endpoint: {
                n: 'regionEndpoint'
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
            n: 'ReservedInstancesId'
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
                  n: 'Item'
                }
              }
            }
          }
        },
        OfferingType: {
        }
      },
      o: {
        ReservedInstances: {
          n: 'reservedInstancesSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ReservedInstancesId: {
                n: 'reservedInstancesId'
              },
              InstanceType: {
                n: 'instanceType'
              },
              AvailabilityZone: {
                n: 'availabilityZone'
              },
              Start: {
                n: 'start',
                t: 't'
              },
              Duration: {
                n: 'duration',
                t: 'i'
              },
              UsagePrice: {
                n: 'usagePrice',
                t: 'n'
              },
              FixedPrice: {
                n: 'fixedPrice',
                t: 'n'
              },
              InstanceCount: {
                n: 'instanceCount',
                t: 'i'
              },
              ProductDescription: {
                n: 'productDescription'
              },
              State: {
                n: 'state'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              InstanceTenancy: {
                n: 'instanceTenancy'
              },
              CurrencyCode: {
                n: 'currencyCode'
              },
              OfferingType: {
                n: 'offeringType'
              },
              RecurringCharges: {
                n: 'recurringCharges',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Frequency: {
                      n: 'frequency'
                    },
                    Amount: {
                      n: 'amount',
                      t: 'n'
                    }
                  }
                }
              }
            }
          }
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        ReservedInstancesListings: {
          n: 'reservedInstancesListingsSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ReservedInstancesListingId: {
                n: 'reservedInstancesListingId'
              },
              ReservedInstancesId: {
                n: 'reservedInstancesId'
              },
              CreateDate: {
                n: 'createDate',
                t: 't'
              },
              UpdateDate: {
                n: 'updateDate',
                t: 't'
              },
              Status: {
                n: 'status'
              },
              StatusMessage: {
                n: 'statusMessage'
              },
              InstanceCounts: {
                n: 'instanceCounts',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    State: {
                      n: 'state'
                    },
                    InstanceCount: {
                      n: 'instanceCount',
                      t: 'i'
                    }
                  }
                }
              },
              PriceSchedules: {
                n: 'priceSchedules',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Term: {
                      n: 'term',
                      t: 'i'
                    },
                    Price: {
                      n: 'price',
                      t: 'n'
                    },
                    CurrencyCode: {
                      n: 'currencyCode'
                    },
                    Active: {
                      n: 'active',
                      t: 'b'
                    }
                  }
                }
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              ClientToken: {
                n: 'clientToken'
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
          t: 'a'
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
                  n: 'Item'
                }
              }
            }
          }
        },
        InstanceTenancy: {
        },
        OfferingType: {
        }
      },
      o: {
        ReservedInstancesOfferings: {
          n: 'reservedInstancesOfferingsSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ReservedInstancesOfferingId: {
                n: 'reservedInstancesOfferingId'
              },
              InstanceType: {
                n: 'instanceType'
              },
              AvailabilityZone: {
                n: 'availabilityZone'
              },
              Duration: {
                n: 'duration',
                t: 'i'
              },
              UsagePrice: {
                n: 'usagePrice',
                t: 'n'
              },
              FixedPrice: {
                n: 'fixedPrice',
                t: 'n'
              },
              ProductDescription: {
                n: 'productDescription'
              },
              InstanceTenancy: {
                n: 'instanceTenancy'
              },
              CurrencyCode: {
                n: 'currencyCode'
              },
              OfferingType: {
                n: 'offeringType'
              },
              RecurringCharges: {
                n: 'recurringCharges',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Frequency: {
                      n: 'frequency'
                    },
                    Amount: {
                      n: 'amount',
                      t: 'n'
                    }
                  }
                }
              },
              Marketplace: {
                n: 'marketplace',
                t: 'b'
              },
              PricingDetails: {
                n: 'pricingDetailsSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Price: {
                      n: 'price',
                      t: 'n'
                    },
                    Count: {
                      n: 'count',
                      t: 'i'
                    }
                  }
                }
              }
            }
          }
        },
        NextToken: {
          n: 'nextToken'
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
            n: 'Item'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        RouteTables: {
          n: 'routeTableSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              RouteTableId: {
                n: 'routeTableId'
              },
              VpcId: {
                n: 'vpcId'
              },
              Routes: {
                n: 'routeSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    DestinationCidrBlock: {
                      n: 'destinationCidrBlock'
                    },
                    GatewayId: {
                      n: 'gatewayId'
                    },
                    InstanceId: {
                      n: 'instanceId'
                    },
                    InstanceOwnerId: {
                      n: 'instanceOwnerId'
                    },
                    NetworkInterfaceId: {
                      n: 'networkInterfaceId'
                    },
                    State: {
                      n: 'state'
                    }
                  }
                }
              },
              Associations: {
                n: 'associationSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    RouteTableAssociationId: {
                      n: 'routeTableAssociationId'
                    },
                    RouteTableId: {
                      n: 'routeTableId'
                    },
                    SubnetId: {
                      n: 'subnetId'
                    },
                    Main: {
                      n: 'main',
                      t: 'b'
                    }
                  }
                }
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              PropagatingVgws: {
                n: 'propagatingVgwSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    GatewayId: {
                      n: 'gatewayId'
                    }
                  }
                }
              },
              PropagatedRoutes: {
                n: 'propagatedRouteSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    DestinationCidrBlock: {
                      n: 'destinationCidrBlock'
                    },
                    GatewayId: {
                      n: 'gatewayId'
                    },
                    Status: {
                      n: 'status'
                    },
                    SourceId: {
                      n: 'sourceId'
                    }
                  }
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
            n: 'GroupName'
          }
        },
        GroupIds: {
          n: 'GroupId',
          t: 'a',
          m: {
            n: 'GroupId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        SecurityGroups: {
          n: 'securityGroupInfo',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              OwnerId: {
                n: 'ownerId'
              },
              GroupName: {
                n: 'groupName'
              },
              GroupId: {
                n: 'groupId'
              },
              Description: {
                n: 'groupDescription'
              },
              IpPermissions: {
                n: 'ipPermissions',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    IpProtocol: {
                      n: 'ipProtocol'
                    },
                    FromPort: {
                      n: 'fromPort',
                      t: 'i'
                    },
                    ToPort: {
                      n: 'toPort',
                      t: 'i'
                    },
                    UserIdGroupPairs: {
                      n: 'groups',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          UserId: {
                            n: 'userId'
                          },
                          GroupName: {
                            n: 'groupName'
                          },
                          GroupId: {
                            n: 'groupId'
                          }
                        }
                      }
                    },
                    IpRanges: {
                      n: 'ipRanges',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          CidrIp: {
                            n: 'cidrIp'
                          }
                        }
                      }
                    }
                  }
                }
              },
              IpPermissionsEgress: {
                n: 'ipPermissionsEgress',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    IpProtocol: {
                      n: 'ipProtocol'
                    },
                    FromPort: {
                      n: 'fromPort',
                      t: 'i'
                    },
                    ToPort: {
                      n: 'toPort',
                      t: 'i'
                    },
                    UserIdGroupPairs: {
                      n: 'groups',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          UserId: {
                            n: 'userId'
                          },
                          GroupName: {
                            n: 'groupName'
                          },
                          GroupId: {
                            n: 'groupId'
                          }
                        }
                      }
                    },
                    IpRanges: {
                      n: 'ipRanges',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          CidrIp: {
                            n: 'cidrIp'
                          }
                        }
                      }
                    }
                  }
                }
              },
              VpcId: {
                n: 'vpcId'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
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
      },
      o: {
        SnapshotId: {
          n: 'snapshotId'
        },
        CreateVolumePermissions: {
          n: 'createVolumePermission',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              UserId: {
                n: 'userId'
              },
              Group: {
                n: 'group'
              }
            }
          }
        },
        ProductCodes: {
          n: 'productCodes',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ProductCodeId: {
                n: 'productCode'
              },
              ProductCodeType: {
                n: 'type'
              }
            }
          }
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
            n: 'SnapshotId'
          }
        },
        OwnerIds: {
          n: 'Owner',
          t: 'a',
          m: {
            n: 'Owner'
          }
        },
        RestorableByUserIds: {
          n: 'RestorableBy',
          t: 'a'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        Snapshots: {
          n: 'snapshotSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              SnapshotId: {
                n: 'snapshotId'
              },
              VolumeId: {
                n: 'volumeId'
              },
              State: {
                n: 'status'
              },
              StartTime: {
                n: 'startTime',
                t: 't'
              },
              Progress: {
                n: 'progress'
              },
              OwnerId: {
                n: 'ownerId'
              },
              Description: {
                n: 'description'
              },
              VolumeSize: {
                n: 'volumeSize',
                t: 'i'
              },
              OwnerAlias: {
                n: 'ownerAlias'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeSpotDatafeedSubscription: {
      n: 'DescribeSpotDatafeedSubscription',
      i: null,
      o: {
        SpotDatafeedSubscription: {
          n: 'spotDatafeedSubscription',
          t: 'o',
          m: {
            OwnerId: {
              n: 'ownerId'
            },
            Bucket: {
              n: 'bucket'
            },
            Prefix: {
              n: 'prefix'
            },
            State: {
              n: 'state'
            },
            Fault: {
              n: 'fault',
              t: 'o',
              m: {
                Code: {
                  n: 'code'
                },
                Message: {
                  n: 'message'
                }
              }
            }
          }
        }
      }
    },
    describeSpotInstanceRequests: {
      n: 'DescribeSpotInstanceRequests',
      i: {
        SpotInstanceRequestIds: {
          n: 'SpotInstanceRequestId',
          t: 'a',
          m: {
            n: 'SpotInstanceRequestId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        SpotInstanceRequests: {
          n: 'spotInstanceRequestSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              SpotInstanceRequestId: {
                n: 'spotInstanceRequestId'
              },
              SpotPrice: {
                n: 'spotPrice'
              },
              Type: {
                n: 'type'
              },
              State: {
                n: 'state'
              },
              Fault: {
                n: 'fault',
                t: 'o',
                m: {
                  Code: {
                    n: 'code'
                  },
                  Message: {
                    n: 'message'
                  }
                }
              },
              ValidFrom: {
                n: 'validFrom',
                t: 't'
              },
              ValidUntil: {
                n: 'validUntil',
                t: 't'
              },
              LaunchGroup: {
                n: 'launchGroup'
              },
              AvailabilityZoneGroup: {
                n: 'availabilityZoneGroup'
              },
              LaunchSpecification: {
                n: 'launchSpecification',
                t: 'o',
                m: {
                  ImageId: {
                    n: 'imageId'
                  },
                  KeyName: {
                    n: 'keyName'
                  },
                  SecurityGroups: {
                    n: 'groupSet',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        GroupName: {
                          n: 'groupName'
                        },
                        GroupId: {
                          n: 'groupId'
                        }
                      }
                    }
                  },
                  UserData: {
                    n: 'userData'
                  },
                  AddressingType: {
                    n: 'addressingType'
                  },
                  InstanceType: {
                    n: 'instanceType'
                  },
                  Placement: {
                    n: 'placement',
                    t: 'o',
                    m: {
                      AvailabilityZone: {
                        n: 'availabilityZone'
                      },
                      GroupName: {
                        n: 'groupName'
                      }
                    }
                  },
                  KernelId: {
                    n: 'kernelId'
                  },
                  RamdiskId: {
                    n: 'ramdiskId'
                  },
                  BlockDeviceMappings: {
                    n: 'blockDeviceMapping',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        VirtualName: {
                          n: 'virtualName'
                        },
                        DeviceName: {
                          n: 'deviceName'
                        },
                        Ebs: {
                          n: 'ebs',
                          t: 'o',
                          m: {
                            SnapshotId: {
                              n: 'snapshotId'
                            },
                            VolumeSize: {
                              n: 'volumeSize',
                              t: 'i'
                            },
                            DeleteOnTermination: {
                              n: 'deleteOnTermination',
                              t: 'b'
                            },
                            VolumeType: {
                              n: 'volumeType'
                            },
                            Iops: {
                              n: 'iops',
                              t: 'i'
                            }
                          }
                        },
                        NoDevice: {
                          n: 'noDevice'
                        }
                      }
                    }
                  },
                  MonitoringEnabled: {
                    n: 'monitoringEnabled',
                    t: 'b'
                  },
                  SubnetId: {
                    n: 'subnetId'
                  },
                  NetworkInterfaces: {
                    n: 'networkInterfaceSet',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        NetworkInterfaceId: {
                          n: 'networkInterfaceId'
                        },
                        DeviceIndex: {
                          n: 'deviceIndex',
                          t: 'i'
                        },
                        SubnetId: {
                          n: 'subnetId'
                        },
                        Description: {
                          n: 'description'
                        },
                        PrivateIpAddress: {
                          n: 'privateIpAddress'
                        },
                        Groups: {
                          n: 'SecurityGroupId',
                          t: 'a',
                          m: {
                            n: 'SecurityGroupId'
                          }
                        },
                        DeleteOnTermination: {
                          n: 'deleteOnTermination',
                          t: 'b'
                        },
                        PrivateIpAddresses: {
                          n: 'privateIpAddressesSet',
                          t: 'a',
                          m: {
                            n: 'item',
                            t: 'o',
                            m: {
                              PrivateIpAddress: {
                                n: 'privateIpAddress'
                              },
                              Primary: {
                                n: 'primary',
                                t: 'b'
                              }
                            }
                          }
                        },
                        SecondaryPrivateIpAddressCount: {
                          n: 'secondaryPrivateIpAddressCount',
                          t: 'i'
                        }
                      }
                    }
                  },
                  IamInstanceProfile: {
                    n: 'iamInstanceProfile',
                    t: 'o',
                    m: {
                      Arn: {
                        n: 'arn'
                      },
                      Name: {
                        n: 'name'
                      }
                    }
                  },
                  EbsOptimized: {
                    n: 'ebsOptimized',
                    t: 'b'
                  }
                }
              },
              InstanceId: {
                n: 'instanceId'
              },
              CreateTime: {
                n: 'createTime',
                t: 't'
              },
              ProductDescription: {
                n: 'productDescription'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              LaunchedAvailabilityZone: {
                n: 'launchedAvailabilityZone'
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
          t: 'a'
        },
        ProductDescriptions: {
          n: 'ProductDescription',
          t: 'a'
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
                  n: 'Item'
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
      },
      o: {
        SpotPriceHistory: {
          n: 'spotPriceHistorySet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              InstanceType: {
                n: 'instanceType'
              },
              ProductDescription: {
                n: 'productDescription'
              },
              SpotPrice: {
                n: 'spotPrice'
              },
              Timestamp: {
                n: 'timestamp',
                t: 't'
              },
              AvailabilityZone: {
                n: 'availabilityZone'
              }
            }
          }
        },
        NextToken: {
          n: 'nextToken'
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
            n: 'SubnetId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        Subnets: {
          n: 'subnetSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              SubnetId: {
                n: 'subnetId'
              },
              State: {
                n: 'state'
              },
              VpcId: {
                n: 'vpcId'
              },
              CidrBlock: {
                n: 'cidrBlock'
              },
              AvailableIpAddressCount: {
                n: 'availableIpAddressCount',
                t: 'i'
              },
              AvailabilityZone: {
                n: 'availabilityZone'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        Tags: {
          n: 'tagSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ResourceId: {
                n: 'resourceId'
              },
              ResourceType: {
                n: 'resourceType'
              },
              Key: {
                n: 'key'
              },
              Value: {
                n: 'value'
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
      },
      o: {
        VolumeId: {
          n: 'volumeId'
        },
        AutoEnableIO: {
          n: 'autoEnableIO',
          t: 'o',
          m: {
            Value: {
              n: 'value',
              t: 'b'
            }
          }
        },
        ProductCodes: {
          n: 'productCodes',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ProductCodeId: {
                n: 'productCode'
              },
              ProductCodeType: {
                n: 'type'
              }
            }
          }
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
            n: 'VolumeId'
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
                  n: 'Item'
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
      },
      o: {
        VolumeStatuses: {
          n: 'volumeStatusSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              VolumeId: {
                n: 'volumeId'
              },
              AvailabilityZone: {
                n: 'availabilityZone'
              },
              VolumeStatus: {
                n: 'volumeStatus',
                t: 'o',
                m: {
                  Status: {
                    n: 'status'
                  },
                  Details: {
                    n: 'details',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        Name: {
                          n: 'name'
                        },
                        Status: {
                          n: 'status'
                        }
                      }
                    }
                  }
                }
              },
              Events: {
                n: 'eventsSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    EventType: {
                      n: 'eventType'
                    },
                    Description: {
                      n: 'description'
                    },
                    NotBefore: {
                      n: 'notBefore',
                      t: 't'
                    },
                    NotAfter: {
                      n: 'notAfter',
                      t: 't'
                    },
                    EventId: {
                      n: 'eventId'
                    }
                  }
                }
              },
              Actions: {
                n: 'actionsSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Code: {
                      n: 'code'
                    },
                    Description: {
                      n: 'description'
                    },
                    EventType: {
                      n: 'eventType'
                    },
                    EventId: {
                      n: 'eventId'
                    }
                  }
                }
              }
            }
          }
        },
        NextToken: {
          n: 'nextToken'
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
            n: 'VolumeId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        Volumes: {
          n: 'volumeSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              VolumeId: {
                n: 'volumeId'
              },
              Size: {
                n: 'size',
                t: 'i'
              },
              SnapshotId: {
                n: 'snapshotId'
              },
              AvailabilityZone: {
                n: 'availabilityZone'
              },
              State: {
                n: 'status'
              },
              CreateTime: {
                n: 'createTime',
                t: 't'
              },
              Attachments: {
                n: 'attachmentSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    VolumeId: {
                      n: 'volumeId'
                    },
                    InstanceId: {
                      n: 'instanceId'
                    },
                    Device: {
                      n: 'device'
                    },
                    State: {
                      n: 'status'
                    },
                    AttachTime: {
                      n: 'attachTime',
                      t: 't'
                    },
                    DeleteOnTermination: {
                      n: 'deleteOnTermination',
                      t: 'b'
                    }
                  }
                }
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              VolumeType: {
                n: 'volumeType'
              },
              Iops: {
                n: 'iops',
                t: 'i'
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
            n: 'VpcId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        Vpcs: {
          n: 'vpcSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              VpcId: {
                n: 'vpcId'
              },
              State: {
                n: 'state'
              },
              CidrBlock: {
                n: 'cidrBlock'
              },
              DhcpOptionsId: {
                n: 'dhcpOptionsId'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              InstanceTenancy: {
                n: 'instanceTenancy'
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
            n: 'VpnConnectionId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        VpnConnections: {
          n: 'vpnConnectionSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              VpnConnectionId: {
                n: 'vpnConnectionId'
              },
              State: {
                n: 'state'
              },
              CustomerGatewayConfiguration: {
                n: 'customerGatewayConfiguration'
              },
              Type: {
                n: 'type'
              },
              CustomerGatewayId: {
                n: 'customerGatewayId'
              },
              VpnGatewayId: {
                n: 'vpnGatewayId'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              VgwTelemetry: {
                n: 'vgwTelemetry',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    OutsideIpAddress: {
                      n: 'outsideIpAddress'
                    },
                    Status: {
                      n: 'status'
                    },
                    LastStatusChange: {
                      n: 'lastStatusChange',
                      t: 't'
                    },
                    StatusMessage: {
                      n: 'statusMessage'
                    },
                    AcceptedRouteCount: {
                      n: 'acceptedRouteCount',
                      t: 'i'
                    }
                  }
                }
              },
              Options: {
                n: 'options',
                t: 'o',
                m: {
                  StaticRoutesOnly: {
                    n: 'staticRoutesOnly',
                    t: 'b'
                  }
                }
              },
              Routes: {
                n: 'routes',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    DestinationCidrBlock: {
                      n: 'destinationCidrBlock'
                    },
                    Source: {
                      n: 'source'
                    },
                    State: {
                      n: 'state'
                    }
                  }
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
            n: 'VpnGatewayId'
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
                  n: 'Item'
                }
              }
            }
          }
        }
      },
      o: {
        VpnGateways: {
          n: 'vpnGatewaySet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              VpnGatewayId: {
                n: 'vpnGatewayId'
              },
              State: {
                n: 'state'
              },
              Type: {
                n: 'type'
              },
              AvailabilityZone: {
                n: 'availabilityZone'
              },
              VpcAttachments: {
                n: 'attachments',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    VpcId: {
                      n: 'vpcId'
                    },
                    State: {
                      n: 'state'
                    }
                  }
                }
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
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
      },
      o: {
        Attachment: {
          n: 'attachment',
          t: 'o',
          m: {
            VolumeId: {
              n: 'volumeId'
            },
            InstanceId: {
              n: 'instanceId'
            },
            Device: {
              n: 'device'
            },
            State: {
              n: 'status'
            },
            AttachTime: {
              n: 'attachTime',
              t: 't'
            },
            DeleteOnTermination: {
              n: 'deleteOnTermination',
              t: 'b'
            }
          }
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
      },
      o: {
        InstanceId: {
          n: 'instanceId'
        },
        Timestamp: {
          n: 'timestamp',
          t: 't'
        },
        Output: {
          n: 'output'
        }
      }
    },
    getPasswordData: {
      n: 'GetPasswordData',
      i: {
        InstanceId: {
          r: 1
        }
      },
      o: {
        InstanceId: {
          n: 'instanceId'
        },
        Timestamp: {
          n: 'timestamp',
          t: 't'
        },
        PasswordData: {
          n: 'passwordData'
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
                n: 'SecurityGroup'
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
      },
      o: {
        ConversionTask: {
          n: 'conversionTask',
          t: 'o',
          m: {
            ConversionTaskId: {
              n: 'conversionTaskId'
            },
            ExpirationTime: {
              n: 'expirationTime'
            },
            ImportInstance: {
              n: 'importInstance',
              t: 'o',
              m: {
                Volumes: {
                  n: 'volumes',
                  t: 'a',
                  m: {
                    n: 'item',
                    t: 'o',
                    m: {
                      BytesConverted: {
                        n: 'bytesConverted',
                        t: 'i'
                      },
                      AvailabilityZone: {
                        n: 'availabilityZone'
                      },
                      Image: {
                        n: 'image',
                        t: 'o',
                        m: {
                          Format: {
                            n: 'format'
                          },
                          Size: {
                            n: 'size',
                            t: 'i'
                          },
                          ImportManifestUrl: {
                            n: 'importManifestUrl'
                          },
                          Checksum: {
                            n: 'checksum'
                          }
                        }
                      },
                      Volume: {
                        n: 'volume',
                        t: 'o',
                        m: {
                          Size: {
                            n: 'size',
                            t: 'i'
                          },
                          Id: {
                            n: 'id'
                          }
                        }
                      },
                      Status: {
                        n: 'status'
                      },
                      StatusMessage: {
                        n: 'statusMessage'
                      },
                      Description: {
                        n: 'description'
                      }
                    }
                  }
                },
                InstanceId: {
                  n: 'instanceId'
                },
                Platform: {
                  n: 'platform'
                },
                Description: {
                  n: 'description'
                }
              }
            },
            ImportVolume: {
              n: 'importVolume',
              t: 'o',
              m: {
                BytesConverted: {
                  n: 'bytesConverted',
                  t: 'i'
                },
                AvailabilityZone: {
                  n: 'availabilityZone'
                },
                Description: {
                  n: 'description'
                },
                Image: {
                  n: 'image',
                  t: 'o',
                  m: {
                    Format: {
                      n: 'format'
                    },
                    Size: {
                      n: 'size',
                      t: 'i'
                    },
                    ImportManifestUrl: {
                      n: 'importManifestUrl'
                    },
                    Checksum: {
                      n: 'checksum'
                    }
                  }
                },
                Volume: {
                  n: 'volume',
                  t: 'o',
                  m: {
                    Size: {
                      n: 'size',
                      t: 'i'
                    },
                    Id: {
                      n: 'id'
                    }
                  }
                }
              }
            },
            State: {
              n: 'state'
            },
            StatusMessage: {
              n: 'statusMessage'
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
            }
          }
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
      },
      o: {
        KeyName: {
          n: 'keyName'
        },
        KeyFingerprint: {
          n: 'keyFingerprint'
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
      },
      o: {
        ConversionTask: {
          n: 'conversionTask',
          t: 'o',
          m: {
            ConversionTaskId: {
              n: 'conversionTaskId'
            },
            ExpirationTime: {
              n: 'expirationTime'
            },
            ImportInstance: {
              n: 'importInstance',
              t: 'o',
              m: {
                Volumes: {
                  n: 'volumes',
                  t: 'a',
                  m: {
                    n: 'item',
                    t: 'o',
                    m: {
                      BytesConverted: {
                        n: 'bytesConverted',
                        t: 'i'
                      },
                      AvailabilityZone: {
                        n: 'availabilityZone'
                      },
                      Image: {
                        n: 'image',
                        t: 'o',
                        m: {
                          Format: {
                            n: 'format'
                          },
                          Size: {
                            n: 'size',
                            t: 'i'
                          },
                          ImportManifestUrl: {
                            n: 'importManifestUrl'
                          },
                          Checksum: {
                            n: 'checksum'
                          }
                        }
                      },
                      Volume: {
                        n: 'volume',
                        t: 'o',
                        m: {
                          Size: {
                            n: 'size',
                            t: 'i'
                          },
                          Id: {
                            n: 'id'
                          }
                        }
                      },
                      Status: {
                        n: 'status'
                      },
                      StatusMessage: {
                        n: 'statusMessage'
                      },
                      Description: {
                        n: 'description'
                      }
                    }
                  }
                },
                InstanceId: {
                  n: 'instanceId'
                },
                Platform: {
                  n: 'platform'
                },
                Description: {
                  n: 'description'
                }
              }
            },
            ImportVolume: {
              n: 'importVolume',
              t: 'o',
              m: {
                BytesConverted: {
                  n: 'bytesConverted',
                  t: 'i'
                },
                AvailabilityZone: {
                  n: 'availabilityZone'
                },
                Description: {
                  n: 'description'
                },
                Image: {
                  n: 'image',
                  t: 'o',
                  m: {
                    Format: {
                      n: 'format'
                    },
                    Size: {
                      n: 'size',
                      t: 'i'
                    },
                    ImportManifestUrl: {
                      n: 'importManifestUrl'
                    },
                    Checksum: {
                      n: 'checksum'
                    }
                  }
                },
                Volume: {
                  n: 'volume',
                  t: 'o',
                  m: {
                    Size: {
                      n: 'size',
                      t: 'i'
                    },
                    Id: {
                      n: 'id'
                    }
                  }
                }
              }
            },
            State: {
              n: 'state'
            },
            StatusMessage: {
              n: 'statusMessage'
            },
            Tags: {
              n: 'tagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  Key: {
                    n: 'key'
                  },
                  Value: {
                    n: 'value'
                  }
                }
              }
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
            n: 'UserId'
          }
        },
        UserGroups: {
          n: 'UserGroup',
          t: 'a',
          m: {
            n: 'UserGroup'
          }
        },
        ProductCodes: {
          n: 'ProductCode',
          t: 'a',
          m: {
            n: 'ProductCode'
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
            n: 'GroupId'
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
            n: 'SecurityGroupId'
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
            n: 'UserId'
          }
        },
        GroupNames: {
          n: 'UserGroup',
          t: 'a',
          m: {
            n: 'GroupName'
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
            n: 'InstanceId'
          },
          r: 1
        }
      },
      o: {
        InstanceMonitorings: {
          n: 'instancesSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              InstanceId: {
                n: 'instanceId'
              },
              Monitoring: {
                n: 'monitoring',
                t: 'o',
                m: {
                  State: {
                    n: 'state'
                  }
                }
              }
            }
          }
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
      },
      o: {
        ReservedInstancesId: {
          n: 'reservedInstancesId'
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
            n: 'InstanceId'
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
      },
      o: {
        ImageId: {
          n: 'imageId'
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
      },
      o: {
        NewAssociationId: {
          n: 'newAssociationId'
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
      },
      o: {
        NewAssociationId: {
          n: 'newAssociationId'
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
            n: 'InstanceId'
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
            n: 'Item'
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
                      n: 'SecurityGroupId'
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
      },
      o: {
        SpotInstanceRequests: {
          n: 'spotInstanceRequestSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              SpotInstanceRequestId: {
                n: 'spotInstanceRequestId'
              },
              SpotPrice: {
                n: 'spotPrice'
              },
              Type: {
                n: 'type'
              },
              State: {
                n: 'state'
              },
              Fault: {
                n: 'fault',
                t: 'o',
                m: {
                  Code: {
                    n: 'code'
                  },
                  Message: {
                    n: 'message'
                  }
                }
              },
              ValidFrom: {
                n: 'validFrom',
                t: 't'
              },
              ValidUntil: {
                n: 'validUntil',
                t: 't'
              },
              LaunchGroup: {
                n: 'launchGroup'
              },
              AvailabilityZoneGroup: {
                n: 'availabilityZoneGroup'
              },
              LaunchSpecification: {
                n: 'launchSpecification',
                t: 'o',
                m: {
                  ImageId: {
                    n: 'imageId'
                  },
                  KeyName: {
                    n: 'keyName'
                  },
                  SecurityGroups: {
                    n: 'groupSet',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        GroupName: {
                          n: 'groupName'
                        },
                        GroupId: {
                          n: 'groupId'
                        }
                      }
                    }
                  },
                  UserData: {
                    n: 'userData'
                  },
                  AddressingType: {
                    n: 'addressingType'
                  },
                  InstanceType: {
                    n: 'instanceType'
                  },
                  Placement: {
                    n: 'placement',
                    t: 'o',
                    m: {
                      AvailabilityZone: {
                        n: 'availabilityZone'
                      },
                      GroupName: {
                        n: 'groupName'
                      }
                    }
                  },
                  KernelId: {
                    n: 'kernelId'
                  },
                  RamdiskId: {
                    n: 'ramdiskId'
                  },
                  BlockDeviceMappings: {
                    n: 'blockDeviceMapping',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        VirtualName: {
                          n: 'virtualName'
                        },
                        DeviceName: {
                          n: 'deviceName'
                        },
                        Ebs: {
                          n: 'ebs',
                          t: 'o',
                          m: {
                            SnapshotId: {
                              n: 'snapshotId'
                            },
                            VolumeSize: {
                              n: 'volumeSize',
                              t: 'i'
                            },
                            DeleteOnTermination: {
                              n: 'deleteOnTermination',
                              t: 'b'
                            },
                            VolumeType: {
                              n: 'volumeType'
                            },
                            Iops: {
                              n: 'iops',
                              t: 'i'
                            }
                          }
                        },
                        NoDevice: {
                          n: 'noDevice'
                        }
                      }
                    }
                  },
                  MonitoringEnabled: {
                    n: 'monitoringEnabled',
                    t: 'b'
                  },
                  SubnetId: {
                    n: 'subnetId'
                  },
                  NetworkInterfaces: {
                    n: 'networkInterfaceSet',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        NetworkInterfaceId: {
                          n: 'networkInterfaceId'
                        },
                        DeviceIndex: {
                          n: 'deviceIndex',
                          t: 'i'
                        },
                        SubnetId: {
                          n: 'subnetId'
                        },
                        Description: {
                          n: 'description'
                        },
                        PrivateIpAddress: {
                          n: 'privateIpAddress'
                        },
                        Groups: {
                          n: 'SecurityGroupId',
                          t: 'a',
                          m: {
                            n: 'SecurityGroupId'
                          }
                        },
                        DeleteOnTermination: {
                          n: 'deleteOnTermination',
                          t: 'b'
                        },
                        PrivateIpAddresses: {
                          n: 'privateIpAddressesSet',
                          t: 'a',
                          m: {
                            n: 'item',
                            t: 'o',
                            m: {
                              PrivateIpAddress: {
                                n: 'privateIpAddress'
                              },
                              Primary: {
                                n: 'primary',
                                t: 'b'
                              }
                            }
                          }
                        },
                        SecondaryPrivateIpAddressCount: {
                          n: 'secondaryPrivateIpAddressCount',
                          t: 'i'
                        }
                      }
                    }
                  },
                  IamInstanceProfile: {
                    n: 'iamInstanceProfile',
                    t: 'o',
                    m: {
                      Arn: {
                        n: 'arn'
                      },
                      Name: {
                        n: 'name'
                      }
                    }
                  },
                  EbsOptimized: {
                    n: 'ebsOptimized',
                    t: 'b'
                  }
                }
              },
              InstanceId: {
                n: 'instanceId'
              },
              CreateTime: {
                n: 'createTime',
                t: 't'
              },
              ProductDescription: {
                n: 'productDescription'
              },
              Tags: {
                n: 'tagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    Key: {
                      n: 'key'
                    },
                    Value: {
                      n: 'value'
                    }
                  }
                }
              },
              LaunchedAvailabilityZone: {
                n: 'launchedAvailabilityZone'
              }
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
            n: 'SecurityGroup'
          }
        },
        SecurityGroupIds: {
          n: 'SecurityGroupId',
          t: 'a',
          m: {
            n: 'SecurityGroupId'
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
                  n: 'SecurityGroupId'
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
      },
      o: {
        Reservation: {
          n: 'reservation',
          t: 'o',
          m: {
            ReservationId: {
              n: 'reservationId'
            },
            OwnerId: {
              n: 'ownerId'
            },
            RequesterId: {
              n: 'requesterId'
            },
            Groups: {
              n: 'groupSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  GroupName: {
                    n: 'groupName'
                  },
                  GroupId: {
                    n: 'groupId'
                  }
                }
              }
            },
            Instances: {
              n: 'instancesSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  InstanceId: {
                    n: 'instanceId'
                  },
                  ImageId: {
                    n: 'imageId'
                  },
                  State: {
                    n: 'instanceState',
                    t: 'o',
                    m: {
                      Code: {
                        n: 'code',
                        t: 'i'
                      },
                      Name: {
                        n: 'name'
                      }
                    }
                  },
                  PrivateDnsName: {
                    n: 'privateDnsName'
                  },
                  PublicDnsName: {
                    n: 'dnsName'
                  },
                  StateTransitionReason: {
                    n: 'reason'
                  },
                  KeyName: {
                    n: 'keyName'
                  },
                  AmiLaunchIndex: {
                    n: 'amiLaunchIndex',
                    t: 'i'
                  },
                  ProductCodes: {
                    n: 'productCodes',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        ProductCodeId: {
                          n: 'productCode'
                        },
                        ProductCodeType: {
                          n: 'type'
                        }
                      }
                    }
                  },
                  InstanceType: {
                    n: 'instanceType'
                  },
                  LaunchTime: {
                    n: 'launchTime',
                    t: 't'
                  },
                  Placement: {
                    n: 'placement',
                    t: 'o',
                    m: {
                      AvailabilityZone: {
                        n: 'availabilityZone'
                      },
                      GroupName: {
                        n: 'groupName'
                      },
                      Tenancy: {
                        n: 'tenancy'
                      }
                    }
                  },
                  KernelId: {
                    n: 'kernelId'
                  },
                  RamdiskId: {
                    n: 'ramdiskId'
                  },
                  Platform: {
                    n: 'platform'
                  },
                  Monitoring: {
                    n: 'monitoring',
                    t: 'o',
                    m: {
                      State: {
                        n: 'state'
                      }
                    }
                  },
                  SubnetId: {
                    n: 'subnetId'
                  },
                  VpcId: {
                    n: 'vpcId'
                  },
                  PrivateIpAddress: {
                    n: 'privateIpAddress'
                  },
                  PublicIpAddress: {
                    n: 'ipAddress'
                  },
                  StateReason: {
                    n: 'stateReason',
                    t: 'o',
                    m: {
                      Code: {
                        n: 'code'
                      },
                      Message: {
                        n: 'message'
                      }
                    }
                  },
                  Architecture: {
                    n: 'architecture'
                  },
                  RootDeviceType: {
                    n: 'rootDeviceType'
                  },
                  RootDeviceName: {
                    n: 'rootDeviceName'
                  },
                  BlockDeviceMappings: {
                    n: 'blockDeviceMapping',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        DeviceName: {
                          n: 'deviceName'
                        },
                        Ebs: {
                          n: 'ebs',
                          t: 'o',
                          m: {
                            VolumeId: {
                              n: 'volumeId'
                            },
                            Status: {
                              n: 'status'
                            },
                            AttachTime: {
                              n: 'attachTime',
                              t: 't'
                            },
                            DeleteOnTermination: {
                              n: 'deleteOnTermination',
                              t: 'b'
                            }
                          }
                        }
                      }
                    }
                  },
                  VirtualizationType: {
                    n: 'virtualizationType'
                  },
                  InstanceLifecycle: {
                    n: 'instanceLifecycle'
                  },
                  SpotInstanceRequestId: {
                    n: 'spotInstanceRequestId'
                  },
                  License: {
                    n: 'license',
                    t: 'o',
                    m: {
                      Pool: {
                        n: 'pool'
                      }
                    }
                  },
                  ClientToken: {
                    n: 'clientToken'
                  },
                  Tags: {
                    n: 'tagSet',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        Key: {
                          n: 'key'
                        },
                        Value: {
                          n: 'value'
                        }
                      }
                    }
                  },
                  SecurityGroups: {
                    n: 'groupSet',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        GroupName: {
                          n: 'groupName'
                        },
                        GroupId: {
                          n: 'groupId'
                        }
                      }
                    }
                  },
                  SourceDestCheck: {
                    n: 'sourceDestCheck',
                    t: 'b'
                  },
                  Hypervisor: {
                    n: 'hypervisor'
                  },
                  NetworkInterfaces: {
                    n: 'networkInterfaceSet',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        NetworkInterfaceId: {
                          n: 'networkInterfaceId'
                        },
                        SubnetId: {
                          n: 'subnetId'
                        },
                        VpcId: {
                          n: 'vpcId'
                        },
                        Description: {
                          n: 'description'
                        },
                        OwnerId: {
                          n: 'ownerId'
                        },
                        Status: {
                          n: 'status'
                        },
                        PrivateIpAddress: {
                          n: 'privateIpAddress'
                        },
                        PrivateDnsName: {
                          n: 'privateDnsName'
                        },
                        SourceDestCheck: {
                          n: 'sourceDestCheck',
                          t: 'b'
                        },
                        Groups: {
                          n: 'groupSet',
                          t: 'a',
                          m: {
                            n: 'item',
                            t: 'o',
                            m: {
                              GroupName: {
                                n: 'groupName'
                              },
                              GroupId: {
                                n: 'groupId'
                              }
                            }
                          }
                        },
                        Attachment: {
                          n: 'attachment',
                          t: 'o',
                          m: {
                            AttachmentId: {
                              n: 'attachmentId'
                            },
                            DeviceIndex: {
                              n: 'deviceIndex',
                              t: 'i'
                            },
                            Status: {
                              n: 'status'
                            },
                            AttachTime: {
                              n: 'attachTime',
                              t: 't'
                            },
                            DeleteOnTermination: {
                              n: 'deleteOnTermination',
                              t: 'b'
                            }
                          }
                        },
                        Association: {
                          n: 'association',
                          t: 'o',
                          m: {
                            PublicIp: {
                              n: 'publicIp'
                            },
                            IpOwnerId: {
                              n: 'ipOwnerId'
                            }
                          }
                        }
                      }
                    }
                  },
                  IamInstanceProfile: {
                    n: 'iamInstanceProfile',
                    t: 'o',
                    m: {
                      Arn: {
                        n: 'arn'
                      },
                      Id: {
                        n: 'id'
                      }
                    }
                  },
                  EbsOptimized: {
                    n: 'ebsOptimized',
                    t: 'b'
                  }
                }
              }
            }
          }
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
            n: 'InstanceId'
          },
          r: 1
        },
        AdditionalInfo: {
        }
      },
      o: {
        StartingInstances: {
          n: 'instancesSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              InstanceId: {
                n: 'instanceId'
              },
              CurrentState: {
                n: 'currentState',
                t: 'o',
                m: {
                  Code: {
                    n: 'code',
                    t: 'i'
                  },
                  Name: {
                    n: 'name'
                  }
                }
              },
              PreviousState: {
                n: 'previousState',
                t: 'o',
                m: {
                  Code: {
                    n: 'code',
                    t: 'i'
                  },
                  Name: {
                    n: 'name'
                  }
                }
              }
            }
          }
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
            n: 'InstanceId'
          },
          r: 1
        },
        Force: {
          t: 'b'
        }
      },
      o: {
        StoppingInstances: {
          n: 'instancesSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              InstanceId: {
                n: 'instanceId'
              },
              CurrentState: {
                n: 'currentState',
                t: 'o',
                m: {
                  Code: {
                    n: 'code',
                    t: 'i'
                  },
                  Name: {
                    n: 'name'
                  }
                }
              },
              PreviousState: {
                n: 'previousState',
                t: 'o',
                m: {
                  Code: {
                    n: 'code',
                    t: 'i'
                  },
                  Name: {
                    n: 'name'
                  }
                }
              }
            }
          }
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
            n: 'InstanceId'
          },
          r: 1
        }
      },
      o: {
        TerminatingInstances: {
          n: 'instancesSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              InstanceId: {
                n: 'instanceId'
              },
              CurrentState: {
                n: 'currentState',
                t: 'o',
                m: {
                  Code: {
                    n: 'code',
                    t: 'i'
                  },
                  Name: {
                    n: 'name'
                  }
                }
              },
              PreviousState: {
                n: 'previousState',
                t: 'o',
                m: {
                  Code: {
                    n: 'code',
                    t: 'i'
                  },
                  Name: {
                    n: 'name'
                  }
                }
              }
            }
          }
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
            n: 'PrivateIpAddress'
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
            n: 'InstanceId'
          },
          r: 1
        }
      },
      o: {
        InstanceMonitorings: {
          n: 'instancesSet',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              InstanceId: {
                n: 'instanceId'
              },
              Monitoring: {
                n: 'monitoring',
                t: 'o',
                m: {
                  State: {
                    n: 'state'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
