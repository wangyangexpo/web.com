/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var selfserviceShow = function(req, res) {
	var lib_o = new lib();
	var tag = req.params.id;
	var name = req.query.name;
	var name1 = req.query.name1;
	lib_o.getData({
			tag: tag,
		}, 'list')
		.then(function() {
			commeData(req, res, lib_o, function(count) {
				var content = lib_o.getAllContent();
				content.shopcart = count;
				content.name = name;
				content.name1 = name1
				content.title = name1 + ' - ' + name + ' - ' + content.title;
				res.render('selfserviceShow', content);
			})
		})

}

module.exports = selfserviceShow