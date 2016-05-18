(function() {

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
        .when('/pace-calculator', {
          templateUrl: 'views/pacecalc.html',
          controller: 'PaceCtrl',
          controllerAs: 'main'
        })
        .when('/age-graded-calculator', {
          templateUrl: 'views/agegrade.html',
          controller: 'AgeGradeCtrl',
          controllerAs: 'pace'
        })
        .when('/bmi-calculator', {
          templateUrl: 'views/bmi.html',
          controller: 'BmiCtrl',
          controllerAs: 'bmi'
        })
        .otherwise({
          redirectTo: '/pace-calculator'
        });
    }]);
})();

