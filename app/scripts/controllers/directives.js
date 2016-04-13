'use strict'; 

angular.module('runnerCalcApp')
	.directive('mainTab', function(){
	    return {
	      scope: {
	      	tabInfo: '=info'
	      },
	      restrict: 'AEC', 
	      templateUrl: '/directives/tabdir.html',
	      // templateUrl: '',
	      replace: true
	    };
  	})

  	.directive('calcTitleSection', function(){
	    return {
	    	restrict: 'AEC',
	        templateUrl: '/directives/calctitledir.html',
	        replace: true
	    };
  	})

  	.directive('calcOutputSection', function(){
	    return {
	        restrict: 'AEC',
	        templateUrl: '/directives/calcoutputdir.html',
	        replace: true
	    };
  	})

  	.directive('calcSection', function(){
	    return {
	        restrict: 'AEC',
	        templateUrl: '/directives/calcdir.html',
	        replace: true,
	    };
  	});