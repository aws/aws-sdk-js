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

task :default => 'test:all'

desc 'Build dependencies'
task :build do
  system "npm #{LOGLEVEL} install"
end

namespace :test do
  desc "Runs all tests"
  task :all => :build do
    sh "npm #{LOGLEVEL} test"
  end

  desc "Runs unit tests"
  task :unit => :build do
    sh "npm #{LOGLEVEL} run-script unit"
  end

  desc "Runs integration tests"
  task :integration => :build do
    sh "npm #{LOGLEVEL} run-script integration"
  end

end

desc 'Runs JSHint'
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
