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

// home.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
//   $routeProvider.when('/HIS/patient',{templateUrl: 'views/index.html'});
//   $routeProvider.otherwise({redirectTo: '/'});
//
//   $locationProvider.html5Mode({enabled: true, requireBase: false});

//}])
