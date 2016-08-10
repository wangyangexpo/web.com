var lib = require('./lib');
var commeData = require('./commeData');
var m_index = function(req, res) {
	var lib_o = new lib();
	lib_o.getData({tag: 'mobile_login'}, 'mobile_login')
	.then(function() {
		return lib_o.getData({tag: 'mobile_banner'}, 'mobile_banner')
	}).catch(function(error) {
		console.log('发生错误！', + error);
		throw new Error('发生错误！', + error);
	})
	.then(function() {
		return lib_o.getData({tag: 'mobile_toy'}, 'mobile_toy', true)
	}).catch(function(error) {
		console.log('发生错误！', + error);
		throw new Error('发生错误！', + error);
	})
	.then(function() {
		return lib_o.getData({tag: 'mobile_life'}, 'mobile_life', true)
	}).catch(function(error) {
		console.log('发生错误！', + error);
		throw new Error('发生错误！', + error);
	})
	.then(function() {
		return lib_o.getData({tag: 'mobile_robot'}, 'mobile_robot', true)
	}).catch(function(error) {
		console.log('发生错误！', + error);
		throw new Error('发生错误！', + error);
	})
	.then(function() {
		return lib_o.getData({tag: 'mobile_sale'}, 'mobile_sale', true)
	}).catch(function(error) {
		console.log('发生错误！', + error);
		throw new Error('发生错误！', + error);
	})
	.then(function() {
		return lib_o.getData({tag: 'mobile_all'}, 'mobile_all')
	}).catch(function(error) {
		console.log('发生错误！', + error);
		throw new Error('发生错误！', + error);
	})
	.then(function() {
		return lib_o.getData({tag: 'mobile'}, 'mobile_menu')
	}).catch(function(error) {
		console.log('发生错误！', + error);
		throw new Error('发生错误！', + error);
	})
	.then(function() {
		commeData(req,lib_o,function(count){
			var content = lib_o.getAllContent();
			content.shopcart = count;
//			console.log('mobile: '  + JSON.stringify(content));
			res.render('mobile/index', content);
		})
	})
}

module.exports = m_index;
