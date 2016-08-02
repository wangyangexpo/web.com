/**
 * Created by admin on 16/8/1.
 */
var config = require('./configs');
var request = require('request');
var md5 = require('md5')
//商城接口
var getStoreContent = function(req,callback){
	global.currenturl = req.originalUrl;
	if(req.cookies.sign) {
		var uid = req.cookies.uid,
			token = req.cookies.token,
			token_salt = '40f76636eea970fb91c4bec27368d921',
			sign = md5(uid.toString()+token.toSource+token_salt).toUpperCase();
		request.get({url: config.passport_domain + 'api/user/checktoken?sign='+sign+'&uid='+uid+'&token='+token}, function (err, httpResponse, body) {
			if (!err && httpResponse.statusCode == 200) {
				console.log('bbbbbbody '+body);
				request.get({url: config.storeurl + '/cart/count'}, function (err, httpResponse, body) {
					if (!err && httpResponse.statusCode == 200) {
						callback(body,global.nickname);
					} else {
						if (httpResponse) {
							return console.log("error" + err + ' || ' + httpResponse ? httpResponse.statusCode : '');
						}
					}
				})
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