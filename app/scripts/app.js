'use strict';

/**
 * @ngdoc overview
 * @name sdApp
 * @description
 * # sdApp
 *
 * Main module of the application.
 */
angular
  .module('sdApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
