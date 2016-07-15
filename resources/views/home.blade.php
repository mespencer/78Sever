@extends('layouts.app')

@section('content')
<p>
  Loading...
</p>
@endsection

@section('footer')
  <script>
    const token = '{{ csrf_token() }}';
  </script>
@endsection
