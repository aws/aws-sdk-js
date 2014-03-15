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
          phantom.exit(1);
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
    phantom.exit();
  } else {
    var index = 0;
    function printStatus() {
      var items = page.evaluate(function() {
        var symbols = document.body.querySelectorAll('.symbolSummary li');
        if (!symbols) return null;

        var classes = [];
        for (var i = 0; i < symbols.length; i++) {
          classes.push(symbols[i].className);
        }
        return classes;
      });

      if (!items) return;
      for (; index < items.length; index++) {
        if (items[index] === 'pending') break;
        var item = '';
        switch (items[index]) {
          case 'skipped': item = '';  break;
          case 'passed':  item = '.'; break;
          case 'failed':  item = 'X'; break;
        }
        system.stdout.write(item);
      }
    }

    var interval = setInterval(printStatus, 10);

    waitFor(function(){
      return page.evaluate(function(){
        return document.body.querySelector('.symbolSummary .pending') === null;
      });
    }, function(){
      clearInterval(interval);
      var exitCode = page.evaluate(function(){
        console.log('');
        console.log('');
        var list = document.body.querySelectorAll('.results > #details > .specDetail.failed');
        if (list && list.length > 0) {
          console.log('');
          console.log(list.length + ' test(s) FAILED:');
          for (i = 0; i < list.length; ++i) {
            var el = list[i],
              desc = el.querySelector('.description'),
              msg = el.querySelector('.resultMessage.fail');
            console.log('');
            console.log(desc.innerText);
            console.log(msg.innerText);
            console.log('');
          }
          return 1;
        } else {
          console.log(document.body.querySelector('.alert > .passingAlert.bar').innerText);
          return 0;
        }
      });
      phantom.exit(exitCode);
    });
  }
});
