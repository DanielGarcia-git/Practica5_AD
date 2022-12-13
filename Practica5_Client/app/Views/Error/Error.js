'use strict';

var module = angular.module('practica5Client.error', ['ngRoute', 'ngResource', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/error', {
    templateUrl: 'Views/Error/Error.html',
    controller: 'ErrorCtrl'
  });
}]);

module.controller('ErrorCtrl', ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {

}]);