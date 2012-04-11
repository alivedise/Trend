steal('funcunit').then(function(){

module("Trend.Core", { 
	setup: function(){
		S.open("//trend/core/core.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Trend.Core Demo","demo text");
});


});