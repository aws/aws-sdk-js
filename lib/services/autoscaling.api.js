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
  signatureVersion: 'v4',
  serviceName: 'autoscaling',
  resultWrapped: true,
  apiVersion: '2011-01-01',
  timestampFormat: 'iso8601',
  operations: {
    createAutoScalingGroup: {
      n: 'CreateAutoScalingGroup',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          LaunchConfigurationName: {
            r: 1
          },
          MinSize: {
            t: 'i',
            r: 1
          },
          MaxSize: {
            t: 'i',
            r: 1
          },
          DesiredCapacity: {
            t: 'i'
          },
          DefaultCooldown: {
            t: 'i'
          },
          AvailabilityZones: {
            t: 'a'
          },
          LoadBalancerNames: {
            t: 'a'
          },
          HealthCheckType: {
          },
          HealthCheckGracePeriod: {
            t: 'i'
          },
          PlacementGroup: {
          },
          VPCZoneIdentifier: {
          },
          TerminationPolicies: {
            t: 'a'
          },
          Tags: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                ResourceId: {
                },
                ResourceType: {
                },
                Key: {
                  r: 1
                },
                Value: {
                },
                PropagateAtLaunch: {
                  t: 'b'
                }
              }
            }
          }
        }
      }
    },
    createLaunchConfiguration: {
      n: 'CreateLaunchConfiguration',
      i: {
        m: {
          LaunchConfigurationName: {
            r: 1
          },
          ImageId: {
            r: 1
          },
          KeyName: {
          },
          SecurityGroups: {
            t: 'a'
          },
          UserData: {
          },
          InstanceType: {
            r: 1
          },
          KernelId: {
          },
          RamdiskId: {
          },
          BlockDeviceMappings: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                VirtualName: {
                },
                DeviceName: {
                  r: 1
                },
                Ebs: {
                  t: 'o',
                  m: {
                    SnapshotId: {
                    },
                    VolumeSize: {
                      t: 'i'
                    }
                  }
                }
              }
            }
          },
          InstanceMonitoring: {
            t: 'o',
            m: {
              Enabled: {
                t: 'b'
              }
            }
          },
          SpotPrice: {
          },
          IamInstanceProfile: {
          },
          EbsOptimized: {
            t: 'b'
          }
        }
      }
    },
    createOrUpdateTags: {
      n: 'CreateOrUpdateTags',
      i: {
        m: {
          Tags: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                ResourceId: {
                },
                ResourceType: {
                },
                Key: {
                  r: 1
                },
                Value: {
                },
                PropagateAtLaunch: {
                  t: 'b'
                }
              }
            },
            r: 1
          }
        }
      }
    },
    deleteAutoScalingGroup: {
      n: 'DeleteAutoScalingGroup',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          ForceDelete: {
            t: 'b'
          }
        }
      }
    },
    deleteLaunchConfiguration: {
      n: 'DeleteLaunchConfiguration',
      i: {
        m: {
          LaunchConfigurationName: {
            r: 1
          }
        }
      }
    },
    deleteNotificationConfiguration: {
      n: 'DeleteNotificationConfiguration',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          TopicARN: {
            r: 1
          }
        }
      }
    },
    deletePolicy: {
      n: 'DeletePolicy',
      i: {
        m: {
          AutoScalingGroupName: {
          },
          PolicyName: {
            r: 1
          }
        }
      }
    },
    deleteScheduledAction: {
      n: 'DeleteScheduledAction',
      i: {
        m: {
          AutoScalingGroupName: {
          },
          ScheduledActionName: {
            r: 1
          }
        }
      }
    },
    deleteTags: {
      n: 'DeleteTags',
      i: {
        m: {
          Tags: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                ResourceId: {
                },
                ResourceType: {
                },
                Key: {
                  r: 1
                },
                Value: {
                },
                PropagateAtLaunch: {
                  t: 'b'
                }
              }
            },
            r: 1
          }
        }
      }
    },
    describeAdjustmentTypes: {
      n: 'DescribeAdjustmentTypes',
      o: {
        AdjustmentTypes: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              AdjustmentType: {
              }
            }
          }
        }
      }
    },
    describeAutoScalingGroups: {
      n: 'DescribeAutoScalingGroups',
      i: {
        m: {
          AutoScalingGroupNames: {
            t: 'a'
          },
          NextToken: {
          },
          MaxRecords: {
            t: 'i'
          }
        }
      },
      o: {
        AutoScalingGroups: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              AutoScalingGroupName: {
              },
              AutoScalingGroupARN: {
              },
              LaunchConfigurationName: {
              },
              MinSize: {
                t: 'i'
              },
              MaxSize: {
                t: 'i'
              },
              DesiredCapacity: {
                t: 'i'
              },
              DefaultCooldown: {
                t: 'i'
              },
              AvailabilityZones: {
                t: 'a'
              },
              LoadBalancerNames: {
                t: 'a'
              },
              HealthCheckType: {
              },
              HealthCheckGracePeriod: {
                t: 'i'
              },
              Instances: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
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
                t: 't'
              },
              SuspendedProcesses: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
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
                t: 'a',
                m: {
                  t: 'o',
                  m: {
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
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    ResourceId: {
                    },
                    ResourceType: {
                    },
                    Key: {
                    },
                    Value: {
                    },
                    PropagateAtLaunch: {
                      t: 'b'
                    }
                  }
                }
              },
              TerminationPolicies: {
                t: 'a'
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    describeAutoScalingInstances: {
      n: 'DescribeAutoScalingInstances',
      i: {
        m: {
          InstanceIds: {
            t: 'a'
          },
          MaxRecords: {
            t: 'i'
          },
          NextToken: {
          }
        }
      },
      o: {
        AutoScalingInstances: {
          t: 'a',
          m: {
            t: 'o',
            m: {
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
    },
    describeAutoScalingNotificationTypes: {
      n: 'DescribeAutoScalingNotificationTypes',
      o: {
        AutoScalingNotificationTypes: {
          t: 'a'
        }
      }
    },
    describeLaunchConfigurations: {
      n: 'DescribeLaunchConfigurations',
      i: {
        m: {
          LaunchConfigurationNames: {
            t: 'a'
          },
          NextToken: {
          },
          MaxRecords: {
            t: 'i'
          }
        }
      },
      o: {
        LaunchConfigurations: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              LaunchConfigurationName: {
              },
              LaunchConfigurationARN: {
              },
              ImageId: {
              },
              KeyName: {
              },
              SecurityGroups: {
                t: 'a'
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
                t: 'a',
                m: {
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
                        }
                      }
                    }
                  }
                }
              },
              InstanceMonitoring: {
                t: 'o',
                m: {
                  Enabled: {
                    t: 'b'
                  }
                }
              },
              SpotPrice: {
              },
              IamInstanceProfile: {
              },
              CreatedTime: {
                t: 't'
              },
              EbsOptimized: {
                t: 'b'
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    describeMetricCollectionTypes: {
      n: 'DescribeMetricCollectionTypes',
      o: {
        Metrics: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Metric: {
              }
            }
          }
        },
        Granularities: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Granularity: {
              }
            }
          }
        }
      }
    },
    describeNotificationConfigurations: {
      n: 'DescribeNotificationConfigurations',
      i: {
        m: {
          AutoScalingGroupNames: {
            t: 'a'
          },
          NextToken: {
          },
          MaxRecords: {
            t: 'i'
          }
        }
      },
      o: {
        NotificationConfigurations: {
          t: 'a',
          m: {
            t: 'o',
            m: {
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
    },
    describePolicies: {
      n: 'DescribePolicies',
      i: {
        m: {
          AutoScalingGroupName: {
          },
          PolicyNames: {
            t: 'a'
          },
          NextToken: {
          },
          MaxRecords: {
            t: 'i'
          }
        }
      },
      o: {
        ScalingPolicies: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              AutoScalingGroupName: {
              },
              PolicyName: {
              },
              ScalingAdjustment: {
                t: 'i'
              },
              AdjustmentType: {
              },
              Cooldown: {
                t: 'i'
              },
              PolicyARN: {
              },
              Alarms: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    AlarmName: {
                    },
                    AlarmARN: {
                    }
                  }
                }
              },
              MinAdjustmentStep: {
                t: 'i'
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    describeScalingActivities: {
      n: 'DescribeScalingActivities',
      i: {
        m: {
          ActivityIds: {
            t: 'a'
          },
          AutoScalingGroupName: {
          },
          MaxRecords: {
            t: 'i'
          },
          NextToken: {
          }
        }
      },
      o: {
        Activities: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              ActivityId: {
              },
              AutoScalingGroupName: {
              },
              Description: {
              },
              Cause: {
              },
              StartTime: {
                t: 't'
              },
              EndTime: {
                t: 't'
              },
              StatusCode: {
              },
              StatusMessage: {
              },
              Progress: {
                t: 'i'
              },
              Details: {
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    describeScalingProcessTypes: {
      n: 'DescribeScalingProcessTypes',
      o: {
        Processes: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              ProcessName: {
              }
            }
          }
        }
      }
    },
    describeScheduledActions: {
      n: 'DescribeScheduledActions',
      i: {
        m: {
          AutoScalingGroupName: {
          },
          ScheduledActionNames: {
            t: 'a'
          },
          StartTime: {
            t: 't'
          },
          EndTime: {
            t: 't'
          },
          NextToken: {
          },
          MaxRecords: {
            t: 'i'
          }
        }
      },
      o: {
        ScheduledUpdateGroupActions: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              AutoScalingGroupName: {
              },
              ScheduledActionName: {
              },
              ScheduledActionARN: {
              },
              Time: {
                t: 't'
              },
              StartTime: {
                t: 't'
              },
              EndTime: {
                t: 't'
              },
              Recurrence: {
              },
              MinSize: {
                t: 'i'
              },
              MaxSize: {
                t: 'i'
              },
              DesiredCapacity: {
                t: 'i'
              }
            }
          }
        },
        NextToken: {
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
              t: 'o',
              m: {
                Name: {
                },
                Values: {
                  t: 'a'
                }
              }
            }
          },
          NextToken: {
          },
          MaxRecords: {
            t: 'i'
          }
        }
      },
      o: {
        Tags: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              ResourceId: {
              },
              ResourceType: {
              },
              Key: {
              },
              Value: {
              },
              PropagateAtLaunch: {
                t: 'b'
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    describeTerminationPolicyTypes: {
      n: 'DescribeTerminationPolicyTypes',
      o: {
        TerminationPolicyTypes: {
          t: 'a'
        }
      }
    },
    disableMetricsCollection: {
      n: 'DisableMetricsCollection',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          Metrics: {
            t: 'a'
          }
        }
      }
    },
    enableMetricsCollection: {
      n: 'EnableMetricsCollection',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          Metrics: {
            t: 'a'
          },
          Granularity: {
            r: 1
          }
        }
      }
    },
    executePolicy: {
      n: 'ExecutePolicy',
      i: {
        m: {
          AutoScalingGroupName: {
          },
          PolicyName: {
            r: 1
          },
          HonorCooldown: {
            t: 'b'
          }
        }
      }
    },
    putNotificationConfiguration: {
      n: 'PutNotificationConfiguration',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          TopicARN: {
            r: 1
          },
          NotificationTypes: {
            t: 'a',
            r: 1
          }
        }
      }
    },
    putScalingPolicy: {
      n: 'PutScalingPolicy',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          PolicyName: {
            r: 1
          },
          ScalingAdjustment: {
            t: 'i',
            r: 1
          },
          AdjustmentType: {
            r: 1
          },
          Cooldown: {
            t: 'i'
          },
          MinAdjustmentStep: {
            t: 'i'
          }
        }
      },
      o: {
        PolicyARN: {
        }
      }
    },
    putScheduledUpdateGroupAction: {
      n: 'PutScheduledUpdateGroupAction',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          ScheduledActionName: {
            r: 1
          },
          Time: {
            t: 't'
          },
          StartTime: {
            t: 't'
          },
          EndTime: {
            t: 't'
          },
          Recurrence: {
          },
          MinSize: {
            t: 'i'
          },
          MaxSize: {
            t: 'i'
          },
          DesiredCapacity: {
            t: 'i'
          }
        }
      }
    },
    resumeProcesses: {
      n: 'ResumeProcesses',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          ScalingProcesses: {
            t: 'a'
          }
        }
      }
    },
    setDesiredCapacity: {
      n: 'SetDesiredCapacity',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          DesiredCapacity: {
            t: 'i',
            r: 1
          },
          HonorCooldown: {
            t: 'b'
          }
        }
      }
    },
    setInstanceHealth: {
      n: 'SetInstanceHealth',
      i: {
        m: {
          InstanceId: {
            r: 1
          },
          HealthStatus: {
            r: 1
          },
          ShouldRespectGracePeriod: {
            t: 'b'
          }
        }
      }
    },
    suspendProcesses: {
      n: 'SuspendProcesses',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          ScalingProcesses: {
            t: 'a'
          }
        }
      }
    },
    terminateInstanceInAutoScalingGroup: {
      n: 'TerminateInstanceInAutoScalingGroup',
      i: {
        m: {
          InstanceId: {
            r: 1
          },
          ShouldDecrementDesiredCapacity: {
            t: 'b',
            r: 1
          }
        }
      },
      o: {
        Activity: {
          t: 'o',
          m: {
            ActivityId: {
            },
            AutoScalingGroupName: {
            },
            Description: {
            },
            Cause: {
            },
            StartTime: {
              t: 't'
            },
            EndTime: {
              t: 't'
            },
            StatusCode: {
            },
            StatusMessage: {
            },
            Progress: {
              t: 'i'
            },
            Details: {
            }
          }
        }
      }
    },
    updateAutoScalingGroup: {
      n: 'UpdateAutoScalingGroup',
      i: {
        m: {
          AutoScalingGroupName: {
            r: 1
          },
          LaunchConfigurationName: {
          },
          MinSize: {
            t: 'i'
          },
          MaxSize: {
            t: 'i'
          },
          DesiredCapacity: {
            t: 'i'
          },
          DefaultCooldown: {
            t: 'i'
          },
          AvailabilityZones: {
            t: 'a'
          },
          HealthCheckType: {
          },
          HealthCheckGracePeriod: {
            t: 'i'
          },
          PlacementGroup: {
          },
          VPCZoneIdentifier: {
          },
          TerminationPolicies: {
            t: 'a'
          }
        }
      }
    }
  }
};
