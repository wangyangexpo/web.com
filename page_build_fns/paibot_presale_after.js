/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var paibot_presale_after = function(req,res){
	var lib_o = new lib();
	commeData(req,res,lib_o,function(count){
		var content = lib_o.getAllContent();
		content.shopcart = count;
		content.title = 'PaiBot预售 - ' + content.title;
		res.render('paibot_presale_after',content);
	})
}

module .exports = paibot_presale_after