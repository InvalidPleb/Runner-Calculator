'use strict'; 

angular.module('runnerCalcApp')
	.controller('MainTabCtrl', ['$scope', function ($scope) {

		// These objects contain the information for the titledir templates individiually.
	  	$scope.ageGrade = {

	  		title: "Age Grade",
	  		href: "#/"

	  	};

	  	$scope.paceCalc = {

	  		title: "Running Pace",
	  		href: "#/pace"

	  	};

	  	$scope.bmiCalc = {

	  		title: "BMI Calculator",
	  		href: "#/bmi"

	  	};

	}])

	.controller('BmiCtrl', ['$scope', 'inputDistDropDown', 'inputBlur', function($scope, inputDistDropDown, inputBlur){

		$scope.calcTitleInfo = {

  			title: "BMI Calculator"
  		};

  		$scope.calcInfo = {

  			inputFormTop: "Weight",
  			inputFormBot: "Height",
  			inputFormTopClass: "move30",
  			inputFormTopTxt: "pounds",
  			inputFormBotClass: "move30",
  			inputFormBotTxt: "feet",
  			outputLabelTxtTop: "Your BMI",
  			outputBottomHide: "true",
  			errWarningTxt: "Oops! You're missing some info in the fields above"


  		};

  		$scope.unitCheck = "US";

  		$scope.updateUnitCheck = function () {

	  		if ($scope.unitCheck === "US") {

	  			$('.moveHeight2').show();
	  			$scope.calcInfo.inputFormTopTxt = "pounds";
	  			$scope.calcInfo.inputFormBotTxt = "feet";



	  		} else {

	  			$('.moveHeight2').hide();
	  			$scope.calcInfo.inputFormTopTxt = "kilograms";
	  			$scope.calcInfo.inputFormBotTxt = "centimeters";
	  			

	  		}
	  		

  		};

  		$scope.calcButton = function () {

  			console.log($scope.calcInfo.inputFormBot2Hide);
  		};




	}])

	.controller('PaceCtrl', ['$scope', 'inputDistDropDown', 'inputBlur', function($scope, inputDistDropDown, inputBlur){

		$scope.enterPress = function(keyEvent) {
    		if (keyEvent.which === 13) {
      			$scope.calcButton();
    		}
  		};


		// Populating distance dropdown with service info.
		$scope.run = inputDistDropDown.run;
	  	$scope.list = inputDistDropDown.list; 


	  	// These objects contain the information for the calcdir templates individually.
		$scope.calcTitleInfo = {

  			title: "Pace Calculator"

  		};


		$scope.calcInfo = {

  			inputFormTop: "Pace",
  			inputFormTopClass: "movePace",
  			inputFormTopHide: "true",
  			inputFormTrioHide: "false",
  			inputDistClass: "sizeDist",
  			inputDistTypeHide: "false",
  			outputLabelTxtTop: "Your",
  			outputLabelTxtTopRes: "result",
  			outputDataTopUnit: "",
  			outputBottomHide: "true",
  			genderBtnHide: "true",
  			errWarningTxt: "Oops! You need to fill in two options to find the third",
  			errWarningHide: "true"



  		};


  		$scope.unitMeasure = '';
  		$scope.unitSystems = 
  		[
	  		{
	  			unit: "mi",
	  			title: "mi"

	  		},
	  		{
	  			unit: "km",
	  			title: "km"
	  		}

  		];

  		// Creating local scopes containing the info in the inputBlur service.
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

	  	// Function to multiply and sum the time input fields so that a time in unit
	  	// seconds is the output.
	  	function parseTime (hours, mins, secs) {
	  		return parseInt(((hours * 60) * 60), 10) + parseInt((mins * 60), 10) + parseInt(secs, 10);
	  	}

	  	$scope.errWarning = false;

	  	$scope.distUnits = $scope.unitSystems[0].unit;



	  	

	  	// Calculate button scope.
	  	$scope.calcButton = function (){


	  		// Accessing the parseTime function to find total time in seconds.
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
	  		var i;


	  		// Setting var and field defaults per calc btn click.
	  		inputDistEmpty = false;
	  		inputDropDistEmpty = false;
	  		inputTypeDistEmpty = false;
	  		totalInputFormTopEmpty = false;
	  		totalTimeInputEmpty = false;
	  		chosenDistVal = undefined;
	  		chosenDistUnit = undefined;
	  		userDistance = undefined;


	  		// These two functions find out which distance input the user decided to use. 

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



	  		// If the distance dropdown is empty ... 

	  		if (inputDropDistEmpty === true && inputTypeDistEmpty === false) {

	  			// ... then the user distance that will used for calc is the
	  			// typed in distance field.

	  			userDistance = parseFloat($scope.inputTypeDist);



	  		// Alternatively, if the typed distance field is empty ...

	  		} else if (inputDropDistEmpty === false && inputTypeDistEmpty === true) {


	  			// Loop through the distance service to find the corresponding unit and value
	  			// in that object.

	  			for (i=0; i < $scope.list.length; i++) {

		  			if ($scope.inputDist === $scope.list[i].distance) {

		  				// The distance value that will be used for calc is the
		  				// value specified in that object.

		  				userDistance = $scope.list[i].value;

		  			}

	  			}

	  		}

	  		// Checking if the top field and middle time input fields are empty.
	  		if (totalInputFormTop === 0 || totalInputFormTop === undefined) {

	  			totalInputFormTopEmpty = true;
	  		}

	  		if (totalTimeInput === 0 || totalTimeInput === undefined) {

	  			totalTimeInputEmpty = true;

	  		}

	  		// -------- Pace Calculation -------- //

	  		// ---- Error Combinations---- //


	  		// If all the fields are filled ...
	  		if (totalInputFormTopEmpty === false && totalTimeInputEmpty === false && inputDistEmpty === false) {


	  			// Nothing is calculated and errors are shown. 
	  			$scope.calcInfo.outputLabelTxtTopRes = "result";
	  			$scope.calcInfo.errWarningTxt = "Oops! You only need to fill in two of the options above";
	  			$scope.errWarning = true;
	  			$scope.calcInfo.outputDataTopUnit = "";



	  		// If none of the fields are filled ...
	  		} else if (inputDistEmpty === true && totalInputFormTopEmpty === true && totalTimeInputEmpty === true) {


	  			// Nothing is calculated and errors are shown.
				$scope.calcInfo.outputLabelTxtTopRes = "result";
				$scope.calcInfo.errWarningTxt = "Oops! You need to fill in two options to find the third";
				$scope.errWarning = true;
				$scope.calcInfo.outputDataTopUnit = "";

			// ---- Valid Combinations ---- //


			// If the time and pace(inputFormTop) forms are filled but the distance is empty ...
			} else if (totalInputFormTopEmpty === false && totalTimeInputEmpty === false && inputDistEmpty === true) {


				// Distance is calculated and outputted to the user using $scope.calcInfo.
		    	$scope.calcInfo.outputLabelTxtTopRes = "distance";
		    	$scope.errWarning = false;

		    	// Distance calculation.
		    	outputDistance = (totalTimeInput / 60) / (totalInputFormTop / 60);

		    	$scope.outputDataTop = outputDistance;
		    	$scope.calcInfo.outputDataTopUnit = " " + $scope.distUnits;


		    // If the time and and distance forms are filled but the pace is empty ... 
		    } else if (totalTimeInputEmpty === false && inputDistEmpty === false && totalInputFormTopEmpty === true) {


		    	// Pace is calculated and outputted to the user.
		    	$scope.calcInfo.outputLabelTxtTopRes = "pace";
		    	$scope.errWarning = false;

		    	// Pace calculation. 
		    	outputPace = (totalTimeInput) / userDistance;
		    	$scope.outputDataTop = (new Date(outputPace * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
		    	$scope.calcInfo.outputDataTopUnit = " per " + $scope.distUnits;


		    // If the pace and distance forms are filled but the time is empty ... 
		    } else if (totalInputFormTopEmpty === false && inputDistEmpty === false && totalTimeInputEmpty === true) {


		    	// Time is calculated and outputted to the user.
		    	$scope.calcInfo.outputLabelTxtTopRes = "time";
		    	$scope.errWarning = false;

		    	// Time calculation. 
		    	outputTime = userDistance * (totalInputFormTop);

		    	$scope.outputDataTop = $scope.outputDataTop = (new Date(outputTime * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
		    	$scope.calcInfo.outputDataTopUnit = "";


			}

			console.log($scope.calcInfo.outputDataTopUnit);

		    
		};


		// Clear button scope.
		$scope.clearButton = function (){

	  		// Resets a bunch of elements to their default
	  		// values and hides some other elements. 

	  		$scope.inputFormTop1 = '00';
	  		$scope.inputFormTop2 = '00';
	  		$scope.inputFormTop3 = '00';
	  		$scope.inputDist = undefined;
	  		$scope.inputTypeDist = undefined;
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

	