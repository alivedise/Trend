steal("funcunit/qunit", "trend/fixtures", "trend/models/connection.js", function(){
	module("Model: Trend.Models.Connection")
	
	test("findAll", function(){
		expect(4);
		stop();
		Trend.Models.Connection.findAll({}, function(connections){
			ok(connections)
	        ok(connections.length)
	        ok(connections[0].name)
	        ok(connections[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Trend.Models.Connection({name: "dry cleaning", description: "take to street corner"}).save(function(connection){
			ok(connection);
	        ok(connection.id);
	        equals(connection.name,"dry cleaning")
	        connection.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Trend.Models.Connection({name: "cook dinner", description: "chicken"}).
	            save(function(connection){
	            	equals(connection.description,"chicken");
	        		connection.update({description: "steak"},function(connection){
	        			equals(connection.description,"steak");
	        			connection.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Trend.Models.Connection({name: "mow grass", description: "use riding mower"}).
	            destroy(function(connection){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})