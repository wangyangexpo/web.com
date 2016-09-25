/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var paiband_presale = function(req,res){
	var lib_o = new lib();
	commeData(req,res,lib_o,function(count){
		var content = lib_o.getAllContent();
		content.shopcart = count;
		content.title = 'PaiBand预售 - ' + content.title;
		res.render('paiband_presale',content);
	})
}

module .exports = paiband_presale