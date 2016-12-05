/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var channel = function(req,res){
	var page = req.params.id;
	var lib_o = new lib();
	commeData(req,res,lib_o,function(count){
		var content = lib_o.getAllContent();
		content.shopcart = count;
		content.title = content.title;
		res.render('channer_'+page,content);
	})
}

module .exports = channel