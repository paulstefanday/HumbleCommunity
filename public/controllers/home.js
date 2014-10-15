angular.module('MyApp').controller('HomeCtrl', function($scope, $alert, $auth, $http, $resource, Job, Locations) {

	$scope.jobs = {};

	Job.getJobs().success(function(data) {
	    $scope.jobs = data.data;
	});

	$scope.categories = [
		{"value":"","label":"Tech"},
		{"value":"","label":"Campaigning"},
		{"value":"","label":"Education"},
		{"value":"","label":"Marketing"},
		{"value":"","label":"Management"},
	];

	$scope.locations = Locations.getStates();


});