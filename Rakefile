LOGLEVEL = ($DEBUG || ENV['DEBUG']) ? '' : '-s'

task :default => :test

desc 'Build dependencies'
task :build do
  system "npm #{LOGLEVEL} install"
end

desc 'Run all tests'
task :test => :build do
  system "npm #{LOGLEVEL} test"
end

desc 'Run unit tests'
task 'test:unit' => :build do
  system "npm #{LOGLEVEL} run-script unit"
end

desc 'Run integration tests'
task 'test:integration' => :build do
  system "npm #{LOGLEVEL} run-script integration"
end

desc 'Run JSHint'
task :lint do
  system "npm #{LOGLEVEL} run-script lint"
end
