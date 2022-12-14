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
    $cookies.previousPage = "#!/listarimagenes";
    $window.location.href = "#!/modificarimagen";
  };

  $scope.delImage = function(image) {
    $cookies.actualImage = image;
    $cookies.previousPage = "#!/listarimagenes";
    $window.location.href = "#!/eliminarimagen";
  };

  $scope.downloadImage = function(image) {
    console.log(image);
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.href = REST_URL.DOWNLOAD_IMAGE + '?id=' + image.IdImage;
    a.download = image.FileName;
    a.click();
  };
}]);