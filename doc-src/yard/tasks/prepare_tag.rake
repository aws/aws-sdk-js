require 'json'
require 'tempfile'

namespace :release do
  desc 'Updates repository and tags VERSION=X.Y.Z'
  task :tag do
    restore_file = Tempfile.new
    restore_file.close
    at_exit { restore_file.unlink }

    version = ENV['VERSION']
    build_path = File.expand_path(File.join(`gem which samus`.strip, '..', '..', 'commands', 'build'))
    samus_contents = File.read(File.join(__dir__, '..', 'samus.json'))
    samus_json = JSON.parse(samus_contents.gsub('$version', version))

    samus_json['actions'].each do |action|
      env = {
        '_VERSION' => version,
        '__ORIG_BRANCH' => `git rev-parse --abbrev-ref HEAD`.strip,
        '__RESTORE_FILE' => restore_file.path,
      }
      (action['arguments'] || {}).each {|k, v| env["_#{k.upcase}"] = v }
      cmd = [File.join(build_path, action['action']), *action['files']]
      puts "[C] #{action['action']} #{(action['files'] || []).join(' ')}"
      output = ""
      IO.popen(env, cmd) {|io| output = io.read }
      status = $?
      unless status.success?
        puts "[F] Last command failed with: #{status.to_i}"
        puts output
        exit(status.to_i)
      end
    end

    puts ""
    puts "Tag v#{version} created. To publish, type the following:"
    puts ""
    puts "  bundle exec rake release:push VERSION=#{version}"
  end

  desc 'Pushes the main branch and tag for VERSION=X.Y.Z'
  task :push do
    sh "git push main v#{ENV['VERSION']}"
  end
end
