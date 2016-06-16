(function(){

  'use strict';

  // Setting up controllers.
  angular.module('runnerCalcApp')

    .directive('noSpecialChar', function() {
      return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, element, attrs, modelCtrl) {
          modelCtrl.$parsers.push(function(inputValue) {
            if (inputValue == null)
              return ''
            var cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
            if (cleanInputValue != inputValue) {
              modelCtrl.$setViewValue(cleanInputValue);
              modelCtrl.$render();
            }
            return cleanInputValue;
          });
        }
      }
    })


    // Tab template controller
    .controller('MainTabCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

      function parallax(image, offsetX, offsetY) {
        let ypos = window.pageYOffset;
        image.css('transform', 'translate3d(' + (ypos * offsetX) + 'px,' + (ypos * offsetY) + 'px,0px)');
      }

      $(window).scroll(function(){
        parallax($('.background-road'), 0, 0.5);
      });

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

        container:    {
                        class: 'ageGradeContainer'
                      },

        errWarningText: "Oops! You're missing some info in the fields above",
        genderBtnHide: "false",

        inputDist:    {
                        class: "",
                        hide: "true"
                      },
        inputFormBot: {
                        hide: "false",
                        label: "hh:mm:ss",
                        name: "Time"
                      },
        inputFormTop: {
                        class: "moveAge",
                        hide: "false",
                        name: "Age"
                      },
        inputFormTrioHide: "true",

        output:       {
                        bottomHide: "",
                        height: "calcOutputAgeHeight",
                        textTop: "Your age-graded time",
                        textTopRes: "",
                        topUnit: ""
                      },

        title: "Age-Graded Calculator"
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

      $scope.calcInfo = {

        container:    {
                        class: 'bmiContainer'
                      },

        errWarningText: "Oops! You're missing some info in the fields above",
        genderBtnHide: "false",

        inputDist:    {
                        class: "",
                        hide: "true"
                      },
        inputFormBot: {
                        class: "move30",
                        hide: "false",
                        label: "",
                        name: "Height",
                        text: "feet"
                      },
        inputFormTop: {
                        class: "move30",
                        hide: "false",
                        name: "Weight",
                        text: "pounds"
                      },

        inputFormTrioHide: "true",

        output:       {
                        bottomHide: "true",
                        height: "calcOutputBMIHeight",
                        textTop: "Your BMI",
                        textTopRes: "",
                        topUnit: ""
                      },

        title: "BMI Calculator"
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


      $scope.calcInfo = {

        container:    {
                        class: 'paceContainer'
                      },

        errWarningText: "Oops! You need to fill in two options",
        genderBtnHide: "true",

        inputDist:    {
                        class: "sizeDist",
                        hide: "false"
                      },
        inputFormBot: {
                        hide: "true",
                        label: "mm:ss per mile or km",
                        name: "Pace"
                      },
        inputFormTop: {
                        class: "movePace",
                        hide: "true",
                        name: "Time"
                      },
        inputFormTrioHide: "false",

        output:       {
                        bottomHide: "true",
                        height: "calcOutputPaceHeight",
                        textTop: "Your",
                        textTopRes: "result",
                        topUnit: ""
                      },
        title: "Running Pace Calculator"
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

      var distErrStr = "Oops! Please only fill in one type of distance form";
      var tooFewErrStr = "Oops! Please fill in two options";
      var tooManyErrStr = "Oops! You only need to fill in two options";

      // Calculate button scope.
      $scope.calcButton = function (){

        // Accessing the parseTime function to find total time in seconds.
        
        var totalInputFormTop = parseTime($scope.inputTime1, $scope.inputTime2, $scope.inputTime3);
        var totalTimeInput = parseTime($scope.inputFormTop1, $scope.inputFormTop2, $scope.inputFormTop3);

        var allInputDistErr;
        var inputDistEmpty;
        var inputDropDistEmpty;
        var inputTypeDistEmpty;
        var totalInputFormTopEmpty;
        var totalTimeInputEmpty;
        var userDistance;
        var chosenDistVal;
        var chosenDistUnit;

        // Setting var and field defaults per calc btn click.
        allInputDistErr = false;
        inputDistEmpty = false;
        inputDropDistEmpty = false;
        inputTypeDistEmpty = false;
        totalInputFormTopEmpty = false;
        totalTimeInputEmpty = false;
        chosenDistVal = undefined;
        chosenDistUnit = undefined;
        userDistance = undefined;
        var userUnits;

        function listLoop(i, max) {

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

          i++;

          if (i < max) {

            return listLoop(i, max);
          }  
        }

        // These statements find out which distance input the user decided to use. 
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
          listLoop(0, $scope.list.length);
          
        // If both the typed and dropdown distance fields are filled, display error.
        } else if (inputTypeDistEmpty === false && inputDropDistEmpty === false){

          allInputDistErr = true;
          $scope.calcInfo.outputLabelTxtTopRes = "result";
          $scope.calcInfo.errWarningTxt = distErrStr;
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

        function errCombo(inputDistTrue, inputFormTopTrue, inputTimeTrue, errType) {

          if (inputDistEmpty === inputDistTrue && totalInputFormTopEmpty === inputFormTopTrue && totalTimeInputEmpty === inputTimeTrue) {

            if (allInputDistErr === true) {
              $scope.calcInfo.errWarningTxt = distErrStr;
            } else {
              $scope.calcInfo.errWarningTxt = errType;
            }

            $scope.calcInfo.outputLabelTxtTop = "Your ";
            $scope.calcInfo.outputLabelTxtTopRes = "result";
            $scope.errWarning = true;
            $scope.calcInfo.outputDataTopUnit = "";
            $scope.outputDataTop = "";

          }
        }

        function successCombo(inputDistTrue, inputFormTopTrue, inputTimeTrue, str1, str2, str3, units, func) {

          if (inputDistEmpty === inputDistTrue && totalInputFormTopEmpty === inputFormTopTrue && totalTimeInputEmpty === inputTimeTrue) {
            $scope.calcInfo.outputLabelTxtTop = str1;
            $scope.calcInfo.outputLabelTxtTopRes = str2;
            $scope.errWarning = false;
            $scope.outputDataTop = func;
            $scope.calcInfo.outputDataTopUnit = str3 + units;
          }
        }

        function timeToHMS(time) {
          if (isNaN(time) === false) {
            return (new Date(time * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
          }
        }

        function calcDist(a, b) {
          return (a / 60) / (b / 60);
        }

        // ---- Error Combinations ---- //
        errCombo(false, false, false, tooManyErrStr);
        errCombo(true, true, true, tooFewErrStr);
        errCombo(false, true, true, tooFewErrStr);
        errCombo(true, false, true, tooFewErrStr);
        errCombo(true, true, false, tooFewErrStr);

        // ---- Success Combinations ---- //
        successCombo(true, false, false, "The ", "distance you can run", " ", $scope.distUnits, calcDist(totalTimeInput, totalInputFormTop));
        successCombo(false, true, false, "The ", "average pace needed for each " + userUnits, " per ", userUnits, timeToHMS((totalTimeInput / userDistance)));
        successCombo(false, false, true, "Your ", "time to run " + userDistance + " " + userUnits, "", "", timeToHMS((userDistance * totalInputFormTop)));

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
        $scope.calcInfo.errWarningTxt = tooFewErrStr;
        $scope.outputDataTop = '';
        $scope.calcInfo.outputDataTopUnit = "";
        $scope.calcInfo.outputLabelTxtTop = "Your ";
      };
    }]);
})();