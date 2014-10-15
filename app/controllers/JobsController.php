<?php

use Carbon\Carbon;

class JobsController extends \BaseController {

    public function __construct()
    {
        $this->beforeFilter('auth', array('except' => 'index'));
    }

	public function index()
	{
		$jobs = Job::all()->toArray();
		return Response::json(['data' => $jobs ], 200);
	}

	public function store()
	{
		$job = DB::table('jobs')->insert( Input::all() );
		return Response::json(['data' => $job ], 200);
	}

	public function show($id)
	{
		$job = Job::find( $id );
		return Response::json(['data' => $job ], 200);
	}

	public function update($id)
	{
		$job = Job::find($id);
		$job->heading 		= Input::get('heading');
		$job->description 	= Input::get('description');
		// $job->location 		= Input::get('location');
		$job->salary_max 	= Input::get('salary_max');
		$job->salary_min 	= Input::get('salary_min');
		$job->start_date 	= Input::get('start_date');
		$job->end_date 		= Input::get('end_date');
		$job->state 		= Input::get('state');
		$job->suburb 		= Input::get('suburb');
		$job->save();

		if($job) return Response::json(['data' => $job ], 200);
		return Response::json(['error' => $update ], 500);
	}

	public function destroy($id)
	{
		$job = Job::find($id);
		$result = $job->delete();
		return Response::json(['data' => $result ], 200);
	}

}