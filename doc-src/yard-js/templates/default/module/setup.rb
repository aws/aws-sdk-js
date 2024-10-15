def init
  sections :header, :box_info, :pre_docstring, T('docstring'), :children,
    :constant_summary, [T('docstring')], :inherited_constants,
    :constructor_summary, [:item_summary],
    :events_summary, [:item_summary],
    :properties_summary, [:item_summary], :inherited_properties,
    :method_summary, [:item_summary], :inherited_methods,
    :methodmissing,
    :events_details, [T('method_details')],
    :properties_details, [T('method_details')],
    :methods_details, [T('method_details')]
end

# Placeholder for class inheritance
def methodmissing; end

def constructor_summary
  list = object.properties.select {|p| p.constructor? }
  list = sort_listing(prune_method_listing(list))
  if @constructor = list.first
    erb(:constructor_summary)
  end
end

def event_listing
  @event_listing ||= object.events
end

def property_listing
  return @property_listing if @property_listing

  list = object.properties.
    select {|p| p.property_type != :function }.
    reject {|p| p.constructor? || p.tag(:constant) }
  list = sort_listing(prune_method_listing(list))
  @property_listing = list
end

def inherited_property_list
  object.inheritance_tree(true)[1..-1].each do |superclass|
    next if superclass.is_a?(YARD::CodeObjects::Proxy)
    props = prune_method_listing(superclass.properties, false)
    props = props.
      select {|p| p.property_type != :function }.
      reject {|p| object.child(:name => p.name) }.
      reject {|p| p.constructor? || p.tag(:constant) }
    yield superclass, props if props.size > 0
  end
end

def method_listing
  return @method_listing if @method_listing

  list = object.properties.
    select {|p| p.property_type == :function }.
    reject {|p| p.constructor? }
  list = sort_listing(prune_method_listing(list))
  @method_listing = list
end

def inherited_method_list
  object.inheritance_tree(true)[1..-1].each do |superclass|
    next if superclass.is_a?(YARD::CodeObjects::Proxy)
    props = prune_method_listing(superclass.properties, false)
    props = props.
      select {|p| p.property_type == :function }.
      reject {|p| object.child(:name => p.name) }.
      reject {|p| p.constructor? }
    yield superclass, props if props.size > 0
  end
end

def scopes(list)
  yield(list, '') if list.size > 0
end
