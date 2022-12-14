'use strict';

var module = angular.module('practica5Client.registrarImagen', ['ngRoute', 'ngCookies', 'ngResource']);

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
    },
    list: {
      method: 'GET',
      url: REST_URL.LIST_IMAGE
    },
    delete: {
      method: 'POST',
      url: REST_URL.DELETE_IMAGE,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      transformRequest: function (data, headersGetter) {
        var str = [];
        for (var d in data) str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return str.join("&");
      }
    },
    modify: {
      method: 'POST',
      url: REST_URL.MODIFY_IMAGE,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      transformRequest: function (data, headersGetter) {
        var str = [];
        for (var d in data) {
          if (data[d] instanceof Date) str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d].toLocaleDateString()));
          else str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        }
        return str.join("&");
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