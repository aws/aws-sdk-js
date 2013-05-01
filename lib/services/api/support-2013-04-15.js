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
  apiVersion: '2012-12-15',
  endpointPrefix: 'support',
  jsonVersion: '1.1',
  serviceFullName: 'AWS Support',
  signatureVersion: 'v4',
  targetPrefix: 'AWSSupport_20130415',
  timestampFormat: 'iso8601',
  operations: {
    addCommunicationToCase: {
      name: 'AddCommunicationToCase',
      input: {
        type: 'structure',
        members: {
          caseId: {
          },
          communicationBody: {
            required: true
          },
          ccEmailAddresses: {
            type: 'list'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          result: {
            type: 'boolean'
          }
        }
      }
    },
    createCase: {
      name: 'CreateCase',
      input: {
        type: 'structure',
        members: {
          subject: {
            required: true
          },
          serviceCode: {
            required: true
          },
          severityCode: {
          },
          categoryCode: {
            required: true
          },
          communicationBody: {
            required: true
          },
          ccEmailAddresses: {
            type: 'list'
          },
          language: {
          },
          issueType: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          caseId: {
          }
        }
      }
    },
    describeCases: {
      name: 'DescribeCases',
      input: {
        type: 'structure',
        members: {
          caseIdList: {
            type: 'list'
          },
          displayId: {
          },
          afterTime: {
          },
          beforeTime: {
          },
          includeResolvedCases: {
            type: 'boolean'
          },
          nextToken: {
          },
          maxResults: {
            type: 'integer'
          },
          language: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          cases: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                caseId: {
                },
                displayId: {
                },
                subject: {
                },
                status: {
                },
                serviceCode: {
                },
                categoryCode: {
                },
                severityCode: {
                },
                submittedBy: {
                },
                timeCreated: {
                },
                recentCommunications: {
                  type: 'structure',
                  members: {
                    communications: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          caseId: {
                          },
                          body: {
                          },
                          submittedBy: {
                          },
                          timeCreated: {
                          }
                        }
                      }
                    },
                    nextToken: {
                    }
                  }
                },
                ccEmailAddresses: {
                  type: 'list'
                },
                language: {
                }
              }
            }
          },
          nextToken: {
          }
        }
      }
    },
    describeCommunications: {
      name: 'DescribeCommunications',
      input: {
        type: 'structure',
        members: {
          caseId: {
            required: true
          },
          beforeTime: {
          },
          afterTime: {
          },
          nextToken: {
          },
          maxResults: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          communications: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                caseId: {
                },
                body: {
                },
                submittedBy: {
                },
                timeCreated: {
                }
              }
            }
          },
          nextToken: {
          }
        }
      }
    },
    describeServices: {
      name: 'DescribeServices',
      input: {
        type: 'structure',
        members: {
          serviceCodeList: {
            type: 'list'
          },
          language: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          services: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                code: {
                },
                name: {
                },
                categories: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      code: {
                      },
                      name: {
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
    describeSeverityLevels: {
      name: 'DescribeSeverityLevels',
      input: {
        type: 'structure',
        members: {
          language: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          severityLevels: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                code: {
                },
                name: {
                }
              }
            }
          }
        }
      }
    },
    resolveCase: {
      name: 'ResolveCase',
      input: {
        type: 'structure',
        members: {
          caseId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          initialCaseStatus: {
          },
          finalCaseStatus: {
          }
        }
      }
    },
    describeTrustedAdvisorCheckRefreshStatuses: {
      name: 'DescribeTrustedAdvisorCheckRefreshStatuses',
      input: {
        type: 'structure',
        members: {
          checkIds: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          statuses: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                checkId: {
                },
                status: {
                },
                millisUntilNextRefreshable: {
                  type: 'integer'
                }
              }
            }
          }
        }
      }
    },
    describeTrustedAdvisorCheckResult: {
      name: 'DescribeTrustedAdvisorCheckResult',
      input: {
        type: 'structure',
        members: {
          checkId: {
            required: true
          },
          language: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          result: {
            type: 'structure',
            members: {
              checkId: {
              },
              timestamp: {
              },
              status: {
              },
              resourcesSummary: {
                type: 'structure',
                members: {
                  resourcesProcessed: {
                    type: 'integer'
                  },
                  resourcesFlagged: {
                    type: 'integer'
                  },
                  resourcesIgnored: {
                    type: 'integer'
                  },
                  resourcesSuppressed: {
                    type: 'integer'
                  }
                }
              },
              categorySpecificSummary: {
                type: 'structure',
                members: {
                  costOptimizing: {
                    type: 'structure',
                    members: {
                      estimatedMonthlySavings: {
                        type: 'float'
                      },
                      estimatedPercentMonthlySavings: {
                        type: 'float'
                      }
                    }
                  }
                }
              },
              flaggedResources: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    status: {
                    },
                    region: {
                    },
                    resourceId: {
                    },
                    isSuppressed: {
                      type: 'boolean'
                    },
                    metadata: {
                      type: 'list'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeTrustedAdvisorCheckSummaries: {
      name: 'DescribeTrustedAdvisorCheckSummaries',
      input: {
        type: 'structure',
        members: {
          checkIds: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          summaries: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                checkId: {
                },
                timestamp: {
                },
                status: {
                },
                hasFlaggedResources: {
                  type: 'boolean'
                },
                resourcesSummary: {
                  type: 'structure',
                  members: {
                    resourcesProcessed: {
                      type: 'integer'
                    },
                    resourcesFlagged: {
                      type: 'integer'
                    },
                    resourcesIgnored: {
                      type: 'integer'
                    },
                    resourcesSuppressed: {
                      type: 'integer'
                    }
                  }
                },
                categorySpecificSummary: {
                  type: 'structure',
                  members: {
                    costOptimizing: {
                      type: 'structure',
                      members: {
                        estimatedMonthlySavings: {
                          type: 'float'
                        },
                        estimatedPercentMonthlySavings: {
                          type: 'float'
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
    describeTrustedAdvisorChecks: {
      name: 'DescribeTrustedAdvisorChecks',
      input: {
        type: 'structure',
        members: {
          language: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          checks: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                id: {
                },
                name: {
                },
                description: {
                },
                category: {
                },
                metadata: {
                  type: 'list'
                }
              }
            }
          }
        }
      }
    },
    refreshTrustedAdvisorCheck: {
      name: 'RefreshTrustedAdvisorCheck',
      input: {
        type: 'structure',
        members: {
          checkId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          status: {
            type: 'structure',
            members: {
              checkId: {
              },
              status: {
              },
              millisUntilNextRefreshable: {
                type: 'integer'
              }
            }
          }
        }
      }
    }
  }
};
