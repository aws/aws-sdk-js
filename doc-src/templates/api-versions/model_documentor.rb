require 'nokogiri'

module Documentor
  def documentation(rules)
    docs = rules['documentation'] || ''
    docs = docs.gsub(/<!--.*?-->/m, '')
    docs = docs.gsub(/<examples?>.+?<\/examples?>/m, '')
    docs = docs.gsub(/<\/?note>/m, '')
    docs = docs.gsub(/\{(\S+)\}/, '`{\1}`')
    docs = docs.gsub(/\s+/, ' ').strip
    docs == '' ? nil : docs
  end

  def method_name(name, downcased = true)
    name = name.sub(/\d{4}_\d{2}_\d{2}$/, '')
    downcased ? name[0].downcase + name[1..-1] : name
  end
end

class ModelDocumentor
  include Documentor

  attr_reader :lines

  def initialize(klass, api)
    api_version = api['metadata']['apiVersion']
    @lines = []
    @lines << ''
    @lines << <<-DOCS.strip
Constructs a service interface object. Each API operation is exposed as a
function on service.

### Sending a Request Using #{klass}

```javascript
var #{klass.downcase} = new AWS.#{klass}();
#{klass.downcase}.#{find_example_operation(api)}(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
```

### Locking the API Version

In order to ensure that the #{klass} object uses this specific API, you can
construct the object by passing the `apiVersion` option to the constructor:

```javascript
var #{klass.downcase} = new AWS.#{klass}({apiVersion: '#{api_version}'});
```

You can also set the API version globally in `AWS.config.apiVersions` using
the **#{klass.downcase}** service identifier:

```javascript
AWS.config.apiVersions = {
  #{klass.downcase}: '#{api_version}',
  // other service API versions
};

var #{klass.downcase} = new AWS.#{klass}();
```
DOCS
  end

  def find_example_operation(api)
    list = api['operations'].keys.grep(/describe|list|get/)
    list = api['operations'].keys if list.size == 0
    method_name(list.first)
  end
end

class MethodDocumentor

  include Documentor

  attr_reader :lines

  def initialize(operation_name, operation, api, klass)
    desc = documentation(operation)
    desc ||= "Calls the #{method_name(operation_name, false)} API operation."
    desc = desc.gsub(/^\s+/, '').strip

    @lines = [desc, '']

    ## @param tags

    @lines << "@param params [Object]"
    @lines += shapes(api, operation['input']).map {|line| "  " + line }

    ## @example tag

    @lines << "@example Calling the #{method_name(operation_name)} operation"
    @lines << generate_example(api, klass, method_name(operation_name),
                operation['input']).split("\n").map {|line| "  " + line }
    @lines << ""

    ## @callback tag

    @lines << "@callback callback function(err, data)"
    @lines << "  Called when a response from the service is returned. If a"
    @lines << "  callback is not supplied, you must call {AWS.Request.send}"
    @lines << "  on the returned request object to initiate the request."
    @lines << "  @param err [Error] the error object returned from the request."
    @lines << "    Set to `null` if the request is successful."
    @lines << "  @param data [Object] the de-serialized data returned from"
    @lines << "    the request. Set to `null` if a request error occurs."

    output = shapes(api, operation['output'])
    output = output.map {|line| "    " + line }
    if output.size > 0
      @lines << "    The `data` object has the following properties:"
      @lines << ""
      @lines += output
    end

    ## @return tag

    @lines << "@return [AWS.Request] a handle to the operation request for"
    @lines << "  subsequent event callback registration."

    if operation['documentation_url']
      @lines << "@see #{operation['documentation_url']}"
      @lines << "  #{api['serviceAbbreviation']} Documentation for #{operation_name}"
    end
  end

  def shapes(api, rules)
    rules = api['shapes'][rules['shape']] if rules && rules['shape']
    if rules and rules['members']
      rules['members'].map do |name, member_rules|
        if member_rules['shape']
          member_rules = api['shapes'][member_rules['shape']].merge(member_rules)
        end
        ShapeDocumentor.new(api, member_rules, :name => name).lines
      end.flatten
    else
      []
    end
  end

  def generate_example(api, klass, name, input)
    ExampleShapeVisitor.new(api).example(klass, name, input)
  end

end

