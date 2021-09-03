# frozen_string_literal: true
require File.dirname(__FILE__) + '/lib/yard'
require File.dirname(__FILE__) + '/lib/yard/rubygems/specification'
require 'rbconfig'

YARD::VERSION.replace(ENV['YARD_VERSION']) if ENV['YARD_VERSION']

Dir['tasks/**/*.rake'].each { |task_file| load task_file }

desc "Builds the gem"
task :gem do
  sh "gem build yard.gemspec"
end

desc "Installs the gem"
task :install => :gem do
  sh "gem install yard-#{YARD::VERSION}.gem --no-document"
end

begin
  require 'rspec/core/rake_task'
  RSpec::Core::RakeTask.new(:spec)
rescue LoadError
  nil # noop
end

desc "Generate documentation for Yard, and fail if there are any warnings"
task :test_doc do
  sh "ruby bin/yard --fail-on-warning #{"--no-progress" if ENV["CI"]}"
end

task :default => [:spec, :test_doc]

YARD::Rake::YardocTask.new do |t|
  t.options += ['--title', "YARD #{YARD::VERSION} Documentation"]
end
