/**
 * Created by admin on 16/6/27.
 */
var https = require('https')
//var express = require('express')
var qs = require('querystring')
//var configs = require('./configs')

/*
* 调用find,type为请求方式,path为host之后的接口路径(前面带/)
* ajax传递数据,多字段,统一放入对象中,JSON序列化之后,以data为字段传递
* data:{data:json}
* */

var find = function(params,success){

	var post_option = {method:'post',host:'account.putao.com',path:'/api/user/checktoken'};
	var post_data = qs.stringify(params);
	post_option.headers = {
		'Content-Type' : 'application/x-www-form-urlencoded',
		'Content-Length' : post_data.length
	};
	var post_req = https.request(post_option, function(res) {
		var body = '';
		res.on('data', function (data) {
			body += data;
		});
		res.on('end',function(){
			var json = body;
			success(json)
		})
	})
	post_req.on('error',function(e){
		console.log('https post error:' + e.message);
	})
	post_req.write(post_data);
	post_req.end();
}

module .exports = find;