'use strict';

/**
 * @ngdoc function
 * @name yeomantestApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the yeomantestApp
 */
angular.module('devsynProject')
  .controller('ProjectsCtrl', ['$scope', '$modal', '$log', function ($scope,$modal, $log) {
    // app.controller('ProjectsCtrl', ['$scope',  function ($scope) {
    $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
    ];
    $scope.selectedItem = '';

    $scope.open = function (size, selectedProject) {

      var modalInstance = $modal.open({
        templateUrl: 'views/projectmodal.html',
        controller: 'ProjectsModalCtrl',
        size: size,
        resolve: {
          project: function () {
            return selectedProject;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.projects = [
    	{
        pid:'1',
        name: 'OpenGL-Game',
        technology:['C++','VS2012', 'Glut', 'Landscape Generation', 'Fractal Objects', 'Lighting'],
        description: 'Programmed a small basic OpenGL Game.',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 100
      },
    	{
        pid:'2',
        name: 'Ambient Intelligence',
        technology:[],
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
        description: 'see demo',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 30
      },
      {
        pid:'7',
        name: 'Action Sudoku',
        technology:[],
        description: 'not yet started',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 10
      },
      {
        pid:'8',
        name: 'Hybrid App',
        technology:[],
        description: 'culimatch',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 80
      },
      {
        pid:'9',
        name: 'Forex Clock',
        technology:[],
        description: 'forex4noobs',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 100
      },
      {
        pid:'10',
        name: 'WCF Game',
        technology:[],
        description: 'Rock Paper Scissors Lizard Spock',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 100
      },
      {
        pid:'11',
        name: 'Devsyn Website',
        technology:[],
        description: 'this.website',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 50
      }
    ];


    $scope.getTechString = function(project){
      var concatTech = '';
      for (var i = 0; i < project.technology.length; i++) {
        concatTech += project.technology[i] + ', ';
      }
      concatTech = concatTech.substring(0,concatTech.length-2);
      return concatTech;
    };

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

  angular.module('devsynProject')
  .controller('ProjectsModalCtrl', ['$scope', '$modalInstance','project', function ($scope, $modalInstance, project) {
    // app.controller('ProjectsCtrl', ['$scope',  function ($scope) {
    $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
    ];

    $scope.project = project;

  }]);
