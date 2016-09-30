/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var selfservice = function(req, res) {
	var lib_o = new lib();
	lib_o.getData({
			tag: 'selfservice_banner'
		}, 'selfservice_banner')
		.then(function() {
			return lib_o.getData({
				tag: 'selfservice_list'
			}, 'selfservice_list')
		}).catch(function(error) {
			console.log('发生错误！', +error);
			throw new Error('发生错误！', +error);
		})
		.then(function() {
			return lib_o.getData({
				tag: 'selfservice_list1'
			}, 'selfservice_list1')
		}).catch(function(error) {
			console.log('发生错误！', +error);
			throw new Error('发生错误！', +error);
		})
		.then(function() {
			commeData(req, res, lib_o, function(count) {
				var content = lib_o.getAllContent();
				content.shopcart = count;
				content.title = '自助服务 - ' + content.title;
				res.render('selfservice', content);
			})
		})

}

module.exports = selfservice