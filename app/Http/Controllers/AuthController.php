<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;
use Validator;
use Socialite;

class AuthController extends Controller
{
    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
    */
    public function signup(Request $request)
    {
        try
        {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string',
                'email' => 'required|string|email|unique:users',
                'password' => 'required|string|confirmed'
            ]);

            if ($validator->fails())
            {
                throw new \Exception($validator->errors()->first());
            }

            $user = new User([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);

            $user->save();

            return response()->json([
                'message' => 'Successfully created user!'
            ], 201);
        }
        catch(\Exception $e)
        {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ]);
        }

    }

    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
    */

    public function login(Request $request)
    {
        try
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

            $user = $request->user();
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->token;
            if ($request->remember_me)
            {
                $token->expires_at = Carbon::now()->addWeeks(1);
            }

            $token->save();

            return response()->json([
                'status' => true,
                'data' => [
                    'name' => $user->name,
                    'access_token' => $tokenResult->accessToken,
                    'token_type' => 'Bearer',
                    'expires_at' => Carbon::parse(
                        $tokenResult->token->expires_at
                    )->toDateTimeString()
                ]
            ]);
        }
        catch(\Exception $e)
        {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ]);
        }

    }


    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        try
        {
            $request->user()->token()->revoke();
            return response()->json([
                'status' => true,
                'message' => 'Successfully logged out'
            ]);
        }
        catch(\Exception $e)
        {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ]);
        }
        
    }

    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        try
        {
            return response()->json([
                'status' => true,
                'data' => [
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                ]
            ]);
        }
        catch(\Exception $e)
        {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ]);
        }
        return response()->json();
    }

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }
   
    public function handleGoogleCallback(Request $request)
    {
        try {
  
            $user = Socialite::driver('google')->user();
            $finduser = User::where('google_id', $user->id)->first();
            
            if($finduser)
            {
                Auth::login($finduser);
            }
            else
            {
                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'google_id' => $user->id,
                    'password' => bcrypt('abcd@1234')
                ]);
                    
                Auth::login($newUser);
            }

            $user = !empty($finduser) ? $finduser : $newUser;

            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->token;
            
            $token->save();

            $cookie = cookie('Quizz-Token', $tokenResult->accessToken, null, null, null, false, false);
            return redirect('app')->withCookie($cookie);

            // return response()->json([
            //     'status' => true,
            //     'data' => [
            //         'name' => $user->name,
            //         'access_token' => $tokenResult->accessToken,
            //         'token_type' => 'Bearer',
            //         'expires_at' => Carbon::parse(
            //             $tokenResult->token->expires_at
            //         )->toDateTimeString()
            //     ]
            // ]);
  
        }
        catch (\Exception $e)
        {
            return redirect('auth/google');
        }
    }
}
