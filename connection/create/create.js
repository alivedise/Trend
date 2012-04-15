steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'trend/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Trend.Connection.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates connections
 */
$.Controller('Trend.Connection.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Trend.Models.Connection(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});