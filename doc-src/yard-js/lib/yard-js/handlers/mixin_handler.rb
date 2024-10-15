require_relative 'base'

module YARDJS
  module Handlers
    class MixinHandler < Base
      handles CallExpression

      process do
        return unless statement.callee.source =~ YARDJS.options.mixin_module_expression

        obj = YARD::CodeObjects::ClassObject.new(:root, statement.args.first.source)
        obj.instance_mixins.push(*statement.args[1..-1].map do |arg|
          YARD::CodeObjects::ClassObject.new(:root, arg.source)
        end)
      end
    end
  end
end