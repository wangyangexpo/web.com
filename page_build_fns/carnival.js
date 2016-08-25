/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var carnival = function(req,res){
	var _name = req.query.name;
	var _description = req.query.description;
	var lib_o = new lib();
	commeData(req,lib_o,function(count){
		var content = lib_o.getAllContent();
		content.shopcart = count;
		content.title = _name + ' - 嘉年华 - ' + content.title;
		content.banner[0].description = _description;
		res.render('carnival_'+_name,content);
	})
}

module .exports = carnival