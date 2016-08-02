/**
 * Created by admin on 16/7/25.
 * 葡星剧场
 */
var lib = require('./lib');
var commeData = require('./commeData');
var theatre = function(req,res){
	var lib_o = new lib();
	lib_o.getData({tag:'brand_banner'},'banner1')
		.then(function(){return lib_o.getData({tag:'brand_story'},'banner2')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'brand_news'},'new_story')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'brand_coo'},'brand_coo')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'brand_pub'},'news_publish')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){
			commeData(req,lib_o,function(count){
				var content = lib_o.getAllContent();
				content.shopcart = count;
				//console.log('dddd '+JSON.stringify(content));
				res.render('brand',content);
			})
		})
}

module .exports = theatre