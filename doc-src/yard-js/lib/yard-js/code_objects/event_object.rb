module YARDJS
  module CodeObjects
    class EventObject < Base
      def constructor?; false end
      def property_type; :event end
      def aliases; [] end
      def sep; '~' end
      attr_accessor :parameters
    end
  end
end
