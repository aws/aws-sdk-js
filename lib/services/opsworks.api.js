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
  jsonVersion: '1.1',
  signatureVersion: 'v4',
  serviceName: 'opsworks',
  targetPrefix: 'OpsWorks_20130218',
  timestampFormat: 'iso8601',
  operations: {
    cloneStack: {
      n: 'CloneStack',
      i: {
        m: {
          SourceStackId: {
            r: 1
          },
          Name: {
            r: 1
          },
          Region: {
            r: 1
          },
          Attributes: {
            t: 'm'
          },
          ServiceRoleArn: {
            r: 1
          },
          DefaultInstanceProfileArn: {
            r: 1
          },
          DefaultOs: {
          },
          HostnameTheme: {
          },
          DefaultAvailabilityZone: {
          },
          CustomJson: {
          },
          UseCustomCookbooks: {
            t: 'b'
          },
          CustomCookbooksSource: {
            t: 'o',
            m: {
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
            t: 'b'
          },
          CloneAppIds: {
            t: 'a'
          }
        }
      }
    },
    createApp: {
      n: 'CreateApp',
      i: {
        m: {
          StackId: {
            r: 1
          },
          Name: {
            r: 1
          },
          Description: {
          },
          Type: {
            r: 1
          },
          AppSource: {
            t: 'o',
            m: {
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
            t: 'a'
          },
          EnableSsl: {
            t: 'b'
          },
          SslConfiguration: {
            t: 'o',
            m: {
              Certificate: {
                r: 1
              },
              PrivateKey: {
                r: 1
              },
              Chain: {
              }
            }
          },
          Attributes: {
            t: 'm'
          }
        }
      }
    },
    createDeployment: {
      n: 'CreateDeployment',
      i: {
        m: {
          StackId: {
            r: 1
          },
          AppId: {
            r: 1
          },
          InstanceIds: {
            t: 'a'
          },
          Command: {
            t: 'o',
            m: {
              Name: {
                r: 1
              },
              Args: {
                t: 'm',
                m: {
                  t: 'a'
                },
                r: 1
              }
            },
            r: 1
          },
          Comment: {
          },
          CustomJson: {
          }
        }
      }
    },
    createInstance: {
      n: 'CreateInstance',
      i: {
        m: {
          StackId: {
            r: 1
          },
          LayerIds: {
            t: 'a',
            r: 1
          },
          InstanceType: {
          },
          AutoScalingType: {
          },
          Hostname: {
          },
          Os: {
          },
          SshKeyName: {
          },
          AvailabilityZone: {
          }
        }
      }
    },
    createLayer: {
      n: 'CreateLayer',
      i: {
        m: {
          StackId: {
            r: 1
          },
          Type: {
            r: 1
          },
          Name: {
            r: 1
          },
          Shortname: {
          },
          Attributes: {
            t: 'm'
          },
          CustomInstanceProfileArn: {
          },
          CustomSecurityGroupIds: {
            t: 'a'
          },
          Packages: {
            t: 'a'
          },
          VolumeConfigurations: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                MountPoint: {
                  r: 1
                },
                RaidLevel: {
                  t: 'i'
                },
                NumberOfDisks: {
                  t: 'i',
                  r: 1
                },
                Size: {
                  t: 'i',
                  r: 1
                }
              }
            }
          },
          EnableAutoHealing: {
            t: 'b'
          },
          AutoAssignElasticIps: {
            t: 'b'
          },
          CustomRecipes: {
            t: 'o',
            m: {
              Setup: {
                t: 'a'
              },
              Configure: {
                t: 'a'
              },
              Deploy: {
                t: 'a'
              },
              Undeploy: {
                t: 'a'
              },
              Shutdown: {
                t: 'a'
              }
            }
          }
        }
      }
    },
    createStack: {
      n: 'CreateStack',
      i: {
        m: {
          Name: {
            r: 1
          },
          Region: {
            r: 1
          },
          Attributes: {
            t: 'm'
          },
          ServiceRoleArn: {
            r: 1
          },
          DefaultInstanceProfileArn: {
            r: 1
          },
          DefaultOs: {
          },
          HostnameTheme: {
          },
          DefaultAvailabilityZone: {
          },
          CustomJson: {
          },
          UseCustomCookbooks: {
            t: 'b'
          },
          CustomCookbooksSource: {
            t: 'o',
            m: {
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
          }
        }
      }
    },
    createUserProfile: {
      n: 'CreateUserProfile',
      i: {
        m: {
          IamUserArn: {
            r: 1
          },
          SshUsername: {
          },
          SshPublicKey: {
          }
        }
      }
    },
    deleteApp: {
      n: 'DeleteApp',
      i: {
        m: {
          AppId: {
            r: 1
          }
        }
      }
    },
    deleteInstance: {
      n: 'DeleteInstance',
      i: {
        m: {
          InstanceId: {
            r: 1
          },
          DeleteElasticIp: {
            t: 'b'
          },
          DeleteVolumes: {
            t: 'b'
          }
        }
      }
    },
    deleteLayer: {
      n: 'DeleteLayer',
      i: {
        m: {
          LayerId: {
            r: 1
          }
        }
      }
    },
    deleteStack: {
      n: 'DeleteStack',
      i: {
        m: {
          StackId: {
            r: 1
          }
        }
      }
    },
    deleteUserProfile: {
      n: 'DeleteUserProfile',
      i: {
        m: {
          IamUserArn: {
            r: 1
          }
        }
      }
    },
    describeApps: {
      n: 'DescribeApps',
      i: {
        m: {
          StackId: {
          },
          AppIds: {
            t: 'a'
          }
        }
      }
    },
    describeCommands: {
      n: 'DescribeCommands',
      i: {
        m: {
          DeploymentId: {
          },
          InstanceId: {
          },
          CommandIds: {
            t: 'a'
          }
        }
      }
    },
    describeDeployments: {
      n: 'DescribeDeployments',
      i: {
        m: {
          StackId: {
          },
          AppId: {
          },
          DeploymentIds: {
            t: 'a'
          }
        }
      }
    },
    describeElasticIps: {
      n: 'DescribeElasticIps',
      i: {
        m: {
          InstanceId: {
          },
          Ips: {
            t: 'a'
          }
        }
      }
    },
    describeInstances: {
      n: 'DescribeInstances',
      i: {
        m: {
          StackId: {
          },
          LayerId: {
          },
          AppId: {
          },
          InstanceIds: {
            t: 'a'
          }
        }
      }
    },
    describeLayers: {
      n: 'DescribeLayers',
      i: {
        m: {
          StackId: {
            r: 1
          },
          LayerIds: {
            t: 'a'
          }
        }
      }
    },
    describeLoadBasedAutoScaling: {
      n: 'DescribeLoadBasedAutoScaling',
      i: {
        m: {
          LayerIds: {
            t: 'a',
            r: 1
          }
        }
      }
    },
    describePermissions: {
      n: 'DescribePermissions',
      i: {
        m: {
          IamUserArn: {
            r: 1
          },
          StackId: {
            r: 1
          }
        }
      }
    },
    describeRaidArrays: {
      n: 'DescribeRaidArrays',
      i: {
        m: {
          InstanceId: {
          },
          RaidArrayIds: {
            t: 'a'
          }
        }
      }
    },
    describeServiceErrors: {
      n: 'DescribeServiceErrors',
      i: {
        m: {
          StackId: {
          },
          InstanceId: {
          },
          ServiceErrorIds: {
            t: 'a'
          }
        }
      }
    },
    describeStacks: {
      n: 'DescribeStacks',
      i: {
        m: {
          StackIds: {
            t: 'a'
          }
        }
      }
    },
    describeTimeBasedAutoScaling: {
      n: 'DescribeTimeBasedAutoScaling',
      i: {
        m: {
          InstanceIds: {
            t: 'a',
            r: 1
          }
        }
      }
    },
    describeUserProfiles: {
      n: 'DescribeUserProfiles',
      i: {
        m: {
          IamUserArns: {
            t: 'a',
            r: 1
          }
        }
      }
    },
    describeVolumes: {
      n: 'DescribeVolumes',
      i: {
        m: {
          InstanceId: {
          },
          RaidArrayId: {
          },
          VolumeIds: {
            t: 'a'
          }
        }
      }
    },
    getHostnameSuggestion: {
      n: 'GetHostnameSuggestion',
      i: {
        m: {
          LayerId: {
            r: 1
          }
        }
      }
    },
    rebootInstance: {
      n: 'RebootInstance',
      i: {
        m: {
          InstanceId: {
            r: 1
          }
        }
      }
    },
    setLoadBasedAutoScaling: {
      n: 'SetLoadBasedAutoScaling',
      i: {
        m: {
          LayerId: {
            r: 1
          },
          Enable: {
            t: 'b'
          },
          UpScaling: {
            t: 'o',
            m: {
              InstanceCount: {
                t: 'i'
              },
              ThresholdsWaitTime: {
                t: 'i'
              },
              IgnoreMetricsTime: {
                t: 'i'
              },
              CpuThreshold: {
                t: 'n'
              },
              MemoryThreshold: {
                t: 'n'
              },
              LoadThreshold: {
                t: 'n'
              }
            }
          },
          DownScaling: {
            t: 'o',
            m: {
              InstanceCount: {
                t: 'i'
              },
              ThresholdsWaitTime: {
                t: 'i'
              },
              IgnoreMetricsTime: {
                t: 'i'
              },
              CpuThreshold: {
                t: 'n'
              },
              MemoryThreshold: {
                t: 'n'
              },
              LoadThreshold: {
                t: 'n'
              }
            }
          }
        }
      }
    },
    setPermission: {
      n: 'SetPermission',
      i: {
        m: {
          StackId: {
            r: 1
          },
          IamUserArn: {
            r: 1
          },
          AllowSsh: {
            t: 'b'
          },
          AllowSudo: {
            t: 'b'
          }
        }
      }
    },
    setTimeBasedAutoScaling: {
      n: 'SetTimeBasedAutoScaling',
      i: {
        m: {
          InstanceId: {
            r: 1
          },
          AutoScalingSchedule: {
            t: 'o',
            m: {
              Monday: {
                t: 'm'
              },
              Tuesday: {
                t: 'm'
              },
              Wednesday: {
                t: 'm'
              },
              Thursday: {
                t: 'm'
              },
              Friday: {
                t: 'm'
              },
              Saturday: {
                t: 'm'
              },
              Sunday: {
                t: 'm'
              }
            },
            r: 1
          }
        }
      }
    },
    startInstance: {
      n: 'StartInstance',
      i: {
        m: {
          InstanceId: {
            r: 1
          }
        }
      }
    },
    startStack: {
      n: 'StartStack',
      i: {
        m: {
          StackId: {
            r: 1
          }
        }
      }
    },
    stopInstance: {
      n: 'StopInstance',
      i: {
        m: {
          InstanceId: {
            r: 1
          }
        }
      }
    },
    stopStack: {
      n: 'StopStack',
      i: {
        m: {
          StackId: {
            r: 1
          }
        }
      }
    },
    updateApp: {
      n: 'UpdateApp',
      i: {
        m: {
          AppId: {
            r: 1
          },
          Name: {
          },
          Description: {
          },
          Type: {
          },
          AppSource: {
            t: 'o',
            m: {
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
            t: 'a'
          },
          EnableSsl: {
            t: 'b'
          },
          SslConfiguration: {
            t: 'o',
            m: {
              Certificate: {
                r: 1
              },
              PrivateKey: {
                r: 1
              },
              Chain: {
              }
            }
          },
          Attributes: {
            t: 'm'
          }
        }
      }
    },
    updateInstance: {
      n: 'UpdateInstance',
      i: {
        m: {
          InstanceId: {
            r: 1
          },
          LayerIds: {
            t: 'a',
            r: 1
          },
          InstanceType: {
          },
          AutoScalingType: {
          },
          Hostname: {
          },
          Os: {
          },
          SshKeyName: {
          }
        }
      }
    },
    updateLayer: {
      n: 'UpdateLayer',
      i: {
        m: {
          LayerId: {
            r: 1
          },
          Name: {
          },
          Shortname: {
          },
          Attributes: {
            t: 'm'
          },
          CustomInstanceProfileArn: {
          },
          CustomSecurityGroupIds: {
            t: 'a'
          },
          Packages: {
            t: 'a'
          },
          VolumeConfigurations: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                MountPoint: {
                  r: 1
                },
                RaidLevel: {
                  t: 'i'
                },
                NumberOfDisks: {
                  t: 'i',
                  r: 1
                },
                Size: {
                  t: 'i',
                  r: 1
                }
              }
            }
          },
          EnableAutoHealing: {
            t: 'b'
          },
          AutoAssignElasticIps: {
            t: 'b'
          },
          CustomRecipes: {
            t: 'o',
            m: {
              Setup: {
                t: 'a'
              },
              Configure: {
                t: 'a'
              },
              Deploy: {
                t: 'a'
              },
              Undeploy: {
                t: 'a'
              },
              Shutdown: {
                t: 'a'
              }
            }
          }
        }
      }
    },
    updateStack: {
      n: 'UpdateStack',
      i: {
        m: {
          StackId: {
            r: 1
          },
          Name: {
          },
          Attributes: {
            t: 'm'
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
          CustomJson: {
          },
          UseCustomCookbooks: {
            t: 'b'
          },
          CustomCookbooksSource: {
            t: 'o',
            m: {
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
          }
        }
      }
    },
    updateUserProfile: {
      n: 'UpdateUserProfile',
      i: {
        m: {
          IamUserArn: {
            r: 1
          },
          SshUsername: {
          },
          SshPublicKey: {
          }
        }
      }
    }
  }
};
