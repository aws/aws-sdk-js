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

desc 'Install dependencies'
task :setup do
  system "npm #{LOGLEVEL} install"
end

namespace :browser do
  $BUILDER = "./dist-tools/browser-builder.js"
  $BROWSERIFY_ARGS = "-i domain -t ./dist-tools/bundle-transform lib/aws.js"
  $BROWSERIFY_DIST = "dist/aws-sdk.js"
  $BROWSERIFY_TEST = "dist/tests.js"

  task :all => [:build, :test]

  desc 'Builds browser distributable (SERVICES=s3,dynamodb,...)'
  task :build => :build_complete do
    sh "MINIFY='1' #{$BUILDER} > #{$BROWSERIFY_DIST}"
  end

  task :build_complete => :dist_path do
    sh "MINIFY='' #{$BUILDER} > #{$BROWSERIFY_DIST}"
  end

  desc 'Builds browser test harness and runner'
  task :test => :dist_path do
    sh "find test -name '*.coffee' | SERVICES=all xargs browserify " +
       "-t coffeeify #{$BROWSERIFY_ARGS} > #{$BROWSERIFY_TEST}"
    puts "Now run `testem`"
  end

  task :dist_path do
    mkdir_p 'dist'
  end
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
