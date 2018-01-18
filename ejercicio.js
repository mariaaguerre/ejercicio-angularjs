var app = angular.module("app", []);
app.controller("StyleController", function($scope) {
	$scope.CustomStyle = {};
	$scope.Color = "Blue";

	$scope.SetStyle = function () {
		$scope.CustomStyle = {
			'color' : $scope.Color
		};
	}

});
