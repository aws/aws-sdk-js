def source; end

def method_signature
  if object.type == :event
    <<-eof
    <h3 class="signature #{'first' if @index == 0}" id="#{anchor_for(object)}">
    <strong>'#{object.name}'</strong> &mdash; <strong>function</strong> (#{object.parameters.map(&:first).join(", ")})
    </h3>
    eof
  else
    erb(:method_signature)
  end
end