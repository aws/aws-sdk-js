require 'ostruct'

module YARDJS
  class Options
    %w(define_class_expression
       update_class_expression
       mixin_module_expression).each do |name|
      attr_reader(name)
      define_method("#{name}=") do |value|
        instance_variable_set("@#{name}", /\A#{value}\Z/)
      end
    end

    def initialize
      self.define_class_expression ||=
        ENV['DEFINE_CLASS_EXPR'] || 'inherit'
      self.update_class_expression ||=
        ENV['UPDATE_CLASS_EXPR'] || 'update'
      self.mixin_module_expression ||=
        ENV['MIXIN_MODULE_EXPR'] || 'mixin'
    end
  end

  def self.options
    @options ||= Options.new
  end
end

require_relative 'yard-js/plugin'
require_relative 'yard-js/version'
