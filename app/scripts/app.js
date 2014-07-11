'use strict';

/**
 * @ngdoc overview
 * @name tzevaAdomApp
 * @description
 * # tzevaAdomApp
 *
 * Main module of the application.
 */
angular
    .module('tzevaAdomApp', [
    'ngRoute',
    'ngAudio'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });