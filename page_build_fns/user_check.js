/**
 * Created by admin on 16/8/1.
 */
var configs = require('../lib/configs');
var userCheck = function(req,res){
	//console.log('nickname:'+req.query);
	var nickname = req.query.nickname;
	res.cookie('nickname',nickname);
	//global.nickname = nickname;
	var redirect = req.query.redirect;
	console.log('nickname:'+nickname+'redirect:'+redirect);
	res.redirect(redirect);
}

module .exports = userCheck