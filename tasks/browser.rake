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
  $BUILDER = "./dist-tools/browser-builder.js"
  $BROWSERIFY = "./dist-tools/node_modules/.bin/browserify"
  $BROWSERIFY_ARGS = "-i domain -t ./dist-tools/bundle-transform lib/aws.js"
  $BROWSERIFY_DIST = "dist/aws-sdk-#{sdk_version}.js"
  $BROWSERIFY_DIST_LATEST = "dist/aws-sdk.js"
  $BROWSERIFY_TEST = "dist/tests.js"

  task :all => [:build, :test]

  desc 'Builds browser distributable (SERVICES=s3,dynamodb,...)'
  task :build => :build_complete do
    sh "MINIFY=1 #{$BUILDER} > #{$BROWSERIFY_DIST.sub('.js', '.min.js')}"
  end

  task :build_complete => :dist_path do
    sh "MINIFY='' #{$BUILDER} > #{$BROWSERIFY_DIST}"
    cp $BROWSERIFY_DIST, $BROWSERIFY_DIST_LATEST
  end

  task :build_server do
    pkg_file = File.dirname(__FILE__) + '/dist-tools/package.json'
    json = JSON.parse(File.read(pkg_file))
    local_json = JSON.parse(File.read(File.dirname(__FILE__) + '/package.json'))
    json['dependencies'].update(local_json['dependencies'])
    File.open(pkg_file, 'w') do |f|
      f.puts(JSON.pretty_generate(json, indent: '  '))
    end

    rm_f "#{json['name']}.tar.gz"
    rm_f "#{json['name']}.zip"
    cp_r 'dist-tools', 'server'
    cp_r 'lib', 'server/aws-sdk'
    Dir.chdir('server') do
      sh "npm install"
      sh "zip -rq ../#{json['name']}.zip *"
      sh "tar cfz ../#{json['name']}.tgz *"
    end
    rm_rf 'server'
  end

  desc 'Builds browser test harness and runner'
  task :test => :dist_path do
    write_configuration
    sh "coffee -c test/helpers.coffee"
    sh "find test -name '*.coffee' | SERVICES=all xargs #{$BROWSERIFY} " +
       "-t coffeeify #{$BROWSERIFY_ARGS} > #{$BROWSERIFY_TEST}"
    rm_f "test/helpers.js"
    rm_f "test/configuration.js"
    puts "Now run `testem`"
    sh "open dist/tests.html" if ENV['OPEN']
  end

  task :dist_path do
    mkdir_p 'dist'
  end
end
