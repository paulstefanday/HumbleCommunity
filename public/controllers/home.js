angular.module('MyApp').run(function($http) {
  
  $http.defaults.headers.common.Accept = 'application/jsonp';
  

}).controller('homeCtrl', function($scope, $alert, $auth, $http, $resource) {

var url = 'http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=4d5ed715&app_key=9e0bb8521ad6e3c5e82276ffba08d48a&results_per_page=20&what=javascript%20developer&content-type=application/json';
var url = 'https://jobs.github.com/positions.json?description=ruby&page=1&callback=JSON_CALLBACK';
var url = 'http://api.adzuna.com/v1/api/jobs/gb/search/?app_id=4d5ed715&app_key=9e0bb8521ad6e3c5e82276ffba08d48a&callback=JSON_CALLBACK&results_per_page=20&what=javascript%20developer&content-type=application/jsonp';

$scope.jobs = {};


$scope.search = function() {
var url = 'http://api.adzuna.com/v1/api/jobs/au/search/?app_id=4d5ed715&app_key=9e0bb8521ad6e3c5e82276ffba08d48a&callback=JSON_CALLBACK&results_per_page=20&what='+ encodeURIComponent( $scope.keyword ) +'&content-type=application/jsonp';

$http.jsonp(url).then(function(resp) {
      $scope.jobs = resp.data.results;
      console.log($scope.jobs);
});

}

$http.jsonp(url).then(function(resp) {
      $scope.jobs = resp.data.results;
});

});