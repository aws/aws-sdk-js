# frozen_string_literal: true

RSpec.describe YARD::Tags::DefaultTag do
  it "creates a tag with defaults" do
    o = YARD::Tags::DefaultTag.new('tagname', 'desc', ['types'], 'name', ['defaults'])
    expect(o.defaults).to eq ['defaults']
    expect(o.tag_name).to eq 'tagname'
    expect(o.name).to eq 'name'
    expect(o.types).to eq ['types']
  end
end
