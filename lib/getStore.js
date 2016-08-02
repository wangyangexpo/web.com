/**
 * Created by admin on 16/8/1.
 */
var config = require('./configs');
var request = require('request');
//商城接口
var getStoreContent = function(req,callback){
	if(req.cookies.PHPSESSID) {
		request.get({url: config.storeurl + '/cart/count'}, function (err, httpResponse, body) {
			if (!err && httpResponse.statusCode == 200) {
				callback(body,req.cookies.PHPSESSID);
			} else {
				if (httpResponse) {
					return console.log("error" + err + ' || ' + httpResponse ? httpResponse.statusCode : '');
				}
			}
		})
	}else{
		callback()
	}
}

module.exports=getStoreContent;