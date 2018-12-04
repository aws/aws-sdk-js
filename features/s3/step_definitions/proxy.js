var url = require('url');
var http = require('http');

module.exports = function() {
  this.Before('@s3', '@proxy', function(callback) {
    setupProxyServer.call(this);

    this.service = this.s3 = new this.AWS.S3({
      httpOptions: { proxy: 'http://localhost:' + this.proxyPort }
    });

    callback();
  });

  this.Then(/^I teardown the local proxy server$/, function(callback) {
    this.service = this.s3 = new this.AWS.S3();
    this.proxyServer.close(callback);
  });

  function setupProxyServer() {
    if (this.proxyServer) return;
    this.proxyPort = 8000 + parseInt(Math.random() * 100);
    this.proxyServer = http.createServer(function (req, res) {
      var uri = url.parse(req.url);
      var options = {
        host: uri.hostname,
        port: uri.port || 80,
        method: req.method,
        path: uri.path,
        headers: req.headers
      };
      options.headers.host = uri.hostname;

      var s = http.request(options, function (res2) {
        res.writeHead(res2.statusCode, res2.headers);
        res2.on('data', function(ch) {
          res.write(ch);
        }).on('end', function() { res.end(); });
      });
      req.pipe(s);
    });
    this.proxyServer.listen(this.proxyPort);
  }
};
