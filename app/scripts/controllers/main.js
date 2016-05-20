(function(){

  'use strict';

  // Setting up controllers.
  angular.module('runnerCalcApp')

    // Tab template controller
    .controller('MainTabCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

      // These objects contain the information for the tabdir template instances
      $scope.paceCalc = {
        title: "Pace",
        href: "#/pace-calculator",
        tabTextClass: "paceTabTxt"
      };
      $scope.ageGrade = {
        title: "Age Grade",
        href: "#/age-graded-calculator",
        tabTextClass: "ageGradeTabTxt"
      };
      $scope.bmiCalc = {
        title: "BMI",
        href: "#/bmi-calculator",
        tabTextClass: "bmiTabTxt"
      };

      // These conditions check what the hash is and set the default selected tab accordingly
      var windowHref, windowHash;
      windowHref = window.location.href;

      if (windowHref.indexOf('#') === 20) {
        windowHash = windowHref.slice(20, windowHref.length);
      } else if (windowHref.indexOf('#') === 22) {
        windowHash = windowHref.slice(22, windowHref.length);
      } else if (windowHref.indexOf('#') === 28) {
        windowHash = windowHref.slice(28, windowHref.length);
      }
      if (windowHash === "#/pace-calculator" || windowHash === undefined || windowHash ==="#/") {
        $scope.mainTabs = "pace";
        $rootScope.titleText = "Pace Calculator | Runner Calculator";
      } else if (windowHash === "#/age-graded-calculator") {
        $scope.mainTabs = "ageGrade";
        $rootScope.titleText = "Age-Graded Calculator | Runner Calculator";
      } else if (windowHash === "#/bmi-calculator") {
        $scope.mainTabs = "bmi";
        $rootScope.titleText = "BMI Calculator | Runner Calculator";
      }
      
      // These three functions change the class of the selected tab
      $scope.updateMainTabOne = function() {
        $scope.mainTabs = "ageGrade";
        $rootScope.titleText = "Age-Graded Calculator | Runner Calculator";
      };

      $scope.updateMainTabTwo = function() {
        $scope.mainTabs = "pace";
        $rootScope.titleText = "Pace Calculator | Runner Calculator";
      };

      $scope.updateMainTabThree = function() {
        $scope.mainTabs = "bmi";
        $rootScope.titleText = "BMI Calculator | Runner Calculator";
      };

    }])

    .controller('AgeGradeCtrl', ['$scope', 'inputDistDropDown', 'inputBlur', 'ageGradeData', function ($scope, inputDistDropDown, inputBlur, ageGradeData) {

    	// Function to round to the nearest 100th
    	function numRound (value,dec){
        value=Math.floor(value * dec + 0.05) / dec;
        return(value);
    	}

      // Function to convert the hh:mm:ss time fields into one float in seconds
    	function parseTime (hours, mins, secs) {
    	  return parseFloat(((hours * 60) * 60), 10) + parseFloat((mins * 60), 10) + parseFloat(secs, 10);
    	}

      // Function to call the calc button on enter keypress
      $scope.enterPress = function(keyEvent) {
        if (keyEvent.which === 13) {
          $scope.calcButton();
        }
      };

      // This object contains the information for the age grade calculator template instance
    	$scope.calcInfo = {
        title: "Age-Graded Calculator",
    		inputFormTop: "Age",
    		inputFormTopClass: "moveAge",
        inputFormTopHide: "false",
        inputFormTrioHide: "true",
        inputDistTypeHide: "true",
        inputFormBot: "Time",
        inputFormBot1Hide: "false",
        inputFormBotLabel: "hh:mm:ss",
        genderBtnHide: "false",
    		outputLabelTxtTop: "Your age-graded time",
        outputLabelTxtTopRes: "",
        outputBottomHide: "false",
        outputHeight: "calcOutputAgeHeight",
    		errWarningTxt: "Oops! You're missing some info in the fields above"
    	};

    	// Populating the dropdown menu that selects the event.
    	$scope.run = inputDistDropDown.run;
      $scope.list = inputDistDropDown.list;
    		
    	// Initially hiding things
      $scope.errWarning = false;
      $scope.genCheckErr = false;
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
    	$scope.updateInputFormTop = function() {
    		if ($scope.inputFormTop === "") {
    			return true;
    		} else {
    			return false;
    		}
      };

    	$scope.updateInputDist = function() {
    		if ($scope.inputDist === "") {
      		return true;
      	} else {
      		return false;
      	}
    	};

    	$scope.updateGenCheck = function() {
    		if ($scope.genCheck === false || $scope.genCheck === undefined) {
      		$scope.genCheckErr = true;
      		return true;
      	} else {
      		$scope.genCheckErr = false;
      		return false;
      	}
    	};

    	$scope.updateInputTime = function() {

    		if (parseInt($scope.inputTime1 + $scope.inputTime2 + $scope.inputTime3) === 0) {
    			$scope.inputTimeErr = true;
    			return true;
      	} else {
      		$scope.inputTimeErr = false;
      		return false;
      	}
    	};

    	$scope.inputTime1 = '00';
    	$scope.inputTime2 = '00';
    	$scope.inputTime3 = '00';

    	$scope.timeInput1Focus = inputBlur.timeInput1Focus;
    	$scope.timeInput1Blur = inputBlur.timeInput1Blur;
    	$scope.timeInput2Focus = inputBlur.timeInput2Focus;
    	$scope.timeInput2Blur = inputBlur.timeInput2Blur;
    	$scope.timeInput3Focus = inputBlur.timeInput3Focus;
    	$scope.timeInput3Blur = inputBlur.timeInput3Blur;

    	// Click function of the calculate button.
    	$scope.calcButton = function (){

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
    		// values in the input fields, and if not, does an age-graded calculation on
    		// those values.
    		var ageInt = parseInt($scope.inputFormTop);
    		var ageGrade = 0;
    		var ageGradePercent = 0;
    		var returnAgeGrade = 0;
    		
    		if (ageInt % 1 === 0 && ageInt !== "" && isNaN(ageInt) === false && chosenOption !== undefined &&
    		chosenOption !== 0 && totalTimeInput !== 0 && $scope.inputDist !== undefined) {

    			ageGrade = chosenOption[ageInt-4] * numRound(totalTimeInput, 100);
      		ageGradePercent = chosenOption[0] / ageGrade;
          returnAgeGrade = (new Date(ageGrade * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
          $scope.outputDataTop = returnAgeGrade;
          $scope.outputAgePercent = numRound((ageGradePercent * 100), 100) + '%';
            
    		}

      	// Normalizes the different values in the age and distance input fields
      	if ($scope.inputFormTop % 1 !== 0) {
      		$scope.inputFormTop = "";
      	} 

      	if ($scope.inputDist === undefined) {
          $scope.inputDist = "";
      	} 

      	// Checks for missing values in the input
      	// fields and shows error divs and red outlines
      	// if any are missing
      	if (totalTimeInput === 0 || totalTimeInput === undefined) {
      		$scope.inputTimeErr = true;
      	} else {
      		$scope.inputTimeErr = false;
      	}

      	if ($scope.genCheck === false || $scope.genCheck === undefined) {
      		$scope.genCheckErr = true;
      	} else {
      		$scope.genCheckErr = false;
      	}

      	// Fades in the error div if any of the errors are true.
      	if ($scope.updateInputFormTop() === true || $scope.updateInputTime() === true || 
      		$scope.updateInputDist() === true || $scope.updateGenCheck() === true) {
      		$scope.errWarning = true;
      	} else {
      		$scope.errWarning = false;
      	}
    	};
        
    	// Clear button click function.
    	$scope.clearButton = function (){

    		// Resets a bunch of elements to their default
    		// values and hides some other elements. 
    		$scope.inputFormTop = undefined;
    		$scope.inputDist = undefined;
    		$scope.outputDataTop = undefined;
    		$scope.outputAgePercent = undefined;
    		$scope.inputTime1 = '00';
    		$scope.inputTime2 = '00';
    		$scope.inputTime3 = '00';
    		$scope.inputTimeErr = false;
    		$scope.genCheckErr = false;
    		$scope.genCheck = false;
    		$scope.errWarning = false;
    	};

    }])

    // BMI calculator controller
    .controller('BmiCtrl', ['$scope', function($scope){

      // Function to call the calc button on enter keypress
      $scope.enterPress = function(keyEvent) {
        if (keyEvent.which === 13) {
            $scope.calcButton();
        }
      };

      // This object contains the information for the BMI calculator template instance
      $scope.calcInfo = {
        title: "BMI Calculator",
        inputFormTop: "Weight",
        inputFormBot: "Height",
        inputFormTopClass: "move30",
        inputFormTopTxt: "pounds",
        inputFormBotClass: "move30",
        inputFormBotTxt: "feet",
        outputLabelTxtTop: "Your BMI",
        outputBottomHide: "true",
        outputHeight: "calcOutputBMIHeight",
        errWarningTxt: "Oops! You're missing some info in the fields above",
      };

      // Initially clearing errors and setting unit locale to US
      $scope.errWarning = false;
      $scope.unitCheck = "US";

      // Changes the form setup depending upon US or metric units.
      $scope.updateUnitCheck = function () {

        if ($scope.unitCheck === "US") {
          $scope.calcInfo.inputFormTopTxt = "pounds";
          $scope.calcInfo.inputFormBotTxt = "feet";

        } else if ($scope.unitCheck === "Metric"){
          $scope.calcInfo.inputFormTopTxt = "kilograms";
          $scope.calcInfo.inputFormBotTxt = "centimeters";
        }
      };

      // Checks if the input forms are clean or dirty
      $scope.updateInputFormTop = function() {
        if ($scope.inputFormTop === "") {
          return true;
        } else {
          return false;
        }
      };

      $scope.updateInputFormBot = function() {
        if ($scope.inputFormBot === "") {
          return true;
        } else {
          return false;
        }
      };

      // Declaring global scope vars to be used later
      var inputFormTop = 0;
      var inputFormBot = 0;
      var inputFormBot2 = 0;
      var inputFormBotEmpty = true;
      var calcWeight;
      var calcHeightTotal;
      var calcBMI;
      var weightWarning;
      var heightWarning;

      // Calculate button function
      $scope.calcButton = function () {

        // Gives the forms float type if they are dirty
        function parseFormsFloat(form) {
          if (form === undefined || form === '') {
            return 0;
          } else {
            return parseFloat(form);
          }
        }

        calcWeight = parseFormsFloat($scope.inputFormTop);
        inputFormBot = parseFormsFloat($scope.inputFormBot);
        inputFormBot2 = parseFormsFloat($scope.inputFormBot2);

        // Defining the errors for empty fields as boolean 
        weightWarning = true;
        heightWarning = true;

        // Turns on errors if the height and weight fields are empty
        if ($scope.unitCheck === "US") {
          if (calcWeight === 0) {
            weightWarning = true;
          } else {
            weightWarning = false;
          }

          if (inputFormBot === 0 && inputFormBot2 === 0) {
            inputFormBotEmpty = true;
            heightWarning = true;
          } else {
            inputFormBotEmpty = false;
            heightWarning = false;
          }
        } else {
          if (calcWeight === 0) {
            weightWarning = true;
          } else {
            weightWarning = false;
          }

          if (inputFormBot === 0) {
            inputFormBotEmpty = true;
            heightWarning = true;
          } else {
            inputFormBotEmpty = false;
            heightWarning = false;
          }
        }

        // If any errors are true, show the error text div
        if (weightWarning === true || heightWarning === true) {
          $scope.errWarning = true;

          if (weightWarning === true) {
            $scope.inputFormTop = "";
          }

          if (heightWarning === true) {
            $scope.inputFormBot = "";
          }
        // Else, hide the error div
        } else if (weightWarning === false && heightWarning === false) {
          $scope.errWarning = false;
        }

        // If the locale is US & no fields are empty, do the BMI calculation
        if ($scope.unitCheck === "US" && calcWeight !== 0 && inputFormBotEmpty === false){

          calcHeightTotal = Math.pow((inputFormBot * 12) + inputFormBot2, 2);
          calcBMI = (calcWeight / calcHeightTotal) * 703;
          $scope.outputDataTop = Math.round(calcBMI * 100) / 100;

        // Else, if the locale is Metric & no fields are empty, do the BMI calculation
        } else if ($scope.unitCheck === "Metric" && calcWeight !== 0 && inputFormBotEmpty === false) {

          calcBMI = calcWeight / Math.pow((inputFormBot / 100), 2);
          $scope.outputDataTop = Math.round(calcBMI * 100) / 100;
        }
      };

      // Clear button to reset values
      $scope.clearButton = function () {
        $scope.outputDataTop = "";
        $scope.inputFormTop = undefined;
        $scope.inputFormBot = undefined;
        $scope.inputFormBot2 = undefined;
        inputFormTop = 0;
        inputFormBot = 0;
        inputFormBot2 = 0;
        weightWarning = false;
        heightWarning = false;
        $scope.errWarning = false;
      };

    }])
    // Pace controller
    .controller('PaceCtrl', ['$scope', 'inputDistDropDown', 'inputBlur', function($scope, inputDistDropDown, inputBlur){

      // Function to call the calc button on enter keypress
      $scope.enterPress = function(keyEvent) {
        if (keyEvent.which === 13) {
            $scope.calcButton();
        }
      };

      // Populating distance dropdown with service info.
      $scope.run = inputDistDropDown.run;
      $scope.list = inputDistDropDown.list; 

      // This object contains the information for the pace calculator template instance
      $scope.calcInfo = {
        title: "Running Pace Calculator",
        inputFormTop: "Time",
        inputFormTopClass: "movePace",
        inputFormTopHide: "true",
        inputFormTrioHide: "false",
        inputDistClass: "sizeDist",
        inputDistTypeHide: "false",
        inputFormBot: "Pace",
        inputFormBot1Hide: "true",
        inputFormBotLabel: "mm:ss per mile or km",
        outputLabelTxtTop: "Your",
        outputLabelTxtTopRes: "result",
        outputDataTopUnit: "",
        outputBottomHide: "true",
        outputHeight: "calcOutputPaceHeight",
        genderBtnHide: "true",
        errWarningTxt: "Oops! You need to fill in two options",
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

      // Calling the inputFocusBlur service
      $scope.inputTime1 = '00';
      $scope.inputTime2 = '00';
      $scope.inputTime3 = '00';

      $scope.inputFormTop1 = '00';
      $scope.inputFormTop2 = '00';
      $scope.inputFormTop3 = '00';


      $scope.timeInput1Focus = inputBlur.timeInput1Focus;
      $scope.timeInput1Blur = inputBlur.timeInput1Blur;
      $scope.timeInput2Focus = inputBlur.timeInput2Focus;
      $scope.timeInput2Blur = inputBlur.timeInput2Blur;
      $scope.timeInput3Focus = inputBlur.timeInput3Focus;
      $scope.timeInput3Blur = inputBlur.timeInput3Blur;

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
        
        var totalInputFormTop = parseTime($scope.inputTime1, $scope.inputTime2, $scope.inputTime3);
        var totalTimeInput = parseTime($scope.inputFormTop1, $scope.inputFormTop2, $scope.inputFormTop3);

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
        var userUnits;

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

          userUnits = $scope.distUnits;
          
        // Alternatively, if the typed distance field is empty ...
        } else if (inputDropDistEmpty === false && inputTypeDistEmpty === true) {

          // Loop through the distance service to find the corresponding unit and value
          // in that object.
          for (i=0; i < $scope.list.length; i++) {

            if ($scope.inputDist === $scope.list[i].distance) {

              // The distance value that will be used for calc is the
              // value specified in that object.
              userDistance = $scope.list[i].value;
              userUnits = $scope.list[i].unit;

              if (userUnits === 0) {
                userUnits = 'mi';
              } else {
                userUnits = 'km';
              }
            }
          }

        // If both the typed and dropdown distance fields are filled, display error.
        } else if (inputTypeDistEmpty === false && inputDropDistEmpty === false){

          $scope.calcInfo.outputLabelTxtTopRes = "result";
          $scope.calcInfo.errWarningTxt = "Oops! Please only fill in one type of distance form";
          $scope.errWarning = true;
          $scope.calcInfo.outputDataTopUnit = "";
        }

        // Checking if the pace and time input fields are empty.
        if (totalInputFormTop === 0 || totalInputFormTop === undefined) {

          totalInputFormTopEmpty = true;
        }

        if (totalTimeInput === 0 || totalTimeInput === undefined) {

          totalTimeInputEmpty = true;
        }

        // ---- Error Combinations ---- //

        // If all the fields are filled ...
        if (totalInputFormTopEmpty === false && totalTimeInputEmpty === false && inputDistEmpty === false) {

          // Nothing is calculated and errors are shown. 
          $scope.calcInfo.outputLabelTxtTop = "Your ";
          $scope.calcInfo.outputLabelTxtTopRes = "result";
          $scope.calcInfo.errWarningTxt = "Oops! Please only fill in two options";
          $scope.errWarning = true;
          $scope.calcInfo.outputDataTopUnit = "";
          $scope.outputDataTop = "";

        // If none of the fields are filled ...
        } else if (inputDistEmpty === true && totalInputFormTopEmpty === true && totalTimeInputEmpty === true) {

          // Nothing is calculated and errors are shown.
          $scope.calcInfo.outputLabelTxtTop = "Your ";
          $scope.calcInfo.outputLabelTxtTopRes = "result";
          $scope.calcInfo.errWarningTxt = "Oops! You need to fill in two options";
          $scope.errWarning = true;
          $scope.calcInfo.outputDataTopUnit = "";
          $scope.outputDataTop = "";

        } else if (inputDistEmpty === false && totalInputFormTopEmpty === true && totalTimeInputEmpty === true){

          $scope.calcInfo.outputLabelTxtTop = "Your ";
          $scope.calcInfo.outputLabelTxtTopRes = "result";
          $scope.calcInfo.errWarningTxt = "Oops! You need to fill in two options";
          $scope.errWarning = true;
          $scope.calcInfo.outputDataTopUnit = "";
          $scope.outputDataTop = "";

        } else if (inputDistEmpty === true && totalInputFormTopEmpty === false && totalTimeInputEmpty === true){

          $scope.calcInfo.outputLabelTxtTop = "Your ";
          $scope.calcInfo.outputLabelTxtTopRes = "result";
          $scope.calcInfo.errWarningTxt = "Oops! You need to fill in two options";
          $scope.errWarning = true;
          $scope.calcInfo.outputDataTopUnit = "";
          $scope.outputDataTop = "";

        } else if (inputDistEmpty === true && totalInputFormTopEmpty === true && totalTimeInputEmpty === false){

          $scope.calcInfo.outputLabelTxtTop = "Your ";
          $scope.calcInfo.outputLabelTxtTopRes = "result";
          $scope.calcInfo.errWarningTxt = "Oops! You need to fill in two options";
          $scope.errWarning = true;
          $scope.calcInfo.outputDataTopUnit = "";
          $scope.outputDataTop = "";

        // ---- Valid Combinations ---- //

        // If the time and pace(inputFormTop) forms are filled but the distance is empty ...
        } else if (totalInputFormTopEmpty === false && totalTimeInputEmpty === false && inputDistEmpty === true) {

          // Distance is calculated and outputted to the user using $scope.calcInfo.
          $scope.calcInfo.outputLabelTxtTop = "The ";
          $scope.calcInfo.outputLabelTxtTopRes = "distance you can run";
          $scope.errWarning = false;

          // Distance calculation.
          outputDistance = (totalTimeInput / 60) / (totalInputFormTop / 60);

          $scope.outputDataTop = outputDistance;
          $scope.calcInfo.outputDataTopUnit = " " + $scope.distUnits;


        // If the time and and distance forms are filled but the pace is empty ... 
        } else if (totalTimeInputEmpty === false && inputDistEmpty === false && totalInputFormTopEmpty === true) {

          // Pace is calculated and outputted to the user.
          $scope.calcInfo.outputLabelTxtTop = "The ";
          $scope.calcInfo.outputLabelTxtTopRes = "average pace needed for each " + userUnits;
          $scope.errWarning = false;

          // Pace calculation. 
          outputPace = (totalTimeInput) / userDistance;
          $scope.outputDataTop = (new Date(outputPace * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
          $scope.calcInfo.outputDataTopUnit = " per " + userUnits;


        // If the pace and distance forms are filled but the time is empty ... 
        } else if (totalInputFormTopEmpty === false && inputDistEmpty === false && totalTimeInputEmpty === true) {

          // Time is calculated and outputted to the user.
          $scope.calcInfo.outputLabelTxtTop = "Your ";
          $scope.calcInfo.outputLabelTxtTopRes = 'time to run  ' + userDistance + ' ' + userUnits;
          $scope.errWarning = false;

          // Time calculation. 
          outputTime = userDistance * (totalInputFormTop);

          $scope.outputDataTop = $scope.outputDataTop = (new Date(outputTime * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
          $scope.calcInfo.outputDataTopUnit = "";
        }
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
        $scope.calcInfo.outputLabelTxtTop = "Your ";
      };
    }]);
})();