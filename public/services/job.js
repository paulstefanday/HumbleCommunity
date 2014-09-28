angular.module('MyApp')
  .factory('Job', function($http, $auth) {
    return {
      getJobs: function(limit) {
        return $http.get('/api/v1/jobs/');
      },
      getJob: function(id) {
        return $http.get('/api/v1/jobs/' + id);
      },
      addJob: function(data) {
        return $http.post('/api/v1/jobs/', data);
      },
      updateJob: function(data) {
        return $http.put('/api/v1/jobs/' + data.id, data);
      },
      deleteJob: function(id) {
        return $http.delete('/api/v1/jobs/' + id);
      }
    };
  });