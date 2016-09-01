/**
 * Created by admin on 16/7/25.
 * 葡星剧场
 */
var lib = require('./lib');
var commeData = require('./commeData');
var app_info = function(req, res, tag) {
	var lib_o = new lib();
	var _name = decodeURIComponent(req.query.name);
	var _tag = req.query.tag;
	console.log('tagfromurl '+tag)
	lib_o.getData({
			tag: _tag
		}, 'data', false, '/detail')
		.then(function() {
			commeData(req,res, lib_o, function(count) {
				var content = lib_o.getAllContent(),
					banner = [{}],
					data = content.data;
				var pic_map = [],
					text_map = [],
					body_map;
				if(data && data.length > 0) {
					data.forEach(function(item) {
						var content_type = item.content_type;

						switch(content_type) {
							case 'pic':
								pic_map.push(item);
								break;
							case 'text':
								text_map.push(item);
								break;
							case 'body':
								banner[0] = item;
								body_map = item;
								break
						};
					});
				}
				var result = {
					pic_map: pic_map,
					text_map: text_map,
					body_map: body_map,
					cms: content.cms,
					banner: banner,
					title: _name + ' - ' + '应用下载 - ' + content.title,
					shopcart: count
				}
				res.render('appinfo', result);
			})
		}).catch(function(error) {
		console.log('发生错误！',+ error);
		throw new Error('发生错误！',+ error);
	})
}

module.exports = app_info