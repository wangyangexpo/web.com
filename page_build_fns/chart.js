/**
 * Created by admin on 16/8/2.
 */
var lib = require('./lib');
var commeData = require('./commeData');

var about = function(req,res){
	var lib_o = new lib();
	var id = req.params.id;
	var title = '';
	var view = '';
	commeData(req,res,lib_o,function(count){
		var content = lib_o.getAllContent();
		content.shopcart = count;
		switch(id){
			case 'ttsj':
			title = '淘淘与魔豆';
			view = 'chart_ttsj';
			break;
			
			case 'ttmd':
			title = '评测-淘淘之童话之旅-葡萄科技';
			view = 'chart_ttmd';
			break;
			
			case 'ttmd_1':
			title = '导读-淘淘之童话之旅-葡萄科技';
			view = 'chart_ttmd_1';
			break;
		}
		content.title = title;
		res.render(view,content);
	})
}

module .exports = about