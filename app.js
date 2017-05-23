/**
 * Created by admin on 16/6/28.
 */
var express = require('express')
var ejs = require('ejs')
var path = require('path')
var app = express();
var log4js = require('log4js')
var bodyParser = require('body-parser')
var router = require('./routes/route')
var configs = require('./lib/configs')
var cookieparser = require('cookie-parser')

log4js.configure({
	appenders: [
		{ type: 'console' }, //控制台输出
		{
			type: 'file', //文件输出
			filename: 'logs/access.log',
			maxLogSize: 1024,
			backups:3,
			category: 'normal'
		}
	],
	replaceConsole: true
});
var logger = log4js.getLogger('normal');
logger.setLevel('INFO');
app.use(log4js.connectLogger(logger, {level: 'auto'}));

app.use(cookieparser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use(express.static(configs.staticurl));
app.use(express.static('public'));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.use(router);
var host = '0.0.0.0',//localhost',//configs.redis.host,
	port = 8080;//configs.redis.port;
app.listen(port, host,(e)=>{
	console.log('start now!!!')
})
