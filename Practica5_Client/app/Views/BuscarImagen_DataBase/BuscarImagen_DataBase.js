'use strict';

var module = angular.module('practica5Client.buscarImagenDataBase', ['ngRoute', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buscarimagendatabase', {
    templateUrl: 'Views/BuscarImagen_DataBase/BuscarImagen_DataBase.html',
    controller: 'BuscarImagenDataBaseCtrl'
  });
}]);

module.controller('BuscarImagenDataBaseCtrl', ['$scope', '$window', '$cookies', 'Image', function($scope, $window, $cookies, Image) {
  var user = $cookies.getObject('user');
  if (user != null) $scope.user = user;
  else $window.location.href = "#!/login";

  $scope.showImages = [];
  $scope.disable = {
    title: false,
    author: false,
    creationdate: false,
    keywords: false,
    search: true
  };

  $scope.titleChange = function() {
    $scope.disable = {
      title: false,
      author: true,
      creationdate: true,
      keywords: true,
      search: false
    };
  };

  $scope.authorChange = function() {
    $scope.disable = {
      title: true,
      author: false,
      creationdate: true,
      keywords: true,
      search: false
    };
  };

  $scope.creationdateChange = function() {
    $scope.disable = {
      title: true,
      author: true,
      creationdate: false,
      keywords: true,
      search: false
    };
  };

  $scope.keywordsChange = function() {
    $scope.disable = {
      title: true,
      author: true,
      creationdate: true,
      keywords: false,
      search: false
    };
  };

  $scope.reset = function() {
    $scope.disable = {
      title: false,
      author: false,
      creationdate: false,
      keywords: false,
      search: true
    };
    $scope.search = {};
    $scope.showImages = [];
  }

  $scope.searchImage = async function() {
    console.log($scope.search);
    if (!$scope.disable.title && $scope.search.Title != '') {
      await Image.searchByTitle({title: $scope.search.Title}, function(response) {
        console.log(response.data);

        if (response.success) {
          for (var i in response.data) $scope.images.push(response.data[i]);
          $scope.wait =  false
        }
        else {
          $cookies.putObject('error', response);
          $cookies.put('previousPage', "#!/buscarimagendatabase");
          $window.location.href = "#!/error";
        }
      }, function(error) {
          console.log(error);
      });
    } else if (!$scope.disable.author && $scope.search.Author != '') {
      await Image.searchByAuthor({author: $scope.search.Author}, function(response) {
        if (response.success) for (var i in response.data) $scope.images.push(response.data[i]);
        else {
          $cookies.putObject('error', response);
          $cookies.put('previousPage', "#!/buscarimagendatabase");
          $window.location.href = "#!/error";
        }
      }, function(error) {
          console.log(error);
      });
    }
    if ($scope.disable.keywords && $scope.search.Keywords != '') {
      await Image.searchByKeywords({keywords: $scope.search.Keywords}, function(response) {
        if (response.success) for (var i in response.data) $scope.images.push(response.data[i]);
        else {
          $cookies.putObject('error', response);
          $cookies.put('previousPage', "#!/buscarimagendatabase");
          $window.location.href = "#!/error";
        }
      }, function(error) {
          console.log(error);
      });
    }
    if ($scope.disable.creationdate && $scope.search.CreationDate != null) {
      var formatedDate = $scope.search.CreationDate.toLocaleDateString();
      await Image.searchByCreationDate({creationdate: formatedDate}, function(response) {
        if (response.success) for (var i in response.data) $scope.images.push(response.data[i]);
        else {
          $cookies.putObject('error', response);
          $cookies.put('previousPage', "#!/buscarimagendatabase");
          $window.location.href = "#!/error";
        }
      }, function(error) {
          console.log(error);
      });
    }
  };

  $scope.modImage = function(image) {
    $cookies.actualImage = image;
    $cookies.previousPage = "#!/buscarimagendatabase";
    $window.location.href = "#!/modificarimagen";
  };

  $scope.delImage = function(image) {
    $cookies.actualImage = image;
    $cookies.previousPage = "#!/buscarimagendatabase";
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