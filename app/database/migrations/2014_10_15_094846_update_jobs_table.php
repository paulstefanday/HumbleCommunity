<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class UpdateJobsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('jobs', function(Blueprint $table)
		{
			$table->dropColumn('start_date');
			$table->dropColumn('end_date');
		});
		Schema::table('jobs', function(Blueprint $table)
		{
			$table->date('end_date');
			$table->date('start_date');
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
			$table->dropColumn('start_date');
			$table->dropColumn('end_date');
		});
		Schema::table('jobs', function(Blueprint $table)
		{
			$table->timestamp('start_date');
			$table->timestamp('end_date');
		});
	}

}
