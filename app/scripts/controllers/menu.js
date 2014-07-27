'use strict';

/**
 * @ngdoc function
 * @name devsynProject.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the devsynProject
 */
angular.module('devsynProject')
  .controller('MenuCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.testString = 'teststring';
    $scope.getClass = function(path) {
    	if($location.path().substr(0,path.length) === path) {
    		return 'active';
    	} else {
    		return '';
    	}
    };
  });
