<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('api/me', [ 'before' => 'auth', 'uses' => 'UserController@getUser' ]);
Route::put('api/me', [ 'before' => 'auth', 'uses' => 'UserController@updateUser' ]);

Route::post('auth/login', 			'AuthController@login');
Route::post('auth/signup', 			'AuthController@signup');
Route::post('auth/facebook', 		'AuthController@facebook');
Route::post('auth/foursquare', 		'AuthController@foursquare');
Route::post('auth/github', 			'AuthController@github');
Route::post('auth/google', 			'AuthController@google');
Route::post('auth/linkedin', 		'AuthController@linkedin');
Route::get('auth/twitter', 			'AuthController@twitter');
Route::get('auth/unlink/{provider}', [ 'before' => 'auth', 'uses' => 'AuthController@unlink' ]);

Route::group(['prefix' => 'api'], function() { 
	
	Route::group(['prefix' => 'jobs'], function() {
		Route::get('/', 			[ 'before' => 'auth', 				'uses' => 'JobsController@index' ]);
		Route::get('{id}', 			[ 'before' => 'auth.jobs', 			'uses' => 'JobsController@show' ]);
		Route::post('/', 			[ 'before' => 'auth', 				'uses' => 'JobsController@store' ]);
		Route::put('{id}', 			[ 'before' => 'auth.jobs', 			'uses' => 'JobsController@update' ]);
		Route::delete('{id}', 		[ 'before' => 'auth.jobs', 			'uses' => 'JobsController@destroy' ]);
	});

});

Route::get('{angular?}', [ 'uses' => 'HomeController@index' ])->where('angular', '.*');