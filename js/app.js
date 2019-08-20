window.jqLdsIo.init({
    appId: 'TEST_ID_9e78b54c44a8746a5727c972'
  , appVersion: '1.0.0'

    // some function to open your login dialog
    // and returns a promise when login is complete
  , invokeLogin: MyAppLogin.invokeLogin
  }).then(function (jqLdsIo.config) {
    return jqLdsIo.session.backgroundLogin().then(function () {

      // fade in your application (with bootstrap)
      // <body class="fade">
      $('body').addClass('id');

      // show a message if we're in developer mode (with bootstrap)
      // <div class="js-developer-mode alert alert-info">You're in Dev Mode!</div>
      if (jqLdsIo.config.developerMode) {
        $('.js-developer-mode').show();
      }
    });
  });
}]);