'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('practica5Client', [
  'ngResource',
  'ngRoute',
  'ngCookies',
  'practica5Client.login',
  'practica5Client.home',
  'practica5Client.registrarImagen',
  'practica5Client.buscarImagen'
]);

myApp.config(['$locationProvider', '$routeProvider', '$resourceProvider', function($locationProvider, $routeProvider, $resourceProvider) {
  $locationProvider.hashPrefix('!');
  $resourceProvider.defaults.stripTrailingSlashes = false;
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
