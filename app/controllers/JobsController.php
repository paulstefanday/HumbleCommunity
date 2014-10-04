<?php

class JobsController extends \BaseController {

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
		$job = DB::table('jobs')->where('id', $id)->update(Input::all());
		return Response::json(['data' => $job ], 200);
	}

	public function destroy($id)
	{
		$job = Job::find($id);
		$result = $job->delete();
		return Response::json(['data' => $result ], 200);
	}

}