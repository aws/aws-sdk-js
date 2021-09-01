# frozen_string_literal: true

require File.dirname(__FILE__) + '/integration_spec_helper'

RSpec.describe 'Markdown via RDoc integration' do
  include_context 'shared helpers for markup processor integration specs'
  let(:markup) { :markdown }
  let(:markup_provider) { :rdoc }

  let(:document) do
    <<-MARKDOWN
## Example code listings

Indented block of Ruby code:

    x = 1

Fenced block of Ruby code:

```
x = 2
```

Fenced and annotated block of Ruby code:

```ruby
x = 3
```

MARKDOWN
  end

  it 'renders level 2 header' do
    expect(rendered_document).to match(header_regexp(2, 'Example code listings'))
  end

  it 'renders indented block of code, and applies Ruby syntax highlight' do
    expect(rendered_document).to match(highlighted_ruby_regexp('x', '=', '1'))
  end

  it 'renders fenced block of code, and applies Ruby syntax highlight' do
    expect(rendered_document).to match(highlighted_ruby_regexp('x', '=', '2'))
  end

  it 'renders fenced and annotated block of Ruby code, and applies syntax highlight' do
    expect(rendered_document).to match(highlighted_ruby_regexp('x', '=', '3'))
  end
end
