/**
 * Created by admin on 16/7/22.
 */
var lib = require('./lib');
var commeData = require('./commeData');
var index = function(req,res){
	var lib_o = new lib();
	lib_o.getData({tag:'new_index_banner'},'banner')
		.then(function(){return lib_o.getData({tag:'new_index_parts'},'new_index_parts')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'new_index_jqr'},'new_index_jqr')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'new_index_kj'},'new_index_kj')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'new_index_kjwj'},'new_index_kjwj')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){
			commeData(req,res,lib_o,function(count){
				var content = lib_o.getAllContent();
				content.shopcart = count;
				content.isReg = req.query.isReg;
//				console.log(JSON.stringify(content))
				res.render('new_index',content);
			})
		})
}

module .exports = index;