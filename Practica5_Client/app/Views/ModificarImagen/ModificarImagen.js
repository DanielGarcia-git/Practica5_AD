'use strict';

var module = angular.module('practica5Client.modificarImagen', ['ngRoute', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/modificarimagen', {
    templateUrl: 'Views/ModificarImagen/ModificarImagen.html',
    controller: 'ModificarImagenCtrl'
  });
}]);

module.controller('ModificarImagenCtrl', ['$scope', '$window', '$cookies', 'Image', function($scope, $window, $cookies, Image) {
  
  var user = $cookies.getObject('user');
  if (user != null) $scope.user = user;
  else $window.location.href = "#!/login";

  $scope.image = $cookies.actualImage;
  let dateParts = $cookies.actualImage.CreationDate.split('/');
  $scope.image.CreationDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

  $scope.modify = function() {
    var file = document.getElementById('uploadImage').files[0];
    if (file == undefined || $scope.image.FileName == file.name) {
      var image = new Image();
      image.id = $scope.image.IdImage;
      image.title = $scope.image.Title;
      image.description = $scope.image.Description;
      image.keywords = $scope.image.Keywords;
      image.author = $scope.image.Author;
      image.creator = $scope.image.Creator;
      image.capture = $scope.image.CreationDate;
      image.$modify().then(function(response) {
        if (response.success) $window.location.href = $cookies.previousPage;
        else {
          $cookies.putObject('error', response);
          $cookies.put('previousPage', "#!/modificarimagen");
          $window.location.href = "#!/error";
        }
      }, function(error) {
        console.log(error);
      });
    } else {
      
    }
    
  };
}]);
