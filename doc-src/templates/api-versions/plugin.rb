require 'json'
require_relative './model_documentor'

YARD::Tags::Library.define_tag 'Service', :service
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
      meth.signature = "#{name}(params = {}, callback)"
      meth.dynamic = true
      meth.docstring = docs
    end
  end

  def load_model(klass, api_version)
    # get real endpoint prefix for json models
    config = File.read(File.dirname(__FILE__) + "/../../../apis/#{klass}-#{api_version}.json")
    klass = config[/"endpointPrefix": "(\S+)"/, 1]

    file = "#{klass}-#{api_version}"
    translate = "require(\"./lib/api/translator\")(require(\"fs\")." +
                "readFileSync(\"apis/source/#{file}.json\"), {documentation:true})"
    json = `node -e 'console.log(JSON.stringify(#{translate}))'`
    api = JSON.parse(json)
  end
end
