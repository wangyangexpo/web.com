/**
 * Created by admin on 16/7/20.
 */
var configs = require('./../lib/configs');
var helpers = {
	// 返回商城的url
	getShoppingMallUrl: function(v){
		return configs.storeurl + v;
	},
	getShoppingMallUrl_m: function(v){
		return configs.devurl_m + v;
	},
	// 对汉字进行编码
	// 原因：在IE中链接中存在汉字会乱码
	encodeURIComponent: function(v){
		return encodeURIComponent(v)
	}
}

module .exports = helpers;