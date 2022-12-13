'use strict';

var module = angular.module('practica5Client.buscarImagen', ['ngRoute', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buscarimagen', {
    templateUrl: 'Views/BuscarImagen/BuscarImagen.html',
    controller: 'BuscarImagenCtrl'
  });
}]);

module.controller('BuscarImagenCtrl', ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
  
  var user = $cookies.getObject('user');
  if (user != null) {
    $scope.user = user;
  }
  else {
    $window.location.href = "#!/login";
  }

  $scope.state = {};
  $scope.state.simpleSearch = true;
  $scope.state.avanceSearch = false;

  $scope.ShowSimpleSearch = function() {
    $scope.state.simpleSearch = !$scope.state.simpleSearch;
    $scope.state.avanceSearch = !$scope.state.simpleSearch;
  };
  
  $scope.simple_search = function() {
    
  };

  $scope.avance_search = function() {

  };
}]);