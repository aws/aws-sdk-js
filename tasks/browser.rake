require 'json'

def write_configuration
  config = {}
  if File.exist?('configuration')
    config = JSON.parse(File.read('configuration'))
    config['accessKeyId'] ||= ENV['AWS_ACCESS_KEY_ID']
    config['secretAccessKey'] ||= ENV['AWS_SECRET_ACCESS_KEY']
  end
  File.open('test/configuration.js', 'w') do |f|
    config_json = JSON.generate(config).inspect
    f.puts "module.exports = JSON.parse(#{config_json});"
  end
end

def sdk_version
  JSON.parse(File.read('package.json'))['version']
end

namespace :browser do
  $BUILDER = "./vendor/dist-tools/browser-builder.js"
  $BROWSERIFY = "./vendor/dist-tools/node_modules/.bin/browserify"
  $BROWSERIFY_ARGS = "-i domain -t ./vendor/dist-tools/bundle-transform lib/aws.js"
  $BROWSERIFY_DIST = "dist/aws-sdk-#{sdk_version}.js"
  $BROWSERIFY_DIST_LATEST = "dist/aws-sdk.js"
  $BROWSERIFY_TEST = "dist/tests.js"

  task :all => [:build, :test]

  task :setup_dist_tools do
    unless File.directory?("vendor/dist-tools")
      sh "git clone git://github.com/aws/aws-sdk-js-dist-tools vendor/dist-tools"
    end
  end

  desc 'Builds browser distributable (SERVICES=s3,dynamodb,...)'
  task :build => :build_complete do
    sh "MINIFY=1 #{$BUILDER} > #{$BROWSERIFY_DIST.sub('.js', '.min.js')}"
  end

  task :build_complete => [:setup_dist_tools, :dist_path] do
    sh "MINIFY='' #{$BUILDER} > #{$BROWSERIFY_DIST}"
    cp $BROWSERIFY_DIST, $BROWSERIFY_DIST_LATEST
  end

  task :build_all => [:setup_dist_tools, :dist_path] do
    sh "MINIFY='' #{$BUILDER} all > dist/aws-sdk-all.js"
  end


  desc 'Builds browser test harness and runner'
  task :test => [:setup_dist_tools, :dist_path, :build_all] do
    write_configuration
    sh "coffee -c test/helpers.coffee"
    sh "find test -name '*.coffee' | SERVICES=all xargs #{$BROWSERIFY} " +
       "-t coffeeify -i domain > #{$BROWSERIFY_TEST}"
    rm_f "test/helpers.js"
    rm_f "test/configuration.js"
    puts "Now run `testem`"
    sh "open dist/tests.html" if ENV['OPEN']
  end

  task :dist_path do
    mkdir_p 'dist'
  end
end
