'use strict';

/**
 * @ngdoc function
 * @name tzevaAdomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tzevaAdomApp
 */
angular.module('tzevaAdomApp')
.controller('MainCtrl', ['$scope', '$http', '$interval', 'ngAudio', function ($scope, $http, $interval, ngAudio) {
        $scope.alerts = [];
        $scope.isLoading = false;
        $scope.prevAlerts = [];

        $interval(function () {
            $scope.isLoading = true;
            
            $http.get('http://tzevadom.net84.net/').success(function (response) {
                $scope.prevAlerts = $scope.prevAlerts.concat($scope.alerts);
                $scope.alerts = angular.fromJson(response.replace(/\r?\n?[^\r\n]*$/, "")).data;
                
                var tmpArr = [];
                
                angular.forEach($scope.alerts, function(value) {
                    tmpArr.push({place: value, time: new Date()});
                });
                
                if ($scope.alerts.length > 0)
                {
                    $scope.audio1.playPause();
                }
                
                $scope.isLoading = false;
            });
        }, 5000);
    }]);