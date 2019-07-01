require "parsejs"
require "pry"

describe "scope lookup" do
  def should_be_unavailable(name, string)
    ast = ParseJS.parse("(function() { #{string} })")
    ParseJS::AST::ProcessVariables.process(ast)

    if ast.available_variable?(name)
      require "pp"
      pp ast
    end

    ast.available_variable?(name).should == false
  end

  def should_be_available(name, string)
    ast = ParseJS.parse("(function() { #{string} })")
    ParseJS::AST::ProcessVariables.process(ast)

    unless ast.available_variable?(name)
      require "pp"
      pp ast
    end

    ast.available_variable?(name).should == true
  end

  it "knows when variables are unavailable" do
    should_be_unavailable "x", "x = 1;"
    should_be_unavailable "x", "var y = x;"
    should_be_unavailable "x", "var y = x.y;"
    should_be_unavailable "x", "var y = x.y.z;"
    should_be_unavailable "x", "x();"
    should_be_unavailable "x", "x.y();"
    should_be_unavailable "x", "y(x);"
    should_be_unavailable "x", "y(x.y);"
    should_be_unavailable "x", "y(x.y());"
    should_be_unavailable "x", "y(q.y(x));"
    should_be_unavailable "x", "y(q.y(x.y));"
    should_be_unavailable "x", "new x();"
    should_be_unavailable "x", "new x.y();"
    should_be_unavailable "x", "new y(x);"
    should_be_unavailable "x", "new y(x.z);"
    should_be_unavailable "x", "var y = [x];"
    should_be_unavailable "x", "var y = [,x,];"
    should_be_unavailable "x", "var y = [x = 1];"
    should_be_unavailable "x", "var y = { a: x };"
    should_be_unavailable "x", "var y = { a: x.y };"
    should_be_unavailable "x", "var y = { a: x() };"
    should_be_unavailable "x", "(x);"
    should_be_unavailable "x", "(y, x);"
    should_be_unavailable "x", "x++;"
    should_be_unavailable "x", "(x = 1)++;"
    should_be_unavailable "x", "delete x;"
    should_be_unavailable "x", "+x;"
    should_be_unavailable "x", "!x;"
    should_be_unavailable "x", "void x;"
    should_be_unavailable "x", "x * 1;"
    should_be_unavailable "x", "1 * x;"
    should_be_unavailable "x", "x << 1;"
    should_be_unavailable "x", "x < 1;"
    should_be_unavailable "x", "x instanceof y;"
    should_be_unavailable "x", "y instanceof x;"
    should_be_unavailable "x", "x in y;"
    should_be_unavailable "x", "y in x;"
    should_be_unavailable "x", "x == y;"
    should_be_unavailable "x", "y == x;"
    should_be_unavailable "x", "x === y;"
    should_be_unavailable "x", "y === x;"
    should_be_unavailable "x", "x != y;"
    should_be_unavailable "x", "y != x;"
    should_be_unavailable "x", "x & y;"
    should_be_unavailable "x", "y & x;"
    should_be_unavailable "x", "x ? y : z;"
    should_be_unavailable "x", "y ? x : z;"
    should_be_unavailable "x", "z ? y : x;"
    should_be_unavailable "x", "x.y ? y : z;"
    should_be_unavailable "x", "new x.y() ? y : z;"
    should_be_unavailable "x", "x += 1;"
    should_be_unavailable "x", "x &= 1;"
    should_be_unavailable "x", "y += x;"
    should_be_unavailable "x", "y &= x;"
    should_be_unavailable "x", "y &= x.y;"
    should_be_unavailable "x", "y &= (y, x);"
    should_be_unavailable "x", "if (x) { true; }"
    should_be_unavailable "x", "if (y) { x; }"
    should_be_unavailable "x", "for (x in y) { var z = y[x]; }"
    should_be_unavailable "x", "for (x=0; x<arr.length; x++) { var z = arr[x]; }"
    should_be_unavailable "x", "while(x) { y; }"
    should_be_unavailable "x", "while(x = 1) { y; }"
    should_be_unavailable "x", "while(x.y) { y; }"
    should_be_unavailable "x", "do { x; } while(y)"
    should_be_unavailable "x", "do { y; } while(x)"
    should_be_unavailable "x", "return x;"
    should_be_unavailable "x", "return x = 1;"
    should_be_unavailable "x", "with(x) { y; }"
    should_be_unavailable "x", "with(x = 1) { y; }"
    should_be_unavailable "x", "with(x.y = 1) { y; }"
    should_be_unavailable "x", "switch(x) { case y: break; }"
    should_be_unavailable "x", "switch(y) { case x: break; }"
    should_be_unavailable "x", "throw x;"

    should_be_available "x", "var x = 1;"
    should_be_available "x", "var x = 1; var y = function() { x = 2; };"
    should_be_available "x", "for (x in y) { var z = y[x]; }; var x;"
    should_be_available "x", "for (var x in y) { var z = y[x]; };"
    should_be_available "x", "for (var x=0; x<arr.length; x++) { var z = arr[x]; }"
    should_be_available "x", "try {} catch(x) {}"
  end
end
