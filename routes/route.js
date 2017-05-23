/**
 * Created by admin on 17/5/23.
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
		if(req.hostname.indexOf(configs.m_host_key) != -1) {
			require('../page_build_fns/m_index')(req, res);
		} else {
			res.redirect(configs.m_host)
		}
	} else {
		//指到pc网页
		if(req.hostname.indexOf(configs.m_host_key) != -1) {
			res.redirect(configs.localurl)
		} else {
			require('../page_build_fns/index')(req, res)
		}
	}
});

module.exports = router;
