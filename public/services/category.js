angular.module('MyApp')
  .factory('Category', function($http, $auth) {
    return {
      getcategory: function(limit) {
        return $http.get('/api/v1/category/');
      },
      getJob: function(id) {
        return $http.get('/api/v1/category/' + id);
      },
      addJob: function(data) {
        return $http.post('/api/v1/category/', data);
      },
      updateJob: function(data) {
        return $http.put('/api/v1/category/' + data.id, data);
      },
      deleteJob: function(id) {
        return $http.delete('/api/v1/category/' + id);
      }
    };
  });