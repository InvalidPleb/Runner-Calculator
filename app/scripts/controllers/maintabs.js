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

		$scope.calcTitleInfo = {

  			title: "Pace Calculator"

  		};


		$scope.calcInfo = {

  			inputFormTop: "Pace",
  			inputFormTopClass: "movePace",
  			outputLabelTxtTop: "Your",
  			outputLabelTxtTopRes: "result"

  		};


  		var calcBtnDisabled1;
		var calcBtnDisabled2;
		var calcBtnDisabled4;

		$scope.updateInputDist = function() {
	  		if ($scope.inputDist === "") {
				return true;
			} else {
				calcBtnDisabled2 = false;
				return false;
			}
	  	};

		$scope.updateInputTime = function() {

	  		if (parseInt($scope.inputTime1 + $scope.inputTime2 + $scope.inputTime3) === 0) {
	  			$scope.inputTimeErr = true;
	  			return true;
	    	} else {
	    		calcBtnDisabled4 = false;
	    		$scope.inputTimeErr = false;
	    		return false;
	    	}
	  	};




		// The following six functions control the responsiveness of
	  	// the three time input fields, changing the value of the text boxes
	  	// depending upon blur or focus. 

	  	$scope.inputTime1 = '00';
	  	$scope.inputTime2 = '00';
	  	$scope.inputTime3 = '00';

	  	$scope.timeInput1Focus = function () {
	  		if ($scope.inputTime1 === '00') {
	  			$scope.inputTime1 = '';
	  		}
	  	};

	  	$scope.timeInput1Blur = function () {
	  		if ($scope.inputTime1 === '') {
	  			$scope.inputTime1 = '00';
	  		}
	  	};

	  	$scope.timeInput2Focus = function () {
	  		if ($scope.inputTime2 === '00') {
	  			$scope.inputTime2 = '';
	  		}
	  	};

	  	$scope.timeInput2Blur = function () {
	  		if ($scope.inputTime2 === '') {
	  			$scope.inputTime2 = '00';
	  		}
	  	};

	  	$scope.timeInput3Focus = function () {
	  		if ($scope.inputTime3 === '00') {
	  			$scope.inputTime3 = '';
	  		}
	  	};

	  	$scope.timeInput3Blur = function () {
	  		if ($scope.inputTime3 === '') {
	  			$scope.inputTime3 = '00';
	  		}
	  	};




	  	$scope.inputFormTop1 = '00';
	  	$scope.inputFormTop2 = '00';
	  	$scope.inputFormTop3 = '00';



	  	$scope.inputFormTop1Focus = function () {
	  		if ($scope.inputFormTop1 === '00') {
	  			$scope.inputFormTop1 = '';
	  		}
	  	};

	  	$scope.inputFormTop1Blur = function () {
	  		if ($scope.inputFormTop1 === '') {
	  			$scope.inputFormTop1 = '00';
	  		}
	  	};

	  	$scope.inputFormTop2Focus = function () {
	  		if ($scope.inputFormTop2 === '00') {
	  			$scope.inputFormTop2 = '';
	  		}
	  	};

	  	$scope.inputFormTop2Blur = function () {
	  		if ($scope.inputFormTop2 === '') {
	  			$scope.inputFormTop2 = '00';
	  		}
	  	};

	  	$scope.inputFormTop3Focus = function () {
	  		if ($scope.inputFormTop3 === '00') {
	  			$scope.inputFormTop3 = '';
	  		}
	  	};

	  	$scope.inputFormTop3Blur = function () {
	  		if ($scope.inputFormTop3 === '') {
	  			$scope.inputFormTop3 = '00';
	  		}
	  	};


	  	$scope.calcButton = function (){

	  		
		    // Converting the time input fields to int for
	  		// calculations.
	  		var timeInput1 = parseInt($scope.inputTime1, 10);
		    var timeInput2 = parseInt($scope.inputTime2, 10);
		    var timeInput3 = parseInt($scope.inputTime3, 10);

		    // Multiplying the left (timeInput1) and middle (timeInput2) input fields so
		    // that all fields have the unit of seconds. 
		    // They are then added together for the full time. 
		     
		    var timeInput1Adjusted = (timeInput1 * 60) * 60;
		    var timeInput2Adjusted = timeInput2 * 60;
		    var totalTimeInput = timeInput1Adjusted + timeInput2Adjusted + timeInput3;



		    var inputFormTop1 = parseInt($scope.inputFormTop1, 10);
		    var inputFormTop2 = parseInt($scope.inputFormTop2, 10);
		    var inputFormTop3 = parseInt($scope.inputFormTop3, 10);

		    var inputFormTop1Adjusted = (inputFormTop1 * 60) * 60;
		    var inputFormTop2Adjusted = inputFormTop2 * 60;
		    var totalInputFormTop = inputFormTop1Adjusted + inputFormTop2Adjusted + inputFormTop3;



		    if ($scope.inputFormTop !== "" && totalTimeInput !== 0 && totalTimeInput !== undefined) {

				$scope.calcInfo.outputLabelTxtTopRes = "distance";

			} else if (totalTimeInput !== 0 && totalTimeInput !== undefined && $scope.inputDist !== undefined) {

				$scope.calcInfo.outputLabelTxtTopRes = "pace";
		
			} else if ($scope.inputFormTop !== "" && $scope.inputDist !== undefined) {

				$scope.calcInfo.outputLabelTxtTopRes = "time";
		
			} else {

				$scope.calcInfo.outputLabelTxtTopRes = "result";
		
			}

			if (totalTimeInput === 0 || totalTimeInput === undefined) {
	    		$scope.inputTimeErr = true;
	    		calcBtnDisabled4 = true;
	    	} else {
	    		$scope.inputTimeErr = false;
	    	}

	    	if (totalInputFormTop === 0 || totalInputFormTop === undefined) {
	    		$scope.inputFormTopErr = true;
	    		calcBtnDisabled1 = true;
	    	} else {
	    		$scope.inputFormTopErr = false;
	    	}

	    	if ($scope.inputDist === undefined) {
	    		$scope.inputDist = "";
	    		calcBtnDisabled2 = true;
	    	} 
		    

		};

  		


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