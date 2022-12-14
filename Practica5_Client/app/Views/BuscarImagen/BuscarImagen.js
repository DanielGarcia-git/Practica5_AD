'use strict';

var module = angular.module('practica5Client.buscarImagen', ['ngRoute', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buscarimagen', {
    templateUrl: 'Views/BuscarImagen/BuscarImagen.html',
    controller: 'BuscarImagenCtrl'
  });
}]);

module.controller('BuscarImagenCtrl', ['$scope', '$window', '$cookies', 'Image', function($scope, $window, $cookies, Image) {
  
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
    $cookies.previousPage = "#!/buscarimagen";
    $window.location.href = "#!/modificarimagen";
  };

  $scope.delImage = function(image) {
    $cookies.actualImage = image;
    $cookies.previousPage = "#!/buscarimagen";
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