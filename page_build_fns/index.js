/**
 * Created by admin on 16/7/22.
 */
var lib = require('./lib');
var commeData = require('./commeData');
var index = function(req,res){
	var lib_o = new lib();
	lib_o.getData({tag:'index_banner'},'banner')
		.then(function(){return lib_o.getData({tag:'index_content'},'index_content')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'maker'},'techToy_1',true)}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'quality'},'techToy_2',true)}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'edu'},'techToy_3',true)}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'acc_1'},'acc_1',true)}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'acc_2'},'acc_2',true)}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'tech_toy'},'techToy')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'acc'},'acc')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){
			commeData(req,res,lib_o,function(count){
				var content = lib_o.getAllContent();
				content.shopcart = count;
//				console.log(JSON.stringify(content))
				res.render('index',content);
			})
		})
}

module .exports = index;