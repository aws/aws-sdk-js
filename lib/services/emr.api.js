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
  serviceName: 'elasticmapreduce',
  resultWrapped: true,
  apiVersion: '2009-03-31',
  timestampFormat: 'iso8601',
  operations: {
    addInstanceGroups: {
      n: 'AddInstanceGroups',
      i: {
        m: {
          InstanceGroups: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Name: {
                },
                Market: {
                },
                InstanceRole: {
                  r: 1
                },
                BidPrice: {
                },
                InstanceType: {
                  r: 1
                },
                InstanceCount: {
                  t: 'i',
                  r: 1
                }
              }
            },
            r: 1
          },
          JobFlowId: {
            r: 1
          }
        }
      },
      o: {
        JobFlowId: {
        },
        InstanceGroupIds: {
          t: 'a'
        }
      }
    },
    addJobFlowSteps: {
      n: 'AddJobFlowSteps',
      i: {
        m: {
          JobFlowId: {
            r: 1
          },
          Steps: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Name: {
                  r: 1
                },
                ActionOnFailure: {
                },
                HadoopJarStep: {
                  t: 'o',
                  m: {
                    Properties: {
                      t: 'a',
                      m: {
                        t: 'o',
                        m: {
                          Key: {
                          },
                          Value: {
                          }
                        }
                      }
                    },
                    Jar: {
                      r: 1
                    },
                    MainClass: {
                    },
                    Args: {
                      t: 'a'
                    }
                  },
                  r: 1
                }
              }
            },
            r: 1
          }
        }
      }
    },
    describeJobFlows: {
      n: 'DescribeJobFlows',
      i: {
        m: {
          CreatedAfter: {
            t: 't'
          },
          CreatedBefore: {
            t: 't'
          },
          JobFlowIds: {
            t: 'a'
          },
          JobFlowStates: {
            t: 'a'
          }
        }
      },
      o: {
        JobFlows: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              JobFlowId: {
              },
              Name: {
              },
              LogUri: {
              },
              AmiVersion: {
              },
              ExecutionStatusDetail: {
                t: 'o',
                m: {
                  State: {
                  },
                  CreationDateTime: {
                    t: 't'
                  },
                  StartDateTime: {
                    t: 't'
                  },
                  ReadyDateTime: {
                    t: 't'
                  },
                  EndDateTime: {
                    t: 't'
                  },
                  LastStateChangeReason: {
                  }
                }
              },
              Instances: {
                t: 'o',
                m: {
                  MasterInstanceType: {
                  },
                  MasterPublicDnsName: {
                  },
                  MasterInstanceId: {
                  },
                  SlaveInstanceType: {
                  },
                  InstanceCount: {
                    t: 'i'
                  },
                  InstanceGroups: {
                    t: 'a',
                    m: {
                      t: 'o',
                      m: {
                        InstanceGroupId: {
                        },
                        Name: {
                        },
                        Market: {
                        },
                        InstanceRole: {
                        },
                        BidPrice: {
                        },
                        InstanceType: {
                        },
                        InstanceRequestCount: {
                          t: 'i'
                        },
                        InstanceRunningCount: {
                          t: 'i'
                        },
                        State: {
                        },
                        LastStateChangeReason: {
                        },
                        CreationDateTime: {
                          t: 't'
                        },
                        StartDateTime: {
                          t: 't'
                        },
                        ReadyDateTime: {
                          t: 't'
                        },
                        EndDateTime: {
                          t: 't'
                        }
                      }
                    }
                  },
                  NormalizedInstanceHours: {
                    t: 'i'
                  },
                  Ec2KeyName: {
                  },
                  Ec2SubnetId: {
                  },
                  Placement: {
                    t: 'o',
                    m: {
                      AvailabilityZone: {
                      }
                    }
                  },
                  KeepJobFlowAliveWhenNoSteps: {
                    t: 'b'
                  },
                  TerminationProtected: {
                    t: 'b'
                  },
                  HadoopVersion: {
                  }
                }
              },
              Steps: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    StepConfig: {
                      t: 'o',
                      m: {
                        Name: {
                        },
                        ActionOnFailure: {
                        },
                        HadoopJarStep: {
                          t: 'o',
                          m: {
                            Properties: {
                              t: 'a',
                              m: {
                                t: 'o',
                                m: {
                                  Key: {
                                  },
                                  Value: {
                                  }
                                }
                              }
                            },
                            Jar: {
                            },
                            MainClass: {
                            },
                            Args: {
                              t: 'a'
                            }
                          }
                        }
                      }
                    },
                    ExecutionStatusDetail: {
                      t: 'o',
                      m: {
                        State: {
                        },
                        CreationDateTime: {
                          t: 't'
                        },
                        StartDateTime: {
                          t: 't'
                        },
                        EndDateTime: {
                          t: 't'
                        },
                        LastStateChangeReason: {
                        }
                      }
                    }
                  }
                }
              },
              BootstrapActions: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    BootstrapActionConfig: {
                      t: 'o',
                      m: {
                        Name: {
                        },
                        ScriptBootstrapAction: {
                          t: 'o',
                          m: {
                            Path: {
                            },
                            Args: {
                              t: 'a'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              SupportedProducts: {
                t: 'a'
              },
              VisibleToAllUsers: {
                t: 'b'
              },
              JobFlowRole: {
              }
            }
          }
        }
      }
    },
    modifyInstanceGroups: {
      n: 'ModifyInstanceGroups',
      i: {
        m: {
          InstanceGroups: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                InstanceGroupId: {
                  r: 1
                },
                InstanceCount: {
                  t: 'i',
                  r: 1
                }
              }
            }
          }
        }
      }
    },
    runJobFlow: {
      n: 'RunJobFlow',
      i: {
        m: {
          Name: {
            r: 1
          },
          LogUri: {
          },
          AdditionalInfo: {
          },
          AmiVersion: {
          },
          Instances: {
            t: 'o',
            m: {
              MasterInstanceType: {
              },
              SlaveInstanceType: {
              },
              InstanceCount: {
                t: 'i'
              },
              InstanceGroups: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    Name: {
                    },
                    Market: {
                    },
                    InstanceRole: {
                      r: 1
                    },
                    BidPrice: {
                    },
                    InstanceType: {
                      r: 1
                    },
                    InstanceCount: {
                      t: 'i',
                      r: 1
                    }
                  }
                }
              },
              Ec2KeyName: {
              },
              Placement: {
                t: 'o',
                m: {
                  AvailabilityZone: {
                    r: 1
                  }
                }
              },
              KeepJobFlowAliveWhenNoSteps: {
                t: 'b'
              },
              TerminationProtected: {
                t: 'b'
              },
              HadoopVersion: {
              },
              Ec2SubnetId: {
              }
            },
            r: 1
          },
          Steps: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Name: {
                  r: 1
                },
                ActionOnFailure: {
                },
                HadoopJarStep: {
                  t: 'o',
                  m: {
                    Properties: {
                      t: 'a',
                      m: {
                        t: 'o',
                        m: {
                          Key: {
                          },
                          Value: {
                          }
                        }
                      }
                    },
                    Jar: {
                      r: 1
                    },
                    MainClass: {
                    },
                    Args: {
                      t: 'a'
                    }
                  },
                  r: 1
                }
              }
            }
          },
          BootstrapActions: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Name: {
                  r: 1
                },
                ScriptBootstrapAction: {
                  t: 'o',
                  m: {
                    Path: {
                      r: 1
                    },
                    Args: {
                      t: 'a'
                    }
                  },
                  r: 1
                }
              }
            }
          },
          SupportedProducts: {
            t: 'a'
          },
          VisibleToAllUsers: {
            t: 'b'
          },
          JobFlowRole: {
          }
        }
      },
      o: {
        JobFlowId: {
        }
      }
    },
    setTerminationProtection: {
      n: 'SetTerminationProtection',
      i: {
        m: {
          JobFlowIds: {
            t: 'a',
            r: 1
          },
          TerminationProtected: {
            t: 'b',
            r: 1
          }
        }
      }
    },
    setVisibleToAllUsers: {
      n: 'SetVisibleToAllUsers',
      i: {
        m: {
          JobFlowIds: {
            t: 'a',
            r: 1
          },
          VisibleToAllUsers: {
            t: 'b',
            r: 1
          }
        }
      }
    },
    terminateJobFlows: {
      n: 'TerminateJobFlows',
      i: {
        m: {
          JobFlowIds: {
            t: 'a',
            r: 1
          }
        }
      }
    }
  }
};
