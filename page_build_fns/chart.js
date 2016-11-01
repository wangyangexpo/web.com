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
		}
		content.title = ''+title+' - ' + content.title;
		res.render(view,content);
	})
}

module .exports = about