angular.module('MyApp')
  .controller('AddJobCtrl', function($scope, $auth, $alert, Account, Job) {

	$scope.job = {};
	$scope.jobs = {};

    $scope.getJobs = function() {
		Job.getJobs().success(function(data) {
          $scope.jobs = data.data;
          console.log(data.data);
        })
        .error(function(error) {
          $alert({
            content: error.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

    $scope.addJob = function() {
     Job.addJob($scope.job)
        .success(function(data) {
          console.log(data);
          var data = $scope.job;
          $scope.jobs.push(data);
          $scope.job = {};
        })
        .error(function(error) {
          $alert({
            content: error.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

    $scope.deleteJob = function(index, id) {
     	Job.deleteJob(id)
        .success(function(data) {
          console.log(data);
          $scope.jobs.splice(index, 1); 
        })
        .error(function(error) {
          $alert({
            content: error.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

    $scope.getJobs();

});