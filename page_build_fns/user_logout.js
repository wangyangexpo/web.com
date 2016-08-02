/**
 * Created by admin on 16/8/2.
 */
var user_logout = function(req,res){
	//res.cookie('uid','null',{maxAge:0});
	//res.cookie('token','null',{maxAge:0});
	res.clearCookie('uid');
	res.clearCookie('token');
	var url = global.currenturl;
	res.redirect(url);
}

module .exports = user_logout;