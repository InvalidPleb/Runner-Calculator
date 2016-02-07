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
	    // Runs during compile
	    return {
	      // name: '',
	      // priority: 1,
	      // terminal: true,
	      // {} = isolate, true = child, false/undefined = no change
	      // controller: function($scope, $element, $attrs, $transclude) {},
	      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
	      restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment
	      templateUrl: '/views/calctitledir.html',
	      // templateUrl: '',
	      replace: true, //doesnt include custom tab in html, instead replaces it
	      // transclude: true,
	      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	    };
  	})

  	.directive('calcOutputSection', function(){
	    // Runs during compile
	    return {
	      // name: '',
	      // priority: 1,
	      // terminal: true,
	      // {} = isolate, true = child, false/undefined = no change
	      // controller: function($scope, $element, $attrs, $transclude) {},
	      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
	      restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment
	      templateUrl: '/views/calcoutputdir.html',
	      // templateUrl: '',
	      replace: true, //doesnt include custom tab in html, instead replaces it
	      // transclude: true,
	      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	    };
  	})

  	.directive('calcSection', function(){
	    // Runs during compile
	    return {
	      // name: '',
	      // priority: 1,
	      // terminal: true,
	      // {} = isolate, true = child, false/undefined = no change
	      // controller: function($scope, $element, $attrs, $transclude) {},
	      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
	      restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment
	      templateUrl: '/views/calcdir.html',
	      // templateUrl: '',
	      replace: true, //doesnt include custom tab in html, instead replaces it
	      // transclude: true,
	      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	    };
  	});