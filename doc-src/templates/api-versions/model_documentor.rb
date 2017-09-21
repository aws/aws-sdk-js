require 'ostruct'

module Documentor
  def documentation(rules)
    docs = rules['documentation'] || ''
    docs = docs.gsub(/<!--.*?-->/m, '')
    docs = docs.gsub(/<examples?>.+?<\/examples?>/m, '')
    docs = docs.gsub(/<note>\s*<\/note>/m, '')
    docs = docs.gsub(/<note>(.+?)<\/note>/m) do
      text = $1.gsub(/<\/?p>/, '')
      "<div class=\"note\"><strong>Note:</strong> #{text}</div>"
    end
    docs = docs.gsub(/\{(\S+)\}/, '`{\1}`')
    docs = docs.gsub(/\s+/, ' ').strip
    ## The markdown to html converter incorrectly replaces underscores and asterisks in 'code' tags with 'em' tags.
    ## html escape these symbols to get around this.
    docs = docs.gsub(/<code>(.+?)<\/code>/m) do
      ## strip out extraneous code blocks
      text = $1.gsub('`','')
      text = text.gsub('_', '&#95;')
      text = text.gsub('*', '&#42;')
      "<code>#{text}</code>"
    end
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

  def initialize(operation_name, operation, api, klass, options = {}, examples = {})
    desc = documentation(operation)
    desc ||= "Calls the #{method_name(operation_name, false)} API operation."
    desc = desc.gsub(/^\s+/, '').strip

    if options[:flatten_dynamodb_attrs]
      desc = ""
    end

    @lines = [desc, '']

    ## @param tags

    @lines << "@param params [Object]"
    @lines += shapes(api, operation['input'], options).map {|line| "  " + line }
    if examples
      examples.each do |example|
        begin
          sharedExample = generate_shared_example(api, example, klass, method_name(operation_name)).split("\n").map {|line| "  " + line}
          @lines << "@example #{example['title']}"
          @lines << ""
          @lines << " /* #{example['description']} */"
          @lines << ""
          @lines << sharedExample
        rescue => exception
          puts "[warn]: Error encountered generating example for #{klass}.#{operation_name}: #{exception}"
        end
      end
    end

    ## @example tag
    @lines << "@example Calling the #{method_name(operation_name)} operation"
    @lines << generate_example(api, klass, method_name(operation_name),
                operation['input'], options).split("\n").map {|line| "  " + line }
    @lines << ""

    ## @callback tag

    @lines << "@callback callback function(err, data)"
    @lines << "  Called when a response from the service is returned. If a"
    @lines << "  callback is not supplied, you must call {AWS.Request.send}"
    @lines << "  on the returned request object to initiate the request."
    @lines << "  @context [AWS.Response] the response object containing error, " +
              "data properties, and the original request object."
    @lines << "  @param err [Error] the error object returned from the request."
    @lines << "    Set to `null` if the request is successful."
    @lines << "  @param data [Object] the de-serialized data returned from"
    @lines << "    the request. Set to `null` if a request error occurs."

    output = shapes(api, operation['output'], options)
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

    ## Service Reference
    if api['metadata']['uid']
      @lines << '<div class="tags">'
      @lines << '<p class="tag_title">Service Reference:</p>'
      @lines << '<ul class="see">'
      @lines << '<li><a href="/goto/WebAPI/' + api['metadata']['uid'] + '/' + operation_name + '">' + operation_name +  '</a></li>'
      @lines << '</ul>'
      @lines << '</div>'
    end
  end

  def shapes(api, rules, options = {})
    rules = api['shapes'][rules['shape']] if rules && rules['shape']
    if rules and rules['members']
      rules['members'].map do |name, member_rules|
        if member_rules['shape']
          member_rules = api['shapes'][member_rules['shape']].merge(member_rules)
        end
        opts = {:name => name}.merge(options)
        ShapeDocumentor.new(api, member_rules, opts).lines
      end.flatten
    else
      []
    end
  end

  def generate_example(api, klass, name, input, options = {})
    ExampleShapeVisitor.new(api, options).example(klass, name, input)
  end

  def generate_shared_example(api, example, klass, name)
    SharedExampleVisitor.new(api, example, klass, name).example
  end

end

