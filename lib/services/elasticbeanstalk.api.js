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
  serviceName: 'elasticbeanstalk',
  resultWrapped: true,
  apiVersion: '2010-12-01',
  timestampFormat: 'iso8601',
  operations: {
    checkDNSAvailability: {
      n: 'CheckDNSAvailability',
      i: {
        m: {
          CNAMEPrefix: {
            r: 1
          }
        }
      },
      o: {
        Available: {
          t: 'b'
        },
        FullyQualifiedCNAME: {
        }
      }
    },
    createApplication: {
      n: 'CreateApplication',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          Description: {
          }
        }
      },
      o: {
        Application: {
          t: 'o',
          m: {
            ApplicationName: {
            },
            Description: {
            },
            DateCreated: {
              t: 't'
            },
            DateUpdated: {
              t: 't'
            },
            Versions: {
              t: 'a'
            },
            ConfigurationTemplates: {
              t: 'a'
            }
          }
        }
      }
    },
    createApplicationVersion: {
      n: 'CreateApplicationVersion',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          VersionLabel: {
            r: 1
          },
          Description: {
          },
          SourceBundle: {
            t: 'o',
            m: {
              S3Bucket: {
              },
              S3Key: {
              }
            }
          },
          AutoCreateApplication: {
            t: 'b'
          }
        }
      },
      o: {
        ApplicationVersion: {
          t: 'o',
          m: {
            ApplicationName: {
            },
            Description: {
            },
            VersionLabel: {
            },
            SourceBundle: {
              t: 'o',
              m: {
                S3Bucket: {
                },
                S3Key: {
                }
              }
            },
            DateCreated: {
              t: 't'
            },
            DateUpdated: {
              t: 't'
            }
          }
        }
      }
    },
    createConfigurationTemplate: {
      n: 'CreateConfigurationTemplate',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          TemplateName: {
            r: 1
          },
          SolutionStackName: {
          },
          SourceConfiguration: {
            t: 'o',
            m: {
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
            t: 'a',
            m: {
              t: 'o',
              m: {
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
      o: {
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
          t: 't'
        },
        DateUpdated: {
          t: 't'
        },
        OptionSettings: {
          t: 'a',
          m: {
            t: 'o',
            m: {
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
    createEnvironment: {
      n: 'CreateEnvironment',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          VersionLabel: {
          },
          EnvironmentName: {
            r: 1
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
            t: 'a',
            m: {
              t: 'o',
              m: {
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
            t: 'a',
            m: {
              t: 'o',
              m: {
                Namespace: {
                },
                OptionName: {
                }
              }
            }
          }
        }
      },
      o: {
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
          t: 't'
        },
        DateUpdated: {
          t: 't'
        },
        Status: {
        },
        Health: {
        },
        Resources: {
          t: 'o',
          m: {
            LoadBalancer: {
              t: 'o',
              m: {
                LoadBalancerName: {
                },
                Domain: {
                },
                Listeners: {
                  t: 'a',
                  m: {
                    t: 'o',
                    m: {
                      Protocol: {
                      },
                      Port: {
                        t: 'i'
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
      n: 'CreateStorageLocation',
      o: {
        S3Bucket: {
        }
      }
    },
    deleteApplication: {
      n: 'DeleteApplication',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          TerminateEnvByForce: {
            t: 'b'
          }
        }
      }
    },
    deleteApplicationVersion: {
      n: 'DeleteApplicationVersion',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          VersionLabel: {
            r: 1
          },
          DeleteSourceBundle: {
            t: 'b'
          }
        }
      }
    },
    deleteConfigurationTemplate: {
      n: 'DeleteConfigurationTemplate',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          TemplateName: {
            r: 1
          }
        }
      }
    },
    deleteEnvironmentConfiguration: {
      n: 'DeleteEnvironmentConfiguration',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          EnvironmentName: {
            r: 1
          }
        }
      }
    },
    describeApplicationVersions: {
      n: 'DescribeApplicationVersions',
      i: {
        m: {
          ApplicationName: {
          },
          VersionLabels: {
            t: 'a'
          }
        }
      },
      o: {
        ApplicationVersions: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              ApplicationName: {
              },
              Description: {
              },
              VersionLabel: {
              },
              SourceBundle: {
                t: 'o',
                m: {
                  S3Bucket: {
                  },
                  S3Key: {
                  }
                }
              },
              DateCreated: {
                t: 't'
              },
              DateUpdated: {
                t: 't'
              }
            }
          }
        }
      }
    },
    describeApplications: {
      n: 'DescribeApplications',
      i: {
        m: {
          ApplicationNames: {
            t: 'a'
          }
        }
      },
      o: {
        Applications: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              ApplicationName: {
              },
              Description: {
              },
              DateCreated: {
                t: 't'
              },
              DateUpdated: {
                t: 't'
              },
              Versions: {
                t: 'a'
              },
              ConfigurationTemplates: {
                t: 'a'
              }
            }
          }
        }
      }
    },
    describeConfigurationOptions: {
      n: 'DescribeConfigurationOptions',
      i: {
        m: {
          ApplicationName: {
          },
          TemplateName: {
          },
          EnvironmentName: {
          },
          SolutionStackName: {
          },
          Options: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Namespace: {
                },
                OptionName: {
                }
              }
            }
          }
        }
      },
      o: {
        SolutionStackName: {
        },
        Options: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Namespace: {
              },
              Name: {
              },
              DefaultValue: {
              },
              ChangeSeverity: {
              },
              UserDefined: {
                t: 'b'
              },
              ValueType: {
              },
              ValueOptions: {
                t: 'a'
              },
              MinValue: {
                t: 'i'
              },
              MaxValue: {
                t: 'i'
              },
              MaxLength: {
                t: 'i'
              },
              Regex: {
                t: 'o',
                m: {
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
    },
    describeConfigurationSettings: {
      n: 'DescribeConfigurationSettings',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          TemplateName: {
          },
          EnvironmentName: {
          }
        }
      },
      o: {
        ConfigurationSettings: {
          t: 'a',
          m: {
            t: 'o',
            m: {
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
                t: 't'
              },
              DateUpdated: {
                t: 't'
              },
              OptionSettings: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
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
    },
    describeEnvironmentResources: {
      n: 'DescribeEnvironmentResources',
      i: {
        m: {
          EnvironmentId: {
          },
          EnvironmentName: {
          }
        }
      },
      o: {
        EnvironmentResources: {
          t: 'o',
          m: {
            EnvironmentName: {
            },
            AutoScalingGroups: {
              t: 'a',
              m: {
                t: 'o',
                m: {
                  Name: {
                  }
                }
              }
            },
            Instances: {
              t: 'a',
              m: {
                t: 'o',
                m: {
                  Id: {
                  }
                }
              }
            },
            LaunchConfigurations: {
              t: 'a',
              m: {
                t: 'o',
                m: {
                  Name: {
                  }
                }
              }
            },
            LoadBalancers: {
              t: 'a',
              m: {
                t: 'o',
                m: {
                  Name: {
                  }
                }
              }
            },
            Triggers: {
              t: 'a',
              m: {
                t: 'o',
                m: {
                  Name: {
                  }
                }
              }
            }
          }
        }
      }
    },
    describeEnvironments: {
      n: 'DescribeEnvironments',
      i: {
        m: {
          ApplicationName: {
          },
          VersionLabel: {
          },
          EnvironmentIds: {
            t: 'a'
          },
          EnvironmentNames: {
            t: 'a'
          },
          IncludeDeleted: {
            t: 'b'
          },
          IncludedDeletedBackTo: {
            t: 't'
          }
        }
      },
      o: {
        Environments: {
          t: 'a',
          m: {
            t: 'o',
            m: {
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
                t: 't'
              },
              DateUpdated: {
                t: 't'
              },
              Status: {
              },
              Health: {
              },
              Resources: {
                t: 'o',
                m: {
                  LoadBalancer: {
                    t: 'o',
                    m: {
                      LoadBalancerName: {
                      },
                      Domain: {
                      },
                      Listeners: {
                        t: 'a',
                        m: {
                          t: 'o',
                          m: {
                            Protocol: {
                            },
                            Port: {
                              t: 'i'
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
      n: 'DescribeEvents',
      i: {
        m: {
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
            t: 't'
          },
          EndTime: {
            t: 't'
          },
          MaxRecords: {
            t: 'i'
          },
          NextToken: {
          }
        }
      },
      o: {
        Events: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              EventDate: {
                t: 't'
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
    },
    listAvailableSolutionStacks: {
      n: 'ListAvailableSolutionStacks',
      o: {
        SolutionStacks: {
          t: 'a'
        },
        SolutionStackDetails: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              SolutionStackName: {
              },
              PermittedFileTypes: {
                t: 'a'
              }
            }
          }
        }
      }
    },
    rebuildEnvironment: {
      n: 'RebuildEnvironment',
      i: {
        m: {
          EnvironmentId: {
          },
          EnvironmentName: {
          }
        }
      }
    },
    requestEnvironmentInfo: {
      n: 'RequestEnvironmentInfo',
      i: {
        m: {
          EnvironmentId: {
          },
          EnvironmentName: {
          },
          InfoType: {
            r: 1
          }
        }
      }
    },
    restartAppServer: {
      n: 'RestartAppServer',
      i: {
        m: {
          EnvironmentId: {
          },
          EnvironmentName: {
          }
        }
      }
    },
    retrieveEnvironmentInfo: {
      n: 'RetrieveEnvironmentInfo',
      i: {
        m: {
          EnvironmentId: {
          },
          EnvironmentName: {
          },
          InfoType: {
            r: 1
          }
        }
      },
      o: {
        EnvironmentInfo: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              InfoType: {
              },
              Ec2InstanceId: {
              },
              SampleTimestamp: {
                t: 't'
              },
              Message: {
              }
            }
          }
        }
      }
    },
    swapEnvironmentCNAMEs: {
      n: 'SwapEnvironmentCNAMEs',
      i: {
        m: {
          SourceEnvironmentId: {
          },
          SourceEnvironmentName: {
          },
          DestinationEnvironmentId: {
          },
          DestinationEnvironmentName: {
          }
        }
      }
    },
    terminateEnvironment: {
      n: 'TerminateEnvironment',
      i: {
        m: {
          EnvironmentId: {
          },
          EnvironmentName: {
          },
          TerminateResources: {
            t: 'b'
          }
        }
      },
      o: {
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
          t: 't'
        },
        DateUpdated: {
          t: 't'
        },
        Status: {
        },
        Health: {
        },
        Resources: {
          t: 'o',
          m: {
            LoadBalancer: {
              t: 'o',
              m: {
                LoadBalancerName: {
                },
                Domain: {
                },
                Listeners: {
                  t: 'a',
                  m: {
                    t: 'o',
                    m: {
                      Protocol: {
                      },
                      Port: {
                        t: 'i'
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
      n: 'UpdateApplication',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          Description: {
          }
        }
      },
      o: {
        Application: {
          t: 'o',
          m: {
            ApplicationName: {
            },
            Description: {
            },
            DateCreated: {
              t: 't'
            },
            DateUpdated: {
              t: 't'
            },
            Versions: {
              t: 'a'
            },
            ConfigurationTemplates: {
              t: 'a'
            }
          }
        }
      }
    },
    updateApplicationVersion: {
      n: 'UpdateApplicationVersion',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          VersionLabel: {
            r: 1
          },
          Description: {
          }
        }
      },
      o: {
        ApplicationVersion: {
          t: 'o',
          m: {
            ApplicationName: {
            },
            Description: {
            },
            VersionLabel: {
            },
            SourceBundle: {
              t: 'o',
              m: {
                S3Bucket: {
                },
                S3Key: {
                }
              }
            },
            DateCreated: {
              t: 't'
            },
            DateUpdated: {
              t: 't'
            }
          }
        }
      }
    },
    updateConfigurationTemplate: {
      n: 'UpdateConfigurationTemplate',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          TemplateName: {
            r: 1
          },
          Description: {
          },
          OptionSettings: {
            t: 'a',
            m: {
              t: 'o',
              m: {
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
            t: 'a',
            m: {
              t: 'o',
              m: {
                Namespace: {
                },
                OptionName: {
                }
              }
            }
          }
        }
      },
      o: {
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
          t: 't'
        },
        DateUpdated: {
          t: 't'
        },
        OptionSettings: {
          t: 'a',
          m: {
            t: 'o',
            m: {
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
    updateEnvironment: {
      n: 'UpdateEnvironment',
      i: {
        m: {
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
            t: 'a',
            m: {
              t: 'o',
              m: {
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
            t: 'a',
            m: {
              t: 'o',
              m: {
                Namespace: {
                },
                OptionName: {
                }
              }
            }
          }
        }
      },
      o: {
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
          t: 't'
        },
        DateUpdated: {
          t: 't'
        },
        Status: {
        },
        Health: {
        },
        Resources: {
          t: 'o',
          m: {
            LoadBalancer: {
              t: 'o',
              m: {
                LoadBalancerName: {
                },
                Domain: {
                },
                Listeners: {
                  t: 'a',
                  m: {
                    t: 'o',
                    m: {
                      Protocol: {
                      },
                      Port: {
                        t: 'i'
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
      n: 'ValidateConfigurationSettings',
      i: {
        m: {
          ApplicationName: {
            r: 1
          },
          TemplateName: {
          },
          EnvironmentName: {
          },
          OptionSettings: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Namespace: {
                },
                OptionName: {
                },
                Value: {
                }
              }
            },
            r: 1
          }
        }
      },
      o: {
        Messages: {
          t: 'a',
          m: {
            t: 'o',
            m: {
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
};
