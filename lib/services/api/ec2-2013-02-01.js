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
  apiVersion: '2013-02-01',
  endpointPrefix: 'ec2',
  serviceAbbreviation: 'Amazon EC2',
  serviceFullName: 'Amazon Elastic Compute Cloud',
  signatureVersion: 'v2',
  timestampFormat: 'iso8601',
  operations: {
    activateLicense: {
      name: 'ActivateLicense',
      input: {
        type: 'structure',
        members: {
          LicenseId: {
            required: true
          },
          Capacity: {
            type: 'integer',
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
    allocateAddress: {
      name: 'AllocateAddress',
      input: {
        type: 'structure',
        members: {
          Domain: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          publicIp: {
            name: 'PublicIp'
          },
          domain: {
            name: 'Domain'
          },
          allocationId: {
            name: 'AllocationId'
          }
        }
      }
    },
    assignPrivateIpAddresses: {
      name: 'AssignPrivateIpAddresses',
      input: {
        type: 'structure',
        members: {
          NetworkInterfaceId: {
            required: true
          },
          PrivateIpAddresses: {
            type: 'list',
            members: {
              name: 'PrivateIpAddress'
            },
            flattened: true
          },
          SecondaryPrivateIpAddressCount: {
            type: 'integer'
          },
          AllowReassignment: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    associateAddress: {
      name: 'AssociateAddress',
      input: {
        type: 'structure',
        members: {
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
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          associationId: {
            name: 'AssociationId'
          }
        }
      }
    },
    associateDhcpOptions: {
      name: 'AssociateDhcpOptions',
      input: {
        type: 'structure',
        members: {
          DhcpOptionsId: {
            required: true
          },
          VpcId: {
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
    associateRouteTable: {
      name: 'AssociateRouteTable',
      input: {
        type: 'structure',
        members: {
          SubnetId: {
            required: true
          },
          RouteTableId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          associationId: {
            name: 'AssociationId'
          }
        }
      }
    },
    attachInternetGateway: {
      name: 'AttachInternetGateway',
      input: {
        type: 'structure',
        members: {
          InternetGatewayId: {
            required: true
          },
          VpcId: {
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
    attachNetworkInterface: {
      name: 'AttachNetworkInterface',
      input: {
        type: 'structure',
        members: {
          NetworkInterfaceId: {
            required: true
          },
          InstanceId: {
            required: true
          },
          DeviceIndex: {
            type: 'integer',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          attachmentId: {
            name: 'AttachmentId'
          }
        }
      }
    },
    attachVolume: {
      name: 'AttachVolume',
      input: {
        type: 'structure',
        members: {
          VolumeId: {
            required: true
          },
          InstanceId: {
            required: true
          },
          Device: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          volumeId: {
            name: 'VolumeId'
          },
          instanceId: {
            name: 'InstanceId'
          },
          device: {
            name: 'Device'
          },
          status: {
            name: 'State'
          },
          attachTime: {
            type: 'timestamp',
            name: 'AttachTime'
          },
          deleteOnTermination: {
            type: 'boolean',
            name: 'DeleteOnTermination'
          }
        },
        name: 'attachment'
      }
    },
    attachVpnGateway: {
      name: 'AttachVpnGateway',
      input: {
        type: 'structure',
        members: {
          VpnGatewayId: {
            required: true
          },
          VpcId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          attachment: {
            type: 'structure',
            members: {
              vpcId: {
                name: 'VpcId'
              },
              state: {
                name: 'State'
              }
            },
            name: 'VpcAttachement'
          }
        }
      }
    },
    authorizeSecurityGroupEgress: {
      name: 'AuthorizeSecurityGroupEgress',
      input: {
        type: 'structure',
        members: {
          GroupId: {
            required: true
          },
          SourceSecurityGroupName: {
          },
          SourceSecurityGroupOwnerId: {
          },
          IpProtocol: {
          },
          FromPort: {
            type: 'integer'
          },
          ToPort: {
            type: 'integer'
          },
          CidrIp: {
          },
          IpPermissions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                IpProtocol: {
                },
                FromPort: {
                  type: 'integer'
                },
                ToPort: {
                  type: 'integer'
                },
                UserIdGroupPairs: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      UserId: {
                      },
                      GroupName: {
                      },
                      GroupId: {
                      }
                    },
                    name: 'Groups'
                  },
                  flattened: true
                },
                IpRanges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      CidrIp: {
                      }
                    }
                  },
                  flattened: true
                }
              }
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    authorizeSecurityGroupIngress: {
      name: 'AuthorizeSecurityGroupIngress',
      input: {
        type: 'structure',
        members: {
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
            type: 'integer'
          },
          ToPort: {
            type: 'integer'
          },
          CidrIp: {
          },
          IpPermissions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                IpProtocol: {
                },
                FromPort: {
                  type: 'integer'
                },
                ToPort: {
                  type: 'integer'
                },
                UserIdGroupPairs: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      UserId: {
                      },
                      GroupName: {
                      },
                      GroupId: {
                      }
                    },
                    name: 'Groups'
                  },
                  flattened: true
                },
                IpRanges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      CidrIp: {
                      }
                    }
                  },
                  flattened: true
                }
              }
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    bundleInstance: {
      name: 'BundleInstance',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          },
          Storage: {
            type: 'structure',
            members: {
              S3: {
                type: 'structure',
                members: {
                  Bucket: {
                  },
                  Prefix: {
                  },
                  AWSAccessKeyId: {
                  },
                  UploadPolicy: {
                    type: 'base64'
                  },
                  UploadPolicySignature: {
                  }
                }
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          bundleInstanceTask: {
            type: 'structure',
            members: {
              instanceId: {
                name: 'InstanceId'
              },
              bundleId: {
                name: 'BundleId'
              },
              state: {
                name: 'State'
              },
              startTime: {
                type: 'timestamp',
                name: 'StartTime'
              },
              updateTime: {
                type: 'timestamp',
                name: 'UpdateTime'
              },
              storage: {
                type: 'structure',
                members: {
                  S3: {
                    type: 'structure',
                    members: {
                      bucket: {
                        name: 'Bucket'
                      },
                      prefix: {
                        name: 'Prefix'
                      },
                      AWSAccessKeyId: {
                      },
                      uploadPolicy: {
                        name: 'UploadPolicy'
                      },
                      uploadPolicySignature: {
                        name: 'UploadPolicySignature'
                      }
                    }
                  }
                },
                name: 'Storage'
              },
              progress: {
                name: 'Progress'
              },
              error: {
                type: 'structure',
                members: {
                  code: {
                    name: 'Code'
                  },
                  message: {
                    name: 'Message'
                  }
                },
                name: 'BundleTaskError'
              }
            },
            name: 'BundleTask'
          }
        }
      }
    },
    cancelBundleTask: {
      name: 'CancelBundleTask',
      input: {
        type: 'structure',
        members: {
          BundleId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          bundleInstanceTask: {
            type: 'structure',
            members: {
              instanceId: {
                name: 'InstanceId'
              },
              bundleId: {
                name: 'BundleId'
              },
              state: {
                name: 'State'
              },
              startTime: {
                type: 'timestamp',
                name: 'StartTime'
              },
              updateTime: {
                type: 'timestamp',
                name: 'UpdateTime'
              },
              storage: {
                type: 'structure',
                members: {
                  S3: {
                    type: 'structure',
                    members: {
                      bucket: {
                        name: 'Bucket'
                      },
                      prefix: {
                        name: 'Prefix'
                      },
                      AWSAccessKeyId: {
                      },
                      uploadPolicy: {
                        name: 'UploadPolicy'
                      },
                      uploadPolicySignature: {
                        name: 'UploadPolicySignature'
                      }
                    }
                  }
                },
                name: 'Storage'
              },
              progress: {
                name: 'Progress'
              },
              error: {
                type: 'structure',
                members: {
                  code: {
                    name: 'Code'
                  },
                  message: {
                    name: 'Message'
                  }
                },
                name: 'BundleTaskError'
              }
            },
            name: 'BundleTask'
          }
        }
      }
    },
    cancelConversionTask: {
      name: 'CancelConversionTask',
      input: {
        type: 'structure',
        members: {
          ConversionTaskId: {
            required: true
          },
          ReasonMessage: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    cancelExportTask: {
      name: 'CancelExportTask',
      input: {
        type: 'structure',
        members: {
          ExportTaskId: {
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
    cancelReservedInstancesListing: {
      name: 'CancelReservedInstancesListing',
      input: {
        type: 'structure',
        members: {
          ReservedInstancesListingId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          reservedInstancesListingsSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                reservedInstancesListingId: {
                  name: 'ReservedInstancesListingId'
                },
                reservedInstancesId: {
                  name: 'ReservedInstancesId'
                },
                createDate: {
                  type: 'timestamp',
                  name: 'CreateDate'
                },
                updateDate: {
                  type: 'timestamp',
                  name: 'UpdateDate'
                },
                status: {
                  name: 'Status'
                },
                statusMessage: {
                  name: 'StatusMessage'
                },
                instanceCounts: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      state: {
                        name: 'State'
                      },
                      instanceCount: {
                        type: 'integer',
                        name: 'InstanceCount'
                      }
                    },
                    name: 'item'
                  },
                  name: 'InstanceCounts'
                },
                priceSchedules: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      term: {
                        type: 'integer',
                        name: 'Term'
                      },
                      price: {
                        type: 'float',
                        name: 'Price'
                      },
                      currencyCode: {
                        name: 'CurrencyCode'
                      },
                      active: {
                        type: 'boolean',
                        name: 'Active'
                      }
                    },
                    name: 'item'
                  },
                  name: 'PriceSchedules'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                clientToken: {
                  name: 'ClientToken'
                }
              },
              name: 'item'
            },
            name: 'ReservedInstancesListings'
          }
        }
      }
    },
    cancelSpotInstanceRequests: {
      name: 'CancelSpotInstanceRequests',
      input: {
        type: 'structure',
        members: {
          SpotInstanceRequestIds: {
            type: 'list',
            members: {
              name: 'SpotInstanceRequestId'
            },
            required: true,
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          spotInstanceRequestSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                spotInstanceRequestId: {
                  name: 'SpotInstanceRequestId'
                },
                state: {
                  name: 'State'
                }
              },
              name: 'item'
            },
            name: 'CancelledSpotInstanceRequests'
          }
        }
      }
    },
    confirmProductInstance: {
      name: 'ConfirmProductInstance',
      input: {
        type: 'structure',
        members: {
          ProductCode: {
            required: true
          },
          InstanceId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ownerId: {
            name: 'OwnerId'
          }
        }
      }
    },
    copyImage: {
      name: 'CopyImage',
      input: {
        type: 'structure',
        members: {
          SourceRegion: {
            required: true
          },
          SourceImageId: {
            required: true
          },
          Name: {
            required: true
          },
          Description: {
          },
          ClientToken: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          imageId: {
            name: 'ImageId'
          }
        }
      }
    },
    copySnapshot: {
      name: 'CopySnapshot',
      input: {
        type: 'structure',
        members: {
          SourceRegion: {
            required: true
          },
          SourceSnapshotId: {
            required: true
          },
          Description: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          snapshotId: {
            name: 'SnapshotId'
          }
        }
      }
    },
    createCustomerGateway: {
      name: 'CreateCustomerGateway',
      input: {
        type: 'structure',
        members: {
          Type: {
            required: true
          },
          PublicIp: {
            required: true,
            name: 'IpAddress'
          },
          BgpAsn: {
            type: 'integer',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          customerGateway: {
            type: 'structure',
            members: {
              customerGatewayId: {
                name: 'CustomerGatewayId'
              },
              state: {
                name: 'State'
              },
              type: {
                name: 'Type'
              },
              ipAddress: {
                name: 'IpAddress'
              },
              bgpAsn: {
                name: 'BgpAsn'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              }
            },
            name: 'CustomerGateway'
          }
        }
      }
    },
    createDhcpOptions: {
      name: 'CreateDhcpOptions',
      input: {
        type: 'structure',
        members: {
          DhcpConfigurations: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Key: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'DhcpConfiguration'
            },
            required: true,
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          dhcpOptions: {
            type: 'structure',
            members: {
              dhcpOptionsId: {
                name: 'DhcpOptionsId'
              },
              dhcpConfigurationSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    valueSet: {
                      type: 'list',
                      members: {
                        name: 'item'
                      },
                      name: 'Values'
                    }
                  },
                  name: 'item'
                },
                name: 'DhcpConfigurations'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              }
            },
            name: 'DhcpOptions'
          }
        }
      }
    },
    createImage: {
      name: 'CreateImage',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          },
          Name: {
            required: true
          },
          Description: {
          },
          NoReboot: {
            type: 'boolean'
          },
          BlockDeviceMappings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                VirtualName: {
                },
                DeviceName: {
                },
                Ebs: {
                  type: 'structure',
                  members: {
                    SnapshotId: {
                    },
                    VolumeSize: {
                      type: 'integer'
                    },
                    DeleteOnTermination: {
                      type: 'boolean'
                    },
                    VolumeType: {
                    },
                    Iops: {
                      type: 'integer'
                    }
                  }
                },
                NoDevice: {
                }
              },
              name: 'BlockDeviceMapping'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          imageId: {
            name: 'ImageId'
          }
        }
      }
    },
    createInstanceExportTask: {
      name: 'CreateInstanceExportTask',
      input: {
        type: 'structure',
        members: {
          Description: {
          },
          InstanceId: {
            required: true
          },
          TargetEnvironment: {
          },
          ExportToS3Task: {
            type: 'structure',
            members: {
              DiskImageFormat: {
              },
              ContainerFormat: {
              },
              S3Bucket: {
              },
              S3Prefix: {
              }
            },
            name: 'ExportToS3'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          exportTask: {
            type: 'structure',
            members: {
              exportTaskId: {
                name: 'ExportTaskId'
              },
              description: {
                name: 'Description'
              },
              state: {
                name: 'State'
              },
              statusMessage: {
                name: 'StatusMessage'
              },
              instanceExport: {
                type: 'structure',
                members: {
                  instanceId: {
                    name: 'InstanceId'
                  },
                  targetEnvironment: {
                    name: 'TargetEnvironment'
                  }
                },
                name: 'InstanceExportDetails'
              },
              exportToS3: {
                type: 'structure',
                members: {
                  diskImageFormat: {
                    name: 'DiskImageFormat'
                  },
                  containerFormat: {
                    name: 'ContainerFormat'
                  },
                  s3Bucket: {
                    name: 'S3Bucket'
                  },
                  s3Key: {
                    name: 'S3Key'
                  }
                },
                name: 'ExportToS3Task'
              }
            },
            name: 'ExportTask'
          }
        }
      }
    },
    createInternetGateway: {
      name: 'CreateInternetGateway',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          internetGateway: {
            type: 'structure',
            members: {
              internetGatewayId: {
                name: 'InternetGatewayId'
              },
              attachmentSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    vpcId: {
                      name: 'VpcId'
                    },
                    state: {
                      name: 'State'
                    }
                  },
                  name: 'item'
                },
                name: 'Attachments'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              }
            },
            name: 'InternetGateway'
          }
        }
      }
    },
    createKeyPair: {
      name: 'CreateKeyPair',
      input: {
        type: 'structure',
        members: {
          KeyName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          keyPair: {
            type: 'structure',
            members: {
              keyName: {
                name: 'KeyName'
              },
              keyFingerprint: {
                name: 'KeyFingerprint'
              },
              keyMaterial: {
                name: 'KeyMaterial'
              }
            },
            name: 'KeyPair'
          }
        }
      }
    },
    createNetworkAcl: {
      name: 'CreateNetworkAcl',
      input: {
        type: 'structure',
        members: {
          VpcId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          networkAcl: {
            type: 'structure',
            members: {
              networkAclId: {
                name: 'NetworkAclId'
              },
              vpcId: {
                name: 'VpcId'
              },
              'default': {
                type: 'boolean',
                name: 'IsDefault'
              },
              entrySet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ruleNumber: {
                      type: 'integer',
                      name: 'RuleNumber'
                    },
                    protocol: {
                      name: 'Protocol'
                    },
                    ruleAction: {
                      name: 'RuleAction'
                    },
                    egress: {
                      type: 'boolean',
                      name: 'Egress'
                    },
                    cidrBlock: {
                      name: 'CidrBlock'
                    },
                    icmpTypeCode: {
                      type: 'structure',
                      members: {
                        type: {
                          type: 'integer',
                          name: 'Type'
                        },
                        code: {
                          type: 'integer',
                          name: 'Code'
                        }
                      },
                      name: 'IcmpTypeCode'
                    },
                    portRange: {
                      type: 'structure',
                      members: {
                        from: {
                          type: 'integer',
                          name: 'From'
                        },
                        to: {
                          type: 'integer',
                          name: 'To'
                        }
                      },
                      name: 'PortRange'
                    }
                  },
                  name: 'item'
                },
                name: 'Entries'
              },
              associationSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    networkAclAssociationId: {
                      name: 'NetworkAclAssociationId'
                    },
                    networkAclId: {
                      name: 'NetworkAclId'
                    },
                    subnetId: {
                      name: 'SubnetId'
                    }
                  },
                  name: 'item'
                },
                name: 'Associations'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              }
            },
            name: 'NetworkAcl'
          }
        }
      }
    },
    createNetworkAclEntry: {
      name: 'CreateNetworkAclEntry',
      input: {
        type: 'structure',
        members: {
          NetworkAclId: {
            required: true
          },
          RuleNumber: {
            type: 'integer',
            required: true
          },
          Protocol: {
            required: true
          },
          RuleAction: {
            required: true
          },
          Egress: {
            type: 'boolean',
            required: true
          },
          CidrBlock: {
            required: true
          },
          IcmpTypeCode: {
            type: 'structure',
            members: {
              Type: {
                type: 'integer'
              },
              Code: {
                type: 'integer'
              }
            },
            name: 'Icmp'
          },
          PortRange: {
            type: 'structure',
            members: {
              From: {
                type: 'integer'
              },
              To: {
                type: 'integer'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    createNetworkInterface: {
      name: 'CreateNetworkInterface',
      input: {
        type: 'structure',
        members: {
          SubnetId: {
            required: true
          },
          Description: {
          },
          PrivateIpAddress: {
          },
          Groups: {
            type: 'list',
            members: {
              name: 'SecurityGroupId'
            },
            flattened: true
          },
          PrivateIpAddresses: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                PrivateIpAddress: {
                  required: true
                },
                Primary: {
                  type: 'boolean'
                }
              }
            },
            flattened: true
          },
          SecondaryPrivateIpAddressCount: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          networkInterface: {
            type: 'structure',
            members: {
              networkInterfaceId: {
                name: 'NetworkInterfaceId'
              },
              subnetId: {
                name: 'SubnetId'
              },
              vpcId: {
                name: 'VpcId'
              },
              availabilityZone: {
                name: 'AvailabilityZone'
              },
              description: {
                name: 'Description'
              },
              ownerId: {
                name: 'OwnerId'
              },
              requesterId: {
                name: 'RequesterId'
              },
              requesterManaged: {
                type: 'boolean',
                name: 'RequesterManaged'
              },
              status: {
                name: 'Status'
              },
              macAddress: {
                name: 'MacAddress'
              },
              privateIpAddress: {
                name: 'PrivateIpAddress'
              },
              privateDnsName: {
                name: 'PrivateDnsName'
              },
              sourceDestCheck: {
                type: 'boolean',
                name: 'SourceDestCheck'
              },
              groupSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    groupName: {
                      name: 'GroupName'
                    },
                    groupId: {
                      name: 'GroupId'
                    }
                  },
                  name: 'item'
                },
                name: 'Groups'
              },
              attachment: {
                type: 'structure',
                members: {
                  attachmentId: {
                    name: 'AttachmentId'
                  },
                  instanceId: {
                    name: 'InstanceId'
                  },
                  instanceOwnerId: {
                    name: 'InstanceOwnerId'
                  },
                  deviceIndex: {
                    type: 'integer',
                    name: 'DeviceIndex'
                  },
                  status: {
                    name: 'Status'
                  },
                  attachTime: {
                    type: 'timestamp',
                    name: 'AttachTime'
                  },
                  deleteOnTermination: {
                    type: 'boolean',
                    name: 'DeleteOnTermination'
                  }
                },
                name: 'Attachment'
              },
              association: {
                type: 'structure',
                members: {
                  publicIp: {
                    name: 'PublicIp'
                  },
                  ipOwnerId: {
                    name: 'IpOwnerId'
                  },
                  allocationId: {
                    name: 'AllocationId'
                  },
                  associationId: {
                    name: 'AssociationId'
                  }
                },
                name: 'Association'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'TagSet'
              },
              privateIpAddressesSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    privateIpAddress: {
                      name: 'PrivateIpAddress'
                    },
                    privateDnsName: {
                      name: 'PrivateDnsName'
                    },
                    primary: {
                      type: 'boolean',
                      name: 'Primary'
                    },
                    association: {
                      type: 'structure',
                      members: {
                        publicIp: {
                          name: 'PublicIp'
                        },
                        ipOwnerId: {
                          name: 'IpOwnerId'
                        },
                        allocationId: {
                          name: 'AllocationId'
                        },
                        associationId: {
                          name: 'AssociationId'
                        }
                      },
                      name: 'Association'
                    }
                  },
                  name: 'item'
                },
                name: 'PrivateIpAddresses'
              }
            },
            name: 'NetworkInterface'
          }
        }
      }
    },
    createPlacementGroup: {
      name: 'CreatePlacementGroup',
      input: {
        type: 'structure',
        members: {
          GroupName: {
            required: true
          },
          Strategy: {
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
    createReservedInstancesListing: {
      name: 'CreateReservedInstancesListing',
      input: {
        type: 'structure',
        members: {
          ReservedInstancesId: {
            required: true
          },
          InstanceCount: {
            type: 'integer',
            required: true
          },
          PriceSchedules: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Term: {
                  type: 'integer'
                },
                Price: {
                  type: 'float'
                },
                CurrencyCode: {
                }
              }
            },
            required: true,
            flattened: true
          },
          ClientToken: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          reservedInstancesListingsSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                reservedInstancesListingId: {
                  name: 'ReservedInstancesListingId'
                },
                reservedInstancesId: {
                  name: 'ReservedInstancesId'
                },
                createDate: {
                  type: 'timestamp',
                  name: 'CreateDate'
                },
                updateDate: {
                  type: 'timestamp',
                  name: 'UpdateDate'
                },
                status: {
                  name: 'Status'
                },
                statusMessage: {
                  name: 'StatusMessage'
                },
                instanceCounts: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      state: {
                        name: 'State'
                      },
                      instanceCount: {
                        type: 'integer',
                        name: 'InstanceCount'
                      }
                    },
                    name: 'item'
                  },
                  name: 'InstanceCounts'
                },
                priceSchedules: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      term: {
                        type: 'integer',
                        name: 'Term'
                      },
                      price: {
                        type: 'float',
                        name: 'Price'
                      },
                      currencyCode: {
                        name: 'CurrencyCode'
                      },
                      active: {
                        type: 'boolean',
                        name: 'Active'
                      }
                    },
                    name: 'item'
                  },
                  name: 'PriceSchedules'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                clientToken: {
                  name: 'ClientToken'
                }
              },
              name: 'item'
            },
            name: 'ReservedInstancesListings'
          }
        }
      }
    },
    createRoute: {
      name: 'CreateRoute',
      input: {
        type: 'structure',
        members: {
          RouteTableId: {
            required: true
          },
          DestinationCidrBlock: {
            required: true
          },
          GatewayId: {
          },
          InstanceId: {
          },
          NetworkInterfaceId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    createRouteTable: {
      name: 'CreateRouteTable',
      input: {
        type: 'structure',
        members: {
          VpcId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          routeTable: {
            type: 'structure',
            members: {
              routeTableId: {
                name: 'RouteTableId'
              },
              vpcId: {
                name: 'VpcId'
              },
              routeSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    destinationCidrBlock: {
                      name: 'DestinationCidrBlock'
                    },
                    gatewayId: {
                      name: 'GatewayId'
                    },
                    instanceId: {
                      name: 'InstanceId'
                    },
                    instanceOwnerId: {
                      name: 'InstanceOwnerId'
                    },
                    networkInterfaceId: {
                      name: 'NetworkInterfaceId'
                    },
                    state: {
                      name: 'State'
                    }
                  },
                  name: 'item'
                },
                name: 'Routes'
              },
              associationSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    routeTableAssociationId: {
                      name: 'RouteTableAssociationId'
                    },
                    routeTableId: {
                      name: 'RouteTableId'
                    },
                    subnetId: {
                      name: 'SubnetId'
                    },
                    main: {
                      type: 'boolean',
                      name: 'Main'
                    }
                  },
                  name: 'item'
                },
                name: 'Associations'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              },
              propagatingVgwSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    gatewayId: {
                      name: 'GatewayId'
                    }
                  },
                  name: 'item'
                },
                name: 'PropagatingVgws'
              }
            },
            name: 'RouteTable'
          }
        }
      }
    },
    createSecurityGroup: {
      name: 'CreateSecurityGroup',
      input: {
        type: 'structure',
        members: {
          GroupName: {
            required: true
          },
          Description: {
            required: true,
            name: 'GroupDescription'
          },
          VpcId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          groupId: {
            name: 'GroupId'
          }
        }
      }
    },
    createSnapshot: {
      name: 'CreateSnapshot',
      input: {
        type: 'structure',
        members: {
          VolumeId: {
            required: true
          },
          Description: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          snapshotId: {
            name: 'SnapshotId'
          },
          volumeId: {
            name: 'VolumeId'
          },
          status: {
            name: 'State'
          },
          startTime: {
            type: 'timestamp',
            name: 'StartTime'
          },
          progress: {
            name: 'Progress'
          },
          ownerId: {
            name: 'OwnerId'
          },
          description: {
            name: 'Description'
          },
          volumeSize: {
            type: 'integer',
            name: 'VolumeSize'
          },
          ownerAlias: {
            name: 'OwnerAlias'
          },
          tagSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                key: {
                  name: 'Key'
                },
                value: {
                  name: 'Value'
                }
              },
              name: 'item'
            },
            name: 'Tags'
          }
        },
        name: 'snapshot'
      }
    },
    createSpotDatafeedSubscription: {
      name: 'CreateSpotDatafeedSubscription',
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true
          },
          Prefix: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          spotDatafeedSubscription: {
            type: 'structure',
            members: {
              ownerId: {
                name: 'OwnerId'
              },
              bucket: {
                name: 'Bucket'
              },
              prefix: {
                name: 'Prefix'
              },
              state: {
                name: 'State'
              },
              fault: {
                type: 'structure',
                members: {
                  code: {
                    name: 'Code'
                  },
                  message: {
                    name: 'Message'
                  }
                },
                name: 'Fault'
              }
            },
            name: 'SpotDatafeedSubscription'
          }
        }
      }
    },
    createSubnet: {
      name: 'CreateSubnet',
      input: {
        type: 'structure',
        members: {
          VpcId: {
            required: true
          },
          CidrBlock: {
            required: true
          },
          AvailabilityZone: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          subnet: {
            type: 'structure',
            members: {
              subnetId: {
                name: 'SubnetId'
              },
              state: {
                name: 'State'
              },
              vpcId: {
                name: 'VpcId'
              },
              cidrBlock: {
                name: 'CidrBlock'
              },
              availableIpAddressCount: {
                type: 'integer',
                name: 'AvailableIpAddressCount'
              },
              availabilityZone: {
                name: 'AvailabilityZone'
              },
              defaultForAz: {
                type: 'boolean',
                name: 'DefaultForAz'
              },
              mapPublicIpOnLaunch: {
                type: 'boolean',
                name: 'MapPublicIpOnLaunch'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              }
            },
            name: 'Subnet'
          }
        }
      }
    },
    createTags: {
      name: 'CreateTags',
      input: {
        type: 'structure',
        members: {
          Resources: {
            type: 'list',
            members: {
              name: 'ResourceId'
            },
            required: true,
            flattened: true
          },
          Tags: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Key: {
                },
                Value: {
                }
              },
              name: 'Tag'
            },
            required: true,
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    createVolume: {
      name: 'CreateVolume',
      input: {
        type: 'structure',
        members: {
          Size: {
            type: 'integer'
          },
          SnapshotId: {
          },
          AvailabilityZone: {
            required: true
          },
          VolumeType: {
          },
          Iops: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          volumeId: {
            name: 'VolumeId'
          },
          size: {
            type: 'integer',
            name: 'Size'
          },
          snapshotId: {
            name: 'SnapshotId'
          },
          availabilityZone: {
            name: 'AvailabilityZone'
          },
          status: {
            name: 'State'
          },
          createTime: {
            type: 'timestamp',
            name: 'CreateTime'
          },
          attachmentSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                volumeId: {
                  name: 'VolumeId'
                },
                instanceId: {
                  name: 'InstanceId'
                },
                device: {
                  name: 'Device'
                },
                status: {
                  name: 'State'
                },
                attachTime: {
                  type: 'timestamp',
                  name: 'AttachTime'
                },
                deleteOnTermination: {
                  type: 'boolean',
                  name: 'DeleteOnTermination'
                }
              },
              name: 'item'
            },
            name: 'Attachments'
          },
          tagSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                key: {
                  name: 'Key'
                },
                value: {
                  name: 'Value'
                }
              },
              name: 'item'
            },
            name: 'Tags'
          },
          volumeType: {
            name: 'VolumeType'
          },
          iops: {
            type: 'integer',
            name: 'Iops'
          }
        },
        name: 'volume'
      }
    },
    createVpc: {
      name: 'CreateVpc',
      input: {
        type: 'structure',
        members: {
          CidrBlock: {
            required: true
          },
          InstanceTenancy: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          vpc: {
            type: 'structure',
            members: {
              vpcId: {
                name: 'VpcId'
              },
              state: {
                name: 'State'
              },
              cidrBlock: {
                name: 'CidrBlock'
              },
              dhcpOptionsId: {
                name: 'DhcpOptionsId'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              },
              instanceTenancy: {
                name: 'InstanceTenancy'
              },
              isDefault: {
                type: 'boolean',
                name: 'IsDefault'
              }
            },
            name: 'Vpc'
          }
        }
      }
    },
    createVpnConnection: {
      name: 'CreateVpnConnection',
      input: {
        type: 'structure',
        members: {
          Type: {
            required: true
          },
          CustomerGatewayId: {
            required: true
          },
          VpnGatewayId: {
            required: true
          },
          Options: {
            type: 'structure',
            members: {
              StaticRoutesOnly: {
                type: 'boolean'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          vpnConnection: {
            type: 'structure',
            members: {
              vpnConnectionId: {
                name: 'VpnConnectionId'
              },
              state: {
                name: 'State'
              },
              customerGatewayConfiguration: {
                name: 'CustomerGatewayConfiguration'
              },
              type: {
                name: 'Type'
              },
              customerGatewayId: {
                name: 'CustomerGatewayId'
              },
              vpnGatewayId: {
                name: 'VpnGatewayId'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              },
              vgwTelemetry: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    outsideIpAddress: {
                      name: 'OutsideIpAddress'
                    },
                    status: {
                      name: 'Status'
                    },
                    lastStatusChange: {
                      type: 'timestamp',
                      name: 'LastStatusChange'
                    },
                    statusMessage: {
                      name: 'StatusMessage'
                    },
                    acceptedRouteCount: {
                      type: 'integer',
                      name: 'AcceptedRouteCount'
                    }
                  },
                  name: 'item'
                },
                name: 'VgwTelemetry'
              },
              options: {
                type: 'structure',
                members: {
                  staticRoutesOnly: {
                    type: 'boolean',
                    name: 'StaticRoutesOnly'
                  }
                },
                name: 'Options'
              },
              routes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    destinationCidrBlock: {
                      name: 'DestinationCidrBlock'
                    },
                    source: {
                      name: 'Source'
                    },
                    state: {
                      name: 'State'
                    }
                  },
                  name: 'item'
                },
                name: 'Routes'
              }
            },
            name: 'VpnConnection'
          }
        }
      }
    },
    createVpnConnectionRoute: {
      name: 'CreateVpnConnectionRoute',
      input: {
        type: 'structure',
        members: {
          VpnConnectionId: {
            required: true
          },
          DestinationCidrBlock: {
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
    createVpnGateway: {
      name: 'CreateVpnGateway',
      input: {
        type: 'structure',
        members: {
          Type: {
            required: true
          },
          AvailabilityZone: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          vpnGateway: {
            type: 'structure',
            members: {
              vpnGatewayId: {
                name: 'VpnGatewayId'
              },
              state: {
                name: 'State'
              },
              type: {
                name: 'Type'
              },
              availabilityZone: {
                name: 'AvailabilityZone'
              },
              attachments: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    vpcId: {
                      name: 'VpcId'
                    },
                    state: {
                      name: 'State'
                    }
                  },
                  name: 'item'
                },
                name: 'VpcAttachments'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              }
            },
            name: 'VpnGateway'
          }
        }
      }
    },
    deactivateLicense: {
      name: 'DeactivateLicense',
      input: {
        type: 'structure',
        members: {
          LicenseId: {
            required: true
          },
          Capacity: {
            type: 'integer',
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
    deleteCustomerGateway: {
      name: 'DeleteCustomerGateway',
      input: {
        type: 'structure',
        members: {
          CustomerGatewayId: {
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
    deleteDhcpOptions: {
      name: 'DeleteDhcpOptions',
      input: {
        type: 'structure',
        members: {
          DhcpOptionsId: {
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
    deleteInternetGateway: {
      name: 'DeleteInternetGateway',
      input: {
        type: 'structure',
        members: {
          InternetGatewayId: {
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
    deleteKeyPair: {
      name: 'DeleteKeyPair',
      input: {
        type: 'structure',
        members: {
          KeyName: {
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
    deleteNetworkAcl: {
      name: 'DeleteNetworkAcl',
      input: {
        type: 'structure',
        members: {
          NetworkAclId: {
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
    deleteNetworkAclEntry: {
      name: 'DeleteNetworkAclEntry',
      input: {
        type: 'structure',
        members: {
          NetworkAclId: {
            required: true
          },
          RuleNumber: {
            type: 'integer',
            required: true
          },
          Egress: {
            type: 'boolean',
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
    deleteNetworkInterface: {
      name: 'DeleteNetworkInterface',
      input: {
        type: 'structure',
        members: {
          NetworkInterfaceId: {
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
    deletePlacementGroup: {
      name: 'DeletePlacementGroup',
      input: {
        type: 'structure',
        members: {
          GroupName: {
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
    deleteRoute: {
      name: 'DeleteRoute',
      input: {
        type: 'structure',
        members: {
          RouteTableId: {
            required: true
          },
          DestinationCidrBlock: {
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
    deleteRouteTable: {
      name: 'DeleteRouteTable',
      input: {
        type: 'structure',
        members: {
          RouteTableId: {
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
    deleteSecurityGroup: {
      name: 'DeleteSecurityGroup',
      input: {
        type: 'structure',
        members: {
          GroupName: {
          },
          GroupId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteSnapshot: {
      name: 'DeleteSnapshot',
      input: {
        type: 'structure',
        members: {
          SnapshotId: {
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
    deleteSpotDatafeedSubscription: {
      name: 'DeleteSpotDatafeedSubscription',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteSubnet: {
      name: 'DeleteSubnet',
      input: {
        type: 'structure',
        members: {
          SubnetId: {
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
    deleteTags: {
      name: 'DeleteTags',
      input: {
        type: 'structure',
        members: {
          Resources: {
            type: 'list',
            members: {
              name: 'ResourceId'
            },
            required: true,
            flattened: true
          },
          Tags: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Key: {
                },
                Value: {
                }
              },
              name: 'Tag'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteVolume: {
      name: 'DeleteVolume',
      input: {
        type: 'structure',
        members: {
          VolumeId: {
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
    deleteVpc: {
      name: 'DeleteVpc',
      input: {
        type: 'structure',
        members: {
          VpcId: {
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
    deleteVpnConnection: {
      name: 'DeleteVpnConnection',
      input: {
        type: 'structure',
        members: {
          VpnConnectionId: {
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
    deleteVpnConnectionRoute: {
      name: 'DeleteVpnConnectionRoute',
      input: {
        type: 'structure',
        members: {
          VpnConnectionId: {
            required: true
          },
          DestinationCidrBlock: {
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
    deleteVpnGateway: {
      name: 'DeleteVpnGateway',
      input: {
        type: 'structure',
        members: {
          VpnGatewayId: {
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
    deregisterImage: {
      name: 'DeregisterImage',
      input: {
        type: 'structure',
        members: {
          ImageId: {
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
    describeAccountAttributes: {
      name: 'DescribeAccountAttributes',
      input: {
        type: 'structure',
        members: {
          AttributeNames: {
            type: 'list',
            members: {
              name: 'AttributeName'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          accountAttributeSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                attributeName: {
                  name: 'AttributeName'
                },
                attributeValueSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      attributeValue: {
                        name: 'AttributeValue'
                      }
                    },
                    name: 'item'
                  },
                  name: 'AttributeValues'
                }
              },
              name: 'item'
            },
            name: 'AccountAttributes'
          }
        }
      }
    },
    describeAddresses: {
      name: 'DescribeAddresses',
      input: {
        type: 'structure',
        members: {
          PublicIps: {
            type: 'list',
            members: {
              name: 'PublicIp'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          },
          AllocationIds: {
            type: 'list',
            members: {
              name: 'AllocationId'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          addressesSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                instanceId: {
                  name: 'InstanceId'
                },
                publicIp: {
                  name: 'PublicIp'
                },
                allocationId: {
                  name: 'AllocationId'
                },
                associationId: {
                  name: 'AssociationId'
                },
                domain: {
                  name: 'Domain'
                },
                networkInterfaceId: {
                  name: 'NetworkInterfaceId'
                },
                networkInterfaceOwnerId: {
                  name: 'NetworkInterfaceOwnerId'
                },
                privateIpAddress: {
                  name: 'PrivateIpAddress'
                }
              },
              name: 'item'
            },
            name: 'Addresses'
          }
        }
      }
    },
    describeAvailabilityZones: {
      name: 'DescribeAvailabilityZones',
      input: {
        type: 'structure',
        members: {
          ZoneNames: {
            type: 'list',
            members: {
              name: 'ZoneName'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          availabilityZoneInfo: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                zoneName: {
                  name: 'ZoneName'
                },
                zoneState: {
                  name: 'State'
                },
                regionName: {
                  name: 'RegionName'
                },
                messageSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      message: {
                        name: 'Message'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Messages'
                }
              },
              name: 'item'
            },
            name: 'AvailabilityZones'
          }
        }
      }
    },
    describeBundleTasks: {
      name: 'DescribeBundleTasks',
      input: {
        type: 'structure',
        members: {
          BundleIds: {
            type: 'list',
            members: {
              name: 'BundleId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          bundleInstanceTasksSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                instanceId: {
                  name: 'InstanceId'
                },
                bundleId: {
                  name: 'BundleId'
                },
                state: {
                  name: 'State'
                },
                startTime: {
                  type: 'timestamp',
                  name: 'StartTime'
                },
                updateTime: {
                  type: 'timestamp',
                  name: 'UpdateTime'
                },
                storage: {
                  type: 'structure',
                  members: {
                    S3: {
                      type: 'structure',
                      members: {
                        bucket: {
                          name: 'Bucket'
                        },
                        prefix: {
                          name: 'Prefix'
                        },
                        AWSAccessKeyId: {
                        },
                        uploadPolicy: {
                          name: 'UploadPolicy'
                        },
                        uploadPolicySignature: {
                          name: 'UploadPolicySignature'
                        }
                      }
                    }
                  },
                  name: 'Storage'
                },
                progress: {
                  name: 'Progress'
                },
                error: {
                  type: 'structure',
                  members: {
                    code: {
                      name: 'Code'
                    },
                    message: {
                      name: 'Message'
                    }
                  },
                  name: 'BundleTaskError'
                }
              },
              name: 'item'
            },
            name: 'BundleTasks'
          }
        }
      }
    },
    describeConversionTasks: {
      name: 'DescribeConversionTasks',
      input: {
        type: 'structure',
        members: {
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          },
          ConversionTaskIds: {
            type: 'list',
            members: {
              name: 'ConversionTaskId'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          conversionTasks: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                conversionTaskId: {
                  name: 'ConversionTaskId'
                },
                expirationTime: {
                  name: 'ExpirationTime'
                },
                importInstance: {
                  type: 'structure',
                  members: {
                    volumes: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          bytesConverted: {
                            type: 'integer',
                            name: 'BytesConverted'
                          },
                          availabilityZone: {
                            name: 'AvailabilityZone'
                          },
                          image: {
                            type: 'structure',
                            members: {
                              format: {
                                name: 'Format'
                              },
                              size: {
                                type: 'integer',
                                name: 'Size'
                              },
                              importManifestUrl: {
                                name: 'ImportManifestUrl'
                              },
                              checksum: {
                                name: 'Checksum'
                              }
                            },
                            name: 'Image'
                          },
                          volume: {
                            type: 'structure',
                            members: {
                              size: {
                                type: 'integer',
                                name: 'Size'
                              },
                              id: {
                                name: 'Id'
                              }
                            },
                            name: 'Volume'
                          },
                          status: {
                            name: 'Status'
                          },
                          statusMessage: {
                            name: 'StatusMessage'
                          },
                          description: {
                            name: 'Description'
                          }
                        },
                        name: 'item'
                      },
                      name: 'Volumes'
                    },
                    instanceId: {
                      name: 'InstanceId'
                    },
                    platform: {
                      name: 'Platform'
                    },
                    description: {
                      name: 'Description'
                    }
                  },
                  name: 'ImportInstance'
                },
                importVolume: {
                  type: 'structure',
                  members: {
                    bytesConverted: {
                      type: 'integer',
                      name: 'BytesConverted'
                    },
                    availabilityZone: {
                      name: 'AvailabilityZone'
                    },
                    description: {
                      name: 'Description'
                    },
                    image: {
                      type: 'structure',
                      members: {
                        format: {
                          name: 'Format'
                        },
                        size: {
                          type: 'integer',
                          name: 'Size'
                        },
                        importManifestUrl: {
                          name: 'ImportManifestUrl'
                        },
                        checksum: {
                          name: 'Checksum'
                        }
                      },
                      name: 'Image'
                    },
                    volume: {
                      type: 'structure',
                      members: {
                        size: {
                          type: 'integer',
                          name: 'Size'
                        },
                        id: {
                          name: 'Id'
                        }
                      },
                      name: 'Volume'
                    }
                  },
                  name: 'ImportVolume'
                },
                state: {
                  name: 'State'
                },
                statusMessage: {
                  name: 'StatusMessage'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                }
              },
              name: 'item'
            },
            name: 'ConversionTasks'
          }
        }
      }
    },
    describeCustomerGateways: {
      name: 'DescribeCustomerGateways',
      input: {
        type: 'structure',
        members: {
          CustomerGatewayIds: {
            type: 'list',
            members: {
              name: 'CustomerGatewayId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          customerGatewaySet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                customerGatewayId: {
                  name: 'CustomerGatewayId'
                },
                state: {
                  name: 'State'
                },
                type: {
                  name: 'Type'
                },
                ipAddress: {
                  name: 'IpAddress'
                },
                bgpAsn: {
                  name: 'BgpAsn'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                }
              },
              name: 'item'
            },
            name: 'CustomerGateways'
          }
        }
      }
    },
    describeDhcpOptions: {
      name: 'DescribeDhcpOptions',
      input: {
        type: 'structure',
        members: {
          DhcpOptionsIds: {
            type: 'list',
            members: {
              name: 'DhcpOptionsId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          dhcpOptionsSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                dhcpOptionsId: {
                  name: 'DhcpOptionsId'
                },
                dhcpConfigurationSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      valueSet: {
                        type: 'list',
                        members: {
                          name: 'item'
                        },
                        name: 'Values'
                      }
                    },
                    name: 'item'
                  },
                  name: 'DhcpConfigurations'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                }
              },
              name: 'item'
            },
            name: 'DhcpOptions'
          }
        }
      }
    },
    describeExportTasks: {
      name: 'DescribeExportTasks',
      input: {
        type: 'structure',
        members: {
          ExportTaskIds: {
            type: 'list',
            members: {
              name: 'ExportTaskId'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          exportTaskSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                exportTaskId: {
                  name: 'ExportTaskId'
                },
                description: {
                  name: 'Description'
                },
                state: {
                  name: 'State'
                },
                statusMessage: {
                  name: 'StatusMessage'
                },
                instanceExport: {
                  type: 'structure',
                  members: {
                    instanceId: {
                      name: 'InstanceId'
                    },
                    targetEnvironment: {
                      name: 'TargetEnvironment'
                    }
                  },
                  name: 'InstanceExportDetails'
                },
                exportToS3: {
                  type: 'structure',
                  members: {
                    diskImageFormat: {
                      name: 'DiskImageFormat'
                    },
                    containerFormat: {
                      name: 'ContainerFormat'
                    },
                    s3Bucket: {
                      name: 'S3Bucket'
                    },
                    s3Key: {
                      name: 'S3Key'
                    }
                  },
                  name: 'ExportToS3Task'
                }
              },
              name: 'item'
            },
            name: 'ExportTasks'
          }
        }
      }
    },
    describeImageAttribute: {
      name: 'DescribeImageAttribute',
      input: {
        type: 'structure',
        members: {
          ImageId: {
            required: true
          },
          Attribute: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          imageId: {
            name: 'ImageId'
          },
          launchPermission: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                userId: {
                  name: 'UserId'
                },
                group: {
                  name: 'Group'
                }
              },
              name: 'item'
            },
            name: 'LaunchPermissions'
          },
          productCodes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                productCode: {
                  name: 'ProductCodeId'
                },
                type: {
                  name: 'ProductCodeType'
                }
              },
              name: 'item'
            },
            name: 'ProductCodes'
          },
          kernel: {
            type: 'structure',
            members: {
              value: {
                name: 'Value'
              }
            },
            name: 'KernelId'
          },
          ramdisk: {
            type: 'structure',
            members: {
              value: {
                name: 'Value'
              }
            },
            name: 'RamdiskId'
          },
          description: {
            type: 'structure',
            members: {
              value: {
                name: 'Value'
              }
            },
            name: 'Description'
          },
          blockDeviceMapping: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                virtualName: {
                  name: 'VirtualName'
                },
                deviceName: {
                  name: 'DeviceName'
                },
                ebs: {
                  type: 'structure',
                  members: {
                    snapshotId: {
                      name: 'SnapshotId'
                    },
                    volumeSize: {
                      type: 'integer',
                      name: 'VolumeSize'
                    },
                    deleteOnTermination: {
                      type: 'boolean',
                      name: 'DeleteOnTermination'
                    },
                    volumeType: {
                      name: 'VolumeType'
                    },
                    iops: {
                      type: 'integer',
                      name: 'Iops'
                    }
                  },
                  name: 'Ebs'
                },
                noDevice: {
                  name: 'NoDevice'
                }
              },
              name: 'item'
            },
            name: 'BlockDeviceMappings'
          }
        },
        name: 'imageAttribute'
      }
    },
    describeImages: {
      name: 'DescribeImages',
      input: {
        type: 'structure',
        members: {
          ImageIds: {
            type: 'list',
            members: {
              name: 'ImageId'
            },
            flattened: true
          },
          Owners: {
            type: 'list',
            members: {
              name: 'Owner'
            },
            flattened: true
          },
          ExecutableUsers: {
            type: 'list',
            members: {
              name: 'ExecutableBy'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          imagesSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                imageId: {
                  name: 'ImageId'
                },
                imageLocation: {
                  name: 'ImageLocation'
                },
                imageState: {
                  name: 'State'
                },
                imageOwnerId: {
                  name: 'OwnerId'
                },
                isPublic: {
                  type: 'boolean',
                  name: 'Public'
                },
                productCodes: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      productCode: {
                        name: 'ProductCodeId'
                      },
                      type: {
                        name: 'ProductCodeType'
                      }
                    },
                    name: 'item'
                  },
                  name: 'ProductCodes'
                },
                architecture: {
                  name: 'Architecture'
                },
                imageType: {
                  name: 'ImageType'
                },
                kernelId: {
                  name: 'KernelId'
                },
                ramdiskId: {
                  name: 'RamdiskId'
                },
                platform: {
                  name: 'Platform'
                },
                stateReason: {
                  type: 'structure',
                  members: {
                    code: {
                      name: 'Code'
                    },
                    message: {
                      name: 'Message'
                    }
                  },
                  name: 'StateReason'
                },
                imageOwnerAlias: {
                  name: 'ImageOwnerAlias'
                },
                name: {
                  name: 'Name'
                },
                description: {
                  name: 'Description'
                },
                rootDeviceType: {
                  name: 'RootDeviceType'
                },
                rootDeviceName: {
                  name: 'RootDeviceName'
                },
                blockDeviceMapping: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      virtualName: {
                        name: 'VirtualName'
                      },
                      deviceName: {
                        name: 'DeviceName'
                      },
                      ebs: {
                        type: 'structure',
                        members: {
                          snapshotId: {
                            name: 'SnapshotId'
                          },
                          volumeSize: {
                            type: 'integer',
                            name: 'VolumeSize'
                          },
                          deleteOnTermination: {
                            type: 'boolean',
                            name: 'DeleteOnTermination'
                          },
                          volumeType: {
                            name: 'VolumeType'
                          },
                          iops: {
                            type: 'integer',
                            name: 'Iops'
                          }
                        },
                        name: 'Ebs'
                      },
                      noDevice: {
                        name: 'NoDevice'
                      }
                    },
                    name: 'item'
                  },
                  name: 'BlockDeviceMappings'
                },
                virtualizationType: {
                  name: 'VirtualizationType'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                hypervisor: {
                  name: 'Hypervisor'
                }
              },
              name: 'item'
            },
            name: 'Images'
          }
        }
      }
    },
    describeInstanceAttribute: {
      name: 'DescribeInstanceAttribute',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          },
          Attribute: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          instanceId: {
            name: 'InstanceId'
          },
          instanceType: {
            type: 'structure',
            members: {
              value: {
                name: 'Value'
              }
            },
            name: 'InstanceType'
          },
          kernel: {
            type: 'structure',
            members: {
              value: {
                name: 'Value'
              }
            },
            name: 'KernelId'
          },
          ramdisk: {
            type: 'structure',
            members: {
              value: {
                name: 'Value'
              }
            },
            name: 'RamdiskId'
          },
          userData: {
            type: 'structure',
            members: {
              value: {
                name: 'Value'
              }
            },
            name: 'UserData'
          },
          disableApiTermination: {
            type: 'structure',
            members: {
              value: {
                type: 'boolean',
                name: 'Value'
              }
            },
            name: 'DisableApiTermination'
          },
          instanceInitiatedShutdownBehavior: {
            type: 'structure',
            members: {
              value: {
                name: 'Value'
              }
            },
            name: 'InstanceInitiatedShutdownBehavior'
          },
          rootDeviceName: {
            type: 'structure',
            members: {
              value: {
                name: 'Value'
              }
            },
            name: 'RootDeviceName'
          },
          blockDeviceMapping: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                deviceName: {
                  name: 'DeviceName'
                },
                ebs: {
                  type: 'structure',
                  members: {
                    volumeId: {
                      name: 'VolumeId'
                    },
                    status: {
                      name: 'Status'
                    },
                    attachTime: {
                      type: 'timestamp',
                      name: 'AttachTime'
                    },
                    deleteOnTermination: {
                      type: 'boolean',
                      name: 'DeleteOnTermination'
                    }
                  },
                  name: 'Ebs'
                }
              },
              name: 'item'
            },
            name: 'BlockDeviceMappings'
          },
          productCodes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                productCode: {
                  name: 'ProductCodeId'
                },
                type: {
                  name: 'ProductCodeType'
                }
              },
              name: 'item'
            },
            name: 'ProductCodes'
          },
          ebsOptimized: {
            type: 'structure',
            members: {
              value: {
                type: 'boolean',
                name: 'Value'
              }
            },
            name: 'EbsOptimized'
          }
        }
      }
    },
    describeInstanceStatus: {
      name: 'DescribeInstanceStatus',
      input: {
        type: 'structure',
        members: {
          InstanceIds: {
            type: 'list',
            members: {
              name: 'InstanceId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          },
          NextToken: {
          },
          MaxResults: {
            type: 'integer'
          },
          IncludeAllInstances: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          instanceStatusSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                instanceId: {
                  name: 'InstanceId'
                },
                availabilityZone: {
                  name: 'AvailabilityZone'
                },
                eventsSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      code: {
                        name: 'Code'
                      },
                      description: {
                        name: 'Description'
                      },
                      notBefore: {
                        type: 'timestamp',
                        name: 'NotBefore'
                      },
                      notAfter: {
                        type: 'timestamp',
                        name: 'NotAfter'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Events'
                },
                instanceState: {
                  type: 'structure',
                  members: {
                    code: {
                      type: 'integer',
                      name: 'Code'
                    },
                    name: {
                      name: 'Name'
                    }
                  },
                  name: 'InstanceState'
                },
                systemStatus: {
                  type: 'structure',
                  members: {
                    status: {
                      name: 'Status'
                    },
                    details: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          name: {
                            name: 'Name'
                          },
                          status: {
                            name: 'Status'
                          },
                          impairedSince: {
                            type: 'timestamp',
                            name: 'ImpairedSince'
                          }
                        },
                        name: 'item'
                      },
                      name: 'Details'
                    }
                  },
                  name: 'SystemStatus'
                },
                instanceStatus: {
                  type: 'structure',
                  members: {
                    status: {
                      name: 'Status'
                    },
                    details: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          name: {
                            name: 'Name'
                          },
                          status: {
                            name: 'Status'
                          },
                          impairedSince: {
                            type: 'timestamp',
                            name: 'ImpairedSince'
                          }
                        },
                        name: 'item'
                      },
                      name: 'Details'
                    }
                  },
                  name: 'InstanceStatus'
                }
              },
              name: 'item'
            },
            name: 'InstanceStatuses'
          },
          nextToken: {
            name: 'NextToken'
          }
        }
      }
    },
    describeInstances: {
      name: 'DescribeInstances',
      input: {
        type: 'structure',
        members: {
          InstanceIds: {
            type: 'list',
            members: {
              name: 'InstanceId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          reservationSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                reservationId: {
                  name: 'ReservationId'
                },
                ownerId: {
                  name: 'OwnerId'
                },
                requesterId: {
                  name: 'RequesterId'
                },
                groupSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      groupName: {
                        name: 'GroupName'
                      },
                      groupId: {
                        name: 'GroupId'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Groups'
                },
                instancesSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      instanceId: {
                        name: 'InstanceId'
                      },
                      imageId: {
                        name: 'ImageId'
                      },
                      instanceState: {
                        type: 'structure',
                        members: {
                          code: {
                            type: 'integer',
                            name: 'Code'
                          },
                          name: {
                            name: 'Name'
                          }
                        },
                        name: 'State'
                      },
                      privateDnsName: {
                        name: 'PrivateDnsName'
                      },
                      dnsName: {
                        name: 'PublicDnsName'
                      },
                      reason: {
                        name: 'StateTransitionReason'
                      },
                      keyName: {
                        name: 'KeyName'
                      },
                      amiLaunchIndex: {
                        type: 'integer',
                        name: 'AmiLaunchIndex'
                      },
                      productCodes: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            productCode: {
                              name: 'ProductCodeId'
                            },
                            type: {
                              name: 'ProductCodeType'
                            }
                          },
                          name: 'item'
                        },
                        name: 'ProductCodes'
                      },
                      instanceType: {
                        name: 'InstanceType'
                      },
                      launchTime: {
                        type: 'timestamp',
                        name: 'LaunchTime'
                      },
                      placement: {
                        type: 'structure',
                        members: {
                          availabilityZone: {
                            name: 'AvailabilityZone'
                          },
                          groupName: {
                            name: 'GroupName'
                          },
                          tenancy: {
                            name: 'Tenancy'
                          }
                        },
                        name: 'Placement'
                      },
                      kernelId: {
                        name: 'KernelId'
                      },
                      ramdiskId: {
                        name: 'RamdiskId'
                      },
                      platform: {
                        name: 'Platform'
                      },
                      monitoring: {
                        type: 'structure',
                        members: {
                          state: {
                            name: 'State'
                          }
                        },
                        name: 'Monitoring'
                      },
                      subnetId: {
                        name: 'SubnetId'
                      },
                      vpcId: {
                        name: 'VpcId'
                      },
                      privateIpAddress: {
                        name: 'PrivateIpAddress'
                      },
                      ipAddress: {
                        name: 'PublicIpAddress'
                      },
                      stateReason: {
                        type: 'structure',
                        members: {
                          code: {
                            name: 'Code'
                          },
                          message: {
                            name: 'Message'
                          }
                        },
                        name: 'StateReason'
                      },
                      architecture: {
                        name: 'Architecture'
                      },
                      rootDeviceType: {
                        name: 'RootDeviceType'
                      },
                      rootDeviceName: {
                        name: 'RootDeviceName'
                      },
                      blockDeviceMapping: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            deviceName: {
                              name: 'DeviceName'
                            },
                            ebs: {
                              type: 'structure',
                              members: {
                                volumeId: {
                                  name: 'VolumeId'
                                },
                                status: {
                                  name: 'Status'
                                },
                                attachTime: {
                                  type: 'timestamp',
                                  name: 'AttachTime'
                                },
                                deleteOnTermination: {
                                  type: 'boolean',
                                  name: 'DeleteOnTermination'
                                }
                              },
                              name: 'Ebs'
                            }
                          },
                          name: 'item'
                        },
                        name: 'BlockDeviceMappings'
                      },
                      virtualizationType: {
                        name: 'VirtualizationType'
                      },
                      instanceLifecycle: {
                        name: 'InstanceLifecycle'
                      },
                      spotInstanceRequestId: {
                        name: 'SpotInstanceRequestId'
                      },
                      license: {
                        type: 'structure',
                        members: {
                          pool: {
                            name: 'Pool'
                          }
                        },
                        name: 'License'
                      },
                      clientToken: {
                        name: 'ClientToken'
                      },
                      tagSet: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            key: {
                              name: 'Key'
                            },
                            value: {
                              name: 'Value'
                            }
                          },
                          name: 'item'
                        },
                        name: 'Tags'
                      },
                      groupSet: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            groupName: {
                              name: 'GroupName'
                            },
                            groupId: {
                              name: 'GroupId'
                            }
                          },
                          name: 'item'
                        },
                        name: 'SecurityGroups'
                      },
                      sourceDestCheck: {
                        type: 'boolean',
                        name: 'SourceDestCheck'
                      },
                      hypervisor: {
                        name: 'Hypervisor'
                      },
                      networkInterfaceSet: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            networkInterfaceId: {
                              name: 'NetworkInterfaceId'
                            },
                            subnetId: {
                              name: 'SubnetId'
                            },
                            vpcId: {
                              name: 'VpcId'
                            },
                            description: {
                              name: 'Description'
                            },
                            ownerId: {
                              name: 'OwnerId'
                            },
                            status: {
                              name: 'Status'
                            },
                            privateIpAddress: {
                              name: 'PrivateIpAddress'
                            },
                            privateDnsName: {
                              name: 'PrivateDnsName'
                            },
                            sourceDestCheck: {
                              type: 'boolean',
                              name: 'SourceDestCheck'
                            },
                            groupSet: {
                              type: 'list',
                              members: {
                                type: 'structure',
                                members: {
                                  groupName: {
                                    name: 'GroupName'
                                  },
                                  groupId: {
                                    name: 'GroupId'
                                  }
                                },
                                name: 'item'
                              },
                              name: 'Groups'
                            },
                            attachment: {
                              type: 'structure',
                              members: {
                                attachmentId: {
                                  name: 'AttachmentId'
                                },
                                deviceIndex: {
                                  type: 'integer',
                                  name: 'DeviceIndex'
                                },
                                status: {
                                  name: 'Status'
                                },
                                attachTime: {
                                  type: 'timestamp',
                                  name: 'AttachTime'
                                },
                                deleteOnTermination: {
                                  type: 'boolean',
                                  name: 'DeleteOnTermination'
                                }
                              },
                              name: 'Attachment'
                            },
                            association: {
                              type: 'structure',
                              members: {
                                publicIp: {
                                  name: 'PublicIp'
                                },
                                publicDnsName: {
                                  name: 'PublicDnsName'
                                },
                                ipOwnerId: {
                                  name: 'IpOwnerId'
                                }
                              },
                              name: 'Association'
                            },
                            privateIpAddressesSet: {
                              type: 'list',
                              members: {
                                type: 'structure',
                                members: {
                                  privateIpAddress: {
                                    name: 'PrivateIpAddress'
                                  },
                                  privateDnsName: {
                                    name: 'PrivateDnsName'
                                  },
                                  primary: {
                                    type: 'boolean',
                                    name: 'Primary'
                                  },
                                  association: {
                                    type: 'structure',
                                    members: {
                                      publicIp: {
                                        name: 'PublicIp'
                                      },
                                      publicDnsName: {
                                        name: 'PublicDnsName'
                                      },
                                      ipOwnerId: {
                                        name: 'IpOwnerId'
                                      }
                                    },
                                    name: 'Association'
                                  }
                                },
                                name: 'item'
                              },
                              name: 'PrivateIpAddresses'
                            }
                          },
                          name: 'item'
                        },
                        name: 'NetworkInterfaces'
                      },
                      iamInstanceProfile: {
                        type: 'structure',
                        members: {
                          arn: {
                            name: 'Arn'
                          },
                          id: {
                            name: 'Id'
                          }
                        },
                        name: 'IamInstanceProfile'
                      },
                      ebsOptimized: {
                        type: 'boolean',
                        name: 'EbsOptimized'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Instances'
                }
              },
              name: 'item'
            },
            name: 'Reservations'
          }
        }
      }
    },
    describeInternetGateways: {
      name: 'DescribeInternetGateways',
      input: {
        type: 'structure',
        members: {
          InternetGatewayIds: {
            type: 'list',
            members: {
              name: 'InternetGatewayId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          internetGatewaySet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                internetGatewayId: {
                  name: 'InternetGatewayId'
                },
                attachmentSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      vpcId: {
                        name: 'VpcId'
                      },
                      state: {
                        name: 'State'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Attachments'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                }
              },
              name: 'item'
            },
            name: 'InternetGateways'
          }
        }
      }
    },
    describeKeyPairs: {
      name: 'DescribeKeyPairs',
      input: {
        type: 'structure',
        members: {
          KeyNames: {
            type: 'list',
            members: {
              name: 'KeyName'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          keySet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                keyName: {
                  name: 'KeyName'
                },
                keyFingerprint: {
                  name: 'KeyFingerprint'
                }
              },
              name: 'item'
            },
            name: 'KeyPairs'
          }
        }
      }
    },
    describeLicenses: {
      name: 'DescribeLicenses',
      input: {
        type: 'structure',
        members: {
          LicenseIds: {
            type: 'list',
            members: {
              name: 'LicenseId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          licenseSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                licenseId: {
                  name: 'LicenseId'
                },
                type: {
                  name: 'Type'
                },
                pool: {
                  name: 'Pool'
                },
                capacitySet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      capacity: {
                        type: 'integer',
                        name: 'Capacity'
                      },
                      instanceCapacity: {
                        type: 'integer',
                        name: 'InstanceCapacity'
                      },
                      state: {
                        name: 'State'
                      },
                      earliestAllowedDeactivationTime: {
                        type: 'timestamp',
                        name: 'EarliestAllowedDeactivationTime'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Capacities'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                }
              },
              name: 'item'
            },
            name: 'Licenses'
          }
        }
      }
    },
    describeNetworkAcls: {
      name: 'DescribeNetworkAcls',
      input: {
        type: 'structure',
        members: {
          NetworkAclIds: {
            type: 'list',
            members: {
              name: 'NetworkAclId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          networkAclSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                networkAclId: {
                  name: 'NetworkAclId'
                },
                vpcId: {
                  name: 'VpcId'
                },
                'default': {
                  type: 'boolean',
                  name: 'IsDefault'
                },
                entrySet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      ruleNumber: {
                        type: 'integer',
                        name: 'RuleNumber'
                      },
                      protocol: {
                        name: 'Protocol'
                      },
                      ruleAction: {
                        name: 'RuleAction'
                      },
                      egress: {
                        type: 'boolean',
                        name: 'Egress'
                      },
                      cidrBlock: {
                        name: 'CidrBlock'
                      },
                      icmpTypeCode: {
                        type: 'structure',
                        members: {
                          type: {
                            type: 'integer',
                            name: 'Type'
                          },
                          code: {
                            type: 'integer',
                            name: 'Code'
                          }
                        },
                        name: 'IcmpTypeCode'
                      },
                      portRange: {
                        type: 'structure',
                        members: {
                          from: {
                            type: 'integer',
                            name: 'From'
                          },
                          to: {
                            type: 'integer',
                            name: 'To'
                          }
                        },
                        name: 'PortRange'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Entries'
                },
                associationSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      networkAclAssociationId: {
                        name: 'NetworkAclAssociationId'
                      },
                      networkAclId: {
                        name: 'NetworkAclId'
                      },
                      subnetId: {
                        name: 'SubnetId'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Associations'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                }
              },
              name: 'item'
            },
            name: 'NetworkAcls'
          }
        }
      }
    },
    describeNetworkInterfaceAttribute: {
      name: 'DescribeNetworkInterfaceAttribute',
      input: {
        type: 'structure',
        members: {
          NetworkInterfaceId: {
            required: true
          },
          Description: {
          },
          SourceDestCheck: {
          },
          Groups: {
            name: 'GroupSet'
          },
          Attachment: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          networkInterfaceId: {
            name: 'NetworkInterfaceId'
          },
          description: {
            type: 'structure',
            members: {
              value: {
                name: 'Value'
              }
            },
            name: 'Description'
          },
          sourceDestCheck: {
            type: 'structure',
            members: {
              value: {
                type: 'boolean',
                name: 'Value'
              }
            },
            name: 'SourceDestCheck'
          },
          groupSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                groupName: {
                  name: 'GroupName'
                },
                groupId: {
                  name: 'GroupId'
                }
              },
              name: 'item'
            },
            name: 'Groups'
          },
          attachment: {
            type: 'structure',
            members: {
              attachmentId: {
                name: 'AttachmentId'
              },
              instanceId: {
                name: 'InstanceId'
              },
              instanceOwnerId: {
                name: 'InstanceOwnerId'
              },
              deviceIndex: {
                type: 'integer',
                name: 'DeviceIndex'
              },
              status: {
                name: 'Status'
              },
              attachTime: {
                type: 'timestamp',
                name: 'AttachTime'
              },
              deleteOnTermination: {
                type: 'boolean',
                name: 'DeleteOnTermination'
              }
            },
            name: 'Attachment'
          }
        }
      }
    },
    describeNetworkInterfaces: {
      name: 'DescribeNetworkInterfaces',
      input: {
        type: 'structure',
        members: {
          NetworkInterfaceIds: {
            type: 'list',
            members: {
              name: 'NetworkInterfaceId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          networkInterfaceSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                networkInterfaceId: {
                  name: 'NetworkInterfaceId'
                },
                subnetId: {
                  name: 'SubnetId'
                },
                vpcId: {
                  name: 'VpcId'
                },
                availabilityZone: {
                  name: 'AvailabilityZone'
                },
                description: {
                  name: 'Description'
                },
                ownerId: {
                  name: 'OwnerId'
                },
                requesterId: {
                  name: 'RequesterId'
                },
                requesterManaged: {
                  type: 'boolean',
                  name: 'RequesterManaged'
                },
                status: {
                  name: 'Status'
                },
                macAddress: {
                  name: 'MacAddress'
                },
                privateIpAddress: {
                  name: 'PrivateIpAddress'
                },
                privateDnsName: {
                  name: 'PrivateDnsName'
                },
                sourceDestCheck: {
                  type: 'boolean',
                  name: 'SourceDestCheck'
                },
                groupSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      groupName: {
                        name: 'GroupName'
                      },
                      groupId: {
                        name: 'GroupId'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Groups'
                },
                attachment: {
                  type: 'structure',
                  members: {
                    attachmentId: {
                      name: 'AttachmentId'
                    },
                    instanceId: {
                      name: 'InstanceId'
                    },
                    instanceOwnerId: {
                      name: 'InstanceOwnerId'
                    },
                    deviceIndex: {
                      type: 'integer',
                      name: 'DeviceIndex'
                    },
                    status: {
                      name: 'Status'
                    },
                    attachTime: {
                      type: 'timestamp',
                      name: 'AttachTime'
                    },
                    deleteOnTermination: {
                      type: 'boolean',
                      name: 'DeleteOnTermination'
                    }
                  },
                  name: 'Attachment'
                },
                association: {
                  type: 'structure',
                  members: {
                    publicIp: {
                      name: 'PublicIp'
                    },
                    ipOwnerId: {
                      name: 'IpOwnerId'
                    },
                    allocationId: {
                      name: 'AllocationId'
                    },
                    associationId: {
                      name: 'AssociationId'
                    }
                  },
                  name: 'Association'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'TagSet'
                },
                privateIpAddressesSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      privateIpAddress: {
                        name: 'PrivateIpAddress'
                      },
                      privateDnsName: {
                        name: 'PrivateDnsName'
                      },
                      primary: {
                        type: 'boolean',
                        name: 'Primary'
                      },
                      association: {
                        type: 'structure',
                        members: {
                          publicIp: {
                            name: 'PublicIp'
                          },
                          ipOwnerId: {
                            name: 'IpOwnerId'
                          },
                          allocationId: {
                            name: 'AllocationId'
                          },
                          associationId: {
                            name: 'AssociationId'
                          }
                        },
                        name: 'Association'
                      }
                    },
                    name: 'item'
                  },
                  name: 'PrivateIpAddresses'
                }
              },
              name: 'item'
            },
            name: 'NetworkInterfaces'
          }
        }
      }
    },
    describePlacementGroups: {
      name: 'DescribePlacementGroups',
      input: {
        type: 'structure',
        members: {
          GroupNames: {
            type: 'list',
            members: {
              name: 'GroupName'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          placementGroupSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                groupName: {
                  name: 'GroupName'
                },
                strategy: {
                  name: 'Strategy'
                },
                state: {
                  name: 'State'
                }
              },
              name: 'item'
            },
            name: 'PlacementGroups'
          }
        }
      }
    },
    describeRegions: {
      name: 'DescribeRegions',
      input: {
        type: 'structure',
        members: {
          RegionNames: {
            type: 'list',
            members: {
              name: 'RegionName'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          regionInfo: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                regionName: {
                  name: 'RegionName'
                },
                regionEndpoint: {
                  name: 'Endpoint'
                }
              },
              name: 'item'
            },
            name: 'Regions'
          }
        }
      }
    },
    describeReservedInstances: {
      name: 'DescribeReservedInstances',
      input: {
        type: 'structure',
        members: {
          ReservedInstancesIds: {
            type: 'list',
            members: {
              name: 'ReservedInstancesId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          },
          OfferingType: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          reservedInstancesSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                reservedInstancesId: {
                  name: 'ReservedInstancesId'
                },
                instanceType: {
                  name: 'InstanceType'
                },
                availabilityZone: {
                  name: 'AvailabilityZone'
                },
                start: {
                  type: 'timestamp',
                  name: 'Start'
                },
                duration: {
                  type: 'integer',
                  name: 'Duration'
                },
                usagePrice: {
                  type: 'float',
                  name: 'UsagePrice'
                },
                fixedPrice: {
                  type: 'float',
                  name: 'FixedPrice'
                },
                instanceCount: {
                  type: 'integer',
                  name: 'InstanceCount'
                },
                productDescription: {
                  name: 'ProductDescription'
                },
                state: {
                  name: 'State'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                instanceTenancy: {
                  name: 'InstanceTenancy'
                },
                currencyCode: {
                  name: 'CurrencyCode'
                },
                offeringType: {
                  name: 'OfferingType'
                },
                recurringCharges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      frequency: {
                        name: 'Frequency'
                      },
                      amount: {
                        type: 'float',
                        name: 'Amount'
                      }
                    },
                    name: 'item'
                  },
                  name: 'RecurringCharges'
                }
              },
              name: 'item'
            },
            name: 'ReservedInstances'
          }
        }
      }
    },
    describeReservedInstancesListings: {
      name: 'DescribeReservedInstancesListings',
      input: {
        type: 'structure',
        members: {
          ReservedInstancesId: {
          },
          ReservedInstancesListingId: {
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              }
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          reservedInstancesListingsSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                reservedInstancesListingId: {
                  name: 'ReservedInstancesListingId'
                },
                reservedInstancesId: {
                  name: 'ReservedInstancesId'
                },
                createDate: {
                  type: 'timestamp',
                  name: 'CreateDate'
                },
                updateDate: {
                  type: 'timestamp',
                  name: 'UpdateDate'
                },
                status: {
                  name: 'Status'
                },
                statusMessage: {
                  name: 'StatusMessage'
                },
                instanceCounts: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      state: {
                        name: 'State'
                      },
                      instanceCount: {
                        type: 'integer',
                        name: 'InstanceCount'
                      }
                    },
                    name: 'item'
                  },
                  name: 'InstanceCounts'
                },
                priceSchedules: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      term: {
                        type: 'integer',
                        name: 'Term'
                      },
                      price: {
                        type: 'float',
                        name: 'Price'
                      },
                      currencyCode: {
                        name: 'CurrencyCode'
                      },
                      active: {
                        type: 'boolean',
                        name: 'Active'
                      }
                    },
                    name: 'item'
                  },
                  name: 'PriceSchedules'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                clientToken: {
                  name: 'ClientToken'
                }
              },
              name: 'item'
            },
            name: 'ReservedInstancesListings'
          }
        }
      }
    },
    describeReservedInstancesOfferings: {
      name: 'DescribeReservedInstancesOfferings',
      input: {
        type: 'structure',
        members: {
          ReservedInstancesOfferingIds: {
            type: 'list',
            members: {
              name: 'ReservedInstancesOfferingId'
            },
            flattened: true
          },
          InstanceType: {
          },
          AvailabilityZone: {
          },
          ProductDescription: {
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          },
          InstanceTenancy: {
          },
          OfferingType: {
          },
          NextToken: {
          },
          MaxResults: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          reservedInstancesOfferingsSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                reservedInstancesOfferingId: {
                  name: 'ReservedInstancesOfferingId'
                },
                instanceType: {
                  name: 'InstanceType'
                },
                availabilityZone: {
                  name: 'AvailabilityZone'
                },
                duration: {
                  type: 'integer',
                  name: 'Duration'
                },
                usagePrice: {
                  type: 'float',
                  name: 'UsagePrice'
                },
                fixedPrice: {
                  type: 'float',
                  name: 'FixedPrice'
                },
                productDescription: {
                  name: 'ProductDescription'
                },
                instanceTenancy: {
                  name: 'InstanceTenancy'
                },
                currencyCode: {
                  name: 'CurrencyCode'
                },
                offeringType: {
                  name: 'OfferingType'
                },
                recurringCharges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      frequency: {
                        name: 'Frequency'
                      },
                      amount: {
                        type: 'float',
                        name: 'Amount'
                      }
                    },
                    name: 'item'
                  },
                  name: 'RecurringCharges'
                },
                marketplace: {
                  type: 'boolean',
                  name: 'Marketplace'
                },
                pricingDetailsSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      price: {
                        type: 'float',
                        name: 'Price'
                      },
                      count: {
                        type: 'integer',
                        name: 'Count'
                      }
                    },
                    name: 'item'
                  },
                  name: 'PricingDetails'
                }
              },
              name: 'item'
            },
            name: 'ReservedInstancesOfferings'
          },
          nextToken: {
            name: 'NextToken'
          }
        }
      }
    },
    describeRouteTables: {
      name: 'DescribeRouteTables',
      input: {
        type: 'structure',
        members: {
          RouteTableIds: {
            type: 'list',
            members: {
              name: 'RouteTableId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          routeTableSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                routeTableId: {
                  name: 'RouteTableId'
                },
                vpcId: {
                  name: 'VpcId'
                },
                routeSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      destinationCidrBlock: {
                        name: 'DestinationCidrBlock'
                      },
                      gatewayId: {
                        name: 'GatewayId'
                      },
                      instanceId: {
                        name: 'InstanceId'
                      },
                      instanceOwnerId: {
                        name: 'InstanceOwnerId'
                      },
                      networkInterfaceId: {
                        name: 'NetworkInterfaceId'
                      },
                      state: {
                        name: 'State'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Routes'
                },
                associationSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      routeTableAssociationId: {
                        name: 'RouteTableAssociationId'
                      },
                      routeTableId: {
                        name: 'RouteTableId'
                      },
                      subnetId: {
                        name: 'SubnetId'
                      },
                      main: {
                        type: 'boolean',
                        name: 'Main'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Associations'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                propagatingVgwSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      gatewayId: {
                        name: 'GatewayId'
                      }
                    },
                    name: 'item'
                  },
                  name: 'PropagatingVgws'
                }
              },
              name: 'item'
            },
            name: 'RouteTables'
          }
        }
      }
    },
    describeSecurityGroups: {
      name: 'DescribeSecurityGroups',
      input: {
        type: 'structure',
        members: {
          GroupNames: {
            type: 'list',
            members: {
              name: 'GroupName'
            },
            flattened: true
          },
          GroupIds: {
            type: 'list',
            members: {
              name: 'GroupId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          securityGroupInfo: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ownerId: {
                  name: 'OwnerId'
                },
                groupName: {
                  name: 'GroupName'
                },
                groupId: {
                  name: 'GroupId'
                },
                groupDescription: {
                  name: 'Description'
                },
                ipPermissions: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      ipProtocol: {
                        name: 'IpProtocol'
                      },
                      fromPort: {
                        type: 'integer',
                        name: 'FromPort'
                      },
                      toPort: {
                        type: 'integer',
                        name: 'ToPort'
                      },
                      groups: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            userId: {
                              name: 'UserId'
                            },
                            groupName: {
                              name: 'GroupName'
                            },
                            groupId: {
                              name: 'GroupId'
                            }
                          },
                          name: 'item'
                        },
                        name: 'UserIdGroupPairs'
                      },
                      ipRanges: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            cidrIp: {
                              name: 'CidrIp'
                            }
                          },
                          name: 'item'
                        },
                        name: 'IpRanges'
                      }
                    },
                    name: 'item'
                  },
                  name: 'IpPermissions'
                },
                ipPermissionsEgress: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      ipProtocol: {
                        name: 'IpProtocol'
                      },
                      fromPort: {
                        type: 'integer',
                        name: 'FromPort'
                      },
                      toPort: {
                        type: 'integer',
                        name: 'ToPort'
                      },
                      groups: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            userId: {
                              name: 'UserId'
                            },
                            groupName: {
                              name: 'GroupName'
                            },
                            groupId: {
                              name: 'GroupId'
                            }
                          },
                          name: 'item'
                        },
                        name: 'UserIdGroupPairs'
                      },
                      ipRanges: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            cidrIp: {
                              name: 'CidrIp'
                            }
                          },
                          name: 'item'
                        },
                        name: 'IpRanges'
                      }
                    },
                    name: 'item'
                  },
                  name: 'IpPermissionsEgress'
                },
                vpcId: {
                  name: 'VpcId'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                }
              },
              name: 'item'
            },
            name: 'SecurityGroups'
          }
        }
      }
    },
    describeSnapshotAttribute: {
      name: 'DescribeSnapshotAttribute',
      input: {
        type: 'structure',
        members: {
          SnapshotId: {
            required: true
          },
          Attribute: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          snapshotId: {
            name: 'SnapshotId'
          },
          createVolumePermission: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                userId: {
                  name: 'UserId'
                },
                group: {
                  name: 'Group'
                }
              },
              name: 'item'
            },
            name: 'CreateVolumePermissions'
          },
          productCodes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                productCode: {
                  name: 'ProductCodeId'
                },
                type: {
                  name: 'ProductCodeType'
                }
              },
              name: 'item'
            },
            name: 'ProductCodes'
          }
        }
      }
    },
    describeSnapshots: {
      name: 'DescribeSnapshots',
      input: {
        type: 'structure',
        members: {
          SnapshotIds: {
            type: 'list',
            members: {
              name: 'SnapshotId'
            },
            flattened: true
          },
          OwnerIds: {
            type: 'list',
            members: {
              name: 'Owner'
            },
            flattened: true
          },
          RestorableByUserIds: {
            type: 'list',
            members: {
              name: 'RestorableBy'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          snapshotSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                snapshotId: {
                  name: 'SnapshotId'
                },
                volumeId: {
                  name: 'VolumeId'
                },
                status: {
                  name: 'State'
                },
                startTime: {
                  type: 'timestamp',
                  name: 'StartTime'
                },
                progress: {
                  name: 'Progress'
                },
                ownerId: {
                  name: 'OwnerId'
                },
                description: {
                  name: 'Description'
                },
                volumeSize: {
                  type: 'integer',
                  name: 'VolumeSize'
                },
                ownerAlias: {
                  name: 'OwnerAlias'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                }
              },
              name: 'item'
            },
            name: 'Snapshots'
          }
        }
      }
    },
    describeSpotDatafeedSubscription: {
      name: 'DescribeSpotDatafeedSubscription',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          spotDatafeedSubscription: {
            type: 'structure',
            members: {
              ownerId: {
                name: 'OwnerId'
              },
              bucket: {
                name: 'Bucket'
              },
              prefix: {
                name: 'Prefix'
              },
              state: {
                name: 'State'
              },
              fault: {
                type: 'structure',
                members: {
                  code: {
                    name: 'Code'
                  },
                  message: {
                    name: 'Message'
                  }
                },
                name: 'Fault'
              }
            },
            name: 'SpotDatafeedSubscription'
          }
        }
      }
    },
    describeSpotInstanceRequests: {
      name: 'DescribeSpotInstanceRequests',
      input: {
        type: 'structure',
        members: {
          SpotInstanceRequestIds: {
            type: 'list',
            members: {
              name: 'SpotInstanceRequestId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          spotInstanceRequestSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                spotInstanceRequestId: {
                  name: 'SpotInstanceRequestId'
                },
                spotPrice: {
                  name: 'SpotPrice'
                },
                type: {
                  name: 'Type'
                },
                state: {
                  name: 'State'
                },
                fault: {
                  type: 'structure',
                  members: {
                    code: {
                      name: 'Code'
                    },
                    message: {
                      name: 'Message'
                    }
                  },
                  name: 'Fault'
                },
                status: {
                  type: 'structure',
                  members: {
                    code: {
                      name: 'Code'
                    },
                    updateTime: {
                      type: 'timestamp',
                      name: 'UpdateTime'
                    },
                    message: {
                      name: 'Message'
                    }
                  },
                  name: 'Status'
                },
                validFrom: {
                  type: 'timestamp',
                  name: 'ValidFrom'
                },
                validUntil: {
                  type: 'timestamp',
                  name: 'ValidUntil'
                },
                launchGroup: {
                  name: 'LaunchGroup'
                },
                availabilityZoneGroup: {
                  name: 'AvailabilityZoneGroup'
                },
                launchSpecification: {
                  type: 'structure',
                  members: {
                    imageId: {
                      name: 'ImageId'
                    },
                    keyName: {
                      name: 'KeyName'
                    },
                    groupSet: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          groupName: {
                            name: 'GroupName'
                          },
                          groupId: {
                            name: 'GroupId'
                          }
                        },
                        name: 'item'
                      },
                      name: 'SecurityGroups'
                    },
                    userData: {
                      name: 'UserData'
                    },
                    addressingType: {
                      name: 'AddressingType'
                    },
                    instanceType: {
                      name: 'InstanceType'
                    },
                    placement: {
                      type: 'structure',
                      members: {
                        availabilityZone: {
                          name: 'AvailabilityZone'
                        },
                        groupName: {
                          name: 'GroupName'
                        }
                      },
                      name: 'Placement'
                    },
                    kernelId: {
                      name: 'KernelId'
                    },
                    ramdiskId: {
                      name: 'RamdiskId'
                    },
                    blockDeviceMapping: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          virtualName: {
                            name: 'VirtualName'
                          },
                          deviceName: {
                            name: 'DeviceName'
                          },
                          ebs: {
                            type: 'structure',
                            members: {
                              snapshotId: {
                                name: 'SnapshotId'
                              },
                              volumeSize: {
                                type: 'integer',
                                name: 'VolumeSize'
                              },
                              deleteOnTermination: {
                                type: 'boolean',
                                name: 'DeleteOnTermination'
                              },
                              volumeType: {
                                name: 'VolumeType'
                              },
                              iops: {
                                type: 'integer',
                                name: 'Iops'
                              }
                            },
                            name: 'Ebs'
                          },
                          noDevice: {
                            name: 'NoDevice'
                          }
                        },
                        name: 'item'
                      },
                      name: 'BlockDeviceMappings'
                    },
                    monitoringEnabled: {
                      type: 'boolean',
                      name: 'MonitoringEnabled'
                    },
                    subnetId: {
                      name: 'SubnetId'
                    },
                    networkInterfaceSet: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          networkInterfaceId: {
                            name: 'NetworkInterfaceId'
                          },
                          deviceIndex: {
                            type: 'integer',
                            name: 'DeviceIndex'
                          },
                          subnetId: {
                            name: 'SubnetId'
                          },
                          description: {
                            name: 'Description'
                          },
                          privateIpAddress: {
                            name: 'PrivateIpAddress'
                          },
                          SecurityGroupId: {
                            type: 'list',
                            members: {
                              name: 'SecurityGroupId'
                            },
                            name: 'Groups'
                          },
                          deleteOnTermination: {
                            type: 'boolean',
                            name: 'DeleteOnTermination'
                          },
                          privateIpAddressesSet: {
                            type: 'list',
                            members: {
                              type: 'structure',
                              members: {
                                privateIpAddress: {
                                  name: 'PrivateIpAddress'
                                },
                                primary: {
                                  type: 'boolean',
                                  name: 'Primary'
                                }
                              },
                              name: 'item'
                            },
                            name: 'PrivateIpAddresses'
                          },
                          secondaryPrivateIpAddressCount: {
                            type: 'integer',
                            name: 'SecondaryPrivateIpAddressCount'
                          }
                        },
                        name: 'item'
                      },
                      name: 'NetworkInterfaces'
                    },
                    iamInstanceProfile: {
                      type: 'structure',
                      members: {
                        arn: {
                          name: 'Arn'
                        },
                        name: {
                          name: 'Name'
                        }
                      },
                      name: 'IamInstanceProfile'
                    },
                    ebsOptimized: {
                      type: 'boolean',
                      name: 'EbsOptimized'
                    }
                  },
                  name: 'LaunchSpecification'
                },
                instanceId: {
                  name: 'InstanceId'
                },
                createTime: {
                  type: 'timestamp',
                  name: 'CreateTime'
                },
                productDescription: {
                  name: 'ProductDescription'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                launchedAvailabilityZone: {
                  name: 'LaunchedAvailabilityZone'
                }
              },
              name: 'item'
            },
            name: 'SpotInstanceRequests'
          }
        }
      }
    },
    describeSpotPriceHistory: {
      name: 'DescribeSpotPriceHistory',
      input: {
        type: 'structure',
        members: {
          StartTime: {
            type: 'timestamp'
          },
          EndTime: {
            type: 'timestamp'
          },
          InstanceTypes: {
            type: 'list',
            members: {
              name: 'InstanceType'
            },
            flattened: true
          },
          ProductDescriptions: {
            type: 'list',
            members: {
              name: 'ProductDescription'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          },
          AvailabilityZone: {
          },
          MaxResults: {
            type: 'integer'
          },
          NextToken: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          spotPriceHistorySet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                instanceType: {
                  name: 'InstanceType'
                },
                productDescription: {
                  name: 'ProductDescription'
                },
                spotPrice: {
                  name: 'SpotPrice'
                },
                timestamp: {
                  type: 'timestamp',
                  name: 'Timestamp'
                },
                availabilityZone: {
                  name: 'AvailabilityZone'
                }
              },
              name: 'item'
            },
            name: 'SpotPriceHistory'
          },
          nextToken: {
            name: 'NextToken'
          }
        }
      }
    },
    describeSubnets: {
      name: 'DescribeSubnets',
      input: {
        type: 'structure',
        members: {
          SubnetIds: {
            type: 'list',
            members: {
              name: 'SubnetId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          subnetSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                subnetId: {
                  name: 'SubnetId'
                },
                state: {
                  name: 'State'
                },
                vpcId: {
                  name: 'VpcId'
                },
                cidrBlock: {
                  name: 'CidrBlock'
                },
                availableIpAddressCount: {
                  type: 'integer',
                  name: 'AvailableIpAddressCount'
                },
                availabilityZone: {
                  name: 'AvailabilityZone'
                },
                defaultForAz: {
                  type: 'boolean',
                  name: 'DefaultForAz'
                },
                mapPublicIpOnLaunch: {
                  type: 'boolean',
                  name: 'MapPublicIpOnLaunch'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                }
              },
              name: 'item'
            },
            name: 'Subnets'
          }
        }
      }
    },
    describeTags: {
      name: 'DescribeTags',
      input: {
        type: 'structure',
        members: {
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          tagSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                resourceId: {
                  name: 'ResourceId'
                },
                resourceType: {
                  name: 'ResourceType'
                },
                key: {
                  name: 'Key'
                },
                value: {
                  name: 'Value'
                }
              },
              name: 'item'
            },
            name: 'Tags'
          }
        }
      }
    },
    describeVolumeAttribute: {
      name: 'DescribeVolumeAttribute',
      input: {
        type: 'structure',
        members: {
          VolumeId: {
            required: true
          },
          Attribute: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          volumeId: {
            name: 'VolumeId'
          },
          autoEnableIO: {
            type: 'structure',
            members: {
              value: {
                type: 'boolean',
                name: 'Value'
              }
            },
            name: 'AutoEnableIO'
          },
          productCodes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                productCode: {
                  name: 'ProductCodeId'
                },
                type: {
                  name: 'ProductCodeType'
                }
              },
              name: 'item'
            },
            name: 'ProductCodes'
          }
        }
      }
    },
    describeVolumeStatus: {
      name: 'DescribeVolumeStatus',
      input: {
        type: 'structure',
        members: {
          VolumeIds: {
            type: 'list',
            members: {
              name: 'VolumeId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          },
          NextToken: {
          },
          MaxResults: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          volumeStatusSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                volumeId: {
                  name: 'VolumeId'
                },
                availabilityZone: {
                  name: 'AvailabilityZone'
                },
                volumeStatus: {
                  type: 'structure',
                  members: {
                    status: {
                      name: 'Status'
                    },
                    details: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          name: {
                            name: 'Name'
                          },
                          status: {
                            name: 'Status'
                          }
                        },
                        name: 'item'
                      },
                      name: 'Details'
                    }
                  },
                  name: 'VolumeStatus'
                },
                eventsSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      eventType: {
                        name: 'EventType'
                      },
                      description: {
                        name: 'Description'
                      },
                      notBefore: {
                        type: 'timestamp',
                        name: 'NotBefore'
                      },
                      notAfter: {
                        type: 'timestamp',
                        name: 'NotAfter'
                      },
                      eventId: {
                        name: 'EventId'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Events'
                },
                actionsSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      code: {
                        name: 'Code'
                      },
                      description: {
                        name: 'Description'
                      },
                      eventType: {
                        name: 'EventType'
                      },
                      eventId: {
                        name: 'EventId'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Actions'
                }
              },
              name: 'item'
            },
            name: 'VolumeStatuses'
          },
          nextToken: {
            name: 'NextToken'
          }
        }
      }
    },
    describeVolumes: {
      name: 'DescribeVolumes',
      input: {
        type: 'structure',
        members: {
          VolumeIds: {
            type: 'list',
            members: {
              name: 'VolumeId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          volumeSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                volumeId: {
                  name: 'VolumeId'
                },
                size: {
                  type: 'integer',
                  name: 'Size'
                },
                snapshotId: {
                  name: 'SnapshotId'
                },
                availabilityZone: {
                  name: 'AvailabilityZone'
                },
                status: {
                  name: 'State'
                },
                createTime: {
                  type: 'timestamp',
                  name: 'CreateTime'
                },
                attachmentSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      volumeId: {
                        name: 'VolumeId'
                      },
                      instanceId: {
                        name: 'InstanceId'
                      },
                      device: {
                        name: 'Device'
                      },
                      status: {
                        name: 'State'
                      },
                      attachTime: {
                        type: 'timestamp',
                        name: 'AttachTime'
                      },
                      deleteOnTermination: {
                        type: 'boolean',
                        name: 'DeleteOnTermination'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Attachments'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                volumeType: {
                  name: 'VolumeType'
                },
                iops: {
                  type: 'integer',
                  name: 'Iops'
                }
              },
              name: 'item'
            },
            name: 'Volumes'
          }
        }
      }
    },
    describeVpcAttribute: {
      name: 'DescribeVpcAttribute',
      input: {
        type: 'structure',
        members: {
          VpcId: {
            required: true
          },
          Attribute: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          vpcId: {
            name: 'VpcId'
          },
          enableDnsSupport: {
            type: 'structure',
            members: {
              value: {
                type: 'boolean',
                name: 'Value'
              }
            },
            name: 'EnableDnsSupport'
          },
          enableDnsHostnames: {
            type: 'structure',
            members: {
              value: {
                type: 'boolean',
                name: 'Value'
              }
            },
            name: 'EnableDnsHostnames'
          }
        }
      }
    },
    describeVpcs: {
      name: 'DescribeVpcs',
      input: {
        type: 'structure',
        members: {
          VpcIds: {
            type: 'list',
            members: {
              name: 'VpcId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          vpcSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                vpcId: {
                  name: 'VpcId'
                },
                state: {
                  name: 'State'
                },
                cidrBlock: {
                  name: 'CidrBlock'
                },
                dhcpOptionsId: {
                  name: 'DhcpOptionsId'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                instanceTenancy: {
                  name: 'InstanceTenancy'
                },
                isDefault: {
                  type: 'boolean',
                  name: 'IsDefault'
                }
              },
              name: 'item'
            },
            name: 'Vpcs'
          }
        }
      }
    },
    describeVpnConnections: {
      name: 'DescribeVpnConnections',
      input: {
        type: 'structure',
        members: {
          VpnConnectionIds: {
            type: 'list',
            members: {
              name: 'VpnConnectionId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          vpnConnectionSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                vpnConnectionId: {
                  name: 'VpnConnectionId'
                },
                state: {
                  name: 'State'
                },
                customerGatewayConfiguration: {
                  name: 'CustomerGatewayConfiguration'
                },
                type: {
                  name: 'Type'
                },
                customerGatewayId: {
                  name: 'CustomerGatewayId'
                },
                vpnGatewayId: {
                  name: 'VpnGatewayId'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                vgwTelemetry: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      outsideIpAddress: {
                        name: 'OutsideIpAddress'
                      },
                      status: {
                        name: 'Status'
                      },
                      lastStatusChange: {
                        type: 'timestamp',
                        name: 'LastStatusChange'
                      },
                      statusMessage: {
                        name: 'StatusMessage'
                      },
                      acceptedRouteCount: {
                        type: 'integer',
                        name: 'AcceptedRouteCount'
                      }
                    },
                    name: 'item'
                  },
                  name: 'VgwTelemetry'
                },
                options: {
                  type: 'structure',
                  members: {
                    staticRoutesOnly: {
                      type: 'boolean',
                      name: 'StaticRoutesOnly'
                    }
                  },
                  name: 'Options'
                },
                routes: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      destinationCidrBlock: {
                        name: 'DestinationCidrBlock'
                      },
                      source: {
                        name: 'Source'
                      },
                      state: {
                        name: 'State'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Routes'
                }
              },
              name: 'item'
            },
            name: 'VpnConnections'
          }
        }
      }
    },
    describeVpnGateways: {
      name: 'DescribeVpnGateways',
      input: {
        type: 'structure',
        members: {
          VpnGatewayIds: {
            type: 'list',
            members: {
              name: 'VpnGatewayId'
            },
            flattened: true
          },
          Filters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Values: {
                  type: 'list',
                  members: {
                    name: 'Value'
                  },
                  flattened: true
                }
              },
              name: 'Filter'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          vpnGatewaySet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                vpnGatewayId: {
                  name: 'VpnGatewayId'
                },
                state: {
                  name: 'State'
                },
                type: {
                  name: 'Type'
                },
                availabilityZone: {
                  name: 'AvailabilityZone'
                },
                attachments: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      vpcId: {
                        name: 'VpcId'
                      },
                      state: {
                        name: 'State'
                      }
                    },
                    name: 'item'
                  },
                  name: 'VpcAttachments'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                }
              },
              name: 'item'
            },
            name: 'VpnGateways'
          }
        }
      }
    },
    detachInternetGateway: {
      name: 'DetachInternetGateway',
      input: {
        type: 'structure',
        members: {
          InternetGatewayId: {
            required: true
          },
          VpcId: {
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
    detachNetworkInterface: {
      name: 'DetachNetworkInterface',
      input: {
        type: 'structure',
        members: {
          AttachmentId: {
            required: true
          },
          Force: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    detachVolume: {
      name: 'DetachVolume',
      input: {
        type: 'structure',
        members: {
          VolumeId: {
            required: true
          },
          InstanceId: {
          },
          Device: {
          },
          Force: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          volumeId: {
            name: 'VolumeId'
          },
          instanceId: {
            name: 'InstanceId'
          },
          device: {
            name: 'Device'
          },
          status: {
            name: 'State'
          },
          attachTime: {
            type: 'timestamp',
            name: 'AttachTime'
          },
          deleteOnTermination: {
            type: 'boolean',
            name: 'DeleteOnTermination'
          }
        },
        name: 'attachment'
      }
    },
    detachVpnGateway: {
      name: 'DetachVpnGateway',
      input: {
        type: 'structure',
        members: {
          VpnGatewayId: {
            required: true
          },
          VpcId: {
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
    disableVgwRoutePropagation: {
      name: 'DisableVgwRoutePropagation',
      input: {
        type: 'structure',
        members: {
          RouteTableId: {
            required: true
          },
          GatewayId: {
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
    disassociateAddress: {
      name: 'DisassociateAddress',
      input: {
        type: 'structure',
        members: {
          PublicIp: {
          },
          AssociationId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    disassociateRouteTable: {
      name: 'DisassociateRouteTable',
      input: {
        type: 'structure',
        members: {
          AssociationId: {
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
    enableVgwRoutePropagation: {
      name: 'EnableVgwRoutePropagation',
      input: {
        type: 'structure',
        members: {
          RouteTableId: {
            required: true
          },
          GatewayId: {
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
    enableVolumeIO: {
      name: 'EnableVolumeIO',
      input: {
        type: 'structure',
        members: {
          VolumeId: {
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
    getConsoleOutput: {
      name: 'GetConsoleOutput',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          instanceId: {
            name: 'InstanceId'
          },
          timestamp: {
            type: 'timestamp',
            name: 'Timestamp'
          },
          output: {
            name: 'Output'
          }
        }
      }
    },
    getPasswordData: {
      name: 'GetPasswordData',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          instanceId: {
            name: 'InstanceId'
          },
          timestamp: {
            type: 'timestamp',
            name: 'Timestamp'
          },
          passwordData: {
            name: 'PasswordData'
          }
        }
      }
    },
    importInstance: {
      name: 'ImportInstance',
      input: {
        type: 'structure',
        members: {
          Description: {
          },
          LaunchSpecification: {
            type: 'structure',
            members: {
              Architecture: {
              },
              SecurityGroups: {
                type: 'list',
                members: {
                  name: 'SecurityGroup'
                },
                flattened: true
              },
              AdditionalInfo: {
              },
              UserData: {
              },
              InstanceType: {
              },
              Placement: {
                type: 'structure',
                members: {
                  AvailabilityZone: {
                  },
                  GroupName: {
                  },
                  Tenancy: {
                  }
                }
              },
              BlockDeviceMappings: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VirtualName: {
                    },
                    DeviceName: {
                    },
                    Ebs: {
                      type: 'structure',
                      members: {
                        SnapshotId: {
                        },
                        VolumeSize: {
                          type: 'integer'
                        },
                        DeleteOnTermination: {
                          type: 'boolean'
                        },
                        VolumeType: {
                        },
                        Iops: {
                          type: 'integer'
                        }
                      }
                    },
                    NoDevice: {
                    }
                  },
                  name: 'BlockDeviceMapping'
                },
                flattened: true
              },
              Monitoring: {
                type: 'boolean'
              },
              SubnetId: {
              },
              DisableApiTermination: {
                type: 'boolean'
              },
              InstanceInitiatedShutdownBehavior: {
              },
              PrivateIpAddress: {
              }
            }
          },
          DiskImages: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Image: {
                  type: 'structure',
                  members: {
                    Format: {
                      required: true
                    },
                    Bytes: {
                      type: 'integer',
                      required: true
                    },
                    ImportManifestUrl: {
                      required: true
                    }
                  }
                },
                Description: {
                },
                Volume: {
                  type: 'structure',
                  members: {
                    Size: {
                      type: 'integer',
                      required: true
                    }
                  }
                }
              },
              name: 'DiskImage'
            },
            flattened: true
          },
          Platform: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          conversionTask: {
            type: 'structure',
            members: {
              conversionTaskId: {
                name: 'ConversionTaskId'
              },
              expirationTime: {
                name: 'ExpirationTime'
              },
              importInstance: {
                type: 'structure',
                members: {
                  volumes: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        bytesConverted: {
                          type: 'integer',
                          name: 'BytesConverted'
                        },
                        availabilityZone: {
                          name: 'AvailabilityZone'
                        },
                        image: {
                          type: 'structure',
                          members: {
                            format: {
                              name: 'Format'
                            },
                            size: {
                              type: 'integer',
                              name: 'Size'
                            },
                            importManifestUrl: {
                              name: 'ImportManifestUrl'
                            },
                            checksum: {
                              name: 'Checksum'
                            }
                          },
                          name: 'Image'
                        },
                        volume: {
                          type: 'structure',
                          members: {
                            size: {
                              type: 'integer',
                              name: 'Size'
                            },
                            id: {
                              name: 'Id'
                            }
                          },
                          name: 'Volume'
                        },
                        status: {
                          name: 'Status'
                        },
                        statusMessage: {
                          name: 'StatusMessage'
                        },
                        description: {
                          name: 'Description'
                        }
                      },
                      name: 'item'
                    },
                    name: 'Volumes'
                  },
                  instanceId: {
                    name: 'InstanceId'
                  },
                  platform: {
                    name: 'Platform'
                  },
                  description: {
                    name: 'Description'
                  }
                },
                name: 'ImportInstance'
              },
              importVolume: {
                type: 'structure',
                members: {
                  bytesConverted: {
                    type: 'integer',
                    name: 'BytesConverted'
                  },
                  availabilityZone: {
                    name: 'AvailabilityZone'
                  },
                  description: {
                    name: 'Description'
                  },
                  image: {
                    type: 'structure',
                    members: {
                      format: {
                        name: 'Format'
                      },
                      size: {
                        type: 'integer',
                        name: 'Size'
                      },
                      importManifestUrl: {
                        name: 'ImportManifestUrl'
                      },
                      checksum: {
                        name: 'Checksum'
                      }
                    },
                    name: 'Image'
                  },
                  volume: {
                    type: 'structure',
                    members: {
                      size: {
                        type: 'integer',
                        name: 'Size'
                      },
                      id: {
                        name: 'Id'
                      }
                    },
                    name: 'Volume'
                  }
                },
                name: 'ImportVolume'
              },
              state: {
                name: 'State'
              },
              statusMessage: {
                name: 'StatusMessage'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              }
            },
            name: 'ConversionTask'
          }
        }
      }
    },
    importKeyPair: {
      name: 'ImportKeyPair',
      input: {
        type: 'structure',
        members: {
          KeyName: {
            required: true
          },
          PublicKeyMaterial: {
            type: 'base64',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          keyName: {
            name: 'KeyName'
          },
          keyFingerprint: {
            name: 'KeyFingerprint'
          }
        }
      }
    },
    importVolume: {
      name: 'ImportVolume',
      input: {
        type: 'structure',
        members: {
          AvailabilityZone: {
          },
          Image: {
            type: 'structure',
            members: {
              Format: {
                required: true
              },
              Bytes: {
                type: 'integer',
                required: true
              },
              ImportManifestUrl: {
                required: true
              }
            }
          },
          Description: {
          },
          Volume: {
            type: 'structure',
            members: {
              Size: {
                type: 'integer',
                required: true
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          conversionTask: {
            type: 'structure',
            members: {
              conversionTaskId: {
                name: 'ConversionTaskId'
              },
              expirationTime: {
                name: 'ExpirationTime'
              },
              importInstance: {
                type: 'structure',
                members: {
                  volumes: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        bytesConverted: {
                          type: 'integer',
                          name: 'BytesConverted'
                        },
                        availabilityZone: {
                          name: 'AvailabilityZone'
                        },
                        image: {
                          type: 'structure',
                          members: {
                            format: {
                              name: 'Format'
                            },
                            size: {
                              type: 'integer',
                              name: 'Size'
                            },
                            importManifestUrl: {
                              name: 'ImportManifestUrl'
                            },
                            checksum: {
                              name: 'Checksum'
                            }
                          },
                          name: 'Image'
                        },
                        volume: {
                          type: 'structure',
                          members: {
                            size: {
                              type: 'integer',
                              name: 'Size'
                            },
                            id: {
                              name: 'Id'
                            }
                          },
                          name: 'Volume'
                        },
                        status: {
                          name: 'Status'
                        },
                        statusMessage: {
                          name: 'StatusMessage'
                        },
                        description: {
                          name: 'Description'
                        }
                      },
                      name: 'item'
                    },
                    name: 'Volumes'
                  },
                  instanceId: {
                    name: 'InstanceId'
                  },
                  platform: {
                    name: 'Platform'
                  },
                  description: {
                    name: 'Description'
                  }
                },
                name: 'ImportInstance'
              },
              importVolume: {
                type: 'structure',
                members: {
                  bytesConverted: {
                    type: 'integer',
                    name: 'BytesConverted'
                  },
                  availabilityZone: {
                    name: 'AvailabilityZone'
                  },
                  description: {
                    name: 'Description'
                  },
                  image: {
                    type: 'structure',
                    members: {
                      format: {
                        name: 'Format'
                      },
                      size: {
                        type: 'integer',
                        name: 'Size'
                      },
                      importManifestUrl: {
                        name: 'ImportManifestUrl'
                      },
                      checksum: {
                        name: 'Checksum'
                      }
                    },
                    name: 'Image'
                  },
                  volume: {
                    type: 'structure',
                    members: {
                      size: {
                        type: 'integer',
                        name: 'Size'
                      },
                      id: {
                        name: 'Id'
                      }
                    },
                    name: 'Volume'
                  }
                },
                name: 'ImportVolume'
              },
              state: {
                name: 'State'
              },
              statusMessage: {
                name: 'StatusMessage'
              },
              tagSet: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    key: {
                      name: 'Key'
                    },
                    value: {
                      name: 'Value'
                    }
                  },
                  name: 'item'
                },
                name: 'Tags'
              }
            },
            name: 'ConversionTask'
          }
        }
      }
    },
    modifyImageAttribute: {
      name: 'ModifyImageAttribute',
      input: {
        type: 'structure',
        members: {
          ImageId: {
            required: true
          },
          Attribute: {
          },
          OperationType: {
          },
          UserIds: {
            type: 'list',
            members: {
              name: 'UserId'
            },
            flattened: true
          },
          UserGroups: {
            type: 'list',
            members: {
              name: 'UserGroup'
            },
            flattened: true
          },
          ProductCodes: {
            type: 'list',
            members: {
              name: 'ProductCode'
            },
            flattened: true
          },
          Value: {
          },
          LaunchPermission: {
            type: 'structure',
            members: {
              Add: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    UserId: {
                    },
                    Group: {
                    }
                  }
                },
                flattened: true
              },
              Remove: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    UserId: {
                    },
                    Group: {
                    }
                  }
                },
                flattened: true
              }
            }
          },
          Description: {
            type: 'structure',
            members: {
              Value: {
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    modifyInstanceAttribute: {
      name: 'ModifyInstanceAttribute',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          },
          Attribute: {
          },
          Value: {
          },
          BlockDeviceMappings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                DeviceName: {
                },
                Ebs: {
                  type: 'structure',
                  members: {
                    VolumeId: {
                    },
                    DeleteOnTermination: {
                      type: 'boolean'
                    }
                  }
                },
                VirtualName: {
                },
                NoDevice: {
                }
              },
              name: 'BlockDeviceMapping'
            },
            flattened: true
          },
          SourceDestCheck: {
            type: 'structure',
            members: {
              Value: {
                type: 'boolean'
              }
            }
          },
          DisableApiTermination: {
            type: 'structure',
            members: {
              Value: {
                type: 'boolean'
              }
            }
          },
          InstanceType: {
            type: 'structure',
            members: {
              Value: {
              }
            }
          },
          Kernel: {
            type: 'structure',
            members: {
              Value: {
              }
            }
          },
          Ramdisk: {
            type: 'structure',
            members: {
              Value: {
              }
            }
          },
          UserData: {
            type: 'structure',
            members: {
              Value: {
                type: 'base64'
              }
            }
          },
          InstanceInitiatedShutdownBehavior: {
            type: 'structure',
            members: {
              Value: {
              }
            }
          },
          Groups: {
            type: 'list',
            members: {
              name: 'GroupId'
            },
            flattened: true
          },
          EbsOptimized: {
            type: 'structure',
            members: {
              Value: {
                type: 'boolean'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    modifyNetworkInterfaceAttribute: {
      name: 'ModifyNetworkInterfaceAttribute',
      input: {
        type: 'structure',
        members: {
          NetworkInterfaceId: {
            required: true
          },
          Description: {
            type: 'structure',
            members: {
              Value: {
              }
            }
          },
          SourceDestCheck: {
            type: 'structure',
            members: {
              Value: {
                type: 'boolean'
              }
            }
          },
          Groups: {
            type: 'list',
            members: {
              name: 'SecurityGroupId'
            },
            flattened: true
          },
          Attachment: {
            type: 'structure',
            members: {
              AttachmentId: {
              },
              DeleteOnTermination: {
                type: 'boolean'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    modifySnapshotAttribute: {
      name: 'ModifySnapshotAttribute',
      input: {
        type: 'structure',
        members: {
          SnapshotId: {
            required: true
          },
          Attribute: {
          },
          OperationType: {
          },
          UserIds: {
            type: 'list',
            members: {
              name: 'UserId'
            },
            flattened: true
          },
          GroupNames: {
            type: 'list',
            members: {
              name: 'UserGroup'
            },
            flattened: true
          },
          CreateVolumePermission: {
            type: 'structure',
            members: {
              Add: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    UserId: {
                    },
                    Group: {
                    }
                  }
                },
                flattened: true
              },
              Remove: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    UserId: {
                    },
                    Group: {
                    }
                  }
                },
                flattened: true
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    modifyVolumeAttribute: {
      name: 'ModifyVolumeAttribute',
      input: {
        type: 'structure',
        members: {
          VolumeId: {
            required: true
          },
          AutoEnableIO: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    modifyVpcAttribute: {
      name: 'ModifyVpcAttribute',
      input: {
        type: 'structure',
        members: {
          VpcId: {
            required: true
          },
          EnableDnsSupport: {
            type: 'structure',
            members: {
              Value: {
                type: 'boolean'
              }
            }
          },
          EnableDnsHostnames: {
            type: 'structure',
            members: {
              Value: {
                type: 'boolean'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    monitorInstances: {
      name: 'MonitorInstances',
      input: {
        type: 'structure',
        members: {
          InstanceIds: {
            type: 'list',
            members: {
              name: 'InstanceId'
            },
            required: true,
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          instancesSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                instanceId: {
                  name: 'InstanceId'
                },
                monitoring: {
                  type: 'structure',
                  members: {
                    state: {
                      name: 'State'
                    }
                  },
                  name: 'Monitoring'
                }
              },
              name: 'item'
            },
            name: 'InstanceMonitorings'
          }
        }
      }
    },
    purchaseReservedInstancesOffering: {
      name: 'PurchaseReservedInstancesOffering',
      input: {
        type: 'structure',
        members: {
          ReservedInstancesOfferingId: {
            required: true
          },
          InstanceCount: {
            type: 'integer',
            required: true
          },
          LimitPrice: {
            type: 'structure',
            members: {
              Amount: {
                type: 'float'
              },
              CurrencyCode: {
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          reservedInstancesId: {
            name: 'ReservedInstancesId'
          }
        }
      }
    },
    rebootInstances: {
      name: 'RebootInstances',
      input: {
        type: 'structure',
        members: {
          InstanceIds: {
            type: 'list',
            members: {
              name: 'InstanceId'
            },
            required: true,
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    registerImage: {
      name: 'RegisterImage',
      input: {
        type: 'structure',
        members: {
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
            type: 'list',
            members: {
              type: 'structure',
              members: {
                VirtualName: {
                },
                DeviceName: {
                },
                Ebs: {
                  type: 'structure',
                  members: {
                    SnapshotId: {
                    },
                    VolumeSize: {
                      type: 'integer'
                    },
                    DeleteOnTermination: {
                      type: 'boolean'
                    },
                    VolumeType: {
                    },
                    Iops: {
                      type: 'integer'
                    }
                  }
                },
                NoDevice: {
                }
              },
              name: 'BlockDeviceMapping'
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          imageId: {
            name: 'ImageId'
          }
        }
      }
    },
    releaseAddress: {
      name: 'ReleaseAddress',
      input: {
        type: 'structure',
        members: {
          PublicIp: {
          },
          AllocationId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    replaceNetworkAclAssociation: {
      name: 'ReplaceNetworkAclAssociation',
      input: {
        type: 'structure',
        members: {
          AssociationId: {
            required: true
          },
          NetworkAclId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          newAssociationId: {
            name: 'NewAssociationId'
          }
        }
      }
    },
    replaceNetworkAclEntry: {
      name: 'ReplaceNetworkAclEntry',
      input: {
        type: 'structure',
        members: {
          NetworkAclId: {
            required: true
          },
          RuleNumber: {
            type: 'integer',
            required: true
          },
          Protocol: {
            required: true
          },
          RuleAction: {
            required: true
          },
          Egress: {
            type: 'boolean',
            required: true
          },
          CidrBlock: {
            required: true
          },
          IcmpTypeCode: {
            type: 'structure',
            members: {
              Type: {
                type: 'integer'
              },
              Code: {
                type: 'integer'
              }
            },
            name: 'Icmp'
          },
          PortRange: {
            type: 'structure',
            members: {
              From: {
                type: 'integer'
              },
              To: {
                type: 'integer'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    replaceRoute: {
      name: 'ReplaceRoute',
      input: {
        type: 'structure',
        members: {
          RouteTableId: {
            required: true
          },
          DestinationCidrBlock: {
            required: true
          },
          GatewayId: {
          },
          InstanceId: {
          },
          NetworkInterfaceId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    replaceRouteTableAssociation: {
      name: 'ReplaceRouteTableAssociation',
      input: {
        type: 'structure',
        members: {
          AssociationId: {
            required: true
          },
          RouteTableId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          newAssociationId: {
            name: 'NewAssociationId'
          }
        }
      }
    },
    reportInstanceStatus: {
      name: 'ReportInstanceStatus',
      input: {
        type: 'structure',
        members: {
          Instances: {
            type: 'list',
            members: {
              name: 'InstanceId'
            },
            flattened: true
          },
          Status: {
          },
          StartTime: {
            type: 'timestamp'
          },
          EndTime: {
            type: 'timestamp'
          },
          ReasonCodes: {
            type: 'list',
            members: {
              name: 'ReasonCode'
            },
            flattened: true
          },
          Description: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    requestSpotInstances: {
      name: 'RequestSpotInstances',
      input: {
        type: 'structure',
        members: {
          SpotPrice: {
            required: true
          },
          InstanceCount: {
            type: 'integer'
          },
          Type: {
          },
          ValidFrom: {
            type: 'timestamp'
          },
          ValidUntil: {
            type: 'timestamp'
          },
          LaunchGroup: {
          },
          AvailabilityZoneGroup: {
          },
          LaunchSpecification: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
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
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    VirtualName: {
                    },
                    DeviceName: {
                    },
                    Ebs: {
                      type: 'structure',
                      members: {
                        SnapshotId: {
                        },
                        VolumeSize: {
                          type: 'integer'
                        },
                        DeleteOnTermination: {
                          type: 'boolean'
                        },
                        VolumeType: {
                        },
                        Iops: {
                          type: 'integer'
                        }
                      }
                    },
                    NoDevice: {
                    }
                  },
                  name: 'BlockDeviceMapping'
                },
                flattened: true
              },
              MonitoringEnabled: {
                type: 'boolean'
              },
              SubnetId: {
              },
              NetworkInterfaces: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    NetworkInterfaceId: {
                    },
                    DeviceIndex: {
                      type: 'integer'
                    },
                    SubnetId: {
                    },
                    Description: {
                    },
                    PrivateIpAddress: {
                    },
                    Groups: {
                      type: 'list',
                      members: {
                        name: 'SecurityGroupId'
                      },
                      flattened: true
                    },
                    DeleteOnTermination: {
                      type: 'boolean'
                    },
                    PrivateIpAddresses: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          PrivateIpAddress: {
                            required: true
                          },
                          Primary: {
                            type: 'boolean'
                          }
                        },
                        name: 'PrivateIpAddressesSet'
                      },
                      flattened: true
                    },
                    SecondaryPrivateIpAddressCount: {
                      type: 'integer'
                    }
                  },
                  name: 'NetworkInterfaceSet'
                },
                flattened: true
              },
              IamInstanceProfile: {
                type: 'structure',
                members: {
                  Arn: {
                  },
                  Name: {
                  }
                }
              },
              EbsOptimized: {
                type: 'boolean'
              },
              SecurityGroupIds: {
                type: 'list',
                members: {
                  name: 'SecurityGroupId'
                },
                flattened: true
              },
              SecurityGroups: {
                type: 'list',
                members: {
                  name: 'SecurityGroup'
                },
                flattened: true
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          spotInstanceRequestSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                spotInstanceRequestId: {
                  name: 'SpotInstanceRequestId'
                },
                spotPrice: {
                  name: 'SpotPrice'
                },
                type: {
                  name: 'Type'
                },
                state: {
                  name: 'State'
                },
                fault: {
                  type: 'structure',
                  members: {
                    code: {
                      name: 'Code'
                    },
                    message: {
                      name: 'Message'
                    }
                  },
                  name: 'Fault'
                },
                status: {
                  type: 'structure',
                  members: {
                    code: {
                      name: 'Code'
                    },
                    updateTime: {
                      type: 'timestamp',
                      name: 'UpdateTime'
                    },
                    message: {
                      name: 'Message'
                    }
                  },
                  name: 'Status'
                },
                validFrom: {
                  type: 'timestamp',
                  name: 'ValidFrom'
                },
                validUntil: {
                  type: 'timestamp',
                  name: 'ValidUntil'
                },
                launchGroup: {
                  name: 'LaunchGroup'
                },
                availabilityZoneGroup: {
                  name: 'AvailabilityZoneGroup'
                },
                launchSpecification: {
                  type: 'structure',
                  members: {
                    imageId: {
                      name: 'ImageId'
                    },
                    keyName: {
                      name: 'KeyName'
                    },
                    groupSet: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          groupName: {
                            name: 'GroupName'
                          },
                          groupId: {
                            name: 'GroupId'
                          }
                        },
                        name: 'item'
                      },
                      name: 'SecurityGroups'
                    },
                    userData: {
                      name: 'UserData'
                    },
                    addressingType: {
                      name: 'AddressingType'
                    },
                    instanceType: {
                      name: 'InstanceType'
                    },
                    placement: {
                      type: 'structure',
                      members: {
                        availabilityZone: {
                          name: 'AvailabilityZone'
                        },
                        groupName: {
                          name: 'GroupName'
                        }
                      },
                      name: 'Placement'
                    },
                    kernelId: {
                      name: 'KernelId'
                    },
                    ramdiskId: {
                      name: 'RamdiskId'
                    },
                    blockDeviceMapping: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          virtualName: {
                            name: 'VirtualName'
                          },
                          deviceName: {
                            name: 'DeviceName'
                          },
                          ebs: {
                            type: 'structure',
                            members: {
                              snapshotId: {
                                name: 'SnapshotId'
                              },
                              volumeSize: {
                                type: 'integer',
                                name: 'VolumeSize'
                              },
                              deleteOnTermination: {
                                type: 'boolean',
                                name: 'DeleteOnTermination'
                              },
                              volumeType: {
                                name: 'VolumeType'
                              },
                              iops: {
                                type: 'integer',
                                name: 'Iops'
                              }
                            },
                            name: 'Ebs'
                          },
                          noDevice: {
                            name: 'NoDevice'
                          }
                        },
                        name: 'item'
                      },
                      name: 'BlockDeviceMappings'
                    },
                    monitoringEnabled: {
                      type: 'boolean',
                      name: 'MonitoringEnabled'
                    },
                    subnetId: {
                      name: 'SubnetId'
                    },
                    networkInterfaceSet: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          networkInterfaceId: {
                            name: 'NetworkInterfaceId'
                          },
                          deviceIndex: {
                            type: 'integer',
                            name: 'DeviceIndex'
                          },
                          subnetId: {
                            name: 'SubnetId'
                          },
                          description: {
                            name: 'Description'
                          },
                          privateIpAddress: {
                            name: 'PrivateIpAddress'
                          },
                          SecurityGroupId: {
                            type: 'list',
                            members: {
                              name: 'SecurityGroupId'
                            },
                            name: 'Groups'
                          },
                          deleteOnTermination: {
                            type: 'boolean',
                            name: 'DeleteOnTermination'
                          },
                          privateIpAddressesSet: {
                            type: 'list',
                            members: {
                              type: 'structure',
                              members: {
                                privateIpAddress: {
                                  name: 'PrivateIpAddress'
                                },
                                primary: {
                                  type: 'boolean',
                                  name: 'Primary'
                                }
                              },
                              name: 'item'
                            },
                            name: 'PrivateIpAddresses'
                          },
                          secondaryPrivateIpAddressCount: {
                            type: 'integer',
                            name: 'SecondaryPrivateIpAddressCount'
                          }
                        },
                        name: 'item'
                      },
                      name: 'NetworkInterfaces'
                    },
                    iamInstanceProfile: {
                      type: 'structure',
                      members: {
                        arn: {
                          name: 'Arn'
                        },
                        name: {
                          name: 'Name'
                        }
                      },
                      name: 'IamInstanceProfile'
                    },
                    ebsOptimized: {
                      type: 'boolean',
                      name: 'EbsOptimized'
                    }
                  },
                  name: 'LaunchSpecification'
                },
                instanceId: {
                  name: 'InstanceId'
                },
                createTime: {
                  type: 'timestamp',
                  name: 'CreateTime'
                },
                productDescription: {
                  name: 'ProductDescription'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                launchedAvailabilityZone: {
                  name: 'LaunchedAvailabilityZone'
                }
              },
              name: 'item'
            },
            name: 'SpotInstanceRequests'
          }
        }
      }
    },
    resetImageAttribute: {
      name: 'ResetImageAttribute',
      input: {
        type: 'structure',
        members: {
          ImageId: {
            required: true
          },
          Attribute: {
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
    resetInstanceAttribute: {
      name: 'ResetInstanceAttribute',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          },
          Attribute: {
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
    resetNetworkInterfaceAttribute: {
      name: 'ResetNetworkInterfaceAttribute',
      input: {
        type: 'structure',
        members: {
          NetworkInterfaceId: {
            required: true
          },
          SourceDestCheck: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    resetSnapshotAttribute: {
      name: 'ResetSnapshotAttribute',
      input: {
        type: 'structure',
        members: {
          SnapshotId: {
            required: true
          },
          Attribute: {
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
    revokeSecurityGroupEgress: {
      name: 'RevokeSecurityGroupEgress',
      input: {
        type: 'structure',
        members: {
          GroupId: {
            required: true
          },
          SourceSecurityGroupName: {
          },
          SourceSecurityGroupOwnerId: {
          },
          IpProtocol: {
          },
          FromPort: {
            type: 'integer'
          },
          ToPort: {
            type: 'integer'
          },
          CidrIp: {
          },
          IpPermissions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                IpProtocol: {
                },
                FromPort: {
                  type: 'integer'
                },
                ToPort: {
                  type: 'integer'
                },
                UserIdGroupPairs: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      UserId: {
                      },
                      GroupName: {
                      },
                      GroupId: {
                      }
                    },
                    name: 'Groups'
                  },
                  flattened: true
                },
                IpRanges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      CidrIp: {
                      }
                    }
                  },
                  flattened: true
                }
              }
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    revokeSecurityGroupIngress: {
      name: 'RevokeSecurityGroupIngress',
      input: {
        type: 'structure',
        members: {
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
            type: 'integer'
          },
          ToPort: {
            type: 'integer'
          },
          CidrIp: {
          },
          IpPermissions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                IpProtocol: {
                },
                FromPort: {
                  type: 'integer'
                },
                ToPort: {
                  type: 'integer'
                },
                UserIdGroupPairs: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      UserId: {
                      },
                      GroupName: {
                      },
                      GroupId: {
                      }
                    },
                    name: 'Groups'
                  },
                  flattened: true
                },
                IpRanges: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      CidrIp: {
                      }
                    }
                  },
                  flattened: true
                }
              }
            },
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    runInstances: {
      name: 'RunInstances',
      input: {
        type: 'structure',
        members: {
          ImageId: {
            required: true
          },
          MinCount: {
            type: 'integer',
            required: true
          },
          MaxCount: {
            type: 'integer',
            required: true
          },
          KeyName: {
          },
          SecurityGroups: {
            type: 'list',
            members: {
              name: 'SecurityGroup'
            },
            flattened: true
          },
          SecurityGroupIds: {
            type: 'list',
            members: {
              name: 'SecurityGroupId'
            },
            flattened: true
          },
          UserData: {
          },
          InstanceType: {
          },
          Placement: {
            type: 'structure',
            members: {
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
            type: 'list',
            members: {
              type: 'structure',
              members: {
                VirtualName: {
                },
                DeviceName: {
                },
                Ebs: {
                  type: 'structure',
                  members: {
                    SnapshotId: {
                    },
                    VolumeSize: {
                      type: 'integer'
                    },
                    DeleteOnTermination: {
                      type: 'boolean'
                    },
                    VolumeType: {
                    },
                    Iops: {
                      type: 'integer'
                    }
                  }
                },
                NoDevice: {
                }
              },
              name: 'BlockDeviceMapping'
            },
            flattened: true
          },
          Monitoring: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean',
                required: true
              }
            }
          },
          SubnetId: {
          },
          DisableApiTermination: {
            type: 'boolean'
          },
          InstanceInitiatedShutdownBehavior: {
          },
          License: {
            type: 'structure',
            members: {
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
            type: 'list',
            members: {
              type: 'structure',
              members: {
                NetworkInterfaceId: {
                },
                DeviceIndex: {
                  type: 'integer'
                },
                SubnetId: {
                },
                Description: {
                },
                PrivateIpAddress: {
                },
                Groups: {
                  type: 'list',
                  members: {
                    name: 'SecurityGroupId'
                  },
                  flattened: true
                },
                DeleteOnTermination: {
                  type: 'boolean'
                },
                PrivateIpAddresses: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      PrivateIpAddress: {
                        required: true
                      },
                      Primary: {
                        type: 'boolean'
                      }
                    },
                    name: 'PrivateIpAddressesSet'
                  },
                  flattened: true
                },
                SecondaryPrivateIpAddressCount: {
                  type: 'integer'
                }
              },
              name: 'NetworkInterface'
            },
            flattened: true
          },
          IamInstanceProfile: {
            type: 'structure',
            members: {
              Arn: {
              },
              Name: {
              }
            }
          },
          EbsOptimized: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          reservationId: {
            name: 'ReservationId'
          },
          ownerId: {
            name: 'OwnerId'
          },
          requesterId: {
            name: 'RequesterId'
          },
          groupSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                groupName: {
                  name: 'GroupName'
                },
                groupId: {
                  name: 'GroupId'
                }
              },
              name: 'item'
            },
            name: 'Groups'
          },
          instancesSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                instanceId: {
                  name: 'InstanceId'
                },
                imageId: {
                  name: 'ImageId'
                },
                instanceState: {
                  type: 'structure',
                  members: {
                    code: {
                      type: 'integer',
                      name: 'Code'
                    },
                    name: {
                      name: 'Name'
                    }
                  },
                  name: 'State'
                },
                privateDnsName: {
                  name: 'PrivateDnsName'
                },
                dnsName: {
                  name: 'PublicDnsName'
                },
                reason: {
                  name: 'StateTransitionReason'
                },
                keyName: {
                  name: 'KeyName'
                },
                amiLaunchIndex: {
                  type: 'integer',
                  name: 'AmiLaunchIndex'
                },
                productCodes: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      productCode: {
                        name: 'ProductCodeId'
                      },
                      type: {
                        name: 'ProductCodeType'
                      }
                    },
                    name: 'item'
                  },
                  name: 'ProductCodes'
                },
                instanceType: {
                  name: 'InstanceType'
                },
                launchTime: {
                  type: 'timestamp',
                  name: 'LaunchTime'
                },
                placement: {
                  type: 'structure',
                  members: {
                    availabilityZone: {
                      name: 'AvailabilityZone'
                    },
                    groupName: {
                      name: 'GroupName'
                    },
                    tenancy: {
                      name: 'Tenancy'
                    }
                  },
                  name: 'Placement'
                },
                kernelId: {
                  name: 'KernelId'
                },
                ramdiskId: {
                  name: 'RamdiskId'
                },
                platform: {
                  name: 'Platform'
                },
                monitoring: {
                  type: 'structure',
                  members: {
                    state: {
                      name: 'State'
                    }
                  },
                  name: 'Monitoring'
                },
                subnetId: {
                  name: 'SubnetId'
                },
                vpcId: {
                  name: 'VpcId'
                },
                privateIpAddress: {
                  name: 'PrivateIpAddress'
                },
                ipAddress: {
                  name: 'PublicIpAddress'
                },
                stateReason: {
                  type: 'structure',
                  members: {
                    code: {
                      name: 'Code'
                    },
                    message: {
                      name: 'Message'
                    }
                  },
                  name: 'StateReason'
                },
                architecture: {
                  name: 'Architecture'
                },
                rootDeviceType: {
                  name: 'RootDeviceType'
                },
                rootDeviceName: {
                  name: 'RootDeviceName'
                },
                blockDeviceMapping: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      deviceName: {
                        name: 'DeviceName'
                      },
                      ebs: {
                        type: 'structure',
                        members: {
                          volumeId: {
                            name: 'VolumeId'
                          },
                          status: {
                            name: 'Status'
                          },
                          attachTime: {
                            type: 'timestamp',
                            name: 'AttachTime'
                          },
                          deleteOnTermination: {
                            type: 'boolean',
                            name: 'DeleteOnTermination'
                          }
                        },
                        name: 'Ebs'
                      }
                    },
                    name: 'item'
                  },
                  name: 'BlockDeviceMappings'
                },
                virtualizationType: {
                  name: 'VirtualizationType'
                },
                instanceLifecycle: {
                  name: 'InstanceLifecycle'
                },
                spotInstanceRequestId: {
                  name: 'SpotInstanceRequestId'
                },
                license: {
                  type: 'structure',
                  members: {
                    pool: {
                      name: 'Pool'
                    }
                  },
                  name: 'License'
                },
                clientToken: {
                  name: 'ClientToken'
                },
                tagSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        name: 'Key'
                      },
                      value: {
                        name: 'Value'
                      }
                    },
                    name: 'item'
                  },
                  name: 'Tags'
                },
                groupSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      groupName: {
                        name: 'GroupName'
                      },
                      groupId: {
                        name: 'GroupId'
                      }
                    },
                    name: 'item'
                  },
                  name: 'SecurityGroups'
                },
                sourceDestCheck: {
                  type: 'boolean',
                  name: 'SourceDestCheck'
                },
                hypervisor: {
                  name: 'Hypervisor'
                },
                networkInterfaceSet: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      networkInterfaceId: {
                        name: 'NetworkInterfaceId'
                      },
                      subnetId: {
                        name: 'SubnetId'
                      },
                      vpcId: {
                        name: 'VpcId'
                      },
                      description: {
                        name: 'Description'
                      },
                      ownerId: {
                        name: 'OwnerId'
                      },
                      status: {
                        name: 'Status'
                      },
                      privateIpAddress: {
                        name: 'PrivateIpAddress'
                      },
                      privateDnsName: {
                        name: 'PrivateDnsName'
                      },
                      sourceDestCheck: {
                        type: 'boolean',
                        name: 'SourceDestCheck'
                      },
                      groupSet: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            groupName: {
                              name: 'GroupName'
                            },
                            groupId: {
                              name: 'GroupId'
                            }
                          },
                          name: 'item'
                        },
                        name: 'Groups'
                      },
                      attachment: {
                        type: 'structure',
                        members: {
                          attachmentId: {
                            name: 'AttachmentId'
                          },
                          deviceIndex: {
                            type: 'integer',
                            name: 'DeviceIndex'
                          },
                          status: {
                            name: 'Status'
                          },
                          attachTime: {
                            type: 'timestamp',
                            name: 'AttachTime'
                          },
                          deleteOnTermination: {
                            type: 'boolean',
                            name: 'DeleteOnTermination'
                          }
                        },
                        name: 'Attachment'
                      },
                      association: {
                        type: 'structure',
                        members: {
                          publicIp: {
                            name: 'PublicIp'
                          },
                          publicDnsName: {
                            name: 'PublicDnsName'
                          },
                          ipOwnerId: {
                            name: 'IpOwnerId'
                          }
                        },
                        name: 'Association'
                      },
                      privateIpAddressesSet: {
                        type: 'list',
                        members: {
                          type: 'structure',
                          members: {
                            privateIpAddress: {
                              name: 'PrivateIpAddress'
                            },
                            privateDnsName: {
                              name: 'PrivateDnsName'
                            },
                            primary: {
                              type: 'boolean',
                              name: 'Primary'
                            },
                            association: {
                              type: 'structure',
                              members: {
                                publicIp: {
                                  name: 'PublicIp'
                                },
                                publicDnsName: {
                                  name: 'PublicDnsName'
                                },
                                ipOwnerId: {
                                  name: 'IpOwnerId'
                                }
                              },
                              name: 'Association'
                            }
                          },
                          name: 'item'
                        },
                        name: 'PrivateIpAddresses'
                      }
                    },
                    name: 'item'
                  },
                  name: 'NetworkInterfaces'
                },
                iamInstanceProfile: {
                  type: 'structure',
                  members: {
                    arn: {
                      name: 'Arn'
                    },
                    id: {
                      name: 'Id'
                    }
                  },
                  name: 'IamInstanceProfile'
                },
                ebsOptimized: {
                  type: 'boolean',
                  name: 'EbsOptimized'
                }
              },
              name: 'item'
            },
            name: 'Instances'
          }
        },
        name: 'reservation'
      }
    },
    startInstances: {
      name: 'StartInstances',
      input: {
        type: 'structure',
        members: {
          InstanceIds: {
            type: 'list',
            members: {
              name: 'InstanceId'
            },
            required: true,
            flattened: true
          },
          AdditionalInfo: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          instancesSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                instanceId: {
                  name: 'InstanceId'
                },
                currentState: {
                  type: 'structure',
                  members: {
                    code: {
                      type: 'integer',
                      name: 'Code'
                    },
                    name: {
                      name: 'Name'
                    }
                  },
                  name: 'CurrentState'
                },
                previousState: {
                  type: 'structure',
                  members: {
                    code: {
                      type: 'integer',
                      name: 'Code'
                    },
                    name: {
                      name: 'Name'
                    }
                  },
                  name: 'PreviousState'
                }
              },
              name: 'item'
            },
            name: 'StartingInstances'
          }
        }
      }
    },
    stopInstances: {
      name: 'StopInstances',
      input: {
        type: 'structure',
        members: {
          InstanceIds: {
            type: 'list',
            members: {
              name: 'InstanceId'
            },
            required: true,
            flattened: true
          },
          Force: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          instancesSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                instanceId: {
                  name: 'InstanceId'
                },
                currentState: {
                  type: 'structure',
                  members: {
                    code: {
                      type: 'integer',
                      name: 'Code'
                    },
                    name: {
                      name: 'Name'
                    }
                  },
                  name: 'CurrentState'
                },
                previousState: {
                  type: 'structure',
                  members: {
                    code: {
                      type: 'integer',
                      name: 'Code'
                    },
                    name: {
                      name: 'Name'
                    }
                  },
                  name: 'PreviousState'
                }
              },
              name: 'item'
            },
            name: 'StoppingInstances'
          }
        }
      }
    },
    terminateInstances: {
      name: 'TerminateInstances',
      input: {
        type: 'structure',
        members: {
          InstanceIds: {
            type: 'list',
            members: {
              name: 'InstanceId'
            },
            required: true,
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          instancesSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                instanceId: {
                  name: 'InstanceId'
                },
                currentState: {
                  type: 'structure',
                  members: {
                    code: {
                      type: 'integer',
                      name: 'Code'
                    },
                    name: {
                      name: 'Name'
                    }
                  },
                  name: 'CurrentState'
                },
                previousState: {
                  type: 'structure',
                  members: {
                    code: {
                      type: 'integer',
                      name: 'Code'
                    },
                    name: {
                      name: 'Name'
                    }
                  },
                  name: 'PreviousState'
                }
              },
              name: 'item'
            },
            name: 'TerminatingInstances'
          }
        }
      }
    },
    unassignPrivateIpAddresses: {
      name: 'UnassignPrivateIpAddresses',
      input: {
        type: 'structure',
        members: {
          NetworkInterfaceId: {
            required: true
          },
          PrivateIpAddresses: {
            type: 'list',
            members: {
              name: 'PrivateIpAddress'
            },
            required: true,
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    unmonitorInstances: {
      name: 'UnmonitorInstances',
      input: {
        type: 'structure',
        members: {
          InstanceIds: {
            type: 'list',
            members: {
              name: 'InstanceId'
            },
            required: true,
            flattened: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          instancesSet: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                instanceId: {
                  name: 'InstanceId'
                },
                monitoring: {
                  type: 'structure',
                  members: {
                    state: {
                      name: 'State'
                    }
                  },
                  name: 'Monitoring'
                }
              },
              name: 'item'
            },
            name: 'InstanceMonitorings'
          }
        }
      }
    }
  }
};
