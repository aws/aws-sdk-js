source 'https://rubygems.org'

gem 'rake'

group :documentation do
  gem 'rdiscount'
  gem 'yard-sitemap', '~> 1.0'
  
  # Switch to yard-js gem when fix is published 
  # Fix PR: https://github.com/lsegal/yard-js/pull/4
  gem 'yard-js', path: './doc-src/yard-js'
  
  # When updating yard, override app.js from upstream to doc-src/templates/default/fulldoc/js/app.js
  # and add patch from PR https://github.com/lsegal/yard/pull/1399 to support jQuery 3.6.0+
  gem 'yard', '~> 0.9.26'

  gem 'parsejs', path: './doc-src/parsejs'
end

group :release do
  gem 'redcarpet', '~> 3.0'
  gem 'samus'
end
