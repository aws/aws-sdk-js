var memoizedProperty = require('../util').memoizedProperty;

function Collection(iterable, options, fn, nameTr) {
  nameTr = nameTr || String;
  var self = this;

  for (var id in iterable) {
    if (iterable.hasOwnProperty(id)) {
      (function(name) {
        memoizedProperty(self, nameTr(name), function() {
          return fn(name, iterable[name]);
        });
      })(id);
    }
  }
}

module.exports = Collection;
