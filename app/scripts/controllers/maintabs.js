'use strict'; 

angular.module('runnerCalcApp')
	.controller('MainTabCtrl', ['$scope', function ($scope) {

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

	}])

	.controller('PaceCtrl', ['$scope', 'inputDistDropDown', 'inputBlur', function($scope, inputDistDropDown, inputBlur){


		$scope.run = inputDistDropDown.run;
	  	$scope.list = inputDistDropDown.list; 

		$scope.calcTitleInfo = {

  			title: "Pace Calculator"

  		};


		$scope.calcInfo = {

  			inputFormTop: "Pace",
  			inputFormTopClass: "movePace",
  			inputDistClass: "sizeDist",
  			outputLabelTxtTop: "Your",
  			outputLabelTxtTopRes: "result",
  			outputDataTopUnit: "",
  			errWarningTxt: "Oops! You need to fill in two options to find the third",



  		};

  		$scope.unitMeasure = '';
  		$scope.unitSystems = 
  		[
	  		{
	  			unit: 0,
	  			title: "mi"

	  		},
	  		{
	  			unit: 1,
	  			title: "km"
	  		}

  		];

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

	  	$scope.errWarning = false;

	  	$scope.distUnits = $scope.unitSystems[0].unit;
	  	


	  	$scope.calcButton = function (){


	  		// Summing the input fields into total seconds
	  		var totalTimeInput = parseTime($scope.inputTime1, $scope.inputTime2, $scope.inputTime3);
	  		var totalInputFormTop = parseTime($scope.inputFormTop1, $scope.inputFormTop2, $scope.inputFormTop3);

	  		var inputDistEmpty;
	  		var inputDropDistEmpty;
	  		var inputTypeDistEmpty;
	  		var totalInputFormTopEmpty;
	  		var totalTimeInputEmpty;
	  		var userDistance;
	  		var chosenDistVal;
	  		var chosenDistUnit;
	  		var outputPace;
	  		var outputDistance;
	  		var outputTime;
	  		var distUnits;
	  		var i;

	  		inputDistEmpty = false;
	  		inputDropDistEmpty = false;
	  		inputTypeDistEmpty = false;
	  		totalInputFormTopEmpty = false;
	  		totalTimeInputEmpty = false;
	  		chosenDistVal = undefined;
	  		chosenDistUnit = undefined;


	  		for (i=0; i < $scope.list.length; i++) {

	  			if ($scope.inputDist === $scope.list[i].distance) {

	  				chosenDistVal = $scope.list[i].value;
	  				chosenDistUnit = $scope.list[i].unit;

	  				
	  			}

	  		}



	  		


	  		if ($scope.inputTypeDist === undefined || $scope.inputTypeDist === '' || $scope.inputTypeDist === 0) {

	  			inputTypeDistEmpty = true;
	  		}

	  		if ($scope.inputDist === undefined || $scope.inputDist === '') {

	  			inputDropDistEmpty = true;
	  		}




	  		if (inputTypeDistEmpty === true && inputDropDistEmpty === true) {

	  			inputDistEmpty = true;
	  			
	  		} else if (inputTypeDistEmpty === false && inputDropDistEmpty === false) {

	  			inputDistEmpty = true;
	  			
	  		}

	  		if (inputDropDistEmpty === true && inputTypeDistEmpty === false) {

	  			userDistance = inputTypeDistEmpty;

	  		} else if (inputDropDistEmpty === false && inputTypeDistEmpty === true) {



	  		}



	  		if (totalInputFormTop === 0 || totalInputFormTop === undefined) {

	  			totalInputFormTopEmpty = true;
	  		}

	  		if (totalTimeInput === 0 || totalTimeInput === undefined) {

	  			totalTimeInputEmpty = true;

	  		}


	  		if ($scope.distUnits === 0) {
	  			distUnits = "mi";
	  		} else if ($scope.distUnits === 1) {
	  			distUnits = "km";
	  		}


	  		if (totalInputFormTopEmpty === false && totalTimeInputEmpty === false && inputDistEmpty === false) {

	  			$scope.calcInfo.outputLabelTxtTopRes = "result";
	  			$scope.calcInfo.errWarningTxt = "Oops! You only need to fill in two of the options above";
	  			$scope.errWarning = true;
	  			$scope.calcInfo.outputDataTopUnit = "";


	  		} else if (inputDistEmpty === true && totalInputFormTopEmpty === true && totalTimeInputEmpty === true) {

				$scope.calcInfo.outputLabelTxtTopRes = "result";
				$scope.calcInfo.errWarningTxt = "Oops! You need to fill in two options to find the third";
				$scope.errWarning = true;
				$scope.calcInfo.outputDataTopUnit = "";

			} else if (totalInputFormTopEmpty === false && totalTimeInputEmpty === false && inputDistEmpty === true) {

		    	$scope.calcInfo.outputLabelTxtTopRes = "distance";
		    	$scope.errWarning = false;
		    	outputDistance = (totalTimeInput / 60) / (totalInputFormTop / 60);
		    	$scope.outputDataTop = outputDistance;
		    	$scope.calcInfo.outputDataTopUnit = " " + distUnits;



		    	
		    } else if (totalTimeInputEmpty === false && inputDistEmpty === false && totalInputFormTopEmpty === true) {
		    	
		    	$scope.calcInfo.outputLabelTxtTopRes = "pace";
		    	$scope.errWarning = false;
		    	outputPace = (totalTimeInput) / chosenDistVal;
		    	$scope.outputDataTop = (new Date(outputPace * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
		    	$scope.calcInfo.outputDataTopUnit = " per " + distUnits;




		    } else if (totalInputFormTopEmpty === false && inputDistEmpty === false && totalTimeInputEmpty === true) {

		    	$scope.calcInfo.outputLabelTxtTopRes = "time";
		    	$scope.errWarning = false;
		    	outputTime = chosenDistVal * (totalInputFormTop);
		    	$scope.outputDataTop = $scope.outputDataTop = (new Date(outputTime * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
		    	$scope.calcInfo.outputDataTopUnit = "";


			}

			console.log($scope.calcInfo.outputDataTopUnit);

		    
		};

		$scope.clearButton = function (){

	  		// Resets a bunch of elements to their default
	  		// values and hides some other elements. 

	  		$scope.inputFormTop1 = '00';
	  		$scope.inputFormTop2 = '00';
	  		$scope.inputFormTop3 = '00';
	  		$scope.inputDist = undefined;
	  		$scope.inputTypeDist = undefined;
	  		$scope.distUnits = $scope.unitSystems[0].unit;
	  		$scope.inputTime1 = '00';
	  		$scope.inputTime2 = '00';
	  		$scope.inputTime3 = '00';
	  		$scope.inputTimeErr = false;
	  		$scope.errWarning = false;
	  		$scope.inputFormTopErr = false;
	  		$scope.calcInfo.outputLabelTxtTopRes = "result";
	  		$scope.calcInfo.errWarningTxt = "Oops! You need to fill in two options to find the third";
	  		$scope.outputDataTop = '';
	  		$scope.calcInfo.outputDataTopUnit = "";

	  		

	  	};
		
	}]);

	