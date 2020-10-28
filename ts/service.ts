import {AWSError} from '../lib/error';
import {DescribeTableOutput} from '../clients/dynamodb';
import {Service} from '../lib/service';
import {Endpoint} from '../lib/endpoint';

new Service({
    endpoint: new Endpoint('http://localhost:3000')
});

const service: Service = new Service({
    endpoint: 'http://localhost:3000',
    params: {
        BucketName: 'mybucket1337',
    },
});

service.waitFor('BucketExists', (err: AWSError, data: any) => {
    // The bucket exists!
});

service.waitFor(
    'TableExists',
    {$waiter: {delay: 20, maxAttempts: 4}},
    (err: AWSError, data: DescribeTableOutput) => {
        // The table exists!
    }
);
