source 'https://rubygems.org'

gem 'rake'

group :documentation do
  gem 'rdiscount'
  gem 'yard-sitemap', '~> 1.0'
  
  # Switch to yard-js gem when fix is published 
  # Fix PR: https://github.com/lsegal/yard-js/pull/4
  gem 'yard-js', path: './doc-src/yard-js'
  
  # Switch to yard gem when fix is published 
  # Fix PR: https://github.com/lsegal/yard/pull/1399
  gem 'yard', path: './doc-src/yard'

  gem 'parsejs', path: './doc-src/parsejs'
end

group :release do
  gem 'redcarpet', '~> 3.0'
  gem 'samus'
end
