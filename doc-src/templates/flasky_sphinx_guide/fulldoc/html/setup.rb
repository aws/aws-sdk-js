include T('guide/fulldoc/html')

def generate_assets
  layout = Object.new.extend(T('layout'))
  (layout.javascripts + layout.stylesheets).uniq.each do |file|
    asset(file, file(file, true))
  end

  opts = options.merge(:contents => erb(:search), :page_title => "Search")
  opts.delete(:files)
  asset('search.html', T('layout').run(opts))
  asset('searchindex.js', search_index)
  asset('img/logo.png', file('img/logo.png'))
  asset('css/file.png', file('img/file.png'))
end

def search_index
  require 'json'
  @json = JSON.dump(generate_search_index)
  erb(:search_index)
end

def generate_search_index
  {
    :titles => @files.map {|f| f.title },
    :filenames => @files.map {|f|
      options.readme == f ? 'index' :
        @serializer.serialized_path(f).gsub(/\.html$/, '')
    },
    :terms => prune_terms(build_terms),
    :objects => {},
    :objtypes => {},
    :objnames => {}
  }
end

def build_terms
  term_map = {}
  @files.each_with_index do |file, i|
    terms = file.contents.split(/[^a-z0-9]+/i)
    terms.each do |term|
      # generate subterms on casing split
      subterms = [term] + term.split(/^([A-Z]?[a-z]+)(?=[A-Z])/)
      subterms.uniq.each do |subterm|
        (term_map[stem(subterm.downcase)] ||= []) << i
      end
    end
  end

  term_map.each do |term, list|
    list.uniq!
    term_map[term] = list.first if list.size == 1
  end

  term_map
end

def prune_terms(terms)
  terms.keys.each do |term|
    terms.delete(term) if term.length < 3 && term !~ /\d/
  end
  terms
end

def stem(word)
  return word if word.size <= 3

  # simple plural stemming
  word = word.gsub(/e?s$/, '')

  # simple verb stemming
  word = word.gsub(/ing$/, '')

  word
end
