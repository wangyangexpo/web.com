/**
 * Created by admin on 16/6/28.
 */
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')
var configs = require('../lib/configs')

var app = express();
app.use(cookieParser());

router.get('/', (req, res) => {
	var deviceAgent = req.headers['user-agent'].toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
	if(agentID) {
		//指到手机、pad的网页
		//require('../page_build_fns/m_index')(req,res);
		if(req.hostname.indexOf(configs.m_host_key) != -1) {
			require('../page_build_fns/m_index')(req, res);
		} else {
			res.redirect(configs.m_host)
		}
	} else {
		//指到pc网页
		//res.redirect('http://www-nodejs.ptdev.cn')
		if(req.hostname.indexOf(configs.m_host_key) != -1) {
			res.redirect(configs.localurl)
		} else {
			require('../page_build_fns/new_index')(req, res)
		}
	}
});

router.get('/new_index', (req, res) => {
	require('../page_build_fns/new_index')(req, res);
});

router.get('/theatre', (req, res) => {
	require('../page_build_fns/theatre')(req, res);
});

// znyaiw 20160913  统一PC和m站路径
router.get('/brand', (req, res, next) => {
		var deviceAgent = req.headers['user-agent'].toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
		if(!agentID) {
			require('../page_build_fns/brand')(req, res);
		}else{
			require('../page_build_fns/m_brand')(req, res);
		}
	})
	// router.get('/brand',(req,res)=>{
	//     require('../page_build_fns/brand')(req,res);
	// });

router.get('/brandList', (req, res) => {
	require('../page_build_fns/brandList')(req, res);
});
router.get('/brandListMore', (req, res) => {
	require('../page_build_fns/brandListMore')(req, res);
});
router.get('/app', (req, res) => {
	require('../page_build_fns/app')(req, res);
});

router.get('/logg_check', (req, res) => {
	require('../page_build_fns/user_check')(req, res);
});
router.get('/user/login', (req, res) => {
	var url = '';
	if(req.hostname.indexOf(configs.m_host_key) != -1) {
		//url = 'http://m.putao.com';
		url = configs.m_host;
	} else {
		//url = 'http://putao.com/';
		url = configs.localurl;
		//url = req.originalUrl;
	}
	//var url = 'http://m.putao.com';
	var from = 'mall',
		//callback = encodeURIComponent(configs.localurl+'/user/check?redirect='+configs.localurl+url);
		callback = encodeURIComponent(url + '/logg_check?redirect=' + url);
	//	callback = encodeURIComponent(url);
	res.redirect(configs.loginurl + '?from=' + from + '&callback=' + callback);
}, (req, res) => {

});
router.get('/user/logout', (req, res) => {
	require('../page_build_fns/user_logout')(req, res);
});

// 品牌动态详情
router.get('/brandShow', (req, res) => {
	var deviceAgent = req.headers['user-agent'].toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
	if(agentID) {
		require('../page_build_fns/m_show')(req, res);
	}else{
		require('../page_build_fns/brandShow')(req, res);
	}
});

// 联系
router.get('/contact', (req, res) => {
	require('../page_build_fns/contact')(req, res);
});

// 关于我们
router.get('/about', (req, res) => {
	require('../page_build_fns/about')(req, res);
});

// 全国门店
router.get('/nationalStores', (req, res) => {
	require('../page_build_fns/nationalStores')(req, res);
});

// 合作
router.get('/cooperation', (req, res) => {
	require('../page_build_fns/cooperation')(req, res);
});

// 加入我们
router.get('/join', (req, res) => {
	require('../page_build_fns/join')(req, res);
});

// 品牌招商
router.get('/attractInvestment', (req, res) => {
	require('../page_build_fns/attractInvestment')(req, res);
});

// help
router.get('/help', (req, res) => {
	require('../page_build_fns/help')(req, res);
});

router.get('/appinfo', (req, res) => {
	require('../page_build_fns/appinfo')(req, res);
})
router.get('/pt_home', (req, res) => {
	require('../page_build_fns/pt_home')(req, res);
})

// 编程
router.get('/page/hellobiancheng', (req, res, next) => {

		var deviceAgent = req.headers['user-agent'].toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
		if(!agentID) {
			require('../page_build_fns/page_hellobc')(req, res);
		}
		next();
	})
	// 魔方
router.get('/page/mofang', (req, res, next) => {
		var deviceAgent = req.headers['user-agent'].toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
		if(!agentID) {
			require('../page_build_fns/page_mofang')(req, res);
		}
		next();
	})
	// 涂涂世界
router.get('/page/tutushijie', (req, res, next) => {
		var deviceAgent = req.headers['user-agent'].toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
		if(!agentID) {
			require('../page_build_fns/page_tutushijie')(req, res);
		}
		next();
	})
	// 麦斯丝
