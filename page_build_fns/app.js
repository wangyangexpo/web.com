/**
 * Created by admin on 16/7/25.
 * 葡星剧场
 */
var lib = require('./lib');
var commeData = require('./commeData');
var app = function(req,res){
	var lib_o = new lib();
	lib_o.getData({tag:'app_banner'},'banner')
		.then(function(){return lib_o.getData({tag:'app_game'},'game')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'app_app'},'app')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){
			commeData(lib_o,function(count){
				var content = lib_o.getAllContent();
				content.shopcart = count;
				res.render('app',content);
			})
		})
}

module .exports = app