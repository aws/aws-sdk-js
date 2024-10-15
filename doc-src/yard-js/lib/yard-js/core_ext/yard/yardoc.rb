module YARD
  module CLI
    class Yardoc
      def general_options_yardjs(opts)
        general_options_orig(opts)

        opts.on('--define-class-expr EXPR') do |expr|
          YARDJS.options.define_class_expression = expr
        end

        opts.on('--update-class-expr EXPR') do |expr|
          YARDJS.options.update_class_expression = expr
        end

        opts.on('--mixin-module-expr EXPR') do |expr|
          YARDJS.options.mixin_module_expression = expr
        end
      end
      alias general_options_orig general_options
      alias general_options general_options_yardjs
    end
  end
end
