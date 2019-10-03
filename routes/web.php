<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['prefix' => 'app' , 'as' => 'admin.'], function() {
    Route::get('/', 'App\AppController@index')->name('index');
    //Route::get('login', 'App\AppController@login')->name('login');
    //Route::get('register', 'App\AppController@register')->name('register');
    Route::get('/{any}', 'App\AppController@index')->where('any', '.*');
});

Route::get('google', function () {
    return view('auth.googleAuth');
});
    
Route::get('auth/google', 'AuthController@redirectToGoogle');
Route::get('auth/google/callback', 'AuthController@handleGoogleCallback');