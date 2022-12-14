'use strict';

var module = angular.module('practica5Client.registrarImagen', ['ngRoute', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registrarimagen', {
    templateUrl: 'Views/RegistrarImagen/RegistrarImagen.html',
    controller: 'RegistrarImagenCtrl'
  });
}]);

module.factory('Image', ['$resource', function($resource) {
  return $resource(REST_URL.BASE, null, {
    register: {
      method: 'POST',
      url: REST_URL.REGISTER_IMAGE,
      headers: {'Content-Type': undefined},
      transformRequest: function (data) {
        var formData = new FormData();
        for (var key in data) {
          if (data[key] instanceof Date) formData.append(key, data[key].toLocaleDateString());
          formData.append(key, data[key]);
        }
        return formData;
      }
    }
  });
}]);

module.controller('RegistrarImagenCtrl', ['$scope', '$window', '$cookies', 'Image', function($scope, $window, $cookies, Image) {
  
  var user = $cookies.getObject('user');
  if (user != null) $scope.user = user;
  else $window.location.href = "#!/login";

  $scope.register_image = function() {
    $scope.image.file = document.getElementById('uploadImage').files[0];
    $scope.image.filename = $scope.image.file.name;
    $scope.image.creator = $scope.user.UserEmail;
    Image.register($scope.image).$promise.then(function(response) {
      if (response.success) $window.location.href = "#!/home";
      else {
        
      }
    }, function(error) {
      console.log(error);
    });
  };
}]);