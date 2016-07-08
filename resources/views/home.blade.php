@extends('layouts.app')

@section('content')
<p>
  Loading...
</p>
@endsection

@section('footer')
  <script>
    loadModule('Homepage', 'content');
  </script>
@endsection
