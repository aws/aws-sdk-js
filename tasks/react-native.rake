require 'json'

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
    files += Dir.glob("test/**/*.spec.js").sort().delete_if{|name| name.start_with?("test/publisher")}.join(" ")
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
