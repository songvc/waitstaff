'use strict';

/**
 * @ngdoc overview
 * @name waitstaffApp
 * @description
 * # waitstaffApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('waitstaffApp', ['ngRoute'])
  	.config(['$routeProvider', function($routeProvider){
  		$routeProvider

  		.when('/',{
  			templateUrl: 'views/main.html',
  			controller: 'MainCtrl',
  		})

  		.when('/new-meal',{
  			templateUrl: 'views/new-meal.html',
  			controller: 'MainCtrl',
  		})

  		.when('/my-earnings',{
  			templateUrl:'views/my-earnings.html',
  			controller:'MainCtrl',
  		})

  		.otherwise('/')


  	}]);
