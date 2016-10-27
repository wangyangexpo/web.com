/**
 * Created by admin on 16/8/1.
 */
var getStore = require('../lib/getStore')
var commeData = function(req,res,lib_o,callback){
	lib_o.getData({tag:'cms_order'},'cms_order',true)
		.then(function(){return lib_o.getData({tag:'cms_service'},'cms_service',true)}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'cms_bd'},'cms_bd',true)}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'cms_about'},'cms_about',true)}).catch(function(error){
			console.log('发生错误!',+error);
			throw new Error('发生错误!',error);
		})
		.then(function(){return lib_o.getData({tag:'cms'},'cms')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'nav_list'},'nav_list')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){
			getStore(req,res,function(text,sessid){
				//console.log('yzl-tag:getStore完毕');
				if(text) {
					var result = JSON.parse(text);
					if (result.status == 200) {
						var num = result.data.count;
						callback({num:num,sessid:sessid});
					} else {
						console.log('商城接口发生错误！', +error);
						throw new Error('商城接口发生错误！', +error);
					}
				}else{
					callback();
				}

			})
		})
}

module .exports=commeData;