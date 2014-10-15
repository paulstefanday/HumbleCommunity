angular.module('MyApp').controller('AdminCtrl', function($scope, $alert, $auth, $http, $resource, Job) {

	$scope.jobs = {};

	Job.getJobs().success(function(data) {
	    $scope.jobs = data.data;
	});



});