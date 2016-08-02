/**
 * Created by admin on 16/6/27.
 */
var http = require('http')
var express = require('express')
var qs = require('querystring')
var configs = require('./configs')

/*
* 调用find,type为请求方式,path为host之后的接口路径(前面带/)
* ajax传递数据,多字段,统一放入对象中,JSON序列化之后,以data为字段传递
* data:{data:json}
* */

exports.find = function(req,type,params,host,path,success){
	var reqJosnData = qs.stringify(params)

	//var postheaders = req.headers;
	//var postheaders = {
	//	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	//};
	var options = {
		host: configs.baseurl,
		port: 80,
		path: path,
		method: type
	};

	if(type.toLocaleUpperCase()== 'POST'){
		options.header = postheaders;
	}
	console.log(options);
	req = http.request(options, function(res) {
		res.setEncoding('utf8');
		var body = "";
		res.on('data', function(data) {
			body += data;
		});
		res.on('end', function() {

			var json = JSON.parse(body);
			success(json);
		});
	});

	req.on('error', function(e){
		console.log("auth_user error: " + e.message);
	});
	if(type.toLocaleUpperCase()== 'POST'){
		req.write(reqJosnData);
	}

	req.end();
}