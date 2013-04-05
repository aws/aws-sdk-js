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
  apiVersion: '2012-09-25',
  endpointPrefix: 'elastictranscoder',
  serviceFullName: 'Amazon Elastic Transcoder',
  signatureVersion: 'v4',
  timestampFormat: 'iso8601',
  operations: {
    cancelJob: {
      name: 'CancelJob',
      http: {
        method: 'DELETE',
        uri: '/2012-09-25/jobs/{Id}'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure'
      }
    },
    createJob: {
      name: 'CreateJob',
      http: {
        method: 'POST',
        uri: '/2012-09-25/jobs'
      },
      input: {
        payload: [
          'PipelineId',
          'Input',
          'Output'
        ],
        type: 'structure',
        members: {
          PipelineId: {
          },
          Input: {
            type: 'structure',
            members: {
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
            type: 'structure',
            members: {
              Key: {
              },
              ThumbnailPattern: {
              },
              Rotate: {
              },
              PresetId: {
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Job: {
            type: 'structure',
            members: {
              Id: {
              },
              PipelineId: {
              },
              Input: {
                type: 'structure',
                members: {
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
                type: 'structure',
                members: {
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
      }
    },
    createPipeline: {
      name: 'CreatePipeline',
      http: {
        method: 'POST',
        uri: '/2012-09-25/pipelines'
      },
      input: {
        payload: [
          'Name',
          'InputBucket',
          'OutputBucket',
          'Role',
          'Notifications'
        ],
        type: 'structure',
        members: {
          Name: {
          },
          InputBucket: {
          },
          OutputBucket: {
          },
          Role: {
          },
          Notifications: {
            type: 'structure',
            members: {
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
      },
      output: {
        type: 'structure',
        members: {
          Pipeline: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
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
    createPreset: {
      name: 'CreatePreset',
      http: {
        method: 'POST',
        uri: '/2012-09-25/presets'
      },
      input: {
        payload: [
          'Name',
          'Description',
          'Container',
          'Video',
          'Audio',
          'Thumbnails'
        ],
        type: 'structure',
        members: {
          Name: {
          },
          Description: {
          },
          Container: {
          },
          Video: {
            type: 'structure',
            members: {
              Codec: {
              },
              CodecOptions: {
                type: 'map'
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
          Audio: {
            type: 'structure',
            members: {
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
          Thumbnails: {
            type: 'structure',
            members: {
              Format: {
              },
              Interval: {
              },
              Resolution: {
              },
              AspectRatio: {
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Preset: {
            type: 'structure',
            members: {
              Id: {
              },
              Name: {
              },
              Description: {
              },
              Container: {
              },
              Audio: {
                type: 'structure',
                members: {
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
                type: 'structure',
                members: {
                  Codec: {
                  },
                  CodecOptions: {
                    type: 'map'
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
                type: 'structure',
                members: {
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
      }
    },
    deletePipeline: {
      name: 'DeletePipeline',
      http: {
        method: 'DELETE',
        uri: '/2012-09-25/pipelines/{Id}'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure'
      }
    },
    deletePreset: {
      name: 'DeletePreset',
      http: {
        method: 'DELETE',
        uri: '/2012-09-25/presets/{Id}'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure'
      }
    },
    listJobsByPipeline: {
      name: 'ListJobsByPipeline',
      http: {
        method: 'GET',
        uri: '/2012-09-25/jobsByPipeline/{PipelineId}?Ascending={Ascending}&PageToken={PageToken}'
      },
      input: {
        type: 'structure',
        members: {
          PipelineId: {
            location: 'uri'
          },
          Ascending: {
            location: 'uri'
          },
          PageToken: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Jobs: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Id: {
                },
                PipelineId: {
                },
                Input: {
                  type: 'structure',
                  members: {
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
                  type: 'structure',
                  members: {
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
      }
    },
    listJobsByStatus: {
      name: 'ListJobsByStatus',
      http: {
        method: 'GET',
        uri: '/2012-09-25/jobsByStatus/{Status}?Ascending={Ascending}&PageToken={PageToken}'
      },
      input: {
        type: 'structure',
        members: {
          Status: {
            location: 'uri'
          },
          Ascending: {
            location: 'uri'
          },
          PageToken: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Jobs: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Id: {
                },
                PipelineId: {
                },
                Input: {
                  type: 'structure',
                  members: {
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
                  type: 'structure',
                  members: {
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
      }
    },
    listPipelines: {
      name: 'ListPipelines',
      http: {
        method: 'GET',
        uri: '/2012-09-25/pipelines'
      },
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          Pipelines: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
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
                  type: 'structure',
                  members: {
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
    },
    listPresets: {
      name: 'ListPresets',
      http: {
        method: 'GET',
        uri: '/2012-09-25/presets'
      },
      input: {
        type: 'structure',
        members: {
        }
      },
      output: {
        type: 'structure',
        members: {
          Presets: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Id: {
                },
                Name: {
                },
                Description: {
                },
                Container: {
                },
                Audio: {
                  type: 'structure',
                  members: {
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
                  type: 'structure',
                  members: {
                    Codec: {
                    },
                    CodecOptions: {
                      type: 'map'
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
                  type: 'structure',
                  members: {
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
      }
    },
    readJob: {
      name: 'ReadJob',
      http: {
        method: 'GET',
        uri: '/2012-09-25/jobs/{Id}'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Job: {
            type: 'structure',
            members: {
              Id: {
              },
              PipelineId: {
              },
              Input: {
                type: 'structure',
                members: {
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
                type: 'structure',
                members: {
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
      }
    },
    readPipeline: {
      name: 'ReadPipeline',
      http: {
        method: 'GET',
        uri: '/2012-09-25/pipelines/{Id}'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Pipeline: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
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
    readPreset: {
      name: 'ReadPreset',
      http: {
        method: 'GET',
        uri: '/2012-09-25/presets/{Id}'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Preset: {
            type: 'structure',
            members: {
              Id: {
              },
              Name: {
              },
              Description: {
              },
              Container: {
              },
              Audio: {
                type: 'structure',
                members: {
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
                type: 'structure',
                members: {
                  Codec: {
                  },
                  CodecOptions: {
                    type: 'map'
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
                type: 'structure',
                members: {
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
    testRole: {
      name: 'TestRole',
      http: {
        method: 'POST',
        uri: '/2012-09-25/roleTests'
      },
      input: {
        payload: [
          'Role',
          'InputBucket',
          'OutputBucket',
          'Topics'
        ],
        type: 'structure',
        members: {
          Role: {
          },
          InputBucket: {
          },
          OutputBucket: {
          },
          Topics: {
            type: 'list'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Success: {
          },
          Messages: {
            type: 'list'
          }
        }
      }
    },
    updatePipelineNotifications: {
      name: 'UpdatePipelineNotifications',
      http: {
        method: 'POST',
        uri: '/2012-09-25/pipelines/{Id}/notifications'
      },
      input: {
        payload: [
          'Notifications'
        ],
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          },
          Notifications: {
            type: 'structure',
            members: {
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
      },
      output: {
        type: 'structure',
        members: {
          Pipeline: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
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
    updatePipelineStatus: {
      name: 'UpdatePipelineStatus',
      http: {
        method: 'POST',
        uri: '/2012-09-25/pipelines/{Id}/status'
      },
      input: {
        payload: [
          'Status'
        ],
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          },
          Status: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Pipeline: {
            type: 'structure',
            members: {
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
                type: 'structure',
                members: {
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
  }
};
