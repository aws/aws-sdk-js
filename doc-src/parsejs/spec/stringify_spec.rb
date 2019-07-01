require "parsejs"
require "digest"
require "uglifier"

describe "stringifying" do
  def should_equal_itself(string, should)
    string = "#{string}\n"
    should = "#{should}\n"

    ast = ParseJS.parse(string)
    new_string = ParseJS::Stringifier.to_string(ast) do |stringifier|
      stringifier.include_comments = true
    end

    new_string.should == should
  end

  def should_match_compressed(string)
    string.force_encoding("UTF-8") if string.respond_to?(:force_encoding)
    should = Uglifier.new.compile(string)

    string.force_encoding("BINARY") if string.respond_to?(:force_encoding)

    ast = ParseJS.parse(string)
    new_string = ParseJS::Stringifier.to_string(ast) do |stringifier|
      stringifier.include_comments = true
    end

    File.open("ewot", "w") { |file| file.puts new_string }
    new_string.force_encoding("UTF-8") if new_string.respond_to?(:force_encoding)
    new_string = Uglifier.new.compile(new_string)

    new_string.split(";").should == should.split(";")
  end

  def self.strip(string)
    string.gsub(/^ {6}/, '').strip
  end

  [
    "x;",
    "null;",
    "true;",
    "false;",
    "-0;",
    "x = y;",
    "void 0;",
    "void y;",
    "void f();",
    "[];",
    "({});",
    "({1e999: 0});",
    "[, , 2];",
    "[, 1, ,];",
    "[1, , , 2, , ,];",
    "[, , ,];",
    "[0, 1, 2, \"x\"];",
    "x.y.z;",
    "x[y[z]];",
    "x[\"y z\"];",
    "(0).toString();",
    "f()();",
    "f((x, y));",
    "f(x = 3);",
    "x.y();",
    "f(1, 2, 3, null, (g(), h));",
    "new (x.y);",
    "new (x.y)();",
    "new (x());",
    "new (x())();",
    "(new x).y;",
    "(new x()).y;",
    "new (x().y);",
    "new (x().y)();",
    "a * x + b * y;",
    "a * (x + b) * y;",
    "a + (b + c);",
    "a + b + c;",
    ("x + y - " * 100) + "z;",
    "x.y = z;",
    "get(id).text = f();",
    "[,] = x;",
    "x = 1e999 + y;",
    "x = y / -1e999;",
    "x = 0 / 0;",
    "x = (-1e999).toString();",

    # statements
    strip(<<-IF),
      if (a == b)
        x();
      else
        y();
    IF

    strip(<<-IF),
      if (a == b) {
        x();
      } else {
        y();
      }
    IF

    strip(<<-IF),
      if (a == b)
        if (b == c)
          x();
        else
          y();
    IF

    strip(<<-WHILE),
      while (a == b)
        c();
    WHILE

    strip(<<-DOWHILE),
      do {
        foo.bar();
        bar.baz();
      } while (x);
    DOWHILE

    strip(<<-IF),
      if (a)
        while (b)
          ;
      else
        c();
    IF

    strip(<<-IF),
      if (a)
        while (b) {
          ;
        }
      else
        c();
    IF

    strip(<<-FOR),
      for (;;)
        ;
    FOR

    strip(<<-FOR),
      for (var i = 0; i < a.length; i++) {
        b[i] = a[i];
      }
    FOR

    strip(<<-FOR),
      for (t = (i in x); t; t = t[i])
        ;
    FOR

    strip(<<-FOR),
      for (var t = (i in x); t; t = t[i])
        ;
    FOR

    strip(<<-FOR),
      for (t = 1 << (i in x); t < 100; t++)
        ;
    FOR

    strip(<<-FOR),
      for (var i in arr)
        dump(arr[i]);
    FOR

    strip(<<-IF),
      if (x) {
        switch (f(a)) {
          case f(b):
            throw exc;
          default:
            fall_through();
          case 99:
            succeed();
        }
      }
    IF

    "var x;",
    "var x, y;",
    "var x = 1, y = x;",
    "var x = y = 1;",
    "var x = f, g;",
    "var x = (f, g);",

    strip(<<-TRY),
      try {
        f();
      } finally {
        cleanup();
      }
    TRY

    strip(<<-TRY),
      try {
        f();
        g();
      } catch (x) {
        cope(x);
      } finally {
        cleanup();
      }
    TRY

    strip(<<-BREAK),
      if (last) {
        if (outerToo) {
          end = node.nextSibling;
        } else {
          break;
        }
      }
    BREAK

    # functions

    strip(<<-FUNCTION),
      function f() {
        g();
      }
    FUNCTION

    # Statement-vs-ExpressionStatement ambiguities

    strip(<<-FUNCTION),
      (function () {
        go();
      }());
    FUNCTION

    strip(<<-FUNCTION),
      (function () {
      }.x);
    FUNCTION

    strip(<<-FUNCTION),
      (function () {
      }.x = 1);
    FUNCTION

    strip(<<-FUNCTION),
      (function name() {
      }.x = 1);
    FUNCTION

    strip(<<-FUNCTION),
      if (foo) {
        function sigh(zomg, zomg2) {
          hi();
        }
      }
    FUNCTION

    strip(<<-FUNCTION),
      (function () {
      }.x, function () {
      }.y);
    FUNCTION

    strip(<<-FUNCTION),
      (function () {
      } + x) * y;
    FUNCTION

    strip(<<-FUNCTION),
      (function () {
      } * x + y);
    FUNCTION

    "({a: f()});",

    # misc

    "this.x();",

    "(x.y()) ? z() : this.a();",

    strip(<<-MISC),
      for (var i = x ? y : z; i < 1; i++) {
        common.jQuery();
      }
    MISC

    strip(<<-MISC),
      if (foo) {
        debugger;
        (function () {
          this.zomg();
        })();
      }
    MISC

    strip(<<-MISC),
      options("tracejit");
      try {
      } catch (e) {
      }
    MISC

    strip(<<-MISC),
      function test() {
        var s1 = evalcx("lazy");
        expect = function () {
          test();
        }(s1);
      }
    MISC

    strip(<<-MISC),
      try {
        var a = new Array(1000000);
        var i = a.length;
        new i(eval("var obj = new Object(); obj.split = String.prototype.split;"));
      } catch (e) {
      }
    MISC

    strip(<<-MISC),
      test3();
      function test3() {
        try {
          eval("for(var y in [\\"\\", ''])");
        } catch (ex) {
        }
        new test3;
      }
    MISC

    strip(<<-MISC),
      foo(bar, function () {
        bar(baz);
        baz(bat);
      });
    MISC

    strip(<<-MISC),
      foo(bar, function () {
        bar(baz);
        baz(bat);
      }.baz);
    MISC

    strip(<<-MISC),
      foo(bar, function () {
        bar(baz);
        baz(bat);
      } + function () {
      });
    MISC

    [strip(<<-MISC), strip(<<-SHOULD)],
      function foo() {
        return /* returning */ bar;
      }
    MISC
      function foo() {
        return bar;
      }
    SHOULD

    [strip(<<-MISC), strip(<<-SHOULD)],
      function foo(param1 /* comment */, // comment
        param2 /* comment */) {

        paramCommentEwot;
     }
    MISC
      function foo(param1, param2) {
        paramCommentEwot;
      }
    SHOULD

    strip(<<-COMMENT),
      // foo
      function bar() {
        // zomg
        $.foo(function () {
          // zomg
          zomg;
        });
      }
    COMMENT

    strip(<<-SC),
      var EachArray = SC.Object.extend(SC.Array, {});
      var IS_OBSERVER = /^.+:(before|change)$/;
    SC

    "var x = y, z = (new Foo.Bar).baz(this, x, y);",

    strip(<<-SC),
      // foo
      require('sproutcore-metal/core');
      require('sproutcore-metal/platform');
      require('sproutcore-metal/utils');
      var o_create = SC.platform.create;
      var meta = SC.meta;
      var guidFor = SC.guidFor;
      var array_Slice = Array.prototype.slice;
      var metaPath = SC.metaPath;
      /**
       * bar
       */
      function actionSetFor(obj, eventName, target, writable) {
        var targetGuid = guidFor(target);
        return metaPath(obj, ['listeners', eventName, targetGuid], writable);
      }
      function targetSetFor(obj, eventName) {
        var listenerSet = meta(obj, false).listeners;
        if (!listenerSet) {
          return false;
        }
        return listenerSet[eventName] || false;
      }
      var SKIP_PROPERTIES = {__sc_source__: true};
      function invokeEvents(targetSet, params) {
        for (var targetGuid in targetSet) {
          if (SKIP_PROPERTIES[targetGuid]) {
            continue;
          }
          var actionSet = targetSet[targetGuid];
          for (var methodGuid in actionSet) {
            if (SKIP_PROPERTIES[methodGuid]) {
              continue;
            }
            var action = actionSet[methodGuid];
            if (!action) {
              continue;
            }
            var method = action.method;
            var target = action.target;
            if (!target) {
              target = params[0];
            }
            if ('string' === typeof method) {
              method = target[method];
            }
            var xform = action.xform;
            if (xform) {
              xform(target, method, params);
            } else {
              method.apply(target, params);
            }
          }
        }
      }
      function addListener(obj, eventName, target, method, xform) {
        sc_assert("You must pass at least an object and event name to SC.addListener", !!obj && !!eventName);
        if (!method && 'function' === typeof target) {
          method = target;
          target = null;
        }
        var actionSet = actionSetFor(obj, eventName, target, true), methodGuid = guidFor(method), ret;
        if (!actionSet[methodGuid]) {
          actionSet[methodGuid] = {
            target: target,
            method: method,
            xform: xform
          };
        } else {
          actionSet[methodGuid].xform = xform;
        }
        if ('function' === typeof obj.didAddListener) {
          obj.didAddListener(eventName, target, method);
        }
        return ret;
      }
      function removeListener(obj, eventName, target, method) {
        if (!method && 'function' === typeof target) {
          method = target;
          target = null;
        }
        var actionSet = actionSetFor(obj, eventName, target, true), methodGuid = guidFor(method);
        if (actionSet && actionSet[methodGuid]) {
          actionSet[methodGuid] = null;
        }
        if (obj && 'function' === typeof obj.didRemoveListener) {
          obj.didRemoveListener(eventName, target, method);
        }
      }
      function watchedEvents(obj) {
        var listeners = meta(obj, false).listeners, ret = [];
        if (listeners) {
          for (var eventName in listeners) {
            if (!SKIP_PROPERTIES[eventName] && listeners[eventName]) {
              ret.push(eventName);
            }
          }
        }
        return ret;
      }
      function sendEvent(obj, eventName) {
        sc_assert("You must pass an object and event name to SC.sendEvent", !!obj && !!eventName);
        if (obj !== SC && 'function' === typeof obj.sendEvent) {
          obj.sendEvent.apply(obj, array_Slice.call(arguments, 1));
        }
        var targetSet = targetSetFor(obj, eventName);
        if (!targetSet) {
          return false;
        }
        invokeEvents(targetSet, arguments);
        return true;
      }
      function hasListeners(obj, eventName) {
        var targetSet = targetSetFor(obj, eventName);
        if (!targetSet) {
          return false;
        }
        for (var targetGuid in targetSet) {
          if (SKIP_PROPERTIES[targetGuid] || !targetSet[targetGuid]) {
            continue;
          }
          var actionSet = targetSet[targetGuid];
          for (var methodGuid in actionSet) {
            if (SKIP_PROPERTIES[methodGuid] || !actionSet[methodGuid]) {
              continue;
            }
            return true;
          }
        }
        var set = metaPath(obj, ['listeners'], true);
        set[eventName] = null;
        return false;
      }
      function listenersFor(obj, eventName) {
        var targetSet = targetSetFor(obj, eventName), ret = [];
        if (!targetSet) {
          return ret;
        }
        var info;
        for (var targetGuid in targetSet) {
          if (SKIP_PROPERTIES[targetGuid] || !targetSet[targetGuid]) {
            continue;
          }
          var actionSet = targetSet[targetGuid];
          for (var methodGuid in actionSet) {
            if (SKIP_PROPERTIES[methodGuid] || !actionSet[methodGuid]) {
              continue;
            }
            info = actionSet[methodGuid];
            ret.push([info.target, info.method]);
          }
        }
        return ret;
      }
      SC.addListener = addListener;
      SC.removeListener = removeListener;
      SC.sendEvent = sendEvent;
      SC.hasListeners = hasListeners;
      SC.watchedEvents = watchedEvents;
      SC.listenersFor = listenersFor;
    SC

  ].each do |string, should|

    it "correctly parses and stringifies '#{string.inspect}' without compression - #{Digest::MD5.hexdigest(string)}" do
      should_equal_itself string, should || string
    end

  end

  [
    "sproutcore-core.js",
    "sproutcore-each-proxy.js",
    "sproutcore-native-array.js",
    "metamorph.js",
    "jquery-traversing.js",
    "jquery-attributes.js",
    "jquery-ajax.js",
    "sizzle.js",
    #"sproutcore.js",
    "jquery-1.6.js",
    "jquery-1.7.js"
  ].each do |file|
    contents = File.read(File.expand_path("../fixtures/#{file}", __FILE__))
    contents.force_encoding("BINARY") if contents.respond_to?(:force_encoding)
    it "correctly parses and stringifies #{file} for compression - #{Digest::MD5.hexdigest(contents)}" do
      should_match_compressed contents
    end
  end
end
