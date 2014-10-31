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
  <link href="/bower_components/angular-motion/dist/angular-motion.min.css" rel="stylesheet">
  <link href="/css/style.css" rel="stylesheet">
</head>
<body>

<div ng-controller="NavbarCtrl" class="navbar navbar-default navbar-static-top">
<div ng-include="'/partials/nav.html'"></div>
</div>
 
<div ui-view class="fadeZoom "></div>
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
<script src="/vendor/loading-bar.js"></script>


<!-- app -->
<script src="/app.js"></script>
<script src="/directives/passwordStrength.js"></script>
<script src="/controllers/auth/login.js"></script>
<script src="/controllers/auth/signup.js"></script>
<script src="/controllers/auth/logout.js"></script>
<script src="/controllers/job/create.js"></script>
<script src="/controllers/job/update.js"></script>
<script src="/controllers/job/favorites.js"></script>
<script src="/controllers/category/create.js"></script>
<script src="/controllers/admin/profile.js"></script>
<script src="/controllers/admin/admin.js"></script>
<script src="/controllers/navbar.js"></script>
<script src="/controllers/home.js"></script>
<script src="/filters/nohtml.js"></script>
<script src="/services/account.js"></script>
<script src="/services/locations.js"></script>
<script src="/services/job.js"></script>
<script src="/services/category.js"></script>
<script src="/services/jsonp.js"></script>

</body>
</html>
