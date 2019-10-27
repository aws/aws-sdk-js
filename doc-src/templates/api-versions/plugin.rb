require 'json'
require_relative './model_documentor'

$APIS_DIR = File.expand_path(File.dirname(__FILE__) +
                             "/../../../apis")
$API_FILE_MATCH = /(?:^|\/)([^\/]+?)-(\d+-\d+-\d+)\.normal\.json$/
$dynamodb_model = nil #Track model for documenting the document client additions

YARD::Tags::Library.define_tag 'Service', :service
YARD::Tags::Library.define_tag 'Waiter Resource States', :waiter
YARD::Tags::Library.visible_tags << :waiter
YARD::Templates::Engine.register_template_path(File.dirname(__FILE__) + '/templates')

class YARD::CodeObjects::ClassObject
  def title
    path.gsub(/_(\d{4})(\d{2})(\d{2})/, ' (\1-\2-\3)')
  end

  def name(prefix = false)
    return super unless prefix
    @name.to_s.gsub(/_(\d{4})(\d{2})(\d{2})/, ' (\1-\2-\3)')
  end
end

module YARD::Registry
  class << self
    @@parsed_apis = false

    def register_aws(object)
      register_without_aws(object)

      if !@@parsed_apis && object.path == 'AWS'
        @@parsed_apis = true
        ApiDocumentor.new(object).run
      end
    end
    alias register_without_aws register
    alias register register_aws
  end
end

class WaiterObject < YARD::CodeObjects::Base
  attr_accessor :operation

  def parameters; [] end
  def property_type; 'function' end
  def sep; '$waiter$' end
  def title; name.to_s end
end

YARD::Parser::SourceParser.after_parse_list do
  $dynamodb_model['operations'].each do |op_name, operation|
    next unless op_name =~ /^(?:Scan|Query|.+Item[s]?)$/
    obj_name = op_name.sub(/Item[s]?$/, '').sub(/^./) {|m| m.downcase}
    obj_path = "AWS.DynamoDB.DocumentClient.#{obj_name}"

    if obj = YARD::Registry.at(obj_path)
      docs = MethodDocumentor.new(obj_name, operation, $dynamodb_model,
        'DocumentClient', :flatten_dynamodb_attrs => true).lines.join("\n")
      obj.docstring = obj.docstring.all + "\n" + docs
    end
  end
end

class ApiDocumentor
  def initialize(root = :root)
    @root = root
  end

  def run
    build_map.each do |service, files|
      files.sort.each.with_index do |file, i|
        generate_api(file, !(i == files.length - 1))
      end
    end
  end

  def build_map
    map = {}
    Dir.entries($APIS_DIR).each do |file|
      if file =~ $API_FILE_MATCH
        (map[$1] ||= []).push(File.join($APIS_DIR, file))
      end
    end
    map
  end

  def generate_api(file, version_suffix = true)
    _, klass, version = *file.match($API_FILE_MATCH)
    identifier, klass, dualstack = *class_info_for(klass)
    name = version_suffix ? klass + '_' + version.gsub('-', '') : klass
    log.progress("Parsing AWS.#{klass} (#{version})")
    svc = YARD::CodeObjects::ClassObject.new(@root, name)

    model = load_model(file)
    $dynamodb_model = model if klass == 'DynamoDB' && version == '2012-08-10'
    add_class_documentation(svc, klass, model, version, dualstack)
    add_methods(svc, klass, version, model)
    add_waiters(svc, klass, model)
    add_config(svc, identifier, dualstack)

    svc.docstring.add_tag(YARD::Tags::Tag.new(:service, identifier))
    svc.docstring.add_tag(YARD::Tags::Tag.new(:version, version))
    svc.superclass = 'AWS.Service'
  end

  def add_config(service, identifier, dualstack)
    config = YARD::CodeObjects::ClassObject.new(@root, 'AWS.Config')
    config.groups = ["General Configuration Options"]
    dualstack_string = dualstack ? ", useDualstack: true" : ""

    prop = YARDJS::CodeObjects::PropertyObject.new(config, identifier)
    prop.property_type = :object
    prop.parameters = []
    prop.signature = identifier
    prop.group = "Service-Specific Config Options"
    prop.docstring = <<-eof
@example Bind parameters to all newly created #{service.name} objects
  AWS.config.#{identifier} = { params: { /* ... */ } };
@example Override default endpoint URI for all newly created #{service.name} objects
  AWS.config.#{identifier} = { endpoint: 'https://{service}.{region}.amazonaws.com' };
#{dualstack ? "@example Use IPv6/IPv4 dualstack endpoint for all newly created #{service.name} objects
  AWS.config.#{identifier} = { useDualstack: true };" : ""}
