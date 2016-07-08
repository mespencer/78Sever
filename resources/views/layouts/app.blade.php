<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>78 Sever St</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <link href="css/app.css" rel="stylesheet">
  @yield('head')
</head>
<body>
  <nav class="sidebar">
    <a class="sidebar-button">
      <span class="glyphicon glyphicon-home"></span>
    </a>
    <a class="sidebar-button">
      <span class="glyphicon glyphicon-th-list"></span>
    </a>
    <a class="sidebar-button sidebar-bottom">
      <span class="glyphicon glyphicon-cog"></span>
    </a>
  </nav>
  <div class="content">
    @yield('content')
  </div>

  <!-- Javascript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  <script type="text/babel" src="js/app.js"></script>
  @yield('footer')
</body>
</html>
