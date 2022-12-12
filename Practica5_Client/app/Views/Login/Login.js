'use strict';

var module = angular.module('practica5Client.login', ['ngRoute', 'ngResource']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'Views/Login/Login.html',
    controller: 'LoginCtrl'
  });
}]);

module.factory('User', ['$resource', function($resource) {
  return $resource(REST_URL.BASE, {}, {
    login: {
      method: 'GET',
      url: REST_URL.LOGIN,
      params: {'username': '@username', 'password': '@password'}
    },
    save: {
      method: 'POST',
      url: REST_URL.REGISTER,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }
  });
}]);

module.controller('LoginCtrl', ['$scope', 'User', function($scope, User) {

  inicializeScopeVar($scope);
  inicializeScopeFunctions($scope);

  $scope.login = function() {
    var password = encryptPassword($scope.user.password);
    User.login({'username': $scope.user.email, 'password': password}).$promise.then(function(response) {
      console.log(response);
    }, function(error) {
      console.log(error);
    });
  };

  $scope.sigin = function() {
    var password = encryptPassword($scope.user.password);
    var user = new User();
    user.$save({username: $scope.user.email, password: password, name: $scope.user.name}).then(function(response) {
      console.log(response);
    }, function(error) {
      console.log(error);
    });

  };
  
}]);

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

function encryptPassword(password) {
  return CryptoJS.MD5(password);
}
