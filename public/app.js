angular.module('MyApp', ['ngResource', 'ngMessages', 'ui.router', 'mgcrea.ngStrap', 'satellizer', 'ngSanitize', 'angular-loading-bar'])
  .config(function($stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $datepickerProvider) {



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

    noauth.forEach(function(route) {
      $stateProvider.state(route.state, { url: route.url, controller: route.ctrl +'Ctrl', templateUrl: route.html } );
    });

    hasauth.forEach(function(route) {
        $stateProvider.state(route.state, { url: route.url, controller: route.ctrl +'Ctrl', templateUrl: route.html, resolve: {
          authenticated: ['$location', '$auth', function($location, $auth) { if (!$auth.isAuthenticated()) return $location.path('/login'); }]
        }
      });  
    });

    angular.extend($datepickerProvider.defaults, {
        dateFormat: 'yyyy-MM-dd',
        placement: "top-left",
        dateType: 'string',
        autoclose: 1
    });









    $urlRouterProvider.otherwise('/');

    $authProvider.facebook({
      clientId: '657854390977827'
    });

    $authProvider.google({
      clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
    });

    $authProvider.github({
      clientId: '0ba2600b1dbdb756688b'
    });

    $authProvider.linkedin({
      clientId: '77cw786yignpzj'
    });

    $authProvider.twitter({
      url: '/auth/twitter'
    });

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
    });
  });
