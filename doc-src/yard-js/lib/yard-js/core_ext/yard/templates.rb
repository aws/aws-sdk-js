module YARD
  module Templates
    module Helpers
      module HtmlHelper
        def link_object(obj, otitle = nil, anchor = nil, relative = true)
          return otitle if obj.nil?
          obj = Registry.resolve(object, obj, true, true) if obj.is_a?(String)
          if !otitle && obj.root?
            title = "Top Level Namespace"
          elsif otitle
            title = otitle.to_s
          elsif object.is_a?(CodeObjects::Base)
            # Check if we're linking to a class method in the current
            # object. If we are, create a title in the format of
            # "CurrentClass.method_name"
            title = h(object.relative_path(obj))
            if obj.is_a?(YARDJS::CodeObjects::PropertyObject) && obj.property_type == :function
              title += '()'
            elsif obj.title != obj.path
              title = h(obj.title)
            end
          else
            title = h(obj.to_s)
          end
          return title unless serializer
          return title if obj.is_a?(CodeObjects::Proxy)

          link = url_for(obj, anchor, relative)
          link = link ? link_url(link, title, :title => h("#{obj.title} (#{obj.type})")) : title
          "<span class='object_link'>" + link + "</span>"
        end

        def signature_types(meth, link = true)
          meth = convert_method_to_overload(meth)
          if meth.respond_to?(:object) && !meth.has_tag?(:return)
            meth = meth.object
          end
          return unless meth

          type = options.default_return || ""
          if meth.tag(:return) && meth.tag(:return).types
            types = meth.tags(:return).map {|t| t.types ? t.types : [] }.flatten.uniq
            first = link ? h(types.first) : format_types([types.first], false)
            if types.size == 2 && types.last == 'null'
              type = first + '<sup>?</sup>'
            elsif types.size == 2 && types.last =~ /^(Array)?<#{Regexp.quote types.first}>$/
              type = first + '<sup>+</sup>'
            elsif types.size > 2
              type = [first, '...'].join(', ')
            elsif types == ['void'] && options.hide_void_return
              type = ""
            else
              type = link ? h(types.join(", ")) : format_types(types, false)
            end
          elsif !type.empty?
            type = link ? h(type) : format_types([type], false)
          end
          type = "#{type} " unless type.empty?
          type
        end

        def signature(meth, link = true, show_extras = true, full_attr_name = true)
          meth = convert_method_to_overload(meth)

          type = signature_types(meth, link)
          args = ''
          prefix = ''
          name = meth.name.to_s

          if meth.constructor?
            prefix, name = 'new ', meth.namespace.path.gsub(/_\d+/, '')
          end

          if meth.property_type == :function
            if meth.parameters
              args = meth.parameters.map {|n, v| v ? "#{n} = #{v}" : n.to_s }.join(", ")
            end
            args = "(#{args})"
          end

          if YARDJS::Tags::CallbackTag === meth
            type = ''
            args += ' { ... }'
          end

          type = "&#x21d2; #{type}" if type && !type.empty?

          extras = []
          extras_text = ''
          if show_extras
            extras << 'static' if meth.tag(:static)
            extras << 'readonly' if meth.tag(:readonly)
            extras << 'writeonly' if meth.tag(:writeonly)
            extras << 'readwrite' if !meth.tag(:readonly) && !meth.tag(:writeonly) && meth.property_type != :function
            extras << meth.visibility if meth.visibility != :public
            extras_text = ' <span class="extras">(' + extras.join(", ") + ')</span>' unless extras.empty?
          end

          title = "%s<strong>%s</strong>%s %s" % [prefix, h(name), args, type]

          if link
            link_title = h(name)
            obj = meth.respond_to?(:object) ? meth.object : meth
            url = url_for(object, obj)
            link_url(url, title, :title => link_title) + extras_text
          else
            title + extras_text
          end
        end
      end
    end
  end
end
