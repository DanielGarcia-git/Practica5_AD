'use strict';

angular.module('practica5Client.buscarImagen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/BuscarImagen', {
    templateUrl: 'Views/BuscarImagen/BuscarImagen.html',
    controller: 'BuscarImagenCtrl'
  });
}])

.controller('BuscarImagenCtrl', [function() {

}]);