/**
 * Created by admin on 16/6/28.
 */
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var configs = require('../lib/configs');

router.get('/',(req,res)=>{
	var deviceAgent = req.headers['user-agent'].toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
	if(agentID){
		//指到手机、pad的网页
		//require('../page_build_fns/m_index')(req,res);
		if(req.host.indexOf('m-') != -1){
			require('../page_build_fns/m_index')(req,res);
		}else{
			res.redirect('http://m-nodejs.ptdev.cn')
		}
	}else{
		//指到pc网页
		//res.redirect('http://www-nodejs.ptdev.cn')
		if(req.host.indexOf('m-') != -1){
			res.redirect('http://www-nodejs.ptdev.cn')
		}else{
			require('../page_build_fns/index')(req,res)
		}
	}
	//require('../page_build_fns/m_index')(req,res);
	//if(!req.cookies){
	//	req.redirect('https://account.ptdev.cn/login?from=mall&callbacl=')
	//}
});
router.get('/theatre',(req,res)=>{
	require('../page_build_fns/theatre')(req,res);
});
router.get('/brand',(req,res)=>{
	require('../page_build_fns/brand')(req,res);
});
router.get('/brandList',(req,res)=>{
	require('../page_build_fns/brandList')(req,res);
});
router.get('/brandListMore',(req,res)=>{
	require('../page_build_fns/brandListMore')(req,res);
});
router.get('/app',(req,res)=>{
	require('../page_build_fns/app')(req,res);
});

router.get('/user/check',(req,res)=>{
	require('../page_build_fns/user_check')(req,res);
});
router.get('/user/login',(req,res)=>{
	//var url = global.currenturl;
	var url = 'http://m.putao.com';
	var from = 'mall',
		//callback = encodeURIComponent(configs.localurl+'/user/check?redirect='+configs.localurl+url);
		callback = encodeURIComponent(url+'/user/check?redirect='+url);
	res.redirect(configs.loginurl+'?from='+from+'&callback='+callback);
});
router.get('/user/logout',(req,res)=>{
	require('../page_build_fns/user_logout')(req,res);
});


// 品牌动态详情
router.get('/brandShow',(req,res)=>{
	require('../page_build_fns/brandShow')(req,res);
});

// 联系
router.get('/contact',(req,res)=>{
	res.render('contact',{})
});

// 关于我们
router.get('/about',(req,res)=>{
	require('../page_build_fns/about')(req,res);
});

// 全国门店
router.get('/nationalStores',(req,res)=>{
	res.render('nationalStores',{})
});

// 合作
router.get('/cooperation',(req,res)=>{
	res.render('cooperation',{})
});

// 加入我们
router.get('/join',(req,res)=>{
	res.render('join',{})
});

// 品牌招商
router.get('/attractInvestment',(req,res)=>{
	res.render('attractInvestment',{})
});

// help
router.get('/help',(req,res)=>{
	require('../page_build_fns/help')(req,res);
});

router.get('/appinfo/:tag',(req,res)=>{
	var tag = req.params.tag;
	require('../page_build_fns/appinfo')(req,res,tag);
})
router.get('/pt_home',(req,res)=>{
	require('../page_build_fns/pt_home')(req,res);
})

// 编程
router.get('/page_hellobc',(req,res)=>{
	res.render('hellobc',{})
})
// 魔方
router.get('/page_mofang',(req,res)=>{
	res.render('mofang',{})
})
// 涂涂世界
router.get('/page_tutushijie',(req,res)=>{
	res.render('tutushijie',{})
})
// 麦斯丝
router.get('/page_maisisi',(req,res)=>{
	res.render('maisisi',{})
})
// 淘淘向右走
router.get('/page_taotaoxiangyouzou',(req,res)=>{
	res.render('taotaoxiangyouzou',{})
})
// 奇妙发现
router.get('/page_qimiaofaxian',(req,res)=>{
	res.render('qimiaofaxian',{})
})
// 奇妙电路
router.get('/page_qimiaodianlu',(req,res)=>{
	res.render('qimiaodianlu',{})
})
// 哈泥海洋
router.get('/page_hanihaiyang',(req,res)=>{
	res.render('hanihaiyang',{})
})
// 底座
router.get('/page_dizuo',(req,res)=>{
	res.render('dizuo',{})
})
// 手机端
router.get('/m_index',(req,res)=>{
	require('../page_build_fns/m_index')(req,res);
});
// 手机端详情
router.get('/page/:name', (req, res) => {
	require('../page_build_fns/m_detail')(req,res);
});
// 手机端注册
router.get('/user/register',(req,res)=>{
	//var url = global.currenturl;
	var url = 'http://m.putao.com';
	var from = 'mall',
		//callback = encodeURIComponent(configs.localurl+'/user/check?redirect='+configs.localurl+url);
		callback = encodeURIComponent(url+'/user/check?redirect='+url);
	res.redirect(configs.loginurl+'?from='+from+'&callback='+callback);
});

module .exports = router;