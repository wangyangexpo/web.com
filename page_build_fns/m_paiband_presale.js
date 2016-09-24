/**
 * Created by admin on 16/9/24.
 */
var lib = require('./lib');
var commeData = require('./commeData');
var m_paiband_presale = function(req, res) {
	var lib_o = new lib();
	var link = req.params.name;
	lib_o.getData({tag: 'mobile_login'}, 'mobile_login')
		.then(function() {
			return lib_o.getData({tag: 'mobile'}, 'mobile_menu')
		}).catch(function(error) {
			console.log('发生错误！', + error);
			throw new Error('发生错误！', + error);
		})
		.then(function() {
			commeData(req,res,lib_o,function(count){
				var content = lib_o.getAllContent();
				content.shopcart = count;
				content.detail = './' + link;
				res.render('mobile/paiband_presale', content);
			})
		})
}

module.exports = m_paiband_presale;