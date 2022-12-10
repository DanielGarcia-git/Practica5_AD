'use strict';

// Declare app level module which depends on views, and core components
angular.module('practica5Client', [
  'ngRoute',
  'practica5Client.login',
  'practica5Client.registrarImagen',
  'practica5Client.buscarImagen'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
