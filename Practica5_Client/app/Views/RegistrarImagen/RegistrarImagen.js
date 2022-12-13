'use strict';

var module = angular.module('practica5Client.registrarImagen', ['ngRoute', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registrarimagen', {
    templateUrl: 'Views/RegistrarImagen/RegistrarImagen.html',
    controller: 'RegistrarImagenCtrl'
  });
}]);

module.controller('RegistrarImagenCtrl', ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
  

  var user = $cookies.getObject('user');
  if (user != null) {
    $scope.user = user;
  }
  else {
    $window.location.href = "#!/login";
  }
}]);