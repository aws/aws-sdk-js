# frozen_string_literal: true

# Script to generate the Error class name map in:
# lib/yard/handlers/c/base.rb

require 'open-uri'
require 'stringio'

desc 'Update the error class names map'
task :update_error_map do

  ERROR_C_URL = 'https://raw.githubusercontent.com/ruby/ruby/master/error.c'

  INIT_MATCH = /void\s+Init_Exception\(void\)\s*\{(.+?)^\}/m
  NAME_MATCH = /(\w+)\s*=\s*rb_define_class\("([^"]+)"/

  $stderr.puts "Downloading #{ERROR_C_URL} ..."
  content = open(ERROR_C_URL) { |io| io.read }

  $stderr.puts "Extracting class names ..."
  init_source = content.match(INIT_MATCH).captures.first
  map = init_source.scan(NAME_MATCH).sort_by { |key, value| key }

  $stderr.puts "Generating new lookup table ..."
  indent = '  ' * 4
  source = StringIO.new
  source.puts "#{indent}ERROR_CLASS_NAMES = {"
  map.each do |variable, name|
    source.puts "#{indent}  '#{variable}' => '#{name}',"
  end
  source.puts "#{indent}}"

  $stderr.puts source.string

  $stderr.puts "Patching 'lib/yard/handlers/c/base.rb' ..."
  CLASS_NAME_MAP_MATCH = /^\s+ERROR_CLASS_NAMES = {[^}]+}/

  PROJECT_PATH = File.expand_path('..', __dir__)
  C_BASE_HANDLER = File.join(PROJECT_PATH, 'lib/yard/handlers/c/base.rb')

  File.open(C_BASE_HANDLER, 'r+') { |file|
    content = file.read
    # .rstrip is added to avoid adding new empty lines due to the new lines
    # added by `.puts` when building the string.
    content.gsub!(CLASS_NAME_MAP_MATCH, source.string.rstrip)
    file.rewind
    file.truncate(0)
    file.write(content)
  }

  $stderr.puts "Done!"

end
