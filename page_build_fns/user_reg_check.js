/**
 * Created by admin on 16/8/1.
 */
var configs = require('../lib/configs');
var request = require('request');
var userCheck = function(req, res) {
	//console.log('nickname:'+req.query);
	var nickname = req.query.nickname;
	res.cookie('nickname', nickname);
	//global.nickname = nickname;
	var redirect = req.query.redirect;
	//console.log('nickname:'+nickname+'redirect:'+redirect);

	var cookie = req.headers.cookie.split('; ');
	var cookieobj = {};
	cookie.forEach(function(v) {
		var vv = v.split('=');
		cookieobj[vv[0]] = vv[1];
	});

	request.post({
		url: configs.storeurl + '/v1/act/card/pc',
		timeout: 3000,
		form: {
			'uid':cookieobj.uid,
			'sign': cookieobj.sign,
			'token': cookieobj.token
		}
	}, function(err, httpResponse, body) {
		try {
			if(!err && httpResponse.statusCode == 200) {
				res.redirect(redirect + '&isReg=1');
			} else {
				res.redirect(redirect);
//				if(httpResponse) {
//					return console.log("error" + err + ' || ' + httpResponse ? httpResponse.statusCode : '');
//				}
			}
		} catch(e) {
			res.redirect(redirect);
		}
	})
}

module.exports = userCheck