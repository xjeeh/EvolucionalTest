angular.module('evolucionalApp')
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider     
            .when('/student', {
                templateUrl: 'views/student.html',
                controller: 'mainController'
            })
            .when('/teacher', {
                templateUrl: 'views/teacher.html',
                controller: 'mainController'
            })            

            .otherwise({
                redirectTo: '/student',
                controller: 'mainController',
            });
    }])
