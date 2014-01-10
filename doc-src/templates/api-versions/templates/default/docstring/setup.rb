def init
  super
  sections.place(:experimental).before_any(:private)
end

def experimental
  return unless object.has_tag?(:api) && object.tag(:api).text == 'experimental'
  erb(:experimental)
end
