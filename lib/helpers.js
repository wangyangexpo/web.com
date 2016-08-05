/**
 * Created by admin on 16/7/4.
 */
var configs = require('./configs')
var helper1 = require('../helpers/fkq_helpers')
var helper2 = require('../helpers/jyn_helpers')
var helper3 = require('../helpers/wdy_helpers')
var helper4 = require('../helpers/yzl_helpers')
var helper5 = require('../helpers/zsm_helpers')

var helpers = {
	drawImage:function(v){
		return configs.fileurl+v;
	},
	getCarToonPages:function(v){
		console.log(v[0].extend);
		var extend = v[0].extend,
			value = extend['page'].value;
		return value;
	},
	getGameInfo:function(v){
		var extend = v.extend;
		var qr,
			ios_qr = extend['ios_qr'] || {value:''},
			android_qr = extend['android_qr']|| {value:''};
		if(ios_qr.value != '' && android_qr.value != ''){
			qr = extend['common_qr']?extend['common_qr'].value:'';
		}else{
			qr = ios_qr.value != ''?ios_qr.value:android_qr.value;
		}
		return {
			qr:qr,
			android_link:extend['android_url']?extend['android_url'].value:'',
			ios_link:extend['ios_url']?extend['ios_url'].value:''
		}
	},
	getAppInfo:function(v){
		var extend = v.extend;
		var qr,
			ios_qr = extend['ios_qr']|| {value:''},
			android_qr = extend['android_qr']|| {value:''};
		if(ios_qr.value != '' && android_qr.value != ''){
			qr = extend['common_qr']?extend['common_qr'].value:'';
		}else{
			qr = ios_qr.value != ''?ios_qr.value:android_qr.value;
		}
		return {
			qr:qr,
			android_link:extend['android_url']?extend['android_url'].value:'',
			ios_link:extend['ios_url']?extend['ios_url'].value:''
		}
	},
	staticurl:function(v){
		return configs.staticurl + v;
	},
	getIpsImg:function(v){

		var arr = [];
		for(var i=0,l=v.length;i<l;i++){
			var item = v[i];
			content = item.basic_image_2;
			arr.push(content);
		}
		return arr;
	},
	getIpsContent:function(v){
		var arr = [];
		for(var i=0,l=v.length;i<l;i++){
			var item = v[i];
			content = item.basic_content;
			arr.push(content);
		}
		return arr.join('|*|');
	},
	getIpsName:function(v){
		var arr = [];
		for(var i=0,l=v.length;i<l;i++){
			var item = v[i];
			content = item.name;
			arr.push(content);
		}
		return arr.join('|*|');
	}
}
var main_helpers = Object.assign({},helpers,helper1,helper2,helper3,helper4,helper5);

module .exports = main_helpers;