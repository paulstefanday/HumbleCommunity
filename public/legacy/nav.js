angular
    .module('MyApp')
    .directive('navBar', navBar);

function navBar() {
   
    var directive = {
        restrict: 'E',
        templateUrl: 'partials/nav.html',
        scope: {},
        controller : controller,
        controllerAs: 'vm'
    };

    return directive;

	controller.$inject = ['$scope', '$auth'];
	function controller($scope, $auth) {

        var vm = this;
	    
        vm.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };

        vm.logout = function() {
            $auth.logout()
            .then(function() {
                $alert({
                  content: 'You have been logged out',
                  animation: 'fadeZoomFadeDown',
                  type: 'material',
                  duration: 3
                });
            });
        }

    }

}

