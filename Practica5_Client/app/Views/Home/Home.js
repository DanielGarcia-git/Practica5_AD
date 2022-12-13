'use strict';

var module = angular.module('practica5Client.home', ['ngRoute', 'ngResource', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'Views/Home/Home.html',
    controller: 'HomeCtrl'
  });
}]);

module.controller('HomeCtrl', ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
    alert($cookies.get('user'));
    
}]);