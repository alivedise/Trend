//js trend/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('trend/scripts/build.html',{to: 'www'});
});
