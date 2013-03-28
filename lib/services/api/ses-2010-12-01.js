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
  apiVersion: '2010-12-01',
  endpointPrefix: 'email',
  resultWrapped: true,
  serviceAbbreviation: 'Amazon SES',
  serviceFullName: 'Amazon Simple Email Service',
  signatureVersion: 'v4',
  signingName: 'ses',
  timestampFormat: 'iso8601',
  operations: {
    deleteIdentity: {
      name: 'DeleteIdentity',
      input: {
        type: 'structure',
        members: {
          Identity: {
            required: true
          }
        }
      },
      output: {
        type: 'structure'
      }
    },
    deleteVerifiedEmailAddress: {
      name: 'DeleteVerifiedEmailAddress',
      input: {
        type: 'structure',
        members: {
          EmailAddress: {
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
    getIdentityDkimAttributes: {
      name: 'GetIdentityDkimAttributes',
      input: {
        type: 'structure',
        members: {
          Identities: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DkimAttributes: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                DkimEnabled: {
                  type: 'boolean'
                },
                DkimVerificationStatus: {
                },
                DkimTokens: {
                  type: 'list'
                }
              }
            }
          }
        }
      }
    },
    getIdentityNotificationAttributes: {
      name: 'GetIdentityNotificationAttributes',
      input: {
        type: 'structure',
        members: {
          Identities: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          NotificationAttributes: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                BounceTopic: {
                },
                ComplaintTopic: {
                },
                ForwardingEnabled: {
                  type: 'boolean'
                }
              }
            }
          }
        }
      }
    },
    getIdentityVerificationAttributes: {
      name: 'GetIdentityVerificationAttributes',
      input: {
        type: 'structure',
        members: {
          Identities: {
            type: 'list',
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VerificationAttributes: {
            type: 'map',
            members: {
              type: 'structure',
              members: {
                VerificationStatus: {
                },
                VerificationToken: {
                }
              }
            }
          }
        }
      }
    },
    getSendQuota: {
      name: 'GetSendQuota',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          Max24HourSend: {
            type: 'float'
          },
          MaxSendRate: {
            type: 'float'
          },
          SentLast24Hours: {
            type: 'float'
          }
        }
      }
    },
    getSendStatistics: {
      name: 'GetSendStatistics',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          SendDataPoints: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Timestamp: {
                  type: 'timestamp'
                },
                DeliveryAttempts: {
                  type: 'integer'
                },
                Bounces: {
                  type: 'integer'
                },
                Complaints: {
                  type: 'integer'
                },
                Rejects: {
                  type: 'integer'
                }
              }
            }
          }
        }
      }
    },
    listIdentities: {
      name: 'ListIdentities',
      input: {
        type: 'structure',
        members: {
          IdentityType: {
          },
          NextToken: {
          },
          MaxItems: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Identities: {
            type: 'list'
          },
          NextToken: {
          }
        }
      }
    },
    listVerifiedEmailAddresses: {
      name: 'ListVerifiedEmailAddresses',
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          VerifiedEmailAddresses: {
            type: 'list'
          }
        }
      }
    },
    sendEmail: {
      name: 'SendEmail',
      input: {
        type: 'structure',
        members: {
          Source: {
            required: true
          },
          Destination: {
            type: 'structure',
            members: {
              ToAddresses: {
                type: 'list'
              },
              CcAddresses: {
                type: 'list'
              },
              BccAddresses: {
                type: 'list'
              }
            },
            required: true
          },
          Message: {
            type: 'structure',
            members: {
              Subject: {
                type: 'structure',
                members: {
                  Data: {
                    required: true
                  },
                  Charset: {
                  }
                },
                required: true
              },
              Body: {
                type: 'structure',
                members: {
                  Text: {
                    type: 'structure',
                    members: {
                      Data: {
                        required: true
                      },
                      Charset: {
                      }
                    }
                  },
                  Html: {
                    type: 'structure',
                    members: {
                      Data: {
                        required: true
                      },
                      Charset: {
                      }
                    }
                  }
                },
                required: true
              }
            },
            required: true
          },
          ReplyToAddresses: {
            type: 'list'
          },
          ReturnPath: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          MessageId: {
          }
        }
      }
    },
    sendRawEmail: {
      name: 'SendRawEmail',
      input: {
        type: 'structure',
        members: {
          Source: {
          },
          Destinations: {
            type: 'list'
          },
          RawMessage: {
            type: 'structure',
            members: {
              Data: {
                type: 'base64',
                required: true
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          MessageId: {
          }
        }
      }
    },
    setIdentityDkimEnabled: {
      name: 'SetIdentityDkimEnabled',
      input: {
        type: 'structure',
        members: {
          Identity: {
            required: true
          },
          DkimEnabled: {
            type: 'boolean',
            required: true
          }
        }
      },
      output: {
        type: 'structure'
      }
    },
    setIdentityFeedbackForwardingEnabled: {
      name: 'SetIdentityFeedbackForwardingEnabled',
      input: {
        type: 'structure',
        members: {
          Identity: {
            required: true
          },
          ForwardingEnabled: {
            type: 'boolean',
            required: true
          }
        }
      },
      output: {
        type: 'structure'
      }
    },
    setIdentityNotificationTopic: {
      name: 'SetIdentityNotificationTopic',
      input: {
        type: 'structure',
        members: {
          Identity: {
            required: true
          },
          NotificationType: {
            required: true
          },
          SnsTopic: {
          }
        }
      },
      output: {
        type: 'structure'
      }
    },
    verifyDomainDkim: {
      name: 'VerifyDomainDkim',
      input: {
        type: 'structure',
        members: {
          Domain: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DkimTokens: {
            type: 'list'
          }
        }
      }
    },
    verifyDomainIdentity: {
      name: 'VerifyDomainIdentity',
      input: {
        type: 'structure',
        members: {
          Domain: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VerificationToken: {
          }
        }
      }
    },
    verifyEmailAddress: {
      name: 'VerifyEmailAddress',
      input: {
        type: 'structure',
        members: {
          EmailAddress: {
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
    verifyEmailIdentity: {
      name: 'VerifyEmailIdentity',
      input: {
        type: 'structure',
        members: {
          EmailAddress: {
            required: true
          }
        }
      },
      output: {
        type: 'structure'
      }
    }
  }
};
