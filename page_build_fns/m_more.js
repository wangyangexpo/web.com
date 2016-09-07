/**
 * Name:
 * Author: znyaiw
 * Date: 16/9/6
 * Note:
 * Parameters:
 **/
var lib = require('./lib');
var config = require('./../lib/configs');
var commeData = require('./commeData');
var m_more = function (req, res) {
    var _tag = req.query.tag;
    var s_index = req.query.s_index;
    var len = req.query.len;
    var lib_o = new lib();
    lib_o.getData({tag: _tag}, 'list_data')
        .then(function () {
            commeData(req,res,lib_o, function(count) {
                var content = lib_o.getAllContent();
                content.list_data = content.list_data || [];
                res.json({
                    http_code: 200,
                    base_url: config.fileurl,
                    data: content.list_data.slice(s_index, len)
                });
            })
        })
}
module.exports = m_more;