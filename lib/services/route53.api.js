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
  format: 'rest-xml',
  apiVersion: '2012-12-12',
  endpointPrefix: 'route53',
  globalEndpoint: 'route53.amazonaws.com',
  serviceAbbreviation: 'Route 53',
  serviceFullName: 'Amazon Route 53',
  signatureVersion: 'v3https',
  timestampFormat: 'iso8601',
  xmlnamespace: 'https://route53.amazonaws.com/doc/2012-12-12/',
  operations: {
    changeResourceRecordSets: {
      name: 'ChangeResourceRecordSets',
      http: {
        method: 'POST',
        uri: '/2012-12-12/hostedzone/{HostedZoneId}/rrset/'
      },
      input: {
        payload: [
          'ChangeBatch'
        ],
        wrapper: 'ChangeResourceRecordSetsRequest',
        type: 'structure',
        members: {
          HostedZoneId: {
            required: true,
            location: 'uri'
          },
          ChangeBatch: {
            type: 'structure',
            members: {
              Comment: {
              },
              Changes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Action: {
                      required: true
                    },
                    ResourceRecordSet: {
                      type: 'structure',
                      members: {
                        Name: {
                          required: true
                        },
                        Type: {
                          required: true
                        },
                        SetIdentifier: {
                        },
                        Weight: {
                          type: 'integer'
                        },
                        Region: {
                        },
                        Failover: {
                        },
                        TTL: {
                          type: 'integer'
                        },
                        ResourceRecords: {
                          type: 'list',
                          members: {
                            type: 'structure',
                            members: {
                              Value: {
                                required: true
                              }
                            },
                            order: [
                              'Value'
                            ],
                            name: 'ResourceRecord'
                          }
                        },
                        AliasTarget: {
                          type: 'structure',
                          members: {
                            HostedZoneId: {
                              required: true
                            },
                            DNSName: {
                              required: true
                            },
                            EvaluateTargetHealth: {
                              type: 'boolean',
                              required: true
                            }
                          },
                          order: [
                            'HostedZoneId',
                            'DNSName',
                            'EvaluateTargetHealth'
                          ]
                        },
                        HealthCheckId: {
                        }
                      },
                      order: [
                        'Name',
                        'Type',
                        'SetIdentifier',
                        'Weight',
                        'Region',
                        'Failover',
                        'TTL',
                        'ResourceRecords',
                        'AliasTarget',
                        'HealthCheckId'
                      ],
                      required: true
                    }
                  },
                  order: [
                    'Action',
                    'ResourceRecordSet'
                  ],
                  name: 'Change'
                },
                required: true
              }
            },
            order: [
              'Comment',
              'Changes'
            ],
            required: true
          }
        },
        order: [
          'HostedZoneId',
          'ChangeBatch'
        ]
      },
      output: {
        type: 'structure',
        members: {
          ChangeInfo: {
            type: 'structure',
            members: {
              Id: {
              },
              Status: {
              },
              SubmittedAt: {
                type: 'timestamp'
              },
              Comment: {
              }
            }
          }
        }
      }
    },
    createHealthCheck: {
      name: 'CreateHealthCheck',
      http: {
        method: 'POST',
        uri: '/2012-12-12/healthcheck'
      },
      input: {
        payload: [
          'CallerReference',
          'HealthCheckConfig'
        ],
        wrapper: 'CreateHealthCheckRequest',
        type: 'structure',
        members: {
          CallerReference: {
            required: true
          },
          HealthCheckConfig: {
            type: 'structure',
            members: {
              IPAddress: {
                required: true
              },
              Port: {
                type: 'integer'
              },
              Type: {
                required: true
              },
              ResourcePath: {
              },
              FullyQualifiedDomainName: {
              }
            },
            order: [
              'IPAddress',
              'Port',
              'Type',
              'ResourcePath',
              'FullyQualifiedDomainName'
            ],
            required: true
          }
        },
        order: [
          'CallerReference',
          'HealthCheckConfig'
        ]
      },
      output: {
        type: 'structure',
        members: {
          HealthCheck: {
            type: 'structure',
            members: {
              Id: {
              },
              CallerReference: {
              },
              HealthCheckConfig: {
                type: 'structure',
                members: {
                  IPAddress: {
                  },
                  Port: {
                    type: 'integer'
                  },
                  Type: {
                  },
                  ResourcePath: {
                  },
                  FullyQualifiedDomainName: {
                  }
                }
              }
            }
          },
          Location: {
            location: 'header',
            name: 'Location'
          }
        }
      }
    },
    createHostedZone: {
      name: 'CreateHostedZone',
      http: {
        method: 'POST',
        uri: '/2012-12-12/hostedzone'
      },
      input: {
        payload: [
          'Name',
          'CallerReference',
          'HostedZoneConfig'
        ],
        wrapper: 'CreateHostedZoneRequest',
        type: 'structure',
        members: {
          Name: {
            required: true
          },
          CallerReference: {
            required: true
          },
          HostedZoneConfig: {
            type: 'structure',
            members: {
              Comment: {
              }
            },
            order: [
              'Comment'
            ]
          }
        },
        order: [
          'Name',
          'CallerReference',
          'HostedZoneConfig'
        ]
      },
      output: {
        type: 'structure',
        members: {
          HostedZone: {
            type: 'structure',
            members: {
              Id: {
              },
              Name: {
              },
              CallerReference: {
              },
              Config: {
                type: 'structure',
                members: {
                  Comment: {
                  }
                }
              },
              ResourceRecordSetCount: {
                type: 'integer'
              }
            }
          },
          ChangeInfo: {
            type: 'structure',
            members: {
              Id: {
              },
              Status: {
              },
              SubmittedAt: {
                type: 'timestamp'
              },
              Comment: {
              }
            }
          },
          DelegationSet: {
            type: 'structure',
            members: {
              NameServers: {
                type: 'list',
                members: {
                  name: 'NameServer'
                }
              }
            }
          },
          Location: {
            location: 'header',
            name: 'Location'
          }
        }
      }
    },
    deleteHealthCheck: {
      name: 'DeleteHealthCheck',
      http: {
        method: 'DELETE',
        uri: '/2012-12-12/healthcheck/{HealthCheckId}'
      },
      input: {
        type: 'structure',
        members: {
          HealthCheckId: {
            required: true,
            location: 'uri'
          }
        },
        order: [
          'HealthCheckId'
        ]
      },
      output: {
        type: 'structure'
      }
    },
    deleteHostedZone: {
      name: 'DeleteHostedZone',
      http: {
        method: 'DELETE',
        uri: '/2012-12-12/hostedzone/{Id}'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            required: true,
            location: 'uri'
          }
        },
        order: [
          'Id'
        ]
      },
      output: {
        type: 'structure',
        members: {
          ChangeInfo: {
            type: 'structure',
            members: {
              Id: {
              },
              Status: {
              },
              SubmittedAt: {
                type: 'timestamp'
              },
              Comment: {
              }
            }
          }
        }
      }
    },
    getChange: {
      name: 'GetChange',
      http: {
        method: 'GET',
        uri: '/2012-12-12/change/{Id}'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            required: true,
            location: 'uri'
          }
        },
        order: [
          'Id'
        ]
      },
      output: {
        type: 'structure',
        members: {
          ChangeInfo: {
            type: 'structure',
            members: {
              Id: {
              },
              Status: {
              },
              SubmittedAt: {
                type: 'timestamp'
              },
              Comment: {
              }
            }
          }
        }
      }
    },
    getHealthCheck: {
      name: 'GetHealthCheck',
      http: {
        method: 'GET',
        uri: '/2012-12-12/healthcheck/{HealthCheckId}'
      },
      input: {
        type: 'structure',
        members: {
          HealthCheckId: {
            required: true,
            location: 'uri'
          }
        },
        order: [
          'HealthCheckId'
        ]
      },
      output: {
        type: 'structure',
        members: {
          HealthCheck: {
            type: 'structure',
            members: {
              Id: {
              },
              CallerReference: {
              },
              HealthCheckConfig: {
                type: 'structure',
                members: {
                  IPAddress: {
                  },
                  Port: {
                    type: 'integer'
                  },
                  Type: {
                  },
                  ResourcePath: {
                  },
                  FullyQualifiedDomainName: {
                  }
                }
              }
            }
          }
        }
      }
    },
    getHostedZone: {
      name: 'GetHostedZone',
      http: {
        method: 'GET',
        uri: '/2012-12-12/hostedzone/{Id}'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            required: true,
            location: 'uri'
          }
        },
        order: [
          'Id'
        ]
      },
      output: {
        type: 'structure',
        members: {
          HostedZone: {
            type: 'structure',
            members: {
              Id: {
              },
              Name: {
              },
              CallerReference: {
              },
              Config: {
                type: 'structure',
                members: {
                  Comment: {
                  }
                }
              },
              ResourceRecordSetCount: {
                type: 'integer'
              }
            }
          },
          DelegationSet: {
            type: 'structure',
            members: {
              NameServers: {
                type: 'list',
                members: {
                  name: 'NameServer'
                }
              }
            }
          }
        }
      }
    },
    listHealthChecks: {
      name: 'ListHealthChecks',
      http: {
        method: 'GET',
        uri: '/2012-12-12/healthcheck?marker={Marker}&maxitems={MaxItems}'
      },
      input: {
        type: 'structure',
        members: {
          Marker: {
            location: 'uri'
          },
          MaxItems: {
            location: 'uri'
          }
        },
        order: [
          'Marker',
          'MaxItems'
        ]
      },
      output: {
        type: 'structure',
        members: {
          HealthChecks: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Id: {
                },
                CallerReference: {
                },
                HealthCheckConfig: {
                  type: 'structure',
                  members: {
                    IPAddress: {
                    },
                    Port: {
                      type: 'integer'
                    },
                    Type: {
                    },
                    ResourcePath: {
                    },
                    FullyQualifiedDomainName: {
                    }
                  }
                }
              },
              name: 'HealthCheck'
            }
          },
          Marker: {
          },
          IsTruncated: {
            type: 'boolean'
          },
          NextMarker: {
          },
          MaxItems: {
          }
        }
      }
    },
    listHostedZones: {
      name: 'ListHostedZones',
      http: {
        method: 'GET',
        uri: '/2012-12-12/hostedzone?marker={Marker}&maxitems={MaxItems}'
      },
      input: {
        type: 'structure',
        members: {
          Marker: {
            location: 'uri'
          },
          MaxItems: {
            location: 'uri'
          }
        },
        order: [
          'Marker',
          'MaxItems'
        ]
      },
      output: {
        type: 'structure',
        members: {
          HostedZones: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Id: {
                },
                Name: {
                },
                CallerReference: {
                },
                Config: {
                  type: 'structure',
                  members: {
                    Comment: {
                    }
                  }
                },
                ResourceRecordSetCount: {
                  type: 'integer'
                }
              },
              name: 'HostedZone'
            }
          },
          Marker: {
          },
          IsTruncated: {
            type: 'boolean'
          },
          NextMarker: {
          },
          MaxItems: {
          }
        }
      }
    },
    listResourceRecordSets: {
      name: 'ListResourceRecordSets',
      http: {
        method: 'GET',
        uri: '/2012-12-12/hostedzone/{HostedZoneId}/rrset?type={StartRecordType}&name={StartRecordName}&identifier={StartRecordIdentifier}&maxitems={MaxItems}'
      },
      input: {
        type: 'structure',
        members: {
          HostedZoneId: {
            required: true,
            location: 'uri'
          },
          StartRecordName: {
            location: 'uri'
          },
          StartRecordType: {
            location: 'uri'
          },
          StartRecordIdentifier: {
            location: 'uri'
          },
          MaxItems: {
            location: 'uri'
          }
        },
        order: [
          'HostedZoneId',
          'StartRecordName',
          'StartRecordType',
          'StartRecordIdentifier',
          'MaxItems'
        ]
      },
      output: {
        type: 'structure',
        members: {
          ResourceRecordSets: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Name: {
                },
                Type: {
                },
                SetIdentifier: {
                },
                Weight: {
                  type: 'integer'
                },
                Region: {
                },
                Failover: {
                },
                TTL: {
                  type: 'integer'
                },
                ResourceRecords: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Value: {
                      }
                    },
                    name: 'ResourceRecord'
                  }
                },
                AliasTarget: {
                  type: 'structure',
                  members: {
                    HostedZoneId: {
                    },
                    DNSName: {
                    },
                    EvaluateTargetHealth: {
                      type: 'boolean'
                    }
                  }
                },
                HealthCheckId: {
                }
              },
              name: 'ResourceRecordSet'
            }
          },
          IsTruncated: {
            type: 'boolean'
          },
          NextRecordName: {
          },
          NextRecordType: {
          },
          NextRecordIdentifier: {
          },
          MaxItems: {
          }
        }
      }
    }
  }
};
