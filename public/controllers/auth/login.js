angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $alert, $auth) {
    $scope.login = function() {
      $auth.login({ email: $scope.email, password: $scope.password })
        .then(function() {
          $alert({ content: 'You have successfully logged in' });
        })
        .catch(function(response) {
          $alert({ content: response.data.message });
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          $alert({ content: 'You have successfully logged in' });
        })
        .catch(function(response) {
          $alert({ content: response.data });
        });
    };
  });