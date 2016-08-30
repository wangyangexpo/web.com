/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var nationalStores = function(req,res){
	var lib_o = new lib();
	commeData(req,lib_o,function(count){
		var content = lib_o.getAllContent();
		content.shopcart = count;
		res.render('nationalStores',content);
	})
}

module .exports = nationalStores