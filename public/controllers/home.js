angular.module('MyApp').controller('HomeCtrl', function($scope, $alert, $auth, $http, $resource, Job, Locations) {

	$scope.jobs = {};

	Job.getFeed().success(function(data) {
	    $scope.jobs = data.data;
	});

	$scope.favorite = function(job) {
		var data = { job_id: job.id };
		console.log(data);
		Job.addFav(data).success(function(data){
			console.log('Success', data);
		}).error(function (error) {
			console.log('Error', error);
		})
	}

	$scope.categories = [
		{"value":"","label":"Tech"},
		{"value":"","label":"Campaigning"},
		{"value":"","label":"Education"},
		{"value":"","label":"Marketing"},
		{"value":"","label":"Management"},
	];

	$scope.locations = Locations.getStates();


});