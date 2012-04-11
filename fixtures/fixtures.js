// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("connection", 5, function(i, connection){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "connection "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})