/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.EC2.Client.prototype.api = {
  format: 'query',
  apiVersion: '2012-07-20',
  timestampFormat: 'iso8601',
  operations: {
    activateLicense: {
      n: 'ActivateLicense',
      i: {
        m: {
          licenseId: {
            r: 1
          },
          capacity: {
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
        },
        allocationId: {
        }
      }
    },
    assignPrivateIpAddresses: {
      n: 'AssignPrivateIpAddresses',
      i: {
        m: {
          networkInterfaceId: {
            r: 1
          },
          privateIpAddresses: {
            n: 'privateIpAddress',
            t: 'a',
            m: {
              n: 'PrivateIpAddress'
            }
          },
          secondaryPrivateIpAddressCount: {
            t: 'i'
          },
          allowReassignment: {
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
            r: 1
          },
          PublicIp: {
            r: 1
          },
          AllocationId: {
          },
          networkInterfaceId: {
          },
          privateIpAddress: {
          },
          allowReassociation: {
            t: 'b'
          }
        }
      },
      o: {
        associationId: {
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
          subnetId: {
            r: 1
          },
          routeTableId: {
            r: 1
          }
        }
      },
      o: {
        associationId: {
        }
      }
    },
    attachInternetGateway: {
      n: 'AttachInternetGateway',
      i: {
        m: {
          internetGatewayId: {
            r: 1
          },
          vpcId: {
            r: 1
          }
        }
      }
    },
    attachNetworkInterface: {
      n: 'AttachNetworkInterface',
      i: {
        m: {
          networkInterfaceId: {
            r: 1
          },
          instanceId: {
            r: 1
          },
          deviceIndex: {
            t: 'i',
            r: 1
          }
        }
      },
      o: {
        attachmentId: {
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
        attachment: {
          n: 'Attachment',
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
              t: 'b'
            }
          }
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
          groupId: {
            r: 1
          },
          sourceSecurityGroupName: {
          },
          sourceSecurityGroupOwnerId: {
          },
          ipProtocol: {
          },
          fromPort: {
            t: 'i'
          },
          toPort: {
            t: 'i'
          },
          cidrIp: {
          },
          ipPermissions: {
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
                  },
                  UploadPolicy: {
                    n: 'uploadPolicy'
                  },
                  UploadPolicySignature: {
                    n: 'uploadPolicySignature'
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
                  n: 'S3',
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
                  n: 'S3',
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
          conversionTaskId: {
            r: 1
          },
          reasonMessage: {
          }
        }
      }
    },
    cancelExportTask: {
      n: 'CancelExportTask',
      i: {
        m: {
          exportTaskId: {
            r: 1
          }
        }
      }
    },
    cancelReservedInstancesListing: {
      n: 'CancelReservedInstancesListing',
      i: {
        m: {
          reservedInstancesListingId: {
            r: 1
          }
        }
      },
      o: {
        reservedInstancesListingsSet: {
          n: 'reservedInstancesListings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              reservedInstancesListingId: {
              },
              reservedInstancesId: {
              },
              createDate: {
                t: 't'
              },
              updateDate: {
                t: 't'
              },
              status: {
              },
              statusMessage: {
              },
              instanceCounts: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    state: {
                    },
                    instanceCount: {
                      t: 'i'
                    }
                  }
                }
              },
              priceSchedules: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    term: {
                      t: 'i'
                    },
                    price: {
                      t: 'n'
                    },
                    currencyCode: {
                    },
                    active: {
                      t: 'b'
                    }
                  }
                }
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              clientToken: {
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
          spotInstanceRequestIds: {
            n: 'SpotInstanceRequestId',
            t: 'a',
            m: {
              n: 'SpotInstanceRequestId'
            },
            r: 1
          }
        }
      },
      o: {
        spotInstanceRequestSet: {
          n: 'cancelledSpotInstanceRequests',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              spotInstanceRequestId: {
              },
              state: {
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
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
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
            n: 'dhcpConfiguration',
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
            },
            r: 1
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
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
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
          instanceId: {
            r: 1
          },
          name: {
            r: 1
          },
          description: {
          },
          noReboot: {
            t: 'b'
          },
          blockDeviceMappings: {
            n: 'blockDeviceMapping',
            t: 'a',
            m: {
              n: 'BlockDeviceMapping',
              t: 'o',
              m: {
                VirtualName: {
                  n: 'virtualName'
                },
                DeviceName: {
                  n: 'deviceName'
                },
                ebs: {
                  t: 'o',
                  m: {
                    snapshotId: {
                    },
                    volumeSize: {
                      t: 'i'
                    },
                    deleteOnTermination: {
                      t: 'b'
                    },
                    volumeType: {
                    },
                    iops: {
                      t: 'i'
                    }
                  }
                },
                noDevice: {
                }
              }
            }
          }
        }
      },
      o: {
        imageId: {
        }
      }
    },
    createInstanceExportTask: {
      n: 'CreateInstanceExportTask',
      i: {
        m: {
          description: {
          },
          instanceId: {
            r: 1
          },
          targetEnvironment: {
          },
          exportToS3Task: {
            n: 'exportToS3',
            t: 'o',
            m: {
              diskImageFormat: {
              },
              containerFormat: {
              },
              s3Bucket: {
              },
              s3Prefix: {
              }
            }
          }
        }
      },
      o: {
        exportTask: {
          t: 'o',
          m: {
            exportTaskId: {
            },
            description: {
            },
            state: {
            },
            statusMessage: {
            },
            instanceExport: {
              n: 'instanceExportDetails',
              t: 'o',
              m: {
                instanceId: {
                },
                targetEnvironment: {
                }
              }
            },
            exportToS3: {
              n: 'exportToS3Task',
              t: 'o',
              m: {
                diskImageFormat: {
                },
                containerFormat: {
                },
                s3Bucket: {
                },
                s3Key: {
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
          t: 'o',
          m: {
            internetGatewayId: {
            },
            attachmentSet: {
              n: 'attachments',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  vpcId: {
                  },
                  state: {
                  }
                }
              }
            },
            tagSet: {
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
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
          vpcId: {
            r: 1
          }
        }
      },
      o: {
        networkAcl: {
          t: 'o',
          m: {
            networkAclId: {
            },
            vpcId: {
            },
            'default': {
              n: 'isDefault',
              t: 'b'
            },
            entrySet: {
              n: 'entries',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  ruleNumber: {
                    t: 'i'
                  },
                  protocol: {
                  },
                  ruleAction: {
                  },
                  egress: {
                    t: 'b'
                  },
                  cidrBlock: {
                  },
                  icmpTypeCode: {
                    t: 'o',
                    m: {
                      type: {
                        t: 'i'
                      },
                      code: {
                        t: 'i'
                      }
                    }
                  },
                  portRange: {
                    t: 'o',
                    m: {
                      from: {
                        t: 'i'
                      },
                      to: {
                        t: 'i'
                      }
                    }
                  }
                }
              }
            },
            associationSet: {
              n: 'associations',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  networkAclAssociationId: {
                  },
                  networkAclId: {
                  },
                  subnetId: {
                  }
                }
              }
            },
            tagSet: {
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
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
          networkAclId: {
            r: 1
          },
          ruleNumber: {
            t: 'i',
            r: 1
          },
          protocol: {
            r: 1
          },
          ruleAction: {
            r: 1
          },
          egress: {
            t: 'b',
            r: 1
          },
          cidrBlock: {
            r: 1
          },
          icmpTypeCode: {
            n: 'Icmp',
            t: 'o',
            m: {
              type: {
                t: 'i'
              },
              code: {
                t: 'i'
              }
            }
          },
          portRange: {
            t: 'o',
            m: {
              from: {
                t: 'i'
              },
              to: {
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
          subnetId: {
            r: 1
          },
          description: {
          },
          privateIpAddress: {
          },
          groups: {
            n: 'SecurityGroupId',
            t: 'a',
            m: {
              n: 'SecurityGroupId'
            }
          },
          privateIpAddresses: {
            t: 'a',
            m: {
              n: 'item',
              t: 'o',
              m: {
                privateIpAddress: {
                  r: 1
                },
                primary: {
                  t: 'b'
                }
              }
            }
          },
          secondaryPrivateIpAddressCount: {
            t: 'i'
          }
        }
      },
      o: {
        networkInterface: {
          t: 'o',
          m: {
            networkInterfaceId: {
            },
            subnetId: {
            },
            vpcId: {
            },
            availabilityZone: {
            },
            description: {
            },
            ownerId: {
            },
            requesterId: {
            },
            requesterManaged: {
              t: 'b'
            },
            status: {
            },
            macAddress: {
            },
            privateIpAddress: {
            },
            privateDnsName: {
            },
            sourceDestCheck: {
              t: 'b'
            },
            groupSet: {
              n: 'groups',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  groupName: {
                    n: 'GroupName'
                  },
                  groupId: {
                  }
                }
              }
            },
            attachment: {
              t: 'o',
              m: {
                attachmentId: {
                },
                instanceId: {
                },
                instanceOwnerId: {
                },
                deviceIndex: {
                  t: 'i'
                },
                status: {
                },
                attachTime: {
                  t: 't'
                },
                deleteOnTermination: {
                  t: 'b'
                }
              }
            },
            association: {
              t: 'o',
              m: {
                publicIp: {
                },
                ipOwnerId: {
                },
                allocationId: {
                },
                associationId: {
                }
              }
            },
            tagSet: {
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
                  }
                }
              }
            },
            privateIpAddressesSet: {
              n: 'privateIpAddresses',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  privateIpAddress: {
                  },
                  primary: {
                    t: 'b'
                  },
                  association: {
                    t: 'o',
                    m: {
                      publicIp: {
                      },
                      ipOwnerId: {
                      },
                      allocationId: {
                      },
                      associationId: {
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
          groupName: {
            r: 1
          },
          strategy: {
            r: 1
          }
        }
      }
    },
    createReservedInstancesListing: {
      n: 'CreateReservedInstancesListing',
      i: {
        m: {
          reservedInstancesId: {
            r: 1
          },
          instanceCount: {
            t: 'i',
            r: 1
          },
          priceSchedules: {
            t: 'a',
            m: {
              n: 'item',
              t: 'o',
              m: {
                term: {
                  t: 'i'
                },
                price: {
                  t: 'n'
                },
                currencyCode: {
                }
              }
            },
            r: 1
          },
          clientToken: {
            r: 1
          }
        }
      },
      o: {
        reservedInstancesListingsSet: {
          n: 'reservedInstancesListings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              reservedInstancesListingId: {
              },
              reservedInstancesId: {
              },
              createDate: {
                t: 't'
              },
              updateDate: {
                t: 't'
              },
              status: {
              },
              statusMessage: {
              },
              instanceCounts: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    state: {
                    },
                    instanceCount: {
                      t: 'i'
                    }
                  }
                }
              },
              priceSchedules: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    term: {
                      t: 'i'
                    },
                    price: {
                      t: 'n'
                    },
                    currencyCode: {
                    },
                    active: {
                      t: 'b'
                    }
                  }
                }
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              clientToken: {
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
          routeTableId: {
            r: 1
          },
          destinationCidrBlock: {
            r: 1
          },
          gatewayId: {
          },
          instanceId: {
          },
          networkInterfaceId: {
          }
        }
      }
    },
    createRouteTable: {
      n: 'CreateRouteTable',
      i: {
        m: {
          vpcId: {
            r: 1
          }
        }
      },
      o: {
        routeTable: {
          t: 'o',
          m: {
            routeTableId: {
            },
            vpcId: {
            },
            routeSet: {
              n: 'routes',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  destinationCidrBlock: {
                  },
                  gatewayId: {
                  },
                  instanceId: {
                  },
                  instanceOwnerId: {
                  },
                  networkInterfaceId: {
                  },
                  state: {
                  }
                }
              }
            },
            associationSet: {
              n: 'associations',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  routeTableAssociationId: {
                  },
                  routeTableId: {
                  },
                  subnetId: {
                  },
                  main: {
                    t: 'b'
                  }
                }
              }
            },
            tagSet: {
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
                  }
                }
              }
            },
            propagatingVgwSet: {
              n: 'propagatingVgws',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  gatewayId: {
                  }
                }
              }
            },
            propagatedRouteSet: {
              n: 'propagatedRoutes',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  destinationCidrBlock: {
                  },
                  gatewayId: {
                  },
                  status: {
                  },
                  sourceId: {
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
        snapshot: {
          n: 'Snapshot',
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
            },
            tagSet: {
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
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
        m: {
          bucket: {
            r: 1
          },
          prefix: {
          }
        }
      },
      o: {
        spotDatafeedSubscription: {
          t: 'o',
          m: {
            ownerId: {
            },
            bucket: {
            },
            prefix: {
            },
            state: {
            },
            fault: {
              t: 'o',
              m: {
                code: {
                },
                message: {
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
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
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
          resources: {
            n: 'ResourceId',
            t: 'a',
            r: 1
          },
          tags: {
            n: 'Tag',
            t: 'a',
            m: {
              n: 'item',
              t: 'o',
              m: {
                key: {
                },
                value: {
                }
              }
            },
            r: 1
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
        volume: {
          n: 'Volume',
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
                    t: 'b'
                  }
                }
              }
            },
            tagSet: {
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
                  }
                }
              }
            },
            volumeType: {
            },
            iops: {
              t: 'i'
            }
          }
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
          instanceTenancy: {
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
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
                  }
                }
              }
            },
            instanceTenancy: {
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
          options: {
            t: 'o',
            m: {
              staticRoutesOnly: {
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
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
                  }
                }
              }
            },
            vgwTelemetry: {
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  outsideIpAddress: {
                  },
                  status: {
                  },
                  lastStatusChange: {
                    t: 't'
                  },
                  statusMessage: {
                  },
                  acceptedRouteCount: {
                    t: 'i'
                  }
                }
              }
            },
            options: {
              t: 'o',
              m: {
                staticRoutesOnly: {
                  t: 'b'
                }
              }
            },
            routes: {
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  destinationCidrBlock: {
                  },
                  source: {
                  },
                  state: {
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
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
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
          licenseId: {
            r: 1
          },
          capacity: {
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
          internetGatewayId: {
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
          networkAclId: {
            r: 1
          }
        }
      }
    },
    deleteNetworkAclEntry: {
      n: 'DeleteNetworkAclEntry',
      i: {
        m: {
          networkAclId: {
            r: 1
          },
          ruleNumber: {
            t: 'i',
            r: 1
          },
          egress: {
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
          networkInterfaceId: {
            r: 1
          }
        }
      }
    },
    deletePlacementGroup: {
      n: 'DeletePlacementGroup',
      i: {
        m: {
          groupName: {
            r: 1
          }
        }
      }
    },
    deleteRoute: {
      n: 'DeleteRoute',
      i: {
        m: {
          routeTableId: {
            r: 1
          },
          destinationCidrBlock: {
            r: 1
          }
        }
      }
    },
    deleteRouteTable: {
      n: 'DeleteRouteTable',
      i: {
        m: {
          routeTableId: {
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
          resources: {
            n: 'resourceId',
            t: 'a',
            r: 1
          },
          tags: {
            n: 'tag',
            t: 'a',
            m: {
              n: 'item',
              t: 'o',
              m: {
                key: {
                },
                value: {
                }
              }
            }
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
            n: 'PublicIp',
            t: 'a',
            m: {
              n: 'PublicIp'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          },
          allocationIds: {
            n: 'AllocationId',
            t: 'a',
            m: {
              n: 'AllocationId'
            }
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
              },
              associationId: {
              },
              domain: {
              },
              networkInterfaceId: {
              },
              networkInterfaceOwnerId: {
              },
              privateIpAddress: {
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
            n: 'ZoneName',
            t: 'a',
            m: {
              n: 'ZoneName'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
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
              },
              zoneState: {
                n: 'State'
              },
              regionName: {
              },
              messageSet: {
                n: 'messages',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    message: {
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
            n: 'BundleId',
            t: 'a',
            m: {
              n: 'BundleId'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
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
                    n: 'S3',
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
          filters: {
            n: 'filter',
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
                    n: 'item'
                  }
                }
              }
            }
          },
          conversionTaskIds: {
            n: 'conversionTaskId',
            t: 'a',
            m: {
              n: 'item'
            }
          }
        }
      },
      o: {
        conversionTasks: {
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              conversionTaskId: {
              },
              expirationTime: {
              },
              importInstance: {
                t: 'o',
                m: {
                  volumes: {
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        bytesConverted: {
                          t: 'i'
                        },
                        availabilityZone: {
                        },
                        image: {
                          t: 'o',
                          m: {
                            format: {
                            },
                            size: {
                              t: 'i'
                            },
                            importManifestUrl: {
                            },
                            checksum: {
                            }
                          }
                        },
                        volume: {
                          t: 'o',
                          m: {
                            size: {
                              t: 'i'
                            },
                            id: {
                            }
                          }
                        },
                        status: {
                        },
                        statusMessage: {
                        },
                        description: {
                        }
                      }
                    }
                  },
                  instanceId: {
                  },
                  platform: {
                  },
                  description: {
                  }
                }
              },
              importVolume: {
                t: 'o',
                m: {
                  bytesConverted: {
                    t: 'i'
                  },
                  availabilityZone: {
                  },
                  description: {
                  },
                  image: {
                    t: 'o',
                    m: {
                      format: {
                      },
                      size: {
                        t: 'i'
                      },
                      importManifestUrl: {
                      },
                      checksum: {
                      }
                    }
                  },
                  volume: {
                    t: 'o',
                    m: {
                      size: {
                        t: 'i'
                      },
                      id: {
                      }
                    }
                  }
                }
              },
              state: {
              },
              statusMessage: {
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
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
                    n: 'item'
                  }
                }
              }
            }
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
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
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
            n: 'DhcpOptionsId',
            t: 'a',
            m: {
              n: 'DhcpOptionsId'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
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
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
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
          exportTaskIds: {
            n: 'exportTaskId',
            t: 'a',
            m: {
              n: 'ExportTaskId'
            }
          }
        }
      },
      o: {
        exportTaskSet: {
          n: 'exportTasks',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              exportTaskId: {
              },
              description: {
              },
              state: {
              },
              statusMessage: {
              },
              instanceExport: {
                n: 'instanceExportDetails',
                t: 'o',
                m: {
                  instanceId: {
                  },
                  targetEnvironment: {
                  }
                }
              },
              exportToS3: {
                n: 'exportToS3Task',
                t: 'o',
                m: {
                  diskImageFormat: {
                  },
                  containerFormat: {
                  },
                  s3Bucket: {
                  },
                  s3Key: {
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
        imageAttribute: {
          n: 'ImageAttribute',
          t: 'o',
          m: {
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
              n: 'kernelId',
              t: 'o',
              m: {
                value: {
                }
              }
            },
            ramdisk: {
              n: 'ramdiskId',
              t: 'o',
              m: {
                value: {
                }
              }
            },
            description: {
              t: 'o',
              m: {
                value: {
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
                    t: 'o',
                    m: {
                      snapshotId: {
                      },
                      volumeSize: {
                        t: 'i'
                      },
                      deleteOnTermination: {
                        t: 'b'
                      },
                      volumeType: {
                      },
                      iops: {
                        t: 'i'
                      }
                    }
                  },
                  noDevice: {
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
        m: {
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
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
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
                t: 'o',
                m: {
                  code: {
                  },
                  message: {
                  }
                }
              },
              imageOwnerAlias: {
              },
              name: {
              },
              description: {
              },
              rootDeviceType: {
              },
              rootDeviceName: {
              },
              blockDeviceMapping: {
                n: 'blockDeviceMappings',
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
                      t: 'o',
                      m: {
                        snapshotId: {
                        },
                        volumeSize: {
                          t: 'i'
                        },
                        deleteOnTermination: {
                          t: 'b'
                        },
                        volumeType: {
                        },
                        iops: {
                          t: 'i'
                        }
                      }
                    },
                    noDevice: {
                    }
                  }
                }
              },
              virtualizationType: {
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              hypervisor: {
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
          instanceId: {
            r: 1
          },
          attribute: {
            r: 1
          }
        }
      },
      o: {
        InstanceAttribute: {
          t: 'o',
          m: {
            instanceId: {
            },
            instanceType: {
              t: 'o',
              m: {
                value: {
                }
              }
            },
            kernel: {
              n: 'kernelId',
              t: 'o',
              m: {
                value: {
                }
              }
            },
            ramdisk: {
              n: 'ramdiskId',
              t: 'o',
              m: {
                value: {
                }
              }
            },
            userData: {
              t: 'o',
              m: {
                value: {
                }
              }
            },
            disableApiTermination: {
              t: 'o',
              m: {
                value: {
                  t: 'b'
                }
              }
            },
            instanceInitiatedShutdownBehavior: {
              t: 'o',
              m: {
                value: {
                }
              }
            },
            rootDeviceName: {
              t: 'o',
              m: {
                value: {
                }
              }
            },
            blockDeviceMapping: {
              n: 'blockDeviceMappings',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  deviceName: {
                  },
                  ebs: {
                    t: 'o',
                    m: {
                      volumeId: {
                      },
                      status: {
                      },
                      attachTime: {
                        t: 't'
                      },
                      deleteOnTermination: {
                        t: 'b'
                      }
                    }
                  }
                }
              }
            },
            productCodes: {
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
              t: 'o',
              m: {
                value: {
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
        m: {
          InstanceIds: {
            n: 'InstanceId',
            t: 'a',
            m: {
              n: 'InstanceId'
            }
          },
          filters: {
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
                    n: 'item'
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
          includeAllInstances: {
            t: 'b'
          }
        }
      },
      o: {
        instanceStatusSet: {
          n: 'instanceStatuses',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceId: {
              },
              availabilityZone: {
              },
              eventsSet: {
                n: 'events',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    code: {
                    },
                    description: {
                    },
                    notBefore: {
                      t: 't'
                    },
                    notAfter: {
                      t: 't'
                    }
                  }
                }
              },
              instanceState: {
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
                t: 'o',
                m: {
                  status: {
                  },
                  details: {
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        name: {
                        },
                        status: {
                        },
                        impairedSince: {
                          t: 't'
                        }
                      }
                    }
                  }
                }
              },
              instanceStatus: {
                t: 'o',
                m: {
                  status: {
                  },
                  details: {
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        name: {
                        },
                        status: {
                        },
                        impairedSince: {
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
        }
      }
    },
    describeInstances: {
      n: 'DescribeInstances',
      i: {
        m: {
          InstanceIds: {
            n: 'InstanceId',
            t: 'a',
            m: {
              n: 'InstanceId'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
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
                        },
                        tenancy: {
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
                      t: 'o',
                      m: {
                        code: {
                        },
                        message: {
                        }
                      }
                    },
                    architecture: {
                    },
                    rootDeviceType: {
                    },
                    rootDeviceName: {
                    },
                    blockDeviceMapping: {
                      n: 'blockDeviceMappings',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          deviceName: {
                          },
                          ebs: {
                            t: 'o',
                            m: {
                              volumeId: {
                              },
                              status: {
                              },
                              attachTime: {
                                t: 't'
                              },
                              deleteOnTermination: {
                                t: 'b'
                              }
                            }
                          }
                        }
                      }
                    },
                    virtualizationType: {
                    },
                    instanceLifecycle: {
                    },
                    spotInstanceRequestId: {
                    },
                    license: {
                      t: 'o',
                      m: {
                        pool: {
                        }
                      }
                    },
                    clientToken: {
                    },
                    tagSet: {
                      n: 'tags',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          key: {
                          },
                          value: {
                          }
                        }
                      }
                    },
                    groupSet: {
                      n: 'securityGroups',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          groupName: {
                            n: 'GroupName'
                          },
                          groupId: {
                          }
                        }
                      }
                    },
                    sourceDestCheck: {
                      t: 'b'
                    },
                    hypervisor: {
                    },
                    networkInterfaceSet: {
                      n: 'networkInterfaces',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          networkInterfaceId: {
                          },
                          subnetId: {
                          },
                          vpcId: {
                          },
                          description: {
                          },
                          ownerId: {
                          },
                          status: {
                          },
                          privateIpAddress: {
                          },
                          privateDnsName: {
                          },
                          sourceDestCheck: {
                            t: 'b'
                          },
                          groupSet: {
                            n: 'groups',
                            t: 'a',
                            m: {
                              n: 'item',
                              t: 'o',
                              m: {
                                groupName: {
                                  n: 'GroupName'
                                },
                                groupId: {
                                }
                              }
                            }
                          },
                          attachment: {
                            t: 'o',
                            m: {
                              attachmentId: {
                              },
                              deviceIndex: {
                                t: 'i'
                              },
                              status: {
                              },
                              attachTime: {
                                t: 't'
                              },
                              deleteOnTermination: {
                                t: 'b'
                              }
                            }
                          },
                          association: {
                            t: 'o',
                            m: {
                              publicIp: {
                              },
                              ipOwnerId: {
                              }
                            }
                          }
                        }
                      }
                    },
                    iamInstanceProfile: {
                      t: 'o',
                      m: {
                        arn: {
                        },
                        id: {
                        }
                      }
                    },
                    ebsOptimized: {
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
          internetGatewayIds: {
            n: 'internetGatewayId',
            t: 'a',
            m: {
              n: 'item'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          }
        }
      },
      o: {
        internetGatewaySet: {
          n: 'internetGateways',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              internetGatewayId: {
              },
              attachmentSet: {
                n: 'attachments',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    vpcId: {
                    },
                    state: {
                    }
                  }
                }
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
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
            n: 'KeyName',
            t: 'a',
            m: {
              n: 'KeyName'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
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
          licenseIds: {
            n: 'licenseId',
            t: 'a'
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          }
        }
      },
      o: {
        licenseSet: {
          n: 'licenses',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              licenseId: {
              },
              type: {
              },
              pool: {
              },
              capacitySet: {
                n: 'capacities',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    capacity: {
                      t: 'i'
                    },
                    instanceCapacity: {
                      t: 'i'
                    },
                    state: {
                    },
                    earliestAllowedDeactivationTime: {
                      t: 't'
                    }
                  }
                }
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
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
          networkAclIds: {
            n: 'NetworkAclId',
            t: 'a',
            m: {
              n: 'item'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          }
        }
      },
      o: {
        networkAclSet: {
          n: 'networkAcls',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              networkAclId: {
              },
              vpcId: {
              },
              'default': {
                n: 'isDefault',
                t: 'b'
              },
              entrySet: {
                n: 'entries',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    ruleNumber: {
                      t: 'i'
                    },
                    protocol: {
                    },
                    ruleAction: {
                    },
                    egress: {
                      t: 'b'
                    },
                    cidrBlock: {
                    },
                    icmpTypeCode: {
                      t: 'o',
                      m: {
                        type: {
                          t: 'i'
                        },
                        code: {
                          t: 'i'
                        }
                      }
                    },
                    portRange: {
                      t: 'o',
                      m: {
                        from: {
                          t: 'i'
                        },
                        to: {
                          t: 'i'
                        }
                      }
                    }
                  }
                }
              },
              associationSet: {
                n: 'associations',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    networkAclAssociationId: {
                    },
                    networkAclId: {
                    },
                    subnetId: {
                    }
                  }
                }
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
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
          networkInterfaceId: {
            r: 1
          },
          description: {
          },
          sourceDestCheck: {
          },
          groups: {
            n: 'groupSet'
          },
          attachment: {
          }
        }
      },
      o: {
        networkInterfaceId: {
        },
        description: {
          t: 'o',
          m: {
            value: {
            }
          }
        },
        sourceDestCheck: {
          t: 'o',
          m: {
            value: {
              t: 'b'
            }
          }
        },
        groupSet: {
          n: 'groups',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              groupName: {
                n: 'GroupName'
              },
              groupId: {
              }
            }
          }
        },
        attachment: {
          t: 'o',
          m: {
            attachmentId: {
            },
            instanceId: {
            },
            instanceOwnerId: {
            },
            deviceIndex: {
              t: 'i'
            },
            status: {
            },
            attachTime: {
              t: 't'
            },
            deleteOnTermination: {
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
          networkInterfaceIds: {
            n: 'NetworkInterfaceId',
            t: 'a',
            m: {
              n: 'item'
            }
          },
          filters: {
            n: 'filter',
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
                    n: 'item'
                  }
                }
              }
            }
          }
        }
      },
      o: {
        networkInterfaceSet: {
          n: 'networkInterfaces',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              networkInterfaceId: {
              },
              subnetId: {
              },
              vpcId: {
              },
              availabilityZone: {
              },
              description: {
              },
              ownerId: {
              },
              requesterId: {
              },
              requesterManaged: {
                t: 'b'
              },
              status: {
              },
              macAddress: {
              },
              privateIpAddress: {
              },
              privateDnsName: {
              },
              sourceDestCheck: {
                t: 'b'
              },
              groupSet: {
                n: 'groups',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    groupName: {
                      n: 'GroupName'
                    },
                    groupId: {
                    }
                  }
                }
              },
              attachment: {
                t: 'o',
                m: {
                  attachmentId: {
                  },
                  instanceId: {
                  },
                  instanceOwnerId: {
                  },
                  deviceIndex: {
                    t: 'i'
                  },
                  status: {
                  },
                  attachTime: {
                    t: 't'
                  },
                  deleteOnTermination: {
                    t: 'b'
                  }
                }
              },
              association: {
                t: 'o',
                m: {
                  publicIp: {
                  },
                  ipOwnerId: {
                  },
                  allocationId: {
                  },
                  associationId: {
                  }
                }
              },
              tagSet: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              privateIpAddressesSet: {
                n: 'privateIpAddresses',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    privateIpAddress: {
                    },
                    primary: {
                      t: 'b'
                    },
                    association: {
                      t: 'o',
                      m: {
                        publicIp: {
                        },
                        ipOwnerId: {
                        },
                        allocationId: {
                        },
                        associationId: {
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
          groupNames: {
            n: 'groupName',
            t: 'a'
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          }
        }
      },
      o: {
        placementGroupSet: {
          n: 'placementGroups',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              groupName: {
              },
              strategy: {
              },
              state: {
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
            n: 'RegionName',
            t: 'a',
            m: {
              n: 'RegionName'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
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
            n: 'ReservedInstancesId',
            t: 'a',
            m: {
              n: 'ReservedInstancesId'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          },
          offeringType: {
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
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              instanceTenancy: {
              },
              currencyCode: {
              },
              offeringType: {
              },
              recurringCharges: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    frequency: {
                    },
                    amount: {
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
          reservedInstancesId: {
          },
          reservedInstancesListingId: {
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          }
        }
      },
      o: {
        reservedInstancesListingsSet: {
          n: 'reservedInstancesListings',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              reservedInstancesListingId: {
              },
              reservedInstancesId: {
              },
              createDate: {
                t: 't'
              },
              updateDate: {
                t: 't'
              },
              status: {
              },
              statusMessage: {
              },
              instanceCounts: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    state: {
                    },
                    instanceCount: {
                      t: 'i'
                    }
                  }
                }
              },
              priceSchedules: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    term: {
                      t: 'i'
                    },
                    price: {
                      t: 'n'
                    },
                    currencyCode: {
                    },
                    active: {
                      t: 'b'
                    }
                  }
                }
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              clientToken: {
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
            n: 'ReservedInstancesOfferingId',
            t: 'a'
          },
          InstanceType: {
          },
          AvailabilityZone: {
          },
          ProductDescription: {
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          },
          instanceTenancy: {
          },
          offeringType: {
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
              },
              currencyCode: {
              },
              offeringType: {
              },
              recurringCharges: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    frequency: {
                    },
                    amount: {
                      t: 'n'
                    }
                  }
                }
              },
              marketplace: {
                t: 'b'
              },
              pricingDetailsSet: {
                n: 'pricingDetails',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    price: {
                      t: 'n'
                    },
                    count: {
                      t: 'i'
                    }
                  }
                }
              }
            }
          }
        },
        nextToken: {
        }
      }
    },
    describeRouteTables: {
      n: 'DescribeRouteTables',
      i: {
        m: {
          routeTableIds: {
            n: 'RouteTableId',
            t: 'a',
            m: {
              n: 'item'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          }
        }
      },
      o: {
        routeTableSet: {
          n: 'routeTables',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              routeTableId: {
              },
              vpcId: {
              },
              routeSet: {
                n: 'routes',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    destinationCidrBlock: {
                    },
                    gatewayId: {
                    },
                    instanceId: {
                    },
                    instanceOwnerId: {
                    },
                    networkInterfaceId: {
                    },
                    state: {
                    }
                  }
                }
              },
              associationSet: {
                n: 'associations',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    routeTableAssociationId: {
                    },
                    routeTableId: {
                    },
                    subnetId: {
                    },
                    main: {
                      t: 'b'
                    }
                  }
                }
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              propagatingVgwSet: {
                n: 'propagatingVgws',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    gatewayId: {
                    }
                  }
                }
              },
              propagatedRouteSet: {
                n: 'propagatedRoutes',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    destinationCidrBlock: {
                    },
                    gatewayId: {
                    },
                    status: {
                    },
                    sourceId: {
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
              n: 'groupId'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
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
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
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
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
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
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
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
          t: 'o',
          m: {
            ownerId: {
            },
            bucket: {
            },
            prefix: {
            },
            state: {
            },
            fault: {
              t: 'o',
              m: {
                code: {
                },
                message: {
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
          spotInstanceRequestIds: {
            n: 'SpotInstanceRequestId',
            t: 'a',
            m: {
              n: 'SpotInstanceRequestId'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          }
        }
      },
      o: {
        spotInstanceRequestSet: {
          n: 'spotInstanceRequests',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              spotInstanceRequestId: {
              },
              spotPrice: {
              },
              type: {
              },
              state: {
              },
              fault: {
                t: 'o',
                m: {
                  code: {
                  },
                  message: {
                  }
                }
              },
              validFrom: {
                t: 't'
              },
              validUntil: {
                t: 't'
              },
              launchGroup: {
              },
              availabilityZoneGroup: {
              },
              launchSpecification: {
                t: 'o',
                m: {
                  imageId: {
                  },
                  keyName: {
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
                        }
                      }
                    }
                  },
                  userData: {
                  },
                  addressingType: {
                  },
                  instanceType: {
                  },
                  placement: {
                    t: 'o',
                    m: {
                      availabilityZone: {
                      },
                      groupName: {
                      }
                    }
                  },
                  kernelId: {
                  },
                  ramdiskId: {
                  },
                  blockDeviceMapping: {
                    n: 'blockDeviceMappings',
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
                          t: 'o',
                          m: {
                            snapshotId: {
                            },
                            volumeSize: {
                              t: 'i'
                            },
                            deleteOnTermination: {
                              t: 'b'
                            },
                            volumeType: {
                            },
                            iops: {
                              t: 'i'
                            }
                          }
                        },
                        noDevice: {
                        }
                      }
                    }
                  },
                  monitoringEnabled: {
                    t: 'b'
                  },
                  subnetId: {
                  },
                  networkInterfaceSet: {
                    n: 'networkInterfaces',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        networkInterfaceId: {
                        },
                        deviceIndex: {
                          t: 'i'
                        },
                        subnetId: {
                        },
                        description: {
                        },
                        privateIpAddress: {
                        },
                        SecurityGroupId: {
                          n: 'groups',
                          t: 'a',
                          m: {
                            n: 'SecurityGroupId'
                          }
                        },
                        deleteOnTermination: {
                          t: 'b'
                        },
                        privateIpAddressesSet: {
                          n: 'privateIpAddresses',
                          t: 'a',
                          m: {
                            n: 'item',
                            t: 'o',
                            m: {
                              privateIpAddress: {
                              },
                              primary: {
                                t: 'b'
                              }
                            }
                          }
                        },
                        secondaryPrivateIpAddressCount: {
                          t: 'i'
                        }
                      }
                    }
                  },
                  iamInstanceProfile: {
                    t: 'o',
                    m: {
                      arn: {
                      },
                      name: {
                      }
                    }
                  },
                  ebsOptimized: {
                    t: 'b'
                  }
                }
              },
              instanceId: {
              },
              createTime: {
                t: 't'
              },
              productDescription: {
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              launchedAvailabilityZone: {
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
          startTime: {
            t: 't'
          },
          endTime: {
            t: 't'
          },
          instanceTypes: {
            n: 'InstanceType',
            t: 'a'
          },
          productDescriptions: {
            n: 'ProductDescription',
            t: 'a'
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          },
          availabilityZone: {
          },
          maxResults: {
            t: 'i'
          },
          nextToken: {
          }
        }
      },
      o: {
        spotPriceHistorySet: {
          n: 'spotPriceHistory',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              instanceType: {
              },
              productDescription: {
              },
              spotPrice: {
              },
              timestamp: {
                t: 't'
              },
              availabilityZone: {
              }
            }
          }
        },
        nextToken: {
        }
      }
    },
    describeSubnets: {
      n: 'DescribeSubnets',
      i: {
        m: {
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
                    n: 'item'
                  }
                }
              }
            }
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
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
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
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
          }
        }
      },
      o: {
        tagSet: {
          n: 'tags',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              resourceId: {
              },
              resourceType: {
              },
              key: {
              },
              value: {
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
        },
        autoEnableIO: {
          t: 'o',
          m: {
            value: {
              t: 'b'
            }
          }
        },
        productCodes: {
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
            n: 'VolumeId',
            t: 'a',
            m: {
              n: 'VolumeId'
            }
          },
          filters: {
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
                    n: 'item'
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
      o: {
        volumeStatusSet: {
          n: 'volumeStatuses',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              volumeId: {
              },
              availabilityZone: {
              },
              volumeStatus: {
                t: 'o',
                m: {
                  status: {
                  },
                  details: {
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        name: {
                        },
                        status: {
                        }
                      }
                    }
                  }
                }
              },
              eventsSet: {
                n: 'events',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    eventType: {
                    },
                    description: {
                    },
                    notBefore: {
                      t: 't'
                    },
                    notAfter: {
                      t: 't'
                    },
                    eventId: {
                    }
                  }
                }
              },
              actionsSet: {
                n: 'actions',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    code: {
                    },
                    description: {
                    },
                    eventType: {
                    },
                    eventId: {
                    }
                  }
                }
              }
            }
          }
        },
        nextToken: {
        }
      }
    },
    describeVolumes: {
      n: 'DescribeVolumes',
      i: {
        m: {
          VolumeIds: {
            n: 'VolumeId',
            t: 'a',
            m: {
              n: 'VolumeId'
            }
          },
          filters: {
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
                    n: 'item'
                  }
                }
              }
            }
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
                      t: 'b'
                    }
                  }
                }
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              volumeType: {
              },
              iops: {
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
                    n: 'item'
                  }
                }
              }
            }
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
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              instanceTenancy: {
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
                    n: 'item'
                  }
                }
              }
            }
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
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              vgwTelemetry: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    outsideIpAddress: {
                    },
                    status: {
                    },
                    lastStatusChange: {
                      t: 't'
                    },
                    statusMessage: {
                    },
                    acceptedRouteCount: {
                      t: 'i'
                    }
                  }
                }
              },
              options: {
                t: 'o',
                m: {
                  staticRoutesOnly: {
                    t: 'b'
                  }
                }
              },
              routes: {
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    destinationCidrBlock: {
                    },
                    source: {
                    },
                    state: {
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
                    n: 'item'
                  }
                }
              }
            }
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
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
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
          internetGatewayId: {
            r: 1
          },
          vpcId: {
            r: 1
          }
        }
      }
    },
    detachNetworkInterface: {
      n: 'DetachNetworkInterface',
      i: {
        m: {
          attachmentId: {
            r: 1
          },
          force: {
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
        attachment: {
          n: 'Attachment',
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
              t: 'b'
            }
          }
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
            r: 1
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
          associationId: {
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
          volumeId: {
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
          description: {
          },
          launchSpecification: {
            t: 'o',
            m: {
              architecture: {
              },
              securityGroups: {
                n: 'SecurityGroup',
                t: 'a',
                m: {
                  n: 'SecurityGroup'
                }
              },
              additionalInfo: {
              },
              userData: {
              },
              instanceType: {
              },
              placement: {
                t: 'o',
                m: {
                  AvailabilityZone: {
                    n: 'availabilityZone'
                  },
                  groupName: {
                  },
                  tenancy: {
                  }
                }
              },
              blockDeviceMappings: {
                n: 'BlockDeviceMapping',
                t: 'a',
                m: {
                  n: 'BlockDeviceMapping',
                  t: 'o',
                  m: {
                    VirtualName: {
                      n: 'virtualName'
                    },
                    DeviceName: {
                      n: 'deviceName'
                    },
                    ebs: {
                      t: 'o',
                      m: {
                        snapshotId: {
                        },
                        volumeSize: {
                          t: 'i'
                        },
                        deleteOnTermination: {
                          t: 'b'
                        },
                        volumeType: {
                        },
                        iops: {
                          t: 'i'
                        }
                      }
                    },
                    noDevice: {
                    }
                  }
                }
              },
              monitoring: {
                t: 'b'
              },
              subnetId: {
              },
              disableApiTermination: {
                t: 'b'
              },
              instanceInitiatedShutdownBehavior: {
              },
              privateIpAddress: {
              }
            }
          },
          diskImages: {
            n: 'diskImage',
            t: 'a',
            m: {
              t: 'o',
              m: {
                Image: {
                  t: 'o',
                  m: {
                    format: {
                      r: 1
                    },
                    bytes: {
                      t: 'i',
                      r: 1
                    },
                    importManifestUrl: {
                      r: 1
                    }
                  }
                },
                Description: {
                },
                Volume: {
                  t: 'o',
                  m: {
                    size: {
                      t: 'i',
                      r: 1
                    }
                  }
                }
              }
            }
          },
          platform: {
            r: 1
          }
        }
      },
      o: {
        conversionTask: {
          t: 'o',
          m: {
            conversionTaskId: {
            },
            expirationTime: {
            },
            importInstance: {
              t: 'o',
              m: {
                volumes: {
                  t: 'a',
                  m: {
                    n: 'item',
                    t: 'o',
                    m: {
                      bytesConverted: {
                        t: 'i'
                      },
                      availabilityZone: {
                      },
                      image: {
                        t: 'o',
                        m: {
                          format: {
                          },
                          size: {
                            t: 'i'
                          },
                          importManifestUrl: {
                          },
                          checksum: {
                          }
                        }
                      },
                      volume: {
                        t: 'o',
                        m: {
                          size: {
                            t: 'i'
                          },
                          id: {
                          }
                        }
                      },
                      status: {
                      },
                      statusMessage: {
                      },
                      description: {
                      }
                    }
                  }
                },
                instanceId: {
                },
                platform: {
                },
                description: {
                }
              }
            },
            importVolume: {
              t: 'o',
              m: {
                bytesConverted: {
                  t: 'i'
                },
                availabilityZone: {
                },
                description: {
                },
                image: {
                  t: 'o',
                  m: {
                    format: {
                    },
                    size: {
                      t: 'i'
                    },
                    importManifestUrl: {
                    },
                    checksum: {
                    }
                  }
                },
                volume: {
                  t: 'o',
                  m: {
                    size: {
                      t: 'i'
                    },
                    id: {
                    }
                  }
                }
              }
            },
            state: {
            },
            statusMessage: {
            },
            tagSet: {
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
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
          keyName: {
            r: 1
          },
          publicKeyMaterial: {
            r: 1
          }
        }
      },
      o: {
        keyName: {
        },
        keyFingerprint: {
        }
      }
    },
    importVolume: {
      n: 'ImportVolume',
      i: {
        m: {
          availabilityZone: {
          },
          image: {
            t: 'o',
            m: {
              format: {
                r: 1
              },
              bytes: {
                t: 'i',
                r: 1
              },
              importManifestUrl: {
                r: 1
              }
            }
          },
          description: {
          },
          volume: {
            t: 'o',
            m: {
              size: {
                t: 'i',
                r: 1
              }
            }
          }
        }
      },
      o: {
        conversionTask: {
          t: 'o',
          m: {
            conversionTaskId: {
            },
            expirationTime: {
            },
            importInstance: {
              t: 'o',
              m: {
                volumes: {
                  t: 'a',
                  m: {
                    n: 'item',
                    t: 'o',
                    m: {
                      bytesConverted: {
                        t: 'i'
                      },
                      availabilityZone: {
                      },
                      image: {
                        t: 'o',
                        m: {
                          format: {
                          },
                          size: {
                            t: 'i'
                          },
                          importManifestUrl: {
                          },
                          checksum: {
                          }
                        }
                      },
                      volume: {
                        t: 'o',
                        m: {
                          size: {
                            t: 'i'
                          },
                          id: {
                          }
                        }
                      },
                      status: {
                      },
                      statusMessage: {
                      },
                      description: {
                      }
                    }
                  }
                },
                instanceId: {
                },
                platform: {
                },
                description: {
                }
              }
            },
            importVolume: {
              t: 'o',
              m: {
                bytesConverted: {
                  t: 'i'
                },
                availabilityZone: {
                },
                description: {
                },
                image: {
                  t: 'o',
                  m: {
                    format: {
                    },
                    size: {
                      t: 'i'
                    },
                    importManifestUrl: {
                    },
                    checksum: {
                    }
                  }
                },
                volume: {
                  t: 'o',
                  m: {
                    size: {
                      t: 'i'
                    },
                    id: {
                    }
                  }
                }
              }
            },
            state: {
            },
            statusMessage: {
            },
            tagSet: {
              n: 'tags',
              t: 'a',
              m: {
                n: 'item',
                t: 'o',
                m: {
                  key: {
                  },
                  value: {
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
              Remove: {
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
              }
            }
          },
          Description: {
            t: 'o',
            m: {
              value: {
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
          instanceId: {
            r: 1
          },
          attribute: {
          },
          value: {
          },
          blockDeviceMappings: {
            n: 'blockDeviceMapping',
            t: 'a',
            m: {
              n: 'item',
              t: 'o',
              m: {
                deviceName: {
                },
                ebs: {
                  t: 'o',
                  m: {
                    volumeId: {
                    },
                    deleteOnTermination: {
                      t: 'b'
                    }
                  }
                },
                virtualName: {
                },
                noDevice: {
                }
              }
            }
          },
          SourceDestCheck: {
            t: 'o',
            m: {
              value: {
                t: 'b'
              }
            }
          },
          disableApiTermination: {
            t: 'o',
            m: {
              value: {
                t: 'b'
              }
            }
          },
          instanceType: {
            t: 'o',
            m: {
              value: {
              }
            }
          },
          kernel: {
            t: 'o',
            m: {
              value: {
              }
            }
          },
          ramdisk: {
            t: 'o',
            m: {
              value: {
              }
            }
          },
          userData: {
            t: 'o',
            m: {
              value: {
              }
            }
          },
          instanceInitiatedShutdownBehavior: {
            t: 'o',
            m: {
              value: {
              }
            }
          },
          groups: {
            n: 'GroupId',
            t: 'a',
            m: {
              n: 'groupId'
            }
          },
          ebsOptimized: {
            t: 'o',
            m: {
              value: {
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
          networkInterfaceId: {
            r: 1
          },
          description: {
            t: 'o',
            m: {
              value: {
              }
            }
          },
          sourceDestCheck: {
            t: 'o',
            m: {
              value: {
                t: 'b'
              }
            }
          },
          groups: {
            n: 'SecurityGroupId',
            t: 'a',
            m: {
              n: 'SecurityGroupId'
            }
          },
          attachment: {
            t: 'o',
            m: {
              attachmentId: {
              },
              deleteOnTermination: {
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
              Remove: {
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
            n: 'InstanceId',
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1
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
          limitPrice: {
            t: 'o',
            m: {
              amount: {
                t: 'n'
              },
              currencyCode: {
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
            n: 'InstanceId',
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1
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
          name: {
          },
          description: {
          },
          architecture: {
          },
          kernelId: {
          },
          ramdiskId: {
          },
          rootDeviceName: {
          },
          blockDeviceMappings: {
            n: 'BlockDeviceMapping',
            t: 'a',
            m: {
              n: 'BlockDeviceMapping',
              t: 'o',
              m: {
                VirtualName: {
                  n: 'virtualName'
                },
                DeviceName: {
                  n: 'deviceName'
                },
                ebs: {
                  t: 'o',
                  m: {
                    snapshotId: {
                    },
                    volumeSize: {
                      t: 'i'
                    },
                    deleteOnTermination: {
                      t: 'b'
                    },
                    volumeType: {
                    },
                    iops: {
                      t: 'i'
                    }
                  }
                },
                noDevice: {
                }
              }
            }
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
          associationId: {
            r: 1
          },
          networkAclId: {
            r: 1
          }
        }
      },
      o: {
        newAssociationId: {
        }
      }
    },
    replaceNetworkAclEntry: {
      n: 'ReplaceNetworkAclEntry',
      i: {
        m: {
          networkAclId: {
            r: 1
          },
          ruleNumber: {
            t: 'i',
            r: 1
          },
          protocol: {
            r: 1
          },
          ruleAction: {
            r: 1
          },
          egress: {
            t: 'b',
            r: 1
          },
          cidrBlock: {
            r: 1
          },
          icmpTypeCode: {
            n: 'Icmp',
            t: 'o',
            m: {
              type: {
                t: 'i'
              },
              code: {
                t: 'i'
              }
            }
          },
          portRange: {
            t: 'o',
            m: {
              from: {
                t: 'i'
              },
              to: {
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
          routeTableId: {
            r: 1
          },
          destinationCidrBlock: {
            r: 1
          },
          gatewayId: {
          },
          instanceId: {
          },
          networkInterfaceId: {
          }
        }
      }
    },
    replaceRouteTableAssociation: {
      n: 'ReplaceRouteTableAssociation',
      i: {
        m: {
          associationId: {
            r: 1
          },
          routeTableId: {
            r: 1
          }
        }
      },
      o: {
        newAssociationId: {
        }
      }
    },
    reportInstanceStatus: {
      n: 'ReportInstanceStatus',
      i: {
        m: {
          instances: {
            n: 'instanceId',
            t: 'a',
            m: {
              n: 'InstanceId'
            }
          },
          status: {
          },
          startTime: {
            t: 't'
          },
          endTime: {
            t: 't'
          },
          reasonCodes: {
            n: 'reasonCode',
            t: 'a',
            m: {
              n: 'item'
            }
          },
          description: {
          }
        }
      }
    },
    requestSpotInstances: {
      n: 'RequestSpotInstances',
      i: {
        m: {
          spotPrice: {
            r: 1
          },
          instanceCount: {
            t: 'i'
          },
          type: {
          },
          validFrom: {
            t: 't'
          },
          validUntil: {
            t: 't'
          },
          launchGroup: {
          },
          availabilityZoneGroup: {
          },
          launchSpecification: {
            t: 'o',
            m: {
              imageId: {
              },
              keyName: {
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
                    groupId: {
                    }
                  }
                }
              },
              userData: {
              },
              addressingType: {
              },
              instanceType: {
              },
              placement: {
                t: 'o',
                m: {
                  availabilityZone: {
                  },
                  groupName: {
                  }
                }
              },
              kernelId: {
              },
              ramdiskId: {
              },
              blockDeviceMappings: {
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
                    ebs: {
                      t: 'o',
                      m: {
                        snapshotId: {
                        },
                        volumeSize: {
                          t: 'i'
                        },
                        deleteOnTermination: {
                          t: 'b'
                        },
                        volumeType: {
                        },
                        iops: {
                          t: 'i'
                        }
                      }
                    },
                    noDevice: {
                    }
                  }
                }
              },
              monitoringEnabled: {
                t: 'b'
              },
              subnetId: {
              },
              networkInterfaces: {
                n: 'networkInterfaceSet',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    networkInterfaceId: {
                    },
                    deviceIndex: {
                      t: 'i'
                    },
                    subnetId: {
                    },
                    description: {
                    },
                    privateIpAddress: {
                    },
                    groups: {
                      n: 'SecurityGroupId',
                      t: 'a',
                      m: {
                        n: 'SecurityGroupId'
                      }
                    },
                    deleteOnTermination: {
                      t: 'b'
                    },
                    privateIpAddresses: {
                      n: 'privateIpAddressesSet',
                      t: 'a',
                      m: {
                        n: 'item',
                        t: 'o',
                        m: {
                          privateIpAddress: {
                            r: 1
                          },
                          primary: {
                            t: 'b'
                          }
                        }
                      }
                    },
                    secondaryPrivateIpAddressCount: {
                      t: 'i'
                    }
                  }
                }
              },
              iamInstanceProfile: {
                t: 'o',
                m: {
                  arn: {
                  },
                  name: {
                  }
                }
              },
              ebsOptimized: {
                t: 'b'
              }
            }
          }
        }
      },
      o: {
        spotInstanceRequestSet: {
          n: 'spotInstanceRequests',
          t: 'a',
          m: {
            n: 'item',
            t: 'o',
            m: {
              spotInstanceRequestId: {
              },
              spotPrice: {
              },
              type: {
              },
              state: {
              },
              fault: {
                t: 'o',
                m: {
                  code: {
                  },
                  message: {
                  }
                }
              },
              validFrom: {
                t: 't'
              },
              validUntil: {
                t: 't'
              },
              launchGroup: {
              },
              availabilityZoneGroup: {
              },
              launchSpecification: {
                t: 'o',
                m: {
                  imageId: {
                  },
                  keyName: {
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
                        }
                      }
                    }
                  },
                  userData: {
                  },
                  addressingType: {
                  },
                  instanceType: {
                  },
                  placement: {
                    t: 'o',
                    m: {
                      availabilityZone: {
                      },
                      groupName: {
                      }
                    }
                  },
                  kernelId: {
                  },
                  ramdiskId: {
                  },
                  blockDeviceMapping: {
                    n: 'blockDeviceMappings',
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
                          t: 'o',
                          m: {
                            snapshotId: {
                            },
                            volumeSize: {
                              t: 'i'
                            },
                            deleteOnTermination: {
                              t: 'b'
                            },
                            volumeType: {
                            },
                            iops: {
                              t: 'i'
                            }
                          }
                        },
                        noDevice: {
                        }
                      }
                    }
                  },
                  monitoringEnabled: {
                    t: 'b'
                  },
                  subnetId: {
                  },
                  networkInterfaceSet: {
                    n: 'networkInterfaces',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        networkInterfaceId: {
                        },
                        deviceIndex: {
                          t: 'i'
                        },
                        subnetId: {
                        },
                        description: {
                        },
                        privateIpAddress: {
                        },
                        SecurityGroupId: {
                          n: 'groups',
                          t: 'a',
                          m: {
                            n: 'SecurityGroupId'
                          }
                        },
                        deleteOnTermination: {
                          t: 'b'
                        },
                        privateIpAddressesSet: {
                          n: 'privateIpAddresses',
                          t: 'a',
                          m: {
                            n: 'item',
                            t: 'o',
                            m: {
                              privateIpAddress: {
                              },
                              primary: {
                                t: 'b'
                              }
                            }
                          }
                        },
                        secondaryPrivateIpAddressCount: {
                          t: 'i'
                        }
                      }
                    }
                  },
                  iamInstanceProfile: {
                    t: 'o',
                    m: {
                      arn: {
                      },
                      name: {
                      }
                    }
                  },
                  ebsOptimized: {
                    t: 'b'
                  }
                }
              },
              instanceId: {
              },
              createTime: {
                t: 't'
              },
              productDescription: {
              },
              tagSet: {
                n: 'tags',
                t: 'a',
                m: {
                  n: 'item',
                  t: 'o',
                  m: {
                    key: {
                    },
                    value: {
                    }
                  }
                }
              },
              launchedAvailabilityZone: {
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
          instanceId: {
            r: 1
          },
          attribute: {
            r: 1
          }
        }
      }
    },
    resetNetworkInterfaceAttribute: {
      n: 'ResetNetworkInterfaceAttribute',
      i: {
        m: {
          networkInterfaceId: {
            r: 1
          },
          sourceDestCheck: {
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
          groupId: {
            r: 1
          },
          sourceSecurityGroupName: {
          },
          sourceSecurityGroupOwnerId: {
          },
          ipProtocol: {
          },
          fromPort: {
            t: 'i'
          },
          toPort: {
            t: 'i'
          },
          cidrIp: {
          },
          ipPermissions: {
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
                n: 'availabilityZone'
              },
              groupName: {
              },
              tenancy: {
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
                  n: 'virtualName'
                },
                DeviceName: {
                  n: 'deviceName'
                },
                ebs: {
                  t: 'o',
                  m: {
                    snapshotId: {
                    },
                    volumeSize: {
                      t: 'i'
                    },
                    deleteOnTermination: {
                      t: 'b'
                    },
                    volumeType: {
                    },
                    iops: {
                      t: 'i'
                    }
                  }
                },
                noDevice: {
                }
              }
            }
          },
          Monitoring: {
            t: 'o',
            m: {
              enabled: {
                t: 'b',
                r: 1
              }
            }
          },
          SubnetId: {
          },
          disableApiTermination: {
            t: 'b'
          },
          instanceInitiatedShutdownBehavior: {
          },
          license: {
            t: 'o',
            m: {
              pool: {
              }
            }
          },
          privateIpAddress: {
          },
          clientToken: {
          },
          additionalInfo: {
          },
          networkInterfaces: {
            n: 'networkInterface',
            t: 'a',
            m: {
              n: 'item',
              t: 'o',
              m: {
                networkInterfaceId: {
                },
                deviceIndex: {
                  t: 'i'
                },
                subnetId: {
                },
                description: {
                },
                privateIpAddress: {
                },
                groups: {
                  n: 'SecurityGroupId',
                  t: 'a',
                  m: {
                    n: 'SecurityGroupId'
                  }
                },
                deleteOnTermination: {
                  t: 'b'
                },
                privateIpAddresses: {
                  n: 'privateIpAddressesSet',
                  t: 'a',
                  m: {
                    n: 'item',
                    t: 'o',
                    m: {
                      privateIpAddress: {
                        r: 1
                      },
                      primary: {
                        t: 'b'
                      }
                    }
                  }
                },
                secondaryPrivateIpAddressCount: {
                  t: 'i'
                }
              }
            }
          },
          iamInstanceProfile: {
            t: 'o',
            m: {
              arn: {
              },
              name: {
              }
            }
          },
          ebsOptimized: {
            t: 'b'
          }
        }
      },
      o: {
        reservation: {
          n: 'Reservation',
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
                      },
                      tenancy: {
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
                    t: 'o',
                    m: {
                      code: {
                      },
                      message: {
                      }
                    }
                  },
                  architecture: {
                  },
                  rootDeviceType: {
                  },
                  rootDeviceName: {
                  },
                  blockDeviceMapping: {
                    n: 'blockDeviceMappings',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        deviceName: {
                        },
                        ebs: {
                          t: 'o',
                          m: {
                            volumeId: {
                            },
                            status: {
                            },
                            attachTime: {
                              t: 't'
                            },
                            deleteOnTermination: {
                              t: 'b'
                            }
                          }
                        }
                      }
                    }
                  },
                  virtualizationType: {
                  },
                  instanceLifecycle: {
                  },
                  spotInstanceRequestId: {
                  },
                  license: {
                    t: 'o',
                    m: {
                      pool: {
                      }
                    }
                  },
                  clientToken: {
                  },
                  tagSet: {
                    n: 'tags',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        key: {
                        },
                        value: {
                        }
                      }
                    }
                  },
                  groupSet: {
                    n: 'securityGroups',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        groupName: {
                          n: 'GroupName'
                        },
                        groupId: {
                        }
                      }
                    }
                  },
                  sourceDestCheck: {
                    t: 'b'
                  },
                  hypervisor: {
                  },
                  networkInterfaceSet: {
                    n: 'networkInterfaces',
                    t: 'a',
                    m: {
                      n: 'item',
                      t: 'o',
                      m: {
                        networkInterfaceId: {
                        },
                        subnetId: {
                        },
                        vpcId: {
                        },
                        description: {
                        },
                        ownerId: {
                        },
                        status: {
                        },
                        privateIpAddress: {
                        },
                        privateDnsName: {
                        },
                        sourceDestCheck: {
                          t: 'b'
                        },
                        groupSet: {
                          n: 'groups',
                          t: 'a',
                          m: {
                            n: 'item',
                            t: 'o',
                            m: {
                              groupName: {
                                n: 'GroupName'
                              },
                              groupId: {
                              }
                            }
                          }
                        },
                        attachment: {
                          t: 'o',
                          m: {
                            attachmentId: {
                            },
                            deviceIndex: {
                              t: 'i'
                            },
                            status: {
                            },
                            attachTime: {
                              t: 't'
                            },
                            deleteOnTermination: {
                              t: 'b'
                            }
                          }
                        },
                        association: {
                          t: 'o',
                          m: {
                            publicIp: {
                            },
                            ipOwnerId: {
                            }
                          }
                        }
                      }
                    }
                  },
                  iamInstanceProfile: {
                    t: 'o',
                    m: {
                      arn: {
                      },
                      id: {
                      }
                    }
                  },
                  ebsOptimized: {
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
        m: {
          InstanceIds: {
            n: 'InstanceId',
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1
          },
          additionalInfo: {
          }
        }
      },
      o: {
        instancesSet: {
          n: 'startingInstances',
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
            n: 'InstanceId',
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1
          },
          force: {
            t: 'b'
          }
        }
      },
      o: {
        instancesSet: {
          n: 'stoppingInstances',
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
            n: 'InstanceId',
            t: 'a',
            m: {
              n: 'InstanceId'
            },
            r: 1
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
          networkInterfaceId: {
            r: 1
          },
          privateIpAddresses: {
            n: 'privateIpAddress',
            t: 'a',
            m: {
              n: 'PrivateIpAddress'
            },
            r: 1
          }
        }
      }
    },
    unmonitorInstances: {
      n: 'UnmonitorInstances',
      i: {
        m: {
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
