'use strict'; 


angular.module('runnerCalcApp')
	.controller('MainTabCtrl', function ($scope) {

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

	})

	.controller('PaceCtrl', function($scope, inputDistDropDown, inputBlur){


		$scope.run = inputDistDropDown.run;
	  	$scope.list = inputDistDropDown.list; 

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



	  	$scope.inputTime1 = inputBlur.inputDefault;
	  	$scope.inputTime2 = inputBlur.inputDefault;
	  	$scope.inputTime3 = inputBlur.inputDefault;

	  	$scope.timeInput1Focus = inputBlur.timeInput1Focus;
	  	$scope.timeInput1Blur = inputBlur.timeInput1Blur;
	  	$scope.timeInput2Focus = inputBlur.timeInput2Focus;
	  	$scope.timeInput2Blur = inputBlur.timeInput2Blur;
	  	$scope.timeInput3Focus = inputBlur.timeInput3Focus;
	  	$scope.timeInput3Blur = inputBlur.timeInput3Blur;

	  	$scope.inputFormTop1 = inputBlur.inputDefault;
	  	$scope.inputFormTop2 = inputBlur.inputDefault;
	  	$scope.inputFormTop3 = inputBlur.inputDefault;

	  	$scope.inputFormTop1Focus = inputBlur.inputFormTop1Focus;
	  	$scope.inputFormTop1Blur = inputBlur.inputFormTop1Blur;
	  	$scope.inputFormTop2Focus = inputBlur.inputFormTop2Focus;
	  	$scope.inputFormTop2Blur = inputBlur.inputFormTop2Blur;
	  	$scope.inputFormTop3Focus = inputBlur.inputFormTop3Focus;
	  	$scope.inputFormTop3Blur = inputBlur.inputFormTop3Blur;

	  	function parseTime (hours, mins, secs) {
	  		return parseInt(((hours * 60) * 60), 10) + parseInt((mins * 60), 10) + parseInt(secs, 10);

	  	}


	  	$scope.calcButton = function (){


	  		var totalTimeInput = parseTime($scope.inputTime1, $scope.inputTime2, $scope.inputTime3);
	  		var totalInputFormTop = parseTime($scope.inputFormTop1, $scope.inputFormTop2, $scope.inputFormTop3);


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
		
	});

	