'use strict';

/**
 * @ngdoc function
 * @name devsynProject.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the devsynProject
 */
// angular.module('devsynProject', ['ui.bootstrap'])
angular.module('devsynProject')
  .controller('MenuCtrl', function ($scope, $location) {
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getClass = function(path) {
    	if($location.path().substr(0,path.length) === path) {
    		return 'active';
    	} else {
    		return '';
    	}
    };

    $scope.isActive = function(path) {
      if($location.path().substr(0,path.length) === path) {
        return true;
      } else {
        return false;
      }
    };
  });
