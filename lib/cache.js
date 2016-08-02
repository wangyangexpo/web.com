var redis = require('redis');
var configs = require('./configs');

////////////////////////////////////
// Cache
////////////////////////////////////


function Cache() {
	this._redis = this._redis ? this._redis : redis.createClient(configs.redis.port, configs.redis.host,{db:configs.redis.db});
	this._redis.on('ready',function(err){
		console.log('redis is ready!');
	});
	this._redis.on("error", function(error) {
		console.log('redis is error: '+error);
	});
}

Cache.prototype.keys = function (k,fn) {
	this._redis.keys(k, fn);
}

Cache.prototype.get = function (k, fn) {
	this._redis.get(k, fn);
};

Cache.prototype.set = function (k, v, fn) {
	this._redis.set(k, v, fn);
};

Cache.prototype.expire = function (k, interval) {
	this._redis.expire(k, interval);
};

Cache.prototype.del = function (k, fn) {
	this._redis.del(k, fn);
};

Cache.prototype.hset = function (k, f, v, fn) {
	if (this._redis.hset === undefined) {
		fn(Error(), null);
	} else {
		this._redis.hset(k, f, v, fn);
	}
};

Cache.prototype.hget = function (k, f, fn) {
	if (this._redis.hget === undefined) {
		fn(Error(), null);
	} else {
		this._redis.hget(k, f, fn);
	}
};

Cache.prototype.multiDel = function (k, fn) {
	var multi = this._redis.multi();
	_.each(k, function (row) {
		multi.del(row);
	});
	multi.exec();
};

module.exports = Cache;