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

    $scope.tech = [
      {
        tid:'1',
        name: 'mongodb',
        image: '/images/techlogos/mongo180a.png'
      },
      {
        tid:'2',
        name: 'express',
        image: '/images/techlogos/express180a.png'
      },
      {
        tid:'3',
        name: 'angular',
        image: '/images/techlogos/angular180a.png'
      },
      {
        tid:'4',
        name: 'node',
        image: '/images/techlogos/node180a.png'
      },
      {
        tid:'5',
        name: 'bower',
        image: '/images/techlogos/bower180a.png'
      },
      {
        tid:'6',
        name: 'grunt',
        image: '/images/techlogos/grunt180a.png'
      },
      {
        tid:'7',
        name: 'karma',
        image: '/images/techlogos/karma180a.png'
      },
      {
        tid:'8',
        name: 'bootstrap',
        image: '/images/techlogos/bootstrap180a.png'
      },
      {
        tid:'9',
        name: 'heroku',
        image: '/images/techlogos/heroku180a.png'
      },
      {
        tid:'10',
        name: 'sass',
        image: '/images/techlogos/sass180a.png'
      },
      {
        tid:'11',
        name: 'yeoman',
        image: '/images/techlogos/yeoman180a.png'
      },
      {
        tid:'12',
        name: 'github',
        image: '/images/techlogos/github180a.png'
      },
      {
        tid:'13',
        name: 'phonegap',
        image: '/images/techlogos/phonegap180a.png'
      },
      {
        tid:'14',
        name: 'cordova',
        image: '/images/techlogos/cordova180a.png'
      },
      {
        tid:'15',
        name: 'senchatouch',
        image: '/images/techlogos/sencha180a.png'
      },
      {
        tid:'16',
        name: 'ionic',
        image: '/images/techlogos/ionic180a.png'
      },
      {
        tid:'17',
        name: 'atom',
        image: '/images/techlogos/atom180a.png'
      },
      {
        tid:'18',
        name: 'unity',
        image: '/images/techlogos/unity180a.png'
      },
      {
        tid:'19',
        name: 'webgl',
        image: '/images/techlogos/webgl180a.png'
      },
      {
        tid:'20',
        name: 'vs',
        image: '/images/techlogos/vs180a.png'
      },
      {
        tid:'21',
        name: 'hibernate',
        image: '/images/techlogos/hibernate180a.png'
      },
      {
        tid:'22',
        name: 'wicket',
        image: '/images/techlogos/wicket180a.png'
      },
      {
        tid:'23',
        name: 'play',
        image: '/images/techlogos/play180a.png'
      },
      {
        tid:'24',
        name: 'svn',
        image: '/images/techlogos/svn180a.png'
      }
    ];
  });
