import DynamoDB = require('../clients/dynamodb');

const client = new DynamoDB.DocumentClient({
    region: 'us-west-2',
    apiVersion: '2012-08-10',
    signatureVersion: 'v4',
    dynamoDbCrc32: false,
    params: {
        TableName: 'MyTable'
    }
});

const params: DynamoDB.DocumentClient.GetItemInput = {
    TableName: 'MyTable',
    Key: {
        'my-key': 'value'
    }
};

const set: DynamoDB.DocumentClient.DynamoDbSet = client.createSet(['string']);

if (set.type === 'String') {
    const string: string|undefined = set.values.pop();
} else if (set.type === 'Number') {
    const number: number|undefined = set.values.pop();
} else {
    const binary: DynamoDB.DocumentClient.binaryType|undefined = set.values.pop();
}

const converter: DynamoDB.Converter = DynamoDB.Converter;
const options: DynamoDB.Converter.ConverterOptions = {
    convertEmptyValues: true,
};

const av: DynamoDB.AttributeValue = DynamoDB.Converter.input('string', options);
const record: DynamoDB.AttributeMap = DynamoDB.Converter.marshall(
    {
        string: 'foo',
        list: ['fizz', 'buzz', 'pop'],
        map: {
            nestedMap: {
                key: 'value',
            },
        },
        number: 123,
        nullValue: null,
        boolValue: true,
        stringSet: client.createSet(['foo', 'bar', 'baz']),
        buffer: Uint8Array.from([0xde, 0xad, 0xbe, 0xef]),
    },
    options
);

const jsType = DynamoDB.Converter.output('string' as any);
const jsObject: {[key: string]: any} = DynamoDB.Converter.unmarshall({
    string: {S: 'foo'},
    list: {L: [{S: 'fizz'}, {S: 'buzz'}, {S: 'pop'}]},
    map: {
        M: {
            nestedMap: {
                M: {
                    key: {S: 'value'},
                },
            },
        },
    },
    number: {N: '123'},
    nullValue: {NULL: true},
    boolValue: {BOOL: true},
    stringSet: {SS: ['foo', 'bar', 'baz']},
    buffer: {B: 'base64+encoded+text'},
});

client.get(params, (err, data) => {

});

client.get({
    Key: {'my-key': 'value'}
}, (err, data) => {

});

const dynamodb = new DynamoDB({
    apiVersion: "2012-08-10",
    params: {
        TableName: 'MyTable'
    }
});

const getParams: DynamoDB.GetItemInput = {
    TableName: 'MyTable',
    Key: {
        'my-key': {
            S: 'value'
        }
    }
};

dynamodb.getItem(getParams, (err, data) => {

});

// Table name is optional since it's specified in constructor
dynamodb.getItem({
    Key: {
        'my-key': {
            S: 'value'
        }
    }
}, (err, data) => {

})

// Still works with Types namespace as well
const getParams2: DynamoDB.Types.GetItemInput = {
    TableName: 'MyTable',
    Key: {
        'my-key': {
            S: 'value'
        }
    }
};

dynamodb.getItem(getParams2, (err, data) => {

});

const clientTwo = new DynamoDB.DocumentClient({service: dynamodb});

clientTwo.get({
    Key: {'my-key': 'value'}
}, (err, data) => {})