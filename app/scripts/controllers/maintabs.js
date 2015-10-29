'use strict'; 


angular.module('runnerCalcApp')
	.controller('MainTabCtrl', function ($scope) {

	  	$scope.isSelected0 = true;
	  	$scope.isSelected1 = false;
	  	$scope.isSelected2 = false;
	  	$scope.isSelected3 = false;
	  	var trackClick = 0;


	  	$scope.toggleSelect0 = function () {

	  		if (trackClick === 1) {
	  			$scope.isSelected0 = !$scope.isSelected0;
	  			$scope.isSelected1 = !$scope.isSelected1;
	  			trackClick = 0;
	  		} else if (trackClick === 2) {
	  			$scope.isSelected0 = !$scope.isSelected0;
	  			$scope.isSelected2 = !$scope.isSelected2;
	  			trackClick = 0;
	  		} else if (trackClick === 3) {
	  			$scope.isSelected0 = !$scope.isSelected0;
	  			$scope.isSelected3 = !$scope.isSelected3;
	  			trackClick = 0;
	  		} else {
	  			return true;
	  		}   
	  	};

	  	$scope.toggleSelect1 = function () {

	  		if (trackClick === 0) {
	  			$scope.isSelected1 = !$scope.isSelected1;
	  			$scope.isSelected0 = !$scope.isSelected0;
	  			trackClick = 1;
	  		} else if (trackClick === 2) {
	  			$scope.isSelected1 = !$scope.isSelected1;
	  			$scope.isSelected2 = !$scope.isSelected2;
	  			trackClick = 1;
	  		} else if (trackClick === 3) {
	  			$scope.isSelected1 = !$scope.isSelected1;
	  			$scope.isSelected3 = !$scope.isSelected3;
	  			trackClick = 1;
	  		} else {
	  			return true;
	  		}  
	  	};

	  	

	  	$scope.toggleSelect2 = function () {

	  		if (trackClick === 0) {
	  			$scope.isSelected2 = !$scope.isSelected2;
	  			$scope.isSelected0 = !$scope.isSelected0;
	  			trackClick = 2;
	  		} else if (trackClick === 1) {
	  			$scope.isSelected2 = !$scope.isSelected2;
	  			$scope.isSelected1 = !$scope.isSelected1;
	  			trackClick = 2;
	  		} else if (trackClick === 3) {
	  			$scope.isSelected2 = !$scope.isSelected2;
	  			$scope.isSelected3 = !$scope.isSelected3;
	  			trackClick = 2;
	  		} else {
	  			return true;
	  		}  
	  		
	  	};

	  	$scope.toggleSelect3 = function () {

	  		if (trackClick === 0) {
	  			$scope.isSelected3 = !$scope.isSelected3;
	  			$scope.isSelected0 = !$scope.isSelected0;
	  			trackClick = 3;
	  		} else if (trackClick === 1) {
	  			$scope.isSelected3 = !$scope.isSelected3;
	  			$scope.isSelected1 = !$scope.isSelected1;
	  			trackClick = 3;
	  		} else if (trackClick === 2) {
	  			$scope.isSelected3 = !$scope.isSelected3;
	  			$scope.isSelected2 = !$scope.isSelected2;
	  			trackClick = 3;
	  		} else {
	  			return true;
	  		}  
	  		
	  	};

	});