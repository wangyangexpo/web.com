/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var about = function(req,res){
	var lib_o = new lib();
	commeData(req,res,lib_o,function(count){
		var content = lib_o.getAllContent();
		content.shopcart = count;
		content.title = '"葡"天同乐 - ' + content.title;
		res.render('2016s11',content);
	})
}

module .exports = about