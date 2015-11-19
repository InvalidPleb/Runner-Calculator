'use strict'; 

angular.module('runnerCalcApp')
  .controller('DensAltCtrl', function ($scope, $http) {

  	$scope.densButton = function (){

	  	var latUser = 0;
	    var longUser = 0;

	    navigator.geolocation.getCurrentPosition(GetLocation, err);

	    function GetLocation(location) {
	        latUser = location.coords.latitude;
	        longUser = location.coords.longitude;

	        $http({
	            url:"http://api.wunderground.com/api/74ce66235950b991/geolookup/q/"+latUser+","+longUser+".json",
	            dataType: 'jsonp' 

	        	}).success(function(json){

	        		var nearestStation = json.location.nearby_weather_stations.pws.station[0].id;

	        		$http({

	        			url:"http://api.wunderground.com/api/74ce66235950b991/conditions/q/pws:"+nearestStation+".json",
	                    dataType: 'jsonp', 
	                }).success(function(json){

	                	//what if this calculation was put into a global method & referenced

		        		var pressure = parseInt(json.current_observation.pressure_in);
		                var alt1 = json.current_observation.observation_location.elevation;
		                var alt2 = alt1.slice(0,-3);
		                var altitude = parseInt(alt2);
		                var oat = json.current_observation.temp_c;
		                var altM = altitude * 0.3048;
		                var pStn = (Math.pow(((288 - (altM * 0.0065)) / 288), 5.2561)) * pressure;
		                var pStnMb = pStn * 33.8639;
		                var pressureAlt = (1 - (Math.pow((pStnMb / 1013.25), 0.190284))) * 145366.45;
		                var isa = 15 - (altitude / 500);
		                var densityAltitude = pressureAlt + (120 * (oat - isa));
		                $scope.outputDensAlt = densityAltitude;
		                console.log(densityAltitude);

			        }).error(function(){
	                    console.log("Error");
	                });

	        	}).error(function(){
	        		console.log("Error");
	        	});
	    }

	    function err(error) {

	        switch(error.code){

	            case error.PERMISSION_DENIED:
	                console.log("Access is Denied");
	                break;

	            case error.POSITION_UNAVAILABLE:
	                console.log("Position is unavailable");
	                break; 

	            case error.TIMEOUT:
	                console.log("Timed Out");
	                break;

	            case error.UNKNOWN_ERROR:
	                console.log("Unknown Error");
	                break;              
	        }
	    }
	};






  	/*

	

    var $this=$(this);
    $(this).attr('disabled','disabled');

    setTimeout(function() {

        $(this).removeAttr('disabled');

    }, 3000);

	*/


});