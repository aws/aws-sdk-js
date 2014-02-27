require 'json'
require_relative './model_documentor'

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

class WaiterObject < YARD::CodeObjects::Base
  attr_accessor :operation

  def parameters; [] end
  def property_type; 'function' end
  def sep; '$waiter$' end
  def title; name.to_s end
end

class DefineServiceHandler < YARDJS::Handlers::Base
  handles AssignmentExpression

  process do
    statement.comments ||= parser.extra_state.comments
    handle_default_comments

    left, right = statement.left, statement.right
    return unless right.is_a?(CallExpression)
    return unless right.callee.source == 'AWS.Service.defineService'
    return unless right.args[1].respond_to?(:elements)

    identifier = right.args[0].val.val
    apis = right.args[1].elements.map {|t| t.val.val }.sort
    apis = apis.reject {|api| api.include?('*') }
    apis[0...-1].each {|api| generate_api(left.source, right, identifier, api) }
    generate_api(left.source, right, identifier, apis.last, false)
  end

  def generate_api(klass, right, identifier, version, version_suffix = true)
    name = version_suffix ? klass + '_' + version.gsub('-', '') : klass
    svc = register YARD::CodeObjects::ClassObject.new(:root, name)

    klass = klass.gsub(/^AWS\./, '')
    model = load_model(klass.downcase, version)
    add_class_documentation(svc, klass, model)
    add_methods(svc, klass, model)
    add_waiters(svc, klass, model)

    svc.docstring.add_tag(YARD::Tags::Tag.new(:service, identifier))
    svc.docstring.add_tag(YARD::Tags::Tag.new(:version, version))
    svc.superclass = 'AWS.Service'

    if right.args.last.respond_to?(:properties)
      parse_block(right.args.last.properties, :namespace => svc)
    end
  end

  def add_class_documentation(service, klass, model)
    docstring = ModelDocumentor.new(klass, model).lines.join("\n")
    parser = YARD::Docstring.parser
    parser.parse(docstring, service, self)
    service.docstring = parser.to_docstring
  end

  def add_methods(service, klass, model)
    model['operations'].each_pair do |name, operation|
      meth = YARDJS::CodeObjects::PropertyObject.new(service, name)
      docs = MethodDocumentor.new(operation, model, klass).lines.join("\n")
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

@api experimental
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
      obj = WaiterObject.new(service, name)
      obj.operation = YARDJS::CodeObjects::PropertyObject.new(service, operation_name)
      obj.operation.docstring.add_tag YARD::Tags::Tag.new(:waiter, "{#{obj.path}}")
      obj.docstring = <<-eof
Waits for the `#{name}` state by periodically calling the underlying
{#{operation_name}} operation every #{config['interval']} seconds
(at most #{config['maxAttempts']} times).

@api experimental
@callback (see #{obj.operation.path})
@param (see #{obj.operation.path})
@return (see #{obj.operation.path})
@see #{operation_name}
eof

      waiter_ex = ExampleShapeVisitor.new(true).example(
        service.name.to_s.downcase, 'waitFor', model['operations'][operation_name]['input'])
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
    if waiter['extends']
      waiter = waiter.merge(load_waiter(waiters, waiter['extends']))
    elsif name != '__default__'
      waiter = waiter.merge(load_waiter(waiters, '__default__'))
    end
    waiter
  end

  def load_model(klass, api_version)
    # get real endpoint prefix for json models
    config = File.read(File.dirname(__FILE__) + "/../../../apis/#{klass}-#{api_version}.json")
    klass = config[/"endpointPrefix": "(\S+)"/, 1]

    file = "#{klass}-#{api_version}"
    dir = File.expand_path(File.dirname(__FILE__)) + "/../../.."
    translate = "require(\"#{dir}/lib/api/translator\")(require(\"fs\")." +
                "readFileSync(\"#{dir}/apis/source/#{file}.json\"), {documentation:true})"
    json = `node -e 'console.log(JSON.stringify(#{translate}))'`
    api = JSON.parse(json)
  end
end
