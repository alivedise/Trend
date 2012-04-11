steal( 'jquery/controller','steal/less','trend/models/connection.js','jquery/view/ejs','jquery/dom/form_params' )
	.then('./core.less', function($){

/**
 * @class Trend.Core
 * @parent Controllers
 * @inherits Naxx.Controllers.Base
 */
$.Controller('Trend.Core',
/** @Static */
{
	defaults : {
		model: Trend.Models.Connection
	}
},
/** @Prototype */
{
	init : function(){
		this.element.html("views/init.ejs", new Trend.Models.Connection(), this.callback('post_render'));
	},
	post_render: function(){
	},
	'change': function(el, ev){
		this.validate();
	},
	serialize: function(){
		var data = this.element.formParams();
		data['ip'] = data.oct1+'.'+data.oct2+'.'+data.oct3+'.'+data.oct4;
		return data;
	},
	'button#apply click': function(){
		this.find('form').trigger('submit');
	},
	'button#cancel click': function(){
	},
	'submit': function(){
		if(this.validate()){
			this.find('form').model().save();
		}
	},
	validate: function(){
		this.find('form').model().attrs(this.serialize());
		var errors = this.find('form').model().errors();
		if(errors){
			this.renderErrors();
			return false;
		}
		else
		{
			this.hideErrors();
			return true;
		}
	},
	renderErrors: function(errors){
		var self = this;
		$.each(errors, function(name, error_message){
			self.find('[name="'+name+'"]').closest('li').addClass('ui-state-error').append('<span class="validation_error">'+error_message+'</span>');
		});
	},
	hideErrors: function(){
		this.find('span.validation_error').remove();
	}
})

});
