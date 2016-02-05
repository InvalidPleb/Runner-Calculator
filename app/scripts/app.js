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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/densalt', {
        templateUrl: 'views/densalt.html',
        controller: 'DensAltCtrl',
        controllerAs: 'densAlt'
      })
      .when('/pace', {
        templateUrl: 'views/pacecalc.html',
        controller: 'PaceCtrl',
        controllerAs: 'pace'
      })
      .when('/paceconvert', {
        templateUrl: 'views/paceconvert.html',
        controller: 'DensAltCtrl',
        controllerAs: 'paceConvert'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

