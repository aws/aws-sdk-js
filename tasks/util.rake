desc 'Install dependencies'
task :setup do
  system "npm #{LOGLEVEL} install"
  system "bundle install"
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
