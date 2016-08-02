/**
 * Created by admin on 16/7/25.
 * 葡星剧场
 */
var lib = require('./lib');
var commeData = require('./commeData');
var app = function(req,res,tag){
	var lib_o = new lib();
	lib_o.getData({tag:tag},'data',false,'/detail')
		.then(function(){
			commeData(req,lib_o,function(count){
				var content = lib_o.getAllContent(),
					data = content.data;
				var pic_map = [],
					text_map = [],
					body_map;
				data.forEach(function(item){
					var content_type = item.content_type;
					switch (content_type){
						case 'pic':
							pic_map.push(item);
							break;
						case 'text':
							text_map.push(item);
							break;
						case 'body':
							body_map = item;
							break
					};
				});
				var result = {
					pic_map:pic_map,
					text_map:text_map,
					body_map:body_map,
					cms:content.cms,
					shopcart:count
				}
				res.render('appinfo',result);
			})
		})
}

module .exports = app