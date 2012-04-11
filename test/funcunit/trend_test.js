steal("funcunit", function(){
	module("trend test", { 
		setup: function(){
			S.open("//trend/trend.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})