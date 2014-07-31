'use strict';

/**
 * @ngdoc function
 * @name yeomantestApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yeomantestApp
 */
angular.module('devsynProject')
  .controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
