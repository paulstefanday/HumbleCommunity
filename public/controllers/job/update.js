angular.module('MyApp')
  .controller('JobUpdateCtrl', function($scope, $stateParams, $auth, $alert, Account, Job, $location, $http, Locations ) {

	 $scope.job = {};
   $scope.states = Locations.getStates();

    $scope.getJob = function() {
		Job.getJob($stateParams.id).success(function(data) {
          $scope.job = data.data;
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
     	Job.updateJob($scope.job)
        .success(function(data) {
          console.log(data);
          console.log($scope.job);
          $location.path('/admin/jobs');
          $alert({
            content: 'Job saved successfully',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });

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

    // $scope.getAddress = function(viewValue) {
    //   var params = {address: viewValue, sensor: false};
    //   return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
    //   .then(function(res) {
    //     console.log(res.data.results)
    //     return res.data.results;
    //   });
    // };

    $scope.getJob();

});