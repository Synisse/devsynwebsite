'use strict';

/**
 * @ngdoc function
 * @name devsynProject.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devsynProject
 */
angular.module('devsynProject')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
