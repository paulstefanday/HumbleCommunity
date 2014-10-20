angular.module('MyApp')
  .factory('Account', function($http, $auth) {
    return {
      getProfile: function() {
        return $http.get('http://compassionatecareers.com/api/me');
      },
      updateProfile: function(profileData) {
        return $http.put('http://compassionatecareers.com/api/me', profileData);
      }
    };
  });