<?php

/*
|--------------------------------------------------------------------------
| Application & Route Filters
|--------------------------------------------------------------------------
|
| Below you will find the "before" and "after" events for the application
| which may be used to do any work before or after a request into your
| application. Here you may also register your custom route filters.
|
*/

App::before(function($request)
{
	//
});


App::after(function($request, $response)
{
        // $response->headers->set('Access-Control-Allow-Origin', '*');
        // return $response;
});

/*
|--------------------------------------------------------------------------
| Authentication Filters
|--------------------------------------------------------------------------
|
| The following filters are used to verify that the user of the current
| session is logged into this application. The "basic" filter easily
| integrates HTTP Basic authentication for quick, simple checking.
|
*/

Route::filter('auth', function()
{
	if (!Request::header('Authorization'))
	{
        return Response::json(array('message' => Request::header()), 401);
	}

    $token = explode(' ', Request::header('Authorization'))[1];
    $payloadObject = JWT::decode($token, Config::get('secrets.TOKEN_SECRET'));
    $payload = json_decode(json_encode($payloadObject), true);

    if ($payload['exp'] < time())
    {
        Response::json(array('message' => 'Token has expired'));
    }
});


Route::filter('auth.job', function($route)
{


	if (!Request::header('Authorization'))
	{
        return Response::json(array('message' => Request::header()), 401);
	}

    $token = explode(' ', Request::header('Authorization'))[1];
    $payloadObject = JWT::decode($token, Config::get('secrets.TOKEN_SECRET'));
    $payload = json_decode(json_encode($payloadObject), true);

    if ($payload['exp'] < time())
    {
        Response::json(array('message' => 'Token has expired'));
    }

    $id = $route->getParameter('id');
    $exist = Job::where('id', $id)->where('user_id', userId())->get()->toArray();
    if(empty($exist)) return Response::json(array('message' => 'You are not allowed access to this record. You have been logged out.'), 401);


});



Route::filter('auth.basic', function()
{
	return Auth::basic();
});

/*
|--------------------------------------------------------------------------
| Guest Filter
|--------------------------------------------------------------------------
|
| The "guest" filter is the counterpart of the authentication filters as
| it simply checks that the current user is not logged in. A redirect
| response will be issued if they are, which you may freely change.
|
*/

Route::filter('guest', function()
{
	if (Auth::check()) return Redirect::to('/');
});

/*
|--------------------------------------------------------------------------
| CSRF Protection Filter
|--------------------------------------------------------------------------
|
| The CSRF filter is responsible for protecting your application against
| cross-site request forgery attacks. If this special token in a user
| session does not match the one given in this request, we'll bail.
|
*/

Route::filter('csrf', function()
{
	if (Session::token() != Input::get('_token'))
	{
		throw new Illuminate\Session\TokenMismatchException;
	}
});
