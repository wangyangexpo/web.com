/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var invite = function(req,res){
	var lib_o = new lib();
	lib_o.getData({tag: 'mobile_login'}, 'mobile_login')
    // 首页轮播图
	.then(function() {
		return lib_o.getData({tag: 'mobile'}, 'mobile_menu')
	}).catch(function(error) {
		console.log('发生错误！', + error);
		throw new Error('发生错误！', + error);
	})
	.then(function() {
		commeData(req,res,lib_o,function(count){
			var content = lib_o.getAllContent();
			content.shopcart = count;
			content.title = '关于葡萄 - ' + content.title;
			res.render('mobile/invite',content);
		})
	})
}

module .exports = invite