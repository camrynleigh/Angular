var app = angular.module('MySum', [])

app.controller('SumController', ['$scope', function ($scope) {
    $scope.firstNumber = undefined;
    $scope.secondNumber = undefined;

    $scope.sumNumbers = function () {
        $scope.sum = parseInt($scope.firstNumber) + parseInt($scope.secondNumber);
    }
}])