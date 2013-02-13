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
  serviceName: 'cloudformation',
  resultWrapped: true,
  apiVersion: '2010-05-15',
  timestampFormat: 'iso8601',
  operations: {
    createStack: {
      n: 'CreateStack',
      i: {
        m: {
          StackName: {
            r: 1
          },
          TemplateBody: {
          },
          TemplateURL: {
          },
          Parameters: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                ParameterKey: {
                },
                ParameterValue: {
                }
              }
            }
          },
          DisableRollback: {
            t: 'b'
          },
          TimeoutInMinutes: {
            t: 'i'
          },
          NotificationARNs: {
            t: 'a'
          },
          Capabilities: {
            t: 'a'
          },
          OnFailure: {
          },
          Tags: {
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
          }
        }
      },
      o: {
        StackId: {
        }
      }
    },
    deleteStack: {
      n: 'DeleteStack',
      i: {
        m: {
          StackName: {
            r: 1
          }
        }
      }
    },
    describeStackEvents: {
      n: 'DescribeStackEvents',
      i: {
        m: {
          StackName: {
          },
          NextToken: {
          }
        }
      },
      o: {
        StackEvents: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              StackId: {
              },
              EventId: {
              },
              StackName: {
              },
              LogicalResourceId: {
              },
              PhysicalResourceId: {
              },
              ResourceType: {
              },
              Timestamp: {
                t: 't'
              },
              ResourceStatus: {
              },
              ResourceStatusReason: {
              },
              ResourceProperties: {
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    describeStackResource: {
      n: 'DescribeStackResource',
      i: {
        m: {
          StackName: {
            r: 1
          },
          LogicalResourceId: {
            r: 1
          }
        }
      },
      o: {
        StackResourceDetail: {
          t: 'o',
          m: {
            StackName: {
            },
            StackId: {
            },
            LogicalResourceId: {
            },
            PhysicalResourceId: {
            },
            ResourceType: {
            },
            LastUpdatedTimestamp: {
              t: 't'
            },
            ResourceStatus: {
            },
            ResourceStatusReason: {
            },
            Description: {
            },
            Metadata: {
            }
          }
        }
      }
    },
    describeStackResources: {
      n: 'DescribeStackResources',
      i: {
        m: {
          StackName: {
          },
          LogicalResourceId: {
          },
          PhysicalResourceId: {
          }
        }
      },
      o: {
        StackResources: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              StackName: {
              },
              StackId: {
              },
              LogicalResourceId: {
              },
              PhysicalResourceId: {
              },
              ResourceType: {
              },
              Timestamp: {
                t: 't'
              },
              ResourceStatus: {
              },
              ResourceStatusReason: {
              },
              Description: {
              }
            }
          }
        }
      }
    },
    describeStacks: {
      n: 'DescribeStacks',
      i: {
        m: {
          StackName: {
          },
          NextToken: {
          }
        }
      },
      o: {
        Stacks: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              StackId: {
              },
              StackName: {
              },
              Description: {
              },
              Parameters: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    ParameterKey: {
                    },
                    ParameterValue: {
                    }
                  }
                }
              },
              CreationTime: {
                t: 't'
              },
              LastUpdatedTime: {
                t: 't'
              },
              StackStatus: {
              },
              StackStatusReason: {
              },
              DisableRollback: {
                t: 'b'
              },
              NotificationARNs: {
                t: 'a'
              },
              TimeoutInMinutes: {
                t: 'i'
              },
              Capabilities: {
                t: 'a'
              },
              Outputs: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    OutputKey: {
                    },
                    OutputValue: {
                    },
                    Description: {
                    }
                  }
                }
              },
              Tags: {
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
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    estimateTemplateCost: {
      n: 'EstimateTemplateCost',
      i: {
        m: {
          TemplateBody: {
          },
          TemplateURL: {
          },
          Parameters: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                ParameterKey: {
                },
                ParameterValue: {
                }
              }
            }
          }
        }
      },
      o: {
        Url: {
        }
      }
    },
    getTemplate: {
      n: 'GetTemplate',
      i: {
        m: {
          StackName: {
            r: 1
          }
        }
      },
      o: {
        TemplateBody: {
        }
      }
    },
    listStackResources: {
      n: 'ListStackResources',
      i: {
        m: {
          StackName: {
            r: 1
          },
          NextToken: {
          }
        }
      },
      o: {
        StackResourceSummaries: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              LogicalResourceId: {
              },
              PhysicalResourceId: {
              },
              ResourceType: {
              },
              LastUpdatedTimestamp: {
                t: 't'
              },
              ResourceStatus: {
              },
              ResourceStatusReason: {
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    listStacks: {
      n: 'ListStacks',
      i: {
        m: {
          NextToken: {
          },
          StackStatusFilter: {
            t: 'a'
          }
        }
      },
      o: {
        StackSummaries: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              StackId: {
              },
              StackName: {
              },
              TemplateDescription: {
              },
              CreationTime: {
                t: 't'
              },
              LastUpdatedTime: {
                t: 't'
              },
              DeletionTime: {
                t: 't'
              },
              StackStatus: {
              },
              StackStatusReason: {
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    updateStack: {
      n: 'UpdateStack',
      i: {
        m: {
          StackName: {
            r: 1
          },
          TemplateBody: {
          },
          TemplateURL: {
          },
          Parameters: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                ParameterKey: {
                },
                ParameterValue: {
                }
              }
            }
          },
          Capabilities: {
            t: 'a'
          }
        }
      },
      o: {
        StackId: {
        }
      }
    },
    validateTemplate: {
      n: 'ValidateTemplate',
      i: {
        m: {
          TemplateBody: {
          },
          TemplateURL: {
          }
        }
      },
      o: {
        Parameters: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              ParameterKey: {
              },
              DefaultValue: {
              },
              NoEcho: {
                t: 'b'
              },
              Description: {
              }
            }
          }
        },
        Description: {
        },
        Capabilities: {
          t: 'a'
        },
        CapabilitiesReason: {
        }
      }
    }
  }
};
