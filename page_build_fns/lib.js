/**
 * Created by admin on 16/7/22.
 */
var getContent = require('../lib/getContent');
var redis_cache = require('../lib/cache');
var cache = new redis_cache();

var lib_fn = function(){
	this.content = {};
	this.childrenMap = {};
	this.content_data = null;
}

lib_fn.prototype = {
	getData:function(data,key,isChild,api){
		var _this = this;
		return new Promise(function(resolve,reject){
			var cacheNameKey = 'cache_'+data.tag;
			cache.get(cacheNameKey,function(err,cacheName){
				if(!err&&cacheName){
					data.cache = cacheName;
				};
				_this.getPageData(data,key,isChild,cacheNameKey,resolve,reject,api);
			});
		})
	},
	getPageData:function(data,key,isChild,cacheNameKey,resolve,reject,api){
		var _this = this;
		//console.log('ddddaaata:'+data);
		getContent(data,function(text){
			var result = JSON.parse(text);
			if(result.code == 200){
				var updateCache = result.updateCache,
					cacheName = result.cache?result.cache:cacheNameKey; //注意下,是否后续有问题
				//console.log('cacheName: '+cacheName);
				console.log('updateCache: '+ updateCache);
				if(key == 'app_app'){
					console.log(result.data);
				}
				if(updateCache){
					cache.set(cacheNameKey,cacheName,function(){
						var resultData = result.data;
						//console.log('resultdata '+resultData)
						//if (resultData || (resultData.length && resultData.length > 0)){
						cache.set(cacheName,JSON.stringify(resultData),function(){
							console.log('get from service!');
							_this.content_data = result.data;
							_this.content[key] = _this.content_data;
							_this.mixChildData(_this.content_data,key,isChild,_this);
							resolve();
						});
						//};
					});

				}else{
					cache.get(cacheName,function(err,cacheData){
						console.log('get from cache!');
						if(!err&&cacheData){
							console.log(cacheData);
							var content_data = JSON.parse(cacheData);
							_this.content[key] = content_data;
							_this.mixChildData(content_data,key,isChild,_this);
							resolve();
						}else{
							var result = {
								code:10000,
								msg:'no cache & service data'
							}
							reject(result.code)
						}

					});
				}
			}else{
				reject(result.code)
			}
		},api)
	},
	mixChildData:function(content_data,key,isChild,proxy){
		if (isChild) {
			if (content_data[0]) {
				var ptag = content_data[0].parent_tag;
				proxy.childrenMap[ptag] = content_data;
			}
		} else {
			content_data.forEach(function (item) {
				var tag = item.tag;
				item['children'] = proxy.childrenMap[tag];
			});
			proxy.content[key] = content_data;
		}
	},
	getAllContent:function(){
		if(!this.content.banner || this.content.banner.length === 0){
			this.content.banner = [{}];
		}
		this.content.title = '葡萄科技官网 - 科技陪伴成长';
		return this.content;
	}
}

module .exports = lib_fn;