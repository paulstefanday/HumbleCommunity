angular.module('MyApp')
  .factory('Job', function($http, $auth) {
    return {
      getFeed: function(limit) {
        return $http.get('http://compassionatecareers.com/api/jobs/all');
      },
      getJobs: function(limit) {
        return $http.get('http://compassionatecareers.com/api/jobs/');
      },
      getJob: function(id) {
        return $http.get('http://compassionatecareers.com/api/jobs/' + id);
      },
      addJob: function(data) {
        return $http.post('http://compassionatecareers.com/api/jobs/', data);
      },
      updateJob: function(data) {
        return $http.put('http://compassionatecareers.com/api/jobs/' + data.id, data);
      },
      deleteJob: function(id) {
        return $http.delete('http://compassionatecareers.com/api/jobs/' + id);
      }
    };
  });