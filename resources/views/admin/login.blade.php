@extends('layouts.admin')
@section('title', 'Login Page')
@section('content')

<div id="app">
    <router-view></router-view>
</div>
@endsection
@push('scripts')
    <script src="{{asset('js/app.js?v='.time())}}"></script>
@endpush
