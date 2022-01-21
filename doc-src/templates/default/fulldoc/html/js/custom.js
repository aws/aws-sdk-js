hljs.initHighlightingOnLoad();

$(document).ready(function() {
  var trueValue = 'true';
  var nodeVersionNoticeKey = 'nodeVersionNoticeDismissed';
  var dismissNodeDepNotice = localStorage.getItem(nodeVersionNoticeKey);

  if (dismissNodeDepNotice !== trueValue) {
    $('#node-version-notice').slideDown();
    $('#node-version-notice .alert-dismiss').click(function() {
      localStorage.setItem(nodeVersionNoticeKey, trueValue);
      $(this).parent().slideUp();
    });
  }
});
