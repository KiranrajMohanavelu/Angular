var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstname = "Kiranraj";
    $scope.sayHello = function() {
        return "Hello Coursera!";
    }; 
});