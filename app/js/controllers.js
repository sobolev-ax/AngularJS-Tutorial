var phonecatApp  = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
    $http.get('phones/others/phones.json')
        .success(function(data, status, headers, config){
            console.log('This is data: ', data, '\n\n This is status: ', status, '\n\n This is headers: ', headers, '\n\n This is config: ', config);
            $scope.phones = data;
        }).error(function() {
            
        })
    
    $scope.title = "Телефоны";
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