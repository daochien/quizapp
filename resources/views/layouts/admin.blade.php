<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Quizz App - @yield('title')</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="{{asset('admin/assets/vendors/iconfonts/mdi/css/materialdesignicons.min.css')}}">
    <link rel="stylesheet" href="{{asset('admin/assets/vendors/iconfonts/ionicons/css/ionicons.css')}}">
    <link rel="stylesheet" href="{{asset('admin/assets/vendors/iconfonts/typicons/src/font/typicons.css')}}">
    <link rel="stylesheet" href="{{asset('admin/assets/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css')}}">
    <link rel="stylesheet" href="{{asset('admin/assets/vendors/css/vendor.bundle.base.css')}}">
    <link rel="stylesheet" href="{{asset('admin/assets/vendors/css/vendor.bundle.addons.css')}}">
    <!-- endinject -->
    <!-- plugin css for this page -->
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="{{asset('admin/assets/css/shared/style.css')}}">
    <!-- endinject -->
    <link rel="shortcut icon" href="{{asset('admin/assets/images/favicon.png')}}" />
    @stack('css')
  </head>
  <body>
    @yield('content')
    <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="{{asset('admin/assets/vendors/js/vendor.bundle.base.js')}}"></script>
    <script src="{{asset('admin/assets/vendors/js/vendor.bundle.addons.js')}}"></script>
    <!-- endinject -->
    <!-- inject:js -->
    <script src="{{asset('admin/assets/js/shared/off-canvas.js')}}"></script>
    <script src="{{asset('admin/assets/js/shared/misc.js')}}"></script>
    <!-- endinject -->
    @stack('scripts')
  </body>
</html>
