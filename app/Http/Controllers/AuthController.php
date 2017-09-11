<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function guest()
    {
		$user = \App\User::create([
			'role' => 'guest',
		]);
		
		$user['access_token'] = $user->createToken('Guest Token')->accessToken;

		return $user;
    }
}
