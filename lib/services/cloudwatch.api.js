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
  serviceName: 'monitoring',
  resultWrapped: true,
  apiVersion: '2010-08-01',
  timestampFormat: 'iso8601',
  operations: {
    deleteAlarms: {
      n: 'DeleteAlarms',
      i: {
        m: {
          AlarmNames: {
            t: 'a',
            r: 1
          }
        }
      }
    },
    describeAlarmHistory: {
      n: 'DescribeAlarmHistory',
      i: {
        m: {
          AlarmName: {
          },
          HistoryItemType: {
          },
          StartDate: {
            t: 't'
          },
          EndDate: {
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
        AlarmHistoryItems: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              AlarmName: {
              },
              Timestamp: {
                t: 't'
              },
              HistoryItemType: {
              },
              HistorySummary: {
              },
              HistoryData: {
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    describeAlarms: {
      n: 'DescribeAlarms',
      i: {
        m: {
          AlarmNames: {
            t: 'a'
          },
          AlarmNamePrefix: {
          },
          StateValue: {
          },
          ActionPrefix: {
          },
          MaxRecords: {
            t: 'i'
          },
          NextToken: {
          }
        }
      },
      o: {
        MetricAlarms: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              AlarmName: {
              },
              AlarmArn: {
              },
              AlarmDescription: {
              },
              AlarmConfigurationUpdatedTimestamp: {
                t: 't'
              },
              ActionsEnabled: {
                t: 'b'
              },
              OKActions: {
                t: 'a'
              },
              AlarmActions: {
                t: 'a'
              },
              InsufficientDataActions: {
                t: 'a'
              },
              StateValue: {
              },
              StateReason: {
              },
              StateReasonData: {
              },
              StateUpdatedTimestamp: {
                t: 't'
              },
              MetricName: {
              },
              Namespace: {
              },
              Statistic: {
              },
              Dimensions: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    Name: {
                    },
                    Value: {
                    }
                  }
                }
              },
              Period: {
                t: 'i'
              },
              Unit: {
              },
              EvaluationPeriods: {
                t: 'i'
              },
              Threshold: {
                t: 'n'
              },
              ComparisonOperator: {
              }
            }
          }
        },
        NextToken: {
        }
      }
    },
    describeAlarmsForMetric: {
      n: 'DescribeAlarmsForMetric',
      i: {
        m: {
          MetricName: {
            r: 1
          },
          Namespace: {
            r: 1
          },
          Statistic: {
          },
          Dimensions: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Name: {
                  r: 1
                },
                Value: {
                  r: 1
                }
              }
            }
          },
          Period: {
            t: 'i'
          },
          Unit: {
          }
        }
      },
      o: {
        MetricAlarms: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              AlarmName: {
              },
              AlarmArn: {
              },
              AlarmDescription: {
              },
              AlarmConfigurationUpdatedTimestamp: {
                t: 't'
              },
              ActionsEnabled: {
                t: 'b'
              },
              OKActions: {
                t: 'a'
              },
              AlarmActions: {
                t: 'a'
              },
              InsufficientDataActions: {
                t: 'a'
              },
              StateValue: {
              },
              StateReason: {
              },
              StateReasonData: {
              },
              StateUpdatedTimestamp: {
                t: 't'
              },
              MetricName: {
              },
              Namespace: {
              },
              Statistic: {
              },
              Dimensions: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    Name: {
                    },
                    Value: {
                    }
                  }
                }
              },
              Period: {
                t: 'i'
              },
              Unit: {
              },
              EvaluationPeriods: {
                t: 'i'
              },
              Threshold: {
                t: 'n'
              },
              ComparisonOperator: {
              }
            }
          }
        }
      }
    },
    disableAlarmActions: {
      n: 'DisableAlarmActions',
      i: {
        m: {
          AlarmNames: {
            t: 'a',
            r: 1
          }
        }
      }
    },
    enableAlarmActions: {
      n: 'EnableAlarmActions',
      i: {
        m: {
          AlarmNames: {
            t: 'a',
            r: 1
          }
        }
      }
    },
    getMetricStatistics: {
      n: 'GetMetricStatistics',
      i: {
        m: {
          Namespace: {
            r: 1
          },
          MetricName: {
            r: 1
          },
          Dimensions: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Name: {
                  r: 1
                },
                Value: {
                  r: 1
                }
              }
            }
          },
          StartTime: {
            t: 't',
            r: 1
          },
          EndTime: {
            t: 't',
            r: 1
          },
          Period: {
            t: 'i',
            r: 1
          },
          Statistics: {
            t: 'a',
            r: 1
          },
          Unit: {
          }
        }
      },
      o: {
        Label: {
        },
        Datapoints: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Timestamp: {
                t: 't'
              },
              SampleCount: {
                t: 'n'
              },
              Average: {
                t: 'n'
              },
              Sum: {
                t: 'n'
              },
              Minimum: {
                t: 'n'
              },
              Maximum: {
                t: 'n'
              },
              Unit: {
              }
            }
          }
        }
      }
    },
    listMetrics: {
      n: 'ListMetrics',
      i: {
        m: {
          Namespace: {
          },
          MetricName: {
          },
          Dimensions: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Name: {
                  r: 1
                },
                Value: {
                }
              }
            }
          },
          NextToken: {
          }
        }
      },
      o: {
        Metrics: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Namespace: {
              },
              MetricName: {
              },
              Dimensions: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    Name: {
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
    putMetricAlarm: {
      n: 'PutMetricAlarm',
      i: {
        m: {
          AlarmName: {
            r: 1
          },
          AlarmDescription: {
          },
          ActionsEnabled: {
            t: 'b'
          },
          OKActions: {
            t: 'a'
          },
          AlarmActions: {
            t: 'a'
          },
          InsufficientDataActions: {
            t: 'a'
          },
          MetricName: {
            r: 1
          },
          Namespace: {
            r: 1
          },
          Statistic: {
            r: 1
          },
          Dimensions: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                Name: {
                  r: 1
                },
                Value: {
                  r: 1
                }
              }
            }
          },
          Period: {
            t: 'i',
            r: 1
          },
          Unit: {
          },
          EvaluationPeriods: {
            t: 'i',
            r: 1
          },
          Threshold: {
            t: 'n',
            r: 1
          },
          ComparisonOperator: {
            r: 1
          }
        }
      }
    },
    putMetricData: {
      n: 'PutMetricData',
      i: {
        m: {
          Namespace: {
            r: 1
          },
          MetricData: {
            t: 'a',
            m: {
              t: 'o',
              m: {
                MetricName: {
                  r: 1
                },
                Dimensions: {
                  t: 'a',
                  m: {
                    t: 'o',
                    m: {
                      Name: {
                        r: 1
                      },
                      Value: {
                        r: 1
                      }
                    }
                  }
                },
                Timestamp: {
                  t: 't'
                },
                Value: {
                  t: 'n'
                },
                StatisticValues: {
                  t: 'o',
                  m: {
                    SampleCount: {
                      t: 'n',
                      r: 1
                    },
                    Sum: {
                      t: 'n',
                      r: 1
                    },
                    Minimum: {
                      t: 'n',
                      r: 1
                    },
                    Maximum: {
                      t: 'n',
                      r: 1
                    }
                  }
                },
                Unit: {
                }
              }
            },
            r: 1
          }
        }
      }
    },
    setAlarmState: {
      n: 'SetAlarmState',
      i: {
        m: {
          AlarmName: {
            r: 1
          },
          StateValue: {
            r: 1
          },
          StateReason: {
            r: 1
          },
          StateReasonData: {
          }
        }
      }
    }
  }
};
