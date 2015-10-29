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
      .otherwise({
        redirectTo: '/'
      });
  })

  .directive('mainTab', function(){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      template: '<a href="#/" class="tabTabs"><li class="tabRowLi"ng-click="toggleSelect0()"ng-class="{true: \'selected\', false: \'tabRowLi\'}[isSelected0]"ng-disabled="{{trackClick[0]}}"><span class="tabText">Age-Grade</span></li></a>',
      // templateUrl: '',
      replace: true, //doesnt include custom tab in html, instead replaces it
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    };
  });
