/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var ajax = function(req,res,callback) {
	var lib_o = new lib();
	lib_o.getData({
			tag: 'brand_banners'
		}, 'banner')
		.then(function() {
			return lib_o.getData({
				tag: 'banners_newRelease'
			}, 'banners_newRelease')
		}).catch(function(error) {
			console.log('发生错误！', +error);
			throw new Error('发生错误！', +error);
		})
		.then(function(){return lib_o.getData({tag:'brand_story'},'brand_story')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'carnival_2016Q3_mt'},'carnival_2016Q3_mt')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'carnival_2016Q3_zj'},'carnival_2016Q3_zj')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'carnival_2016Q3_video'},'carnival_2016Q3_video')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'carnival_2016Q3_paiband'},'carnival_2016Q3_paiband')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'carnival_2016Q3_paibot'},'carnival_2016Q3_paibot')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function() {
			commeData(req, res, lib_o, function(count) {
				var content = lib_o.getAllContent();
				content.shopcart = count;
				callback(content);
			})
		})
}

var carnival = function(req, res) {
	var _name = req.query.name;
	var _description = req.query.description;
	var lib_o = new lib();
	if(_name === '2016Q3') {
		ajax(req,res,function(content) {
			content.title = '2016葡萄科技Q3战略产品发布会' + ' - 嘉年华 - ' + content.title;
			content.banner[0].description = _description;
			res.render('carnival_' + _name, content);
		})
	} else {
		commeData(req, res, lib_o, function(count) {
			var content = lib_o.getAllContent();
			content.shopcart = count;
			content.title = _name + ' - 嘉年华 - ' + content.title;
			content.banner[0].description = _description;
			res.render('carnival_' + _name, content);
		})
	}
}

module.exports = carnival