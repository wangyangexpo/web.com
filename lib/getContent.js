/**
 * Created by admin on 16/7/18.
 */
var config = require('./configs');
var request = require('request');
/*
* params object
* */
var getContent = function(params,callback,api){
	request.post({url:config.baseurl+(api||'/content'), form: params}, function(err,httpResponse,body){
		if(!err && httpResponse.statusCode == 200){
			callback(body);
		}else{
			if(httpResponse) {
				return console.log("error" + err + ' || ' + httpResponse ? httpResponse.statusCode : '');
			}
		}
	})
};

module .exports = getContent;