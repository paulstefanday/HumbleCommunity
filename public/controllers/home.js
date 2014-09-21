angular.module('MyApp').controller('homeCtrl', function($scope, $alert, $auth, $http, $resource) {

var url = 'https://jobs.github.com/positions.json?description=ruby&page=1&callback=JSON_CALLBACK';
var url = 'http://api.adzuna.com:80/v1/api/jobs/au/search/1?app_id=4d5ed715&app_key=9e0bb8521ad6e3c5e82276ffba08d48a&callback=JSON_CALLBACK&results_per_page=100&what=ngo&content-type=application/jsonp';

$scope.jobs = {};

$scope.search = function() {
  $http.jsonp('http://api.adzuna.com:80/v1/api/jobs/au/search/1?app_id=4d5ed715&app_key=9e0bb8521ad6e3c5e82276ffba08d48a&callback=JSON_CALLBACK&results_per_page=100&what='+ encodeURIComponent( $scope.keyword ) +'&content-type=application/jsonp').then(function(resp) {
        $scope.jobs = resp.data.results;
  });
}

$http.jsonp(url).then(function(resp) {
      $scope.jobs = resp.data.results;
      console.log($scope.jobs);
});

});