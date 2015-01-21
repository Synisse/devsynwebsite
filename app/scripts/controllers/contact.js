'use strict';

/**
 * @ngdoc function
 * @name yeomantestApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yeomantestApp
 */
angular.module('devsynProject')
  .controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.success = false;
    $scope.error = false;

    //Send mail function for contact form
    $scope.send = function () {

      var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
      '<div>Email: ' + $scope.user.email + '</div>' +
      '<div>Message: ' + $scope.user.body + '</div>' +
      '<div>Date: ' + (new Date()).toString() + '</div>';

      $http({
        url: 'https://api.postmarkapp.com/email',
        method: 'POST',
        data: {
          'From': 'info@devsyn.de',
          'To': 'stefan-krueger@hotmail.de',
          'HtmlBody': htmlBody,
          'Subject': 'New Contact Form Submission'
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Postmark-Server-Token': 'addtokenhere'
        }
      }).
      success(function () {
        $scope.success = true;
        $scope.user = {};
      }).
      error(function () {
        $scope.error = true;
      });
    };

    //Social icon list for contact information
    $scope.socialLinks = [
      {
        name : 'Xing',
        icon : 'circlexing',
        link : 'https://www.xing.com/profile/Stefan_Krueger67'
      },
      {
        name : 'GitHub',
        icon : 'circlegithubalt',
        link : 'www.github.com/Synisse/'
      },
      {
        name : 'GPlus',
        icon : 'circlegoogleplus',
        link : 'https://plus.google.com/u/0/114999813694368492577'
      },
      {
        name : 'Twitter',
        icon : 'circletwitterbird',
        link : 'https://twitter.com/Synisse87'
      },
      {
        name : 'Email',
        icon : 'circleemail',
        link : 'mailto:stefan.krueger@hotmail.de'
      }
    ];

  }]);
