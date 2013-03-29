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
  apiVersion: '2012-10-29',
  endpointPrefix: 'datapipeline',
  jsonVersion: '1.1',
  serviceFullName: 'AWS Data Pipeline',
  signatureVersion: 'v4',
  targetPrefix: 'DataPipeline',
  timestampFormat: 'iso8601',
  operations: {
    activatePipeline: {
      name: 'ActivatePipeline',
      input: {
        type: 'structure',
        members: {
          pipelineId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure'
      }
    },
    createPipeline: {
      name: 'CreatePipeline',
      input: {
        type: 'structure',
        members: {
          name: {
            required: true
          },
          uniqueId: {
            required: true
          },
          description: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          pipelineId: {
          }
        }
      }
    },
    deletePipeline: {
      name: 'DeletePipeline',
      input: {
        type: 'structure',
        members: {
          pipelineId: {
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
    describeObjects: {
      name: 'DescribeObjects',
      input: {
        type: 'structure',
        members: {
          pipelineId: {
            required: true
          },
          objectIds: {
            type: 'list',
            required: true
          },
          evaluateExpressions: {
            type: 'boolean'
          },
          marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          pipelineObjects: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                id: {
                },
                name: {
                },
                fields: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                      },
                      stringValue: {
                      },
                      refValue: {
                      }
                    }
                  }
                }
              }
            }
          },
          marker: {
          },
          hasMoreResults: {
            type: 'boolean'
          }
        }
      }
    },
    describePipelines: {
      name: 'DescribePipelines',
      input: {
        type: 'structure',
        members: {
          pipelineIds: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          pipelineDescriptionList: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                pipelineId: {
                },
                name: {
                },
                fields: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                      },
                      stringValue: {
                      },
                      refValue: {
                      }
                    }
                  }
                },
                description: {
                }
              }
            }
          }
        }
      }
    },
    evaluateExpression: {
      name: 'EvaluateExpression',
      input: {
        type: 'structure',
        members: {
          pipelineId: {
            required: true
          },
          objectId: {
            required: true
          },
          expression: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          evaluatedExpression: {
          }
        }
      }
    },
    getPipelineDefinition: {
      name: 'GetPipelineDefinition',
      input: {
        type: 'structure',
        members: {
          pipelineId: {
            required: true
          },
          version: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          pipelineObjects: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                id: {
                },
                name: {
                },
                fields: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                      },
                      stringValue: {
                      },
                      refValue: {
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
    listPipelines: {
      name: 'ListPipelines',
      input: {
        type: 'structure',
        members: {
          marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          pipelineIdList: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                id: {
                },
                name: {
                }
              }
            }
          },
          marker: {
          },
          hasMoreResults: {
            type: 'boolean'
          }
        }
      }
    },
    pollForTask: {
      name: 'PollForTask',
      input: {
        type: 'structure',
        members: {
          workerGroup: {
            required: true
          },
          hostname: {
          },
          instanceIdentity: {
            type: 'structure',
            members: {
              document: {
              },
              signature: {
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          taskObject: {
            type: 'structure',
            members: {
              taskId: {
              },
              pipelineId: {
              },
              attemptId: {
              },
              objects: {
                type: 'map',
                members: {
                  type: 'structure',
                  members: {
                    id: {
                    },
                    name: {
                    },
                    fields: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          key: {
                          },
                          stringValue: {
                          },
                          refValue: {
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
    putPipelineDefinition: {
      name: 'PutPipelineDefinition',
      input: {
        type: 'structure',
        members: {
          pipelineId: {
            required: true
          },
          pipelineObjects: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                id: {
                  required: true
                },
                name: {
                  required: true
                },
                fields: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        required: true
                      },
                      stringValue: {
                      },
                      refValue: {
                      }
                    }
                  },
                  required: true
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
          validationErrors: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                id: {
                },
                errors: {
                  type: 'list'
                }
              }
            }
          },
          errored: {
            type: 'boolean'
          }
        }
      }
    },
    queryObjects: {
      name: 'QueryObjects',
      input: {
        type: 'structure',
        members: {
          pipelineId: {
            required: true
          },
          query: {
            type: 'structure',
            members: {
              selectors: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    fieldName: {
                    },
                    operator: {
                      type: 'structure',
                      members: {
                        type: {
                        },
                        values: {
                          type: 'list'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          sphere: {
            required: true
          },
          marker: {
          },
          limit: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ids: {
            type: 'list'
          },
          marker: {
          },
          hasMoreResults: {
            type: 'boolean'
          }
        }
      }
    },
    reportTaskProgress: {
      name: 'ReportTaskProgress',
      input: {
        type: 'structure',
        members: {
          taskId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          canceled: {
            type: 'boolean'
          }
        }
      }
    },
    reportTaskRunnerHeartbeat: {
      name: 'ReportTaskRunnerHeartbeat',
      input: {
        type: 'structure',
        members: {
          taskrunnerId: {
            required: true
          },
          workerGroup: {
          },
          hostname: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          terminate: {
            type: 'boolean'
          }
        }
      }
    },
    setStatus: {
      name: 'SetStatus',
      input: {
        type: 'structure',
        members: {
          pipelineId: {
            required: true
          },
          objectIds: {
            type: 'list',
            required: true
          },
          status: {
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
    setTaskStatus: {
      name: 'SetTaskStatus',
      input: {
        type: 'structure',
        members: {
          taskId: {
            required: true
          },
          taskStatus: {
            required: true
          },
          errorCode: {
            type: 'integer'
          },
          errorMessage: {
          },
          errorStackTrace: {
          }
        }
      },
      output: {
        type: 'structure'
      }
    },
    validatePipelineDefinition: {
      name: 'ValidatePipelineDefinition',
      input: {
        type: 'structure',
        members: {
          pipelineId: {
            required: true
          },
          pipelineObjects: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                id: {
                  required: true
                },
                name: {
                  required: true
                },
                fields: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      key: {
                        required: true
                      },
                      stringValue: {
                      },
                      refValue: {
                      }
                    }
                  },
                  required: true
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
          validationErrors: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                id: {
                },
                errors: {
                  type: 'list'
                }
              }
            }
          },
          errored: {
            type: 'boolean'
          }
        }
      }
    }
  }
};
