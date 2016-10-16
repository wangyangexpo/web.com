/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var about = function(req, res) {
	var lib_o = new lib();
	var type = req.query.type;
	commeData(req, res, lib_o, function(count) {
		var content = lib_o.getAllContent();
		content.shopcart = count;
		content.pageType = type;
		res.render('mobile/ptcodecaption', content);
	})
}
module.exports = about