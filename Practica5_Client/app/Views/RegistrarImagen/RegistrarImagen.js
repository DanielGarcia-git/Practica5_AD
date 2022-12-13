'use strict';

angular.module('practica5Client.registrarImagen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registrarimagen', {
    templateUrl: 'Views/RegistrarImagen/RegistrarImagen.html',
    controller: 'RegistrarImagenCtrl'
  });
}])

.controller('RegistrarImagenCtrl', [function() {

}]);