def stylesheets
  super + %w(css/highlight.github.css)
end

def javascripts
  super + %w(js/highlight.pack.js)
end

def menu_lists
[ { :type => 'class', :title => 'Classes', :search_title => 'Class List' },
  { :type => 'method', :title => 'Methods', :search_title => 'Method List' },
  { :type => 'property', :title => 'Properties', :search_title => 'Property List' },
  { :type => 'file', :title => 'Files', :search_title => 'File List' } ]
end
