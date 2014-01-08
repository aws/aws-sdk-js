def class_list(root = Registry.root)
  out = ""
  children = run_verifier(root.children)
  if root == Registry.root
    children += @items.select {|o| o.namespace.is_a?(CodeObjects::Proxy) }
  end

  if root == Registry.root
    out << '<li class="expander"><a class="toggle"></a> Services</li><ul>'
    svcs = Registry.at('AWS').children.select {|c| c.has_tag?(:service) }

    ids = {}
    svcs.each do |svc|
      id = svc.tag(:service).text
      (ids[id] ||= []) << svc
    end

    ids.sort_by {|id| id }.each do |id, versions|
      versions = versions.sort_by {|v| v.tag(:version).text }.reverse
      latest = versions.first
      out << "<li><a class='toggle'></a>"
      out << linkify(latest, latest.name.to_s.gsub(/_\d+/, ''))
      out << " &lt; Service"
      out << "<small class='search_info'>"
      out << latest.namespace.title
      out << "</small>"
      out << "</li>"
      out << "<ul>"
      versions.each do |version|
        out << "<li>"
        out << linkify(version, version.tag(:version).text)
        out << "<small class='search_info'>"
        out << version.namespace.title
        out << "</small>"
        out << "</li>"
      end
      out << "</ul>"
    end
    out << '</ul>'
    out << '<li class="expander"><a class="toggle"></a> Other Classes</li><ul>'
  end

  children.reject {|c| c.nil? }.sort_by {|child| child.path }.map do |child|
    if child.is_a?(CodeObjects::NamespaceObject)
      name = child.namespace.is_a?(CodeObjects::Proxy) ? child.path : child.name
      next if child.is_a?(CodeObjects::ClassObject) && child.superclass.path == 'AWS.Service'
      has_children = run_verifier(child.children).any? {|o| o.is_a?(CodeObjects::NamespaceObject) }
      out << "<li>"
      out << "<a class='toggle'></a> " if has_children
      out << linkify(child, name)
      out << " &lt; #{child.superclass.name}" if child.is_a?(CodeObjects::ClassObject) && child.superclass
      out << "<small class='search_info'>"
      out << child.namespace.title
      out << "</small>"
      out << "</li>"
      out << "<ul>#{class_list(child)}</ul>" if has_children
    end
  end

  out << '</ul>' if root == Registry.root

  out
end
