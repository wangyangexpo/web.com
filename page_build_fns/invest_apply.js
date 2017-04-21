/**
 * Created by admin on 16/8/2.
 */
var request = require('request');

var apply = function(req, res) {
    var body = req.body;
    //处理 form提交数据
    var url = 'http://10.1.11.31:8082/base/tempalte';
    var appid = '1018040505148900352';
    var sign = 'fc5bc34b1500b00763d4dc7fe954a60cfff97ca2';
    var timestramp = Math.round(new Date().getTime()/1000);
    var requestData = {
    	"key":"chenhui@putao.com",
    	"type":"shop-join",
    	"language":"zh_CN",
    	"content": [
    		body.name,
    		body.gender == '0' ? '先生' : '女士',
    		body.mobile,
    		body.email,
    		body.place,
    		body.advice
    	]
    };
    console.log(requestData);
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "appid": appid,
            "sign": sign,
            "timestramp": timestramp
        },
        body: JSON.stringify(requestData)
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
        	console.log(body);
        }
    });
    res.redirect('/invest_invite');
}

module.exports = apply
