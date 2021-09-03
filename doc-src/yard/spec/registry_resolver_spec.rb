# frozen_string_literal: true

RSpec.describe YARD::RegistryResolver do
  include YARD::CodeObjects::NamespaceMapper

  describe '#starts_with_separator_match' do
    subject { RegistryResolver.new }

    it 'should clear cache when a namespace separator is registered' do
      expect(subject.send(:starts_with_separator_match).to_s).not_to include('!')
      register_separator '!', :test_type
      expect(subject.send(:starts_with_separator_match).to_s).to include('!')
    end
  end
end
