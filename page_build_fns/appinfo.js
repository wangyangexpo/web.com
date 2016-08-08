/**
 * Created by admin on 16/7/25.
 * 葡星剧场
 */
var lib = require('./lib');
var commeData = require('./commeData');
var app = function(req,res,tag){
	var lib_o = new lib();
	var _name = req.query.name;
	lib_o.getData({tag:req.query.tag},'data',false,'/detail')
		.then(function(){
			commeData(req,lib_o,function(count){
				var content = lib_o.getAllContent(),
					data = content.data;
				var pic_map = [],
					text_map = [],
					body_map;
				if(data&&data.length>0) {
					data.forEach(function (item) {
						var content_type = item.content_type;
						switch (content_type) {
							case 'pic':
								pic_map.push(item);
								break;
							case 'text':
								text_map.push(item);
								break;
							case 'body':
								body_map = item;
								break
						}
						;
					});
				}
				var result = {
					pic_map:pic_map,
					text_map:text_map,
					body_map:body_map,
					cms:content.cms,
					title: _name + ' - ' + '应用下载 - ' + content.title,
					shopcart:count,
					banner: [{}]
				}
				res.render('appinfo',result);
			})
		})
}

module .exports = app