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
  apiVersion: '2006-03-01',
  checksumFormat: 'md5',
  endpointPrefix: 's3',
  globalEndpoint: 's3.amazonaws.com',
  serviceAbbreviation: 'Amazon S3',
  serviceFullName: 'Amazon Simple Storage Service',
  signatureVersion: 's3',
  timestampFormat: 'rfc822',
  xmlnamespace: 'http://s3.amazonaws.com/doc/2006-03-01/',
  operations: {
    abortMultipartUpload: {
      name: 'AbortMultipartUpload',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}/{Key}?uploadId={UploadId}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          UploadId: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    completeMultipartUpload: {
      name: 'CompleteMultipartUpload',
      http: {
        method: 'POST',
        uri: '/{Bucket}/{Key}?uploadId={UploadId}'
      },
      input: {
        payload: 'MultipartUpload',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          MultipartUpload: {
            type: 'structure',
            name: 'CompleteMultipartUpload',
            members: {
              Parts: {
                type: 'list',
                flattened: true,
                name: 'Part',
                members: {
                  type: 'structure',
                  members: {
                    ETag: {
                    },
                    PartNumber: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          UploadId: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Location: {
          },
          Bucket: {
          },
          Key: {
          },
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          Expiration: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-expiration'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          VersionId: {
            location: 'header',
            name: 'x-amz-version-id'
          }
        }
      }
    },
    copyObject: {
      name: 'CopyObject',
      http: {
        method: 'PUT',
        uri: '/{Bucket}/{Key}'
      },
      input: {
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          CacheControl: {
            location: 'header',
            name: 'Cache-Control'
          },
          ContentDisposition: {
            location: 'header',
            name: 'Content-Disposition'
          },
          ContentEncoding: {
            location: 'header',
            name: 'Content-Encoding'
          },
          ContentLanguage: {
            location: 'header',
            name: 'Content-Language'
          },
          ContentType: {
            location: 'header',
            name: 'Content-Type'
          },
          CopySource: {
            location: 'header',
            name: 'x-amz-copy-source',
            required: true
          },
          CopySourceIfMatch: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-match'
          },
          CopySourceIfModifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-modified-since'
          },
          CopySourceIfNoneMatch: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-none-match'
          },
          CopySourceIfUnmodifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-unmodified-since'
          },
          Expires: {
            type: 'timestamp',
            location: 'header',
            name: 'Expires'
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          Metadata: {
            type: 'map',
            location: 'header',
            name: 'x-amz-meta-'
          },
          MetadataDirective: {
            location: 'header',
            name: 'x-amz-metadata-directive'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          StorageClass: {
            location: 'header',
            name: 'x-amz-storage-class'
          },
          WebsiteRedirectLocation: {
            location: 'header',
            name: 'x-amz-website-redirect-location'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Expiration: {
            location: 'header',
            name: 'x-amz-expiration'
          },
          CopySourceVersionId: {
            location: 'header',
            name: 'x-amz-copy-source-version-id'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          ETag: {
          },
          LastModified: {
          }
        }
      }
    },
    createBucket: {
      name: 'CreateBucket',
      alias: 'PutBucket',
      http: {
        method: 'PUT',
        uri: '/{Bucket}'
      },
      input: {
        payload: 'CreateBucketConfiguration',
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          CreateBucketConfiguration: {
            type: 'structure',
            members: {
              LocationConstraint: {
              }
            }
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWrite: {
            location: 'header',
            name: 'x-amz-grant-write'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Location: {
            location: 'header',
            name: 'Location'
          }
        }
      }
    },
    createMultipartUpload: {
      name: 'CreateMultipartUpload',
      alias: 'InitiateMultipartUpload',
      http: {
        method: 'POST',
        uri: '/{Bucket}/{Key}?uploads'
      },
      input: {
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          CacheControl: {
            location: 'header',
            name: 'Cache-Control'
          },
          ContentDisposition: {
            location: 'header',
            name: 'Content-Disposition'
          },
          ContentEncoding: {
            location: 'header',
            name: 'Content-Encoding'
          },
          ContentLanguage: {
            location: 'header',
            name: 'Content-Language'
          },
          ContentType: {
            location: 'header',
            name: 'Content-Type'
          },
          Expires: {
            type: 'timestamp',
            location: 'header',
            name: 'Expires'
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          Metadata: {
            type: 'map',
            location: 'header',
            name: 'x-amz-meta-'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          StorageClass: {
            location: 'header',
            name: 'x-amz-storage-class'
          },
          WebsiteRedirectLocation: {
            location: 'header',
            name: 'x-amz-website-redirect-location'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Bucket: {
            name: 'Bucket'
          },
          Key: {
          },
          UploadId: {
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          }
        }
      }
    },
    deleteBucket: {
      name: 'DeleteBucket',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteBucketCors: {
      name: 'DeleteBucketCors',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}?cors'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteBucketLifecycle: {
      name: 'DeleteBucketLifecycle',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}?lifecycle'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteBucketPolicy: {
      name: 'DeleteBucketPolicy',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}?policy'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteBucketTagging: {
      name: 'DeleteBucketTagging',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}?tagging'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteBucketWebsite: {
      name: 'DeleteBucketWebsite',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}?website'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteObject: {
      name: 'DeleteObject',
      http: {
        method: 'DELETE',
        uri: '/{Bucket}/{Key}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DeleteMarker: {
            location: 'header',
            name: 'x-amz-delete-marker'
          },
          VersionId: {
            location: 'header',
            name: 'x-amz-version-id'
          }
        }
      }
    },
    deleteObjects: {
      name: 'DeleteObjects',
      alias: 'DeleteMultipleObjects',
      http: {
        method: 'POST',
        uri: '/{Bucket}?delete'
      },
      input: {
        payload: 'Delete',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Delete: {
            type: 'structure',
            required: true,
            members: {
              Objects: {
                type: 'list',
                flattened: true,
                name: 'Object',
                required: true,
                members: {
                  type: 'structure',
                  members: {
                    Key: {
                      required: true
                    },
                    VersionId: {
                    }
                  }
                }
              },
              Quiet: {
                type: 'boolean'
              }
            }
          },
          MFA: {
            location: 'header',
            name: 'x-amz-mfa'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Deleted: {
            type: 'list',
            flattened: true,
            members: {
              type: 'structure',
              members: {
                Key: {
                },
                VersionId: {
                },
                DeleteMarker: {
                  type: 'boolean'
                },
                DeleteMarkerVersionId: {
                }
              }
            }
          },
          Error: {
            type: 'list',
            flattened: true,
            name: 'Errors',
            members: {
              type: 'structure',
              members: {
                Key: {
                },
                VersionId: {
                },
                Code: {
                },
                Message: {
                }
              }
            }
          }
        }
      }
    },
    getBucketAcl: {
      name: 'GetBucketAcl',
      http: {
        method: 'GET',
        uri: '/{Bucket}?acl'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Owner: {
            type: 'structure',
            members: {
              ID: {
              },
              DisplayName: {
              }
            }
          },
          AccessControlList: {
            type: 'list',
            name: 'Grants',
            members: {
              type: 'structure',
              name: 'Grant',
              members: {
                Grantee: {
                  type: 'structure',
                  xmlns: {
                    prefix: 'xsi',
                    uri: 'http://www.w3.org/2001/XMLSchema-instance'
                  },
                  members: {
                    'xsi:type': {
                      attribute: true,
                      name: 'Type'
                    },
                    ID: {
                    },
                    DisplayName: {
                    },
                    EmailAddress: {
                    },
                    URI: {
                    }
                  }
                },
                Permission: {
                }
              }
            }
          }
        }
      }
    },
    getBucketCors: {
      name: 'GetBucketCors',
      http: {
        method: 'GET',
        uri: '/{Bucket}?cors'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CORSRule: {
            type: 'list',
            flattened: true,
            name: 'CORSRules',
            members: {
              type: 'structure',
              members: {
                AllowedHeader: {
                  type: 'list',
                  flattened: true,
                  name: 'AllowedHeaders'
                },
                AllowedOrigin: {
                  type: 'list',
                  flattened: true,
                  name: 'AllowedOrigins'
                },
                AllowedMethod: {
                  type: 'list',
                  flattened: true,
                  name: 'AllowedMethods'
                },
                MaxAgeSeconds: {
                  type: 'integer'
                },
                ExposeHeader: {
                  type: 'list',
                  flattened: true,
                  name: 'ExposeHeaders'
                }
              }
            }
          }
        }
      }
    },
    getBucketLifecycle: {
      name: 'GetBucketLifecycle',
      http: {
        method: 'GET',
        uri: '/{Bucket}?lifecycle'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Rule: {
            type: 'list',
            flattened: true,
            name: 'Rules',
            members: {
              type: 'structure',
              members: {
                ID: {
                },
                Prefix: {
                },
                Status: {
                },
                Transition: {
                  type: 'structure',
                  members: {
                    Days: {
                      type: 'integer'
                    },
                    Date: {
                      type: 'timestamp',
                      format: 'iso8601'
                    },
                    StorageClass: {
                    }
                  }
                },
                Expiration: {
                  type: 'structure',
                  members: {
                    Days: {
                      type: 'integer'
                    },
                    Date: {
                      type: 'timestamp',
                      format: 'iso8601'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    getBucketLocation: {
      name: 'GetBucketLocation',
      http: {
        method: 'GET',
        uri: '/{Bucket}?location'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LocationConstraint: {
          }
        }
      }
    },
    getBucketLogging: {
      name: 'GetBucketLogging',
      http: {
        method: 'GET',
        uri: '/{Bucket}?logging'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LoggingEnabled: {
            type: 'structure',
            members: {
              TargetBucket: {
              },
              TargetPrefix: {
              },
              TargetGrants: {
                type: 'list',
                members: {
                  type: 'structure',
                  name: 'Grant',
                  members: {
                    Grantee: {
                      type: 'structure',
                      xmlns: {
                        prefix: 'xsi',
                        uri: 'http://www.w3.org/2001/XMLSchema-instance'
                      },
                      members: {
                        'xsi:type': {
                          attribute: true,
                          name: 'Type'
                        },
                        ID: {
                        },
                        DisplayName: {
                        },
                        EmailAddress: {
                        },
                        URI: {
                        }
                      }
                    },
                    Permission: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    getBucketNotification: {
      name: 'GetBucketNotification',
      http: {
        method: 'GET',
        uri: '/{Bucket}?notification'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TopicConfiguration: {
            type: 'structure',
            members: {
              Topic: {
              },
              Event: {
              }
            }
          }
        }
      }
    },
    getBucketPolicy: {
      name: 'GetBucketPolicy',
      http: {
        method: 'GET',
        uri: '/{Bucket}?policy'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Policy: {
          }
        },
        payload: 'Policy'
      }
    },
    getBucketRequestPayment: {
      name: 'GetBucketRequestPayment',
      http: {
        method: 'GET',
        uri: '/{Bucket}?requestPayment'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Payer: {
          }
        }
      }
    },
    getBucketTagging: {
      name: 'GetBucketTagging',
      http: {
        method: 'GET',
        uri: '/{Bucket}?tagging'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          TagSet: {
            type: 'list',
            members: {
              type: 'structure',
              name: 'Tag',
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
    getBucketVersioning: {
      name: 'GetBucketVersioning',
      http: {
        method: 'GET',
        uri: '/{Bucket}?versioning'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Status: {
          },
          MFADelete: {
          }
        }
      }
    },
    getBucketWebsite: {
      name: 'GetBucketWebsite',
      http: {
        method: 'GET',
        uri: '/{Bucket}?website'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          RedirectAllRequestsTo: {
            type: 'structure',
            members: {
              HostName: {
              },
              Protocol: {
              }
            }
          },
          IndexDocument: {
            type: 'structure',
            members: {
              Suffix: {
              }
            }
          },
          ErrorDocument: {
            type: 'structure',
            members: {
              Key: {
              }
            }
          },
          RoutingRules: {
            type: 'list',
            members: {
              type: 'structure',
              name: 'RoutingRule',
              members: {
                Condition: {
                  type: 'structure',
                  members: {
                    KeyPrefixEquals: {
                    },
                    HttpErrorCodeReturnedEquals: {
                    }
                  }
                },
                Redirect: {
                  type: 'structure',
                  members: {
                    ReplaceKeyPrefixWith: {
                    },
                    ReplaceKeyWith: {
                    },
                    HttpRedirectCode: {
                    },
                    HostName: {
                    },
                    Protocol: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    getObject: {
      name: 'GetObject',
      http: {
        method: 'GET',
        uri: '/{Bucket}/{Key}?versionId={VersionId}&response-content-type={ResponseContentType}&response-content-language={ResponseContentLanguage}&response-expires={ResponseExpires}&response-cache-control={ResponseCacheControl}&response-content-disposition={ResponseContentDisposition}&response-content-encoding={ResponseContentEncoding}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          IfMatch: {
            location: 'header',
            name: 'If-Match'
          },
          IfModifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'If-Modified-Since'
          },
          IfNoneMatch: {
            location: 'header',
            name: 'If-None-Match'
          },
          IfUnmodifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'If-Unmodified-Since'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          Range: {
            location: 'header',
            name: 'Range'
          },
          ResponseCacheControl: {
            location: 'uri'
          },
          ResponseContentDisposition: {
            location: 'uri'
          },
          ResponseContentEncoding: {
            location: 'uri'
          },
          ResponseContentLanguage: {
            location: 'uri'
          },
          ResponseContentType: {
            location: 'uri'
          },
          ResponseExpires: {
            type: 'timestamp',
            location: 'uri'
          },
          VersionId: {
            location: 'uri',
            name: 'versionId'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Body: {
            type: 'binary',
            streaming: true
          },
          DeleteMarker: {
            location: 'header',
            name: 'x-amz-delete-marker'
          },
          AcceptRanges: {
            location: 'header',
            name: 'accept-ranges'
          },
          Expiration: {
            location: 'header',
            name: 'x-amz-expiration'
          },
          Restore: {
            location: 'header',
            name: 'x-amz-restore'
          },
          LastModified: {
            type: 'timestamp',
            location: 'header',
            name: 'Last-Modified'
          },
          ContentLength: {
            type: 'integer',
            location: 'header',
            name: 'Content-Length'
          },
          ETag: {
            location: 'header'
          },
          MissingMeta: {
            type: 'integer',
            location: 'header',
            name: 'x-amz-missing-meta'
          },
          VersionId: {
            location: 'header',
            name: 'x-amz-version-id'
          },
          CacheControl: {
            location: 'header',
            name: 'Cache-Control'
          },
          ContentDisposition: {
            location: 'header',
            name: 'Content-Disposition'
          },
          ContentEncoding: {
            location: 'header',
            name: 'Content-Encoding'
          },
          ContentLanguage: {
            location: 'header',
            name: 'Content-Language'
          },
          ContentType: {
            location: 'header',
            name: 'Content-Type'
          },
          Expires: {
            type: 'timestamp',
            location: 'header',
            name: 'Expires'
          },
          WebsiteRedirectLocation: {
            location: 'header',
            name: 'x-amz-website-redirect-location'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          Metadata: {
            type: 'map',
            location: 'header',
            name: 'x-amz-meta-'
          }
        },
        payload: 'Body'
      }
    },
    getObjectAcl: {
      name: 'GetObjectAcl',
      http: {
        method: 'GET',
        uri: '/{Bucket}/{Key}?acl&versionId={VersionId}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          VersionId: {
            location: 'uri',
            name: 'versionId'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Owner: {
            type: 'structure',
            members: {
              ID: {
              },
              DisplayName: {
              }
            }
          },
          AccessControlList: {
            type: 'list',
            name: 'Grants',
            members: {
              type: 'structure',
              name: 'Grant',
              members: {
                Grantee: {
                  type: 'structure',
                  xmlns: {
                    prefix: 'xsi',
                    uri: 'http://www.w3.org/2001/XMLSchema-instance'
                  },
                  members: {
                    'xsi:type': {
                      attribute: true,
                      name: 'Type'
                    },
                    ID: {
                    },
                    DisplayName: {
                    },
                    EmailAddress: {
                    },
                    URI: {
                    }
                  }
                },
                Permission: {
                }
              }
            }
          }
        }
      }
    },
    getObjectTorrent: {
      name: 'GetObjectTorrent',
      http: {
        method: 'GET',
        uri: '/{Bucket}/{Key}?torrent'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Body: {
            type: 'binary',
            streaming: true
          }
        },
        payload: 'Body'
      }
    },
    headBucket: {
      name: 'HeadBucket',
      http: {
        method: 'HEAD',
        uri: '/{Bucket}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    headObject: {
      name: 'HeadObject',
      http: {
        method: 'HEAD',
        uri: '/{Bucket}/{Key}?versionId={VersionId}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          IfMatch: {
            location: 'header',
            name: 'If-Match'
          },
          IfModifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'If-Modified-Since'
          },
          IfNoneMatch: {
            location: 'header',
            name: 'If-None-Match'
          },
          IfUnmodifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'If-Unmodified-Since'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          Range: {
            location: 'header',
            name: 'Range'
          },
          VersionId: {
            location: 'uri',
            name: 'versionId'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DeleteMarker: {
            location: 'header',
            name: 'x-amz-delete-marker'
          },
          AcceptRanges: {
            location: 'header',
            name: 'accept-ranges'
          },
          Expiration: {
            location: 'header',
            name: 'x-amz-expiration'
          },
          Restore: {
            location: 'header',
            name: 'x-amz-restore'
          },
          LastModified: {
            type: 'timestamp',
            location: 'header',
            name: 'Last-Modified'
          },
          ContentLength: {
            type: 'integer',
            location: 'header',
            name: 'Content-Length'
          },
          ETag: {
            location: 'header'
          },
          MissingMeta: {
            type: 'integer',
            location: 'header',
            name: 'x-amz-missing-meta'
          },
          VersionId: {
            location: 'header',
            name: 'x-amz-version-id'
          },
          CacheControl: {
            location: 'header',
            name: 'Cache-Control'
          },
          ContentDisposition: {
            location: 'header',
            name: 'Content-Disposition'
          },
          ContentEncoding: {
            location: 'header',
            name: 'Content-Encoding'
          },
          ContentLanguage: {
            location: 'header',
            name: 'Content-Language'
          },
          ContentType: {
            location: 'header',
            name: 'Content-Type'
          },
          Expires: {
            type: 'timestamp',
            location: 'header',
            name: 'Expires'
          },
          WebsiteRedirectLocation: {
            location: 'header',
            name: 'x-amz-website-redirect-location'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          Metadata: {
            type: 'map',
            location: 'header',
            name: 'x-amz-meta-'
          }
        }
      }
    },
    listBuckets: {
      name: 'ListBuckets',
      alias: 'GetService',
      http: {
        method: 'GET',
        uri: '/'
      },
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          Buckets: {
            type: 'list',
            members: {
              type: 'structure',
              name: 'Bucket',
              members: {
                Name: {
                },
                CreationDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          Owner: {
            type: 'structure',
            members: {
              ID: {
              },
              DisplayName: {
              }
            }
          }
        }
      }
    },
    listMultipartUploads: {
      name: 'ListMultipartUploads',
      http: {
        method: 'GET',
        uri: '/{Bucket}?uploads&prefix={Prefix}&delimiter={Delimiter}&max-uploads={MaxUploads}&key-marker={KeyMarker}&upload-id-marker={UploadIdMarker}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Delimiter: {
            location: 'uri'
          },
          KeyMarker: {
            location: 'uri'
          },
          MaxUploads: {
            type: 'integer',
            location: 'uri'
          },
          Prefix: {
            location: 'uri'
          },
          UploadIdMarker: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Bucket: {
          },
          KeyMarker: {
          },
          UploadIdMarker: {
          },
          NextKeyMarker: {
          },
          NextUploadIdMarker: {
          },
          MaxUploads: {
            type: 'integer'
          },
          IsTruncated: {
            type: 'boolean'
          },
          Upload: {
            type: 'list',
            flattened: true,
            name: 'Uploads',
            members: {
              type: 'structure',
              members: {
                UploadId: {
                },
                Key: {
                },
                Initiated: {
                  type: 'timestamp'
                },
                StorageClass: {
                },
                Owner: {
                  type: 'structure',
                  members: {
                    ID: {
                    },
                    DisplayName: {
                    }
                  }
                },
                Initiator: {
                  type: 'structure',
                  members: {
                    ID: {
                    },
                    DisplayName: {
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    listObjectVersions: {
      name: 'ListObjectVersions',
      alias: 'GetBucketObjectVersions',
      http: {
        method: 'GET',
        uri: '/{Bucket}?versions&delimiter={Delimiter}&key-marker={KeyMarker}&max-keys={MaxKeys}&prefix={Prefix}&version-id-marker={VersionIdMarker}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Delimiter: {
            location: 'uri'
          },
          KeyMarker: {
            location: 'uri'
          },
          MaxKeys: {
            type: 'integer',
            location: 'uri'
          },
          Prefix: {
            location: 'uri'
          },
          VersionIdMarker: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          IsTruncated: {
            type: 'boolean'
          },
          KeyMarker: {
          },
          VersionIdMarker: {
          },
          NextKeyMarker: {
          },
          NextVersionIdMarker: {
          },
          Version: {
            type: 'list',
            flattened: true,
            name: 'Versions',
            members: {
              type: 'structure',
              members: {
                ETag: {
                },
                Size: {
                },
                StorageClass: {
                },
                Key: {
                },
                VersionId: {
                },
                IsLatest: {
                  type: 'boolean'
                },
                LastModified: {
                  type: 'timestamp'
                },
                Owner: {
                  type: 'structure',
                  members: {
                    ID: {
                    },
                    DisplayName: {
                    }
                  }
                }
              }
            }
          },
          DeleteMarker: {
            type: 'list',
            flattened: true,
            name: 'DeleteMarkers',
            members: {
              type: 'structure',
              members: {
                Owner: {
                  type: 'structure',
                  members: {
                    ID: {
                    },
                    DisplayName: {
                    }
                  }
                },
                Key: {
                },
                VersionId: {
                },
                IsLatest: {
                  type: 'boolean'
                },
                LastModified: {
                  type: 'timestamp'
                }
              }
            }
          },
          Name: {
          },
          Prefix: {
          },
          MaxKeys: {
            type: 'integer'
          },
          CommonPrefixes: {
            type: 'list',
            flattened: true,
            members: {
              type: 'structure',
              members: {
                Prefix: {
                }
              }
            }
          }
        }
      }
    },
    listObjects: {
      name: 'ListObjects',
      alias: 'GetBucket',
      http: {
        method: 'GET',
        uri: '/{Bucket}?delimiter={Delimiter}&marker={Marker}&max-keys={MaxKeys}&prefix={Prefix}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Delimiter: {
            location: 'uri'
          },
          Marker: {
            location: 'uri'
          },
          MaxKeys: {
            type: 'integer',
            location: 'uri'
          },
          Prefix: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          IsTruncated: {
            type: 'boolean'
          },
          Marker: {
          },
          Contents: {
            type: 'list',
            flattened: true,
            members: {
              type: 'structure',
              members: {
                Key: {
                },
                LastModified: {
                  type: 'timestamp'
                },
                ETag: {
                },
                Size: {
                  type: 'integer'
                },
                StorageClass: {
                },
                Owner: {
                  type: 'structure',
                  members: {
                    ID: {
                    },
                    DisplayName: {
                    }
                  }
                }
              }
            }
          },
          Name: {
          },
          Prefix: {
          },
          MaxKeys: {
            type: 'integer'
          },
          CommonPrefixes: {
            type: 'list',
            flattened: true,
            members: {
              type: 'structure',
              members: {
                Prefix: {
                }
              }
            }
          }
        }
      }
    },
    listParts: {
      name: 'ListParts',
      http: {
        method: 'GET',
        uri: '/{Bucket}/{Key}?uploadId={UploadId}&max-parts={MaxParts}&part-number-marker={PartNumberMarker}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          MaxParts: {
            type: 'integer',
            location: 'uri'
          },
          PartNumberMarker: {
            location: 'uri'
          },
          UploadId: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Bucket: {
          },
          Key: {
          },
          UploadId: {
          },
          PartNumberMarker: {
            type: 'integer'
          },
          NextPartNumberMarker: {
            type: 'integer'
          },
          MaxParts: {
            type: 'integer'
          },
          IsTruncated: {
            type: 'boolean'
          },
          Part: {
            type: 'list',
            flattened: true,
            name: 'Parts',
            members: {
              type: 'structure',
              members: {
                PartNumber: {
                  type: 'integer'
                },
                LastModified: {
                  type: 'timestamp'
                },
                ETag: {
                },
                Size: {
                  type: 'integer'
                }
              }
            }
          },
          Initiator: {
            type: 'structure',
            members: {
              ID: {
              },
              DisplayName: {
              }
            }
          },
          Owner: {
            type: 'structure',
            members: {
              ID: {
              },
              DisplayName: {
              }
            }
          },
          StorageClass: {
          }
        }
      }
    },
    putBucketAcl: {
      name: 'PutBucketAcl',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?acl'
      },
      input: {
        payload: 'AccessControlPolicy',
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          AccessControlPolicy: {
            type: 'structure',
            members: {
              Grants: {
                type: 'list',
                name: 'AccessControlList',
                members: {
                  type: 'structure',
                  name: 'Grant',
                  members: {
                    Grantee: {
                      type: 'structure',
                      xmlns: {
                        prefix: 'xsi',
                        uri: 'http://www.w3.org/2001/XMLSchema-instance'
                      },
                      members: {
                        DisplayName: {
                        },
                        EmailAddress: {
                        },
                        ID: {
                        },
                        Type: {
                          required: true,
                          attribute: true,
                          name: 'xsi:type'
                        },
                        URI: {
                        }
                      }
                    },
                    Permission: {
                    }
                  }
                }
              },
              Owner: {
                type: 'structure',
                members: {
                  DisplayName: {
                  },
                  ID: {
                  }
                }
              }
            }
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWrite: {
            location: 'header',
            name: 'x-amz-grant-write'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketCors: {
      name: 'PutBucketCors',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?cors'
      },
      input: {
        payload: 'CORSConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          CORSConfiguration: {
            type: 'structure',
            members: {
              CORSRules: {
                type: 'list',
                flattened: true,
                name: 'CORSRule',
                members: {
                  type: 'structure',
                  members: {
                    AllowedHeaders: {
                      type: 'list',
                      flattened: true,
                      name: 'AllowedHeader',
                      members: {
                        AllowedHeader: {
                        }
                      }
                    },
                    AllowedMethods: {
                      type: 'list',
                      flattened: true,
                      name: 'AllowedMethod',
                      members: {
                        AllowedMethod: {
                        }
                      }
                    },
                    AllowedOrigins: {
                      type: 'list',
                      flattened: true,
                      name: 'AllowedOrigin',
                      members: {
                        AllowedOrigin: {
                        }
                      }
                    },
                    ExposeHeaders: {
                      type: 'list',
                      flattened: true,
                      name: 'ExposeHeader',
                      members: {
                        ExposeHeader: {
                        }
                      }
                    },
                    MaxAgeSeconds: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketLifecycle: {
      name: 'PutBucketLifecycle',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?lifecycle'
      },
      input: {
        payload: 'LifecycleConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          LifecycleConfiguration: {
            type: 'structure',
            members: {
              Rules: {
                type: 'list',
                flattened: true,
                name: 'Rule',
                required: true,
                members: {
                  type: 'structure',
                  members: {
                    Expiration: {
                      type: 'structure',
                      members: {
                        Date: {
                          type: 'timestamp',
                          format: 'iso8601'
                        },
                        Days: {
                          type: 'integer',
                          required: true
                        }
                      }
                    },
                    ID: {
                    },
                    Prefix: {
                      required: true
                    },
                    Status: {
                      required: true
                    },
                    Transition: {
                      type: 'structure',
                      members: {
                        Date: {
                          type: 'timestamp',
                          format: 'iso8601'
                        },
                        Days: {
                          type: 'integer'
                        },
                        StorageClass: {
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
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketLogging: {
      name: 'PutBucketLogging',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?logging'
      },
      input: {
        payload: 'BucketLoggingStatus',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          BucketLoggingStatus: {
            type: 'structure',
            required: true,
            members: {
              LoggingEnabled: {
                type: 'structure',
                required: true,
                members: {
                  TargetBucket: {
                  },
                  TargetGrants: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      name: 'Grant',
                      members: {
                        Grantee: {
                          type: 'structure',
                          xmlns: {
                            prefix: 'xsi',
                            uri: 'http://www.w3.org/2001/XMLSchema-instance'
                          },
                          members: {
                            DisplayName: {
                            },
                            EmailAddress: {
                            },
                            ID: {
                            },
                            Type: {
                              required: true,
                              attribute: true,
                              name: 'xsi:type'
                            },
                            URI: {
                            }
                          }
                        },
                        Permission: {
                        }
                      }
                    }
                  },
                  TargetPrefix: {
                  }
                }
              }
            }
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketNotification: {
      name: 'PutBucketNotification',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?notification'
      },
      input: {
        payload: 'NotificationConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          NotificationConfiguration: {
            type: 'structure',
            required: true,
            members: {
              TopicConfiguration: {
                type: 'structure',
                required: true,
                members: {
                  Event: {
                  },
                  Topic: {
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
        }
      }
    },
    putBucketPolicy: {
      name: 'PutBucketPolicy',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?policy'
      },
      input: {
        payload: 'Policy',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          Policy: {
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
    putBucketRequestPayment: {
      name: 'PutBucketRequestPayment',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?requestPayment'
      },
      input: {
        payload: 'RequestPaymentConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          RequestPaymentConfiguration: {
            type: 'structure',
            required: true,
            members: {
              Payer: {
                required: true
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketTagging: {
      name: 'PutBucketTagging',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?tagging'
      },
      input: {
        payload: 'Tagging',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          Tagging: {
            type: 'structure',
            required: true,
            members: {
              TagSet: {
                type: 'list',
                required: true,
                members: {
                  type: 'structure',
                  name: 'Tag',
                  required: true,
                  members: {
                    Key: {
                      required: true
                    },
                    Value: {
                      required: true
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
        }
      }
    },
    putBucketVersioning: {
      name: 'PutBucketVersioning',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?versioning'
      },
      input: {
        payload: 'VersioningConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          MFA: {
            location: 'header',
            name: 'x-amz-mfa'
          },
          VersioningConfiguration: {
            type: 'structure',
            required: true,
            members: {
              MFADelete: {
              },
              Status: {
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putBucketWebsite: {
      name: 'PutBucketWebsite',
      http: {
        method: 'PUT',
        uri: '/{Bucket}?website'
      },
      input: {
        payload: 'WebsiteConfiguration',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          WebsiteConfiguration: {
            type: 'structure',
            required: true,
            members: {
              ErrorDocument: {
                type: 'structure',
                members: {
                  Key: {
                    required: true
                  }
                }
              },
              IndexDocument: {
                type: 'structure',
                members: {
                  Suffix: {
                    required: true
                  }
                }
              },
              RedirectAllRequestsTo: {
                type: 'structure',
                members: {
                  HostName: {
                    required: true
                  },
                  Protocol: {
                  }
                }
              },
              RoutingRules: {
                type: 'list',
                members: {
                  type: 'structure',
                  name: 'RoutingRule',
                  members: {
                    Condition: {
                      type: 'structure',
                      members: {
                        HttpErrorCodeReturnedEquals: {
                        },
                        KeyPrefixEquals: {
                        }
                      }
                    },
                    Redirect: {
                      type: 'structure',
                      required: true,
                      members: {
                        HostName: {
                          required: true
                        },
                        HttpRedirectCode: {
                        },
                        Protocol: {
                        },
                        ReplaceKeyPrefixWith: {
                        },
                        ReplaceKeyWith: {
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
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    putObject: {
      name: 'PutObject',
      http: {
        method: 'PUT',
        uri: '/{Bucket}/{Key}'
      },
      input: {
        payload: 'Body',
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          Body: {
            type: 'binary',
            streaming: true
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          CacheControl: {
            location: 'header',
            name: 'Cache-Control'
          },
          ContentDisposition: {
            location: 'header',
            name: 'Content-Disposition'
          },
          ContentEncoding: {
            location: 'header',
            name: 'Content-Encoding'
          },
          ContentLanguage: {
            location: 'header',
            name: 'Content-Language'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          ContentType: {
            location: 'header',
            name: 'Content-Type'
          },
          Expires: {
            type: 'timestamp',
            location: 'header',
            name: 'Expires'
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          Metadata: {
            type: 'map',
            location: 'header',
            name: 'x-amz-meta-'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          StorageClass: {
            location: 'header',
            name: 'x-amz-storage-class'
          },
          WebsiteRedirectLocation: {
            location: 'header',
            name: 'x-amz-website-redirect-location'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Expiration: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-expiration'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          VersionId: {
            location: 'header',
            name: 'x-amz-version-id'
          }
        }
      }
    },
    putObjectAcl: {
      name: 'PutObjectAcl',
      http: {
        method: 'PUT',
        uri: '/{Bucket}/{Key}?acl'
      },
      input: {
        payload: 'AccessControlPolicy',
        type: 'structure',
        members: {
          ACL: {
            location: 'header',
            name: 'x-amz-acl'
          },
          AccessControlPolicy: {
            type: 'structure',
            members: {
              Grants: {
                type: 'list',
                name: 'AccessControlList',
                members: {
                  type: 'structure',
                  name: 'Grant',
                  members: {
                    Grantee: {
                      type: 'structure',
                      xmlns: {
                        prefix: 'xsi',
                        uri: 'http://www.w3.org/2001/XMLSchema-instance'
                      },
                      members: {
                        DisplayName: {
                        },
                        EmailAddress: {
                        },
                        ID: {
                        },
                        Type: {
                          required: true,
                          attribute: true,
                          name: 'xsi:type'
                        },
                        URI: {
                        }
                      }
                    },
                    Permission: {
                    }
                  }
                }
              },
              Owner: {
                type: 'structure',
                members: {
                  DisplayName: {
                  },
                  ID: {
                  }
                }
              }
            }
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          ContentMD5: {
            location: 'header',
            name: 'Content-MD5'
          },
          GrantFullControl: {
            location: 'header',
            name: 'x-amz-grant-full-control'
          },
          GrantRead: {
            location: 'header',
            name: 'x-amz-grant-read'
          },
          GrantReadACP: {
            location: 'header',
            name: 'x-amz-grant-read-acp'
          },
          GrantWrite: {
            location: 'header',
            name: 'x-amz-grant-write'
          },
          GrantWriteACP: {
            location: 'header',
            name: 'x-amz-grant-write-acp'
          },
          Key: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    restoreObject: {
      name: 'RestoreObject',
      alias: 'PostObjectRestore',
      http: {
        method: 'POST',
        uri: '/{Bucket}/{Key}?restore'
      },
      input: {
        payload: 'RestoreRequest',
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          RestoreRequest: {
            type: 'structure',
            members: {
              Days: {
                type: 'integer',
                required: true
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    uploadPart: {
      name: 'UploadPart',
      http: {
        method: 'PUT',
        uri: '/{Bucket}/{Key}?partNumber={PartNumber}&uploadId={UploadId}'
      },
      input: {
        payload: 'Body',
        type: 'structure',
        members: {
          Body: {
            type: 'binary',
            streaming: true
          },
          Bucket: {
            required: true,
            location: 'uri'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          PartNumber: {
            required: true,
            location: 'uri'
          },
          UploadId: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          ETag: {
            location: 'header',
            name: 'ETag'
          }
        }
      }
    },
    uploadPartCopy: {
      name: 'UploadPartCopy',
      http: {
        method: 'PUT',
        uri: '/{Bucket}/{Key}?partNumber={PartNumber}&uploadId={UploadId}'
      },
      input: {
        type: 'structure',
        members: {
          Bucket: {
            required: true,
            location: 'uri'
          },
          CopySource: {
            location: 'header',
            name: 'x-amz-copy-source',
            required: true
          },
          CopySourceIfMatch: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-match'
          },
          CopySourceIfModifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-modified-since'
          },
          CopySourceIfNoneMatch: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-none-match'
          },
          CopySourceIfUnmodifiedSince: {
            type: 'timestamp',
            location: 'header',
            name: 'x-amz-copy-source-if-unmodified-since'
          },
          CopySourceRange: {
            location: 'header',
            name: 'x-amz-copy-source-range'
          },
          Key: {
            required: true,
            location: 'uri'
          },
          PartNumber: {
            required: true,
            location: 'uri'
          },
          UploadId: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          CopySourceVersionId: {
            location: 'header',
            name: 'x-amz-copy-source-version-id'
          },
          ServerSideEncryption: {
            location: 'header',
            name: 'x-amz-server-side-encryption'
          },
          ETag: {
          },
          LastModified: {
            type: 'timestamp'
          }
        }
      }
    }
  }
};
