'use strict';

/**
 * @ngdoc function
 * @name devsynProject.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devsynProject
 */
angular.module('devsynProject')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Array of techimages for the aboutpage techlist
    $scope.tech = [
      {
        tid:'1',
        name: 'mongodb',
        image: '/techlogos/mongo180a.png'
      },
      {
        tid:'2',
        name: 'express',
        image: '/techlogos/express180a.png'
      },
      {
        tid:'3',
        name: 'angular',
        image: '/techlogos/angular180a.png'
      },
      {
        tid:'4',
        name: 'node',
        image: '/techlogos/node180a.png'
      },
      {
        tid:'5',
        name: 'bower',
        image: '/techlogos/bower180a.png'
      },
      {
        tid:'6',
        name: 'grunt',
        image: '/techlogos/grunt180a.png'
      },
      {
        tid:'7',
        name: 'karma',
        image: '/techlogos/karma180a.png'
      },
      {
        tid:'8',
        name: 'bootstrap',
        image: '/techlogos/bootstrap180a.png'
      },
      {
        tid:'9',
        name: 'heroku',
        image: '/techlogos/heroku180a.png'
      },
      {
        tid:'10',
        name: 'sass',
        image: '/techlogos/sass180a.png'
      },
      {
        tid:'11',
        name: 'yeoman',
        image: '/techlogos/yeoman180a.png'
      },
      {
        tid:'12',
        name: 'github',
        image: '/techlogos/github180a.png'
      },
      {
        tid:'13',
        name: 'phonegap',
        image: '/techlogos/phonegap180a.png'
      },
      {
        tid:'14',
        name: 'cordova',
        image: '/techlogos/cordova180a.png'
      },
      {
        tid:'15',
        name: 'senchatouch',
        image: '/techlogos/sencha180a.png'
      },
      {
        tid:'16',
        name: 'ionic',
        image: '/techlogos/ionic180a.png'
      },
      {
        tid:'17',
        name: 'atom',
        image: '/techlogos/atom180a.png'
      },
      {
        tid:'18',
        name: 'unity',
        image: '/techlogos/unity180a.png'
      },
      {
        tid:'19',
        name: 'webgl',
        image: '/techlogos/webgl180a.png'
      },
      {
        tid:'20',
        name: 'vs',
        image: '/techlogos/vs180a.png'
      },
      {
        tid:'21',
        name: 'hibernate',
        image: '/techlogos/hibernate180a.png'
      },
      {
        tid:'22',
        name: 'wicket',
        image: '/techlogos/wicket180a.png'
      },
      {
        tid:'23',
        name: 'play',
        image: '/techlogos/play180a.png'
      },
      {
        tid:'24',
        name: 'svn',
        image: '/techlogos/svn180a.png'
      }
    ];
  });
