/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var contact = function(req,res){
	var lib_o = new lib();
	commeData(req,lib_o,function(count){
		var content = lib_o.getAllContent();
		content.shopcart = count;
		content.title = '联系我们 - ' + content.title;
		res.render('contact',content);
	})
}

module .exports = contact