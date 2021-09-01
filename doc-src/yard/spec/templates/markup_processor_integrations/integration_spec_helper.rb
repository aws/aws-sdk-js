# frozen_string_literal: true

RSpec.shared_context 'shared helpers for markup processor integration specs' do
  after do
    YARD::Templates::Helpers::MarkupHelper.clear_markup_cache
  end

  let(:rendered_document) { html_renderer.htmlify document }

  let(:template_options) do
    Templates::TemplateOptions.new.tap do |o|
      o.reset_defaults
      o.default_return = nil
      o.markup = markup
      o.markup_provider = markup_provider
    end
  end

  let(:html_renderer) do
    obj = OpenStruct.new
    obj.options = template_options
    obj.object = Registry.root
    obj.extend(Templates::Helpers::HtmlHelper)
    obj
  end

  before(:each) do
    if html_renderer.markup_class(markup).nil?
      skip "Missing markup renderer #{markup}"
    end
  end

  # Works only with one-liners.
  def highlighted_ruby_regexp(*identifiers)
    prefix = Regexp.escape '<pre class="code ruby"><code class="ruby">'
    any_span_tag = '<span\b'
    escaped_identifiers = identifiers.map {|a| Regexp.escape(a) }

    regexp_parts = [prefix, any_span_tag, escaped_identifiers]
    regexp_str = regexp_parts.flatten.join(".*")
    Regexp.compile(regexp_str)
  end

  def header_regexp(level, text)
    prefix = "<h#{level}[^>]*?>"
    escaped_text = Regexp.escape text
    regexp_str = [prefix, escaped_text].join(".*")
    Regexp.compile(regexp_str)
  end
end
