'use strict'; 

angular.module('runnerCalcApp')
	.directive('mainTab', function(){
	    return {
	      scope: {
	      	tabInfo: '=info'
	      },
	      restrict: 'AEC', 
	      templateUrl: '/views/tabdir.html',
	      // templateUrl: '',
	      replace: true
	    };
  	})

  	.directive('calcTitleSection', function(){
	    return {
	    	restrict: 'AEC',
	        templateUrl: '/views/calctitledir.html',
	        replace: true
	    };
  	})

  	.directive('calcOutputSection', function(){
	    return {
	        restrict: 'AEC',
	        templateUrl: '/views/calcoutputdir.html',
	        replace: true
	    };
  	})

  	.directive('calcSection', function(){
	    return {
	        restrict: 'AEC',
	        templateUrl: '/views/calcdir.html',
	        replace: true,
	    };
  	});