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
  serviceName: 'iam',
  resultWrapped: true,
  globalEndpoint: 'iam.amazonaws.com',
  apiVersion: '2010-05-08',
  timestampFormat: 'iso8601',
  operations: {
    addRoleToInstanceProfile: {
      n: 'AddRoleToInstanceProfile',
      i: {
        m: {
          InstanceProfileName: {
            r: 1
          },
          RoleName: {
            r: 1
          }
        }
      }
    },
    addUserToGroup: {
      n: 'AddUserToGroup',
      i: {
        m: {
          GroupName: {
            r: 1
          },
          UserName: {
            r: 1
          }
        }
      }
    },
    changePassword: {
      n: 'ChangePassword',
      i: {
        m: {
          OldPassword: {
            r: 1
          },
          NewPassword: {
            r: 1
          }
        }
      }
    },
    createAccessKey: {
      n: 'CreateAccessKey',
      i: {
        m: {
          UserName: {
          }
        }
      },
      o: {
        AccessKey: {
          t: 'o',
          m: {
            UserName: {
            },
            AccessKeyId: {
            },
            Status: {
            },
            SecretAccessKey: {
            },
            CreateDate: {
              t: 't'
            }
          }
        }
      }
    },
    createAccountAlias: {
      n: 'CreateAccountAlias',
      i: {
        m: {
          AccountAlias: {
            r: 1
          }
        }
      }
    },
    createGroup: {
      n: 'CreateGroup',
      i: {
        m: {
          Path: {
          },
          GroupName: {
            r: 1
          }
        }
      },
      o: {
        Group: {
          t: 'o',
          m: {
            Path: {
            },
            GroupName: {
            },
            GroupId: {
            },
            Arn: {
            },
            CreateDate: {
              t: 't'
            }
          }
        }
      }
    },
    createInstanceProfile: {
      n: 'CreateInstanceProfile',
      i: {
        m: {
          InstanceProfileName: {
            r: 1
          },
          Path: {
          }
        }
      },
      o: {
        InstanceProfile: {
          t: 'o',
          m: {
            Path: {
            },
            InstanceProfileName: {
            },
            InstanceProfileId: {
            },
            Arn: {
            },
            CreateDate: {
              t: 't'
            },
            Roles: {
              t: 'a',
              m: {
                t: 'o',
                m: {
                  Path: {
                  },
                  RoleName: {
                  },
                  RoleId: {
                  },
                  Arn: {
                  },
                  CreateDate: {
                    t: 't'
                  },
                  AssumeRolePolicyDocument: {
                  }
                }
              }
            }
          }
        }
      }
    },
    createLoginProfile: {
      n: 'CreateLoginProfile',
      i: {
        m: {
          UserName: {
            r: 1
          },
          Password: {
            r: 1
          }
        }
      },
      o: {
        LoginProfile: {
          t: 'o',
          m: {
            UserName: {
            },
            CreateDate: {
              t: 't'
            }
          }
        }
      }
    },
    createRole: {
      n: 'CreateRole',
      i: {
        m: {
          Path: {
          },
          RoleName: {
            r: 1
          },
          AssumeRolePolicyDocument: {
            r: 1
          }
        }
      },
      o: {
        Role: {
          t: 'o',
          m: {
            Path: {
            },
            RoleName: {
            },
            RoleId: {
            },
            Arn: {
            },
            CreateDate: {
              t: 't'
            },
            AssumeRolePolicyDocument: {
            }
          }
        }
      }
    },
    createUser: {
      n: 'CreateUser',
      i: {
        m: {
          Path: {
          },
          UserName: {
            r: 1
          }
        }
      },
      o: {
        User: {
          t: 'o',
          m: {
            Path: {
            },
            UserName: {
            },
            UserId: {
            },
            Arn: {
            },
            CreateDate: {
              t: 't'
            }
          }
        }
      }
    },
    createVirtualMFADevice: {
      n: 'CreateVirtualMFADevice',
      i: {
        m: {
          Path: {
          },
          VirtualMFADeviceName: {
            r: 1
          }
        }
      },
      o: {
        VirtualMFADevice: {
          t: 'o',
          m: {
            SerialNumber: {
            },
            Base32StringSeed: {
              t: 'bl'
            },
            QRCodePNG: {
              t: 'bl'
            },
            User: {
              t: 'o',
              m: {
                Path: {
                },
                UserName: {
                },
                UserId: {
                },
                Arn: {
                },
                CreateDate: {
                  t: 't'
                }
              }
            },
            EnableDate: {
              t: 't'
            }
          }
        }
      }
    },
    deactivateMFADevice: {
      n: 'DeactivateMFADevice',
      i: {
        m: {
          UserName: {
            r: 1
          },
          SerialNumber: {
            r: 1
          }
        }
      }
    },
    deleteAccessKey: {
      n: 'DeleteAccessKey',
      i: {
        m: {
          UserName: {
          },
          AccessKeyId: {
            r: 1
          }
        }
      }
    },
    deleteAccountAlias: {
      n: 'DeleteAccountAlias',
      i: {
        m: {
          AccountAlias: {
            r: 1
          }
        }
      }
    },
    deleteAccountPasswordPolicy: {
      n: 'DeleteAccountPasswordPolicy'
    },
    deleteGroup: {
      n: 'DeleteGroup',
      i: {
        m: {
          GroupName: {
            r: 1
          }
        }
      }
    },
    deleteGroupPolicy: {
      n: 'DeleteGroupPolicy',
      i: {
        m: {
          GroupName: {
            r: 1
          },
          PolicyName: {
            r: 1
          }
        }
      }
    },
    deleteInstanceProfile: {
      n: 'DeleteInstanceProfile',
      i: {
        m: {
          InstanceProfileName: {
            r: 1
          }
        }
      }
    },
    deleteLoginProfile: {
      n: 'DeleteLoginProfile',
      i: {
        m: {
          UserName: {
            r: 1
          }
        }
      }
    },
    deleteRole: {
      n: 'DeleteRole',
      i: {
        m: {
          RoleName: {
            r: 1
          }
        }
      }
    },
    deleteRolePolicy: {
      n: 'DeleteRolePolicy',
      i: {
        m: {
          RoleName: {
            r: 1
          },
          PolicyName: {
            r: 1
          }
        }
      }
    },
    deleteServerCertificate: {
      n: 'DeleteServerCertificate',
      i: {
        m: {
          ServerCertificateName: {
            r: 1
          }
        }
      }
    },
    deleteSigningCertificate: {
      n: 'DeleteSigningCertificate',
      i: {
        m: {
          UserName: {
          },
          CertificateId: {
            r: 1
          }
        }
      }
    },
    deleteUser: {
      n: 'DeleteUser',
      i: {
        m: {
          UserName: {
            r: 1
          }
        }
      }
    },
    deleteUserPolicy: {
      n: 'DeleteUserPolicy',
      i: {
        m: {
          UserName: {
            r: 1
          },
          PolicyName: {
            r: 1
          }
        }
      }
    },
    deleteVirtualMFADevice: {
      n: 'DeleteVirtualMFADevice',
      i: {
        m: {
          SerialNumber: {
            r: 1
          }
        }
      }
    },
    enableMFADevice: {
      n: 'EnableMFADevice',
      i: {
        m: {
          UserName: {
            r: 1
          },
          SerialNumber: {
            r: 1
          },
          AuthenticationCode1: {
            r: 1
          },
          AuthenticationCode2: {
            r: 1
          }
        }
      }
    },
    getAccountPasswordPolicy: {
      n: 'GetAccountPasswordPolicy',
      o: {
        PasswordPolicy: {
          t: 'o',
          m: {
            MinimumPasswordLength: {
              t: 'i'
            },
            RequireSymbols: {
              t: 'b'
            },
            RequireNumbers: {
              t: 'b'
            },
            RequireUppercaseCharacters: {
              t: 'b'
            },
            RequireLowercaseCharacters: {
              t: 'b'
            },
            AllowUsersToChangePassword: {
              t: 'b'
            }
          }
        }
      }
    },
    getAccountSummary: {
      n: 'GetAccountSummary',
      o: {
        SummaryMap: {
          t: 'm',
          m: {
            t: 'i'
          }
        }
      }
    },
    getGroup: {
      n: 'GetGroup',
      i: {
        m: {
          GroupName: {
            r: 1
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        Group: {
          t: 'o',
          m: {
            Path: {
            },
            GroupName: {
            },
            GroupId: {
            },
            Arn: {
            },
            CreateDate: {
              t: 't'
            }
          }
        },
        Users: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Path: {
              },
              UserName: {
              },
              UserId: {
              },
              Arn: {
              },
              CreateDate: {
                t: 't'
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    getGroupPolicy: {
      n: 'GetGroupPolicy',
      i: {
        m: {
          GroupName: {
            r: 1
          },
          PolicyName: {
            r: 1
          }
        }
      },
      o: {
        GroupName: {
        },
        PolicyName: {
        },
        PolicyDocument: {
        }
      }
    },
    getInstanceProfile: {
      n: 'GetInstanceProfile',
      i: {
        m: {
          InstanceProfileName: {
            r: 1
          }
        }
      },
      o: {
        InstanceProfile: {
          t: 'o',
          m: {
            Path: {
            },
            InstanceProfileName: {
            },
            InstanceProfileId: {
            },
            Arn: {
            },
            CreateDate: {
              t: 't'
            },
            Roles: {
              t: 'a',
              m: {
                t: 'o',
                m: {
                  Path: {
                  },
                  RoleName: {
                  },
                  RoleId: {
                  },
                  Arn: {
                  },
                  CreateDate: {
                    t: 't'
                  },
                  AssumeRolePolicyDocument: {
                  }
                }
              }
            }
          }
        }
      }
    },
    getLoginProfile: {
      n: 'GetLoginProfile',
      i: {
        m: {
          UserName: {
            r: 1
          }
        }
      },
      o: {
        LoginProfile: {
          t: 'o',
          m: {
            UserName: {
            },
            CreateDate: {
              t: 't'
            }
          }
        }
      }
    },
    getRole: {
      n: 'GetRole',
      i: {
        m: {
          RoleName: {
            r: 1
          }
        }
      },
      o: {
        Role: {
          t: 'o',
          m: {
            Path: {
            },
            RoleName: {
            },
            RoleId: {
            },
            Arn: {
            },
            CreateDate: {
              t: 't'
            },
            AssumeRolePolicyDocument: {
            }
          }
        }
      }
    },
    getRolePolicy: {
      n: 'GetRolePolicy',
      i: {
        m: {
          RoleName: {
            r: 1
          },
          PolicyName: {
            r: 1
          }
        }
      },
      o: {
        RoleName: {
        },
        PolicyName: {
        },
        PolicyDocument: {
        }
      }
    },
    getServerCertificate: {
      n: 'GetServerCertificate',
      i: {
        m: {
          ServerCertificateName: {
            r: 1
          }
        }
      },
      o: {
        ServerCertificate: {
          t: 'o',
          m: {
            ServerCertificateMetadata: {
              t: 'o',
              m: {
                Path: {
                },
                ServerCertificateName: {
                },
                ServerCertificateId: {
                },
                Arn: {
                },
                UploadDate: {
                  t: 't'
                }
              }
            },
            CertificateBody: {
            },
            CertificateChain: {
            }
          }
        }
      }
    },
    getUser: {
      n: 'GetUser',
      i: {
        m: {
          UserName: {
          }
        }
      },
      o: {
        User: {
          t: 'o',
          m: {
            Path: {
            },
            UserName: {
            },
            UserId: {
            },
            Arn: {
            },
            CreateDate: {
              t: 't'
            }
          }
        }
      }
    },
    getUserPolicy: {
      n: 'GetUserPolicy',
      i: {
        m: {
          UserName: {
            r: 1
          },
          PolicyName: {
            r: 1
          }
        }
      },
      o: {
        UserName: {
        },
        PolicyName: {
        },
        PolicyDocument: {
        }
      }
    },
    listAccessKeys: {
      n: 'ListAccessKeys',
      i: {
        m: {
          UserName: {
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        AccessKeyMetadata: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              UserName: {
              },
              AccessKeyId: {
              },
              Status: {
              },
              CreateDate: {
                t: 't'
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listAccountAliases: {
      n: 'ListAccountAliases',
      i: {
        m: {
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        AccountAliases: {
          t: 'a'
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listGroupPolicies: {
      n: 'ListGroupPolicies',
      i: {
        m: {
          GroupName: {
            r: 1
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        PolicyNames: {
          t: 'a'
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listGroups: {
      n: 'ListGroups',
      i: {
        m: {
          PathPrefix: {
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        Groups: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Path: {
              },
              GroupName: {
              },
              GroupId: {
              },
              Arn: {
              },
              CreateDate: {
                t: 't'
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listGroupsForUser: {
      n: 'ListGroupsForUser',
      i: {
        m: {
          UserName: {
            r: 1
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        Groups: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Path: {
              },
              GroupName: {
              },
              GroupId: {
              },
              Arn: {
              },
              CreateDate: {
                t: 't'
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listInstanceProfiles: {
      n: 'ListInstanceProfiles',
      i: {
        m: {
          PathPrefix: {
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        InstanceProfiles: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Path: {
              },
              InstanceProfileName: {
              },
              InstanceProfileId: {
              },
              Arn: {
              },
              CreateDate: {
                t: 't'
              },
              Roles: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    Path: {
                    },
                    RoleName: {
                    },
                    RoleId: {
                    },
                    Arn: {
                    },
                    CreateDate: {
                      t: 't'
                    },
                    AssumeRolePolicyDocument: {
                    }
                  }
                }
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listInstanceProfilesForRole: {
      n: 'ListInstanceProfilesForRole',
      i: {
        m: {
          RoleName: {
            r: 1
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        InstanceProfiles: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Path: {
              },
              InstanceProfileName: {
              },
              InstanceProfileId: {
              },
              Arn: {
              },
              CreateDate: {
                t: 't'
              },
              Roles: {
                t: 'a',
                m: {
                  t: 'o',
                  m: {
                    Path: {
                    },
                    RoleName: {
                    },
                    RoleId: {
                    },
                    Arn: {
                    },
                    CreateDate: {
                      t: 't'
                    },
                    AssumeRolePolicyDocument: {
                    }
                  }
                }
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listMFADevices: {
      n: 'ListMFADevices',
      i: {
        m: {
          UserName: {
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        MFADevices: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              UserName: {
              },
              SerialNumber: {
              },
              EnableDate: {
                t: 't'
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listRolePolicies: {
      n: 'ListRolePolicies',
      i: {
        m: {
          RoleName: {
            r: 1
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        PolicyNames: {
          t: 'a'
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listRoles: {
      n: 'ListRoles',
      i: {
        m: {
          PathPrefix: {
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        Roles: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Path: {
              },
              RoleName: {
              },
              RoleId: {
              },
              Arn: {
              },
              CreateDate: {
                t: 't'
              },
              AssumeRolePolicyDocument: {
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listServerCertificates: {
      n: 'ListServerCertificates',
      i: {
        m: {
          PathPrefix: {
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        ServerCertificateMetadataList: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Path: {
              },
              ServerCertificateName: {
              },
              ServerCertificateId: {
              },
              Arn: {
              },
              UploadDate: {
                t: 't'
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listSigningCertificates: {
      n: 'ListSigningCertificates',
      i: {
        m: {
          UserName: {
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        Certificates: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              UserName: {
              },
              CertificateId: {
              },
              CertificateBody: {
              },
              Status: {
              },
              UploadDate: {
                t: 't'
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listUserPolicies: {
      n: 'ListUserPolicies',
      i: {
        m: {
          UserName: {
            r: 1
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        PolicyNames: {
          t: 'a'
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listUsers: {
      n: 'ListUsers',
      i: {
        m: {
          PathPrefix: {
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        Users: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Path: {
              },
              UserName: {
              },
              UserId: {
              },
              Arn: {
              },
              CreateDate: {
                t: 't'
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    listVirtualMFADevices: {
      n: 'ListVirtualMFADevices',
      i: {
        m: {
          AssignmentStatus: {
          },
          Marker: {
          },
          MaxItems: {
            t: 'i'
          }
        }
      },
      o: {
        VirtualMFADevices: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              SerialNumber: {
              },
              Base32StringSeed: {
                t: 'bl'
              },
              QRCodePNG: {
                t: 'bl'
              },
              User: {
                t: 'o',
                m: {
                  Path: {
                  },
                  UserName: {
                  },
                  UserId: {
                  },
                  Arn: {
                  },
                  CreateDate: {
                    t: 't'
                  }
                }
              },
              EnableDate: {
                t: 't'
              }
            }
          }
        },
        IsTruncated: {
          t: 'b'
        },
        Marker: {
        }
      }
    },
    putGroupPolicy: {
      n: 'PutGroupPolicy',
      i: {
        m: {
          GroupName: {
            r: 1
          },
          PolicyName: {
            r: 1
          },
          PolicyDocument: {
            r: 1
          }
        }
      }
    },
    putRolePolicy: {
      n: 'PutRolePolicy',
      i: {
        m: {
          RoleName: {
            r: 1
          },
          PolicyName: {
            r: 1
          },
          PolicyDocument: {
            r: 1
          }
        }
      }
    },
    putUserPolicy: {
      n: 'PutUserPolicy',
      i: {
        m: {
          UserName: {
            r: 1
          },
          PolicyName: {
            r: 1
          },
          PolicyDocument: {
            r: 1
          }
        }
      }
    },
    removeRoleFromInstanceProfile: {
      n: 'RemoveRoleFromInstanceProfile',
      i: {
        m: {
          InstanceProfileName: {
            r: 1
          },
          RoleName: {
            r: 1
          }
        }
      }
    },
    removeUserFromGroup: {
      n: 'RemoveUserFromGroup',
      i: {
        m: {
          GroupName: {
            r: 1
          },
          UserName: {
            r: 1
          }
        }
      }
    },
    resyncMFADevice: {
      n: 'ResyncMFADevice',
      i: {
        m: {
          UserName: {
            r: 1
          },
          SerialNumber: {
            r: 1
          },
          AuthenticationCode1: {
            r: 1
          },
          AuthenticationCode2: {
            r: 1
          }
        }
      }
    },
    updateAccessKey: {
      n: 'UpdateAccessKey',
      i: {
        m: {
          UserName: {
          },
          AccessKeyId: {
            r: 1
          },
          Status: {
            r: 1
          }
        }
      }
    },
    updateAccountPasswordPolicy: {
      n: 'UpdateAccountPasswordPolicy',
      i: {
        m: {
          MinimumPasswordLength: {
            t: 'i'
          },
          RequireSymbols: {
            t: 'b'
          },
          RequireNumbers: {
            t: 'b'
          },
          RequireUppercaseCharacters: {
            t: 'b'
          },
          RequireLowercaseCharacters: {
            t: 'b'
          },
          AllowUsersToChangePassword: {
            t: 'b'
          }
        }
      }
    },
    updateAssumeRolePolicy: {
      n: 'UpdateAssumeRolePolicy',
      i: {
        m: {
          RoleName: {
            r: 1
          },
          PolicyDocument: {
            r: 1
          }
        }
      }
    },
    updateGroup: {
      n: 'UpdateGroup',
      i: {
        m: {
          GroupName: {
            r: 1
          },
          NewPath: {
          },
          NewGroupName: {
          }
        }
      }
    },
    updateLoginProfile: {
      n: 'UpdateLoginProfile',
      i: {
        m: {
          UserName: {
            r: 1
          },
          Password: {
          }
        }
      }
    },
    updateServerCertificate: {
      n: 'UpdateServerCertificate',
      i: {
        m: {
          ServerCertificateName: {
            r: 1
          },
          NewPath: {
          },
          NewServerCertificateName: {
          }
        }
      }
    },
    updateSigningCertificate: {
      n: 'UpdateSigningCertificate',
      i: {
        m: {
          UserName: {
          },
          CertificateId: {
            r: 1
          },
          Status: {
            r: 1
          }
        }
      }
    },
    updateUser: {
      n: 'UpdateUser',
      i: {
        m: {
          UserName: {
            r: 1
          },
          NewPath: {
          },
          NewUserName: {
          }
        }
      }
    },
    uploadServerCertificate: {
      n: 'UploadServerCertificate',
      i: {
        m: {
          Path: {
          },
          ServerCertificateName: {
            r: 1
          },
          CertificateBody: {
            r: 1
          },
          PrivateKey: {
            r: 1
          },
          CertificateChain: {
          }
        }
      },
      o: {
        ServerCertificateMetadata: {
          t: 'o',
          m: {
            Path: {
            },
            ServerCertificateName: {
            },
            ServerCertificateId: {
            },
            Arn: {
            },
            UploadDate: {
              t: 't'
            }
          }
        }
      }
    },
    uploadSigningCertificate: {
      n: 'UploadSigningCertificate',
      i: {
        m: {
          UserName: {
          },
          CertificateBody: {
            r: 1
          }
        }
      },
      o: {
        Certificate: {
          t: 'o',
          m: {
            UserName: {
            },
            CertificateId: {
            },
            CertificateBody: {
            },
            Status: {
            },
            UploadDate: {
              t: 't'
            }
          }
        }
      }
    }
  }
};
