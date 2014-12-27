'use strict';

/**
 * @ngdoc function
 * @name yeomantestApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the yeomantestApp
 */
angular.module('devsynProject')
  .controller('ProjectsCtrl', ['$scope', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.projects = [
    	{name: 'prj1', description: 'yololol'},
    	{name: 'prj2', description: 'yololol2'},
      {name: 'prj3', description: 'yololol3'},
      {name: 'prj4', description: 'yololol4'},
      {name: 'prj5', description: 'yololol'},
      {name: 'prj6', description: 'yololol2'},
      {name: 'prj7', description: 'yololol3'},
      {name: 'prj8', description: 'yololol4'}
    ];

    $scope.selectedItem = '';

    $scope.isSelected = function (){
      console.log('isslected called');
      if($scope.selectedItem === ''){
        return false;
      } else {
        return true;
      }
    };

    $scope.selectItem = function(project){
      //if($scope.selectedItem === ''){
        $scope.selectedItem = project.name;
      //}
      //else {
      //  this.selectedItem = '';
      //}
    };

    $scope.projects.range = function() {
      var range = [];
      for( var i = 0; i < $scope.projects.length; i = i + 3 ){
          range.push(i);
      }
      return range;
    };

  }]);
