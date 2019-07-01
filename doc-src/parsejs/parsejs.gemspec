# -*- encoding: utf-8 -*-
# stub: parsejs 0.0.1 ruby lib

Gem::Specification.new do |s|
  s.name = "parsejs".freeze
  s.version = "0.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Yehuda Katz".freeze]
  s.date = "2018-11-19"
  s.description = "ParseJS is a JavaScript parser written using KPeg".freeze
  s.email = ["wycats@gmail.com".freeze]
  s.files = [".gitignore".freeze, ".rspec".freeze, ".travis.yml".freeze, "Gemfile".freeze, "README.markdown".freeze, "Rakefile".freeze, "lib/parsejs.rb".freeze, "lib/parsejs/ast.rb".freeze, "lib/parsejs/docs.rb".freeze, "lib/parsejs/grammar.kpeg".freeze, "lib/parsejs/grammar.kpeg.rb".freeze, "lib/parsejs/scope.rb".freeze, "lib/parsejs/stringifier.rb".freeze, "lib/parsejs/version.rb".freeze, "lib/parsejs/visitor.rb".freeze, "parsejs.gemspec".freeze, "spec/fixtures/jquery-1.6.js".freeze, "spec/fixtures/jquery-1.7.js".freeze, "spec/fixtures/jquery-ajax.js".freeze, "spec/fixtures/jquery-attributes.js".freeze, "spec/fixtures/jquery-traversing.js".freeze, "spec/fixtures/metamorph.js".freeze, "spec/fixtures/sizzle.js".freeze, "spec/fixtures/sproutcore-core.js".freeze, "spec/fixtures/sproutcore-each-proxy.js".freeze, "spec/fixtures/sproutcore-native-array.js".freeze, "spec/fixtures/sproutcore.js".freeze, "spec/scope_spec.rb".freeze, "spec/stringify_spec.rb".freeze, "test.rb".freeze]
  s.homepage = "".freeze
  s.rubygems_version = "2.7.7".freeze
  s.summary = "ParseJS parses JavaScript into a Ruby AST, suitable for preprocessing and other purposes. It also has work-in-progress support for extracting documentation from JavaScript".freeze
  s.test_files = ["spec/fixtures/jquery-1.6.js".freeze, "spec/fixtures/jquery-1.7.js".freeze, "spec/fixtures/jquery-ajax.js".freeze, "spec/fixtures/jquery-attributes.js".freeze, "spec/fixtures/jquery-traversing.js".freeze, "spec/fixtures/metamorph.js".freeze, "spec/fixtures/sizzle.js".freeze, "spec/fixtures/sproutcore-core.js".freeze, "spec/fixtures/sproutcore-each-proxy.js".freeze, "spec/fixtures/sproutcore-native-array.js".freeze, "spec/fixtures/sproutcore.js".freeze, "spec/scope_spec.rb".freeze, "spec/stringify_spec.rb".freeze]

  s.installed_by_version = "2.7.7" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<kpeg>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<yard>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_development_dependency(%q<uglifier>.freeze, [">= 0"])
      s.add_development_dependency(%q<json>.freeze, [">= 0"])
    else
      s.add_dependency(%q<kpeg>.freeze, [">= 0"])
      s.add_dependency(%q<yard>.freeze, [">= 0"])
      s.add_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_dependency(%q<uglifier>.freeze, [">= 0"])
      s.add_dependency(%q<json>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<kpeg>.freeze, [">= 0"])
    s.add_dependency(%q<yard>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_dependency(%q<uglifier>.freeze, [">= 0"])
    s.add_dependency(%q<json>.freeze, [">= 0"])
  end
end
