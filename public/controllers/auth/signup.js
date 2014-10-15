angular.module('MyApp')
  .controller('SignupCtrl', function($scope, $alert, $auth) {
    $scope.signup = function() {
      $auth.signup({
        displayName: $scope.displayName,
        email: $scope.email,
        password: $scope.password
      }).catch(function(response) {
      	var errors = '';
      	if(response.data.error.email) errors += response.data.error.email[0] + " ";
      	if(response.data.error.displayName) errors +=  response.data.error.displayName[0]+ " ";
      	if(response.data.error.password) errors += response.data.error.password[0]+ " ";
        $alert({
          content: errors,
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 6
        });
      });
    };
  });