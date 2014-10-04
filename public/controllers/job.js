angular.module('MyApp')
  .controller('JobCtrl', function($scope, $stateParams, $auth, $alert, Account, Job ) {

	$scope.job = {};

  console.log($stateParams.id);

    $scope.getJob = function() {
		Job.getJob($stateParams.id).success(function(data) {
          $scope.job = data.data;
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

    $scope.updateJob = function(index, id) {
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

    $scope.getJob();

});