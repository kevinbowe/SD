'use strict';

/**
 * @ngdoc function
 * @name sdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sdApp
 */
angular.module('sdApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
