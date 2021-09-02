$(document).ready(function() {
  $('#node-version-notice').slideDown();
  $('#node-version-notice .alert-dismiss').click(function() {
    $(this).parent().slideUp();
  });
});
