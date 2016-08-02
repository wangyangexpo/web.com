/**
 * Created by admin on 16/8/2.
 */
var user_logout = function(req,res){
	req.cookies.uid = '0';
	req.cookies.token = '0';
	var url = global.currenturl;
	res.redirect(url);
}

module .exports = user_logout;