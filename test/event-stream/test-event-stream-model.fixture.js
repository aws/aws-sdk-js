var Shape = require('../../lib/model/shape');

var mockEventStreamShape = Shape.create({
    'type': 'structure',
    'members': {
        'FooBar': {
            'type': 'structure',
            'members': {
                'Payload': {
                    'eventpayload': true,
                    'type': 'blob'
                },
                'HeaderInt': {
                    'type': 'integer',
                    'eventheader': true
                },
                'HeaderLong': {
                    'type': 'long',
                    'eventheader': true
                },
                'HeaderBlob': {
                    'type': 'blob',
                    'eventheader': true
                },
                'HeaderBoolean': {
                    'type': 'boolean',
                    'eventheader': true
                },
                'HeaderTimestamp': {
                    'type': 'timestamp',
                    'eventheader': true
                },
                'HeaderByte': {
                    'type': 'short',
                    'eventheader': true
                },
                'HeaderString': {
                    'type': 'string',
                    'eventheader': true
                },
            },
            'event': true
        },
        'Records': {
            'type': 'structure',
            'members': {
                'Payload': {
                    'eventpayload': true,
                    'type': 'blob'
                }
            },
            'event': true
        },
        'Stats': {
            'type': 'structure',
            'members': {
                'Details': {
                    'eventpayload': true,
                    'type': 'structure',
                    'members': {
                        'BytesScanned': {
                            'type': 'long'
                        },
                        'BytesProcessed': {
                            'type': 'long'
                        },
                        'BytesReturned': {
                            'type': 'long'
                        }
                    }
                }
            },
            'event': true
        },
        'Progress': {
            'type': 'structure',
            'members': {
                'Details': {
                    'eventpayload': true,
                    'type': 'structure',
                    'members': {
                        'BytesScanned': {
                            'type': 'long'
                        },
                        'BytesProcessed': {
                            'type': 'long'
                        },
                        'BytesReturned': {
                            'type': 'long'
                        }
                    }
                }
            },
            'event': true
        },
        'Cont': {
            'type': 'structure',
            'members': {},
            'event': true
        },
        'End': {
            'type': 'structure',
            'members': {},
            'event': true
        }
    },
    'eventstream': true
});

module.exports = {
    mockEventStreamShape: mockEventStreamShape
};
