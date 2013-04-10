include T('guide/layout/html')

def stylesheets
  super + %w(css/highlight.github.css)
end

def javascripts
  super + %w(js/underscore.js js/doctools.js js/searchtools.js js/highlight.pack.js)
end
