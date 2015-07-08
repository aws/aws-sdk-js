# @return [String] HTML output of the classes to be displayed in the
#    full_list_class template.
def class_list(root = Registry.root, tree = TreeContext.new)
  out = ""
  children = run_verifier(root.children)
  if root == Registry.root
    children += @items.select {|o| o.namespace.is_a?(CodeObjects::Proxy) }
  end

  if root == Registry.root
    out << '<li class="expander" class="even"><div class="item" style="padding-left:30px">'
    out << '<a class="toggle"></a> Services</div><ul>'
    svcs = Registry.at('AWS').children.select {|c| c.has_tag?(:service) }

    ids = {}
    svcs.each do |svc|
      id = svc.tag(:service).text
      (ids[id] ||= []) << svc
    end

    row_class = ''
    next_class = -> { row_class = row_class == 'even' ? 'odd' : 'even' }

    ids.sort_by {|id| id }.each do |id, versions|
      versions = versions.sort_by {|v| v.tag(:version).text }.reverse
      latest = versions.first
      out << "<li id='object_#{latest.path}' class='collapsed #{next_class}'>"
      out << "<div class='item' style='padding-left:45px'><a class='toggle'></a>"
      out << linkify(latest, latest.name.to_s.gsub(/_\d+/, ''))
      out << " &lt; Service"
      out << "<small class='search_info'>"
      out << latest.namespace.title
      out << "</small>"
      out << "</div>"
      out << "<ul>"
      versions.each do |version|
        out << "<li id='object_#{version.path}' class='#{next_class}'>"
        out << "<div class='item' style='padding-left:60px'>"
        out << linkify(version, version.tag(:version).text)
        out << "<small class='search_info'>"
        out << version.namespace.title
        out << "</small>"
        out << "</div>"
        out << "</li>"
      end
      out << "</ul>"
      out << "</li>"
    end
    out << '</ul></li>'
  end

  children.compact.sort_by(&:path).each do |child|
    if child.is_a?(CodeObjects::NamespaceObject)
      name = child.namespace.is_a?(CodeObjects::Proxy) ? child.path : child.name
      next if child.is_a?(CodeObjects::ClassObject) && child.superclass.path == 'AWS.Service'
      has_children = run_verifier(child.children).any? {|o| o.is_a?(CodeObjects::NamespaceObject) }
      out << "<li id='object_#{child.path}' class='#{tree.classes.join(' ')}'>"
      out << "<div class='item' style='padding-left:#{tree.indent}'>"
      out << "<a class='toggle'></a> " if has_children
      out << linkify(child, name)
      out << " &lt; #{child.superclass.name}" if child.is_a?(CodeObjects::ClassObject) && child.superclass
      out << "<small class='search_info'>"
      out << child.namespace.title
      out << "</small>"
      out << "</div>"
      tree.nest do
        out << "<ul>#{class_list(child, tree)}</ul>" if has_children
      end
      out << "</li>"
    end
  end
  out
end
