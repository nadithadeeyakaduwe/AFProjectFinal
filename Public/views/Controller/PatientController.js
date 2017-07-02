var app = angular.module('PatientModule', ['ngRoute']);

app.controller('patient',

    function getpatient($scope,$http) {
      //  console.log("final is printing");

        var refresh = function () {

            $http.get('/HIS/patient').then(function (response) {
                $scope.patientlist = response.data;
                $scope.patient = "";
            });
        };

        refresh();


        $scope.addpatient = function () {
            $http.post('/HIS/patient',$scope.patient);
            refresh();
        }

        $scope.removePatient = function (id) {
            $http.delete('/HIS/patient/'+id);
            refresh();
        }


        $scope.edit = function (id) {
                console.log(id);
            $http.get('/HIS/patients/' +id).then(function (respose) {
               $scope.patient = respose.data;
            })
        }


        $scope.overview = function (id) {
                console.log(id);
            $http.get('/HIS/patients/' +id).then(function (respose) {
               $scope.patient = respose.data;
            })
        }



        $scope.updatepatient = function (id) {
            $http.put('/HIS/patient/' +id , $scope.patient);
            refresh();
        }


        $scope.searchByHin = function(hin){
          $http.get('/HIS/patient/' +hin).then(function (respose) {
             $scope.patientlist = respose.data;
          })
        }




    });

    app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
      $routeProvider.when('/HIS/patient',{templateUrl: 'views/index.html'});
      $routeProvider.otherwise({redirectTo: '/'});

      $locationProvider.html5Mode({enabled: true, requireBase: false});

    }])
