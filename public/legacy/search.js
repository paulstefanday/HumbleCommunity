
angular.module('MyApp').directive('homeSearch', homeSearch);

function homeSearch() {
  return {
      restrict: 'E',
      transclude: true,
      replace: true,
      // scope: {},
      controller : controller,
      // controllerAs: 'vm',
      templateUrl: '/partials/home/search.html'
  };
  


  controller.$inject = ['$scope', 'Locations', '$alert', '$auth'];

  function controller($scope, Locations, $alert, $auth) {

    var vm = this;

    $scope.categories = [
      {"value":"","label":"Tech"},
      {"value":"","label":"Campaigning"},
      {"value":"","label":"Education"},
      {"value":"","label":"Marketing"},
      {"value":"","label":"Management"},
    ];

    $scope.locations = Locations.getStates();
          
  }

}



