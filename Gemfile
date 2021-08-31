source 'https://rubygems.org'

gem 'rake'

group :documentation do
  gem 'rdiscount'
  gem 'yard', github: 'lsegal/yard', branch: :main
  gem 'yard-sitemap', '~> 1.0'
  
  # Switch to yard-js gem when fix is published 
  # Fix PR: https://github.com/lsegal/yard-js/pull/4
  gem 'yard-js', path: './doc-src/yard-js'

  gem 'parsejs', path: './doc-src/parsejs'
end

group :release do
  gem 'redcarpet', '~> 3.0'
  gem 'samus'
end
