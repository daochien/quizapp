@extends('layouts.admin')
@section('title', 'Login Page')
@push('css')
    <link rel="stylesheet" href="{{asset('admin/assets/css/demo_1/style.css')}}">
@endpush
@section('content')
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
            <div class="row w-100">
                <div class="col-lg-4 mx-auto">
                    <div class="auto-form-wrapper">
                        <div class="alert alert-danger" role="alert" >
                            xxx
                        </div>
                        <form method="post" action="{{ route('signIn') }}">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            <div class="form-group">
                                <label for="Email">Email</label>
                                <input type="text" v-model="user.email" class="form-control login-input" placeholder="Email" id="Email">

                            </div>
                            <div class="form-group">
                                <label for="Password">Password</label>
                                <input type="password" v-model="user.password" class="form-control login-input" placeholder="*********" id="EmaPasswordil">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary submit-btn btn-block">Login</button>
                            </div>
                            <div class="form-group d-flex justify-content-between">
                                <div class="form-check form-check-flat mt-0">
                                    <label class="form-check-label">
                                    <input type="checkbox" v-model="user.remember_me" value="1" class="form-check-input" checked> Keep me signed in </label>
                                </div>
                                <a href="#" class="text-small forgot-password text-black">Forgot Password</a>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-block g-login">
                                    <img class="mr-3" :src="'/admin/assets/images/file-icons/icon-google.svg'" alt="">Log in with Google</button>
                                </div>
                            <div class="text-block text-center my-3">
                                <span class="text-small font-weight-semibold">Not a member ?</span>
                                <a  class="text-black text-small">Create new account</a>
                            </div>
                        </form>
                    </div>
                    <ul class="auth-footer">
                        <li>
                            <a href="#">Conditions</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Terms</a>
                        </li>
                    </ul>
                    <p class="footer-text text-center">copyright © 2018 Bootstrapdash. All rights reserved.</p>
                </div>
            </div>
        </div>
        <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
</div>
@endsection
@push('scripts')

@endpush
