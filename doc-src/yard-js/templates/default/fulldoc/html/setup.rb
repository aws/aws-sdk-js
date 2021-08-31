def generate_method_list
  @items = prune_method_listing(Registry.all(:property), false)
  @items = @items.select {|m| m.property_type == :function }
  @items = @items.reject {|m| m.constructor? }
  @items = @items.sort_by {|m| m.name.to_s }
  @list_title = "Method List"
  @list_type = "method"
  generate_list_contents
end

def generate_property_list
  @items = prune_method_listing(Registry.all(:property), false)
  @items = @items.select {|m| m.property_type != :function }
  @items = @items.sort_by {|m| m.name.to_s }
  @list_title = "Property List"
  @list_type = "property"
  generate_list_contents
end
