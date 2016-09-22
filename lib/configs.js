/**
 * Created by admin on 16/7/5.
 */
var configs = {
	redis:{
		port:'6379',
		host:'mysql1.putao.io',
		expire:3600,
		db:8
	},
	/*测试*/
	baseurl:'http://api-offical-site-manage-test.ptdev.cn',//开发环境接口
	storeurl:'http://web-store-test.ptdev.cn',//开发环境商城的接口域名
	loginurl:'http://account.ptdev.cn/login',//开发环境通行证登录页
	regurl:'http://account.ptdev.cn/register',//开发环境通行证注册页
	staticurl:'http://ptcom_v3.fe.ptdev.cn/store/pc',//测试环境静态资源路径
	localurl:'http://www-nodejs.ptdev.cn', //开发环境网站域名
	passport_domain:'.ptdev.cn', //开发环境通行证域名
	staticurl_m:'http://ptcom_v3.fe.ptdev.cn/store/mobile',
   	devurl_m: 'http://m.web-store-dev.ptdev.cn',	// 开发环境 商城域名
	///*
	// * //开发&测试环境图片路径
	// * */
	fileurl:'http://tmp.file.dev.putaocloud.com/file/',
	m_host_key:'m-',
	m_host:'http://m-nodejs.ptdev.cn',
	
	/*
	 * //正式环境
	 * */
//	baseurl:'http://api-www.putao.com',//开发环境接口
//	storeurl:'http://store.putao.com',//开发环境商城的接口域名
//	loginurl:'https://account.putao.com/login',//开发环境通行证登录页
//	regurl:'https://account.putao.com/register', //正式环境通行证注册页
//	staticurl:'http://static.putaocdn.com/site/pc',//测试环境静态资源路径
//	 devurl_m: 'http://m-store.putao.com',	// 生产环境
//	devurl_m: 'http://m.web-store-dev.ptdev.cn',	// 测试环境dev
	// devurl_m: 'http://m.web-store-test.ptdev.cn/',	// 测试环境test
//	localurl:'http://www.putao.com', //开发环境网站域名
//	passport_domain:'.putao.com', //开发环境通行证域名
//	fileurl:'http://mall.file.putaocdn.com/file/',
//	staticurl_m:'http://static.putaocdn.com/site/mobile',
//	m_host_key:'m.',
//	m_host:'http://m.putao.com',
}

module .exports = configs;