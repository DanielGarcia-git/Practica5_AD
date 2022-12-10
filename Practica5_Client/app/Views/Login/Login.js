'use strict';

var module = angular.module('practica5Client.login', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'Views/Login/Login.html',
    controller: 'LoginCtrl'
  });
}])

module.controller('LoginCtrl', function($scope) {
  $scope.state = {};
  $scope.state.login = true;
  $scope.state.sigin = false;
  $scope.state.actualPage = "login";

  $scope.ShowLogIn = function() {
    $scope.state.login = !$scope.state.login;
    $scope.state.sigin = !$scope.state.login;
  };
});
