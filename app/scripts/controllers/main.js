'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waitstaffApp
 */
angular.module('waitstaffApp')
  .controller('MainCtrl', function ($scope) {
 
    $scope.user = [
      {mealPrice:0},
      {tax:0},
      {tip:0}
    ];

    $scope.defaults = angular.copy($scope.user);
    // $scope.subTotal= (user.tax/100)*user.mealPrice + user.mealPrice;

    $scope.computePercent = function(a,r){
    	return a * (r/100); 
    }




    $scope.success = false;

    $scope.submit= function(){
    	if( $scope.myForm.$valid ) {
		    console.log('The form is valid');
		    $scope.success = true;
		} else {
		    console.log('The form is invalid');
		}
    };

    $scope.reset = function(){

    }

  });
