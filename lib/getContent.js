/**
 * Created by admin on 16/7/18.
 */
var config = require('./configs');
var request = require('request');
/*
* params object
* */
var getContent = function(params,callback,api){
	var result = true;
//	var st = setTimeout(function(){
//		console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
//		result = false;
//		var json = {
//			code:200,
//			state:'timeout'
//		}
//		callback(JSON.stringify(json));
//	},3000)
	request.post({url:config.baseurl+(api||'/content'), form: params,timeout: 5000}, function(err,httpResponse,body){
		if(result && err.code !== 'ETIMEDOUT') {
//			clearTimeout(st);
			if (!err && httpResponse.statusCode == 200) {
				callback(body);
			} else {
				if (httpResponse) {
					return console.log("error" + err + ' || ' + httpResponse ? httpResponse.statusCode : '');
				}
			}
		}else{
			var re = {
				code:'timeout'
			}
			callback(JSON.stringify(re))
		}
	})
};

module .exports = getContent;