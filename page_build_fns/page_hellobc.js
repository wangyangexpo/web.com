/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var page_hellobc = function(req,res){
	var lib_o = new lib();
	commeData(req,lib_o,function(count){
		var content = lib_o.getAllContent();
		content.banner = [{description:1}];
		content.shopcart = count;
		res.render('hellobc',content);
	})
}

module .exports = page_hellobc