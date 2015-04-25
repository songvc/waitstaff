'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waitstaffApp
 */

myApp.factory('Data', function(){
    var data = {};
    data.mealList = [];
    data.success = false;
    return data;
});

myApp.controller('MainCtrl', function ($scope, Data) {
    console.log("Hello");
    $scope.Data = Data;

    $scope.computePercent = function(a,r){
    	return a + (a * (r/100)); 
    };

    $scope.submit = function(){

    	if( $scope.myForm.$valid ) {
			
			$scope.Data.success = true;

    		//form validation
		    console.log('The form is valid');

		    //adding a mealInfo to mealLists
		    $scope.Data.mealList.push({
		    	mealPrice: $scope.mealPrice,
		    	subTotal: $scope.computePercent($scope.mealPrice,$scope.tax),
		    	tipAmount:  $scope.computePercent($scope.computePercent($scope.mealPrice,$scope.tax), $scope.tip)- $scope.computePercent($scope.mealPrice,$scope.tax),
		    	total: $scope.computePercent($scope.computePercent($scope.mealPrice,$scope.tax), $scope.tip)
		    });

		    console.log($scope.Data.mealList);

		    //clearing the inputs 
		    $scope.mealPrice = '';
		    $scope.tax = '';
		    $scope.tip = '';

		} else {
		    console.log('The form is invalid');
		}
    };

    $scope.reset = function(){
		$scope.Data.mealList = [];	
		$scope.Data.success = false;	
    };

    $scope.cancel = function(){
    	//Clearing the input field
	    $scope.mealPrice = '';
	    $scope.tax = '';
	    $scope.tip = '';
    };

    $scope.getMealCount = function(){
    	return $scope.Data.mealList.length;
    };

    $scope.getTipTotal = function(){

    	$scope.totalTip = 0;

    	for (var i=0; i < $scope.getMealCount(); i++){
    		$scope.totalTip += $scope.Data.mealList[i].tipAmount;
    	}

    	return $scope.totalTip;
    };

    $scope.averageTip = function(){
    	return $scope.getTipTotal()/$scope.getMealCount();
    };


    });

  
