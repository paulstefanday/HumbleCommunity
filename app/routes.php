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
		Route::get('all', 			'JobsController@feed');
		Route::get('favorites', 	[ 'uses' => 'JobsController@favorites' ]);
		Route::get('/', 			[ 'uses' => 'JobsController@index', 'before' => 'auth']);
		Route::get('{id}', 			[ 'uses' => 'JobsController@show', 'before' => 'auth.jobs' ]);
		Route::post('/', 			[ 'uses' => 'JobsController@store', 'before' => 'auth' ]);
		Route::post('favorites', 	[ 'uses' => 'JobsController@storeFavorite', 'before' => 'auth' ]);
		Route::put('{id}', 			[ 'uses' => 'JobsController@update', 'before' => 'auth.jobs' ]);
		Route::delete('{id}', 		[ 'uses' => 'JobsController@destroy', 'before' => 'auth.jobs' ]);

	});

});

Route::get('{angular?}', [ 'uses' => 'HomeController@index' ])->where('angular', '.*');