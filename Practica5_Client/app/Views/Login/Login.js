'use strict';

var module = angular.module('practica5Client.login', ['ngRoute', 'ngResource', 'ngCookies']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'Views/Login/Login.html',
    controller: 'LoginCtrl'
  });
}]);

module.factory('User', ['$resource', function($resource) {
  return $resource(REST_URL.BASE, null, {
    login: {
      method: 'POST',
      url: REST_URL.LOGIN,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      transformRequest: function (data, headersGetter) {
        var str = [];
        for (var d in data)
            str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return str.join("&");
      }
    },
    register: {
      method: 'POST',
      url: REST_URL.REGISTER,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      transformRequest: function (data, headersGetter) {
        var str = [];
        for (var d in data)
            str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return str.join("&");
      }
    }
  });
}]);

module.controller('LoginCtrl', ['$scope', '$window', '$cookies', 'User', function($scope, $window, $cookies, User) {

  var user = $cookies.getObject('user');
  if (user != null) {
    $scope.user = user;
    //$window.location.href = "#!/home";
  }

  $scope.state = {};
  $scope.state.login = true;
  $scope.state.sigin = false;

  $scope.ShowLogIn = function() {
    $scope.state.login = !$scope.state.login;
    $scope.state.sigin = !$scope.state.login;
  };

  $scope.login = function() {
    var password = encryptPassword($scope.user.password);
    var user = new User();
    user.username = $scope.user.email;
    user.password = password;
    user.$login().then(function(response) {
      if (response.success) {
        $cookies.put('user', response.data);
        $window.location.href = "#!/home";
      }
      else {
        
      }
    }, function(error) {
      console.log(error);
    });
  };

  $scope.sigin = function() {
    var password = encryptPassword($scope.user.password);
    var user = new User();
    user.username = $scope.user.email;
    user.password = password;
    user.name = $scope.user.name
    user.$register().then(function(response) {
      if (response.success) $window.location.href = "#!/login";
      else {
        
      }
    }, function(error) {
      console.log(error);
    });
  };
  
}]);

function encryptPassword(password) {
  return CryptoJS.MD5(password);
}
