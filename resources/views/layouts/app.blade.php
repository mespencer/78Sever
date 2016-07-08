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
    <a class="sidebar-button" href="/">
      <span class="glyphicon glyphicon-home"></span>
    </a>
    <a class="sidebar-button" href="/message-board">
      <span class="glyphicon glyphicon-bullhorn"></span>
    </a>
    <a class="sidebar-button" href="/shopping-list">
      <span class="glyphicon glyphicon-th-list"></span>
    </a>
    <a class="sidebar-button" href="/chores">
      <span class="glyphicon glyphicon-calendar"></span>
    </a>
    <a class="sidebar-button sidebar-bottom" href="/settings">
      <span class="glyphicon glyphicon-cog"></span>
    </a>
  </nav>
  <div class="content" id="content">
    @yield('content')
  </div>

  <!-- Javascript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js" integrity="sha384-I6F5OKECLVtK/BL+8iSLDEHowSAfUo76ZL9+kGAgTRdiByINKJaqTPH/QVNS1VDb" crossorigin="anonymous"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script> -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.29.4/react-bootstrap.min.js"></script>
  <script type="text/babel" src="js/app.js"></script>
  <script src="js/load.js"></script>
  @yield('footer')
</body>
</html>
