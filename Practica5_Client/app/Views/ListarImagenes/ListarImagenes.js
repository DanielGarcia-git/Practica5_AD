'use strict';

var module = angular.module('practica5Client.listarImagenes', ['ngRoute', 'ngCookies', 'ngResource']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listarimagenes', {
    templateUrl: 'Views/ListarImagenes/ListarImagenes.html',
    controller: 'ListarImagenesCtrl'
  });
}]);

module.controller('ListarImagenesCtrl', ['$scope', '$window', '$cookies', 'Image', function($scope, $window, $cookies, Image) {
    
  var user = $cookies.getObject('user');
  if (user != null) $scope.user = user;
  else $window.location.href = "#!/login";

  $scope.showImages = [];

  Image.list().$promise.then(function(response) {
    console.log(JSON.parse(response.data));
    $scope.showImages = JSON.parse(response.data);
  }, function(error) {
    console.log(error);
  });

  $scope.modImage = function(image) {
    $cookies.actualImage = image;
    $window.location.href = "#!/login"
  };

  $scope.delImage = function(image) {

  };

  $scope.downloadImage = function(image) {

  };
}]);