class ExampleShapeVisitor
  def initialize(api, required_only = false)
    @api = api
    @required_only = required_only
  end

  def example(klass, name, input)
    lines = []
    params = traverse(input)
    params_var = ""
    if params.strip.length > 0
      lines << "var params = " + params + ";"
      params_var = "params, "
    end
    lines << "#{klass.downcase}.#{name}(#{params_var}function(err, data) {"
    lines << "  if (err) console.log(err, err.stack); // an error occurred"
    lines << "  else     console.log(data);           // successful response"
    lines << "});"
    lines.join("\n")
  end

  def traverse(node, required = false)
    return "" if node.nil?
    node = @api['shapes'][node['shape']].merge(node) if node['shape']
    if (meth = "visit_" + (node['type'] || 'string')) && respond_to?(meth)
      return send(meth, node, required)
    end
    ""
  end

  def visit_structure(node, required = false)
    required_map = (node['required'] || []).inject({}) {|h,k| h[k] = true; h }
    lines = ["{" + (required ? " // required" : "")]
    node['members'].sort_by {|n, v| [required_map[n] ? -1 : 1, n] }.each_with_index do |(key, value), index|
      next if @required_only && !required_map[key]
      value = @api['shapes'][value['shape']].merge(value) if value['shape']
      lines << "  #{key}: " + indent(traverse(value, required_map[key]), false) +
        (index + 1 < node['members'].size ? "," : "") +
        (required_map[key] && !%w(list map structure).include?(value['type']) ?
          " // required" : "")
    end
    lines << "}"
    lines.join("\n")
  end

  def visit_list(node, required = false)
    lines = ["[" + (required ? " // required" : "")]
    lines << indent(traverse(node['member'])) + ","
    lines << "  // ... more items ..."
    lines << "]"
    lines.join("\n")
  end

  def visit_map(node, required = false)
    lines = ["{" + (required ? " // required" : "")]
    lines << indent("someKey: " + traverse(node['value'])) + ","
    lines << "  // anotherKey: ..."
    lines << "}"
    lines.join("\n")
  end

  def visit_string(node, required = false)
    value = node['enum'] ? node['enum'].join(' | ') : 'STRING_VALUE'
    "'#{value}'"
  end

  def visit_integer(node, required = false)
    "0"
  end
  alias visit_long visit_integer

  def visit_float(node, required = false)
    "0.0"
  end
  alias visit_double visit_float
  alias visit_bigdecimal visit_float

  def visit_boolean(node, required = false)
    "true || false"
  end

  def visit_base64(node, required = false)
    "new Buffer('...') || 'STRING_VALUE'"
  end

  def visit_binary(node, required = false)
    value = "new Buffer('...') || 'STRING_VALUE'"
    value += " || streamObject" if node['streaming']
    value
  end
  alias visit_blob visit_binary

  def visit_timestamp(node, required = false)
    "new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789"
  end

  def indent(text, first_line = true, n = 2)
    text = text.split(/\r?\n/).map {|l| "#{' ' * n}#{l}" }.join("\n")
    text = text.sub(/\A\s+/, '') if !first_line
    text
  end
end

class ShapeDocumentor
  include Documentor

  attr_reader :name
  attr_reader :rules
  attr_reader :lines
  attr_reader :nested_lines
  attr_reader :prefix
  attr_reader :type

  def initialize(api, rules, options = {})
    rules = api['shapes'][rules['shape']].merge(rules) if rules['shape']

    @api = api
    @rules = rules
    @name = options[:name]
    @prefix = options[:prefix] || ''
    @required = !!options[:required]

    @type =
      case rules['type']
      when 'structure' then 'map'
      when 'list' then 'Array'
      when 'map' then 'map'
      when 'string', nil then 'String'
      when 'integer' then 'Integer'
      when 'long' then 'Integer'
      when 'float' then 'Float'
      when 'double' then 'Float'
      when 'bigdecimal' then 'Float'
      when 'boolean' then 'Boolean'
      when 'base64' then 'Buffer, Typed Array, Blob, String'
      when 'binary' then 'Buffer, Typed Array, Blob, String'
      when 'blob' then 'Buffer, Typed Array, Blob, String'
      when 'timestamp' then 'Date'
      else raise "unhandled type: #{rules['type']}"
      end

    # TODO : update this format description once we add streaming uploads
    @type += ', ReadableStream' if streaming?

    @lines = []
    @nested_lines = []

    if structure?
      required_map = (rules['required'] || []).inject({}) {|h,k| h[k] = true; h }
      rules['members'].each_pair do |name, member_rules|
        @nested_lines += child_shape(member_rules,
          :name => name, :required => required_map[name]).lines
      end
    end

    if list?
      child = child_shape(rules['member'] || {}, :prefix => prefix)
      @type << "<#{child.type}>"
      @nested_lines += child.nested_lines
    end

    if map?

      # sanity check, I don't think this should ever raise, but if it
      # does we will have to document the key shape
      key_child = child_shape(rules['key'] || {}, :prefix => prefix)
      raise "unhandled map key type" if key_child.type != 'String'

      child = child_shape(rules['value'] || {}, :prefix => prefix)
      @type << "<#{child.type}>"
      @nested_lines += child.nested_lines

    end

    @lines = ["#{prefix}* `#{name}` #{description}"]
    @lines += @nested_lines

    if rules['enum']
      @lines << "#{prefix}   Possible values include:"
      @lines += rules['enum'].map{|v| "#{prefix}   * `#{v.inspect}`" }
    end

  end

  def streaming?
    rules['streaming']
  end

  def structure?
    rules['type'] == 'structure'
  end

  def list?
    rules['type'] == 'list'
  end

  def map?
    rules['type'] == 'map'
  end

  def description
    text = []
    if @required
      text << "&mdash; **required** &mdash; (`#{@type}`)"
    else
      text << "&mdash; (`#{@type}`)"
    end
    if docs = documentation(rules)
      text << " #{docs}"
    end
    text.join(' ')
  end

  private

  def child_shape(rules, options = {})
    ShapeDocumentor.new(@api, rules, { :prefix => prefix + '    ' }.merge(options))
  end
end
