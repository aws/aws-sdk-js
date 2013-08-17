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
  apiVersion: '2012-10-25',
  endpointPrefix: 'directconnect',
  jsonVersion: '1.1',
  serviceFullName: 'AWS Direct Connect',
  signatureVersion: 'v4',
  targetPrefix: 'OvertureService',
  timestampFormat: 'iso8601',
  operations: {
    createConnection: {
      name: 'CreateConnection',
      input: {
        type: 'structure',
        members: {
          offeringId: {
            required: true
          },
          connectionName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          connectionId: {
          },
          connectionName: {
          },
          connectionState: {
          },
          region: {
          },
          location: {
          }
        }
      }
    },
    createPrivateVirtualInterface: {
      name: 'CreatePrivateVirtualInterface',
      input: {
        type: 'structure',
        members: {
          connectionId: {
          },
          newPrivateVirtualInterface: {
            type: 'structure',
            members: {
              virtualInterfaceName: {
              },
              vlan: {
                type: 'integer'
              },
              asn: {
                type: 'integer'
              },
              authKey: {
              },
              amazonAddress: {
              },
              customerAddress: {
              },
              virtualGatewayId: {
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          virtualInterfaceId: {
          },
          location: {
          },
          connectionId: {
          },
          virtualInterfaceType: {
          },
          virtualInterfaceName: {
          },
          vlan: {
            type: 'integer'
          },
          asn: {
            type: 'integer'
          },
          authKey: {
          },
          amazonAddress: {
          },
          customerAddress: {
          },
          virtualInterfaceState: {
          },
          customerRouterConfig: {
          },
          virtualGatewayId: {
          },
          routeFilterPrefixes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                cidr: {
                }
              }
            }
          }
        }
      }
    },
    createPublicVirtualInterface: {
      name: 'CreatePublicVirtualInterface',
      input: {
        type: 'structure',
        members: {
          connectionId: {
          },
          newPublicVirtualInterface: {
            type: 'structure',
            members: {
              virtualInterfaceName: {
              },
              vlan: {
                type: 'integer'
              },
              asn: {
                type: 'integer'
              },
              authKey: {
              },
              amazonAddress: {
              },
              customerAddress: {
              },
              routeFilterPrefixes: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    cidr: {
                    }
                  }
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          virtualInterfaceId: {
          },
          location: {
          },
          connectionId: {
          },
          virtualInterfaceType: {
          },
          virtualInterfaceName: {
          },
          vlan: {
            type: 'integer'
          },
          asn: {
            type: 'integer'
          },
          authKey: {
          },
          amazonAddress: {
          },
          customerAddress: {
          },
          virtualInterfaceState: {
          },
          customerRouterConfig: {
          },
          virtualGatewayId: {
          },
          routeFilterPrefixes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                cidr: {
                }
              }
            }
          }
        }
      }
    },
    deleteConnection: {
      name: 'DeleteConnection',
      input: {
        type: 'structure',
        members: {
          connectionId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          connectionId: {
          },
          connectionName: {
          },
          connectionState: {
          },
          region: {
          },
          location: {
          }
        }
      }
    },
    deleteVirtualInterface: {
      name: 'DeleteVirtualInterface',
      input: {
        type: 'structure',
        members: {
          virtualInterfaceId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          virtualInterfaceState: {
          }
        }
      }
    },
    describeConnectionDetail: {
      name: 'DescribeConnectionDetail',
      input: {
        type: 'structure',
        members: {
          connectionId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          connectionId: {
          },
          connectionName: {
          },
          connectionState: {
          },
          region: {
          },
          location: {
          },
          bandwidth: {
          },
          connectionCosts: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                name: {
                },
                unit: {
                },
                currencyCode: {
                },
                amount: {
                }
              }
            }
          },
          orderSteps: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                number: {
                },
                name: {
                },
                description: {
                },
                owner: {
                },
                sla: {
                  type: 'integer'
                },
                stepState: {
                }
              }
            }
          }
        }
      }
    },
    describeConnections: {
      name: 'DescribeConnections',
      input: {
        type: 'structure',
        members: {
          connectionId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          connections: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                connectionId: {
                },
                connectionName: {
                },
                connectionState: {
                },
                region: {
                },
                location: {
                }
              }
            }
          }
        }
      }
    },
    describeOfferingDetail: {
      name: 'DescribeOfferingDetail',
      input: {
        type: 'structure',
        members: {
          offeringId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          offeringId: {
          },
          region: {
          },
          location: {
          },
          offeringName: {
          },
          description: {
          },
          bandwidth: {
          },
          connectionCosts: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                name: {
                },
                unit: {
                },
                currencyCode: {
                },
                amount: {
                }
              }
            }
          },
          orderSteps: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                number: {
                },
                name: {
                },
                description: {
                },
                owner: {
                },
                sla: {
                  type: 'integer'
                }
              }
            }
          }
        }
      }
    },
    describeOfferings: {
      name: 'DescribeOfferings',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          offerings: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                offeringId: {
                },
                region: {
                },
                location: {
                },
                offeringName: {
                },
                description: {
                },
                bandwidth: {
                },
                connectionCosts: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      name: {
                      },
                      unit: {
                      },
                      currencyCode: {
                      },
                      amount: {
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
    describeVirtualGateways: {
      name: 'DescribeVirtualGateways',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          virtualGateways: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                virtualGatewayId: {
                },
                virtualGatewayState: {
                }
              }
            }
          }
        }
      }
    },
    describeVirtualInterfaces: {
      name: 'DescribeVirtualInterfaces',
      input: {
        type: 'structure',
        members: {
          connectionId: {
          },
          virtualInterfaceId: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          virtualInterfaces: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                virtualInterfaceId: {
                },
                location: {
                },
                connectionId: {
                },
                virtualInterfaceType: {
                },
                virtualInterfaceName: {
                },
                vlan: {
                  type: 'integer'
                },
                asn: {
                  type: 'integer'
                },
                authKey: {
                },
                amazonAddress: {
                },
                customerAddress: {
                },
                virtualInterfaceState: {
                },
                customerRouterConfig: {
                },
                virtualGatewayId: {
                },
                routeFilterPrefixes: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      cidr: {
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
  pagination: {
    describeConnections: {
      resultKey: 'connections'
    },
    describeOfferings: {
      resultKey: 'offerings'
    },
    describeVirtualGateways: {
      resultKey: 'virtualGateways'
    },
    describeVirtualInterfaces: {
      resultKey: 'virtualInterfaces'
    }
  }
};
