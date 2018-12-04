import * as RDS from '../clients/rds';

const signer: RDS.Signer = new RDS.Signer();

const params1: RDS.Signer.SignerOptions = {
    region: 'us-west-2',
    hostname: 'db.us-west-2.rds.amazonaws.com',
    port: 1111,
    username: 'test'
};

const params2: RDS.Signer.SignerOptions = {
    region: 'us-west-2',
    hostname: 'db.us-west-2.rds.amazonaws.com',
    port: 1111,
    username: 'test',
    credentials: {
        accessKeyId: 'akid',
        secretAccessKey: 'secret',
        sessionToken: 'token'
    }
};

const token1: string = signer.getAuthToken(params1);

signer.getAuthToken(params2, (err, token) => {
    
});