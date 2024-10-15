require_relative 'core_ext/yard'
require_relative 'code_objects'
require_relative 'handlers'
require_relative 'tags'
require_relative 'parser'

YARD::Parser::SourceParser.register_parser_type(:js, YARDJS::Parser::JavaScriptParser, ['js'])
YARD::Handlers::Processor.register_handler_namespace(:js, YARDJS::Handlers)

YARD::Templates::Engine.register_template_path(File.dirname(__FILE__) + '/../../templates')

[:readonly, :writeonly, :static].each do |tag|
  YARD::Tags::Library.define_tag(tag.to_s.capitalize, tag)
end
YARD::Tags::Library.define_tag 'Default Value', :default, :with_name
YARD::Tags::Library.define_tag 'Default Value', :value
YARD::Tags::Library.define_tag 'Constant', :constant
YARD::Tags::Library.define_tag 'Context (<tt>this</tt>)', :context, :with_types
YARD::Tags::Library.define_tag 'Callback', :callback, YARDJS::Tags::CallbackTag
YARD::Tags::Library.visible_tags.unshift(:value, :context)

YARD::Tags::Library.define_directive(:ignore, YARDJS::Tags::IgnoreDirective)
YARD::Tags::Library.define_directive(:event, :with_title_and_text, YARDJS::Tags::EventDirective)
