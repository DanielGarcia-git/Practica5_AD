'use strict';

var module = angular.module('practica5Client.eliminarImagen', ['ngRoute', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/eliminarimagen', {
    templateUrl: 'Views/EliminarImagen/EliminarImagen.html',
    controller: 'EliminarImagenCtrl'
  });
}]);

module.controller('EliminarImagenCtrl', ['$scope', '$window', '$cookies', 'Image', function($scope, $window, $cookies, Image) {

  var user = $cookies.getObject('user');
  if (user != null) $scope.user = user;
  else $window.location.href = "#!/login";

  $scope.image = $cookies.actualImage;
  let dateParts = $cookies.actualImage.CreationDate.split('/');
  $scope.image.CreationDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

  $scope.delete = function() {
    var image = new Image();
    image.id = $scope.image.IdImage;
    image.$delete().then(function(response) {
      if (response.success) $window.location.href = $cookies.previousPage;
      else {
        $cookies.puObject('error', response);
        $cookies.put('previousPage', "#!/eliminarimagen");
        $window.location.href = "#!/error";
      }
    }, function(error) {
      console.log(error);
    });
  };

  $scope.cancel = function() {
    $window.location.href = $cookies.previousPage;
  };
}]);
