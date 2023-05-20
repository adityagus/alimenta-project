<html ng-app="myApp">
<head>

    <title>Alimenta.Store</title>
    {{-- memasukan library bootstrap--}}
    <link rel="stylesheet" href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
    {{-- <link rel="stylesheet" href="style.css"> --}}
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
  <div ng-view></div>
</body>


<script type="text/javascript" src="{{ asset('bower_components/angular/angular.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/angular-route/angular-route.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/angular-cookies/angular-cookies.min.js') }}"></script>
@vite(['resources/js/app.js', 'resources/assets/js/controllers/UserController.js'])
</html>