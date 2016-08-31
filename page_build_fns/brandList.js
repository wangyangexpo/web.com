/**
 * Created by admin on 16/7/25.
 * 葡星剧场
 */
var lib = require('./lib');
var commeData = require('./commeData');
var theatreList = function(req,res){
	var _tag = req.query.tag;
	var _name = req.query.name;
	var lib_o = new lib();
	lib_o.getData({tag:'brand_banners'},'banner')
		.then(function(){return lib_o.getData({tag:_tag},'bannerList_list')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){
			commeData(req,res,lib_o,function(count){
				var content = lib_o.getAllContent();
				content.shopcart = count;
				content.sub_name = _name;
				content.js_tag = _tag;
				content.title = _name + ' - ' + content.title;
				//console.log('dddd '+JSON.stringify(content));
				res.render('brandList',content);
			})
		})
}

module .exports = theatreList