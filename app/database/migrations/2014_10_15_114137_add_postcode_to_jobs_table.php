<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddPostcodeToJobsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('jobs', function(Blueprint $table)
		{
			$table->integer('postcode');
			$table->string('state');
			$table->string('suburb');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('jobs', function(Blueprint $table)
		{
			$table->dropColumn('postcode');
			$table->dropColumn('state');
			$table->dropColumn('suburb');
		});
	}

}
