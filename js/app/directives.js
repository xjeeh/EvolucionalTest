angular.module('evolucionalApp')

  .directive('staticInclude', function ($http, $templateCache, $compile) {
    return function (scope, element, attrs) {
      var templatePath = attrs.staticInclude;
      $http.get(templatePath, { cache: $templateCache }).then(function (response) {
        var contents = element.html(response).contents();
        $compile(contents)(scope);
      });
    };
  })
