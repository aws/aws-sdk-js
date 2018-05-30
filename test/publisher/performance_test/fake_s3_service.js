const http = require('http');
const {Buffer} = require('buffer')

const hostname = '127.0.0.1';
const port = 8000;
const lousy = process.argv[2] === '1';
const exceptionRatio= 0.25;

const server = http.createServer((req, res) => {
  req.on('error', function(){
    res.statusCode = 400;
    res.end();
  })
  if (lousy && Math.random() < exceptionRatio) {
    res.statusCode = 500;
    res.end();
  } else {
    res.statusCode = 200;
    //only accept listBuckets
    res.setHeader('Content-Type', 'application/xml');
    res.write(Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
    <ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
      <Owner>
        <ID>cc669e2378c8961609963caed428e5f42ba8bb11c3dae5426de3210129e773d0</ID>
        <DisplayName>zheallan</DisplayName>
      </Owner>
      <Buckets>
        <Bucket>
          <Name>aws-sdk-js-integration-1521789977323</Name>
          <CreationDate>2018-03-23T07:26:13.000Z</CreationDate>
        </Bucket>
      </Buckets>
    </ListAllMyBucketsResult>`));
    res.end();
  }
  console.log(req.method);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
