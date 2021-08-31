require 'yard'

require_relative 'yard/code_objects'
require_relative 'yard/registry'
require_relative 'yard/tags'
require_relative 'yard/templates'
require_relative 'yard/yardoc'

YARD::CodeObjects::NSEP = '.'
YARD::CodeObjects.send(:remove_const, :NSEPQ)
YARD::CodeObjects::NSEPQ = Regexp.quote(YARD::CodeObjects::NSEP)
YARD::CodeObjects::CSEP = '.'
YARD::CodeObjects.send(:remove_const, :CSEPQ)
YARD::CodeObjects::CSEPQ = Regexp.quote(YARD::CodeObjects::CSEP)
YARD::CodeObjects::ISEP = '.'
YARD::CodeObjects.send(:remove_const, :ISEPQ)
YARD::CodeObjects::ISEPQ = Regexp.quote(YARD::CodeObjects::ISEP)
