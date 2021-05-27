(function () {
'use strict';
angular.module('CalcApp',[])

.controller('NameCalculatorController', function($scope) {
    $scope.name = "";
    $scope.Totalvalue = 0;
    //$scope.totalNameValue = 0;


    $scope.totalNumeric = function() {
        var totalNameValue = getNumericofString($scope.name);
        $scope.TotalValue = totalNameValue;
        //console.log($scope.TotalValue);
        //return $scope.TotalValue;
    };
    
    function getNumericofString(str) {
        var totalStringValue = 0;
        for(var i=0;i<str.length; i++){
            totalStringValue += str.charCodeAt(i);
        }
        return totalStringValue;
    }
});
})();

