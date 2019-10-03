@extends('layouts.admin')
@section('title', 'Dashboard Page')

@push('css')
    <link rel="stylesheet" href="{{asset('admin/assets/css/demo_1/style.css')}}">
@endpush

@section('content')

    <div id="app">
        <router-view></router-view>
    </div>
@endsection

@push('scripts')
    <script src="{{ mix('js/app.js') }}"></script>
@endpush
