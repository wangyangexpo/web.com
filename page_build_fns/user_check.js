/**
 * Created by admin on 16/8/1.
 */
var userCheck = function(req,res){
	var nickname = req.query.nickname;
	global.nickname = nickname;
	var redirect = req.query.redirect;
	console.log('nickname:'+nickname+'redirect:'+redirect);
	res.redirect(redirect);
}

module .exports = userCheck