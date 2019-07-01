# ParseJS

ParseJS is a JavaScript parser written in Ruby using the KPeg parser generator. It also
takes a JavaScript parse tree and emits semantically identical JavaScript. The parser is
tested by parsing large, popular JavaScript libraries (such as jQuery) and confirming that
the minified output after a round-trip through ParseJS is the same as minifying the original
source.

The ParseJS stringifier does not guarantee equivalent whitespace and comments in a
round-trip, but it should guarantee semantic equivalence.

The ParseJS parser maintains comments in most cases where comments would represent inline
documentation.

* top-level statement: a ParseJS top-level statement node contains any comment that
	immediately preceded it.
* property: in a property list (object literal), a property node contains any comment
	that immediately preceded it.

There is a work-in-progress AST walker that associates comments with particular structures.
The ultimate goal of this walker is to identify JavaScript structures that represent
"classes" or similar structures and associate their comments with information extracted
from the code.

# Usage

ParseJS is provided as a Rubygem. At the moment, you can use it in your Gemfile by using
Bundler's git feature.

```ruby
gem "parsejs", :git => "git://github.com/wycats/parsejs.git"
```

You can parse a String of JavaScript and receive an AST by using
`ParseJS.parse`.

```ruby
ast = ParseJS.parse(some_data)
```

You can convert the AST back into a JavaScript String using the
stringifier. You can mutate the AST before converting it into a String
if you wish.

```
ParseJS::Stringifier.to_string(ast)
```

You can write your own AST walker without implementing visitors for all
nodes by subclassing `ParseJS::Visitor`. Take a look
[at that class](https://github.com/wycats/parsejs/blob/master/lib/parsejs/visitor.rb)
to see the default visitor behavior for a particular node.

By default, nodes `accept` their children. Nodes that have children that
are `Array`s of nodes (e.g. `FunctionDeclaration`, which has an `Array` of
parameters and an `Array` of statements as children) default to looping
over the `Array`s and accepting their members.

You can take a look at the in-progress
[docs extractor](https://github.com/wycats/parsejs/blob/master/lib/parsejs/docs.rb)
or the [stringifier](https://github.com/wycats/parsejs/blob/master/lib/parsejs/stringifier.rb)
for examples of subclasses of `ParseJS::Visitor`.

# LICENSE

Copyright (C) 2012 Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

