require 'fileutils'
require 'json'

require_relative './lib/service_generator'
require_relative './lib/services_loader_generator'
require_relative './lib/cucumber_generator'

$apis = {}

def root
  File.expand_path(File.dirname(__FILE__) + '/../')
end

def models_path
  File.join(root, 'apis', 'source')
end

def service_name(api)
  name = api['service_abbreviation'] || api['service_full_name']
  name = name.gsub(/^Amazon|AWS\s*|\(.*|\s+|\W+/, '')

  # Hack for special service names
  case name
  when 'ElasticLoadBalancing'; 'ELB'
  when 'SWF'; 'SimpleWorkflow'
  else name
  end
end

def add_tasks model
  model = model.gsub(/\.json$/, '')
  model_path = File.join(models_path, "#{model}.json")
  api = JSON.parse(File.read(model_path), :max_nesting => false)
  klass = service_name(api)
  service = klass.downcase
  version = api['api_version']

  namespace :api do
    task :versions

    namespace(service) do
      task(:class) do
        target = "#{root}/lib/services/#{service}.js"
        unless File.exist?(target)
          File.open(target, 'w') do |file|
            file.write ServiceGenerator.new(klass, service, version).to_s
          end
        end
      end

      task(:loader_file) do
        target = "#{root}/lib/services.js"
        File.open(target, 'w') do |file|
          file.write ServicesLoaderGenerator.new(root).to_s
        end
      end

      task(:api) do
        verbose(false) do
          sh "#{root}/scripts/translate-api #{model}"
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
        puts("%-40s\t%s" % [api['service_full_name'], version])
      end

      task(:'version:internal') do
        ($apis[api['service_full_name']] ||= []) << [version, klass]
      end

      task(:'version:html') do
        puts "<tr>\n  <td>#{api['service_full_name']}</td>"
        puts "  <td>#{version}</td>\n  <td>AWS.#{klass}</td>\n</tr>"
      end

      task(:'version:md') do
        base = "http://docs.amazonwebservices.com/AWSJavaScriptSDK/latest/frames.html"
        anchor = "#!AWS/#{klass}.html"
        puts "* [AWS.#{klass}](#{base}#{anchor})"
      end
    end

    desc "Builds the API for #{service}."
    task service => [
      "#{service}:class",
      "#{service}:api",
      "#{service}:cucumber",
      "#{service}:loader_file",
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

Dir.glob(File.join(models_path, '*.json')).sort.each do |file|
  add_tasks(File.basename(file))
end
