'use strict';

/**
 * @ngdoc function
 * @name sdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdApp
 */
angular.module('sdApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
