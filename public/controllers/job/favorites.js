angular.module('MyApp').controller('JobFavoriteCtrl', function($scope, $alert, $auth, $http, $resource, Job, Locations) {

	$scope.jobs = {};

	Job.getFav().success(function(data) {
	    $scope.jobs = data.data;
	});

});