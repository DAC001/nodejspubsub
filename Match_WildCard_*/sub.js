// PUBSUB :Subscribe to wildCard pattern : Any Channel


var redis = require('redis');
var sub = redis.createClient();

sub.on('pmessage', function (pattern,channel, message) {
    
	console.log(message);
});

var pattern = '*';
sub.psubscribe(pattern);
