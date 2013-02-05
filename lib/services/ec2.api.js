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
  serviceName: 'ec2',
  apiVersion: '2012-12-01',
  timestampFormat: 'iso8601',
  operations: {
    activateLicense: {
      n: 'ActivateLicense',
      i: {
        m: {
          LicenseId: {
            r: 1
          },
          Capacity: {
            t: 'i',
            r: 1
          }
        }
      }
    },
    allocateAddress: {
      n: 'AllocateAddress',
      i: {
        m: {
          Domain: {
          }
        }
      },
      o: {
        publicIp: {
          n: 'PublicIp'
        },
        domain: {
          n: 'Domain'
        },
        allocationId: {
          n: 'AllocationId'
        }
      }
    },
    assignPrivateIpAddresses: {
      n: 'AssignPrivateIpAddresses',
      i: {
        m: {
          NetworkInterfaceId: {
            r: 1
          },
          PrivateIpAddresses: {
            t: 'a',
            m: {
              n: 'PrivateIpAddress'
            },
            f: 1
          },
          SecondaryPrivateIpAddressCount: {
            t: 'i'
          },
          AllowReassignment: {
            t: 'b'
          }
        }
      }
    },
    associateAddress: {
      n: 'AssociateAddress',
      i: {
        m: {
          InstanceId: {
          },
          PublicIp: {
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
      o: {
        associationId: {
          n: 'AssociationId'
        }
      }
    },
    associateDhcpOptions: {
      n: 'AssociateDhcpOptions',
      i: {
        m: {
          DhcpOptionsId: {
            r: 1
          },
          VpcId: {
            r: 1
          }
        }
      }
    },
    associateRouteTable: {
      n: 'AssociateRouteTable',
      i: {
        m: {
          SubnetId: {
            r: 1
          },
          RouteTableId: {
            r: 1
          }
        }
      },
      o: {
        associationId: {
          n: 'AssociationId'
        }
      }
    },
    attachInternetGateway: {
      n: 'AttachInternetGateway',
      i: {
        m: {
          InternetGatewayId: {
            r: 1
          },
          VpcId: {
            r: 1
          }
        }
      }
    },
    attachNetworkInterface: {
      n: 'AttachNetworkInterface',
      i: {
        m: {
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
      o: {
        attachmentId: {
          n: 'AttachmentId'
        }
      }
    },
    attachVolume: {
      n: 'AttachVolume',
      i: {
        m: {
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
      o: {
        volumeId: {
          n: 'VolumeId'
        },
        instanceId: {
          n: 'InstanceId'
        },
        device: {
          n: 'Device'
        },
        status: {
          n: 'State'
        },
        attachTime: {
          n: 'AttachTime',
          t: 't'
        },
        deleteOnTermination: {
          n: 'DeleteOnTermination',
          t: 'b'
        }
      }
    },
    attachVpnGateway: {
      n: 'AttachVpnGateway',
      i: {
        m: {
          VpnGatewayId: {
            r: 1
          },
          VpcId: {
            r: 1
          }
        }
      },
      o: {
        attachment: {
          n: 'VpcAttachement',
          t: 'o',
          m: {
            vpcId: {
              n: 'VpcId'
            },
            state: {
              n: 'State'
            }
          }
        }
      }
    },
    authorizeSecurityGroupEgress: {
      n: 'AuthorizeSecurityGroupEgress',
      i: {
        m: {
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
                  t: 'a',
                  m: {
                    n: 'Groups',
                    t: 'o',
                    m: {
                      UserId: {
                      },
                      GroupName: {
                      },
                      GroupId: {
                      }
                    }
                  },
                  f: 1
                },
                IpRanges: {
                  t: 'a',
                  m: {
                    t: 'o',
                    m: {
                      CidrIp: {
                      }
                    }
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      }
    },
    authorizeSecurityGroupIngress: {
      n: 'AuthorizeSecurityGroupIngress',
      i: {
        m: {
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
                  t: 'a',
                  m: {
                    n: 'Groups',
                    t: 'o',
                    m: {
                      UserId: {
                      },
                      GroupName: {
                      },
                      GroupId: {
                      }
                    }
                  },
                  f: 1
                },
                IpRanges: {
                  t: 'a',
                  m: {
                    t: 'o',
                    m: {
                      CidrIp: {
                      }
                    }
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      }
    },
    bundleInstance: {
      n: 'BundleInstance',
      i: {
        m: {
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
        }
      },
      o: {
        bundleInstanceTask: {
          n: 'BundleTask',
          t: 'o',
          m: {
            instanceId: {
              n: 'InstanceId'
            },
            bundleId: {
              n: 'BundleId'
            },
            state: {
              n: 'State'
            },
            startTime: {
              n: 'StartTime',
              t: 't'
            },
            updateTime: {
              n: 'UpdateTime',
              t: 't'
            },
            storage: {
              n: 'Storage',
              t: 'o',
              m: {
                S3: {
                  t: 'o',
                  m: {
                    bucket: {
                      n: 'Bucket'
                    },
                    prefix: {
                      n: 'Prefix'
                    },
                    AWSAccessKeyId: {
                    },
                    uploadPolicy: {
                      n: 'UploadPolicy'
                    },
                    uploadPolicySignature: {
                      n: 'UploadPolicySignature'
                    }
                  }
                }
              }
            },
            progress: {
              n: 'Progress'
            },
            error: {
              n: 'BundleTaskError',
              t: 'o',
              m: {
                code: {
                  n: 'Code'
                },
                message: {
                  n: 'Message'
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
        m: {
          BundleId: {
            r: 1
          }
        }
      },
      o: {
        bundleInstanceTask: {
          n: 'BundleTask',
          t: 'o',
          m: {
            instanceId: {
              n: 'InstanceId'
            },
            bundleId: {
              n: 'BundleId'
            },
            state: {
              n: 'State'
            },
            startTime: {
              n: 'StartTime',
              t: 't'
            },
            updateTime: {
              n: 'UpdateTime',
              t: 't'
            },
            storage: {
              n: 'Storage',
              t: 'o',
              m: {
                S3: {
                  t: 'o',
                  m: {
                    bucket: {
                      n: 'Bucket'
                    },
                    prefix: {
                      n: 'Prefix'
                    },
                    AWSAccessKeyId: {
                    },
                    uploadPolicy: {
                      n: 'UploadPolicy'
                    },
                    uploadPolicySignature: {
                      n: 'UploadPolicySignature'
                    }
                  }
                }
              }
            },
            progress: {
              n: 'Progress'
            },
            error: {
              n: 'BundleTaskError',
              t: 'o',
              m: {
                code: {
                  n: 'Code'
                },
                message: {
                  n: 'Message'
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
        m: {
          ConversionTaskId: {
            r: 1
          },
          ReasonMessage: {
          }
        }
      }
    },
    cancelExportTask: {
      n: 'CancelExportTask',
      i: {
        m: {
          ExportTaskId: {
            r: 1
          }
        }
      }
    },
    cancelReservedInstancesListing: {
      n: 'CancelReservedInstancesListing',
      i: {
        m: {
          ReservedInstancesListingId: {
            r: 1
          }
        }
      },
      o: {
        reservedInstancesListingsSet: {
          n: 'ReservedInstancesListings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              reservedInstancesListingId: {
                n: 'ReservedInstancesListingId'
              },
              reservedInstancesId: {
                n: 'ReservedInstancesId'
              },
              createDate: {
                n: 'CreateDate',
                t: 't'
              },
              updateDate: {
                n: 'UpdateDate',
                t: 't'
              },
              status: {
                n: 'Status'
              },
              statusMessage: {
                n: 'StatusMessage'
              },
              instanceCounts: {
                n: 'InstanceCounts',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    state: {
                      n: 'State'
                    },
                    instanceCount: {
                      n: 'InstanceCount',
                      t: 'i'
                    }
                  }
                }
              },
              priceSchedules: {
                n: 'PriceSchedules',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    term: {
                      n: 'Term',
                      t: 'i'
                    },
                    price: {
                      n: 'Price',
                      t: 'n'
                    },
                    currencyCode: {
                      n: 'CurrencyCode'
                    },
                    active: {
                      n: 'Active',
                      t: 'b'
                    }
                  }
                }
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              clientToken: {
                n: 'ClientToken'
              }
            }
          }
        }
      }
    },
    cancelSpotInstanceRequests: {
      n: 'CancelSpotInstanceRequests',
      i: {
        m: {
          SpotInstanceRequestIds: {
            t: 'a',
            m: {
              n: 'SpotInstanceRequestId'
            },
            r: 1,
            f: 1
          }
        }
      },
      o: {
        spotInstanceRequestSet: {
          n: 'CancelledSpotInstanceRequests',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              spotInstanceRequestId: {
                n: 'SpotInstanceRequestId'
              },
              state: {
                n: 'State'
              }
            }
          }
        }
      }
    },
    confirmProductInstance: {
      n: 'ConfirmProductInstance',
      i: {
        m: {
          ProductCode: {
            r: 1
          },
          InstanceId: {
            r: 1
          }
        }
      },
      o: {
        ownerId: {
          n: 'OwnerId'
        }
      }
    },
    copySnapshot: {
      n: 'CopySnapshot',
      i: {
        m: {
          SourceRegion: {
            r: 1
          },
          SourceSnapshotId: {
            r: 1
          },
          Description: {
          }
        }
      },
      o: {
        snapshotId: {
          n: 'SnapshotId'
        }
      }
    },
    createCustomerGateway: {
      n: 'CreateCustomerGateway',
      i: {
        m: {
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
        }
      },
      o: {
        customerGateway: {
          n: 'CustomerGateway',
          t: 'o',
          m: {
            customerGatewayId: {
              n: 'CustomerGatewayId'
            },
            state: {
              n: 'State'
            },
            type: {
              n: 'Type'
            },
            ipAddress: {
              n: 'IpAddress'
            },
            bgpAsn: {
              n: 'BgpAsn'
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
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
        m: {
          DhcpConfigurations: {
            t: 'a',
            m: {
              n: 'DhcpConfiguration',
              t: 'o',
              m: {
                Key: {
                },
                Values: {
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            r: 1,
            f: 1
          }
        }
      },
      o: {
        dhcpOptions: {
          n: 'DhcpOptions',
          t: 'o',
          m: {
            dhcpOptionsId: {
              n: 'DhcpOptionsId'
            },
            dhcpConfigurationSet: {
              n: 'DhcpConfigurations',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  valueSet: {
                    n: 'Values',
                    t: 'a',
                    m: {
                      n: 'item'
                    }
                  }
                }
              }
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
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
        m: {
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
            },
            f: 1
          }
        }
      },
      o: {
        imageId: {
          n: 'ImageId'
        }
      }
    },
    createInstanceExportTask: {
      n: 'CreateInstanceExportTask',
      i: {
        m: {
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
      o: {
        exportTask: {
          n: 'ExportTask',
          t: 'o',
          m: {
            exportTaskId: {
              n: 'ExportTaskId'
            },
            description: {
              n: 'Description'
            },
            state: {
              n: 'State'
            },
            statusMessage: {
              n: 'StatusMessage'
            },
            instanceExport: {
              n: 'InstanceExportDetails',
              t: 'o',
              m: {
                instanceId: {
                  n: 'InstanceId'
                },
                targetEnvironment: {
                  n: 'TargetEnvironment'
                }
              }
            },
            exportToS3: {
              n: 'ExportToS3Task',
              t: 'o',
              m: {
                diskImageFormat: {
                  n: 'DiskImageFormat'
                },
                containerFormat: {
                  n: 'ContainerFormat'
                },
                s3Bucket: {
                  n: 'S3Bucket'
                },
                s3Key: {
                  n: 'S3Key'
                }
              }
            }
          }
        }
      }
    },
    createInternetGateway: {
      n: 'CreateInternetGateway',
      o: {
        internetGateway: {
          n: 'InternetGateway',
          t: 'o',
          m: {
            internetGatewayId: {
              n: 'InternetGatewayId'
            },
            attachmentSet: {
              n: 'Attachments',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  vpcId: {
                    n: 'VpcId'
                  },
                  state: {
                    n: 'State'
                  }
                }
              }
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
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
        m: {
          KeyName: {
            r: 1
          }
        }
      },
      o: {
        keyPair: {
          n: 'KeyPair',
          t: 'o',
          m: {
            keyName: {
              n: 'KeyName'
            },
            keyFingerprint: {
              n: 'KeyFingerprint'
            },
            keyMaterial: {
              n: 'KeyMaterial'
            }
          }
        }
      }
    },
    createNetworkAcl: {
      n: 'CreateNetworkAcl',
      i: {
        m: {
          VpcId: {
            r: 1
          }
        }
      },
      o: {
        networkAcl: {
          n: 'NetworkAcl',
          t: 'o',
          m: {
            networkAclId: {
              n: 'NetworkAclId'
            },
            vpcId: {
              n: 'VpcId'
            },
            'default': {
              n: 'IsDefault',
              t: 'b'
            },
            entrySet: {
              n: 'Entries',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  ruleNumber: {
                    n: 'RuleNumber',
                    t: 'i'
                  },
                  protocol: {
                    n: 'Protocol'
                  },
                  ruleAction: {
                    n: 'RuleAction'
                  },
                  egress: {
                    n: 'Egress',
                    t: 'b'
                  },
                  cidrBlock: {
                    n: 'CidrBlock'
                  },
                  icmpTypeCode: {
                    n: 'IcmpTypeCode',
                    t: 'o',
                    m: {
                      type: {
                        n: 'Type',
                        t: 'i'
                      },
                      code: {
                        n: 'Code',
                        t: 'i'
                      }
                    }
                  },
                  portRange: {
                    n: 'PortRange',
                    t: 'o',
                    m: {
                      from: {
                        n: 'From',
                        t: 'i'
                      },
                      to: {
                        n: 'To',
                        t: 'i'
                      }
                    }
                  }
                }
              }
            },
            associationSet: {
              n: 'Associations',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  networkAclAssociationId: {
                    n: 'NetworkAclAssociationId'
                  },
                  networkAclId: {
                    n: 'NetworkAclId'
                  },
                  subnetId: {
                    n: 'SubnetId'
                  }
                }
              }
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
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
        m: {
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
      }
    },
    createNetworkInterface: {
      n: 'CreateNetworkInterface',
      i: {
        m: {
          SubnetId: {
            r: 1
          },
          Description: {
          },
          PrivateIpAddress: {
          },
          Groups: {
            t: 'a',
            m: {
              n: 'SecurityGroupId'
            },
            f: 1
          },
          PrivateIpAddresses: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                PrivateIpAddress: {
                  r: 1
                },
                Primary: {
                  t: 'b'
                }
              }
            },
            f: 1
          },
          SecondaryPrivateIpAddressCount: {
            t: 'i'
          }
        }
      },
      o: {
        networkInterface: {
          n: 'NetworkInterface',
          t: 'o',
          m: {
            networkInterfaceId: {
              n: 'NetworkInterfaceId'
            },
            subnetId: {
              n: 'SubnetId'
            },
            vpcId: {
              n: 'VpcId'
            },
            availabilityZone: {
              n: 'AvailabilityZone'
            },
            description: {
              n: 'Description'
            },
            ownerId: {
              n: 'OwnerId'
            },
            requesterId: {
              n: 'RequesterId'
            },
            requesterManaged: {
              n: 'RequesterManaged',
              t: 'b'
            },
            status: {
              n: 'Status'
            },
            macAddress: {
              n: 'MacAddress'
            },
            privateIpAddress: {
              n: 'PrivateIpAddress'
            },
            privateDnsName: {
              n: 'PrivateDnsName'
            },
            sourceDestCheck: {
              n: 'SourceDestCheck',
              t: 'b'
            },
            groupSet: {
              n: 'Groups',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  groupName: {
                    n: 'GroupName'
                  },
                  groupId: {
                    n: 'GroupId'
                  }
                }
              }
            },
            attachment: {
              n: 'Attachment',
              t: 'o',
              m: {
                attachmentId: {
                  n: 'AttachmentId'
                },
                instanceId: {
                  n: 'InstanceId'
                },
                instanceOwnerId: {
                  n: 'InstanceOwnerId'
                },
                deviceIndex: {
                  n: 'DeviceIndex',
                  t: 'i'
                },
                status: {
                  n: 'Status'
                },
                attachTime: {
                  n: 'AttachTime',
                  t: 't'
                },
                deleteOnTermination: {
                  n: 'DeleteOnTermination',
                  t: 'b'
                }
              }
            },
            association: {
              n: 'Association',
              t: 'o',
              m: {
                publicIp: {
                  n: 'PublicIp'
                },
                ipOwnerId: {
                  n: 'IpOwnerId'
                },
                allocationId: {
                  n: 'AllocationId'
                },
                associationId: {
                  n: 'AssociationId'
                }
              }
            },
            tagSet: {
              n: 'TagSet',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
                  }
                }
              }
            },
            privateIpAddressesSet: {
              n: 'PrivateIpAddresses',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  privateIpAddress: {
                    n: 'PrivateIpAddress'
                  },
                  primary: {
                    n: 'Primary',
                    t: 'b'
                  },
                  association: {
                    n: 'Association',
                    t: 'o',
                    m: {
                      publicIp: {
                        n: 'PublicIp'
                      },
                      ipOwnerId: {
                        n: 'IpOwnerId'
                      },
                      allocationId: {
                        n: 'AllocationId'
                      },
                      associationId: {
                        n: 'AssociationId'
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
        m: {
          GroupName: {
            r: 1
          },
          Strategy: {
            r: 1
          }
        }
      }
    },
    createReservedInstancesListing: {
      n: 'CreateReservedInstancesListing',
      i: {
        m: {
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
            r: 1,
            f: 1
          },
          ClientToken: {
            r: 1
          }
        }
      },
      o: {
        reservedInstancesListingsSet: {
          n: 'ReservedInstancesListings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              reservedInstancesListingId: {
                n: 'ReservedInstancesListingId'
              },
              reservedInstancesId: {
                n: 'ReservedInstancesId'
              },
              createDate: {
                n: 'CreateDate',
                t: 't'
              },
              updateDate: {
                n: 'UpdateDate',
                t: 't'
              },
              status: {
                n: 'Status'
              },
              statusMessage: {
                n: 'StatusMessage'
              },
              instanceCounts: {
                n: 'InstanceCounts',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    state: {
                      n: 'State'
                    },
                    instanceCount: {
                      n: 'InstanceCount',
                      t: 'i'
                    }
                  }
                }
              },
              priceSchedules: {
                n: 'PriceSchedules',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    term: {
                      n: 'Term',
                      t: 'i'
                    },
                    price: {
                      n: 'Price',
                      t: 'n'
                    },
                    currencyCode: {
                      n: 'CurrencyCode'
                    },
                    active: {
                      n: 'Active',
                      t: 'b'
                    }
                  }
                }
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              clientToken: {
                n: 'ClientToken'
              }
            }
          }
        }
      }
    },
    createRoute: {
      n: 'CreateRoute',
      i: {
        m: {
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
      }
    },
    createRouteTable: {
      n: 'CreateRouteTable',
      i: {
        m: {
          VpcId: {
            r: 1
          }
        }
      },
      o: {
        routeTable: {
          n: 'RouteTable',
          t: 'o',
          m: {
            routeTableId: {
              n: 'RouteTableId'
            },
            vpcId: {
              n: 'VpcId'
            },
            routeSet: {
              n: 'Routes',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  destinationCidrBlock: {
                    n: 'DestinationCidrBlock'
                  },
                  gatewayId: {
                    n: 'GatewayId'
                  },
                  instanceId: {
                    n: 'InstanceId'
                  },
                  instanceOwnerId: {
                    n: 'InstanceOwnerId'
                  },
                  networkInterfaceId: {
                    n: 'NetworkInterfaceId'
                  },
                  state: {
                    n: 'State'
                  }
                }
              }
            },
            associationSet: {
              n: 'Associations',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  routeTableAssociationId: {
                    n: 'RouteTableAssociationId'
                  },
                  routeTableId: {
                    n: 'RouteTableId'
                  },
                  subnetId: {
                    n: 'SubnetId'
                  },
                  main: {
                    n: 'Main',
                    t: 'b'
                  }
                }
              }
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
                  }
                }
              }
            },
            propagatingVgwSet: {
              n: 'PropagatingVgws',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  gatewayId: {
                    n: 'GatewayId'
                  }
                }
              }
            },
            propagatedRouteSet: {
              n: 'PropagatedRoutes',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  destinationCidrBlock: {
                    n: 'DestinationCidrBlock'
                  },
                  gatewayId: {
                    n: 'GatewayId'
                  },
                  status: {
                    n: 'Status'
                  },
                  sourceId: {
                    n: 'SourceId'
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
        m: {
          GroupName: {
            r: 1
          },
          Description: {
            n: 'GroupDescription',
            r: 1
          },
          VpcId: {
          }
        }
      },
      o: {
        groupId: {
          n: 'GroupId'
        }
      }
    },
    createSnapshot: {
      n: 'CreateSnapshot',
      i: {
        m: {
          VolumeId: {
            r: 1
          },
          Description: {
          }
        }
      },
      o: {
        snapshotId: {
          n: 'SnapshotId'
        },
        volumeId: {
          n: 'VolumeId'
        },
        status: {
          n: 'State'
        },
        startTime: {
          n: 'StartTime',
          t: 't'
        },
        progress: {
          n: 'Progress'
        },
        ownerId: {
          n: 'OwnerId'
        },
        description: {
          n: 'Description'
        },
        volumeSize: {
          n: 'VolumeSize',
          t: 'i'
        },
        ownerAlias: {
          n: 'OwnerAlias'
        },
        tagSet: {
          n: 'Tags',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              key: {
                n: 'Key'
              },
              value: {
                n: 'Value'
              }
            }
          }
        }
      }
    },
    createSpotDatafeedSubscription: {
      n: 'CreateSpotDatafeedSubscription',
      i: {
        m: {
          Bucket: {
            r: 1
          },
          Prefix: {
          }
        }
      },
      o: {
        spotDatafeedSubscription: {
          n: 'SpotDatafeedSubscription',
          t: 'o',
          m: {
            ownerId: {
              n: 'OwnerId'
            },
            bucket: {
              n: 'Bucket'
            },
            prefix: {
              n: 'Prefix'
            },
            state: {
              n: 'State'
            },
            fault: {
              n: 'Fault',
              t: 'o',
              m: {
                code: {
                  n: 'Code'
                },
                message: {
                  n: 'Message'
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
        m: {
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
      o: {
        subnet: {
          n: 'Subnet',
          t: 'o',
          m: {
            subnetId: {
              n: 'SubnetId'
            },
            state: {
              n: 'State'
            },
            vpcId: {
              n: 'VpcId'
            },
            cidrBlock: {
              n: 'CidrBlock'
            },
            availableIpAddressCount: {
              n: 'AvailableIpAddressCount',
              t: 'i'
            },
            availabilityZone: {
              n: 'AvailabilityZone'
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
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
        m: {
          Resources: {
            t: 'a',
            m: {
              n: 'ResourceId'
            },
            r: 1,
            f: 1
          },
          Tags: {
            t: 'a',
            m: {
              n: 'Tag',
              t: 'o',
              m: {
                Key: {
                },
                Value: {
                }
              }
            },
            r: 1,
            f: 1
          }
        }
      }
    },
    createVolume: {
      n: 'CreateVolume',
      i: {
        m: {
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
      o: {
        volumeId: {
          n: 'VolumeId'
        },
        size: {
          n: 'Size',
          t: 'i'
        },
        snapshotId: {
          n: 'SnapshotId'
        },
        availabilityZone: {
          n: 'AvailabilityZone'
        },
        status: {
          n: 'State'
        },
        createTime: {
          n: 'CreateTime',
          t: 't'
        },
        attachmentSet: {
          n: 'Attachments',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              volumeId: {
                n: 'VolumeId'
              },
              instanceId: {
                n: 'InstanceId'
              },
              device: {
                n: 'Device'
              },
              status: {
                n: 'State'
              },
              attachTime: {
                n: 'AttachTime',
                t: 't'
              },
              deleteOnTermination: {
                n: 'DeleteOnTermination',
                t: 'b'
              }
            }
          }
        },
        tagSet: {
          n: 'Tags',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              key: {
                n: 'Key'
              },
              value: {
                n: 'Value'
              }
            }
          }
        },
        volumeType: {
          n: 'VolumeType'
        },
        iops: {
          n: 'Iops',
          t: 'i'
        }
      }
    },
    createVpc: {
      n: 'CreateVpc',
      i: {
        m: {
          CidrBlock: {
            r: 1
          },
          InstanceTenancy: {
          }
        }
      },
      o: {
        vpc: {
          n: 'Vpc',
          t: 'o',
          m: {
            vpcId: {
              n: 'VpcId'
            },
            state: {
              n: 'State'
            },
            cidrBlock: {
              n: 'CidrBlock'
            },
            dhcpOptionsId: {
              n: 'DhcpOptionsId'
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
                  }
                }
              }
            },
            instanceTenancy: {
              n: 'InstanceTenancy'
            }
          }
        }
      }
    },
    createVpnConnection: {
      n: 'CreateVpnConnection',
      i: {
        m: {
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
      o: {
        vpnConnection: {
          n: 'VpnConnection',
          t: 'o',
          m: {
            vpnConnectionId: {
              n: 'VpnConnectionId'
            },
            state: {
              n: 'State'
            },
            customerGatewayConfiguration: {
              n: 'CustomerGatewayConfiguration'
            },
            type: {
              n: 'Type'
            },
            customerGatewayId: {
              n: 'CustomerGatewayId'
            },
            vpnGatewayId: {
              n: 'VpnGatewayId'
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
                  }
                }
              }
            },
            vgwTelemetry: {
              n: 'VgwTelemetry',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  outsideIpAddress: {
                    n: 'OutsideIpAddress'
                  },
                  status: {
                    n: 'Status'
                  },
                  lastStatusChange: {
                    n: 'LastStatusChange',
                    t: 't'
                  },
                  statusMessage: {
                    n: 'StatusMessage'
                  },
                  acceptedRouteCount: {
                    n: 'AcceptedRouteCount',
                    t: 'i'
                  }
                }
              }
            },
            options: {
              n: 'Options',
              t: 'o',
              m: {
                staticRoutesOnly: {
                  n: 'StaticRoutesOnly',
                  t: 'b'
                }
              }
            },
            routes: {
              n: 'Routes',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  destinationCidrBlock: {
                    n: 'DestinationCidrBlock'
                  },
                  source: {
                    n: 'Source'
                  },
                  state: {
                    n: 'State'
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
        m: {
          VpnConnectionId: {
            r: 1
          },
          DestinationCidrBlock: {
            r: 1
          }
        }
      }
    },
    createVpnGateway: {
      n: 'CreateVpnGateway',
      i: {
        m: {
          Type: {
            r: 1
          },
          AvailabilityZone: {
          }
        }
      },
      o: {
        vpnGateway: {
          n: 'VpnGateway',
          t: 'o',
          m: {
            vpnGatewayId: {
              n: 'VpnGatewayId'
            },
            state: {
              n: 'State'
            },
            type: {
              n: 'Type'
            },
            availabilityZone: {
              n: 'AvailabilityZone'
            },
            attachments: {
              n: 'VpcAttachments',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  vpcId: {
                    n: 'VpcId'
                  },
                  state: {
                    n: 'State'
                  }
                }
              }
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
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
        m: {
          LicenseId: {
            r: 1
          },
          Capacity: {
            t: 'i',
            r: 1
          }
        }
      }
    },
    deleteCustomerGateway: {
      n: 'DeleteCustomerGateway',
      i: {
        m: {
          CustomerGatewayId: {
            r: 1
          }
        }
      }
    },
    deleteDhcpOptions: {
      n: 'DeleteDhcpOptions',
      i: {
        m: {
          DhcpOptionsId: {
            r: 1
          }
        }
      }
    },
    deleteInternetGateway: {
      n: 'DeleteInternetGateway',
      i: {
        m: {
          InternetGatewayId: {
            r: 1
          }
        }
      }
    },
    deleteKeyPair: {
      n: 'DeleteKeyPair',
      i: {
        m: {
          KeyName: {
            r: 1
          }
        }
      }
    },
    deleteNetworkAcl: {
      n: 'DeleteNetworkAcl',
      i: {
        m: {
          NetworkAclId: {
            r: 1
          }
        }
      }
    },
    deleteNetworkAclEntry: {
      n: 'DeleteNetworkAclEntry',
      i: {
        m: {
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
      }
    },
    deleteNetworkInterface: {
      n: 'DeleteNetworkInterface',
      i: {
        m: {
          NetworkInterfaceId: {
            r: 1
          }
        }
      }
    },
    deletePlacementGroup: {
      n: 'DeletePlacementGroup',
      i: {
        m: {
          GroupName: {
            r: 1
          }
        }
      }
    },
    deleteRoute: {
      n: 'DeleteRoute',
      i: {
        m: {
          RouteTableId: {
            r: 1
          },
          DestinationCidrBlock: {
            r: 1
          }
        }
      }
    },
    deleteRouteTable: {
      n: 'DeleteRouteTable',
      i: {
        m: {
          RouteTableId: {
            r: 1
          }
        }
      }
    },
    deleteSecurityGroup: {
      n: 'DeleteSecurityGroup',
      i: {
        m: {
          GroupName: {
          },
          GroupId: {
          }
        }
      }
    },
    deleteSnapshot: {
      n: 'DeleteSnapshot',
      i: {
        m: {
          SnapshotId: {
            r: 1
          }
        }
      }
    },
    deleteSpotDatafeedSubscription: {
      n: 'DeleteSpotDatafeedSubscription'
    },
    deleteSubnet: {
      n: 'DeleteSubnet',
      i: {
        m: {
          SubnetId: {
            r: 1
          }
        }
      }
    },
    deleteTags: {
      n: 'DeleteTags',
      i: {
        m: {
          Resources: {
            t: 'a',
            m: {
              n: 'ResourceId'
            },
            r: 1,
            f: 1
          },
          Tags: {
            t: 'a',
            m: {
              n: 'Tag',
              t: 'o',
              m: {
                Key: {
                },
                Value: {
                }
              }
            },
            f: 1
          }
        }
      }
    },
    deleteVolume: {
      n: 'DeleteVolume',
      i: {
        m: {
          VolumeId: {
            r: 1
          }
        }
      }
    },
    deleteVpc: {
      n: 'DeleteVpc',
      i: {
        m: {
          VpcId: {
            r: 1
          }
        }
      }
    },
    deleteVpnConnection: {
      n: 'DeleteVpnConnection',
      i: {
        m: {
          VpnConnectionId: {
            r: 1
          }
        }
      }
    },
    deleteVpnConnectionRoute: {
      n: 'DeleteVpnConnectionRoute',
      i: {
        m: {
          VpnConnectionId: {
            r: 1
          },
          DestinationCidrBlock: {
            r: 1
          }
        }
      }
    },
    deleteVpnGateway: {
      n: 'DeleteVpnGateway',
      i: {
        m: {
          VpnGatewayId: {
            r: 1
          }
        }
      }
    },
    deregisterImage: {
      n: 'DeregisterImage',
      i: {
        m: {
          ImageId: {
            r: 1
          }
        }
      }
    },
    describeAddresses: {
      n: 'DescribeAddresses',
      i: {
        m: {
          PublicIps: {
            t: 'a',
            m: {
              n: 'PublicIp'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          },
          AllocationIds: {
            t: 'a',
            m: {
              n: 'AllocationId'
            },
            f: 1
          }
        }
      },
      o: {
        addressesSet: {
          n: 'Addresses',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceId: {
                n: 'InstanceId'
              },
              publicIp: {
                n: 'PublicIp'
              },
              allocationId: {
                n: 'AllocationId'
              },
              associationId: {
                n: 'AssociationId'
              },
              domain: {
                n: 'Domain'
              },
              networkInterfaceId: {
                n: 'NetworkInterfaceId'
              },
              networkInterfaceOwnerId: {
                n: 'NetworkInterfaceOwnerId'
              },
              privateIpAddress: {
                n: 'PrivateIpAddress'
              }
            }
          }
        }
      }
    },
    describeAvailabilityZones: {
      n: 'DescribeAvailabilityZones',
      i: {
        m: {
          ZoneNames: {
            t: 'a',
            m: {
              n: 'ZoneName'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        availabilityZoneInfo: {
          n: 'AvailabilityZones',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              zoneName: {
                n: 'ZoneName'
              },
              zoneState: {
                n: 'State'
              },
              regionName: {
                n: 'RegionName'
              },
              messageSet: {
                n: 'Messages',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    message: {
                      n: 'Message'
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
        m: {
          BundleIds: {
            t: 'a',
            m: {
              n: 'BundleId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        bundleInstanceTasksSet: {
          n: 'BundleTasks',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceId: {
                n: 'InstanceId'
              },
              bundleId: {
                n: 'BundleId'
              },
              state: {
                n: 'State'
              },
              startTime: {
                n: 'StartTime',
                t: 't'
              },
              updateTime: {
                n: 'UpdateTime',
                t: 't'
              },
              storage: {
                n: 'Storage',
                t: 'o',
                m: {
                  S3: {
                    t: 'o',
                    m: {
                      bucket: {
                        n: 'Bucket'
                      },
                      prefix: {
                        n: 'Prefix'
                      },
                      AWSAccessKeyId: {
                      },
                      uploadPolicy: {
                        n: 'UploadPolicy'
                      },
                      uploadPolicySignature: {
                        n: 'UploadPolicySignature'
                      }
                    }
                  }
                }
              },
              progress: {
                n: 'Progress'
              },
              error: {
                n: 'BundleTaskError',
                t: 'o',
                m: {
                  code: {
                    n: 'Code'
                  },
                  message: {
                    n: 'Message'
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
        m: {
          Filters: {
            t: 'a',
            m: {
              n: 'Filter',
              t: 'o',
              m: {
                Name: {
                },
                Values: {
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          },
          ConversionTaskIds: {
            t: 'a',
            m: {
              n: 'ConversionTaskId'
            },
            f: 1
          }
        }
      },
      o: {
        conversionTasks: {
          n: 'ConversionTasks',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              conversionTaskId: {
                n: 'ConversionTaskId'
              },
              expirationTime: {
                n: 'ExpirationTime'
              },
              importInstance: {
                n: 'ImportInstance',
                t: 'o',
                m: {
                  volumes: {
                    n: 'Volumes',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        bytesConverted: {
                          n: 'BytesConverted',
                          t: 'i'
                        },
                        availabilityZone: {
                          n: 'AvailabilityZone'
                        },
                        image: {
                          n: 'Image',
                          t: 'o',
                          m: {
                            format: {
                              n: 'Format'
                            },
                            size: {
                              n: 'Size',
                              t: 'i'
                            },
                            importManifestUrl: {
                              n: 'ImportManifestUrl'
                            },
                            checksum: {
                              n: 'Checksum'
                            }
                          }
                        },
                        volume: {
                          n: 'Volume',
                          t: 'o',
                          m: {
                            size: {
                              n: 'Size',
                              t: 'i'
                            },
                            id: {
                              n: 'Id'
                            }
                          }
                        },
                        status: {
                          n: 'Status'
                        },
                        statusMessage: {
                          n: 'StatusMessage'
                        },
                        description: {
                          n: 'Description'
                        }
                      }
                    }
                  },
                  instanceId: {
                    n: 'InstanceId'
                  },
                  platform: {
                    n: 'Platform'
                  },
                  description: {
                    n: 'Description'
                  }
                }
              },
              importVolume: {
                n: 'ImportVolume',
                t: 'o',
                m: {
                  bytesConverted: {
                    n: 'BytesConverted',
                    t: 'i'
                  },
                  availabilityZone: {
                    n: 'AvailabilityZone'
                  },
                  description: {
                    n: 'Description'
                  },
                  image: {
                    n: 'Image',
                    t: 'o',
                    m: {
                      format: {
                        n: 'Format'
                      },
                      size: {
                        n: 'Size',
                        t: 'i'
                      },
                      importManifestUrl: {
                        n: 'ImportManifestUrl'
                      },
                      checksum: {
                        n: 'Checksum'
                      }
                    }
                  },
                  volume: {
                    n: 'Volume',
                    t: 'o',
                    m: {
                      size: {
                        n: 'Size',
                        t: 'i'
                      },
                      id: {
                        n: 'Id'
                      }
                    }
                  }
                }
              },
              state: {
                n: 'State'
              },
              statusMessage: {
                n: 'StatusMessage'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
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
        m: {
          CustomerGatewayIds: {
            t: 'a',
            m: {
              n: 'CustomerGatewayId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        customerGatewaySet: {
          n: 'CustomerGateways',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              customerGatewayId: {
                n: 'CustomerGatewayId'
              },
              state: {
                n: 'State'
              },
              type: {
                n: 'Type'
              },
              ipAddress: {
                n: 'IpAddress'
              },
              bgpAsn: {
                n: 'BgpAsn'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
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
        m: {
          DhcpOptionsIds: {
            t: 'a',
            m: {
              n: 'DhcpOptionsId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        dhcpOptionsSet: {
          n: 'DhcpOptions',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              dhcpOptionsId: {
                n: 'DhcpOptionsId'
              },
              dhcpConfigurationSet: {
                n: 'DhcpConfigurations',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    valueSet: {
                      n: 'Values',
                      t: 'a',
                      m: {
                        n: 'item'
                      }
                    }
                  }
                }
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
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
        m: {
          ExportTaskIds: {
            t: 'a',
            m: {
              n: 'ExportTaskId'
            },
            f: 1
          }
        }
      },
      o: {
        exportTaskSet: {
          n: 'ExportTasks',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              exportTaskId: {
                n: 'ExportTaskId'
              },
              description: {
                n: 'Description'
              },
              state: {
                n: 'State'
              },
              statusMessage: {
                n: 'StatusMessage'
              },
              instanceExport: {
                n: 'InstanceExportDetails',
                t: 'o',
                m: {
                  instanceId: {
                    n: 'InstanceId'
                  },
                  targetEnvironment: {
                    n: 'TargetEnvironment'
                  }
                }
              },
              exportToS3: {
                n: 'ExportToS3Task',
                t: 'o',
                m: {
                  diskImageFormat: {
                    n: 'DiskImageFormat'
                  },
                  containerFormat: {
                    n: 'ContainerFormat'
                  },
                  s3Bucket: {
                    n: 'S3Bucket'
                  },
                  s3Key: {
                    n: 'S3Key'
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
        m: {
          ImageId: {
            r: 1
          },
          Attribute: {
            r: 1
          }
        }
      },
      o: {
        imageId: {
          n: 'ImageId'
        },
        launchPermission: {
          n: 'LaunchPermissions',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              userId: {
                n: 'UserId'
              },
              group: {
                n: 'Group'
              }
            }
          }
        },
        productCodes: {
          n: 'ProductCodes',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              productCode: {
                n: 'ProductCodeId'
              },
              type: {
                n: 'ProductCodeType'
              }
            }
          }
        },
        kernel: {
          n: 'KernelId',
          t: 'o',
          m: {
            value: {
              n: 'Value'
            }
          }
        },
        ramdisk: {
          n: 'RamdiskId',
          t: 'o',
          m: {
            value: {
              n: 'Value'
            }
          }
        },
        description: {
          n: 'Description',
          t: 'o',
          m: {
            value: {
              n: 'Value'
            }
          }
        },
        blockDeviceMapping: {
          n: 'BlockDeviceMappings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              virtualName: {
                n: 'VirtualName'
              },
              deviceName: {
                n: 'DeviceName'
              },
              ebs: {
                n: 'Ebs',
                t: 'o',
                m: {
                  snapshotId: {
                    n: 'SnapshotId'
                  },
                  volumeSize: {
                    n: 'VolumeSize',
                    t: 'i'
                  },
                  deleteOnTermination: {
                    n: 'DeleteOnTermination',
                    t: 'b'
                  },
                  volumeType: {
                    n: 'VolumeType'
                  },
                  iops: {
                    n: 'Iops',
                    t: 'i'
                  }
                }
              },
              noDevice: {
                n: 'NoDevice'
              }
            }
          }
        }
      }
    },
    describeImages: {
      n: 'DescribeImages',
      i: {
        m: {
          ImageIds: {
            t: 'a',
            m: {
              n: 'ImageId'
            },
            f: 1
          },
          Owners: {
            t: 'a',
            m: {
              n: 'Owner'
            },
            f: 1
          },
          ExecutableUsers: {
            t: 'a',
            m: {
              n: 'ExecutableBy'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        imagesSet: {
          n: 'Images',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              imageId: {
                n: 'ImageId'
              },
              imageLocation: {
                n: 'ImageLocation'
              },
              imageState: {
                n: 'State'
              },
              imageOwnerId: {
                n: 'OwnerId'
              },
              isPublic: {
                n: 'Public',
                t: 'b'
              },
              productCodes: {
                n: 'ProductCodes',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    productCode: {
                      n: 'ProductCodeId'
                    },
                    type: {
                      n: 'ProductCodeType'
                    }
                  }
                }
              },
              architecture: {
                n: 'Architecture'
              },
              imageType: {
                n: 'ImageType'
              },
              kernelId: {
                n: 'KernelId'
              },
              ramdiskId: {
                n: 'RamdiskId'
              },
              platform: {
                n: 'Platform'
              },
              stateReason: {
                n: 'StateReason',
                t: 'o',
                m: {
                  code: {
                    n: 'Code'
                  },
                  message: {
                    n: 'Message'
                  }
                }
              },
              imageOwnerAlias: {
                n: 'ImageOwnerAlias'
              },
              name: {
                n: 'Name'
              },
              description: {
                n: 'Description'
              },
              rootDeviceType: {
                n: 'RootDeviceType'
              },
              rootDeviceName: {
                n: 'RootDeviceName'
              },
              blockDeviceMapping: {
                n: 'BlockDeviceMappings',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    virtualName: {
                      n: 'VirtualName'
                    },
                    deviceName: {
                      n: 'DeviceName'
                    },
                    ebs: {
                      n: 'Ebs',
                      t: 'o',
                      m: {
                        snapshotId: {
                          n: 'SnapshotId'
                        },
                        volumeSize: {
                          n: 'VolumeSize',
                          t: 'i'
                        },
                        deleteOnTermination: {
                          n: 'DeleteOnTermination',
                          t: 'b'
                        },
                        volumeType: {
                          n: 'VolumeType'
                        },
                        iops: {
                          n: 'Iops',
                          t: 'i'
                        }
                      }
                    },
                    noDevice: {
                      n: 'NoDevice'
                    }
                  }
                }
              },
              virtualizationType: {
                n: 'VirtualizationType'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              hypervisor: {
                n: 'Hypervisor'
              }
            }
          }
        }
      }
    },
    describeInstanceAttribute: {
      n: 'DescribeInstanceAttribute',
      i: {
        m: {
          InstanceId: {
            r: 1
          },
          Attribute: {
            r: 1
          }
        }
      },
      o: {
        instanceId: {
          n: 'InstanceId'
        },
        instanceType: {
          n: 'InstanceType',
          t: 'o',
          m: {
            value: {
              n: 'Value'
            }
          }
        },
        kernel: {
          n: 'KernelId',
          t: 'o',
          m: {
            value: {
              n: 'Value'
            }
          }
        },
        ramdisk: {
          n: 'RamdiskId',
          t: 'o',
          m: {
            value: {
              n: 'Value'
            }
          }
        },
        userData: {
          n: 'UserData',
          t: 'o',
          m: {
            value: {
              n: 'Value'
            }
          }
        },
        disableApiTermination: {
          n: 'DisableApiTermination',
          t: 'o',
          m: {
            value: {
              n: 'Value',
              t: 'b'
            }
          }
        },
        instanceInitiatedShutdownBehavior: {
          n: 'InstanceInitiatedShutdownBehavior',
          t: 'o',
          m: {
            value: {
              n: 'Value'
            }
          }
        },
        rootDeviceName: {
          n: 'RootDeviceName',
          t: 'o',
          m: {
            value: {
              n: 'Value'
            }
          }
        },
        blockDeviceMapping: {
          n: 'BlockDeviceMappings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              deviceName: {
                n: 'DeviceName'
              },
              ebs: {
                n: 'Ebs',
                t: 'o',
                m: {
                  volumeId: {
                    n: 'VolumeId'
                  },
                  status: {
                    n: 'Status'
                  },
                  attachTime: {
                    n: 'AttachTime',
                    t: 't'
                  },
                  deleteOnTermination: {
                    n: 'DeleteOnTermination',
                    t: 'b'
                  }
                }
              }
            }
          }
        },
        productCodes: {
          n: 'ProductCodes',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              productCode: {
                n: 'ProductCodeId'
              },
              type: {
                n: 'ProductCodeType'
              }
            }
          }
        },
        ebsOptimized: {
          n: 'EbsOptimized',
          t: 'o',
          m: {
            value: {
              n: 'Value',
              t: 'b'
            }
          }
        }
      }
    },
    describeInstanceStatus: {
      n: 'DescribeInstanceStatus',
      i: {
        m: {
          InstanceIds: {
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
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
      o: {
        instanceStatusSet: {
          n: 'InstanceStatuses',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceId: {
                n: 'InstanceId'
              },
              availabilityZone: {
                n: 'AvailabilityZone'
              },
              eventsSet: {
                n: 'Events',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    code: {
                      n: 'Code'
                    },
                    description: {
                      n: 'Description'
                    },
                    notBefore: {
                      n: 'NotBefore',
                      t: 't'
                    },
                    notAfter: {
                      n: 'NotAfter',
                      t: 't'
                    }
                  }
                }
              },
              instanceState: {
                n: 'InstanceState',
                t: 'o',
                m: {
                  code: {
                    n: 'Code',
                    t: 'i'
                  },
                  name: {
                    n: 'Name'
                  }
                }
              },
              systemStatus: {
                n: 'SystemStatus',
                t: 'o',
                m: {
                  status: {
                    n: 'Status'
                  },
                  details: {
                    n: 'Details',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        name: {
                          n: 'Name'
                        },
                        status: {
                          n: 'Status'
                        },
                        impairedSince: {
                          n: 'ImpairedSince',
                          t: 't'
                        }
                      }
                    }
                  }
                }
              },
              instanceStatus: {
                n: 'InstanceStatus',
                t: 'o',
                m: {
                  status: {
                    n: 'Status'
                  },
                  details: {
                    n: 'Details',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        name: {
                          n: 'Name'
                        },
                        status: {
                          n: 'Status'
                        },
                        impairedSince: {
                          n: 'ImpairedSince',
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
        nextToken: {
          n: 'NextToken'
        }
      }
    },
    describeInstances: {
      n: 'DescribeInstances',
      i: {
        m: {
          InstanceIds: {
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        reservationSet: {
          n: 'Reservations',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              reservationId: {
                n: 'ReservationId'
              },
              ownerId: {
                n: 'OwnerId'
              },
              requesterId: {
                n: 'RequesterId'
              },
              groupSet: {
                n: 'Groups',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    groupName: {
                      n: 'GroupName'
                    },
                    groupId: {
                      n: 'GroupId'
                    }
                  }
                }
              },
              instancesSet: {
                n: 'Instances',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    instanceId: {
                      n: 'InstanceId'
                    },
                    imageId: {
                      n: 'ImageId'
                    },
                    instanceState: {
                      n: 'State',
                      t: 'o',
                      m: {
                        code: {
                          n: 'Code',
                          t: 'i'
                        },
                        name: {
                          n: 'Name'
                        }
                      }
                    },
                    privateDnsName: {
                      n: 'PrivateDnsName'
                    },
                    dnsName: {
                      n: 'PublicDnsName'
                    },
                    reason: {
                      n: 'StateTransitionReason'
                    },
                    keyName: {
                      n: 'KeyName'
                    },
                    amiLaunchIndex: {
                      n: 'AmiLaunchIndex',
                      t: 'i'
                    },
                    productCodes: {
                      n: 'ProductCodes',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          productCode: {
                            n: 'ProductCodeId'
                          },
                          type: {
                            n: 'ProductCodeType'
                          }
                        }
                      }
                    },
                    instanceType: {
                      n: 'InstanceType'
                    },
                    launchTime: {
                      n: 'LaunchTime',
                      t: 't'
                    },
                    placement: {
                      n: 'Placement',
                      t: 'o',
                      m: {
                        availabilityZone: {
                          n: 'AvailabilityZone'
                        },
                        groupName: {
                          n: 'GroupName'
                        },
                        tenancy: {
                          n: 'Tenancy'
                        }
                      }
                    },
                    kernelId: {
                      n: 'KernelId'
                    },
                    ramdiskId: {
                      n: 'RamdiskId'
                    },
                    platform: {
                      n: 'Platform'
                    },
                    monitoring: {
                      n: 'Monitoring',
                      t: 'o',
                      m: {
                        state: {
                          n: 'State'
                        }
                      }
                    },
                    subnetId: {
                      n: 'SubnetId'
                    },
                    vpcId: {
                      n: 'VpcId'
                    },
                    privateIpAddress: {
                      n: 'PrivateIpAddress'
                    },
                    ipAddress: {
                      n: 'PublicIpAddress'
                    },
                    stateReason: {
                      n: 'StateReason',
                      t: 'o',
                      m: {
                        code: {
                          n: 'Code'
                        },
                        message: {
                          n: 'Message'
                        }
                      }
                    },
                    architecture: {
                      n: 'Architecture'
                    },
                    rootDeviceType: {
                      n: 'RootDeviceType'
                    },
                    rootDeviceName: {
                      n: 'RootDeviceName'
                    },
                    blockDeviceMapping: {
                      n: 'BlockDeviceMappings',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          deviceName: {
                            n: 'DeviceName'
                          },
                          ebs: {
                            n: 'Ebs',
                            t: 'o',
                            m: {
                              volumeId: {
                                n: 'VolumeId'
                              },
                              status: {
                                n: 'Status'
                              },
                              attachTime: {
                                n: 'AttachTime',
                                t: 't'
                              },
                              deleteOnTermination: {
                                n: 'DeleteOnTermination',
                                t: 'b'
                              }
                            }
                          }
                        }
                      }
                    },
                    virtualizationType: {
                      n: 'VirtualizationType'
                    },
                    instanceLifecycle: {
                      n: 'InstanceLifecycle'
                    },
                    spotInstanceRequestId: {
                      n: 'SpotInstanceRequestId'
                    },
                    license: {
                      n: 'License',
                      t: 'o',
                      m: {
                        pool: {
                          n: 'Pool'
                        }
                      }
                    },
                    clientToken: {
                      n: 'ClientToken'
                    },
                    tagSet: {
                      n: 'Tags',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          key: {
                            n: 'Key'
                          },
                          value: {
                            n: 'Value'
                          }
                        }
                      }
                    },
                    groupSet: {
                      n: 'SecurityGroups',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          groupName: {
                            n: 'GroupName'
                          },
                          groupId: {
                            n: 'GroupId'
                          }
                        }
                      }
                    },
                    sourceDestCheck: {
                      n: 'SourceDestCheck',
                      t: 'b'
                    },
                    hypervisor: {
                      n: 'Hypervisor'
                    },
                    networkInterfaceSet: {
                      n: 'NetworkInterfaces',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          networkInterfaceId: {
                            n: 'NetworkInterfaceId'
                          },
                          subnetId: {
                            n: 'SubnetId'
                          },
                          vpcId: {
                            n: 'VpcId'
                          },
                          description: {
                            n: 'Description'
                          },
                          ownerId: {
                            n: 'OwnerId'
                          },
                          status: {
                            n: 'Status'
                          },
                          privateIpAddress: {
                            n: 'PrivateIpAddress'
                          },
                          privateDnsName: {
                            n: 'PrivateDnsName'
                          },
                          sourceDestCheck: {
                            n: 'SourceDestCheck',
                            t: 'b'
                          },
                          groupSet: {
                            n: 'Groups',
                            t: 'a',
                            m: {
                              n: 'item',
                              t: 'o',
                              m: {
                                groupName: {
                                  n: 'GroupName'
                                },
                                groupId: {
                                  n: 'GroupId'
                                }
                              }
                            }
                          },
                          attachment: {
                            n: 'Attachment',
                            t: 'o',
                            m: {
                              attachmentId: {
                                n: 'AttachmentId'
                              },
                              deviceIndex: {
                                n: 'DeviceIndex',
                                t: 'i'
                              },
                              status: {
                                n: 'Status'
                              },
                              attachTime: {
                                n: 'AttachTime',
                                t: 't'
                              },
                              deleteOnTermination: {
                                n: 'DeleteOnTermination',
                                t: 'b'
                              }
                            }
                          },
                          association: {
                            n: 'Association',
                            t: 'o',
                            m: {
                              publicIp: {
                                n: 'PublicIp'
                              },
                              ipOwnerId: {
                                n: 'IpOwnerId'
                              }
                            }
                          }
                        }
                      }
                    },
                    iamInstanceProfile: {
                      n: 'IamInstanceProfile',
                      t: 'o',
                      m: {
                        arn: {
                          n: 'Arn'
                        },
                        id: {
                          n: 'Id'
                        }
                      }
                    },
                    ebsOptimized: {
                      n: 'EbsOptimized',
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
        m: {
          InternetGatewayIds: {
            t: 'a',
            m: {
              n: 'InternetGatewayId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        internetGatewaySet: {
          n: 'InternetGateways',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              internetGatewayId: {
                n: 'InternetGatewayId'
              },
              attachmentSet: {
                n: 'Attachments',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    vpcId: {
                      n: 'VpcId'
                    },
                    state: {
                      n: 'State'
                    }
                  }
                }
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
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
        m: {
          KeyNames: {
            t: 'a',
            m: {
              n: 'KeyName'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        keySet: {
          n: 'KeyPairs',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              keyName: {
                n: 'KeyName'
              },
              keyFingerprint: {
                n: 'KeyFingerprint'
              }
            }
          }
        }
      }
    },
    describeLicenses: {
      n: 'DescribeLicenses',
      i: {
        m: {
          LicenseIds: {
            t: 'a',
            m: {
              n: 'LicenseId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        licenseSet: {
          n: 'Licenses',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              licenseId: {
                n: 'LicenseId'
              },
              type: {
                n: 'Type'
              },
              pool: {
                n: 'Pool'
              },
              capacitySet: {
                n: 'Capacities',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    capacity: {
                      n: 'Capacity',
                      t: 'i'
                    },
                    instanceCapacity: {
                      n: 'InstanceCapacity',
                      t: 'i'
                    },
                    state: {
                      n: 'State'
                    },
                    earliestAllowedDeactivationTime: {
                      n: 'EarliestAllowedDeactivationTime',
                      t: 't'
                    }
                  }
                }
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
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
        m: {
          NetworkAclIds: {
            t: 'a',
            m: {
              n: 'NetworkAclId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        networkAclSet: {
          n: 'NetworkAcls',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              networkAclId: {
                n: 'NetworkAclId'
              },
              vpcId: {
                n: 'VpcId'
              },
              'default': {
                n: 'IsDefault',
                t: 'b'
              },
              entrySet: {
                n: 'Entries',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    ruleNumber: {
                      n: 'RuleNumber',
                      t: 'i'
                    },
                    protocol: {
                      n: 'Protocol'
                    },
                    ruleAction: {
                      n: 'RuleAction'
                    },
                    egress: {
                      n: 'Egress',
                      t: 'b'
                    },
                    cidrBlock: {
                      n: 'CidrBlock'
                    },
                    icmpTypeCode: {
                      n: 'IcmpTypeCode',
                      t: 'o',
                      m: {
                        type: {
                          n: 'Type',
                          t: 'i'
                        },
                        code: {
                          n: 'Code',
                          t: 'i'
                        }
                      }
                    },
                    portRange: {
                      n: 'PortRange',
                      t: 'o',
                      m: {
                        from: {
                          n: 'From',
                          t: 'i'
                        },
                        to: {
                          n: 'To',
                          t: 'i'
                        }
                      }
                    }
                  }
                }
              },
              associationSet: {
                n: 'Associations',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    networkAclAssociationId: {
                      n: 'NetworkAclAssociationId'
                    },
                    networkAclId: {
                      n: 'NetworkAclId'
                    },
                    subnetId: {
                      n: 'SubnetId'
                    }
                  }
                }
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
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
        m: {
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
        }
      },
      o: {
        networkInterfaceId: {
          n: 'NetworkInterfaceId'
        },
        description: {
          n: 'Description',
          t: 'o',
          m: {
            value: {
              n: 'Value'
            }
          }
        },
        sourceDestCheck: {
          n: 'SourceDestCheck',
          t: 'o',
          m: {
            value: {
              n: 'Value',
              t: 'b'
            }
          }
        },
        groupSet: {
          n: 'Groups',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              groupName: {
                n: 'GroupName'
              },
              groupId: {
                n: 'GroupId'
              }
            }
          }
        },
        attachment: {
          n: 'Attachment',
          t: 'o',
          m: {
            attachmentId: {
              n: 'AttachmentId'
            },
            instanceId: {
              n: 'InstanceId'
            },
            instanceOwnerId: {
              n: 'InstanceOwnerId'
            },
            deviceIndex: {
              n: 'DeviceIndex',
              t: 'i'
            },
            status: {
              n: 'Status'
            },
            attachTime: {
              n: 'AttachTime',
              t: 't'
            },
            deleteOnTermination: {
              n: 'DeleteOnTermination',
              t: 'b'
            }
          }
        }
      }
    },
    describeNetworkInterfaces: {
      n: 'DescribeNetworkInterfaces',
      i: {
        m: {
          NetworkInterfaceIds: {
            t: 'a',
            m: {
              n: 'NetworkInterfaceId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        networkInterfaceSet: {
          n: 'NetworkInterfaces',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              networkInterfaceId: {
                n: 'NetworkInterfaceId'
              },
              subnetId: {
                n: 'SubnetId'
              },
              vpcId: {
                n: 'VpcId'
              },
              availabilityZone: {
                n: 'AvailabilityZone'
              },
              description: {
                n: 'Description'
              },
              ownerId: {
                n: 'OwnerId'
              },
              requesterId: {
                n: 'RequesterId'
              },
              requesterManaged: {
                n: 'RequesterManaged',
                t: 'b'
              },
              status: {
                n: 'Status'
              },
              macAddress: {
                n: 'MacAddress'
              },
              privateIpAddress: {
                n: 'PrivateIpAddress'
              },
              privateDnsName: {
                n: 'PrivateDnsName'
              },
              sourceDestCheck: {
                n: 'SourceDestCheck',
                t: 'b'
              },
              groupSet: {
                n: 'Groups',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    groupName: {
                      n: 'GroupName'
                    },
                    groupId: {
                      n: 'GroupId'
                    }
                  }
                }
              },
              attachment: {
                n: 'Attachment',
                t: 'o',
                m: {
                  attachmentId: {
                    n: 'AttachmentId'
                  },
                  instanceId: {
                    n: 'InstanceId'
                  },
                  instanceOwnerId: {
                    n: 'InstanceOwnerId'
                  },
                  deviceIndex: {
                    n: 'DeviceIndex',
                    t: 'i'
                  },
                  status: {
                    n: 'Status'
                  },
                  attachTime: {
                    n: 'AttachTime',
                    t: 't'
                  },
                  deleteOnTermination: {
                    n: 'DeleteOnTermination',
                    t: 'b'
                  }
                }
              },
              association: {
                n: 'Association',
                t: 'o',
                m: {
                  publicIp: {
                    n: 'PublicIp'
                  },
                  ipOwnerId: {
                    n: 'IpOwnerId'
                  },
                  allocationId: {
                    n: 'AllocationId'
                  },
                  associationId: {
                    n: 'AssociationId'
                  }
                }
              },
              tagSet: {
                n: 'TagSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              privateIpAddressesSet: {
                n: 'PrivateIpAddresses',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    privateIpAddress: {
                      n: 'PrivateIpAddress'
                    },
                    primary: {
                      n: 'Primary',
                      t: 'b'
                    },
                    association: {
                      n: 'Association',
                      t: 'o',
                      m: {
                        publicIp: {
                          n: 'PublicIp'
                        },
                        ipOwnerId: {
                          n: 'IpOwnerId'
                        },
                        allocationId: {
                          n: 'AllocationId'
                        },
                        associationId: {
                          n: 'AssociationId'
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
        m: {
          GroupNames: {
            t: 'a',
            m: {
              n: 'GroupName'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        placementGroupSet: {
          n: 'PlacementGroups',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              groupName: {
                n: 'GroupName'
              },
              strategy: {
                n: 'Strategy'
              },
              state: {
                n: 'State'
              }
            }
          }
        }
      }
    },
    describeRegions: {
      n: 'DescribeRegions',
      i: {
        m: {
          RegionNames: {
            t: 'a',
            m: {
              n: 'RegionName'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        regionInfo: {
          n: 'Regions',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              regionName: {
                n: 'RegionName'
              },
              regionEndpoint: {
                n: 'Endpoint'
              }
            }
          }
        }
      }
    },
    describeReservedInstances: {
      n: 'DescribeReservedInstances',
      i: {
        m: {
          ReservedInstancesIds: {
            t: 'a',
            m: {
              n: 'ReservedInstancesId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          },
          OfferingType: {
          }
        }
      },
      o: {
        reservedInstancesSet: {
          n: 'ReservedInstances',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              reservedInstancesId: {
                n: 'ReservedInstancesId'
              },
              instanceType: {
                n: 'InstanceType'
              },
              availabilityZone: {
                n: 'AvailabilityZone'
              },
              start: {
                n: 'Start',
                t: 't'
              },
              duration: {
                n: 'Duration',
                t: 'i'
              },
              usagePrice: {
                n: 'UsagePrice',
                t: 'n'
              },
              fixedPrice: {
                n: 'FixedPrice',
                t: 'n'
              },
              instanceCount: {
                n: 'InstanceCount',
                t: 'i'
              },
              productDescription: {
                n: 'ProductDescription'
              },
              state: {
                n: 'State'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              instanceTenancy: {
                n: 'InstanceTenancy'
              },
              currencyCode: {
                n: 'CurrencyCode'
              },
              offeringType: {
                n: 'OfferingType'
              },
              recurringCharges: {
                n: 'RecurringCharges',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    frequency: {
                      n: 'Frequency'
                    },
                    amount: {
                      n: 'Amount',
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
        m: {
          ReservedInstancesId: {
          },
          ReservedInstancesListingId: {
          },
          Filters: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Name: {
                },
                Values: {
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        reservedInstancesListingsSet: {
          n: 'ReservedInstancesListings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              reservedInstancesListingId: {
                n: 'ReservedInstancesListingId'
              },
              reservedInstancesId: {
                n: 'ReservedInstancesId'
              },
              createDate: {
                n: 'CreateDate',
                t: 't'
              },
              updateDate: {
                n: 'UpdateDate',
                t: 't'
              },
              status: {
                n: 'Status'
              },
              statusMessage: {
                n: 'StatusMessage'
              },
              instanceCounts: {
                n: 'InstanceCounts',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    state: {
                      n: 'State'
                    },
                    instanceCount: {
                      n: 'InstanceCount',
                      t: 'i'
                    }
                  }
                }
              },
              priceSchedules: {
                n: 'PriceSchedules',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    term: {
                      n: 'Term',
                      t: 'i'
                    },
                    price: {
                      n: 'Price',
                      t: 'n'
                    },
                    currencyCode: {
                      n: 'CurrencyCode'
                    },
                    active: {
                      n: 'Active',
                      t: 'b'
                    }
                  }
                }
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              clientToken: {
                n: 'ClientToken'
              }
            }
          }
        }
      }
    },
    describeReservedInstancesOfferings: {
      n: 'DescribeReservedInstancesOfferings',
      i: {
        m: {
          ReservedInstancesOfferingIds: {
            t: 'a',
            m: {
              n: 'ReservedInstancesOfferingId'
            },
            f: 1
          },
          InstanceType: {
          },
          AvailabilityZone: {
          },
          ProductDescription: {
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          },
          InstanceTenancy: {
          },
          OfferingType: {
          },
          NextToken: {
          },
          MaxResults: {
            t: 'i'
          }
        }
      },
      o: {
        reservedInstancesOfferingsSet: {
          n: 'ReservedInstancesOfferings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              reservedInstancesOfferingId: {
                n: 'ReservedInstancesOfferingId'
              },
              instanceType: {
                n: 'InstanceType'
              },
              availabilityZone: {
                n: 'AvailabilityZone'
              },
              duration: {
                n: 'Duration',
                t: 'i'
              },
              usagePrice: {
                n: 'UsagePrice',
                t: 'n'
              },
              fixedPrice: {
                n: 'FixedPrice',
                t: 'n'
              },
              productDescription: {
                n: 'ProductDescription'
              },
              instanceTenancy: {
                n: 'InstanceTenancy'
              },
              currencyCode: {
                n: 'CurrencyCode'
              },
              offeringType: {
                n: 'OfferingType'
              },
              recurringCharges: {
                n: 'RecurringCharges',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    frequency: {
                      n: 'Frequency'
                    },
                    amount: {
                      n: 'Amount',
                      t: 'n'
                    }
                  }
                }
              },
              marketplace: {
                n: 'Marketplace',
                t: 'b'
              },
              pricingDetailsSet: {
                n: 'PricingDetails',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    price: {
                      n: 'Price',
                      t: 'n'
                    },
                    count: {
                      n: 'Count',
                      t: 'i'
                    }
                  }
                }
              }
            }
          }
        },
        nextToken: {
          n: 'NextToken'
        }
      }
    },
    describeRouteTables: {
      n: 'DescribeRouteTables',
      i: {
        m: {
          RouteTableIds: {
            t: 'a',
            m: {
              n: 'RouteTableId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        routeTableSet: {
          n: 'RouteTables',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              routeTableId: {
                n: 'RouteTableId'
              },
              vpcId: {
                n: 'VpcId'
              },
              routeSet: {
                n: 'Routes',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    destinationCidrBlock: {
                      n: 'DestinationCidrBlock'
                    },
                    gatewayId: {
                      n: 'GatewayId'
                    },
                    instanceId: {
                      n: 'InstanceId'
                    },
                    instanceOwnerId: {
                      n: 'InstanceOwnerId'
                    },
                    networkInterfaceId: {
                      n: 'NetworkInterfaceId'
                    },
                    state: {
                      n: 'State'
                    }
                  }
                }
              },
              associationSet: {
                n: 'Associations',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    routeTableAssociationId: {
                      n: 'RouteTableAssociationId'
                    },
                    routeTableId: {
                      n: 'RouteTableId'
                    },
                    subnetId: {
                      n: 'SubnetId'
                    },
                    main: {
                      n: 'Main',
                      t: 'b'
                    }
                  }
                }
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              propagatingVgwSet: {
                n: 'PropagatingVgws',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    gatewayId: {
                      n: 'GatewayId'
                    }
                  }
                }
              },
              propagatedRouteSet: {
                n: 'PropagatedRoutes',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    destinationCidrBlock: {
                      n: 'DestinationCidrBlock'
                    },
                    gatewayId: {
                      n: 'GatewayId'
                    },
                    status: {
                      n: 'Status'
                    },
                    sourceId: {
                      n: 'SourceId'
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
        m: {
          GroupNames: {
            t: 'a',
            m: {
              n: 'GroupName'
            },
            f: 1
          },
          GroupIds: {
            t: 'a',
            m: {
              n: 'GroupId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        securityGroupInfo: {
          n: 'SecurityGroups',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              ownerId: {
                n: 'OwnerId'
              },
              groupName: {
                n: 'GroupName'
              },
              groupId: {
                n: 'GroupId'
              },
              groupDescription: {
                n: 'Description'
              },
              ipPermissions: {
                n: 'IpPermissions',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    ipProtocol: {
                      n: 'IpProtocol'
                    },
                    fromPort: {
                      n: 'FromPort',
                      t: 'i'
                    },
                    toPort: {
                      n: 'ToPort',
                      t: 'i'
                    },
                    groups: {
                      n: 'UserIdGroupPairs',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          userId: {
                            n: 'UserId'
                          },
                          groupName: {
                            n: 'GroupName'
                          },
                          groupId: {
                            n: 'GroupId'
                          }
                        }
                      }
                    },
                    ipRanges: {
                      n: 'IpRanges',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          cidrIp: {
                            n: 'CidrIp'
                          }
                        }
                      }
                    }
                  }
                }
              },
              ipPermissionsEgress: {
                n: 'IpPermissionsEgress',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    ipProtocol: {
                      n: 'IpProtocol'
                    },
                    fromPort: {
                      n: 'FromPort',
                      t: 'i'
                    },
                    toPort: {
                      n: 'ToPort',
                      t: 'i'
                    },
                    groups: {
                      n: 'UserIdGroupPairs',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          userId: {
                            n: 'UserId'
                          },
                          groupName: {
                            n: 'GroupName'
                          },
                          groupId: {
                            n: 'GroupId'
                          }
                        }
                      }
                    },
                    ipRanges: {
                      n: 'IpRanges',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          cidrIp: {
                            n: 'CidrIp'
                          }
                        }
                      }
                    }
                  }
                }
              },
              vpcId: {
                n: 'VpcId'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
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
        m: {
          SnapshotId: {
            r: 1
          },
          Attribute: {
            r: 1
          }
        }
      },
      o: {
        snapshotId: {
          n: 'SnapshotId'
        },
        createVolumePermission: {
          n: 'CreateVolumePermissions',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              userId: {
                n: 'UserId'
              },
              group: {
                n: 'Group'
              }
            }
          }
        },
        productCodes: {
          n: 'ProductCodes',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              productCode: {
                n: 'ProductCodeId'
              },
              type: {
                n: 'ProductCodeType'
              }
            }
          }
        }
      }
    },
    describeSnapshots: {
      n: 'DescribeSnapshots',
      i: {
        m: {
          SnapshotIds: {
            t: 'a',
            m: {
              n: 'SnapshotId'
            },
            f: 1
          },
          OwnerIds: {
            t: 'a',
            m: {
              n: 'Owner'
            },
            f: 1
          },
          RestorableByUserIds: {
            t: 'a',
            m: {
              n: 'RestorableBy'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        snapshotSet: {
          n: 'Snapshots',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              snapshotId: {
                n: 'SnapshotId'
              },
              volumeId: {
                n: 'VolumeId'
              },
              status: {
                n: 'State'
              },
              startTime: {
                n: 'StartTime',
                t: 't'
              },
              progress: {
                n: 'Progress'
              },
              ownerId: {
                n: 'OwnerId'
              },
              description: {
                n: 'Description'
              },
              volumeSize: {
                n: 'VolumeSize',
                t: 'i'
              },
              ownerAlias: {
                n: 'OwnerAlias'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
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
      o: {
        spotDatafeedSubscription: {
          n: 'SpotDatafeedSubscription',
          t: 'o',
          m: {
            ownerId: {
              n: 'OwnerId'
            },
            bucket: {
              n: 'Bucket'
            },
            prefix: {
              n: 'Prefix'
            },
            state: {
              n: 'State'
            },
            fault: {
              n: 'Fault',
              t: 'o',
              m: {
                code: {
                  n: 'Code'
                },
                message: {
                  n: 'Message'
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
        m: {
          SpotInstanceRequestIds: {
            t: 'a',
            m: {
              n: 'SpotInstanceRequestId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        spotInstanceRequestSet: {
          n: 'SpotInstanceRequests',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              spotInstanceRequestId: {
                n: 'SpotInstanceRequestId'
              },
              spotPrice: {
                n: 'SpotPrice'
              },
              type: {
                n: 'Type'
              },
              state: {
                n: 'State'
              },
              fault: {
                n: 'Fault',
                t: 'o',
                m: {
                  code: {
                    n: 'Code'
                  },
                  message: {
                    n: 'Message'
                  }
                }
              },
              status: {
                n: 'Status',
                t: 'o',
                m: {
                  code: {
                    n: 'Code'
                  },
                  updateTime: {
                    n: 'UpdateTime',
                    t: 't'
                  },
                  message: {
                    n: 'Message'
                  }
                }
              },
              validFrom: {
                n: 'ValidFrom',
                t: 't'
              },
              validUntil: {
                n: 'ValidUntil',
                t: 't'
              },
              launchGroup: {
                n: 'LaunchGroup'
              },
              availabilityZoneGroup: {
                n: 'AvailabilityZoneGroup'
              },
              launchSpecification: {
                n: 'LaunchSpecification',
                t: 'o',
                m: {
                  imageId: {
                    n: 'ImageId'
                  },
                  keyName: {
                    n: 'KeyName'
                  },
                  groupSet: {
                    n: 'SecurityGroups',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        groupName: {
                          n: 'GroupName'
                        },
                        groupId: {
                          n: 'GroupId'
                        }
                      }
                    }
                  },
                  userData: {
                    n: 'UserData'
                  },
                  addressingType: {
                    n: 'AddressingType'
                  },
                  instanceType: {
                    n: 'InstanceType'
                  },
                  placement: {
                    n: 'Placement',
                    t: 'o',
                    m: {
                      availabilityZone: {
                        n: 'AvailabilityZone'
                      },
                      groupName: {
                        n: 'GroupName'
                      }
                    }
                  },
                  kernelId: {
                    n: 'KernelId'
                  },
                  ramdiskId: {
                    n: 'RamdiskId'
                  },
                  blockDeviceMapping: {
                    n: 'BlockDeviceMappings',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        virtualName: {
                          n: 'VirtualName'
                        },
                        deviceName: {
                          n: 'DeviceName'
                        },
                        ebs: {
                          n: 'Ebs',
                          t: 'o',
                          m: {
                            snapshotId: {
                              n: 'SnapshotId'
                            },
                            volumeSize: {
                              n: 'VolumeSize',
                              t: 'i'
                            },
                            deleteOnTermination: {
                              n: 'DeleteOnTermination',
                              t: 'b'
                            },
                            volumeType: {
                              n: 'VolumeType'
                            },
                            iops: {
                              n: 'Iops',
                              t: 'i'
                            }
                          }
                        },
                        noDevice: {
                          n: 'NoDevice'
                        }
                      }
                    }
                  },
                  monitoringEnabled: {
                    n: 'MonitoringEnabled',
                    t: 'b'
                  },
                  subnetId: {
                    n: 'SubnetId'
                  },
                  networkInterfaceSet: {
                    n: 'NetworkInterfaces',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        networkInterfaceId: {
                          n: 'NetworkInterfaceId'
                        },
                        deviceIndex: {
                          n: 'DeviceIndex',
                          t: 'i'
                        },
                        subnetId: {
                          n: 'SubnetId'
                        },
                        description: {
                          n: 'Description'
                        },
                        privateIpAddress: {
                          n: 'PrivateIpAddress'
                        },
                        SecurityGroupId: {
                          n: 'Groups',
                          t: 'a',
                          m: {
                            n: 'SecurityGroupId'
                          }
                        },
                        deleteOnTermination: {
                          n: 'DeleteOnTermination',
                          t: 'b'
                        },
                        privateIpAddressesSet: {
                          n: 'PrivateIpAddresses',
                          t: 'a',
                          m: {
                            n: 'item',
                            t: 'o',
                            m: {
                              privateIpAddress: {
                                n: 'PrivateIpAddress'
                              },
                              primary: {
                                n: 'Primary',
                                t: 'b'
                              }
                            }
                          }
                        },
                        secondaryPrivateIpAddressCount: {
                          n: 'SecondaryPrivateIpAddressCount',
                          t: 'i'
                        }
                      }
                    }
                  },
                  iamInstanceProfile: {
                    n: 'IamInstanceProfile',
                    t: 'o',
                    m: {
                      arn: {
                        n: 'Arn'
                      },
                      name: {
                        n: 'Name'
                      }
                    }
                  },
                  ebsOptimized: {
                    n: 'EbsOptimized',
                    t: 'b'
                  }
                }
              },
              instanceId: {
                n: 'InstanceId'
              },
              createTime: {
                n: 'CreateTime',
                t: 't'
              },
              productDescription: {
                n: 'ProductDescription'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              launchedAvailabilityZone: {
                n: 'LaunchedAvailabilityZone'
              }
            }
          }
        }
      }
    },
    describeSpotPriceHistory: {
      n: 'DescribeSpotPriceHistory',
      i: {
        m: {
          StartTime: {
            t: 't'
          },
          EndTime: {
            t: 't'
          },
          InstanceTypes: {
            t: 'a',
            m: {
              n: 'InstanceType'
            },
            f: 1
          },
          ProductDescriptions: {
            t: 'a',
            m: {
              n: 'ProductDescription'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
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
      o: {
        spotPriceHistorySet: {
          n: 'SpotPriceHistory',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceType: {
                n: 'InstanceType'
              },
              productDescription: {
                n: 'ProductDescription'
              },
              spotPrice: {
                n: 'SpotPrice'
              },
              timestamp: {
                n: 'Timestamp',
                t: 't'
              },
              availabilityZone: {
                n: 'AvailabilityZone'
              }
            }
          }
        },
        nextToken: {
          n: 'NextToken'
        }
      }
    },
    describeSubnets: {
      n: 'DescribeSubnets',
      i: {
        m: {
          SubnetIds: {
            t: 'a',
            m: {
              n: 'SubnetId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        subnetSet: {
          n: 'Subnets',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              subnetId: {
                n: 'SubnetId'
              },
              state: {
                n: 'State'
              },
              vpcId: {
                n: 'VpcId'
              },
              cidrBlock: {
                n: 'CidrBlock'
              },
              availableIpAddressCount: {
                n: 'AvailableIpAddressCount',
                t: 'i'
              },
              availabilityZone: {
                n: 'AvailabilityZone'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
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
        m: {
          Filters: {
            t: 'a',
            m: {
              n: 'Filter',
              t: 'o',
              m: {
                Name: {
                },
                Values: {
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        tagSet: {
          n: 'Tags',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              resourceId: {
                n: 'ResourceId'
              },
              resourceType: {
                n: 'ResourceType'
              },
              key: {
                n: 'Key'
              },
              value: {
                n: 'Value'
              }
            }
          }
        }
      }
    },
    describeVolumeAttribute: {
      n: 'DescribeVolumeAttribute',
      i: {
        m: {
          VolumeId: {
            r: 1
          },
          Attribute: {
          }
        }
      },
      o: {
        volumeId: {
          n: 'VolumeId'
        },
        autoEnableIO: {
          n: 'AutoEnableIO',
          t: 'o',
          m: {
            value: {
              n: 'Value',
              t: 'b'
            }
          }
        },
        productCodes: {
          n: 'ProductCodes',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              productCode: {
                n: 'ProductCodeId'
              },
              type: {
                n: 'ProductCodeType'
              }
            }
          }
        }
      }
    },
    describeVolumeStatus: {
      n: 'DescribeVolumeStatus',
      i: {
        m: {
          VolumeIds: {
            t: 'a',
            m: {
              n: 'VolumeId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          },
          NextToken: {
          },
          MaxResults: {
            t: 'i'
          }
        }
      },
      o: {
        volumeStatusSet: {
          n: 'VolumeStatuses',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              volumeId: {
                n: 'VolumeId'
              },
              availabilityZone: {
                n: 'AvailabilityZone'
              },
              volumeStatus: {
                n: 'VolumeStatus',
                t: 'o',
                m: {
                  status: {
                    n: 'Status'
                  },
                  details: {
                    n: 'Details',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        name: {
                          n: 'Name'
                        },
                        status: {
                          n: 'Status'
                        }
                      }
                    }
                  }
                }
              },
              eventsSet: {
                n: 'Events',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    eventType: {
                      n: 'EventType'
                    },
                    description: {
                      n: 'Description'
                    },
                    notBefore: {
                      n: 'NotBefore',
                      t: 't'
                    },
                    notAfter: {
                      n: 'NotAfter',
                      t: 't'
                    },
                    eventId: {
                      n: 'EventId'
                    }
                  }
                }
              },
              actionsSet: {
                n: 'Actions',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    code: {
                      n: 'Code'
                    },
                    description: {
                      n: 'Description'
                    },
                    eventType: {
                      n: 'EventType'
                    },
                    eventId: {
                      n: 'EventId'
                    }
                  }
                }
              }
            }
          }
        },
        nextToken: {
          n: 'NextToken'
        }
      }
    },
    describeVolumes: {
      n: 'DescribeVolumes',
      i: {
        m: {
          VolumeIds: {
            t: 'a',
            m: {
              n: 'VolumeId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        volumeSet: {
          n: 'Volumes',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              volumeId: {
                n: 'VolumeId'
              },
              size: {
                n: 'Size',
                t: 'i'
              },
              snapshotId: {
                n: 'SnapshotId'
              },
              availabilityZone: {
                n: 'AvailabilityZone'
              },
              status: {
                n: 'State'
              },
              createTime: {
                n: 'CreateTime',
                t: 't'
              },
              attachmentSet: {
                n: 'Attachments',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    volumeId: {
                      n: 'VolumeId'
                    },
                    instanceId: {
                      n: 'InstanceId'
                    },
                    device: {
                      n: 'Device'
                    },
                    status: {
                      n: 'State'
                    },
                    attachTime: {
                      n: 'AttachTime',
                      t: 't'
                    },
                    deleteOnTermination: {
                      n: 'DeleteOnTermination',
                      t: 'b'
                    }
                  }
                }
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              volumeType: {
                n: 'VolumeType'
              },
              iops: {
                n: 'Iops',
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
        m: {
          VpcIds: {
            t: 'a',
            m: {
              n: 'VpcId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        vpcSet: {
          n: 'Vpcs',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              vpcId: {
                n: 'VpcId'
              },
              state: {
                n: 'State'
              },
              cidrBlock: {
                n: 'CidrBlock'
              },
              dhcpOptionsId: {
                n: 'DhcpOptionsId'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              instanceTenancy: {
                n: 'InstanceTenancy'
              }
            }
          }
        }
      }
    },
    describeVpnConnections: {
      n: 'DescribeVpnConnections',
      i: {
        m: {
          VpnConnectionIds: {
            t: 'a',
            m: {
              n: 'VpnConnectionId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        vpnConnectionSet: {
          n: 'VpnConnections',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              vpnConnectionId: {
                n: 'VpnConnectionId'
              },
              state: {
                n: 'State'
              },
              customerGatewayConfiguration: {
                n: 'CustomerGatewayConfiguration'
              },
              type: {
                n: 'Type'
              },
              customerGatewayId: {
                n: 'CustomerGatewayId'
              },
              vpnGatewayId: {
                n: 'VpnGatewayId'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              vgwTelemetry: {
                n: 'VgwTelemetry',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    outsideIpAddress: {
                      n: 'OutsideIpAddress'
                    },
                    status: {
                      n: 'Status'
                    },
                    lastStatusChange: {
                      n: 'LastStatusChange',
                      t: 't'
                    },
                    statusMessage: {
                      n: 'StatusMessage'
                    },
                    acceptedRouteCount: {
                      n: 'AcceptedRouteCount',
                      t: 'i'
                    }
                  }
                }
              },
              options: {
                n: 'Options',
                t: 'o',
                m: {
                  staticRoutesOnly: {
                    n: 'StaticRoutesOnly',
                    t: 'b'
                  }
                }
              },
              routes: {
                n: 'Routes',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    destinationCidrBlock: {
                      n: 'DestinationCidrBlock'
                    },
                    source: {
                      n: 'Source'
                    },
                    state: {
                      n: 'State'
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
        m: {
          VpnGatewayIds: {
            t: 'a',
            m: {
              n: 'VpnGatewayId'
            },
            f: 1
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
                  t: 'a',
                  m: {
                    n: 'Value'
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      },
      o: {
        vpnGatewaySet: {
          n: 'VpnGateways',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              vpnGatewayId: {
                n: 'VpnGatewayId'
              },
              state: {
                n: 'State'
              },
              type: {
                n: 'Type'
              },
              availabilityZone: {
                n: 'AvailabilityZone'
              },
              attachments: {
                n: 'VpcAttachments',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    vpcId: {
                      n: 'VpcId'
                    },
                    state: {
                      n: 'State'
                    }
                  }
                }
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
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
        m: {
          InternetGatewayId: {
            r: 1
          },
          VpcId: {
            r: 1
          }
        }
      }
    },
    detachNetworkInterface: {
      n: 'DetachNetworkInterface',
      i: {
        m: {
          AttachmentId: {
            r: 1
          },
          Force: {
            t: 'b'
          }
        }
      }
    },
    detachVolume: {
      n: 'DetachVolume',
      i: {
        m: {
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
      o: {
        volumeId: {
          n: 'VolumeId'
        },
        instanceId: {
          n: 'InstanceId'
        },
        device: {
          n: 'Device'
        },
        status: {
          n: 'State'
        },
        attachTime: {
          n: 'AttachTime',
          t: 't'
        },
        deleteOnTermination: {
          n: 'DeleteOnTermination',
          t: 'b'
        }
      }
    },
    detachVpnGateway: {
      n: 'DetachVpnGateway',
      i: {
        m: {
          VpnGatewayId: {
            r: 1
          },
          VpcId: {
            r: 1
          }
        }
      }
    },
    disableVgwRoutePropagation: {
      n: 'DisableVgwRoutePropagation',
      i: {
        m: {
          RouteTableId: {
            r: 1
          },
          GatewayId: {
            r: 1
          }
        }
      }
    },
    disassociateAddress: {
      n: 'DisassociateAddress',
      i: {
        m: {
          PublicIp: {
          },
          AssociationId: {
          }
        }
      }
    },
    disassociateRouteTable: {
      n: 'DisassociateRouteTable',
      i: {
        m: {
          AssociationId: {
            r: 1
          }
        }
      }
    },
    enableVgwRoutePropagation: {
      n: 'EnableVgwRoutePropagation',
      i: {
        m: {
          RouteTableId: {
            r: 1
          },
          GatewayId: {
            r: 1
          }
        }
      }
    },
    enableVolumeIO: {
      n: 'EnableVolumeIO',
      i: {
        m: {
          VolumeId: {
            r: 1
          }
        }
      }
    },
    getConsoleOutput: {
      n: 'GetConsoleOutput',
      i: {
        m: {
          InstanceId: {
            r: 1
          }
        }
      },
      o: {
        instanceId: {
          n: 'InstanceId'
        },
        timestamp: {
          n: 'Timestamp',
          t: 't'
        },
        output: {
          n: 'Output'
        }
      }
    },
    getPasswordData: {
      n: 'GetPasswordData',
      i: {
        m: {
          InstanceId: {
            r: 1
          }
        }
      },
      o: {
        instanceId: {
          n: 'InstanceId'
        },
        timestamp: {
          n: 'Timestamp',
          t: 't'
        },
        passwordData: {
          n: 'PasswordData'
        }
      }
    },
    importInstance: {
      n: 'ImportInstance',
      i: {
        m: {
          Description: {
          },
          LaunchSpecification: {
            t: 'o',
            m: {
              Architecture: {
              },
              SecurityGroups: {
                t: 'a',
                m: {
                  n: 'SecurityGroup'
                },
                f: 1
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
                },
                f: 1
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
            t: 'a',
            m: {
              n: 'DiskImage',
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
            },
            f: 1
          },
          Platform: {
            r: 1
          }
        }
      },
      o: {
        conversionTask: {
          n: 'ConversionTask',
          t: 'o',
          m: {
            conversionTaskId: {
              n: 'ConversionTaskId'
            },
            expirationTime: {
              n: 'ExpirationTime'
            },
            importInstance: {
              n: 'ImportInstance',
              t: 'o',
              m: {
                volumes: {
                  n: 'Volumes',
                  t: 'a',
                  m: {
                    n: 'item',
                    t: 'o',
                    m: {
                      bytesConverted: {
                        n: 'BytesConverted',
                        t: 'i'
                      },
                      availabilityZone: {
                        n: 'AvailabilityZone'
                      },
                      image: {
                        n: 'Image',
                        t: 'o',
                        m: {
                          format: {
                            n: 'Format'
                          },
                          size: {
                            n: 'Size',
                            t: 'i'
                          },
                          importManifestUrl: {
                            n: 'ImportManifestUrl'
                          },
                          checksum: {
                            n: 'Checksum'
                          }
                        }
                      },
                      volume: {
                        n: 'Volume',
                        t: 'o',
                        m: {
                          size: {
                            n: 'Size',
                            t: 'i'
                          },
                          id: {
                            n: 'Id'
                          }
                        }
                      },
                      status: {
                        n: 'Status'
                      },
                      statusMessage: {
                        n: 'StatusMessage'
                      },
                      description: {
                        n: 'Description'
                      }
                    }
                  }
                },
                instanceId: {
                  n: 'InstanceId'
                },
                platform: {
                  n: 'Platform'
                },
                description: {
                  n: 'Description'
                }
              }
            },
            importVolume: {
              n: 'ImportVolume',
              t: 'o',
              m: {
                bytesConverted: {
                  n: 'BytesConverted',
                  t: 'i'
                },
                availabilityZone: {
                  n: 'AvailabilityZone'
                },
                description: {
                  n: 'Description'
                },
                image: {
                  n: 'Image',
                  t: 'o',
                  m: {
                    format: {
                      n: 'Format'
                    },
                    size: {
                      n: 'Size',
                      t: 'i'
                    },
                    importManifestUrl: {
                      n: 'ImportManifestUrl'
                    },
                    checksum: {
                      n: 'Checksum'
                    }
                  }
                },
                volume: {
                  n: 'Volume',
                  t: 'o',
                  m: {
                    size: {
                      n: 'Size',
                      t: 'i'
                    },
                    id: {
                      n: 'Id'
                    }
                  }
                }
              }
            },
            state: {
              n: 'State'
            },
            statusMessage: {
              n: 'StatusMessage'
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
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
        m: {
          KeyName: {
            r: 1
          },
          PublicKeyMaterial: {
            r: 1
          }
        }
      },
      o: {
        keyName: {
          n: 'KeyName'
        },
        keyFingerprint: {
          n: 'KeyFingerprint'
        }
      }
    },
    importVolume: {
      n: 'ImportVolume',
      i: {
        m: {
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
      o: {
        conversionTask: {
          n: 'ConversionTask',
          t: 'o',
          m: {
            conversionTaskId: {
              n: 'ConversionTaskId'
            },
            expirationTime: {
              n: 'ExpirationTime'
            },
            importInstance: {
              n: 'ImportInstance',
              t: 'o',
              m: {
                volumes: {
                  n: 'Volumes',
                  t: 'a',
                  m: {
                    n: 'item',
                    t: 'o',
                    m: {
                      bytesConverted: {
                        n: 'BytesConverted',
                        t: 'i'
                      },
                      availabilityZone: {
                        n: 'AvailabilityZone'
                      },
                      image: {
                        n: 'Image',
                        t: 'o',
                        m: {
                          format: {
                            n: 'Format'
                          },
                          size: {
                            n: 'Size',
                            t: 'i'
                          },
                          importManifestUrl: {
                            n: 'ImportManifestUrl'
                          },
                          checksum: {
                            n: 'Checksum'
                          }
                        }
                      },
                      volume: {
                        n: 'Volume',
                        t: 'o',
                        m: {
                          size: {
                            n: 'Size',
                            t: 'i'
                          },
                          id: {
                            n: 'Id'
                          }
                        }
                      },
                      status: {
                        n: 'Status'
                      },
                      statusMessage: {
                        n: 'StatusMessage'
                      },
                      description: {
                        n: 'Description'
                      }
                    }
                  }
                },
                instanceId: {
                  n: 'InstanceId'
                },
                platform: {
                  n: 'Platform'
                },
                description: {
                  n: 'Description'
                }
              }
            },
            importVolume: {
              n: 'ImportVolume',
              t: 'o',
              m: {
                bytesConverted: {
                  n: 'BytesConverted',
                  t: 'i'
                },
                availabilityZone: {
                  n: 'AvailabilityZone'
                },
                description: {
                  n: 'Description'
                },
                image: {
                  n: 'Image',
                  t: 'o',
                  m: {
                    format: {
                      n: 'Format'
                    },
                    size: {
                      n: 'Size',
                      t: 'i'
                    },
                    importManifestUrl: {
                      n: 'ImportManifestUrl'
                    },
                    checksum: {
                      n: 'Checksum'
                    }
                  }
                },
                volume: {
                  n: 'Volume',
                  t: 'o',
                  m: {
                    size: {
                      n: 'Size',
                      t: 'i'
                    },
                    id: {
                      n: 'Id'
                    }
                  }
                }
              }
            },
            state: {
              n: 'State'
            },
            statusMessage: {
              n: 'StatusMessage'
            },
            tagSet: {
              n: 'Tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                    n: 'Key'
                  },
                  value: {
                    n: 'Value'
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
        m: {
          ImageId: {
            r: 1
          },
          Attribute: {
          },
          OperationType: {
          },
          UserIds: {
            t: 'a',
            m: {
              n: 'UserId'
            },
            f: 1
          },
          UserGroups: {
            t: 'a',
            m: {
              n: 'UserGroup'
            },
            f: 1
          },
          ProductCodes: {
            t: 'a',
            m: {
              n: 'ProductCode'
            },
            f: 1
          },
          Value: {
          },
          LaunchPermission: {
            t: 'o',
            m: {
              Add: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    UserId: {
                    },
                    Group: {
                    }
                  }
                },
                f: 1
              },
              Remove: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    UserId: {
                    },
                    Group: {
                    }
                  }
                },
                f: 1
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
      }
    },
    modifyInstanceAttribute: {
      n: 'ModifyInstanceAttribute',
      i: {
        m: {
          InstanceId: {
            r: 1
          },
          Attribute: {
          },
          Value: {
          },
          BlockDeviceMappings: {
            t: 'a',
            m: {
              n: 'BlockDeviceMapping',
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
            },
            f: 1
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
            t: 'a',
            m: {
              n: 'GroupId'
            },
            f: 1
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
      }
    },
    modifyNetworkInterfaceAttribute: {
      n: 'ModifyNetworkInterfaceAttribute',
      i: {
        m: {
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
            t: 'a',
            m: {
              n: 'SecurityGroupId'
            },
            f: 1
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
      }
    },
    modifySnapshotAttribute: {
      n: 'ModifySnapshotAttribute',
      i: {
        m: {
          SnapshotId: {
            r: 1
          },
          Attribute: {
          },
          OperationType: {
          },
          UserIds: {
            t: 'a',
            m: {
              n: 'UserId'
            },
            f: 1
          },
          GroupNames: {
            t: 'a',
            m: {
              n: 'UserGroup'
            },
            f: 1
          },
          CreateVolumePermission: {
            t: 'o',
            m: {
              Add: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    UserId: {
                    },
                    Group: {
                    }
                  }
                },
                f: 1
              },
              Remove: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    UserId: {
                    },
                    Group: {
                    }
                  }
                },
                f: 1
              }
            }
          }
        }
      }
    },
    modifyVolumeAttribute: {
      n: 'ModifyVolumeAttribute',
      i: {
        m: {
          VolumeId: {
            r: 1
          },
          AutoEnableIO: {
            t: 'b'
          }
        }
      }
    },
    monitorInstances: {
      n: 'MonitorInstances',
      i: {
        m: {
          InstanceIds: {
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1,
            f: 1
          }
        }
      },
      o: {
        instancesSet: {
          n: 'InstanceMonitorings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceId: {
                n: 'InstanceId'
              },
              monitoring: {
                n: 'Monitoring',
                t: 'o',
                m: {
                  state: {
                    n: 'State'
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
        m: {
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
      o: {
        reservedInstancesId: {
          n: 'ReservedInstancesId'
        }
      }
    },
    rebootInstances: {
      n: 'RebootInstances',
      i: {
        m: {
          InstanceIds: {
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1,
            f: 1
          }
        }
      }
    },
    registerImage: {
      n: 'RegisterImage',
      i: {
        m: {
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
            },
            f: 1
          }
        }
      },
      o: {
        imageId: {
          n: 'ImageId'
        }
      }
    },
    releaseAddress: {
      n: 'ReleaseAddress',
      i: {
        m: {
          PublicIp: {
          },
          AllocationId: {
          }
        }
      }
    },
    replaceNetworkAclAssociation: {
      n: 'ReplaceNetworkAclAssociation',
      i: {
        m: {
          AssociationId: {
            r: 1
          },
          NetworkAclId: {
            r: 1
          }
        }
      },
      o: {
        newAssociationId: {
          n: 'NewAssociationId'
        }
      }
    },
    replaceNetworkAclEntry: {
      n: 'ReplaceNetworkAclEntry',
      i: {
        m: {
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
      }
    },
    replaceRoute: {
      n: 'ReplaceRoute',
      i: {
        m: {
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
      }
    },
    replaceRouteTableAssociation: {
      n: 'ReplaceRouteTableAssociation',
      i: {
        m: {
          AssociationId: {
            r: 1
          },
          RouteTableId: {
            r: 1
          }
        }
      },
      o: {
        newAssociationId: {
          n: 'NewAssociationId'
        }
      }
    },
    reportInstanceStatus: {
      n: 'ReportInstanceStatus',
      i: {
        m: {
          Instances: {
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            f: 1
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
            t: 'a',
            m: {
              n: 'ReasonCode'
            },
            f: 1
          },
          Description: {
          }
        }
      }
    },
    requestSpotInstances: {
      n: 'RequestSpotInstances',
      i: {
        m: {
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
                },
                f: 1
              },
              MonitoringEnabled: {
                t: 'b'
              },
              SubnetId: {
              },
              NetworkInterfaces: {
                t: 'a',
                m: {
                  n: 'NetworkInterfaceSet',
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
                      t: 'a',
                      m: {
                        n: 'SecurityGroupId'
                      },
                      f: 1
                    },
                    DeleteOnTermination: {
                      t: 'b'
                    },
                    PrivateIpAddresses: {
                      t: 'a',
                      m: {
                        n: 'PrivateIpAddressesSet',
                        t: 'o',
                        m: {
                          PrivateIpAddress: {
                            r: 1
                          },
                          Primary: {
                            t: 'b'
                          }
                        }
                      },
                      f: 1
                    },
                    SecondaryPrivateIpAddressCount: {
                      t: 'i'
                    }
                  }
                },
                f: 1
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
              },
              SecurityGroupIds: {
                t: 'a',
                m: {
                  n: 'SecurityGroupId'
                },
                f: 1
              },
              SecurityGroups: {
                t: 'a',
                m: {
                  n: 'SecurityGroup'
                },
                f: 1
              }
            }
          }
        }
      },
      o: {
        spotInstanceRequestSet: {
          n: 'SpotInstanceRequests',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              spotInstanceRequestId: {
                n: 'SpotInstanceRequestId'
              },
              spotPrice: {
                n: 'SpotPrice'
              },
              type: {
                n: 'Type'
              },
              state: {
                n: 'State'
              },
              fault: {
                n: 'Fault',
                t: 'o',
                m: {
                  code: {
                    n: 'Code'
                  },
                  message: {
                    n: 'Message'
                  }
                }
              },
              status: {
                n: 'Status',
                t: 'o',
                m: {
                  code: {
                    n: 'Code'
                  },
                  updateTime: {
                    n: 'UpdateTime',
                    t: 't'
                  },
                  message: {
                    n: 'Message'
                  }
                }
              },
              validFrom: {
                n: 'ValidFrom',
                t: 't'
              },
              validUntil: {
                n: 'ValidUntil',
                t: 't'
              },
              launchGroup: {
                n: 'LaunchGroup'
              },
              availabilityZoneGroup: {
                n: 'AvailabilityZoneGroup'
              },
              launchSpecification: {
                n: 'LaunchSpecification',
                t: 'o',
                m: {
                  imageId: {
                    n: 'ImageId'
                  },
                  keyName: {
                    n: 'KeyName'
                  },
                  groupSet: {
                    n: 'SecurityGroups',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        groupName: {
                          n: 'GroupName'
                        },
                        groupId: {
                          n: 'GroupId'
                        }
                      }
                    }
                  },
                  userData: {
                    n: 'UserData'
                  },
                  addressingType: {
                    n: 'AddressingType'
                  },
                  instanceType: {
                    n: 'InstanceType'
                  },
                  placement: {
                    n: 'Placement',
                    t: 'o',
                    m: {
                      availabilityZone: {
                        n: 'AvailabilityZone'
                      },
                      groupName: {
                        n: 'GroupName'
                      }
                    }
                  },
                  kernelId: {
                    n: 'KernelId'
                  },
                  ramdiskId: {
                    n: 'RamdiskId'
                  },
                  blockDeviceMapping: {
                    n: 'BlockDeviceMappings',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        virtualName: {
                          n: 'VirtualName'
                        },
                        deviceName: {
                          n: 'DeviceName'
                        },
                        ebs: {
                          n: 'Ebs',
                          t: 'o',
                          m: {
                            snapshotId: {
                              n: 'SnapshotId'
                            },
                            volumeSize: {
                              n: 'VolumeSize',
                              t: 'i'
                            },
                            deleteOnTermination: {
                              n: 'DeleteOnTermination',
                              t: 'b'
                            },
                            volumeType: {
                              n: 'VolumeType'
                            },
                            iops: {
                              n: 'Iops',
                              t: 'i'
                            }
                          }
                        },
                        noDevice: {
                          n: 'NoDevice'
                        }
                      }
                    }
                  },
                  monitoringEnabled: {
                    n: 'MonitoringEnabled',
                    t: 'b'
                  },
                  subnetId: {
                    n: 'SubnetId'
                  },
                  networkInterfaceSet: {
                    n: 'NetworkInterfaces',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        networkInterfaceId: {
                          n: 'NetworkInterfaceId'
                        },
                        deviceIndex: {
                          n: 'DeviceIndex',
                          t: 'i'
                        },
                        subnetId: {
                          n: 'SubnetId'
                        },
                        description: {
                          n: 'Description'
                        },
                        privateIpAddress: {
                          n: 'PrivateIpAddress'
                        },
                        SecurityGroupId: {
                          n: 'Groups',
                          t: 'a',
                          m: {
                            n: 'SecurityGroupId'
                          }
                        },
                        deleteOnTermination: {
                          n: 'DeleteOnTermination',
                          t: 'b'
                        },
                        privateIpAddressesSet: {
                          n: 'PrivateIpAddresses',
                          t: 'a',
                          m: {
                            n: 'item',
                            t: 'o',
                            m: {
                              privateIpAddress: {
                                n: 'PrivateIpAddress'
                              },
                              primary: {
                                n: 'Primary',
                                t: 'b'
                              }
                            }
                          }
                        },
                        secondaryPrivateIpAddressCount: {
                          n: 'SecondaryPrivateIpAddressCount',
                          t: 'i'
                        }
                      }
                    }
                  },
                  iamInstanceProfile: {
                    n: 'IamInstanceProfile',
                    t: 'o',
                    m: {
                      arn: {
                        n: 'Arn'
                      },
                      name: {
                        n: 'Name'
                      }
                    }
                  },
                  ebsOptimized: {
                    n: 'EbsOptimized',
                    t: 'b'
                  }
                }
              },
              instanceId: {
                n: 'InstanceId'
              },
              createTime: {
                n: 'CreateTime',
                t: 't'
              },
              productDescription: {
                n: 'ProductDescription'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              launchedAvailabilityZone: {
                n: 'LaunchedAvailabilityZone'
              }
            }
          }
        }
      }
    },
    resetImageAttribute: {
      n: 'ResetImageAttribute',
      i: {
        m: {
          ImageId: {
            r: 1
          },
          Attribute: {
            r: 1
          }
        }
      }
    },
    resetInstanceAttribute: {
      n: 'ResetInstanceAttribute',
      i: {
        m: {
          InstanceId: {
            r: 1
          },
          Attribute: {
            r: 1
          }
        }
      }
    },
    resetNetworkInterfaceAttribute: {
      n: 'ResetNetworkInterfaceAttribute',
      i: {
        m: {
          NetworkInterfaceId: {
            r: 1
          },
          SourceDestCheck: {
          }
        }
      }
    },
    resetSnapshotAttribute: {
      n: 'ResetSnapshotAttribute',
      i: {
        m: {
          SnapshotId: {
            r: 1
          },
          Attribute: {
            r: 1
          }
        }
      }
    },
    revokeSecurityGroupEgress: {
      n: 'RevokeSecurityGroupEgress',
      i: {
        m: {
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
                  t: 'a',
                  m: {
                    n: 'Groups',
                    t: 'o',
                    m: {
                      UserId: {
                      },
                      GroupName: {
                      },
                      GroupId: {
                      }
                    }
                  },
                  f: 1
                },
                IpRanges: {
                  t: 'a',
                  m: {
                    t: 'o',
                    m: {
                      CidrIp: {
                      }
                    }
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      }
    },
    revokeSecurityGroupIngress: {
      n: 'RevokeSecurityGroupIngress',
      i: {
        m: {
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
                  t: 'a',
                  m: {
                    n: 'Groups',
                    t: 'o',
                    m: {
                      UserId: {
                      },
                      GroupName: {
                      },
                      GroupId: {
                      }
                    }
                  },
                  f: 1
                },
                IpRanges: {
                  t: 'a',
                  m: {
                    t: 'o',
                    m: {
                      CidrIp: {
                      }
                    }
                  },
                  f: 1
                }
              }
            },
            f: 1
          }
        }
      }
    },
    runInstances: {
      n: 'RunInstances',
      i: {
        m: {
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
            t: 'a',
            m: {
              n: 'SecurityGroup'
            },
            f: 1
          },
          SecurityGroupIds: {
            t: 'a',
            m: {
              n: 'SecurityGroupId'
            },
            f: 1
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
            },
            f: 1
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
            t: 'a',
            m: {
              n: 'NetworkInterface',
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
                  t: 'a',
                  m: {
                    n: 'SecurityGroupId'
                  },
                  f: 1
                },
                DeleteOnTermination: {
                  t: 'b'
                },
                PrivateIpAddresses: {
                  t: 'a',
                  m: {
                    n: 'PrivateIpAddressesSet',
                    t: 'o',
                    m: {
                      PrivateIpAddress: {
                        r: 1
                      },
                      Primary: {
                        t: 'b'
                      }
                    }
                  },
                  f: 1
                },
                SecondaryPrivateIpAddressCount: {
                  t: 'i'
                }
              }
            },
            f: 1
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
      o: {
        reservationId: {
          n: 'ReservationId'
        },
        ownerId: {
          n: 'OwnerId'
        },
        requesterId: {
          n: 'RequesterId'
        },
        groupSet: {
          n: 'Groups',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              groupName: {
                n: 'GroupName'
              },
              groupId: {
                n: 'GroupId'
              }
            }
          }
        },
        instancesSet: {
          n: 'Instances',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceId: {
                n: 'InstanceId'
              },
              imageId: {
                n: 'ImageId'
              },
              instanceState: {
                n: 'State',
                t: 'o',
                m: {
                  code: {
                    n: 'Code',
                    t: 'i'
                  },
                  name: {
                    n: 'Name'
                  }
                }
              },
              privateDnsName: {
                n: 'PrivateDnsName'
              },
              dnsName: {
                n: 'PublicDnsName'
              },
              reason: {
                n: 'StateTransitionReason'
              },
              keyName: {
                n: 'KeyName'
              },
              amiLaunchIndex: {
                n: 'AmiLaunchIndex',
                t: 'i'
              },
              productCodes: {
                n: 'ProductCodes',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    productCode: {
                      n: 'ProductCodeId'
                    },
                    type: {
                      n: 'ProductCodeType'
                    }
                  }
                }
              },
              instanceType: {
                n: 'InstanceType'
              },
              launchTime: {
                n: 'LaunchTime',
                t: 't'
              },
              placement: {
                n: 'Placement',
                t: 'o',
                m: {
                  availabilityZone: {
                    n: 'AvailabilityZone'
                  },
                  groupName: {
                    n: 'GroupName'
                  },
                  tenancy: {
                    n: 'Tenancy'
                  }
                }
              },
              kernelId: {
                n: 'KernelId'
              },
              ramdiskId: {
                n: 'RamdiskId'
              },
              platform: {
                n: 'Platform'
              },
              monitoring: {
                n: 'Monitoring',
                t: 'o',
                m: {
                  state: {
                    n: 'State'
                  }
                }
              },
              subnetId: {
                n: 'SubnetId'
              },
              vpcId: {
                n: 'VpcId'
              },
              privateIpAddress: {
                n: 'PrivateIpAddress'
              },
              ipAddress: {
                n: 'PublicIpAddress'
              },
              stateReason: {
                n: 'StateReason',
                t: 'o',
                m: {
                  code: {
                    n: 'Code'
                  },
                  message: {
                    n: 'Message'
                  }
                }
              },
              architecture: {
                n: 'Architecture'
              },
              rootDeviceType: {
                n: 'RootDeviceType'
              },
              rootDeviceName: {
                n: 'RootDeviceName'
              },
              blockDeviceMapping: {
                n: 'BlockDeviceMappings',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    deviceName: {
                      n: 'DeviceName'
                    },
                    ebs: {
                      n: 'Ebs',
                      t: 'o',
                      m: {
                        volumeId: {
                          n: 'VolumeId'
                        },
                        status: {
                          n: 'Status'
                        },
                        attachTime: {
                          n: 'AttachTime',
                          t: 't'
                        },
                        deleteOnTermination: {
                          n: 'DeleteOnTermination',
                          t: 'b'
                        }
                      }
                    }
                  }
                }
              },
              virtualizationType: {
                n: 'VirtualizationType'
              },
              instanceLifecycle: {
                n: 'InstanceLifecycle'
              },
              spotInstanceRequestId: {
                n: 'SpotInstanceRequestId'
              },
              license: {
                n: 'License',
                t: 'o',
                m: {
                  pool: {
                    n: 'Pool'
                  }
                }
              },
              clientToken: {
                n: 'ClientToken'
              },
              tagSet: {
                n: 'Tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                      n: 'Key'
                    },
                    value: {
                      n: 'Value'
                    }
                  }
                }
              },
              groupSet: {
                n: 'SecurityGroups',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    groupName: {
                      n: 'GroupName'
                    },
                    groupId: {
                      n: 'GroupId'
                    }
                  }
                }
              },
              sourceDestCheck: {
                n: 'SourceDestCheck',
                t: 'b'
              },
              hypervisor: {
                n: 'Hypervisor'
              },
              networkInterfaceSet: {
                n: 'NetworkInterfaces',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    networkInterfaceId: {
                      n: 'NetworkInterfaceId'
                    },
                    subnetId: {
                      n: 'SubnetId'
                    },
                    vpcId: {
                      n: 'VpcId'
                    },
                    description: {
                      n: 'Description'
                    },
                    ownerId: {
                      n: 'OwnerId'
                    },
                    status: {
                      n: 'Status'
                    },
                    privateIpAddress: {
                      n: 'PrivateIpAddress'
                    },
                    privateDnsName: {
                      n: 'PrivateDnsName'
                    },
                    sourceDestCheck: {
                      n: 'SourceDestCheck',
                      t: 'b'
                    },
                    groupSet: {
                      n: 'Groups',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          groupName: {
                            n: 'GroupName'
                          },
                          groupId: {
                            n: 'GroupId'
                          }
                        }
                      }
                    },
                    attachment: {
                      n: 'Attachment',
                      t: 'o',
                      m: {
                        attachmentId: {
                          n: 'AttachmentId'
                        },
                        deviceIndex: {
                          n: 'DeviceIndex',
                          t: 'i'
                        },
                        status: {
                          n: 'Status'
                        },
                        attachTime: {
                          n: 'AttachTime',
                          t: 't'
                        },
                        deleteOnTermination: {
                          n: 'DeleteOnTermination',
                          t: 'b'
                        }
                      }
                    },
                    association: {
                      n: 'Association',
                      t: 'o',
                      m: {
                        publicIp: {
                          n: 'PublicIp'
                        },
                        ipOwnerId: {
                          n: 'IpOwnerId'
                        }
                      }
                    }
                  }
                }
              },
              iamInstanceProfile: {
                n: 'IamInstanceProfile',
                t: 'o',
                m: {
                  arn: {
                    n: 'Arn'
                  },
                  id: {
                    n: 'Id'
                  }
                }
              },
              ebsOptimized: {
                n: 'EbsOptimized',
                t: 'b'
              }
            }
          }
        }
      }
    },
    startInstances: {
      n: 'StartInstances',
      i: {
        m: {
          InstanceIds: {
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1,
            f: 1
          },
          AdditionalInfo: {
          }
        }
      },
      o: {
        instancesSet: {
          n: 'StartingInstances',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceId: {
                n: 'InstanceId'
              },
              currentState: {
                n: 'CurrentState',
                t: 'o',
                m: {
                  code: {
                    n: 'Code',
                    t: 'i'
                  },
                  name: {
                    n: 'Name'
                  }
                }
              },
              previousState: {
                n: 'PreviousState',
                t: 'o',
                m: {
                  code: {
                    n: 'Code',
                    t: 'i'
                  },
                  name: {
                    n: 'Name'
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
        m: {
          InstanceIds: {
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1,
            f: 1
          },
          Force: {
            t: 'b'
          }
        }
      },
      o: {
        instancesSet: {
          n: 'StoppingInstances',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceId: {
                n: 'InstanceId'
              },
              currentState: {
                n: 'CurrentState',
                t: 'o',
                m: {
                  code: {
                    n: 'Code',
                    t: 'i'
                  },
                  name: {
                    n: 'Name'
                  }
                }
              },
              previousState: {
                n: 'PreviousState',
                t: 'o',
                m: {
                  code: {
                    n: 'Code',
                    t: 'i'
                  },
                  name: {
                    n: 'Name'
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
        m: {
          InstanceIds: {
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1,
            f: 1
          }
        }
      },
      o: {
        instancesSet: {
          n: 'TerminatingInstances',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceId: {
                n: 'InstanceId'
              },
              currentState: {
                n: 'CurrentState',
                t: 'o',
                m: {
                  code: {
                    n: 'Code',
                    t: 'i'
                  },
                  name: {
                    n: 'Name'
                  }
                }
              },
              previousState: {
                n: 'PreviousState',
                t: 'o',
                m: {
                  code: {
                    n: 'Code',
                    t: 'i'
                  },
                  name: {
                    n: 'Name'
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
        m: {
          NetworkInterfaceId: {
            r: 1
          },
          PrivateIpAddresses: {
            t: 'a',
            m: {
              n: 'PrivateIpAddress'
            },
            r: 1,
            f: 1
          }
        }
      }
    },
    unmonitorInstances: {
      n: 'UnmonitorInstances',
      i: {
        m: {
          InstanceIds: {
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1,
            f: 1
          }
        }
      },
      o: {
        instancesSet: {
          n: 'InstanceMonitorings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceId: {
                n: 'InstanceId'
              },
              monitoring: {
                n: 'Monitoring',
                t: 'o',
                m: {
                  state: {
                    n: 'State'
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
