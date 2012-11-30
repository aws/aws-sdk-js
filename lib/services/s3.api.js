/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

var AWS = require('../core');

AWS.S3.Client.prototype.api = {
  format: 'rest-xml',
  xmlNamespace: 'http://s3.amazonaws.com/doc/2006-03-01/',
  timestampFormat: 'rfc822',
  operations: {
    abortMultipartUpload: {
      m: 'DELETE',
      u: '/{Bucket}/{Key}?uploadId={UploadId}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          UploadId: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    completeMultipartUpload: {
      m: 'POST',
      u: '/{Bucket}/{Key}?uploadId={UploadId}',
      i: {
        n: 'MultipartUpload',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          UploadId: {
            r: 1,
            l: 'uri'
          },
          Parts: {
            n: 'Part',
            t: 'a',
            f: 1,
            m: {
              t: 'o',
              m: {
                PartNumber: {
                  t: 'i'
                },
                ETag: {
                }
              }
            }
          }
        }
      },
      o: {
        Location: {
        },
        Bucket: {
        },
        Key: {
        },
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        Expiration: {
          t: 't',
          l: 'header',
          n: 'x-amz-expiration'
        },
        ServerSideEncryption: {
          l: 'header',
          n: 'x-amz-server-side-encryption'
        },
        VersionId: {
          l: 'header',
          n: 'x-amz-version-id'
        }
      }
    },
    copyObject: {
      m: 'PUT',
      u: '/{Bucket}/{Key}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          MetadataDirective: {
            l: 'header',
            n: 'x-amz-metadata-directive'
          },
          WebsiteRedirectLocation: {
            l: 'header',
            n: 'x-amz-website-redirect-location'
          },
          ACL: {
            l: 'header',
            n: 'x-amz-acl'
          },
          GrantRead: {
            l: 'header',
            n: 'x-amz-grant-read'
          },
          GrantWrite: {
            l: 'header',
            n: 'x-amz-grant-write'
          },
          GrantReadACP: {
            l: 'header',
            n: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            l: 'header',
            n: 'x-amz-grant-write-acp'
          },
          GrantFullControl: {
            l: 'header',
            n: 'x-amz-grant-full-control'
          },
          ServerSideEncryption: {
            l: 'header',
            n: 'x-amz-server-side-encryption'
          },
          StorageClass: {
            l: 'header',
            n: 'x-amz-storage-class'
          },
          CopySource: {
            l: 'header',
            n: 'x-amz-copy-source',
            r: 1
          },
          CopySourceIfMatch: {
            t: 't',
            l: 'header',
            n: 'x-amz-copy-source-if-match'
          },
          CopySourceIfNoneMatch: {
            t: 't',
            l: 'header',
            n: 'x-amz-copy-source-if-none-match'
          },
          CopySourceIfUnmodifiedSince: {
            t: 't',
            l: 'header',
            n: 'x-amz-copy-source-if-unmodified-since'
          },
          CopySourceIfModifiedSince: {
            t: 't',
            l: 'header',
            n: 'x-amz-copy-source-if-modified-since'
          }
        }
      },
      o: {
        CopyObjectResult: {
          t: 'o',
          l: 'body',
          m: {
            ETag: {
            },
            LastModified: {
            }
          }
        },
        Expiration: {
          l: 'header',
          n: 'x-amz-expiration'
        },
        CopySourceVersionId: {
          l: 'header',
          n: 'x-amz-copy-source-version-id'
        },
        ServerSideEncryption: {
          l: 'header',
          n: 'x-amz-server-side-encryption'
        }
      }
    },
    createBucket: {
      m: 'PUT',
      u: '/{Bucket}',
      i: {
        n: 'CreateBucketConfiguration',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          ACL: {
            l: 'header',
            n: 'x-amz-acl'
          },
          GrantRead: {
            l: 'header',
            n: 'x-amz-grant-read'
          },
          GrantWrite: {
            l: 'header',
            n: 'x-amz-grant-write'
          },
          GrantReadACP: {
            l: 'header',
            n: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            l: 'header',
            n: 'x-amz-grant-write-acp'
          },
          GrantFullControl: {
            l: 'header',
            n: 'x-amz-grant-full-control'
          },
          LocationConstraint: {
          }
        }
      },
      o: {
        Location: {
          l: 'header',
          n: 'Location'
        }
      }
    },
    createMultipartUpload: {
      m: 'POST',
      u: '/{Bucket}/{Key}?uploads',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          CacheControl: {
            l: 'header',
            n: 'Cache-Control'
          },
          ContentDisposition: {
            l: 'header',
            n: 'Content-Disposition'
          },
          ContentEncoding: {
            l: 'header',
            n: 'Content-Encoding'
          },
          ContentType: {
            l: 'header',
            n: 'Content-Type'
          },
          Expires: {
            t: 't',
            l: 'header',
            n: 'Expires'
          },
          StorageClass: {
            l: 'header',
            n: 'x-amz-storage-class'
          },
          WebsiteRedirectLocation: {
            l: 'header',
            n: 'x-amz-website-redirect-location'
          },
          ACL: {
            l: 'header',
            n: 'x-amz-acl'
          },
          GrantRead: {
            l: 'header',
            n: 'x-amz-grant-read'
          },
          GrantReadACP: {
            l: 'header',
            n: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            l: 'header',
            n: 'x-amz-grant-write-acp'
          },
          GrantFullControl: {
            l: 'header',
            n: 'x-amz-grant-full-control'
          },
          ServerSideEncryption: {
            l: 'header',
            n: 'x-amz-server-side-encryption'
          },
          Metadata: {
            t: 'm',
            l: 'header',
            n: 'x-amz-meta-'
          }
        }
      },
      o: {
        Bucket: {
          n: 'Bucket'
        },
        Key: {
        },
        UploadId: {
        },
        ServerSideEncryption: {
          l: 'header',
          n: 'x-amz-server-side-encryption'
        }
      }
    },
    deleteBucket: {
      m: 'DELETE',
      u: '/{Bucket}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    deleteBucketCors: {
      m: 'DELETE',
      u: '/{Bucket}?cors',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    deleteBucketLifecycle: {
      m: 'DELETE',
      u: '/{Bucket}?lifecycle',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    deleteBucketPolicy: {
      m: 'DELETE',
      u: '/{Bucket}?policy',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    deleteBucketTagging: {
      m: 'DELETE',
      u: '/{Bucket}?tagging',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    deleteBucketWebsite: {
      m: 'DELETE',
      u: '/{Bucket}?website',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    deleteObject: {
      m: 'DELETE',
      u: '/{Bucket}/{Key}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        DeleteMarker: {
          l: 'header',
          n: 'x-amz-delete-marker'
        },
        VersionId: {
          l: 'header',
          n: 'x-amz-version-id'
        }
      }
    },
    deleteObjects: {
      m: 'POST',
      u: '/{Bucket}?delete',
      i: {
        n: 'Delete',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          MFA: {
            l: 'header',
            n: 'x-amz-mfa'
          },
          Quiet: {
            t: 'b'
          },
          Objects: {
            n: 'Object',
            t: 'a',
            f: 1,
            r: 1,
            m: {
              t: 'o',
              m: {
                Key: {
                  r: 1
                },
                VersionId: {
                }
              }
            }
          }
        }
      },
      o: {
        Deleted: {
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
              Key: {
              },
              VersionId: {
              },
              DeleteMarker: {
                t: 'b'
              },
              DeleteMarkerVersionId: {
              }
            }
          }
        },
        Error: {
          n: 'Errors',
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
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
    },
    getBucketAcl: {
      m: 'GET',
      u: '/{Bucket}?acl',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        Owner: {
          t: 'o',
          m: {
            ID: {
            },
            DisplayName: {
            }
          }
        },
        AccessControlList: {
          n: 'Grants',
          t: 'a',
          m: {
            n: 'Grant',
            t: 'o',
            m: {
              Grantee: {
                t: 'o',
                ns: {
                  prefix: 'xsi',
                  uri: 'http://www.w3.org/2001/XMLSchema-instance'
                },
                m: {
                  'xsi:type': {
                    n: 'Type',
                    x: 1
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
    },
    getBucketCors: {
      m: 'GET',
      u: '/{Bucket}?cors',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        CORSRule: {
          n: 'CORSRules',
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
              AllowedOrigin: {
                n: 'AllowedOrigins',
                t: 'a',
                f: 1
              },
              AllowedMethod: {
                n: 'AllowedMethods',
                t: 'a',
                f: 1
              },
              MaxAgeSeconds: {
                t: 'i'
              },
              ExposeHeader: {
                n: 'ExposeHeaders',
                t: 'a',
                f: 1
              }
            }
          }
        }
      }
    },
    getBucketLifecycle: {
      m: 'GET',
      u: '/{Bucket}?lifecycle',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        Rule: {
          n: 'Rules',
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
              ID: {
              },
              Prefix: {
              },
              Status: {
              },
              Expiration: {
                t: 'o',
                m: {
                  Days: {
                    t: 'i'
                  }
                }
              }
            }
          }
        }
      }
    },
    getBucketLocation: {
      m: 'GET',
      u: '/{Bucket}?location',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        LocationConstraint: {
        }
      }
    },
    getBucketLogging: {
      m: 'GET',
      u: '/{Bucket}?logging',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        LoggingEnabled: {
          t: 'o',
          m: {
            TargetBucket: {
            },
            TargetPrefix: {
            },
            TargetGrants: {
              t: 'a',
              m: {
                n: 'Grant',
                t: 'o',
                m: {
                  Grantee: {
                    t: 'o',
                    ns: {
                      prefix: 'xsi',
                      uri: 'http://www.w3.org/2001/XMLSchema-instance'
                    },
                    m: {
                      'xsi:type': {
                        n: 'Type',
                        x: 1
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
    },
    getBucketNotification: {
      m: 'GET',
      u: '/{Bucket}?notification',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        TopicConfiguration: {
          t: 'o',
          m: {
            Topic: {
            },
            Event: {
            }
          }
        }
      }
    },
    getBucketPolicy: {
      m: 'GET',
      u: '/{Bucket}?policy',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        Policy: {
          l: 'body'
        }
      }
    },
    getBucketRequestPayment: {
      m: 'GET',
      u: '/{Bucket}?requestPayment',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        Payer: {
        }
      }
    },
    getBucketTagging: {
      m: 'GET',
      u: '/{Bucket}?tagging',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        TagSet: {
          t: 'a',
          m: {
            n: 'Tag',
            t: 'o',
            m: {
              Key: {
              },
              Value: {
              }
            }
          }
        }
      }
    },
    getBucketVersioning: {
      m: 'GET',
      u: '/{Bucket}?versioning',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        Status: {
        },
        MFADelete: {
        }
      }
    },
    getBucketWebsite: {
      m: 'GET',
      u: '/{Bucket}?website',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        IndexDocument: {
          t: 'o',
          m: {
            Suffix: {
            }
          }
        },
        ErrorDocument: {
          t: 'o',
          m: {
            Key: {
            }
          }
        }
      }
    },
    getObject: {
      m: 'GET',
      u: '/{Bucket}/{Key}?versionId={VersionId}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          ResponseContentType: {
            l: 'header',
            n: 'response-content-type'
          },
          ResponseContentLanguage: {
            l: 'header',
            n: 'response-content-language'
          },
          ResponseExpires: {
            t: 't',
            l: 'header',
            n: 'response-expires'
          },
          ResponseCacheControl: {
            l: 'header',
            n: 'response-cache-control'
          },
          ResponseContentDisposition: {
            l: 'header',
            n: 'response-content-disposition'
          },
          ResponseContentEncoding: {
            l: 'header',
            n: 'response-content-encoding'
          },
          VersionId: {
            l: 'uri',
            n: 'versionId'
          },
          Range: {
            l: 'header'
          },
          IfModifiedSince: {
            t: 't',
            l: 'header',
            n: 'If-Modified-Since'
          },
          IfUnmodifiedSince: {
            t: 't',
            l: 'header',
            n: 'If-Unmodified-Since'
          },
          IfMatch: {
            l: 'header',
            n: 'If-Match'
          },
          IfNoneMatch: {
            l: 'header',
            n: 'If-None-Match'
          }
        }
      },
      o: {
        Body: {
          t: 'bl',
          l: 'body',
          s: 1
        },
        DeleteMarker: {
          l: 'header',
          n: 'x-amz-delete-marker'
        },
        Expiration: {
          l: 'header',
          n: 'x-amz-expiration'
        },
        WebsiteRedirectLocation: {
          l: 'header',
          n: 'x-amz-redirect-location'
        },
        LastModified: {
          t: 't',
          l: 'header',
          n: 'Last-Modified'
        },
        ContentType: {
          l: 'header',
          n: 'Content-Type'
        },
        ContentLength: {
          t: 'i',
          l: 'header',
          n: 'Content-Length'
        },
        ETag: {
          l: 'header'
        },
        MissingMeta: {
          t: 'i',
          l: 'x-amz-missing-meta'
        },
        ServerSideEncryption: {
          l: 'header',
          n: 'x-amz-server-side-encryption'
        },
        VersionId: {
          l: 'header',
          n: 'x-amz-version-id'
        },
        Metadata: {
          t: 'm',
          l: 'header',
          n: 'x-amz-meta-'
        }
      }
    },
    getObjectAcl: {
      m: 'GET',
      u: '/{Bucket}/{Key}?acl&versionId={VersionId}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          VersionId: {
            l: 'uri',
            n: 'versionId'
          }
        }
      },
      o: {
        Owner: {
          t: 'o',
          m: {
            ID: {
            },
            DisplayName: {
            }
          }
        },
        AccessControlList: {
          n: 'Grants',
          t: 'a',
          m: {
            n: 'Grant',
            t: 'o',
            m: {
              Grantee: {
                t: 'o',
                ns: {
                  prefix: 'xsi',
                  uri: 'http://www.w3.org/2001/XMLSchema-instance'
                },
                m: {
                  'xsi:type': {
                    n: 'Type',
                    x: 1
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
    },
    getObjectTorrent: {
      m: 'GET',
      u: '/{Bucket}/{Key}?torrent',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        Body: {
          t: 'bl',
          l: 'body',
          s: 1
        }
      }
    },
    headBucket: {
      m: 'HEAD',
      u: '/{Bucket}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    headObject: {
      m: 'HEAD',
      u: '/{Bucket}/{Key}?versionId={VersionId}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          VersionId: {
            l: 'uri',
            n: 'versionId'
          },
          Range: {
            l: 'header'
          },
          IfModifiedSince: {
            t: 't',
            l: 'header',
            n: 'If-Modified-Since'
          },
          IfUnmodifiedSince: {
            t: 't',
            l: 'header',
            n: 'If-Unmodified-Since'
          },
          IfMatch: {
            l: 'header',
            n: 'If-Match'
          },
          IfNoneMatch: {
            l: 'header',
            n: 'If-None-Match'
          }
        }
      },
      o: {
        DeleteMarker: {
          l: 'header',
          n: 'x-amz-delete-marker'
        },
        Expiration: {
          l: 'header',
          n: 'x-amz-expiration'
        },
        WebsiteRedirectLocation: {
          l: 'header',
          n: 'x-amz-redirect-location'
        },
        LastModified: {
          t: 't',
          l: 'header',
          n: 'Last-Modified'
        },
        ContentType: {
          l: 'header',
          n: 'Content-Type'
        },
        ContentLength: {
          t: 'i',
          l: 'header',
          n: 'Content-Length'
        },
        ETag: {
          l: 'header'
        },
        MissingMeta: {
          t: 'i',
          l: 'x-amz-missing-meta'
        },
        ServerSideEncryption: {
          l: 'header',
          n: 'x-amz-server-side-encryption'
        },
        VersionId: {
          l: 'header',
          n: 'x-amz-version-id'
        },
        Metadata: {
          t: 'm',
          l: 'header',
          n: 'x-amz-meta-'
        }
      }
    },
    listBuckets: {
      m: 'GET',
      u: '/',
      o: {
        Buckets: {
          t: 'a',
          m: {
            n: 'Bucket',
            t: 'o',
            m: {
              Name: {
              },
              CreationDate: {
                t: 't'
              }
            }
          }
        },
        Owner: {
          t: 'o',
          m: {
            ID: {
            },
            DisplayName: {
            }
          }
        }
      }
    },
    listMultipartUploads: {
      m: 'GET',
      u: '/{Bucket}?uploads&prefix={Prefix}&delimiter={Delimiter}&max-uploads={MaxUploads}&key-marker={KeyMarker}&upload-id-marker={UploadIdMarker}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Prefix: {
            l: 'uri'
          },
          Delimiter: {
            l: 'uri'
          },
          MaxUploads: {
            t: 'i',
            l: 'uri'
          },
          KeyMarker: {
            l: 'uri'
          },
          UploadIdMarker: {
            l: 'uri'
          }
        }
      },
      o: {
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
          t: 'i'
        },
        IsTruncated: {
          t: 'b'
        },
        Upload: {
          n: 'Uploads',
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
              UploadId: {
              },
              Key: {
              },
              Initiated: {
                t: 't'
              },
              StorageClass: {
              },
              Owner: {
                t: 'o',
                m: {
                  ID: {
                  },
                  DisplayName: {
                  }
                }
              },
              Initiator: {
                t: 'o',
                m: {
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
    },
    listObjectVersions: {
      m: 'GET',
      u: '/{Bucket}?versions&delimiter={Delimiter}&key-marker={KeyMarker}&max-keys={MaxKeys}&prefix={Prefix}&version-id-marker={VersionIdMarker}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          KeyMarker: {
            l: 'uri'
          },
          VersionIdMarker: {
            l: 'uri'
          },
          MaxKeys: {
            t: 'i',
            l: 'uri'
          },
          Delimiter: {
            l: 'uri'
          },
          Prefix: {
            l: 'uri'
          }
        }
      },
      o: {
        KeyMarker: {
        },
        VersionIdMarker: {
        },
        NextKeyMarker: {
        },
        NextVersionIdMarker: {
        },
        Version: {
          n: 'Versions',
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
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
                t: 'b'
              },
              LastModified: {
                t: 't'
              },
              Owner: {
                t: 'o',
                m: {
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
          n: 'DeleteMarkers',
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
              Owner: {
                t: 'o',
                m: {
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
                t: 'b'
              },
              LastModified: {
                t: 't'
              }
            }
          }
        },
        Name: {
        },
        Prefix: {
        },
        MaxKeys: {
          t: 'i'
        },
        IsTruncated: {
          t: 'b'
        },
        CommonPrefixes: {
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
              Prefix: {
              }
            }
          }
        }
      }
    },
    listObjects: {
      m: 'GET',
      u: '/{Bucket}?delimiter={Delimiter}&marker={Marker}&max-keys={MaxKeys}&prefix={Prefix}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Marker: {
            l: 'uri'
          },
          MaxKeys: {
            t: 'i',
            l: 'uri'
          },
          Delimiter: {
            l: 'uri'
          },
          Prefix: {
            l: 'uri'
          }
        }
      },
      o: {
        Marker: {
        },
        Contents: {
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
              Key: {
              },
              LastModified: {
                t: 't'
              },
              ETag: {
              },
              Size: {
                t: 'i'
              },
              StorageClass: {
              },
              Owner: {
                t: 'o',
                m: {
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
          t: 'i'
        },
        IsTruncated: {
          t: 'b'
        },
        CommonPrefixes: {
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
              Prefix: {
              }
            }
          }
        }
      }
    },
    listParts: {
      m: 'GET',
      u: '/{Bucket}/{Key}?uploadId={UploadId}&max-parts={MaxParts}&part-number-marker={PartNumberMarker}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          UploadId: {
            r: 1,
            l: 'uri'
          },
          MaxParts: {
            t: 'i',
            l: 'uri'
          },
          PartNumberMarker: {
            l: 'uri'
          }
        }
      },
      o: {
        Bucket: {
        },
        Key: {
        },
        UploadId: {
        },
        PartNumberMarker: {
          t: 'i'
        },
        NextPartNumberMarker: {
          t: 'i'
        },
        MaxParts: {
          t: 'i'
        },
        IsTruncated: {
          t: 'b'
        },
        Part: {
          n: 'Parts',
          t: 'a',
          f: 1,
          m: {
            t: 'o',
            m: {
              PartNumber: {
                t: 'i'
              },
              LastModified: {
                t: 't'
              },
              ETag: {
              },
              Size: {
                t: 'i'
              }
            }
          }
        },
        Initiator: {
          t: 'o',
          m: {
            ID: {
            },
            DisplayName: {
            }
          }
        },
        Owner: {
          t: 'o',
          m: {
            ID: {
            },
            DisplayName: {
            }
          }
        },
        StorageClass: {
        }
      }
    },
    putBucketAcl: {
      m: 'PUT',
      u: '/{Bucket}?acl',
      i: {
        n: 'AccessControlPolicy',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          ACL: {
            l: 'header',
            n: 'x-amz-acl'
          },
          GrantRead: {
            l: 'header',
            n: 'x-amz-grant-read'
          },
          GrantWrite: {
            l: 'header',
            n: 'x-amz-grant-write'
          },
          GrantReadACP: {
            l: 'header',
            n: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            l: 'header',
            n: 'x-amz-grant-write-acp'
          },
          GrantFullControl: {
            l: 'header',
            n: 'x-amz-grant-full-control'
          },
          Owner: {
            t: 'o',
            m: {
              ID: {
              },
              DisplayName: {
              }
            }
          },
          Grants: {
            n: 'AccessControlList',
            t: 'a',
            m: {
              n: 'Grant',
              t: 'o',
              m: {
                Grantee: {
                  t: 'o',
                  ns: {
                    prefix: 'xsi',
                    uri: 'http://www.w3.org/2001/XMLSchema-instance'
                  },
                  m: {
                    Type: {
                      n: 'xsi:type',
                      r: 1,
                      x: 1
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
    putBucketCors: {
      m: 'PUT',
      u: '/{Bucket}?cors',
      i: {
        n: 'CORSConfiguration',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          CORSRules: {
            n: 'CORSRule',
            t: 'a',
            f: 1,
            m: {
              t: 'o',
              m: {
                AllowedOrigins: {
                  n: 'AllowedOrigin',
                  t: 'a',
                  f: 1
                },
                AllowedMethods: {
                  n: 'AllowedMethod',
                  t: 'a',
                  f: 1
                },
                MaxAgeSeconds: {
                  t: 'i'
                },
                ExposeHeaders: {
                  n: 'ExposeHeader',
                  t: 'a',
                  f: 1
                }
              }
            }
          }
        }
      }
    },
    putBucketLifecycle: {
      m: 'PUT',
      u: '/{Bucket}?lifecycle',
      i: {
        n: 'LifecycleConfiguration',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Rules: {
            n: 'Rule',
            t: 'a',
            f: 1,
            r: 1,
            m: {
              t: 'o',
              m: {
                ID: {
                },
                Prefix: {
                  r: 1
                },
                Status: {
                  r: 1
                },
                Expiration: {
                  t: 'o',
                  r: 1,
                  m: {
                    Days: {
                      t: 'i',
                      r: 1
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    putBucketLogging: {
      m: 'PUT',
      u: '/{Bucket}?logging',
      i: {
        n: 'BucketLoggingStatus',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          LoggingEnabled: {
            t: 'o',
            r: 1,
            m: {
              TargetBucket: {
              },
              TargetPrefix: {
              },
              TargetGrants: {
                t: 'a',
                m: {
                  n: 'Grant',
                  t: 'o',
                  m: {
                    Grantee: {
                      t: 'o',
                      ns: {
                        prefix: 'xsi',
                        uri: 'http://www.w3.org/2001/XMLSchema-instance'
                      },
                      m: {
                        Type: {
                          n: 'xsi:type',
                          r: 1,
                          x: 1
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
    putBucketNotification: {
      m: 'PUT',
      u: '/{Bucket}?notification',
      i: {
        n: 'NotificationConfiguration',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          TopicConfiguration: {
            t: 'o',
            r: 1,
            m: {
              Topic: {
              },
              Event: {
              }
            }
          }
        }
      }
    },
    putBucketPolicy: {
      m: 'PUT',
      u: '/{Bucket}?policy',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Policy: {
            r: 1,
            l: 'body'
          }
        }
      }
    },
    putBucketRequestPayment: {
      m: 'PUT',
      u: '/{Bucket}?requestPayment',
      i: {
        n: 'RequestPaymentConfiguration',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Payer: {
            r: 1
          }
        }
      }
    },
    putBucketTagging: {
      m: 'PUT',
      u: '/{Bucket}?tagging',
      i: {
        n: 'Tagging',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          TagSet: {
            t: 'a',
            r: 1,
            m: {
              n: 'Tag',
              t: 'o',
              r: 1,
              m: {
                Key: {
                  r: 1
                },
                Value: {
                  r: 1
                }
              }
            }
          }
        }
      }
    },
    putBucketVersioning: {
      m: 'PUT',
      u: '/{Bucket}?versioning',
      i: {
        n: 'VersioningConfiguration',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          MFA: {
            l: 'header',
            n: 'x-amz-mfa'
          },
          Status: {
          },
          MFADelete: {
          }
        }
      }
    },
    putBucketWebsite: {
      m: 'PUT',
      u: '/{Bucket}?website',
      i: {
        n: 'WebsiteConfiguration',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          IndexDocument: {
            t: 'o',
            m: {
              Suffix: {
                r: 1
              }
            }
          },
          ErrorDocument: {
            t: 'o',
            m: {
              Key: {
                r: 1
              }
            }
          }
        }
      }
    },
    putObject: {
      m: 'PUT',
      u: '/{Bucket}/{Key}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          CacheControl: {
            l: 'header',
            n: 'Cache-Control'
          },
          ContentDisposition: {
            l: 'header',
            n: 'Content-Disposition'
          },
          ContentEncoding: {
            l: 'header',
            n: 'Content-Encoding'
          },
          ContentType: {
            l: 'header',
            n: 'Content-Type'
          },
          Expires: {
            t: 't',
            l: 'header',
            n: 'Expires'
          },
          StorageClass: {
            l: 'header',
            n: 'x-amz-storage-class'
          },
          WebsiteRedirectLocation: {
            l: 'header',
            n: 'x-amz-website-redirect-location'
          },
          Body: {
            t: 'bl',
            l: 'body',
            s: 1
          },
          ACL: {
            l: 'header',
            n: 'x-amz-acl'
          },
          GrantRead: {
            l: 'header',
            n: 'x-amz-grant-read'
          },
          GrantReadACP: {
            l: 'header',
            n: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            l: 'header',
            n: 'x-amz-grant-write-acp'
          },
          GrantFullControl: {
            l: 'header',
            n: 'x-amz-grant-full-control'
          },
          ServerSideEncryption: {
            l: 'header',
            n: 'x-amz-server-side-encryption'
          },
          Metadata: {
            t: 'm',
            l: 'header',
            n: 'x-amz-meta-'
          }
        }
      },
      o: {
        Expiration: {
          t: 't',
          l: 'header',
          n: 'x-amz-expiration'
        },
        ServerSideEncryption: {
          l: 'header',
          n: 'x-amz-server-side-encryption'
        },
        ETag: {
          l: 'header',
          n: 'ETag'
        },
        VersionId: {
          l: 'header',
          n: 'x-amz-version-id'
        }
      }
    },
    putObjectAcl: {
      m: 'PUT',
      u: '/{Bucket}/{Key}?acl',
      i: {
        n: 'AccessControlPolicy',
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          ACL: {
            l: 'header',
            n: 'x-amz-acl'
          },
          GrantRead: {
            l: 'header',
            n: 'x-amz-grant-read'
          },
          GrantWrite: {
            l: 'header',
            n: 'x-amz-grant-write'
          },
          GrantReadACP: {
            l: 'header',
            n: 'x-amz-grant-read-acp'
          },
          GrantWriteACP: {
            l: 'header',
            n: 'x-amz-grant-write-acp'
          },
          GrantFullControl: {
            l: 'header',
            n: 'x-amz-grant-full-control'
          },
          Owner: {
            t: 'o',
            m: {
              ID: {
              },
              DisplayName: {
              }
            }
          },
          Grants: {
            n: 'AccessControlList',
            t: 'a',
            m: {
              n: 'Grant',
              t: 'o',
              m: {
                Grantee: {
                  t: 'o',
                  ns: {
                    prefix: 'xsi',
                    uri: 'http://www.w3.org/2001/XMLSchema-instance'
                  },
                  m: {
                    Type: {
                      n: 'xsi:type',
                      r: 1,
                      x: 1
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
    uploadPart: {
      m: 'PUT',
      u: '/{Bucket}/{Key}?partNumber={PartNumber}&uploadId={UploadId}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          Body: {
            t: 'bl',
            l: 'body',
            s: 1
          }
        }
      },
      o: {
        ServerSideEncryption: {
          l: 'header',
          n: 'x-amz-server-side-encryption'
        },
        ETag: {
          l: 'header',
          n: 'ETag'
        }
      }
    },
    uploadPartCopy: {
      m: 'PUT',
      u: '/{Bucket}/{Key}?partNumber={PartNumber}&uploadId={UploadId}',
      i: {
        m: {
          Bucket: {
            r: 1,
            l: 'uri'
          },
          Key: {
            r: 1,
            l: 'uri'
          },
          CopySourceRange: {
            l: 'header',
            n: 'x-amz-copy-source-range'
          },
          CopySource: {
            l: 'header',
            n: 'x-amz-copy-source',
            r: 1
          },
          CopySourceIfMatch: {
            t: 't',
            l: 'header',
            n: 'x-amz-copy-source-if-match'
          },
          CopySourceIfNoneMatch: {
            t: 't',
            l: 'header',
            n: 'x-amz-copy-source-if-none-match'
          },
          CopySourceIfUnmodifiedSince: {
            t: 't',
            l: 'header',
            n: 'x-amz-copy-source-if-unmodified-since'
          },
          CopySourceIfModifiedSince: {
            t: 't',
            l: 'header',
            n: 'x-amz-copy-source-if-modified-since'
          }
        }
      },
      o: {
        CopySourceVersionId: {
          l: 'header',
          n: 'x-amz-copy-source-version-id'
        },
        CopyPartResult: {
          t: 'o',
          l: 'body',
          m: {
            ETag: {
            },
            LastModified: {
              t: 't'
            }
          }
        },
        ServerSideEncryption: {
          l: 'header',
          n: 'x-amz-server-side-encryption'
        }
      }
    }
  }
};