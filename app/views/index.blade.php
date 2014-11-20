<!DOCTYPE html>
<html ng-app="MyApp">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
  <title>Compassionate Community</title>
  <link href="favicon.png" rel="shortcut icon">
  <!-- <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'> -->
  <link href='http://fonts.googleapis.com/css?family=Raleway:200,500,800' rel='stylesheet' type='text/css'>
  <link href="/bower_components/ionicons/css/ionicons.min.css" rel="stylesheet">
  <link href="/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="/bower_components/animate.css/animate.min.css" rel="stylesheet">
  <link href="/bower_components/angular-motion/dist/angular-motion.min.css" rel="stylesheet">
  <link href="/css/style.css" rel="stylesheet">
</head>
<body>

  <!-- Navbar -->
  <nav-bar></nav-bar>
   
  <!-- Content -->
  <div ng-click="hideNav()" ui-view id="view" ng-class="{ 'blur' : nav }"></div>

  <!-- required -->
  <script src="/bower_components/angular/angular.min.js"></script>
  <script src="/bower_components/angular-animate/angular-animate.min.js"></script>
  <script src="/bower_components/angular-messages/angular-messages.min.js"></script>
  <script src="/bower_components/angular-resource/angular-resource.min.js"></script>
  <script src="/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
  <script src="/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
  <script src="/bower_components/angular-strap/dist/angular-strap.min.js"></script>
  <script src="/bower_components/angular-strap/dist/angular-strap.tpl.min.js"></script>
  <script src="/vendor/satellizer.js"></script>
  <script src="/bower_components/angular-loading-bar/build/loading-bar.min.js"></script>
  <script src="/js/home/TweenLite.min.js"></script>
  <script src="/js/home/EasePack.min.js"></script>
  <script src="/js/home/rAF.js"></script>
  <!-- app -->
  <script src="/app.js"></script>
  <script src="/js/app.js"></script>
  <script src="/js/common.js"></script>
</body>
</html>
