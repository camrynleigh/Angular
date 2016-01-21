var app = angular.module('learningAngular', []);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.about = [
        {
            firstName: "Camryn",
            lastName: "Muir",
            myAge: 26

    }
]

}]);