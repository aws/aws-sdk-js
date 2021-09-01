# frozen_string_literal: true
require File.dirname(__FILE__) + '/spec_helper'

RSpec.describe YARD::CodeObjects::NamespaceMapper do
  include YARD::CodeObjects::NamespaceMapper

  describe '#register_separator' do
    it 'should allow separators to be registered' do
      register_separator '!', :test_type

      expect(separators_for_type(:test_type)).to eq ['!']
      expect(types_for_separator('!')).to eq [:test_type]

      unregister_separator_by_type :test_type

      expect(separators_for_type(:test_type)).to be_empty
      expect(types_for_separator('!')).to be_empty
    end
  end

  describe '.on_invalidate' do
    it 'receives a callback when a new separator is added' do
      invalidated = false
      NamespaceMapper.on_invalidate { invalidated = true }

      register_separator '!', :test_type
      expect(invalidated).to be true

      unregister_separator_by_type :test_type
    end
  end
end
