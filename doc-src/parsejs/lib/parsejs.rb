require "parsejs/version"
require "parsejs/grammar.kpeg"
require "parsejs/stringifier"
require "parsejs/ast"
require "parsejs/scope"

module ParseJS
  def self.parse(string)
    string = string.force_encoding('BINARY') if string.respond_to?(:force_encoding)
    parser = ParseJS::Parser.new(string)
    parser.parse
    parser.result
  end
end
