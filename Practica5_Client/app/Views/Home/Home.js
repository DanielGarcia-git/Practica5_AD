'use strict';

var module = angular.module('practica5Client.home', ['ngRoute', 'ngResource', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'Views/Home/Home.html',
    controller: 'HomeCtrl'
  });
}]);

module.controller('HomeCtrl', ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
    
  var user = $cookies.getObject('user');
  console.log(user);
  if (user != null) {
    $scope.user = user;
  }
  else {
    $window.location.href = "#!/login";
  }

}]);