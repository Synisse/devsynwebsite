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
    	{
        pid:'1',
        name: 'OpenGL-Game',
        technology:['C++','Visual Studio', 'Glut'],
        description: 'Programmed a small basic OpenGL Game.',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 100
      },
    	{
        pid:'2',
        name: 'Ambient Intelligence',
        description: 'yololol2',
        image: 'http://i.imgur.com/dockT8c.jpg',
        percent: 100
      },
      {
        pid:'3',
        name: 'Neural Network',
        technology:[],
        description: 'yololol3',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 100
      },
      {
        pid:'4',
        name: 'Q-Learning',
        technology:[],
        description: 'yololol4',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 100
      },
      {
        pid:'5',
        name: 'Face Recognition',
        technology:[],
        description: 'yololol5',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 100
      },
      {
        pid:'6',
        name: 'Action Paintball',
        technology:[],
        description: 'yololol6',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 30
      },
      {
        pid:'7',
        name: 'Action Sudoku',
        technology:[],
        description: 'yololol7',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 10
      },
      {
        pid:'8',
        name: 'Hybrid App',
        technology:[],
        description: 'yololol8',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 80
      },
      {
        pid:'9',
        name: 'Forex Clock',
        technology:[],
        description: 'yololol8',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 100
      },
      {
        pid:'0',
        name: 'Devsyn Website',
        technology:[],
        description: 'yololol8',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 50
      }
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
