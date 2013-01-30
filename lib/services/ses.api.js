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
  serviceName: 'email',
  resultWrapped: true,
  signingName: 'ses',
  apiVersion: '2010-12-01',
  timestampFormat: 'iso8601',
  operations: {
    deleteIdentity: {
      n: 'DeleteIdentity',
      i: {
        m: {
          Identity: {
            r: 1
          }
        }
      }
    },
    deleteVerifiedEmailAddress: {
      n: 'DeleteVerifiedEmailAddress',
      i: {
        m: {
          EmailAddress: {
            r: 1
          }
        }
      }
    },
    getIdentityDkimAttributes: {
      n: 'GetIdentityDkimAttributes',
      i: {
        m: {
          Identities: {
            t: 'a',
            r: 1
          }
        }
      },
      o: {
        DkimAttributes: {
          t: 'm',
          m: {
            t: 'o',
            m: {
              DkimEnabled: {
                t: 'b'
              },
              DkimVerificationStatus: {
              },
              DkimTokens: {
                t: 'a'
              }
            }
          }
        }
      }
    },
    getIdentityNotificationAttributes: {
      n: 'GetIdentityNotificationAttributes',
      i: {
        m: {
          Identities: {
            t: 'a',
            r: 1
          }
        }
      },
      o: {
        NotificationAttributes: {
          t: 'm',
          m: {
            t: 'o',
            m: {
              BounceTopic: {
              },
              ComplaintTopic: {
              },
              ForwardingEnabled: {
                t: 'b'
              }
            }
          }
        }
      }
    },
    getIdentityVerificationAttributes: {
      n: 'GetIdentityVerificationAttributes',
      i: {
        m: {
          Identities: {
            t: 'a',
            r: 1
          }
        }
      },
      o: {
        VerificationAttributes: {
          t: 'm',
          m: {
            t: 'o',
            m: {
              VerificationStatus: {
              },
              VerificationToken: {
              }
            }
          }
        }
      }
    },
    getSendQuota: {
      n: 'GetSendQuota',
      o: {
        Max24HourSend: {
          t: 'n'
        },
        MaxSendRate: {
          t: 'n'
        },
        SentLast24Hours: {
          t: 'n'
        }
      }
    },
    getSendStatistics: {
      n: 'GetSendStatistics',
      o: {
        SendDataPoints: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Timestamp: {
                t: 't'
              },
              DeliveryAttempts: {
                t: 'i'
              },
              Bounces: {
                t: 'i'
              },
              Complaints: {
                t: 'i'
              },
              Rejects: {
                t: 'i'
              }
            }
          }
        }
      }
    },
    listIdentities: {
      n: 'ListIdentities',
      i: {
        m: {
          IdentityType: {
          },
          NextToken: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        Identities: {
          t: 'a'
        },
        NextToken: {
        }
      }
    },
    listVerifiedEmailAddresses: {
      n: 'ListVerifiedEmailAddresses',
      o: {
        VerifiedEmailAddresses: {
          t: 'a'
        }
      }
    },
    sendEmail: {
      n: 'SendEmail',
      i: {
        m: {
          Source: {
            r: 1
          },
          Destination: {
            t: 'o',
            m: {
              ToAddresses: {
                t: 'a'
              },
              CcAddresses: {
                t: 'a'
              },
              BccAddresses: {
                t: 'a'
              }
            },
            r: 1
          },
          Message: {
            t: 'o',
            m: {
              Subject: {
                t: 'o',
                m: {
                  Data: {
                    r: 1
                  },
                  Charset: {
                  }
                },
                r: 1
              },
              Body: {
                t: 'o',
                m: {
                  Text: {
                    t: 'o',
                    m: {
                      Data: {
                        r: 1
                      },
                      Charset: {
                      }
                    }
                  },
                  Html: {
                    t: 'o',
                    m: {
                      Data: {
                        r: 1
                      },
                      Charset: {
                      }
                    }
                  }
                },
                r: 1
              }
            },
            r: 1
          },
          ReplyToAddresses: {
            t: 'a'
          },
          ReturnPath: {
          }
        }
      },
      o: {
        MessageId: {
        }
      }
    },
    sendRawEmail: {
      n: 'SendRawEmail',
      i: {
        m: {
          Source: {
          },
          Destinations: {
            t: 'a'
          },
          RawMessage: {
            t: 'o',
            m: {
              Data: {
                t: 'bl',
                r: 1
              }
            },
            r: 1
          }
        }
      },
      o: {
        MessageId: {
        }
      }
    },
    setIdentityDkimEnabled: {
      n: 'SetIdentityDkimEnabled',
      i: {
        m: {
          Identity: {
            r: 1
          },
          DkimEnabled: {
            t: 'b',
            r: 1
          }
        }
      }
    },
    setIdentityFeedbackForwardingEnabled: {
      n: 'SetIdentityFeedbackForwardingEnabled',
      i: {
        m: {
          Identity: {
            r: 1
          },
          ForwardingEnabled: {
            t: 'b',
            r: 1
          }
        }
      }
    },
    setIdentityNotificationTopic: {
      n: 'SetIdentityNotificationTopic',
      i: {
        m: {
          Identity: {
            r: 1
          },
          NotificationType: {
            r: 1
          },
          SnsTopic: {
          }
        }
      }
    },
    verifyDomainDkim: {
      n: 'VerifyDomainDkim',
      i: {
        m: {
          Domain: {
            r: 1
          }
        }
      },
      o: {
        DkimTokens: {
          t: 'a'
        }
      }
    },
    verifyDomainIdentity: {
      n: 'VerifyDomainIdentity',
      i: {
        m: {
          Domain: {
            r: 1
          }
        }
      },
      o: {
        VerificationToken: {
        }
      }
    },
    verifyEmailAddress: {
      n: 'VerifyEmailAddress',
      i: {
        m: {
          EmailAddress: {
            r: 1
          }
        }
      }
    },
    verifyEmailIdentity: {
      n: 'VerifyEmailIdentity',
      i: {
        m: {
          EmailAddress: {
            r: 1
          }
        }
      }
    }
  }
};
