var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);  

myApp.config(['$routeProvider', '$locationProvider',
      function($route, $location) {
        $route.when('/login', {
          templateUrl: 'templates/users/home.html',
          controller: 'UserController'
        });
        
        $route.when('/', {
          templateUrl: 'templates/users/home.html',
          controller: 'UserController'
        });
        
        // $route.when('/', {
        //   templateUrl: 'templates/users/login.html',
        //   controller: 'userController'
        // });
        
        // $route.when('/', {
        //   templateUrl: 'templates/users/login.html',
        //   controller: 'userController'
        // });
        $route.otherwise('/')
        
        
      }])
