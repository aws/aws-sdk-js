# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

through = require('through')
fs = require('fs')

stringstream = ->
  s = through (buf) -> @data = (@data || '') + buf
  s._stringstream = true
  s.data = ''
  s

evalCode = (code, preamble) ->
  eval """
    (function() {
      var window = {};
      #{preamble};
      return #{code};
    })();
  """

apiDir = __dirname + '/../../lib/services/api'
apiFiles = fs.readdirSync(apiDir)
apiFilesMap = {}
apiFiles.forEach (file) ->
  match = file.match(/^(.+?)-(.+)\.js$/)
  apiFilesMap[match[1]] = (apiFilesMap[match[1]] || []).concat(match[2])

module.exports =
  apiFiles: apiFiles
  apiFilesMap: apiFilesMap
  evalCode: evalCode
  stringstream: stringstream
