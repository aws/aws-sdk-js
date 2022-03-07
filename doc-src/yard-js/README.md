# YARD for JavaScript

A [YARD](http://yardoc.org) plugin that adds support for documenting
JavaScript source files with minimal amount of manual declarations, support
for YARD syntax, and templates for displaying HTML documentation.

The plugin relies on certain conventional syntaxes for declaring classes and
mixins. See the "Generating documentation" section below for how to customize
this.

## Documenting with yard-js

Documenting with `yard-js` should be similar to documenting with YARD.
Information on how to document with YARD can be found in YARD's
[Getting Started Guide](http://rubydoc.org/docs/yard/file/docs/GettingStarted.md).
Just like in Ruby, you will document methods or classes by adding docstrings
above the definition. Unlike jsdoc, you do not need to explicitly denote the
class name or details, as these will be automatically detected by YARD. For
instance, the following File class can be documented like so:

```js
/**
 * This class represents files on disk.
 *
 * @see FileSystem
 */
inherit(IO, {
  /**
   * Opens a new file at the location of `filename`
   *
   * @param filename [String] the location on disk of the file to open.
   * @param access [String] a combination or 'r' and 'w' for access modes.
   */
  constructor: function (filename, access) { ... },

  /**
   * Reads from the open file
   *
   * @param numBytes [number] the number of bytes to read. Leave this
   *   empty to read all remaining data.
   * @return [Buffer] the data read from disk as a buffer.
   */
  read: function (numBytes) { ... }
});
```

All [macros and tags](http://rubydoc.org/docs/yard/file/docs/Tags.md) available
in YARD are available in `yard-js`.

## Requirements

YARD for JavaScript relies on the following software:

* [Ruby 1.9.x](http://ruby-lang.org)
* [Bundler](http://gembundler.com)
* [`yard` RubyGem](http://rubygems.org/gems/yard)
* [`parsejs` library](http://rubygems.org/gems/parsejs)

Note that installing Ruby is not covered in the installation section.

## Installing

To install, clone the repository and `bundle install` to install dependencies:

```sh
$ git clone git://github.com/lsegal/yard-js
$ cd yard-js
$ bundle install
```

## Usage

To generate documentation for a project, change into the project directory
and type:

```sh
$ bundle exec yard -m markdown -e /path/to/yard-js/lib/yard-js.rb
```

To take advantage of class detection you will also need to customize the
expressions used by `yard-js` to find class definitions. These are done through
the following command line arguments:

`--define-class-expr`: The syntax used in your code to define a class. For
example, `--define-class-expr inherit` will look for the following statement:

```js
inherit(SuperClass, {
  // class implementation
  constructor: function() { /* constructor function */ },
  foo: function() { /* an instance method */ }
});
```

`--update-class-expr`: The syntax used in your code to update the class object
itself (also known as class level methods/properties). For example,
`--update-class-expr update` will detect the following block as a set of class
methods:

```js
update(MyClass, {
  bar: function() { /* a method only available as MyClass.bar() */ }
});
```

`--mixin-module-expr`: The syntax used to detect modules mixed into a class.
For example, `--mixin-module-expr mixin` will detect:

```js
mixin(MyClass, SomeMixin);
```

To simplify setting these values, you can add these command line arguments
to a `.yardopts` file in the root level of your project, for example:

    --define-class-expr inherit
    --update-class-expr update
    --mixin-module-expr mixin

Note that by default YARD uses RDoc comment formatting. This is overridden in
the above example by adding `-m markdown` to use markdown formatting for
documentation comments.

## Known Issues

1. This plugin is currently not a true "plugin". This will require availability
   as a RubyGem, which will happen soon.

2. This plugin is currently not compatible with the YARD server architecture.
   This is being worked on.

3. This plugin cannot document Ruby code alongside JavaScript code due to the
   way it modifies YARD internals. Making yard-js work side-by-side Ruby code
   will be a long-term goal.

## License

`yard-js` is available under the MIT license.
