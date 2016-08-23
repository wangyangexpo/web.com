/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var page_brandShow = function(req, res) {
	var lib_o = new lib();
	var name = req.query.name;
	lib_o.getData({
			tag: req.query.tag
		}, 'show')
		.then(function() {
			return lib_o.getData({
				tag: 'brandShow_banner'
			}, '_banner')
		}).catch(function(error) {
			console.log('发生错误！', +error);
			throw new Error('发生错误！', +error);
		})
		.then(function() {
			return lib_o.getData({
				tag: 'index_content'
			}, 'index_content')
		}).catch(function(error) {
			console.log('发生错误！', +error);
			throw new Error('发生错误！', +error);
		})
		.then(function() {
			commeData(req, lib_o, function(count) {
				var content = lib_o.getAllContent();
				content.shopcart = count;
				content.name = name;
				if(content.show && content.show.length > 0) {
					var _date = new Date(Number(content.show[0].created_at) * 1000);
					content.show[0].created_at = _date.getFullYear() + '-' + (_date.getMonth() + 1) + '-' + _date.getDay() + ' ' + _date.getHours() + ':' + _date.getMinutes();
					if(content._banner && content._banner.length > 0) {
						content.banner = [{
							basic_image_1: content.show[0].extension_5 || content._banner[0].basic_image_1,
							description: content.show[0].extension_4 || content._banner[0].description
						}]
					} else {
						content.banner = [{
							basic_image_1: content.show[0].extension_5,
							description: content.show[0].extension_4
						}]
					}
				} else {
					if(content._banner && content._banner.length > 0) {
						content.banner = [{
							basic_image_1: content._banner[0].basic_image_1,
							description: content._banner[0].description
						}]
					}
				}
				res.render('brandShow', content);
			})
		});
}

module.exports = page_brandShow