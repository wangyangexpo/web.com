/**
 * Created by admin on 16/7/22.
 */
var index = function(req, res) {
    var content = {};
    content.banners = [
    	
        // {
        //     basic_url: 'http://omw0i6l1a.bkt.clouddn.com/timg_1.jpg'
        // },
        {
            basic_url: 'http://omw0i6l1a.bkt.clouddn.com/timg.jpeg'
        },
        {
            basic_url: 'http://omw0i6l1a.bkt.clouddn.com/timg%20%289%29.jpeg'
        },
        {
            basic_url: 'http://omw0i6l1a.bkt.clouddn.com/huodong.jpeg'
        },
        {
            basic_url: 'http://omw0i6l1a.bkt.clouddn.com/finial.jpg'
        }
    ];
    content.title = '首页';
    res.render('index', content);
}

module.exports = index;
