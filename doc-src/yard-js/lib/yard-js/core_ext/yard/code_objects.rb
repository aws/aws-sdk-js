require 'yard'

module YARD
  module CodeObjects
    class Base
      alias old_relative_path relative_path
      def relative_path(other)
        if other.is_a?(NamespaceObject)
          other.path
        else
          old_relative_path(other)
        end
      end
    end

    class NamespaceObject
      def properties
        children.select {|o| o.type == :property }
      end

      def events
        children.select {|o| o.type == :event }
      end

      def constants(opts = {})
        properties.select {|o| o.has_tag?(:constant) }
      end

      def relative_path(other)
        if self == other.parent
          other.name.to_s
        else
          other.path
        end
      end
    end

    class ClassObject
      def initialize(namespace, name, *args, &block)
        super
        self.superclass = "Object"
      end
    end
  end
end