class SharedExampleVisitor
  def initialize(api, example, klass, name)
    @api = api
    @example = example
    @klass = klass
    @name = name
    @comments = example['comments']
  end

  def shape_type(type)
    case type
      when 'structure' then 'StructureShape'
      when 'list' then 'ListShape'
      when 'map' then 'MapShape'
      when 'boolean' then 'BooleanShape'
      when 'timestamp' then 'TimestampShape'
      when 'float', 'double', 'bigdecimal' then 'FloatShape'
      when 'integer', 'long', 'short', 'biginteger' then 'IntegerShape'
      when 'string', 'character' then 'StringShape'
      when 'binary', 'blob' then 'BinaryShape'
      else type
    end
  end

  def example
    operation = @name[0].upcase + @name[1..-1]
    operation_input = @api['operations'][operation]['input']
    if operation_input
      input_shape_name = operation_input['shape']
      input_shape = @api['shapes'][input_shape_name]
      input = visit(input_shape, @example['input'] || {}, "", [], @comments['input'])
    else
      input = "{}"
    end

    lines = ["var params = #{input};"]
    lines << "#{@klass.downcase}.#{@name}(params, function(err, data) {"
    lines << "  if (err) console.log(err, err.stack); // an error occurred"
    lines << "  else     console.log(data);           // successful response"

    operation_output = @api['operations'][operation]['output']
    if operation_output
      output_shape_name = operation_output['shape']
      output_shape = @api['shapes'][output_shape_name]
      if output = visit(output_shape, @example['output'] || {}, "  ", [], @comments['output'])
        lines << "  /*"
        lines << "  data = #{output}"
        lines << "  */"
      end
    end


    lines << "});"
    lines.join("\n")
  end

  def visit(shape, value, indent, path, comments)
    case shape_type(shape['type'])
      when 'StructureShape' then structure(shape, value, indent, path, comments)
      when 'MapShape' then map(shape, value, indent, path, comments)
      when 'ListShape' then list(shape, value, indent, path, comments)
      when 'StringShape' then value.inspect
      when 'TimestampShape' then "<Date Representation>"
      when 'BinaryShape' then "<Binary String>"
      else value
    end
  end

  def structure(shape, value, indent, path, comments)
    lines = ["{"]
    value_length = value.length
    value.each_with_index do |(key, val), index|
      path << ".#{key}"
      comment = apply_comment(path, comments)
      shape_name = shape['members'][key]['shape']
      shape_val = visit(@api['shapes'][shape_name], val, "#{indent} ", path, comments)
      if index < value_length - 1 then
        comment = ", " + comment
      end
      lines << "#{indent} #{key}: #{shape_val}#{comment}"
      path.pop
    end
    lines << "#{indent}}"
    lines.join("\n")
  end

  def map(shape, value, indent, path, comments)
    lines = ["{"]
    value_length = value.length
    value.each_with_index do |(key, val), index|
      path << ".#{key}"
      comment = apply_comment(path, comments)
      shape_name = shape['value']['shape']
      shape_val = visit(@api['shapes'][shape_name], val, "#{indent}  ", path, comments)
      if index < value_length - 1 then
        comment = ", " + comment
      end
      lines << "#{indent} \"#{key}\": #{shape_val}#{comment}"
      path.pop
    end
    lines << "#{indent}}"
    lines.join("\n")
  end

  def list(shape, value, indent, path, comments)
    lines = ["["]
    value_length = value.length
    value.each_with_index do |member, index|
      path << "[#{index}]"
      comment = apply_comment(path, comments)
      shape_name = shape['member']['shape']
      shape_val = visit(@api['shapes'][shape_name], member, "#{indent} ", path, comments)
      if index < value_length - 1 then
        comment = ", " + comment
      end
      lines << "#{indent}   #{shape_val}#{comment}"
      path.pop
    end
    lines << "#{indent}]"
    lines.join("\n")
  end

  def apply_comment(path, comments)
    key = path.join().sub(/^\./, '')
    if comments && comments[key]
      "// #{comments[key]}"
    else
      ""
    end
  end

end

