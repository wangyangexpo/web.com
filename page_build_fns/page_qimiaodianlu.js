/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var page_qimiaodianlu = function(req,res){
	var lib_o = new lib();
	commeData(req,res,lib_o,function(count){
		var content = lib_o.getAllContent();
		content.shopcart = count;
		content.banner = [{description:1}];
		res.render('qimiaodianlu',content);
	})
}

module .exports = page_qimiaodianlu