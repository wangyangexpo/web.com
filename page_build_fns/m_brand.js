var lib = require('./lib');
var commeData = require('./commeData');
var m_detail = function(req, res) {
    var lib_o = new lib();
    lib_o.getData({tag: 'mobile_login'}, 'mobile_login')
        .then(function() {
            return lib_o.getData({tag: 'brand_banners'}, 'brand_banners')
        }).catch(function(error) {
            console.log('发生错误！', + error);
            throw new Error('发生错误！', + error);
        })
        .then(function(){
            return lib_o.getData({tag:'banners_down_imgs'},'banners_down_imgs')
        }).catch(function(error) {
            console.log('发生错误！',+ error);
            throw new Error('发生错误！',+ error);
        })
        .then(function() {
            return lib_o.getData({tag: 'brand_ppsj_top'}, 'brand_ppsj_top')
        }).catch(function(error) {
            console.log('发生错误！', + error);
            throw new Error('发生错误！', + error);
        })
        .then(function() {
            return lib_o.getData({tag: 'brand_banner1'}, 'brand_banner1')
        }).catch(function(error) {
            console.log('发生错误！', + error);
            throw new Error('发生错误！', + error);
        })
        .then(function() {
            return lib_o.getData({tag: 'brand_mediacoverage'}, 'brand_mediacoverage')
        }).catch(function(error) {
            console.log('发生错误！', + error);
            throw new Error('发生错误！', + error);
        })
        .then(function() {
            return lib_o.getData({tag: 'brand_cooperation'}, 'brand_cooperation')
        }).catch(function(error) {
            console.log('发生错误！', + error);
            throw new Error('发生错误！', + error);
        })
        .then(function() {
            return lib_o.getData({tag: 'brand_contentCooperation'}, 'brand_contentCooperation')
        }).catch(function(error) {
            console.log('发生错误！', + error);
            throw new Error('发生错误！', + error);
        })
        .then(function() {
            return lib_o.getData({tag: 'brand_story'}, 'brand_story')
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
//			console.log('mobile: '  + JSON.stringify(content));
                res.render('mobile/brand', content);
            })
        })
}

module.exports = m_detail;
