'use strict';

angular.module('practica5Client.registrarImagen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistrarImagen', {
    templateUrl: 'RegistrarImagen/RegistrarImagen.html',
    controller: 'RegistrarImagenCtrl'
  });
}])

.controller('RegistrarImagenCtrl', [function() {

}]);