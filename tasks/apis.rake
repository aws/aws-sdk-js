require 'fileutils'
require 'json'

require_relative './lib/cucumber_generator'

$apis = {}

def root
  File.expand_path(File.dirname(__FILE__) + '/../')
end

def add_tasks(service, config)
  klass = config['name']
  prefix = config['prefix'] || service
  files = Dir["apis/#{prefix}-*.normal.json"]
  api = JSON.parse(File.read(files.sort.last), :max_nesting => false)
  version = api['metadata']['apiVersion']
  service_full_name = api['metadata']['serviceFullName']

  namespace :api do
    task :versions

    namespace(service) do
      task(:api) do
        verbose(false) do
          sh "#{root}/scripts/translate-api #{prefix}"
        end
      end

      task(:cucumber) do
        unless File.exist?("#{root}/features/#{service}")
          sh "mkdir -p #{root}/features/#{service}/step_definitions"
          features = "#{root}/features/#{service}/#{service}.feature"
          step_defns = "#{root}/features/#{service}/step_definitions/#{service}.js"
          generator = CucumberGenerator.new(klass, service, api)

          File.open(features, "w") do |file|
            file.write(generator.features_file)
          end

          File.open(step_defns, "w") do |file|
            file.write(generator.step_definitions_file)
          end
        end
      end

      task(:version) do
        puts("%-40s\t%s" % [service_full_name, version])
      end

      task(:'version:internal') do
        ($apis[service_full_name] ||= []) << [version, klass]
      end

      task(:'version:html') do
        puts "<tr>\n  <td>#{service_full_name}</td>"
        puts "  <td>#{version}</td>\n  <td>AWS.#{klass}</td>\n</tr>"
      end

      task(:'version:md') do
        base = "http://docs.amazonwebservices.com/AWSJavaScriptSDK/latest"
        puts "* [AWS.#{klass}](#{base}/#{klass}.html)"
      end
    end

    desc "Builds the API for #{service}."
    task service => [
      "#{service}:api",
      "#{service}:cucumber"
    ]

    task :api => "#{service}:api"
    task :versions => ["api:#{service}:version"]
    task :'versions:md' => ["api:#{service}:version:md"]
    task :'versions:internal' => ["api:#{service}:version:internal"]

    task :all => service
  end
end

namespace :api do
  task :'versions:html' => :'api:versions:internal' do
    # 1 row per service (with rowspan to deal with multiple api versions)
    rows = ''
    $apis.sort_by{|svc,apis| svc.downcase }.each do |(svc,apis)|
      rowspan = apis.length > 1 ? " rowspan=\"#{apis.length}\"" : ''
      rows << "<tr>"
      rows <<   "<td#{rowspan}>#{svc}</td>"
      rows <<   "<td#{rowspan}>AWS.#{apis.first.last}</td>" if ENV['README']
      rows <<   "<td>#{apis.first.first}</td>"
      rows << "</tr>\n"
      apis[1..-1].each do |api|
        rows << "<tr>"
        rows <<   "<td>#{api.first}</td>"
        rows << "</tr>\n"
      end
    end
    puts rows
  end
end

desc 'Builds the API for each service.'
task :api => 'api:all'

if File.exists?("#{root}/apis/metadata.json")
  service_map = JSON.parse(File.read('apis/metadata.json'))
  service_map.each do |service, config|
    add_tasks(service, config)
  end
end
