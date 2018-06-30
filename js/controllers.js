'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', function($scope, $http) {
    $http.get('phones/phones.json').success(function(data, status, headers, config) {
        console.log('This is Data:',data,'\n\nThis is Status:',status,'\n\nThis is Headers:',headers,'\n\nThis is config:',config);
        $scope.phones = data;
    });

    $scope.today = new Date();
}]);



