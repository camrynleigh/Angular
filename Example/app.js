var app = angular.module('myApp', [])

app.service('MyService', function () {
    this.add = function (num1, num2) {
        return num1 + num2
    }
})

app.controller('MainController', ['$scope', 'MyService', function ($scope, MyService) {
    $scope.myNum = MyService.add(1, 2)

    $scope.doubleMyNum = function () {
        return 2 * $scope.myNum
    }


    $scope.students = [
        {
            name: 'Gavin',
            age: 21
        },
        {
            name: 'Camryn',
            age: 26
        },
        {
            name: 'Sarah',
            age: 31
        }

    ];


    $scope.myInput = '';

    $scope.printMyInput = function () {
        console.log($scope.myInput);
    };


}])