/**
 * Created by admin on 16/8/1.
 */
var userCheck = function(req,res){
	var nickname = req.query.nickname;
	global.nickname = nickname;
}

module .exports = userCheck