/**
 * Created by admin on 16/7/25.
 * 葡星剧场
 */
var lib = require('./lib');
var commeData = require('./commeData');
var help = function(req,res){
	var lib_o = new lib();
	var parent_tag = req.query.parent_tag;
	var id = req.params.id;
	lib_o.getData({tag:'cms'},'dl')
		.then(function(){return lib_o.getData({tag:'cms_order'},'cms_order')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'cms_service'},'cms_service')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'cms_bd'},'cms_bd')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'cms_about'},'cms_about')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){
			commeData(req,res,lib_o,function(count) {
				var content = lib_o.getAllContent();
				if (!parent_tag) {
					content.mainText = '暂时内容'
				} else {
					var _arr = content[parent_tag];
					var _address = '';
					var _address1 = '';
					if(_arr&&_arr.length) {
						_arr.forEach(function (v) {
							if (v.id === id) {
								content.mainText = v.basic_content;
								_address = v.name;
								return false;
							}
						})
					}
				}
				if(content.dl) {
					content.dl.forEach(function (v) {
						if (v.tag === parent_tag) {
							_address1 = v.name + ' - ' + _address + ' - ';
							_address = v.name + ' > ' + _address;
							return false;
						}
					})
				}
				content.curAddress = _address;
				content.shopcart = count;
				content.title = _address1 + content.title;
				res.render('help', content);
			})
		})
}

module .exports = help
