import CloudFront = require('../clients/cloudfront');

const client: CloudFront = new CloudFront(<CloudFront.ClientConfiguration>{
    signatureVersion: 'v4'
});

const params: CloudFront.ListDistributionsRequest = {
    Marker: 'foo'
};

client.listDistributions(params, (err, data) => {
    
});

const signer: CloudFront.Signer = new CloudFront.Signer('id', 'key');

const params1: CloudFront.Signer.SignerOptionsWithoutPolicy = {
    expires: 0,
    url: 'localhost'
};
const params2: CloudFront.Signer.SignerOptionsWithPolicy = {
    policy: 'policy'
}
const cookie1:CloudFront.Signer.CannedPolicy = signer.getSignedCookie(params1);
console.log(cookie1['CloudFront-Expires']);
const cookie2 = signer.getSignedCookie(params2);
console.log(cookie2['CloudFront-Policy']);

signer.getSignedCookie(params1, (err, cookie) => {
    console.log(cookie['CloudFront-Expires']);
});

signer.getSignedCookie(params2, (err, cookie) => {
    console.log(cookie['CloudFront-Policy']);
});

const url1 = signer.getSignedUrl(params1);
const url2 = signer.getSignedUrl(params2);

signer.getSignedUrl(params1, (err, url) => {
    
});
signer.getSignedUrl(params2, (err, url) => {
    
});