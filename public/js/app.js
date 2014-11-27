angular
    .module('MyApp')
    .directive('navBar', navBar);

function navBar() {
   
    var directive = {
        restrict: 'E',
        templateUrl: '/partials/nav.html',
        scope: false,
        replace: true,
        controller : controller,
        // controllerAs: 'vm'
    };

    return directive;

	controller.$inject = ['$scope', '$auth', '$state', '$alert'];
	function controller($scope, $auth, $state, $alert) {

        // var vm = this;

        $scope.goTo = function(name) {
            $scope.nav = false;
            $state.go(name);
        }

        $scope.toggleNav = function() {
            $scope.nav = !$scope.nav;
        }
	    
        $scope.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };

        $scope.logout = function() {
            $auth.logout()
            .then(function() {
                $scope.nav = false;
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


angular
    .module('MyApp')
    .directive('loginForm', login);

function login() {
   
    var directive = {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: '/partials/auth/login.html',
        scope: {},
        controller : controller,
        controllerAs: 'vm'
    };
    return directive;


  controller.$inject = ['$scope', '$auth', '$alert'];
  
  function controller($scope, $auth, $alert) {
    
    var vm = this;

    vm.login = function() {
      $auth.login({ email: vm.email, password: vm.password })
        .then(function() {
          $alert({ content: 'You have successfully logged in' });
        })
        .catch(function(response) {
          $alert({ content: response.data.message });
        });
    };

    vm.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          $alert({ content: 'You have successfully logged in' });
        })
        .catch(function(response) {
          $alert({ content: response.data });
        });
    };
  
  }

}



angular
    .module('MyApp')
    .directive('signupForm', signup);

function signup() {
   
  var directive = {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: '/partials/auth/signup.html',
        scope: {},
        controller : controller,
        controllerAs: 'vm'
  };
  
  return directive;

  controller.$inject = ['$scope', '$auth', '$alert'];
  
  function controller($scope, $auth, $alert) {
    
    var vm = this;

    vm.signup = function() {
      $auth.signup({
        displayName: vm.displayName,
        email: vm.email,
        password: vm.password
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

  }

}

angular.module('MyApp')
  .controller('CategoryCreateCtrl', function($scope, $auth, $alert, Account) {


});

angular.module('MyApp').directive('homePage', homePage);

function homePage() {
  return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {},
      controller : controller,
      link: link,
      controllerAs: 'vm',
      templateUrl: '/partials/home/home.html'
  };
  


  controller.$inject = ['$scope', 'Locations', '$alert', '$auth'];

  function controller($scope, Locations, $alert, $auth) {
          
        var vm = this;

        vm.hideSearch = function() {
            vm.search = false;
        }

        vm.showSearch = function() {
            vm.search = true;
        }

        vm.joinUp = function() {
            console.log(vm.email);
        }

  }

function link(scope, el, attr, ctrl) {

        ctrl.search = false;

   var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: width/2, y: height/2};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for(var x = 0; x < width; x = x + width/20) {
            for(var y = 0; y < height; y = y + height/20) {
                var px = x + Math.random()*width/20;
                var py = y + Math.random()*height/20;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if(!(p1 == p2)) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if(!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in points) {
                // detect points in range
                if(Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }});
    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }


  }

}





angular.module('MyApp').directive('search', homeSearch);

function homeSearch() {
  return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {},
      controller : controller,
      controllerAs: 'vm',
      templateUrl: '/partials/home/search.html',
  };
  


  controller.$inject = ['$scope', 'Locations', '$alert', '$auth', '$window'];

  function controller($scope, Locations, $alert, $auth, $window) {

    var vm = this;

    vm.back = function() {
      $window.history.back();
    }

    // $scope.categories = [
    //   {"value":"","label":"Tech"},
    //   {"value":"","label":"Campaigning"},
    //   {"value":"","label":"Education"},
    //   {"value":"","label":"Marketing"},
    //   {"value":"","label":"Management"},
    // ];

    // $scope.locations = Locations.getStates();
          
  }

}




angular
    .module('MyApp')
    .directive('previewJob', previewJob);

function previewJob() {
   
    var directive = {
        restrict: 'E',
        transclude: true,
        templateUrl: '/partials/job/preview.html',
        scope: {},
        link: link,
        controller : controller,
        controllerAs: 'vm'
    };
    return directive;


	controller.$inject = ['$scope', 'Job', '$alert'];
	
	function controller($scope, Job, $alert) {
		
		var vm = this;
		vm.jobs = {};

		vm.loadJobs = function() {
			Job.getFeed().success(function(data) {
			    vm.jobs = data.data;
			});
		}

		vm.favorite = function(job) {
			var data = { job_id: job.id };
			Job.addFav(data).success(function(data){
				$alert({ content: "Added to favorites" });
			}).error(function (error) {
				$alert({ content: 'Please login to select a favorite' });
			})
		}
	
	}

	function link(scope, el, attr, ctrl) {
	
		ctrl.loadJobs();
    
    }
}

