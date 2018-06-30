var phonecatApp  = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.title = "Телефоны";
    $scope.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          status: true,
          priority: 1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          status: false,
          priority: 2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          status: true,
          priority: 3
        }
    ];
    $scope.today = new Date();
    $scope.doneAndFilter = function(phoneItem) {
        return phoneItem.name && phoneItem.priority > 1
    }
    $scope.sortField = undefined;
    $scope.reverse = false;
    $scope.sort = function (fieldName) {
        if ($scope.sortField !== fieldName) {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        } else {
            $scope.reverse = !$scope.reverse;
        }
    }
    $scope.isSortUp = function(fieldName) {
        return $scope.sortField === fieldName && $scope.reverse;
    }
    $scope.isSortDown = function(fieldName) {
        return $scope.sortField === fieldName && !$scope.reverse;
    }
})