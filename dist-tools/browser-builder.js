#!/usr/bin/env node

var build = require('./builder');

// following is set as default build options:
// var buildOptions = { basedir: path.resolve(__dirname, '..') };

// run if we called this tool directly
if (require.main === module) {
  var opts = {
    services: process.argv[2] || process.env.SERVICES,
    minify: process.env.MINIFY ? true : false,
  };

  build(opts, function(err, code) {
    if (err) console.error(err.message);
    else console.log(code);
  });
}
