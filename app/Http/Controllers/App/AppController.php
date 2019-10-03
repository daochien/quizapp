<?php

namespace App\Http\Controllers\App;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppController extends Controller
{
    // public function login(Request $request)
    // {
    //     return view('admin.app');
    // }

    // public function register(Request $request)
    // {
    //     return view('admin.register');
    // }

    public function index(Request $request)
    {
        return view('admin.app');
    }
}
