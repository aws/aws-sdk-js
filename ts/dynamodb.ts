import DynamoDB = require('../clients/dynamodb');

const client: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();

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
const jsType: any = DynamoDB.Converter.output('string');
client.get(params, (err, data) => {
    
});

const dynamodb = new DynamoDB(<DynamoDB.ClientConfiguration>{
    apiVersion: "2012-08-10"
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
