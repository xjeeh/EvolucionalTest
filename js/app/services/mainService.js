angular.module('evolucionalApp').factory('mainService', function ($http, $q, urls) {

  function mainService() {

    var self = this;

    self.GetStudents = function () {
      var deferred = $q.defer();
      $http.get('../../../data/students.json')
        .then(function successCallback(response) {
          deferred.resolve(response.data);
        },
        function errorCallback(response) {
          deferred.reject("error");
        });

      return deferred.promise;
    };

    self.GetClasses = function () {
      var deferred = $q.defer();
      $http.get('../../../data/classes.json')
        .then(function successCallback(response) {
          deferred.resolve(response.data.classes);
        },
        function errorCallback(response) {
          deferred.reject("error");
        });

      return deferred.promise;
    };  
    
    self.GetDegrees = function () {
      var deferred = $q.defer();
      $http.get('../../../data/degrees.json')
        .then(function successCallback(response) {
          deferred.resolve(response.data);
        },
        function errorCallback(response) {
          deferred.reject("error");
        });

      return deferred.promise;
    };      


  }

  return new mainService();
});
