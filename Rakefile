task :default => :test

desc 'Build dependencies'
task :build do
  system 'npm install'
end

desc 'Run all tests'
task :test => :build do
  system 'npm test'
end

desc 'Run unit tests'
task 'test:unit' => :build do
  system 'npm run-script unit'
end

desc 'Run integration tests'
task 'test:integration' => :build do
  system 'npm run-script integration'
end

desc 'Run JSHint'
task :hint do
  system 'npm run-script hint'
end