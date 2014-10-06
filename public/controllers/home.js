angular.module('MyApp').controller('homeCtrl', function($scope, $alert, $auth, $http, $resource, Job) {

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

	$scope.locations = [
		{"value":"","label":"NSW"},
		{"value":"","label":"ACT"},
		{"value":"","label":"QLD"},
		{"value":"","label":"VIC"},
		{"value":"","label":"NT"},
		{"value":"","label":"SA"},
		{"value":"","label":"WA"},
		{"value":"","label":"TAS"},
	];


});