'use strict';

var module = angular.module('practica5Client.error', ['ngRoute', 'ngResource', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/error', {
    templateUrl: 'Views/Error/Error.html',
    controller: 'ErrorCtrl'
  });
}]);

module.controller('ErrorCtrl', ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
    
  var user = $cookies.getObject('user');
  if (user != null) $scope.user = user;
  else $window.location.href = "#!/login";

  var data = $cookies.get('error');

  $scope.error = {};
  $scope.error.title = data.title_response;
  $scope.error.message = data.text_response;

  $scope.returnPage = function() {
    $window.location.href = $cookies.get('previousPage');
  };
}]);