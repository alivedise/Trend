steal('jquery/model','jquery/model/validations', function(){

/**
 * @class Trend.Models.Connection
 * @parent Models
 * @inherits Naxx.Models.Base
 * Wraps backend connection services.  
 */
$.Model('Trend.Models.Connection',
/* @Static */
{
	findAll: "/connections.json",
  	findOne : "/connections/{id}.json", 
  	create : "/connections.json",
 	update : "/connections/{id}.json",
  	destroy : "/connections/{id}.json",
	init: function(){
		var self = this;
		this.validate('ip', function(){
			if(!self.isIP(this.ip)) {
				return 'invalid_ip_address'
			}
		});
	},
	isIP: function(strIP) {
		if(strIP == '') return true; //empty is ok
		var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g; 
		if(re.test(strIP))
		{
			if( RegExp.$1 >0 && RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256){
				return true;
			}
			return false;
		}
		return false;
	}
},
/* @Prototype */
{});

})
