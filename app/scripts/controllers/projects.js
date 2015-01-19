'use strict';

/**
 * @ngdoc function
 * @name yeomantestApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the yeomantestApp
 */
angular.module('devsynProject')
  .controller('ProjectsCtrl', ['$scope', '$modal', '$log', '$http', function ($scope,$modal, $log, $http) {
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
        technology:['C++','VS2012', 'OpenGL', 'Glut', 'Landscape Generation', 'Fractal Objects', 'Lighting'],
        description: 'A small OpenGL Game.',
        image: 'http://i.imgur.com/JSwz5Az.png',
        percent: 100,
        youtube: 'http://www.youtube.com/embed/p3XU0tvEy70',
        screenshots: [],
        longdescription: ''
      },
    	{
        pid:'2',
        name: 'Ambient Intelligence',
        technology:['C#', 'Java', 'Hibernate', 'Wicket', 'XAML', 'Machine Learning', 'Face Recognition', 'Haar Classifier', 'OpenCV'],
        description: 'An ambient intelligence system to improve the life of a student.',
        image: 'http://i.imgur.com/dockT8c.jpg',
        percent: 100,
        youtube: '',
        screenshots: [],
        longdescription: ''
      },
      {
        pid:'3',
        name: 'Neural Network',
        technology:['C#', 'WPF', 'XAML', 'Hebbian learning rule'],
        description: 'A Neural Network to classify the color of pixels in a 100x100 Grid.',
        image: 'http://i.imgur.com/yhPE3h6.png',
        percent: 100,
        youtube: '',
        screenshots: [],
        longdescription: ''
      },
      {
        pid:'4',
        name: 'Q-Learning',
        technology:['C#', 'WPF', 'XAML'],
        description: 'Implementation of the Q-Learning algorithm to find the quickest path through randomizable maze.',
        image: 'http://i.imgur.com/V2Vsftv.png',
        percent: 100,
        youtube: '',
        screenshots: [],
        longdescription: ''
      },
      {
        pid:'5',
        name: 'Face Recognition',
        technology:['C++', 'OpenCV', 'Java', 'Android', 'Eigenfaces'],
        description: 'A Face Recognition implementation with openCV.',
        image: 'http://i.imgur.com/eqswyux.png',
        percent: 100,
        youtube: '',
        screenshots: [],
        longdescription: ''
      },
      {
        pid:'6',
        name: 'Action Paintball',
        technology:['Unity3D', 'C#', 'JavaScript', 'Blender', 'Cinema4D'],
        description: 'A dynamic QuakeIII-styled paintball game. ',
        image: 'http://i.imgur.com/2Xef5by.png',
        percent: 30,
        youtube: '',
        screenshots: ['http://i.imgur.com/2KKlh46.png'],
        longdescription: 'A dynamic QuakeIII-styled paintball game built with Unity 3D. You can '+
          'test the current state of the game right <a target="_blank" href="http://devsyn.de/UnityTest/NetworkBuilds/webbuild0123.html">'+
          'here </a>.'
      },
      // {
      //   pid:'7',
      //   name: 'Action Sudoku',
      //   technology:['Unity3D', 'C#', 'JavaScript'],
      //   description: 'not yet started',
      //   image: 'http://i.imgur.com/JSwz5Az.png',
      //   percent: 10
      // },
      {
        pid:'8',
        name: 'Hybrid App',
        technology:['Sencha Touch', 'JavaScript', 'HTML5', 'CSS3', 'ExtJS', 'iOS', 'Android'],
        description: 'culimatch',
        image: 'http://i.imgur.com/bkid9ze.png',
        percent: 80,
        youtube: '',
        screenshots: [],
        longdescription: ''
      },
      {
        pid:'9',
        name: 'Forex Clock',
        technology:['AngularJS', 'JavaScript', 'PHP', 'Ionic', 'HTML5', 'CSS3', 'Cordova', 'iOS', 'Android', 'Chrome Extensions'],
        description: 'forex4noobs',
        image: 'http://i.imgur.com/gawtIAC.png',
        percent: 100,
        youtube: '',
        screenshots: [],
        longdescription: ''
      },
      {
        pid:'10',
        name: 'WCF Game',
        technology:['C#', 'WCF', 'WPF', 'XAML'],
        description: 'Implementation of the Rock-Paper-Scissors-Lizard-Spock Game.',
        image: 'http://i.imgur.com/sLcyzlx.png',
        percent: 100,
        youtube: '',
        screenshots: [],
        longdescription: ''
      },
      {
        pid:'11',
        name: 'ExamDroid',
        technology:['XML', 'MathML', 'Java', 'Android'],
        description: 'Android App to learn some basic Math.',
        image: 'http://i.imgur.com/pisE9OW.png',
        percent: 70,
        youtube: '',
        screenshots: [],
        longdescription: ''
      },
      {
        pid:'11',
        name: 'Devsyn Website',
        technology:['MongoDB', 'Express', 'AngularJS', 'NodeJS', 'HTML5', 'CSS3', 'Yeoman', 'Grunt', 'Bower', 'Sass'],
        description: 'this.website',
        image: 'http://i.imgur.com/Xpq8Scm.png',
        percent: 50,
        youtube: '',
        screenshots: [],
        longdescription: ''
      }
    ];

    $scope.projectstwo = '';

    $http.get('https://frozen-brook-4202.herokuapp.com/projects').
      success(function(data){
        $scope.projectstwo = data;
        console.log('projectsdone');
      }).
      error(function(){
        //todo
      });

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

    $scope.hasVideo = function (project){
      console.log('called');
      if(project.youtube === ''){
        return false;
      }

      return true;

    };

    $scope.hasScreenshots = function (project){

      console.log(project.screenshots.length);
      if(project.screenshots.length === 0){
          return false;
      }

      return true;
    };

    $scope.hasLongDescription = function (project){
      if(project.longdescription === ''){
        return false;
      }

      return true;
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.getTechString = function(project){
      var concatTech = '';
      for (var i = 0; i < project.technology.length; i++) {
        concatTech += project.technology[i] + ', ';
      }
      concatTech = concatTech.substring(0,concatTech.length-2);
      return concatTech;
    };

    $scope.project = project;

  }]);
