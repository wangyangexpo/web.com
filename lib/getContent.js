/**
 * Created by admin on 16/7/18.
 */
var config = require('./configs');
var request = require('request');
/*
 * params object
 * */
var getContent = function(params, callback, api) {
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
	request.post({
		url: config.baseurl + (api || '/content'),
		timeout: 5000,
		form: params
	}, function(err, httpResponse, body) {
		console.log('statusCode1: '+err);
		console.log('statusCode2: '+httpResponse.statusCode);
		if(result) {
			//			clearTimeout(st);
			try {
				if(!err && httpResponse.statusCode == 200) {
					callback(body);
				} else {
					console.log('timeout:'+err);
					callback(JSON.stringify({
						code: 200,
						cache: params.cache
					}));
					if(httpResponse) {
						return console.log("error" + err + ' || ' + httpResponse ? httpResponse.statusCode : '');
					}
				}
			} catch(e) {

			}
		}
	})
};

module.exports = getContent;