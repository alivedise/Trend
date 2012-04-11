//js trend/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('trend/trend.html', {
		markdown : ['trend']
	});
});