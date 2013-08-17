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
  apiVersion: '2010-05-15',
  endpointPrefix: 'cloudformation',
  resultWrapped: true,
  serviceFullName: 'AWS CloudFormation',
  signatureVersion: 'v4',
  timestampFormat: 'iso8601',
  operations: {
    cancelUpdateStack: {
      name: 'CancelUpdateStack',
      input: {
        type: 'structure',
        members: {
          StackName: {
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
    createStack: {
      name: 'CreateStack',
      input: {
        type: 'structure',
        members: {
          StackName: {
            required: true
          },
          TemplateBody: {
          },
          TemplateURL: {
          },
          Parameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterKey: {
                },
                ParameterValue: {
                }
              }
            }
          },
          DisableRollback: {
            type: 'boolean'
          },
          TimeoutInMinutes: {
            type: 'integer'
          },
          NotificationARNs: {
            type: 'list',
            members: {
            }
          },
          Capabilities: {
            type: 'list',
            members: {
            }
          },
          OnFailure: {
          },
          Tags: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Key: {
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
          StackId: {
          }
        }
      }
    },
    deleteStack: {
      name: 'DeleteStack',
      input: {
        type: 'structure',
        members: {
          StackName: {
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
    describeStackEvents: {
      name: 'DescribeStackEvents',
      input: {
        type: 'structure',
        members: {
          StackName: {
          },
          NextToken: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          StackEvents: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
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
                  type: 'timestamp'
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
      }
    },
    describeStackResource: {
      name: 'DescribeStackResource',
      input: {
        type: 'structure',
        members: {
          StackName: {
            required: true
          },
          LogicalResourceId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          StackResourceDetail: {
            type: 'structure',
            members: {
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
                type: 'timestamp'
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
      }
    },
    describeStackResources: {
      name: 'DescribeStackResources',
      input: {
        type: 'structure',
        members: {
          StackName: {
          },
          LogicalResourceId: {
          },
          PhysicalResourceId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          StackResources: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
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
                  type: 'timestamp'
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
      }
    },
    describeStacks: {
      name: 'DescribeStacks',
      input: {
        type: 'structure',
        members: {
          StackName: {
          },
          NextToken: {
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
                StackName: {
                },
                Description: {
                },
                Parameters: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      ParameterKey: {
                      },
                      ParameterValue: {
                      }
                    }
                  }
                },
                CreationTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                StackStatus: {
                },
                StackStatusReason: {
                },
                DisableRollback: {
                  type: 'boolean'
                },
                NotificationARNs: {
                  type: 'list',
                  members: {
                  }
                },
                TimeoutInMinutes: {
                  type: 'integer'
                },
                Capabilities: {
                  type: 'list',
                  members: {
                  }
                },
                Outputs: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
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
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
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
      }
    },
    estimateTemplateCost: {
      name: 'EstimateTemplateCost',
      input: {
        type: 'structure',
        members: {
          TemplateBody: {
          },
          TemplateURL: {
          },
          Parameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterKey: {
                },
                ParameterValue: {
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Url: {
          }
        }
      }
    },
    getTemplate: {
      name: 'GetTemplate',
      input: {
        type: 'structure',
        members: {
          StackName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TemplateBody: {
          }
        }
      }
    },
    listStackResources: {
      name: 'ListStackResources',
      input: {
        type: 'structure',
        members: {
          StackName: {
            required: true
          },
          NextToken: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          StackResourceSummaries: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                LogicalResourceId: {
                },
                PhysicalResourceId: {
                },
                ResourceType: {
                },
                LastUpdatedTimestamp: {
                  type: 'timestamp'
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
      }
    },
    listStacks: {
      name: 'ListStacks',
      input: {
        type: 'structure',
        members: {
          NextToken: {
          },
          StackStatusFilter: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          StackSummaries: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                StackId: {
                },
                StackName: {
                },
                TemplateDescription: {
                },
                CreationTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                DeletionTime: {
                  type: 'timestamp'
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
      }
    },
    updateStack: {
      name: 'UpdateStack',
      input: {
        type: 'structure',
        members: {
          StackName: {
            required: true
          },
          TemplateBody: {
          },
          TemplateURL: {
          },
          Parameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterKey: {
                },
                ParameterValue: {
                }
              }
            }
          },
          Capabilities: {
            type: 'list',
            members: {
            }
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
    validateTemplate: {
      name: 'ValidateTemplate',
      input: {
        type: 'structure',
        members: {
          TemplateBody: {
          },
          TemplateURL: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Parameters: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                ParameterKey: {
                },
                DefaultValue: {
                },
                NoEcho: {
                  type: 'boolean'
                },
                Description: {
                }
              }
            }
          },
          Description: {
          },
          Capabilities: {
            type: 'list',
            members: {
            }
          },
          CapabilitiesReason: {
          }
        }
      }
    }
  },
  pagination: {
    describeStackEvents: {
      inputToken: 'NextToken',
      outputToken: 'NextToken',
      resultKey: 'StackEvents'
    },
    describeStacks: {
      inputToken: 'NextToken',
      outputToken: 'NextToken',
      resultKey: 'Stacks'
    },
    listStackResources: {
      inputToken: 'NextToken',
      outputToken: 'NextToken',
      resultKey: 'StackResourceSummaries'
    },
    listStacks: {
      inputToken: 'NextToken',
      outputToken: 'NextToken',
      resultKey: 'StackSummaries'
    }
  }
};
