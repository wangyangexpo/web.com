/**
 * Created by admin on 16/6/28.
 */
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')
var configs = require('../lib/configs')

var app = express();
app.use(cookieParser());

router.get('/',(req,res)=>{
	require('../page_build_fns/index')(req,res);
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
router.get('/app',(req,res)=>{
	require('../page_build_fns/app')(req,res);
});


router.get('/user/check',(req,res)=>{
	require('../page_build_fns/user_check')(req,res);
});
router.get('/user/login',(req,res)=>{
	var from = 'mall',
		callback = encodeURIComponent(configs.localurl+'/user/check?redirect='+configs.localurl+req.url);
	res.redirect(configs.loginurl+'?from='+from+'&callback='+req.originalUrl);
	next();
},(req,res)=>{

});
router.get('/user/register',(req,res)=>{
	require('../page_build_fns/user_check')(req,res);
});
router.get('/user/logout',(req,res)=>{
	require('../page_build_fns/user_check')(req,res);
});



// 联系
router.get('/contact',(req,res)=>{
	res.render('contact',{})
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
	console.log(req);
	var tag = req.params.tag;
	require('../page_build_fns/appinfo')(req,res,tag);
})
router.get('/pt_home',(req,res)=>{
	require('../page_build_fns/pt_home')(req,res);
})

// 编程
router.get('/page_hellobc',(req,res)=>{
	require('../page_build_fns/page_hellobc')(req,res);
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

module .exports = router;