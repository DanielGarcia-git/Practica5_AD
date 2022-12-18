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

  $scope.searchImage = function() {
    console.log($scope.search);
    if ($scope.search != undefined) {

			Array.prototype.myConcat = function(Array) {
				return [...this, Array];
			};

			$scope.showImages = [];
			var images = [];
			var criteriaOptions = {};

			if ($scope.search.Title != '' && $scope.search.Title != undefined) {
				criteriaOptions.Title = $scope.search.Title;
				Image.searchByTitle({title: $scope.search.Title}, function(response) {
					if (response.success) Array.prototype.push.apply(images, response.data);
					else {
						$cookies.putObject('error', response);
						$cookies.put('previousPage', "#!/buscarimagendatabase");
						$window.location.href = "#!/error";
					}
				}, function(error) {
 			  	console.log(error);
				});
			}
			if ($scope.search.Author != '' && $scope.search.Author != undefined) {
				criteriaOptions.Author = $scope.search.Author;
				Image.searchByAuthor({author: $scope.search.Author}, function(response) {
					if (response.success) Array.prototype.push.apply(images, response.data);
					else {
						$cookies.putObject('error', response);
						$cookies.put('previousPage', "#!/buscarimagendatabase");
						$window.location.href = "#!/error";
					}
				}, function(error) {
 			  	console.log(error);
				});
			}
			if ($scope.search.Keywords != '' && $scope.search.Keywords != undefined) {
				criteriaOptions.Keywords = $scope.search.Keywords;
				Image.searchByKeywords({keywords: $scope.search.Keywords}, function(response) {
					if (response.success) Array.prototype.push.apply(images, response.data);
					else {
						$cookies.putObject('error', response);
						$cookies.put('previousPage', "#!/buscarimagendatabase");
						$window.location.href = "#!/error";
					}
				}, function(error) {
 			  	console.log(error);
				});
			}
			if ($scope.search.CreationDate != null && $scope.search.CreationDate != undefined) {
				var formatedDate = $scope.search.CreationDate.toLocaleDateString();
				criteriaOptions.CreationDate = formatedDate;
				Image.searchByCreationDate({creationdate: formatedDate}, function(response) {
					if (response.success) Array.prototype.push.apply(images, response.data);
					else {
						$cookies.putObject('error', response);
						$cookies.put('previousPage', "#!/buscarimagendatabase");
						$window.location.href = "#!/error";
					}
				}, function(error) {
 			  	console.log(error);
				});
			}
			console.log(images);
			$scope.showImages = images;
			console.log($scope.showImages);
    } else $scope.showImages = [];
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