class ExampleShapeVisitor
  def initialize(api, options = {})
    @api = api
    @required_only = options[:required_only] || false
    @flatten_dynamodb_attrs = options[:flatten_dynamodb_attrs]
    @visited = Hash.new { 0 }
    @recursive = {}
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
    result = ""
    @visited[node['shape']] += 1

    if @flatten_dynamodb_attrs && node['shape'] == "AttributeValue"
      result = 'someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */'
    elsif !node['shape'] || @visited[node['shape']] < 2
      node = @api['shapes'][node['shape']].merge(node) if node['shape']
      if (meth = "visit_" + (node['type'] || 'string')) && respond_to?(meth)
        result = send(meth, node, required)
      end
    else
      @recursive[node['shape']] = true
      result = "/* recursive #{node['shape']} */"
    end
    @visited[node['shape']] -= 1
    result
  end

  def visit_structure(node, required = false)
    required_map = (node['required'] || []).inject({}) {|h,k| h[k] = true; h }
    datas = node['members'].sort_by {|n, v| [required_map[n] ? -1 : 1, n] }.map do |key, value|
      next if @required_only && !required_map[key]
      value = @api['shapes'][value['shape']].merge(value) if value['shape']
      [key, value, indent(traverse(value, required_map[key]), false)]
    end.compact

    lines = ["{" + mark_rec_shape(node) + (required ? " /* required */" : "")]
    datas.each_with_index do |(key, value, data), index|
      lines << "  #{key}: " + data +
        (index + 1 < node['members'].size ? "," : "") +
        (required_map[key] && !%w(list map structure).include?(value['type']) ?
          " /* required */" : "")
    end
    lines << "}"
    lines.join("\n")
  end

  def visit_list(node, required = false)
    data = indent(traverse(node['member']))
    lines = ["[" + mark_rec_shape(node) + (required ? " /* required */" : "")]
    lines << data + ","
    lines << "  /* more items */"
    lines << "]"
    lines.join("\n")
  end

  def visit_map(node, required = false)
    data = indent("'<#{node['key']['shape']}>': " + traverse(node['value']))
    lines = ["{" + mark_rec_shape(node) + (required ? " /* required */" : "")]
    lines << data + ","
    lines << "  /* '<#{node['key']['shape']}>': ... */"
    lines << "}"
    lines.join("\n")
  end

  def visit_string(node, required = false)
    if node['jsonvalue']
      "any /* This value will be JSON encoded on your behalf with JSON.stringify() */"
    elsif node['enum']
      node['enum'].join(' | ')
    else
      "'STRING_VALUE'"
    end
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

  def visit_binary(node, required = false)
    value = "new Buffer('...') || 'STRING_VALUE'"
    if node['streaming']
      value += " || streamObject"
    else
      value += " /* Strings will be Base-64 encoded on your behalf */"
    end
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

  def mark_rec_shape(node)
    node['shape'] && @recursive[node['shape']] ? " /* #{node['shape']} */" : ""
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

  def self.type_for(rules)
    type = case rules['type']
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
    when 'binary' then 'Buffer, Typed Array, Blob, String'
    when 'blob' then 'Buffer, Typed Array, Blob, String'
    when 'timestamp' then 'Date'
    else raise "unhandled type: #{rules['type']}"
    end

    # TODO : update this format description once we add streaming uploads
    type += ', ReadableStream' if rules['streaming']

    type
  end

  def initialize(api, rules, options = {})
    rules = api['shapes'][rules['shape']].merge(rules) if rules['shape']

    @api = api
    @rules = rules
    @name = options[:name]
    @prefix = options[:prefix] || ''
    @required = !!options[:required]
    @visited = options[:visited] || Hash.new { 0 }
    @type = self.class.type_for(rules)
    @lines = []
    @nested_lines = []
    @flatten_dynamodb_attrs = options[:flatten_dynamodb_attrs]

    if @flatten_dynamodb_attrs && rules['shape'] == "AttributeValue"
      desc = <<-doc_client.gsub(/\n/, '').strip
&mdash; a serializable JavaScript object. 
For information about the supported types see the 
[DynamoDB Data Model](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html)
doc_client
      @lines = ["#{prefix}* `#{name}` #{desc}"]
      @nested_lines += [desc]
      return
    end

    if structure?
      required_map = (rules['required'] || []).inject({}) {|h,k| h[k] = true; h }
      rules['members'].each_pair do |name, member_rules|
        @nested_lines += child_shape(member_rules,
          :name => name, :required => required_map[name]).lines
      end
    end

    if list?
      child = child_shape(rules['member'] || {}, :prefix => prefix)
      @type += "<#{child.type}>"
      @nested_lines += child.nested_lines
    end

    if map?

      # sanity check, I don't think this should ever raise, but if it
      # does we will have to document the key shape
      #key_child = child_shape(rules['key'] || {}, :prefix => prefix)
      #raise "unhandled map key type" if key_child.type != 'String'

      child = child_shape(rules['value'] || {}, :prefix => prefix)
      @type += "<#{child.type}>"
      @nested_lines += child.nested_lines

    end

    @lines = ["#{prefix}* `#{name}` #{description}"]
    @lines += @nested_lines

    if rules['enum']
      @lines << "#{prefix}   Possible values include:"
      @lines += rules['enum'].map{|v| "#{prefix}   * `#{v.inspect}`" }
    end

    if rules['idempotencyToken']
      @lines << "#{prefix}   If a token is not provided, the SDK will use a version 4 UUID."
    end

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
    if (docs = documentation(rules)) && !@flatten_dynamodb_attrs
      text << " #{docs}"
    end
    text.join(' ')
  end

  private

  def child_shape(rules, options = {})
    @visited[rules['shape']] += 1
    if @visited[rules['shape']] < 2
      ret = ShapeDocumentor.new(@api, rules, {
        :prefix => prefix + '    ', :visited => @visited,
        :flatten_dynamodb_attrs => @flatten_dynamodb_attrs }.merge(options))
    else
      ret = OpenStruct.new({
        :nested_lines => [], :lines => [],
        :type => @api['shapes'] ?
          ShapeDocumentor.type_for(@api['shapes'][rules['shape']]) :
          rules['shape']
      }.merge(options))
    end
    @visited[rules['shape']] -= 1
    ret
  end
end
