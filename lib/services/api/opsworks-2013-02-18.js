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
  format: 'json',
  apiVersion: '2013-02-18',
  endpointPrefix: 'opsworks',
  jsonVersion: '1.1',
  serviceFullName: 'AWS OpsWorks',
  signatureVersion: 'v4',
  targetPrefix: 'OpsWorks_20130218',
  timestampFormat: 'iso8601',
  operations: {
    attachElasticLoadBalancer: {
      name: 'AttachElasticLoadBalancer',
      input: {
        type: 'structure',
        members: {
          ElasticLoadBalancerName: {
            required: true
          },
          LayerId: {
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
    cloneStack: {
      name: 'CloneStack',
      input: {
        type: 'structure',
        members: {
          SourceStackId: {
            required: true
          },
          Name: {
          },
          Region: {
          },
          VpcId: {
          },
          Attributes: {
            type: 'map',
            keys: {
            },
            members: {
            }
          },
          ServiceRoleArn: {
            required: true
          },
          DefaultInstanceProfileArn: {
          },
          DefaultOs: {
          },
          HostnameTheme: {
          },
          DefaultAvailabilityZone: {
          },
          DefaultSubnetId: {
          },
          CustomJson: {
          },
          ConfigurationManager: {
            type: 'structure',
            members: {
              Name: {
              },
              Version: {
              }
            }
          },
          UseCustomCookbooks: {
            type: 'boolean'
          },
          CustomCookbooksSource: {
            type: 'structure',
            members: {
              Type: {
              },
              Url: {
              },
              Username: {
              },
              Password: {
              },
              SshKey: {
              },
              Revision: {
              }
            }
          },
          DefaultSshKeyName: {
          },
          ClonePermissions: {
            type: 'boolean'
          },
          CloneAppIds: {
            type: 'list',
            members: {
            }
          },
          DefaultRootDeviceType: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          StackId: {
          }
        }
      }
    },
    createApp: {
      name: 'CreateApp',
      input: {
        type: 'structure',
        members: {
          StackId: {
            required: true
          },
          Shortname: {
          },
          Name: {
            required: true
          },
          Description: {
          },
          Type: {
            required: true
          },
          AppSource: {
            type: 'structure',
            members: {
              Type: {
              },
              Url: {
              },
              Username: {
              },
              Password: {
              },
              SshKey: {
              },
              Revision: {
              }
            }
          },
          Domains: {
            type: 'list',
            members: {
            }
          },
          EnableSsl: {
            type: 'boolean'
          },
          SslConfiguration: {
            type: 'structure',
            members: {
              Certificate: {
                required: true
              },
              PrivateKey: {
                required: true
              },
              Chain: {
              }
            }
          },
          Attributes: {
            type: 'map',
            keys: {
            },
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          AppId: {
          }
        }
      }
    },
    createDeployment: {
      name: 'CreateDeployment',
      input: {
        type: 'structure',
        members: {
          StackId: {
            required: true
          },
          AppId: {
          },
          InstanceIds: {
            type: 'list',
            members: {
            }
          },
          Command: {
            type: 'structure',
            members: {
              Name: {
                required: true
              },
              Args: {
                type: 'map',
                keys: {
                },
                members: {
                  type: 'list',
                  members: {
                  }
                }
              }
            },
            required: true
          },
          Comment: {
          },
          CustomJson: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DeploymentId: {
          }
        }
      }
    },
    createInstance: {
      name: 'CreateInstance',
      input: {
        type: 'structure',
        members: {
          StackId: {
            required: true
          },
          LayerIds: {
            type: 'list',
            members: {
            },
            required: true
          },
          InstanceType: {
            required: true
          },
          AutoScalingType: {
          },
          Hostname: {
          },
          Os: {
          },
          AmiId: {
          },
          SshKeyName: {
          },
          AvailabilityZone: {
          },
          SubnetId: {
          },
          Architecture: {
          },
          RootDeviceType: {
          },
          InstallUpdatesOnBoot: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          InstanceId: {
          }
        }
      }
    },
    createLayer: {
      name: 'CreateLayer',
      input: {
        type: 'structure',
        members: {
          StackId: {
            required: true
          },
          Type: {
            required: true
          },
          Name: {
            required: true
          },
          Shortname: {
            required: true
          },
          Attributes: {
            type: 'map',
            keys: {
            },
            members: {
            }
          },
          CustomInstanceProfileArn: {
          },
          CustomSecurityGroupIds: {
            type: 'list',
            members: {
            }
          },
          Packages: {
            type: 'list',
            members: {
            }
          },
          VolumeConfigurations: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                MountPoint: {
                  required: true
                },
                RaidLevel: {
                  type: 'integer'
                },
                NumberOfDisks: {
                  type: 'integer',
                  required: true
                },
                Size: {
                  type: 'integer',
                  required: true
                }
              }
            }
          },
          EnableAutoHealing: {
            type: 'boolean'
          },
          AutoAssignElasticIps: {
            type: 'boolean'
          },
          CustomRecipes: {
            type: 'structure',
            members: {
              Setup: {
                type: 'list',
                members: {
                }
              },
              Configure: {
                type: 'list',
                members: {
                }
              },
              Deploy: {
                type: 'list',
                members: {
                }
              },
              Undeploy: {
                type: 'list',
                members: {
                }
              },
              Shutdown: {
                type: 'list',
                members: {
                }
              }
            }
          },
          InstallUpdatesOnBoot: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LayerId: {
          }
        }
      }
    },
    createStack: {
      name: 'CreateStack',
      input: {
        type: 'structure',
        members: {
          Name: {
            required: true
          },
          Region: {
            required: true
          },
          VpcId: {
          },
          Attributes: {
            type: 'map',
            keys: {
            },
            members: {
            }
          },
          ServiceRoleArn: {
            required: true
          },
          DefaultInstanceProfileArn: {
            required: true
          },
          DefaultOs: {
          },
          HostnameTheme: {
          },
          DefaultAvailabilityZone: {
          },
          DefaultSubnetId: {
          },
          CustomJson: {
          },
          ConfigurationManager: {
            type: 'structure',
            members: {
              Name: {
              },
              Version: {
              }
            }
          },
          UseCustomCookbooks: {
            type: 'boolean'
          },
          CustomCookbooksSource: {
            type: 'structure',
            members: {
              Type: {
              },
              Url: {
              },
              Username: {
              },
              Password: {
              },
              SshKey: {
              },
              Revision: {
              }
            }
          },
          DefaultSshKeyName: {
          },
          DefaultRootDeviceType: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          StackId: {
          }
        }
      }
    },
    createUserProfile: {
      name: 'CreateUserProfile',
      input: {
        type: 'structure',
        members: {
          IamUserArn: {
            required: true
          },
          SshUsername: {
          },
          SshPublicKey: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          IamUserArn: {
          }
        }
      }
    },
    deleteApp: {
      name: 'DeleteApp',
      input: {
        type: 'structure',
        members: {
          AppId: {
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
    deleteInstance: {
      name: 'DeleteInstance',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          },
          DeleteElasticIp: {
            type: 'boolean'
          },
          DeleteVolumes: {
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
    deleteLayer: {
      name: 'DeleteLayer',
      input: {
        type: 'structure',
        members: {
          LayerId: {
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
    deleteStack: {
      name: 'DeleteStack',
      input: {
        type: 'structure',
        members: {
          StackId: {
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
    deleteUserProfile: {
      name: 'DeleteUserProfile',
      input: {
        type: 'structure',
        members: {
          IamUserArn: {
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
    describeApps: {
      name: 'DescribeApps',
      input: {
        type: 'structure',
        members: {
          StackId: {
          },
          AppIds: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Apps: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AppId: {
                },
                StackId: {
                },
                Shortname: {
                },
                Name: {
                },
                Description: {
                },
                Type: {
                },
                AppSource: {
                  type: 'structure',
                  members: {
                    Type: {
                    },
                    Url: {
                    },
                    Username: {
                    },
                    Password: {
                    },
                    SshKey: {
                    },
                    Revision: {
                    }
                  }
                },
                Domains: {
                  type: 'list',
                  members: {
                  }
                },
                EnableSsl: {
                  type: 'boolean'
                },
                SslConfiguration: {
                  type: 'structure',
                  members: {
                    Certificate: {
                    },
                    PrivateKey: {
                    },
                    Chain: {
                    }
                  }
                },
                Attributes: {
                  type: 'map',
                  keys: {
                  },
                  members: {
                  }
                },
                CreatedAt: {
                }
              }
            }
          }
        }
      }
    },
    describeCommands: {
      name: 'DescribeCommands',
      input: {
        type: 'structure',
        members: {
          DeploymentId: {
          },
          InstanceId: {
          },
          CommandIds: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Commands: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                CommandId: {
                },
                InstanceId: {
                },
                DeploymentId: {
                },
                CreatedAt: {
                },
                AcknowledgedAt: {
                },
                CompletedAt: {
                },
                Status: {
                },
                ExitCode: {
                  type: 'integer'
                },
                LogUrl: {
                },
                Type: {
                }
              }
            }
          }
        }
      }
    },
    describeDeployments: {
      name: 'DescribeDeployments',
      input: {
        type: 'structure',
        members: {
          StackId: {
          },
          AppId: {
          },
          DeploymentIds: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Deployments: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                DeploymentId: {
                },
                StackId: {
                },
                AppId: {
                },
                CreatedAt: {
                },
                CompletedAt: {
                },
                Duration: {
                  type: 'integer'
                },
                IamUserArn: {
                },
                Comment: {
                },
                Command: {
                  type: 'structure',
                  members: {
                    Name: {
                    },
                    Args: {
                      type: 'map',
                      keys: {
                      },
                      members: {
                        type: 'list',
                        members: {
                        }
                      }
                    }
                  }
                },
                Status: {
                },
                CustomJson: {
                },
                InstanceIds: {
                  type: 'list',
                  members: {
                  }
                }
              }
            }
          }
        }
      }
    },
    describeElasticIps: {
      name: 'DescribeElasticIps',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
          },
          Ips: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ElasticIps: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Ip: {
                },
                Name: {
                },
                Domain: {
                },
                Region: {
                }
              }
            }
          }
        }
      }
    },
    describeElasticLoadBalancers: {
      name: 'DescribeElasticLoadBalancers',
      input: {
        type: 'structure',
        members: {
          StackId: {
          },
          LayerIds: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ElasticLoadBalancers: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ElasticLoadBalancerName: {
                },
                Region: {
                },
                DnsName: {
                },
                StackId: {
                },
                LayerId: {
                },
                VpcId: {
                },
                AvailabilityZones: {
                  type: 'list',
                  members: {
                  }
                },
                SubnetIds: {
                  type: 'list',
                  members: {
                  }
                },
                Ec2InstanceIds: {
                  type: 'list',
                  members: {
                  }
                }
              }
            }
          }
        }
      }
    },
    describeInstances: {
      name: 'DescribeInstances',
      input: {
        type: 'structure',
        members: {
          StackId: {
          },
          LayerId: {
          },
          InstanceIds: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Instances: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                InstanceId: {
                },
                Ec2InstanceId: {
                },
                Hostname: {
                },
                StackId: {
                },
                LayerIds: {
                  type: 'list',
                  members: {
                  }
                },
                SecurityGroupIds: {
                  type: 'list',
                  members: {
                  }
                },
                InstanceType: {
                },
                InstanceProfileArn: {
                },
                Status: {
                },
                Os: {
                },
                AmiId: {
                },
                AvailabilityZone: {
                },
                SubnetId: {
                },
                PublicDns: {
                },
                PrivateDns: {
                },
                PublicIp: {
                },
                PrivateIp: {
                },
                ElasticIp: {
                },
                AutoScalingType: {
                },
                SshKeyName: {
                },
                SshHostRsaKeyFingerprint: {
                },
                SshHostDsaKeyFingerprint: {
                },
                CreatedAt: {
                },
                LastServiceErrorId: {
                },
                Architecture: {
                },
                RootDeviceType: {
                },
                RootDeviceVolumeId: {
                },
                InstallUpdatesOnBoot: {
                  type: 'boolean'
                }
              }
            }
          }
        }
      }
    },
    describeLayers: {
      name: 'DescribeLayers',
      input: {
        type: 'structure',
        members: {
          StackId: {
            required: true
          },
          LayerIds: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Layers: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                StackId: {
                },
                LayerId: {
                },
                Type: {
                },
                Name: {
                },
                Shortname: {
                },
                Attributes: {
                  type: 'map',
                  keys: {
                  },
                  members: {
                  }
                },
                CustomInstanceProfileArn: {
                },
                CustomSecurityGroupIds: {
                  type: 'list',
                  members: {
                  }
                },
                DefaultSecurityGroupNames: {
                  type: 'list',
                  members: {
                  }
                },
                Packages: {
                  type: 'list',
                  members: {
                  }
                },
                VolumeConfigurations: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      MountPoint: {
                      },
                      RaidLevel: {
                        type: 'integer'
                      },
                      NumberOfDisks: {
                        type: 'integer'
                      },
                      Size: {
                        type: 'integer'
                      }
                    }
                  }
                },
                EnableAutoHealing: {
                  type: 'boolean'
                },
                AutoAssignElasticIps: {
                  type: 'boolean'
                },
                DefaultRecipes: {
                  type: 'structure',
                  members: {
                    Setup: {
                      type: 'list',
                      members: {
                      }
                    },
                    Configure: {
                      type: 'list',
                      members: {
                      }
                    },
                    Deploy: {
                      type: 'list',
                      members: {
                      }
                    },
                    Undeploy: {
                      type: 'list',
                      members: {
                      }
                    },
                    Shutdown: {
                      type: 'list',
                      members: {
                      }
                    }
                  }
                },
                CustomRecipes: {
                  type: 'structure',
                  members: {
                    Setup: {
                      type: 'list',
                      members: {
                      }
                    },
                    Configure: {
                      type: 'list',
                      members: {
                      }
                    },
                    Deploy: {
                      type: 'list',
                      members: {
                      }
                    },
                    Undeploy: {
                      type: 'list',
                      members: {
                      }
                    },
                    Shutdown: {
                      type: 'list',
                      members: {
                      }
                    }
                  }
                },
                CreatedAt: {
                },
                InstallUpdatesOnBoot: {
                  type: 'boolean'
                }
              }
            }
          }
        }
      }
    },
    describeLoadBasedAutoScaling: {
      name: 'DescribeLoadBasedAutoScaling',
      input: {
        type: 'structure',
        members: {
          LayerIds: {
            type: 'list',
            members: {
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LoadBasedAutoScalingConfigurations: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                LayerId: {
                },
                Enable: {
                  type: 'boolean'
                },
                UpScaling: {
                  type: 'structure',
                  members: {
                    InstanceCount: {
                      type: 'integer'
                    },
                    ThresholdsWaitTime: {
                      type: 'integer'
                    },
                    IgnoreMetricsTime: {
                      type: 'integer'
                    },
                    CpuThreshold: {
                      type: 'float'
                    },
                    MemoryThreshold: {
                      type: 'float'
                    },
                    LoadThreshold: {
                      type: 'float'
                    }
                  }
                },
                DownScaling: {
                  type: 'structure',
                  members: {
                    InstanceCount: {
                      type: 'integer'
                    },
                    ThresholdsWaitTime: {
                      type: 'integer'
                    },
                    IgnoreMetricsTime: {
                      type: 'integer'
                    },
                    CpuThreshold: {
                      type: 'float'
                    },
                    MemoryThreshold: {
                      type: 'float'
                    },
                    LoadThreshold: {
                      type: 'float'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describePermissions: {
      name: 'DescribePermissions',
      input: {
        type: 'structure',
        members: {
          IamUserArn: {
            required: true
          },
          StackId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Permissions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                StackId: {
                },
                IamUserArn: {
                },
                AllowSsh: {
                  type: 'boolean'
                },
                AllowSudo: {
                  type: 'boolean'
                }
              }
            }
          }
        }
      }
    },
    describeRaidArrays: {
      name: 'DescribeRaidArrays',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
          },
          RaidArrayIds: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          RaidArrays: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                RaidArrayId: {
                },
                InstanceId: {
                },
                Name: {
                },
                RaidLevel: {
                  type: 'integer'
                },
                NumberOfDisks: {
                  type: 'integer'
                },
                Size: {
                  type: 'integer'
                },
                Device: {
                },
                MountPoint: {
                },
                AvailabilityZone: {
                },
                CreatedAt: {
                }
              }
            }
          }
        }
      }
    },
    describeServiceErrors: {
      name: 'DescribeServiceErrors',
      input: {
        type: 'structure',
        members: {
          StackId: {
          },
          InstanceId: {
          },
          ServiceErrorIds: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ServiceErrors: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ServiceErrorId: {
                },
                StackId: {
                },
                InstanceId: {
                },
                Type: {
                },
                Message: {
                },
                CreatedAt: {
                }
              }
            }
          }
        }
      }
    },
    describeStacks: {
      name: 'DescribeStacks',
      input: {
        type: 'structure',
        members: {
          StackIds: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Stacks: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                StackId: {
                },
                Name: {
                },
                Region: {
                },
                VpcId: {
                },
                Attributes: {
                  type: 'map',
                  keys: {
                  },
                  members: {
                  }
                },
                ServiceRoleArn: {
                },
                DefaultInstanceProfileArn: {
                },
                DefaultOs: {
                },
                HostnameTheme: {
                },
                DefaultAvailabilityZone: {
                },
                DefaultSubnetId: {
                },
                CustomJson: {
                },
                ConfigurationManager: {
                  type: 'structure',
                  members: {
                    Name: {
                    },
                    Version: {
                    }
                  }
                },
                UseCustomCookbooks: {
                  type: 'boolean'
                },
                CustomCookbooksSource: {
                  type: 'structure',
                  members: {
                    Type: {
                    },
                    Url: {
                    },
                    Username: {
                    },
                    Password: {
                    },
                    SshKey: {
                    },
                    Revision: {
                    }
                  }
                },
                DefaultSshKeyName: {
                },
                CreatedAt: {
                },
                DefaultRootDeviceType: {
                }
              }
            }
          }
        }
      }
    },
    describeTimeBasedAutoScaling: {
      name: 'DescribeTimeBasedAutoScaling',
      input: {
        type: 'structure',
        members: {
          InstanceIds: {
            type: 'list',
            members: {
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TimeBasedAutoScalingConfigurations: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                InstanceId: {
                },
                AutoScalingSchedule: {
                  type: 'structure',
                  members: {
                    Monday: {
                      type: 'map',
                      keys: {
                      },
                      members: {
                      }
                    },
                    Tuesday: {
                      type: 'map',
                      keys: {
                      },
                      members: {
                      }
                    },
                    Wednesday: {
                      type: 'map',
                      keys: {
                      },
                      members: {
                      }
                    },
                    Thursday: {
                      type: 'map',
                      keys: {
                      },
                      members: {
                      }
                    },
                    Friday: {
                      type: 'map',
                      keys: {
                      },
                      members: {
                      }
                    },
                    Saturday: {
                      type: 'map',
                      keys: {
                      },
                      members: {
                      }
                    },
                    Sunday: {
                      type: 'map',
                      keys: {
                      },
                      members: {
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
    describeUserProfiles: {
      name: 'DescribeUserProfiles',
      input: {
        type: 'structure',
        members: {
          IamUserArns: {
            type: 'list',
            members: {
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          UserProfiles: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                IamUserArn: {
                },
                Name: {
                },
                SshUsername: {
                },
                SshPublicKey: {
                }
              }
            }
          }
        }
      }
    },
    describeVolumes: {
      name: 'DescribeVolumes',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
          },
          RaidArrayId: {
          },
          VolumeIds: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Volumes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                VolumeId: {
                },
                Ec2VolumeId: {
                },
                Name: {
                },
                RaidArrayId: {
                },
                InstanceId: {
                },
                Status: {
                },
                Size: {
                  type: 'integer'
                },
                Device: {
                },
                MountPoint: {
                },
                Region: {
                },
                AvailabilityZone: {
                }
              }
            }
          }
        }
      }
    },
    detachElasticLoadBalancer: {
      name: 'DetachElasticLoadBalancer',
      input: {
        type: 'structure',
        members: {
          ElasticLoadBalancerName: {
            required: true
          },
          LayerId: {
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
    getHostnameSuggestion: {
      name: 'GetHostnameSuggestion',
      input: {
        type: 'structure',
        members: {
          LayerId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LayerId: {
          },
          Hostname: {
          }
        }
      }
    },
    rebootInstance: {
      name: 'RebootInstance',
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
        }
      }
    },
    setLoadBasedAutoScaling: {
      name: 'SetLoadBasedAutoScaling',
      input: {
        type: 'structure',
        members: {
          LayerId: {
            required: true
          },
          Enable: {
            type: 'boolean'
          },
          UpScaling: {
            type: 'structure',
            members: {
              InstanceCount: {
                type: 'integer'
              },
              ThresholdsWaitTime: {
                type: 'integer'
              },
              IgnoreMetricsTime: {
                type: 'integer'
              },
              CpuThreshold: {
                type: 'float'
              },
              MemoryThreshold: {
                type: 'float'
              },
              LoadThreshold: {
                type: 'float'
              }
            }
          },
          DownScaling: {
            type: 'structure',
            members: {
              InstanceCount: {
                type: 'integer'
              },
              ThresholdsWaitTime: {
                type: 'integer'
              },
              IgnoreMetricsTime: {
                type: 'integer'
              },
              CpuThreshold: {
                type: 'float'
              },
              MemoryThreshold: {
                type: 'float'
              },
              LoadThreshold: {
                type: 'float'
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
    setPermission: {
      name: 'SetPermission',
      input: {
        type: 'structure',
        members: {
          StackId: {
            required: true
          },
          IamUserArn: {
            required: true
          },
          AllowSsh: {
            type: 'boolean'
          },
          AllowSudo: {
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
    setTimeBasedAutoScaling: {
      name: 'SetTimeBasedAutoScaling',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          },
          AutoScalingSchedule: {
            type: 'structure',
            members: {
              Monday: {
                type: 'map',
                keys: {
                },
                members: {
                }
              },
              Tuesday: {
                type: 'map',
                keys: {
                },
                members: {
                }
              },
              Wednesday: {
                type: 'map',
                keys: {
                },
                members: {
                }
              },
              Thursday: {
                type: 'map',
                keys: {
                },
                members: {
                }
              },
              Friday: {
                type: 'map',
                keys: {
                },
                members: {
                }
              },
              Saturday: {
                type: 'map',
                keys: {
                },
                members: {
                }
              },
              Sunday: {
                type: 'map',
                keys: {
                },
                members: {
                }
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
    startInstance: {
      name: 'StartInstance',
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
        }
      }
    },
    startStack: {
      name: 'StartStack',
      input: {
        type: 'structure',
        members: {
          StackId: {
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
    stopInstance: {
      name: 'StopInstance',
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
        }
      }
    },
    stopStack: {
      name: 'StopStack',
      input: {
        type: 'structure',
        members: {
          StackId: {
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
    updateApp: {
      name: 'UpdateApp',
      input: {
        type: 'structure',
        members: {
          AppId: {
            required: true
          },
          Name: {
          },
          Description: {
          },
          Type: {
          },
          AppSource: {
            type: 'structure',
            members: {
              Type: {
              },
              Url: {
              },
              Username: {
              },
              Password: {
              },
              SshKey: {
              },
              Revision: {
              }
            }
          },
          Domains: {
            type: 'list',
            members: {
            }
          },
          EnableSsl: {
            type: 'boolean'
          },
          SslConfiguration: {
            type: 'structure',
            members: {
              Certificate: {
                required: true
              },
              PrivateKey: {
                required: true
              },
              Chain: {
              }
            }
          },
          Attributes: {
            type: 'map',
            keys: {
            },
            members: {
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
    updateInstance: {
      name: 'UpdateInstance',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          },
          LayerIds: {
            type: 'list',
            members: {
            }
          },
          InstanceType: {
          },
          AutoScalingType: {
          },
          Hostname: {
          },
          Os: {
          },
          AmiId: {
          },
          SshKeyName: {
          },
          Architecture: {
          },
          InstallUpdatesOnBoot: {
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
    updateLayer: {
      name: 'UpdateLayer',
      input: {
        type: 'structure',
        members: {
          LayerId: {
            required: true
          },
          Name: {
          },
          Shortname: {
          },
          Attributes: {
            type: 'map',
            keys: {
            },
            members: {
            }
          },
          CustomInstanceProfileArn: {
          },
          CustomSecurityGroupIds: {
            type: 'list',
            members: {
            }
          },
          Packages: {
            type: 'list',
            members: {
            }
          },
          VolumeConfigurations: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                MountPoint: {
                  required: true
                },
                RaidLevel: {
                  type: 'integer'
                },
                NumberOfDisks: {
                  type: 'integer',
                  required: true
                },
                Size: {
                  type: 'integer',
                  required: true
                }
              }
            }
          },
          EnableAutoHealing: {
            type: 'boolean'
          },
          AutoAssignElasticIps: {
            type: 'boolean'
          },
          CustomRecipes: {
            type: 'structure',
            members: {
              Setup: {
                type: 'list',
                members: {
                }
              },
              Configure: {
                type: 'list',
                members: {
                }
              },
              Deploy: {
                type: 'list',
                members: {
                }
              },
              Undeploy: {
                type: 'list',
                members: {
                }
              },
              Shutdown: {
                type: 'list',
                members: {
                }
              }
            }
          },
          InstallUpdatesOnBoot: {
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
    updateStack: {
      name: 'UpdateStack',
      input: {
        type: 'structure',
        members: {
          StackId: {
            required: true
          },
          Name: {
          },
          Attributes: {
            type: 'map',
            keys: {
            },
            members: {
            }
          },
          ServiceRoleArn: {
          },
          DefaultInstanceProfileArn: {
          },
          DefaultOs: {
          },
          HostnameTheme: {
          },
          DefaultAvailabilityZone: {
          },
          DefaultSubnetId: {
          },
          CustomJson: {
          },
          ConfigurationManager: {
            type: 'structure',
            members: {
              Name: {
              },
              Version: {
              }
            }
          },
          UseCustomCookbooks: {
            type: 'boolean'
          },
          CustomCookbooksSource: {
            type: 'structure',
            members: {
              Type: {
              },
              Url: {
              },
              Username: {
              },
              Password: {
              },
              SshKey: {
              },
              Revision: {
              }
            }
          },
          DefaultSshKeyName: {
          },
          DefaultRootDeviceType: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    updateUserProfile: {
      name: 'UpdateUserProfile',
      input: {
        type: 'structure',
        members: {
          IamUserArn: {
            required: true
          },
          SshUsername: {
          },
          SshPublicKey: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    }
  },
  pagination: {
    describeApps: {
      resultKey: 'Apps'
    },
    describeCommands: {
      resultKey: 'Commands'
    },
    describeDeployments: {
      resultKey: 'Deployments'
    },
    describeElasticIps: {
      resultKey: 'ElasticIps'
    },
    describeElasticLoadBalancers: {
      resultKey: 'ElasticLoadBalancers'
    },
    describeInstances: {
      resultKey: 'Instances'
    },
    describeLayers: {
      resultKey: 'Layers'
    },
    describeLoadBasedAutoScaling: {
      resultKey: 'LoadBasedAutoScalingConfigurations'
    },
    describeRaidArrays: {
      resultKey: 'RaidArrays'
    },
    describeServiceErrors: {
      resultKey: 'ServiceErrors'
    },
    describeStacks: {
      resultKey: 'Stacks'
    },
    describeTimeBasedAutoScaling: {
      resultKey: 'TimeBasedAutoScalingConfigurations'
    },
    describeUserProfiles: {
      resultKey: 'UserProfiles'
    },
    describeVolumes: {
      resultKey: 'Volumes'
    }
  }
};
