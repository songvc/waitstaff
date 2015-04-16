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
   
	$scope.mealList = [];	
	$scope.success = false;

  //  $scope.defaults = angular.copy($scope.user);
    // $scope.subTotal= (user.tax/100)*user.mealPrice + user.mealPrice;

    $scope.computePercent = function(a,r){
    	return a + (a * (r/100)); 
    };

    $scope.submit = function(){
    	if( $scope.myForm.$valid ) {
			
			$scope.success = true;

    		//form validation
		    console.log('The form is valid');

		    //adding a mealInfo to mealLists
		    $scope.mealList.push({
		    	mealPrice: $scope.mealPrice,
		    	subTotal: $scope.computePercent($scope.mealPrice,$scope.tax),
		    	tipAmount:  $scope.computePercent($scope.computePercent($scope.mealPrice,$scope.tax), $scope.tip)- $scope.computePercent($scope.mealPrice,$scope.tax),
		    	total: $scope.computePercent($scope.computePercent($scope.mealPrice,$scope.tax), $scope.tip)
		    });

		    console.log($scope.mealList);

		    //clearing the inputs 
		    $scope.mealPrice = '';
		    $scope.tax = '';
		    $scope.tip = '';

		} else {
		    console.log('The form is invalid');
		}
    };

    $scope.reset = function(){
		$scope.mealList = [];	
		$scope.success = false;	
    };

    $scope.cancel = function(){
    	//Clearing the input field
	    $scope.mealPrice = '';
	    $scope.tax = '';
	    $scope.tip = '';
    };

    $scope.getMealCount = function(){
    	return $scope.mealList.length;
    };

    $scope.getTipTotal = function(){

    	$scope.totalTip = 0;

    	for (var i=0; i < $scope.getMealCount(); i++){
    		$scope.totalTip += $scope.mealList[i].tipAmount;
    	}

    	return $scope.totalTip;
    };

    $scope.averageTip = function(){
    	return $scope.getTipTotal()/$scope.getMealCount();
    };


  });
