/**
 * Created by joshuasisley on 1/19/16.
 */
angular.module('personalSite').controller("aboutController", function($scope) {

    // Initialize the about me page to show active template
    $scope.showExperience = true;
    $scope.showSkills = false;
    //$scope.showProjects = false;
    $scope.showPhilanthropy = false;
    $scope.emailMe = false;

    // Methods for choosing and showing the correct template
    $scope.setExperience = function() {
        if ($scope.showExperience == false) {
            $scope.showExperience = true;
            $scope.showSkills = false;
            $scope.showPhilanthropy = false;
            //$scope.showProjects = false;
        }
    };
    $scope.setSkills = function() {
        if ($scope.showSkills == false) {
            $scope.showExperience = false;
            $scope.showSkills = true;
            $scope.showPhilanthropy = false;
            //$scope.showProjects = false;
        }
    };
    //$scope.setProjects = function() {
    //    if ($scope.showProjects == false) {
    //        $scope.showProjects = true;
    //        $scope.showExperience = false;
    //        $scope.showSkills = false;
    //        $scope.showPhilanthropy = false;
    //    }
    //};
    $scope.setPhilanthropy = function() {
        if ($scope.showPhilanthropy == false) {
            $scope.showExperience = false;
            $scope.showSkills = false;
            $scope.showPhilanthropy = true;
            //$scope.showProjects = false;
        }
    };

});