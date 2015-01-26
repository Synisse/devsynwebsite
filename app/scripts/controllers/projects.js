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

    //Current placeholder for project data
    //Pulled from backend in the future
    $scope.projects = '';

    $http.get('/data/projects.json').
      success(function(data) {
        $scope.projects = data;

        $scope.projects.range = function() {
          var range = [];
          for( var i = 0; i < $scope.projects.length; i = i + 3 ){
            range.push(i);
          }
          return range;
        };

      })
      .error(function(){
        console.log('project json nicht gelesen');
      });

    $scope.projectstwo = '';

    //API call to get the project data
    $http.get('https://frozen-brook-4202.herokuapp.com/projects').
      success(function(data){
        $scope.projectstwo = data;
        console.log('projectsdone');
      }).
      error(function(){
        //todo
      });

    //Function to build a usable string from the project's tech array
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



  }]);


  //Controller for the popup modals of the project details
  angular.module('devsynProject')
  .controller('ProjectsModalCtrl', ['$scope', '$modalInstance','project', '$sce', function ($scope, $modalInstance, project, $sce) {
    $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
    ];

    //This snippet is needed to include external URLs
    $scope.trustedSource = function(videoURL) {
      return $sce.trustAsResourceUrl(videoURL);
    };

    $scope.hasVideo = function (project){
      if(project.youtube === ''){
        return false;
      }

      return true;

    };

    $scope.hasSourceCode = function (project){
      if(project.sourcecode === ''){
        return false;
      }

      return true;

    };

    $scope.hasScreenshots = function (project){
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
