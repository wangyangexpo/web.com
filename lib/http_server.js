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

	var post_option = {method:'post',port:'443'};
	var post_data = qs.stringify(params);
	post_option.headers = {
		'Content-Type' : 'application/x-www-form-urlencoded',
		'Content-Length' : post_data.length,
		Cookie : cookie                        };
	var post_req = https.request(post_option, function(res) {

		res.on('data', function (data) {
			success(data);
		});
	})
	post_req.write(post_data);
	post_req.end();
}

module .exports = find;