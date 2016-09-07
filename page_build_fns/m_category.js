var lib = require('./lib');
var commeData = require('./commeData');
var m_category = function(req, res) {
    var lib_o = new lib();
    var _tag = req.params.category;
    var _title = req.query.name;
    lib_o.getData({tag: 'mobile_login'}, 'mobile_login')
        .then(function() {
            return lib_o.getData({tag: 'brand_banners'}, 'brand_banners')
        }).catch(function(error) {
            console.log('发生错误！', + error);
            throw new Error('发生错误！', + error);
        })
        .then(function() {
            return lib_o.getData({tag: _tag}, 'brand_list')
        }).catch(function(error) {
            console.log('发生错误！', + error);
            throw new Error('发生错误！', + error);
        })
        .then(function() {
            return lib_o.getData({tag: 'mobile'}, 'mobile_menu')
        }).catch(function(error) {
            console.log('发生错误！', + error);
            throw new Error('发生错误！', + error);
        })
        .then(function() {
            commeData(req,res,lib_o,function(count){
                var content = lib_o.getAllContent();
                content.shopcart = count;
                content._title = _title;
                content._tag = _tag;
                content.title = _title + ' - ' + content.title;
			    // console.log('category: '  + JSON.stringify(content));
                res.render('mobile/category', content);
            })
        })
}

module.exports = m_category;