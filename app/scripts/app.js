'use strict';

/**
 * @ngdoc overview
 * @name runnerCalcApp
 * @description
 * # runnerCalcApp
 *
 * Main module of the application.
 */
angular
  .module('runnerCalcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/agegrade.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/pace', {
        templateUrl: 'views/pacecalc.html',
        controller: 'PaceCtrl',
        controllerAs: 'pace'
      })
      .when('/bmi', {
        templateUrl: 'views/bmi.html',
        controller: 'BmiCtrl',
        controllerAs: 'bmi'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

