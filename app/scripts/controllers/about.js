'use strict';

/**
 * @ngdoc function
 * @name devsynProject.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the devsynProject
 */
angular.module('devsynProject')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
