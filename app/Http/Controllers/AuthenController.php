<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator, Auth;
class AuthenController extends Controller
{
    public function __construct()
    {

    }
    /**
     * view login
    */
    public function login()
    {
        return view('auth.login');
    }

    /**
     * login user
     * @param email
     * @param password
     * @return redirect app
    */
    public function signIn(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if ($validator->fails())
        {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors()
            ]);
        }

        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials))
        {
            return response()->json([
                'status' => false,
                'message' => 'Wrong username or password!'
            ]);
        }
    }
}
