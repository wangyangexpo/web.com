/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var page_brandShow = function(req, res) {
	var lib_o = new lib();
	var name = req.query.name;
	var banner = req.query.banner;
	lib_o.getData({
			tag: req.query.tag
		}, 'show')
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
				var _date = new Date(Number(content.show[0].created_at)*1000);
				//console.log('bbbbbbbbbbbbbbbbbbbb');
				content.show[0].created_at = _date.getFullYear() + '-' + (_date.getMonth()+1) + '-' + _date.getDay() + ' ' + _date.getHours()+':'+_date.getMinutes();
				content.name = name;
				content.banner = banner;
				res.render('brandShow', content);
			})
		});
}

module.exports = page_brandShow