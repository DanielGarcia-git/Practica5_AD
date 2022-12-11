'use strict';

var module = angular.module('practica5Client.login', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'Views/Login/Login.html',
    controller: 'LoginCtrl'
  });
}])

module.controller('LoginCtrl', function($scope, $http, $q) {

  inicializeScopeVar($scope);
  inicializeScopeFunctions($scope);

  $scope.login = function() {
    $http.post(REST_URL.LOGIN, {username: $scope.user.email, password: $scope.user.password})
    $q.resolve(function(data) {
      console.log(data);
    })
  };

  $scope.sigin = function() {
    var res = $http.post(REST_URL.REGISTER, {username: $scope.user.email, password: $scope.user.password, name: $scope.user.name});

  };
  
});

function inicializeScopeVar($scope) {
  $scope.state = {};
  $scope.state.login = true;
  $scope.state.sigin = false;
  $scope.state.actualPage = "login";
}

function inicializeScopeFunctions($scope) {

  $scope.ShowLogIn = function() {
    $scope.state.login = !$scope.state.login;
    $scope.state.sigin = !$scope.state.login;
  };
}
