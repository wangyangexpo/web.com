/**
 * Created by admin on 16/7/22.
 */
var index = function(req,res){
	var content = {};
	content.banners = [
		{
			basic_url: 'http://m.topcrab.com/UploadImage/PCIndex/20160718102324439.jpg'
		},
		{
			basic_url: 'http://m.topcrab.com/UploadImage/PCIndex/20160718102411853.jpg'
		}
	];
	content.title = '首页';
	res.render('index', content);
}

module .exports = index;