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
  signatureVersion: 'v3',
  serviceName: 'swf',
  targetPrefix: 'SimpleWorkflowService',
  timestampFormat: 'unixTimestamp',
  operations: {
    countClosedWorkflowExecutions: {
      n: 'CountClosedWorkflowExecutions',
      i: {
        m: {
          domain: {
            r: 1
          },
          startTimeFilter: {
            t: 'o',
            m: {
              oldestDate: {
                t: 't',
                r: 1
              },
              latestDate: {
                t: 't'
              }
            }
          },
          closeTimeFilter: {
            t: 'o',
            m: {
              oldestDate: {
                t: 't',
                r: 1
              },
              latestDate: {
                t: 't'
              }
            }
          },
          executionFilter: {
            t: 'o',
            m: {
              workflowId: {
                r: 1
              }
            }
          },
          typeFilter: {
            t: 'o',
            m: {
              name: {
                r: 1
              },
              version: {
              }
            }
          },
          tagFilter: {
            t: 'o',
            m: {
              tag: {
                r: 1
              }
            }
          },
          closeStatusFilter: {
            t: 'o',
            m: {
              status: {
                r: 1
              }
            }
          }
        }
      }
    },
    countOpenWorkflowExecutions: {
      n: 'CountOpenWorkflowExecutions',
      i: {
        m: {
          domain: {
            r: 1
          },
          startTimeFilter: {
            t: 'o',
            m: {
              oldestDate: {
                t: 't',
                r: 1
              },
              latestDate: {
                t: 't'
              }
            },
            r: 1
          },
          typeFilter: {
            t: 'o',
            m: {
              name: {
                r: 1
              },
              version: {
              }
            }
          },
          tagFilter: {
            t: 'o',
            m: {
              tag: {
                r: 1
              }
            }
          },
          executionFilter: {
            t: 'o',
            m: {
              workflowId: {
                r: 1
              }
            }
          }
        }
      }
    },
    countPendingActivityTasks: {
      n: 'CountPendingActivityTasks',
      i: {
        m: {
          domain: {
            r: 1
          },
          taskList: {
            t: 'o',
            m: {
              name: {
                r: 1
              }
            },
            r: 1
          }
        }
      }
    },
    countPendingDecisionTasks: {
      n: 'CountPendingDecisionTasks',
      i: {
        m: {
          domain: {
            r: 1
          },
          taskList: {
            t: 'o',
            m: {
              name: {
                r: 1
              }
            },
            r: 1
          }
        }
      }
    },
    deprecateActivityType: {
      n: 'DeprecateActivityType',
      i: {
        m: {
          domain: {
            r: 1
          },
          activityType: {
            t: 'o',
            m: {
              name: {
                r: 1
              },
              version: {
                r: 1
              }
            },
            r: 1
          }
        }
      }
    },
    deprecateDomain: {
      n: 'DeprecateDomain',
      i: {
        m: {
          name: {
            r: 1
          }
        }
      }
    },
    deprecateWorkflowType: {
      n: 'DeprecateWorkflowType',
      i: {
        m: {
          domain: {
            r: 1
          },
          workflowType: {
            t: 'o',
            m: {
              name: {
                r: 1
              },
              version: {
                r: 1
              }
            },
            r: 1
          }
        }
      }
    },
    describeActivityType: {
      n: 'DescribeActivityType',
      i: {
        m: {
          domain: {
            r: 1
          },
          activityType: {
            t: 'o',
            m: {
              name: {
                r: 1
              },
              version: {
                r: 1
              }
            },
            r: 1
          }
        }
      }
    },
    describeDomain: {
      n: 'DescribeDomain',
      i: {
        m: {
          name: {
            r: 1
          }
        }
      }
    },
    describeWorkflowExecution: {
      n: 'DescribeWorkflowExecution',
      i: {
        m: {
          domain: {
            r: 1
          },
          execution: {
            t: 'o',
            m: {
              workflowId: {
                r: 1
              },
              runId: {
                r: 1
              }
            },
            r: 1
          }
        }
      }
    },
    describeWorkflowType: {
      n: 'DescribeWorkflowType',
      i: {
        m: {
          domain: {
            r: 1
          },
          workflowType: {
            t: 'o',
            m: {
              name: {
                r: 1
              },
              version: {
                r: 1
              }
            },
            r: 1
          }
        }
      }
    },
    getWorkflowExecutionHistory: {
      n: 'GetWorkflowExecutionHistory',
      i: {
        m: {
          domain: {
            r: 1
          },
          execution: {
            t: 'o',
            m: {
              workflowId: {
                r: 1
              },
              runId: {
                r: 1
              }
            },
            r: 1
          },
          nextPageToken: {
          },
          maximumPageSize: {
            t: 'i'
          },
          reverseOrder: {
            t: 'b'
          }
        }
      }
    },
    listActivityTypes: {
      n: 'ListActivityTypes',
      i: {
        m: {
          domain: {
            r: 1
          },
          name: {
          },
          registrationStatus: {
            r: 1
          },
          nextPageToken: {
          },
          maximumPageSize: {
            t: 'i'
          },
          reverseOrder: {
            t: 'b'
          }
        }
      }
    },
    listClosedWorkflowExecutions: {
      n: 'ListClosedWorkflowExecutions',
      i: {
        m: {
          domain: {
            r: 1
          },
          startTimeFilter: {
            t: 'o',
            m: {
              oldestDate: {
                t: 't',
                r: 1
              },
              latestDate: {
                t: 't'
              }
            }
          },
          closeTimeFilter: {
            t: 'o',
            m: {
              oldestDate: {
                t: 't',
                r: 1
              },
              latestDate: {
                t: 't'
              }
            }
          },
          executionFilter: {
            t: 'o',
            m: {
              workflowId: {
                r: 1
              }
            }
          },
          closeStatusFilter: {
            t: 'o',
            m: {
              status: {
                r: 1
              }
            }
          },
          typeFilter: {
            t: 'o',
            m: {
              name: {
                r: 1
              },
              version: {
              }
            }
          },
          tagFilter: {
            t: 'o',
            m: {
              tag: {
                r: 1
              }
            }
          },
          nextPageToken: {
          },
          maximumPageSize: {
            t: 'i'
          },
          reverseOrder: {
            t: 'b'
          }
        }
      }
    },
    listDomains: {
      n: 'ListDomains',
      i: {
        m: {
          nextPageToken: {
          },
          registrationStatus: {
            r: 1
          },
          maximumPageSize: {
            t: 'i'
          },
          reverseOrder: {
            t: 'b'
          }
        }
      }
    },
    listOpenWorkflowExecutions: {
      n: 'ListOpenWorkflowExecutions',
      i: {
        m: {
          domain: {
            r: 1
          },
          startTimeFilter: {
            t: 'o',
            m: {
              oldestDate: {
                t: 't',
                r: 1
              },
              latestDate: {
                t: 't'
              }
            },
            r: 1
          },
          typeFilter: {
            t: 'o',
            m: {
              name: {
                r: 1
              },
              version: {
              }
            }
          },
          tagFilter: {
            t: 'o',
            m: {
              tag: {
                r: 1
              }
            }
          },
          nextPageToken: {
          },
          maximumPageSize: {
            t: 'i'
          },
          reverseOrder: {
            t: 'b'
          },
          executionFilter: {
            t: 'o',
            m: {
              workflowId: {
                r: 1
              }
            }
          }
        }
      }
    },
    listWorkflowTypes: {
      n: 'ListWorkflowTypes',
      i: {
        m: {
          domain: {
            r: 1
          },
          name: {
          },
          registrationStatus: {
            r: 1
          },
          nextPageToken: {
          },
          maximumPageSize: {
            t: 'i'
          },
          reverseOrder: {
            t: 'b'
          }
        }
      }
    },
    pollForActivityTask: {
      n: 'PollForActivityTask',
      i: {
        m: {
          domain: {
            r: 1
          },
          taskList: {
            t: 'o',
            m: {
              name: {
                r: 1
              }
            },
            r: 1
          },
          identity: {
          }
        }
      }
    },
    pollForDecisionTask: {
      n: 'PollForDecisionTask',
      i: {
        m: {
          domain: {
            r: 1
          },
          taskList: {
            t: 'o',
            m: {
              name: {
                r: 1
              }
            },
            r: 1
          },
          identity: {
          },
          nextPageToken: {
          },
          maximumPageSize: {
            t: 'i'
          },
          reverseOrder: {
            t: 'b'
          }
        }
      }
    },
    recordActivityTaskHeartbeat: {
      n: 'RecordActivityTaskHeartbeat',
      i: {
        m: {
          taskToken: {
            r: 1
          },
          details: {
          }
        }
      }
    },
    registerActivityType: {
      n: 'RegisterActivityType',
      i: {
        m: {
          domain: {
            r: 1
          },
          name: {
            r: 1
          },
          version: {
            r: 1
          },
          description: {
          },
          defaultTaskStartToCloseTimeout: {
          },
          defaultTaskHeartbeatTimeout: {
          },
          defaultTaskList: {
            t: 'o',
            m: {
              name: {
                r: 1
              }
            }
          },
          defaultTaskScheduleToStartTimeout: {
          },
          defaultTaskScheduleToCloseTimeout: {
          }
        }
      }
    },
    registerDomain: {
      n: 'RegisterDomain',
      i: {
        m: {
          name: {
            r: 1
          },
          description: {
          },
          workflowExecutionRetentionPeriodInDays: {
            r: 1
          }
        }
      }
    },
    registerWorkflowType: {
      n: 'RegisterWorkflowType',
      i: {
        m: {
          domain: {
            r: 1
          },
          name: {
            r: 1
          },
          version: {
            r: 1
          },
          description: {
          },
          defaultTaskStartToCloseTimeout: {
          },
          defaultExecutionStartToCloseTimeout: {
          },
          defaultTaskList: {
            t: 'o',
            m: {
              name: {
                r: 1
              }
            }
          },
          defaultChildPolicy: {
          }
        }
      }
    },
    requestCancelWorkflowExecution: {
      n: 'RequestCancelWorkflowExecution',
      i: {
        m: {
          domain: {
            r: 1
          },
          workflowId: {
            r: 1
          },
          runId: {
          }
        }
      }
    },
    respondActivityTaskCanceled: {
      n: 'RespondActivityTaskCanceled',
      i: {
        m: {
          taskToken: {
            r: 1
          },
          details: {
          }
        }
      }
    },
    respondActivityTaskCompleted: {
      n: 'RespondActivityTaskCompleted',
      i: {
        m: {
          taskToken: {
            r: 1
          },
          result: {
          }
        }
      }
    },
    respondActivityTaskFailed: {
      n: 'RespondActivityTaskFailed',
      i: {
        m: {
          taskToken: {
            r: 1
          },
          reason: {
          },
          details: {
          }
        }
      }
    },
    respondDecisionTaskCompleted: {
      n: 'RespondDecisionTaskCompleted',
      i: {
        m: {
          taskToken: {
            r: 1
          },
          decisions: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                decisionType: {
                  r: 1
                },
                scheduleActivityTaskDecisionAttributes: {
                  t: 'o',
                  m: {
                    activityType: {
                      t: 'o',
                      m: {
                        name: {
                          r: 1
                        },
                        version: {
                          r: 1
                        }
                      },
                      r: 1
                    },
                    activityId: {
                      r: 1
                    },
                    control: {
                    },
                    input: {
                    },
                    scheduleToCloseTimeout: {
                    },
                    taskList: {
                      t: 'o',
                      m: {
                        name: {
                          r: 1
                        }
                      }
                    },
                    scheduleToStartTimeout: {
                    },
                    startToCloseTimeout: {
                    },
                    heartbeatTimeout: {
                    }
                  }
                },
                requestCancelActivityTaskDecisionAttributes: {
                  t: 'o',
                  m: {
                    activityId: {
                      r: 1
                    }
                  }
                },
                completeWorkflowExecutionDecisionAttributes: {
                  t: 'o',
                  m: {
                    result: {
                    }
                  }
                },
                failWorkflowExecutionDecisionAttributes: {
                  t: 'o',
                  m: {
                    reason: {
                    },
                    details: {
                    }
                  }
                },
                cancelWorkflowExecutionDecisionAttributes: {
                  t: 'o',
                  m: {
                    details: {
                    }
                  }
                },
                continueAsNewWorkflowExecutionDecisionAttributes: {
                  t: 'o',
                  m: {
                    input: {
                    },
                    executionStartToCloseTimeout: {
                    },
                    taskList: {
                      t: 'o',
                      m: {
                        name: {
                          r: 1
                        }
                      }
                    },
                    taskStartToCloseTimeout: {
                    },
                    childPolicy: {
                    },
                    tagList: {
                      t: 'a'
                    },
                    workflowTypeVersion: {
                    }
                  }
                },
                recordMarkerDecisionAttributes: {
                  t: 'o',
                  m: {
                    markerName: {
                      r: 1
                    },
                    details: {
                    }
                  }
                },
                startTimerDecisionAttributes: {
                  t: 'o',
                  m: {
                    timerId: {
                      r: 1
                    },
                    control: {
                    },
                    startToFireTimeout: {
                      r: 1
                    }
                  }
                },
                cancelTimerDecisionAttributes: {
                  t: 'o',
                  m: {
                    timerId: {
                      r: 1
                    }
                  }
                },
                signalExternalWorkflowExecutionDecisionAttributes: {
                  t: 'o',
                  m: {
                    workflowId: {
                      r: 1
                    },
                    runId: {
                    },
                    signalName: {
                      r: 1
                    },
                    input: {
                    },
                    control: {
                    }
                  }
                },
                requestCancelExternalWorkflowExecutionDecisionAttributes: {
                  t: 'o',
                  m: {
                    workflowId: {
                      r: 1
                    },
                    runId: {
                    },
                    control: {
                    }
                  }
                },
                startChildWorkflowExecutionDecisionAttributes: {
                  t: 'o',
                  m: {
                    workflowType: {
                      t: 'o',
                      m: {
                        name: {
                          r: 1
                        },
                        version: {
                          r: 1
                        }
                      },
                      r: 1
                    },
                    workflowId: {
                      r: 1
                    },
                    control: {
                    },
                    input: {
                    },
                    executionStartToCloseTimeout: {
                    },
                    taskList: {
                      t: 'o',
                      m: {
                        name: {
                          r: 1
                        }
                      }
                    },
                    taskStartToCloseTimeout: {
                    },
                    childPolicy: {
                    },
                    tagList: {
                      t: 'a'
                    }
                  }
                }
              }
            }
          },
          executionContext: {
          }
        }
      }
    },
    signalWorkflowExecution: {
      n: 'SignalWorkflowExecution',
      i: {
        m: {
          domain: {
            r: 1
          },
          workflowId: {
            r: 1
          },
          runId: {
          },
          signalName: {
            r: 1
          },
          input: {
          }
        }
      }
    },
    startWorkflowExecution: {
      n: 'StartWorkflowExecution',
      i: {
        m: {
          domain: {
            r: 1
          },
          workflowId: {
            r: 1
          },
          workflowType: {
            t: 'o',
            m: {
              name: {
                r: 1
              },
              version: {
                r: 1
              }
            },
            r: 1
          },
          taskList: {
            t: 'o',
            m: {
              name: {
                r: 1
              }
            }
          },
          input: {
          },
          executionStartToCloseTimeout: {
          },
          tagList: {
            t: 'a'
          },
          taskStartToCloseTimeout: {
          },
          childPolicy: {
          }
        }
      }
    },
    terminateWorkflowExecution: {
      n: 'TerminateWorkflowExecution',
      i: {
        m: {
          domain: {
            r: 1
          },
          workflowId: {
            r: 1
          },
          runId: {
          },
          reason: {
          },
          details: {
          },
          childPolicy: {
          }
        }
      }
    }
  }
};
