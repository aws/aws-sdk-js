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
  $BROWSERIFY = "browserify"
  $BROWSERIFY_DIST = "dist/aws-sdk.js"
  $BROWSERIFY_TEST = "test/browser/build/tests.js"

  task :all => [:build, :test]

  task :setup_dist_tools do
    unless File.directory?("dist-tools/node_modules")
      sh "cd dist-tools && npm install --production"
    end
  end

  desc 'Builds browser distributable (SERVICES=s3,dynamodb,...)'
  task :build => :build_complete do
    sh "MINIFY=1 #{$BUILDER} > #{$BROWSERIFY_DIST.sub('.js', '.min.js')}"
  end

  task :build_complete => [:setup_dist_tools, :dist_path] do
    sh "MINIFY='' #{$BUILDER} > #{$BROWSERIFY_DIST}"
  end

  task :build_all => [:setup_dist_tools, :dist_path] do
    sh "MINIFY='' #{$BUILDER} all > dist/aws-sdk-all.js"
  end

  desc 'Caches assets to the dist-tools build server'
  task :build_server => [:setup_dist_tools] do
    version = ENV['VERSION'].sub(/^v/, '')
    raise "Missing version" unless version
    root = "vendor/dist-server/sdks/v#{version}"
    mkdir_p(root)
    mkdir_p("#{root}/node_modules")
    cp_r "lib", root
    cp_r "node_modules/aws-sdk-apis", "#{root}/node_modules/aws-sdk-apis"
    cp_r "node_modules/xmlbuilder", "#{root}/node_modules/xmlbuilder"
    cp_r "node_modules/xml2js", "#{root}/node_modules/xml2js"
    Dir.chdir("vendor/dist-server") do
      sh "node setup-versions v#{version}"
    end
  end

  desc 'Builds browser test harness and runner'
  task :test => [:node10_only, :setup_dist_tools, :dist_path, :build_all] do
    write_configuration
    mkdir_p "test/browser/build"
    cp "dist/aws-sdk-all.js", "test/browser/build/aws-sdk-all.js"
    sh "coffee -c test/helpers.coffee"
    sh "find test -name '*.coffee' | SERVICES=all xargs #{$BROWSERIFY} " +
       "-t coffeeify -i domain > #{$BROWSERIFY_TEST}"
    rm_f "test/helpers.js"
    rm_f "test/configuration.js"
    sh "open test/browser/runner.html" if ENV['OPEN']
    sh "phantomjs test/browser/runner.js"
  end

  task :dist_path do
    mkdir_p 'dist'
  end

  task :node10_only do
    version = `node -v`.chomp
    v = version.split('.')
    if v[0] == 'v0' && v[1].to_i < 10
      puts "Skipping task #{ARGV[0]} due to unmet Node version (#{version} < v0.10.x)."
      exit 0
    end
  end
end
