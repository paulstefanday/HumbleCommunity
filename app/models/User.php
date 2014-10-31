<?php

class User extends Eloquent
{


	public function favorites()
	{
		return $this->hasMany('Favorite');
	}

}