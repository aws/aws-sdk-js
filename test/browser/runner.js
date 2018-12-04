var system = require('system');

function waitFor(testFx, onReady, timeOutMillis) {
  var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 30000,
    start = new Date().getTime(),
    condition = false,
    interval = setInterval(function() {
      if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
        condition = (typeof(testFx) === "string" ? eval(testFx) : testFx());
      } else {
        if(!condition) {
          console.log("'waitFor()' timeout");
          setTimeout(function(){ phantom.exit(1); }, 0);
        } else {
          typeof(onReady) === "string" ? eval(onReady) : onReady();
          clearInterval(interval);
        }
      }
    }, 100);
};

var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.open(system.args[1] || 'test/browser/runner.html', function(status){
  if (status !== "success") {
    console.log("Unable to access network");
    setTimeout(function(){ phantom.exit(); }, 0);
  } else {
    var index = 0;
    function printStatus() {
      var items = page.evaluate(function() { return jsApiReporter.specs(); });
      for (; index < items.length; index++) {
        if (items[index] === 'pending') break;
        var item = '';
        switch (items[index].status) {
          case 'skipped': item = 'S';  break;
          case 'passed':  item = '.'; break;
          case 'failed':  item = 'X'; break;
        }
        system.stdout.write(item);
      }
    }

    var interval = setInterval(printStatus, 10);

    waitFor(function(){
      return page.evaluate(function(){
        return jsApiReporter.status() === 'done';
      });
    }, function(){
      clearInterval(interval);
      var exitCode = page.evaluate(function(){
        console.log('');
        console.log('');
        var list = document.body.querySelectorAll('.results > .failures > .spec-detail.failed');
        if (list && list.length > 0) {
          console.log('');
          console.log(list.length + ' test(s) FAILED:');
          for (i = 0; i < list.length; ++i) {
            var el = list[i],
              desc = el.querySelector('.description'),
              msg = el.querySelector('.result-message');
            console.log('');
            console.log(desc.innerText);
            console.log(msg.innerText);
            console.log('');
          }
          return 1;
        } else {
          console.log(document.body.querySelector('.alert > .bar').innerText);
          return 0;
        }
      });
      setTimeout(function() { phantom.exit(exitCode); }, 0);
    });
  }
});
