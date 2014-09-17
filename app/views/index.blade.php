<!DOCTYPE html>
<html ng-app="MyApp">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Compassionate Careers</title>
  <link href="favicon.png" rel="shortcut icon">
  <link href='https://fonts.googleapis.com/css?family=Roboto|Montserrat:400,700|Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/1.5.2/css/ionicons.min.css" rel="stylesheet">
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/animatecss/3.2.0/animate.css" rel="stylesheet">
  <link href="/stylesheets/style.css" rel="stylesheet">
</head>
<body>
<div ng-controller="NavbarCtrl" class="navbar navbar-default navbar-static-top">
  <div class="navbar-header">
    <a class="navbar-brand" href="/"><i class="ion-ios7-pulse-strong"></i> Satellizer</a>
  </div>
  <ul class="nav navbar-nav">
    <li><a href="/">Home</a></li>
    <li ng-if="isAuthenticated()"><a href="/#/profile">Profile</a></li>
  </ul>
  <ul ng-if="!isAuthenticated()" class="nav navbar-nav pull-right">
    <li><a href="/#/login">Login</a></li>
    <li><a href="/#/signup">Sign up</a></li>
  </ul>
  <ul ng-if="isAuthenticated()" class="nav navbar-nav pull-right">
    <li><a href="/#/logout">Logout</a></li>
  </ul>
</div>

<div ng-view class="fadeZoom"></div>

<script src="https://code.angularjs.org/1.3.0-rc.1/angular.js"></script>
<script src="https://code.angularjs.org/1.3.0-rc.1/angular-messages.js"></script>
<script src="https://code.angularjs.org/1.3.0-rc.1/angular-resource.js"></script>
<script src="https://code.angularjs.org/1.3.0-rc.1/angular-route.js"></script>
<script src="https://code.angularjs.org/1.3.0-rc.1/angular-animate.js"></script>
<script src="https://oss.maxcdn.com/angular.strap/2.0.0/angular-strap.min.js"></script>
<script src="https://oss.maxcdn.com/angular.strap/2.0.0/angular-strap.tpl.min.js"></script>
<script src="/js/vendor/satellizer.js"></script>

<script src="/js/app.js"></script>
<script src="/js/directives/passwordStrength.js"></script>
<script src="/js/controllers/login.js"></script>
<script src="/js/controllers/signup.js"></script>
<script src="/js/controllers/logout.js"></script>
<script src="/js/controllers/profile.js"></script>
<script src="/js/controllers/navbar.js"></script>
<script src="/js/services/account.js"></script>
</body>
</html>
