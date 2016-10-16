/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');
var arr = {
	3: {
		title: 'PaiBot',
		k: 'paibot'
	},
	2: {
		title: 'PaiBand',
		k: 'paiband'
	}
};

var about = function(req, res) {
    var lib_o = new lib();
    var tag = req.params.id;
    commeData(req, res, lib_o, function(count) {
        var content = lib_o.getAllContent();
        content.shopcart = count;
        content.k = arr[tag].k;
        res.render('mobile/ptcodecaptionId', content);
    })
}
module.exports = about
