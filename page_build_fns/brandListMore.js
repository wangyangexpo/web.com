/**
 * Created by admin on 16/7/25.
 */
var lib = require('./lib');
var config = require('./../lib/configs');
var commeData = require('./commeData');
var theatreListMore = function(req, res) {
	var _tag = req.query.tag;
	var _start_index = req.query.start_index;
	var _len = req.query.len;
	var lib_o = new lib();
	lib_o.getData({
			tag: _tag
		}, 'list')
		.then(function() {
			commeData(req,res,lib_o, function(count) {
				var content = lib_o.getAllContent();
				content.list = content.list || [];
				res.json({
					http_code: 200,
					base_url: config.fileurl,
					data: content.list.slice(_start_index, _start_index+_len)
				});
			})
		})
}

module.exports = theatreListMore