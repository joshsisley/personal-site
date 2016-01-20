/**
 * Created by joshuasisley on 1/19/16.
 */
angular.module('personalSite').controller("aboutController", function($scope) {
    $scope.showExperience = true;
    $scope.showSkills = false;
    $scope.showPhilanthropy = false;


    $scope.setExperience = function() {
        if ($scope.showExperience == false) {
            $scope.showExperience = true;
            $scope.showSkills = false;
            $scope.showPhilanthropy = false;
        }
    };

    $scope.setSkills = function() {
        if ($scope.showSkills == false) {
            $scope.showExperience = false;
            $scope.showSkills = true;
            $scope.showPhilanthropy = false;
        }
    };

    $scope.setPhilanthropy = function() {
        if ($scope.showPhilanthropy == false) {
            $scope.showExperience = false;
            $scope.showSkills = false;
            $scope.showPhilanthropy = true;
        }
    };

});