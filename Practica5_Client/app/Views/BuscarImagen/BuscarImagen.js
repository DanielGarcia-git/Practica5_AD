'use strict';

angular.module('practica5Client.buscarImagen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buscarimagen', {
    templateUrl: 'Views/BuscarImagen/BuscarImagen.html',
    controller: 'BuscarImagenCtrl'
  });
}])

.controller('BuscarImagenCtrl', [function() {

}]);