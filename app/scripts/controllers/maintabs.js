'use strict'; 


angular.module('runnerCalcApp')
	.controller('MainTabCtrl', function ($scope) {

	  	$scope.isSelected0 = true;
	  	$scope.isSelected1 = false;
	  	$scope.isSelected2 = false;
	  	$scope.isSelected3 = false;
	  	var trackClick = 0;

	  	$scope.ageGrade = {

	  		title: "Age Grade",
	  		href: "#/"

	  	};

	  	$scope.paceCalc = {

	  		title: "Running Pace",
	  		href: "#/pace"

	  	};

	  	$scope.paceConvert = {

	  		title: "Pace Converter",
	  		href: "#/paceconvert"

	  	};


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

	})

	.controller('PaceCtrl', function($scope){

		$scope.run = '';
	  	$scope.list = [
		    {
		      Event: 'run5km',
		      Title: '5 km'
		    }, {
		      Event: 'run6km',
		      Title: '6 km'
		    }, {
		      Event: 'run4Mile',
		      Title: '4 mile'
		    }, {
		      Event: 'run8km',
		      Title: '8 km'
		    }, {
		      Event: 'run5Mile',
		      Title: '5 mile'
		    }, {
		      Event: 'run10km',
		      Title: '10 km'
		    }, {
		      Event: 'run12km',
		      Title: '12 km'
		    }, {
		      Event: 'run15km',
		      Title: '15km'
		    }, {
		      Event: 'run10Mile',
		      Title: '10 mile'
		    }, {
		      Event: 'run20km',
		      Title: '20 km'
		    }, {
		      Event: 'runHalfMar',
		      Title: 'half mar'
		    }, {
		      Event: 'run25km',
		      Title: '25 km'
		    }, {
		      Event: 'run30km',
		      Title: '30 km'
		    }, {
		      Event: 'runMarathon',
		      Title: 'marathon'
		    }, {
		      Event: 'run50km',
		      Title: '50 km'
		    }, {
		      Event: 'run50Mile',
		      Title: '50 mile'
		    }, {
		      Event: 'run100km',
		      Title: '100 km'
		    }, {
		      Event: 'run150km',
		      Title: '150 km'
		    }, {
		      Event: 'run100Mile',
		      Title: '100 mile'
		    }, {
		      Event: 'run200km',
		      Title: '200 km'
		    }
		];
		
	})

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

  	.directive('calcSection', function(){
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
	      templateUrl: '/views/calcdir.html',
	      // templateUrl: '',
	      replace: true, //doesnt include custom tab in html, instead replaces it
	      // transclude: true,
	      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	    };
  	});