/**
 * Created by admin on 16/7/26.
 */
var lib = require('./lib');
var commeData = require('./commeData');
var pt_home = function(req,res){
	var lib_o = new lib();
	lib_o.getData({tag:'pthome_banner'},'banner')
		.then(function(){return lib_o.getData({tag:'pthome_member'},'member_ship')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'82PXgE'},'show_banner')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'pthome_hot'},'hot_acts')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){return lib_o.getData({tag:'pthome_fans'},'pf_stories')}).catch(function(error) {
			console.log('发生错误！',+ error);
			throw new Error('发生错误！',+ error);
		})
		.then(function(){
			commeData(req,lib_o,function(count){
				var content = lib_o.getAllContent();
				content.shopcart = count;
				//console.log('dddd '+JSON.stringify(content));
				res.render('pt_home',content);
			})

		})
}

module .exports = pt_home