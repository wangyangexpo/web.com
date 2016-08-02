/**
 * Created by admin on 16/7/5.
 */
var configs = {
	redis:{
		port:'6379',
		host:'10.1.11.31',
		expire:3600,
		db:8
	},
	baseurl:'http://api-offical-site-manage.ptdev.cn',//开发环境接口
	storeurl:'http://web-store-test.ptdev.cn',//开发环境商城的接口域名
	loginurl:'http://account.ptdev.cn/login',//开发环境通行证登录页
	staticurl:'http://ptcom_v3.fe.ptdev.cn/store/pc',//测试环境静态资源路径
	/*
	 * //开发
	 * */
	fileurl:'http://tmp.file.dev.putaocloud.com/file/',
	/*
	* //174
	* */
	//fileurl:'http://putaodev.fe.ptdev.cn/front_v3/'
	/*
	 * //正式环境
	 * */
}

module .exports = configs;