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
  apiVersion: '2012-06-30',
  endpointPrefix: 'storagegateway',
  jsonVersion: '1.1',
  serviceFullName: 'AWS Storage Gateway',
  signatureVersion: 'v4',
  targetPrefix: 'StorageGateway_20120630',
  timestampFormat: 'iso8601',
  operations: {
    activateGateway: {
      name: 'ActivateGateway',
      input: {
        type: 'structure',
        members: {
          ActivationKey: {
            required: true
          },
          GatewayName: {
            required: true
          },
          GatewayTimezone: {
            required: true
          },
          GatewayRegion: {
            required: true
          },
          GatewayType: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    addCache: {
      name: 'AddCache',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          },
          DiskIds: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    addUploadBuffer: {
      name: 'AddUploadBuffer',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          },
          DiskIds: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    addWorkingStorage: {
      name: 'AddWorkingStorage',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          },
          DiskIds: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    createCachediSCSIVolume: {
      name: 'CreateCachediSCSIVolume',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          },
          VolumeSizeInBytes: {
            type: 'integer',
            required: true
          },
          SnapshotId: {
          },
          TargetName: {
            required: true
          },
          NetworkInterfaceId: {
            required: true
          },
          ClientToken: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VolumeARN: {
          },
          TargetARN: {
          }
        }
      }
    },
    createSnapshot: {
      name: 'CreateSnapshot',
      input: {
        type: 'structure',
        members: {
          VolumeARN: {
            required: true
          },
          SnapshotDescription: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VolumeARN: {
          },
          SnapshotId: {
          }
        }
      }
    },
    createSnapshotFromVolumeRecoveryPoint: {
      name: 'CreateSnapshotFromVolumeRecoveryPoint',
      input: {
        type: 'structure',
        members: {
          VolumeARN: {
            required: true
          },
          SnapshotDescription: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          SnapshotId: {
          },
          VolumeARN: {
          },
          VolumeRecoveryPointTime: {
          }
        }
      }
    },
    createStorediSCSIVolume: {
      name: 'CreateStorediSCSIVolume',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          },
          DiskId: {
            required: true
          },
          SnapshotId: {
          },
          PreserveExistingData: {
            type: 'boolean',
            required: true
          },
          TargetName: {
            required: true
          },
          NetworkInterfaceId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VolumeARN: {
          },
          VolumeSizeInBytes: {
            type: 'integer'
          },
          TargetARN: {
          }
        }
      }
    },
    deleteBandwidthRateLimit: {
      name: 'DeleteBandwidthRateLimit',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          },
          BandwidthType: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    deleteChapCredentials: {
      name: 'DeleteChapCredentials',
      input: {
        type: 'structure',
        members: {
          TargetARN: {
            required: true
          },
          InitiatorName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TargetARN: {
          },
          InitiatorName: {
          }
        }
      }
    },
    deleteGateway: {
      name: 'DeleteGateway',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    deleteSnapshotSchedule: {
      name: 'DeleteSnapshotSchedule',
      input: {
        type: 'structure',
        members: {
          VolumeARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VolumeARN: {
          }
        }
      }
    },
    deleteVolume: {
      name: 'DeleteVolume',
      input: {
        type: 'structure',
        members: {
          VolumeARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VolumeARN: {
          }
        }
      }
    },
    describeBandwidthRateLimit: {
      name: 'DescribeBandwidthRateLimit',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          },
          AverageUploadRateLimitInBitsPerSec: {
            type: 'integer'
          },
          AverageDownloadRateLimitInBitsPerSec: {
            type: 'integer'
          }
        }
      }
    },
    describeCache: {
      name: 'DescribeCache',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          },
          DiskIds: {
            type: 'list'
          },
          CacheAllocatedInBytes: {
            type: 'integer'
          },
          CacheUsedPercentage: {
            type: 'float'
          },
          CacheDirtyPercentage: {
            type: 'float'
          },
          CacheHitPercentage: {
            type: 'float'
          },
          CacheMissPercentage: {
            type: 'float'
          }
        }
      }
    },
    describeCachediSCSIVolumes: {
      name: 'DescribeCachediSCSIVolumes',
      input: {
        type: 'structure',
        members: {
          VolumeARNs: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CachediSCSIVolumes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                VolumeARN: {
                },
                VolumeId: {
                },
                VolumeType: {
                },
                VolumeStatus: {
                },
                VolumeSizeInBytes: {
                  type: 'integer'
                },
                VolumeProgress: {
                  type: 'float'
                },
                SourceSnapshotId: {
                },
                VolumeiSCSIAttributes: {
                  type: 'structure',
                  members: {
                    TargetARN: {
                    },
                    NetworkInterfaceId: {
                    },
                    NetworkInterfacePort: {
                      type: 'integer'
                    },
                    LunNumber: {
                      type: 'integer'
                    },
                    ChapEnabled: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeChapCredentials: {
      name: 'DescribeChapCredentials',
      input: {
        type: 'structure',
        members: {
          TargetARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ChapCredentials: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                TargetARN: {
                },
                SecretToAuthenticateInitiator: {
                },
                InitiatorName: {
                },
                SecretToAuthenticateTarget: {
                }
              }
            }
          }
        }
      }
    },
    describeGatewayInformation: {
      name: 'DescribeGatewayInformation',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          },
          GatewayId: {
          },
          GatewayTimezone: {
          },
          GatewayState: {
          },
          GatewayNetworkInterfaces: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Ipv4Address: {
                },
                MacAddress: {
                },
                Ipv6Address: {
                }
              }
            }
          },
          GatewayType: {
          },
          NextUpdateAvailabilityDate: {
          }
        }
      }
    },
    describeMaintenanceStartTime: {
      name: 'DescribeMaintenanceStartTime',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          },
          HourOfDay: {
            type: 'integer'
          },
          MinuteOfHour: {
            type: 'integer'
          },
          DayOfWeek: {
            type: 'integer'
          },
          Timezone: {
          }
        }
      }
    },
    describeSnapshotSchedule: {
      name: 'DescribeSnapshotSchedule',
      input: {
        type: 'structure',
        members: {
          VolumeARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VolumeARN: {
          },
          StartAt: {
            type: 'integer'
          },
          RecurrenceInHours: {
            type: 'integer'
          },
          Description: {
          },
          Timezone: {
          }
        }
      }
    },
    describeStorediSCSIVolumes: {
      name: 'DescribeStorediSCSIVolumes',
      input: {
        type: 'structure',
        members: {
          VolumeARNs: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          StorediSCSIVolumes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                VolumeARN: {
                },
                VolumeId: {
                },
                VolumeType: {
                },
                VolumeStatus: {
                },
                VolumeSizeInBytes: {
                  type: 'integer'
                },
                VolumeProgress: {
                  type: 'float'
                },
                VolumeDiskId: {
                },
                SourceSnapshotId: {
                },
                PreservedExistingData: {
                  type: 'boolean'
                },
                VolumeiSCSIAttributes: {
                  type: 'structure',
                  members: {
                    TargetARN: {
                    },
                    NetworkInterfaceId: {
                    },
                    NetworkInterfacePort: {
                      type: 'integer'
                    },
                    LunNumber: {
                      type: 'integer'
                    },
                    ChapEnabled: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeUploadBuffer: {
      name: 'DescribeUploadBuffer',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          },
          DiskIds: {
            type: 'list'
          },
          UploadBufferUsedInBytes: {
            type: 'integer'
          },
          UploadBufferAllocatedInBytes: {
            type: 'integer'
          }
        }
      }
    },
    describeWorkingStorage: {
      name: 'DescribeWorkingStorage',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          },
          DiskIds: {
            type: 'list'
          },
          WorkingStorageUsedInBytes: {
            type: 'integer'
          },
          WorkingStorageAllocatedInBytes: {
            type: 'integer'
          }
        }
      }
    },
    listGateways: {
      name: 'ListGateways',
      input: {
        type: 'structure',
        members: {
          Marker: {
          },
          Limit: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Gateways: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                GatewayARN: {
                }
              }
            }
          },
          Marker: {
          }
        }
      }
    },
    listLocalDisks: {
      name: 'ListLocalDisks',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          },
          Disks: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                DiskId: {
                },
                DiskPath: {
                },
                DiskNode: {
                },
                DiskSizeInBytes: {
                  type: 'integer'
                },
                DiskAllocationType: {
                },
                DiskAllocationResource: {
                }
              }
            }
          }
        }
      }
    },
    listVolumeRecoveryPoints: {
      name: 'ListVolumeRecoveryPoints',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          },
          VolumeRecoveryPointInfos: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                VolumeARN: {
                },
                VolumeSizeInBytes: {
                  type: 'integer'
                },
                VolumeUsageInBytes: {
                  type: 'integer'
                },
                VolumeRecoveryPointTime: {
                }
              }
            }
          }
        }
      }
    },
    listVolumes: {
      name: 'ListVolumes',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          },
          Marker: {
          },
          Limit: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          },
          Marker: {
          },
          VolumeInfos: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                VolumeARN: {
                },
                VolumeType: {
                }
              }
            }
          }
        }
      }
    },
    shutdownGateway: {
      name: 'ShutdownGateway',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    startGateway: {
      name: 'StartGateway',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    updateBandwidthRateLimit: {
      name: 'UpdateBandwidthRateLimit',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          },
          AverageUploadRateLimitInBitsPerSec: {
            type: 'integer'
          },
          AverageDownloadRateLimitInBitsPerSec: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    updateChapCredentials: {
      name: 'UpdateChapCredentials',
      input: {
        type: 'structure',
        members: {
          TargetARN: {
            required: true
          },
          SecretToAuthenticateInitiator: {
            required: true
          },
          InitiatorName: {
            required: true
          },
          SecretToAuthenticateTarget: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TargetARN: {
          },
          InitiatorName: {
          }
        }
      }
    },
    updateGatewayInformation: {
      name: 'UpdateGatewayInformation',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          },
          GatewayName: {
          },
          GatewayTimezone: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    updateGatewaySoftwareNow: {
      name: 'UpdateGatewaySoftwareNow',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    updateMaintenanceStartTime: {
      name: 'UpdateMaintenanceStartTime',
      input: {
        type: 'structure',
        members: {
          GatewayARN: {
            required: true
          },
          HourOfDay: {
            type: 'integer',
            required: true
          },
          MinuteOfHour: {
            type: 'integer',
            required: true
          },
          DayOfWeek: {
            type: 'integer',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          GatewayARN: {
          }
        }
      }
    },
    updateSnapshotSchedule: {
      name: 'UpdateSnapshotSchedule',
      input: {
        type: 'structure',
        members: {
          VolumeARN: {
            required: true
          },
          StartAt: {
            type: 'integer',
            required: true
          },
          RecurrenceInHours: {
            type: 'integer',
            required: true
          },
          Description: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VolumeARN: {
          }
        }
      }
    }
  }
};
