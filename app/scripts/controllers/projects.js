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
    	{pid:'1', name: 'OpenGL-Game', technology:['C++','Visual Studio', 'Glut'],
        description: 'Programmed a small basic OpenGL Game.',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 100},
    	{pid:'2', name: 'Ambient Intelligence', technology:['C++', 'C#', 'JavaEE', 'Hibernate', 'Wicket','Visual Studio', 'Glut'], description: 'yololol2'},
      {pid:'3', name: 'Neural Network', description: 'yololol3'},
      {pid:'4', name: 'Q-Learning', description: 'yololol4'},
      {pid:'5', name: 'Face Recognition', description: 'yololol5'},
      {pid:'6', name: 'Action Paintball', description: 'yololol6'},
      {pid:'7', name: 'Action Sudoku', description: 'yololol7'},
      {pid:'8', name: 'Hybrid App', description: 'yololol8'},
      {pid:'9', name: 'Forex Clock', description: 'yololol8'},
      {pid:'0', name: 'Devsyn Website', description: 'yololol8'}
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

    $scope.gotImage = function(project){
      if(project.image === ''){
        return false;
      }else{
        return true;
      }
    };

    $scope.projects.range = function() {
      var range = [];
      for( var i = 0; i < $scope.projects.length; i = i + 3 ){
          range.push(i);
      }
      return range;
    };

  }]);
