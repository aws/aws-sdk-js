require 'json'

def write_configuration
  config_cmd = <<-eof
    node -e 'c=require("./").config.credentials;c.refresh(function() {
      console.log(c.accessKeyId, c.secretAccessKey, c.sessionToken)
    });'
  eof
  config = {}
  if File.exist?('configuration')
    config = JSON.parse(File.read('configuration'))
    out = `#{config_cmd}`.split(/\s+/)
    config['accessKeyId'] ||= out[0]
    config['secretAccessKey'] ||= out[1]
    config['sessionToken'] ||= out[2] if out[2] && out[2] != "undefined"
  end
  File.open('test/configuration.js', 'w') do |f|
    config_json = JSON.generate(config).inspect
    f.puts "module.exports = JSON.parse(#{config_json});"
  end
end

def sdk_version
  JSON.parse(File.read('package.json'))['version']
end

namespace :reactnative do
  $BROWSERIFY = "browserify"
  $BROWSERIFY_DIST = "dist/aws-sdk-react-native.js"
  $BROWSERIFY_TEST = "test/browser/build/tests.js"

  task :all => [:test]

  desc 'Builds react-native test harness and runner'
  task :test => [:node10_only, :dist_path] do
    write_configuration
    mkdir_p "test/browser/build"
    cp "dist/aws-sdk-react-native.js", "test/browser/build/aws-sdk-all.js"
    files = "test/helpers.js ";
    files += Dir.glob("test/**/*.spec.js").join(" ")
    sh({"SERVICES" => "all"}, $BROWSERIFY +
       " -i domain #{files} > #{$BROWSERIFY_TEST}")
    rm_f "test/configuration.js"
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
