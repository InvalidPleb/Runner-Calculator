'use strict';

/**
 * @ngdoc function
 * @name runnerCalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the runnerCalcApp
 */
angular.module('runnerCalcApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.run = '';
  	$scope.list = [
	    {
	      Event: '1Mile',
	      Title: '1 mile'
	    }, {
	      Event: '2km',
	      Title: '2 km'
	    }, {
	      Event: '3km',
	      Title: '3 km'
	    }, {
	      Event: '2Mile',
	      Title: '2 mile'
	    }, {
	      Event: '4km',
	      Title: '4 km'
	    }, {
	      Event: '3Mile',
	      Title: '3 mile'
	    }, {
	      Event: '5kmRoad',
	      Title: '5 km road'
	    }, {
	      Event: '5km',
	      Title: '5 km'
	    }, {
	      Event: '6kmRoad',
	      Title: '6 km road'
	    }, {
	      Event: '6km',
	      Title: '6 km'
	    }, {
	      Event: '4MileRoad',
	      Title: '4 mile road'
	    }, {
	      Event: '4Mile',
	      Title: '4 mile'
	    }, {
	      Event: '8kmRoad',
	      Title: '8 km road'
	    }, {
	      Event: '8km',
	      Title: '8 km'
	    }, {
	      Event: '5MileRoad',
	      Title: '5 mile road'
	    }, {
	      Event: '5Mile',
	      Title: '5 mile'
	    }, {
	      Event: '10kmRoad',
	      Title: '10 km road'
	    }, {
	      Event: '10km',
	      Title: '10 km'
	    }, {
	      Event: '12km',
	      Title: '12 km'
	    }, {
	      Event: '15km',
	      Title: '15km'
	    }, {
	      Event: '10Mile',
	      Title: '10 mile'
	    }, {
	      Event: '20km',
	      Title: '20 km'
	    }, {
	      Event: 'Half.Mar',
	      Title: 'half mar'
	    }, {
	      Event: '25km',
	      Title: '25 km'
	    }, {
	      Event: '30km',
	      Title: '30 km'
	    }, {
	      Event: 'Marathon',
	      Title: 'marathon'
	    }, {
	      Event: '50km',
	      Title: '50 km'
	    }, {
	      Event: '50Mile',
	      Title: '50 mile'
	    }, {
	      Event: '100km',
	      Title: '100 km'
	    }, {
	      Event: '150km',
	      Title: '150 km'
	    }, {
	      Event: '100Mile',
	      Title: '100 mile'
	    }, {
	      Event: '200km',
	      Title: '200 km'
	    }
	];

  	$scope.updateInputDist = function() {

  	};



  	$scope.updateInputTime = function() {

  	};

  	$scope.inputTime1 = '00';
  	$scope.inputTime2 = '00';
  	$scope.inputTime3 = '00';

  	$scope.calcButtonOne = function (){

  		var timeInput1 = parseInt($scope.inputTime1, 10);
	    var timeInput2 = parseInt($scope.inputTime2, 10);
	    var timeInput3 = parseInt($scope.inputTime3, 10);

	    var timeInput1Adjusted = (timeInput1 * 60) * 60;
	    var timeInput2Adjusted = timeInput2 * 60;
	    var totalTimeInput = timeInput1Adjusted + timeInput2Adjusted + timeInput3;
	    console.log(totalTimeInput);

  	};

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

  	var genderUser = 2;








  });
