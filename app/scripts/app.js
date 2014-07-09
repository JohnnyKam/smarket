'use strict';

var smApp = angular
  .module('smarketApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  
  smApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }
	  )
      .when('/nofrills', {
        templateUrl: 'views/nofrills.html',
        controller: 'MainCtrl'
      })
	  .when('/metro', {
        templateUrl: 'views/metro.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
  smApp.controller('MainCtrl', function($scope, $location){
	$scope.isActive	 = function(route){
		return route === $location.path();
	};	
  });

  