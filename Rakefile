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

LOGLEVEL = ($DEBUG || ENV['DEBUG']) ? '' : '-s'

task :default => :test

desc 'Build dependencies'
task :build do
  system "npm #{LOGLEVEL} install"
end

[nil, 'unit', 'integration'].each do |type|
  dir_suffix = type ? "/#{type}" : ""
  name_suffix = type ? ":#{type}" : ""

  desc "Run #{type || 'all'} tests"
  task "test#{name_suffix}" => :build do
    if type
      # run only unit or integration
      sh "npm #{LOGLEVEL} run-script #{name_suffix.gsub(':', '')}"
    else
      # runs both unit and integration
      sh "npm #{LOGLEVEL} run-script test"
    end
  end

  desc "Run #{type || 'all'} tests with coverage"
  task "cov#{name_suffix}" => :build do
    sh "./scripts/coverage --coffee test#{dir_suffix}"
  end

end

desc 'Run JSHint'
task :lint do
  sh "npm #{LOGLEVEL} run-script lint"
end

desc 'Interactive console'
task :console do
  system './scripts/console'
end

# Vendor tasks
root = File.dirname(__FILE__)
Dir[File.join(root, 'vendor', '*', 'Rakefile')].each do |vendor_rakefile|
  load vendor_rakefile
end

