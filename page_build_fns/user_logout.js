/**
 * Created by admin on 16/8/2.
 */
var configs = require('../lib/configs');
var user_logout = function(req,res){
	//res.cookie('uid','null',{maxAge:0});
	//res.cookie('token','null',{maxAge:0});
	//res.clearCookie('uid');
	//res.clearCookie('token');
	//res.cookie('uid','0',{domain:configs.passport_domain});
	//res.cookie('token','0',{domain:configs.passport_domain});
	//var url = global.currenturl;
	res.clearCookie('uid');
	//res.clearCookie('nickname');
	var url ='';
	if(req.host.indexOf(configs.m_host_key) != -1){
		//url = 'http://m.putao.com';
		url = configs.m_host;
	}else{
		//url = 'http://putao.com/';
		url = configs.localurl;
	};
	//res.cookie('nickname','0',{domain:configs.passport_domain});
	//global.nickname = null;
	res.redirect(url);
	//res.redirect('http://account'+configs.passport_domain + '/logout');
}

module .exports = user_logout;