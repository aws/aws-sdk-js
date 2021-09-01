# frozen_string_literal: true

RSpec.describe Module do
  describe "#class_name" do
    it "returns just the name of the class/module" do
      expect(YARD::CodeObjects::Base.class_name).to eq "Base"
    end
  end
end
