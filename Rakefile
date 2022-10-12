LOGLEVEL = ($DEBUG || ENV['DEBUG']) ? '' : '-s'

task :default => 'test:all'

# Vendor tasks
root = File.dirname(__FILE__)
Dir[File.join(root, 'vendor', '*', 'Rakefile')].each do |vendor_rakefile|
  load vendor_rakefile
end

# Local tasks
Dir[File.join(root, 'tasks', '**', '*.rake')].each do |task_file|
  load task_file
end
