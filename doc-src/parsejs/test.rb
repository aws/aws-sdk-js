require "rubygems"
require "bundler/setup"
require "lattescript"
require "benchmark"

require "ruby-prof"

file = <<-FOO
  /**
   some docs
  */
  App.Foo = SC.View.extend({
    /**
     some docs
    */
    hi: function() {

    }
  });
FOO

parser = LatteScript::Parser.new(file)
parser.parse
ast = parser.result
new_string = LatteScript::Stringifier.to_string(ast) do |stringifier|
  stringifier.include_comments = true
end

puts new_string

__END__

#result = RubyProf.profile do

  Dir[File.expand_path("~/Code/cool_stuff/sproutcore20/packages/**/lib/**/*.js")].each do |file|
  #Dir[File.expand_path("~/Code/cool_stuff/jquery/src/**/*.js")].each do |file|
  #Dir["/Users/wycats/Code/cool_stuff/jquery/src/queue.js"].each do |file|
    next if file =~ /jquery-|packages\/handlebars|packages\/metamorph/
    #next if file =~ /intro|outro|sizzle\/(speed|test)|sizzle-jquery/
    string = File.read(file)

    puts "#{file}: "
    puts

    result = Benchmark.measure {
      LatteScript::Parser.new(string).parse
    }

    #puts "#{string.size} bytes in #{result.total.round(2)}s = #{(string.size / result.total).round}bps"
  end
#end

#printer = RubyProf::CallTreePrinter.new(result)
#printer.print(File.open("call.grind", "w"))

__END__

string = File.read("spec/fixtures/jquery.js")

#require "ruby-prof"

ast = nil

#result = RubyProf.profile do
  parser = LatteScript::Parser.new(string)
  ast = parser.parse
#end

#printer = RubyProf::FlatPrinter.new(result)
#printer.print(STDOUT)
#printer.print(File.open("profile.html", "w"))

#new_string = LatteScript::Stringifier.to_string(ast) do |stringifier|
  #stringifier.include_comments = true
#end

