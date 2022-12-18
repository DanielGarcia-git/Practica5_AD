'use strict';

var module = angular.module('practica5Client.buscarImagenFilter', ['ngRoute', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buscarimagenfilter', {
    templateUrl: 'Views/BuscarImagen_Filter/BuscarImagen_Filter.html',
    controller: 'BuscarImagenFilterCtrl'
  });
}]);

module.controller('BuscarImagenFilterCtrl', ['$scope', '$window', '$cookies', 'Image', function($scope, $window, $cookies, Image) {
  var user = $cookies.getObject('user');
  if (user != null) $scope.user = user;
  else $window.location.href = "#!/login";

  $scope.showImages = [];

  Image.list().$promise.then(function(response) {
    $scope.showImages = response.data;
  }, function(error) {
    console.log(error);
  });

  $scope.modImage = function(image) {
    $cookies.actualImage = image;
    $cookies.previousPage = "#!/buscarimagenfilter";
    $window.location.href = "#!/modificarimagen";
  };

  $scope.delImage = function(image) {
    $cookies.actualImage = image;
    $cookies.previousPage = "#!/buscarimagenfilter";
    $window.location.href = "#!/eliminarimagen";
  };

  $scope.downloadImage = function(image) {
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.href = REST_URL.DOWNLOAD_IMAGE + '?id=' + image.IdImage;
    a.download = image.FileName;
    a.click();
  };
}]);