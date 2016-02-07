'use strict'; 

angular.module('runnerCalcApp')
	.directive('mainTab', function(){
	    // Runs during compile
	    return {
	      // name: '',
	      // priority: 1,
	      // terminal: true,
	      scope: {
	      	tabInfo: '=info'
	      }, // {} = isolate, true = child, false/undefined = no change
	      // controller: function($scope, $element, $attrs, $transclude) {},
	      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
	      restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment
	      templateUrl: '/views/tabdir.html',
	      // templateUrl: '',
	      replace: true, //doesnt include custom tab in html, instead replaces it
	      // transclude: true,
	      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
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