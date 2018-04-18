var app = angular.module('evolucionalApp', ['ngRoute', 'chart.js'])
  .constant('apiUrls', {
    baseAPIUrl: localStorage.getItem("baseAPIUrl"),
  })
  .service('urls', function (apiUrls) {
    this.baseAPIUrl = apiUrls.baseAPIUrl;
  })
  .run(['$window', '$rootScope', '$interval', '$location', function ($window, $rootScope, $interval, $location) {

    $rootScope.go = function (path) {
      $location.path(path);
    };

    $rootScope.$on('$routeChangeSuccess', function () {
      var interval = setInterval(function () {
        if (document.readyState == 'complete') {
          $window.scrollTo(0, 0);
          clearInterval(interval);
        }
      }, 200);
    });

  }]);
