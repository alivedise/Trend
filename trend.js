steal(
	'./trend.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'trend/connection/create',
	'trend/connection/list',
	function(){					// configure your application
		
		$('#connections').trend_connection_list();
		$('#create').trend_connection_create();
})