@return [AWS.Config, map] Service-specific configuration options for {#{service.path}}.
    eof
  end

  def add_class_documentation(service, klass, model, api_version, dualstack)
    docstring = ModelDocumentor.new(klass, model).lines.join("\n")
    parser = YARD::Docstring.parser
    parser.parse(docstring, service)
    service.docstring = parser.to_docstring

    # constructor
    ctor = YARDJS::CodeObjects::PropertyObject.new(service, 'constructor')
    ctor.property_type = :function
    ctor.parameters = [['options', '{}']]
    ctor.signature = "constructor(options = {})"
    ctor.docstring = <<-eof
Constructs a service object. This object has one method for each
API operation.

@example Constructing a #{klass} object
  var #{klass.downcase} = new AWS.#{klass}({apiVersion: '#{api_version}'});

@option options [map] params An optional map of parameters to bind to every
  request sent by this service object. For more information on bound parameters,
  see ["Working with Services" in the Getting Started Guide](/AWSJavaScriptSDK/guide/node-services.html#Bound_Parameters).
@option options [String|AWS.Endpoint] endpoint The endpoint URI to send requests
  to.  The default endpoint is built from the configured `region`.
  The endpoint should be a string like `'https://{service}.{region}.amazonaws.com'` or an
  Endpoint object.
@option (see AWS.Config.constructor)
#{dualstack ? "@option options [Boolean] useDualstack Enables IPv6/IPv4 dualstack endpoint.
  When a DNS lookup is performed on an endpoint of this type, it returns an “A” record with
  an IPv4 address and an “AAAA” record with an IPv6 address. In most cases the network stack
  in the client environment will automatically prefer the AAAA record and make a connection
  using the IPv6 address. Note, however, that currently on Windows, the IPv4 address will be
  preferred." : ""}
eof

    # endpoint attribute
    endpoint = YARDJS::CodeObjects::PropertyObject.new(service, 'endpoint')
    endpoint.docstring = <<-eof
@return [AWS.Endpoint] an Endpoint object representing the endpoint URL
  for service requests.
eof

  end

  def add_methods(service, klass, version, model)
    examples = load_examples(klass.downcase, version) || {}
    model['operations'].each_pair do |name, operation|
      meth = YARDJS::CodeObjects::PropertyObject.new(service, name[0].downcase + name[1..-1])
      docs = MethodDocumentor.new(name, operation, model, klass, {}, examples[name]).lines.join("\n")
      meth.property_type = :function
      meth.parameters = [['params', '{}'], ['callback', nil]]
      meth.signature = "#{name}(params = {}, [callback])"
      meth.dynamic = true
      meth.docstring = docs
    end
  end

  def add_waiters(service, klass, model)
    return unless waiters = model['waiters']

    wait_for = YARDJS::CodeObjects::PropertyObject.new(service, 'waitFor')
    wait_for.property_type = :function
    wait_for.parameters = [['state', nil], ['params', '{}'], ['callback', nil]]
    wait_for.signature = "waitFor(state, params = {}, [callback])"
    wait_for.dynamic = true
    wait_for.docstring = <<-eof
Waits for a given #{service.name} resource. The final callback or
{AWS.Request~complete 'complete' event} will be fired only when the resource
is either in its final state or the waiter has timed out and stopped polling
for the final state.

@param state [String] the resource state to wait for. Available states for this
  service are listed in "Waiter Resource States" below.
@param params [map] a list of parameters for the given state. See each waiter
  resource state for required parameters.
@callback callback function(err, data)
  Callback containing error and data information. See the respective resource
  state for the expected error or data information.

  If the waiter times out its requests, it will return a `ResourceNotReady`
  error.
@return [AWS.Request] a handle to the operation request for subsequent event
  callback registration.
eof

    waiters.keys.each do |name|
      next if name =~ /^_/
      config = load_waiter(waiters, name)
      operation_name = config['operation'][0,1].downcase + config['operation'][1..-1]
      name = name[0,1].downcase + name[1..-1]
      obj = WaiterObject.new(service, name)
      obj.operation = YARDJS::CodeObjects::PropertyObject.new(service, operation_name)
      obj.operation.docstring.add_tag YARD::Tags::Tag.new(:waiter, "{#{obj.path}}")
      obj.docstring = <<-eof
Waits for the `#{name}` state by periodically calling the underlying
{#{operation_name}} operation every #{config['delay']} seconds
(at most #{config['maxAttempts']} times).

@callback (see #{obj.operation.path})
@param (see #{obj.operation.path})
@return (see #{obj.operation.path})
@see #{operation_name}
eof

      waiter_ex = ExampleShapeVisitor.new(model, :required_only => true).example(
        service.name.to_s.downcase, 'waitFor', model['operations'][config['operation']]['input'])
      waiter_ex = waiter_ex.sub(/\.waitFor\(/, ".waitFor('#{name}', ")
      waiter_ex = waiter_ex.sub(/\{\s+\}/, "{\n  // ... input parameters ...\n}")
      obj.docstring.add_tag YARD::Tags::Tag.new(:example, waiter_ex, nil,
        "Waiting for the #{name} state")
      unless wait_for.docstring.tag(:example)
        wait_for.docstring.add_tag YARD::Tags::Tag.new(:example, waiter_ex, nil,
          "Waiting for the #{name} state")
      end

      wait_for.docstring.add_tag YARD::Tags::Tag.new(:waiter, "{#{obj.path}}")
    end
  end

  def load_waiter(waiters, name)
    waiter = waiters[name]
    return {} if waiter.nil?
    if waiter['extends']
      waiter = waiter.merge(load_waiter(waiters, waiter['extends']))
    elsif name != '__default__'
      waiter = waiter.merge(load_waiter(waiters, '__default__'))
    end
    waiter
  end

  def load_model(file)
    json = JSON.parse(File.read(file))

    waiters_file = file.sub(/\.normal\.json$/, '.waiters2.json')
    if File.exist? waiters_file
      json = json.merge(JSON.parse(File.read(waiters_file)))
    end
    json
  end

  def class_info_for(prefix)
    @info ||= JSON.parse(File.read(File.join($APIS_DIR, 'metadata.json')))
    @info.each do |identifier, info|
      iprefix = info['prefix'] || identifier
      if prefix == iprefix
        return [identifier, info['name'], info['dualstackAvailable'] || false]
      end
    end

    raise "Unknown class name for #{prefix}"
  end

  def load_examples(name, version)
    @info ||= JSON.parse(File.read(File.join($APIS_DIR, 'metadata.json')))
    prefix = @info[name]['prefix'] || name
    paths = Dir[File.join($APIS_DIR, "#{prefix}-#{version}.examples.json")]
    unless paths.empty?
      json = JSON.parse(File.read(paths[0]))
      json['examples']
    end
  end
end
