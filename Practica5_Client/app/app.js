'use strict';

var myApp = angular.module('practica5Client', [
  'ngResource',
  'ngRoute',
  'ngCookies',
  'practica5Client.login',
  'practica5Client.logout',
  'practica5Client.home',
  'practica5Client.registrarImagen',
  'practica5Client.listarImagenes',
  'practica5Client.buscarImagenFilter',
  'practica5Client.buscarImagenDataBase',
  'practica5Client.error',
  'practica5Client.modificarImagen',
  'practica5Client.eliminarImagen'
]);

myApp.config(['$locationProvider', '$routeProvider', '$resourceProvider', function($locationProvider, $routeProvider, $resourceProvider) {
  $locationProvider.hashPrefix('!');
  $resourceProvider.defaults.stripTrailingSlashes = false;
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
