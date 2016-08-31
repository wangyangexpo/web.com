/**
 * Created by admin on 16/7/25.
 * 葡星剧场
 */
var lib = require('./lib');
var commeData = require('./commeData');
var theatre = function(req,res){
	var lib_o = new lib();
	lib_o.getData({tag:'brand_banners'},'banner')
		.then(function(){return lib_o.getData({tag:'banners_down_imgs'},'banners_down_imgs')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'brandShow_banner'},'brandShow_banner')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'brand_ppsj_top'},'brand_ppsj_top')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'brand_banner1'},'brand_banner1')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'brand_mediacoverage'},'brand_mediacoverage')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'brand_cooperation'},'brand_cooperation')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'brand_contentCooperation'},'brand_contentCooperation')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'brand_story'},'brand_story')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'banners_newRelease'},'banners_newRelease')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){
			commeData(req,res,lib_o,function(count){
				var content = lib_o.getAllContent();
				content.shopcart = count;
				content.title = '品牌动态 - ' + content.title;
				//console.log('dddd '+JSON.stringify(content));
				res.render('brand',content);
			})
		})
}

module .exports = theatre