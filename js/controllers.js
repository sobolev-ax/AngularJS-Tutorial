'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', ['ngRoute']);

phonecatApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
  $routeProvide
    .when('/', {
      templateUrl: 'template/home.html',
      controller: 'PhoneListCtrl'
    })
    .when('/about', {
      templateUrl: 'template/about.html',
      controller: 'AboutCtrl'
    })
    .when('/contact', {
      templateUrl: 'template/contact.html',
      controller: 'ContactCtrl'
    })
    .when('/phones/:phoneId', {
      templateUrl: 'template/phone-detail.html',
      controller: 'PhoneDetailCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
}])

phonecatApp.controller('PhoneListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

  $http.get('phones/phones.json').success(function(data, status, headers, config) {
    $scope.phones = data;
  });

  $scope.today = new Date();
}]);

phonecatApp.controller('AboutCtrl', ['$scope','$http', '$location', function($scope, $http, $location) {

}]);

phonecatApp.controller('ContactCtrl', ['$scope','$http', '$location', function($scope, $http, $location) {

}]);

phonecatApp.controller('PhoneDetailCtrl', ['$scope','$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}]);
