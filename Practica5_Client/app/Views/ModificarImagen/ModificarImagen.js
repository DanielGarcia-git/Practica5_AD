'use strict';

var module = angular.module('practica5Client.modificarImagen', ['ngRoute', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/modificarimagen', {
    templateUrl: 'Views/ModificarImagen/ModificarImagen.html',
    controller: 'ModificarImagenCtrl'
  });
}]);

module.controller('ModificarImagenCtrl', ['$scope', '$window', '$cookies', 'Image', function($scope, $window, $cookies, Image) {
  
    var user = $cookies.getObject('user');
    if (user != null) $scope.user = user;
    else $window.location.href = "#!/login";
  
}]);
