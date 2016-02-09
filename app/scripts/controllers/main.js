'use strict';

// Setting up Age Grade controller.

angular.module('runnerCalcApp')
  .controller('MainCtrl', function ($scope, inputDistDropDown, inputBlur, ageGradeData) {

	// This function rounds to the nearest 100th.

	function numRound (value,dec){

    	value=Math.floor(value * dec + 0.05) / dec;
    	return(value);
	}

	function parseTime (hours, mins, secs) {
	  	return parseInt(((hours * 60) * 60), 10) + parseInt((mins * 60), 10) + parseInt(secs, 10);

	}

	$scope.calcTitleInfo = {

		title: "Age-Graded Calculator"

	};

	
	$scope.calcInfo = {

		inputFormTop: "Age",
		inputFormTopClass: "moveAge",
		outputLabelTxtTop: "Your age-graded time",
		errWarningTxt: "Oops! You're missing some info in the fields above"

	};


	// Populating the dropdown menu that selects the event.
	
	$scope.run = inputDistDropDown.run;
  	$scope.list = inputDistDropDown.list;
		

		// Hiding things with jquery
	var outputAgeGrade = $(".outputAgeGrade");
	var errWarning = $('.errWarning');
	var genCheckErr = $('.genCheckErrID');
  	errWarning.hide();

  	$scope.hideTextCheck = "Static";

  	// This controls the ng-show on the animated info text on AgeGradeMain.

	$scope.changeHideTextCheck = function() {
		$scope.hideTextCheck = !$scope.hideTextCheck;
	};


	// The following four functions check for missing info on 
	// the age input, distance/event dropdown menu,
	// gender selection, and time input, respectively. If any missing
	// info is found, true or false is returned and an error span
	// is shown to the user. 
	
	var calcBtnDisabled1 = false;
	var calcBtnDisabled2 = false;
	var calcBtnDisabled3 = false;
	var calcBtnDisabled4 = false;

	$scope.updateInputFormTop = function() {
		if ($scope.inputFormTop === "") {
			return true;
		} else {
			calcBtnDisabled1 = false;
			return false;
		}
  	};

  	$scope.updateInputDist = function() {
  		if ($scope.inputDist === "") {
			return true;
		} else {
			calcBtnDisabled2 = false;
			return false;
		}
  	};

  	$scope.updateGenCheck = function() {
  		if ($scope.genCheck === false || $scope.genCheck === undefined) {
    		$scope.genCheckErr = true;
    		return true;
    	} else {
    		calcBtnDisabled3 = false;
    		$scope.genCheckErr = false;
    		genCheckErr.removeClass('genCheckErr').addClass('genCheckErrInvis');
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


  	$scope.updateBtnDisabled = function() {

  		if (calcBtnDisabled1 === false && calcBtnDisabled2 === false && calcBtnDisabled3 === false && calcBtnDisabled4 === false) {
  			$scope.calcBtnDisabled = false;
  			errWarning.fadeOut(2000);
  		}

  	};


  	// The following six functions control the responsiveness of
  	// the three time input fields, changing the value of the text boxes
  	// depending upon blur or focus. 

  	$scope.inputTime1 = inputBlur.inputDefault;
  	$scope.inputTime2 = inputBlur.inputDefault;
  	$scope.inputTime3 = inputBlur.inputDefault;

  	$scope.timeInput1Focus = inputBlur.timeInput1Focus;
  	$scope.timeInput1Blur = inputBlur.timeInput1Blur;
  	$scope.timeInput2Focus = inputBlur.timeInput2Focus;
  	$scope.timeInput2Blur = inputBlur.timeInput2Blur;
  	$scope.timeInput3Focus = inputBlur.timeInput3Focus;
  	$scope.timeInput3Blur = inputBlur.timeInput3Blur;

  	// This allows the stack icon button to
  	// hide and show the main text section on
  	// age grade main. 
  	
  	var textVisible = false;

  	$scope.stackButton = function (){

  		textVisible = !textVisible;

  		if (textVisible === true) {
  			return true;
  		} else {
  			return false;
  		}


  	};

  	// Fades out the error warning div that
  	// appears below the calculator when info is missing. This is called by
  	// the error functions above.

  	//var hideErrWhenFilled = function() {

  	//	errWarning.fadeOut(3000);
  	//};


  	// Initially enables the calc button
  	
  	$scope.calcBtnDisabled = false;

  	// Click function of the calculate button.
  	
  	$scope.calcButton = function (){

  		if (calcBtnDisabled1 === true || calcBtnDisabled2 === true || calcBtnDisabled3 === true || calcBtnDisabled4 === true) {
  			$scope.calcBtnDisabled = true;
  		}

  		// Summing the input fields into total seconds
  		var totalTimeInput = parseTime($scope.inputTime1, $scope.inputTime2, $scope.inputTime3);

	    // Checks if the input fields have been filled properly, and
	    // chooses the running event data array that corresponds to the info given.

	    var chosenOption = 0;
	    if ($scope.genCheck === "Male" && $scope.inputDist !== undefined) {
  			chosenOption = ageGradeData.menEventOptions[$scope.inputDist];
  		} else if ($scope.genCheck === "Female" && $scope.inputDist !== undefined) {
  			chosenOption = ageGradeData.womenEventOptions[$scope.inputDist];
  		} else {
  			chosenOption = 0;
  		}

  		// The If statement below checks if there are any missing
  		// values in the input fields, and if not, does an age graded calculation on
  		// those values. The calculation is done by multiplying the age-graded index score
  		// in the data above by the user's input time. This number is then converted from
  		// seconds to the hh:mm:ss notation and shown to the user. 

  		var ageInt = parseInt($scope.inputFormTop);
  		var ageGrade = 0;
  		var ageGradePercent = 0;
  		var returnAgeGrade = 0;
  		
  		if (ageInt % 1 === 0 && ageInt !== "" && isNaN(ageInt) === false && chosenOption !== undefined &&
  		chosenOption !== 0 && totalTimeInput !== 0 && $scope.inputDist !== undefined) {

  			ageGrade = chosenOption[ageInt-4] * numRound(totalTimeInput, 100);
    		ageGradePercent = chosenOption[0] / ageGrade;
	        returnAgeGrade = (new Date(ageGrade * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
	        $scope.outputAgeGrade = returnAgeGrade;
	        $scope.outputAgePercent = numRound((ageGradePercent * 100), 100) + '%';
	        
  		}

    	// Normalizes the different values in the age and distance input fields

    	if ($scope.inputFormTop % 1 !== 0) {
    		$scope.inputFormTop = "";
    		calcBtnDisabled1 = true;
    	} 

    	if ($scope.inputDist === undefined) {
    		$scope.inputDist = "";
    		calcBtnDisabled2 = true;
    	} 

    	// Checks for missing values in the input
    	// fields and shows error divs and red outlines
    	// if any are missing
   
    	if (totalTimeInput === 0 || totalTimeInput === undefined) {
    		$scope.inputTimeErr = true;
    		calcBtnDisabled4 = true;
    	} else {
    		$scope.inputTimeErr = false;
    	}

    	if ($scope.genCheck === false || $scope.genCheck === undefined) {
    		$scope.genCheckErr = true;
    		calcBtnDisabled3 = true;
    		genCheckErr.removeClass('genCheckErrInvis').addClass('genCheckErr');
    	} else {
    		$scope.genCheckErr = false;

    	}

    	// Fades in the error div if any of the errors are true.
    	
    	if ($scope.updateInputFormTop() === true || $scope.updateInputTime() === true || 
    		$scope.updateInputDist() === true || $scope.updateGenCheck() === true) {
    		errWarning.fadeIn(500);
    	} else {
    		errWarning.fadeOut(2000);
    	}

    	if ($scope.outputAgeGrade !== undefined) {
    		outputAgeGrade.fadeIn(100);
    	}

  	};

  	// Clear button click function.

  	$scope.clearButton = function (){

  		// Resets a bunch of elements to their default
  		// values and hides some other elements. 

  		$scope.inputFormTop = undefined;
  		$scope.inputDist = undefined;
  		$scope.outputAgeGrade = undefined;
  		$scope.outputAgePercent = undefined;
  		$scope.inputTime1 = '00';
  		$scope.inputTime2 = '00';
  		$scope.inputTime3 = '00';
  		$scope.inputTimeErr = false;
  		$scope.genCheckErr = false;
  		$scope.genCheck = false;

  		calcBtnDisabled1 = false;
  		calcBtnDisabled2 = false;
  		calcBtnDisabled3 = false;
  		calcBtnDisabled4 = false;

  		$scope.calcBtnDisabled = false;
  		genCheckErr.removeClass('genCheckErr').addClass('genCheckErrInvis');



  		errWarning.fadeOut(2000);
  		

  	};


});