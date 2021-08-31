source 'https://rubygems.org'

gem 'rake'

group :documentation do
  gem 'rdiscount'
  gem 'yard', github: 'lsegal/yard', branch: :main
  gem 'yard-sitemap', '~> 1.0'
  gem 'yard-js', github: 'trivikr/yard-js', branch: 'frozen-string-error-fix'
	gem 'parsejs', path: './doc-src/parsejs'
end

group :release do
  gem 'redcarpet', '~> 3.0'
  gem 'samus'
end
