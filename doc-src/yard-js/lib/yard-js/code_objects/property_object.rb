module YARDJS
  module CodeObjects
    class PropertyObject < Base
      attr_accessor :parameters, :property_type

      def aliases; [] end

      # @return whether or not the method is the #initialize constructor method
      def constructor?
        name == :constructor && namespace.is_a?(YARD::CodeObjects::ClassObject)
      end

      def relative_path(other)
        case other
        when PropertyObject
          if other.parent == parent
            other.name.to_s
          else
            other.path
          end
        else
          if parent == other
            other.name.to_s
          else
            other.path
          end
        end
      end

      def scope; :class end
      def attr_info; nil end

      # @return [Boolean] whether or not this method was created as a module
      #   function
      # @since 0.8.0
      def module_function?
        false
      end

      # @return [Boolean] whether the method is a writer attribute
      # @since 0.5.3
      def writer?
        true
      end

      # @return [Boolean] whether the method is a reader attribute
      # @since 0.5.3
      def reader?
        true
      end

      # Tests if the object is defined as an attribute in the namespace
      # @return [Boolean] whether the object is an attribute
      def is_attribute?
        false
      end

      # Tests if the object is defined as an alias of another method
      # @return [Boolean] whether the object is an alias
      def is_alias?
        false
      end

      # Tests boolean {#explicit} value.
      #
      # @return [Boolean] whether the method is explicitly defined in source
      def is_explicit?
        true
      end

      # @return [MethodObject] the object that this method overrides
      # @return [nil] if it does not override a method
      # @since 0.6.0
      def overridden_method
        nil
      end

      def value
        tag(:value) ? tag(:value).text : ''
      end
    end
  end
end
