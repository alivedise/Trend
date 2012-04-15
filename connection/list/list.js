steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'trend/models' )
.then( './views/init.ejs', 
       './views/connection.ejs', 
       function($){

/**
 * @class Trend.Connection.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists connections and lets you destroy them.
 */
$.Controller('Trend.Connection.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Trend.Models.Connection.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.connection').model().destroy();
		}
	},
	"{Trend.Models.Connection} destroyed" : function(Connection, ev, connection) {
		connection.elements(this.element).remove();
	},
	"{Trend.Models.Connection} created" : function(Connection, ev, connection){
		this.element.append(this.view('init', [connection]))
	},
	"{Trend.Models.Connection} updated" : function(Connection, ev, connection){
		connection.elements(this.element)
		      .html(this.view('connection', connection) );
	}
});

});