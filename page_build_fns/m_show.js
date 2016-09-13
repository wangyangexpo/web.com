var lib = require('./lib');
var commeData = require('./commeData');
var m_show = function(req, res) {
    var lib_o = new lib();
    // var _tag = req.params.category;
    // var _subtag = req.params.tag;
    var _subtag = req.query.tag;
    var _title = req.query.name;
    lib_o.getData({tag: 'mobile_login'}, 'mobile_login')
        .then(function() {
            return lib_o.getData({tag: _subtag}, 'brand_show')
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
                // content._tag = _tag;
                content._subtag = _subtag;
                content._title = _title;
                content.title = _title + ' - ' + content.title;
                // console.log('show: '  + JSON.stringify(content));
                res.render('mobile/show', content);
            })
        })
}

module.exports = m_show;