router.get('/page/maisisi', (req, res, next) => {
		var deviceAgent = req.headers['user-agent'].toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
		if(!agentID) {
			require('../page_build_fns/page_maisisi')(req, res);
		}
		next();
	})
	// 淘淘向右走
router.get('/page/taotaoxiangyouzou', (req, res, next) => {
		var deviceAgent = req.headers['user-agent'].toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
		if(!agentID) {
			require('../page_build_fns/page_taotaoxiangyouzou')(req, res);
		}
		next();
	})
	// 奇妙发现
router.get('/page_qimiaofaxian', (req, res, next) => {
		var deviceAgent = req.headers['user-agent'].toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
		if(!agentID) {
			require('../page_build_fns/page_qimiaofaxian')(req, res);
		}
		next();
	})
	// 奇妙电路
router.get('/page/qimiaodianlu', (req, res, next) => {
		var deviceAgent = req.headers['user-agent'].toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
		if(!agentID) {
			require('../page_build_fns/page_qimiaodianlu')(req, res);
		}
		next();
	})
	// 哈泥海洋
router.get('/page/hanihaiyang', (req, res, next) => {
		var deviceAgent = req.headers['user-agent'].toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
		if(!agentID) {
			require('../page_build_fns/page_hanihaiyang')(req, res);
		}
		next();
	})
	// 底座
router.get('/page/tansuohaofeichuan', (req, res, next) => {
	var deviceAgent = req.headers['user-agent'].toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
	if(!agentID) {
		require('../page_build_fns/dizuo')(req, res);
	}
	next();
})

// 手机端
router.get('/m_index', (req, res) => {
	require('../page_build_fns/m_index')(req, res);
});
// 手机端详情
router.get('/page/:name', (req, res) => {
	var deviceAgent = req.headers['user-agent'].toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
	if(agentID) {
		require('../page_build_fns/m_detail')(req, res);
	}
});

// 手机端品牌动态
router.get('/m_brand', (req, res) => {
	require('../page_build_fns/m_brand')(req, res);
});


// 手机端品牌动态分类
router.get('/brand/:category', (req, res) => {
	require('../page_build_fns/m_category')(req, res);
});
// 手机端品牌动态分类分页
router.get('/m_more', (req, res) => {
	require('../page_build_fns/m_more')(req, res);
});
// 手机端品牌动态详情
router.get('/m_brand/show/:tag', (req, res) => {
    require('../page_build_fns/m_show')(req,res);
});
// router.get('/brand/:category/:tag', (req, res) => {
//     require('../page_build_fns/m_show')(req,res);
// });
//router.get('/brandShow', (req, res) => {
//	require('../page_build_fns/m_show')(req, res);
//});
// 手机端注册
router.get('/user/register', (req, res) => {
	//var url = global.currenturl;
	var url = '';
	if(req.hostname.indexOf(configs.m_host_key) != -1) {
		//url = 'http://m.putao.com';
		url = configs.m_host;
	} else {
		//url = 'http://putao.com/';
		url = configs.localurl;
	}
	//var url = 'http://m.putao.com';
	var from = 'mall',
		//callback = encodeURIComponent(configs.localurl+'/user/check?redirect='+configs.localurl+url);
		callback = encodeURIComponent(url + '/logg_check?redirect=' + url);
	res.redirect(configs.regurl + '?from=' + from + '&callback=' + callback);
});

// 嘉年华
router.get('/page_carnival', (req, res) => {
	require('../page_build_fns/carnival')(req, res);
})

// 隐私政策
router.get('/system/cms/show', (req, res) => {
	res.redirect('/help?parent_tag=cms_service&id=653')
})

router.get('/privacy', (req, res) => {
	res.redirect('/help?parent_tag=cms_service&id=653')
})

router.get('/toys/:id', (req, res) => {
	res.redirect('http://store.putao.com/toys/' + req.params.id)
})

router.get('/ad/:id', (req, res) => {
	res.redirect('http://store.putao.com/ad/' + req.params.id)
})

// 预售
router.get('/paibot_presale',(req,res)=>{
	var deviceAgent = req.headers['user-agent'].toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
	if(agentID) {
		require('../page_build_fns/m_paibot_presale')(req,res);
		//res.render('mobile/paibot_presale');
	}else{
		require('../page_build_fns/paibot_presale')(req,res);
//		res.render('paibot_presale');
	};
});
router.get('/paiband_presale',(req,res)=>{
	var deviceAgent = req.headers['user-agent'].toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
	if(agentID) {
		require('../page_build_fns/m_paiband_presale')(req,res);
	}else{
		require('../page_build_fns/paiband_presale')(req,res);
		//res.render('paiband_presale');
	};
});

module.exports = router;