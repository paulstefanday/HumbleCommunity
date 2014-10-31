<?php

class Favorite extends \Eloquent {
	protected $fillable = [];

	public function Job()
	{
		return $this->belongsTo('Job');
	}
}