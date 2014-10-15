angular.module('MyApp')
  .factory('Job', function($http, $auth) {
    return {
      getJobs: function(limit) {
        return $http.get('/api/jobs/');
      },
      getJob: function(id) {
        return $http.get('/api/jobs/' + id);
      },
      addJob: function(data) {
        return $http.post('/api/jobs/', data);
      },
      updateJob: function(data) {
        return $http.post('/api/jobs/' + data.id, data);
      },
      deleteJob: function(id) {
        return $http.delete('/api/jobs/' + id);
      }
    };
  });