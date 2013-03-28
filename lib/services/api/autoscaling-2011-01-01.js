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
  apiVersion: '2011-01-01',
  endpointPrefix: 'autoscaling',
  resultWrapped: true,
  serviceFullName: 'Auto Scaling',
  signatureVersion: 'v4',
  timestampFormat: 'iso8601',
  operations: {
    createAutoScalingGroup: {
      name: 'CreateAutoScalingGroup',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          LaunchConfigurationName: {
            required: true
          },
          MinSize: {
            type: 'integer',
            required: true
          },
          MaxSize: {
            type: 'integer',
            required: true
          },
          DesiredCapacity: {
            type: 'integer'
          },
          DefaultCooldown: {
            type: 'integer'
          },
          AvailabilityZones: {
            type: 'list'
          },
          LoadBalancerNames: {
            type: 'list'
          },
          HealthCheckType: {
          },
          HealthCheckGracePeriod: {
            type: 'integer'
          },
          PlacementGroup: {
          },
          VPCZoneIdentifier: {
          },
          TerminationPolicies: {
            type: 'list'
          },
          Tags: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ResourceId: {
                },
                ResourceType: {
                },
                Key: {
                  required: true
                },
                Value: {
                },
                PropagateAtLaunch: {
                  type: 'boolean'
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
    createLaunchConfiguration: {
      name: 'CreateLaunchConfiguration',
      input: {
        type: 'structure',
        members: {
          LaunchConfigurationName: {
            required: true
          },
          ImageId: {
            required: true
          },
          KeyName: {
          },
          SecurityGroups: {
            type: 'list'
          },
          UserData: {
          },
          InstanceType: {
            required: true
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
                  required: true
                },
                Ebs: {
                  type: 'structure',
                  members: {
                    SnapshotId: {
                    },
                    VolumeSize: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          InstanceMonitoring: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              }
            }
          },
          SpotPrice: {
          },
          IamInstanceProfile: {
          },
          EbsOptimized: {
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
    createOrUpdateTags: {
      name: 'CreateOrUpdateTags',
      input: {
        type: 'structure',
        members: {
          Tags: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ResourceId: {
                },
                ResourceType: {
                },
                Key: {
                  required: true
                },
                Value: {
                },
                PropagateAtLaunch: {
                  type: 'boolean'
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
        }
      }
    },
    deleteAutoScalingGroup: {
      name: 'DeleteAutoScalingGroup',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          ForceDelete: {
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
    deleteLaunchConfiguration: {
      name: 'DeleteLaunchConfiguration',
      input: {
        type: 'structure',
        members: {
          LaunchConfigurationName: {
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
    deleteNotificationConfiguration: {
      name: 'DeleteNotificationConfiguration',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          TopicARN: {
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
    deletePolicy: {
      name: 'DeletePolicy',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
          },
          PolicyName: {
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
    deleteScheduledAction: {
      name: 'DeleteScheduledAction',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
          },
          ScheduledActionName: {
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
          Tags: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ResourceId: {
                },
                ResourceType: {
                },
                Key: {
                  required: true
                },
                Value: {
                },
                PropagateAtLaunch: {
                  type: 'boolean'
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
        }
      }
    },
    describeAdjustmentTypes: {
      name: 'DescribeAdjustmentTypes',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          AdjustmentTypes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AdjustmentType: {
                }
              }
            }
          }
        }
      }
    },
    describeAutoScalingGroups: {
      name: 'DescribeAutoScalingGroups',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupNames: {
            type: 'list'
          },
          NextToken: {
          },
          MaxRecords: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          AutoScalingGroups: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AutoScalingGroupName: {
                },
                AutoScalingGroupARN: {
                },
                LaunchConfigurationName: {
                },
                MinSize: {
                  type: 'integer'
                },
                MaxSize: {
                  type: 'integer'
                },
                DesiredCapacity: {
                  type: 'integer'
                },
                DefaultCooldown: {
                  type: 'integer'
                },
                AvailabilityZones: {
                  type: 'list'
                },
                LoadBalancerNames: {
                  type: 'list'
                },
                HealthCheckType: {
                },
                HealthCheckGracePeriod: {
                  type: 'integer'
                },
                Instances: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      InstanceId: {
                      },
                      AvailabilityZone: {
                      },
                      LifecycleState: {
                      },
                      HealthStatus: {
                      },
                      LaunchConfigurationName: {
                      }
                    }
                  }
                },
                CreatedTime: {
                  type: 'timestamp'
                },
                SuspendedProcesses: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      ProcessName: {
                      },
                      SuspensionReason: {
                      }
                    }
                  }
                },
                PlacementGroup: {
                },
                VPCZoneIdentifier: {
                },
                EnabledMetrics: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Metric: {
                      },
                      Granularity: {
                      }
                    }
                  }
                },
                Status: {
                },
                Tags: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      ResourceId: {
                      },
                      ResourceType: {
                      },
                      Key: {
                      },
                      Value: {
                      },
                      PropagateAtLaunch: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                TerminationPolicies: {
                  type: 'list'
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    describeAutoScalingInstances: {
      name: 'DescribeAutoScalingInstances',
      input: {
        type: 'structure',
        members: {
          InstanceIds: {
            type: 'list'
          },
          MaxRecords: {
            type: 'integer'
          },
          NextToken: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          AutoScalingInstances: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                InstanceId: {
                },
                AutoScalingGroupName: {
                },
                AvailabilityZone: {
                },
                LifecycleState: {
                },
                HealthStatus: {
                },
                LaunchConfigurationName: {
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    describeAutoScalingNotificationTypes: {
      name: 'DescribeAutoScalingNotificationTypes',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          AutoScalingNotificationTypes: {
            type: 'list'
          }
        }
      }
    },
    describeLaunchConfigurations: {
      name: 'DescribeLaunchConfigurations',
      input: {
        type: 'structure',
        members: {
          LaunchConfigurationNames: {
            type: 'list'
          },
          NextToken: {
          },
          MaxRecords: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LaunchConfigurations: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                LaunchConfigurationName: {
                },
                LaunchConfigurationARN: {
                },
                ImageId: {
                },
                KeyName: {
                },
                SecurityGroups: {
                  type: 'list'
                },
                UserData: {
                },
                InstanceType: {
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
                          }
                        }
                      }
                    }
                  }
                },
                InstanceMonitoring: {
                  type: 'structure',
                  members: {
                    Enabled: {
                      type: 'boolean'
                    }
                  }
                },
                SpotPrice: {
                },
                IamInstanceProfile: {
                },
                CreatedTime: {
                  type: 'timestamp'
                },
                EbsOptimized: {
                  type: 'boolean'
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    describeMetricCollectionTypes: {
      name: 'DescribeMetricCollectionTypes',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          Metrics: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Metric: {
                }
              }
            }
          },
          Granularities: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Granularity: {
                }
              }
            }
          }
        }
      }
    },
    describeNotificationConfigurations: {
      name: 'DescribeNotificationConfigurations',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupNames: {
            type: 'list'
          },
          NextToken: {
          },
          MaxRecords: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          NotificationConfigurations: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AutoScalingGroupName: {
                },
                TopicARN: {
                },
                NotificationType: {
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    describePolicies: {
      name: 'DescribePolicies',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
          },
          PolicyNames: {
            type: 'list'
          },
          NextToken: {
          },
          MaxRecords: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ScalingPolicies: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AutoScalingGroupName: {
                },
                PolicyName: {
                },
                ScalingAdjustment: {
                  type: 'integer'
                },
                AdjustmentType: {
                },
                Cooldown: {
                  type: 'integer'
                },
                PolicyARN: {
                },
                Alarms: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      AlarmName: {
                      },
                      AlarmARN: {
                      }
                    }
                  }
                },
                MinAdjustmentStep: {
                  type: 'integer'
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    describeScalingActivities: {
      name: 'DescribeScalingActivities',
      input: {
        type: 'structure',
        members: {
          ActivityIds: {
            type: 'list'
          },
          AutoScalingGroupName: {
          },
          MaxRecords: {
            type: 'integer'
          },
          NextToken: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Activities: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ActivityId: {
                },
                AutoScalingGroupName: {
                },
                Description: {
                },
                Cause: {
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                StatusCode: {
                },
                StatusMessage: {
                },
                Progress: {
                  type: 'integer'
                },
                Details: {
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    describeScalingProcessTypes: {
      name: 'DescribeScalingProcessTypes',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          Processes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ProcessName: {
                }
              }
            }
          }
        }
      }
    },
    describeScheduledActions: {
      name: 'DescribeScheduledActions',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
          },
          ScheduledActionNames: {
            type: 'list'
          },
          StartTime: {
            type: 'timestamp'
          },
          EndTime: {
            type: 'timestamp'
          },
          NextToken: {
          },
          MaxRecords: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ScheduledUpdateGroupActions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AutoScalingGroupName: {
                },
                ScheduledActionName: {
                },
                ScheduledActionARN: {
                },
                Time: {
                  type: 'timestamp'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Recurrence: {
                },
                MinSize: {
                  type: 'integer'
                },
                MaxSize: {
                  type: 'integer'
                },
                DesiredCapacity: {
                  type: 'integer'
                }
              }
            }
          },
          NextToken: {
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
                  type: 'list'
                }
              }
            }
          },
          NextToken: {
          },
          MaxRecords: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Tags: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ResourceId: {
                },
                ResourceType: {
                },
                Key: {
                },
                Value: {
                },
                PropagateAtLaunch: {
                  type: 'boolean'
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    describeTerminationPolicyTypes: {
      name: 'DescribeTerminationPolicyTypes',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          TerminationPolicyTypes: {
            type: 'list'
          }
        }
      }
    },
    disableMetricsCollection: {
      name: 'DisableMetricsCollection',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          Metrics: {
            type: 'list'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    enableMetricsCollection: {
      name: 'EnableMetricsCollection',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          Metrics: {
            type: 'list'
          },
          Granularity: {
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
    executePolicy: {
      name: 'ExecutePolicy',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
          },
          PolicyName: {
            required: true
          },
          HonorCooldown: {
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
    putNotificationConfiguration: {
      name: 'PutNotificationConfiguration',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          TopicARN: {
            required: true
          },
          NotificationTypes: {
            type: 'list',
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
    putScalingPolicy: {
      name: 'PutScalingPolicy',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          PolicyName: {
            required: true
          },
          ScalingAdjustment: {
            type: 'integer',
            required: true
          },
          AdjustmentType: {
            required: true
          },
          Cooldown: {
            type: 'integer'
          },
          MinAdjustmentStep: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          PolicyARN: {
          }
        }
      }
    },
    putScheduledUpdateGroupAction: {
      name: 'PutScheduledUpdateGroupAction',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          ScheduledActionName: {
            required: true
          },
          Time: {
            type: 'timestamp'
          },
          StartTime: {
            type: 'timestamp'
          },
          EndTime: {
            type: 'timestamp'
          },
          Recurrence: {
          },
          MinSize: {
            type: 'integer'
          },
          MaxSize: {
            type: 'integer'
          },
          DesiredCapacity: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    resumeProcesses: {
      name: 'ResumeProcesses',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          ScalingProcesses: {
            type: 'list'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    setDesiredCapacity: {
      name: 'SetDesiredCapacity',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          DesiredCapacity: {
            type: 'integer',
            required: true
          },
          HonorCooldown: {
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
    setInstanceHealth: {
      name: 'SetInstanceHealth',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          },
          HealthStatus: {
            required: true
          },
          ShouldRespectGracePeriod: {
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
    suspendProcesses: {
      name: 'SuspendProcesses',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          ScalingProcesses: {
            type: 'list'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    terminateInstanceInAutoScalingGroup: {
      name: 'TerminateInstanceInAutoScalingGroup',
      input: {
        type: 'structure',
        members: {
          InstanceId: {
            required: true
          },
          ShouldDecrementDesiredCapacity: {
            type: 'boolean',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Activity: {
            type: 'structure',
            members: {
              ActivityId: {
              },
              AutoScalingGroupName: {
              },
              Description: {
              },
              Cause: {
              },
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              StatusCode: {
              },
              StatusMessage: {
              },
              Progress: {
                type: 'integer'
              },
              Details: {
              }
            }
          }
        }
      }
    },
    updateAutoScalingGroup: {
      name: 'UpdateAutoScalingGroup',
      input: {
        type: 'structure',
        members: {
          AutoScalingGroupName: {
            required: true
          },
          LaunchConfigurationName: {
          },
          MinSize: {
            type: 'integer'
          },
          MaxSize: {
            type: 'integer'
          },
          DesiredCapacity: {
            type: 'integer'
          },
          DefaultCooldown: {
            type: 'integer'
          },
          AvailabilityZones: {
            type: 'list'
          },
          HealthCheckType: {
          },
          HealthCheckGracePeriod: {
            type: 'integer'
          },
          PlacementGroup: {
          },
          VPCZoneIdentifier: {
          },
          TerminationPolicies: {
            type: 'list'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    }
  }
};
