(function () {
'use strict';

angular.module('dependency_app', [])

.controller('dependencyappcontroller', dependencyController);

dependencyController.$inject = [$scope, $filter];
function dependencyController($scope, $filter){
    $scope.name = "Kiranraj";

    $scope.upper = function() {
        var UpCase = $filter('uppercase');
        $scope.name = UpCase($scope.name);
    };
};

})();