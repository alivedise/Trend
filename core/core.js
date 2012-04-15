steal( 'jquery/controller','steal/less','trend/models/connection.js','jquery/view/ejs','jquery/dom/form_params','resource/jquery/ui','mxui/layout/modal' )
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
		this.element.html("/trend/core/views/init.ejs", new Trend.Models.Connection(), this.callback('post_render'), this.callback('view_error'));
	},
	view_error: function(res){
		console.log(res);
	},
	post_render: function(){
		this.find('form').tabs({
			selected: 1
		});
		this.element.mxui_layout_modal();
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
	'submit': function(el, ev){
		ev.preventDefault();
		if(this.validate()){
			this.find('form').model().save();
		}
	},
	validate: function(){
		this.find('form').model().attrs(this.serialize());
		var errors = this.find('form').model().errors();
		if(errors){
			this.renderErrors(errors);
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
		this.hideErrors();
		$.each(errors, function(name, error_message){
				self.find('[name="'+name+'"]').closest('div').addClass('ui-state-error').append('<span class="validation_error">'+error_message+'</span>').find('.desc').hide();
		});
	},
	hideErrors: function(){
		this.find('span.validation_error').remove();
		this.find('span.desc').show();
		this.find('div.ui-state-error').removeClass('ui-state-error');
	},
	'select#hour_frequency change': function(el, ev){
		this.find('[name=frequency]').prop('checked', false);
		this.find('[name=frequency][value="hourly"]:radio').prop('checked', true);
	},
	'select#day_frequency change': function(el, ev){
		this.find('[name=frequency]').prop('checked', false);
		this.find('[name=frequency][value="daily"]:radio').prop('checked', true);
	},
	'[name=enable]:checkbox change': function(el, ev){
		if(el.prop('checked')){
			el.siblings('div').find('input,select').each(function(){
				$(this).prop('disabled', false);
			});
		}
		else
		{
			el.siblings('div').find('input,select').each(function(){
				$(this).prop('disabled', true);
			});
		}

	}
})

});
