angular.module('tripApp', [])
.controller('TripController', function($scope) {
    $scope.currentStep = 1;
    $scope.trip = {};
    $scope.trips = [];

    $scope.nextStep = function() {
        if ($scope.currentStep < 3) {
            $scope.currentStep++;
        }
    };

    $scope.submitForm = function() {
        $scope.trips.push(angular.copy($scope.trip));
        $scope.trip = {};
        $scope.currentStep = 1;
    };
});
