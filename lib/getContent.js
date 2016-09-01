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
	request.post({
		url: config.baseurl + (api || '/content'),
		timeout: 3000,
		form: params
	}, function(err, httpResponse, body) {
		//console.log('statusCode1: '+err);
		//console.log('statusCode2: '+httpResponse.statusCode);
		if(result) {
			try {
				if(!err && httpResponse.statusCode == 200) {
					callback(body);
				} else {
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