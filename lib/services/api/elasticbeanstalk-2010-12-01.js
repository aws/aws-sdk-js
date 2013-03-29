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
  apiVersion: '2010-12-01',
  endpointPrefix: 'elasticbeanstalk',
  resultWrapped: true,
  serviceAbbreviation: 'Elastic Beanstalk',
  serviceFullName: 'AWS Elastic Beanstalk',
  signatureVersion: 'v4',
  timestampFormat: 'iso8601',
  operations: {
    checkDNSAvailability: {
      name: 'CheckDNSAvailability',
      input: {
        type: 'structure',
        members: {
          CNAMEPrefix: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Available: {
            type: 'boolean'
          },
          FullyQualifiedCNAME: {
          }
        }
      }
    },
    createApplication: {
      name: 'CreateApplication',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          Description: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Application: {
            type: 'structure',
            members: {
              ApplicationName: {
              },
              Description: {
              },
              DateCreated: {
                type: 'timestamp'
              },
              DateUpdated: {
                type: 'timestamp'
              },
              Versions: {
                type: 'list'
              },
              ConfigurationTemplates: {
                type: 'list'
              }
            }
          }
        }
      }
    },
    createApplicationVersion: {
      name: 'CreateApplicationVersion',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          VersionLabel: {
            required: true
          },
          Description: {
          },
          SourceBundle: {
            type: 'structure',
            members: {
              S3Bucket: {
              },
              S3Key: {
              }
            }
          },
          AutoCreateApplication: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ApplicationVersion: {
            type: 'structure',
            members: {
              ApplicationName: {
              },
              Description: {
              },
              VersionLabel: {
              },
              SourceBundle: {
                type: 'structure',
                members: {
                  S3Bucket: {
                  },
                  S3Key: {
                  }
                }
              },
              DateCreated: {
                type: 'timestamp'
              },
              DateUpdated: {
                type: 'timestamp'
              }
            }
          }
        }
      }
    },
    createConfigurationTemplate: {
      name: 'CreateConfigurationTemplate',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          TemplateName: {
            required: true
          },
          SolutionStackName: {
          },
          SourceConfiguration: {
            type: 'structure',
            members: {
              ApplicationName: {
              },
              TemplateName: {
              }
            }
          },
          EnvironmentId: {
          },
          Description: {
          },
          OptionSettings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                },
                Value: {
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          SolutionStackName: {
          },
          ApplicationName: {
          },
          TemplateName: {
          },
          Description: {
          },
          EnvironmentName: {
          },
          DeploymentStatus: {
          },
          DateCreated: {
            type: 'timestamp'
          },
          DateUpdated: {
            type: 'timestamp'
          },
          OptionSettings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                },
                Value: {
                }
              }
            }
          }
        }
      }
    },
    createEnvironment: {
      name: 'CreateEnvironment',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          VersionLabel: {
          },
          EnvironmentName: {
            required: true
          },
          TemplateName: {
          },
          SolutionStackName: {
          },
          CNAMEPrefix: {
          },
          Description: {
          },
          OptionSettings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                },
                Value: {
                }
              }
            }
          },
          OptionsToRemove: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          EnvironmentName: {
          },
          EnvironmentId: {
          },
          ApplicationName: {
          },
          VersionLabel: {
          },
          SolutionStackName: {
          },
          TemplateName: {
          },
          Description: {
          },
          EndpointURL: {
          },
          CNAME: {
          },
          DateCreated: {
            type: 'timestamp'
          },
          DateUpdated: {
            type: 'timestamp'
          },
          Status: {
          },
          Health: {
          },
          Resources: {
            type: 'structure',
            members: {
              LoadBalancer: {
                type: 'structure',
                members: {
                  LoadBalancerName: {
                  },
                  Domain: {
                  },
                  Listeners: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        Protocol: {
                        },
                        Port: {
                          type: 'integer'
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
    createStorageLocation: {
      name: 'CreateStorageLocation',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          S3Bucket: {
          }
        }
      }
    },
    deleteApplication: {
      name: 'DeleteApplication',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          TerminateEnvByForce: {
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
    deleteApplicationVersion: {
      name: 'DeleteApplicationVersion',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          VersionLabel: {
            required: true
          },
          DeleteSourceBundle: {
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
    deleteConfigurationTemplate: {
      name: 'DeleteConfigurationTemplate',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          TemplateName: {
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
    deleteEnvironmentConfiguration: {
      name: 'DeleteEnvironmentConfiguration',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          EnvironmentName: {
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
    describeApplicationVersions: {
      name: 'DescribeApplicationVersions',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
          },
          VersionLabels: {
            type: 'list'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ApplicationVersions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ApplicationName: {
                },
                Description: {
                },
                VersionLabel: {
                },
                SourceBundle: {
                  type: 'structure',
                  members: {
                    S3Bucket: {
                    },
                    S3Key: {
                    }
                  }
                },
                DateCreated: {
                  type: 'timestamp'
                },
                DateUpdated: {
                  type: 'timestamp'
                }
              }
            }
          }
        }
      }
    },
    describeApplications: {
      name: 'DescribeApplications',
      input: {
        type: 'structure',
        members: {
          ApplicationNames: {
            type: 'list'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Applications: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ApplicationName: {
                },
                Description: {
                },
                DateCreated: {
                  type: 'timestamp'
                },
                DateUpdated: {
                  type: 'timestamp'
                },
                Versions: {
                  type: 'list'
                },
                ConfigurationTemplates: {
                  type: 'list'
                }
              }
            }
          }
        }
      }
    },
    describeConfigurationOptions: {
      name: 'DescribeConfigurationOptions',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
          },
          TemplateName: {
          },
          EnvironmentName: {
          },
          SolutionStackName: {
          },
          Options: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          SolutionStackName: {
          },
          Options: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                Name: {
                },
                DefaultValue: {
                },
                ChangeSeverity: {
                },
                UserDefined: {
                  type: 'boolean'
                },
                ValueType: {
                },
                ValueOptions: {
                  type: 'list'
                },
                MinValue: {
                  type: 'integer'
                },
                MaxValue: {
                  type: 'integer'
                },
                MaxLength: {
                  type: 'integer'
                },
                Regex: {
                  type: 'structure',
                  members: {
                    Pattern: {
                    },
                    Label: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeConfigurationSettings: {
      name: 'DescribeConfigurationSettings',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          TemplateName: {
          },
          EnvironmentName: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ConfigurationSettings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                SolutionStackName: {
                },
                ApplicationName: {
                },
                TemplateName: {
                },
                Description: {
                },
                EnvironmentName: {
                },
                DeploymentStatus: {
                },
                DateCreated: {
                  type: 'timestamp'
                },
                DateUpdated: {
                  type: 'timestamp'
                },
                OptionSettings: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Namespace: {
                      },
                      OptionName: {
                      },
                      Value: {
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
    describeEnvironmentResources: {
      name: 'DescribeEnvironmentResources',
      input: {
        type: 'structure',
        members: {
          EnvironmentId: {
          },
          EnvironmentName: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          EnvironmentResources: {
            type: 'structure',
            members: {
              EnvironmentName: {
              },
              AutoScalingGroups: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Name: {
                    }
                  }
                }
              },
              Instances: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Id: {
                    }
                  }
                }
              },
              LaunchConfigurations: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Name: {
                    }
                  }
                }
              },
              LoadBalancers: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Name: {
                    }
                  }
                }
              },
              Triggers: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Name: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeEnvironments: {
      name: 'DescribeEnvironments',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
          },
          VersionLabel: {
          },
          EnvironmentIds: {
            type: 'list'
          },
          EnvironmentNames: {
            type: 'list'
          },
          IncludeDeleted: {
            type: 'boolean'
          },
          IncludedDeletedBackTo: {
            type: 'timestamp'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Environments: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                EnvironmentName: {
                },
                EnvironmentId: {
                },
                ApplicationName: {
                },
                VersionLabel: {
                },
                SolutionStackName: {
                },
                TemplateName: {
                },
                Description: {
                },
                EndpointURL: {
                },
                CNAME: {
                },
                DateCreated: {
                  type: 'timestamp'
                },
                DateUpdated: {
                  type: 'timestamp'
                },
                Status: {
                },
                Health: {
                },
                Resources: {
                  type: 'structure',
                  members: {
                    LoadBalancer: {
                      type: 'structure',
                      members: {
                        LoadBalancerName: {
                        },
                        Domain: {
                        },
                        Listeners: {
                          type: 'list',
                          members: {
                            type: 'structure',
                            members: {
                              Protocol: {
                              },
                              Port: {
                                type: 'integer'
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
          }
        }
      }
    },
    describeEvents: {
      name: 'DescribeEvents',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
          },
          VersionLabel: {
          },
          TemplateName: {
          },
          EnvironmentId: {
          },
          EnvironmentName: {
          },
          RequestId: {
          },
          Severity: {
          },
          StartTime: {
            type: 'timestamp'
          },
          EndTime: {
            type: 'timestamp'
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
          Events: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                EventDate: {
                  type: 'timestamp'
                },
                Message: {
                },
                ApplicationName: {
                },
                VersionLabel: {
                },
                TemplateName: {
                },
                EnvironmentName: {
                },
                RequestId: {
                },
                Severity: {
                }
              }
            }
          },
          NextToken: {
          }
        }
      }
    },
    listAvailableSolutionStacks: {
      name: 'ListAvailableSolutionStacks',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          SolutionStacks: {
            type: 'list'
          },
          SolutionStackDetails: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                SolutionStackName: {
                },
                PermittedFileTypes: {
                  type: 'list'
                }
              }
            }
          }
        }
      }
    },
    rebuildEnvironment: {
      name: 'RebuildEnvironment',
      input: {
        type: 'structure',
        members: {
          EnvironmentId: {
          },
          EnvironmentName: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    requestEnvironmentInfo: {
      name: 'RequestEnvironmentInfo',
      input: {
        type: 'structure',
        members: {
          EnvironmentId: {
          },
          EnvironmentName: {
          },
          InfoType: {
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
    restartAppServer: {
      name: 'RestartAppServer',
      input: {
        type: 'structure',
        members: {
          EnvironmentId: {
          },
          EnvironmentName: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    retrieveEnvironmentInfo: {
      name: 'RetrieveEnvironmentInfo',
      input: {
        type: 'structure',
        members: {
          EnvironmentId: {
          },
          EnvironmentName: {
          },
          InfoType: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          EnvironmentInfo: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                InfoType: {
                },
                Ec2InstanceId: {
                },
                SampleTimestamp: {
                  type: 'timestamp'
                },
                Message: {
                }
              }
            }
          }
        }
      }
    },
    swapEnvironmentCNAMEs: {
      name: 'SwapEnvironmentCNAMEs',
      input: {
        type: 'structure',
        members: {
          SourceEnvironmentId: {
          },
          SourceEnvironmentName: {
          },
          DestinationEnvironmentId: {
          },
          DestinationEnvironmentName: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    terminateEnvironment: {
      name: 'TerminateEnvironment',
      input: {
        type: 'structure',
        members: {
          EnvironmentId: {
          },
          EnvironmentName: {
          },
          TerminateResources: {
            type: 'boolean'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          EnvironmentName: {
          },
          EnvironmentId: {
          },
          ApplicationName: {
          },
          VersionLabel: {
          },
          SolutionStackName: {
          },
          TemplateName: {
          },
          Description: {
          },
          EndpointURL: {
          },
          CNAME: {
          },
          DateCreated: {
            type: 'timestamp'
          },
          DateUpdated: {
            type: 'timestamp'
          },
          Status: {
          },
          Health: {
          },
          Resources: {
            type: 'structure',
            members: {
              LoadBalancer: {
                type: 'structure',
                members: {
                  LoadBalancerName: {
                  },
                  Domain: {
                  },
                  Listeners: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        Protocol: {
                        },
                        Port: {
                          type: 'integer'
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
    updateApplication: {
      name: 'UpdateApplication',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          Description: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Application: {
            type: 'structure',
            members: {
              ApplicationName: {
              },
              Description: {
              },
              DateCreated: {
                type: 'timestamp'
              },
              DateUpdated: {
                type: 'timestamp'
              },
              Versions: {
                type: 'list'
              },
              ConfigurationTemplates: {
                type: 'list'
              }
            }
          }
        }
      }
    },
    updateApplicationVersion: {
      name: 'UpdateApplicationVersion',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          VersionLabel: {
            required: true
          },
          Description: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ApplicationVersion: {
            type: 'structure',
            members: {
              ApplicationName: {
              },
              Description: {
              },
              VersionLabel: {
              },
              SourceBundle: {
                type: 'structure',
                members: {
                  S3Bucket: {
                  },
                  S3Key: {
                  }
                }
              },
              DateCreated: {
                type: 'timestamp'
              },
              DateUpdated: {
                type: 'timestamp'
              }
            }
          }
        }
      }
    },
    updateConfigurationTemplate: {
      name: 'UpdateConfigurationTemplate',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          TemplateName: {
            required: true
          },
          Description: {
          },
          OptionSettings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                },
                Value: {
                }
              }
            }
          },
          OptionsToRemove: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          SolutionStackName: {
          },
          ApplicationName: {
          },
          TemplateName: {
          },
          Description: {
          },
          EnvironmentName: {
          },
          DeploymentStatus: {
          },
          DateCreated: {
            type: 'timestamp'
          },
          DateUpdated: {
            type: 'timestamp'
          },
          OptionSettings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                },
                Value: {
                }
              }
            }
          }
        }
      }
    },
    updateEnvironment: {
      name: 'UpdateEnvironment',
      input: {
        type: 'structure',
        members: {
          EnvironmentId: {
          },
          EnvironmentName: {
          },
          VersionLabel: {
          },
          TemplateName: {
          },
          Description: {
          },
          OptionSettings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                },
                Value: {
                }
              }
            }
          },
          OptionsToRemove: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          EnvironmentName: {
          },
          EnvironmentId: {
          },
          ApplicationName: {
          },
          VersionLabel: {
          },
          SolutionStackName: {
          },
          TemplateName: {
          },
          Description: {
          },
          EndpointURL: {
          },
          CNAME: {
          },
          DateCreated: {
            type: 'timestamp'
          },
          DateUpdated: {
            type: 'timestamp'
          },
          Status: {
          },
          Health: {
          },
          Resources: {
            type: 'structure',
            members: {
              LoadBalancer: {
                type: 'structure',
                members: {
                  LoadBalancerName: {
                  },
                  Domain: {
                  },
                  Listeners: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        Protocol: {
                        },
                        Port: {
                          type: 'integer'
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
    validateConfigurationSettings: {
      name: 'ValidateConfigurationSettings',
      input: {
        type: 'structure',
        members: {
          ApplicationName: {
            required: true
          },
          TemplateName: {
          },
          EnvironmentName: {
          },
          OptionSettings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Namespace: {
                },
                OptionName: {
                },
                Value: {
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
          Messages: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Message: {
                },
                Severity: {
                },
                Namespace: {
                },
                OptionName: {
                }
              }
            }
          }
        }
      }
    }
  }
};
