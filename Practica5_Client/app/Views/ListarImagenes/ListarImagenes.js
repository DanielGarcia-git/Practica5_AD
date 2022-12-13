'use strict';

var module = angular.module('practica5Client.listarImagenes', ['ngRoute', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listarimagenes', {
    templateUrl: 'Views/ListarImagenes/ListarImagenes.html',
    controller: 'ListarImagenesCtrl'
  });
}]);

module.controller('ListarImagenesCtrl', ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
    
  var user = $cookies.getObject('user');
  if (user != null) {
    $scope.user = user;
  }
  else {
    $window.location.href = "#!/login";
  }
}]);