angular.module('MyApp', ['ngResource', 'ngMessages', 'ui.router', 'mgcrea.ngStrap', 'satellizer', 'ngSanitize', 'angular-loading-bar'])
  .config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $datepickerProvider, $alertProvider) {

    var noauth = [
      { state: 'home',            url: '/',             ctrl: 'Home',       html: 'partials/home.html' },
      { state: 'login',           url: '/login',        ctrl: 'Login',      html: 'partials/auth/login.html' },
      { state: 'signup',          url: '/signup',       ctrl: 'Signup',     html: 'partials/auth/signup.html' },
      { state: 'logout',          url: '/logout',       ctrl: 'Logout',     html: null }
    ];

    var hasauth = [
      { state: 'admin',           url: '/admin',             ctrl: 'Admin',           html: 'partials/admin/user/profile.html' },
      { state: 'profile',         url: '/admin/profile',     ctrl: 'Profile',         html: 'partials/admin/user/profile.html' },
      { state: 'adminjobupdate',  url: '/admin/job/:id',     ctrl: 'JobUpdate',       html: 'partials/admin/job/update.html' },
      { state: 'adminjob',        url: '/admin/jobs',        ctrl: 'JobCreate',       html: 'partials/admin/job/create.html' },
      { state: 'admincategory',   url: '/category',          ctrl: 'CategoryCreate',  html: 'partials/admin/category/addcategory.html' }
    ];

    // process routes
    noauth.forEach(function(route) {
      $stateProvider.state(route.state, { url: route.url, controller: route.ctrl +'Ctrl', templateUrl: route.html } );
    });

    // process auth routes
    hasauth.forEach(function(route) {
        $stateProvider.state(route.state, { url: route.url, controller: route.ctrl +'Ctrl', templateUrl: route.html, resolve: {
          authenticated: ['$location', '$auth', function($location, $auth) { if (!$auth.isAuthenticated()) return $location.path('/login'); }]
        }
      });  
    });

    // alert settings
    angular.extend($alertProvider.defaults, {
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 5
    });

    // datepicker settings
    angular.extend($datepickerProvider.defaults, {
        dateFormat: 'yyyy-MM-dd',
        placement: "top-left",
        dateType: 'string',
        autoclose: 1
    });

    $urlRouterProvider.otherwise('/');


    $authProvider.loginOnSignup = true;
    // $authProvider.loginRedirect = 'http://compassionatecareers.com/';
    // $authProvider.logoutRedirect = '/';
    // $authProvider.signupRedirect = '/login';
    $authProvider.loginUrl = 'http://compassionatecareers.com/auth/login';
    $authProvider.signupUrl = 'http://compassionatecareers.com/auth/signup';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer'; // Local storage name prefix
    $authProvider.unlinkUrl = 'http://compassionatecareers.com/auth/unlink/';

    // Social media login providers
    $authProvider.facebook({
      clientId: '657854390977827'
    });

    $authProvider.linkedin({
      clientId: '77cw786yignpzj'
    });

    $authProvider.twitter({
      url: '/auth/twitter'
    });

  });
