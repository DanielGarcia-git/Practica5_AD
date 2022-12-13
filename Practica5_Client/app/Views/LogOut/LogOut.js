'use strict';

var module = angular.module('practica5Client.logout', ['ngRoute', 'ngResource', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logout', {
    templateUrl: 'Views/LogOut/LogOut.html',
    controller: 'LogOutCtrl'
  });
}]);

module.controller('LogOutCtrl', ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
  alert("Holaaa");
  $cookies.put('user', null);
  $window.location.href = "#!/login";
}]);