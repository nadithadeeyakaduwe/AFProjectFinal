var home = angular.module('homeModule', ['ngRoute']);

home.controller('home',
    function GetHome($scope, $http) {


      $scope.refresh = function () {

          $http.get('/HIS/patient').then(function (response) {
              console.log("clicked");
          });
      };
    

    }
)
