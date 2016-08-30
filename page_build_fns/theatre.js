/**
 * Created by admin on 16/7/25.
 * 葡星剧场
 */
var lib = require('./lib');
var commeData = require('./commeData');
var theatre = function(req,res){
	var lib_o = new lib();
	lib_o.getData({tag:'theatre_banner'},'banner')
		.then(function(){return lib_o.getData({tag:'theatre_ip'},'ips')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'theatre_qtao'},'qtao')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'theatre_pxr'},'hlpxr')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'theatre_story'},'comic_novel')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'theatre_4d'},'fdmovie')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){
			commeData(req,lib_o,function(count){
				var content = lib_o.getAllContent();
				content.title = '葡星剧场 - ' + content.title;
				content.shopcart = count;
				//console.log('dddd '+JSON.stringify(content));
				res.render('theatre',content);
			})
		})
}

module .exports = theatre