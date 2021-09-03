def init
  super
  sections.place(:callback, [T('docstring')]).after_any(:param)
end

def return
  if object.type == :property
    return if object.property_type == :literal
    return if object.constructor?
    return if object.tags(:return).size == 1 && object.tag(:return).text.empty?
  end
  tag(:return)
end

def param
  tag(:param) if object.type == :property || object.type == :event
end

def value
  return if object.tag(:constant)
  if object.has_tag?(:value) && !object.tag(:value).text.empty?
    erb(@name = :value)
  end
end
