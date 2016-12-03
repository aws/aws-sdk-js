import DynamoDB = require('../clients/dynamodb');

const client: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();

const params: DynamoDB.DocumentClient.GetItemInput = {
    TableName: 'MyTable',
    Key: {
        'my-key': 'value'
    }
};

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