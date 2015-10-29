'use strict'; 

angular.module('runnerCalcApp')
  .controller('DensAltCtrl', function () {
  	/*

	var latUser = 0;
    var longUser = 0;

    var $this=$(this);
    $this.attr('disabled','disabled');

    setTimeout(function() {

        $this.removeAttr('disabled');

    }, 3000);


    navigator.geolocation.getCurrentPosition(GetLocation, err);

    function GetLocation(location) {
        latUser = location.coords.latitude;
        longUser = location.coords.longitude;

    //"http://api.wunderground.com/api/74ce66235950b991/geolookup/q/"+latUser+","+longUser+".json"
    //"http://api.wunderground.com/api/74ce66235950b991/geolookup/q/autoip.json"

        $.ajax({
             url:"http://api.wunderground.com/api/74ce66235950b991/geolookup/q/"+latUser+","+longUser+".json",
             dataType: 'jsonp', 

             success:function(json){

                var nearestStation = json.location.nearby_weather_stations.pws.station[0].id;

                $.ajax({
                    url:"http://api.wunderground.com/api/74ce66235950b991/conditions/q/pws:"+nearestStation+".json",
                    dataType: 'jsonp', 
                    success:function(json){

                    var pressure = parseInt(json.current_observation.pressure_in);
                    var alt1 = json.current_observation.observation_location.elevation;
                    var alt2 = alt1.slice(0,-3);
                    var altitude = parseInt(alt2);
                    var oat = json.current_observation.temp_c;
                    var altM = altitude * .3048;
                    var pStn = (Math.pow(((288 - (altM * .0065)) / 288), 5.2561)) * pressure;
                    var pStnMb = pStn * 33.8639;
                    var pressureAlt = (1 - (Math.pow((pStnMb / 1013.25), .190284))) * 145366.45;
                    var isa = 15 - (altitude / 500);
                    var densityAltitude = pressureAlt + (120 * (oat - isa));
                    console.log(densityAltitude);
                
                     },
                     error:function(){
                         console.log("Error");
                     }      
                });

             },
             error:function(){
                 console.log("Error");
             }      
        });
    }

    function err(error) {

        switch(error.code){

            case error.PERMISSION_DENIED:
                alert("Access is Denied");
                break;

            case error.POSITION_UNAVAILABLE:
                alert("Position is unavailable");
                break; 

            case error.TIMEOUT:
                alert("Timed Out");
                break;

            case error.UNKNOWN_ERROR:
                alert("Unknown Error");
                break;              
        }
    }

    */
});