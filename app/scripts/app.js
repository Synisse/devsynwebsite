'use strict';

/**
 * @ngdoc overview
 * @name devsynProject
 * @description
 * # devsynProject
 *
 * Main module of the application.
 */
angular
  .module('devsynProject', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/aboutme',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/aboutme', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/aboutme'
      });
  });
