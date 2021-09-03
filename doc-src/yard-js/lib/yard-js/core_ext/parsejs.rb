$:.unshift(File.expand_path('~/parsejs/lib'))

require 'parsejs'
require 'parsejs/stringifier'

class ParseJS::AST::Node
  def line; 0 end
  def show; ParseJS::Stringifier.to_string(self) end
  def comments_hash_flag; nil end
  def comments_range; nil end
  alias source show
  attr_accessor :comments
end
