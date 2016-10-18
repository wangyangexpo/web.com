/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');
var request = require('request');
var config = require('./../lib/configs');
var arr = {
	4: {
		title: 'PaiBot',
		k: 'paibot'
	},
	2: {
		title: 'PaiBand',
		k: 'paiband'
	}
};

var about = function(req, res) {
	var lib_o = new lib();
	var tag = req.params.id;
	commeData(req, res, lib_o, function(count) {
		var content = lib_o.getAllContent();
		content.shopcart = count;
		
		if(content.shopcart) { // 已登录
			var cookie = req.headers.cookie.split('; ');
			var cookieobj = {};
			cookie.forEach(function(v) {
				var vv = v.split('=');
				cookieobj[vv[0]] = vv[1];
			});
			//验证是否已绑定过PT码
			request.post({
				url: config.storeurl + '/code/check',
				form: {
					'uid': cookieobj.uid,
					'sign': cookieobj.sign,
					'token': cookieobj.token
				}
			}, function(error, response, body) {
				if(!error && response.statusCode == 200) {
					var data = JSON.parse(body);
					var http_code = data.http_code;
					if(http_code == '40012') {
						res.redirect('/user/login');
					} else if(http_code == 200) { // 已绑定过，渲染页面
						var _tag = tag || data.data.code_activity_id;
						content.k = arr[_tag].k;
						content.title = arr[_tag].title + ' - ' + content.title;
						res.render('ptcodecaptionId', content);
					} else {
						res.redirect('/ptcode');
					}
				} else {
					console.log('发生错误！', +error);
					throw new Error('发生错误！', +error);
				}
			})
		} else {
			res.redirect('/user/login');
		}
		
	})

}
module.exports = about