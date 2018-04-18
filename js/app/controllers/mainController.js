angular.module('evolucionalApp').controller("mainController", function ($scope, $rootScope, mainService, urls) {

  $scope.model = { students: [], classes: [], degrees: [] };

  $scope.filter = {
    degreeName: '',
    className: ''
  };

  $scope.labels = ["Ensino Fundamental", "1° ano do ensino médio", "2° ano ensino médio", "3° ano do ensino médio", "Cursinho", "4º ano do ensino fundamental", "5º ano do ensino fundamental", "6º ano do ensino fundamental", "7º ano do ensino fundamental", "8º ano do ensino fundamental", "9º ano do ensino fundamental", "Estudo em casa", "Outros"];
  $scope.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  $scope.student = {
    isEditing: false,
    currentEditing: null,
    startEdit: function (item) {
      $scope.student.isEditing = true;
      $scope.student.currentEditing = angular.copy(item);
    },
    finishEdit: function (item) {
      angular.forEach($scope.model.students, function (student, index) {
        if (student.id == item.id)
          $scope.model.students[index] = $scope.student.currentEditing;
      });
      $scope.student.isEditing = false;
    },
    create: function () {
      for (var i = 1; i <= 300; i++) {

        var newDegree = $scope.model.degrees[Math.floor(Math.random() * $scope.model.degrees.length)];
        var newClass = $scope.model.classes[Math.floor(Math.random() * $scope.model.classes.length)];
        var newStudent = {
          id: $scope.model.students[$scope.model.students.length - 1].id + 1,
          ra: $scope.model.students[$scope.model.students.length - 1].ra + 1,
          name: 'student' + i,
          degreeId: newDegree.id,
          degreeName: newDegree.name,
          classId: newClass.id,
          className: newClass.name,
        }

        $scope.model.students.push(newStudent);
      }
      $scope.student.updateChart();
    },
    updateChart: function () {
      angular.forEach($scope.model.students, function (item) {
        $scope.data[item.degreeId] += 1;
      })
    }
  }

  $scope.getStudents = function () {
    mainService.GetStudents().then(
      function (response) {
        $scope.model.students = response;
        $scope.getClasses();
        $scope.getDegrees();
      },
      function (errorMessage) {
        console.log(errorMessage);
      })
      .finally(function () {
        $scope.student.updateChart();
      });
  };

  $scope.getClasses = function () {
    mainService.GetClasses().then(
      function (response) {
        $scope.model.classes = response;
        angular.forEach($scope.model.students, function (student) {
          student.className = $scope.model.classes[student.classId].name;
        })
      },
      function (errorMessage) {
        console.log(errorMessage);
      });
  };

  $scope.getDegrees = function () {
    mainService.GetDegrees().then(
      function (response) {
        $scope.model.degrees = response;
        angular.forEach($scope.model.students, function (student) {
          angular.forEach($scope.model.degrees, function (degree) {
            if (student.degreeId == degree.id)
              student.degreeName = degree.name;
          })
        })
      },
      function (errorMessage) {
        console.log(errorMessage);
      });
  };

});
