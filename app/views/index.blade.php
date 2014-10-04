<!DOCTYPE html>
<html ng-app="MyApp">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Compassionate Careers</title>
  <link href="favicon.png" rel="shortcut icon">
  <link href='https://fonts.googleapis.com/css?family=Roboto|Montserrat:400,700|Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
  <link href="/bower_components/ionicons/css/ionicons.min.css" rel="stylesheet">
  <link href="/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="/bower_components/animate.css/animate.min.css" rel="stylesheet">
  <link href="/css/style.css" rel="stylesheet">
</head>
<body>
<div ng-controller="NavbarCtrl" class="navbar navbar-default navbar-static-top">
  <div class="navbar-header">
    <a class="navbar-brand" href="/"> Compassionate Careers</a>
  </div>
  <ul class="nav navbar-nav pull-right"> 
     <!-- <li><a href="/">Add Job</a></li> -->
  </ul>
  <ul ng-if="!isAuthenticated()" class="nav navbar-nav pull-right">
    <li><a href="/#/login">Login</a></li>
    <li><a href="/#/signup">Sign up</a></li>
  </ul>
  <ul ng-if="isAuthenticated()" class="nav navbar-nav pull-right">
    <li ng-if="isAuthenticated()"><a href="/#/jobs/add">Add a job</a></li>
    <li ng-if="isAuthenticated()"><a href="/#/profile">Profile</a></li>
    <li><a href="/#/logout">Logout</a></li>
  </ul>
</div>
 
<div ui-view class="fadeZoom"></div>
<!-- required -->
<script src="/bower_components/angular/angular.min.js"></script>
<script src="/bower_components/angular-messages/angular-messages.min.js"></script>
<script src="/bower_components/angular-resource/angular-resource.min.js"></script>
<script src="/bower_components/angular-animate/angular-animate.min.js"></script>
<script src="/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script src="/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="/bower_components/angular-strap/dist/angular-strap.min.js"></script>
<script src="/bower_components/angular-strap/dist/angular-strap.tpl.min.js"></script>
<script src="/vendor/satellizer.js"></script>
<script src="/vendor/loading-bar.js"></script>

<!-- app -->
<script src="/app.js"></script>
<script src="/directives/passwordStrength.js"></script>
<script src="/controllers/login.js"></script>
<script src="/controllers/signup.js"></script>
<script src="/controllers/logout.js"></script>
<script src="/controllers/addjob.js"></script>
<script src="/controllers/job.js"></script>
<script src="/controllers/addcategory.js"></script>
<script src="/controllers/profile.js"></script>
<script src="/controllers/navbar.js"></script>
<script src="/controllers/home.js"></script>
<script src="/filters/nohtml.js"></script>
<script src="/services/account.js"></script>
<script src="/services/job.js"></script>
<script src="/services/category.js"></script>
<script src="/services/jsonp.js"></script>

</body>
</html>
