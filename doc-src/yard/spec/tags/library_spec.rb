# frozen_string_literal: true

RSpec.describe YARD::Tags::Library do
  def tag(docstring)
    Docstring.new(docstring).tags.first
  end

  describe "#see_tag" do
    it "takes a URL" do
      expect(tag("@see http://example.com").name).to eq "http://example.com"
    end

    it "takes an object path" do
      expect(tag("@see String#reverse").name).to eq "String#reverse"
    end

    it "takes a description after the url/object" do
      tag = tag("@see http://example.com An Example Site")
      expect(tag.name).to eq "http://example.com"
      expect(tag.text).to eq "An Example Site"
    end
  end

  describe ".define_tag" do
    it "allows defining tags with '.' in the name (x.y.z defines method x_y_z)" do
      Tags::Library.define_tag("foo", 'x.y.z')
      Tags::Library.define_tag("foo2", 'x.y.zz', Tags::OverloadTag)
      expect(Tags::Library.instance.method(:x_y_z_tag)).not_to be nil
      expect(Tags::Library.instance.method(:x_y_zz_tag)).not_to be nil
      expect(tag('@x.y.z foo bar').text).to eq 'foo bar'
      expect(tag('@x.y.zz foo(bar)').signature).to eq 'foo(bar)'
    end
  end

  describe "#tag.explain_types" do
    it "can explain tag types" do
      expect(tag("@return [A, B<String>]").explain_types).to eq "an A; a B of (Strings)"
    end

    it "returns nil if no types present" do
      expect(tag("@return").explain_types).to eq nil
    end

    it "returns nil if types are not parseable" do
      expect(tag("@return [$]").explain_types).to eq nil
    end
  end
end
