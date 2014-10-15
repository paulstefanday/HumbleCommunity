<?php

class UserController extends \BaseController {

	public function getUser()
	{

        $user = User::find(userId());

        return $user;
	}

	public function updateUser()
	{

        $user = User::find(userId());
        $user->displayName = Input::get('displayName', $user->displayName);
        $user->email = Input::get('email', $user->email);
        $user->save();

        $token = $this->createToken($user);

        return Response::json(array('token' => $token));
	}
}
