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
    system "npm #{LOGLEVEL} test#{dir_suffix}"
  end

  desc "Run #{type || 'all'} tests with coverage"
  task "cov#{name_suffix}" => :build do
    system "./scripts/coverage --coffee test#{dir_suffix}"
  end
end

desc 'Run JSHint'
task :lint do
  system "npm #{LOGLEVEL} run-script lint"
end
