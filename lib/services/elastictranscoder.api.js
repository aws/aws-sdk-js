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
  format: 'rest-json',
  signatureVersion: 'v4',
  serviceName: 'elastictranscoder',
  signingName: 'elastictranscoder',
  timestampFormat: 'iso8601',
  operations: {
    cancelJob: {
      m: 'DELETE',
      u: '/2012-09-25/jobs/{Id}',
      i: {
        m: {
          Id: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    createJob: {
      m: 'POST',
      u: '/2012-09-25/jobs',
      i: {
        m: {
          PipelineId: {
            r: 1
          },
          Input: {
            t: 'o',
            m: {
              Key: {
              },
              FrameRate: {
              },
              Resolution: {
              },
              AspectRatio: {
              },
              Interlaced: {
              },
              Container: {
              }
            },
            r: 1
          },
          Output: {
            t: 'o',
            m: {
              Key: {
              },
              ThumbnailPattern: {
              },
              Rotate: {
              },
              PresetId: {
              }
            },
            r: 1
          }
        }
      },
      o: {
        Job: {
          t: 'o',
          m: {
            Id: {
            },
            PipelineId: {
            },
            Input: {
              t: 'o',
              m: {
                Key: {
                },
                FrameRate: {
                },
                Resolution: {
                },
                AspectRatio: {
                },
                Interlaced: {
                },
                Container: {
                }
              }
            },
            Output: {
              t: 'o',
              m: {
                Key: {
                },
                ThumbnailPattern: {
                },
                Rotate: {
                },
                PresetId: {
                },
                Status: {
                },
                StatusDetail: {
                }
              }
            }
          }
        }
      }
    },
    createPipeline: {
      m: 'POST',
      u: '/2012-09-25/pipelines',
      i: {
        m: {
          Name: {
            r: 1
          },
          InputBucket: {
            r: 1
          },
          OutputBucket: {
            r: 1
          },
          Role: {
            r: 1
          },
          Notifications: {
            t: 'o',
            m: {
              Progressing: {
              },
              Completed: {
              },
              Warning: {
              },
              Error: {
              }
            },
            r: 1
          }
        }
      },
      o: {
        Pipeline: {
          t: 'o',
          m: {
            Id: {
            },
            Name: {
            },
            Status: {
            },
            InputBucket: {
            },
            OutputBucket: {
            },
            Role: {
            },
            Notifications: {
              t: 'o',
              m: {
                Progressing: {
                },
                Completed: {
                },
                Warning: {
                },
                Error: {
                }
              }
            }
          }
        }
      }
    },
    createPreset: {
      m: 'POST',
      u: '/2012-09-25/presets',
      i: {
        m: {
          Name: {
            r: 1
          },
          Description: {
          },
          Container: {
            r: 1
          },
          Video: {
            t: 'o',
            m: {
              Codec: {
              },
              CodecOptions: {
                t: 'm'
              },
              KeyframesMaxDist: {
              },
              FixedGOP: {
              },
              BitRate: {
              },
              FrameRate: {
              },
              Resolution: {
              },
              AspectRatio: {
              }
            },
            r: 1
          },
          Audio: {
            t: 'o',
            m: {
              Codec: {
              },
              SampleRate: {
              },
              BitRate: {
              },
              Channels: {
              }
            },
            r: 1
          },
          Thumbnails: {
            t: 'o',
            m: {
              Format: {
              },
              Interval: {
              },
              Resolution: {
              },
              AspectRatio: {
              }
            },
            r: 1
          }
        }
      },
      o: {
        Preset: {
          t: 'o',
          m: {
            Id: {
            },
            Name: {
            },
            Description: {
            },
            Container: {
            },
            Audio: {
              t: 'o',
              m: {
                Codec: {
                },
                SampleRate: {
                },
                BitRate: {
                },
                Channels: {
                }
              }
            },
            Video: {
              t: 'o',
              m: {
                Codec: {
                },
                CodecOptions: {
                  t: 'm'
                },
                KeyframesMaxDist: {
                },
                FixedGOP: {
                },
                BitRate: {
                },
                FrameRate: {
                },
                Resolution: {
                },
                AspectRatio: {
                }
              }
            },
            Thumbnails: {
              t: 'o',
              m: {
                Format: {
                },
                Interval: {
                },
                Resolution: {
                },
                AspectRatio: {
                }
              }
            },
            Type: {
            }
          }
        },
        Warning: {
        }
      }
    },
    deletePipeline: {
      m: 'DELETE',
      u: '/2012-09-25/pipelines/{Id}',
      i: {
        m: {
          Id: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    deletePreset: {
      m: 'DELETE',
      u: '/2012-09-25/presets/{Id}',
      i: {
        m: {
          Id: {
            r: 1,
            l: 'uri'
          }
        }
      }
    },
    listJobsByPipeline: {
      m: 'GET',
      u: '/2012-09-25/jobsByPipeline/{PipelineId}?Ascending={Ascending}&PageToken={PageToken}',
      i: {
        m: {
          PipelineId: {
            r: 1,
            l: 'uri'
          },
          Ascending: {
            l: 'uri'
          },
          PageToken: {
            l: 'uri'
          }
        }
      },
      o: {
        Jobs: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Id: {
              },
              PipelineId: {
              },
              Input: {
                t: 'o',
                m: {
                  Key: {
                  },
                  FrameRate: {
                  },
                  Resolution: {
                  },
                  AspectRatio: {
                  },
                  Interlaced: {
                  },
                  Container: {
                  }
                }
              },
              Output: {
                t: 'o',
                m: {
                  Key: {
                  },
                  ThumbnailPattern: {
                  },
                  Rotate: {
                  },
                  PresetId: {
                  },
                  Status: {
                  },
                  StatusDetail: {
                  }
                }
              }
            }
          }
        },
        NextPageToken: {
        }
      }
    },
    listJobsByStatus: {
      m: 'GET',
      u: '/2012-09-25/jobsByStatus/{Status}?Ascending={Ascending}&PageToken={PageToken}',
      i: {
        m: {
          Status: {
            r: 1,
            l: 'uri'
          },
          Ascending: {
            l: 'uri'
          },
          PageToken: {
            l: 'uri'
          }
        }
      },
      o: {
        Jobs: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Id: {
              },
              PipelineId: {
              },
              Input: {
                t: 'o',
                m: {
                  Key: {
                  },
                  FrameRate: {
                  },
                  Resolution: {
                  },
                  AspectRatio: {
                  },
                  Interlaced: {
                  },
                  Container: {
                  }
                }
              },
              Output: {
                t: 'o',
                m: {
                  Key: {
                  },
                  ThumbnailPattern: {
                  },
                  Rotate: {
                  },
                  PresetId: {
                  },
                  Status: {
                  },
                  StatusDetail: {
                  }
                }
              }
            }
          }
        },
        NextPageToken: {
        }
      }
    },
    listPipelines: {
      m: 'GET',
      u: '/2012-09-25/pipelines',
      o: {
        Pipelines: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Id: {
              },
              Name: {
              },
              Status: {
              },
              InputBucket: {
              },
              OutputBucket: {
              },
              Role: {
              },
              Notifications: {
                t: 'o',
                m: {
                  Progressing: {
                  },
                  Completed: {
                  },
                  Warning: {
                  },
                  Error: {
                  }
                }
              }
            }
          }
        }
      }
    },
    listPresets: {
      m: 'GET',
      u: '/2012-09-25/presets',
      o: {
        Presets: {
          t: 'a',
          m: {
            t: 'o',
            m: {
              Id: {
              },
              Name: {
              },
              Description: {
              },
              Container: {
              },
              Audio: {
                t: 'o',
                m: {
                  Codec: {
                  },
                  SampleRate: {
                  },
                  BitRate: {
                  },
                  Channels: {
                  }
                }
              },
              Video: {
                t: 'o',
                m: {
                  Codec: {
                  },
                  CodecOptions: {
                    t: 'm'
                  },
                  KeyframesMaxDist: {
                  },
                  FixedGOP: {
                  },
                  BitRate: {
                  },
                  FrameRate: {
                  },
                  Resolution: {
                  },
                  AspectRatio: {
                  }
                }
              },
              Thumbnails: {
                t: 'o',
                m: {
                  Format: {
                  },
                  Interval: {
                  },
                  Resolution: {
                  },
                  AspectRatio: {
                  }
                }
              },
              Type: {
              }
            }
          }
        }
      }
    },
    readJob: {
      m: 'GET',
      u: '/2012-09-25/jobs/{Id}',
      i: {
        m: {
          Id: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        Job: {
          t: 'o',
          m: {
            Id: {
            },
            PipelineId: {
            },
            Input: {
              t: 'o',
              m: {
                Key: {
                },
                FrameRate: {
                },
                Resolution: {
                },
                AspectRatio: {
                },
                Interlaced: {
                },
                Container: {
                }
              }
            },
            Output: {
              t: 'o',
              m: {
                Key: {
                },
                ThumbnailPattern: {
                },
                Rotate: {
                },
                PresetId: {
                },
                Status: {
                },
                StatusDetail: {
                }
              }
            }
          }
        }
      }
    },
    readPipeline: {
      m: 'GET',
      u: '/2012-09-25/pipelines/{Id}',
      i: {
        m: {
          Id: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        Pipeline: {
          t: 'o',
          m: {
            Id: {
            },
            Name: {
            },
            Status: {
            },
            InputBucket: {
            },
            OutputBucket: {
            },
            Role: {
            },
            Notifications: {
              t: 'o',
              m: {
                Progressing: {
                },
                Completed: {
                },
                Warning: {
                },
                Error: {
                }
              }
            }
          }
        }
      }
    },
    readPreset: {
      m: 'GET',
      u: '/2012-09-25/presets/{Id}',
      i: {
        m: {
          Id: {
            r: 1,
            l: 'uri'
          }
        }
      },
      o: {
        Preset: {
          t: 'o',
          m: {
            Id: {
            },
            Name: {
            },
            Description: {
            },
            Container: {
            },
            Audio: {
              t: 'o',
              m: {
                Codec: {
                },
                SampleRate: {
                },
                BitRate: {
                },
                Channels: {
                }
              }
            },
            Video: {
              t: 'o',
              m: {
                Codec: {
                },
                CodecOptions: {
                  t: 'm'
                },
                KeyframesMaxDist: {
                },
                FixedGOP: {
                },
                BitRate: {
                },
                FrameRate: {
                },
                Resolution: {
                },
                AspectRatio: {
                }
              }
            },
            Thumbnails: {
              t: 'o',
              m: {
                Format: {
                },
                Interval: {
                },
                Resolution: {
                },
                AspectRatio: {
                }
              }
            },
            Type: {
            }
          }
        }
      }
    },
    testRole: {
      m: 'POST',
      u: '/2012-09-25/roleTests',
      i: {
        m: {
          Role: {
            r: 1
          },
          InputBucket: {
            r: 1
          },
          OutputBucket: {
            r: 1
          },
          Topics: {
            t: 'a',
            r: 1
          }
        }
      },
      o: {
        Success: {
        },
        Messages: {
          t: 'a'
        }
      }
    },
    updatePipelineNotifications: {
      m: 'POST',
      u: '/2012-09-25/pipelines/{Id}/notifications',
      i: {
        m: {
          Id: {
            r: 1,
            l: 'uri'
          },
          Notifications: {
            t: 'o',
            m: {
              Progressing: {
              },
              Completed: {
              },
              Warning: {
              },
              Error: {
              }
            },
            r: 1
          }
        }
      },
      o: {
        Pipeline: {
          t: 'o',
          m: {
            Id: {
            },
            Name: {
            },
            Status: {
            },
            InputBucket: {
            },
            OutputBucket: {
            },
            Role: {
            },
            Notifications: {
              t: 'o',
              m: {
                Progressing: {
                },
                Completed: {
                },
                Warning: {
                },
                Error: {
                }
              }
            }
          }
        }
      }
    },
    updatePipelineStatus: {
      m: 'POST',
      u: '/2012-09-25/pipelines/{Id}/status',
      i: {
        m: {
          Id: {
            r: 1,
            l: 'uri'
          },
          Status: {
            r: 1
          }
        }
      },
      o: {
        Pipeline: {
          t: 'o',
          m: {
            Id: {
            },
            Name: {
            },
            Status: {
            },
            InputBucket: {
            },
            OutputBucket: {
            },
            Role: {
            },
            Notifications: {
              t: 'o',
              m: {
                Progressing: {
                },
                Completed: {
                },
                Warning: {
                },
                Error: {
                }
              }
            }
          }
        }
      }
    }
  }
};
