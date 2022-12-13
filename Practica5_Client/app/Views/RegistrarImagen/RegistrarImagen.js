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
      transformRequest: function (data, headersGetter) {
        var str = [];
        for (var d in data)
            str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return str.join("&");
      }
    }
  });
}]);

module.controller('RegistrarImagenCtrl', ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
  

  var user = $cookies.getObject('user');
  if (user != null) {
    $scope.user = user;
  }
  else {
    $window.location.href = "#!/login";
  }
}]);